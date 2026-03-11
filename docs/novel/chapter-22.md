# Chapter 22 — Tamir

He was in the server room.

Not because he needed to be — the servers were in a data center three hundred kilometers away and the room that had once housed servers now housed Tamir's second desk, his testing equipment, and a coffee machine that was better than the one in the kitchen. He was there because it was quiet and the door had a lock and the combination of these two things made it the only place in the office where he could think without interruption.

Lior knocked anyway.

Tamir opened the door with the expression of someone who has learned to accept interruptions without showing what they cost.

He was forty-four. Had been in infrastructure for eighteen years. Had the specific quality of someone who has spent a career making things that work invisibly and has developed, as a result, a complicated relationship with visibility — understanding its value intellectually, finding it uncomfortable personally, having built a professional identity around the idea that good infrastructure is infrastructure nobody notices.

"Lior," he said.

"Can I come in?"

He stepped back. Lior entered.

The desk was covered in terminal windows. Six monitors — Lior counted — each one showing something different: server metrics, deployment logs, a monitoring dashboard with lines that moved in real time, a Slack window that Tamir appeared to have muted based on the notification count that had reached triple digits without being cleared.

"The deployment pipeline," Lior said. "I want to understand what we have."

Tamir looked at him for a moment with the evaluating attention of someone deciding how much honesty the situation warranted.

"What do you know?" he said.

"We deploy from main. Staging environment. Then production. Manual trigger on the production deploy."

"Yes."

"How long does a production deploy take?"

"Twelve minutes. When it works."

"When it doesn't?"

Tamir pulled up a log. "Last month. Four incidents. Two were my fault — configuration changes I didn't test properly. One was a dependency update that broke in production but not staging because staging doesn't mirror production accurately enough. One was the data migration." He paused. "The one you were on the call for."

"Yes," Lior said. "I remember."

"That one took four hours to resolve. Two hours of which were figuring out what had happened. I had no runbook for that migration scenario."

"I know," Lior said. "I wrote the runbook afterward."

"I read it." Tamir looked at him. "It was good. It would have saved an hour."

A beat.

"The staging environment," Lior said. "You said it doesn't mirror production accurately."

"It mirrors it at the infrastructure level. Not the data level. Staging has synthetic data — clean, simple, none of the edge cases that live in production. So bugs that depend on real data patterns —"

"Don't appear in staging."

"Correct."

"Can we fix that?"

"We can anonymize production data and use it in staging. I've wanted to do that for six months. It requires about three days of work and the decision of someone who can say yes to using customer data even in anonymized form."

"Avi can say that."

"I know. I didn't want to bother him."

The sentence sat in the room with a specific weight.

Lior thought about Eran. The hospital bed. The knowledge that was never shared because sharing it hadn't seemed urgent until the moment it was critical.

"Tamir," he said. "What else haven't you bothered anyone with?"

Tamir looked at him for a long moment.

Then he sat down. Pulled up a document that had been minimized — Lior could see from the title bar that it was called Infrastructure Concerns — Kelev Project. The document was long.

"This," Tamir said.

They spent two hours in the server room.

The document was organized by category. Not by urgency — Tamir had the infrastructure engineer's tendency to treat everything as a matter of engineering correctness rather than business priority, which meant a performance optimization that would shave two hundred milliseconds off a page load was listed beside a single point of failure in the payment service that had the potential to take down billing for all pilot clinics simultaneously.

Lior read it with the focused attention of someone discovering a map of a territory they'd been navigating without one.

The payment service single point of failure. He flagged it.

The staging environment data gap. Flagged.

The deployment pipeline — no automated rollback. If a deployment broke production, the recovery was manual, requiring Tamir specifically, with no documented procedure anyone else could follow.

"This is why you were always on call," Lior said.

"Yes."

"You're the only person who can do this."

"Currently."

"How long have you been on call?"

Tamir looked at the ceiling. "Eighteen months. The whole project."

"Every incident."

"Every incident."

"At what hours?"

A silence that was its own answer.

Lior thought about what Eran had said in the corridor outside the lessons-learned session. Single points of failure should be identified and mitigated. The bullet point on the clean slide. The abstraction that had stood in for the specific human being who had been on call for eighteen months, alone, without a runbook, without a rotation, without anyone asking what it cost.

"We need to talk about SLOs," Lior said.

Tamir looked at him. "Does the team know what an SLO is?"

"Some of them. Tell me what you think it means here."

"Service Level Objective." Tamir said it with the care of someone who has had to define terms before. "The target reliability we're committing to. Not the SLA — the SLA is what we promise the client, which is probably in a contract somewhere written by a salesperson who didn't consult me. The SLO is what the engineering team actually commits to internally. The gap between them is where the operational stress lives."

"What's in the contract with Vetcare?"

"Ninety-nine point five percent uptime. Twenty-four seven."

"And what's our actual uptime been?"

Tamir pulled up the monitoring dashboard. A number: ninety-seven point eight.

"That's below the SLA," Lior said.

"Yes."

"For how long?"

"The last three months."

"Does Avi know?"

The silence was its own answer.

"Tamir." Lior said it carefully. "This is not a criticism. I want to understand — why didn't you escalate this?"

Tamir looked at his monitors. The lines moving in real time, the system breathing, the numbers that he watched every day and understood in a way nobody else in the company did.

"Because I thought I could fix it," he said. "Each incident — I thought it was the last one. I fixed the cause. The numbers improved. Then the next one came." He paused. "And because every time I tried to raise infrastructure concerns in team meetings, the conversation moved on. There were features to ship. There were client deadlines. The infrastructure stuff felt like my problem to solve." He looked at Lior. "I thought that was my job. To solve it invisibly."

Lior thought: this is Eran's story. Different domain, same structure. The person who kept the knowledge, who carried the weight, who confused indispensability with competence.

"What would you need," he said, "to sleep through a night without worrying about this system?"

Tamir blinked.

The question had caught him somewhere unprotected.

"Automated rollback," he said, after a moment. "Staging that mirrors production. Feature flags so we're not deploying everything at once. An on-call rotation with a runbook that someone other than me can follow." He paused. "And an honest conversation with Avi about what ninety-nine point five percent actually requires and whether we're willing to invest in it."

"How long to build the automated rollback?"

"Four days."

"The staging mirror?"

"Three days, once we have Avi's sign-off on the data."

"Feature flags?"

"Two days for a basic implementation. More for something robust."

"So nine days of infrastructure work and one honest conversation would change this fundamentally."

"Yes."

"Why hasn't it happened?"

Tamir looked at him.

"Nobody asked," he said.
