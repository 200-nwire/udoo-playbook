# Close the Loop

It's the end of Q3. The team has had a good quarter by every internal measure.

Three features shipped. All passed DoR and DoD. The Kanban board moved steadily. Incidents were handled with runbooks. The post-mortem for the one P1 produced three action items, all completed. The codebase is cleaner than it was three months ago.

Noa presents the quarter to leadership. The slides are solid. Features shipped, bugs fixed, uptime at 99.7%. Leadership nods.

Then someone asks: "Did retention move?"

Noa pulls up the dashboard. Week-4 retention was 9% at the start of the initiative. The target was 25%. Three features later, it's 17%. Better. Not there.

The room goes quiet. Not because 17% is bad — it's almost double where they started. But because nobody can explain why it's 17% and not 25%. Which of the three features moved the number? Was it one of them, or all three together? Is 17% the plateau, or is there another feature that would push it to 25%? Nobody knows. Because nobody measured per-feature impact. Nobody asked customers what changed for them. Nobody connected the support ticket patterns to the features that shipped.

The team built well. They shipped well. They operated well. And at the end of the quarter, they can't tell the story of what worked and what didn't — because the loop between "shipped" and "learned" was never closed.

---

This is the most common gap in product teams, and the most expensive one to leave open.

Everything the team builds creates signal. Users adopt or abandon features. Support tickets cluster around specific friction points. NPS comments name specific experiences. Retention curves bend at specific moments. Churn interviews reveal specific disappointments. Every one of these signals is evidence — evidence that should inform what gets built next.

Without a structured path from customer experience back to product discovery, the next quarter's initiative is based on the same thing as last quarter's: the PM's best guess, the stakeholder's loudest request, and the competitor's latest announcement. The team discovered well, shaped well, built well, and then threw away the evidence that would have made the next cycle better.

The loop doesn't close itself. Closing it requires practices — and a role — that most product teams don't have.

## What to Adopt

### Customer Health Scores

A health score is not a satisfaction survey. It's a quantified, regularly updated picture of how a customer or cohort is actually doing.

The components vary by product, but a starting framework looks like this:

- **Engagement.** Are users using the product? How often? Is the trend up, flat, or down?
- **Adoption.** Of the features you've shipped, which ones are actually being used? A feature that ships and isn't used is the most expensive kind of feedback.
- **Support burden.** How many support tickets is this customer generating? What are they about? A spike in tickets about one feature is a signal, not noise.
- **Sentiment.** What do they say when asked? NPS, CSAT, or just the tone of their last three interactions with your team.

Each component is scored. Green, amber, red. The composite score tells you: is this customer healthy, at risk, or already leaving? The trend tells you more than the number — a customer who was green and is now amber is a different conversation than a customer who has been amber for six months.

Health scores are reviewed weekly by whoever owns customer relationships — Customer Success if you have one, the PM if you don't. The review isn't a reporting ceremony. It's a triage: which customers need attention, and what kind?

→ [Health Score Framework](/offstream/health-score)

### The Feedback Loop

Customer Success talks to customers. Support answers tickets. Sales hears objections. The PM needs all of these signals — but getting them requires a channel, not a hope.

The feedback loop is that channel. It's a structured practice for turning raw customer signal into typed, actionable input for the product team.

A feedback signal has four components:
- **Who.** Which customer or segment. Named, not anonymous.
- **What.** What they experienced, said, or did. Specific, not summarized.
- **Signal type.** Is this a feature request, a friction report, a churn risk, a praise (yes, those matter too)?
- **Urgency.** Does this need to be in the next sprint, the next initiative, or the general backlog?

The signals are collected in a consistent format — a Jira issue type, a Notion database, whatever the team uses — and reviewed by the PM weekly. Not every signal becomes a story. Not every signal matters equally. But every signal is seen, classified, and either acted on or explicitly set aside.

The failure mode without this: CS sends a Slack message saying "a customer is upset about the balance display." The PM reads it between meetings. It's forgotten by Thursday. Three months later, 140 support tickets about the same issue have accumulated and the PM wonders why nobody told them.

Someone did tell them. The channel didn't exist to hold the signal long enough for it to become action.

→ [The Feedback Loop](/offstream/feedback-loop)

### OKR Retrospectives

At the start of the quarter, the team set a target: week-4 retention from 9% to 25%. At the end of the quarter, it's 17%. The retrospective isn't about whether the team worked hard enough. It's about whether the team learned enough.

An OKR retrospective asks four questions:

1. **What moved?** Which metric changed, by how much, and when? If the metric moved in week 6 after the second feature shipped, that feature probably caused it. If the metric didn't move after any feature, the theory might be wrong.

2. **What didn't move?** Which targets were missed? Not as a judgment — as a diagnostic. A missed target with a clear explanation ("we shipped two features instead of three because of the P1 incident") is different from a missed target with no explanation ("we shipped everything and the number didn't change"). The first is a capacity problem. The second is a strategy problem.

3. **What did we learn?** What assumptions from the Initiative Brief were validated? Which were wrong? The Assumption Register from Station 2 gets updated. The things the team believed at the start of the quarter are compared to what they know now.

4. **What changes next quarter?** Does the initiative continue? Does it pivot? Does it close? Does the primary persona need to change? Does the problem framing need to change? The retrospective produces a recommendation that feeds the next quarter's strategic conversation.

The recommendation is the most important output. Without it, the retrospective is an autopsy. With it, it's a prescription. "Continue the initiative, but the next feature should focus on the return experience specifically, because the data shows that's where the 17%-to-25% gap lives." That recommendation becomes the input to the next discovery cycle.

→ [Strategic Synthesis](/offstream/strategic-synthesis) — where the OKR retro output feeds the quarterly direction decision

### Strategic Synthesis

Once the team has health scores, a feedback loop, and OKR retrospectives, a synthesis practice becomes possible — and necessary.

Strategic synthesis is the practice of reading accumulated signals across all sources and asking one question: does our direction still make sense?

It happens quarterly, or whenever a signal is strong enough to warrant it. The PM or product lead reviews:

- **OKR retrospective output.** What did the metrics tell us?
- **Health score trends.** Are customers getting healthier or sicker?
- **Feedback loop signals.** What themes are emerging from customer contact?
- **Onstream data.** Are we spending more time on incidents? Is reliability degrading?
- **Market signals.** Did a competitor move? Did the market shift? Did a regulation change?

The synthesis produces one of two outcomes:

**Direction confirmed.** The current initiative themes (Now / Next / Later) are still correct. The next quarter continues the current direction with updated feature priorities based on what was learned.

**Direction challenged.** The signals suggest that the current direction is wrong — the primary persona is different than assumed, the problem is framed incorrectly, or the market has shifted. This triggers a strategic conversation with leadership. Not a panic — a conversation. The signals are presented, the implication is stated, and the team decides whether to continue, pivot, or stop.

The strategic synthesis is where Offstream becomes Upstream. The loop closes. What customers experience feeds what gets built next. The next Initiative Brief starts not from the PM's intuition but from evidence gathered by running the product and listening to what happened.

→ [Strategic Synthesis](/offstream/strategic-synthesis) — the full practice, template, and anti-patterns
→ [Feedback Loop](/offstream/feedback-loop)
→ [Account & Revenue Cadence](/offstream/account-cadence)

### The Direction Map

When strategic synthesis says the direction needs updating, someone needs to write down the new direction. That document is the Direction Map — the strategic anchor that everything else traces to.

It's deliberately simple. One page:

- **Who we serve.** The primary customer — not a segment, a named archetype with a specific pain.
- **What problem we exist to solve.** One sentence, diagnostic, not vague.
- **Initiative themes.** Now / Next / Later. What we're doing this quarter, what's next, and what we're explicitly not doing.
- **Success metric.** The one number that tells us whether the direction is working.
- **What we're not building.** Explicit. Named. With rationale. This section prevents the quarterly argument about why the team isn't building the thing the stakeholder keeps asking for.

The Direction Map is not updated often. It changes when strategic synthesis says it should — when the evidence is strong enough that continuing the current direction is more risky than changing it. When it does change, everything downstream is affected: initiative briefs are reviewed, feature priorities are reassessed, and stories in the backlog are checked against the new direction.

This is the document that the board cares about. Not the sprint velocity. Not the story count. "Who are we building for, what problem are we solving, and is it working?" Those three questions, answered with evidence, are the entire executive conversation.

→ [Roadmap Planning](/portfolio/roadmap)
→ [Business Goals → KPIs → Initiatives](/upstream/business-goals)

---

## Going Deeper

Once Close the Loop is working — health scores are maintained, feedback flows to the PM, OKR retros produce real recommendations, strategic synthesis happens quarterly — here's how to strengthen it:

**Better signal typing.** Move from "CS sent a message" to typed, routed signals. Each signal has a level: does this affect a story (fix in the sprint), a feature (reopen the feature brief), an initiative (reopen the initiative brief), or the direction (trigger a strategic conversation)? The level determines who acts, not who received the message. → [Feedback Loop](/offstream/feedback-loop)

**Better customer lifecycle management.** Move from reactive CS to proactive lifecycle management. Onboarding health checks at week 1, engagement reviews at month 1, QBRs at quarter-end, renewal conversations before the renewal date. Each touchpoint produces signal. Each signal enters the loop. → [Customer Lifecycle Model](/offstream/customer-lifecycle)

**Better portfolio visibility.** When the team manages multiple initiatives — or the company manages multiple products — the Direction Map, initiative briefs, and health scores become portfolio-level instruments. Which initiatives are on track? Which need intervention? Where is the team's capacity going, and is that aligned with the direction? → [Portfolio Overview](/portfolio/) · [Cross-team Dependencies](/portfolio/dependencies)

---

## The Whole Path

The growth path is not five separate things. It is one practice, developed progressively:

**Ship Clean** taught the team to start and finish stories with discipline. The DoR gate, the grooming session, the DoD, and WIP limits created predictability.

**Shape Before You Build** taught the team to see the whole feature before building the parts. Journey maps, story maps, and The Cut created coherence.

**Discover Before You Shape** taught the team to validate the problem before committing to features. The discovery workshop, the Initiative Brief, and reopen triggers created strategic alignment.

**Own What You Ship** taught the team to operate what they build. Runbooks, SLOs, incident playbooks, and post-mortems created reliability.

**Close the Loop** taught the team to learn from what they ship. Health scores, feedback loops, OKR retros, and strategic synthesis created continuous improvement.

Each step solved a real pain. Each pain was revealed by the previous step working. The team didn't adopt Close the Loop because the playbook said to — they adopted it because three quarters of good shipping with no learning made the gap undeniable.

That's how frameworks actually work. Not by compliance. By solving the next problem that the previous solution made visible.

The [manifesto](/guide/manifesto) said it: *"You don't need to adopt everything at once. You need to adopt the thing that addresses your worst current pain, and hold to it until it becomes habit. Then the next thing. And the next."*

This is the path. Start where it hurts. Go from there.
