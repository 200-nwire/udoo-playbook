# How Teams Actually Run This

When teams first see the UDOO framework — the discovery stations, the experience snapshots, the grooming, the DoR checklist — they say some version of the same thing:

*"This works if you're doing one thing at a time. We're never doing one thing at a time."*

It's the right objection. And it's based on a misreading of the framework. UDOO is not designed for sequential initiative execution. It's designed for parallel phases — different initiatives at different stages of the loop simultaneously. The question is not *whether* to run work in parallel. It's *how* to make it navigable instead of chaotic.

This page shows what that actually looks like. Not as a diagram. As a Monday morning.

---

## The Team

Dina — Product Manager. Single point of accountability for what gets shaped and when.

Tali — Tech Lead. Owns architecture decisions, code review quality, and technical direction in both upstream and downstream.

Lior, Avi, Rami, Yael — Developers. Building in downstream, occasionally in spikes upstream.

Noa — QA Lead. In grooming, in Three Amigos, in downstream review. Never only at the end.

---

## Three Initiatives in Flight

**Initiative A — Living Wondrously Journal, S1.**
Feature defined. Stories Ready. Currently in Downstream Sprint 2 of 2. Shipping in 8 days.

**Initiative B — Notification System.**
Discovery sprint active, Day 6. Feature Brief complete. Now in architecture + story readiness phase.

**Initiative C — Analytics Layer.**
Stakeholder brief approved last week. Discovery sprint starts next Monday. Dina is doing async prep.

---

## What Monday Morning Actually Looks Like

### Downstream: Initiative A, Sprint 2

**Lior** is on day 2 of *"Maya edits a saved entry."* She has the design reference, the ACs, the API contract. She's not asking anyone anything. She's building.

**Avi** finished *"Maya views her entry history"* on Friday. His PR is open. He is not starting the next story until it's reviewed — that's the WIP rule. He's doing async code review on Rami's PR instead.

**Rami** submitted *"Maya receives a daily journal prompt"* for review Friday afternoon. He's waiting on Tali's technical review. He spent this morning on a small tech debt item from the last sprint — flagged at retro, logged as a chore.

**Yael** is the one reviewing Avi's PR this morning. She has until noon. After that she picks up the next story from Ready.

**Tali** will do Rami's technical review between 11am and 12pm. The rest of his morning is architecture work for Initiative B.

**Noa** is writing test scenarios for the two stories finishing this sprint. She does this in parallel with development — not after. By the time Lior's PR is open, Noa already knows exactly what she's testing.

### Upstream: Initiative B, Day 6

**Dina** is facilitating the architecture session this morning: 10am–11:30am with Tali and one external developer from Rami's team. They're reviewing the spike results on push notification delivery.

**Tali** runs the session, presenting two architectural options. The team picks one. Tali will write the ADR this afternoon (30 minutes).

**Noa** reviewed 6 draft stories for Initiative B over the weekend. Her comment thread in Jira has 4 open ACs that need rewriting. Dina will address them this afternoon.

### Initiative C — Async Prep

**Dina** has a 1-hour block Thursday afternoon to draft the Initiative Brief for Initiative C. The stakeholder brief is approved; this translates it into a discovery sprint plan. She'll share it with Tali on Friday for a quick feasibility sanity check before the sprint starts Monday.

---

## What This Is Not

It is not three parallel discovery sprints. That would require Dina to be in three facilitation sessions simultaneously — impossible, and a sign that something has gone wrong with prioritisation.

It is not three parallel development sprints. The team has 4 developers. Running 3 active feature builds simultaneously means WIP explodes, PRs age, and nothing finishes.

It is **one active development sprint + one active discovery sprint + one in async prep**. At any given time, that's the maximum. When Initiative A ships, Initiative B moves to Downstream, Initiative C's discovery sprint starts, and a new initiative enters the async prep queue.

---

## The Board State

```
PORTFOLIO BOARD — Monday, Week 6
──────────────────────────────────────────────────────
UPSTREAM  │ [Initiative B — Day 6 of 10]   [Initiative C — Prep]
──────────────────────────────────────────────────────
DOWNSTREAM│ [Initiative A — Sprint 2 of 2, Day 2]
──────────────────────────────────────────────────────
ONSTREAM  │ [Initiative X — stable, monitoring]
──────────────────────────────────────────────────────
OFFSTREAM │ [Initiative Y — QBR this Thursday]
──────────────────────────────────────────────────────
```

Five initiatives visible. Each in exactly one phase. No initiative in two phases simultaneously. No initiative in Downstream without a completed discovery sprint behind it.

This is the portfolio view — 15 minutes to update, always current, visible to the whole team.

---

## Where People Overlap

Two ceremonies are where upstream and downstream collide — and that's intentional.

**Grooming** (Wednesday, 60 min): Dina + Lior + Noa review stories from Initiative B's backlog. Lior represents the downstream perspective: "Can I pick this up next sprint without asking questions?" Noa represents QA: "Can I write a test for this AC?" This is the only time a Downstream developer is formally in the Upstream conversation — and it's limited, focused, and predictable.

**Sprint Planning** (Monday morning, 90 min): The team moves stories from Ready to In Dev. They pull from the Initiative B backlog (which is now Ready, because grooming did its job). Everyone knows what they're committing to. The PM doesn't need to explain anything — the stories explain themselves.

Those two overlap points are enough. The developer doesn't need to attend the discovery facilitation session. The PM doesn't need to be in every PR review. The structure protects both.

---

## What Happens When a Sprint Finishes

Initiative A ships on Friday. Monday:

- Initiative B moves from Upstream to Downstream. Sprint planning happens. Lior, Avi, Rami, Yael pull the first Ready stories.
- Initiative C's discovery sprint starts. Dina facilitates Day 1. Tali is in the kickoff. Noa joins for the first grooming session on Day 4.
- A new initiative (call it Initiative D) moves from stakeholder brief to async prep. Dina blocks 1 hour next Thursday.

The team didn't stop. They shifted phases. The loop continued.

---

## The Three Rules That Make This Work

**WIP limits are real.** Maximum one active discovery sprint. Maximum one active development sprint per "stream" (frontend/backend can sometimes run in parallel with explicit coordination, but the default is one). A story that is 80% done creates 0% value. Finishing takes priority over starting.

**The PM is the bottleneck — manage it.** Dina is in the upstream session and the grooming prep and the stakeholder check. That's by design: she is the common thread. What she cannot do is run two active discovery sprints simultaneously. When the team tries to shape three initiatives at once with one PM, everything degrades. Sequence instead of parallel at the initiative level.

**Overlap points are fixed, not open.** Developers join upstream at grooming. Upstream joins downstream at sprint planning and demo. Outside those moments, each phase runs on its own rhythm. This is not siloing — it is protecting the flow of each phase while keeping communication efficient. A developer invited to every upstream session stops being a developer. A PM pulled into every PR review stops being a PM.

---

## The Question Teams Actually Need to Answer

Before asking "how do we run three initiatives at once?" — ask: "Do we have the upstream capacity to feed downstream with Ready work?"

If downstream is starved — developers waiting for stories, pulling vague work, improvising requirements — the problem is not the delivery team. The problem is that upstream isn't producing fast enough. The fix is not more developers. It is a dedicated PM and tech lead in an active discovery sprint producing Ready stories one sprint ahead.

When that pipeline is healthy, three initiatives in flight feels like a steady rhythm. When it breaks, it feels like chaos — and it is.

That's the difference between a team that says "UDOO doesn't work for us" and a team that says "we couldn't imagine working any other way."
