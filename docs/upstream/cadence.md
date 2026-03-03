# Cadence & Meeting Recipes

<span class="phase-badge upstream">🔵 Upstream</span>

## Purpose

Upstream runs on a **2-week discovery sprint** — a structured rhythm that transforms a vague idea into ready stories in 10 working days. Without cadence, discovery becomes an open-ended conversation that never converges. With cadence, the team knows exactly what happens each day, who facilitates, and what the output should be.

This chapter provides the day-by-day calendar, the daily standup format, and **meeting recipes** — exact structures, prompts, and phrases you can use to run effective discovery sessions without reinventing the format each time.

::: info Why 2 Weeks?
Two weeks is long enough to do thorough discovery (5 stations, stakeholder alignment, readiness checks) and short enough to maintain urgency. Longer discovery cycles tend to expand to fill the time. Shorter ones cut corners on Station 2 (problem framing) and Station 4 (options), which are the most common failure points.
:::

## The 2-Week Discovery Sprint Calendar

The discovery sprint has **three parallel streams** that run throughout the two weeks:

| Stream | Focus | Led by |
|--------|-------|--------|
| **Stream A: Map the Work** | Journey mapping, slice planning, epic structure | PM + UX Designer |
| **Stream B: Story Readiness** | Write stories, draft ACs, apply DoR checklist | PM + BA + QA Lead |
| **Stream C: Tech & Architecture** | Feasibility checks, spikes, ADRs, architecture pack | Tech Lead + Architect |

These streams are not sequential phases — they run concurrently. While Stream A maps the journey on Day 2, Stream C is already investigating technical feasibility questions surfaced on Day 1.

### Day-by-Day Calendar

| Day | Activity | Duration | Participants | Output |
|:---:|----------|:--------:|-------------|--------|
| **1** | **Kickoff** | 30–45 min | Core Trio + QA Lead + Stakeholder | Agreed problem, user outcome, sprint goals |
| **2** | **Map and Name** | 60–90 min | PM + UX + BA | Top-row journey map, named epics |
| **3** | **Choose the First Slice** | 45–60 min | Core Trio + QA Lead | S1 (MVP) scope defined, out-of-scope confirmed |
| **4** | **Make Cards Buildable** (Readiness Round 1) | 60 min | PM + BA + QA Lead + Tech Lead | First batch of stories reviewed against DoR |
| **5** | **Quick Stakeholder Check** | 20–30 min | PM + Stakeholder(s) | Journey, slice, and early stories validated |
| **6** | **Answer Technical Questions** | 60 min | Tech Lead + relevant devs | Spike results, feasibility verdicts, risk flags |
| **7** | **Lock Decisions** | 30–45 min | Core Trio | ADRs finalised, option chosen, decision log updated |
| **8** | **Tie It Together** (Architecture Pack) | 60 min | Tech Lead + PM | C4 diagrams, integration points, deployment notes |
| **9** | **Are We Truly Ready?** (Readiness Count) | 45–60 min | PM + BA + QA Lead + Tech Lead | Final DoR pass; count of ready vs. not-ready stories |
| **10** | **Show & Improve** (Retro) | 30–45 min | All participants | Demo of ready stories, retrospective actions |

::: tip Days Are Anchors, Not Mandates
The calendar is a guide, not a rigid schedule. If Day 2 mapping takes 2 hours and Day 3 slicing happens the same afternoon, that's fine. The point is that **by the end of Day 10, all outputs exist**. Adjust the timing to your team's rhythm.
:::

### Total Time Investment

| Role | Hours per Discovery Sprint | Notes |
|------|:-------------------------:|-------|
| Product Manager | 8–12 hours | Present in most sessions; does async work between them |
| UX/UI Designer | 6–8 hours | Heaviest on Days 1–3 (mapping, flows), lighter on Days 6–9 |
| Tech Lead | 6–8 hours | Heaviest on Days 6–8 (architecture), lighter on Days 1–3 |
| Business Analyst | 6–8 hours | Heaviest on Days 4, 9 (readiness checks) |
| QA Lead | 4–6 hours | Present at readiness checks and kickoff; async AC review |
| Stakeholder | 1–2 hours | Kickoff (Day 1) + Check (Day 5) + Demo (Day 10) |

**Per person, per week: approximately 2–4 hours.** This is the cost of building the right thing. Compare it to the cost of building the wrong thing (an entire wasted sprint: 40+ person-hours).

## Daily Standup Format

The discovery standup is a **15-minute, stream-oriented check-in**. It is not a status report — it is a coordination mechanism.

### Structure

```
DISCOVERY STANDUP (15 min)
──────────────────────────
1. MAP (Stream A lead — PM or UX):
   "Yesterday we mapped [steps]. Today we'll [next steps].
    Blocked by: [blocker or 'none']."

2. CARDS (Stream B lead — BA or PM):
   "We have [N] stories drafted, [M] reviewed against DoR.
    Today we'll work on [story group].
    Blocked by: [blocker or 'none']."

3. PLUMBING (Stream C lead — Tech Lead):
   "Spike on [topic] is [done/in progress]. Finding: [result].
    Today: [next investigation].
    Blocked by: [blocker or 'none']."

4. SYNC: Any cross-stream dependencies or decisions needed today?
```

::: warning Keep It To 15 Minutes
The discovery standup is not a design review, not a debate, and not a status meeting for management. If a topic requires discussion, note it and schedule a separate 20-minute conversation. The standup's job is to surface blockers and coordinate streams.
:::

## Meeting Recipes

Each meeting below includes the **purpose**, **duration**, **participants**, **agenda**, and **exact phrases** you can use. These phrases are not scripts — they are prompts that help the facilitator steer the conversation productively.

---

### Recipe 1: Kickoff (Day 1)

**Purpose:** Align the team on the problem, the target user, and the sprint goals. This is not a planning session — it is a framing session.

**Duration:** 30–45 minutes

**Participants:** Core Trio (PM, UX, Tech Lead), QA Lead, key Stakeholder

**Preparation:** PM prepares a 1-page brief with the Station 1 output (persona, problem statement, why now, success signals, non-goals).

**Agenda:**

| Time | Activity | Facilitator |
|------|----------|------------|
| 0–5 min | PM presents the problem and persona | PM |
| 5–15 min | Team asks clarifying questions | All |
| 15–25 min | Agree on sprint goals (what "done" looks like in 10 days) | PM |
| 25–35 min | Identify known unknowns and assign to streams | Tech Lead |
| 35–45 min | Confirm availability and schedule key sessions | PM |

**Key phrases:**

> *"In the next two weeks, we want users to be able to ______."*

This phrase forces the PM to state the desired user outcome in one sentence. If they can't, the initiative is not framed well enough.

> *"What do we already know? What do we still need to find out?"*

This separates facts from assumptions early, seeding the Assumption Register.

> *"What is explicitly NOT in scope for this sprint?"*

State non-goals upfront. Revisit them at the stakeholder check on Day 5.

---

### Recipe 2: Map and Name (Day 2)

**Purpose:** Create the user journey map (top row) and name the epics that cover each section of the journey.

**Duration:** 60–90 minutes

**Participants:** PM, UX Designer, BA (Tech Lead optional)

**Materials:** Whiteboard (physical or digital — Miro, FigJam), sticky notes

**Agenda:**

| Time | Activity |
|------|----------|
| 0–10 min | Review the persona and problem statement from Day 1 |
| 10–40 min | Map the journey: one sticky note per step, verb-noun format (J1: Opens app, J2: Searches library, etc.) |
| 40–60 min | Annotate each step: pain points, emotions, risks |
| 60–75 min | Group steps into epics, name each epic with a verb-noun phrase |
| 75–90 min | Photograph/export the board, link to Confluence |

**Key phrases:**

> *"What is the verb the user does here?"*

Forces concrete, action-oriented step descriptions. "Dashboard" is not a step; "Views dashboard" is.

> *"When will we say this step is done?"*

Seeds acceptance criteria thinking early, before stories are written.

> *"Where does it hurt most?"*

Identifies the steps with highest pain — these are candidates for S1 (MVP).

::: tip The "Happy Path First" Rule
Map the happy path first (everything works). Then go back and annotate the unhappy paths (errors, edge cases, empty states). Trying to map both simultaneously produces chaos.
:::

---

### Recipe 3: Choose the First Slice (Day 3)

**Purpose:** Define S1 (MVP) — the shortest end-to-end path that delivers real user value.

**Duration:** 45–60 minutes

**Participants:** Core Trio + QA Lead

**Preparation:** Journey map from Day 2 must be visible.

**Agenda:**

| Time | Activity |
|------|----------|
| 0–10 min | Review the journey map together |
| 10–30 min | Draw the S1 boundary: which steps are in, which are out? |
| 30–45 min | Define what S1 proves (the hypothesis it tests) |
| 45–60 min | List what is explicitly deferred to S2, S3 |

**Key phrases:**

> *"What is the shortest end-to-end path a new user could take?"*

This question forces the team to think in terms of user value, not technical layers.

> *"If we only shipped S1, would it be valuable to a real user?"*

The "valuable to a real user" test. If S1 requires S2 to be useful, the slice is wrong.

> *"What are we choosing NOT to do — and why?"*

Naming exclusions prevents scope creep. Write them in the Initiative Brief.

---

### Recipe 4: Readiness Check (Day 4 & Day 9)

**Purpose:** Review stories against the 9-point Definition of Ready. This meeting runs twice: a first pass (Day 4) and a final pass (Day 9).

**Duration:** 45–60 minutes

**Participants:** PM, BA, QA Lead, Tech Lead

**Preparation:** Stories drafted in Jira with acceptance criteria.

**Agenda:**

| Time | Activity |
|------|----------|
| 0–5 min | Count: how many stories are candidates? |
| 5–50 min | Review each story: read aloud, check DoR item by item |
| 50–60 min | Tally: ready vs. not ready. Assign fix actions for not-ready stories. |

**Key phrases:**

> *"Read the story in one breath."*

If the story is too long to read aloud in one breath, it's too complex. Split it.

> *"What must be true for this to pass QA?"*

Surfaces missing acceptance criteria — especially edge cases and error states.

> *"Any missing edge case?"*

The QA Lead's moment. This is where the negative-balance AC gets added.

> *"Who would pick this up tomorrow — and could they start without asking a question?"*

The readiness test: if the answer is "they'd need to ask about X," then X needs to be documented in the story.

::: details The Day 9 Readiness Count
On Day 9, the readiness check produces a **count**: how many stories are Ready vs. Not Ready. This count is shared at the Day 10 retro and with stakeholders. It is the single best measure of Upstream quality. Target: 80%+ of stories ready by Day 9. If fewer than 80% are ready, the discovery sprint needs more time or the scope was too large.
:::

---

### Recipe 5: Architecture Decisions (Day 6–7)

**Purpose:** Resolve technical questions, record decisions in ADRs, and review spike results.

**Duration:** 45–60 minutes

**Participants:** Tech Lead, PM, relevant developers, Architect (if separate)

**Preparation:** Spike reports from Stream C, Station 4 options analysis.

**Agenda:**

| Time | Activity |
|------|----------|
| 0–10 min | Review spike results |
| 10–30 min | Discuss each open technical question |
| 30–45 min | Make decisions and draft ADR entries |
| 45–60 min | Identify remaining risks and assign owners |

**Key phrases:**

> *"What problem are we solving with this decision?"*

Prevents the conversation from drifting into pure technical preference ("I like Postgres" is not a rationale).

> *"What did we decide, and why?"*

The ADR summary sentence. If the team can't state this clearly, the decision isn't made yet.

> *"What becomes harder because of this choice?"*

Every decision has consequences. Naming them prevents surprises later.

---

### Recipe 6: Stakeholder Check (Day 5)

**Purpose:** Show stakeholders the journey, the first slice, and the stories — and get their input before the team goes deep on readiness and architecture.

**Duration:** 20–30 minutes

**Participants:** PM + key Stakeholder(s)

**Preparation:** Journey map, slice plan, and a handful of draft stories.

**Agenda:**

| Time | Activity |
|------|----------|
| 0–5 min | Recap the problem and persona (1 minute) |
| 5–15 min | Walk through the journey map and first slice |
| 15–25 min | Show 2–3 draft stories as examples of scope and detail |
| 25–30 min | Collect feedback, note any concerns |

**Key phrases:**

> *"Here's the journey, the first slice, and the stories we've made ready."*

A structured presentation, not an open-ended discussion. The stakeholder sees concrete work, not abstract plans.

> *"Is this aligned with what you expected?"*

Catches misalignment early — on Day 5, not Day 10.

> *"What concerns do you have that we haven't addressed?"*

An explicit invitation to raise issues. Better to hear them now than during sprint planning.

::: warning Stakeholder Feedback Is Input, Not Orders
The stakeholder check is a feedback session, not a scope-change session. If the stakeholder says "add feature X," the PM notes it and evaluates it against the slice plan. It does not automatically enter S1. The PM owns the backlog; the stakeholder owns business alignment.
:::

---

### Recipe 7: Show & Improve — Retro (Day 10)

**Purpose:** Demo the ready stories, celebrate what went well, and identify what to improve for the next discovery sprint.

**Duration:** 30–45 minutes

**Participants:** All discovery sprint participants

**Agenda:**

| Time | Activity |
|------|----------|
| 0–10 min | Readiness count: N stories ready, M not ready, K deferred |
| 10–20 min | Demo 2–3 ready stories end-to-end (persona, journey, ACs) |
| 20–35 min | Retro: each person shares one thing that helped, one that hurt, one to try next time |
| 35–45 min | Capture actions, assign owners |

**Key phrases:**

> *"One thing that helped, one that hurt, one we'll try next time."*

A three-part retro format that is fast, structured, and actionable. Each person gets 2 minutes.

**Retro board template:**

```
🟢 HELPED (keep doing)     🔴 HURT (stop doing)     🔵 TRY (experiment)
─────────────────────      ─────────────────────     ─────────────────────
• Spikes gave us           • Stakeholder changed     • Pair-write ACs
  confidence on Day 6        mind on Day 8             (BA + QA together)
• Journey map kept us      • Too many stories for    • Async stakeholder
  focused on user value      one readiness check        check via Loom video
```

## Handling Multi-Project Reality

Most teams do not have the luxury of a single discovery sprint in isolation. People are split across projects, and discovery competes with sprint work, support rotations, and production incidents.

### Strategies That Work

**1. Shared Calendar with Discovery Blocks**

Block recurring 2-hour windows for discovery work. Protect them the way you protect sprint ceremonies. If discovery time is "whatever time is left over," it will always be zero.

```
Monday:     10:00–12:00  Discovery Sprint (Stream A + B)
Wednesday:  14:00–16:00  Discovery Sprint (Stream B + C)
Friday:     10:00–11:00  Discovery Standup + ad-hoc
```

**2. Portfolio Board**

Maintain a simple portfolio board showing which initiatives are in which phase. This prevents the situation where three discovery sprints start simultaneously and none finish.

```
PORTFOLIO BOARD
───────────────
Upstream:     [Initiative X — Day 7]  [Initiative Y — Day 2]
Downstream:   [Initiative W — Sprint 3 of 4]
Onstream:     [Incident Z — RCA in progress]
Offstream:    [Client Q — QBR next week]
```

**3. The 70/30 Capacity Rule**

Reserve 70% of the Core Trio's capacity for the current sprint (Downstream work). Allocate 30% for discovery (Upstream work). This prevents discovery from starving — but also prevents it from cannibalising the sprint.

| Person | Sprint work (70%) | Discovery work (30%) |
|--------|:-:|:-:|
| PM | Backlog grooming, sprint support, stakeholder comms | Station facilitation, brief writing, readiness checks |
| Tech Lead | Code review, technical guidance, incident support | Spikes, ADRs, feasibility checks |
| UX Designer | Implementation review, design QA | Journey mapping, wireframes, flow design |

::: tip When 30% Isn't Enough
Some initiatives (new product lines, major pivots) require full-time discovery. In these cases, dedicate the Core Trio to discovery for the full 2 weeks and backfill their sprint responsibilities. Half-hearted discovery produces half-baked stories.
:::

## Common Pain Points and How to Handle Them

### "Too many meetings"

**Reality check:** The discovery sprint contains approximately 6–8 hours of meetings over 10 days. That's 3–4 hours per week — less than most teams spend in status meetings that produce nothing.

**If it still feels like too much:**
- Combine the daily standup with another team ritual (e.g., skip the general standup on discovery days)
- Make the stakeholder check async: PM records a 5-minute Loom video, stakeholder responds in writing
- Cancel meetings where the output is already achieved (if the slice was defined on Day 2, skip Day 3's formal session)

### "Stakeholders keep changing their mind"

**Root cause:** Usually means the stakeholder was not involved early enough, or the problem framing (Station 2) was not shared with them.

**Solutions:**
1. Involve the stakeholder at Kickoff (Day 1) — they hear the problem framing firsthand
2. Share the journey map and slice plan on Day 5 — before the team goes deep
3. Set a **scope freeze date** (Day 7) and communicate it explicitly: "After Wednesday, changes to S1 scope go to S2"
4. When a stakeholder requests a change after the freeze, respond with the trade-off: *"We can add X to S1, but it pushes the ship date by Y. Alternatively, X goes into S2 and ships 2 weeks later. Which do you prefer?"*

### "We're split across too many projects"

**Root cause:** The organisation is running more initiatives than it has capacity for. No cadence trick fixes an overloaded team.

**Solutions:**
1. Use the portfolio board to make WIP (work in progress) visible
2. Adopt a **WIP limit** for discovery: maximum 2 concurrent discovery sprints per Core Trio member
3. Sequence initiatives: finish one discovery sprint before starting the next
4. Escalate to leadership with data: *"We have 5 initiatives in Upstream and capacity for 2. Here are the trade-offs of each sequencing option."*

### "Discovery feels like waterfall"

**Misconception:** "We're spending 2 weeks planning before coding. That's waterfall."

**Reality:** Waterfall spends months on requirements and delivers no shippable output. A 2-week discovery sprint produces ready stories and delivers the first slice in the very next sprint. The total cycle from idea to shipped S1 is 4 weeks (2 weeks discovery + 2 weeks sprint) — faster than most teams ship without discovery, because they spend 2+ weeks of the sprint discovering what they should have found earlier.

The difference from waterfall:
- Discovery is time-boxed, not scope-boxed
- The output is sliced (S1 ships in one sprint), not monolithic
- Assumptions are tested with spikes, not assumed correct
- Feedback loops are built into the rollout plan

::: tip The Discovery ROI Calculation
Track two metrics across 3–4 sprints: (1) stories sent back from Downstream to Upstream (rework), and (2) bugs found in production that trace to missing requirements. Compare before and after adopting discovery sprints. Teams that do this consistently see a 40–60% reduction in rework.
:::

---

[← Anti-Patterns](/upstream/anti-patterns) · [Back to Upstream Overview →](/upstream/)
