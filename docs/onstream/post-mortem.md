# Post-Mortem Guide

A post-mortem is not a blame exercise. It is a learning exercise. Its only goal is to produce **actions that prevent recurrence** — not to identify who made a mistake.

**Required for:** All P0 incidents (within 48h), all P1 incidents (within 5 business days).

## The Blameless Principle

Language matters. In a post-mortem:

| ❌ Say this | ✅ Not this |
|------------|-----------|
| "The deploy was not validated in staging" | "Alex didn't test it properly" |
| "The alert threshold was not configured" | "DevOps dropped the ball" |
| "The assumption that tokens included `aud` was incorrect" | "The dev team didn't know how JWTs work" |

If post-mortems produce blame, people hide incidents. Hidden incidents recur. Blameless post-mortems are not soft — they are the most rigorous analysis tool available.

## Post-Mortem Template

```markdown
# Post-Mortem: [Incident Title]

**Incident ID:** INC-[YYYY]-[NNN]
**Date:** YYYY-MM-DD
**Duration:** [X] minutes
**Severity:** P[0|1]
**Authors:** @name1, @name2
**Status:** Draft | Under Review | Final

---

## Impact Summary
- Users affected: [number or percentage]
- Revenue impact: [if applicable]
- SLA breach: [Yes/No — by how much?]
- Customer escalations: [number]

---

## Incident Timeline

| Time (UTC) | Event |
|-----------|-------|
| HH:MM | Alert fired / First user report |
| HH:MM | On-call acknowledged |
| HH:MM | [Key investigation event] |
| HH:MM | Root cause identified |
| HH:MM | Mitigation applied |
| HH:MM | Service restored |
| HH:MM | Incident closed |

---

## Root Cause

**What failed:**  
[Technical description. Factual. No blame.]

**Why it failed:**  
[The deepest "why" — not the symptom. Use the "5 Whys" technique.]

### 5 Whys Analysis

1. **Why did users get 403 errors?** → The APIM policy rejected their JWT tokens.
2. **Why did the policy reject valid tokens?** → The policy required an `aud` claim that wasn't in the tokens.
3. **Why wasn't the `aud` claim in the tokens?** → Auth0 wasn't configured to include it.
4. **Why wasn't Auth0 configured?** → The policy change was deployed without validating existing token format.
5. **Why wasn't the token format validated?** → There was no staging validation step in the APIM deployment process.

**Root cause label:** `root/configuration` + `root/testing-gap`

---

## Contributing Factors

- [Factor 1]: e.g., No staging-to-production deployment gate for APIM policies
- [Factor 2]: e.g., Missing test coverage for legacy token variants
- [Factor 3]: e.g., Synthetic monitors detected the issue but alert routing was not optimised

---

## What Went Well

- [Item]: e.g., Fast detection by synthetic monitoring
- [Item]: e.g., Rollback procedure was documented and executed quickly
- [Item]: e.g., Clear communication in the incident Slack channel

---

## What Went Wrong

- [Item]: e.g., No staging validation step before policy promotion
- [Item]: e.g., Customer discovered the issue before our alerts fired
- [Item]: e.g., RCA took longer than expected due to missing log detail

---

## Action Items

| Action | Owner | Due date | Jira ticket |
|--------|-------|----------|-------------|
| Add staging-only deployment gate to APIM policy changes | @boaz.k | YYYY-MM-DD | OPS-123 |
| Create test harness for JWT decoding in CI | @julio.m | YYYY-MM-DD | OPS-124 |
| Add real-time alert for spike in 403 from APIM | @alex.g | YYYY-MM-DD | OPS-125 |
| Audit all token-based rules for backward compatibility | @julio.m | YYYY-MM-DD | OPS-126 |

---

## Learnings Feed

The following learnings should be considered as inputs to Upstream Initiatives:

- [ ] **Reliability Initiative:** "Deployment gating for infrastructure policy changes"
- [ ] **Reliability Initiative:** "Token contract testing in CI/CD"
```

## Following Up on Action Items

Post-mortem action items are reviewed in the weekly service review. An action item without a due date and an owner is decoration.

**The rule:** Actions from post-mortems are not optional. If they are deprioritised, the PM and Delivery Manager are notified and must sign off on the risk.

---

**Next:** [Onstream Cadence →](/onstream/cadence)
