---
pageClass: novel-page
prev:
  text: 'Chapter 20 — Story Mapping'
  link: '/novel/chapter-20'
next:
  text: 'Chapter 22 — Tamir'
  link: '/novel/chapter-22'
---

# Chapter 21 — Releases

<span class="part-label">Part Two — Downstream</span>

The Kanban board had been running for two weeks.

No sprints. No planning Monday, no review Friday. Stories shaped upstream by Tamar, refined in Three Amigos sessions that now included Yoav as a matter of course, pulled by developers when ready, moved through review and test and deployed when done.

The first week had been uncomfortable in the specific way that removing a structure is always uncomfortable — not because the structure was load-bearing but because its absence made visible all the things the structure had been quietly organizing. The Monday planning meeting had been, among other things, a weekly forcing function for Tamar to have stories ready. Without the forcing function, she had to develop her own discipline, her own upstream rhythm that didn't depend on a downstream ceremony to create the deadline.

She had done this. It had cost her a concentrated Tuesday — four hours of refinement work that she had previously distributed across the week in smaller pieces, now consolidated into a single session that left her, by early afternoon, with six stories at Definition of Ready and a clear sense of what the next six needed before they could join them.

The board moved differently without the sprint boundary. Not faster, exactly — the cycle time per story was roughly the same. But smoother. A story done on Wednesday shipped Wednesday, not Friday. The pilot clinics received improvements on the day they were ready rather than on the day the sprint ended. Avi had noticed. Had messaged Michal: Did something change? Feels like things are moving.

Things were moving. Just differently.

But the question that nobody had fully answered was the one Michal had raised in the second week, in the daily standup that had become the team's primary coordination point: How do we manage releases?

The conversation happened on a Thursday, in the kitchen, which had become the team's informal second office — the place where the real thinking happened in the spaces between the formal sessions.

Lior. Tamar. Yoav. Shira, who had joined for coffee and stayed for the conversation with the instinct of someone who recognized a question that had quality implications.

"Kanban means continuous flow," Lior said. "A story done is a story shipped. That's the theory."

"The theory assumes you can ship continuously," Shira said. "To forty-two clinics."

"We're at six clinics," Tamar said.

"For now. And even at six — if we ship every story the moment it's done, we're deploying multiple times a day. Every deployment is a risk surface. Every deployment is something Tamir has to manage." She paused. "Has anyone talked to Tamir about this?"

A silence.

Tamir was the infrastructure engineer. He had been on the project since the beginning, in the way that infrastructure engineers are on projects — invisibly, in the background, the person who keeps the lights on and is noticed primarily when they go out. Lior had spoken to him perhaps four times. He knew his name, knew he was responsible for the deployment pipeline, knew there had been conversations about the staging environment that he had not been part of.

"I'll talk to him," Lior said.

"Before we decide anything about releases," Shira said. "Yes."

"The other question," Yoav said, "is the clinics. Ronit. If we ship a change to the morning prep screen on a Tuesday morning, she opens the app and it looks different. No warning. No context."

"That's a UX problem," Tamar said.

"It's also a trust problem," Yoav said. "She's using this in a clinical context. If the interface changes unexpectedly during a busy morning, the first thing she feels is not delight. It's disruption." He paused. "Change management for continuous delivery is a design problem. We need release notes that are readable by a vet. We need a way to surface changes that is itself calm and non-intrusive."

"A changelog," Tamar said.

"A human one. Not a list of tickets. A Tuesday-morning-readable summary of what changed and why it changed." He looked at them. "Who writes that?"

The room was quiet.

"Tamar writes the what and why," Lior said slowly. "Because she knows the problem. I write the technical what-changed. Yoav designs how it surfaces." He paused. "Three people. One artifact. Sounds familiar."

Tamar almost smiled.

"Three Amigos for release notes," she said.

"Smaller. Faster. But yes."

Shira was writing something. She did this — produced a notebook from somewhere and wrote in it at moments that seemed, from the outside, random, but that Lior had come to recognize as the moments when a decision was being made that had quality implications she wanted documented.

"The release cadence," she said. "Not the deployment cadence. Those are different things."

Everyone looked at her.

"You can deploy continuously — to staging, to a subset of clinics, to an internal test environment. That's the technical deployment. The release — the moment a change becomes visible to all users, to all clinics — that can have its own rhythm even if the deployments are continuous." She looked at Lior. "You need to talk to Tamir about feature flags."

"Feature flags," he said.

"Deploy the code continuously. Control the release separately. A feature is deployed but dark — the code is in production but no user can see it. When it's ready — tested, changelog written, Tamir happy with the infrastructure — you turn it on. For one clinic first. Watch it. Then the rest."

"Canary release," Lior said.

"Yes. But also just — common sense about the difference between technical readiness and user readiness. Code can be ready before the communication around it is ready. Feature flags let those two things happen at their own pace."

Lior thought about the vaccination status dot. Deployed, visible to Ronit, discovered to be wrong by Yoav after implementation. If it had been deployed dark, the discovery would have happened in staging, before Ronit ever saw it.

"I need to talk to Tamir," he said.

"Today," Shira said. "Not tomorrow. Today."
