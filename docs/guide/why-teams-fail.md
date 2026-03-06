# Why Teams Fail

::: tip Read the manifesto first
If you came here directly, consider reading [The Manifesto](/guide/manifesto) first — it frames why we're naming these failures honestly, and the spirit behind what UDOO is trying to be. Then come back here.
:::

Not in the ways they think they do.

When a project goes wrong, the postmortem usually points to: "we didn't communicate enough," "scope crept," "the spec wasn't clear," "we ran out of time." These are symptoms. The root causes are fewer, uglier, and more predictable than anyone wants to admit.

This page names them. Honestly.

---

## The Seven Ways Product Teams Actually Fail

### 1. Solo Discovery

One person — usually the PM — goes away, thinks hard, writes a spec, and presents it to the team as a "done" document. The team nods. Dev starts. Three weeks later it turns out the tech lead knew the data model made half the feature impossible, the designer had a fundamentally different mental model, and no one had spoken to a user in six months.

**What went wrong:** Discovery is a collaborative act. A PM working alone has one perspective, one set of blind spots, one level of technical knowledge. Discovery done alone is not discovery — it is guessing dressed up as research.

**The signal:** Specs that arrive to the team as announcements, not conversations.

---

### 2. Design in a Silo

The designer finishes mockups after talking only to the PM. Dev sees designs for the first time at sprint planning. The QA lead sees them for the first time when the feature is in staging. Three people have three different mental models of what was built and what it should do.

**What went wrong:** Design is not a phase that happens before development. It is a shared language that the whole team builds together — from Station 1 through to DoD.

**The signal:** Pull requests where developers ask "wait, what's supposed to happen here?"

---

### 3. No Tech in Upstream

Developers join the conversation when stories are already shaped and estimates are being demanded. The upstream work — framing the problem, exploring the solution space, identifying architectural risks — happened entirely in rooms without them.

**What went wrong:** Technical feasibility is not an afterthought. Some ideas are cheap. Some are architectural rewrites. You cannot know which without a developer in the room. More importantly: developers who didn't participate in discovery will not believe in or care about the outcome. They'll estimate defensively and build mechanically.

**The signal:** Estimates that come back 5x the PM's expectation. Developers who say "that's impossible" about things that were never discussed.

---

### 4. QA After Dev

The quality team joins the process when the feature is "done" and waiting for sign-off. They find ten bugs. Five go back to dev. Three get "accepted" as known issues. Two ship. The PM wonders why there's no time to finish features properly.

**What went wrong:** QA in UDOO is not a phase — it is a practice that runs parallel to development. Acceptance criteria written in Gherkin format (Given/When/Then) before a single line of code is written means both the developer and the QA lead are building toward the same definition of done. The "testing phase" disappears because testing was never separate.

**The signal:** Bugs found in staging that were entirely predictable from the spec. A QA team that writes test cases by reading code instead of by reading acceptance criteria.

---

### 5. No WIP Limits

Five developers, eleven stories "in progress." No one is finishing anything. Everything is half-done. The daily standup is people describing motion, not progress. The sprint review is explaining why the three most important things aren't ready yet.

**What went wrong:** Flow requires constraint. WIP (work-in-progress) limits force the team to finish things before starting new ones. Without them, the team optimizes for looking busy instead of creating value. A story that is 80% done delivers 0% of its value.

**The signal:** A Kanban board that looks like a rainbow with no swimlane having fewer than three cards in it.

---

### 6. Stale PRs

A pull request sits open for four days. The developer moved on to the next story. The reviewer is "busy." By the time it's reviewed, the branch is out of date, the context is gone, and the merge causes three conflicts. The fix takes as long as the original work.

**What went wrong:** Code review is a blocking constraint on flow. A PR that is not reviewed within one business day is a failure of team coordination, not individual discipline. The team needs an explicit norm: reviewing open PRs takes priority over starting new work.

**The signal:** PRs older than 24 hours with no comments. A team that tracks "stories started" but not "stories finished."

---

### 7. No MVP Slicing

The team scopes a feature for three months of work. Month one: mostly done. Month two: mostly done. Month three: still mostly done. At month three-and-a-half, it ships — late, over-engineered, and not what users needed once they finally saw it.

**What went wrong:** Scope is a risk. Every week of unshipped code is a week of unvalidated assumptions. The discipline of MVP slicing — asking "what is the minimum that proves or disproves our bet?" — is not a quality compromise. It is the only way to learn at a reasonable cost.

**The signal:** Features that are "almost ready" for two sprints in a row. A team that talks about features as big/medium/small but cannot identify which piece could ship first and teach them something.

---

## Which Failures Apply to You?

::: tip Honest Assessment
Before reading the rest of the playbook, sit with this list. Not to find what's wrong with other people on your team — to find what you personally contribute to. The PM who never invites the tech lead to discovery conversations. The designer who presents mockups as finished work. The developer who never pushes back on vague acceptance criteria.

UDOO doesn't work if it's something you do to your team. It only works if it's something you do together.
:::

| Failure | UDOO Answer |
|---|---|
| Solo discovery | Upstream is a team sport — 5 stations, multi-role, not a PM solo |
| Design in a silo | Design enters at Station 1; DoR requires a visual reference |
| No tech in upstream | Tech lead is a required participant in discovery, not a downstream handoff |
| QA after dev | Gherkin ACs written before dev begins; DoD includes QA sign-off |
| No WIP limits | Downstream = real Lean Kanban with enforced WIP limits |
| Stale PRs | PR review is a team constraint, tracked in cadence |
| No MVP slicing | Story Mapping + Release Slicing are core upstream practices |

---

## The Uncomfortable Truth About Frameworks

Most teams that fail with a framework don't fail because the framework is wrong. They fail because they adopt the vocabulary without changing the behavior.

They say "DoR" but still let vague stories into sprints. They say "upstream sprint" but the PM writes alone and calls it discovery. They say "Definition of Done" but ship on Friday afternoon and test in production.

UDOO will not help a team that treats it as a compliance exercise. It helps teams that are genuinely uncomfortable with how they're working today and want to change it.

If that's you, keep reading.

