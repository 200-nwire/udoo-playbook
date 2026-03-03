# Upstream Sprint — Activities System

<span class="phase-badge upstream">🔵 Upstream</span>

> **The big idea:** Run discovery like a sprint. One feature at a time. Predictable output. Steady supply into Downstream. This is shift-left made real.

---

## Why This Exists

Development teams fail at the same predictable point: a story lands in a sprint that no one fully understands. The developer starts coding, hits a question, pings the PM, waits, adjusts the design, reruns QA, and ships two weeks late. This is not a delivery problem — it is a discovery problem that arrived late.

The Activities system solves this by making discovery **visible, structured, and time-boxed**. Every feature moving toward development passes through a defined checklist of 24 activities. The outputs of those activities — briefs, flows, stories, ADRs — are the raw material that Downstream needs to build with confidence.

**The shift-left idea in one sentence:**
*The work you do in week 2 of upstream costs 5× less than the same work done in week 2 of a delivery sprint.*

::: tip Not About Slowing Down
This framework does not slow you down. It moves expensive late-stage discovery (rework, re-estimates, missed acceptance criteria) to cheap early-stage discovery (conversations, sketches, decisions). The sprint runs faster because the stories are ready — not because the team rushed.
:::

---

## The Mental Model

Think of Upstream as a **conveyor belt** that feeds Downstream.

```
                    UPSTREAM SPRINT (2 weeks)
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  Vision → Brief → Flows → Epics → Stories → QA → ✅   │
│  [Activities 1-4] [5-8] [9-11] [12-13] [14-17] [18-24]│
│                                                         │
│  OUTPUT: Ready stories + accepted ADRs + UX flows       │
└─────────────────────────────────────────────────────────┘
                           │
                           ▼
                    DOWNSTREAM SPRINT
                    (delivery starts)
```

Every completed Upstream sprint refills the Downstream backlog with properly prepared stories. Downstream never runs dry. Sprints never start without context.

---

## The Activity Issue Type

In Jira, Upstream work is tracked as **Activities** — not Stories, not Tasks, not Epics. Activities are discovery-phase work items that produce artefacts (documents, decisions, validated designs) rather than shipped code.

### Why a separate issue type?

| Dimension | Activity | Story |
|---|---|---|
| **Phase** | Upstream (discovery) | Downstream (delivery) |
| **Output** | Artefact (doc, design, ADR) | Working software |
| **Estimable?** | No — varies by domain complexity | Yes — in story points |
| **Measured by** | Produced + accepted output | DoD (code shipped, tests passed) |
| **Who does it** | PM, UX, Tech Lead, QA | Dev team |
| **On which board** | Upstream Activities board (BUD-825) | Project delivery board |

Activities live on the **shared upstream board** where everyone can see what discovery work is in flight across all projects. This is the company-wide view of "what are we preparing."

### Activity Naming Convention

```
[Project Name] - [Feature Name] [#] - [Activity Name]
```

**Examples:**
- `AMIT - Assessment Engine [3] - Write problem statement + hypothesis`
- `AMIT - Grade Weight [24] - Align on capacity & mark Ready for Dev`
- `NFK - Checkout Redesign [9] - User journey mapping`
- `Sparkil - Loan Disbursement [15] - Write S1 stories`

The `[#]` is the activity number from the 24-activity checklist below. It tells anyone reading the board exactly where this feature is in the discovery process.

### Labels

Every Activity must have:
- `upstream` — always
- Project label (e.g., `amit`, `nfk`, `sparkil`, `720`) — always
- Feature/initiative label (e.g., `assessment-engine`, `checkout`) — recommended

### The Activity Body Template

Every Activity description follows this format:

```
**Purpose:** [one sentence — what this activity produces and why]

**Inputs:** [what you need before starting]

**Outputs:** [concrete artefact(s) that mark this done]

**Checklist:**
- [ ] ...
- [ ] ...

**Structure:** [how to run it — timing, participants, format]

**Done when:** [unambiguous criteria — reviewable by someone who wasn't in the room]
```

### Workflow States

Activities move through these states:

| State | Meaning |
|---|---|
| **Backlog** | Planned, not started yet |
| **Ready** | Everything needed to start is available |
| **To Do** | This sprint, not yet started |
| **In Progress** | Actively being worked |
| **Almost Ready** | Draft done, awaiting internal review |
| **Awaiting Review** | Under review by PM, stakeholder, or peer |
| **Almost Done** | Review feedback incorporated, final check |
| **Awaiting Approval** | Pending stakeholder or tech lead sign-off |
| **Done** | Output accepted, artefact linked, activity complete |
| **On Hold** | Blocked externally, waiting for input |
| **Waiting for Client** | Client response needed to proceed |
| **Regret** | Intentionally skipped with reason documented |

::: tip "Regret" Is a Valid State
Not every activity applies to every feature. A small bug-fix initiative might not need market research (Activity 4) or a prototype (Activity 19). Marking it as "Regret" with a reason is better than leaving it blank — it shows the team consciously decided to skip it.
:::

---

## The 24 Upstream Activities

Activities are organized into **8 phases**. Each phase builds on the previous one. Within each phase, activities are marked:

- **MUST** — required to proceed. No exceptions.
- **GOOD** — significantly reduces risk. Strongly recommended.
- **NICE** — future-proofing or thoroughness. Do when capacity allows.

---

### Phase 1: Vision & Context

> *Who are we building for, and why does this matter right now?*

**[1] Create Initiative Brief** — MUST

The single-page document that answers: what is the problem, who has it, what does success look like, and what are we NOT building.

- **Output:** Confluence Initiative Brief page with problem statement, persona, success signals, non-goals
- **Who:** PM
- **Done when:** Any team member can read it in 5 minutes and explain the initiative accurately to someone else

---

**[2] Define Success Metrics (KPIs)** — MUST

You must know how you'll know it worked before you start building.

- **Output:** 2–4 KPIs with baseline + target + measurement method. At least 1 leading indicator, 1 lagging indicator.
- **Who:** PM + stakeholder
- **Done when:** Metrics are written in the Initiative Brief. Each has a data source (not "we'll figure it out")

---

**[3] User Research / Customer Interviews** — GOOD

Talk to real users before committing to a solution. Even 3 conversations change the direction.

- **Output:** Research notes, key quotes, pattern summary (can be Confluence page or shared doc)
- **Who:** PM + UX Designer
- **Done when:** At least 3 users interviewed. Top 3 pain points documented with verbatim quotes.

---

**[4] Market / Competitive Review** — NICE

Understand what already exists before designing from scratch.

- **Output:** Comparative analysis (can be a table) — 3–5 competitors, what they do well, where the gap is
- **Who:** PM (+ UX optionally)
- **Done when:** Review is in the Initiative Brief or linked from it. At least one "we won't do X because Y already does it better" decision made.

---

### Phase 2: Problem & Brief

> *What exactly is the problem? What are we trying to prove?*

**[5] Write Problem Statement + Hypothesis** — MUST

Force yourself to write the problem in one sentence, and the hypothesis in the format "We believe [action] will produce [outcome] for [persona]."

- **Output:** Problem statement + hypothesis documented in Initiative Brief
- **Who:** PM
- **Done when:** Tech Lead and QA Lead can both explain the hypothesis without looking at the document

---

**[6] Define Target Persona (Experience Snapshot)** — MUST

Write the 150-word day-in-the-life narrative for the primary user. Named, specific, present-tense. See [Experience Snapshot](/upstream/experience-snapshot) for the full format.

- **Output:** Experience Snapshot (≥150 words, named persona, specific moment, specific pain)
- **Who:** PM + UX Designer
- **Done when:** The snapshot has a name, a moment, a feeling, and a clear gap. It could make someone nod in recognition.

---

**[7] Stakeholder Alignment Session** — MUST

Before going further, confirm that stakeholders agree with the problem framing, persona, and success metrics. Alignment at Day 5 is free. Misalignment discovered at Day 10 is expensive.

- **Output:** Session notes, action items, documented disagreements and resolutions
- **Who:** PM + stakeholder(s)
- **Done when:** Stakeholders have confirmed the problem framing and agreed on at least one definition of success. Any objections are written down and addressed.

---

**[8] Assumption Log** — GOOD

Write down every assumption the team is making that hasn't been validated. Rank by risk (if this is wrong, how bad?). Assign owners to validate the highest-risk ones.

- **Output:** Assumption Register — list of assumptions with risk level (high/medium/low) and validation method
- **Who:** PM + Tech Lead
- **Done when:** Top 3 highest-risk assumptions have explicit validation plans (spike, user test, data pull)

---

### Phase 3: Flows & Structure

> *What does the user actually do? Where do we draw the lines?*

**[9] User Journey Mapping** — MUST

Map every step the target user takes from trigger to outcome. Verb-noun format per step. One sticky note per step. Annotate pain points and risks. See [Story Mapping](/upstream/story-mapping) for the full method.

- **Output:** Journey map (Miro/FigJam or photo of physical board) with annotated pain points, linked from Confluence
- **Who:** PM + UX Designer (Tech Lead optional)
- **Done when:** Happy path is mapped end-to-end. Top 3 pain points are annotated. Map is linked from the Initiative Brief.

---

**[10] User Flow / Lo-fi Wireframe** — GOOD

Turn the journey map into a screen-by-screen flow. Not visual design — just structure: what screen, what options, what happens next. Helps QA and Tech see the scope clearly.

- **Output:** Lo-fi wireframe or clickable prototype (Figma/Miro) covering the S1 journey steps
- **Who:** UX Designer (+ PM for scope decisions)
- **Done when:** The main flow is clickable end-to-end. At least the 3 most complex screens are wireframed. No visual design required.

---

**[11] Define S1/S2/S3 Slice Boundaries** — MUST

Draw the line. What ships first (S1)? What goes into S2? What's explicitly parked? This is the single most important scope decision in Upstream.

- **Output:** Slice plan documented in the Initiative Brief. S1 scope stated as what a user can do. S2/S3 noted as deferred.
- **Who:** PM + Tech Lead + stakeholder (confirmation)
- **Done when:** S1 can be described in one sentence. Tech Lead agrees it's deployable independently. Stakeholder confirms S1 is valuable without S2.

---

### Phase 4: Epics & Themes

> *How do we organize the work? What are the big buckets?*

**[12] Define Epics (Named + Linked to Journey)** — MUST

Group journey steps into named Epics. Each Epic covers a cohesive section of the user's journey. Epic names are verb-noun phrases, not features or technical components.

- **Output:** Epics created in Jira, each linked to its journey step range. Confluence Epic page for each (or at minimum, the description is filled in).
- **Who:** PM
- **Done when:** All S1 stories will fit into one of the named Epics. No orphan stories.

---

**[13] Epic Backlog Prioritization** — MUST

Not all Epics are equal. Which must ship for S1 to be useful? Which can wait? This ordering tells the delivery team where to start.

- **Output:** Epics ranked in Jira backlog with rationale for prioritization order
- **Who:** PM + stakeholder
- **Done when:** Epics have a clear ranking. The top-priority Epic has at least 3 DoR-ready stories.

---

### Phase 5: Story Map & Discovery

> *What are the actual stories? Are they truly ready?*

**[14] Story Mapping Session** — MUST

Run the collaborative session where the team walks through the journey map and identifies the user tasks (activities) and stories (user tasks) for each Epic. Use sticky notes, not Jira yet.

- **Output:** Story map with activities across the top, stories in rows below, S1 slice marked
- **Who:** PM + UX Designer + Tech Lead + QA Lead
- **Done when:** Everyone who was in the room can explain which stories are in S1 and why. The output is photographed and linked.

---

**[15] Write S1 Stories** — MUST

Turn the story map into properly formatted user stories in Jira. Each story must follow the format: `As [named persona], I want [action], so that [outcome]`.

- **Output:** S1 stories in Jira with title, acceptance criteria (minimum 2), and linked Epic
- **Who:** PM (+ BA if available)
- **Done when:** Every S1 story is written. None are described as technical tasks ("Create API endpoint for..."). All use the correct format.

---

**[16] Example Mapping (Three Amigos)** — GOOD

For each complex story, run a 20-minute Three Amigos session: PM (what), Dev (how), QA (what could go wrong). Find the edge cases before coding starts.

- **Output:** Story updated with edge-case ACs. Gherkin seeds written. Ambiguities resolved.
- **Who:** PM + Dev + QA (per story)
- **Done when:** Stories that went through Example Mapping have at least 3 ACs (including at least one edge case or negative path). The Dev who will build it confirms they understand what to build.

---

**[17] DoR Readiness Checks (x2)** — MUST

Two formal passes through the [Definition of Ready](/upstream/definition-of-ready) checklist — one at mid-sprint (Day 4) and one at the end (Day 9). Stories are reviewed aloud. Gaps are found and fixed.

- **Output:** Readiness count — how many stories pass, how many have specific gaps, what the fix is for each
- **Who:** PM + QA Lead + Tech Lead
- **Done when:** ≥80% of S1 stories pass all 9 DoR checkpoints. Not-ready stories have specific written fix actions assigned to named owners.

---

### Phase 6: UX Concept & Design

> *How will it feel to use? What does the user actually see?*

**[18] UX Concept Exploration + Design Direction** — GOOD

Before high-fidelity design, explore 2–3 directions. Choose one. This is about design direction and interaction patterns — not visual polish.

- **Output:** Design direction documented in Confluence/Figma with rationale for why this approach was chosen. Alternatives documented.
- **Who:** UX Designer + PM
- **Done when:** Design direction is agreed with PM and tech lead. At least one alternative was considered and rejected (with reason).

---

**[19] Prototype / Hi-fi Flows for Key Stories** — GOOD

Build interactive mockups for the stories with the highest UX risk. Validate with at least 1–2 real users or stakeholders before finalizing.

- **Output:** Figma prototype covering the S1 happy path + at least 2 edge cases. User validation notes attached.
- **Who:** UX Designer
- **Done when:** The main flow is clickable. PM and stakeholder have reviewed it. At least 2 stories have design references attached in Jira.

---

### Phase 7: Tech & QA Readiness

> *Can we build this? What do we need to decide first?*

**[20] Technical Feasibility Check + Dependency Mapping** — MUST

Map what the feature needs from other systems. Identify what already exists (don't rebuild). Flag integration risks.

- **Output:** Dependency map linked from Initiative Brief. Each dependency has: system name, what's needed, and whether it exists or needs to be built.
- **Who:** Tech Lead
- **Done when:** Tech Lead can say "here are the 3 external systems involved, here's what each provides, here are the 2 risks we're watching." Document is in Confluence.

---

**[21] Spike(s) for Technical Unknowns** — MUST (when unknowns exist)

Time-boxed investigation (max 2 days per spike) to answer a specific technical question. The spike produces a finding, not a solution.

- **Output:** Spike report — question asked, approach taken, finding, recommendation
- **Who:** Tech Lead or designated developer
- **Done when:** The question the spike asked is answered with evidence. The recommendation is accepted or rejected with rationale. All stories that were blocked on this spike are unblocked.

---

**[22] Architecture Decision Record (ADR)** — MUST (when key decisions needed)

For every significant technical decision (framework choice, data model, integration approach, infrastructure), write an ADR in MADR format.

- **Output:** ADR with: context, decision drivers, options considered (≥2), pros/cons, decision + rationale, consequences
- **Who:** Tech Lead (+ Architect if separate)
- **Done when:** ADR is in "Accepted" state. Tech Lead and PM both sign off. It's linked from any stories affected by the decision.

---

### Phase 8: Release Slices & Handoff

> *When does this ship? Is everyone ready?*

**[23] Release Slice Planning (What Ships When)** — MUST

Define the exact scope of S1 as a deployable release. Map to calendar. Who does QA, when? When does it go to staging? When to production?

- **Output:** Release plan with: S1 scope list, deployment target date, QA window, rollback plan
- **Who:** PM + Tech Lead + QA Lead
- **Done when:** S1 scope is frozen (agreed list of stories). Deployment date is in the calendar. QA engineer is assigned. Rollback plan exists.

---

**[24] Capacity Alignment + Mark Ready for Dev** — MUST

Confirm the delivery team has capacity to take on S1. Stories are pulled into the next sprint backlog. Stories are formally marked "Ready for Dev" in Jira.

- **Output:** S1 stories moved to sprint backlog, marked Ready. Team capacity confirmed (story points or days).
- **Who:** PM + delivery team lead
- **Done when:** Every S1 story has a DoR label in Jira. The team's sprint capacity accommodates S1. Sprint planning is scheduled. The PM has nothing left to hand off.

---

## The 2-Week Sprint Structure

All 24 activities map to a 2-week discovery sprint. Here is where each activity falls:

```
WEEK 1: SHAPE IT
─────────────────────────────────────────────────────────────────

Monday (Day 1) — Kickoff
  ├── Activity 1: Initiative Brief (or review if exists)
  ├── Activity 7: Stakeholder Alignment (kickoff session)
  └── Activity 20: Technical Feasibility Check starts

Tuesday (Day 2) — Map the Work
  ├── Activity 9: User Journey Mapping (main session, 90 min)
  ├── Activity 3: User Research synthesis (if done async)
  └── Activity 8: Assumption Log (30 min, after mapping)

Wednesday (Day 3) — Define Scope
  ├── Activity 6: Experience Snapshot (finalize with UX)
  ├── Activity 11: Define S1/S2/S3 slice boundaries
  └── Activity 10: Lo-fi wireframe begins

Thursday (Day 4) — Shape Stories + First Readiness Check
  ├── Activity 12: Define Epics
  ├── Activity 14: Story Mapping Session (90 min)
  ├── Activity 15: Write S1 stories (first batch)
  └── Activity 17a: DoR Readiness Check Round 1 (end of day)

Friday (Day 5) — Stakeholder Check
  ├── Activity 7b: Quick Stakeholder Check (20 min)
  ├── Activity 2: Confirm KPIs with stakeholder
  └── Activity 13: Epic prioritization (post-check)

WEEK 2: MAKE IT READY
─────────────────────────────────────────────────────────────────

Monday (Day 6) — Technical Deep Dive
  ├── Activity 21: Spike results reviewed
  ├── Activity 22: ADR(s) drafted
  └── Activity 18: UX design direction (sync with UX)

Tuesday (Day 7) — Lock Decisions
  ├── Activity 22: ADRs accepted
  ├── Activity 16: Example Mapping for complex stories
  └── Activity 19: Prototype review (if UX done)

Wednesday (Day 8) — Architecture Pack
  ├── Activity 20: Dependency map finalized
  ├── Activity 15: Remaining stories written
  └── Activity 19: Design reference attached to stories

Thursday (Day 9) — Final Readiness Check
  ├── Activity 17b: DoR Readiness Check Round 2 (main event)
  ├── Activity 16: Example Mapping for last complex stories
  └── Activity 23: Release slice plan drafted

Friday (Day 10) — Handoff
  ├── Activity 23: Release plan finalized
  ├── Activity 24: Capacity alignment + mark Ready for Dev
  └── Retro (30 min): what helped, what hurt, what to try
```

::: warning The Non-Negotiables
Activities 1, 7, 9, 11, 14, 15, 17, 20, 23, and 24 are MUST activities. If any of these are incomplete on Day 10, the sprint did not produce a shippable scope. Do not pass Go. Do not enter sprint planning.
:::

---

## Per-Role Guide

Every team member plays a specific role in the sprint. Here's your part of the machine.

### Product Manager — The Facilitator

You own the sprint. You don't do everything — you facilitate everything.

**Your activities:** 1, 2, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 23, 24
**Your job:** Keep the sprint goal in sight. Bring people into rooms. Take notes. Write stories. Unblock, escalate, decide.

| Day | Focus |
|---|---|
| 1–2 | Present the problem clearly. Run the Kickoff. Prepare the brief before the session. |
| 2–3 | Lead the journey mapping. Don't solve — map. |
| 4 | Write the first batch of stories. Run the first readiness check. |
| 5 | Stakeholder check. Listen more than present. |
| 6–7 | Review spike results. Adjust scope if needed. Write remaining stories. |
| 9 | Run the final readiness check. Own the readiness count. |
| 10 | Confirm capacity with delivery team. Hand off formally. |

**Key rule:** If you're the only person who understands the initiative at Day 10, the sprint failed regardless of how many stories are "ready."

---

### UX Designer — The Flow Architect

You translate the journey map into something people can actually use.

**Your activities:** 6, 9, 10, 11, 18, 19
**Your job:** Make the abstract concrete. Find the friction. Validate before committing.

| Day | Focus |
|---|---|
| 1–2 | Participate in Kickoff. Co-lead the journey mapping. |
| 3–4 | Build lo-fi wireframes for S1. |
| 6–7 | Explore design directions. Choose one with PM. |
| 8 | Build prototype for the highest-risk story. |
| 9–10 | Attach design references to stories in Jira. |

**Key rule:** Don't disappear into Figma. Your lo-fi flows on Day 3 are more valuable than pixel-perfect designs on Day 10. Stories need a visual reference to pass DoR — not a finished design.

---

### Tech Lead — The Reality Check

You prevent the team from committing to things that can't be built.

**Your activities:** 8, 11, 16, 20, 21, 22, 23
**Your job:** Map dependencies. Run spikes. Write ADRs. Tell the team what's real before anyone writes code.

| Day | Focus |
|---|---|
| 1 | Identify technical unknowns from the Kickoff. Start feasibility check. |
| 2–3 | Probe the journey map for technical risk. Flag early. |
| 4–5 | Start spike(s) for identified unknowns. |
| 6 | Spike results. Feasibility confirmed or scope adjusted. |
| 7 | ADRs accepted. All stories affected are updated. |
| 8 | Dependency map final. Architecture pack complete. |
| 9 | Final DoR check — confirm technical feasibility for every story. |

**Key rule:** "It's technically complex" is not a reason to mark a story Not Ready. Write what the complexity is and how the developer will approach it — that's what makes it ready.

---

### QA Lead — The Edge Case Hunter

You find what breaks before a developer touches code.

**Your activities:** 16, 17, 23
**Your job:** Attack stories from the "what could go wrong" angle. Write Gherkin seeds. Own the readiness count.

| Day | Focus |
|---|---|
| 1 | Kickoff — understand the persona and the scope. |
| 4 | First readiness check — review stories against DoR. Note every untestable AC. |
| 6–7 | Example Mapping for complex stories. Bring the hardest questions. |
| 9 | Final readiness check — deliver the verdict. |
| 10 | Confirm QA window in release plan. |

**Key rule:** "Any missing edge case?" is your superpower. Ask it for every story. You're not criticizing the PM's work — you're saving the developer from discovering the gap at 11pm.

---

### Developer (representative) — The Feasibility Voice

You represent the delivery team in discovery. You don't build in Upstream — you make sure building will be possible.

**Your activities:** 16, 21 (spike), 24
**Your job:** Participate in Example Mapping. Run spikes when assigned. Flag what can't be built as described.

| Day | Focus |
|---|---|
| 4 | Join the readiness check for the stories in your domain. |
| 6–8 | Run any assigned spikes. Report findings clearly. |
| 9 | Review your stories one final time. Confirm you can start. |
| 10 | Participate in capacity alignment. |

**Key rule:** If you pick up a story at sprint planning and have a question, the sprint retrospective should cover why that question wasn't answered in Upstream. Your goal is to never have that question.

---

### SDM / Delivery Manager — The Sequencer

You keep the sprint on schedule and protect the team from being pulled away.

**Your activities:** 13, 23, 24
**Your job:** Protect discovery time. Manage capacity. Facilitate handoff.

| Day | Focus |
|---|---|
| 1 | Kickoff — confirm team availability for the sprint. |
| 5 | Check sprint progress. Unblock any schedule issues. |
| 9–10 | Confirm delivery capacity. Facilitate sprint planning prep. |

**Key rule:** If a team member is being pulled from discovery to a production incident on Day 6, the sprint is at risk. Surface this immediately — don't absorb it silently.

---

## The Company Upstream Board

All Activities from all projects live on **one shared board** (BUD-825). This is the company-wide view of what's being prepared for development.

```
UPSTREAM ACTIVITIES BOARD
────────────────────────────────────────────────────────
│ Backlog  │ Ready   │ In Progress │ Awaiting  │ Done  │
│          │         │             │ Review    │       │
├──────────┼─────────┼─────────────┼───────────┼───────┤
│ AMIT     │ AMIT    │ NFK         │ AMIT      │ AMIT  │
│ Exams    │ Rubrics │ Checkout    │ Rubrics   │ Auth  │
│ [4] KPI  │ [9] Map │ [14] Map    │ [17] DoR  │ [24]✅│
│          │         │             │           │       │
│ Sparkil  │         │ AMIT        │           │ NFK   │
│ Disburse │         │ AI Copilot  │           │ Cart  │
│ [1] Brief│         │ [20] Tech   │           │ [24]✅│
└──────────┴─────────┴─────────────┴───────────┴───────┘
```

Anyone on the team can look at this board and answer:
- What is in discovery right now?
- Which features are closest to Ready for Dev?
- What has been stuck in "In Progress" for too long?

**The rule:** Nothing enters a delivery sprint that hasn't passed through Activity 24 on this board.

---

## Making It Work in Jira

### Creating an Activity

1. Go to the BUD project
2. Create issue → Issue Type: **Activity**
3. Summary: `[Project] - [Feature] [#] - [Activity name]`
4. Description: fill in the template (Purpose / Inputs / Outputs / Checklist / Structure / Done when)
5. Labels: `upstream` + project label
6. Add to the sprint (or leave in Backlog if not yet scheduled)

### Tracking a Feature's Progress

Create a Confluence page for each feature. Link all related Activities to it. The page becomes the living brief — updated as each Activity is completed. The page replaces the "where are we?" question.

### The Sprint (Activities)

Create a 2-week sprint in BUD named: `Upstream — [Date range]`

Add the Activities that are scheduled for this sprint. Each one moves through the workflow states as work progresses.

At sprint end: count how many activities are Done. If Activity 24 (Ready for Dev) is done, the feature handoff is successful.

### When Something is Stuck

If an Activity sits in "In Progress" for more than 3 days without moving, it's blocked. Change the status to **On Hold** or **Waiting for Client** and add a comment explaining why. Don't let it sit silently in "In Progress" — that hides the real state from the team.

---

## AI Agents in Upstream

AI agents can accelerate several Activities. Here's how they're most useful:

| Activity | AI assist |
|---|---|
| **[1] Initiative Brief** | Draft structure from rough notes. PM reviews and corrects. |
| **[5] Problem Statement** | Generate 3 versions from notes. Team picks the clearest. |
| **[6] Experience Snapshot** | Draft from persona + research notes. PM edits for specificity. |
| **[15] Write Stories** | Generate story templates from journey steps. PM validates. |
| **[17] DoR Readiness Check** | Flag missing DoR criteria from story text. |
| **[22] ADR** | Summarize options + tradeoffs from spike notes. Tech Lead validates. |

::: warning AI Drafts Are Drafts
An AI-drafted Initiative Brief is a starting point, not a finished artefact. The brief is ready when the stakeholder can confirm it accurately describes the problem — not when it looks polished on the page.
:::

---

## The "Not Afraid" Section

Discovery feels scary for three reasons. Here's what to do about each.

### "I don't know enough to write the brief"

You don't need to know everything to write the brief. You need to know enough to have an honest conversation.

Write what you know. Write what you don't know (the assumptions). Write the question you need answered. Then show it to someone. The act of writing forces clarity — even when what you write is "I'm not sure if X is the right problem."

The brief exists to find out what's missing — not to prove you already have all the answers.

---

### "The stakeholder will change everything at Day 5"

This happens when the stakeholder was not involved in the problem framing. The fix is preventive, not reactive.

At Day 1 Kickoff, get the stakeholder in the room for 30 minutes. Show them the draft problem statement. Ask: "Is this the right problem?" A 30-minute investment on Day 1 buys you agreement on Day 5.

If the stakeholder still changes scope at Day 5: document the change, adjust the S1 boundary, note what moves to S2. The sprint produces whatever scope was agreed — not whatever the stakeholder says last.

---

### "We don't have time for this"

Run the math. A 2-week discovery sprint costs approximately:
- PM: 10 hours
- Tech Lead: 7 hours
- UX Designer: 7 hours
- QA Lead: 5 hours
- Total: ~29 person-hours

A sprint where the stories were not ready costs approximately:
- 3–5 stories sent back to PM for clarification: 3–5 hours lost
- Rework on mid-sprint scope changes: 6–10 hours lost
- QA finding missing edge cases: 3–6 hours lost
- Total: 12–21 hours of waste per delivery sprint

The discovery sprint costs **29 hours** once. Bad stories cost **12–21 hours** per sprint, every sprint, until the feature ships.

The math is not close.

---

### "I'm afraid the team will resist it"

Most teams resist structured discovery because they've never seen it work. The fastest way to change this is to run one sprint and count the difference.

Pick the next feature. Run the 2-week process. At the end, count how many stories passed the DoR on the first try. Then compare to the previous feature: how many stories needed rework mid-sprint?

Show the team the numbers. Numbers convert skeptics.

If that doesn't work, bring them this document and read the math section together.

---

### "I don't know which activities to skip"

The MUST activities are non-negotiable. For everything else, use this rule:

> **Skip an activity only when you already have its output.**

If user research was done last month and the findings are documented, skip Activity 3. If the journey map was done in a previous sprint and the scope hasn't changed, skip Activity 9. But "we'll figure it out during the sprint" is not the same as "we already have this."

---

## Quick Reference

### The 24 Activities — Summary Table

| # | Activity | Phase | Priority |
|---|---|---|---|
| 1 | Create Initiative Brief | Vision & Context | MUST |
| 2 | Define Success Metrics (KPIs) | Vision & Context | MUST |
| 3 | User Research / Customer Interviews | Vision & Context | GOOD |
| 4 | Market / Competitive Review | Vision & Context | NICE |
| 5 | Write Problem Statement + Hypothesis | Problem & Brief | MUST |
| 6 | Define Target Persona (Experience Snapshot) | Problem & Brief | MUST |
| 7 | Stakeholder Alignment Session | Problem & Brief | MUST |
| 8 | Assumption Log | Problem & Brief | GOOD |
| 9 | User Journey Mapping | Flows & Structure | MUST |
| 10 | User Flow / Lo-fi Wireframe | Flows & Structure | GOOD |
| 11 | Define S1/S2/S3 Slice Boundaries | Flows & Structure | MUST |
| 12 | Define Epics (Named + Linked to Journey) | Epics & Themes | MUST |
| 13 | Epic Backlog Prioritization | Epics & Themes | MUST |
| 14 | Story Mapping Session | Story Map & Discovery | MUST |
| 15 | Write S1 Stories | Story Map & Discovery | MUST |
| 16 | Example Mapping (Three Amigos) | Story Map & Discovery | GOOD |
| 17 | DoR Readiness Checks (x2) | Story Map & Discovery | MUST |
| 18 | UX Concept Exploration + Design Direction | UX Concept & Design | GOOD |
| 19 | Prototype / Hi-fi Flows for Key Stories | UX Concept & Design | GOOD |
| 20 | Technical Feasibility Check + Dependency Mapping | Tech & QA Readiness | MUST |
| 21 | Spike(s) for Technical Unknowns | Tech & QA Readiness | MUST (when needed) |
| 22 | Architecture Decision Record (ADR) | Tech & QA Readiness | MUST (when needed) |
| 23 | Release Slice Planning | Release & Handoff | MUST |
| 24 | Capacity Alignment + Mark Ready for Dev | Release & Handoff | MUST |

### The Rescue Checklist

*Sprint is ending and you're behind? Here's what to cut without breaking the handoff:*

| If stuck on... | Acceptable shortcut | What to document |
|---|---|---|
| Activity 3 (user research) | Use existing support tickets or NPS verbatims as proxy | Note: "research was inferential, not direct — validate in S1 rollout" |
| Activity 4 (market review) | Skip entirely | Mark as Regret in Jira with "deferred to post-S1" |
| Activity 8 (assumption log) | PM lists assumptions verbally at retro | Tech lead writes 3 top risks in Initiative Brief |
| Activity 10 (lo-fi wireframe) | Use screenshots of similar flows as reference | Attach screenshots to affected stories |
| Activity 18 (design direction) | PM and UX agree on direction verbally | Write 2-sentence design rationale in the Epic description |
| Activity 19 (prototype) | Annotated wireframes instead | Attach wireframes to stories |
| Activity 21 (spike) | Tech lead writes what the spike would have found (if high-confidence) | Mark as assumption; add spike to next sprint backlog |

**Never cut:** Activities 1, 7, 9, 11, 15, 17 (final), 23, 24. These are the minimum for a real handoff.

---

[← Scrum for Discovery](/upstream/scrum-for-discovery) · [Definition of Ready →](/upstream/definition-of-ready)
