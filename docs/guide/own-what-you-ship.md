# Own What You Ship

It's a Thursday night. Roee is on call. He's been on the team for four months and this is his second rotation.

At 11:47pm, an alert fires. The return screen is throwing 500 errors. Users who open the app see a blank white screen instead of their reflection count.

Roee opens the monitoring dashboard. He can see the error rate spike. He can see it started twelve minutes ago. What he can't see is: what changed? Was there a deployment? Is this a database issue? Is this one service or three? Who built this feature? What's the expected behavior when the count service is down — should it show a cached value, a fallback message, or is blank-screen-on-failure actually a bug?

There is no runbook. There is no incident playbook. There is no documentation of what this service does, what its dependencies are, or what the degradation path should look like.

Roee spends forty minutes reading code, checking deployment logs, and messaging Oren (the tech lead) at midnight. Oren responds at 12:20am. The issue turns out to be a database connection pool exhaustion caused by a query that wasn't optimized when the user base grew. The fix is a config change. Total downtime: 53 minutes. Time to understand what was happening: 40 of those 53 minutes.

The next morning, the team talks about it in standup. Someone says "we should write a runbook." Someone else says "we should have a post-mortem." Both are correct. Neither happens, because the sprint is already full and "we'll do it next week" means never.

---

This is not a Roee problem. It is a handoff problem.

The feature was built well. It passed DoR, DoD, code review, QA. It shipped. And then it was abandoned — not deliberately, but structurally. There was no gate between "shipped" and "running in production." No one was responsible for ensuring that what the team built could be operated by someone who didn't build it.

Downstream hands the feature to production. But production is not a person — it's a state. Without Onstream practices, that state is unmanaged. The feature runs until it breaks, and when it breaks, someone scrambles.

## What to Adopt

### The Release Gate

Between "the story is done" and "the feature is live in production," add a gate. A checklist that the tech lead runs before anything goes to production:

- **Monitoring configured.** Dashboards exist for this service. Error rate, latency, and key business metrics are visible. Alerts fire when thresholds are breached.
- **Runbook written.** A document that answers: what does this service do, what are its dependencies, what does healthy look like, what does degraded look like, and what are the first three things to try when it breaks.
- **Rollback plan confirmed.** If this deployment goes wrong, how do you undo it? Feature flag? Revert? Database migration rollback? The plan exists before the deploy, not during the incident.
- **On-call team briefed.** The person who might be woken up at midnight knows what changed and what to look for. A five-minute conversation or a Slack message with the deployment notes is enough. No briefing means no deploy.

This gate doesn't add weeks of work. It adds hours — and it saves the 40 minutes of "what is this service and why is it broken?" that Roee spent at midnight. The runbook takes 30 minutes to write when the developer still has context. It takes 40 minutes to reverse-engineer at midnight when they don't.

→ [Definition of Done](/downstream/definition-of-done) — includes production readiness items

### SLA & SLO Framework

Roee's team said "the service should be reliable" in three consecutive retros. Nothing changed — because "reliable" isn't a target, it's a wish. Nobody could say when the wish was being met and when it wasn't.

Then they wrote a number: the return screen loads in under 2 seconds for 99.5% of requests, measured weekly. That number changed everything. The Monday after they set it, Roee checked the dashboard and saw 98.7%. Not a feeling — a fact. The team could decide: do we fix this now, or accept the degradation this week? That's a real decision with real data, not a debate about whether "it seems slow sometimes."

Start simple. Pick the three most critical user actions — the ones that, if broken, mean the product is broken. Write a number for each. Set up alerts. Review weekly. That's enough. The number is the SLO. The conversation it enables is the point.

→ [SLA & SLO Framework](/onstream/sla-slo)

### Incident Management

Not every problem is an incident. A slow query is a bug. A 500 error that affects one user is a bug. The return screen being down for all users at midnight is an incident.

The classification matters because incidents need a different response than bugs. An incident has severity (P0 through P3), a timeline (when did it start, when was it detected, when was it resolved), an owner (who is driving the response right now), and a communication plan (who needs to know, and what do they need to know).

P0: full outage, all users affected. Drop everything.
P1: major degradation, significant users affected. Immediate response during business hours.
P2: partial degradation, limited users affected. Addressed within the business day.
P3: minor issue, workaround available. Addressed in the next sprint.

The severity determines the response, not the other way around. A team without severity classification treats every alert the same — either everything is an emergency (burnout) or nothing is (neglect). Severity gives the team permission to say: "This is a P3. It goes in the backlog. We're not waking anyone up."

→ [Incident Management](/onstream/incident-management) — the P0–P3 playbook

### Runbooks

A runbook is the difference between "Roee figured it out in 40 minutes at midnight" and "Roee followed the runbook and fixed it in 8 minutes."

A runbook for a service answers five questions:
1. **What does this service do?** One paragraph. What data it serves, who uses it, why it matters.
2. **What are its dependencies?** Database, cache, third-party APIs, other services. If one of these is down, this service is affected.
3. **What does healthy look like?** The dashboard link, the SLO targets, the normal traffic pattern.
4. **What does degraded look like?** The common failure modes — connection pool exhaustion, slow queries, upstream timeout. What the alert looks like for each.
5. **What do I do?** The first three actions for each common failure mode. Not a complete troubleshooting guide — just enough to get from alert to either "fixed" or "escalated" without reading code at midnight.

The developer who builds the feature writes the runbook. Not later. Not "when we have time." Before the release gate. When they still have context. When the knowledge is in their head and costs 30 minutes to externalize rather than 40 minutes to reconstruct.

→ [On-Call Runbook Template](/onstream/runbook-template)

### Bug Taxonomy

Three weeks after the connection pool fix, a different bug appears. A visual glitch — the reflection count shows "NaN" for users who haven't written an entry yet. One user reports it. The PM says "fix it this sprint." The same week, a CSM mentions that three enterprise accounts are seeing stale balance data — amounts that don't update after transactions. Nobody escalates it because the visual glitch got all the attention.

Without a classification system, bugs compete for attention based on who yells loudest. The NaN glitch is visible and embarrassing but affects a small edge case. The stale balance data is invisible and affects revenue-critical accounts. A taxonomy gives bugs structure: severity (how bad), scope (how many users), data risk (is data being lost or corrupted), reproducibility (always, sometimes, once). The taxonomy determines priority — a consistent rubric the team agrees on before the bugs arrive, not after.

→ [Bug Taxonomy](/onstream/bug-taxonomy)

### Blameless Post-Mortems

After an incident — any incident P2 or above — the team writes a post-mortem. Not a blame document. Not a "who did this" exercise. A structured learning document that answers: what happened, what was the timeline, what was the root cause, what actions will prevent recurrence, and who owns those actions.

The word "blameless" is deliberate and non-negotiable. An engineer who knows their name will appear in a blame narrative will hide information, delay escalation, and avoid taking responsibility for fixes. An engineer who knows the post-mortem will focus on systems, not people, will contribute honestly — including the uncomfortable detail that makes the root cause clear.

The post-mortem template has five sections: summary, timeline, root cause analysis, action items with owners and due dates, and lessons learned. The action items are the part that matters most — without them, the post-mortem is a report that nobody reads. With them, it's a commitment that prevents the same incident from happening again.

→ [Post-Mortem Template](/onstream/post-mortem-template)
→ [RCA Template](/onstream/rca-template) — structured root cause analysis for complex bugs

---

## Going Deeper

Once Own What You Ship is working — services have runbooks, incidents have playbooks, bugs have taxonomy, post-mortems produce real action items — here's how to mature:

**Better on-call.** Move from "whoever is available" to a formal rotation with explicit handoff. The on-call engineer reviews open alerts at the start of their shift, knows what deployed this week, and has a clear escalation path. Nobody is on-call for more than one week in three. → [Incident Management](/onstream/incident-management)

**Better SLO culture.** Move from "we set SLOs" to "SLOs drive decisions." When the error budget is spent — when the SLO has been breached enough times this quarter — the team shifts from feature work to reliability work. That's not a punishment. That's the signal that the product is degrading faster than the team is building. → [SLA & SLO Framework](/onstream/sla-slo)

**Better RCA practice.** Move from "we write post-mortems" to "post-mortem actions are tracked to completion." An action item that says "add connection pool monitoring" with no owner and no due date will never happen. An action item that says "Roee adds connection pool alert to Datadog by March 15" will happen because it's specific, owned, and dated. → [RCA Template](/onstream/rca-template)

---

## What You'll Notice Next

Own What You Ship solves the production chaos problem. The team doesn't just build and forget — they build, ship, and operate. Incidents are handled with playbooks. Bugs are classified and triaged. The on-call engineer has a runbook. Post-mortems produce real fixes.

But after two quarters of good operations, the team starts to notice a quieter problem. Production is stable. Features are running. But nobody is asking: is any of this working for the customer?

The success metric from the Initiative Brief said "week-4 retention from 9% to 25%." The features shipped. The metric is now 17%. Is that good enough? Is the initiative working? Should the team keep building on this initiative or pivot? Nobody is checking. Customer feedback reaches the PM as random Slack messages from Customer Success. Support ticket patterns are invisible. The NPS score is a number someone mentions in a quarterly meeting but never acts on.

The team builds the right thing, builds it right, and keeps it running. But the loop doesn't close. What customers experience after the feature ships never feeds back into what gets built next.

→ [Close the Loop](/guide/close-the-loop) — the next step
