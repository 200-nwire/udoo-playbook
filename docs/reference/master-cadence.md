# Master Cadence Table

Every ceremony in the UDOO framework serves a purpose. This page is the unified calendar — the single source of truth for what happens when, who attends, and how long it takes.

::: tip Design principle
Ceremonies are investments, not overhead. Each one exists because its absence caused a documented problem. If a ceremony is not producing value, fix it or replace it — but do not silently drop it, because the gap it leaves will surface as a different problem.
:::

---

## Complete Ceremony Table

### <span style="color:#2563eb">Upstream Ceremonies (Discovery)</span>

| Ceremony | Frequency | Duration | Participants | Purpose |
|----------|-----------|----------|-------------|---------|
| **Initiative Kickoff** | Per initiative | 60–90 min | PM, Tech Lead, UX, Stakeholders | Align on problem space, agree on Initiative Brief scope |
| **Journey Mapping** | Per feature | 60–90 min | PM, UX, Dev Rep, QA Rep | Map the end-to-end user journey; identify steps, pain points, risks |
| **Story Slicing** | Per feature | 45–60 min | PM, Tech Lead, QA | Slice features into thin, end-to-end stories that meet INVEST |
| **Readiness Check** | Weekly | 30 min | PM, Tech Lead | Review backlog stories against DoR; identify gaps before sprint planning |
| **Architecture Decision** | As needed | 30–60 min | Tech Lead, Senior Devs, PM | Discuss trade-offs and record decision in an ADR |
| **Stakeholder Check-In** | Bi-weekly | 30 min | PM, Stakeholders | Share progress on Upstream discovery; gather feedback; manage expectations |
| **Upstream Retro** | Per initiative | 45 min | PM, UX, Tech Lead, QA | Reflect on the discovery process; improve for next initiative |

### <span style="color:#16a34a">Downstream Ceremonies (Delivery)</span>

| Ceremony | Frequency | Duration | Participants | Purpose |
|----------|-----------|----------|-------------|---------|
| **Sprint Planning** | Per sprint (2 weeks) | 60–90 min | PM, Dev Team, QA, Tech Lead | Select stories, confirm DoR, commit to sprint scope |
| **Daily Standup** | Daily | 15 min | Dev Team, QA, PM (optional) | Surface blockers, sync on progress, adjust plan |
| **Story Kick-Off (Three Amigos)** | Per story | 15 min | Dev, QA, PM | Align on AC, identify edge cases, agree on test approach |
| **Code Review** | Per PR | 15–30 min | Author + Reviewer(s) | Quality, knowledge sharing, standards compliance |
| **Sprint Demo** | Per sprint | 30–45 min | Dev Team, PM, Stakeholders, QA | Demonstrate completed work; gather feedback |
| **Sprint Retro** | Per sprint | 45–60 min | Dev Team, PM, QA, Scrum Master | Identify what worked, what didn't; produce actionable improvements |
| **Release Readiness** | Per release | 30 min | Tech Lead, QA Lead, PM, DevOps | Run Delivery Point gate checklist; approve or block release |

### <span style="color:#ea580c">Onstream Ceremonies (Operations)</span>

| Ceremony | Frequency | Duration | Participants | Purpose |
|----------|-----------|----------|-------------|---------|
| **Daily Ops Standup** | Daily | 10 min | SRE/DevOps, On-Call | Review overnight alerts, active incidents, deployment queue |
| **Post-Incident Review** | Per P0/P1 | 60 min | Incident team, Eng Manager, PM | Blameless root cause analysis; define corrective actions |
| **Weekly Service Review** | Weekly | 30 min | SRE Lead, Tech Lead, PM | Review SLI/SLO dashboards, error budgets, incident trends |
| **Monthly Reliability Review** | Monthly | 60 min | VP Eng, SRE Lead, PMs, Tech Leads | Assess reliability posture across all services; prioritise tech debt |
| **Quarterly Service Review** | Quarterly | 90 min | VP Eng, SRE, PMs, CS Lead | Review SLA compliance, reliability trends, capacity planning |

### <span style="color:#9333ea">Offstream Ceremonies (Growth)</span>

| Ceremony | Frequency | Duration | Participants | Purpose |
|----------|-----------|----------|-------------|---------|
| **Weekly CS Sync** | Weekly | 30 min | CS Lead, PM, Support Lead | Review CS Feedback backlog, triage signals, route to product |
| **Monthly Revenue Review** | Monthly | 45 min | CS Lead, Sales Lead, PM, Finance | Review MRR, churn, expansion; correlate with product changes |
| **Quarterly Business Review (QBR)** | Quarterly per key account | 60 min | CS, Account Exec, Customer | Review ROI, align on roadmap, discuss expansion |
| **Win/Loss Review** | Monthly | 30 min | Sales Lead, PM, CS Lead | Analyse won and lost deals; extract product signal |

### Cross-Cutting Ceremonies

| Ceremony | Frequency | Duration | Participants | Purpose |
|----------|-----------|----------|-------------|---------|
| **Monthly All-Hands** | Monthly | 45 min | Entire R&D org | Share wins, learnings, roadmap updates, culture moments |
| **Quarterly Planning** | Quarterly | Half-day | PM, VP Eng, VP Product, Tech Leads, CS Lead | Set initiative priorities for the quarter; allocate capacity |

---

## Weekly Calendar View

A typical week for a team running 2-week sprints (Sprint Week 1):

| Time | Monday | Tuesday | Wednesday | Thursday | Friday |
|------|--------|---------|-----------|----------|--------|
| **09:00** | Daily Standup (15m) | Daily Standup (15m) | Daily Standup (15m) | Daily Standup (15m) | Daily Standup (15m) |
| **09:15** | Sprint Planning (90m) *(Week 1 only)* | Story Kick-Offs (15m each) | | | |
| **10:00** | | | Readiness Check (30m) | | |
| **10:30** | | | | Stakeholder Check-In (30m) *(bi-weekly)* | |
| **11:00** | Daily Ops Standup (10m) | Daily Ops Standup (10m) | Daily Ops Standup (10m) | Daily Ops Standup (10m) | Daily Ops Standup (10m) |
| **14:00** | | Weekly CS Sync (30m) | | | |
| **14:30** | | Weekly Service Review (30m) | | | Sprint Demo (45m) *(Week 2 only)* |
| **15:30** | | | | | Sprint Retro (60m) *(Week 2 only)* |

::: info Sprint Week 2
In the second week of the sprint, Friday adds the Sprint Demo (30–45 min) and Sprint Retro (45–60 min). Sprint Planning moves to Monday of the following sprint.
:::

---

## Total Time Investment Per Role Per Week

These estimates include only recurring ceremonies, not ad-hoc meetings:

| Role | Weekly Ceremony Hours | Breakdown |
|------|----------------------|-----------|
| **Developer** | ~3.5 h | Standup (1.25h) + Story Kick-offs (0.5h) + Code Review (1h) + Sprint Planning (0.75h avg) |
| **QA Engineer** | ~3.5 h | Standup (1.25h) + Story Kick-offs (0.5h) + Sprint Planning (0.75h avg) + Release Readiness (0.25h avg) + Bug Triage (0.5h) |
| **Product Manager** | ~5 h | Standup (1.25h) + Sprint Planning (0.75h avg) + Readiness Check (0.5h) + Stakeholder Check-in (0.25h avg) + CS Sync (0.5h) + Demo (0.4h avg) + Retro (0.5h avg) + Service Review (0.5h) |
| **Tech Lead** | ~5 h | Standup (1.25h) + Sprint Planning (0.75h avg) + Code Review (1h) + Readiness Check (0.5h) + Architecture Decisions (0.5h avg) + Release Readiness (0.25h avg) + Service Review (0.5h) |
| **SRE / DevOps** | ~2.5 h | Ops Standup (0.85h) + Service Review (0.5h) + Release Readiness (0.25h avg) + Post-Incident Reviews (variable) |
| **CS Lead** | ~2.5 h | CS Sync (0.5h) + Revenue Review (0.2h avg weekly) + QBR prep (variable) + Win/Loss (0.15h avg weekly) + Service Review (0.5h) |
| **Engineering Manager** | ~4 h | Standup (1.25h) + Sprint Planning (0.75h avg) + Retro (0.5h avg) + Service Review (0.5h) + Reliability Review (0.25h avg weekly) + All-Hands (0.2h avg) |

::: warning Ceremony load for PMs
Product Managers carry the highest ceremony load because they are the connective tissue between phases. If PM ceremony time exceeds 6 hours/week, review which ceremonies can be made async or delegated.
:::

---

## Tips for Reducing Meeting Load

Not every ceremony requires synchronous, full-attendance meetings. Use these strategies to keep the rhythm without burning out the team:

### Go Async Where Possible

| Ceremony | Async Alternative |
|----------|------------------|
| Daily Standup | Slack bot check-in (post blockers, progress, plan) — meet synchronously only if blockers exist |
| Readiness Check | PM reviews DoR in a shared doc; Tech Lead comments async; sync only for unresolved items |
| Code Review | Always async first; sync pair-review only for complex or contentious changes |
| Stakeholder Check-In | Recorded Loom update with async Q&A thread; sync only when decisions are needed |

### Combine Ceremonies

| Combination | When It Works |
|------------|---------------|
| Sprint Demo + Stakeholder Check-In | When stakeholders are the primary demo audience |
| Weekly Service Review + Ops Standup (extended) | For small teams where SRE and Dev overlap |
| Win/Loss Review + Monthly Revenue Review | When the same participants attend both |

### Timebox Ruthlessly

- **Standup exceeding 15 minutes?** Take detailed discussions offline. The standup surfaces; it does not solve.
- **Sprint Planning exceeding 90 minutes?** Stories are not ready. The fix is better Upstream preparation, not longer planning.
- **Retro exceeding 60 minutes?** Limit to top 3 topics. Carry unaddressed items to the next retro.

### The "Two Pizza" Rule for Ceremonies

> If a ceremony has more participants than two pizzas can feed (~8 people), it either needs to be split or some attendees should be optional.

::: details Decision guide: Sync vs. Async
**Use synchronous meetings when:**
- Decisions with trade-offs need real-time debate
- Emotional or sensitive topics require tone and nuance
- The group needs to build shared understanding quickly (e.g., Journey Mapping)

**Use async communication when:**
- The update is informational, not decisional
- Participants are in multiple time zones
- The content benefits from thoughtful, written responses
- The ceremony is a status check, not a working session
:::

---

## Quarterly Ceremony Calendar

| Month | Week 1 | Week 2 | Week 3 | Week 4 |
|-------|--------|--------|--------|--------|
| **Month 1** | Sprint 1 start | Sprint 1 end / Sprint 2 start | Sprint 2 continues | Sprint 2 end / Sprint 3 start |
| **Month 2** | Sprint 3 continues | Sprint 3 end / Sprint 4 start | Monthly Reliability Review + Revenue Review + All-Hands | Sprint 4 end / Sprint 5 start |
| **Month 3** | Sprint 5 continues | Sprint 5 end / Sprint 6 start | Monthly reviews | Sprint 6 end + **Quarterly Planning** + **QBR** + **Quarterly Service Review** |

::: info Quarterly Planning cadence
Quarterly Planning should happen in the last week of the quarter. Use it to review Initiative progress, close completed Initiatives, and prioritise new ones based on Feedback Point signal. Allow a half-day for this ceremony — it sets the direction for the next 6 sprints.
:::
