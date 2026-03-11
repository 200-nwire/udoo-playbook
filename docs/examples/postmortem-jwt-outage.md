# Post-Mortem — Production API Outage (JWT Policy Mismatch)

:::info Incident Metadata
| Field | Value |
|-------|-------|
| **Incident ID** | INC-2025-137 / OPS-991 |
| **Date** | 2025-07-24 |
| **Duration** | 44 minutes (09:42–10:26 UTC) |
| **Severity** | P0 — Critical |
| **Impact** | 100% of API calls returned 403 Forbidden |
| **Data Loss** | None |
| **Post-Mortem Author** | @platform-lead |
| **Review Date** | 2025-07-28 (post-mortem review meeting) |
:::

---

## Summary

On July 24, 2025, a policy change deployed to the Azure API Management (APIM) gateway caused **100% of API requests to fail with HTTP 403 Forbidden** for 44 minutes. The root cause was a JWT validation policy that required an `aud` (audience) claim not present in tokens issued by our Auth0 tenant. The policy was deployed to all environments simultaneously without verifying that existing tokens conformed to the new requirement.

No data was lost. No customer data was exposed. But for 44 minutes, every API consumer — web app, mobile app, third-party integrations — was completely locked out of the platform.

:::warning This is a blameless post-mortem
The purpose of this document is to understand what happened and prevent it from happening again — not to assign blame. The engineer who deployed the policy change acted in good faith, followed the process as it existed, and flagged the issue within minutes. The process failed, not the person.
:::

---

## Impact Assessment

| Dimension | Detail |
|-----------|--------|
| **Users affected** | All authenticated users (~12,400 active at time of incident) |
| **API calls failed** | ~184,000 requests returned 403 during the window |
| **Revenue impact** | $0 direct (no transactions lost), estimated $3,200 in support costs |
| **Support volume** | 147 tickets opened in 44 minutes; 23 phone calls |
| **SLA breach** | Yes — monthly uptime dropped below 99.9% threshold for 2 enterprise accounts |
| **Reputational** | 3 enterprise customers requested formal incident report |
| **Data integrity** | No data loss or corruption; all failed requests were clean 403 rejections |

---

## Timeline

| Time (UTC) | Event | Actor |
|------------|-------|-------|
| **09:15** | Security team requests APIM policy update to validate `aud` claim in JWT tokens, citing security audit recommendation SA-2025-041 | @security-lead |
| **09:28** | Platform engineer creates APIM policy XML with `<required-claims>` block including `aud` validation | @platform-eng |
| **09:35** | Policy passes XML schema validation in local tooling | @platform-eng |
| **09:38** | Policy deployed via CI/CD pipeline to **all environments** (dev, staging, production) simultaneously | CI/CD (automated) |
| **09:42** | First 403 errors appear in production monitoring (Grafana alert fires) | Automated |
| **09:43** | PagerDuty alert triggers for API error rate > 5% | Automated |
| **09:44** | On-call engineer acknowledges alert, begins investigation | @oncall-eng |
| **09:47** | On-call confirms 100% of API calls returning 403; begins checking APIM logs | @oncall-eng |
| **09:50** | On-call identifies APIM policy deployment at 09:38 as probable cause | @oncall-eng |
| **09:52** | On-call pages platform engineer who made the deployment | @oncall-eng |
| **09:54** | Platform engineer confirms the policy change; team decides to revert | @platform-eng |
| **09:56** | Revert initiated — previous APIM policy version redeployed | @platform-eng |
| **10:01** | Revert deployment completes; APIM begins accepting requests | CI/CD |
| **10:03** | Error rate drops below 1%; monitoring confirms recovery | Automated |
| **10:08** | On-call confirms all API endpoints returning 200; mobile and web apps functional | @oncall-eng |
| **10:15** | Status page updated: "Incident resolved — API access restored" | @oncall-eng |
| **10:26** | Post-incident verification complete; no data loss confirmed; incident formally closed | @platform-lead |
| **10:45** | Auth0 rule updated to include `aud` claim in all newly issued tokens | @platform-eng |
| **11:30** | Updated APIM policy (with `aud` validation) deployed to staging only | @platform-eng |
| **12:00** | Staging validation passes with new tokens; production deployment scheduled for next maintenance window | @platform-lead |

---

## Root Cause Analysis

### The Immediate Cause

The APIM policy required the JWT `aud` (audience) claim to match a specific value:

```xml
<validate-jwt header-name="Authorization" require-scheme="Bearer">
  <issuer-signing-keys>
    <key>{{signing-key}}</key>
  </issuer-signing-keys>
  <required-claims>
    <claim name="aud" match="all">
      <value>https://api.platform.200apps.com</value>
    </claim>
  </required-claims>
</validate-jwt>
```

However, the Auth0 tenant was **not configured** to include the `aud` claim in issued tokens. Existing tokens (and all newly issued tokens) did not contain this claim, causing APIM to reject every request.

### The Systemic Cause

Three process failures compounded:

1. **No environment gating.** The CI/CD pipeline deployed the APIM policy to all environments simultaneously. There was no stage gate requiring staging validation before production deployment.

2. **No token compatibility check.** The policy was validated against its XML schema — "is the XML well-formed?" — but not against actual tokens — "will existing tokens pass this policy?"

3. **No canary period.** The policy took effect immediately for 100% of traffic. A canary deployment (1% → 10% → 100%) would have caught the failure at 1% and limited blast radius.

### 5 Whys

| # | Why? | Answer |
|---|------|--------|
| **1** | Why did 100% of API calls fail? | APIM rejected all JWTs because they lacked the `aud` claim. |
| **2** | Why did JWTs lack the `aud` claim? | Auth0 was not configured to include `aud` in token payloads. |
| **3** | Why was the APIM policy deployed without verifying token compatibility? | The validation process checked XML syntax, not runtime behaviour against real tokens. |
| **4** | Why was there no staging validation before production? | The APIM CI/CD pipeline deploys to all environments in a single step — there is no environment gating. |
| **5** | Why does the pipeline lack environment gating? | APIM policies were historically low-risk (cosmetic changes). The pipeline was never hardened for security-critical policy changes. |

---

## What Went Well

| # | Observation |
|---|-------------|
| 1 | **Detection was fast.** The Grafana alert fired within 4 minutes of the first failure. PagerDuty escalation followed 1 minute later. Total time from failure to human awareness: 5 minutes. |
| 2 | **Root cause identification was fast.** The on-call engineer correlated the error spike with the APIM deployment within 8 minutes — no rabbit holes, no red herrings. |
| 3 | **Revert was clean.** The previous APIM policy was available in version control. The revert deployment completed in 5 minutes with no side effects. |

---

## What Went Wrong

| # | Observation |
|---|-------------|
| 1 | **All environments were affected simultaneously.** A policy intended for gradual rollout was deployed everywhere at once. Production should never be the first place a security policy is tested with real traffic. |
| 2 | **No pre-deployment token validation.** The pipeline validated the policy's XML structure but never tested it against an actual JWT. A simple `curl` with a valid token in the CI step would have caught the mismatch. |
| 3 | **Communication was slow relative to impact.** The status page was updated 33 minutes after the first failure. Customers learned about the outage from their own monitoring before hearing from us. |

---

## What We'll Do Differently

| # | Change |
|---|--------|
| 1 | **Environment-gated APIM deployments.** Policy changes will deploy to dev → staging → production with a mandatory 30-minute soak in staging before production promotion. Automated smoke tests (including a real API call with a valid JWT) must pass at each stage. |
| 2 | **Token compatibility tests in CI.** The APIM deployment pipeline will include a step that validates the new policy against a current valid token. If the token fails validation, the pipeline stops. |
| 3 | **Status page auto-update on P0.** When a P0 alert fires and is acknowledged, the status page is automatically set to "Investigating" within 2 minutes. Human-authored updates follow, but the initial signal is automated. |

---

## Action Items

| # | Action | Owner | Deadline | Status |
|---|--------|-------|----------|--------|
| A1 | Add environment gating to APIM CI/CD pipeline (dev → staging → production with soak) | @platform-eng | 2025-08-07 | ✅ Complete |
| A2 | Add JWT compatibility smoke test to APIM deployment pipeline | @platform-eng | 2025-08-07 | ✅ Complete |
| A3 | Update Auth0 tenant to include `aud` claim in all token profiles | @platform-eng | 2025-07-25 | ✅ Complete |
| A4 | Re-deploy `aud` validation policy via the new gated pipeline | @platform-eng | 2025-08-14 | ✅ Complete |
| A5 | Automate status page "Investigating" state on P0 alert acknowledgement | @oncall-eng | 2025-08-21 | 🔄 In Progress |
| A6 | Notify affected enterprise customers with formal incident report | @cs-lead | 2025-07-28 | ✅ Complete |
| A7 | Review all APIM policies for similar "validate without verifying" patterns | @security-lead | 2025-08-14 | ✅ Complete (2 additional policies hardened) |
| A8 | Add APIM policy changes to the change advisory board (CAB) review process | @platform-lead | 2025-08-21 | ✅ Complete |
| A9 | Conduct team retrospective on incident communication speed | @platform-lead | 2025-08-01 | ✅ Complete |

---

## Labels

| Label | Value | Reasoning |
|-------|-------|-----------|
| `severity` | `severity/critical` | Total platform outage — no API functionality available |
| `impact` | `impact/blocker` | 100% of users affected, all API calls failed |
| **Priority** | **P0** | Critical severity + blocker impact = P0 (drop everything) |
| `type` | `type/security` | The change was a security policy enforcement; the failure was security-infrastructure related |
| `env` | `env/production` | Production was affected (staging also, but production is the impact that matters) |
| `area` | `area/auth` | Authentication/authorisation layer (APIM JWT validation) |
| `root` | `root/configuration` | The code/XML was syntactically correct; the error was a configuration mismatch between APIM policy and Auth0 tenant |

---

## Framework Analysis

### How This Incident Maps to the Framework

This incident sits squarely in the **Onstream** phase. The [Incident Management](/onstream/incident-management) process worked as designed for detection and escalation, but failed at prevention — the change that caused the incident should have been caught by deployment gates that didn't exist.

The post-mortem follows the [Post-Mortem Template](/onstream/post-mortem-template) structure:

| Section | Purpose | Present? |
|---------|---------|----------|
| Summary | What happened in one paragraph | ✅ |
| Impact | Who was affected and how | ✅ |
| Timeline | Minute-by-minute events | ✅ |
| Root Cause | Why it happened (5 Whys) | ✅ |
| What went well | Reinforce good behaviour | ✅ |
| What went wrong | Identify systemic gaps | ✅ |
| Action items | Specific, owned, deadlined | ✅ |

### What This Post-Mortem Does Well

- **Blameless tone throughout.** The document explicitly states that the engineer acted in good faith. The focus is on process gaps, not personal mistakes.
- **Timeline is precise.** Every event is timestamped to the minute with an actor identified. This enables pattern analysis: "How long from alert to acknowledgement? From acknowledgement to root cause? From root cause to resolution?"
- **Action items are specific and owned.** Compare "improve deployment process" (vague) with "Add environment gating to APIM CI/CD pipeline with 30-minute soak in staging" (actionable). Every action has an owner and a deadline.
- **The 5 Whys reaches the systemic level.** The analysis traces from "tokens lack aud claim" through "pipeline has no environment gating" to "APIM policies were historically low-risk" — which explains why the gap existed and why it wasn't caught earlier.

### The Broader Lesson

:::tip Configuration changes are code changes
This incident was caused by a 6-line XML change. It had no unit tests, no staging validation, and no canary deployment. If it had been a 6-line code change to a business-critical service, the deployment pipeline would have enforced all three.

The lesson: **any change that can cause a production outage deserves the same deployment rigour as application code.** Infrastructure-as-code isn't just about storing config in Git — it's about applying the same quality gates to config that you apply to code.
:::

---

**Next example:** [Fully Shaped Story — Journal Entry Creation →](./story-journal-entry)
