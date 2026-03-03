# Account & Revenue Cadence

<span class="phase-badge offstream">🟣 Offstream</span>

## Why Cadence Matters in Offstream

Upstream has its Discovery Sprints. Downstream has its delivery ceremonies. Onstream has its service reviews. Offstream needs its own cadence — a rhythm of recurring activities that ensures accounts are monitored, revenue is protected, feedback is routed, and nothing falls through the cracks.

Without a cadence, Offstream work becomes reactive. CSMs respond to the loudest customer. AMs chase deals as they appear. Product Marketing publishes when inspired. The feedback loop to Upstream starves because no one has a standing obligation to review signals. A cadence transforms Offstream from reactive firefighting into systematic account management.

::: tip Cadence Is the Immune System of Revenue
You do not notice your immune system when it is working. You notice when it fails. Offstream cadence works the same way: the weekly syncs, monthly reviews, and quarterly QBRs quietly prevent churn, surface expansion opportunities, and keep the feedback loop alive. You only notice their absence when an account churns unexpectedly or a competitor steals a deal you didn't see coming.
:::

---

## The Offstream Calendar

| Ceremony | Frequency | Duration | Participants | Purpose |
|----------|-----------|----------|-------------|---------|
| CS Team Sync | Weekly | 30 min | CS team, Support Lead | Review health scores, at-risk accounts, and action items |
| Feedback Triage | Weekly | 30 min | PM, CSM Lead | Review CS Feedback issues, identify patterns, route to Upstream |
| Revenue Review | Monthly | 60 min | CS Lead, AM Lead, VP | Review pipeline, renewal forecast, expansion forecast, churn risk |
| Win/Loss Review | Monthly | 60 min | Sales Lead, PM, Product Marketing | Analyse won and lost deals for product and positioning insights |
| QBR Delivery | Quarterly | 60 min per account | CSM, customer champion, executive sponsor | Present value, review outcomes, plan ahead |
| NPS/CSAT Deep-Dive | Quarterly | 60 min | CS Ops, PM, CS Lead | Analyse survey results, identify themes, plan actions |
| Annual Planning | Annually | Half-day | CS Lead, AM Lead, PM, VP | Set targets for retention, expansion, NPS, and feedback loop health |

---

## Weekly: CS Team Sync

The CS Team Sync is the heartbeat of the Offstream operation. It ensures that no account silently degrades and that the team shares intelligence.

### Agenda (30 Minutes)

| Time | Topic | Owner |
|------|-------|-------|
| 0–5 min | **Scorecard review:** Team-level health metrics — how many accounts are Green/Amber/Red? Trend vs. last week. | CS Lead |
| 5–15 min | **Red account review:** Each Red account gets 2 minutes. What is the intervention plan? What happened this week? What is blocked? | Assigned CSM |
| 15–22 min | **Amber watch list:** New accounts that dropped to Amber. What triggered the drop? What is the investigation plan? | Assigned CSM |
| 22–27 min | **Wins and signals:** Accounts that improved, expansion signals, positive customer feedback, notable support patterns. | All |
| 27–30 min | **Actions and follow-ups:** Confirm action items. Next week's priorities. | CS Lead |

### Ground Rules

- Every CSM comes prepared with their Red/Amber account updates. No live investigation during the sync.
- Support Lead reports on ticket volume trends and any emerging patterns (same issue across multiple accounts).
- If a CSM identifies a signal for the [Feedback Loop](/offstream/feedback-loop), it is logged as a CS Feedback issue during the meeting.

::: info The "No Surprises" Rule
The CS Team Sync exists so that no one is surprised by a churn, a complaint, or a missed renewal. If a CSM is aware of a risk and does not raise it in the weekly sync, the process has failed. The sync is the team's collective immune system.
:::

---

## Weekly: Feedback Triage

The Feedback Triage is the mechanism that connects Offstream signals to Upstream planning. It is the most important ceremony for the [Feedback Loop](/offstream/feedback-loop).

### Agenda (30 Minutes)

| Time | Topic | Owner |
|------|-------|-------|
| 0–5 min | **New CS Feedback issues:** How many were logged this week? Quick scan of titles and themes. | CSM Lead |
| 5–20 min | **Pattern review:** Are any themes appearing across 3+ accounts? If yes, discuss whether they warrant an Initiative. | PM + CSM Lead |
| 20–25 min | **Support pattern review:** Support Lead presents the top 3 ticket themes from the past week. | Support Lead |
| 25–30 min | **Routing decisions:** For each signal: route to Upstream (create/link Initiative), label as `monitoring`, or close as one-off. | PM |

### Output

Every Feedback Triage session produces:
- Updated CS Feedback queue in Jira (triaged, labelled, linked)
- 0–3 new signals routed to Upstream (linked to existing or new Initiatives)
- Top signals summary for the PM to present in the next sprint review

---

## Monthly: Revenue Review

The Revenue Review is where CS and Sales leadership align on the commercial health of the customer base.

### Agenda (60 Minutes)

| Time | Topic | Owner |
|------|-------|-------|
| 0–10 min | **Portfolio health:** Aggregate health score distribution. Trend vs. last month. | CS Lead |
| 10–25 min | **Renewal forecast:** Accounts renewing in the next 90 days. Status of each. Risk assessment. | CS Lead + AM Lead |
| 25–40 min | **Expansion pipeline:** Active expansion opportunities. Stage, value, probability, blockers. | AM Lead |
| 40–50 min | **Churn review:** Accounts that churned or downgraded this month. Root cause for each. | CS Lead |
| 50–55 min | **Revenue metrics:** MRR/ARR trend, net revenue retention, gross retention, expansion rate. | CS Ops |
| 55–60 min | **Actions:** Decisions, escalations, resource allocation changes. | VP |

### Key Metrics Reviewed

| Metric | Definition | Target |
|--------|-----------|--------|
| **Gross Revenue Retention (GRR)** | Revenue retained from existing customers, excluding expansion | > 90% |
| **Net Revenue Retention (NRR)** | Revenue retained including expansion (upsells, cross-sells) | > 110% |
| **Logo Churn Rate** | Percentage of customers lost in the period | < 5% annually |
| **Expansion Rate** | Revenue from upsells and cross-sells / starting revenue | > 20% annually |
| **Average Health Score** | Mean composite health score across all accounts | > 75 |

::: warning Revenue Metrics Without Health Context Are Dangerous
Revenue metrics are lagging indicators. An NRR of 115% this quarter might hide the fact that 40% of accounts are Amber and trending down. By the time revenue metrics reflect the problem, the churn has already happened. Always present revenue metrics alongside health score distribution.
:::

---

## Monthly: Win/Loss Review

The Win/Loss Review is the mechanism by which Sales intelligence reaches Product.

### Agenda (60 Minutes)

| Time | Topic | Owner |
|------|-------|-------|
| 0–15 min | **Wins:** What did we win this month? Why did the customer choose us? What features and positioning resonated? | Sales Lead |
| 15–35 min | **Losses:** What did we lose? Why? What features were cited? What competitors were chosen? What objections could not be overcome? | Sales Lead |
| 35–50 min | **Pattern analysis:** Are the same features/gaps appearing in multiple losses? Same competitor winning repeatedly? | PM |
| 50–55 min | **Upstream routing:** Features that lost 3+ deals enter the Initiative pipeline. PM documents with quantified impact. | PM |
| 55–60 min | **Positioning updates:** Product Marketing notes messaging adjustments needed based on win/loss data. | Product Marketing |

### Lost Deal Data Requirements

Every lost deal must include (logged in CRM within 24 hours):

| Field | Example |
|-------|---------|
| **Lost to** | Competitor name or "No decision" |
| **Primary reason** | "Missing bulk export feature" |
| **Secondary reason** | "Pricing too high for their scale" |
| **Deal size** | $45,000 ARR |
| **Segment** | Mid-market / Enterprise |
| **PM notified** | Yes/No |

---

## Quarterly: QBR Structure

The Quarterly Business Review (QBR) is the highest-touch ceremony in Offstream. It is the CSM's opportunity to demonstrate value, align on goals, and deepen the relationship.

### Preparation (1–2 Weeks Before)

| Task | Owner |
|------|-------|
| Pull usage analytics for the quarter | CSM |
| Compile support ticket summary | Support Lead |
| Identify ROI metrics (time saved, revenue impact, efficiency gains) | CSM |
| Draft value summary slide | CSM |
| Identify discussion topics and strategic questions | CSM |
| Coordinate with AM on commercial topics (renewal, expansion) | CSM + AM |
| Send agenda to customer 5 days before the session | CSM |

### QBR Agenda (60 Minutes)

| Time | Topic | Detail |
|------|-------|--------|
| 0–5 min | **Welcome and agenda review** | Set expectations for the session |
| 5–15 min | **Value delivered** | Present metrics: usage growth, outcomes achieved, ROI. Make the value tangible. |
| 15–25 min | **Challenges and friction** | Open discussion: what is not working? What could be better? Listen more than talk. |
| 25–35 min | **Product roadmap preview** | Share relevant upcoming features. Get feedback on priorities. |
| 35–45 min | **Strategic alignment** | Discuss the customer's goals for the next quarter. How does the product fit? |
| 45–55 min | **Action items and next steps** | Agree on mutual commitments. Document in writing. |
| 55–60 min | **Close and feedback** | Ask: "Is there anything else we should be discussing?" |

### Follow-Up (Within 48 Hours)

- Send QBR summary email with agreed action items
- Log action items in Jira (linked to the account)
- Update health score based on new information
- Route any product feedback to the Feedback Loop
- Debrief internally: share insights with PM, Support Lead, and AM

::: tip The QBR Golden Rule: Listen More Than Present
The temptation is to fill the QBR with slides showing how great the product is. Resist it. The most valuable QBR is one where the customer talks for 60% of the time. Their challenges, frustrations, and ambitions are the signals that drive the next Upstream cycle. If you leave a QBR without learning something new about the customer, you ran it wrong.
:::

### QBR Quality Indicators

| Indicator | Good QBR | Bad QBR |
|-----------|---------|---------|
| Customer talk time | > 50% | < 30% |
| Attendees | Champion + executive sponsor | Admin only |
| Action items produced | 3–5 mutual commitments | Zero or vague "let's follow up" |
| Feedback captured | Specific, actionable insights logged | Nothing new learned |
| Follow-up timing | Summary sent within 48 hours | No follow-up sent |

---

## The Renewal Cadence

Renewal is not a single event — it is a 90-day process that begins well before the contract expires. See the [Customer Lifecycle Model](/offstream/customer-lifecycle) for the full renewal stage details.

| Day | Activity | Owner |
|-----|----------|-------|
| T-90 | Internal renewal assessment: health score, usage, risks | CSM |
| T-75 | CSM outreach: open the renewal conversation | CSM |
| T-60 | Formal renewal meeting with value summary | CSM + AM |
| T-45 | Address open issues or objections | CSM + AM |
| T-30 | Contract sent for signature | AM |
| T-14 | Escalation if unsigned | CSM + CS Lead |
| T-7 | Final push: VP involvement if needed | VP |
| T-0 | Contract must be signed | AM |

---

## Annual Planning

Once per year, the Offstream leadership team sets targets and strategy for the coming year.

### Planning Agenda (Half-Day)

| Session | Duration | Topic |
|---------|----------|-------|
| Session 1 | 60 min | **Year in Review:** GRR, NRR, churn analysis, expansion, health score trends, feedback loop effectiveness |
| Session 2 | 60 min | **Target Setting:** Retention, expansion, NPS, health score, feedback loop volume targets for the next year |
| Session 3 | 60 min | **Resource Planning:** CSM-to-account ratio, tools and technology, hiring needs, training requirements |
| Session 4 | 30 min | **Cadence Review:** Are the current ceremonies working? What should change? |

### Key Outputs

- Annual Offstream OKRs (tied to company revenue goals)
- CSM portfolio assignments for the year
- Cadence adjustments (add, remove, or modify ceremonies)
- Technology investments (CS platform, analytics, automation)
- Training plan for the CS team

::: details The CSM-to-Account Ratio
The ratio depends on account complexity and contract value:
- **High-touch (Enterprise):** 1 CSM : 10–15 accounts
- **Mid-touch (Mid-market):** 1 CSM : 25–40 accounts
- **Tech-touch (SMB):** 1 CSM : 100+ accounts (automated, with human intervention for Red accounts)

If your CSMs are consistently unable to execute the cadence — missing QBRs, skipping weekly syncs, neglecting Amber accounts — the ratio is too high. Add headcount or reduce touch level.
:::

---

## Calendar Template

A visual reference for the Offstream cadence across a quarter:

```
WEEK 1   │ CS Sync · Feedback Triage
WEEK 2   │ CS Sync · Feedback Triage
WEEK 3   │ CS Sync · Feedback Triage
WEEK 4   │ CS Sync · Feedback Triage · Revenue Review · Win/Loss Review
WEEK 5   │ CS Sync · Feedback Triage
WEEK 6   │ CS Sync · Feedback Triage
WEEK 7   │ CS Sync · Feedback Triage
WEEK 8   │ CS Sync · Feedback Triage · Revenue Review · Win/Loss Review
WEEK 9   │ CS Sync · Feedback Triage
WEEK 10  │ CS Sync · Feedback Triage
WEEK 11  │ CS Sync · Feedback Triage
WEEK 12  │ CS Sync · Feedback Triage · Revenue Review · Win/Loss Review
WEEK 13  │ QBRs delivered · NPS Deep-Dive · Quarterly Retro
```

QBRs are scheduled individually across weeks 10–13, depending on customer availability.

---

[← The Feedback Loop](/offstream/feedback-loop) · [Anti-Patterns →](/offstream/anti-patterns)
