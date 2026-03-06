# Project Master Document Template

The Project Master Document is one page per product. It links annual goals to personas to initiatives to features — so that any story in the system can be traced back to a reason.

It lives in Confluence. It is owned by the PM. It is never deleted — only updated.

::: tip Why this document exists
Six months into a product, someone asks: "Why did we build the reporting module?" Nobody remembers. The Confluence page is buried. The Jira Epic has no description. A new developer joins with no picture of why any of it exists. The Master Document is the spine that prevents this.
:::

---

## Template

```markdown
# [Product Name] — Project Master Document

Last updated: YYYY-MM-DD | Owner: [PM name]

---

## Product Context
[One paragraph. What is this product? What problem does it solve? For whom?
What tension does it resolve? Plain language — not marketing, not technical.]

---

## Annual Goals
Business goals this product directly moves this year. Linked to company OKRs.

| Goal | OKR link | How this product contributes |
|------|----------|------------------------------|
| [Goal description] | [OKR-ID or link] | [Specific contribution] |

Updated annually when OKRs are set. Every Initiative should reference a goal here.

---

## Personas
Named personas for this product. Defined once, reused across all initiatives.
Never recreated per initiative — only refined when research reveals something genuinely new.

| Persona | Role | Core Job-to-be-Done | Experience Snapshot |
|---------|------|---------------------|---------------------|
| [Name] | [Role / segment] | [Primary JTBD] | [Link to full snapshot] |

::: info When to add a new persona
Only when a user type is genuinely different in their job-to-be-done, context, or failure mode.
"Another type of busy professional" is a variant, not a new persona. New personas come
from user research, not brainstorming.
:::

---

## Initiative Registry
Every initiative ever run for this product. Past, present, and queued.

| Initiative | Quarter | Status | KPI targeted | Brief |
|-----------|---------|--------|--------------|-------|
| [Initiative name] | Q? 20XX | ✅ Done / 🔵 In Progress / 📋 Queued / 💡 Proposed | [Metric + target] | [Link] |

**Status key:**
- ✅ Done — shipped and in Onstream
- 🔵 In Progress — active in Downstream
- 📋 Queued — approved, Upstream complete, awaiting team capacity
- 💡 Proposed — idea logged, not yet started

---

## Feature Backlog
Every feature across all initiatives — grouped by initiative, showing status.
This is the PM's queue. Updated when Feature Loops complete.

| Feature | Initiative | Status | Feature Brief |
|---------|-----------|--------|---------------|
| [Feature name] | [Initiative name] | ✅ Done / 🔵 In Progress / 📋 Queued / — | [Link or —] |

---

## Key Technical Decisions
ADRs that have shaped this product's architecture. Not a complete technical record —
just the decisions any new team member should know before making architectural choices.

| Decision | Made | ADR |
|----------|------|-----|
| [What was decided] | YYYY-MM-DD | [ADR link] |

---

## Team & Ownership
Who owns what. Updated when the team changes.

| Role | Person | Owns |
|------|--------|------|
| Product Manager | [Name] | Initiative prioritisation, Feature Backlog, DoR quality |
| Tech Lead | [Name] | Architecture decisions, ADRs, technical feasibility |
| UX Lead | [Name] | Experience Snapshots, design system, visual references |
| QA Lead | [Name] | Gherkin scenarios, DoR checks, test coverage |
| Team Lead | [Name] | Sprint health, WIP limits, cadence, retrospectives |
```

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

Every story in the system should trace back to this document:

```
Project Master Document
  └── Annual Goal
        └── Initiative Brief
              └── Feature Brief
                    └── Epic
                          └── Story (DoR ✅)
                                └── Downstream
```

If you follow this chain and it breaks — a story that doesn't trace to a Feature Brief,
a Feature that doesn't trace to an Initiative — you've found the gap. Fill the gap before
writing the story.

---

## Worked Example

```markdown
# Momentum — Project Master Document

Last updated: 2025-03-01 | Owner: Noa Cohen

---

## Product Context
Momentum is a daily reflection platform for working adults who want to build
a journaling habit without adding friction to an already-full day. It serves
people who value self-awareness but find existing journaling tools too rigid
or too empty. The core tension it resolves: reflection is valuable but
friction-heavy. Momentum removes the friction.

---

## Annual Goals
| Goal | OKR | How this product contributes |
|------|-----|------------------------------|
| Grow MAU to 50,000 | Q-OKR-2025-R1 | Retention features reduce day-30 churn |
| Achieve NPS > 45 | Q-OKR-2025-R2 | Journal quality + streaks improve satisfaction |
| Launch coaching tier | Q-OKR-2025-R3 | Coach dashboard unlocks new segment |

---

## Personas
| Persona | Role | Job-to-be-Done | Experience Snapshot |
|---------|------|----------------|---------------------|
| Maya | Working mother, 30s | Build a daily reflection habit without adding friction | [Maya's Snapshot →](#) |
| Avi | Religious student, 20s | Study sacred texts and track reading progress | [Avi's Snapshot →](#) |
| Noa | Wellness coach | Track client engagement with reflection tools | [Noa's Snapshot →](#) |

---

## Initiative Registry
| Initiative | Quarter | Status | KPI | Brief |
|-----------|---------|--------|-----|-------|
| Living Wondrously Journal | Q3 2024 | ✅ Done | Day-30 retention +12% | [Brief →](#) |
| Streak & Reward System | Q4 2024 | ✅ Done | DAU/MAU +8% | [Brief →](#) |
| Social Sharing | Q1 2025 | 🔵 In Progress | Referral rate +15% | [Brief →](#) |
| Offline Mode | Q2 2025 | 📋 Queued | Day-7 retention +10% | [Brief →](#) |
| Coach Dashboard | Q3 2025 | 💡 Proposed | New segment: coaches | — |

---

## Feature Backlog
| Feature | Initiative | Status | Brief |
|---------|-----------|--------|-------|
| Journal Entry Creation | Living Wondrously | ✅ Done | [Brief →](#) |
| Prompt Carousel | Living Wondrously | ✅ Done | [Brief →](#) |
| Daily Streak Tracker | Streak & Reward | ✅ Done | [Brief →](#) |
| Social Share Card | Social Sharing | 🔵 In Progress | [Brief →](#) |
| Friend Activity Feed | Social Sharing | 📋 Queued | — |

---

## Key Technical Decisions
| Decision | Made | ADR |
|----------|------|-----|
| Vue 3 + Composition API (no Options API) | 2024-05 | [ADR-001 →](#) |
| MongoDB for user data, Redis for sessions | 2024-05 | [ADR-002 →](#) |
| Local-first sync with server reconciliation | 2024-09 | [ADR-038 →](#) |

---

## Team & Ownership
| Role | Person | Owns |
|------|--------|------|
| Product Manager | Noa Cohen | Initiative prioritisation, Feature Backlog |
| Tech Lead | Dan Levi | Architecture decisions, ADRs |
| UX Lead | Dana Shapiro | Experience Snapshots, design system |
| QA Lead | Yael Katz | Gherkin, DoR checks, test coverage |
| Team Lead | Amos Ben-David | Sprint health, WIP, cadence |
```

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
