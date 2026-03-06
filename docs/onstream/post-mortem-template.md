# Post-Mortem Template

<span class="phase-badge onstream">🟠 Onstream</span>

## What Is a Post-Mortem?

A post-mortem is a **blameless, structured review of a production incident** that caused a service disruption. Its purpose is to understand what happened, why the systems and processes allowed it to happen, and what structural changes will prevent recurrence.

::: warning Blameless means blameless
Post-mortems are not performance reviews. Naming individuals as the cause of an incident is a signal that your organisation has not understood the purpose of post-mortems. People make mistakes. Systems should prevent those mistakes from causing outages. The post-mortem looks at the system — the code, the process, the alerts, the deployment pipeline — not the person.
:::

## The Philosophy of Blameless Post-Mortems

The logic is simple and uncomfortable:

**If you blame individuals, people hide information.** The engineer who caused the outage will minimise their role, omit context, and avoid volunteering details that might be used against them. The post-mortem becomes a sanitised fiction that prevents nothing.

**If you blame systems, people fix problems.** The same engineer, in a blameless culture, will say: "I deployed the config change directly to production because there was no staging gate. I didn't realise legacy tokens lacked the `aud` claim. Here's what I think we should change." The post-mortem becomes a rich source of systemic improvement.

This is not theoretical. Google, Netflix, Etsy, and every mature SRE organisation has converged on the same conclusion: **the quality of your incident learnings is proportional to the psychological safety of your post-mortem process.**

::: details The Just Culture Model
Blameless does not mean consequence-free in all cases. The Just Culture model distinguishes three behaviours:

1. **Human error** (slip, lapse, mistake): The person intended to do the right thing but made an unintentional error. → **Console and learn.** System should have caught it.
2. **At-risk behaviour** (shortcut, workaround): The person knowingly deviated from a process, believing the risk was acceptable. → **Coach and improve the process.** The process was probably impractical.
3. **Reckless behaviour** (conscious disregard for known risk): The person knowingly ignored a clear, reasonable safety control. → **Accountability and consequences.** This is rare and distinct from the above.

The vast majority of incidents fall into categories 1 and 2. Treating them as category 3 is the core failure of blame culture.
:::

---

## When to Write a Post-Mortem

| Trigger | Required? |
|---------|-----------|
| P0 incident (full outage, data loss) | ✅ Within 48 hours |
| P1 incident (major feature broken in production) | ✅ Within 5 business days |
| P2 incident if SLA was breached | ⚠️ Recommended |
| Near-miss (averted P0) | ⚠️ Strongly recommended |

---

## Post-Mortem Template

---

### Metadata

| Field | Details |
|-------|---------|
| **Incident Title** | What broke |
| **Incident ID / Ticket** | `INC-YYYY-NNN` / Jira ticket |
| **Date / Time** | Start and end, with timezone |
| **Duration** | Total downtime or degradation |
| **Reported By** | First alert or report |
| **Detected Via** | Monitoring / customer / synthetic test |
| **Impact Summary** | Number of users affected, business impact, data impact |

---

### Section 1 — Timeline

A factual, minute-by-minute account of what happened. No editorialising.

| Time (UTC) | Event |
|------------|-------|
| HH:MM | Alert fired / customer report arrived |
| HH:MM | On-call acknowledged |
| HH:MM | Triage finding |
| HH:MM | Root cause identified |
| HH:MM | Mitigation applied |
| HH:MM | Service recovering |
| HH:MM | Incident resolved |

---

### Section 2 — Root Cause

The **deepest systemic "why"** — not the surface symptom. A good root cause explains why the system allowed this to happen, not just what the triggering action was.

Ask "why" five times. The first answer is almost never the root cause.

---

### Section 3 — Mitigation & Resolution

**Immediate Mitigation:** What was done to stop the bleeding fast.

**Final Resolution:** The proper fix — the change that addresses the root cause.

---

### Section 4 — Recovery & Follow-Up

**Recovery Steps:** How the team confirmed the service was healthy.

**Action Items:** Concrete, owned, time-bound improvements to code, process, monitoring, or alerting.

---

### Section 5 — Learnings

**What went well:** Detection, communication, rollback speed, tooling that worked.

**What went wrong:** Gaps in process, monitoring, testing, communication.

**What we'll do differently:** Process changes and structural investments.

---

## Worked Example — JWT Policy Outage

This is the complete post-mortem from the JWT incident used throughout this book. Every section is filled in to demonstrate the expected depth and tone.

| Field | Details |
|-------|---------|
| **Incident Title** | Production API outage due to JWT policy mismatch |
| **Incident ID** | `INC-2025-137 / OPS-991` |
| **Date / Time** | 2025-07-24 09:42 – 10:26 UTC |
| **Duration** | **44 minutes** |
| **Reported By** | Customer support ticket + Datadog alert (nearly simultaneous) |
| **Detected Via** | Synthetic monitoring + user feedback |
| **Impact Summary** | 100% of API calls failed with `403 Forbidden` during the 44-minute window. Users could not log in, view dashboards, or access any data. No data loss occurred. High support ticket volume. Degraded customer trust. |

### Timeline

| Time (UTC) | Event |
|------------|-------|
| 09:42 | API healthcheck alert fired in Datadog. Synthetic monitor detected `403` on `/api/health`. |
| 09:43 | First customer report arrived via support ticket: "Getting access denied on everything." |
| 09:46 | On-call SRE acknowledged the alert and started triage. Initial hypothesis: Auth0 outage. |
| 09:48 | Auth0 status page confirmed healthy. Hypothesis shifted to APIM. |
| 09:52 | Confirmed: **all** `/api/*` routes returning `403 Forbidden`. Not route-specific — system-wide. |
| 09:56 | SRE checked recent deployments. Found: APIM policy change deployed at 09:41 by infra pipeline. |
| 10:04 | Root cause identified: new APIM policy requiring `aud` claim in JWT. Production tokens issued before the change lack `aud`. |
| 10:08 | Decision made: revert the APIM policy to the previous version. |
| 10:11 | Policy hotfix applied via Azure portal. Previous JWT validation policy restored. |
| 10:18 | API began returning `200`. Synthetic monitors confirmed recovery. |
| 10:22 | Support team began proactive customer communication: incident acknowledged, resolution in progress. |
| 10:26 | Final validations complete across all API routes. Incident closed. Total duration: **44 minutes**. |

::: info Detection Timeline Analysis
The alert fired at 09:42, one minute after the deployment at 09:41. Detection was fast. However, a customer reported the issue at 09:43 — nearly simultaneously with the engineering alert. Ideally, engineering should detect and begin response **before** any customer is affected. The action item for a `403` spike alert addresses this gap.
:::

### Root Cause

A new APIM policy enforcing the audience (`aud`) claim on all JWTs was deployed to **all environments including production** without verifying that currently-issued tokens included the `aud` claim.

**Five Whys:**
1. *Why were all API requests returning 403?* → APIM was rejecting all tokens.
2. *Why was APIM rejecting all tokens?* → New policy required `aud` claim.
3. *Why didn't the policy fail in staging?* → Staging had recently-issued tokens; production had legacy tokens without `aud`.
4. *Why wasn't this caught before the production deployment?* → No staging validation step in the APIM policy promotion process.
5. *Why was there no staging validation step?* → **APIM policy changes were not part of the standard deployment checklist.** They were treated as infrastructure config, not application changes — and thus bypassed the normal staging → production promotion gate.

**Root cause:** APIM policy changes had no deployment gate. They could be promoted directly to production without a staging validation step or backward-compatibility check. The policy assumed all tokens in the wild would have the `aud` claim, but legacy tokens (issued before the Auth0 rule update) did not.

### Mitigation & Resolution

**Immediate Mitigation:**
- Reverted JWT policy to previous version in APIM (10:11)
- Disabled `aud` validation temporarily
- Confirmed all API routes returning `200` (10:18)

**Final Resolution:**
- Updated Auth0 rule to inject the `aud` claim correctly into all newly issued tokens
- Waited 24 hours for token rotation to propagate (most tokens have 1h TTL, but refresh tokens persist longer)
- Re-deployed JWT policy **after staging validation** with legacy token simulation
- Confirmed backward compatibility with all token age groups (new tokens with `aud`, legacy tokens without, refresh tokens)

### Recovery & Follow-Up

**Recovery Steps:**
1. Monitored API success rate for 15 minutes after revert (10:11–10:26)
2. Verified synthetic monitors on all critical routes: `/api/health`, `/api/user/*`, `/api/wallet/*`
3. Support team contacted affected customers with incident summary and resolution status
4. Confirmed no data corruption or loss via database audit

**Action Items:**

| Action | Owner | Due | Status |
|--------|-------|-----|--------|
| Add staging-only deployment gate to APIM policies — no policy reaches production without 24h in staging | @boaz.k (Platform Lead) | Sprint +1 | 🔴 Open |
| Create JWT test harness in CI that validates token decoding with `aud`, without `aud`, expired, and malformed tokens | @julio.m (Auth & Security) | Sprint +1 | 🔴 Open |
| Add real-time Datadog alert for `403` spike from APIM (> 10% of requests in 1-min window → page on-call) | @alex.g | This sprint | 🔴 Open |
| Audit all token-based validation rules for backward compatibility with existing token populations | @julio.m | Sprint +2 | 🔴 Open |
| Update APIM change checklist to include "verify backward compatibility with in-flight tokens" | @boaz.k | This sprint | 🔴 Open |

### Learnings

**What went well:**
- Fast detection by synthetic monitors — alert fired at 09:42, 1 minute after deployment
- Clear visibility via Datadog and APIM logs. The SRE could trace the exact policy change within 14 minutes of starting triage
- Rollback procedure was documented and followed quickly — revert took 7 minutes from decision to execution
- Team coordination was effective. SRE, platform lead, and support communicated via the incident Slack channel without confusion

**What went wrong:**
- No staging validation step before APIM policy promotion to production. APIM policies were treated as "infra config" and bypassed the normal deployment gate.
- No test coverage for legacy tokens (tokens without `aud`) in staging. Staging had only recently-issued tokens, masking the incompatibility.
- A customer reported the issue before the on-call alert was acknowledged. The gap between alert (09:42) and acknowledgment (09:46) was 4 minutes — within SLA, but the customer noticed at 09:43.
- No automated backward-compatibility check for token schema changes. The team relied on manual review, which missed the legacy token population.

**What we'll do differently:**
- Treat APIM policy changes as application changes, not infrastructure config. Same staging → production gate as code deployments.
- Add mandatory backward-compatibility testing for any change to authentication or token validation logic.
- Invest in a JWT test harness that simulates all token variants (new, legacy, expired, malformed) as part of CI.
- Add preemptive detection: a Datadog alert that fires on any `403` rate exceeding the baseline, so engineering detects before customers.

---

## How to Facilitate a Post-Mortem Session

A post-mortem document is only as good as the session that produces it. Poor facilitation leads to shallow analysis, defensiveness, and missed insights.

### Timing

Hold the session within **48 hours** of incident resolution for P0, and within **5 business days** for P1. Sooner is better — memories fade, details blur, and the emotional urgency that drives action dissipates.

::: warning Don't Wait for the Perfect Moment
Teams delay post-mortems waiting for "when we have time." There is never time. Schedule it immediately after the incident is closed, even if it means displacing a less critical meeting. The learning value of a post-mortem drops sharply with every day of delay.
:::

### Participants

| Role | Why They Attend |
|------|----------------|
| **Facilitator** (Delivery Manager or SRE Lead) | Keeps the session blameless, on-track, and time-boxed |
| **Incident responders** | Provide first-hand account of the timeline and decisions |
| **Service owner** | Provides architectural context and owns follow-up actions |
| **On-call engineer** | Describes the alert, triage, and resolution process |
| **Support representative** | Provides the customer perspective — what customers experienced and reported |
| **PM** (for P0 only) | Assesses business impact and prioritises follow-up actions in the backlog |

### Agenda (60 Minutes)

| Time | Activity |
|------|----------|
| 0–5 min | **Opening:** Facilitator states the blameless ground rules. No names used in causal language. |
| 5–20 min | **Timeline walkthrough:** Incident responders narrate what happened, minute by minute. Facilitator prompts for gaps. |
| 20–35 min | **Root cause analysis:** The team asks "why" together. Use the 5 Whys structure. Facilitator prevents jumping to solutions. |
| 35–50 min | **Action items:** Brainstorm prevention measures. For each: define the action, assign an owner, set a due date. |
| 50–55 min | **Learnings:** What went well? What went wrong? What should change? |
| 55–60 min | **Close:** Facilitator summarises action items and next steps. Document published within 24 hours. |

::: tip The Facilitator's Most Important Job
The facilitator's primary role is to **enforce blameless language**. When someone says "John deployed the bad config," the facilitator intervenes: "A configuration change was deployed without staging validation. Let's discuss why that was possible." This redirection — from person to system — is the foundation of productive post-mortems.
:::

### Ground Rules (Read Aloud at the Start)

1. We are here to learn, not to blame.
2. We assume everyone involved acted with the best intentions and the information they had at the time.
3. "Human error" is never the root cause. If a person made a mistake, the system should have caught it. We look at the system.
4. Every action item must address the system — a process, a tool, a test, a gate — not a person.
5. This document will be shared openly. Write it as if the whole company will read it — because they should.

---

## Action Item Tracking

Post-mortem action items die when they enter the backlog without structure. Use a consistent format that makes them trackable.

### Action Item Format

Every action item must include:

| Field | Description | Example |
|-------|-------------|---------|
| **Action** | What specifically will be done | "Add staging deployment gate to APIM policy pipeline" |
| **Owner** | A named individual (not a team) | @boaz.k |
| **Due Date** | Specific sprint or calendar date | Sprint +1 (2025-08-08) |
| **Priority** | P0 action (do immediately) or P1 action (next sprint) | P0 action |
| **Verification** | How we will confirm it is done and effective | "Deploy a test policy change to staging; verify it is blocked from production without approval" |
| **Jira Ticket** | Linked ticket for tracking | `OPS-994` |

### Follow-Up Cadence

| Checkpoint | Who | What |
|-----------|-----|------|
| **Weekly** | Delivery Manager | Review open post-mortem actions in the service review. Flag any that are overdue. |
| **Bi-weekly** | Tech Lead | Verify completed actions are actually effective (not just closed). |
| **Monthly** | SRE Lead | Monthly reliability review: aggregate all post-mortem actions. Identify systemic themes. |
| **Quarterly** | Leadership | Quarterly reliability report: did our post-mortem process reduce repeat incidents? |

::: info The Loop Must Close
A post-mortem that produces action items that are never completed is worse than no post-mortem at all. It trains the team that post-mortems are performative — they produce documents, not change. The Delivery Manager's weekly review of open post-mortem actions is the mechanism that closes the loop.
:::

---

## Post-Mortem Quality Checklist

Before sharing a post-mortem, confirm:

- [ ] Timeline is factual — no attribution of blame to individuals
- [ ] Root cause is the systemic cause, not the surface trigger
- [ ] Every action item has a named owner and a due date
- [ ] Actions address the *system*, not the person
- [ ] The "what went well" section is genuine — reinforces what to keep
- [ ] Impact is quantified (users affected, duration, business cost)
- [ ] The document is written in blameless language throughout
- [ ] Action items have verification criteria — how will we know they worked?
- [ ] Learnings feed into Upstream (new Initiative or policy change) where applicable
- [ ] The post-mortem has been reviewed by all incident participants before publication

---

