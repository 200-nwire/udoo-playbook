# Chapter One — Tuesday

The IV drip counted seconds.

Eran had been watching it for two days now, the slow hypnotic fall of each drop, and he had developed a theory that time in hospitals moved differently — not slower exactly, but with more texture, each minute separable from the last, the way you can hear individual raindrops only when you're inside and dry.

His phone was on the bedside table. He hadn't touched it since yesterday afternoon, when he'd made the mistake of opening Slack and reading fourteen messages in a row without being able to do anything about any of them, which was a specific kind of suffering he hadn't anticipated when the doctor had used the word rest with the tone that meant or else.

He touched it now.

The screen lit up. Forty-one notifications. The number itself was information — not about what had gone wrong, but about the shape of the wrongness. Fourteen messages meant a question. Forty-one meant nobody had found the answer.

He opened #strato-prod.

Read it once, quickly, the way you look at a wound before you let yourself feel it.

Then he put the phone face-down and looked at the ceiling and thought about the environment variable.

PAYMENT_TIMEOUT_MS. He had added it in April, on a Thursday evening, after a forty-minute conversation with the payment gateway's support team in which he had learned that their sandbox and production environments had different timeout behaviors and that if you didn't account for this you would get intermittent failures under load that looked like frontend errors but weren't. He had fixed it. He had set the value to 8000 in production and 3000 in staging and it had worked and he had moved on.

He had not written it down because at the time it had felt like the kind of thing that didn't need writing down. The kind of thing that lived, naturally, in the head of the person who'd found it.

That person was currently unavailable.

He picked up the phone again.

Yossi 09:48
anyone know what PAYMENT_TIMEOUT_MS is supposed to be set to in prod

Below it, nothing. A three-minute gap that felt, reading it now, like a held breath.

Then:

Yossi 09:51
going with 3000, same as staging

Eran closed his eyes.

No, he thought, with the calm clarity of a man who cannot do anything. No no no no no.

He typed: Yossi wait —

And then stopped. Because Yossi had sent that message seventeen minutes ago. And the next message in the channel, from two minutes after that, was from Dani, and it said only:

it's down

Three floors above a city that was going about its Tuesday, in an office that smelled of takeaway coffee and the particular tension of people trying to appear composed, Dani was on a call.

He was good at calls. This was known about him — that he could hold a difficult conversation with a quality of stillness that clients found reassuring, that he never raised his voice, that he always had the spreadsheet open and the numbers ready, and that he communicated in the clean declarative sentences of someone who believed that clarity of presentation was the same thing as clarity of situation.

"I understand your concern," he said. "I want to be transparent with you. We're experiencing a temporary environment issue. Our team is on it."

On his second monitor, the Slack channel scrolled.

Yossi 10:09
I rolled back but the rollback is also not working

Roni 10:11
which version did you roll back to

Yossi 10:12
the last one

Roni 10:12
which is

Yossi 10:13
I don't know it was just the previous one in the list

Dani kept his face neutral. Seventeen years in client services had given him a face that could be neutral about almost anything.

"David," he said, "I want to reassure you that this is not indicative of —"

"Dani." The client's voice was not unkind. It was something worse than unkind. It was tired. "It's been down for twenty minutes. This is the third time this month. I have a board meeting on Thursday and I promised them a live demo."

"I understand."

"Do you?" A pause. Not hostile. Just a man on the other end of a call, looking at something Dani couldn't see, deciding something Dani couldn't influence. "Because I've been patient. I've been more than patient. But patient has a shape, and I'm starting to see the edges of it."

Dani looked at the spreadsheet. Eighty-three percent. The number sat there, precise and useless, like a compass on the moon.

"Give me until end of day," he said.

Another pause. Then: "End of day, Dani."

The call ended. Dani sat for a moment in the silence of a man who has just made a promise he doesn't know how to keep, to a person who doesn't deserve to be disappointed, about a system he doesn't entirely understand.

He opened a new message to Eran.

Typed: Eran I know you're sick and I'm sorry but I need —

Deleted it.

Typed: Is there anyone else who knows the —

Deleted it.

Stared at the screen.

Outside his window, pigeons were doing whatever pigeons do. The city continued its Tuesday with magnificent indifference.

He typed: Eran, when you have a moment.

Sent it. Hated himself slightly. Opened the spreadsheet again.

Eighty-three percent.

In another city, in a kitchen, Lior was making his second coffee of the morning and thinking about the word meaningful.

He had been thinking about it for three weeks, in the unfocused way you think about a word when it keeps appearing in conversations and you can't quite locate what's wrong with it. His manager had used it in their last one-on-one. We want your work to feel meaningful, Lior. His girlfriend had used it the week before, about something else entirely, but the word had lodged itself anyway.

He took his coffee to the desk. Opened the laptop. Jira loaded with the particular eagerness of software that doesn't know it's about to disappoint someone.

The board was as he had left it. His name on four tickets in the To Do column. He read them in order, as he had read them every morning for three weeks, looking for something he hadn't found yet.

Implement user dashboard.

He clicked it. The description said: User should be able to see their data. There was a comment from himself, from two weeks ago: Which data specifically? All fields or a subset? Below it, nothing. The comment sat there like a question written on water.

Add notification system.

This one had a Figma link. He clicked it. The Figma file had been last updated six weeks ago, before the project had pivoted — he knew it had pivoted because he'd been on the call where it happened — and the screens showed a product that bore only an ancestral resemblance to what they were currently building.

Integrate with external API.

No documentation. A link to the API provider's website. He had spent two days reading the API docs before realizing he didn't know which endpoints they actually needed, which depended on what the product actually did, which depended on conversations he hadn't been part of.

He closed Jira.

Opened it again, in case it had changed.

It hadn't.

He picked up his coffee. Through the window, the street was wet from last night's rain, and a woman was walking a very small dog that was investigating a drain cover with the focused intensity of an inspector who has found something significant.

Lior watched them for a while.

He thought: I am being paid to build something. I don't know what it is. I don't know if it matters. I don't know if anyone will use it.

He thought: I have asked. I have waited. I have read the tickets and attended the calls and moved the cards across the board.

He thought, carefully, the way you think something you're not quite ready to say out loud: I don't think it's going to get better.

His phone buzzed. A message from his friend Amit, who worked at a product company in Tel Aviv and had been trying to recruit him for four months.

Still thinking about it?

Lior looked at the message for a long time.

Then he looked at the Jira board.

Then he typed: Yes.

The drip counted seconds.

Eran read the channel in reverse, the way you read a story when you already know the ending — looking not for what happened but for the exact moment it became inevitable.

There. 09:51. Going with 3000, same as staging.

He thought about the Thursday in April. The forty-minute call with the payment gateway support team. The specific configuration of knowledge that had led him, alone, at 7pm, to the number 8000. The way he had felt, solving it — that clean private satisfaction of understanding something that had been opaque, of finding the shape of a hidden thing.

He had not written it down because writing it down had felt, in that moment, like an administrative task, a small bureaucratic interruption between the solving and the moving-on. And because somewhere, underneath the administrative feeling, was something else. Something he didn't want to look at directly.

He looked at it now.

He had not written it down because some part of him had liked being the person who knew.

The drip fell. The city continued its Tuesday. Somewhere, production was down, and Yossi was trying things, and Dani had made a promise, and Lior was typing yes to a recruiter, and a client who had trusted them was sitting with his hand on a phone he hadn't picked up yet, looking at the edges of his patience and deciding whether he'd reached them.

Eran typed: PAYMENT_TIMEOUT_MS should be 8000 in prod. 3000 will cause failures under load. I should have documented this. I'm sorry.

He sent it.

Watched the channel.

Watched the drip.

Thought: I should have documented this was not the whole truth. The whole truth was larger and less comfortable and had something to do with the word knowing and what it means to carry knowledge that no one else has, and whether that is a form of competence or a form of fear dressed up as competence.

He wasn't ready to think that thought all the way to the end.

Not yet.
