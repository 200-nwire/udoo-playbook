# Roles & Ownership

<span class="phase-badge offstream">🟣 Offstream</span>

## The Principle: Offstream Is the Signal Source

Every phase of the UDOO R&D Lifecycle produces value. Upstream produces clarity. Downstream produces software. Onstream produces reliability. But Offstream produces something uniquely valuable: **the truth about whether any of it matters to customers.**

Offstream is where the product meets reality. Customers adopt it, struggle with it, succeed with it, renew it, expand it, or leave it. Every one of those interactions generates a signal — and those signals are the most important input to the next Upstream cycle.

The roles in Offstream exist to **capture, interpret, and route those signals** so the product evolves based on evidence, not assumptions.

::: tip Offstream Is Not "Post-Launch"
Teams often treat Offstream as the quiet phase — the product shipped, the sprint ended, now we wait for the next cycle. This is a fatal misunderstanding. Offstream is the most commercially active phase. Renewals, expansion revenue, churn prevention, and strategic product feedback all happen here. If Offstream is passive, the business atrophies.
:::

---

## Customer Success Manager (CSM)

The CSM owns the **health and outcomes of their assigned accounts**. They are the persistent relationship between the customer and the product organisation — the person who knows what the customer is trying to achieve, how they are using the product, and where they are struggling.

| Responsibility | Detail |
|---------------|--------|
| **Account health ownership** | Maintains the [health score](/offstream/health-score) for each account. Knows the status at all times. |
| **Quarterly Business Reviews (QBRs)** | Prepares, delivers, and follows up on [QBR sessions](/offstream/account-cadence) with each account |
| **Renewal management** | Owns the renewal conversation. Starts 90 days before contract expiry. |
| **Onboarding facilitation** | Guides new customers from sign-up to first meaningful outcome (time to value) |
| **Feature adoption** | Tracks whether shipped features are actually adopted by their accounts. Reports gaps to PM. |
| **Feedback collection** | Logs CS Feedback issues in Jira within 24 hours of any significant customer interaction |
| **Churn risk detection** | Identifies at-risk accounts via health score drops, reduced usage, or direct signals |
| **Escalation** | Escalates unresolved customer issues from Onstream support to engineering with business context |

::: warning CSMs Are Not Support Agents
The CSM's job is proactive account management, not reactive troubleshooting. If CSMs spend most of their time fielding support tickets, something is wrong with the support process. CSMs should be spending their time on strategic conversations: adoption, value realisation, and growth.
:::

---

## Account Manager / Sales

Account Managers (AMs) and Sales own the **commercial relationship** — expansion, upselling, cross-selling, and new business within existing accounts.

| Responsibility | Detail |
|---------------|--------|
| **Expansion revenue** | Identifies and pursues upsell and cross-sell opportunities within existing accounts |
| **Contract negotiations** | Manages pricing, terms, and contract amendments |
| **Lost deal analysis** | Logs reasons for lost deals in CRM within 24 hours. Participates in monthly Win/Loss review with PM. |
| **Market intelligence** | Reports competitive positioning, feature gaps cited by prospects, and pricing pressure |
| **Renewal support** | Partners with CSM on renewals — CSM owns the relationship, AM owns the commercial terms |
| **Pipeline management** | Maintains accurate forecasts. Flags at-risk revenue to leadership. |

### The CSM-AM Partnership

The CSM and AM work the same accounts but from different angles. The CSM ensures the customer is **successful** (adoption, outcomes, satisfaction). The AM ensures the relationship is **commercially healthy** (revenue, expansion, contract).

| Scenario | CSM Role | AM Role |
|----------|----------|---------|
| Customer struggling with adoption | Lead: facilitate training, identify friction, log feedback | Support: adjust timeline expectations, defer expansion discussion |
| Renewal approaching | Lead: prepare QBR, demonstrate value realised | Support: negotiate terms, process contract |
| Expansion opportunity | Support: validate customer readiness and fit | Lead: scope proposal, negotiate pricing |
| Customer at risk of churn | Lead: intervention plan, executive sponsor engagement | Support: assess commercial options (discount, extended trial) |

---

## Support Lead

The Support Lead bridges Onstream and Offstream. They own the **escalation path** from day-to-day support into the broader customer success process.

| Responsibility | Detail |
|---------------|--------|
| **Escalation management** | Routes unresolved support issues to engineering with severity, impact, and customer context |
| **Pattern identification** | Aggregates support tickets to identify systemic issues — same bug across multiple customers |
| **Knowledge base** | Maintains customer-facing documentation, FAQs, and known-issue lists |
| **Support metrics** | Tracks first response time, resolution time, CSAT per interaction, ticket volume by category |
| **Customer voice** | Represents the customer perspective in incident triage and post-mortem sessions |
| **Feedback routing** | Ensures support-surfaced signals reach the [feedback loop](/offstream/feedback-loop) |

::: info Support Tickets Are the Fastest Signal
Customers contact support the moment something breaks. A spike in support tickets about the same feature is often the first indicator of a production issue — faster than monitoring, faster than synthetic tests. The Support Lead's job is to ensure that signal reaches engineering within minutes, not days.
:::

---

## Product Marketing

Product Marketing owns the **narrative** — how the product is positioned, communicated, and enabled for both customers and internal teams.

| Responsibility | Detail |
|---------------|--------|
| **Release communication** | Writes release notes, feature announcements, and blog posts for shipped features |
| **Positioning** | Defines how the product is differentiated from competitors in each market segment |
| **Enablement materials** | Creates sales decks, demo scripts, battle cards, and training content for the CS and Sales teams |
| **Customer education** | Develops webinars, tutorials, and onboarding guides that drive feature adoption |
| **Launch coordination** | Coordinates go-to-market for major releases — aligning CS, Sales, and Support readiness |
| **Market feedback** | Channels market positioning insights back to PM — what resonates, what doesn't, what competitors are doing |

### The Feature Announcement Flow

```
PM defines feature scope (Upstream)
    → Dev builds and ships (Downstream/Onstream)
        → Product Marketing writes announcement + enablement
            → CSMs communicate to accounts with context
                → Sales uses in expansion conversations
```

Without Product Marketing, features ship silently. CSMs discover new features from the changelog. Sales has no messaging. Customers find features by accident. This is the [Feature Dump anti-pattern](/offstream/anti-patterns).

---

## Product Manager (PM)

In Offstream, the PM is not leading — they are **receiving**. Offstream is where the PM listens, absorbs customer signals, and translates them into the language of Upstream.

| Responsibility | Detail |
|---------------|--------|
| **Signal intake** | Reviews all CS Feedback, support patterns, NPS themes, and lost deal data weekly |
| **Pattern recognition** | Identifies when individual signals form a pattern (same theme across 3+ accounts) |
| **Initiative creation** | Converts validated patterns into [Initiatives](/upstream/initiative-brief) for the next Upstream cycle |
| **Sprint review attendance** | Presents the "voice of the customer" segment: what Offstream signals say about recently shipped work |
| **Win/Loss review** | Monthly review with Sales: what features did we lose deals on? What do we win on? |
| **Adoption monitoring** | Tracks whether shipped features achieve target adoption. Low adoption triggers investigation. |

::: tip The PM's Offstream Calendar
- **Daily:** Scan CS Feedback queue (5 min)
- **Weekly:** CS Feedback triage session with CSM Lead (30 min)
- **Weekly:** Bug pattern review with Support Lead (15 min)
- **Monthly:** Win/Loss review with Sales (60 min)
- **Quarterly:** NPS/CSAT deep-dive with CS Ops (60 min)
:::

---

## RACI Matrix for Offstream Activities

| Activity | CSM | AM/Sales | Support Lead | Product Marketing | PM |
|----------|-----|----------|-------------|------------------|-----|
| **Account health monitoring** | A, R | I | C | I | I |
| **QBR preparation & delivery** | A, R | C | C | C | I |
| **Renewal management** | R | A | I | I | I |
| **Expansion identification** | C | A, R | I | C | I |
| **Churn intervention** | A, R | C | C | I | C |
| **CS Feedback logging** | R | R | R | I | A |
| **Feature adoption tracking** | R | I | C | C | A |
| **Release communication** | C | I | I | A, R | C |
| **Enablement content creation** | C | C | C | A, R | C |
| **Win/Loss analysis** | I | R | I | C | A |
| **NPS/CSAT analysis** | C | I | C | I | A |
| **Support escalation** | I | I | A, R | I | C |
| **Feedback loop to Upstream** | C | C | C | I | A, R |
| **Customer onboarding** | A, R | C | C | C | I |

::: details How to Read This Matrix
- **R (Responsible):** Does the work. Multiple roles can be responsible.
- **A (Accountable):** Owns the outcome. Only ONE role per activity.
- **C (Consulted):** Provides input before a decision.
- **I (Informed):** Notified after a decision.

If an activity has no "A," no one owns the outcome. If an activity has multiple "A"s, no one owns the outcome. Both are failure modes.
:::

---

## The Critical Principle: Offstream Feeds Upstream

Every Offstream role generates signals. The system only works if those signals have a **clear, reliable path into Upstream**. Without that path, Offstream roles become isolated — CSMs log feedback that nobody reads, Sales reports competitive gaps that never reach product, and Support identifies patterns that engineering never sees.

```
CSM       ──► CS Feedback (Jira)  ──┐
AM/Sales  ──► CRM + Win/Loss     ──┤
Support   ──► Bug reports + patterns──► PM reviews weekly ──► Upstream Initiative
Prod Mktg ──► Market signals     ──┤
NPS/CSAT  ──► Survey analysis    ──┘
```

The PM is the funnel. The [Feedback Loop](/offstream/feedback-loop) is the process. If the funnel is blocked — if the PM does not review signals, or if signals are logged but never triaged — the most important connection in the framework breaks.

::: warning The Feedback Loop Is the Framework's Immune System
Without Offstream signals flowing to Upstream, the product team operates on assumptions. They build features nobody asked for, miss problems customers are struggling with, and discover churn at renewal time instead of preventing it months earlier. The feedback loop is not a nice-to-have. It is the mechanism that makes the entire framework self-correcting.
:::

---

## Common Failure Modes

| Failure Mode | Symptom | Fix |
|-------------|---------|-----|
| CSM as support agent | CSM spends > 50% time on reactive troubleshooting | Strengthen Tier 1 support. Free CSMs for strategic work. |
| Disconnected AM | Sales pursues expansion without CSM input on account health | Require CSM sign-off before any expansion proposal. |
| Silent Product Marketing | Features ship without announcements or enablement | Add "Go-to-market checklist" to the [Definition of Done](/downstream/definition-of-done). |
| PM ignores signals | CS Feedback queue grows unchecked for weeks | Make signal review a standing calendar item with Delivery Manager oversight. |
| Support black hole | Tickets enter support but patterns never reach product | Weekly support pattern review in the Offstream cadence. |

---

[← Back to Offstream Overview](/offstream/) · [Customer Lifecycle Model →](/offstream/customer-lifecycle)
