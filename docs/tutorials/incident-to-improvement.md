# From Incident to Improvement

<span class="phase-badge onstream">🟠 Onstream → 🔵 Upstream</span>

**Difficulty:** 🟡 Intermediate · **Time:** 1.5–2 hours · **Best for:** DevOps engineers, SREs, Tech Leads, and anyone involved in incident response or post-mortems

This tutorial follows a real incident — the **JWT Outage** — from the moment the alert fires through incident response, root cause analysis, blameless post-mortem, and the creation of preventive improvements that feed back into Upstream. It demonstrates the most critical connection in the UDOO framework: the **Onstream → Upstream feedback loop**.

::: info About the JWT Outage
On a Tuesday morning, a new API Management (APIM) policy was deployed to production that required JWT tokens to include an `aud` (audience) claim. The Auth0 tenant that issued tokens had never been configured to include this claim. Every authenticated API request began returning 403 Forbidden. The outage lasted 44 minutes and affected all authenticated users. No data was lost, but trust was damaged.
:::

---

## Part 1: The Alert Fires

### 09:42 UTC — Datadog Synthetic Monitoring Triggers

The first signal arrives from an automated synthetic monitor — a script that simulates a real user logging in and performing a dashboard API call every 60 seconds.

```
ALERT: [P1] Synthetic Monitor "User Dashboard Login" FAILED
──────────────────────────────────────────────────────────
Time:       09:42:17 UTC
Monitor:    syn-dashboard-login-prod
Status:     CRITICAL
Error:      Expected HTTP 200, received HTTP 403 Forbidden
Response:   { "error": "JWT validation failed: missing aud claim" }
Duration:   3 consecutive failures (3 minutes)
Affected:   Production — all authenticated endpoints
──────────────────────────────────────────────────────────
Notified:   #incidents (Slack), PagerDuty → on-call @alex.g
```

### 09:43 UTC — On-Call Acknowledges

The on-call engineer receives the PagerDuty alert on their phone. They acknowledge within 60 seconds and open the incident channel.

```
#incident-2026-02-10 (Slack)

@alex.g: ACK. Investigating. Synthetic dashboard login returning 403.
         Opening war room. @julio.m @boaz.k — joining?
```

::: tip The First 5 Minutes Matter Most
The on-call's first job is not to fix the problem. It is to **acknowledge, triage, and communicate**. A 60-second acknowledgement tells the team that someone is on it. An unacknowledged alert at 5 minutes means no one knows — and panic sets in.
:::

---

## Part 2: Incident Response — The First 10 Minutes

### The War Room Forms

Within 5 minutes, three people are in the incident Slack channel:

| Person | Role in Incident | First Action |
|--------|-----------------|--------------|
| @alex.g | Incident Commander (on-call) | Triage: what's broken, who's affected |
| @julio.m | Resolver (backend engineer) | Investigate: look at APIM logs, check recent deployments |
| @boaz.k | Communicator (engineering manager) | Stakeholder updates: notify PM and CS team |

### Triage Checklist

The Incident Commander runs through the standard triage questions:

```
INCIDENT TRIAGE — First 10 Minutes
====================================
[✅] What is the symptom?
     → All authenticated API calls returning 403 Forbidden

[✅] When did it start?
     → First synthetic failure at 09:39 UTC (3 checks failed by 09:42)

[✅] What changed recently?
     → APIM policy deployment at 09:35 UTC (found in deployment log)

[✅] What is the blast radius?
     → All authenticated users. Unauthenticated endpoints unaffected.

[✅] Is data at risk?
     → No. 403 = rejected before reaching application layer. No data
       mutation occurred.

[✅] Is there a quick rollback path?
     → Investigating: can we revert the APIM policy?
```

### 09:48 UTC — Initial Customer Impact

CS team reports first customer contacts:

```
#incident-2026-02-10

@sarah.cs: Getting calls from 3 clients who can't access their
           dashboards. Telling them we're aware and investigating.
           ETA?

@boaz.k: We're investigating a configuration issue with API
         authentication. Expect resolution within 30 minutes.
         Will update at :15 past.
```

::: warning Don't Promise Times You Can't Keep
"30 minutes" is an estimate, not a commitment. If the Incident Commander doesn't yet understand the root cause, the ETA should be "investigating — will update in 15 minutes with more information." Over-promising resolution times erodes trust faster than the incident itself.
:::

---

## Part 3: Root Cause Found

### 10:04 UTC — The "Aha" Moment

@julio.m traces the issue:

```
#incident-2026-02-10

@julio.m: Found it. APIM deployment at 09:35 added a policy
          that validates the "aud" claim in JWT tokens.

          Our Auth0 tenant does NOT include "aud" in issued tokens.
          Every token fails validation → 403.

          The policy was deployed directly to production.
          No staging deployment. No token compatibility check.

@alex.g: Confirmed. APIM deployment log shows policy
         "validate-jwt-v2" promoted from dev → prod at 09:35.
         Staging was skipped.
```

### The Root Cause Chain

```
APIM policy deployed requiring "aud" claim
        ↓
Auth0 tokens don't include "aud" claim
        ↓
APIM rejects all tokens as invalid
        ↓
All authenticated API calls return 403
        ↓
All users locked out of the application
```

### ✏️ Exercise 3.1 — Run the 5 Whys

Before reading the solution, run the 5 Whys analysis yourself. Start with: "Why did users get 403 errors?"

::: details Solution: 5 Whys Analysis
1. **Why did users get 403 errors?**
   → The APIM policy rejected their JWT tokens.

2. **Why did the APIM policy reject valid tokens?**
   → The policy required an `aud` claim that was not present in the tokens.

3. **Why wasn't the `aud` claim present in existing tokens?**
   → Auth0 was never configured to include it. The policy assumed a token format that didn't exist.

4. **Why was a policy deployed that assumed a non-existent token format?**
   → The policy was developed in a dev environment where test tokens included `aud`, but production tokens did not.

5. **Why wasn't the policy tested against production token format?**
   → There is no staging deployment step for APIM policies. The policy was promoted directly from dev to production without validation against real tokens.

**Root cause:** The APIM deployment process has no staging gate. Policy changes can reach production without being validated against production-format tokens.
:::

---

## Part 4: Mitigation

### 10:08 UTC — Revert Decision

```
#incident-2026-02-10

@alex.g: Decision: Revert the APIM policy. Remove the aud
         validation requirement. This restores the previous
         token validation behaviour.

@julio.m: Reverting now. Removing "validate-jwt-v2" policy
          from production APIM gateway.

@alex.g: Timer started. Monitoring synthetic check for recovery.
```

### 10:14 UTC — Policy Reverted

```
#incident-2026-02-10

@julio.m: Revert complete. "validate-jwt-v2" removed from
          production APIM configuration.

@alex.g: Synthetic monitor at 10:15 returned HTTP 200 ✅
         Second check at 10:16 also 200 ✅
         Declaring mitigation successful.
         Total outage duration: 09:39 → 10:15 = 36 minutes
         (users experienced ~44 minutes including propagation delay)
```

### 10:20 UTC — Customer Communication

```
#incident-2026-02-10

@boaz.k: Posting to status page:

         "RESOLVED — Authentication Issue (09:39–10:15 UTC)
          Some users experienced login failures between 09:39
          and 10:15 UTC due to a configuration change in our
          API gateway. The change has been reverted and all
          services are operating normally. No data was affected.
          We will publish a full post-mortem within 48 hours."

@sarah.cs: Calling back the 3 clients who reported. Will share
           the status page link.
```

---

## Part 5: Resolution (Not Just Mitigation)

Mitigation is "stop the bleeding." Resolution is "fix the wound."

The policy revert stopped the outage, but the team still needs the `aud` validation for security. The resolution requires two steps:

1. **Configure Auth0** to include the `aud` claim in all issued tokens
2. **Re-deploy the APIM policy** — but this time, through staging first

### The Resolution Timeline

| Step | Action | When |
|------|--------|------|
| 1 | Configure Auth0 to include `aud` claim in new tokens | Day of incident |
| 2 | Verify tokens issued after config change include `aud` | Day of incident |
| 3 | Deploy `validate-jwt-v2` policy to **staging** environment | Day + 1 |
| 4 | Run full token validation test suite against staging | Day + 1 |
| 5 | Deploy to production with monitoring | Day + 2 |
| 6 | Verify synthetic monitors pass for 24 hours | Day + 3 |

::: info Mitigation vs. Resolution
Mitigation restores service. Resolution fixes the underlying problem. Always mitigate first — a 5-minute revert that restores service is better than a 2-hour fix that users wait for. But never confuse mitigation with resolution. The revert removed aud validation entirely, which means the security improvement the policy was designed to provide is still missing. The incident is not truly resolved until the policy is deployed correctly.
:::

---

## Part 6: The Post-Mortem

### 48 Hours Later — The Blameless Review

The post-mortem meeting happens within 48 hours, while memories are fresh. All incident participants attend, plus the PM and the engineering manager.

### The Complete Post-Mortem Document

```markdown
# Post-Mortem: APIM JWT Validation Outage

**Incident ID:** INC-2026-012
**Date:** 2026-02-10
**Duration:** 44 minutes (09:39–10:23 UTC, including propagation)
**Severity:** P1
**Authors:** @alex.g, @julio.m
**Status:** Final

---

## Impact Summary
- Users affected: 100% of authenticated users (~340 active sessions)
- Revenue impact: None directly (no financial transactions blocked)
- SLA breach: Yes — availability dropped below 99.9% SLO for the day
- Customer escalations: 3 direct calls, 12 support tickets

---

## Incident Timeline

| Time (UTC) | Event |
|-----------|-------|
| 09:35 | APIM policy "validate-jwt-v2" deployed to production |
| 09:39 | First synthetic monitor failure |
| 09:42 | PagerDuty alert fired (3 consecutive failures) |
| 09:43 | On-call @alex.g acknowledged |
| 09:45 | War room formed: @alex.g, @julio.m, @boaz.k |
| 09:48 | First customer reports received by CS |
| 10:04 | Root cause identified: aud claim mismatch |
| 10:08 | Decision to revert APIM policy |
| 10:14 | Revert complete |
| 10:15 | First successful synthetic check |
| 10:20 | Status page updated — RESOLVED |
| 10:23 | All cached 403 responses expired; full recovery |

---

## Root Cause

**What failed:**
A new APIM policy requiring JWT tokens to include an `aud` (audience)
claim was deployed to production. Existing tokens issued by Auth0
did not include this claim, causing all authenticated requests to
fail with HTTP 403.

**Why it failed:**
The APIM deployment process does not include a staging validation
step. The policy was promoted directly from dev to production
without being tested against production-format tokens. The dev
environment used test tokens that included `aud`, masking the
incompatibility.

---

## Contributing Factors
1. No staging deployment gate for APIM policy changes
2. Dev environment tokens differ from production tokens
3. No automated test for JWT claim compatibility
4. Synthetic monitors detected the issue within 4 minutes,
   but a human-in-the-loop was required to acknowledge

---

## What Went Well
1. Synthetic monitoring detected the issue within 4 minutes
2. On-call acknowledged within 60 seconds
3. Root cause identified within 22 minutes
4. Revert completed within 6 minutes of decision
5. Clear, calm communication in incident channel
6. No data loss or corruption

---

## What Went Wrong
1. APIM policy change bypassed staging entirely
2. No automated test validates token compatibility
3. The 403 alert relied on synthetic monitors — no direct
   APIM error rate alert existed
4. Resolution (Auth0 config + re-deployment) took 3 additional
   days after mitigation

---

## Action Items

| # | Action | Owner | Due Date | Ticket |
|---|--------|-------|----------|--------|
| 1 | Add staging deployment gate to APIM policy changes — no policy reaches production without staging validation | @boaz.k | 2026-03-01 | OPS-123 |
| 2 | Create JWT test harness that validates token format against all active APIM policies in CI | @julio.m | 2026-03-15 | OPS-124 |
| 3 | Add Datadog alert for 403 rate > 5% from APIM in any 5-minute window | @alex.g | 2026-02-20 | OPS-125 |
| 4 | Audit all existing APIM policies for backward compatibility with current token format | @julio.m | 2026-03-22 | OPS-126 |
| 5 | Standardise dev/staging/prod token formats — dev environment Auth0 must issue tokens identical to production | @boaz.k | 2026-04-01 | OPS-127 |

---

## Learnings Feed → Upstream

The following learnings are candidates for Upstream Initiatives:
- [ ] "Infrastructure policy changes must be gated by staging validation"
- [ ] "Token contract testing should be part of CI/CD for all auth flows"
```

### ✏️ Exercise 6.1 — Spot the Blamelessness

Re-read the post-mortem above. Count how many times a person's name appears as the **cause** of a problem (not as an action item owner). The answer should be zero. If any sentence reads as blame, rewrite it.

::: details Solution
The post-mortem never says "Julio deployed without testing" or "Alex should have caught this." Every root cause statement describes a **system gap**: "The APIM deployment process does not include a staging validation step." Every action item changes a process, not a person's behaviour.

This is the blameless principle in action. The question is never "who made the mistake?" — it's "what allowed the mistake to reach production?"
:::

---

## Part 7: Action Items Become Upstream Work

Post-mortem action items don't live in a document — they live in Jira, with owners, due dates, and tracking.

### How Action Items Map to the UDOO Framework

| Action Item | UDOO Classification | Why |
|-------------|-------------------|-----|
| OPS-123: Staging gate for APIM policies | **Task** (Onstream improvement) | A specific, well-defined change with no discovery needed |
| OPS-124: JWT test harness | **Story** (Downstream) | Requires design: what to test, how to integrate with CI, which policies to cover |
| OPS-125: 403 spike alert | **Task** (Onstream improvement) | A single Datadog monitor configuration |
| OPS-126: Audit existing policies | **Spike** (Upstream) | Unknown scope — how many policies exist? What does "backward compatible" mean for each? |
| OPS-127: Standardise token formats | **Initiative** (Upstream) | Cross-system change affecting Auth0, APIM, dev environment, CI/CD — needs discovery |

::: tip Not Every Action Item Is the Same Size
Some actions are 30-minute configuration changes (OPS-125). Others are multi-week initiatives requiring their own discovery cycle (OPS-127). The post-mortem produces the action items; the team then classifies them using the UDOO hierarchy to ensure each one gets the appropriate level of planning.
:::

---

## Part 8: The Prevention Initiative

### OPS-127 Enters Upstream

The largest action item — "Standardise dev/staging/prod token formats" — is too big and too cross-cutting for a simple task. The PM opens an Upstream initiative:

```
INITIATIVE: Ensure Infrastructure Policy Changes Cannot
            Bypass Staging Validation

Problem:    APIM policy changes can be deployed directly from dev
            to production without staging validation. Dev and
            production environments use different token formats,
            masking compatibility issues.

Trigger:    INC-2026-012 (JWT Outage — 44 minutes, 100% of
            authenticated users affected)

Persona:    The engineering team (internal persona) — needs
            confidence that infrastructure changes are safe
            before they reach production.

Success:    Zero APIM-related outages in the next 12 months.
            100% of APIM policy changes pass through staging.
            Dev, staging, and prod token formats are identical.

Scope:
  IN: APIM deployment pipeline, Auth0 tenant configuration,
      CI/CD token compatibility tests, dev environment parity
  OUT: Application-level auth changes (handled by separate
       initiative), third-party integrations
```

### The Initiative's Discovery Cycle

Even though this initiative was born from an incident, it still goes through the discovery stations:

| Station | Output |
|---------|--------|
| Station 1: Vision & Context | Why this matters, who benefits, success metrics |
| Station 2: Problem Framing | Current deployment flow diagram, where the gaps are |
| Station 3: Journey Mapping | The deployment journey: dev → staging → prod, with gates at each transition |
| Station 4: Options | Option A: Manual staging check. Option B: Automated CI gate. Option C: Full environment parity. |
| Station 5: Decision | Option B chosen for APIM gates + Option C for token format parity |

The stories produced by this initiative enter Downstream like any other — through the Commitment Point, with full DoR compliance.

---

## Part 9: The Loop Closes

### 3 Months Later

A developer creates a new APIM policy that requires a `sub` claim format change. They follow the standard process:

1. Policy developed in the dev environment
2. CI pipeline runs the JWT test harness (OPS-124) — **the test fails**

```
JWT COMPATIBILITY TEST — FAILED
================================
Policy:   "validate-sub-format-v2"
Token:    production-format token from Auth0
Result:   FAIL — policy expects sub format "auth0|{id}"
          but production tokens use format "{id}"
Action:   Policy cannot be promoted to staging until
          token format is updated.
```

3. The developer updates the Auth0 configuration to match the new format
4. The test is re-run — **it passes**
5. The policy is deployed to staging
6. Staging validation runs for 24 hours with production-format tokens — **all pass**
7. The policy is deployed to production
8. No outage occurs

::: info The Same Pattern, Caught Before Production
The JWT test harness (born from OPS-124) caught the exact same type of incompatibility that caused the original outage. The staging gate (born from OPS-123) ensured the policy couldn't reach production without validation. The incident that cost 44 minutes of downtime became the catalyst for a permanent safety net.

This is what the Onstream → Upstream feedback loop looks like when it works. An incident is not a failure — it is an input. The framework's job is to ensure that every incident produces improvements that prevent recurrence.
:::

---

## The Complete Improvement Chain

```
INCIDENT                 POST-MORTEM              ACTION ITEMS
──────────               ───────────              ────────────
09:42 Alert fires  →  Blameless review     →  OPS-123: Staging gate
                       within 48 hours         OPS-124: JWT test harness
09:43 Acknowledge                              OPS-125: 403 alert
10:04 Root cause                               OPS-126: Policy audit
10:14 Mitigation                               OPS-127: Token parity
10:23 Full recovery

        │                                           │
        │                                           ▼
        │                                    UPSTREAM INITIATIVE
        │                                    ───────────────────
        │                                    "Infrastructure Policy
        │                                     Staging Validation"
        │                                           │
        │                                           ▼
        │                                    DOWNSTREAM DELIVERY
        │                                    ───────────────────
        │                                    Build CI gates,
        │                                    JWT test harness,
        │                                    environment parity
        │                                           │
        │                                           ▼
        │                                    ONSTREAM OPERATION
        │                                    ──────────────────
        │                                    New safety nets
        │                                    catch the next
        │                                    incompatibility
        │                                           │
        └───────────────────────────────────────────┘
                    The loop closes.
                    The same type of incident
                    is caught in CI, not in
                    production.
```

---

## What You Should Take Away

### 1. Incidents Are Inputs, Not Failures

Every incident is data. The framework's job is to transform that data into improvements that make the next incident less likely, less severe, or faster to resolve.

### 2. Blameless Post-Mortems Produce Better Outcomes

When people fear blame, they hide mistakes. When mistakes are hidden, they recur. Blameless post-mortems make it safe to be honest about what happened — and honesty is the prerequisite for improvement.

### 3. Action Items Need the Right Classification

A 30-minute config change and a multi-week infrastructure initiative require very different amounts of planning. The UDOO hierarchy (Task → Story → Epic → Initiative) ensures each action item gets the appropriate level of attention.

### 4. The Feedback Loop Is the Framework's Immune System

The arrow from Onstream back to Upstream is the most important connection in the entire UDOO framework. Without it, the team makes the same mistakes repeatedly. With it, every incident strengthens the system.

::: tip The Ultimate Metric
Track this number: **How many incidents of a given type occur after the post-mortem action items are completed?** The answer should be zero. If the same type of incident recurs after action items are "done," the action items didn't fix the root cause — they fixed the symptom. Go deeper.
:::

---

## ✏️ Final Exercise: Apply This to Your Team

Think of the last incident your team experienced. Answer these questions:

1. **Was a blameless post-mortem conducted within 48 hours?** If not, why?
2. **Were action items created with owners, due dates, and Jira tickets?** If not, where did they go?
3. **Were action items classified by the UDOO hierarchy** (Task, Story, Epic, Initiative)? Did larger items get their own discovery cycle?
4. **Were action items tracked to completion?** If not, what mechanism was missing?
5. **Has the same type of incident recurred since?** If so, what did the action items miss?

If your answers reveal gaps, you've just identified where your Onstream → Upstream feedback loop is broken. Fixing that loop is the single highest-leverage improvement most teams can make.

---

**Back to:** [Tutorial Hub →](./index)
