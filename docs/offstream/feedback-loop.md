# The Feedback Loop

<span class="phase-badge offstream">🟣 Offstream</span>

## The Moment This Page Is For

Twelve months after Strato churned, Dan — their former tech lead — joined a competitor's platform. In his first week, he mentioned to their PM: "At Strato we had a huge pain point — job templates were great but you couldn't apply a template to recurring jobs automatically. We asked our old vendor about it three times and nothing happened. That's honestly a big part of why we left."

The old vendor's PM had never heard this. The requests had been logged by the CSM in a shared Notion doc that nobody read. They weren't in Jira. They weren't in the product roadmap conversation. They died in a doc.

That feature — recurring template application — would have been 6 days of development. Instead it became a reason for Strato to leave.

The feedback loop is the answer to this. Not a Notion doc. Not a Slack channel. Not "tell us what you need." A formal path from customer signal to PM decision — logged, categorised, routed, and visible. If a signal doesn't have a path into Upstream, it doesn't exist as product intelligence. It's just noise that somebody heard once.

## The Most Important Connection in the Framework

The feedback loop from Offstream back to Upstream is the mechanism that makes the entire framework **self-improving**. Without it, the product team operates on assumptions. With it, the product team operates on evidence.

Every signal from the market must have a **clear path into the product**. If CS logs a piece of feedback and nothing happens with it, the team learns not to log feedback. The loop breaks.

::: tip The Feedback Loop Is the Framework's Immune System
Upstream generates hypotheses. Downstream builds solutions. Onstream ensures reliability. But only Offstream can confirm whether any of it matters. The feedback loop is how the framework learns from reality and adjusts. Without it, the organisation builds confidently in the wrong direction.
:::

---

## Signal Types

Offstream produces six categories of signals. Each has different characteristics, different sources, and different urgency levels.

| Signal Type | Source | Example | Urgency |
|------------|--------|---------|---------|
| **NPS/CSAT themes** | Quarterly surveys | "Top detractor theme: reporting is too basic" | Medium — quarterly review |
| **Support ticket patterns** | Support system | "140 tickets about balance showing zero in 30 days" | High — immediate if P0/P1 pattern |
| **Feature requests** | CSM conversations, QBRs | "3 enterprise accounts need bulk export for compliance" | Medium — weekly triage |
| **Usage analytics** | Product analytics | "Reconciliation feature adoption: 8% after 90 days" | Medium — weekly PM review |
| **Churn reasons** | Exit interviews, CRM | "Lost 2 accounts citing mobile app quality" | High — monthly Win/Loss |
| **QBR insights** | Quarterly Business Reviews | "Executive sponsor wants API access for internal tools" | Medium — logged as CS Feedback |

### Signal Quality Hierarchy

Not all signals are equal. Their weight in prioritisation depends on their **specificity** and **quantification**:

1. **Quantified pattern** (strongest): "140 tickets from 34 accounts over 30 days about balance display"
2. **Multi-account pattern**: "3 enterprise accounts independently requested bulk export"
3. **Single-account insight**: "Acme Corp's CTO wants API access"
4. **Survey theme**: "Top NPS detractor theme: reporting"
5. **Anecdotal feedback** (weakest): "A customer mentioned they don't like the dashboard"

::: warning Anecdotal Feedback Is Not a Signal
A single customer saying "I wish you had X" is not a signal — it is a data point. It becomes a signal when it is part of a pattern: the same request from multiple customers, supported by usage data or churn analysis. The feedback loop must resist the temptation to treat every individual request as a product priority.
:::

---

## The Signal Processing Pipeline

Raw signals are noise. Processed signals are intelligence. The pipeline transforms one into the other.

```
COLLECT → CATEGORIZE → QUANTIFY → PRIORITIZE → ROUTE TO UPSTREAM
```

### Step 1 — Collect

Every signal must be captured in a **durable, searchable system** — not Slack, not email, not a notebook. The canonical system is Jira with the `CS-Feedback` issue type.

| Signal Source | Collection Mechanism | SLA |
|--------------|---------------------|-----|
| CSM conversation | CSM creates CS-Feedback issue in Jira | Within 24 hours of conversation |
| Support tickets | Support Lead aggregates patterns weekly | Weekly report |
| NPS/CSAT results | CS Ops analyses quarterly | Quarterly |
| Lost deal data | AE logs in CRM | Within 24 hours of lost deal |
| Usage analytics | PM reviews dashboard | Weekly scan |
| QBR insights | CSM logs takeaways after QBR | Within 48 hours of QBR |

### Step 2 — Categorize

Each signal is tagged with a category that helps PM triage efficiently:

| Category | Definition | Example |
|----------|-----------|---------|
| `feature-gap` | Customer needs a capability that does not exist | "Need bulk export" |
| `ux-friction` | Feature exists but is hard to use or find | "Can't find the export button" |
| `reliability` | Product is unreliable for the customer's use case | "Dashboard times out with large datasets" |
| `integration` | Customer needs to connect with another system | "Need Salesforce integration" |
| `competitive` | Customer is considering or has chosen a competitor | "Competitor X has real-time reporting" |
| `pricing` | Feedback about cost, packaging, or value perception | "Too expensive for the features we use" |

### Step 3 — Quantify

Attach data to the signal so PM can prioritise objectively:

| Quantification | How to Measure |
|---------------|---------------|
| **Customer count** | How many accounts have raised this signal? |
| **Revenue at risk** | Total ARR of accounts affected or requesting this |
| **Support ticket volume** | How many tickets relate to this signal? |
| **Churn attribution** | Has this signal been cited in churn decisions? How many? |
| **Adoption impact** | Would addressing this signal improve adoption metrics? |

### Step 4 — Prioritize

PM uses quantified signals to prioritise in the weekly [Feedback Triage](/offstream/account-cadence):

| Priority | Criteria |
|----------|---------|
| **Immediate** | P0/P1 bug pattern (support ticket spike), active churn risk |
| **Next sprint** | Pattern across 5+ accounts with high revenue at risk |
| **Initiative pipeline** | Pattern across 3+ accounts, quantified impact, aligned with strategy |
| **Monitoring** | 1–2 accounts, not yet a pattern. Review next quarter. |
| **Close** | One-off request, not aligned with strategy, no pattern emerging |

### Step 5 — Route to Upstream

Signals that pass the priority threshold enter Upstream through one of three paths:

| Path | When | Mechanism |
|------|------|-----------|
| **Link to existing Initiative** | Signal relates to work already planned | CS Feedback issue linked to Initiative in Jira |
| **Create new Initiative** | Signal reveals a new problem worth solving | PM writes an [Initiative Brief](/upstream/initiative-brief) |
| **Bug escalation** | Signal reveals a production defect | Bug created in Jira via [Bug Taxonomy](/onstream/bug-taxonomy) |

---

## How Signals Become Initiatives

The threshold for creating a new Initiative from Offstream signals:

1. **Pattern across 3+ customers:** The same theme must appear independently from at least three accounts. A single loud customer is not a pattern.
2. **Quantified impact:** The PM must be able to articulate the impact in numbers — revenue at risk, users affected, support cost, or churn attribution.
3. **Strategic alignment:** The signal must align with the product's strategic direction. A valid signal that conflicts with strategy gets logged as `monitoring` and reviewed quarterly.

### The Initiative Threshold Checklist

| Criterion | Required? | Example |
|-----------|-----------|---------|
| Raised by 3+ accounts | ✅ | "Acme, Globex, and Initech all need bulk export" |
| Revenue at risk quantified | ✅ | "$180K combined ARR across the three accounts" |
| Category identified | ✅ | `feature-gap` |
| Strategic alignment confirmed | ✅ | "Aligns with Q4 enterprise enablement goal" |
| PM has written Initiative Brief | ✅ | "INI-47: Enterprise data export capabilities" |

::: info Not Every Signal Deserves an Initiative
Saying "no" to signals is as important as saying "yes." A PM who creates an Initiative for every piece of feedback will have an unmanageable backlog. The threshold exists to filter for signals that are both real (patterned, quantified) and strategic (aligned). Signals below the threshold are not discarded — they are labelled `monitoring` and reviewed quarterly for emerging patterns.
:::

---

## Jira Integration

The feedback loop has a specific Jira structure that enables tracking, linking, and reporting.

### CS Feedback Issue Type

| Field | Type | Values |
|-------|------|--------|
| **Summary** | Text | Descriptive title of the signal |
| **Signal Source** | Single-select | CSM, Support, Sales, NPS, Analytics, QBR |
| **Category** | Single-select | feature-gap, ux-friction, reliability, integration, competitive, pricing |
| **Customer Count** | Number | How many accounts have raised this |
| **Revenue at Risk** | Currency | Combined ARR of affected accounts |
| **Triage Status** | Single-select | New, Monitoring, Routed, Closed |
| **Linked Initiative** | Issue link | Link to Initiative (when routed to Upstream) |

### Automation Rules

| Trigger | Action |
|---------|--------|
| New CS Feedback created | Notify PM in `#feedback-triage` Slack channel |
| Customer Count ≥ 3 | Add label `pattern-detected`. Highlight in weekly triage. |
| Triage Status = New for > 14 days | Send reminder to PM and CSM Lead |
| CS Feedback linked to Initiative | Notify originating CSM: "Your feedback influenced Initiative X" |
| Initiative shipped | Notify all CSMs whose feedback was linked: "Feature Y is live — your customers asked for this" |

::: tip Closed-Loop Communication Is the Fuel
When a CSM logs feedback and later receives a notification that the feature shipped because of their signal, two things happen: (1) the CSM feels valued and logs more feedback, and (2) the CSM can proactively tell the customer: "You asked for X, we built it." This closes the loop and strengthens the customer relationship. Without this notification, the loop runs on faith instead of evidence.
:::

---

## The "Voice of the Customer" in Sprint Reviews

Every sprint review includes a 5-minute segment where CS presents the top Offstream signals to the engineering and product team.

### Format

| Slot | Content | Duration |
|------|---------|----------|
| **Top signal** | The most important pattern from the past sprint's feedback | 2 min |
| **Customer quote** | A real (anonymised if needed) customer quote that illustrates the signal | 30 sec |
| **Data** | Quantification: how many accounts, how much revenue, how many tickets | 1 min |
| **Ask** | What the CS team is requesting: investigation, prioritisation, or acknowledgment | 1 min |
| **PM response** | PM acknowledges and states the current plan (already in backlog, new Initiative, monitoring) | 30 sec |

### Why This Matters

Engineers build empathy for customers when they hear directly from the people using their product. A developer who hears "140 customers saw $0.00 instead of their actual balance" will approach the next financial display feature with more care than one who simply reads a Jira ticket. The sprint review segment humanises the data and connects the team to the people they serve.

---

## The Five Signal Sources (Detailed)

### 1. Customer Success — Feature Gaps & Friction

**What CSMs hear:**
> *"I can't find the export button."*  
> *"We tried to use the reconciliation feature but it doesn't handle our edge case."*  
> *"Three of our users have asked why the balance shows zero."*

**How it enters Upstream:**
1. CSM logs a **CS Feedback** issue in Jira within 24 hours
2. PM reviews all CS Feedback issues weekly in a 30-min triage session
3. Issues with a pattern (same theme ≥ 3 accounts) → PM writes an Initiative or Feature
4. Issues without a pattern → labelled `monitoring`, reviewed next quarter

---

### 2. Support — Bug Patterns & UX Confusion

**What Support hears:**
> *"My balance shows $0 but I know it's negative."*  
> *"The login page shows an error after I changed my password."*

Support is the fastest signal source because customers contact support the moment something breaks. The support team must be empowered to log bugs with customer impact counts.

**How it enters Upstream:**
- All P0/P1 bugs found via support → trigger a [Post-Mortem](/onstream/post-mortem-template) → becomes an Onstream Initiative
- Bug patterns (same error ≥ 5 tickets) → weekly bug review → PM triages into backlog or Initiative

---

### 3. Sales — Lost Deal Analysis

**What Sales hears:**
> *"We went with [Competitor] because they have bulk export."*  
> *"Your mobile app isn't good enough for our field team."*

Lost deal data is one of the most strategically important inputs to product planning. It identifies not just gaps but **high-value gaps** — the ones customers were willing to pay for.

**How it enters Upstream:**
- AE logs reason in CRM within 24 hours of a lost deal
- Monthly Win/Loss review: Sales + PM analyse patterns
- Features lost ≥ 3 deals in a quarter → enter Initiative pipeline

---

### 4. NPS / CSAT Surveys — Quantitative Signals

**What surveys reveal:**
- Score trends (is satisfaction improving or declining?)
- Verbatim themes (what specific things are customers praising or criticising?)

**How it enters Upstream:**
- CS Ops runs quarterly NPS analysis: top 3 positive themes + top 3 negative themes
- Results presented to PM and leadership in a 60-min session
- Top negative themes become candidates for the next Upstream planning cycle

---

### 5. Product Analytics — Behavioural Data

**What analytics reveal:**
- Feature adoption rates (is anyone using what we built?)
- Drop-off points (where are users abandoning flows?)
- Error rates (are users hitting a wall we haven't seen in support?)

**How it enters Upstream:**
- PM reviews analytics weekly (15-min routine)
- Anomalies → investigation → either a bug or an Upstream hypothesis
- Low-adoption features → conversation with CSM about why → potentially a UX Initiative

---

## The Feedback Loop Table

| Signal Source | Signal Type | Logging Vehicle | Review Cadence | Enters Upstream When |
|--------------|------------|----------------|---------------|---------------------|
| Customer Success | Feature gaps, friction | CS Feedback (Jira) | Weekly triage | Pattern in ≥ 3 accounts |
| Support | Bug patterns, confusion | Bug report (Jira) | Weekly bug review | P1/P2 or ≥ 5 tickets |
| Sales (lost deals) | Missing features | CRM + Win/Loss Jira | Monthly | Same gap in ≥ 3 lost deals |
| NPS/CSAT | Satisfaction themes | Survey tool + analysis | Quarterly | Top negative theme |
| Product analytics | Adoption, drop-off | Analytics dashboard | Weekly | Anomaly or < 40% adoption |
| Post-mortems | Reliability gaps | Post-mortem → Jira | Per incident | Every P0/P1 action item |

---

## Anti-Pattern: The Feature Request Pipeline

::: warning This Is Not a Feature Request System
The feedback loop is **not** a pipeline for forwarding customer requests to engineering. It is a system for identifying **patterns** and translating them into **problems worth solving**.

The anti-pattern looks like this: customer says "I want a dark mode." CSM logs "Customer wants dark mode." PM receives "Feature request: dark mode." Engineer builds dark mode. This is not a feedback loop — it is a feature request pipeline. It skips the critical steps: Is this a pattern? Is it quantified? Is it strategic? Does the customer actually need dark mode, or do they need better readability (which has multiple solutions)?

**The correct flow:**
1. Customer says "I want dark mode"
2. CSM logs: "Customer reports difficulty reading the dashboard in bright environments" (the problem, not the solution)
3. PM triage: Is readability a theme? Check NPS verbatims, other CS Feedback, support tickets about visibility.
4. If pattern exists: PM writes Initiative about "Dashboard readability" — which might result in dark mode, or high-contrast mode, or configurable themes, or larger fonts.
5. If no pattern: Label `monitoring`. Move on.

The difference is crucial. Forwarding requests produces features. Analysing patterns produces solutions.
:::

---

## Real Example: How the Balance Bug Was Discovered Through Offstream

This is a real tracing of how the wallet balance bug moved from a customer signal to a shipped fix, following the feedback loop exactly as designed.

**Week 1–2: Signal accumulation**
Support begins receiving tickets: "My balance shows zero but I have a negative balance." Initial volume: 5–10 tickets per week. Support categorises as a known issue with workaround: "Check your balance via the mobile app."

**Week 3: Pattern detected**
Ticket volume increases to 30+ per week. Support Lead flags the pattern in the weekly CS Sync: "We have a significant support pattern around balance display. 60 tickets in 3 weeks, 34 unique accounts."

**Week 4: Signal enters the feedback loop**
CSM Lead logs a CS Feedback issue: `CS-Feedback-2847: Balance display bug — $0.00 shown for negative balances. 140 tickets. 34 accounts. High churn risk for affected accounts.`

**PM Feedback Triage (same week):**
PM sees 140 tickets, 34 accounts, potential churn risk. Escalates immediately to a P1 bug — this is no longer a feature request, it is a defect.

**Onstream response:**
Bug investigated. Root cause found: `WalletCard.vue` clamping logic. Fixed in `v2.13.6`. [RCA written](/onstream/rca-template). [Post-mortem not required](/onstream/post-mortem-template) (bug caught before production outage, but RCA was required as P1).

**Post-fix signal:**
The bug also surfaced a broader problem: customers said *"I don't trust the financial data in the dashboard."* This is not a bug — it is a trust problem. PM opens an Upstream Initiative: *"Improve financial transparency for wallet users."*

**New Upstream cycle begins.** The feedback loop worked exactly as designed.

::: details The Counterfactual: What If the Loop Was Broken?
Without the feedback loop:
- Support tickets pile up. No one aggregates the pattern.
- CSMs hear complaints but log nothing.
- PM never sees the signal. The bug is not discovered until a customer churns and cites "inaccurate financial data" as the reason.
- The broader trust problem is never identified.
- The 140 affected accounts slowly disengage. Some churn. Revenue declines.
- Leadership asks: "Why is churn increasing?" No one knows.

The cost of a broken feedback loop is not one missed signal. It is the compounding effect of every missed signal over time.
:::

---

## What Breaks the Loop

The feedback loop breaks when:

- CS logs feedback but PM never reviews it → signals pile up unread
- Support tickets don't include customer impact count → PM cannot prioritise
- Sales CRM is not connected to Jira → lost deal data is siloed
- NPS surveys are run but analysis is never presented to PM → data collected, never used
- Post-mortem actions don't get tracked to completion → same incidents recur
- CSMs stop logging because nothing happens with their feedback → the loop dies

**The fix:** Make the feedback loop a **standing agenda item** in the Initiative Weekly Sync. PM reports: "Here are the top 3 signals from Offstream this week."

---

