---
pageClass: novel-page
prev:
  text: 'Chapter 25 — The SLO Conversation'
  link: '/novel/chapter-25'
next:
  text: 'Chapter 27 — What Carmit Said'
  link: '/novel/chapter-27'
---

# Chapter 26 — Shira's Postmortem

<span class="part-label">Part Three — Onstream</span>

She called it what it was.

Not a lessons-learned session. Not a retrospective. A postmortem — and *blameless*, she said this at the beginning, before anything else, because in her experience the word *blameless* needed to be said explicitly and early and with enough weight that the room understood it was a commitment rather than a courtesy.

Eight people. The full team plus Avi plus Tamir. The room was the big one, the one with the long wall, still faintly marked from the story mapping session — the ghost of brown paper tape at the edges, a few sticky notes that had been missed in the cleanup.

Shira stood at the whiteboard.

— We are here, she said, to understand what happened. Not who caused it. Not what went wrong in the moral sense. What the system made inevitable — what combination of conditions, decisions, and gaps produced this outcome. Because if we understand the system, we can change the system. If we assign blame, we change the person, and the system produces the same outcome with a different person in the same role.

She wrote at the top of the whiteboard:

> What happened. When. Who was involved. What they knew at the time. What the system made it rational for them to do.

— The last one, she said, is the important one. Every person in an incident was acting rationally given what they knew and what the system rewarded. The postmortem's job is to understand the rationality, not to question the people.

The room was quiet in the way rooms are quiet when a frame has just been offered that reorganizes what everyone thought they were there for.

Dani had his notebook open. Lior noticed this. Dani always had his notebook but usually wrote sparingly in it, small structured notes, the record of a person who processed things privately. Today the pen was moving more.

They went through the incident in order.

The three AM alert. Tamir's response. The eleven-minute resolution. Then — and this was where Shira took the conversation somewhere most postmortems didn't go — the six months before the incident.

— The connection pool, she said. When was it first identified as a risk?

— It was on my list from the beginning of the pilot. I flagged it to Lior three weeks before the incident, Tamir said.

— In what form?

— A Slack message.

— What happened to the message?

— I acknowledged it. We didn't schedule the follow-up conversation, Lior said.

— Why not?

Lior thought about this honestly.

— Because the sprint was full. And because the flag felt like a future problem, not an immediate one. And because Tamir said it wasn't urgent tonight — he said we needed to talk about it that week, and the week filled up.

— What would have needed to be different for the conversation to happen?

A silence.

— A path, Tamar said. An explicit path from infrastructure concern to product planning. Tamir had nowhere to put it except a Slack message to Lior. If there had been a standing infrastructure review — even monthly — it would have been on an agenda.

Shira wrote:

> No forum for infrastructure concerns to enter product planning.

Then:

> Slack message as the only escalation path for technical risk.

— What else?

— The staging environment, Oren said. If staging had mirrored production, we might have seen the connection pressure earlier. In the staging tests, the pool never got close to ceiling because the synthetic data doesn't generate realistic connection load.

Shira wrote:

> Staging environment does not reflect production data patterns.

— And the SLA, Dani said.

Everyone looked at him.

He was looking at his notebook. Not reading from it — looking at it in the way he looked at his spreadsheet sometimes, as though the act of looking helped him think.

— The SLA was set without consulting the person responsible for meeting it, he said. Tamir was never in the conversation where ninety-nine point five was committed to. The number was agreed between the sales process and the client. Tamir inherited it.

— Did you know that? Shira said.

— I knew it, Dani said. I was in the sales conversation. Carmit asked about uptime and I said ninety-nine point five because that's what enterprise clients expect and I thought it was achievable. He paused. — I didn't ask Tamir. I should have.

The sentence arrived in the room with the specific weight of a person taking responsibility without defense.

Shira wrote:

> SLA commitment made without infrastructure input.

She looked at Dani.

— Thank you, she said. That's exactly what this is for.

---

They spent ninety minutes building the map.

Not of what went wrong — of what the system had made rational. Tamir's silence had been rational: he was an infrastructure engineer in a company that valued feature delivery, and raising concerns about infrastructure had, historically, produced polite acknowledgment and no action, which was a rational reason to stop raising them. Dani's SLA commitment had been rational: enterprise clients expected certain numbers, and he had given them a number that matched the expectation, which was what the sales process rewarded. Lior's unscheduled follow-up had been rational: the sprint was full, the flag hadn't felt urgent, the rationality of busyness had made the decision for him.

The system had produced the incident. The people had behaved rationally inside the system.

Changing the system meant changing the conditions that made those behaviors rational.

Shira wrote on the whiteboard:

> Action items — not for people. For the system.
>
> 1. Monthly infrastructure review. Standing agenda item. Tamir presents open risks. Product and delivery leads attend. Owner: Tamar.
>
> 2. SLA consultation protocol. Before any SLA or SLO commitment is made to a client, infrastructure sign-off required. Owner: Dani.
>
> 3. Staging environment data mirror. Anonymized production data in staging within two weeks. Owner: Tamir, sign-off: Avi.
>
> 4. On-call rotation. Three-person rotation documented and operational within one week. Owner: Tamir, Lior, Oren.
>
> 5. Infrastructure risk field in story template. Every story that touches infrastructure has a risk assessment. Owner: Shira.

She read them back.

— These are not aspirational, she said. They are specific, owned, and dated. If they're not done by the date on them, that's the next postmortem agenda item.

She looked at the room.

— One more thing, she said. This postmortem will be shared with the full team. Not a summary. The whole thing. Because a blameless postmortem that's kept private is just a therapy session. The learning has to be visible to be useful.

— Can we share it with Carmit? Avi said.

The room looked at him.

— She's the enterprise client, he said. She's about to trust us with forty-two clinics. If we're the kind of company that shares our postmortems with clients — that says *here is what happened, here is what we learned, here is what we changed* — that's either a relationship-ending conversation or a trust-building one. I think with Carmit it's the second.

Shira looked at him for a long moment.

— Yes, she said. I think so too.

She wrote at the bottom of the whiteboard, in larger letters than the rest:

> Shared with: Full team. Carmit, Vetcare. Date: Friday.

The room sat with this.

---

Outside the window the city was doing its ordinary Thursday. A delivery van was double-parked. A woman was eating a sandwich on a bench with the focused pleasure of someone who had found a good spot. A dog was investigating something in the gutter with the professional commitment of a specialist.

Inside the room, eight people were sitting with the slightly raw feeling of a conversation that had gone further than conversations usually go, that had reached the place where the real causes lived rather than stopping politely at the symptoms.

It was uncomfortable.

It was also, Lior thought, the most useful ninety minutes the team had spent together.

He thought about Eran. The lessons-learned session. The *but* that hadn't arrived. The bullet points that had been clean and safe and had changed nothing.

He thought: *this is what Eran was trying to say. This is the version of that conversation that actually happens.*

He made a note.

Not in Jira. In his own notebook, which he had started carrying since Ramat Gan, since the morning he had understood that the most important things didn't fit in ticket fields.

> Blameless postmortem = the system made it rational. Change the system, not the person.

Below it:

> Share everything. The learning only travels as far as the document does.

Below that, smaller:

> Eran should see this.
