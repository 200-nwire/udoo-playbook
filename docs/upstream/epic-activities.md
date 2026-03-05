# Epic Activities — The Epic Loop

<span class="phase-badge upstream">🔵 Upstream</span>

> **Where this fits:** This is Loop 3 of the [Discovery Spiral](/upstream/spiral-model). It runs once per Epic — after the [Feature Loop](/upstream/feature-activities) has produced the Epic List. Its output — DoR-ready Stories — goes directly into Downstream.

---

## The Moment This Page Is For

The Feature Brief is done. The journey map is done. The Epics are named and prioritized. Everyone agrees Epic A1 "Submit Reflection" is the first Epic to build.

The developer picks up the first story on Monday morning. The acceptance criteria say "user can submit their reflection." The developer asks: "Does it auto-save? What's the character limit? What happens when they close the browser mid-draft? Is there a draft state?" None of these are in the story. The PM isn't available until noon.

It's Monday morning and the developer can't start.

That conversation — the one happening at 9am on the first day of the sprint — should have happened during the Epic Loop. Not a single edge case it covers should be new information on the sprint board.

The Epic Loop exists to make sure it isn't.

---

## What the Epic Loop Produces

By the end of the Epic Loop, every story in the Epic is:

- Written in the correct format (`As [persona], I want [action], so that [outcome]`)
- Linked to its journey step
- Has 3–7 testable acceptance criteria including edge cases and negative paths
- Has a visual reference attached (lo-fi wireframe or design)
- Has copy drafted for all user-facing text
- Has an observability signal named
- Has all dependencies identified and resolved
- Is sized at 1–3 days by team consensus
- Has technical feasibility confirmed by the Tech Lead

In other words: every story passes all 9 DoR checkpoints.

---

::: info No dedicated Station for this loop
The Epic Loop doesn't have its own Discovery Station — its discipline is execution, not exploration. The three-amigos technique (E-2), example mapping (E-4), and the 9-point DoR check (E-7) are the quality gates here. If you find yourself needing to resolve major scope questions during E-2, it means the [Feature Loop](/upstream/feature-activities) ended too early — go back and close the open questions there before continuing.
:::

## The 8 Epic Activities

---

### Phase 1: Brief

---

**[E-1] Epic Brief** — MUST

A 200-word maximum summary of the Epic's user goal and scope. Not the Feature Brief — this is scoped to a single Epic and the user goal it serves.

- **Output:** Epic description in Jira — the user goal this Epic serves (one sentence), the journey steps it covers (listed), what is in scope, what is explicitly out of scope, and the success signal (how will we know this Epic is done and working?)
- **Who:** PM
- **Done when:** A developer new to the project can read the Epic description and understand what user goal they're building toward — without needing a conversation.

---

### Phase 2: Story Shaping

> *The Epic is framed. Now build the story list and make each story specific enough to build.*

---

**[E-2] Three Amigos Story Mapping** — MUST

A collaborative session where PM (what), Developer (how), and QA (what could go wrong) walk through the Epic's journey steps together and identify the stories.

**Format:** 30–60 minutes per Epic. Three people. One journey map section. Sticky notes.

The PM reads each journey step aloud. The group asks: what does the user do here? How many distinct stories is this? The developer flags technical concerns. The QA lead asks "what happens when it fails?" for every step.

- **Output:** Agreed story list — each story named as a verb-outcome phrase, linked to its journey step, with rough scope agreed by all three
- **Who:** PM + Lead Developer + QA Lead
- **Done when:** All journey steps for this Epic are covered by at least one story. No story covers more than one distinct user action. The Developer and QA Lead agree the scope is right.

::: tip Keep it at the story level
The Three Amigos session is for discovering stories, not designing solutions. If the developer starts designing the implementation, redirect: "How would you test this from the user's perspective?" That question always finds the story shape.
:::

---

**[E-3] Write Stories** — MUST

Turn the Three Amigos output into properly formatted Jira stories.

Format: `As [named persona], I want [action], so that [outcome].`

Rules:
- Named persona — never "a user" or "the system"
- Action is what the *user* does, not what the *system* does
- Outcome is the user's goal, not the technical output
- One story = one user action = one developer's sprint focus

- **Output:** Stories created in Jira with: title in user story format, Epic link, journey step reference, and at minimum 2 acceptance criteria
- **Who:** PM (+ BA if available)
- **Done when:** Every story in this Epic is written. No story is described as a technical task. Every story could be read aloud to the user and make sense to them.

---

**[E-4] Example Mapping (per complex story)** — GOOD

For stories with multiple edge cases, non-obvious failure modes, or significant UX complexity, run a focused Example Mapping session. 20 minutes per story. Three people. Three questions: What's the happy path? What are the edge cases? What are the business rules?

- **Output:** Stories updated with edge-case ACs (minimum 1 edge case and 1 negative path per story run through Example Mapping). Gherkin seeds drafted for the key scenarios.
- **Who:** PM + Developer + QA Lead (per story)
- **Done when:** The Developer who will build the story can answer the question "what happens when X?" for the 3 most likely failure scenarios — without asking the PM.

---

**[E-5] Gherkin Seeds + Design References** — MUST

Attach the testable specification to each story, before development begins.

For each story:
1. **Gherkin seeds:** 2–4 Given/When/Then scenarios covering happy path, edge cases, and failure states. Written in AssertThat and linked to the Jira story.
2. **Design reference:** lo-fi wireframe frame, Figma link, or annotated screenshot attached to the story. Every story needs a visual reference to pass DoR — even a rough one.
3. **Copy:** User-facing text drafted for all buttons, labels, error messages, and empty states. Accessibility labels noted for interactive elements.

- **Who:** QA Lead (Gherkin), UX Designer (design reference), PM (copy)
- **Done when:** Every story has at least 2 Gherkin scenarios, a visual reference, and all user-facing strings drafted.

---

### Phase 3: Readiness

> *Stories are written and specified. Now confirm each one can actually be built, and run the formal DoR gate.*

---

**[E-6] Technical Feasibility Confirmation** — MUST

The Tech Lead (or lead developer for this Epic) reviews each story and confirms:
- The implementation approach is understood
- No story requires an architectural decision that hasn't been made
- Dependencies are all resolved or explicitly de-risked
- The estimate (1–3 days) is realistic

- **Output:** Stories updated with: technical approach note (1–2 sentences), confirmed size, and any dependency links
- **Who:** Tech Lead / Lead Developer
- **Done when:** Every story has a confirmed size. No story is marked "unknown" on feasibility. Any story that surfaces a new technical unknown triggers either a spike (go back to F-9 in the Feature Loop) or a scope change.

---

**[E-7] DoR Readiness Check** — MUST

A formal walkthrough of the [9-point DoR checklist](/upstream/definition-of-ready) for every story in the Epic. Stories are reviewed aloud. Gaps are found and fixed before the Epic enters Downstream.

Run this in two passes:
- **Pass 1 (mid-loop):** After E-3 is complete. Catches structural gaps early.
- **Pass 2 (end of loop):** After E-5 and E-6. Final gate before stories are marked Ready.

- **Output:** Readiness count — how many stories pass all 9 checkpoints. For each not-ready story: specific gap listed, named owner, due date.
- **Who:** PM + QA Lead + Tech Lead
- **Done when:** ≥80% of stories pass all 9 DoR checkpoints. Not-ready stories have specific written fix actions assigned to named owners with deadlines before the next sprint.

---

**[E-8] Epic Slice Confirmation** — MUST

Before the Epic enters Downstream, confirm that its stories fit within the planned release and that the delivery team has capacity.

- **Output:** Stories moved to sprint backlog, marked Ready. Release confirmed — this Epic's stories are part of Release 1 (or whichever release was planned in F-7). Sprint capacity confirmed.
- **Who:** PM + Delivery Team Lead / SDM
- **Done when:** Every story in this Epic is marked "Ready for Dev" in Jira. The delivery team knows these stories are next. Sprint planning is scheduled.

---

## The 2–3 Day Epic Loop Schedule

```
DAY 1: BRIEF AND SHAPE
────────────────────────────────────────────────────────────

Morning
  ├── E-1: Epic Brief (PM, 30 min)
  └── E-2: Three Amigos Story Mapping (PM + Dev + QA, 30–60 min)

Afternoon
  ├── E-3: Write Stories (PM, 90 min)
  └── E-4: Example Mapping for complex stories (per story, 20 min each)

End of Day 1 target: Story list exists with rough ACs.

DAY 2: SPECIFY AND VALIDATE
────────────────────────────────────────────────────────────

Morning
  ├── E-5: Gherkin seeds (QA Lead, async)
  ├── E-5: Design references attached (UX Designer, async)
  └── E-5: Copy drafted (PM, async)

Afternoon
  ├── E-6: Technical feasibility review (Tech Lead, 60–90 min)
  └── E-7 Pass 1: DoR readiness check (PM + QA + Tech Lead, 30 min)
  └── Fix any gaps found

DAY 3: GATE AND HAND OFF
────────────────────────────────────────────────────────────

Morning
  ├── Fix any remaining gaps from Pass 1
  └── E-7 Pass 2: Final DoR readiness check

Afternoon
  └── E-8: Epic Slice Confirmation — stories marked Ready, sprint planned
```

For small Epics (3–4 simple stories), this compresses to 1.5 days. For large Epics (6–8 stories with complex edge cases), allow 3 full days. Never compress the DoR check — it is the gate, not the goal.

---

## Per-Role Guide

### Product Manager — The Story Author
You write every story and ensure it is traceable back to the Feature Brief and journey map.

**Your activities:** E-1, E-2, E-3, E-4 (participant), E-7, E-8
**Key rule:** Every story must be explainable in one sentence to the user it's built for. If you can't do that, the story is probably two stories, or it's missing the "so that" outcome.

---

### Lead Developer — The Feasibility Voice
Your job in the Epic Loop is to make sure you can build what's being written — and to flag anything that can't be built as described before the sprint starts.

**Your activities:** E-2 (co-lead), E-4 (participant), E-6 (owner)
**Key rule:** If you pick up a story at sprint planning and have a question the Epic Loop should have answered, that question goes in the sprint retro — and the Epic Loop process gets fixed. Your goal is to never have that question.

---

### QA Lead — The Scenario Architect
The QA Lead is at their most powerful in the Epic Loop. You write the Gherkin seeds. You run the DoR check. You find the edge cases that will otherwise be bugs in production.

**Your activities:** E-2 (co-lead), E-4 (participant), E-5 (owner), E-7 (co-lead)
**Key question for every story:** "What does failure look like here? Is it in the ACs? Is it testable?" If the answer is no, the story is not ready.

---

### UX Designer — The Reference Provider
By the time the Epic Loop runs, the UX Designer's main job is to make sure design references exist for every story. The design direction was set in the Feature Loop (F-11). The Epic Loop is about attaching the right frame to the right story.

**Your activities:** E-5 (design references)
**Key rule:** A story without a visual reference cannot pass DoR. If a story's design doesn't exist, either create a lo-fi sketch (30 minutes) or defer the story to a later Epic Loop.

---

## Non-Negotiables

If these activities are incomplete, no story from this Epic enters Downstream:

```
✓ E-1: Epic Brief exists in Jira
✓ E-2: Three Amigos session ran — story list agreed by PM, Dev, QA
✓ E-3: All stories are written in correct user story format
✓ E-5: Every story has Gherkin seeds + design reference + copy
✓ E-6: Tech Lead has confirmed feasibility for every story
✓ E-7: Final DoR check passed — ≥80% stories meet all 9 checkpoints
✓ E-8: Stories marked Ready in Jira, sprint confirmed
```

---

## The DoR Gate

The Epic Loop ends at the DoR gate. A story that does not pass DoR does not enter Downstream — regardless of schedule pressure, regardless of how confident the developer feels, regardless of how close the deadline is.

When stories are not ready:
1. Name the specific failing checkpoints
2. Assign a named owner to each gap (not "the team")
3. Set a due date before the next sprint
4. Log the gaps in the story's comments
5. Re-run the DoR check before marking Ready

"We'll clarify in the sprint" is the most expensive clarification in product development. The cost of not knowing compounds. Resolve it here.

---

→ [The Discovery Spiral](/upstream/spiral-model) — how the three loops connect
→ [Definition of Ready](/upstream/definition-of-ready) — the 9 checkpoints every story must pass
→ [Feature Activities](/upstream/feature-activities) — previous: the Feature Loop
→ [Kanban Flow](/downstream/kanban-flow) — what happens after stories enter Downstream
