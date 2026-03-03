# Bug Label Taxonomy

<span class="phase-badge onstream">🟠 Onstream</span>

## Why a Bug Taxonomy Matters

Every organisation has bugs. What separates high-performing teams from chaotic ones is not the absence of defects but the **consistency with which they describe, classify, and respond to them**.

Without a shared taxonomy, you get this: one developer calls something "critical" while another calls the same class of defect "medium." A QA engineer labels a bug "UI" while support tags it "frontend." A PM asks "how many production bugs did we ship last quarter?" and gets a different number depending on who runs the Jira query, because the filters depend on labels that were applied inconsistently.

A taxonomy solves three problems simultaneously:

1. **Consistent language.** Everyone — developers, QA, support, PMs, leadership — uses the same labels with the same meanings. There is no ambiguity about what "severity/high" means versus "severity/critical."
2. **Faster triage.** When a bug arrives with correct labels, the on-call team knows the expected response time, the escalation path, and whether an RCA is required — without having to read the full ticket and make a judgment call.
3. **Better reporting.** Trend analysis is only possible when the underlying data is consistent. If you want to know whether your regression rate is increasing, you need every regression labelled `type/regression` — not some labelled "regression," some labelled "broke after release," and some labelled "used to work."

::: tip Taxonomy Is Infrastructure, Not Bureaucracy
Teams often resist structured labelling because it feels like overhead. It is the opposite. Labels are infrastructure — they automate routing, enable dashboards, and make every future question about quality answerable. The 30 seconds spent labelling a bug correctly save hours of manual analysis later.
:::

This taxonomy uses **seven dimensions**. Severity and Impact together auto-calculate Priority.

---

## Dimension 1 — Severity

*How technically bad is it?*

| Label | Meaning | When to Use |
|-------|---------|-------------|
| <span class="label sev-critical">severity/critical</span> | System down, data loss, money loss, security breach | Immediate action. Impacts safety, funds, or compliance. |
| <span class="label sev-high">severity/high</span> | Major functionality broken; core flow unusable | User blocked from completing a major action. |
| <span class="label sev-medium">severity/medium</span> | Function works incorrectly but workaround exists | Annoying and visible, but not urgent. |
| <span class="label sev-low">severity/low</span> | Cosmetic / typo / minor UI glitch | Does not affect functionality. |

**Real example — Balance display bug:**
> The balance displays `$0.00` instead of `-$125.50`. The user can still use the app, so it's not a full outage. But financial data is incorrect. → <span class="label sev-high">severity/high</span>

---

## Dimension 2 — Impact

*How badly does it affect users?*

| Label | Meaning | When to Use |
|-------|---------|-------------|
| <span class="label red">impact/blocker</span> | User cannot proceed at all — no workaround | Complete block on a business flow. |
| <span class="label red">impact/high</span> | Flow severely degraded; major friction | Major issues but user can continue with risk. |
| <span class="label yellow">impact/medium</span> | Noticeable inconvenience; secondary flow affected | Usability impact but main flow works. |
| <span class="label green">impact/low</span> | Very small annoyance; minimal effect | Users barely notice. |

**Why both Severity and Impact?**

`severity` = how bad the code is broken.
`impact` = how badly the user is affected.

These are not the same. A critical security vulnerability in a feature used by 0.1% of users has `severity/critical` but potentially `impact/medium`. A cosmetic bug that breaks the primary CTA button has `severity/low` but `impact/blocker`.

Together they give **true priority**.

---

## Dimension 3 — Priority (Auto-Calculated)

Priority is never set manually. It is derived from the intersection of Severity and Impact using the following matrix:

| | impact/blocker | impact/high | impact/medium | impact/low |
|---|---|---|---|---|
| **severity/critical** | **P0** | P0 | P1 | P2 |
| **severity/high** | P0 | **P1** | P2 | P3 |
| **severity/medium** | P1 | P2 | **P2** | P3 |
| **severity/low** | P2 | P3 | P3 | **P3** |

The simplified formula:

| Priority | Formula | Response |
|----------|---------|---------|
| <span class="priority-p0">P0</span> | critical + blocker | Stop everything. Immediate. |
| <span class="priority-p1">P1</span> | high + high | Urgent. Fix in current sprint. |
| <span class="priority-p2">P2</span> | medium + medium | Planned. Fix in normal queue. |
| <span class="priority-p3">P3</span> | Everything else | Backlog. Low priority. |

::: warning Never Override the Formula
If you feel the auto-calculated priority is wrong, the correct response is to re-evaluate your severity and impact labels — not to override the priority. An override breaks the system: it means priority is subjective, and every triage meeting becomes a negotiation instead of a calculation.
:::

**Balance bug priority:**
- `severity/high` + `impact/high` (financial data incorrect for all users with negative balance) → <span class="priority-p1">P1</span>

**JWT outage priority:**
- `severity/critical` + `impact/blocker` (all users locked out) → <span class="priority-p0">P0</span>

---

## Dimension 4 — Type

*What category of problem is this?*

| Label | Meaning | Note |
|-------|---------|------|
| <span class="label blue">type/bug</span> | Standard defect | Most bugs fall here. |
| <span class="label red">type/regression</span> | Worked before, now broken | Spike in regressions = bad release pipeline. |
| <span class="label yellow">type/performance</span> | Slow, lag, timeout, memory issue | Impacts UX, scalability, cost. |
| <span class="label red">type/security</span> | Vulnerability, permissions issue | Must be prioritised higher than severity alone. |
| <span class="label purple">type/visual</span> | UI/UX display issue | Helps track design regressions. |

**Balance bug type:** `type/bug` — a standard defect introduced via incorrect conditional rendering.

**JWT outage type:** `type/regression` — the system worked before the APIM policy change.

---

## Dimension 5 — Environment

| Label | When to Use |
|-------|-------------|
| <span class="label red">env/production</span> | Live system. Real users affected. Highest urgency. |
| <span class="label yellow">env/staging</span> | Staging/UAT. Ensures release safety. |
| <span class="label green">env/development</span> | Found before QA or release. Dev catching own work. |

---

## Dimension 6 — Area

*Which domain owns it?*

| Label | Domain |
|-------|--------|
| <span class="label blue">area/api</span> | Backend logic, endpoints |
| <span class="label blue">area/frontend</span> | Web UI, rendering, components |
| <span class="label blue">area/mobile</span> | iOS/Android |
| <span class="label blue">area/database</span> | Schema, queries, migrations |
| <span class="label blue">area/infra</span> | Deployment, DNS, CI/CD |
| <span class="label blue">area/auth</span> | Login, sessions, tokens |
| <span class="label blue">area/data-pipeline</span> | ETL, ingestion, transformations |
| <span class="label blue">area/payments</span> | Transactions, refunds |
| <span class="label blue">area/ux</span> | Experience, interaction |

---

## Dimension 7 — Root Cause

*Required for P0/P1 only. Applied during or after RCA.*

| Label | Meaning |
|-------|---------|
| <span class="label gray">root/requirements</span> | Spec unclear or wrong |
| <span class="label gray">root/logic-error</span> | Developer mistake in logic |
| <span class="label gray">root/testing-gap</span> | Test missing or incorrect |
| <span class="label gray">root/data</span> | Wrong data mapping |
| <span class="label gray">root/configuration</span> | Wrong env var, feature flag, config |
| <span class="label gray">root/dependency</span> | Library or external system issue |
| <span class="label gray">root/unknown</span> | Placeholder until RCA completed |

**Balance bug root cause:** `root/logic-error` — incorrect conditional clamping in `WalletCard.vue`.

**JWT outage root cause:** `root/configuration` — APIM policy deployed without staging validation.

---

## Severity Decision Flowchart

When you find a bug, walk through these questions in order to determine the correct severity:

```
1. Is the system completely down, or is there active data loss,
   money loss, or a security breach?
   → YES: severity/critical

2. Is a core user flow broken with no workaround?
   → YES: severity/high

3. Is a feature broken but users can work around it?
   → YES: severity/medium

4. Is it cosmetic, a typo, or a minor UI glitch?
   → YES: severity/low
```

Then determine impact:

```
1. Can users proceed at all?
   → NO: impact/blocker

2. Can users proceed but with major friction or risk?
   → YES to friction/risk: impact/high

3. Is it a noticeable inconvenience on a secondary flow?
   → YES: impact/medium

4. Do users barely notice?
   → YES: impact/low
```

::: details Edge Case: Security Vulnerabilities
Security issues are tricky because their impact may be theoretical. A SQL injection vulnerability that has not been exploited has `severity/critical` (the code is dangerously broken) but potentially `impact/low` (no user has been affected yet). In these cases, **always escalate**: set impact to at least `impact/high` for any confirmed security vulnerability, because the potential impact is unbounded.
:::

---

## Worked Example 1 — Wallet Balance Bug

**Scenario:** QA discovers during staging UAT that the wallet dashboard displays `$0.00` for users with negative balances. The API correctly returns `-125.50` but `WalletCard.vue` clamps the value with `balance.amount > 0 ? balance.amount : 0`.

| Dimension | Label | Rationale |
|-----------|-------|-----------|
| **Severity** | <span class="label sev-high">severity/high</span> | Financial data is incorrect. Not a full outage, but core data is wrong. |
| **Impact** | <span class="label red">impact/high</span> | Every user with a negative balance sees wrong data. No workaround in the UI. |
| **Priority** | <span class="priority-p1">P1</span> | Auto-calculated: high + high = P1. Fix in current sprint. |
| **Type** | <span class="label blue">type/bug</span> | Standard logic defect. Not a regression (feature was new). |
| **Environment** | <span class="label yellow">env/staging</span> | Caught in staging UAT before production release. |
| **Area** | <span class="label blue">area/frontend</span> | Bug is in the Vue component rendering layer. API is correct. |
| **Root Cause** | <span class="label gray">root/logic-error</span> | Developer used `> 0` instead of `!= null` for null-guarding. |

**Full label string:**
```
severity/high  impact/high  → Priority: P1
type/bug
env/staging
area/frontend
root/logic-error
```

**Outcome:** Fixed in `v2.13.6` hotfix. RCA written. Lint rule added to prevent `> 0` clamping on numeric display fields.

---

## Worked Example 2 — JWT Policy Outage

**Scenario:** A new APIM policy enforcing the `aud` (audience) claim on JWTs was deployed directly to production without staging validation. All API calls began returning `403 Forbidden`. 44-minute production outage affecting 100% of users.

| Dimension | Label | Rationale |
|-----------|-------|-----------|
| **Severity** | <span class="label sev-critical">severity/critical</span> | Complete system outage. All API routes unusable. |
| **Impact** | <span class="label red">impact/blocker</span> | 100% of users blocked from all functionality. No workaround. |
| **Priority** | <span class="priority-p0">P0</span> | Auto-calculated: critical + blocker = P0. Stop everything. |
| **Type** | <span class="label red">type/security</span> | JWT/authentication policy misconfiguration. Security domain. |
| **Environment** | <span class="label red">env/production</span> | Deployed directly to production. Real users affected. |
| **Area** | <span class="label blue">area/auth</span> | Authentication and token validation layer. |
| **Root Cause** | <span class="label gray">root/configuration</span> | APIM policy promoted without staging gate or backward-compatibility check. |

**Full label string:**
```
severity/critical  impact/blocker  → Priority: P0
type/security
env/production
area/auth
root/configuration
```

**Outcome:** Policy reverted within 29 minutes of root cause identification. Post-mortem written within 24 hours. Staging deployment gate added to APIM policy promotion process.

---

## When to Require Root Cause Analysis

Not every bug needs an RCA. RCAs are expensive — they take time, require investigation, and involve multiple people. The rule is simple:

| Severity | RCA Required? |
|----------|--------------|
| <span class="label sev-critical">severity/critical</span> | ✅ **Always required**, regardless of impact or environment. |
| <span class="label sev-high">severity/high</span> | ✅ **Always required** for P0 and P1. Recommended for P2. |
| <span class="label sev-medium">severity/medium</span> | ⚠️ Recommended if the root cause reveals a systemic pattern. |
| <span class="label sev-low">severity/low</span> | ❌ Not required. Fix and move on. |

::: info RCA Is for Learning, Not Punishment
The purpose of an RCA is to prevent the **class** of bug from recurring. If you find yourself writing "developer made a mistake" as the root cause, you have not gone deep enough. Ask why the mistake was possible. The answer is always systemic: a missing test, a misleading API, a confusing codebase convention, or a gap in the DoD.
:::

---

## Label Hygiene

Consistent labels require consistent rules about who can set them and when they can change.

### Rules for Adding Labels

1. **At creation:** The reporter must set `severity`, `impact`, and `type`. These three are required fields — Jira should enforce them via a custom create screen.
2. **During triage:** The triage lead validates or adjusts severity and impact. If adjusted, they add a comment explaining why.
3. **After investigation:** The developer adds `area` and `root cause` labels once the bug is understood.
4. **Environment:** Set by the reporter based on where the bug was found. Never changed retroactively.

### Who Can Change Severity

| Role | Can Set Initial Severity | Can Upgrade | Can Downgrade |
|------|------------------------|-------------|---------------|
| Reporter (anyone) | ✅ | ❌ | ❌ |
| Triage Lead / QA Lead | ✅ | ✅ | ✅ (with comment) |
| Tech Lead | ✅ | ✅ | ✅ (with comment) |
| Delivery Manager | ✅ | ✅ | ❌ (can request) |
| Product Manager | ✅ | ✅ | ❌ (can request) |

::: warning Severity Inflation and Deflation
**Inflation** happens when reporters over-classify to get faster response. The fix: triage reviews every P0/P1 within 1 hour and adjusts if needed.
**Deflation** happens when developers downgrade to avoid RCA requirements. The fix: only the Triage Lead or Tech Lead can downgrade, and every downgrade requires a comment explaining the rationale.
:::

### Label Change Audit

Every label change on a P0/P1 ticket must include:
- **Who** changed the label
- **What** was changed (before → after)
- **Why** it was changed (rationale in a Jira comment)

This creates an audit trail that prevents silent severity downgrades and supports post-incident review.

---

## Integration with Jira

Labels in this taxonomy map directly to Jira fields. This enables automation, dashboards, and reporting without manual data entry.

### Field Mapping

| Taxonomy Dimension | Jira Field Type | Field Name | Values |
|-------------------|----------------|------------|--------|
| Severity | Single-select custom field | `Severity` | critical, high, medium, low |
| Impact | Single-select custom field | `Impact` | blocker, high, medium, low |
| Priority | Auto-calculated field | `Priority` | P0, P1, P2, P3 |
| Type | Labels | `bug-type/*` | bug, regression, performance, security, visual |
| Environment | Single-select custom field | `Environment Found` | production, staging, development |
| Area | Component field | `Component` | api, frontend, mobile, database, infra, auth, etc. |
| Root Cause | Single-select custom field | `Root Cause` | requirements, logic-error, testing-gap, data, configuration, dependency, unknown |

### Automation Rules

Configure the following Jira automations to enforce the taxonomy:

| Trigger | Action |
|---------|--------|
| Severity = critical AND Impact = blocker | Set Priority = P0, send Slack alert to `#incidents`, page on-call |
| Severity = high AND Impact = high | Set Priority = P1, notify Tech Lead and Delivery Manager |
| Priority = P0 or P1 | Add "RCA Required" label, create linked RCA subtask |
| Root Cause field empty after 5 business days (P0/P1) | Send reminder to assignee and Tech Lead |
| Severity changed | Add comment with before/after values and changer identity |
| Bug created without Severity or Impact | Block creation with validation message |

::: tip Dashboard Queries
With consistent labels, powerful dashboards become trivial:
- **Regression rate:** `type = regression AND created >= -30d` / total bugs
- **Production escape rate:** `env = production` / total bugs (lower is better)
- **Root cause distribution:** Group by `Root Cause` for the last quarter
- **Area hotspots:** Group by `Component` and sort by count — shows which areas produce the most defects
:::

---

## Pattern Analysis

The real value of consistent labelling is **trend analysis over time**:

- Spike in `root/testing-gap` → improve AC quality and Gherkin coverage
- Spike in `type/regression` → audit the release pipeline and deployment process
- Spike in `area/auth` → schedule a security review
- Spike in `env/production` that should have been `env/staging` → improve staging parity
- Increasing `root/configuration` → invest in config-as-code and environment validation
- Cluster of `root/requirements` → strengthen the Definition of Ready and AC review process

::: details Quarterly Taxonomy Health Check
Every quarter, review the taxonomy itself:
1. Are all labels being used consistently? Pull a sample of 20 bugs and verify labels match the definitions.
2. Are any labels unused? If a label has zero usage in 6 months, consider removing it.
3. Are there gaps? If the team keeps adding ad-hoc labels outside the taxonomy, it is a signal that a new category is needed.
4. Is the priority formula producing sensible results? Review the last quarter's P0s and P1s — were they truly urgent?
:::

---

[← Back to Onstream Overview](/onstream/) · [RCA Template →](/onstream/rca-template)
