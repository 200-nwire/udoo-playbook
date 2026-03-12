---
pageClass: field-guide-page
---

# Tension: P0 Drops Mid-Sprint

<span class="part-label">Part 7 — Tension Scenarios</span>

::: danger The Situation
A P0 bug hits production on Tuesday. Two stories are in progress, the sprint goal is at risk, and the team is looking at each other trying to figure out who stops what. Everyone wants to fix the P0, but nobody wants to sacrifice the sprint.
:::

## The Direct Answer

1. **P0 always wins.** This is not a discussion, not a trade-off conversation, not a "let's see how bad it is." Production is down or degraded for real users. The sprint goal adjusts. The P0 response time does not.
2. **The PO makes the call.** Not the team, not the PM, not the tech lead. The PO owns sprint scope. The PO says: "We are pulling story X out of the sprint to make room for the P0. Story Y continues."
3. **One developer swarms on the P0.** Not the whole team. One person — ideally the one closest to the affected system. The other developer continues their in-progress story. Two people on a P0 doubles the communication cost without doubling the fix speed.
4. **The PM tells stakeholders within one hour.** Not "we might be delayed." The exact message: "The sprint goal has changed because of a production issue affecting [specific users]. We expect to resolve the incident by [time]. Story X moves to next sprint."
5. **Do not hold a meeting about whether to respond.** If your incident severity definitions are clear, the response is automatic. P0 means: drop what you are doing, one person responds, the rest continues.

## Why This Happens

The sprint is a commitment, and people treat commitments like contracts. When the P0 drops, the team feels a collision between two obligations: the promise they made during planning and the reality that production is broken. That collision produces paralysis — twenty minutes of discussion about "can we do both?" when the answer is already obvious.

The paralysis comes from a missing agreement. If the team has never explicitly said "P0 always overrides the sprint goal," then every P0 becomes a negotiation. The negotiation wastes the first hour — the hour that matters most for user trust and SLA compliance. The team that has the agreement pre-made does not discuss. They execute.

The desire to put everyone on the P0 comes from anxiety, not engineering judgment. When production is down, the team feels collective guilt. Swarming feels like taking it seriously. But a P0 is almost always a single root cause that requires one person to diagnose and fix. The second person becomes a rubber duck at best, a distraction at worst. The third person is pure theater.

The deeper pattern: P0s that drop mid-sprint are symptoms, not root causes. A single P0 is an incident. Two P0s in a quarter is a pattern. Three P0s means your Onstream practice is broken — missing monitoring, missing runbooks, missing SLOs, or missing the structural investment that prevents incidents from reaching production. The sprint is not the problem. The system that lets P0s happen is the problem.

## The Conversation to Have

**PO to the team, within 15 minutes of the P0 alert:**

> "We have a P0 — [one sentence about what is broken and who is affected]. Lior, you are on the fix. Noa, continue with your story. I am pulling [story name] out of the sprint. We will re-assess at tomorrow's standup."

That is the whole conversation. No brainstorming, no "should we?" — a decision, communicated.

**PM to stakeholders, within 1 hour:**

> "Heads up — we have a production incident affecting [specific impact]. The team is responding. This means [story name] moves to next sprint. The sprint goal is now [adjusted goal]. I will update you when the incident is resolved."

Do not say "we are looking into it." Do not say "we might be delayed." State what changed, what moved, and when the next update comes.

**At the retrospective (not during the incident):**

The facilitator asks three questions:

1. "Was this P0 preventable? If we had monitoring, a runbook, or a test — would we have caught it earlier?"
2. "How long did it take us to start responding? Was there hesitation? Why?"
3. "What structural change would reduce the likelihood of this class of incident?"

The retrospective is where you examine the system. The incident response is where you fix the symptom. Do not mix them.

## The Recovery Path

**This hour:**
- PO pulls the displaced story from the sprint. Updates the board. Assigns the P0 to one developer.
- Developer follows the runbook if one exists. If no runbook exists, that becomes an action item for after the fix.
- PM sends the stakeholder message.

**This sprint:**
- The P0 fix ships with the same quality bar as any story: tested, reviewed, DoD-verified. A P0 fix is not an excuse to skip code review.
- At retro, the team runs the three questions above. Produces one structural action item.

**This quarter:**
- Count P0s. If more than one P0 dropped mid-sprint this quarter, escalate the conversation from "incident response" to "Onstream maturity." The question is no longer "how do we handle P0s better?" — it is "why are we producing P0s?"
- Check: do runbooks exist for the services that generated P0s? Do SLOs exist? Is there monitoring that would have caught the degradation before it became a P0?
- If none of these exist, the team is at Growth Path stage 1 (Ship Clean) for operations. Start with [Own What You Ship](/guide/own-what-you-ship).

## What This Reveals

A P0 mid-sprint is a stress test for two things: your incident response maturity and your team's relationship with the sprint commitment.

**If the team hesitated before responding:** your severity definitions are unclear, or the team has never practiced the override protocol. This is a Growth Path stage 1 issue — the basic agreements are not in place.

**If the PO struggled to pull a story out:** the sprint is overloaded, or the team treats the sprint goal as a fixed contract rather than a forecast. The sprint commitment is "we believe we can deliver this." It is not "we will deliver this regardless of what happens in production." If the team cannot absorb one disruption without a crisis, the sprint is packed too tight.

**If the PM did not communicate within an hour:** the stakeholder communication protocol does not exist. This is a [Ship Clean](/guide/ship-clean) gap — the team is shipping but not communicating about what happens after it ships.

**If P0s are dropping regularly:** the problem is not sprints. The problem is Onstream. Missing runbooks mean every incident is a fresh investigation. Missing monitoring means P0s are discovered by users, not by the system. Missing SLOs mean there is no shared definition of "healthy." All of these are [Own What You Ship](/guide/own-what-you-ship) territory — Growth Path stage 4.

The gate that would have caught this: an Onstream readiness check before go-live. "Does this service have a runbook? Does it have monitoring? Does someone own on-call?" If those questions are not asked before a feature ships, the P0 mid-sprint is the predictable consequence.

## From the Novel

::: details Chapter 24 — Three AM
At 3:14 AM, the payment service goes down — connection pool exhausted, all six pilot clinics affected. Tamir sees the alert because he is already awake, because eighteen months of on-call has trained his nervous system to anticipate infrastructure failures before the monitoring does.

What Tamir does right: he opens the runbook. Not his mental runbook — the actual document he and Lior built together over three sessions, with Shira asking questions and Eran reviewing the architecture. The runbook has the exact scenario: connection pool exhausted. Step 1: verify the alert. Step 2: resize the pool via configuration update — section 4.3 has the parameter and the safe range. Step 3: verify mitigation.

Eleven minutes. Alert to resolution. The previous incident of the same class — before the runbook existed — took three hours, ninety minutes of which Tamir spent on hold with the database vendor's support line, looking for the parameter he now has documented in section 4.3.

Three hours to eleven minutes. That is the difference a runbook makes.

But notice what Tamir also does: he writes the incident log entry, moves the item in the infrastructure concerns document from "flagged" to "resolved — temporary," and adds a note: *permanent fix requires architecture discussion. Current pool sizing adequate for 8 clinics, not for full rollout.* He is not just fixing the symptom. He is documenting the boundary of the fix and naming what needs to happen next. He turns a 3 AM crisis into structured information that the team can act on during business hours.

Now contrast this with Chapter 1 — Tuesday. The payment timeout incident. Eran is in the hospital. Yossi asks in Slack: "anyone know what PAYMENT_TIMEOUT_MS is supposed to be set to in prod?" Three minutes of silence. Then: "going with 3000, same as staging." The correct value is 8000. Yossi does not know this because it lives only in Eran's head — undocumented, unshared, the kind of knowledge that feels like competence until the person who holds it is unavailable.

The result: production goes down. Dani makes promises to the client he cannot keep. The rollback fails because Yossi does not know which version to roll back to. The entire team is paralyzed by a single missing environment variable.

Same company. Same system. Same class of incident. The difference: in Chapter 1, the knowledge lived in one person's head. In Chapter 24, it lived in a runbook. Chapter 1 cost three hours and a client relationship. Chapter 24 cost eleven minutes and a Slack message.

The lesson: the P0 mid-sprint is not a sprint problem. It is an Onstream problem. The sprint just reveals it.
:::

---

*See also: [Own What You Ship](/guide/own-what-you-ship) for building Onstream maturity. [Incident Management](/onstream/incident-management) for the response framework. [Blameless Post-Mortem Facilitation](/field-guide/blameless-postmortem) for what to do after the incident is resolved.*
