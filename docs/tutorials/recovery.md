# Recovering an Existing Project

<span class="phase-badge upstream">🔵 Upstream → Cross-Phase</span>

**Difficulty:** 🟡 Intermediate · **Time:** 2–4 hours for the audit, then ongoing · **Best for:** PMs, Tech Leads, and Team Leads inheriting or rescuing an in-flight project

---

## The Situation

The project has been running for six months. There are 140 stories in Jira — some done, some in progress, some untouched for weeks. There are epics with names like "Phase 2 backend" and "UI improvements." There is a Confluence space with three pages, last edited in February.

Nobody can answer: why are we building what we're building? What user does this serve? Which stories are most important and why?

The PM who started the project is gone. The tech lead who made the architectural decisions is half-time on another project. The business goal that triggered the initiative was mentioned in a Slack message that nobody can find.

This is not a special case. This is most projects.

And this is recoverable. You do not need a greenfield. You do not need to stop and restart. You enter the [Discovery Spiral](/upstream/spiral-model) at the right level and backfill upward until the chain connects to a business goal. Then you build forward from a position of alignment.

---

## The Recovery Principle

::: info One rule
Find the highest artifact that exists. Find the lowest level that's missing. Fill the gap. Then trace up until you can answer: why does this project exist?
:::

Once you can answer that question — and write it down — every new story written from that point forward is aligned. Every new developer who joins can orient in 20 minutes. The project isn't starting over. It's finally connected.

---

## Step 1: The Audit (60–90 minutes)

Before doing anything, map what you have. Open Jira, open Confluence, and fill in this checklist honestly.

```
LEVEL 1 — BUSINESS CONTEXT
[ ] Is there a documented annual goal or OKR this project contributes to?
[ ] Can anyone on the team state the business goal from memory?

LEVEL 2 — INITIATIVE
[ ] Does an Initiative Brief exist? (Not a PRD — a specific document that states:
    the problem, the primary persona, the success KPIs, and the scope)
[ ] Is the problem statement written in one sentence?
[ ] Are success KPIs defined with baselines, targets, and data sources?

LEVEL 3 — PERSONAS
[ ] Are named personas documented somewhere?
[ ] Do those personas have Experience Snapshots (150-word day-in-the-life narratives)?
[ ] Does the team use consistent persona names when discussing the product?

LEVEL 4 — FEATURES
[ ] Can you list the discrete Features in this product? (Not epics — Features.
    User-facing capabilities that each deliver a complete user outcome.)
[ ] Does each Feature have a Feature Brief? (Feature goal, journey map, epic list)

LEVEL 5 — EPICS
[ ] Do epics in Jira have goal statements? (Not just names — actual one-sentence
    descriptions of the user goal they serve)
[ ] Are epics linked to their journey steps?

LEVEL 6 — STORIES
[ ] Are stories written in the user story format?
    (As [named persona], I want [action], so that [outcome])
[ ] Do stories have 3+ testable acceptance criteria?
[ ] Do stories have visual references attached?
[ ] Are stories DoR-ready, or just tickets?
```

Mark each item ✅ exists, ⚠️ partial, or ❌ missing.

---

## Step 2: Find Your Entry Point

Look at the audit results. The entry point is the lowest level where you have a ❌.

| Your audit shows | Your entry point | What you do first |
|-----------------|-----------------|-------------------|
| ❌ No business goal documented | Business context | Talk to a stakeholder. Find the original intent. Write it down. |
| ❌ No Initiative Brief | Initiative Loop | Run [Initiative Activities](/upstream/activities-sprint) — abbreviated, since the product exists and you have real data to draw from |
| ❌ No personas documented | Persona definition | Run [Experience Snapshot](/upstream/experience-snapshot) sessions. Even one session produces a persona that can anchor the whole project. |
| ❌ No Feature Briefs | Feature Loop | Run [Feature Activities](/upstream/feature-activities) for each feature — using existing Jira epics as the starting material |
| ❌ Epics without goal statements | Epic Brief | Add a goal statement to each epic (E-1 from [Epic Activities](/upstream/epic-activities)) |
| ❌ Stories not DoR-ready | DoR check | Run the [DoR checklist](/upstream/definition-of-ready) against existing stories. Fix or park what fails. |

You may have multiple ❌ entries. Start at the highest (closest to business context) and work down. Don't write new stories while the Feature Brief is missing — those stories will drift the moment they hit dev.

---

## Step 3: Backfill Upward First

Before doing anything visible — before fixing stories, before writing new ones — close the gap toward business context.

This is the most important step and the most commonly skipped. It feels like overhead when there's a sprint starting Monday. It isn't overhead. It's the reason every previous sprint produced stories that felt right at the time and wrong a month later.

### If you have no documented business goal

Sit with a stakeholder or executive for 30 minutes. Ask:
- "Why did we build this product?"
- "What does success look like in a year?"
- "Who is the primary user?"

Write the answers down. Not in a meeting doc — in the [Project Master Document](/upstream/project-master-doc). Even rough answers are better than none. The PM who asks "why are we building this?" three sprints from now will thank you.

### If you have stories but no Initiative Brief

You have enough raw material. The Initiative Brief doesn't need user research from scratch — use what exists:
- Read the epics. Extract the implied problem they were solving.
- Look at the first stories ever written. They often contain the original intent.
- Read any old Slack threads, emails, or meeting notes that started the project.
- Talk to the original PM or stakeholder if possible.

Write a one-paragraph problem statement from that material. Write two KPIs you can actually measure. Write a one-sentence hypothesis. That's your Initiative Brief — abbreviated, but real. It is infinitely better than nothing.

### If you have no personas

This one is worth taking seriously. A project with no named personas has no shared mental model of who it's for. Every developer, QA engineer, and PM is imagining a different person.

Run one 60-minute session with PM + UX Designer (or a senior developer if no designer):
1. Pick the single most important user of the product
2. Give them a name
3. Write their Experience Snapshot — 150 words, specific moment, specific pain
4. Add them to the Project Master Document

Even one persona, if it's specific and agreed-upon, changes the team's behavior. Stories get written with that person in mind. Review conversations reference their name. The product starts to have a soul.

---

## Step 4: Map What You Have to the Hierarchy

Now that the upper levels are documented (even partially), map your existing Jira content upward.

For each epic in Jira:
- Does it belong to a Feature? Which one?
- Does that Feature have a Brief? If not, that's your next Feature Loop.
- What user goal does this epic serve? Write it as the Epic Brief.

For each story in Jira:
- Does it have the right format? If not, rewrite the title (doesn't require new estimation).
- Does it have 3+ testable ACs? If not, add them.
- Is it traceable to an Epic? If it's floating, park it in backlog until the Epic context exists.

This mapping exercise usually takes 2–4 hours. It produces three things:
1. A clearer picture of what the project actually is
2. An explicit list of gaps — the features and epics that exist in the code but not in the docs
3. A backlog that the team can actually navigate

---

## Step 5: Run the Right Loop Forward

Now you build forward — not from the old, disconnected backlog, but from the recovered structure.

**For new features:** Enter at the Feature Loop. You have the Initiative context now. Run F-1 through F-11. One week. The output is a Feature Brief and Epic list that the whole team agrees on.

**For new epics in existing features:** Enter at the Epic Loop. The Feature Brief exists. Run E-1 through E-8. 2–3 days. The output is DoR-ready stories.

**For new stories in existing epics:** Just DoR check. All context exists above. Write the story, run the 9-point checklist, move to sprint. This should take 30 minutes.

This is the payoff. The more context exists above, the cheaper it is to add anything below. A project that has been fully recovered — all levels documented — can absorb a new story in half an hour. A project with no context takes a week to figure out what a new story even means.

---

## What Recovery Feels Like

Recovery is not glamorous. You spend time writing documents that feel like they describe things everyone already knows. They don't — they describe things everyone *thinks* they know, which is different. The act of writing forces precision.

The team will push back: "We don't have time for this." The answer is: you don't have time to keep building without it. Every hour spent in recovery saves 5 hours of mid-sprint confusion. The math is not close.

The sign that recovery is working: stories stop bouncing back from QA. Developers stop asking "what exactly does this mean?" Stakeholders stop disagreeing about what was agreed. The sprint reviews stop being explanations of why things aren't done.

Recovery doesn't produce a perfect project. It produces a project where the team knows what they're building, why they're building it, and for whom.

That's enough to make everything else easier.

---

## Recovery Checklist

A practical list to check off as you go:

```
PHASE 1: CONNECT TO BUSINESS CONTEXT
[ ] Business goal documented in Project Master Document
[ ] Annual goal or OKR referenced
[ ] Stakeholder confirmed the goal is still valid

PHASE 2: INITIATIVE LEVEL
[ ] Initiative Brief exists (problem statement, persona, KPIs, scope)
[ ] Problem statement is one clear sentence
[ ] At least 2 KPIs with data sources

PHASE 3: PERSONA LEVEL
[ ] At least one named persona documented
[ ] Experience Snapshot written for primary persona
[ ] Persona added to Project Master Document

PHASE 4: FEATURE LEVEL
[ ] All features in the project are named and listed in the Project Master Document
[ ] Each feature has a Feature Brief (even a partial one)
[ ] Feature Backlog is up to date

PHASE 5: EPIC LEVEL
[ ] All epics have goal statements in Jira
[ ] Epics are linked to features

PHASE 6: STORY LEVEL
[ ] Stories in current sprint are DoR-ready (all 9 checkpoints)
[ ] Stories not in current sprint are either DoR-ready or explicitly parked

RECOVERY COMPLETE SIGNAL:
[ ] A new team member can orient to the project in 20 minutes using the
    Project Master Document alone
[ ] The PM can answer "why are we building this?" in one sentence
[ ] The next story added takes 30 minutes, not 2 days
```

---

::: tip Don't wait for perfect
A partial recovery — business goal documented, one persona defined, features listed — is infinitely better than no recovery. Start with what matters most and fill in the rest over two to three sprints. The project doesn't stop while you recover. You recover while you deliver.
:::

---

→ [The Discovery Spiral](/upstream/spiral-model) — the model this recovery is rebuilding toward
→ [Project Master Document](/upstream/project-master-doc) — the document to create during recovery
→ [Initiative Activities](/upstream/activities-sprint) — abbreviated version for existing projects
→ [Feature Activities](/upstream/feature-activities) — pick up here once initiative context exists
→ [Definition of Ready](/upstream/definition-of-ready) — the gate every story must pass, recovered or not
