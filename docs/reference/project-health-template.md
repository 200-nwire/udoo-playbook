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

## Template

```markdown
# Project Health Review — [Product Name]

**Date:** YYYY-MM-DD
**Sprint:** [Sprint number]
**Owner:** [Team Lead name]
**Overall status:** 🟢 Healthy / 🟡 Watch / 🔴 At Risk

---

## Overall RAG Summary

| Dimension | Status | Trend | One-line summary |
|-----------|--------|-------|-----------------|
| Delivery | 🟢 / 🟡 / 🔴 | ↑ ↔ ↓ | [What's happening] |
| Quality | 🟢 / 🟡 / 🔴 | ↑ ↔ ↓ | [What's happening] |
| Upstream | 🟢 / 🟡 / 🔴 | ↑ ↔ ↓ | [What's happening] |
| Process | 🟢 / 🟡 / 🔴 | ↑ ↔ ↓ | [What's happening] |
| People | 🟢 / 🟡 / 🔴 | ↑ ↔ ↓ | [What's happening] |

---

## 1. Delivery Health

### Sprint Completion
| Metric | This sprint | Last sprint | Threshold |
|--------|------------|------------|-----------|
| Stories committed | [#] | [#] | — |
| Stories completed | [#] | [#] | ≥ 80% of committed |
| Points committed | [#] | [#] | — |
| Points completed | [#] | [#] | ≥ 80% of committed |
| Stories that bounced (returned from QA/PM) | [#] | [#] | ≤ 1 per sprint |

### Flow Metrics
| Metric | Current | Last sprint | Threshold |
|--------|---------|------------|-----------|
| Average cycle time (Ready → Released) | [X days] | [X days] | ≤ 3 days |
| Current WIP (stories In Dev or In Review) | [#] | [#] | ≤ WIP limit |
| Stale items (no movement in > 5 days) | [#] | [#] | 0 |
| PRs open > 2 days | [#] | [#] | 0 |

### Blockers
| Blocker | Impact | Owner | Days blocked | Resolution plan |
|---------|--------|-------|-------------|-----------------|
| [Description] | [Story or Epic blocked] | @name | [#] | [Plan] |

**Status:** 🟢 / 🟡 / 🔴 — [One sentence explanation]

---

## 2. Quality Health

### Bug Inventory
| Priority | Open this sprint | New this sprint | Closed this sprint | Age of oldest |
|----------|-----------------|-----------------|-------------------|---------------|
| P0 | [#] | [#] | [#] | [days] |
| P1 | [#] | [#] | [#] | [days] |
| P2 | [#] | [#] | [#] | [days] |
| P3 | [#] | [#] | [#] | [days] |

P0 target: 0 open. P1 target: all closed within same sprint. P2 target: no item > 4 sprints old.

### Test Health
| Metric | Current | Threshold |
|--------|---------|-----------|
| Flaky tests (@flaky tag count) | [#] | ≤ 5 |
| Smoke suite pass rate (last 5 runs) | [%] | 100% |
| DoD pass rate (stories passing first QA review) | [%] | ≥ 85% |
| Stories returned from QA for rework | [#] | ≤ 1/sprint |

**Status:** 🟢 / 🟡 / 🔴 — [One sentence explanation]

---

## 3. Upstream Health

### Discovery Pipeline
| Metric | Current | Threshold |
|--------|---------|-----------|
| Stories in Ready state (DoR passed) | [#] | ≥ 1 sprint's capacity |
| Stories failing DoR on first check | [#] | ≤ 2/sprint |
| Initiatives in active discovery | [#] | ≥ 1 |
| Oldest story in backlog with no progress | [age] | < 6 sprints |

### Readiness Trend
| Sprint | Stories entering sprint | % DoR-ready on day 1 |
|--------|-----------------------|----------------------|
| Current | [#] | [%] |
| Last | [#] | [%] |
| 2 sprints ago | [#] | [%] |

**Status:** 🟢 / 🟡 / 🔴 — [One sentence explanation]

---

## 4. Process Health

### Ceremonies
| Ceremony | Last held | Frequency | Owner | Status |
|----------|-----------|-----------|-------|--------|
| Daily standup | [date] | Daily | Team Lead | Running / Skipped |
| Sprint planning | [date] | Fortnightly | Team Lead | Running / Skipped |
| Sprint review | [date] | Fortnightly | PM | Running / Skipped |
| Retrospective | [date] | Fortnightly | Team Lead | Running / Skipped |
| Refinement | [date] | Weekly | PM | Running / Skipped |

Any ceremony skipped 2 weeks in a row → 🔴.

### Retrospective Actions
| Action | Owner | Sprint due | Status |
|--------|-------|-----------|--------|
| [Action from last retro] | @name | Sprint [#] | ✅ Done / 🔵 In progress / ❌ Missed |

**Status:** 🟢 / 🟡 / 🔴 — [One sentence explanation]

---

## 5. People Health

### Load & Availability
| Person | Role | Available this sprint | Notes |
|--------|------|----------------------|-------|
| [Name] | [Role] | [%] | [Leave / on-call / other project] |

### On-Call
| Metric | Current |
|--------|---------|
| Current on-call rotation size | [# people] |
| P0 incidents last sprint | [#] |
| Hours spent on incidents last sprint | [hours] |
| Same person on-call 2+ sprints in a row? | Yes / No |

### Team Signal
| Dimension | Score (1–5) | Notes |
|-----------|-------------|-------|
| Morale | [1–5] | [Optional context] |
| Clarity (do we know what to build and why?) | [1–5] | |
| Pace (is the workload sustainable?) | [1–5] | |

Self-assessed by Team Lead based on standups, 1:1s, and retro sentiment.
Anything ≤ 2 → address in the current sprint, not next quarter.

**Status:** 🟢 / 🟡 / 🔴 — [One sentence explanation]

---

## Actions Required

| # | Action | Owner | Due | Priority |
|---|--------|-------|-----|----------|
| 1 | [What needs to happen] | @name | [Date] | 🔴 This sprint / 🟡 Next sprint |
| 2 | | | | |

---

## Notes & Context
[Anything that doesn't fit in the metrics above — context about a spike in bugs, a team change, an incident that skewed the numbers, etc.]

---

## Trend View (last 4 sprints)
| Dimension | Sprint N-3 | Sprint N-2 | Sprint N-1 | Sprint N |
|-----------|-----------|-----------|-----------|---------|
| Delivery | 🟢/🟡/🔴 | 🟢/🟡/🔴 | 🟢/🟡/🔴 | 🟢/🟡/🔴 |
| Quality | | | | |
| Upstream | | | | |
| Process | | | | |
| People | | | | |
```

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

---

## Worked Example

```markdown
# Project Health Review — Momentum

**Date:** 2025-03-14
**Sprint:** Sprint 22
**Owner:** Amos Ben-David
**Overall status:** 🟡 Watch

---

## Overall RAG Summary

| Dimension | Status | Trend | One-line summary |
|-----------|--------|-------|-----------------|
| Delivery | 🟢 | ↔ | 88% completion, cycle time holding at 2.5 days |
| Quality | 🟡 | ↓ | 3 P2 bugs opened this sprint; one is aging (sprint 20) |
| Upstream | 🔴 | ↓ | Only 3 Ready stories — half a sprint's capacity |
| Process | 🟢 | ↑ | All ceremonies ran; all retro actions closed |
| People | 🟢 | ↔ | Full team available; morale 4/5 |

---

## 1. Delivery Health

| Metric | This sprint | Last sprint | Threshold |
|--------|------------|------------|-----------|
| Stories completed / committed | 7 / 8 (88%) | 9 / 10 (90%) | ≥ 80% |
| Average cycle time | 2.5 days | 2.8 days | ≤ 3 days |
| WIP | 2 | 3 | ≤ 4 |
| Stale items | 0 | 1 | 0 |
| PRs open > 2 days | 0 | 0 | 0 |

**Status:** 🟢 — Delivery is stable. One story deferred (MOM-341, design not ready in time).

---

## 2. Quality Health

| Priority | Open | New | Closed | Oldest |
|----------|------|-----|--------|--------|
| P0 | 0 | 0 | 0 | — |
| P1 | 0 | 0 | 0 | — |
| P2 | 3 | 2 | 1 | 21 days (MOM-298) |
| P3 | 7 | 1 | 2 | 45 days |

MOM-298 has been open 3 sprints. Assigning to Dan this sprint — must close.
Flaky tests: 2 (within threshold).

**Status:** 🟡 — MOM-298 aging P2 is the watchpoint. All else normal.

---

## 3. Upstream Health

| Metric | Current | Threshold |
|--------|---------|-----------|
| Stories in Ready state | 3 | ≥ 6 |
| Stories failing DoR first check | 1 | ≤ 2 |
| Active initiatives in discovery | 1 | ≥ 1 |

Only 3 stories are Ready — half capacity. Sprint 23 will be thin unless
refinement this week produces 4+ more Ready stories.

**Status:** 🔴 — Upstream pipeline is starved. PM to run refinement Wed + Fri.
             Action: Noa to bring 6 candidate stories to refinement Wednesday.

---

## Actions Required

| # | Action | Owner | Due | Priority |
|---|--------|-------|-----|----------|
| 1 | Close MOM-298 (aging P2, 3 sprints old) | Dan | Sprint 22 end | 🔴 This sprint |
| 2 | Run 2 refinement sessions to fill Ready backlog | Noa | Wed + Fri | 🔴 This sprint |
| 3 | Investigate why MOM-341 design wasn't ready (process gap?) | Noa + Dana | Retro | 🟡 Next sprint |
```
