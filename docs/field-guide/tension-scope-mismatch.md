---
pageClass: field-guide-page
---

# Tension: PM Promised 3 Weeks, Engineer Says 3 Months

<span class="part-label">Part 7 — Tension Scenarios</span>

::: danger The Situation
The PM has told the client "three weeks." The tech lead says "three months, minimum." The gap is not a rounding error — it is a fundamental disagreement about what is being built.
:::

## The Direct Answer

1. **Neither number is real yet.** The PM estimated from the desired outcome. The engineer estimated from the full technical solution. Both are right about different things. The problem is not the numbers — it is that they are answering different questions.
2. **Get PM and tech lead in a room for 90 minutes.** Not to negotiate the number. To align on scope. The question is not "how long will this take?" — it is "what is the smallest thing we can ship in three weeks that solves the client's actual problem?"
3. **Ask the three alignment questions:** (1) What did the client actually ask for? (2) What did the PM interpret that as? (3) What did the engineer hear? Write the answers on a whiteboard. The gap between them is the gap you need to close.
4. **Story-map the feature, then apply The Cut.** Map the full scope — everything the engineer is imagining. Then draw a line: which stories constitute a genuinely shippable, genuinely useful first slice? Not a "phase 1" that is unusable. A real thing that solves the core problem.
5. **Have the client conversation.** "We can give you X in three weeks. The full vision is three months. X solves the core problem." Most clients accept this — if X is honest and if you do not oversell it.

## Why This Happens

This gap is produced by a specific structural failure: the PM estimated without a tech lead in the room. The PM heard a client problem, mentally mapped it to a solution, estimated the solution from the outside, and committed. The engineer heard the commitment, mentally mapped it to an architecture, estimated the architecture from the inside, and panicked.

The PM's three weeks is an outcome estimate: "based on my experience, this kind of thing takes about three weeks." It is pattern-matched, intuition-driven, and calibrated to client expectations. It is often right about the outcome — the thing the client needs can genuinely be delivered in three weeks. But it is almost always wrong about the scope — because the PM is estimating a feeling, not a build plan.

The engineer's three months is a completeness estimate: "if we build this properly — data model, API, edge cases, tests, migration, the integration they did not mention but will need — it is three months." The engineer is estimating everything the system requires to support the feature at full maturity. They are right about the destination. They are wrong about the assumption that the destination is the first stop.

The gap is not a disagreement. It is two people looking at the same mountain from different sides. The PM sees the trailhead and the summit. The engineer sees every switchback. Neither is wrong. Both are incomplete. The conversation they have not had is: "which switchbacks do we need for the first ascent, and which can we add on the second?"

The deeper pattern: this happens in teams where estimation is a solo activity. The PM estimates alone because the client asked and the PM wanted to be responsive. The engineer estimates alone because nobody asked them until after the commitment was made. Both people are doing their job. The system is failing to connect them at the moment that matters — the moment before the number leaves the building.

## The Conversation to Have

**Step 1 — PM and tech lead, alone, before anything else.**

The PM opens with honesty, not defense:

> "I told the client three weeks. I know that was before we talked about scope. I want to figure out what we can actually deliver in three weeks that is real — not a compromise, not a cut corner, but a genuinely useful first version. And I need your help to find it."

This framing matters. "I need your help to find it" is different from "how do we make three weeks work?" The first is collaborative. The second is coercive.

**Step 2 — The three questions, on a whiteboard.**

Write them side by side:

| Question | PM's answer | Tech lead's answer |
|---|---|---|
| What did the client actually say? | | |
| What did you interpret that as? | | |
| What would you build? | | |

Fill it in. Read the gap out loud. The gap is always in row 2 — the interpretation. The client said "I need to see my team's availability." The PM interpreted "a scheduling dashboard." The tech lead interpreted "a scheduling system with conflict resolution, timezone support, and calendar integration." The client meant "a list I can look at on Monday morning."

**Step 3 — Story mapping.**

Map the full scope — the engineer's three-month version. Every story, every capability. Put it on the wall.

Then apply [The Cut](/upstream/the-cut). Draw a horizontal line. Above the line: the stories that constitute the smallest version that is genuinely useful to the client. Below the line: everything else — real, planned, but not first.

The question for each story above the line: "If we shipped only this, would the client's core problem be solved?" If the answer is no, add more. If the answer is yes, stop.

**Step 4 — The client conversation.**

The PM delivers this, with the tech lead's input already incorporated:

> "We have looked at this carefully. The core of what you need — [specific capability] — we can deliver in three weeks. The full system you are imagining — [broader scope] — is a three-month journey. We recommend starting with [specific deliverable] because it solves [the actual problem]. Once it is live and you are using it, we will know much more about what the next slice should be."

Do not say "phase 1." Clients hear "half-baked." Say "we are building the thing that solves your problem first, then expanding from there." That is the same sentence without the anxiety.

## The Recovery Path

**This week:**
- PM and tech lead do the 90-minute session. Produce: (1) the three-question alignment, (2) a story map with The Cut applied, (3) a one-paragraph scope statement for the three-week slice.
- PM calls the client with the honest scope. Does not apologize for the original estimate — reframes it as "we have sharpened the plan."

**This sprint:**
- The three-week slice enters refinement. Stories are groomed to DoR. The tech lead confirms each story is buildable in the timeframe.
- The remaining scope (below The Cut) stays mapped but does not enter refinement. It is visible on the roadmap. It is not committed.

**Structurally:**
- Establish the rule: **no commitment leaves the building without a technical translation session.** This is a 30-minute meeting — PM describes the client need, tech lead translates to technical scope, together they identify the smallest viable slice. The commitment is based on the slice, not the vision.
- Add this to the [Definition of Ready](/upstream/definition-of-ready) for features: "Tech lead has reviewed scope and confirmed the first slice is buildable in the committed timeframe."
- If this gap keeps happening, the PM and tech lead are not talking often enough. The fix is not a process — it is proximity. Weekly 30-minute syncs between PM and tech lead, where the PM shares what is coming from clients and the tech lead flags what is technically expensive. The gap closes when the two people who see different sides of the mountain are in the same room regularly.

## What This Reveals

This scenario is a diagnostic for your Upstream maturity — specifically, whether discovery and estimation are connected or disconnected practices.

**If the PM estimated alone:** the team is at Growth Path stage 1 ([Ship Clean](/guide/ship-clean)). Estimation is happening, but it is not yet a collaborative practice. The fix is the technical translation session — a lightweight gate that connects product thinking to engineering reality before commitments are made.

**If the team has never story-mapped a feature before committing:** the team is at Growth Path stage 2 ([Shape Before You Build](/guide/shape-before-you-build)) at best. Story mapping is the practice that makes the gap visible. Without it, the PM and engineer are each imagining a different product and neither knows it.

**If The Cut has never been applied:** the team does not yet distinguish between "the full vision" and "the first useful slice." This is a stage 2 practice. Teams that skip it deliver either too much (three months of work when three weeks would have solved the problem) or too little (a "phase 1" that is not useful on its own).

**If this happens with every client:** the estimation process is structurally broken. The PM is incentivized to say yes quickly (responsiveness to clients) and the engineer is incentivized to estimate conservatively (protecting quality). Both incentives are rational. The system needs a practice that reconciles them — and that practice is the technical translation session, happening before the commitment, not after.

The gate that would have caught this: a Feature Brief review. If a Feature Brief existed before the commitment — with scope, in-scope/out-of-scope, and a first-slice definition — the PM would have had a number grounded in reality, and the tech lead would have had a scope grounded in the client's actual need. The brief is the bridge. Without it, the two sides of the mountain never connect.

## From the Novel

::: details Chapter 8 — The Offer
Avi brings the opportunity: Vetcare, forty-two clinics, the contract that funds the next three years. The pilot needs to start in three weeks. Michal — the PM — immediately starts building a plan: "If Lior goes to the clinic Monday. We run an emergency sprint. We demo Thursday week two. Buffer week three." She looks up. "It is possible."

Lior's response is the key moment: "With what we know now, it isn't."

Not unkindly. Not defensively. Just plainly. He does not say "three months." He does not counter with his own number. He says something more honest and more useful: the estimate cannot exist yet because the understanding does not exist yet.

"After Monday, maybe. Depending on what I find. But I need Monday first before I can tell you what is possible. Planning around what we don't know yet is how we got here."

Watch what happens next. Avi does not argue. He says, quietly: "He's right. He's right." And Michal — this is the moment that costs her something — puts the pen down on the schedule she was writing. The clean forward motion of a project that knew where it was going. She puts it down.

"Monday," she says. "Then we plan."

This scene teaches three things about the scope mismatch:

**First:** Lior does not negotiate the number. He challenges the premise. The question is not "can we do it in three weeks?" — it is "do we know enough to answer that question?" If the answer is no, the honest response is not a bigger number. It is "I need to learn something first."

**Second:** Michal's instinct — to immediately convert the opportunity into a schedule — is the same instinct that produces the three-week promise. It is the PM's gift: turning the shapeless into a plan. But the gift becomes a liability when it outruns the understanding. Michal's plan is beautiful. It is also built on what they do not yet know. Lior names this. "Planning around what we don't know yet is how we got here."

**Third:** the resolution is not a compromise. Nobody says "let us split the difference." The resolution is a sequence: learn first (Monday at the clinic), then estimate. Discovery before commitment. This is [Discover Before You Shape](/guide/discover-before-you-shape) in miniature — the principle that understanding the problem must precede committing to a timeline.

The client conversation comes later — and when it does, Michal has a real scope, grounded in Lior's clinic visit, shaped by what they actually learned. The three-week commitment, when it is finally made, is built on evidence, not optimism.
:::

---

*See also: [The Cut](/upstream/the-cut) for how to slice scope into a viable first delivery. [Shape Before You Build](/guide/shape-before-you-build) for making story mapping a habit. [Story Mapping Workshop](/field-guide/story-mapping-workshop) for the step-by-step facilitation guide.*
