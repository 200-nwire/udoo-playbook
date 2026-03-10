# Feature Activities — Feature Discovery

<span class="phase-badge upstream">🔵 Upstream</span>

> **Where this fits:** This is the second level of [the Upstream Spiral](/upstream/spiral-model) — a 1-week sprint where the PM and Core Trio run the 5-station Discovery Workshop scoped to a single feature. It runs once per Feature — after [Initiative Discovery](/upstream/activities-sprint) has produced the Feature List and before any [Epic Refinement](/upstream/epic-activities) can begin.

---

## The Moment This Page Is For

The initiative is approved. The Feature List exists. Feature A is called "User Reporting" and has a one-line description: "Users can view and export their activity data." Everyone nods. Development begins.

Three weeks later, the developer building the export asks: "Export to what format? CSV? PDF? Can they filter by date range? What happens if the dataset is 50,000 rows?" The PM says "let me check with the stakeholder." The stakeholder says "we actually meant a dashboard, not an export." The developer scraps two weeks of work.

The one-line Feature description was agreement on a name, not agreement on a feature. Feature Discovery exists to close that gap — to take a Feature from "named" to "understood well enough to build Epic by Epic."

::: warning The most commonly skipped level — and the most expensive
Feature Discovery is the level teams skip most often. It feels like overhead: the initiative is approved, why not just start building?

What skipping costs:
- Stories written without a journey map drift in scope mid-sprint
- Edge cases surface during QA that a Three Amigos session would have caught in an afternoon
- Developers ask "what happens when X?" in the middle of implementation — because no Feature Brief exists to answer it
- The epic ships, but nobody agrees what the *feature* was supposed to feel like

Skipping Feature Discovery feels like saving a week. It costs 2–3 sprints of rework.
:::

---

## What the Feature Discovery Produces

By the end of the Feature Discovery, the team knows:

- The specific user journey for this Feature, step by step
- What the Epics are, and which one ships first
- What the UI flow looks like (lo-fi — not pixel-perfect)
- What the technical risks are, and whether they're resolved
- What the design direction is — not the final design, but the approach

With this in hand, the Epic Refinement can produce DoR-ready stories reliably. Without it, each Epic Refinement starts from scratch — rebuilding context, relitigating scope decisions, and discovering technical blockers one sprint too late.

---

::: tip Station deep-dives for this loop
The 5 Discovery Stations are detailed question guides that go deeper than the activity descriptions below. For this loop, the most relevant are:
- **[Station 3 — User Journey & Slices](/upstream/station-3-journey)** → feeds F-3, F-5, F-7
- **[Station 4 — Solution Options](/upstream/station-4-options)** → feeds F-8, F-9, F-10
- **[Station 5 — Decision & Scope](/upstream/station-5-decision)** → feeds F-7 (Feature Slice)
:::

::: info If you need the short version
Five things must exist before any story is written for this feature:
1. **Feature Brief** — purpose, persona, scope, success signal (F-1)
2. **Experience Snapshot** — specific to this feature's user and moment (F-2)
3. **Journey map** — every step the user takes, annotated with pain (F-3)
4. **Named Epics** — each covering a section of the journey (F-5)
5. **Feature Slice** — what ships first, confirmed by stakeholder (F-7)

Without these five, the Epic Refinement builds stories on unstable ground. Read the full activity list as reference while you're doing the work — not as a checklist to complete in order.
:::

## The 11 Feature Activities

---

### Phase 1: Frame This Feature

> *Narrow the focus from the full initiative to this specific capability. Who uses it? What are they trying to do?*

---

**[F-1] Feature Brief** — MUST

A Feature Brief is a scoped version of the Initiative Brief for a single feature. It does not repeat everything — it inherits the initiative context and adds the feature-specific detail.

- **Output:** Feature Brief page in Confluence with: feature goal (one sentence), primary persona for this feature (may differ from the initiative's primary persona), journey scope (which journey steps does this feature cover?), what this feature explicitly does NOT include, and the success signal (how will we know this feature is working?)
- **Who:** PM
- **Done when:** Tech Lead and QA Lead can read it and agree on what the feature is and isn't. No ambiguity about scope.

::: tip One feature, one persona
Different features within the same initiative often serve different personas. The "Admin Dashboard" feature serves the admin. The "Student Progress View" feature serves the student. Write the Feature Brief for the person who will actually use this feature — not the initiative's primary persona if they're different.
:::

---

**[F-2] Feature Experience Snapshot** — MUST

A 150-word present-tense narrative of the persona using this Feature in a specific moment. This is not the initiative-level snapshot — it is feature-specific, scoped to the exact capability being built.

- **Output:** Experience Snapshot (≥150 words) — linked from the Feature Brief
- **Who:** PM + UX Designer
- **Done when:** Someone who reads the snapshot can describe what the user is doing, where they are, what they're feeling, and what this feature makes possible for them.

See [Experience Snapshot](/upstream/experience-snapshot) for the full format and examples.

---

**[F-3] User Journey Mapping** — MUST

Map every step the user takes within this Feature — from entry point to goal completion. Verb-noun format per step. Annotate each step with: the user's emotional state, the pain points, and the risk (what breaks if this step fails?).

- **Output:** Journey map (Miro / FigJam / photo) — linked from the Feature Brief. Each step annotated with pain and risk.
- **Who:** PM + UX Designer (Tech Lead recommended)
- **Done when:** The happy path is mapped end-to-end. The top 3 pain points are annotated. The Tech Lead has reviewed the map and flagged any steps with technical risk. The map is linked from the Feature Brief.

::: tip Map before wireframing
Journey mapping and wireframing are not the same activity. The journey map describes *what the user does*. The wireframe describes *what they see*. Do the journey map first — it prevents wireframes from designing solutions to the wrong steps.
:::

---

### Phase 2: Structure the Work

> *The journey is mapped. Now turn it into a buildable structure: Epics organized along the journey, with the first-to-ship Epic clear.*

---

**[F-4] Lo-fi Wireframe / User Flow** — GOOD

Turn the journey map into a screen-by-screen flow. Not visual design — just structure: which screen, what options, what the user does, what happens next.

- **Output:** Lo-fi wireframe or clickable flow (Figma / Miro) covering the Feature's main journey path. Error states and edge flows noted.
- **Who:** UX Designer (PM reviews for scope accuracy)
- **Done when:** The main flow is walkable step-by-step. The top 3 edge cases are addressed (even if just noted as "show error state here"). No visual design required at this stage.

---

**[F-5] Define Epics** — MUST

Group journey steps into named Epics. Each Epic covers a cohesive section of the user's journey — a cluster of steps that together achieve a sub-goal. Epics are the organizing units that the delivery team will build one at a time.

Rules for naming Epics:
- Verb-noun phrase: "Configure exam settings," not "Exam settings"
- User-facing, not technical: "Submit reflection," not "POST /reflections endpoint"
- Covers 2–6 journey steps (if an Epic covers more, split it)

- **Output:** Named Epics created in Jira, each linked to the journey steps it covers, each with a one-sentence goal statement
- **Who:** PM
- **Done when:** All journey steps are covered by at least one Epic. No story in this Feature will be an orphan — every story will fit into one of the named Epics.

---

**[F-6] Epic Prioritization** — MUST

Not all Epics ship at once. Which Epic must come first? Which delivers the most user value independently? Which is a prerequisite for others?

- **Output:** Epics ranked in Jira backlog with rationale for prioritization order
- **Who:** PM + Tech Lead + stakeholder
- **Done when:** Epics have a clear ranked order. The top-priority Epic has at least a rough story list. The Tech Lead has confirmed the prioritization doesn't create delivery deadlocks (i.e., Epic 3 doesn't depend on Epic 4 being built first).

---

**[F-7] Feature Slice** — MUST

Draw the line between what ships in the first release of this Feature and what ships later. This is the Feature-level version of S1/S2/S3.

- **Output:** Epics grouped into Release 1 / Release 2 / Deferred. Release 1 described as "what the user can do" — not "which epics ship." Stakeholder confirmation documented.
- **Who:** PM + Tech Lead + stakeholder
- **Done when:** Release 1 can be described in one user-outcome sentence. Tech Lead confirms it is independently deployable. Stakeholder confirms it is valuable without Release 2.

---

### Phase 3: Validate the Approach

> *The structure is clear. Now confirm you can build it — technically, visually, and architecturally — before any Epic Refinement begins.*

---

**[F-8] Technical Feasibility Check** — MUST

Map what this Feature needs from other systems. Identify what already exists (don't rebuild). Flag integration risks specific to this Feature.

- **Output:** Dependency map — each dependency named with: system, what's needed, whether it exists or needs building, and risk level
- **Who:** Tech Lead
- **Done when:** Tech Lead can say "here are the external systems involved, here is what each provides, here are the risks we're watching." Map is in Confluence, linked from the Feature Brief.

---

**[F-9] Spikes for Feature Unknowns** — MUST (when unknowns exist)

A time-boxed investigation (max 2 days per spike) to answer a specific technical question that blocks confident Epic shaping. Spikes produce findings, not solutions.

- **Output:** Spike report — question asked, approach taken, finding, recommendation
- **Who:** Tech Lead or designated developer
- **Done when:** The question is answered with evidence. All Epics that were blocked on the spike are unblocked. Any story affected by the spike's finding is updated.

---

**[F-10] Feature ADR** — MUST (when key decisions needed)

For every significant architectural decision within this Feature, write an Architecture Decision Record in MADR format.

- **Output:** ADR with context, decision drivers, options considered (minimum 2), pros/cons, decision + rationale, consequences
- **Who:** Tech Lead (+ Architect if separate)
- **Done when:** ADR is in "Accepted" state. Tech Lead and PM both sign off. Any stories affected by the decision are updated.

---

**[F-11] UX Design Direction + Prototype** — GOOD

Before Epic Refinements begin producing stories with visual references, establish the design direction. Explore 2–3 interaction patterns. Choose one. Build a prototype for the highest-risk journey steps.

- **Output:** Design direction documented (rationale for why this approach over alternatives) + clickable Figma prototype for the Feature's primary flow and at least 2 edge cases
- **Who:** UX Designer + PM
- **Done when:** Design direction is agreed by PM and Tech Lead. Prototype covers enough of the Feature that a developer can understand the interaction without a conversation.

---

## The 1-Week Feature Sprint Calendar

```
WEEK: FRAME AND STRUCTURE
────────────────────────────────────────────────────────────

Monday (Day 1) — Frame It
  ├── F-1: Feature Brief (draft — PM, 60 min)
  ├── F-2: Feature Experience Snapshot (PM + UX, 60 min)
  └── F-3: Journey Mapping begins (full team, 90 min session)

Tuesday (Day 2) — Map and Flow
  ├── F-3: Journey map finalized
  ├── F-4: Lo-fi wireframe begins (UX)
  └── F-8: Technical feasibility check begins (Tech Lead)

Wednesday (Day 3) — Structure the Work
  ├── F-5: Define Epics from journey steps (PM, 60 min)
  ├── F-6: Epic prioritization (PM + Tech Lead)
  └── F-4: Lo-fi wireframe reviewed by PM for scope accuracy

Thursday (Day 4) — Validate
  ├── F-7: Feature Slice — Release 1 / Release 2 defined
  ├── F-9: Spike results reviewed (if spike was running)
  ├── F-10: ADR drafted (if needed)
  └── F-8: Dependency map finalized

Friday (Day 5) — Lock and Hand Off
  ├── F-10: ADR accepted (Tech Lead + PM sign-off)
  ├── F-11: Design direction agreed (UX + PM)
  ├── Feature Brief updated with all findings
  └── Epic Refinement scheduled for top-priority Epic(s)
```

::: warning If the Feature is large
Some features are complex enough that 1 week isn't sufficient. Signs: the journey map has more than 15 steps, there are more than 6 Epics, or the Tech Lead identifies 3+ unknowns requiring spikes. In this case, extend the Feature Discovery to 2 weeks — but do not skip activities. The alternative (running Epic Refinements on an insufficiently shaped Feature) costs more than the extra week.
:::

---

## Per-Role Guide

### Product Manager — The Scope Owner
You produce the Feature Brief, lead the journey mapping, and make the final call on the Epic prioritization and Feature Slice.

**Your activities:** F-1, F-2, F-3, F-5, F-6, F-7
**Key rule:** The Feature Slice (F-7) is a decision, not a discovery. Make it and document it. "We'll see how far we get" is not a slice.

---

### UX Designer — The Experience Architect
The Feature Discovery is your most important loop. You translate the journey map into something buildable.

**Your activities:** F-2, F-3, F-4, F-11
**Key rule:** The lo-fi wireframe (F-4) must exist before Epic Refinements begin. Stories without a visual reference cannot pass DoR. A rough sketch is better than nothing — but nothing is not acceptable.

---

### Tech Lead — The Risk Eliminator
Your job is to find the technical risks before any developer writes a line of code. Spikes run here, not mid-sprint.

**Your activities:** F-3 (participant), F-6 (confirmer), F-8, F-9, F-10
**Key rule:** If you identify a risk but don't run a spike because there's "no time," that risk will surface mid-delivery. Spikes in the Feature Discovery cost 2 days. The same discovery mid-implementation costs 2 weeks.

---

### QA Lead — The Early Edge Case Spotter
The QA Lead's role in the Feature Discovery is to read the journey map with a "what breaks here?" lens — before stories are written.

**Participation:** F-3 (review the journey map for testability gaps)
**Key question:** For every journey step, ask: "What does failure look like here? Is it testable?" If the answer is vague, the step needs more definition before Epic Refinements begin.

---

## Non-Negotiables

If these activities are incomplete, the Feature is not ready to enter Epic Refinements:

```
✓ F-1: Feature Brief exists and is scoped to this feature
✓ F-2: Experience Snapshot is specific to this feature's persona
✓ F-3: Journey map is complete, annotated, reviewed by Tech Lead
✓ F-5: Epics are named, described, and linked to journey steps
✓ F-6: Epics are prioritized; rationale is documented
✓ F-7: Feature Slice is confirmed by stakeholder
✓ F-8: Technical feasibility confirmed; dependencies mapped
```

GOOD activities (F-4, F-11) can be deferred one loop — but no story in the Epic Refinement can pass DoR without a visual reference (F-4 output). Defer F-4 and it will block F-4 in every Epic Refinement that follows.

---

## Handoff to Epic Refinements

Each Epic enters its own Epic Refinement — in priority order, or in parallel if the team has capacity. The handoff package for each Epic:

- Feature Brief (finalized)
- Journey Map section covering this Epic's steps
- Epic goal statement (from F-5)
- Lo-fi wireframe for this Epic's screens (from F-4, if available)
- Technical constraints from F-8 that affect this Epic
- ADR links if any decisions affect this Epic's stories

Without this package, the Epic Refinement starts with a conversation instead of a brief. That conversation reconstructs what the Feature Discovery already produced — at the cost of the developer's time.

---

