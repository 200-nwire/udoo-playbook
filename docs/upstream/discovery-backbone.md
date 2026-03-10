# Discovery Backbone

The discovery backbone describes **the five question areas that every loop in the [Upstream Spiral](/upstream/spiral-model) draws from**. Stations are not sequential form fields — they are conversations that produce artifacts.

::: info Stations and Loops
The five stations are question guides. The [Upstream Spiral](/upstream/spiral-model) defines *when* and *at what scope* those questions get asked. Understanding both is the key to running discovery without wasted effort.

| Station | Question | Asked in |
|---------|----------|---------|
| **Station 1 — Vision & Context** | Who is the user? What is the pain? Why now? | [Initiative Discovery](/upstream/activities-sprint) (Phase 1) |
| **Station 2 — Problem Framing** | How bad is it? What are the assumptions? What are the constraints? | [Initiative Discovery](/upstream/activities-sprint) (Phase 1–2) |
| **Station 3 — User Journey & Slices** | What does the user actually do, step by step? What ships first? | [Feature Discovery](/upstream/feature-activities) (Phase 1–2) |
| **Station 4 — Solution Options** | How could we build this? What are the tradeoffs? | [Feature Discovery](/upstream/feature-activities) (Phase 3) |
| **Station 5 — Decision & Scope** | What are we committing to? What's the MVP? | [Initiative Discovery](/upstream/activities-sprint) (Scope phase) + [Feature Discovery](/upstream/feature-activities) (Slice phase) |

Each station has a detailed guide page. The summaries below are the question sets — go to the station page for full templates, examples, and anti-patterns.
:::

---

## Station 1 — Vision & Context <span style="font-size: 0.75em; color: var(--vp-c-brand)">Initiative Discovery · Phase 1</span>

**Goal:** Align the team on the problem space before anyone proposes a solution.

**Questions to answer:**
- Who is the user? What is their job-to-be-done?
- What is the pain or opportunity? Where does it hurt today?
- Why now, not six months from now? What changed?
- What would success look like in measurable terms?
- What is explicitly out of scope?

**Output:** TL;DR paragraph + Business Context section in the Initiative Brief.

::: tip Example
**TL;DR:** "SMB customers abandon onboarding at step 3 (account verification) at 60%. We believe the verification UX is unclear and the email confirmation flow is broken on mobile. If we fix this, we expect onboarding completion to reach 70% within 90 days."
:::

**Anti-pattern:** Skipping this station and writing tickets directly. Teams that skip Station 1 always revisit it — mid-sprint, under pressure, expensively.

---

## Station 2 — Problem Framing <span style="font-size: 0.75em; color: var(--vp-c-brand)">Initiative Discovery · Phase 1–2</span>

**Goal:** Understand the current state deeply enough that the solution space narrows naturally.

**Questions to answer:**
- How does the user solve this today? What is their workaround?
- How much does it hurt? What is the business cost of not fixing it?
- What are the constraints? (technical, legal, budget, time)
- What assumptions are we making? State each one explicitly.
- What do we still not know? What needs investigation?

**Output:** Problem Statement + Assumption Register.

### The Assumption Register

Every assumption that could invalidate the initiative if wrong must be listed. For each:

```
Assumption: [State the assumption]
Confidence: [High / Medium / Low]
If wrong, impact: [What changes or breaks?]
How to verify: [Research, spike, user interview, analytics?]
```

::: warning
Assumption blindness is one of the most common causes of failed Initiatives. Teams that do not surface assumptions carry them as invisible risks until they explode in production.
:::

---

## Station 3 — User Journey & Slices <span style="font-size: 0.75em; color: var(--vp-c-brand)">Feature Discovery · Phase 1–2</span>

**Goal:** Map the full user journey for this Feature, identify where it fits, and propose delivery slices.

### Journey Mapping

Map the end-to-end flow a user takes to achieve their goal. Name each step with a verb:

```
J1 → Discover (user finds the product/feature)
J2 → Sign Up (user creates an account)
J3 → Configure (user completes setup)
J4 → Use (user performs the core action)
J5 → Share (user invites others or exports data)
J6 → Return (user comes back)
```

For each step, note:
- **Pain points:** What fails or frustrates today?
- **Risk:** What could go wrong if we change this step?
- **Opportunity:** What improvement is possible?

### Slices

A slice is an **end-to-end path a real user can walk** — not a feature, not a component, not a layer. Good slices are vertical, not horizontal.

| Slice | Rule |
|-------|------|
| **S1 (MVP)** | The minimum path that delivers real value to at least one user segment |
| **S2** | Extends S1 with the next most valuable capability |
| **S3** | The full experience for all target segments |

::: tip Good vs Bad Slices
**Bad:** S1 = Backend API, S2 = Frontend UI, S3 = Mobile app  
*(This is layering, not slicing. No user can use S1 alone.)*

**Good:** S1 = Admin user can manually verify balance, S2 = User self-serves via email link, S3 = Instant verification via open banking API
:::

Every Epic must reference which journey steps it covers (e.g., `covers: J2–J4`).

---

## Station 4 — Solution Options <span style="font-size: 0.75em; color: var(--vp-c-brand)">Feature Discovery · Phase 3</span>

**Goal:** Avoid jumping to one solution. Force the team to compare at least two.

For each option, document:
- **What:** Plain-language description
- **Tradeoffs:** What this gives up and what it gains
- **Rough size:** S / M / L / XL (S = 1 sprint, M = 2–4 sprints, L = quarter, XL = half-year)
- **Dependencies:** What needs to exist before this can start?

### Architecture Decision Notes (ADRs)

Any solution choice with lasting consequences requires an ADR. ADRs are not essays — they are records. Template:

```markdown
# ADR-001: [Short title of the decision]

**Date:** YYYY-MM-DD  
**Status:** Proposed | Accepted | Deprecated | Superseded by ADR-XXX

## Context
What situation are we in? What forces are at play?

## Decision
What did we decide to do?

## Rationale
Why did we choose this over alternatives?

## Consequences
What becomes easier? What becomes harder?
```

Run **time-boxed spikes** (max 2 days) for any high-risk technical unknowns before committing to an approach.

---

## Station 5 — Decision & Scope <span style="font-size: 0.75em; color: var(--vp-c-brand)">Initiative Discovery (scope) + Feature Discovery (slice)</span>

**Goal:** Freeze the scope. Lock the approach. Set the handoff conditions.

**Document:**
- **Chosen approach** and its rationale: `"We will {X} because {Y}. See {ADR link}."`
- **MVP slice and sequencing:** What ships first and why?
- **Success metrics:** How and where will they be measured?
- **Rollout plan:** Phased, feature-flagged, or big-bang?
- **Rollback plan:** How do we undo this if it goes wrong?

**Output:** Decision Log + Initiative Brief (frozen at stakeholder approval).

<div class="callout warning">
  <div class="callout-title">The freeze rule</div>
  Once the Initiative Brief is approved, scope changes require a formal log entry. This is not bureaucracy — it is the only way to know whether scope creep is happening.
</div>

---

**Next:** [Initiative Brief Template →](/upstream/initiative-brief)
