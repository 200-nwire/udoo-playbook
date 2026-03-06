# Project Master Document Template

The Project Master Document is one page per product. It links annual goals to personas to initiatives to features — so that any story in the system can be traced back to a reason.

It lives in Confluence. It is owned by the PM. It is never deleted — only updated.

::: tip Why this document exists
Six months into a product, someone asks: "Why did we build the reporting module?" Nobody remembers. The Confluence page is buried. The Jira Epic has no description. A new developer joins with no picture of why any of it exists. The Master Document is the spine that prevents this.
:::

---

## Example: The Momentum Master Document

Below is a complete, rendered Master Document for the Momentum product. Use it as the model when creating your own — replace the Momentum data with your product's reality.

---

### Product Context

Momentum is a daily reflection platform for working adults who want to build a journaling habit without adding friction to an already-full day. It serves people who value self-awareness but find existing journaling tools too rigid or too empty. The core tension it resolves: reflection is valuable but friction-heavy. Momentum removes the friction.

**Last updated:** 2025-03-01 &nbsp;·&nbsp; **Owner:** Noa Cohen

---

### Annual Goals

Business goals this product directly moves this year, linked to company OKRs. Every Initiative should reference a goal in this table.

| Goal | OKR link | How this product contributes |
|------|----------|------------------------------|
| Grow MAU to 50,000 | Q-OKR-2025-R1 | Retention features reduce day-30 churn |
| Achieve NPS > 45 | Q-OKR-2025-R2 | Journal quality + streaks improve satisfaction |
| Launch coaching tier | Q-OKR-2025-R3 | Coach dashboard unlocks new segment |

Updated annually when OKRs are set.

---

### Personas

Named personas for this product. Defined once, reused across all initiatives. Never recreated per initiative — only refined when research reveals something genuinely new.

| Persona | Role | Core Job-to-be-Done | Experience Snapshot |
|---------|------|---------------------|---------------------|
| Maya | Working mother, 30s | Build a daily reflection habit without adding friction | [Maya's Snapshot →](#) |
| Avi | Religious student, 20s | Study sacred texts and track reading progress | [Avi's Snapshot →](#) |
| Noa | Wellness coach | Track client engagement with reflection tools | [Noa's Snapshot →](#) |

::: info When to add a new persona
Only when a user type is genuinely different in their job-to-be-done, context, or failure mode. "Another type of busy professional" is a variant, not a new persona. New personas come from user research, not brainstorming.
:::

---

### Initiative Registry

Every initiative ever run for this product — past, present, and queued. Updated quarterly.

| Initiative | Quarter | Status | KPI targeted | Brief |
|-----------|---------|--------|--------------|-------|
| Living Wondrously Journal | Q3 2024 | ✅ Done | Day-30 retention +12% | [Brief →](#) |
| Streak & Reward System | Q4 2024 | ✅ Done | DAU/MAU +8% | [Brief →](#) |
| Social Sharing | Q1 2025 | 🔵 In Progress | Referral rate +15% | [Brief →](#) |
| Offline Mode | Q2 2025 | 📋 Queued | Day-7 retention +10% | [Brief →](#) |
| Coach Dashboard | Q3 2025 | 💡 Proposed | New segment: coaches | — |

**Status key:** ✅ Done · 🔵 In Progress · 📋 Queued · 💡 Proposed

---

### Feature Backlog

Every feature across all initiatives, grouped by initiative. Updated when Feature Loops complete.

| Feature | Initiative | Status | Feature Brief |
|---------|-----------|--------|---------------|
| Journal Entry Creation | Living Wondrously | ✅ Done | [Brief →](#) |
| Prompt Carousel | Living Wondrously | ✅ Done | [Brief →](#) |
| Daily Streak Tracker | Streak & Reward | ✅ Done | [Brief →](#) |
| Social Share Card | Social Sharing | 🔵 In Progress | [Brief →](#) |
| Friend Activity Feed | Social Sharing | 📋 Queued | — |

---

### Key Technical Decisions

ADRs that have shaped this product's architecture. Not a complete technical record — just the decisions any new team member should know before making architectural choices.

| Decision | Made | ADR |
|----------|------|-----|
| Vue 3 + Composition API (no Options API) | 2024-05 | [ADR-001 →](#) |
| MongoDB for user data, Redis for sessions | 2024-05 | [ADR-002 →](#) |
| Local-first sync with server reconciliation | 2024-09 | [ADR-038 →](#) |

---

### Team & Ownership

| Role | Person | Owns |
|------|--------|------|
| Product Manager | Noa Cohen | Initiative prioritisation, Feature Backlog, DoR quality |
| Tech Lead | Dan Levi | Architecture decisions, ADRs, technical feasibility |
| UX Lead | Dana Shapiro | Experience Snapshots, design system, visual references |
| QA Lead | Yael Katz | Gherkin scenarios, DoR checks, test coverage |
| Team Lead | Amos Ben-David | Sprint health, WIP limits, cadence, retrospectives |

---

## When to Update

The Master Document is updated at four specific moments — not continuously:

| When | What changes |
|------|-------------|
| **Quarterly** | Initiative Registry updated. Annual Goals reviewed against OKRs. |
| **Feature Loop completes** | Feature Backlog updated — completed features marked Done, new features added. |
| **User research reveals something new** | Persona entry updated, or new persona added if genuinely different. |
| **Architecture decision is made** | Key Technical Decisions table updated with new ADR link. |

It is never rewritten from scratch. It accumulates. That accumulation is its value.

---

## The Traceability Chain

Every story in the system traces back to this document — and forward through every phase until it becomes an observable signal in production.

**Upstream → Downstream:**

```
Project Master Document
  └── Annual Goal (OKR)
        └── Initiative Brief          [Upstream: 5 discovery stations]
              └── Feature Brief       [Upstream: Feature Loop]
                    └── Epic          [Upstream: Epic Loop → Jira]
                          └── Story (DoR ✅)
                                └── In Dev → In Review → In Test → Released (DoD ✅)
```

**Released → Operations → Growth → Loop:**

```
Released (DoD ✅)
  ├── Onstream                        [Service Delivery & SLA]
  │     ├── 7-day stability observation window
  │     ├── SLO / SLA monitoring active
  │     ├── Runbook updated for new behaviour
  │     └── Incident? → P0–P3 triage → RCA → Post-Mortem → process change
  │
  └── Offstream                       [Growth & Customer Success]
        ├── Customer health score updated
        ├── NPS / CSAT signal collected
        ├── Churn & expansion signals tracked
        └── Feedback signal to PM
              └── → New Initiative (loop closes back to Upstream)
```

If the upstream chain breaks — a story with no Feature Brief, a Feature with no Initiative — you've found the gap. **Fill the gap before writing the story.**

If the downstream chain breaks — a released feature with no runbook, no SLO, no health signal — you've found a reliability and growth risk. **Every release is a promise to Onstream. Every release is a signal to Offstream.**

---

## Quality Checklist

Before sharing the Master Document with the team:

- [ ] Product Context is one paragraph, written in plain language (not marketing copy)
- [ ] All personas are named individuals, not user types ("Maya", not "power users")
- [ ] Each persona links to a full Experience Snapshot
- [ ] Every initiative in the registry has a KPI target — not just a description
- [ ] Every initiative links to its Initiative Brief in Confluence
- [ ] Feature Backlog is current — no completed features still marked "In Progress"
- [ ] Key Technical Decisions links to actual ADR documents (not just descriptions)
- [ ] Team & Ownership is up to date — no former team members listed
- [ ] Document has an owner and a last-updated date at the top
