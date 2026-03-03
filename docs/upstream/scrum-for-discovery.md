# Scrum for Discovery

<span class="phase-badge upstream">🔵 Upstream</span>

## The Counterintuitive Insight

Most teams think of Scrum as a delivery framework — sprints, standups, velocity, done increments. Discovery, they assume, should be free-form: research when inspiration strikes, shape stories when the backlog runs low, make architecture decisions in Slack threads at midnight.

This is backwards.

**Discovery needs structure more than delivery does.** Delivery has natural forcing functions — deployments, QA cycles, production incidents — that keep the team honest. Discovery has none. Without structure, discovery expands indefinitely (analysis paralysis), contracts to nothing (ticket-factory mode), or happens in one person's head (the lone-wolf PM).

UDOO applies Scrum to discovery not because discovery is the same as delivery, but because the principles transfer: time-boxing creates urgency, ceremonies create accountability, and visible work-in-progress creates transparency.

::: info The Paradox
Teams that resist structured discovery say: *"We don't have time for 2 weeks of planning."* But they routinely spend 3–4 weeks in a delivery sprint discovering requirements they should have found earlier — reworking stories, rewriting ACs, reverting architecture decisions mid-sprint. Structured discovery doesn't add time. It moves time from *expensive discovery during delivery* to *cheap discovery before delivery*.
:::

---

## Why 2-Week Discovery Sprints?

The discovery sprint is exactly 2 weeks — the same cadence as most delivery sprints. This is deliberate.

| Property | Why 2 weeks |
|----------|-------------|
| **Long enough** | 5 discovery stations, stakeholder alignment, readiness checks, architecture decisions — all require real calendar time. 1-week sprints cut corners on problem framing (Station 2) and solution options (Station 4). |
| **Short enough** | 3-week or 4-week discovery cycles expand to fill the time. Parkinson's Law applies to research and analysis just as it applies to coding. |
| **Cadence alignment** | When discovery and delivery run on the same 2-week heartbeat, handoffs are predictable: a discovery sprint produces ready stories that enter the next delivery sprint. |
| **Reviewable** | At the end of 2 weeks, the team can count how many stories are ready. This is a measurable output — unlike "we made good progress on discovery." |

::: warning Time-Boxing Is Not Rushing
A 2-week time-box does not mean "do discovery faster." It means "do discovery within a boundary." If the Initiative is too large for one discovery sprint, scope the sprint to produce S1 stories and defer S2/S3 to the next discovery sprint. The sprint always ends on time; the scope adjusts.
:::

---

## The Three Parallel Streams

Within a discovery sprint, three streams run concurrently. They are not sequential phases — they happen in parallel, with daily synchronisation.

```
WEEK 1                                    WEEK 2
──────────────────────────────            ──────────────────────────────
Stream A: MAP THE WORK                    Stream A: REFINE & SLICE
 · Journey mapping (Day 2)                 · Adjust slice boundaries
 · Epic naming                             · Add stories from new insights
 · First slice definition (Day 3)          · Validate with stakeholder

Stream B: STORY READINESS                 Stream B: FINALIZE STORIES
 · Draft first stories (Day 3–4)           · Readiness Check Round 2 (Day 9)
 · Example Mapping sessions                · Fix not-ready stories
 · Readiness Check Round 1 (Day 4)         · Write remaining Gherkin seeds

Stream C: TECH & ARCHITECTURE             Stream C: LOCK DECISIONS
 · Identify unknowns (Day 1)               · Lock ADRs (Day 7)
 · Run spikes (Day 3–6)                    · Complete architecture pack (Day 8)
 · Draft ADR options                        · Identify remaining risks
```

### Stream A: Map the Work (Shape)

**Led by:** PM + UX Designer

**Purpose:** Understand the user's journey and define the scope of work.

**Activities:**
- Run the Story Mapping session
- Define the backbone (activities) and body (tasks)
- Draw the S1/S2/S3 slice lines
- Name Epics and link them to journey steps
- Present the map at the stakeholder check (Day 5)

**Key output:** A story map with clear slice boundaries and named Epics.

### Stream B: Story Readiness (DoR)

**Led by:** PM + BA + QA Lead

**Purpose:** Turn story candidates from the map into fully Ready stories.

**Activities:**
- Write stories in "As a... I want... so that..." format
- Run Example Mapping (Three Amigos) sessions for complex stories
- Draft acceptance criteria with edge cases and negative paths
- Apply the 9-point DoR checklist
- Draft Gherkin seeds for each story

**Key output:** Stories that pass the DoR, with Gherkin-ready acceptance criteria.

### Stream C: Tech & Architecture (DAR)

**Led by:** Tech Lead + Architect

**Purpose:** Ensure the solution is technically feasible, risks are identified, and architecture decisions are recorded.

**Activities:**
- Identify technical unknowns from the story map
- Run time-boxed spikes (max 2 days each)
- Evaluate architecture options and write ADR drafts
- Create C4 diagrams (Level 1 for all Initiatives, Level 2 when needed)
- Define SLI/SLO targets and observability requirements
- Complete the architecture pack

**Key output:** ADRs (accepted), C4 diagrams, spike results, risk register.

::: tip Streams Are Not Silos
The streams run in parallel, but they cross-pollinate constantly. When Stream C discovers that a technical approach is infeasible (spike result), Stream A adjusts the slice boundaries. When Stream B finds that a story's ACs require data that doesn't exist, Stream C adds a spike. The daily standup is where these cross-stream dependencies surface.
:::

---

## Sprint Goals for Discovery

Delivery sprints have goals like "Ship the wallet balance feature." Discovery sprints need goals too — but they measure *readiness*, not *shippability*.

### Good Discovery Sprint Goals

> *"By end of sprint, 80% of S1 stories for Living Wondrously Journal will meet the DoR, and the data persistence ADR will be accepted."*

> *"By end of sprint, the Someone for Coffee story map will have S1 and S2 slices defined, with all S1 stories having Gherkin seeds and at least one architectural spike completed for the verification flow."*

> *"By end of sprint, the Analytics Layer Event Storming will be complete, bounded contexts will be identified, and at least 5 telemetry ingestion stories will be Ready."*

### Bad Discovery Sprint Goals

> *"Make progress on discovery."* — Not measurable.

> *"Finish all the stories."* — Scope-driven, not time-boxed. What does "all" mean?

> *"Research the problem."* — Research is an activity, not an outcome. What will be true at the end?

A good goal has a **number** (how many stories), a **quality bar** (meet the DoR), and a **decision** (ADR accepted, slice defined, option chosen).

---

## WIP Limits for Discovery

Work-in-progress limits prevent discovery from becoming a sprawling research project. Each stream has its own WIP constraint:

| Stream | WIP Limit | Rationale |
|--------|-----------|-----------|
| **A (Map)** | ≤ 3 activities being actively refined at once | Mapping sessions should focus on one section of the map at a time. Jumping between 5 activities produces shallow analysis. |
| **B (Readiness)** | ≤ 6 stories in "Needs Work" status across the board | If more than 6 stories are partially drafted, the team is spreading too thin. Finish drafting one batch before starting the next. |
| **C (Architecture)** | ≤ 3 active spikes | Spikes are expensive (2 days each). Running more than 3 concurrently means the Tech Lead is context-switching too much. Sequence them. |

Additionally, a cross-stream limit: **no more than 2 stories waiting on a spike result**. If a story can't be made Ready because a spike is in progress, that is one story blocked. If 5 stories are blocked on spikes, the discovery sprint has a bottleneck in Stream C that needs immediate attention.

::: details The Discovery Board
The discovery sprint uses a portfolio-style board to track work across all three streams:

```
┌─────────────┬──────────────┬────────────────┬──────────────┬─────────────┐
│ New Requests │   Shaping    │ Stories        │ Architecture │ Ready for   │
│              │              │ Becoming Ready │              │ Delivery    │
├─────────────┼──────────────┼────────────────┼──────────────┼─────────────┤
│ "Users want  │ Story map    │ "Save entry"   │ ADR-007:     │ "Maya sees  │
│  to journal" │ in progress  │  — AC drafted  │  SQLDelight  │  Journal    │
│              │              │  — needs edge  │  vs Room     │  tab" ✅    │
│ "Match algo  │ Slice review │    cases       │  (spike in   │             │
│  improvement"│ pending      │                │   progress)  │ "Maya sees  │
│              │              │ "View past     │              │  prompt" ✅ │
│              │              │  entries"      │ C4 diagram   │             │
│              │              │  — needs copy  │ drafted      │             │
└─────────────┴──────────────┴────────────────┴──────────────┴─────────────┘
         WIP: —         WIP: ≤3        WIP: ≤6          WIP: ≤3

Stories move left to right. The "Ready for Delivery" column feeds the next delivery sprint's backlog.
```
:::

---

## Capacity Rules

Discovery does not happen in a vacuum. The Core Trio (PM, UX Designer, Tech Lead) typically splits time between active delivery sprints and Upstream discovery.

### The 70/30 Rule

| Allocation | Activity | Example |
|:----------:|----------|---------|
| **70%** | Home project (current delivery sprint) | Sprint work, code reviews, daily standup, production support |
| **30%** | Discovery (Upstream) | Story mapping, readiness checks, spikes, ADRs |

This means roughly 12 hours/week on delivery and 5 hours/week on discovery. The 30% is not "leftover time" — it is blocked on the calendar as discovery sessions.

### The Two-Project Maximum

No person should be assigned to more than **2 active projects** simultaneously (one delivery + one discovery, or two deliveries with shared discovery). Beyond two, context-switching destroys the quality of both discovery and delivery.

| Projects | Context-switching cost | Effective output |
|:--------:|:---------------------:|:----------------:|
| 1 | None | 100% |
| 2 | ~20% | ~80% |
| 3 | ~40% | ~60% |
| 4+ | ~60%+ | ~40% or less |

::: warning The Worst Capacity Anti-Pattern
Assigning one person to 4 discovery sprints simultaneously. They attend every kickoff, contribute to no mapping sessions, review stories at midnight, and approve architecture decisions they haven't read. The result: 4 low-quality discovery sprints instead of 2 high-quality ones. Say no to the third project.
:::

---

## How Discovery Sprints Differ from Delivery Sprints

Discovery sprints borrow Scrum's structure but measure different things.

| Dimension | Delivery Sprint | Discovery Sprint |
|-----------|----------------|-----------------|
| **Goal** | Ship a working increment | Produce Ready stories + accepted ADRs |
| **Velocity** | Story points completed | Not used — discovery work is not estimable in points |
| **Measure of success** | DoD (Definition of Done) | DoR (Definition of Ready) — what % of stories pass? |
| **Primary artifact** | Working software | Story map + Ready stories + architecture pack |
| **Daily standup** | Task-oriented (what did you do, what will you do, blockers) | Stream-oriented (Map, Cards, Plumbing — see [Cadence](/upstream/cadence)) |
| **Review** | Demo working software to stakeholders | Demo the story map, slice plan, and Ready stories |
| **Retro** | Process improvement for delivery | Process improvement for discovery |
| **Backlog** | Stories prioritized for development | Discovery tasks: research, map, draft, review, decide |
| **Burndown** | Story points remaining | Stories not-yet-Ready remaining |

::: info No Story Points in Discovery
Discovery work cannot be meaningfully estimated in story points. How many points is "research customer pain points"? How many is "draft an ADR"? These activities vary wildly in duration depending on the domain complexity and the team's prior knowledge. Instead, measure the **output**: number of Ready stories, number of accepted ADRs, number of risks identified.
:::

---

## Shared Sessions That Scale

Some discovery activities benefit from being shared across multiple Initiatives. UDOO defines two cross-Initiative ceremonies:

### Readiness Checks (Company-Wide, 2×/Week)

**What:** All PMs and QA Leads from active discovery sprints meet to review candidate stories against the DoR. Stories are read aloud and checked item by item.

**Why cross-team:** QA Leads from other projects catch gaps that the originating team is blind to. A fresh pair of eyes asks: *"What happens if the user is offline?"* — a question the originating team stopped asking because they assumed the answer.

**Format:**
```
READINESS CHECK (30–45 min, 2×/week)
─────────────────────────────────────
1. Each PM brings 2–3 candidate stories (pre-read in shared doc)
2. Round-robin: PM reads the story aloud
3. QA Lead asks: "Is this testable as written?"
4. Group asks: "Any missing edge case?"
5. Verdict: Ready / Not Ready (with specific fix)
6. Next PM
```

**Scaling rule:** Maximum 4 stories per session (10 minutes each). If more stories need review, schedule a second session.

### Architecture Decisions (Weekly, 30 min)

**What:** All Tech Leads meet to review proposed ADRs, share spike results, and identify cross-project dependencies.

**Why cross-team:** Architecture decisions in one project often affect other projects. The Tech Lead on Analytics Layer discovers that the BigQuery schema change will break the reporting API used by Momentum. Without a shared session, this is discovered in production.

**Format:**
```
ARCHITECTURE DECISIONS (30 min, weekly)
─────────────────────────────────────────
1. Each Tech Lead presents 1 ADR or spike result (5 min)
2. Group asks: "Does this affect other projects?"
3. Group asks: "What becomes harder because of this?"
4. Decision: Accept / Revise / Escalate
5. Action items assigned with owners
```

---

## The Discovery Sprint Backlog

A discovery sprint has its own backlog — not of user stories, but of **discovery tasks**. These are the activities the team performs to produce Ready stories and accepted ADRs.

### Sample Discovery Sprint Backlog

| # | Task | Stream | Owner | Status |
|---|------|--------|-------|--------|
| 1 | Research customer pain points (NPS verbatims, support tickets, analytics) | A | PM | ✅ Done |
| 2 | Write Initiative TL;DR | A | PM | ✅ Done |
| 3 | Run Story Mapping session | A | PM + UX | ✅ Done |
| 4 | Define S1/S2 slice boundaries | A | PM | ✅ Done |
| 5 | Map linked systems (data flow diagram) | C | Tech Lead | ✅ Done |
| 6 | Define scope: in/out for S1 | A | PM | ✅ Done |
| 7 | Write success metrics (leading + lagging) | A | PM | ✅ Done |
| 8 | Spike: SQLDelight vs Room for local persistence | C | Tech Lead | ✅ Done |
| 9 | Draft API contracts (journal entry CRUD) | C | Tech Lead + Dev | 🔄 In progress |
| 10 | Draft stories for Entry Creation epic (E-LW-01) | B | PM + BA | ✅ Done |
| 11 | Example Mapping: "Save Entry" story | B | PM + Dev + QA | ✅ Done |
| 12 | Example Mapping: "View Past Entries" story | B | PM + Dev + QA | 🔄 In progress |
| 13 | Readiness Check Round 1 (Day 4) | B | PM + QA | ✅ Done |
| 14 | Conduct stakeholder review workshop (Day 5) | A | PM | ✅ Done |
| 15 | Write ADR-007: Local persistence approach | C | Tech Lead | ✅ Done |
| 16 | Create C4 Level 1 diagram | C | Tech Lead | ✅ Done |
| 17 | Story mapping with BDD: write Gherkin seeds for S1 stories | B | QA + BA | 🔄 In progress |
| 18 | Risk assessment: offline sync conflicts | C | Tech Lead | ⬜ Not started |
| 19 | Readiness Check Round 2 (Day 9) | B | PM + QA | ⬜ Not started |
| 20 | Final approval sync with stakeholder (Day 10) | A | PM | ⬜ Not started |

::: tip Track Discovery Tasks in the Same Tool
If the team uses Jira for delivery, create a "Discovery Sprint" board in Jira with a simple workflow: To Do → In Progress → Done. This keeps discovery work visible alongside delivery work and prevents the "discovery is invisible" problem.
:::

---

## Hand-Offs That Don't Hurt

The Commitment Point — where a story crosses from Upstream to Downstream — is the most fragile moment in the UDOO lifecycle. Hand-offs fail when context is lost.

### The Artifact Chain

Every story that crosses the Commitment Point must link to a chain of artifacts:

```
Story (Jira)
  ├── Links to → Epic (Jira)
  │                ├── Links to → Feature page (Confluence)
  │                │                └── Links to → Initiative Brief (Confluence)
  │                └── Contains → Journey step reference (J4)
  │
  ├── Contains → Acceptance Criteria (in story body)
  │                └── Gherkin seeds (Given/When/Then)
  │
  ├── Attached → Visual reference (wireframe, lo-fi mockup, or whiteboard photo)
  │
  ├── Contains → Observability signal (event name, properties)
  │
  ├── Links to → ADR (if architecture decisions affect this story)
  │
  └── Contains → Story Map reference (which activity and slice)
```

### The "No Orphan" Rule

A developer picking up a story should be able to trace it all the way up to the Initiative in under 60 seconds. If any link is broken — the Epic has no Confluence page, the story has no journey reference, the ADR is referenced but doesn't exist — the hand-off has failed.

::: warning The Hand-Off Test
Before marking a story as Ready, ask a developer who was NOT part of the discovery sprint to read the story and its linked artifacts. Time how long it takes them to understand:
1. **What** needs to be built
2. **Why** it matters (the user's job-to-be-done)
3. **How** it should behave (acceptance criteria)
4. **Where** it fits (journey step, slice, Epic context)

If it takes longer than 5 minutes, the hand-off artifacts are insufficient.
:::

---

## Why Discovery Sprints Reduce Delivery Time

This is the hardest sell for teams that have never done structured discovery: **spending 2 weeks on discovery before coding makes the total cycle shorter, not longer.**

### The Math

**Without discovery (typical anti-pattern):**

| Phase | Duration | What happens |
|-------|:--------:|-------------|
| Sprint planning | 0.5 day | Stories are vague; team asks questions PM can't answer |
| Sprint execution | 8 days | Developers discover missing ACs mid-sprint (2 days rework). Architecture debate erupts on Day 4 (1 day lost). QA finds edge cases not covered (1 day rework). |
| Stabilization | 1.5 days | Bug fixes from missing requirements |
| **Total** | **10 days** | But only 4–5 days of productive building |

Multiply by 2 sprints for a typical Feature: **20 working days**, with 8–10 days of waste.

**With discovery (UDOO approach):**

| Phase | Duration | What happens |
|-------|:--------:|-------------|
| Discovery sprint | 10 days | Stories are Ready, ADRs are accepted, risks are identified. 5 hours/week per person. |
| Sprint planning | 0.25 day | Stories are clear; team estimates with confidence |
| Sprint execution | 9 days | Developers build. QA tests against Gherkin scenarios. No "what does this mean?" conversations. |
| Stabilization | 0.75 day | Minor fixes only |
| **Total** | **20 days** | Same calendar time, but 9 days of productive building vs. 4–5 |

The cycle time is the same or shorter, but the **quality** is dramatically higher: fewer bugs escape to production, fewer stories get sent back, and the team's morale improves because they are building with confidence instead of guessing.

::: details Evidence from Real Teams
After adopting discovery sprints, track these two metrics for 3–4 delivery sprints:

1. **Rework rate:** Stories sent back from Downstream to Upstream (or from QA back to dev) because of missing requirements
2. **Escaped defects:** Bugs found in production that trace to vague or missing acceptance criteria

Teams that do this consistently report:
- 40–60% reduction in rework rate
- 30–50% reduction in escaped defects
- 20–30% improvement in sprint velocity (because less time is spent on in-sprint discovery)

The discovery sprint pays for itself within 2–3 delivery sprints.
:::

---

## Anti-Pattern: "Discovery as Homework"

The most common and most destructive anti-pattern in Upstream: one person (usually the PM) does all the discovery alone, then presents finished stories to the team.

### What It Looks Like

- The PM disappears for a week, emerges with 15 Jira tickets
- Stories have acceptance criteria but no one else reviewed them
- The Tech Lead sees the stories for the first time at sprint planning
- QA finds that half the ACs are untestable
- Developers discover architecture issues on Day 2 of the sprint
- The PM is frustrated: *"I wrote all those stories and they still aren't good enough"*

### Why It Fails

| Problem | Root cause |
|---------|-----------|
| Stories lack technical feasibility | Tech Lead wasn't involved in shaping |
| ACs are untestable | QA wasn't involved in Example Mapping |
| Architecture decisions are made by default | No spike was run; the first developer to touch the code decides |
| PM burns out | One person carries the cognitive load of the entire Initiative |
| Team has no ownership | They received the stories; they didn't create them |

### The Fix

Discovery is a **team activity**, not homework. The three streams exist precisely to distribute the work:

- **Stream A (Map):** PM leads, but UX and BA participate. The mapping session is collaborative.
- **Stream B (Readiness):** PM drafts, but QA and Dev refine. Example Mapping requires all three roles.
- **Stream C (Architecture):** Tech Lead leads, but PM provides context and constraints.

The PM's role in discovery is **facilitation and integration**, not solo execution. They run the sessions, synthesize the outputs, and ensure the artifacts are linked. But the *content* — the journey steps, the acceptance criteria, the architecture decisions — comes from the team.

::: danger The Lone Wolf PM
If one person writes all the stories, reviews all the ACs, and makes all the architecture decisions, you do not have a discovery process. You have a single point of failure with a fancy name. Discovery is collaborative by design. If the PM is the only person who understands the Initiative, the team is one sick day away from a blocked sprint.
:::

---

## Putting It All Together

Here is a complete discovery sprint mapped to the concepts in this chapter:

```
DAY 1                        DAY 2                       DAY 3
─────────────────────       ─────────────────────       ─────────────────────
Kickoff (Stream A)          Map & Name (Stream A)       Choose First Slice
· Present problem           · Story Mapping session       (Stream A)
· Agree sprint goal         · Name activities            · Draw S1/S2 lines
· Identify unknowns         · Name epics                 · List out-of-scope
  → assign to Stream C      · Annotate pain points       · Start drafting
                                                           stories (Stream B)
Sprint Goal:                                             Stream C: Begin
"8 S1 stories Ready,                                     first spike
ADR for persistence
accepted"

DAY 4                        DAY 5                       DAY 6
─────────────────────       ─────────────────────       ─────────────────────
Readiness Check #1          Stakeholder Check            Answer Tech Questions
(Stream B)                  (Stream A)                   (Stream C)
· Review 4–5 stories        · Show map + slices          · Spike results
  against DoR               · Show 2–3 draft stories     · Feasibility verdicts
· Fix actions assigned       · Collect feedback           · Risk flags
· Example Mapping for       · Note concerns               identified
  complex stories

DAY 7                        DAY 8                       DAY 9
─────────────────────       ─────────────────────       ─────────────────────
Lock Decisions               Tie It Together             Are We Ready?
(Stream C)                   (Stream C)                  (Stream B)
· Finalize ADRs             · C4 diagrams                · Readiness Check #2
· Option chosen              · Integration points         · Final DoR pass
· Decision log updated       · Deployment notes           · Count: Ready vs.
                             · Observability plan           Not Ready

DAY 10
─────────────────────
Show & Improve
· Demo ready stories
· Readiness count:
  N ready, M not ready
· Retro: helped / hurt / try
· Actions assigned
```

**Output after 10 days:**
- Story map with S1/S2/S3 slices (living artifact)
- N stories meeting the DoR (target: 80%+ of S1 stories)
- ADRs accepted and linked
- Architecture pack (C4, integration points, SLI/SLO)
- Risk register with owners
- Stakeholder alignment confirmed

**What crosses the Commitment Point:** Only the stories that pass the DoR. Not-ready stories stay in Upstream for the next discovery sprint. No exceptions.

---

## Quick Reference

| Concept | Rule |
|---------|------|
| Sprint length | 2 weeks, fixed |
| Streams | A (Map), B (Readiness), C (Architecture) — parallel, not sequential |
| Sprint goal | Measurable: number of Ready stories + key decisions |
| WIP limits | A ≤ 3 activities, B ≤ 6 stories in progress, C ≤ 3 spikes |
| Capacity | 70% delivery / 30% discovery; max 2 projects per person |
| Measurement | % of stories Ready (target 80%+); not velocity, not story points |
| Shared sessions | Readiness Checks (2×/week), Architecture Decisions (weekly) |
| Hand-off | Every story links to Epic → Feature → Initiative; no orphans |
| Anti-pattern | Discovery as homework (one person does everything alone) |
| ROI | 40–60% reduction in rework; pays for itself in 2–3 delivery sprints |

---

[← Story Mapping](/upstream/story-mapping) · [Definition of Ready →](/upstream/definition-of-ready)
