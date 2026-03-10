# Ship Clean

Avi has been on the team for three months. He's a good developer — thoughtful, fast, writes clean code. But every sprint feels the same.

He pulls a story from the board. It says: "Add balance display to dashboard." He reads it twice. There's no acceptance criteria. No mention of what happens when the balance is negative, or zero, or hasn't loaded yet. No design reference. No persona. Just a title and a sentence.

He could ask the PM. But the PM is in a meeting until 3pm. He could wait. But the sprint is half over and there are six stories assigned to him. So he makes a decision — the best one he can with the information he has — and starts building.

Two days later, the PM reviews the PR. "That's not what I meant." The balance should show currency symbols. Negative balances should be red. Zero balances should say "No charges yet," not "$0.00." None of this was written anywhere. All of it was obvious to the PM and invisible to Avi.

Avi rewrites it. Two days of work become four. The sprint slips. The retrospective says "communication could be better." Nothing changes.

---

This is not a communication problem. It is a structural problem.

The story entered development without a shared agreement about what "done" looks like. There was no gate between "someone had an idea" and "a developer is building it." The PM's mental model and Avi's mental model diverged the moment Avi started reading — and nobody knew until the PR review, which is the most expensive place to discover a misunderstanding.

Every team has a version of this story. The details change — sometimes it's a missing edge case, sometimes it's a design state nobody specified, sometimes it's a dependency that surfaces mid-sprint. The pattern is always the same: unclear work enters development, and the cost of that unclarity compounds with every hour that passes.

The fix is not more meetings, more documentation, or better developers. The fix is a gate.

## What to Adopt

### The Story Format

Every story starts the same way:

> As [named persona], I want [specific action], so that [meaningful outcome].

Not "as a user." As Avi. As Maya. As Yossi. A named person in a specific moment, doing a specific thing, for a reason that matters to them.

The reason the format matters is not bureaucratic. Each clause prevents a different class of mistake. "As Maya" prevents building for an imagined user. "I want to write a reflection" prevents writing technical tasks instead of human actions. "So that I can trace my life over time" prevents shipping things that work technically but deliver no value.

When a story doesn't have a "so that" clause, the team cannot make design tradeoffs. Should the save button work offline? If the story says "so that I can capture my daily moment of meaning," the answer is obvious — yes, because breaking the moment is worse than a delayed sync. Without the "so that," it's a judgment call that three people will answer differently.

→ [The Narrative Framework](/guide/narrative) — how stories create shared understanding

### The Definition of Ready

The DoR is a checklist that a story must pass before a developer picks it up. It exists for one reason: to protect the developer from receiving unclear work.

Start with three checkpoints. Just three:

1. **The story has a named persona and a "so that" clause.** If you can't name who benefits and why, the story isn't ready.
2. **There are at least three testable acceptance criteria, including one negative case.** "What happens when it goes wrong?" is the question that catches the edge cases Avi discovered in his PR review.
3. **A developer has confirmed the size is 1–3 days.** If a developer hasn't looked at it, the estimate is fiction.

These three checkpoints alone will eliminate most mid-sprint surprises. Once they become habit — once the team stops accepting stories that don't meet them — add the remaining six:

4. Journey step reference (which part of the user's experience does this serve?)
5. Visual or design reference (what should this look like?)
6. Copy and user-facing text defined (what does the button say?)
7. Observability signal named (how will we know this is working in production?)
8. Dependencies identified with owners (what blocks this?)
9. Tech feasibility confirmed by the tech lead (can we actually build this as described?)

The full nine checkpoints are the mature DoR. But the first three are where the change happens. A team that enforces just those three will feel the difference in the first sprint.

→ [Definition of Ready](/upstream/definition-of-ready) — the full 9-point checklist

### The Grooming Session

The DoR doesn't enforce itself. It needs a ceremony — a recurring moment where the team looks at upcoming stories together and asks: is this ready?

The grooming session is that moment. Once a week, 60 minutes, three people in the room: the PM (who knows the intent), a developer (who knows the cost), and QA (who knows the risk). These three are sometimes called the Three Amigos — not because the name matters, but because the combination does. Each person catches things the other two miss.

The PM reads the story aloud. This is the first test. If it sounds wrong when spoken — if the PM stumbles, if the developer looks confused, if QA asks "how do I test this?" — the story isn't ready. Reading aloud surfaces vagueness that reading silently hides.

Then the developer asks cost questions. "What does this touch? Are there dependencies I should know about? Is there an existing pattern for this, or am I building something new?" These questions catch the technical surprises before the sprint.

Then QA asks risk questions. "How do I test this? What's the negative case? What happens when the network is down? What happens when the data is empty?" These questions catch the edge cases that would otherwise surface in staging — or worse, in production.

The session ends with a verdict: Ready, Not Ready, or Split. Ready means the developer can pick it up tomorrow and start without asking a single question. Not Ready means it goes back to the PM with a specific action. Split means the story is actually two stories pretending to be one.

Target: 4–6 stories groomed per session. 6–8 ready stories in the backlog at all times. If the team is running low on ready stories, the next grooming session is the priority — not starting unready work.

→ [Grooming Session](/upstream/grooming-session) — the full ceremony guide

### The Definition of Done

DoR protects the start. DoD protects the end.

"Done" means the same thing for every story, every sprint, every person on the team. It is not "I pushed my code." It is not "it works on my machine." It is a shared agreement about what the next person in the chain needs before they can do their job.

A story is done when: the code is reviewed and merged, the tests pass, the Gherkin scenarios are executed and green, there are no known regressions, it's deployed to staging, and the PM has accepted it against the acceptance criteria. If the story touches a production service, the runbook is updated and the on-call team has been briefed.

That's the bar. When everyone holds to it, "done" stops being a negotiation and becomes a fact.

→ [Definition of Done](/downstream/definition-of-done) — the full checklist

### Kanban Basics

Five developers, eleven stories "in progress." Nobody is finishing anything. The sprint review is an explanation of why things aren't done yet.

WIP limits fix this. A WIP limit is a number on a column: "In Progress: max 3." When the column is full, nobody starts new work. Instead, they help finish what's already started — pair on a stuck story, review a PR, unblock a dependency.

The principle is simple: a story that is 80% done delivers 0% of its value. Finishing one story is worth more than starting three. Pull when ready, not when eager.

→ [Kanban Flow](/downstream/kanban-flow) — WIP limits, pull systems, and flow

---

## Going Deeper

Once Ship Clean is working — stories are ready when they enter dev, done when they exit, the board moves steadily — the team has a foundation. Here's how to strengthen it:

**Better acceptance criteria.** Move from plain-language ACs to Gherkin format (Given/When/Then). Gherkin scenarios are executable — QA can test them directly, and they can become automated tests. The story becomes its own test plan. → [Gherkin & BDD Patterns](/downstream/gherkin)

**Better story conversations.** The Three Amigos session works. Now make it faster by writing ACs before the session and using the session to challenge them, not invent them. A grooming session that reviews pre-written ACs catches more edge cases in less time than one that starts from scratch. → [BDD Workshop tutorial](/tutorials/bdd-workshop)

**Better flow measurement.** Track cycle time — the number of days from "started" to "done" for each story. A team with consistent cycle time is a team with predictable delivery. When cycle time spikes, something is wrong upstream — a vague story, a missing dependency, a blocker nobody named. Cycle time is the vital sign. → [Kanban Flow](/downstream/kanban-flow)

**Better subtask discipline.** Break every story into 4–6 subtasks before development begins. The developer does this — not the PM. The subtask breakdown is the developer's plan for how they'll build the story, and it surfaces technical questions before the first line of code. → [Subtask Checklist](/downstream/subtask-checklist)

---

## What You'll Notice Next

Ship Clean solves the immediate chaos. Stories are clear. Developers start without confusion. Done means done. The board moves.

But after a few sprints of clean execution, a different kind of problem becomes visible. Individual stories make sense — but the feature as a whole feels invented. Edge cases surface in QA that should have been obvious earlier. The team builds clean bricks, but nobody drew the blueprint. Two developers working on adjacent stories discover they imagined different things, not because the stories were vague, but because nobody mapped the whole experience before splitting it into pieces.

That's the signal that story-level discipline is working but feature-level thinking is missing. The stories are clean. The feature isn't shaped.

→ [Shape Before You Build](/guide/shape-before-you-build) — the next step
