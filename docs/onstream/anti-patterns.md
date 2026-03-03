# Anti-Patterns

<span class="phase-badge onstream">🟠 Onstream</span>

Operational anti-patterns are recurring behaviours that degrade reliability, burn out teams, and erode trust. They are insidious because they often feel productive in the moment — the hero saves the day, the missing runbook "didn't matter this time," the noisy alert is just "how things are."

Each anti-pattern below follows the same structure: what it is, what it costs, how to detect it, and how to fix it.

---

## Anti-Pattern 1: The Hero Operator

### Description

One person handles all incidents. They are always the first to respond, always the one who knows how to fix things, and always the one the team leans on when something breaks. They are praised for their dedication and responsiveness. They are also a single point of failure.

The Hero Operator is not a role — it is an organizational dysfunction dressed up as competence.

### Real Consequence

When the Hero Operator goes on holiday, gets sick, or burns out, the team discovers they cannot operate their own services. A P1 incident that the hero would resolve in 15 minutes takes the rest of the team 2 hours because the knowledge is locked in one person's head. If the hero leaves the company, the team is in crisis.

::: warning The Hero's Absence Is a P0
If your team cannot handle a P1 incident without a specific individual, that individual is a single point of failure. Their absence is a reliability risk equivalent to losing a production database.
:::

### Detection

| Signal | What to Look For |
|--------|-----------------|
| Incident response data | One person acknowledges > 60% of alerts over a 3-month period |
| On-call override rate | One person is regularly added to others' on-call shifts "just in case" |
| Knowledge distribution | Only one person can explain how a critical service works |
| Bus factor | The team's bus factor for any service is 1 |
| Burnout indicators | The hero works evenings and weekends, cancels personal plans for on-call |

### Fix

| Action | Detail |
|--------|--------|
| **Pair on-call** | Every on-call shift has the hero paired with another engineer. The hero mentors, the partner leads the response. |
| **Mandatory runbooks** | Every procedure the hero executes from memory must be documented in a runbook. If it is not in the runbook, it is not a procedure — it is tribal knowledge. |
| **Knowledge-sharing sessions** | Monthly sessions where the hero walks through a service's architecture, failure modes, and remediation. Recorded and stored. |
| **Rotate ownership** | Service ownership rotates every 6 months. No one owns a service forever. |
| **Shadow on-call** | New team members shadow the hero during on-call before taking shifts independently. |

::: details The Uncomfortable Truth
Teams enable the Hero Operator because it is easier than distributing knowledge. Writing runbooks takes time. Pair on-call is slower in the short term. But the hero will eventually leave, and the team will pay the deferred cost all at once — during an outage, at the worst possible time.
:::

---

## Anti-Pattern 2: The Missing Runbook

### Description

A service is deployed to production without operational documentation. No one has written down how to diagnose failures, restart the service, roll back a bad deployment, or contact the responsible team. When an incident occurs, the response starts with "let me look at the code" instead of "let me check the runbook."

### Real Consequence

During the JWT Outage, the APIM policy change had no runbook entry. The on-call engineer spent 6 minutes figuring out what the APIM service even was, which team owned it, and how to access its configuration. Those 6 minutes are directly attributable to the missing runbook. In a 44-minute outage, that is 14% of the total duration spent on orientation rather than remediation.

Over time, missing runbooks compound:
- Mean Time to Resolve (MTTR) increases because every incident starts with discovery
- On-call engineers become frustrated and burned out
- Knowledge concentrates in the people who built the service (creating Hero Operators)
- Post-mortems repeatedly cite "missing documentation" as a contributing factor

### Detection

| Signal | What to Look For |
|--------|-----------------|
| Runbook coverage | < 100% of production services have a runbook in the service catalogue |
| MTTR anomalies | Services without runbooks have 2–3x longer MTTR than services with runbooks |
| Post-mortem themes | "Documentation was missing" or "No one knew how to operate this service" appears repeatedly |
| On-call feedback | Engineers report they had to "figure things out" during incidents instead of following a procedure |

### Fix

| Action | Detail |
|--------|--------|
| **Runbook as DoD** | No service passes Release DoD without a completed runbook. Enforce at the Delivery Point. |
| **Runbook template** | Provide a standard template (see [Runbook Template](/onstream/runbook-template)) so teams know what to document. |
| **Stranger test** | Before go-live, an engineer who did not build the service attempts to follow the runbook. If they cannot, it is incomplete. |
| **Post-mortem linkage** | Every post-mortem that identifies a runbook gap produces a Jira ticket to update the runbook — with a due date. |
| **Quarterly audit** | QA or SRE reviews all runbooks quarterly. Stale runbooks are flagged. |

::: tip The Cheapest Incident Fix Is the One You Already Wrote Down
A 30-minute investment in a runbook saves hours of fumbling during an outage. The math is simple: if your service has one incident per quarter, and a runbook saves 20 minutes per incident, the runbook pays for itself in the first quarter.
:::

---

## Anti-Pattern 3: Alert Fatigue

### Description

The monitoring system fires too many alerts. Most of them are noise — thresholds that are too sensitive, alerts for non-actionable conditions, duplicate alerts for the same underlying issue. The on-call engineer receives 30–50 alerts per shift. Over time, they learn to ignore alerts. When a real P0 fires, it is lost in the noise.

### Real Consequence

Alert fatigue is the operational equivalent of the boy who cried wolf. The JWT outage alert — if it had existed — would have been one of dozens of notifications that day. Teams with alert fatigue develop coping mechanisms:

- Muting alert channels on Slack
- Setting PagerDuty to "low urgency" for everything
- Acknowledging alerts without investigating
- Creating "do not page me between midnight and 6 AM" rules

Each of these coping mechanisms is rational for the individual but catastrophic for the system. A real P0 that goes unacknowledged for 30 minutes because the engineer muted the channel is not the engineer's fault — it is the system's fault for training them to ignore alerts.

### Detection

| Signal | What to Look For |
|--------|-----------------|
| Alert volume | > 10 actionable alerts per on-call shift (24h) |
| Alert-to-incident ratio | < 10% of alerts result in an incident or action |
| Acknowledgment time trend | Acknowledgment times increasing over months (engineer fatigue) |
| Alert suppression | Engineers have created personal suppression rules or muted channels |
| Duplicate alerts | The same underlying condition fires 3+ separate alerts |

### Fix

| Action | Detail |
|--------|--------|
| **Alert audit** | Review every alert. For each: Is it actionable? Does it have a runbook? Has it fired in the last 90 days? If no to any, delete or reclassify. |
| **Symptom-based alerting** | Alert on user-facing symptoms (error rate, latency) not internal causes (CPU, memory). A CPU alert at 90% is meaningless if users are unaffected. |
| **Alert grouping** | Group related alerts so a single underlying issue produces one notification, not five. |
| **Severity calibration** | Critical alerts page. Warnings go to Slack. Info goes to the dashboard. Never page for info-level events. |
| **Weekly alert review** | In the weekly service review, review all alerts that fired. Tune or remove noisy ones. |

::: warning The 3-Strikes Rule
If an alert fires 3 times in a month without resulting in an action, it must be tuned, reclassified, or deleted. No exceptions. An alert that is consistently ignored is worse than no alert at all — it occupies attention space and trains the team to ignore their monitoring system.
:::

---

## Anti-Pattern 4: The Blame Game

### Description

When an incident occurs, the team's first instinct is to find who is at fault. "Who deployed this?" "Who approved this PR?" "Who wrote this code?" The post-mortem becomes a trial. The engineer who made the mistake is publicly identified, and the lesson learned is "don't be that person."

This behaviour does not prevent future incidents. It prevents future honesty.

### Real Consequence

In a blame culture:
- Engineers hide mistakes instead of reporting them
- Near-misses go unreported (no one wants to admit they almost caused an outage)
- Post-mortems are shallow because participants are defensive
- Root causes are identified as "human error" instead of systemic failures
- Incident detection is delayed because people fear the consequences of raising an alarm
- The team loses psychological safety, which directly reduces collaboration and innovation

The engineer who deployed the JWT policy change without staging validation made a mistake. But blaming them obscures the systemic questions: Why was it possible to deploy to production without staging? Why was there no automated gate? Why did the DoD not catch this?

### Detection

| Signal | What to Look For |
|--------|-----------------|
| Post-mortem language | "John caused the outage" instead of "The deployment pipeline allowed an unvalidated change" |
| Near-miss reporting rate | Near-zero near-miss reports (people are afraid to report) |
| Post-mortem attendance | Engineers avoid post-mortems or are visibly defensive |
| Root cause analysis | Root causes consistently identified as "human error" without systemic follow-up |
| Psychological safety survey | Low scores on "I feel safe reporting mistakes" |

### Fix

| Action | Detail |
|--------|--------|
| **Blameless post-mortems** | The facilitator enforces blameless language. Replace "John deployed the bad config" with "A configuration change was deployed without staging validation." |
| **Focus on systems** | Every root cause must answer: "What systemic condition made this mistake possible?" Human error is never the root cause — it is the trigger. The system should have prevented or caught it. |
| **Celebrate near-misses** | Publicly acknowledge and thank people who report near-misses. Near-miss reports are gifts — they reveal systemic risks before they become incidents. |
| **Just culture framework** | Distinguish between human error (blameless), at-risk behaviour (coaching), and reckless behaviour (accountability). Most incidents are human error in a system that allowed the error to reach production. |
| **Leadership modelling** | Leaders must demonstrate blameless behaviour. If a VP asks "who did this?" in a post-mortem, the entire effort is undermined. |

::: info Blameless Does Not Mean Accountable-less
Blameless post-mortems do not mean no one is accountable. They mean accountability is focused on systemic improvements: building gates, adding tests, improving runbooks — not punishing individuals. The engineer who made the mistake is often the best person to design the prevention.
:::

---

## Anti-Pattern 5: The Forgotten Post-Mortem

### Description

An incident happens. The team resolves it. Everyone is relieved. Then nothing happens. No post-mortem is written. No follow-up actions are created. No systemic improvements are made. Three months later, the same failure mode causes the same incident. The team resolves it again. Again, no post-mortem. The cycle repeats.

### Real Consequence

Without post-mortems:
- The same incidents recur — the team pays the cost of each failure repeatedly
- Institutional learning does not happen — lessons are trapped in the memories of the people who were present
- Trust erodes with stakeholders — "This happened before. Why didn't you fix it?"
- Engineering time is consumed by repetitive firefighting instead of improvement
- The error budget is consumed by preventable, repeat incidents

::: details The Cost of Repetition
Consider a P1 incident that takes 2 hours to resolve. Without a post-mortem, it recurs quarterly. That is 8 hours per year of engineering time — plus customer impact, support costs, and trust erosion.

A post-mortem takes 2 hours (1h review + 1h follow-up actions). The follow-up action (e.g., add a CI gate) takes 4 hours. Total investment: 6 hours. Return: no recurrence. The ROI is positive after the second prevented incident.
:::

### Detection

| Signal | What to Look For |
|--------|-----------------|
| Post-mortem completion rate | < 100% of P0/P1 incidents have a published post-mortem within 48 hours |
| Repeat incidents | The same service or failure mode causes incidents more than once in a quarter |
| Follow-up action completion | Post-mortem action items are not tracked or are consistently overdue |
| Knowledge base gaps | The team cannot point to a post-mortem for a major incident from the last 6 months |
| Retro themes | "We had this problem before" appears in retrospectives |

### Fix

| Action | Detail |
|--------|--------|
| **48-hour rule** | Every P0/P1 incident must have a post-mortem document published within 48 hours. The Delivery Manager is accountable for enforcement. |
| **Post-mortem template** | Use a standard template (see [Post-Mortem Template](/onstream/post-mortem-template)) so the barrier to writing is low. |
| **Follow-up actions in Jira** | Every post-mortem produces at least one Jira ticket. Tickets have owners, due dates, and are tracked in the weekly service review. |
| **Monthly post-mortem review** | In the monthly reliability review, review all post-mortems from the period. Check: Were follow-up actions completed? Did they prevent recurrence? |
| **Post-mortem culture** | Make post-mortems a team ritual, not a chore. Share them publicly. Celebrate the improvements that came from them. A good post-mortem is a learning opportunity. |

---

## Anti-Pattern Summary

| Anti-Pattern | Core Problem | One-Line Fix |
|-------------|-------------|-------------|
| The Hero Operator | Knowledge concentrated in one person | Distribute knowledge via pair on-call and mandatory runbooks |
| The Missing Runbook | No operational documentation | Runbook completion is a Release DoD gate |
| Alert Fatigue | Too many noisy alerts | Audit, tune, and delete non-actionable alerts quarterly |
| The Blame Game | Blame individuals instead of fixing systems | Enforce blameless post-mortems; focus on systemic root causes |
| The Forgotten Post-Mortem | No learning from incidents | 48-hour post-mortem rule with tracked follow-up actions |

::: tip Anti-Patterns Are Symptoms, Not Root Causes
If your team exhibits one of these anti-patterns, resist the urge to treat the symptom. Ask: what systemic condition enables this behaviour? Alert fatigue exists because no one owns alert hygiene. Missing runbooks exist because runbooks are not in the DoD. Hero operators exist because knowledge sharing is not prioritized. Fix the system, and the anti-pattern dissolves.
:::
