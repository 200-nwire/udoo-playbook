# Your First Upstream Sprint

<span class="phase-badge upstream">🔵 Upstream</span>

**Difficulty:** 🟢 Beginner · **Time:** 2–3 hours · **Team size:** 3+ people (or solo with role-play)

This tutorial walks you through a complete 2-week discovery sprint — from a vague idea to a backlog of stories that meet the [Definition of Ready](/upstream/definition-of-ready). You'll use a fictional project called **TaskFlow** (a team task management tool), but every exercise is designed so you can repeat it with your own initiative.

---

## Prerequisites

Before starting, you need:

- [ ] **A problem to solve** — either use TaskFlow (described below) or bring your own
- [ ] **A team of 3+** — at minimum: one person playing PM, one Developer, one QA (if solo, play all three)
- [ ] **A whiteboard or Miro board** — you'll draw maps and story flows
- [ ] **Familiarity with the [5 Discovery Stations](/upstream/discovery-backbone)** — you don't need to memorise them, but read through once
- [ ] **A printed copy of the [DoR checklist](/upstream/definition-of-ready#the-9-point-dor-checklist)** — you'll need it on Day 9

::: info The Tutorial Project: TaskFlow
**TaskFlow** is a lightweight task management tool for small teams (5–15 people). The target persona is **Maya, a team lead at a 12-person marketing agency**, who currently uses sticky notes and a shared Google Sheet to track her team's work. She loses tasks, forgets deadlines, and spends 30 minutes every Monday morning rebuilding the weekly status update from scratch.

The founding team (that's you, for this exercise) believes there's a gap between enterprise project management tools (Jira, Asana) and sticky-note chaos. TaskFlow should be **simple enough to adopt in a day** but structured enough to prevent tasks from falling through the cracks.
:::

---

## Day 1: Kickoff

**Goal:** Align the team on the problem, the persona, and the sprint goals.

### Step 1: Write the Problem Statement

The problem statement answers four questions: **Who** has the problem? **What** is the problem? **Why** does it matter? **Why now?**

::: tip Problem Statement Template
**[Persona]** struggles with **[problem]** because **[root cause]**, which results in **[impact]**. This matters now because **[trigger/urgency]**.
:::

### ✏️ Exercise 1.1 — Write TaskFlow's Problem Statement

Using the template above, write a problem statement for TaskFlow. Don't worry about perfection — write a first draft, then improve it.

::: details Solution: TaskFlow Problem Statement
**Maya, a team lead at a 12-person marketing agency**, struggles with **tracking her team's tasks and deadlines** because **her current tools (sticky notes, Google Sheets) don't provide visibility into who's doing what and what's overdue**, which results in **missed deadlines, duplicated effort, and 30+ minutes wasted every Monday rebuilding status reports**. This matters now because **the agency just onboarded 3 new clients, and the current system is already breaking at the current load**.
:::

### Step 2: Define the Persona

A persona is not a demographic profile. It is a **behaviour profile** — what does this person do, what frustrates them, what does "success" look like for them?

### ✏️ Exercise 1.2 — Write Maya's Persona Card

Fill in the following card:

```
PERSONA CARD
============
Name:           Maya
Role:           
Team size:      
Current tools:  
Daily routine:  (describe a typical workday morning)
Top frustration:
Success looks like:
Quote:          "[something Maya would actually say]"
```

::: details Solution: Maya's Persona Card
```
PERSONA CARD
============
Name:           Maya
Role:           Team Lead, Creative Agency (12 people)
Team size:      12 direct reports across design, copy, and accounts
Current tools:  Google Sheets (shared task list), sticky notes, Slack threads
Daily routine:  Arrives 8:30. Checks Slack for overnight messages.
                Opens the Google Sheet. Tries to figure out what's
                stuck, what's done, what's due today. Slack-messages
                3 people asking for updates. By 9:15, still doesn't
                have a clear picture.
Top frustration: "I spend more time tracking work than doing work."
Success looks like: Opening one screen and knowing what's on track,
                    what's late, and what needs her attention.
Quote:          "I just want to see what's happening without
                 asking everyone."
```
:::

### Step 3: Agree on Sprint Goals

The sprint has 10 working days. You cannot discover everything. Choose **2–3 concrete goals** for this sprint.

### ✏️ Exercise 1.3 — Write 2–3 Sprint Goals

Your sprint goals should be outcome-oriented, not activity-oriented. Not "research competitors" but "identify 3 differentiators from Trello/Asana."

::: details Example Sprint Goals
1. Produce a story map with 3–5 activities, each with at least 2 epics
2. Write 8–12 stories that meet the Definition of Ready for the first release slice
3. Resolve the top 2 technical unknowns (offline support? real-time updates?) with spikes
:::

---

## Day 2: Map

**Goal:** Create the activity map — the top-level view of what the product does.

### Step 1: List the Activities

Activities are the **big things** a user does with the product. They go across the top of your story map. Think of them as chapters in the user's story.

For TaskFlow, start with Maya's morning. What are the **verbs**?

### ✏️ Exercise 2.1 — List TaskFlow's Activities

Write 4–6 activities that represent Maya's interaction with TaskFlow across a typical day. Each activity should be a verb phrase.

::: details Solution: TaskFlow Activities
```
Activity Map (top row)
═══════════════════════════════════════════════════════════
 Plan the     │  Assign     │  Track      │  Review &
 Week         │  Tasks      │  Progress   │  Report
              │             │             │
═══════════════════════════════════════════════════════════
```

Four activities:
1. **Plan the Week** — Maya sets up the week's work and priorities
2. **Assign Tasks** — Maya creates and assigns tasks to team members
3. **Track Progress** — Maya and the team update status throughout the week
4. **Review & Report** — Maya reviews what's done and generates a status summary
:::

### Step 2: Name the Epics Under Each Activity

Epics are the **smaller capabilities** that make each activity possible. Under "Assign Tasks," you might have: "Create a task," "Set a due date," "Assign to a person."

### ✏️ Exercise 2.2 — Write 2–3 Epics Under Each Activity

For each of your activities, name 2–3 epics. Don't go deeper yet — just the names.

::: details Solution: TaskFlow Epics
```
 Plan the Week      │  Assign Tasks        │  Track Progress     │  Review & Report
════════════════════╪══════════════════════╪═════════════════════╪════════════════════
 E1: Create weekly  │  E4: Create a task   │  E7: Update task    │  E10: View weekly
     plan           │                      │      status         │       dashboard
                    │                      │                     │
 E2: Set team       │  E5: Assign task     │  E8: Comment on     │  E11: Generate
     priorities     │      to member       │      a task         │       status report
                    │                      │                     │
 E3: View backlog   │  E6: Set due dates   │  E9: Get notified   │  E12: Share report
     from last week │      and urgency     │      about overdue  │       with clients
```
:::

::: warning Common Mistake: Jumping to UI
At this stage, you are mapping **what Maya does**, not **what the screen looks like**. "A task card with a drag-and-drop Kanban board" is a solution. "Track Progress" is an activity. Stay at the activity level.
:::

---

## Day 3: Slice

**Goal:** Choose the first release slice and write story starters.

### What Is a Slice?

A slice is a **vertical cut through the story map** that delivers a complete (if minimal) user journey. The first slice should be the thinnest version of the product that is still useful.

### ✏️ Exercise 3.1 — Draw Your First Slice

Look at your activity map. Draw a horizontal line that cuts through each activity, capturing the **minimum** capability needed for Maya to get value from TaskFlow on day one.

::: details Solution: TaskFlow First Slice (MVP)
```
 Plan the Week      │  Assign Tasks        │  Track Progress     │  Review & Report
════════════════════╪══════════════════════╪═════════════════════╪════════════════════
 ░░░░░░░░░░░░░░░░░░░░░░░░░░░░ SLICE 1 (MVP) ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
 View backlog       │  Create a task       │  Update task status │  View weekly
 from last week     │  Assign to member    │  (To Do → Doing     │  dashboard
                    │                      │   → Done)           │
 ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░

 ──────────────────── SLICE 2 (Future) ────────────────────
 Set team           │  Set due dates       │  Comments           │  Generate report
 priorities         │  and urgency         │  Get notifications  │  Share with clients
```

Slice 1 gives Maya: a backlog, the ability to create and assign tasks, move them through a simple workflow, and see a dashboard. That's enough to replace her Google Sheet on day one.
:::

### Step 2: Write Story Starters

A story starter is a draft story — it has the persona, action, and outcome, but it doesn't yet have acceptance criteria or a visual reference. That comes later.

### ✏️ Exercise 3.2 — Write 6–8 Story Starters for Slice 1

Use the format: "As **[persona]**, I want **[action]**, so that **[outcome]**."

::: details Solution: TaskFlow Slice 1 Story Starters
1. As Maya, I want to create a new task with a title and description, so that I can capture work that needs to be done.
2. As Maya, I want to assign a task to a team member, so that everyone knows who is responsible.
3. As Maya, I want to move a task between To Do, Doing, and Done columns, so that I can track progress at a glance.
4. As Maya, I want to see all tasks on a single board, so that I know what my team is working on right now.
5. As a team member, I want to see the tasks assigned to me, so that I know what to work on today.
6. As Maya, I want to see a weekly summary dashboard (tasks created, completed, overdue), so that I can report status without manual counting.
7. As Maya, I want to filter tasks by assignee, so that I can check a specific person's workload.
8. As a team member, I want to add a note to a task, so that I can share context without a Slack message.
:::

---

## Day 4: Readiness Check (Round 1)

**Goal:** Review each story starter against the DoR. Mark "ready" or "fix and come back."

### The First Pass

Take your 6–8 story starters and check each one against the [9-point DoR checklist](/upstream/definition-of-ready#the-9-point-dor-checklist). At this stage, most stories will fail — that's expected. The purpose of the first readiness check is to **identify what's missing**, not to declare readiness.

### ✏️ Exercise 4.1 — Run the Readiness Check

For each story, mark each DoR criterion as ✅ or ❌. When ❌, write what's missing and who should fix it.

::: details Example: Readiness Check for Story #1
**Story:** "As Maya, I want to create a new task with a title and description, so that I can capture work that needs to be done."

| # | Check | Status | Notes |
|---|-------|--------|-------|
| 1 | Story format | ✅ | Correct As/I want/So that |
| 2 | Journey reference | ❌ | No journey step ID assigned yet |
| 3 | Acceptance criteria | ❌ | No ACs written |
| 4 | Visual reference | ❌ | No sketch or mockup |
| 5 | Copy / text | ❌ | Button labels, placeholders not defined |
| 6 | Observability signal | ❌ | No event name defined |
| 7 | Dependencies | ✅ | No external dependencies |
| 8 | Size | ❌ | Not sized by team |
| 9 | Technical feasibility | ❌ | Tech Lead hasn't reviewed |

**Verdict:** Not Ready. 6 of 9 checks failed.

**Action items:**
- PM writes ACs by Day 5 (owner: PM)
- Designer sketches task creation screen by Day 5 (owner: Designer)
- Tech Lead reviews feasibility by Day 6 (owner: Tech Lead)
:::

::: tip This Is Normal
A first-pass readiness check where 70–80% of stories fail is completely normal and healthy. The checklist surfaced six specific gaps, each now assigned to a named owner. Without this check, these gaps would surface mid-sprint as confusion, rework, and blocked stories.
:::

---

## Day 5: Stakeholder Check

**Goal:** Share the activity map and story starters with stakeholders. Get confirmation or correction.

### How to Run the Check

This is a 30-minute meeting. You present two things:

1. **The activity map** — "Here is what we think the product does, at the highest level. Does this match your understanding?"
2. **The Slice 1 stories** — "Here is what we plan to build first. Is this the right starting point?"

You want one of two responses: **"Looks good"** or **"Change this."** Both are valuable.

### ✏️ Exercise 5.1 — Prepare Your Stakeholder Deck

Write a brief (4–5 bullet points) summary you would present to a stakeholder. Include: the problem statement, the persona, the activity map, and the first slice.

::: details Solution: TaskFlow Stakeholder Summary
1. **The problem:** Small team leads (10–20 people) have outgrown sticky notes and spreadsheets but find enterprise tools too complex. They waste 30+ minutes daily just figuring out what's happening.
2. **The persona:** Maya, team lead at a 12-person marketing agency. Needs to see who's doing what, what's late, and report to clients — without asking everyone individually.
3. **The activity map:** Four activities — Plan → Assign → Track → Report. Each has 2–3 epics underneath.
4. **The first slice (MVP):** Create tasks, assign them, move them through To Do → Doing → Done, and see a weekly dashboard. No priorities, no comments, no notifications in V1.
5. **The ask:** Does this feel right? Are we missing an activity? Is the first slice too thin or too thick?
:::

::: warning Stakeholder Check ≠ Approval Gate
The stakeholder check is not a gate that blocks progress. It is a course-correction opportunity. If the stakeholder says "Looks good," continue. If they say "You're missing billing," add it to the map and decide if it changes Slice 1. Don't wait for formal sign-off — alignment is what you need, not a signature.
:::

---

## Day 6: Technical Questions

**Goal:** Resolve technical unknowns. Engineers present spike results and write ADRs.

### What Are Spikes?

A spike is a **time-boxed investigation** (typically 1–2 days) that answers a specific technical question with working code, not opinion.

### ✏️ Exercise 6.1 — Identify 2–3 Technical Questions for TaskFlow

What doesn't the team know yet? What technical decisions could change how stories are written?

::: details Example Technical Questions
1. **Real-time updates:** When Maya moves a task to "Done," does her team member see it update instantly, or do they need to refresh? (Impacts: WebSocket vs. polling vs. SSE)
2. **Data model:** Do we use a relational DB (Postgres) or a document store (Firestore)? (Impacts: query patterns for filtering and reporting)
3. **Auth:** Do users log in with email/password, or Google SSO? (Impacts: onboarding flow stories)
:::

### Writing an ADR

An Architecture Decision Record captures the decision, the options considered, and why one was chosen.

```
ADR-001: Real-Time Task Updates
================================
Status:   Accepted
Date:     2026-02-25
Context:  Maya's team needs to see task status changes without
          manual refresh. The team has limited backend experience.

Options:
  A) WebSockets — real-time push, complex server setup
  B) Server-Sent Events (SSE) — simpler, one-way push
  C) Client polling every 30s — simplest, slight delay

Decision: Option C (polling) for MVP. 30s delay is acceptable
          for a task board. Upgrade to SSE in Slice 2 if users
          report frustration.

Consequences:
  - Dashboard may show stale data for up to 30 seconds
  - Simpler infrastructure for launch
  - Must revisit if user testing shows 30s is too slow
```

### ✏️ Exercise 6.2 — Write an ADR

Pick one of your technical questions and write an ADR using the template above.

---

## Day 7: Lock

**Goal:** No new scope enters the sprint. Run a second readiness check.

### What "Lock" Means

After Day 7, no new stories, epics, or activities are added to the sprint scope. The remaining 3 days are for polishing stories, completing readiness, and preparing the architecture pack — not for discovering new capabilities.

::: danger Scope Creep Warning
"Just one more story" is the most common way sprints fail. If a new idea emerges after Day 7, it goes into the **next sprint's backlog**, not this one. Write it down, park it, move on.
:::

### ✏️ Exercise 7.1 — Second Readiness Check

Take your stories from Day 4 and re-run the 9-point checklist. The gaps identified on Day 4 should now be resolved. Any story that still fails readiness either needs more work (and stays in Upstream) or is too complex and needs splitting.

---

## Day 8: Architecture Pack

**Goal:** Gather technical notes, diagrams, API contracts, and NFRs into a single document.

### What Goes in the Architecture Pack

The Architecture Pack is the technical companion to the story map. It gives developers the context they need to start coding on sprint day 1.

```
ARCHITECTURE PACK — TaskFlow Slice 1
======================================

1. System Diagram
   [Frontend: React SPA] → [API: Node/Express] → [DB: PostgreSQL]

2. API Contracts
   POST /api/tasks        — Create a task
   PATCH /api/tasks/:id   — Update status, assignee
   GET  /api/tasks        — List tasks (filter: assignee, status)
   GET  /api/dashboard    — Weekly summary (counts by status)

3. Data Model
   tasks: { id, title, description, status, assignee_id,
            created_at, updated_at }
   users: { id, name, email, role }

4. Non-Functional Requirements
   - Page load < 2s on 4G connection
   - Support 15 concurrent users (one team)
   - Data retained for 12 months minimum

5. Open Questions (resolved)
   - Real-time: polling (ADR-001)
   - Auth: Google SSO (ADR-002)
```

### ✏️ Exercise 8.1 — Draft Your Architecture Pack

Using the template above, draft the architecture pack for your project. Don't aim for perfection — aim for "enough that a developer can start."

---

## Day 9: Self-Check

**Goal:** Count ready stories. Check architecture readiness. Verify the sprint is set up for success.

### The Numbers

Answer these questions with actual numbers:

### ✏️ Exercise 9.1 — Sprint Readiness Scorecard

```
SPRINT READINESS SCORECARD
===========================
Total stories in Slice 1:           ___
Stories meeting DoR (all 9 checks): ___
Stories with 1–2 gaps remaining:    ___
Stories with 3+ gaps (not ready):   ___

Architecture Pack:    [ ] Complete  [ ] In progress  [ ] Not started
Technical spikes:     [ ] All resolved  [ ] Some pending  [ ] Not started
Stakeholder aligned:  [ ] Yes  [ ] Partially  [ ] No
```

::: tip The 80% Rule
If 80% or more of your Slice 1 stories meet DoR, the sprint is ready. If fewer than 80% meet DoR, either the slice is too ambitious or the Upstream work needs more time. It's better to enter Downstream with 6 fully ready stories than 10 half-ready ones.
:::

---

## Day 10: Show & Improve

**Goal:** Present all artefacts to the team. Run a retrospective. Pick 2 improvements.

### The Show

Present the sprint's outputs in a 30-minute session:

1. **Problem statement** (2 min) — remind everyone what we're solving and for whom
2. **Activity map** (5 min) — walk through the four activities and their epics
3. **First slice** (5 min) — explain what's in and what's out of the MVP
4. **Ready stories** (10 min) — walk through 2–3 stories in detail, showing ACs and visual references
5. **Architecture pack** (5 min) — summarise the technical approach and ADRs
6. **Open questions** (3 min) — anything unresolved going into Downstream

### The Retrospective

After the show, run a quick retro. Use the "Start / Stop / Continue" format:

### ✏️ Exercise 10.1 — Sprint Retrospective

```
START DOING (things we should add to our next discovery sprint):
- 
- 

STOP DOING (things that didn't help):
- 
- 

CONTINUE DOING (things that worked well):
- 
- 
```

### ✏️ Exercise 10.2 — Pick 2 Improvements

From your retro, choose exactly **2 improvements** to apply in your next discovery sprint. Not 5. Not "we'll try to do everything better." Two concrete, actionable changes.

::: details Example Improvements
1. **Start:** Writing acceptance criteria on Day 3 instead of Day 4 — we ran out of time for ACs and it cascaded into readiness check delays.
2. **Continue:** Daily 10-minute stand-ups during the discovery sprint — they kept everyone aligned without eating into deep work time.
:::

---

## What You Should Have at the End

If you completed every exercise, you now have:

| Artefact | Description |
|----------|-------------|
| Problem statement | A clear, persona-grounded articulation of the problem |
| Persona card | Maya's behaviour profile, frustrations, and success criteria |
| Activity map | 4 activities with 2–3 epics each |
| Story map with slice | First slice drawn, separating MVP from future work |
| 6–8 stories | Written in proper story format with ACs |
| DoR checklist results | Every story checked against the 9-point checklist |
| Architecture pack | System diagram, API contracts, data model, NFRs |
| 2 ADRs | Technical decisions documented with context and consequences |
| Sprint readiness scorecard | Quantified readiness assessment |
| 2 improvement actions | Concrete changes for the next sprint |

::: info What Comes Next
These artefacts cross the **Commitment Point** into [Downstream](/downstream/). The stories enter the sprint backlog, the architecture pack guides development, and the ADRs prevent revisiting settled decisions. The discovery sprint is over — the delivery sprint begins.
:::

---

## Adapting This Tutorial to Your Project

Everything in this tutorial was designed for a fictional task management tool. But the **structure** — the 10-day sequence, the exercises, the checkpoints — works for any initiative:

1. **Replace Maya** with your persona
2. **Replace TaskFlow** with your product
3. **Replace the activities** with your user's actual workflows
4. **Keep the cadence** — the 10-day rhythm of kickoff → map → slice → check → lock → pack → show is the backbone of every Upstream sprint

The first time you run this with a real project, it will feel slower than "just start building." By Day 10, you'll have a backlog that your developers can pick up and build without a single "wait, what does this story mean?" conversation mid-sprint.

That saved confusion is the entire point.

---

**Next tutorial:** [The Wrong Way (Then the Right Way) →](./wrong-way-right-way)
