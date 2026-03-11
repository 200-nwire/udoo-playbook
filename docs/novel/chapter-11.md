# Chapter 11 — The Shape of Debt

Shira arrived on a Wednesday.

Not dramatically. Not with an announcement. She appeared in the team Slack — Hey everyone, I'm Shira, joining the Kelev project for QA — and then, twenty minutes later, in the project Confluence, where she spent four hours reading every document that existed before asking a single question.

Michal had hired her. Had described the role as QA lead for the pilot phase, which was the kind of description that contained a hiring manager's hopes rather than a job's reality, but Shira had done this long enough to read hiring descriptions the way archaeologists read strata — not for what they said but for what they revealed about the conditions that produced them.

What this description revealed: the project had reached a state where someone had decided that testing needed dedicated attention, which meant either that the testing had been inadequate or that the complexity had grown beyond what developers could test alongside building, or — most likely, in her experience — both simultaneously.

She read the Confluence documents. The initiative brief, which was thorough and had Avi's fingerprints on it — the wireframes, the persona, the problem statement. The sprint board history, which she accessed through Jira's reporting and which told a story the current board didn't: twenty-six points last sprint, twenty-two the sprint before, and if you looked at the created dates on the bugs currently in the backlog, most of them had been created in the last three weeks, which meant the velocity number was not a velocity number but a movement number — things had moved across the board, but bugs were accumulating faster than they were being resolved, which was a specific shape of debt that looked like progress from the front and like a wall approaching from behind.

She opened the bug backlog. Sorted by created date.

Forty-one bugs. Thirty-one created in the last three weeks. She read through them with the focused attention of someone reading a medical chart — not for individual symptoms but for the pattern, the thing the individual symptoms were expressions of.

Eleven of them were variations of the same root cause: the appointment data model made assumptions about clinic configuration that weren't true for all clinics. Single timezone. Single vet. Fixed appointment duration. The model had been built for a simple case and the simple case was not the real case, and every bug that touched appointments was a tributary of this same river.

She opened a new document. Wrote at the top: Technical Debt Register — Kelev Project.

Below it, not a list of bugs but a taxonomy. Not what is broken but why is it broken and what else will break for the same reason and what is the cost of fixing it now versus fixing it after the pilot scales to forty-two clinics.

This last question was the one nobody had asked yet. She could tell because the answer, if anyone had asked it, would have produced a different set of architectural decisions than the ones currently in the codebase.

She opened a message to Lior.

Hey — I've been reading through the project. I want to talk about the appointment data model before I start writing test cases. When's a good time?

Lior read the message and felt something he couldn't immediately classify.

Not anxiety, exactly. More like the feeling of a structural engineer who has been handed a building's plans and asked to certify it for occupancy, and has found something in the foundation that everyone else has been walking past for months.

He called her.

She walked him through the debt register. Methodically, without drama, the way someone describes a problem they've had time to understand and have decided to present as information rather than accusation.

He listened. Asked questions. She answered them with the specificity of someone who had read the code, not just the tickets.

"How long have you been here?" he said, at some point.

"Four hours."

He was quiet.

"The timezone assumption," he said. "That was week three. We were moving fast and we made a decision to scope to single-timezone for the MVP and document it as a known limitation and come back to it."

"Where's the documentation?"

A pause.

"There was a conversation in Slack," he said.

She waited.

"I know," he said.

"It's not a blame question," she said. "I need to understand what was decided consciously versus what accumulated. Because the fix is different depending on the answer. If it was a deliberate scope decision, we need to implement it properly now before the pilot scales. If it accumulated —" She stopped. "If it accumulated, we need to understand what other assumptions accumulated alongside it."

"How do you tell the difference?"

"I read the git history," she said. "The commit messages. The PR descriptions. The code itself, in the order it was written. Technical debt has a signature — deliberate decisions look different from accumulated ones. Deliberate debt has a shape. It's contained, it's usually in one place, the code around it acknowledges it. Accumulated debt is distributed. It's in the assumptions underlying the assumptions. You find it by looking at what the code takes for granted."

Lior thought about this.

"And?"

"Mostly accumulated," she said. "Which means it's in more places than you think."

A silence that had a specific quality — not comfortable, not hostile, the silence of two people looking at the same thing and understanding it in real time.

"What do we do?" he said.

"We map it. Before we write a single new feature. We spend two days — you, me, Oren — reading the codebase together and building a map of every assumption that isn't documented. Then we take the map to Michal and Avi and we make explicit decisions about what we fix now and what we carry as known risk into the pilot."

"Michal will want to keep the sprint running."

"Probably," Shira said. "But Michal isn't the one who will be in a clinic at eleven pm when the multi-timezone bug surfaces in front of a forty-two-clinic enterprise client." A beat. "I've been in that situation. It's a different conversation."

Lior thought about Eran. The hospital bed. The forty-three messages. Designing for after the breaking.

"I'll talk to Michal," he said.

"One more thing," Shira said. "The test coverage."

"How bad?"

"Forty-one percent on the core domain. Better on the API layer. Nothing on the integration points."

"We wrote tests."

"You wrote tests for what the code does. Not for what the product needs to do." She paused, choosing the next words carefully. "There's a difference between a test that verifies a function returns the right value and a test that verifies a vet can open the app on Tuesday morning and see what she needs to see. You have the first kind. You don't have the second."

Lior was quiet for a long moment.

"How do you write the second kind?" he said.

"You start," she said, "by knowing what Dina needs to see on Tuesday morning."

He thought about the document. What Dina's Tuesday actually needs. The hours he'd spent writing it. The way it had felt like finally seeing clearly.

"I have that," he said.

"I know," she said. "I read it. It's why I asked to join the call."
