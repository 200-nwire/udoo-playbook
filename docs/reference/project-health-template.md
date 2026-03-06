# Project Health Template

The project health review is a fortnightly snapshot of the team's system, not just its output. Sprint completion tells you what shipped. The health review tells you whether the process that produces shipping is working.

Run it every two weeks, at the end of a sprint. Takes 20 minutes to fill in, 30 minutes to review with the team. If any dimension is Red, it becomes a retro action that week — not next month.

---

## When to Run It

| Cadence | Owner | Participants | Format |
|---------|-------|--------------|--------|
| Fortnightly, end of sprint | Team Lead | PM + Tech Lead + QA Lead | 30-min review meeting or async Confluence comment |

::: tip Don't skip the review when things are going well
The health review is most valuable when there's nothing obviously wrong. That's when slow degradation hides. A team that only reviews health during crises discovers problems too late to fix them cheaply.
:::

---

## Example: Momentum — Sprint 22

**Date:** 2025-03-14 &nbsp;·&nbsp; **Sprint:** 22 &nbsp;·&nbsp; **Owner:** Amos Ben-David &nbsp;·&nbsp; **Overall status:** 🟡 Watch

---

### Overall RAG Summary

| Dimension | Status | Trend | One-line summary |
|-----------|--------|-------|-----------------|
| Delivery | 🟢 | ↔ | 88% completion, cycle time holding at 2.5 days |
| Quality | 🟡 | ↓ | 3 P2 bugs opened this sprint; one is aging (sprint 20) |
| Upstream | 🔴 | ↓ | Only 3 Ready stories — half a sprint's capacity |
| Process | 🟢 | ↑ | All ceremonies ran; all retro actions closed |
| People | 🟢 | ↔ | Full team available; morale 4/5 |

---

### 1. Delivery Health

| Metric | This sprint | Last sprint | Threshold |
|--------|------------|-------------|-----------|
| Stories completed / committed | 7 / 8 (88%) | 9 / 10 (90%) | ≥ 80% |
| Average cycle time | 2.5 days | 2.8 days | ≤ 3 days |
| WIP | 2 | 3 | ≤ 4 |
| Stale items | 0 | 1 | 0 |
| PRs open > 2 days | 0 | 0 | 0 |

**Blockers this sprint:** None.

**Status:** 🟢 — Delivery is stable. One story deferred (MOM-341, design not ready in time).

---

### 2. Quality Health

| Priority | Open | New | Closed | Oldest |
|----------|------|-----|--------|--------|
| P0 | 0 | 0 | 0 | — |
| P1 | 0 | 0 | 0 | — |
| P2 | 3 | 2 | 1 | 21 days (MOM-298) |
| P3 | 7 | 1 | 2 | 45 days |

P0 target: 0 open. P1 target: all closed within same sprint. P2 target: no item > 4 sprints old.

MOM-298 has been open 3 sprints. Assigning to Dan this sprint — must close. Flaky tests: 2 (within threshold). DoD pass rate: 87%.

**Status:** 🟡 — MOM-298 aging P2 is the watchpoint. All else normal.

---

### 3. Upstream Health

| Metric | Current | Threshold |
|--------|---------|-----------|
| Stories in Ready state | 3 | ≥ 6 |
| Stories failing DoR first check | 1 | ≤ 2 |
| Active initiatives in discovery | 1 | ≥ 1 |
| Oldest story with no progress | Sprint 18 | < 6 sprints |

| Sprint | Stories entering sprint | % DoR-ready on day 1 |
|--------|------------------------|----------------------|
| Sprint 22 | 8 | 75% |
| Sprint 21 | 9 | 88% |
| Sprint 20 | 10 | 90% |

Only 3 stories are Ready — half capacity. Sprint 23 will be thin unless refinement this week produces 4+ more Ready stories.

**Status:** 🔴 — Upstream pipeline is starved. PM to run refinement Wed + Fri. Action: Noa to bring 6 candidate stories to refinement Wednesday.

---

### 4. Process Health

| Ceremony | Last held | Frequency | Owner | Status |
|----------|-----------|-----------|-------|--------|
| Daily standup | Daily | Daily | Amos | ✅ Running |
| Sprint planning | 2025-03-03 | Fortnightly | Amos | ✅ Running |
| Sprint review | 2025-03-03 | Fortnightly | Noa | ✅ Running |
| Retrospective | 2025-03-03 | Fortnightly | Amos | ✅ Running |
| Refinement | 2025-03-07 | Weekly | Noa | ✅ Running |

Retrospective actions from Sprint 21: 2 of 2 closed on time.

**Status:** 🟢 — All ceremonies running. All retro actions resolved.

---

### 5. People Health

| Person | Role | Available | Notes |
|--------|------|-----------|-------|
| Amos | Team Lead | 100% | — |
| Dan | Tech Lead | 100% | On-call this sprint |
| Noa | PM | 80% | Off Friday |
| Dana | UX | 100% | — |
| Yael | QA | 100% | — |

On-call: Dan is on his second sprint in a row — rotate next sprint.

| Dimension | Score (1–5) | Notes |
|-----------|-------------|-------|
| Morale | 4 | Strong sprint close last cycle |
| Clarity | 4 | Upstream gap is known and owned |
| Pace | 4 | Sustainable — no crunch this sprint |

**Status:** 🟢 — Full team available. On-call rotation needs attention next sprint.

---

### Actions Required

| # | Action | Owner | Due | Priority |
|---|--------|-------|-----|----------|
| 1 | Close MOM-298 (aging P2, 3 sprints old) | Dan | Sprint 22 end | 🔴 This sprint |
| 2 | Run 2 refinement sessions to fill Ready backlog | Noa | Wed + Fri | 🔴 This sprint |
| 3 | Investigate why MOM-341 design wasn't ready (process gap?) | Noa + Dana | Retro | 🟡 Next sprint |
| 4 | Rotate on-call — Dan has been on 2 sprints | Amos | Sprint 23 plan | 🟡 Next sprint |

---

### Trend View — Last 4 Sprints

| Dimension | Sprint 19 | Sprint 20 | Sprint 21 | Sprint 22 |
|-----------|-----------|-----------|-----------|-----------|
| Delivery | 🟢 | 🟢 | 🟢 | 🟢 |
| Quality | 🟢 | 🟡 | 🟡 | 🟡 |
| Upstream | 🟢 | 🟢 | 🟡 | 🔴 |
| Process | 🟢 | 🟢 | 🟢 | 🟢 |
| People | 🟢 | 🟢 | 🟢 | 🟢 |

::: warning Upstream trend is the signal to watch
The upstream pipeline has been degrading for 3 sprints. One 🟡 is a yellow light. Two consecutive 🟡 requires a named owner and plan. 🔴 this sprint — if not resolved within one sprint, escalate to the PM's manager.
:::

---

## Template Skeleton

::: details Copy-paste this structure into Confluence for a new health review

**Date:** YYYY-MM-DD &nbsp;·&nbsp; **Sprint:** [#] &nbsp;·&nbsp; **Owner:** [Team Lead] &nbsp;·&nbsp; **Overall status:** 🟢 / 🟡 / 🔴

---

**Overall RAG Summary**

| Dimension | Status | Trend | One-line summary |
|-----------|--------|-------|-----------------|
| Delivery | 🟢 / 🟡 / 🔴 | ↑ ↔ ↓ | [What's happening] |
| Quality | 🟢 / 🟡 / 🔴 | ↑ ↔ ↓ | [What's happening] |
| Upstream | 🟢 / 🟡 / 🔴 | ↑ ↔ ↓ | [What's happening] |
| Process | 🟢 / 🟡 / 🔴 | ↑ ↔ ↓ | [What's happening] |
| People | 🟢 / 🟡 / 🔴 | ↑ ↔ ↓ | [What's happening] |

---

**1. Delivery** — Cycle time · WIP · Stale items · PRs > 2 days · Sprint completion % → **Status:** 🟢 / 🟡 / 🔴

**2. Quality** — P0–P3 open counts · Flaky tests · DoD pass rate → **Status:** 🟢 / 🟡 / 🔴

**3. Upstream** — Stories in Ready state · DoR pass rate · Active initiatives → **Status:** 🟢 / 🟡 / 🔴

**4. Process** — Ceremonies running · Retro actions resolved → **Status:** 🟢 / 🟡 / 🔴

**5. People** — Availability · On-call load · Morale / Clarity / Pace → **Status:** 🟢 / 🟡 / 🔴

---

**Actions Required**

| # | Action | Owner | Due | Priority |
|---|--------|-------|-----|----------|
| 1 | [What needs to happen] | @name | [Date] | 🔴 This sprint / 🟡 Next sprint |

:::

---

## RAG Definitions

| Status | Meaning | Action required |
|--------|---------|----------------|
| 🟢 Healthy | Within threshold on all key metrics | Monitor |
| 🟡 Watch | One or more metrics outside threshold but stable or improving | Named owner + plan by end of sprint |
| 🔴 At Risk | Metric significantly outside threshold or trending wrong for 2+ sprints | Retro action this sprint; escalate if not resolved within 1 sprint |

---

## Thresholds Reference

| Metric | Green | Amber | Red |
|--------|-------|-------|-----|
| Sprint completion rate | ≥ 85% | 70–84% | < 70% |
| Cycle time (Ready → Released) | ≤ 3 days | 4–6 days | > 6 days |
| Stale items | 0 | 1–2 | > 2 |
| PRs open > 2 days | 0 | 1–2 | > 2 |
| Open P0 bugs | 0 | — | Any |
| Open P1 bugs older than 1 sprint | 0 | 1 | > 1 |
| Flaky tests | 0–2 | 3–5 | > 5 |
| Stories in Ready state | ≥ 1 sprint capacity | 0.5–1 sprint | < 0.5 sprint |
| DoR pass rate (first check) | ≥ 85% | 70–84% | < 70% |
| Days since last retrospective | ≤ 14 | 15–21 | > 21 |
| On-call: same person 2+ sprints | No | — | Yes |
