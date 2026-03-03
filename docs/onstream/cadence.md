# Cadence & Service Reviews

<span class="phase-badge onstream">🟠 Onstream</span>

## Why Cadence Matters

Operational excellence is not achieved through heroic incident response. It is achieved through **routine**. Regular reviews, structured meetings, and predictable rhythms create the conditions where problems are caught early, improvements are tracked, and reliability trends upward over time.

Without cadence, operations become reactive: the team only pays attention to reliability when something breaks. With cadence, operations are proactive: the team pays attention continuously, and breakages become rare.

---

## The Operational Rhythm

```
Daily       │ Ops Standup                     │ 5 min
Weekly      │ Service Review                  │ 30 min
Monthly     │ Reliability Review              │ 1 hour
Quarterly   │ Stakeholder Service Review      │ 1 hour
Ad-hoc      │ Post-Incident Review            │ 1 hour (within 48h of P0/P1)
Ad-hoc      │ Change Advisory Board           │ 30 min (before high-risk deployments)
```

---

## Daily Ops Standup

**Duration:** 5 minutes. Not 15. Not 30. Five.

**Attendees:** On-call engineer, Tech Lead, Delivery Manager (optional: SRE, Support lead)

**Purpose:** Rapid situational awareness. Not a problem-solving meeting.

### Agenda (Strict)

| # | Topic | Time |
|---|-------|------|
| 1 | **Active incidents** — Any open incidents? What is the current status? | 1 min |
| 2 | **Overnight alerts** — What fired overnight? Were they actionable? | 1 min |
| 3 | **Key metrics** — Are SLOs healthy? Any error budget concerns? | 1 min |
| 4 | **Upcoming changes** — Any deployments or configuration changes today? | 1 min |
| 5 | **Blockers** — Is anything preventing the on-call engineer from doing their job? | 1 min |

### Rules

- Stand up. Do not sit. Sitting invites discussion.
- No problem-solving. If a topic needs more than 30 seconds, take it offline: "Let's discuss in a thread after standup."
- Rotate the facilitator weekly. The on-call engineer leads by default.
- Cancel if nothing to report (but don't cancel more than 2 days in a row — the rhythm matters).

::: tip The Ops Standup Is Not the Dev Standup
The development standup covers sprint work: "What did I do yesterday? What am I doing today? Any blockers?" The ops standup covers production health: "Are our services healthy? Are there risks?" These are separate meetings with separate purposes. Teams that combine them end up neglecting one.
:::

---

## Weekly Service Review

**Duration:** 30 minutes. Hard stop.

**Attendees:** Tech Lead, Delivery Manager, SRE, On-call engineer(s) from the past week, Support lead

**Purpose:** Review the operational health of all services over the past week. Identify trends. Track follow-up actions.

### Agenda

| # | Topic | Time | Owner |
|---|-------|------|-------|
| 1 | **SLO dashboard review** | 5 min | SRE |
| 2 | **Incident summary** | 5 min | On-call engineer |
| 3 | **Alert review** | 5 min | On-call engineer |
| 4 | **Open post-mortem actions** | 5 min | Delivery Manager |
| 5 | **Upcoming changes & risks** | 5 min | Tech Lead |
| 6 | **Support ticket trends** | 5 min | Support lead |

### SLO Dashboard Review

For each service, review:

| Metric | What to Check |
|--------|--------------|
| Current SLO compliance | Is the service within its SLO target? |
| Error budget remaining | What percentage of the error budget has been consumed? |
| Trend direction | Is reliability improving, stable, or degrading week-over-week? |
| Anomalies | Any unusual traffic patterns, latency spikes, or error clusters? |

### Incident Summary

For each incident in the past week:

| Field | Detail |
|-------|--------|
| Severity | P0 / P1 / P2 / P3 |
| Duration | Time from detection to resolution |
| Root cause | One-line summary |
| Post-mortem status | Published / In progress / Overdue |
| Follow-up actions | Status of action items from the post-mortem |

### Alert Review

For every alert that fired during the past week:

| Question | Action |
|----------|--------|
| Was this alert actionable? | If no, tune or delete it. |
| Did the on-call engineer know what to do? | If no, the alert needs a runbook link. |
| Did the alert fire at the right threshold? | If too sensitive (noisy) or too loose (missed incident), adjust. |
| Is this a duplicate of another alert? | If yes, consolidate. |

::: info The Weekly Service Review Is the Heartbeat of Onstream
Skip this meeting consistently and operational health will degrade. SLOs will drift. Alerts will rot. Post-mortem actions will stall. This 30-minute meeting is the single most important operational investment a team makes.
:::

---

## Monthly Reliability Review

**Duration:** 1 hour

**Attendees:** Tech Lead, Delivery Manager, SRE, Product Owner, Engineering Manager

**Purpose:** Step back from the weekly cadence and assess reliability trends, error budget status, and capacity planning over a longer horizon.

### Agenda

| # | Topic | Time | Owner |
|---|-------|------|-------|
| 1 | **Error budget status** | 15 min | SRE |
| 2 | **Incident trend analysis** | 15 min | Delivery Manager |
| 3 | **Capacity planning** | 15 min | DevOps / SRE |
| 4 | **Improvement initiatives** | 15 min | Tech Lead |

### Error Budget Status

| Service | SLO | Budget Used (This Month) | Budget Used (Last Month) | Trend |
|---------|-----|-------------------------|-------------------------|-------|
| Journal API | 99.9% | 38% | 22% | ⬆ (degrading) |
| Auth Service | 99.95% | 12% | 8% | → (stable) |
| Matching API | 99.5% | 5% | 62% | ⬇ (improving) |

For services where budget consumption is increasing:
- What incidents contributed to the increase?
- Are there systemic issues (flaky dependencies, noisy deployments)?
- Should feature work be paused to invest in reliability?

### Incident Trend Analysis

| Metric | This Month | Last Month | 3-Month Average | Target |
|--------|-----------|-----------|-----------------|--------|
| Total incidents | 4 | 6 | 5.3 | < 4 |
| P0 incidents | 0 | 1 | 0.3 | 0 |
| P1 incidents | 1 | 2 | 1.3 | < 1 |
| Avg MTTR (P1) | 28 min | 45 min | 35 min | < 30 min |
| Post-mortem completion | 100% | 67% | 78% | 100% |
| Repeat incidents | 0 | 1 | 0.7 | 0 |

::: warning Repeat Incidents Are a Red Flag
A repeat incident means the team did not learn from the first occurrence. Either the post-mortem was not done, or the follow-up actions were not completed. The monthly review must flag repeats and investigate why the cycle was not broken.
:::

### Capacity Planning

| Resource | Current Usage | Growth Rate | Projected Exhaustion | Action |
|----------|-------------|-------------|---------------------|--------|
| Database storage | 340 GB / 500 GB | 15 GB/month | 10 months | Monitor. No action now. |
| API throughput | 800 rps / 1,200 rps peak | 50 rps/month | 8 months | Plan capacity increase for Q3. |
| Redis memory | 2.1 GB / 4 GB | 0.2 GB/month | 9 months | Monitor. Consider eviction policy. |

### Improvement Initiatives

Track reliability improvement projects:

| Initiative | Owner | Status | Target Completion |
|-----------|-------|--------|------------------|
| Add staging gate to APIM pipeline | DevOps | In progress | Sprint 18 |
| Implement circuit breaker for Prompt Service | Backend | Not started | Sprint 19 |
| Reduce alert noise (target: < 10/week) | SRE | In progress | Sprint 18 |
| Automate database backup verification | DBA | Complete | ✅ |

---

## Quarterly Stakeholder Service Review

**Duration:** 1 hour

**Attendees:** Delivery Manager, Product Owner, Engineering Manager, Customer Success, SRE, Programme Lead

**Purpose:** Report on operational health to stakeholders. Align on reliability investments. Review SLA compliance.

### Agenda

| # | Topic | Time | Owner |
|---|-------|------|-------|
| 1 | **SLA compliance report** | 15 min | SRE / Delivery Manager |
| 2 | **Incident summary & trends** | 15 min | Delivery Manager |
| 3 | **Customer impact analysis** | 15 min | Customer Success |
| 4 | **Improvement roadmap** | 15 min | Tech Lead |

### SLA Compliance Report

| Service | SLA Target | Actual (This Quarter) | Status |
|---------|-----------|----------------------|--------|
| Journal API | 99.9% | 99.87% | ⚠ Below SLA (JWT outage) |
| Auth Service | 99.95% | 99.97% | ✅ Compliant |
| Matching API | 99.5% | 99.8% | ✅ Compliant |
| Dashboard | 99.9% | 99.92% | ✅ Compliant |

For any SLA breach:
- Root cause summary
- Customer notification status
- Corrective actions taken
- Confidence level that the breach will not recur

### Customer Impact Analysis

| Metric | This Quarter | Last Quarter | Trend |
|--------|-------------|-------------|-------|
| Support tickets (service-related) | 34 | 52 | ⬇ Improving |
| Customer-reported incidents | 3 | 5 | ⬇ Improving |
| Mean customer response time | 4.2 hours | 6.1 hours | ⬇ Improving |
| NPS impact from outages | -2 points | -8 points | ⬇ Improving |

### Improvement Roadmap

Present the next quarter's reliability investment priorities:

| Priority | Initiative | Business Value | Engineering Cost |
|----------|-----------|---------------|-----------------|
| 1 | Staging environment parity (prevent JWT-class incidents) | High — prevents SLA breach | 3 sprints |
| 2 | Automated rollback on error spike detection | High — reduces MTTR | 2 sprints |
| 3 | Customer-facing status page | Medium — improves trust during incidents | 1 sprint |
| 4 | Chaos engineering pilot | Medium — proactive reliability testing | 2 sprints |

::: tip Stakeholders Care About Impact, Not Metrics
Don't present p95 latency numbers to a Programme Lead. Present: "Zero customer-impacting outages this quarter" or "We breached our SLA once due to the JWT incident. Here's what we've done to prevent recurrence." Translate metrics into business language.
:::

---

## Post-Incident Review

**Duration:** 1 hour

**When:** Within 48 hours of P0/P1 resolution

**Attendees:** Incident Commander, Technical Lead, all involved responders, Delivery Manager, Product Owner

**Purpose:** Understand what happened, why it happened, and what systemic changes will prevent recurrence.

### Structure

| Phase | Time | Activity |
|-------|------|----------|
| **Timeline reconstruction** | 15 min | Walk through the incident chronologically using the scribe's notes |
| **Root cause analysis** | 20 min | Identify contributing factors using the 5 Whys or Fishbone method |
| **Action items** | 15 min | Define specific, assignable, time-bound follow-up actions |
| **Lessons learned** | 10 min | What went well? What went poorly? What was lucky? |

### Post-Incident Review Rules

1. **Blameless.** Focus on systems, not people. "The pipeline allowed an unvalidated deployment" — not "John deployed without testing."
2. **Fact-based.** Use logs, metrics, and timestamps. Not memory and assumptions.
3. **Action-oriented.** Every root cause must produce at least one action item with an owner and a due date.
4. **Published.** The post-mortem document is shared with the entire engineering organization. Transparency builds trust and distributes learning.

See the [Post-Mortem Template](/onstream/post-mortem-template) for the full document structure.

---

## Change Advisory Board (CAB)

**Duration:** 30 minutes

**When:** Before any high-risk deployment

**Attendees:** Delivery Manager, Tech Lead, DevOps, SRE, affected service owners

**Purpose:** Review high-risk changes before they reach production. Not a gate — a safety net.

### What Qualifies as "High-Risk"?

| Change Type | Why It's High-Risk |
|------------|-------------------|
| Database migration (schema change) | Data loss or corruption if migration fails |
| Infrastructure change (networking, DNS, certificates) | Can affect all services simultaneously |
| Authentication/authorization change | Can lock out all users (see: JWT outage) |
| Third-party integration change | Dependency on external system behaviour |
| Change affecting > 3 services | Blast radius is large |

### CAB Review Checklist

| # | Check | Owner |
|---|-------|-------|
| 1 | Change has been tested in staging with production-like data | Developer |
| 2 | Rollback plan is documented and tested | DevOps |
| 3 | Monitoring and alerts are configured for the change | SRE |
| 4 | Deployment window is agreed (avoid peak traffic hours) | Delivery Manager |
| 5 | Communication plan is ready (internal + external if needed) | Support / DM |
| 6 | On-call team is briefed on the change and potential failure modes | Tech Lead |

::: info CAB Is Not Bureaucracy
CAB reviews should be fast (30 minutes) and focused. They exist to catch the "Did we think of this?" gaps that cause outages. If the team has done the preparation (staging test, rollback plan, alerts), the CAB review is a 5-minute confirmation. It only takes 30 minutes when the preparation is incomplete — which is exactly the kind of change that should not go to production yet.
:::

---

## Cadence Calendar Summary

| Cadence | Meeting | Duration | Key Output |
|---------|---------|----------|------------|
| Daily | Ops Standup | 5 min | Situational awareness |
| Weekly | Service Review | 30 min | Alert tuning, post-mortem tracking, SLO check |
| Monthly | Reliability Review | 1 hour | Error budget analysis, capacity planning, improvement tracking |
| Quarterly | Stakeholder Service Review | 1 hour | SLA compliance report, improvement roadmap |
| Ad-hoc | Post-Incident Review | 1 hour | Post-mortem document, follow-up actions |
| Ad-hoc | Change Advisory Board | 30 min | Go/no-go decision for high-risk changes |

::: tip Start with Two Meetings
If your team has no operational cadence today, do not introduce all six at once. Start with the **Daily Ops Standup** and the **Weekly Service Review**. These two alone will surface 80% of the operational issues you are currently missing. Add the monthly and quarterly reviews once the weekly rhythm is established.
:::
