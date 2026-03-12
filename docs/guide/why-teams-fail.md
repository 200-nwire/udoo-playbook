# Why Teams Fail

There are four ways a product team fails. Not forty. Not a long list of organizational dysfunctions. Four structural failure modes, each one a different place where the knowledge transfer breaks down. Every team that struggles is struggling with one of these, or several of them at once.

Naming them matters. Not to assign blame — but because a problem you can name is a problem you can locate. And a problem you can locate is a problem you can design around.

## Failure Mode 1: Work Starts Before It's Understood

The sprint begins. Stories enter development. Three days in, the developer realizes the story doesn't cover the edge case they've just encountered. They make a decision — the best one available with what they have — and keep building. The PM reviews the PR four days later and asks for changes. The change takes a day. QA has to retest. The sprint slips.

Nobody failed. Nobody was careless. The problem was structural: work crossed the handoff before the handoff was ready.

This is the most common failure mode, and the cheapest to fix. It doesn't require more people, more meetings, or more process. It requires one commitment: nothing enters development until it meets a defined standard of readiness. A [Definition of Ready](/upstream/definition-of-ready) is not a bureaucratic gate. It is the answer to the question: what does a developer need to start work without guessing? Written down. Agreed to. Enforced — not by a manager, but by the developer themselves, who has standing to push a story back.

Teams that haven't solved this failure mode spend 20–30% of their development time on rework that was predictable at the story-writing stage. The rework isn't the cost. The confidence erosion is the cost — the developers who stop reading stories carefully because it doesn't help, the PMs who stop writing them carefully because nobody pushes back. The low standard becomes the culture.

## Failure Mode 2: Work Finishes Before It's Verified

The story is done. The developer marks it complete and moves on. QA picks it up two days later and finds three issues the developer didn't catch — not because the developer was careless, but because the acceptance criteria were ambiguous about what "complete" meant, and developer-done and QA-done turned out to be different things.

This failure mode lives at the other end of the story: not what it means to start, but what it means to finish. A [Definition of Done](/downstream/definition-of-done) is the answer to the question: what does a story need to be before it leaves development? Not "it works on my machine." Not "the happy path is covered." A specific list of conditions — unit tests passing, edge cases handled, PR reviewed and approved, design verified, no console errors — that every story must meet before it moves.

Without a shared Definition of Done, "done" means whatever the developer decided it meant on the day they finished. Sometimes that's right. Often it isn't. And the cost always falls on the next person: QA who has to retest, the PM who has to re-review, the on-call engineer who inherits code that was shipped before it was ready.

The deeper problem with this failure mode is that it erodes trust between roles. When QA regularly finds issues that should have been caught in development, QA stops trusting developers. When developers regularly get push-back from QA on things they thought were done, developers start to resent QA. The friction isn't interpersonal. It's definitional. Fix the definition, and the friction disappears.

## Failure Mode 3: What Ships Is Not Observed

The feature deploys. The team moves to the next sprint. Three weeks later, someone mentions in passing that the feature is barely being used. Nobody knows why. There are no metrics attached to it. No one owns watching it. The CS team has gotten two tickets about confusing behavior, but those tickets live in a support queue and haven't made it into a planning conversation.

This failure mode happens after the code ships, which is why most process systems miss it. Scrum ends at the retrospective. Shape Up ends at the cooldown. Almost every methodology treats shipping as the conclusion. But shipping is a hypothesis, not a conclusion. The hypothesis is: this feature, built this way, will produce this outcome for users. Every deployment is a test of that hypothesis. And most teams never read the results.

Without observation, the team is flying blind in the most expensive possible way — making decisions about what to build next based on intuition and requests rather than on what they can see about how the last thing performed. The roadmap fills with work that sounds plausible. The users get features they didn't ask for and don't use. And the team gets progressively less confident in their ability to build things that matter, because they've lost the [feedback loop](/offstream/feedback-loop) that would tell them when they're getting it right.

Observation is not dashboards. It is a defined practice of watching what you shipped, reading the signal, and feeding it back into the next decision.

## Failure Mode 4: What's Known Is Not Shared

The CSM has talked to thirty customers this quarter. She knows that the new export feature has a confusing flow for enterprise accounts — three of them have called about it. She's logged the tickets. She's mentioned it in a team channel. But it hasn't made it into a planning meeting. It hasn't influenced the roadmap. It's sitting in a spreadsheet that the PM doesn't have a reason to look at.

This failure mode is the most expensive because it's invisible until it's catastrophic. The knowledge exists. The person who has it is doing their job. The system just doesn't have a channel that moves the knowledge from where it lives to where it's needed.

It shows up in multiple places: the developer who knows the architecture is fragile and hasn't had a forum to say so before the new feature compounds the fragility. The designer who has watched user testing sessions and has strong intuitions about a problem the team is about to build the wrong solution to. The on-call engineer who knows the service misbehaves in a specific way under a specific load pattern, and hasn't written it down.

Every team has people sitting on knowledge that the rest of the team needs. The failure is not in the people. It is in the absence of a practice that moves the knowledge deliberately — a ceremony, a document, a ritual — rather than hoping it travels through conversation.

## The Pattern

Look at these four failure modes together and a pattern appears.

The first two are about the boundary between knowing and building. The third and fourth are about the boundary between shipping and learning.

Every team operates on both sides of these boundaries, all the time. The question is whether those boundaries are managed — whether the handoffs are designed — or whether the team is relying on individual effort and good intentions to carry the knowledge across.

Individual effort and good intentions are not reliable. They scale with person-hours, not with system design. When the team is small and everyone is in the same room and the PM is also the designer and the developer is also the QA lead, the knowledge travels easily because the distances are short. As the team grows, the distances grow. The knowledge doesn't travel automatically anymore. It has to be moved deliberately.

This system is the deliberate movement of knowledge. Every practice in it exists because one of these four failure modes was producing a specific, recurring cost — and someone decided to design the handoff instead of absorb the cost indefinitely.

You don't need to fix all four at once. You need to identify which one is your current ceiling, and hold to the fix until it stops being a ceiling.

---

**→** [The Four Phases](/guide/introduction) — the architecture that prevents these failures

**→** [The Growth Path](/guide/ship-clean) — where to start fixing, based on where it hurts most
