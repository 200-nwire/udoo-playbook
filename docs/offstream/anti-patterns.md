# Anti-Patterns

<span class="phase-badge offstream">🟣 Offstream</span>

Offstream anti-patterns are behaviours and organisational dysfunctions that silently erode customer relationships, block the feedback loop, and turn revenue into churn. They are dangerous precisely because they are invisible — you do not see the customer who left because no one was watching, the signal that never reached product, or the renewal that was lost three months before anyone noticed.

Each anti-pattern below follows the same structure: what it is, what it costs, how to detect it, and how to fix it.

---

## Anti-Pattern 1: The Reactive CS

### Description

The Customer Success team only engages with customers when the customer reaches out — a support ticket, a complaint, a cancellation threat. There is no proactive monitoring, no health scoring, no scheduled outreach. The CSM's calendar is empty until something goes wrong.

This feels efficient — "If they don't need us, why bother them?" — but it means the team only sees problems when they are already severe. By the time a customer complains, they have been frustrated for weeks or months. By the time they threaten cancellation, they have already evaluated alternatives.

### Real Consequence

An account with declining usage over 90 days sends no complaints. No support tickets. No angry emails. They simply stop logging in. Three months later, the CSM discovers the customer is not renewing. "I had no idea they were unhappy — they never said anything." They did say something. They said it with their usage data. No one was listening.

::: warning Silence Is the Loudest Signal
Happy customers are vocal — they ask for features, attend QBRs, provide feedback. Silent customers are disengaging. A CSM who interprets silence as satisfaction will be consistently surprised by churn.
:::

### Detection

| Signal | What to Look For |
|--------|-----------------|
| CSM calendar | < 30% of time spent on proactive outreach; > 70% on reactive requests |
| Health score coverage | Health scores not calculated or not reviewed for > 50% of accounts |
| QBR completion rate | < 80% of accounts receive a QBR each quarter |
| Churn surprise rate | > 20% of churned accounts had no CSM intervention in the 90 days before churn |
| Customer contact log | Some accounts have no CSM contact for 60+ days |

### Fix

| Action | Detail |
|--------|--------|
| **Implement health scoring** | Use the [Health Score Framework](/offstream/health-score) to proactively identify at-risk accounts. |
| **Standing outreach cadence** | Every account gets a minimum touch — monthly for high-touch, quarterly for mid-touch. Calendar it. |
| **Usage alerts** | Automated alerts when usage drops > 20% in 30 days. CSM must respond within 5 business days. |
| **Proactive-to-reactive ratio** | Track and target: CSMs should spend > 60% of time on proactive activities. |
| **Weekly CS sync** | The [CS Team Sync](/offstream/account-cadence) forces review of all Red and Amber accounts weekly. |

---

## Anti-Pattern 2: The Vanishing Feedback

### Description

Customer signals — feature requests, friction reports, usage patterns, NPS verbatims — are collected but never reach the product team. The CSM logs feedback in a spreadsheet. The spreadsheet is not reviewed. The PM never sees it. The feedback vanishes into the void.

The customer gave the organisation a gift — honest, specific feedback about what is and isn't working. The organisation threw the gift away.

### Real Consequence

Three enterprise customers independently tell their CSMs: "We need bulk export for compliance reporting." Each CSM notes it in their own way — one in a Slack message, one in a personal doc, one in a call note. The PM never sees any of it. Six months later, all three accounts churn to a competitor that has bulk export. The PM asks: "Why didn't anyone tell us they needed this?" Everyone told someone. No one told the right person in the right format.

### Detection

| Signal | What to Look For |
|--------|-----------------|
| CS Feedback issues in Jira | < 5 per month (too few — feedback is being lost, not absent) |
| PM attendance at Feedback Triage | PM does not attend the weekly triage, or the triage does not exist |
| Signal-to-Initiative conversion | Zero signals converted to Initiatives in the last quarter |
| CSM frustration | CSMs say "I logged feedback but nothing happened" |
| Repeat churn reasons | Same reason cited in multiple churns, but no Initiative exists to address it |

### Fix

| Action | Detail |
|--------|--------|
| **Single logging system** | All feedback goes into Jira as CS Feedback issues. No spreadsheets, no Slack, no personal docs. |
| **Weekly Feedback Triage** | PM and CSM Lead review all new CS Feedback weekly. See [Feedback Loop](/offstream/feedback-loop). |
| **Pattern threshold** | Same theme across 3+ accounts → PM creates or links to an Initiative. Non-negotiable. |
| **Closed-loop communication** | When feedback leads to a shipped feature, the CSM tells the customer: "You asked for X. We built it." |
| **Quarterly feedback audit** | CS Lead reviews: how many signals were logged? How many reached PM? How many became Initiatives? |

::: tip Feedback That Goes Nowhere Kills the Loop
If a CSM logs 10 pieces of feedback and none of them result in visible action, the CSM stops logging. The effort feels pointless. The fix is not to motivate CSMs to log more — it is to make the logging visibly effective. When one piece of feedback leads to a shipped feature, every CSM sees the value of the process.
:::

---

## Anti-Pattern 3: The Renewal Surprise

### Description

The first time anyone thinks about renewal is when the contract is about to expire. The CSM discovers — at T-30 or T-14 — that the customer is unhappy, evaluating competitors, or has already decided to leave. The "renewal conversation" becomes a last-minute rescue attempt.

### Real Consequence

A customer's health score has been Amber for 6 months. Usage is declining. NPS dropped from 8 to 5. Support tickets increased. None of this was noticed because no one was looking. At T-30, the AM sends the renewal paperwork. The customer replies: "We've decided to go with [Competitor]. Our contract ends next month." The team scrambles. An emergency discount is offered. It is too late. The customer's decision was made 3 months ago.

::: details The Math of Late Renewal
If you discover churn risk at T-30, your options are limited to discounts and desperate promises. If you discover it at T-90, you have time to intervene: fix the product issue, re-engage the champion, demonstrate value, and rebuild trust. The earlier you detect, the lower the cost of retention.

- **Detection at T-90:** 70% save rate (time to intervene properly)
- **Detection at T-60:** 40% save rate (limited time, reactive mode)
- **Detection at T-30:** 15% save rate (discount or lose)
- **Detection at T-14:** 5% save rate (essentially lost)
:::

### Detection

| Signal | What to Look For |
|--------|-----------------|
| Renewal process start time | Renewal conversations starting < 60 days before expiry |
| Churn post-mortem data | Churned accounts where no intervention occurred before T-60 |
| Health score at renewal | Accounts entering renewal in Red or low Amber |
| CSM-AM coordination | No joint renewal planning session happened |

### Fix

| Action | Detail |
|--------|--------|
| **90-day renewal countdown** | Mandatory renewal process starts at T-90. See the [renewal cadence](/offstream/account-cadence). |
| **Health score trigger** | Any account with score < 70 and renewal < 120 days → automatic escalation to CS Lead. |
| **Renewal readiness checklist** | CSM completes a readiness assessment at T-90: health score, open issues, champion status, value delivered. |
| **QBR as renewal prep** | The QBR before renewal (Q-1) explicitly addresses renewal: "We want to make sure we are delivering value for your renewal." |

---

## Anti-Pattern 4: The Feature Dump

### Description

Product Marketing (or engineering, or PM) announces new features via a changelog, blog post, or email blast — and considers the job done. No enablement. No training. No CSM talking points. No customer-specific guidance. Features are "shipped" to the world but "adopted" by no one.

The announcement says: *"We're excited to announce bulk export!"* The customer thinks: *"What is bulk export? How do I use it? Does it solve my compliance problem?"* No one answers these questions because no one was asked to.

### Real Consequence

A major feature ships after 3 months of development. The changelog gets 200 views. Feature adoption after 30 days: 3%. Three months later, PM asks: "Why isn't anyone using bulk export?" The answer: because no one told them about it in a way they could understand, no one showed them how to use it, and no one helped them see why it matters for their specific workflow.

### Detection

| Signal | What to Look For |
|--------|-----------------|
| Feature adoption rate | < 20% adoption 30 days after launch for a broadly relevant feature |
| CSM awareness | CSMs cannot explain new features to customers because they were not briefed |
| Enablement content | No training materials, demo scripts, or customer-facing documentation exist at launch |
| Customer feedback | Customers discover features by accident: "I didn't know you had this" |
| Release communication | Changelog only, no targeted customer communication |

### Fix

| Action | Detail |
|--------|--------|
| **Go-to-market checklist in DoD** | No feature is "done" without enablement materials, CSM briefing, and customer communication plan. |
| **CSM enablement session** | Product Marketing briefs CSMs on every major feature before launch: what it does, who it helps, how to demo it. |
| **Targeted communication** | CSMs identify which accounts benefit from each feature and reach out personally — not a mass email. |
| **Adoption tracking** | PM tracks feature adoption at 7, 30, and 90 days. Low adoption triggers investigation and additional enablement. |
| **Customer webinar** | For major features: a customer-facing webinar with live demo and Q&A within 2 weeks of launch. |

::: warning Shipping Is Not Delivering
In Upstream-Downstream, "done" means the code is deployed. In the full lifecycle, "done" means the feature is adopted by the customers who need it. The Feature Dump anti-pattern happens when the team confuses shipping with delivering.
:::

---

## Anti-Pattern 5: The Health Score Theater

### Description

Health scores exist. A dashboard is built. It has colours. It looks professional. And no one acts on it. Red accounts stay red for months. Amber accounts are noted and forgotten. Green accounts are assumed to be fine forever. The health score is a decoration, not a tool.

### Real Consequence

The CS Lead presents the quarterly health report to leadership: "We have 15 Red accounts, 40 Amber accounts, and 95 Green accounts." Leadership asks: "What are we doing about the Red accounts?" The CS Lead lists the 15 accounts. No intervention plans exist for 8 of them. Three have been Red for over 90 days with no documented action. The health score told the team exactly where the problems were. The team looked at the score and did nothing.

### Detection

| Signal | What to Look For |
|--------|-----------------|
| Red account duration | Accounts in Red status for > 30 days with no documented intervention plan |
| Amber-to-Red rate | Amber accounts converting to Red without any CSM action during the Amber period |
| Playbook adherence | Red/Amber playbooks exist but are not followed — no evidence of prescribed actions |
| Health score reviews | Health scores discussed in meetings but no action items generated |
| Churn correlation | Churned accounts were Red for months before churn — the score predicted it, no one acted |

### Fix

| Action | Detail |
|--------|--------|
| **Mandatory playbooks** | Every health state has a [defined playbook](/offstream/health-score) with specific actions, cadence, and escalation paths. |
| **Action accountability** | Every Red account must have a documented intervention plan within 5 business days. CS Lead reviews weekly. |
| **Time-in-state limits** | An account in Red for > 30 days without improvement triggers automatic escalation to VP. |
| **Playbook compliance tracking** | Track whether CSMs are executing the prescribed actions for each health state. |
| **Health score in every meeting** | Health score distribution is the first item in the [CS Team Sync](/offstream/account-cadence) and the [Revenue Review](/offstream/account-cadence). |

---

## Anti-Pattern 6: The Silo

### Description

The CS team operates in isolation from engineering, product, and Onstream. They have no visibility into the product roadmap, no seat at sprint reviews, no relationship with the engineering team, and no mechanism to influence product direction. Engineering builds features based on PM assumptions. CS discovers customer reality. The two never meet.

### Real Consequence

Engineering ships a redesigned dashboard. PM believed the old design was confusing. CS knows that customers actually love the old layout — they trained their entire team on it. The redesign launches. Customers are confused. Support tickets spike. CSMs scramble to retrain. Three accounts cite "the redesign broke our workflow" as a factor in their churn decision. If engineering had spent 30 minutes with a CSM before starting the redesign, they would have known.

::: info The Silo Is the Root of Most Offstream Anti-Patterns
The Vanishing Feedback is a silo between CS and PM. The Feature Dump is a silo between Product Marketing and CS. The Reactive CS is a silo between data (health scores) and action (CSM intervention). Every Offstream anti-pattern, at its core, is a communication failure across a boundary that should not exist.
:::

### Detection

| Signal | What to Look For |
|--------|-----------------|
| CS attendance at sprint reviews | CS never attends or is never invited |
| PM attendance at CS ceremonies | PM does not attend the Feedback Triage or CS Sync |
| Feature surprise rate | CSMs discover new features from the changelog, not from a briefing |
| Post-mortem participation | CS is not included in incident post-mortems, even when customers were affected |
| Roadmap awareness | CSMs cannot describe the next 2–3 major features on the roadmap |

### Fix

| Action | Detail |
|--------|--------|
| **CS seat at sprint review** | A CSM presents the "voice of the customer" segment at every sprint review: 5 minutes on top Offstream signals. |
| **PM at Feedback Triage** | PM attends the weekly Feedback Triage. This is non-negotiable — it is the feedback loop. |
| **Shared Slack channels** | CS and engineering share a channel where CSMs can ask questions, share customer context, and flag issues. |
| **Pre-launch CSM briefing** | Product Marketing briefs CSMs on every feature before it ships. CSMs provide input on messaging and adoption strategy. |
| **Quarterly roadmap share** | PM presents the upcoming quarter's roadmap to the CS team. CSMs provide customer context and flag risks. |
| **Joint customer visits** | PM and engineering join CSMs for selected customer calls — hearing the customer directly is more powerful than any report. |

---

## Anti-Pattern Summary

| Anti-Pattern | Core Problem | One-Line Fix |
|-------------|-------------|-------------|
| The Reactive CS | Only engaging when customers complain | Implement health scoring and proactive outreach cadence |
| The Vanishing Feedback | Customer signals never reach product | Single logging system + weekly PM triage |
| The Renewal Surprise | Discovering churn risk at renewal time | 90-day renewal countdown with health-based early warning |
| The Feature Dump | Announcing features without enablement | Go-to-market checklist in the Definition of Done |
| The Health Score Theater | Scores exist but no one acts on them | Mandatory playbooks with time-in-state escalation |
| The Silo | CS team disconnected from engineering | CS seat at sprint review + PM at Feedback Triage |

::: tip Anti-Patterns Are Structural, Not Personal
If your team exhibits one of these anti-patterns, resist the urge to blame the CSM, the PM, or the AM. Ask: what structural condition enables this behaviour? The Reactive CS exists because no one built a health score system. The Vanishing Feedback exists because no one created a Feedback Triage ceremony. The Silo exists because no one invited CS to the sprint review. Fix the structure, and the anti-pattern dissolves.
:::

---

[← Account & Revenue Cadence](/offstream/account-cadence) · [Back to Offstream Overview →](/offstream/)
