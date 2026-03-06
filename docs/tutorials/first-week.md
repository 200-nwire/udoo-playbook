# Your First Week with UDOO

A PM joining a new project or starting fresh with a team that has never used UDOO often asks the same question: *"Where do I actually begin?"*

This tutorial is a day-by-day guide for Week 1. It gets you from "we have an idea and a vague team" to "we have a documented initiative, a first feature in discovery, and stories entering the sprint" — without skipping the steps that protect you later.

---

## Before Day 1: Two Things to Have in Hand

Before you run any sessions, make sure you have:

1. **A problem signal** — not a solution, not a roadmap item. A business observation: "Day-30 retention is 19%," "support tickets about X are up 40%," "the CEO wants to address Y." One sentence.

2. **The right people reachable** — you need a PM (you), a Tech Lead, a UX Designer, and at least one stakeholder who has authority to say yes. QA Lead is a bonus. You do not need the whole team yet.

That's it. You do not need a Confluence template, a Jira board, or anyone's permission. You need a problem and three colleagues.

---

## Day 1 — Monday: Name the Initiative

**Time required:** 2–3 hours

**What you're doing:** Running a Station 1 session and writing the Initiative Brief skeleton.

### Morning (1.5 hours): Station 1 Session

Gather PM + Tech Lead + UX Designer. Whiteboard or video call with a shared doc. Run through these questions out loud:

1. **Who is the user?** Not "enterprise customers" — a named person. "Ana, a team lead at a 15-person agency who…"
2. **What is their pain?** Specific. Observed. Not assumed.
3. **Why now?** What changed this quarter that makes this urgent? Data, events, or strategic shift.
4. **What does success look like?** One metric. Current state and target. "Day-30 retention from 19% to 30% within 90 days."
5. **What is explicitly out of scope?** Three things you will not solve in this initiative.

Write answers as you speak. Don't clean them up — capture them raw. You'll edit later.

**Output from this session:**
- A name for the Initiative (3–5 words)
- A primary persona (name + one-sentence context)
- A problem statement (one sentence)
- A success metric (current → target, data source identified)
- Three explicit non-goals

### Afternoon (1 hour): Write the TL;DR

On your own, write the Initiative Brief TL;DR:

> *[Persona] [does/tries to do X] but [current state is broken/missing/painful]. [Cost of inaction in measurable terms]. We believe [action] will [outcome] for [persona] within [timeframe].*

Do not write more than four sentences. If you need more, the problem isn't clear enough yet.

Open Confluence. Create the Initiative Brief page. Paste the TL;DR. Leave the rest of the sections as headers — you will fill them in over the next two days.

**Timebox:** 30 minutes to write, 30 minutes to review with the Tech Lead. Do not get precious about it — it will change.

---

## Day 2 — Tuesday: Understand the Problem

**Time required:** 2–3 hours

**What you're doing:** Running Station 2 — the problem framing session. Making assumptions explicit. Mapping the constraints.

### Morning (1.5 hours): Assumption Register + Constraints

In a shared doc (or in the Initiative Brief), work through:

**Assumptions (with PM + Tech Lead):**

For each assumption your initiative rests on, write:
- What you're assuming
- Your confidence (High / Medium / Low)
- What breaks if you're wrong
- How you'll validate it and by when

Push until you have at least 5 assumptions. If you have fewer, you haven't looked hard enough.

**Constraints:**
- Technical: what architecture choices constrain the solution?
- Resource: who is available and for how many sprints?
- Timeline: are there any hard dates?
- Regulatory: any compliance requirements that affect design?

**Output:** Assumption Register section in the Initiative Brief with minimum 5 entries.

### Afternoon (1 hour): Current State Walkthrough

Watch a user (or a recording of a user) perform the current flow. If you can't watch a real user today, pull the last 20 support tickets related to this area and read them verbatim.

Write the Current State Analysis:
- What does the user do today? Step by step.
- Where does it break or frustrate?
- What is their workaround?
- What is the business cost of not fixing this? (Tickets per month × cost per ticket. Churn. Hours wasted.)

::: tip If user research isn't done yet
Day 2 is about current knowledge, not new research. Write what you know, mark what you're assuming, and add user interviews to the Day 3 or Day 4 schedule. Don't skip Day 2 waiting for interviews — write the assumptions first and let the interviews validate or invalidate them.
:::

---

## Day 3 — Wednesday: Name the Features

**Time required:** 2 hours

**What you're doing:** Identifying the 3–6 Features that make up this Initiative. This is Activity I-9 from the [Initiative Loop](/upstream/activities-sprint).

### Session: Feature Identification (PM + Tech Lead, 90 min)

Return to the problem statement. Ask: *"What capabilities does the user need to solve this problem?"*

Write each capability as a verb phrase. These are Feature candidates. Then gut-check each one:

1. Is it a distinct *user capability* — something they can do that they couldn't do before?
2. Can it ship independently and deliver value without the others?
3. Is it genuinely separate from the others — no overlap in what it lets the user do?

If yes to all three, it's a Feature. If not, it might be an Epic inside a larger Feature.

Name each Feature (2–4 words, user-outcome framed):
- "Living Wondrously Journal" ✅
- "Journaling Feature" ❌ (too vague)
- "Journal Backend API" ❌ (not a user capability)

Write a one-line description for each. That's it for now — no epics, no stories.

**Output:** 3–6 named Features in the Initiative Brief, each with a one-line description.

### Slice the Features (30 min)

With the features named, assign them to S1 / S2 / S3:

- **S1:** Which features must ship together for the user to get any value? Start here.
- **S2:** What enhances S1 but isn't needed to prove the concept?
- **S3:** What's the full vision — valuable but not urgent?

The stakeholder confirms S1 is valuable without S2. The Tech Lead confirms S1 is buildable in the planned sprint capacity.

---

## Day 4 — Thursday: Write the Experience Snapshot

**Time required:** 2 hours

**What you're doing:** Writing the Primary Experience Snapshot (Activity I-6) and running the stakeholder alignment session (Activity I-7).

### Morning (45 min): Write the Experience Snapshot

With your UX Designer, write a 150–200 word day-in-the-life narrative for the primary persona.

Rules:
- Named person (not "the user")
- Present tense
- Specific moment (where are they? what time is it? what's happening around them?)
- Specific pain (what are they trying to do, and where does it break or feel bad?)
- Specific gap (what is missing that would make this moment better?)

See [Experience Snapshot](/upstream/experience-snapshot) for the full format and checklist.

Read it aloud. If it doesn't make you nod, it isn't specific enough.

### Afternoon (1 hour): Stakeholder Alignment Session

This session has one job: confirm that the stakeholder agrees with what the team has produced before anyone starts building.

**What you present:**
1. The problem statement
2. The primary persona + Experience Snapshot (read aloud — not handed as a doc)
3. The success metric
4. The S1 Feature list (names only, one-line descriptions)

**What you are NOT presenting yet:** epics, stories, timelines, or designs.

**What you need from the stakeholder:**
- Confirmation: "Yes, this is the right problem to solve."
- Confirmation: "Yes, these are the right Features for S1."
- Any objections — written down and addressed before Day 5.

If the stakeholder raises a new Feature idea: note it. It goes into S2 or S3 unless there is a compelling reason to change S1. The scope freeze starts at Day 7.

---

## Day 5 — Friday: Finalize and Begin Feature Loop

**Time required:** 2 hours

**What you're doing:** Finalizing the Initiative Brief and starting the Feature Loop for the first S1 Feature.

### Morning (1 hour): Freeze the Initiative Brief

Update the Initiative Brief with everything learned this week:
- TL;DR (updated if the stakeholder session changed anything)
- Assumption Register (complete)
- Feature List with S1/S2/S3 labels
- KPIs with current baseline and target
- Primary Experience Snapshot linked

Mark the Initiative Brief status as "Active". Any changes after this point require a Decision Log entry.

### Afternoon (1 hour): First Feature Loop Kickoff

Pick the first S1 Feature. Run a 45-minute Feature Loop kickoff with PM + Tech Lead + UX Designer:

1. Read the Feature's one-line description aloud.
2. Ask: "Who uses this Feature specifically? Is it the same persona as the Initiative, or a different moment?"
3. Write the Feature Brief stub (goal, persona, journey scope, what's out, success signal).
4. Schedule the User Journey Mapping session for next week (Feature Loop, Day 1).

**What you have at the end of Day 5:**
- A frozen Initiative Brief with confirmed S1 scope
- An approved primary persona and Experience Snapshot
- 3–6 named Features, S1/S2/S3 labeled
- Confirmed KPIs with data sources
- The Feature Loop for Feature 1 scheduled

That is a complete Initiative Loop in one week.

---

## Week 2 and Beyond: The Feature Loop Runs

Starting next Monday, the Feature Loop runs for each S1 Feature — [1 week per Feature](/upstream/feature-activities). In parallel if the team has capacity; sequentially if not.

The Initiative Loop does not run again until the next quarterly planning cycle (unless a major assumption is invalidated, which triggers a brief re-framing session).

The feature backlog grows as the Feature Loop runs — each completed Feature Loop adds 3–8 Delivery Epics to the backlog, each with Journey Step coverage and a Slice label. Epic Loops run on-demand as the team pulls Delivery Epics into refinement.

```
Week 1:  Initiative Loop ─────────────────────────────────────────────────────┐
Week 2:  Feature Loop (Feature 1) ──────────────────┐                         │
Week 3:  Feature Loop (Feature 2) ──────────────────┐                         │
Week 4:  Epic Loop (Epic 1 from Feature 1) ──────┐  │  ← sprint work begins  │
                                                  ↓  ↓                         ↓
                                            Stories in sprint         Backlog growing
```

---

## Common Week-1 Mistakes

| What teams do | What to do instead |
|---|---|
| Skip Day 2 because "we already know the problem" | Write the Assumption Register. You don't know what you're assuming until you write it down. |
| Jump to stories on Day 1 | No stories until the Epic Loop. Stories without a Feature Brief above them don't have direction. |
| Run a Feature Loop before the Initiative Brief is done | The Initiative Brief anchors every Feature Brief. Without it, each Feature Brief starts from scratch. |
| Invite 10 people to every session | Keep sessions to 3–4 people. PM + Tech Lead + UX minimum. Larger groups slow down, not up. |
| Wait until Day 4 to involve the Tech Lead | Include the Tech Lead in Day 1 and Day 3. Feasibility questions at Day 8 are expensive. |
| Write perfect documents before sharing | Share rough drafts on Day 2. You want disagreement early, not after Day 5. |

---

## What You Don't Need This Week

- A fully configured Jira board — you need a backlog and a way to create Epics. That's it. Configure the board later.
- Pixel-perfect designs — lo-fi wireframes or even sketches are enough for the Experience Snapshot and stakeholder session.
- Everyone's availability — 4 people working 2–3 hours a day is enough for a complete Initiative Loop.
- Certainty — you will have open assumptions and unanswered questions at the end of Day 5. That is normal. Write them down and own them.

---

