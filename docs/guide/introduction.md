# The Four Phases

Most product teams run one continuous stream of work: ideas come in, features get built, things ship, bugs get fixed, repeat. The stream never stops. The roles blur. The PM is sometimes doing discovery, sometimes reviewing PRs, sometimes writing support documentation. The developer is sometimes implementing, sometimes in discovery sessions, sometimes on call. Nobody is quite sure whose job it is to decide when something is ready to move from one stage to the next.

This system divides that stream into four distinct phases. Not because the work is actually sequential — it isn't, and that distinction matters — but because each phase requires a different kind of attention, different roles taking the lead, and different artifacts to make the handoff to the next phase trustworthy.

The four phases are: Upstream, Downstream, Onstream, and Offstream.

Understanding each one is not about learning new vocabulary. It's about recognizing work you're already doing — and seeing where your current version of it is costing you.

## Upstream — Discovery & Shaping

Upstream is everything that happens before a developer writes a line of code.

It begins with a signal — a customer complaint, a strategic priority, a metric moving in the wrong direction — and ends with a story that a developer can pick up and build without guessing. Everything in between is Upstream work: understanding the problem, validating that it's worth solving, designing the solution well enough to specify it, breaking it into pieces small enough to build in a sprint.

Most teams underinvest here. The pressure to build is immediate and visible. The pressure to understand first is diffuse and easy to defer. So teams discover their requirements during development — when they're most expensive to change.

The PM leads Upstream. But not alone. The tech lead is present in discovery because technical constraints shape solution options. The designer is present before any UI work begins because the user's experience is a product decision, not a deliverable. Together, they produce work that can cross the handoff cleanly: a story with a persona, a situation, acceptance criteria, edge cases, and a design reference. A story that a developer can read and build.

The gate at the end of Upstream is the [Definition of Ready](/upstream/definition-of-ready). Nothing crosses into Downstream until it passes. This is not a quality check. It is a protection for the developer — the first person in the chain who has no visibility into what came before unless someone gives it to them.

## Downstream — Development & Delivery

Downstream is where the product gets built.

A story enters Downstream when it meets the Definition of Ready. From there, it moves through a defined state machine: pulled into development, unit tested, PR opened, peer review completed, merged, deployed to staging, QA verified, released. Each state has exit criteria. A story doesn't move until it's actually ready to move.

The developer leads Downstream. But not alone. The tech lead is running the sprint — watching WIP, unblocking dependencies, making architectural decisions, keeping the board honest. QA is present before development ends, not after — ideally involved in the Three Amigos session where PM, developer, and QA walk through the story together before the first keystroke.

The gate at the end of Downstream is the [Definition of Done](/downstream/definition-of-done), and then the Release Gate — a final check before a feature ships to users. Neither gate is about catching failure. Both are about ensuring the next person inherits something worth inheriting.

Downstream is where most of the team's time is spent. It is also the phase that most playbooks describe in the most detail — the sprint ceremonies, the ticket workflow, the PR conventions — and the phase that is most often described without asking why any of it is there. The ceremonies exist because the handoffs exist. When you understand the handoffs, the ceremonies stop being rituals and start being logic.

## Onstream — Operations & Resilience

Onstream begins the moment a feature ships to production.

Most teams treat shipping as an endpoint. Onstream treats it as a transition: from the team that built something to the system that runs it. That transition has a cost. The developer who built the feature knows how it behaves under load, what the edge cases look like in practice, what to do when it fails. Nobody else does. When it fails at 3am — and everything fails eventually — the on-call engineer inherits all of that undocumented knowledge as a crisis.

The practices of Onstream are designed to move that knowledge before the crisis: [runbooks](/onstream/runbook-template) written by the developer who built the feature, not the engineer who inherits it. [SLOs](/onstream/sla-slo) defined before the feature ships, not after the first incident. [Post-mortems](/onstream/post-mortem-template) that treat failure as signal rather than as someone's fault.

No single role owns Onstream — it is shared between engineering leads and whoever is on call. But the PM and the product organization have a stake in it that most playbooks don't acknowledge: a service that is unstable, poorly documented, and expensive to maintain consumes capacity that could be building new things. Technical debt is a product problem. SLA violations are a business problem. The on-call rotation's health is a team retention problem.

Onstream is where you find out what Upstream and Downstream actually produced.

## Offstream — Growth & Learning

Offstream is everything that happens after the product is in production and running.

It begins with observation — watching what users actually do with what you built — and ends with a signal that feeds back into Upstream. The CS team is the primary intelligence source here: they talk to the users who are confused, the accounts that are degrading, the customers who are quietly about to churn. The PM is the primary consumer of that intelligence: translating it from noise into a clear signal, from a signal into a decision.

Most teams have Offstream activity — support tickets get logged, accounts get reviewed, usage data gets pulled. What most teams don't have is a practice that moves the intelligence from where it lives to where it's needed. The CSM has the signal. The PM needs the signal. Between them is a gap that fills with compressed data, informal conversations, and quarterly reviews that are always a month too late.

[Strategic Synthesis](/offstream/strategic-synthesis) is the Offstream ceremony that closes that gap deliberately: a quarterly practice where everyone who holds a signal — PM, CS, engineering lead — reads across all of it at once and asks whether the direction still makes sense. Not a status meeting. Not a roadmap review. A reading session, followed by a recommendation.

Offstream feeds Upstream. What you learn from what you shipped shapes what you choose to build next. The loop is not a metaphor — it is a designed channel through which intelligence travels from the edge of the product back to the people who decide what to build.

Without Offstream, the loop is broken. The team builds in the dark, guided by what seemed like a good idea at the last planning session. With Offstream, the product gets smarter with every release — not because the team is working harder, but because they're reading the right signals and feeding them back into the right decisions.

## The Four Phases Together

Upstream produces clarity. Downstream produces software. Onstream produces reliability. Offstream produces intelligence.

Each phase produces something the next phase needs. Each gate is where you verify that the handoff is actually ready. Each failure mode from the [previous chapter](/guide/why-teams-fail) maps to a place where one of these phases was skipped, rushed, or disconnected from the one that follows.

The phases don't run sequentially. A mature team runs all four simultaneously — discovery happening for next quarter's initiatives while this quarter's features are in development, while last quarter's releases are in production, while the CS team is synthesizing signals from the features shipped six months ago. The four phases are not a pipeline. They are concurrent streams, each one feeding the others.

What they share is the same commitment: the work done in each phase is done for the person who comes next.

---

**→** [The 4-Layer Hierarchy](/four-layers) — how work is structured within the phases

**→** [Upstream — Discovery](/upstream/) — the full discovery practice
