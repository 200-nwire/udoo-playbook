---
pageClass: novel-page
prev:
  text: 'Chapter 23 — Netta'
  link: '/novel/chapter-23'
next:
  text: 'Chapter 25 — The SLO Conversation'
  link: '/novel/chapter-25'
---

# Chapter 24 — Three AM

<span class="part-label">Part Three — Onstream</span>

The alert came at three-fourteen on a Wednesday morning.

Tamir saw it because he was already awake — not from the alert, from the habit of a person who had been on call for eighteen months and had developed, somewhere in the second year, an anticipatory wakefulness that preceded the alerts as though his nervous system had learned to read the infrastructure's mood before the monitoring system did.

He looked at his phone.

<div class="chat-log">

CRITICAL: Payment service — connection pool exhausted. Affecting: all production environments.

</div>

He was at his desk in four minutes.

The connection pool had been on his list.

Not the document he'd shown Lior — before that document, in the earlier list, the mental one, the one he had been maintaining for months with the specific discipline of someone who has no other place to put things. The payment service used a database connection pool that had been sized for the original single-clinic deployment. As the pilot had grown to six clinics, the connection demand had grown. The pool had not.

He had flagged it. Once, in a Slack message to Lior, three weeks ago: *heads up — connection pool is getting close to ceiling, will need to resize before we scale further.*

Lior had replied: *noted, let's talk this week.*

They had not talked that week. Not from negligence — the story mapping session had happened, the Tamar and Michal conversation, the design system discussion. The message had been buried under thirty others.

Now it was three-fourteen AM and all six pilot clinics were unable to process payments.

Tamir opened the runbook.

Not his mental runbook. The actual one. The document that he and Lior had built together over three sessions, in the weeks after the data migration incident, with Shira asking questions and Eran reviewing the architecture sections and Lior writing the parts that required product context.

> Payment service — connection pool exhausted.

He had written this scenario. He had written it specifically, with the particular attention of someone who has been in a version of this situation before and knows exactly what you wish you had documented when you were in it.

> Step 1: Verify the alert. Check the monitoring dashboard — confirm connection count at ceiling, not a false positive from the alerting system.

He checked. Not a false positive.

> Step 2: Immediate mitigation. Connection pool can be resized without restart via configuration update. See section 4.3 for the exact parameter and the safe range of values.

He navigated to section 4.3. The parameter was there. The safe range was documented. He had spent forty minutes researching the safe range when writing the runbook and had nearly not included it, thinking it was obvious, and then had included it because the point of a runbook was that nothing should require research at three in the morning.

He made the change.

> Step 3: Verify mitigation. Check connection count — should drop within sixty seconds of configuration update.

He watched the monitoring dashboard.

Sixty seconds.

The connection count dropped.

<div class="chat-log">

Payment service: green.

</div>

He sat back.

The whole sequence — alert to resolution — had taken eleven minutes. He knew this because he had been timing it, not from any formal process but from a habit he had developed, of recording what incidents actually cost in time and attention, because the numbers had a way of making the case for infrastructure investment that his words never quite managed.

Eleven minutes.

The previous connection pool incident — before the runbook, six months ago, a different but related issue — had taken three hours. He had been on the phone with the database vendor's support line for ninety minutes of those three hours, looking for the parameter he now had documented in section 4.3.

Three hours to eleven minutes.

He opened the incident log. Wrote the entry: time, nature of issue, resolution, root cause, time to resolve.

Then he opened the infrastructure concerns document and moved *connection pool sizing* from the flagged column to the *resolved — temporary*. Then added a note: *Permanent fix requires architecture discussion. Current pool sizing adequate for 8 clinics, not for full Vetcare rollout. Schedule before we exceed 8.*

He looked at the note.

Three months ago he would have added it to the mental list. Let it accumulate there with everything else, the weight of unshared knowledge pressing against the inside of his skull at three in the morning.

He opened Slack.

<div class="chat-log">

**Tamir** 3:25
Payment service incident resolved. 3:14-3:25 AM. Runbook worked. Root cause: connection pool sizing. Wrote up the incident log. Need an architecture conversation about permanent fix before Vetcare scales. Not urgent tonight but genuinely urgent before we go past 8 clinics. Sleep well.

</div>

He sent it.

Closed the laptop.

Went back to bed.

---

Did not sleep immediately — the post-incident adrenaline had a half-life — but lay in the dark thinking about the eleven minutes. About the runbook. About Lior asking, weeks ago: *what would you need to sleep through a night without worrying about this system?*

He hadn't slept through tonight.

But he had resolved it in eleven minutes, alone, without panic, without calling anyone, without three hours on hold with a vendor.

He thought: *that's not the same as sleeping through it. But it's closer than before.*

He thought: *the next step is that someone else can do what I just did.*

That thought was new. Not the idea of it — he had known abstractly that the runbook was supposed to enable exactly that. But the felt reality of it, the specific comfort of imagining another person following section 4.3 at three AM while he slept.

He had been the person who kept the lights on for so long that he had stopped being able to imagine not being that person.

The runbook was the beginning of imagining it.

He closed his eyes.

The monitoring dashboard continued its real-time breathing, three hundred kilometers away, the lines moving in the dark, the system alive and for now stable, watched over by automated alerts and documented procedures rather than by one person's sleepless attention.

It was not perfect.

It was better.
