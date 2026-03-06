# Customer Lifecycle Model

<span class="phase-badge offstream">🟣 Offstream</span>

## The Moment This Page Is For

Strato — the B2B SaaS from field service companies — shipped Job Templates in Sprint 3. Rachel the PM was proud. The template-creation flow took 28 seconds instead of 3 minutes. Dispatchers loved it.

Six months later, Strato didn't renew.

The CSM, Noa, was stunned. "They never complained. They had no open tickets." She pulled the analytics. Template usage had peaked at week 4, then dropped steadily for three months. Nobody had noticed because nobody was looking. The champion who drove the purchase had left in month 2. The replacement never ran a training session. The dispatchers went back to re-entering job fields manually.

The feature was good. The post-delivery work was not. Strato churned not because of what was built, but because of what happened after it shipped.

The customer lifecycle model exists to prevent exactly this. Every account is somewhere in a journey — from onboarding through to advocacy. Knowing where they are determines what the Offstream team does. Ignoring where they are is how Strato happens.

## The Six Stages

A customer's relationship with your product is not a single event — it is a journey through distinct stages, each with its own activities, risks, and success criteria. Understanding where each account sits in this lifecycle determines what the Offstream team does for them, what signals they generate, and how those signals feed back to [Upstream](/upstream/).

The lifecycle is a funnel. Every stage has a drop-off risk. The Offstream team's job is to maximise the flow through the funnel — moving customers forward from initial onboarding to active advocacy — while detecting and intervening when accounts stall or regress.

```
Onboarding → Adoption → Engagement → Renewal → Expansion → Advocacy
     ↑                                                          │
     └──────────── Upstream ← Feedback Loop ←──────────────────┘
```

::: tip Time to Value: The Metric That Rules Onboarding
"Time to value" (TTV) is the elapsed time between a customer signing the contract and experiencing their first meaningful outcome from the product. A meaningful outcome is not "logged in" or "completed setup" — it is the first moment the customer achieves something they could not do without the product. Reducing TTV is the single highest-leverage investment in customer retention.
:::

---

## Stage 1 — Onboarding

**Definition:** The customer has signed but has not yet achieved their first meaningful outcome. They are setting up, configuring, importing data, and learning the product.

### Key Activities

| Activity | Owner | Detail |
|----------|-------|--------|
| Welcome & kickoff call | CSM | Set expectations, introduce the team, agree on success criteria |
| Technical setup | Support / CSM | Environment provisioning, SSO configuration, data import |
| Training sessions | CSM + Product Marketing | Role-based training: admins, power users, end users |
| Success plan creation | CSM | Define measurable milestones for the first 30/60/90 days |
| Stakeholder mapping | CSM | Identify the economic buyer, champion, technical admin, and end users |

### Health Indicators

| Healthy | Unhealthy |
|---------|-----------|
| Customer completes setup within 14 days | Setup stalls for > 21 days |
| Champion is engaged and responsive | No single point of contact identified |
| First meaningful outcome within 30 days | 30 days pass with no value realisation |
| Users log in and explore features | Admin set up account but no end users active |

### Common Failure Modes

- **The Abandoned Onboarding:** Contract signed, champion is excited, then silence. No kickoff call scheduled, no training delivered. The customer tries to self-serve, gets frustrated, and disengages before they ever succeed. This is often the most preventable source of churn.
- **The Dump-and-Run:** Sales closes the deal and hands off to CS with no context. The CSM has no idea what was promised, what the customer's goals are, or who the key stakeholders are. Onboarding starts from scratch.

### Success Metrics

| Metric | Target |
|--------|--------|
| Time to first login | < 3 days |
| Time to value (TTV) | < 30 days |
| Onboarding completion rate | > 90% |
| Training attendance rate | > 80% of invited users |

### Feedback to Upstream

Onboarding friction is a direct input to product improvement. If multiple customers struggle with the same setup step, it signals a UX problem or a missing feature. CSMs log these patterns as CS Feedback issues for PM triage.

---

## Stage 2 — Adoption

**Definition:** The customer has achieved their first outcome and is now integrating the product into their regular workflows. Usage is growing but not yet habitual.

### Key Activities

| Activity | Owner | Detail |
|----------|-------|--------|
| Usage monitoring | CSM | Track login frequency, feature usage, and workflow completion rates |
| Feature guidance | CSM | Proactively introduce features relevant to the customer's use case |
| Success milestone check | CSM | Verify 30/60/90-day milestones from the success plan |
| User expansion | CSM | Help the customer add more users and departments |
| Integration support | Support | Assist with API integrations, data connections, and workflow automation |

### Health Indicators

| Healthy | Unhealthy |
|---------|-----------|
| Daily active users (DAU) growing week over week | DAU flat or declining after initial spike |
| Customer using 3+ core features | Customer only uses 1 basic feature |
| Champion requests additional training for new users | No contact from customer for 2+ weeks |
| API integration in progress or complete | Customer using manual workarounds instead of product features |

### Common Failure Modes

- **The Plateau:** Customer achieves initial value but never deepens usage. They use the product for one narrow task and ignore everything else. This makes them vulnerable to churn — a cheaper, simpler tool could replace the one feature they use.
- **The Shelfware:** Product was purchased by leadership but never adopted by the team. Usage reports show admin logins only. End users were never trained, never saw the value, and use their old tools.

### Churn Risk Indicators

| Signal | Risk Level |
|--------|------------|
| DAU declining for 2+ consecutive weeks | 🟡 Amber |
| Champion leaves the company | 🔴 Red |
| Customer raises 3+ support tickets about the same issue | 🟡 Amber |
| No feature adoption beyond basic workflow | 🟡 Amber |

---

## Stage 3 — Engagement

**Definition:** The product is embedded in the customer's daily operations. Usage is habitual, multiple features are adopted, and the customer is realising ongoing value.

### Key Activities

| Activity | Owner | Detail |
|----------|-------|--------|
| QBR delivery | CSM | Quarterly Business Reviews demonstrating value and planning ahead |
| Health score monitoring | CSM | Continuous tracking via the [Health Score Framework](/offstream/health-score) |
| Best practice sharing | CSM + Product Marketing | Industry insights, usage tips, case study development |
| Executive sponsor engagement | CSM | Maintain relationship with the economic buyer, not just the champion |
| Product advisory participation | CSM + PM | Invite engaged customers to beta programs and feedback sessions |

### Health Indicators

| Healthy | Unhealthy |
|---------|-----------|
| Consistent high usage across multiple features | Usage concentrated in a single feature |
| Customer provides unsolicited positive feedback | Customer is silent — no complaints, but no enthusiasm |
| Executive sponsor attends QBRs | QBRs are attended only by the admin |
| Customer refers other departments or companies | Customer never mentions the product externally |

### Common Failure Modes

- **The Complacent CSM:** The account is healthy, so the CSM deprioritises it. No QBRs, no check-ins, no proactive communication. The customer feels neglected, and when a competitor reaches out, they listen.
- **The Feature Treadmill:** Customer's engagement is maintained only by promising new features. If the release cadence slows, engagement drops. This signals the core product is not delivering enough standalone value.

---

## Stage 4 — Renewal

**Definition:** The contract term is approaching expiry. The renewal conversation evaluates whether the customer has received sufficient value to justify continued investment.

### Key Activities

| Activity | Owner | Detail |
|----------|-------|--------|
| Renewal planning (T-90 days) | CSM | Begin internal renewal assessment. Review health score, usage data, support history. |
| Value summary preparation | CSM | Build a data-driven case for renewal: what the customer achieved, what's planned next |
| Risk assessment | CSM + AM | Identify any blockers to renewal: unresolved issues, missed promises, competitor pressure |
| Renewal conversation (T-60 days) | CSM + AM | Present value summary, discuss terms, surface concerns |
| Contract execution (T-30 days) | AM | Finalise terms, process contract. CSM remains the relationship anchor. |

### The 90-Day Countdown

| Milestone | When | Activity |
|-----------|------|----------|
| T-90 | 90 days before expiry | Internal renewal review: health score, risks, upsell potential |
| T-75 | 75 days before expiry | CSM outreach: "Let's discuss your upcoming renewal" |
| T-60 | 60 days before expiry | Formal renewal meeting with value summary and forward plan |
| T-45 | 45 days before expiry | Address any open issues or objections |
| T-30 | 30 days before expiry | Contract sent for signature. Escalate if unsigned. |
| T-14 | 14 days before expiry | 🔴 Escalation: if unsigned, involve VP and executive sponsor |
| T-0 | Expiry date | Contract must be signed. If not, churn is confirmed. |

::: warning The Renewal Surprise Anti-Pattern
If the first time you discuss renewal is at T-30, you have already failed. Churn decisions are made long before the contract expires. A customer who has been struggling silently for 6 months will not be saved by a last-minute discount. Start at T-90 — or better, never stop monitoring health.
:::

### Churn Risk Indicators at Renewal

| Signal | Risk Level |
|--------|------------|
| Health score Red for 2+ months before renewal | 🔴 Critical |
| Champion departed and no replacement identified | 🔴 Critical |
| Customer evaluating competitors (reported by AM) | 🔴 Critical |
| Usage declining quarter over quarter | 🟡 High |
| Multiple unresolved support issues | 🟡 High |
| Customer requests shorter contract term | 🟡 Moderate |

---

## Stage 5 — Expansion

**Definition:** The customer has renewed and is a candidate for increased investment — more users, more features, higher tier, or additional products.

### Key Activities

| Activity | Owner | Detail |
|----------|-------|--------|
| Expansion signal identification | CSM + AM | Usage hitting plan limits, new departments interested, customer requesting features in higher tier |
| Business case development | AM + CSM | Build the value case for expansion: ROI of current usage, projected ROI of expansion |
| Upsell/cross-sell proposal | AM | Formal proposal with pricing, scope, and implementation plan |
| Implementation planning | CSM | Ensure the expansion is supported: training, onboarding for new users, feature enablement |
| Success criteria for expansion | CSM | Define what success looks like for the expanded scope |

### Expansion Triggers

| Trigger | Expansion Type |
|---------|---------------|
| User count approaching plan limit | User expansion |
| Department outside original scope requests access | Departmental expansion |
| Customer consistently uses advanced features | Tier upgrade |
| Customer asks about features in a different product | Cross-sell |
| Customer's business is growing (public signals: funding, hiring) | Account growth |

::: tip Expansion Is Earned, Not Sold
Expansion should be a natural consequence of value delivered. If the customer has to be convinced to expand, they are not ready. If they are asking for more — more users, more features, more capabilities — the CSM and AM should be making it easy, not pushing.
:::

---

## Stage 6 — Advocacy

**Definition:** The customer is not just successful — they are an active advocate for the product. They refer others, participate in case studies, speak at events, and contribute to the product community.

### Key Activities

| Activity | Owner | Detail |
|----------|-------|--------|
| Reference programme | CSM + Product Marketing | Invite advocates to serve as references for prospects |
| Case study development | Product Marketing + CSM | Co-create case studies highlighting the customer's success |
| Community participation | Product Marketing | Invite advocates to user groups, beta programmes, advisory boards |
| Speaking opportunities | Product Marketing | Propose advocates for conference talks, webinars, podcasts |
| Feedback partnership | PM + CSM | Engage advocates as early reviewers of new features and UX research participants |

### Health Indicators

| Healthy | Unhealthy |
|---------|-----------|
| Customer proactively refers prospects | Customer is satisfied but passive |
| Customer participates in case studies and events | Customer declines all external engagement |
| NPS score: Promoter (9-10) | NPS score: Passive (7-8) |
| Customer provides detailed, constructive product feedback | Customer has stopped giving feedback — sign of disengagement |

### Feedback to Upstream

Advocates are the highest-quality signal source. They know the product deeply, use it intensively, and have constructive opinions about its direction. Their feedback carries weight because it comes from expertise and investment, not frustration. PM should prioritise advocate feedback in the [Feedback Loop](/offstream/feedback-loop).

---

## The Lifecycle Funnel: Where Customers Are Lost

Each stage transition is a potential drop-off point. Understanding where customers are lost tells you where to invest:

| Transition | Common Drop-Off Reason | Intervention |
|-----------|----------------------|-------------|
| Onboarding → Adoption | Setup too complex, no training, no champion | Simplify setup, mandatory kickoff call, success plan |
| Adoption → Engagement | Plateau at basic usage, competitor offers simpler solution | Proactive feature guidance, best practice sharing |
| Engagement → Renewal | Silent dissatisfaction, unresolved issues, champion departure | Continuous health monitoring, executive sponsor relationship |
| Renewal → Expansion | Customer content but not growing, no business case for expansion | Identify and articulate expansion value proactively |
| Expansion → Advocacy | Customer successful but private, no incentive to advocate | Reference programme, community engagement, co-marketing |

::: details Measuring Funnel Health
Track the **conversion rate** at each stage transition quarterly:
- What percentage of onboarding customers reach adoption within 30 days?
- What percentage of adopted customers are engaged (using 3+ features)?
- What is the gross retention rate at renewal?
- What percentage of renewed customers expand within 12 months?
- What percentage of expanded customers become advocates?

These metrics reveal the structural health of your Offstream operation — not for individual accounts, but for the system as a whole.
:::

---

## How Each Stage Feeds Back to Upstream

| Stage | Signal Type | Example | Upstream Action |
|-------|------------|---------|----------------|
| Onboarding | Setup friction | "5 customers struggled with the same import step" | UX Initiative: simplify data import wizard |
| Adoption | Feature gaps | "Customers want bulk export — 3 accounts asked this month" | Feature request enters Initiative pipeline |
| Engagement | Usage patterns | "Nobody uses the reconciliation feature" | PM investigates: is it discoverable? Is it useful? |
| Renewal | Churn reasons | "Lost 2 accounts citing mobile app quality" | Mobile quality Initiative in next planning cycle |
| Expansion | Growth blockers | "Customers want SSO before adding more departments" | SSO moves up the priority stack |
| Advocacy | Market positioning | "Advocates praise speed but criticise reporting" | PM balances roadmap: invest in reporting |

Every stage generates data that should flow through the [Feedback Loop](/offstream/feedback-loop) to Upstream. If any stage is silent — producing no signals — it is a sign that the Offstream team is not listening, not logging, or not routing.

---

