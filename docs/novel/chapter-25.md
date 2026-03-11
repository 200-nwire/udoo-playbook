# Chapter 25 — The SLO Conversation

Avi arrived at the meeting with the expression of someone who has been told there is a difficult conversation ahead and has decided to be present for it rather than managed through it.

Tamir had sent him the incident log from the three AM event. Not because he was required to — there was no protocol for this yet, which was itself part of the conversation — but because Lior had suggested it and it had felt, once suggested, like the obvious thing to do. The founder should know when his system woke his infrastructure engineer at three in the morning. The founder should know the difference between the system is running and the system is running because someone is watching it at all hours.

The meeting was in the small room. Lior, Tamar, Tamir, Shira. Avi across the table.

Tamir had prepared a document. One page. He had written it three times, each version slightly less technical than the last, until it was readable by a founder rather than an infrastructure engineer without losing any of the precision that made it true.

He put it on the table.

Kelev Infrastructure: What we have, what we promised, and the gap between them.

Avi read it.

He read it the way he read things — fully, without performing the reading, the room quiet while he went through it. Nobody spoke. Tamir had the specific tension of someone who has been carrying information for a long time and is finally setting it down in front of the person who needed to see it, and doesn't yet know whether the setting-down will be received as useful or as accusation.

Avi put the document down.

Ninety-seven point eight, he said.

Yes, Tamir said.

The contract says ninety-nine point five.

Yes.

For how long?

Three months.

Avi looked at the document. Then at Tamir.

Why am I hearing this now?

The question was quiet. Not angry — Lior had noticed that Avi's version of anger was quietness, the withdrawal of warmth rather than the escalation of heat.

Tamir looked at the table for a moment.

Because I thought I could fix it, he said. Each incident I thought was the last one. And because — He stopped. Because I didn't know if you wanted to know. The infrastructure concerns felt like my job to manage.

They are your job to manage, Avi said. They're also my job to resource. Those are different things.

A silence.

Yes, Tamir said. I understand that now.

Avi looked at Lior.

Did you know?

I knew some of it, Lior said. Not the SLA breach. Not the specific numbers. I knew about the single points of failure and the staging gap. I've been working with Tamir on the runbook and the infrastructure document for the last three weeks.

Why didn't it come to me sooner?

Lior looked at him.

Because we were fixing it, he said. And because — honestly — there was no established path for infrastructure concerns to reach you. Tamir was filing them in a document nobody was reading. The team meetings were focused on product delivery. There was no forum where this was supposed to land.

Avi looked at the document again.

What do we need, he said, to actually meet ninety-nine point five?

Tamir turned the page. The second half of the document. He had prepared this too — the investment required, the timeline, the work already completed versus the work remaining.

Automated rollback, he said. Done — Lior and I finished it last week. Staging environment with production data mirror — needs your sign-off on the data anonymization, then three days of work. Feature flags for controlled releases — deployed, Lior's been using them for two sprints. On-call rotation — this is the human problem, not the technical one. I cannot be the only person who knows how to respond to a three AM alert.

Who else needs to know?

Oren, for the application layer. Lior, for the product context. And we need a second infrastructure person — not full-time necessarily, but someone with enough context to follow the runbook.

Budget, Avi said.

Tamir looked at him.

What does ninety-seven point eight cost us with Vetcare?

Avi thought about Carmit. The way she had almost smiled. The forty-two clinics. The three-year contract.

I don't know yet, he said. But if Carmit's team runs an audit before the full rollout — which they will, I know how she operates — and finds a three-month SLA breach, we have a conversation I don't want to have.

The alternative, Tamir said carefully, is that we tell them now. Before they find it. With the remediation plan in place.

The room was very quiet.

That's the kind of conversation that either builds enormous trust or ends the relationship, Avi said.

Yes, Tamir said.

Avi looked at the document.

At the incident log from three AM.

At the eleven minutes.

Send Carmit the incident log, he said. And the remediation plan. And an honest summary of where we are. He paused. I'll write the covering note.

Tamir looked at him.

You're sure?

No, Avi said. But I've learned that the honest conversation you don't want to have is almost always better than the one that gets forced on you later. He picked up the document. And this — He held it. This is the most honest thing anyone on this project has put in front of me. That matters.

He stood.

Tamir. He said it the way he said Lior's name sometimes — with a specific weight, the weight of someone who has just recalibrated their understanding of a person. How long have you been on call?

Eighteen months, Tamir said.

Avi was quiet for a moment.

We'll fix the rotation this week, he said. Not next sprint. This week.

He left.

The room exhaled.

Tamir looked at the document in front of him. The one page that had taken him three rewrites and six months of accumulation to produce.

He thought about the mental list. The weight of unshared knowledge.

He thought: it takes eleven minutes to resolve an incident when you have a runbook. How long does it take to prevent one when you tell the truth early?

He didn't know yet.

But he thought the number was probably much smaller than he'd assumed.
