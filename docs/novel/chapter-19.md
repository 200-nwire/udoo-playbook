---
pageClass: novel-page
prev:
  text: 'Chapter 18 — Yoav'
  link: '/novel/chapter-18'
next:
  text: 'Chapter 20 — Story Mapping'
  link: '/novel/chapter-20'
---

# Chapter 19 — The Story That Bounced

<span class="part-label">Part Two — Downstream</span>

It happened on a Tuesday.

The story was called: As Ronit, I want to see a patient's vaccination status at a glance so that I can prepare the right materials before the appointment.

It had passed the Definition of Ready. Tamar had written it. Shira had reviewed the acceptance criteria. Lior had confirmed feasibility. It had entered the board on Monday morning with the quiet confidence of a story that had been properly prepared.

By Tuesday afternoon it had bounced.

Not dramatically. Oren had pulled it Monday, had started building, had opened the design reference — a quick sketch Tamar had attached, rough, communicating the concept rather than the execution — and had built to it. By Tuesday morning he had something working. He showed Lior.

Lior looked at it for a moment.

Then he sent a message to Yoav.

> Can you look at something?

Yoav looked at the implementation on the staging environment. Then at Tamar's sketch. Then at the implementation again.

The vaccination status was there. Technically correct. A colored dot — green, amber, red — beside the patient name in the morning briefing. Green: up to date. Amber: due within thirty days. Red: overdue.

"What's wrong with it?" Oren said. Not defensively. Genuinely asking.

Yoav opened his laptop. Pulled up a photo he'd taken in the clinic during his observation week — Ronit at her desk, the tablet at an angle, morning light coming from the left, her reading distance from the screen.

"At that distance," he said, "and in that light, green and red are distinguishable. Green and amber are not."

A silence.

"Color blindness," Lior said.

"Eight percent of men," Yoav said. "But also just — ambient light, screen angle, screen quality. The dot is four pixels. At reading distance it's a suggestion, not information."

Oren looked at the screen. "So we need a different encoding. Not just color."

"Color plus shape," Yoav said. "Or color plus text. Or —" He was already sketching on the drawing tablet, quick loose lines, thinking with his hand. "What if it's not a status indicator at all. What if the briefing just surfaces the ones that need attention. Ronit doesn't need to know that fifty patients are up to date. She needs to know that the eight-forty-five appointment — Kuki, the labrador — is three months overdue on distemper."

He showed them the sketch. Not a dot beside every name. A single line, above the appointment list, in the morning prep screen: 3 patients need vaccination check today.

Tappable. Expanding to the specific patients and the specific vaccines.

Oren looked at it for a long time.

"That's a different feature," he said.

"It's a better answer to the same problem," Yoav said.

"The story will need to be rewritten."

"Yes."

Lior looked at the bounced story in Jira. The work Oren had done. A day's implementation, technically correct, answering the wrong version of the question.

He felt the familiar texture of this moment — the cost of late discovery, measured in days rather than weeks this time, because Yoav had caught it at implementation rather than at release. Better than before. Not yet good enough.

"Next time," he said, "Yoav is in the Three Amigos session."

Both of them looked at him.

"The design question — color encoding, information hierarchy, reading context — those aren't implementation details. They're acceptance criteria questions. They need to be in the room when we write the criteria, not after we've built to them."

Yoav looked at him with the expression of someone hearing something they should have said themselves.

"Yes," he said. "That's right."
