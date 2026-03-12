# What a Team Actually Is

Most teams were never designed.

They were assembled. Someone hired three developers, then a PM, then a designer when it became obvious that nobody was thinking about what it should look like. Someone added a QA lead after two bad releases. Someone promoted a developer to tech lead because they were the most senior, not because the role was defined. A customer success manager started sitting in on planning meetings because the complaints were getting worse.

At some point the headcount reached eight or twelve or twenty, and someone said: we need a process. And the team adopted Scrum, or Shape Up, or Kanban, or a hybrid nobody could fully describe. Sprints started. Retrospectives happened. Tickets were created and assigned and closed.

And still — the same problems. The developer who builds the wrong thing. The designer whose work gets lost between Figma and production. The QA lead who finds, on the last day, that the feature doesn't match the spec nobody remembered existed. The CSM who has been watching an account degrade for three months but hasn't found a way to make that visible to anyone who could act on it.

The process improved things. But it didn't fix the thing underneath.

---

The thing underneath is this: a team is not a group of people working on the same product. A team is a system for moving knowledge from the person who has it to the person who needs it.

That's all. That's the whole job.

Every role is a knowledge role. The PM holds knowledge about what the user needs and what the business requires. The designer holds knowledge about what the experience should feel like and why. The developer holds knowledge about what is technically possible, what the cost of different choices will be, what the system is actually doing at 3am. The QA lead holds knowledge about where things break. The CSM holds knowledge about what customers are experiencing after the product ships.

The product gets built in the gaps between them.

When the handoffs are clean — when what one person knows arrives intact at the next person who needs it — the product gets built right. When the handoffs leak — when knowledge gets compressed into a ticket title, or left in someone's head, or lost in the translation from discovery to development — the product gets built wrong, or slowly, or twice.

This is not a communication problem. It is a structural problem. And you cannot fix a structural problem with a Slack channel.

## The Agreement This System Makes

This playbook is built around a single claim:

**You can design the handoffs.**

Not control them. Not eliminate the uncertainty. Not guarantee that every piece of knowledge makes it to the right person at the right time. But design a system where the transfer has a place to happen — a ceremony, an artifact, a gate — and where the cost of not transferring becomes visible before it becomes expensive.

The [Definition of Ready](/upstream/definition-of-ready) is a designed handoff. It says: before a story crosses from the PM to the developer, it must contain these things. Not because we don't trust the PM. Because we've learned what developers need to start work without guessing, and we've made that need explicit and contractual.

The Three Amigos session is a designed handoff. It says: before the first line of code is written, the PM, the developer, and the QA lead will sit together and walk through the story until each of them sees the same thing. Not the same ticket. The same thing.

The [blameless post-mortem](/onstream/post-mortem-template) is a designed handoff in reverse: it takes what happened in production — what the on-call engineer lived through — and moves it back into the system, so the team that built it can understand what they built.

Every practice in this system exists because a specific handoff was failing and someone decided to design it instead of complain about it.

## What You're Agreeing To

This is not a framework to adopt. It is an agreement to make — with your team, explicitly, about how you're going to work together.

The agreement has three parts.

**The first: we will make knowledge visible before we need it.** Not after the developer is stuck. Not after QA finds the defect. Not after the incident. Before. This is what every gate is for. Every checkpoint, every artifact, every ceremony — they are not bureaucracy. They are the places where private knowledge becomes shared infrastructure.

**The second: we will treat the next person as the customer of our work.** The PM's customer is not the end user of the product — it is the developer who will build what the PM specifies. The developer's customer is not just the user of the deployed application — it is the QA lead who will test it and the on-call engineer who will maintain it. When you write a story, write it for the person who reads it at 9am with three other stories in front of them. When you write a runbook, write it for the person who reads it at 3am with a production alert open.

**The third: we will treat the loop as continuous.** What ships is not the end. What CS learns from what ships is the beginning of the next decision. The feedback that comes back from production is not an interruption — it is the most honest signal the system produces. Offstream is not cleanup. It is intelligence.

These three commitments are the whole agreement. Everything else in this playbook is a specific implementation of one of them.

---

You don't need to implement it all. You need to start where the handoffs are most broken, hold to the fix until it becomes habit, and then look for the next gap.

The teams that use this well don't use it because it's required. They use it because they understand, at a level below policy, what it costs to leave the handoffs undesigned.

That understanding is what this book is trying to produce.

---

**→** [The Chain](/guide/the-chain) — what happens when the handoffs fail, traced from one decision to its full cost

**→** [The Growth Path](/guide/ship-clean) — where to start, based on where it hurts
