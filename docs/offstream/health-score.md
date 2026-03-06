# Health Score Framework

<span class="phase-badge offstream">🟣 Offstream</span>

## The Moment This Page Is For

Noa manages 32 accounts. It is Monday morning. She has three QBRs this week, a renewal call on Thursday, and two onboarding calls to reschedule. She will spend 95% of her week on the loudest accounts — the ones who email her, who have open tickets, who push back in calls.

Strato is not loud. Strato hasn't emailed in six weeks. Strato's dispatchers haven't logged in to the new template manager in three weeks. The champion who championed the purchase left the company 45 days ago. There are no open tickets. There are no complaints. There is silence.

Silence feels safe. It isn't.

The renewal is in 87 days. Noa hasn't checked in since the kickoff call. She doesn't know that template usage dropped 80% after the champion left. She doesn't know that the replacement never ran training. She doesn't know that the team has gone back to manual entry.

By the time she calls for the renewal conversation, the decision is already made.

The health score exists because Noa cannot watch 32 accounts simultaneously with human attention. It is the system that watches for her — and tells her which silence to pay attention to.

## Why Health Scores Exist

A CSM managing 30 accounts cannot deeply understand the status of every account at every moment. Without a health score, the CSM relies on gut feeling, recent conversations, and the loudness of the customer. Quiet accounts — the ones that are silently disengaging — get no attention until they announce they are leaving.

A health score replaces intuition with **data**. It aggregates multiple signals into a single composite indicator that tells the CSM: this account is healthy, this one needs attention, and this one is in danger. It does not replace human judgment — it directs human judgment to where it is most needed.

::: warning A Score Without Action Is Theater
The health score is only valuable if it triggers action. A dashboard full of red accounts that no one looks at is worse than no dashboard at all — it creates the illusion of visibility while masking inaction. Every health state (Red, Amber, Green) must have a defined playbook that the CSM executes. No playbook = no point.
:::

---

## The Composite Health Score

The health score is a weighted composite of five dimensions. Each dimension is scored 0–100, and the weights reflect their relative importance for predicting retention and expansion.

| Dimension | Weight | What It Measures |
|-----------|--------|-----------------|
| **Usage** | 30% | Are they using the product regularly? How deeply? |
| **Engagement** | 20% | Are they interacting with the CSM, attending QBRs, responding to outreach? |
| **Support** | 20% | Are support interactions healthy? Quick resolution? Or escalating frustration? |
| **Satisfaction** | 15% | NPS, CSAT, qualitative sentiment from conversations |
| **Contractual** | 15% | Contract status, renewal timeline, commercial signals |

**Formula:**

```
Health Score = (Usage × 0.30) + (Engagement × 0.20) + (Support × 0.20)
             + (Satisfaction × 0.15) + (Contractual × 0.15)
```

The result is a number from 0–100 that maps to a Red/Amber/Green classification.

---

## Red / Amber / Green Framework

| Color | Score Range | Meaning | CSM Response |
|-------|------------|---------|-------------|
| 🟢 **Green** | 80–100 | Account is healthy. Active usage, engaged stakeholders, positive sentiment. | Nurture: maintain relationship, identify expansion opportunities, invite to advocacy programmes. |
| 🟡 **Amber** | 50–79 | Account shows warning signs. One or more dimensions are trending down. | Proactive outreach: investigate the declining dimension, schedule a check-in, develop an intervention plan. |
| 🔴 **Red** | 0–49 | Account is at risk. Significant issues across multiple dimensions. | Urgent intervention: executive sponsor engagement, remediation plan, escalation to leadership. |

::: tip The Amber Zone Is Where You Win or Lose
Green accounts are fine. Red accounts are often too late to save without heroics. The Amber zone is where proactive CSMs earn their keep. An account that dips from Green to Amber and receives immediate attention will usually recover. An account that sits in Amber for two months without intervention will slide to Red — and from Red, the path to churn is short.
:::

---

## Dimension 1 — Usage (30%)

Usage is the most objective health indicator. It measures whether the customer is actually using what they bought.

| Metric | How to Measure | Score Mapping |
|--------|---------------|---------------|
| **Daily Active Users (DAU) / Licensed Users** | Percentage of licensed users who log in daily | > 60% = 100, 40–60% = 70, 20–40% = 40, < 20% = 10 |
| **Feature breadth** | Number of core features used in the last 30 days | 5+ features = 100, 3–4 = 70, 1–2 = 40, 0 = 0 |
| **Core workflow completion rate** | Percentage of users completing the primary workflow | > 80% = 100, 60–80% = 70, 40–60% = 40, < 40% = 10 |
| **Usage trend** | Is usage growing, stable, or declining over 90 days? | Growing = 100, Stable = 70, Declining = 30 |

**Usage sub-score** = average of the four metrics above.

### Example

Account "Acme Corp" has 50 licensed users:
- 35 log in daily → 70% → Score: 100
- Uses 3 core features → Score: 70
- 75% complete the primary workflow → Score: 70
- Usage is stable → Score: 70

**Usage sub-score:** (100 + 70 + 70 + 70) / 4 = **77.5**

---

## Dimension 2 — Engagement (20%)

Engagement measures the quality of the relationship between the customer and the Offstream team.

| Metric | How to Measure | Score Mapping |
|--------|---------------|---------------|
| **QBR attendance** | Did the champion and/or executive sponsor attend the last QBR? | Both = 100, Champion only = 70, Neither = 20 |
| **CSM outreach response rate** | Percentage of CSM emails/messages that receive a response within 48h | > 80% = 100, 50–80% = 60, < 50% = 20 |
| **Training participation** | Did the customer attend offered training or enablement sessions? | Attended = 100, Declined politely = 50, No response = 10 |
| **Product feedback provided** | Has the customer provided feedback in the last 90 days? | Yes, detailed = 100, Yes, brief = 60, No = 20 |

**Engagement sub-score** = average of the four metrics above.

::: info Silence Is Not Satisfaction
A customer who never responds to outreach, skips QBRs, and provides no feedback is not "happy and self-sufficient." They are disengaged. Disengaged customers churn at 3x the rate of engaged ones. A low engagement score — even with high usage — is a serious warning sign.
:::

---

## Dimension 3 — Support (20%)

Support health measures whether the customer's technical experience is smooth or frustrating.

| Metric | How to Measure | Score Mapping |
|--------|---------------|---------------|
| **Open ticket count** | Number of currently open support tickets | 0 = 100, 1–2 = 80, 3–5 = 50, > 5 = 20 |
| **Avg. resolution time** | Average time to resolve tickets in the last 90 days | < 24h = 100, 24–72h = 70, 72h–7d = 40, > 7d = 10 |
| **Escalation rate** | Percentage of tickets escalated to engineering | < 5% = 100, 5–15% = 70, 15–30% = 40, > 30% = 10 |
| **Ticket sentiment** | Tone of recent support interactions (measured or CSM-assessed) | Positive/neutral = 100, Frustrated = 40, Angry = 10 |

**Support sub-score** = average of the four metrics above.

### Example: The Wallet Balance Bug Signal

Before the wallet balance bug was formally identified, 140 support tickets accumulated over 30 days with the same theme: "My balance shows zero." For affected accounts:
- Open ticket count: elevated → Score drop
- Avg. resolution time: long (no fix available) → Score drop
- Ticket sentiment: increasingly frustrated → Score drop

Any account generating 5+ tickets on the same theme should trigger an automatic health score review and CSM outreach.

---

## Dimension 4 — Satisfaction (15%)

Satisfaction measures the customer's sentiment — how they feel about the product and the relationship.

| Metric | How to Measure | Score Mapping |
|--------|---------------|---------------|
| **NPS score** | Last NPS survey response | 9–10 (Promoter) = 100, 7–8 (Passive) = 60, 0–6 (Detractor) = 20 |
| **CSAT score** | Average CSAT from support interactions | > 4.5/5 = 100, 3.5–4.5 = 60, < 3.5 = 20 |
| **Qualitative sentiment** | CSM's assessment from recent conversations | Positive = 100, Neutral = 60, Negative = 20 |

**Satisfaction sub-score** = average of the three metrics above.

::: warning NPS Alone Is Not Enough
NPS is a lagging indicator — by the time a customer gives a Detractor score, the damage is often done. Combine NPS with the CSM's qualitative assessment, which is a leading indicator. A CSM who senses tension in a conversation should adjust the satisfaction score immediately, not wait for the next survey.
:::

---

## Dimension 5 — Contractual (15%)

Contractual health measures the commercial status of the relationship.

| Metric | How to Measure | Score Mapping |
|--------|---------------|---------------|
| **Days to renewal** | Calendar days until contract expiry | > 180 = 100, 90–180 = 80, 30–90 = 50, < 30 = 20 |
| **Renewal risk** | CSM + AM assessment of renewal likelihood | Certain = 100, Likely = 70, Uncertain = 40, At risk = 10 |
| **Payment status** | Is the account current on payments? | Current = 100, 30 days overdue = 50, 60+ days overdue = 10 |
| **Contract value trend** | Is the customer expanding, flat, or contracting? | Expanding = 100, Flat = 60, Contracting = 20 |

**Contractual sub-score** = average of the four metrics above.

---

## Calculating the Final Score

Bring the five dimension sub-scores together:

| Dimension | Sub-Score | Weight | Weighted Score |
|-----------|-----------|--------|---------------|
| Usage | 77.5 | × 0.30 | 23.25 |
| Engagement | 65.0 | × 0.20 | 13.00 |
| Support | 82.5 | × 0.20 | 16.50 |
| Satisfaction | 73.3 | × 0.15 | 11.00 |
| Contractual | 80.0 | × 0.15 | 12.00 |
| | | **Total** | **75.75** |

**Result:** 75.75 → 🟡 **Amber**. The Engagement dimension (65.0) is pulling the score down. The CSM should investigate why the customer is disengaged and develop an outreach plan.

---

## Action Playbooks by Health State

### 🟢 Green Playbook (Score 80–100)

The account is healthy. The goal is to **maintain momentum and identify growth opportunities**.

| Action | Cadence |
|--------|---------|
| Regular check-in | Monthly (keep it light — relationship maintenance) |
| QBR delivery | Quarterly |
| Expansion opportunity assessment | Quarterly (with AM) |
| Advocacy programme invitation | When NPS = 9–10 |
| Feature beta programme invitation | When relevant features are in development |
| Proactive best-practice sharing | Bi-monthly |

### 🟡 Amber Playbook (Score 50–79)

The account needs attention. The goal is to **identify the root cause of the decline and intervene before it worsens**.

| Action | Cadence |
|--------|---------|
| Dimension-specific investigation | Immediately upon Amber classification |
| CSM check-in call | Within 5 business days |
| Intervention plan documented in Jira | Within 10 business days |
| Weekly monitoring of declining dimension | Until score returns to Green |
| Escalation to CS Lead if no improvement in 30 days | As needed |
| Cross-functional collaboration (Support, PM, AM) | As needed based on root cause |

### 🔴 Red Playbook (Score 0–49)

The account is at risk. The goal is to **stop the bleeding and develop a remediation plan**.

| Action | Cadence |
|--------|---------|
| CSM escalation to CS Lead | Same day |
| Executive sponsor engagement | Within 48 hours |
| Remediation plan with specific actions and dates | Within 5 business days |
| Daily monitoring of health metrics | Until score reaches Amber |
| Leadership briefing | Weekly until resolved |
| AM commercial assessment (discount, extended trial, concessions) | As needed |
| Post-recovery review | After account stabilises |

::: details The Recovery Path: Red → Amber → Green
Recovery is not instant. A Red account that receives intervention will typically move to Amber within 30–60 days, and from Amber to Green within another 30–60 days. Set realistic expectations with the customer and with leadership. Promising a turnaround in 2 weeks and failing to deliver is worse than promising 60 days and delivering in 45.
:::

---

## The Early Warning System

The health score should not just report current state — it should **predict future state**. The early warning system detects trends before they cross thresholds.

| Warning Signal | Trigger | Action |
|---------------|---------|--------|
| **Usage decline** | DAU drops > 20% over 30 days | CSM receives alert. Investigate immediately. |
| **Engagement drop** | Customer misses 2 consecutive QBRs | CSM escalates to CS Lead. Executive sponsor outreach. |
| **Support spike** | Account generates 5+ tickets in 14 days | Automatic health score review. CSM contacts customer. |
| **Satisfaction drop** | NPS drops from Promoter to Passive or Detractor | CSM schedules call within 48 hours. |
| **Contractual risk** | Renewal < 90 days AND score < 70 | CSM + AM joint intervention plan. |

::: tip Automate the Alerts
Do not rely on CSMs manually checking dashboards. Configure automated alerts (via Gainsight, ChurnZero, Vitally, or even a simple Slack bot from your data warehouse) that notify the CSM the moment a warning signal fires. The CSM should not have to go looking for problems — problems should come to the CSM.
:::

---

## Dashboard Design

The health score dashboard is the CSM's primary tool. Design it for **action, not observation**.

### Account List View

| Column | Purpose |
|--------|---------|
| Account name | Identify the customer |
| Health score | Current composite score with color indicator |
| Trend arrow | ↑ improving, → stable, ↓ declining over 30 days |
| Weakest dimension | The dimension pulling the score down — directs the CSM's focus |
| Days to renewal | Urgency indicator for renewal-stage accounts |
| Last CSM contact | How recently the CSM engaged. Highlights neglected accounts. |
| Open tickets | Current support ticket count |

### Individual Account View

For each account, show:
- **Score history:** Line chart of composite score over 12 months
- **Dimension breakdown:** Radar chart or bar chart showing each dimension's current score
- **Activity log:** Recent CSM interactions, QBRs, support tickets, NPS responses
- **Action items:** Open intervention tasks for this account

---

## Updating Scores

| Update Type | Frequency | Mechanism |
|------------|-----------|-----------|
| Usage metrics | Daily (automated) | Pull from product analytics (Mixpanel, Amplitude, custom) |
| Support metrics | Daily (automated) | Pull from helpdesk (Zendesk, Intercom, Freshdesk) |
| Engagement metrics | Weekly (CSM input) | CSM updates after interactions |
| Satisfaction metrics | Event-driven | NPS survey response, CSAT after ticket resolution |
| Contractual metrics | Monthly (CSM + AM input) | Updated during renewal planning and commercial reviews |

::: info CSM Override
The CSM can manually override the composite score if they have information the data does not capture — for example, a conversation where the customer mentioned they are evaluating competitors. The override must include a comment explaining the rationale and is reviewed by the CS Lead in the weekly sync.
:::

---

