# The Project Master Document

<span class="phase-badge upstream">🔵 Upstream</span>

## The Problem It Solves

Six months into a product, someone asks: "Why did we build the reporting module?" Nobody remembers. The PM who shaped that initiative left. The Confluence page is buried. The Jira epic says "Reporting — Phase 1" with no description.

A new developer joins. They have no idea who the product is for or what problems it solves. They read stories in Jira. Each story makes local sense. None of them add up to a picture of why any of it exists.

This is a project without a spine.

The Project Master Document is the spine. One living page per product. It links annual goals to personas to initiatives to features — so that any story in the system can be traced back to a reason.

---

## What It Is

The Project Master Document is not a spec. It is not a roadmap. It is not a status report.

It is an **index** — a single page that links every major artifact in the product's life together. When it exists, a new team member can understand the product in 20 minutes. When it doesn't, they spend two weeks asking questions that are already answered somewhere in Confluence, if only they could find them.

It lives in Confluence. It is owned by the PM. It is never deleted — only updated.

---

## Structure

### 1. Product Context

One paragraph. What is this product? What problem does it solve? For whom? Written in plain language — not marketing language, not technical language.

> **Example:** Momentum is a wellness platform for working adults who want to build daily reflection habits. It serves people who feel the need to slow down and notice their lives but find existing journaling tools either too rigid or too empty. The primary tension it resolves: reflection is valuable but friction-heavy. Momentum removes the friction.

This paragraph changes rarely — maybe once a year, when the product's positioning shifts. If it's changing every quarter, the product doesn't have a clear purpose yet.

---

### 2. Annual Goals

The business goals the product is contributing to this year. Not every goal the company has — only the ones this product directly moves. Linked to the company OKR document.

| Goal | OKR Link | How This Product Contributes |
|------|----------|------------------------------|
| Grow MAU to 50,000 | Q-OKR-2025 | Retention features reduce day-30 churn |
| Achieve NPS > 45 | Q-OKR-2025 | Journal quality + streak system improve satisfaction |

Updated annually. Cross-referenced in every Initiative Brief ("this initiative contributes to goal X").

---

### 3. Personas

The named personas for this product. Defined once. Reused across every initiative and feature. **Never recreated per initiative** — only refined when user research reveals something genuinely new about the user's world.

Each persona entry links to their full Experience Snapshot.

| Persona | Role | Core Job-to-be-Done | Snapshot |
|---------|------|---------------------|----------|
| **Maya** | Working mother, 30s | Build a daily reflection habit without adding friction to an already-full day | [Maya's Snapshot →](#) |
| **Avi** | Religious student, 20s | Study sacred texts consistently and track his reading progress | [Avi's Snapshot →](#) |
| **Noa** | Wellness coach | Recommend and track client engagement with reflection tools | [Noa's Snapshot →](#) |

::: info When to add a new persona
Add a new persona only when you discover a user type that is genuinely different in their job-to-be-done, their context, or their failure mode. "Another type of busy professional" is not a new persona — it is a variant of an existing one. New personas come from user research, not brainstorming.
:::

---

### 4. Initiative Registry

Every initiative ever run for this product. Past initiatives show what was built and what it was supposed to achieve. Current initiatives show what's in flight. Queued initiatives show what's been approved for future quarters.

| Initiative | Quarter | Status | KPI Targeted | Brief |
|-----------|---------|--------|--------------|-------|
| Living Wondrously Journal | Q3 2024 | ✅ Done | Day-30 retention +12% | [Brief →](#) |
| Streak & Reward System | Q4 2024 | ✅ Done | DAU/MAU ratio +8% | [Brief →](#) |
| Social Sharing | Q1 2025 | 🔵 In Progress | Referral rate +15% | [Brief →](#) |
| Offline Mode | Q2 2025 | 📋 Queued | Day-7 retention +10% | [Brief →](#) |
| Coach Dashboard | Q3 2025 | 💡 Proposed | New segment: coaches | — |

::: tip The initiative registry prevents duplication
Without this registry, teams sometimes start work on an initiative that was already run — or run an initiative whose problem was already solved by a previous one. The registry is institutional memory. It costs 5 minutes to update and saves weeks of repeated discovery.
:::

---

### 5. Feature Backlog

Every feature across all initiatives — grouped by initiative, showing status. This is the PM's queue. When a Feature Discovery completes and an initiative wraps up, its features graduate to this backlog. The PM picks the next feature to enter Feature Discovery from here.

| Feature | Initiative | Status | Feature Brief |
|---------|-----------|--------|---------------|
| Journal Entry Creation | Living Wondrously | ✅ Done | [Brief →](#) |
| Prompt Carousel | Living Wondrously | ✅ Done | [Brief →](#) |
| Past Entries Browser | Living Wondrously | ✅ Done | [Brief →](#) |
| Daily Streak Tracker | Streak & Reward | ✅ Done | [Brief →](#) |
| Social Share Card | Social Sharing | 🔵 In Progress | [Brief →](#) |
| Friend Activity Feed | Social Sharing | 📋 Queued | — |
| Offline Reading | Offline Mode | 📋 Queued | — |

The Feature Backlog makes the answer to "what do we work on next?" a decision, not a debate. The PM looks at the backlog, picks the next highest-priority feature with capacity to enter Feature Discovery, and starts.

---

### 6. Key Technical Decisions

Links to the ADRs that have shaped the product's architecture. Not a complete technical document — just the decisions that any new team member should know about before making architectural choices.

| Decision | Made | ADR |
|----------|------|-----|
| Vue 3 + Composition API (no Options API) | Q2 2024 | [ADR-001 →](#) |
| MongoDB for user data, Redis for sessions | Q2 2024 | [ADR-002 →](#) |
| Feature flags via LaunchDarkly | Q3 2024 | [ADR-005 →](#) |

---

### 7. Team & Ownership

Who owns what. Updated when the team changes.

| Role | Person | Owns |
|------|--------|------|
| Product Manager | Maya Cohen | Initiative prioritization, Feature Backlog |
| Tech Lead | Oren Levi | Architecture decisions, Tech feasibility |
| UX Lead | Dana Shapiro | Experience Snapshots, Design system |
| QA Lead | Yael Katz | Gherkin, DoR checks, Test coverage |
| Delivery Manager | Amos Ben-David | Sprint health, Kanban WIP, Cadence |

---

## How It Evolves

The Project Master Document is not written once and forgotten. It is updated at four moments:

| When | What changes |
|------|-------------|
| **Quarterly** | Initiative Registry updated — new initiatives added, completed ones marked done. Annual Goals reviewed. |
| **When a Feature Discovery completes** | Feature Backlog updated — new features added, in-progress ones marked done. |
| **When user research reveals something new** | Persona entries updated. New persona added if genuinely new user type discovered. |
| **When an architectural decision is made** | Key Technical Decisions table updated with new ADR link. |

It is never rewritten from scratch. It accumulates. That accumulation is its value — a team three years into a product can open this document and see the entire history of decisions made, initiatives run, and features shipped.

---

## The Traceability Chain

Every story in the system should be traceable from this document. The chain:

```
Project Master Document
  └── Annual Goal (e.g., "Grow MAU to 50,000")
        └── Initiative (e.g., "Living Wondrously Journal")
              └── Feature (e.g., "Journal Entry Creation")
                    └── Epic (e.g., "Write and save a reflection")
                          └── Story (e.g., "As Maya, I want to save a draft mid-entry...")
                                └── DoR ✅ → Downstream
```

If you follow this chain and it breaks — a story that doesn't trace to a Feature Brief, a Feature that doesn't trace to an Initiative — you've found the gap. Don't write the story. Fill the gap first.

This is the discipline that keeps the project coherent over years, not just months.

---

## Template

Copy this structure into a new Confluence page when starting a product. The page is the master document — every artifact created afterward links back to it.

```markdown
# [Product Name] — Project Master Document

Last updated: [date] | Owner: [PM name]

---

## Product Context
[One paragraph — what is this product, for whom, what tension does it resolve]

---

## Annual Goals
| Goal | OKR | How this product contributes |
|------|-----|------------------------------|
| ... | ... | ... |

---

## Personas
| Persona | Role | Job-to-be-Done | Snapshot |
|---------|------|----------------|----------|
| ... | ... | ... | [link] |

---

## Initiative Registry
| Initiative | Quarter | Status | KPI | Brief |
|-----------|---------|--------|-----|-------|
| ... | ... | ... | ... | [link] |

---

## Feature Backlog
| Feature | Initiative | Status | Brief |
|---------|-----------|--------|-------|
| ... | ... | ... | [link] |

---

## Key Technical Decisions
| Decision | Date | ADR |
|----------|------|-----|
| ... | ... | [link] |

---

## Team & Ownership
| Role | Person | Owns |
|------|--------|------|
| ... | ... | ... |
```

---

