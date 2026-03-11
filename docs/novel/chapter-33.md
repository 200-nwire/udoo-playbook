# Chapter 33 — Eran's Last Scene

He was reviewing a pull request.

The developer who had submitted it was named Gal — twenty-six, eight months at the company, the specific combination of technical competence and professional uncertainty that Eran recognized from his own early years. The code was good. The approach was correct. The tests covered the happy path and two edge cases.

One edge case was missing.

Eran looked at it for a while. The missing scenario — a timezone boundary condition, the kind of thing that lived in the gap between what a developer thinks the system does and what the system actually does at two AM on a clock-change night.

He had two options.

He could write in the PR comment: Missing test: timezone boundary at DST transition. Add before merge.

This would take Gal ten minutes to fix. The PR would be clean. The edge case would be covered.

Or.

He opened a message to Gal.

Hey — quick question about the PR. In your implementation, what happens to an appointment that's scheduled for 2:30 AM on the night we change the clocks?

He sent it.

Waited.

Three minutes. Then Gal's reply, the typing indicator appearing and disappearing twice before the message arrived — the sign of someone thinking, revising, thinking again.

Oh. That time doesn't exist, does it. The clock goes from 2:00 to 3:00. So 2:30 is —

Yes, Eran typed. What does the system currently do with it?

A longer pause.

I don't know. I'd have to test it.

Yes, Eran typed. What do you think the right behavior should be?

Another pause. Longer. Eran could imagine Gal at his desk, the slightly uncomfortable process of thinking through something that hadn't been in the ticket, that required him to hold the user's context in his mind alongside the technical problem.

Probably surface it to the vet as a scheduling ambiguity, Gal wrote finally. Not silently fail. Not silently succeed. Tell her there's a problem with this appointment and give her the option to move it.

Yes, Eran typed. Write the test for that. And write a comment in the code explaining why — not what the code does, why the behavior matters. So the next person who reads it knows.

The next person, Gal wrote. Then: okay.

The PR came back forty minutes later. The test was there. The comment was there — a paragraph, in plain language, explaining DST transitions and the user impact of silent failures at clock-change boundaries. It was better than Eran would have written it, in the specific way that things are better when the person who writes them has just discovered why they matter.

Eran approved the PR.

Then he sat for a moment.

He thought about the Confluence page. The twelve pages of things that had lived in his head for eight months. He thought about the lessons-learned session, the but that hadn't arrived. He thought about Lior's document about Dina's Tuesday. About Tamir's infrastructure document. About Netta's how-a-signal-becomes-a-sprint.

All of them the same gesture. Knowledge extracted from the person who held it and placed somewhere the next person could find it.

He thought about the question he'd asked Gal — what do you think the right behavior should be? — and the forty minutes it had taken for the answer to arrive. The test that was better than his would have been. The comment that explained not what but why.

He thought: that forty minutes is the most valuable thing I did today. More valuable than the code I would have written in ten minutes.

He thought: I spent seven years becoming the person who knew. I am spending the rest of them becoming the person who helps others know.

He didn't have a name for the shift. It wasn't mentorship exactly — too formal, too directional. It was more like — the decision to make the knowledge communal rather than personal. To value the team's understanding over his own indispensability.

He had thought, in the hospital, that writing the document would feel like loss.

It had felt like loss, for a while.

Then it had felt like something else. Something he was still finding words for. Something in the direction of freedom.

He closed the PR review.

Opened a message to Lior.

Not about work. Just: How's the new project?

Lior's reply came in a few minutes.

Different client. Different problem. Different team. A pause, then: Same first week.

Eran looked at this for a moment.

Typed: What did you do differently?

Lior: Asked to watch someone work before we opened Jira.

Eran sat with that.

Typed: Did they let you?

Lior: After some convincing. The project lead thought it was overhead.

And?

A longer pause. Then:

We found the thing in two hours that would have cost us three months. The project lead came with me. He didn't say much. On the way back he said — I've never done that before. I thought I knew what the client needed.

Did he?

He knew what the client said they needed. That's different.

Eran read this.

Thought about the hospital. The forty-three messages. The environment variable. The moment he had understood that the knowledge was never supposed to be his alone.

Thought about the developer on the Thursday in April, fixing a problem that nobody else understood yet, feeling the clean private satisfaction of it, not writing it down.

Thought: we all start there. The question is whether we stay.

He typed: Good. Keep going.

Sent it.

Closed his laptop.

The office was quiet. The afternoon light had moved — the dust was gone, the angle wrong for it now. Through the window the city was doing its late-afternoon thing, the particular quality of a day that is almost done, the sense of everything settling toward evening.

He sat in it for a moment.

Then he picked up his bag and went home, and the knowledge was not his alone anymore, and the lights stayed on.
