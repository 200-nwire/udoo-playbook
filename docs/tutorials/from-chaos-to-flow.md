# From Chaos to Flow

**Difficulty:** 🟡 Intermediate · **Time:** 45–60 minutes · **Best for:** New teams, struggling teams, team retrospectives

This tutorial doesn't start from an ideal project. It starts from a real one — one that went wrong in the ways most projects go wrong. You will recognize it. Names and details are changed; the pattern is not.

We follow the team through the chaos, then watch them rebuild around UDOO practices — not in a single meeting but over three sprints of real change. By the end, you will have a concrete mental model of what the transition from chaos to flow actually looks like.

---

## The Team

**Project:** Strato — a B2B SaaS platform for field service companies. The product exists. It has customers. The team has been building for 18 months.

**People:**
- **Rachel** — Product Manager. Sharp, overloaded. Manages Strato and two other projects simultaneously.
- **Dan** — Tech Lead and senior developer. Nine years of experience. Has strong opinions about architecture, rarely voices them early enough.
- **Yael** — Designer. Produces beautiful mockups. Joins projects when she's "done with discovery."
- **Uri and Ben** — Developers. Both capable. Neither is sure what the other is building at any given time.
- **Shira** — QA. Joins the sprint "for testing" in the last three days before release.

**The current state:**
- Sprint velocity: unpredictable. Some sprints: 30 points. Others: 8.
- On-call: undefined. When something breaks, everyone knows it from Slack.
- Backlog: 140 items, most of which nobody has looked at in 90 days.
- Discovery: Rachel writes specs alone and presents them at sprint planning.
- Reviews: PRs merge after 3-5 days on average.
- Customer feedback: Support tickets go to Yael. Some get looked at. Most don't.

---

## Part 1: The Incident That Changed Things

It's a Wednesday morning. Strato's largest customer — 80% of ARR — cannot dispatch jobs. The API is returning 500s. Dan is on a call with another client. Uri finds it, fixes it in four hours, deploys. Three days later a post-mortem is scheduled and then cancelled because "we're behind on the sprint."

Two weeks later, the same bug appears in a different form. Same root cause. The fix from three weeks ago had a side effect nobody tested.

Rachel asks for a retrospective. The team runs one. The list of improvements is long. A few are tried. None stick. By the next sprint, everything is back to normal.

**What this team has:** Smart people. Real customers. A product that works most of the time. Technical capability.

**What this team lacks:** A shared operating model. Anyone looking at the list of practices on this page can check off the failures: stale PRs, QA after dev, no WIP limits, solo discovery, no runbooks, no post-mortem culture.

---

## Part 2: The Turning Point

The CTO gives the team one sprint — two weeks — to stop building features and fix how they work. Not what they work on. How.

This is rare. Most teams don't get this. But the pattern of change is the same whether you get a dedicated sprint or squeeze improvements into regular work. The order matters more than the speed.

---

## Part 3: Week 1 — Start Where the Pain Is Worst

The team runs a one-hour retro. Not "what went well / what didn't." Instead: which of the seven failures do we have?

| Failure | Do we have this? | Evidence |
|---|---|---|
| Solo discovery | ✅ Yes | Rachel writes specs alone |
| Design silo | ✅ Yes | Yael joins "after discovery" |
| No tech in upstream | ✅ Yes | Dan hears specs at planning |
| QA after dev | ✅ Yes | Shira joins last 3 days |
| No WIP limits | ✅ Yes | Ben and Uri both have 4 things in progress |
| Stale PRs | ✅ Yes | 3-5 day PR review average |
| No MVP slicing | ✅ Yes | Features run 3-4 sprints routinely |

All seven. Classic.

**The team decides:** Fix three things this sprint. Not all seven. Three.

1. **WIP limits** — because they're the fastest way to change the behavior of the board
2. **PR review norm** — because stale PRs are visible and annoying and everyone agrees they hurt
3. **Discovery session format** — because the next feature needs to be shaped correctly before it enters the sprint

### Day 1–3: WIP Limits

Dan opens the Jira board. Currently: 7 items in "In Progress." Two belong to Uri. Three belong to Ben. Two belong to Dan.

The team sets WIP limits:
- In Dev: 2 (one per developer actively building)
- In Review: 3 (three stories maximum waiting for review)
- In Test: 2

On Day 1, the board exceeds WIP limits. The team swarms: everyone reviews open PRs before starting anything new. Two stories close. The board becomes legal.

On Day 3, Ben wants to start a new story. The In Dev column has 2. He cannot. Instead, he picks up a story in In Review and reviews it. It merges. The column drops to 1. He starts his new story.

This is Kanban working. It feels awkward at first. By Day 5, it starts to feel natural.

**The key insight Dan has:** "I was measuring myself by how many things I started, not how many I finished. WIP limits forced me to think about finishing."

### Day 4–5: PR Review Norm

The team agrees: any PR open for more than one business day with no review is a team failure, not a reviewer failure. They add a Slack reminder bot: PRs older than 24 hours get flagged in #dev-strato.

The first week: five PRs get flagged. All get reviewed same day. The average drops from 3-5 days to 1 day.

**What made it work:** The norm was explicit. Everyone agreed to it before it was needed.

---

## Part 4: Week 2 — A Different Kind of Planning Session

Rachel has a new feature: Job templates — let dispatchers save recurring job configurations so they don't have to re-enter them every time. She was going to write it up over the weekend and present it at planning.

Instead, she schedules a 90-minute discovery session.

**In the room:** Rachel (PM), Dan (Tech Lead), Yael (Designer), Shira (QA).

The session follows Stations 1–3:

**Station 1 — 20 minutes:**
- Who: Dispatchers at field service companies (3–8 dispatchers per company, creating 15-40 jobs per day)
- Pain: Re-entering the same job fields (type, duration, required skills, materials) for recurring jobs takes 2-3 minutes each. Over 30 recurring jobs per day, that's 90 minutes of copy-paste.
- Why now: Two customer interviews last week independently mentioned this
- Success: Template creation takes < 30 seconds. Job creation from a template takes < 10 seconds.

**Station 2 — 20 minutes:**
- Dan: "Our job model has 14 fields. Which are always the same across recurring jobs, and which vary?" — nobody knew. Action: Rachel checks with a customer before spec is written.
- Yael: "Is this a builder flow (create template from scratch) or a conversion flow (save existing job as template)?" — good question. Probably both.
- Shira: "What happens if you try to create a job from a template and a required field is missing?" — Rachel hadn't thought about this. Now it's in the spec.
- Constraint: Templates are per-user or per-organization? Big difference in data model.

**Station 3 — 30 minutes:**
The team maps the journey: Dispatcher creates a template → saves it → creates a job using template → edits overrides → dispatches. Four steps. Clear.

They identify the MVP slice: **Create template from existing job + use template at job creation.** Builder flow (create from scratch) is later. Org-level sharing is later.

**What Yael takes away:** A clear UX problem to solve. She knows who the user is, what they're doing today that's painful, and what the success moment feels like. She can build the experience around that.

**What Dan takes away:** The data model decision (per-user vs. per-org). He'll write a one-paragraph ADR.

**What Shira takes away:** Two edge cases to test — missing required fields, and what happens if a template was created when a field was optional and it later becomes required.

**What Rachel takes away:** Two open questions to answer before the spec is written. Two clear scope lines: in and out. An MVP that can ship in one sprint.

This is what discovery looks like when it's collaborative. Not Rachel presenting — the team discovering together.

---

## Part 5: Sprint 3 — The First Story Goes Differently

The Job Templates feature produces three stories at DoR:

**Story 1:** As Rami the dispatcher, I want to save an existing job configuration as a template, so that I can reuse it without re-entering all fields.

- Journey step: J3 — Save template
- Acceptance criteria: 5 testable conditions
- Design: Yael provides lo-fi for the "Save as template" button placement and confirmation state
- Edge cases: incomplete job, template naming conflict
- Observability: event logged when template is saved (`template.created`)
- Sized: 2 days / 1 developer

Shira reads the story before the sprint. "I can write tests for this right now." She does. The test cases exist before Uri starts building.

Uri builds. He hits an edge case Shira thought of — what if the job has no name yet? He goes back to the ACs. The answer is there. He doesn't need to interrupt Rachel.

The story takes 2 days. Shira tests it on day 3. It passes. PR is reviewed. It merges on day 4.

**Compare this to the old way:** Rachel would have written "Add templates to jobs," it would have entered a sprint at planning, Uri would have spent half a day figuring out scope, found the edge case at day 4, interrupted Rachel, waited, built the wrong thing, and it would have been "done" after 8 days with 3 bugs in staging.

---

## Part 6: What Changed and Why

By the end of Sprint 3, the team has:

- A WIP-limited board where stories actually complete in 1–4 days
- PR reviews happening within one business day
- Stories that arrive to the sprint with design, edge cases, and test cases already decided
- Dan's first ADR — the templates data model decision — available for the team to reference

**What has not changed:**
- Shira still does final testing
- Yael still does detailed design
- Rachel still writes the spec

**What has fundamentally changed:**
- Shira now writes her test cases from the story ACs, not from reading the code
- Yael now knows the user problem before she opens Figma
- Rachel now writes the spec after a team session, not before one
- Dan's architecture decision is documented — not just in his head

None of this required a big process rollout. It required three specific changes to specific behaviors, made explicit and held to.

---

## Part 7: What Comes Next

The team now has:
- **WIP limits running** → the foundation for measuring cycle time
- **Collaborative discovery working** → the foundation for DoR enforcement
- **PR norms established** → the foundation for DoD enforcement

The next set of changes — in their next two retrospectives:
1. Enforce DoR: stories that don't have design reference don't enter the sprint. This will be uncomfortable the first time Rachel gets a story pushed back.
2. Add observability to the DoD: every story must have at least one metric it affects, named before development begins.
3. Write the first runbook: the incident from Part 1 had no runbook. Now they write one for the jobs dispatch API.

None of these changes happen because someone mandated a framework. They happen because the team saw what it felt like to work differently and chose to continue.

---

## The Key Lesson

UDOO is not a methodology you install. It is a set of practices you adopt in the order that addresses your worst current pain.

The team in this tutorial didn't adopt all of UDOO at once. They started with WIP limits, PR norms, and collaborative discovery. Those three changes fixed the three most expensive daily problems. The rest followed naturally — because once you feel the difference between a vague story and a DoR-ready story, you stop tolerating vague stories.

**The entry point is always the same:** Name the failures honestly. Pick the two or three that hurt the most. Fix those first. Everything else follows.

---

## Next Steps

- If you recognized your team in Part 1: go to [Why Teams Fail](/guide/why-teams-fail) and have an honest conversation about which failures apply
- If you're ready to start: read [Scale Tiers](/guide/scale-tiers) to understand which configuration fits your project
- If you're a PM who runs discovery alone: start with [Station 1](/upstream/station-1-vision) and invite your tech lead and designer to the next one
- If your board has no WIP limits: read [Kanban Flow](/downstream/kanban-flow) and set limits tomorrow, not at the next retrospective
