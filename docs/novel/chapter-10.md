---
pageClass: novel-page
prev:
  text: 'Chapter Nine — The Sprint That Solved Nothing'
  link: '/novel/chapter-09'
next:
  text: 'Chapter 11 — The Shape of Debt'
  link: '/novel/chapter-11'
---

# Chapter 10 — Technical Debt Has a Half-Life

<span class="part-label">Part Two — Downstream</span>

The pull request had been open for four days.

Oren knew this the way you know a thing you've been successfully not thinking about — with a background awareness that surfaces whenever the attention relaxes, like a sound you've learned to filter but haven't actually stopped hearing.

He opened the PR again. Fourteen files changed. Two thousand and forty-one lines. The description said: Notification system — initial implementation. Below it, one comment from Lior, three days ago: Will review properly tomorrow. Below that, nothing. Tomorrow had arrived twice and departed without the review.

Oren understood this. Lior was in Ramat Gan, then he was writing the document about Dina's Tuesday, then he was sending messages to Michal about building the wrong things. The PR was real work, completed work, correct work — Oren had tested it against every scenario in the ticket, had written unit tests for the edge cases, had refactored the notification queue twice to make it cleaner — and it was sitting in the review column with the specific invisibility of something that exists but has no one currently responsible for it.

He opened the Jira board.

His ticket: In Review. Had been In Review for four days.

He thought about the conversation in week two, when Michal had introduced the sprint board and explained WIP limits with the careful optimism of someone presenting a solution to a problem the team hadn't yet agreed they had. No more than two things in progress per developer, she had said. When the board is full, we swarm. We finish before we start.

The board was not full. The board had, in fact, achieved a kind of accidental compliance — Lior had one thing in progress, Oren had one thing in review, the WIP limits were technically respected. The metric was clean. The reality was that both of them were blocked and neither of them was finishing anything and the sprint would end on Friday with the board in this exact state, the cards unmoved, the velocity a number that described activity that had produced nothing shippable.

He opened Slack.

Typed to Lior: Hey — when do you think you can get to the notification PR? No pressure, just trying to figure out if I should start something else or wait.

Looked at the message.

No pressure was the kind of thing you wrote when there was pressure. He deleted it.

Typed: The notification PR has been in review four days. I want to talk about it before I start anything else — I think there might be a bigger issue.

Sent it. Better.

The bigger issue had been forming in Oren's mind since Monday, when Lior had come back from Ramat Gan and sent the message about building the wrong things. Oren had read it and felt two things simultaneously and had been sitting with the gap between them since.

The first thing: relief. A quiet, slightly shameful relief that someone had finally said it — that the sprint board's motion was not the same as the project's progress, that the tickets completed were not the same as the problem solved.

The second thing: a more complicated feeling that he was still excavating.

He opened the notification system code. Read it the way you read something you've built — with the dual consciousness of the person who wrote it and the person who is seeing it for the first time, trying to find the join between them.

The code was good. He was confident in this without vanity — it was structured correctly, the queue implementation was solid, the retry logic handled the failure cases, the database schema was normalized, the API endpoints were RESTful and documented. He had been a developer for nine years and he could read his own code honestly and this code was good.

But.

He opened the clinic-facing interface. The screen where a vet would, in theory, receive a notification. Read the notification. Act on it.

He thought about Dina.

He had not been to Ramat Gan. He had not watched anyone work. He had read Lior's document about Dina's Tuesday — had read it twice, actually, which he hadn't mentioned to anyone — and had felt, reading it, the specific discomfort of someone encountering information that doesn't fit into the existing structure.

Dina doesn't have time to read notifications.

He had built a notification system. He had built it correctly, efficiently, with good test coverage and clean architecture. He had built exactly what the ticket asked for.

He had built something Dina would dismiss in week one and disable in week two if she could find the setting, and if she couldn't find the setting would learn to ignore with the efficient contempt of a professional who has been given the wrong tool for the third time.

He opened a new document.

At the top he wrote:

> The notification system is technically complete and functionally wrong.

Below it he wrote:

> This is not a bug. This is a category error. We built a push system for a person who needs a pull system. We assumed Dina would be waiting for information. She is never waiting. She is moving. The information needs to be there when she arrives at it, not arriving at her when she's somewhere else.

He thought about this for a while.

Then he wrote:

> The architecture is wrong. Not the code — the premise. And refactoring the code won't fix the premise.

He looked at two thousand and forty-one lines of good, careful, well-tested, wrong code.

In his previous company — a product company, stable, well-funded, the kind of place that had a proper engineering culture with RFCs and architecture review boards and the quiet confidence of an organization that had figured some things out — this would have been caught earlier. The design review would have asked: what is the user's context when they receive this notification? The answer would have revealed the problem before a line was written.

Here, there had been no design review. There had been a ticket. Add notification system. He had added a notification system. He had done his job in the only direction the job had been pointed.

He thought: *accountability and how it was used in retrospectives to mean whose fault is this when what it should mean was whose job was it to know this before we built it.*

He opened the message to Lior.

Added to it: I think I need to walk you through something. Can we call?

---

The call lasted forty minutes.

Lior read the document. Read it again. Looked at the notification system code, which he had not reviewed in four days and was now reviewing for the first time with Oren's analysis sitting beside it like a second pair of eyes.

He felt something he recognized from Ramat Gan. The specific sensation of a frame shifting — not a small adjustment but a rotation, the same information rearranging itself into a shape that made the previous shape feel obvious in retrospect, the way you can never unsee the duck once you've seen the duck.

"Walk me through the architecture," he said. "From the beginning."

Oren walked him through it. The queue, the retry logic, the database schema, the API endpoints. It was, as Oren had said, good code. Lior could see that it was good code. He could also now see, with Dina's Tuesday visible in his peripheral vision, that good code in the wrong direction was a specific kind of expensive.

"How long to refactor?" he said.

"That's the wrong question," Oren said.

A pause.

"The queue architecture, the retry logic, the database schema — most of it is reusable. The wrong thing is the delivery model. We're pushing notifications to a user who is never in a position to receive them. What we need is a compositing layer — something that assembles the right information at the moment the user arrives, based on their context, not based on events firing in the background." He paused. "That's not a refactor. That's a different system."

"How different?"

"The database schema works. Maybe sixty percent of the service layer. But the notification concept itself — the idea that we send Dina a message — that goes. Instead we build a briefing engine. It runs when she opens the app. It knows what she needs to know because we've taught it what matters and when." He paused again. "I've been thinking about this since Monday. I have a rough design."

Lior was quiet.

"You've been sitting on this since Monday," he said. Not an accusation. Just — noting it.

"I wanted to think it through before I said it. Because it means the sprint is wrong. The PR is wrong. The velocity is wrong. And I didn't want to say that without knowing what right looked like."

Lior thought about the message he had sent Michal. *I think we're building the wrong things again.* The risk of that message. The way it had felt — not heroic, just necessary, and also frightening in the specific way that naming a true thing is frightening when you're not sure if the truth will be welcomed.

"Write the design up," he said. "Whatever you have. And Oren —" He stopped. "Next time you see this in the first week, say it in the first week. Even if you don't know what right looks like yet. Say what you see."

"Even if it breaks the sprint?"

"Especially then."

A beat.

"Okay," Oren said.

"The PR," Lior said. "I'll review it today. Not to merge it. To understand what we have and what carries forward."

"Most of it carries forward."

"I know. But I need to read it. I should have read it four days ago." He paused. "That's on me."

It was a small thing to say. Four words. Oren didn't make anything of it, just said okay again and the call ended. But Lior sat with it afterward — the specific weight of a direct acknowledgment, no hedging, no explanation. That's on me. He had learned this, somewhere, at some point, but it had taken a long time to learn it cleanly, without the defensive architecture that usually surrounded admissions of failure.

He opened the PR.

Started reading.
