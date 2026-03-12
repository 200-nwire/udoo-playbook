---
pageClass: field-guide-page
---

# Feedback to Signal

<span class="part-label">Part 6 — Growth Craft</span>

::: tip When this chapter is for
Customer feedback arrives — in support tickets, in sales calls, in Slack messages from CS — but it never becomes a product decision. Signals enter the system and disappear. You need a path from "a customer said something" to "a team is working on it."
:::

## The Direct Answer

Build a four-step pipeline: **capture, tag, aggregate, route.**

Every piece of feedback becomes a structured signal with six fields: source, signal, impact, duration, category, revenue at risk. The signal enters a shared log that CS and product both see. Signals are tagged, aggregated weekly, and routed to the person with authority to act. A signal without a path to a decision-maker is not intelligence — it is noise someone heard once.

Stop collecting feature requests. Start collecting signals. When a customer says "I want X," the signal underneath is "I am blocked at step Y." Product acts on signals and parks requests.

## Why This Works

Most feedback systems fail at the same point: acknowledgment. A customer raises an issue. CS logs it. Someone says "thanks, it's on the roadmap." The customer feels heard. CS feels productive. Nothing happens.

"On the roadmap" is where signals go to stop moving. It sounds like a path but it is actually a parking lot. The signal entered the system, was acknowledged, and died. Six weeks later the customer leaves. In the churn post-mortem, someone discovers the issue was raised in week two of the pilot, acknowledged in the onboarding session, and never entered product planning. The knowledge existed. The path did not.

The four-step pipeline works because each step has a clear owner, a clear output, and a clear next destination. Capture means writing it down in a structured format — not a Slack message, not a mental note. Tag means categorizing it so it can be found alongside similar signals. Aggregate means recognizing that three clinics reporting slow afternoon load times is not three problems — it is one systemic issue. Route means putting the aggregated signal in front of the person who can authorize work on it, with a timeline that matches the urgency.

The pipeline also works because it is shared. If CS logs feedback into a Notion doc that product never reads, the loop is broken at step one. The feedback log must be a shared artifact — visible to CS, product, and engineering. When Netta logs a signal and Tamar responds within the hour, that is not magic. That is architecture. The log is in a place Tamar already looks.

## Step by Step

### 1. Capture: Write the structured signal

Every piece of feedback, from any source, gets the same six fields:

| Field | What it captures | Example |
|---|---|---|
| **Source** | Who reported it, which account | Dina, HaRefu'ah clinic |
| **Signal** | The underlying problem, not the request | Record load time slow in afternoon window |
| **Impact** | What the user is doing instead | Reverting to paper notes for AM records, transcribing PM |
| **Duration** | How long this has been happening | Since pilot start |
| **Category** | One of six tags (see step 2) | Performance / UX friction |
| **Revenue at risk** | What is at stake if this is not addressed | Reference clinic — if Dina is reverting, what are the other five doing? |

The discipline is in the signal field. Customers say "make the loading faster." That is a request. The signal is: "The 2-3pm notes window is unusable because record load times compound across five entries." Product acts on the signal. The request gets parked.

### 2. Tag: Apply the taxonomy

Six categories. Every signal gets exactly one.

| Category | What it means | Urgency profile |
|---|---|---|
| **Performance** | The system is too slow or unreliable for the workflow | Often P0 — users create workarounds fast |
| **UX friction** | The system works but the interaction costs too much time or attention | Builds churn silently |
| **Missing capability** | A workflow the product does not support at all | Discovery candidate |
| **Workflow mismatch** | The product supports the workflow but not the way this user does it | Needs observation, not just a feature |
| **Trust erosion** | The user is losing confidence in the product's reliability or direction | Highest churn risk — often invisible in metrics |
| **Integration gap** | The product does not connect to something the user's workflow depends on | Often blocks adoption entirely |

A signal can have secondary tags, but force yourself to pick one primary. If you cannot decide between "performance" and "UX friction," ask: is the user waiting, or is the user doing unnecessary work? Waiting is performance. Extra steps are friction.

### 3. Aggregate: Find the pattern

Individual signals are anecdotes. Aggregated signals are intelligence.

Review the log weekly. Look for clusters:

- **Same signal, different sources.** Three clinics reporting slow afternoon performance is not three performance issues. It is one systemic issue with three witnesses. Write a single aggregated signal with the sources listed.
- **Same category, different signals.** Four trust-erosion signals in one month, all from different causes, is not four problems. It is a trust trajectory. Escalate the pattern even if no single signal warrants it.
- **Same source, multiple signals.** One account raising five issues in two weeks is not a noisy customer. It is a customer deciding whether to leave. Route to CS for a relationship check before routing to product.

The weekly review should take thirty minutes. Pull the log, sort by category, look for clusters, write aggregated signals for any pattern involving three or more sources.

### 4. Route: Get the signal to a decision-maker

A signal without a path to someone with authority is noise. Routing rules:

| Signal type | Route to | Timeline |
|---|---|---|
| **P0 signal** (user blocked, no workaround) | PM + engineering lead | Same day |
| **Aggregated pattern** (3+ sources, same signal) | PM, weekly product review | Within one week |
| **Trend signal** (category frequency increasing) | PM + CS lead, monthly review | Within one month |
| **Churn signal** (customer leaving or at risk) | CS lead + PM + account owner | Same day |

"Acknowledged and added to roadmap" is not routing. Routing means a specific person has seen the signal, has the authority to act on it, and has a timeline for deciding. If the decision is "not now," the signal stays in the log with the disposition and the reasoning — not just "roadmap."

### 5. Close the loop back to the source

When a signal results in action, tell the person who raised it. Not a form letter. A specific message: "Dina, the afternoon load time you reported — Lior traced it to a database query issue. The fix ships next Tuesday." This is what makes people report signals again. If feedback disappears into silence, people stop giving it.

When a signal is parked, say that too, with reasoning: "Roi, the emergency triage workflow — we hear you. We're prioritizing it for discovery this month. Here's what that means in terms of timeline." Silence is worse than "not yet."

## The Standing Practices

**Quarterly user calls.** Not to collect feature requests. To ask how Tuesday is. To hear the "mostly" — the moment when the user pauses before saying "it's fine" and you sit in the pause instead of filling it. Schedule these as standing practice for every active account. The person making the call should be CS, not sales.

**The churn post-mortem.** When a customer leaves, write it up like an incident. Same structured format: what happened, when, what signals existed, what the disposition of each signal was, what would have needed to be different. A clinic that leaves is a production incident for the business. Treat it with the same rigor.

## Common Mistakes

**Collecting requests instead of signals.** "Customer wants a dark mode" is a request. "Customer works in a dim exam room and the white screen causes eye strain during 12-hour shifts" is a signal. Requests prescribe solutions. Signals describe problems. Product needs problems — the solution space is their job.

**Logging into a private notebook.** If the feedback log is only visible to CS, it is not a feedback loop. It is a journal. The log must be shared — CS and product see the same artifact. When Netta writes a signal entry and Tamar's typing indicator appears in Slack within the hour, that is the architecture working. The shared artifact is what makes the response possible.

**Acknowledging without routing.** "Thanks, it's on the roadmap" feels like a response. It is actually the place where signals go to wait, and the customer knows it. Roi told the team exactly this: "On the roadmap is where things go to wait." If you cannot name the person who will decide what to do with this signal, you have not routed it. You have parked it.

**Treating all signals as equal.** A performance signal from your reference clinic is not the same as a feature request from a prospect. Revenue at risk, account strategic value, and signal frequency all matter. The weekly review is where you apply judgment — not the logging step. Log everything. Prioritize deliberately.

**Waiting for customers to report.** "No one asked" is the most common reason a signal goes uncollected. Dina's afternoon slowness existed from the pilot's first week. Nobody called to ask how Tuesday was going. The quarterly user call is not a nice-to-have. It is the practice that surfaces signals the customer has decided are not worth reporting.

## From the Novel

::: details Chapter 28 — Netta's Loop
Netta calls Dina — not because Dina raised an issue, but because Netta reached out and Dina eventually called back. The call has "the quality of attention of someone who is giving you what they have rather than what the situation ideally requires." Dina is between patients. She has fifteen minutes.

**"Tell me the mostly."** Netta asks "How's Tuesday?" and Dina says "Better. Mostly." Netta's craft move: she says "Tell me the mostly" and then sits in the pause. "Netta had learned to sit in pauses rather than fill them. The pause was where the real information lived." This is the CS interview skill in miniature. The signal lives in the hesitation, not in the answer.

**The signal that was always there.** Dina describes the afternoon slowness — the 2-3pm window when she needs to write up morning notes and the system load time makes it impossible. She has started taking paper notes and transcribing them in the afternoon — "exactly what I was doing before your system." This problem has existed since the pilot's first day. "No one asked," Dina says. Not with blame. Just noting it.

This is the cost of not having standing user calls. The signal was present, the user had adapted around it, and the adaptation was invisible to the product team. Without Netta's call, this signal would have continued silently eroding the product's value until Dina decided the paper workflow was simpler and stopped using the system entirely.

**The structured log entry.** Netta writes immediately — not in a personal notebook, but in "the feedback log, the shared one, the one she had built with Tamar in her first week, the one that both CS and product could see." Her entry is a model of the six-field format: source (Dina, HaRefu'ah), signal (record load time slow in afternoon window), impact (reverting to paper notes), duration (since pilot start), category (performance/UX friction), revenue at risk ("this is the reference clinic — if Dina is reverting to paper, what are the other five doing?").

That last line is the aggregation instinct. One signal from one clinic, but Netta immediately thinks about the pattern: if the reference clinic has this problem, it is systemic.

**The response within the hour.** Netta flags the entry. Tags Tamar, Lior, Tamir. Tamar's typing indicator appears in Slack. Within the hour, Tamar is pulling performance logs and connecting the signal to a known database query issue. Netta thinks: "That's what a feedback loop feels like when it's working. Not the logging. The response."

This is the architecture in action. The shared log means Tamar sees the signal without a meeting, without an escalation, without Netta needing to chase anyone. The signal entered the system and something moved. The path existed.

**The standing practice recommendation.** Netta adds to the log: "Recommend: quarterly user calls for all pilot clinics as standing practice." And the purpose — "not to collect feature requests. To ask how Tuesday is. To hear the mostly." This is Netta turning a single call into a systemic practice. She knows the signal existed for weeks uncollected. She is building the path so the next signal does not wait.
:::

::: details Chapter 30 — The Clinic That Left
Refu'at HaNefesh drops out of the pilot. Netta calls to understand why. Roi — the clinic manager — explains calmly, without rancor, as a person who has made a comfortable decision.

**"On the roadmap is where things go to wait."** Roi describes the problem: emergency triage for walk-ins. The receptionist, Sigal, was managing it on a whiteboard beside the screen because the system could not handle the workflow. The team says "we know that problem — it's in our discovery pipeline." Roi's response: "I know. The competitor has a version of it. Rough — not as good as yours will probably be. But it exists now." He raised the issue in week two. It was acknowledged and added to the roadmap. Six weeks later, he left.

This is the anatomy of a preventable churn. The signal had a path into the conversation but not into the system. "Acknowledged and added to roadmap" felt like a response to the team that said it. To the customer who received it, it meant nothing would change in time. Roi understood the difference between "we hear you" and "we are acting."

**The churn post-mortem.** Netta writes the most detailed feedback log entry she has produced. She applies the structured format: clinic, status (churned), reason, duration of pain (pilot start), signal raised (week two), disposition of signal (acknowledged, added to roadmap), outcome (signal did not enter product planning, clinic left week eight). Then the line that connects it to every other high-volume clinic: "Revenue lost: one clinic. Revenue at risk: every high-volume clinic in the Vetcare rollout."

This is the churn post-mortem treated with incident-level rigor. Not "they left because the competitor was cheaper." The structured analysis shows the failure: a signal was raised, acknowledged, and parked. The path from signal to action did not exist.

**"How a signal becomes a sprint."** Netta writes a document — unprompted, unassigned — mapping every step from customer signal to product action. Who owns each step. How long each step should take. What blocks it. What breaks it. Tamar reads it and replies: "This is upstream. This document is the thing that connects Offstream to Upstream. You've just written the missing page."

This is the chapter's deepest craft lesson. Netta spent six years at her previous company logging feedback into a Notion document nobody read. She knows what a broken loop looks like. She also knows what a working loop feels like — she experienced it in Chapter 28 when Tamar responded within the hour. Now she writes down the path so it is not dependent on individual heroics. The feedback loop becomes a system, not a habit.

The connection Tamar names — "this is upstream" — is the framework's most important join. Offstream signals become Upstream discovery inputs. The loop closes. Without this document, the connection is implicit and fragile. With it, the connection is explicit and repeatable.
:::

## When This Breaks Down

**When CS and product do not share a log.** If CS logs feedback in one system and product plans work in another, there is no loop — there are two lines that do not connect. The shared artifact is non-negotiable. It does not matter what tool you use. It matters that both teams see the same entries and both teams can act on them.

**When nobody has authority to act on signals.** Routing a signal to a weekly review is useless if the weekly review cannot authorize discovery work. If every signal requires executive approval before it enters the pipeline, the pipeline is decorative. The routing step must end at a person who can say "yes, we're doing this" — not a person who can only say "I'll escalate."

**When the team treats all feedback as feature requests.** If the response to every signal is "we'll add it to the backlog," the pipeline collapses into a feature factory. Signals are not requests. "Slow afternoon load times" is not a feature to build — it is a problem to investigate. The pipeline must distinguish between signals that need discovery (what is actually happening?), signals that need engineering (we know the cause, fix it), and signals that need a conversation (is this our problem to solve?).

---

*See also: [The Feedback Loop](/offstream/feedback-loop) | [Strategic Synthesis](/offstream/strategic-synthesis) | [Customer Lifecycle](/offstream/customer-lifecycle) | [Close the Loop](/guide/close-the-loop) | [Chapter 28 — Netta's Loop](/novel/chapter-28) | [Chapter 30 — The Clinic That Left](/novel/chapter-30)*
