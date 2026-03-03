# Bug Label System

## Why a Label Taxonomy?

Ad-hoc bug labelling creates a backlog where every bug is "high priority" and no one agrees on what that means. Without a shared taxonomy, triage meetings devolve into debates about feelings rather than facts, trend analysis is impossible, and critical bugs hide in plain sight.

UDOO uses a **six-dimension label taxonomy**. Every bug gets labels from each applicable dimension. Severity and Impact together auto-calculate Priority — removing subjectivity from the most consequential decision in bug triage.

::: tip The Two-Question Rule
When filing a bug, answer two questions first:
1. **How technically bad is it?** → That is Severity.
2. **How badly does it affect users?** → That is Impact.

Everything else follows from these two answers.
:::

---

## Why Both Severity AND Impact?

This is the most common question about the taxonomy, so let us address it up front.

**Severity** measures how broken the code is — the technical seriousness of the defect.

**Impact** measures how badly users are affected — the business and user-experience seriousness.

These are not the same thing. Consider:

| Scenario | Severity | Impact | Why They Differ |
|----------|----------|--------|-----------------|
| Critical security vulnerability in an admin-only feature used by 3 people | `critical` | `medium` | Technically catastrophic, but very few users are affected |
| Misaligned button that blocks the primary call-to-action on mobile | `low` | `blocker` | Cosmetically trivial, but users cannot proceed |
| Database deadlock under concurrent writes | `critical` | `low` | Severe technical issue, but only triggers under rare load conditions |
| Wrong currency symbol on the main dashboard | `medium` | `high` | Moderate technical issue, but every user sees it immediately |

If you collapse severity and impact into a single field, you lose the ability to distinguish these cases — and you make the wrong triage decision half the time.

---

## Dimension 1 — Severity

*How technically bad is the defect?*

| Label | Meaning | When to Use | Example |
|-------|---------|-------------|---------|
| `severity/critical` | System down, data loss, money loss, security breach | Immediate action required. Affects safety, funds, or compliance. | Database corruption on write; payment charged twice; auth bypass |
| `severity/high` | Major functionality broken; core flow unusable | User is blocked from completing a primary action. | Login fails for all users on iOS; transaction history returns empty |
| `severity/medium` | Function works incorrectly but a workaround exists | Annoying and visible, but the user can still accomplish their goal. | Filter returns wrong results but manual search works; date picker defaults to wrong timezone |
| `severity/low` | Cosmetic, typo, minor UI glitch | Does not affect functionality at all. | Button text says "Cancle" instead of "Cancel"; 1px border misalignment |

::: warning Severity Is About the Code, Not the User
A `severity/critical` bug is critical because of what it does technically (data loss, security breach), not because a user is upset. User frustration is captured by Impact.
:::

---

## Dimension 2 — Impact

*How badly does this affect users?*

| Label | Meaning | When to Use | Example |
|-------|---------|-------------|---------|
| `impact/blocker` | User cannot proceed at all — no workaround | Complete block on a business-critical flow. | Checkout button is unresponsive; app crashes on launch |
| `impact/high` | Flow severely degraded; major friction | User can technically proceed but with significant difficulty or risk. | Transaction takes 45 seconds instead of 2; form loses data on back-navigation |
| `impact/medium` | Noticeable inconvenience; secondary flow affected | Usability impact on a non-critical path. | Export to CSV includes a blank header row; dark mode has contrast issues on one screen |
| `impact/low` | Very small annoyance; minimal effect | Users barely notice or are unaffected. | Tooltip flickers on hover; loading spinner is off-center |

---

## Dimension 3 — Priority (Auto-Calculated)

Priority is **not a label you choose**. It is derived from the combination of Severity and Impact.

| Priority | Severity + Impact | Response Time | Action |
|----------|------------------|---------------|--------|
| **P0** | `critical` + `blocker` | Immediate | Stop all other work. Incident process activated. Stakeholders notified within 30 minutes. |
| **P1** | `high` + `high` | Same day | Fix in current sprint. Escalate if blocked. Stakeholders notified within 4 hours. |
| **P2** | `medium` + `medium` | Planned | Fix in normal backlog priority. No escalation unless ageing > 2 sprints. |
| **P3** | Everything else | Backlog | Low priority. Fix when capacity allows. Review quarterly for relevance. |

::: details Full Priority Matrix

| | `impact/blocker` | `impact/high` | `impact/medium` | `impact/low` |
|---|---|---|---|---|
| **`severity/critical`** | **P0** | P1 | P1 | P2 |
| **`severity/high`** | P1 | **P1** | P2 | P2 |
| **`severity/medium`** | P1 | P2 | **P2** | P3 |
| **`severity/low`** | P2 | P2 | P3 | **P3** |

The bold cells are the "natural" combinations. Off-diagonal cells represent the cases where severity and impact diverge — and those are precisely the cases where having both dimensions prevents a bad triage decision.
:::

---

## Dimension 4 — Type

*What kind of defect is it?*

| Label | Meaning | When to Use |
|-------|---------|-------------|
| `type/bug` | General defect — something does not work as specified | Default type for most bugs |
| `type/regression` | Something that previously worked is now broken | A change introduced the defect; the fix is often a revert or targeted patch |
| `type/performance` | Functionality works but is unacceptably slow or resource-intensive | Response times, memory usage, CPU spikes |
| `type/security` | Vulnerability, data exposure, or authentication/authorisation flaw | Must be triaged with security team; may require disclosure process |
| `type/visual` | UI/UX issue — layout, styling, animation, responsiveness | No functional impact; purely visual |

---

## Dimension 5 — Environment

*Where was it found?*

| Label | Meaning | Implication |
|-------|---------|-------------|
| `env/production` | Found in the live production environment | Real users are affected. Highest urgency for P0/P1. |
| `env/staging` | Found in the staging/pre-production environment | Caught before release. Fix before next deployment. |
| `env/development` | Found during local development or in a dev environment | Fix before merging. Lowest urgency. |

::: info Environment Affects Urgency, Not Priority
A P2 bug in production is still P2 — but it may be treated with more urgency than a P2 in development simply because real users are experiencing it. Environment is context for triage, not a priority override.
:::

---

## Dimension 6 — Area

*Which part of the system is affected?*

| Label | Scope |
|-------|-------|
| `area/api` | Backend API endpoints, request/response handling |
| `area/frontend` | Web application UI, client-side logic |
| `area/mobile` | Native or hybrid mobile application |
| `area/database` | Data storage, queries, migrations, integrity |
| `area/infra` | Infrastructure, hosting, networking, CI/CD |
| `area/auth` | Authentication, authorisation, session management |
| `area/data-pipeline` | ETL, data ingestion, analytics pipeline |
| `area/payments` | Payment processing, billing, financial transactions |
| `area/ux` | User experience, accessibility, usability (not purely visual) |

A bug may have multiple area labels if it spans boundaries (e.g., `area/api` + `area/database` for a query that returns incorrect data through the API).

---

## Root Cause (Post-Fix)

Root cause labels are **required for all `severity/critical` and `severity/high` bugs** after investigation is complete. They are optional but encouraged for medium and low severity.

| Label | Meaning | Example |
|-------|---------|---------|
| `root-cause/requirements` | Requirements were missing, ambiguous, or incorrect | AC did not cover negative balance scenario |
| `root-cause/logic-error` | Implementation logic was wrong | Off-by-one error in pagination; wrong comparison operator |
| `root-cause/testing-gap` | Existing tests did not cover the failing scenario | No test for concurrent write path |
| `root-cause/data` | Bad, missing, or unexpected data caused the failure | Null value in a required field; character encoding mismatch |
| `root-cause/configuration` | Environment or application configuration was wrong | Wrong API endpoint in staging config; missing feature flag |
| `root-cause/dependency` | A third-party dependency introduced the issue | Library upgrade changed default behaviour; API provider downtime |
| `root-cause/unknown` | Root cause could not be determined | Use sparingly; triggers a follow-up Spike if severity is critical/high |

::: warning `unknown` Is a Temporary State
If a critical or high severity bug is closed with `root-cause/unknown`, a follow-up Spike must be created to continue investigation. Persistent unknowns indicate a systemic observability gap.
:::

---

## Worked Example 1: Wallet Balance Bug

**Symptom:** Users with a negative wallet balance see `$0.00` instead of `-$125.50` on their dashboard.

### Step-by-Step Classification

1. **How technically bad?** Financial data is displayed incorrectly. This is not a system outage, but it is incorrect data presentation for a financial product. → `severity/high`
2. **How badly are users affected?** Users can still use the app, but they are making decisions based on incorrect balance information. This is severely degraded. → `impact/high`
3. **Priority?** `high` + `high` = **P1**. Fix in current sprint.
4. **What type?** General defect — the feature exists but behaves incorrectly. → `type/bug`
5. **Where found?** Reported by a user in production. → `env/production`
6. **Which area?** The display is on the frontend, but the root cause may be in the API. → `area/frontend` + `area/api`
7. **Root cause (after fix)?** The API formats negative values as `Math.abs(balance)` before sending to the client. → `root-cause/logic-error`

### Final Labels

```
severity/high, impact/high, P1, type/bug, env/production,
area/frontend, area/api, root-cause/logic-error
```

---

## Worked Example 2: JWT Outage

**Symptom:** All users are logged out simultaneously. Login attempts fail with a 401 error. The JWT signing key was rotated but the validation service was not restarted.

### Step-by-Step Classification

1. **How technically bad?** Authentication is completely broken. No user can access the system. → `severity/critical`
2. **How badly are users affected?** No one can log in. Zero workaround. → `impact/blocker`
3. **Priority?** `critical` + `blocker` = **P0**. Stop everything. Incident process activated.
4. **What type?** Not a code bug — it is a configuration issue. But it manifests as a defect. → `type/bug` (could also be `type/security` given the auth impact)
5. **Where found?** Production. → `env/production`
6. **Which area?** Authentication infrastructure. → `area/auth` + `area/infra`
7. **Root cause (after fix)?** The key rotation runbook did not include a step to restart the validation service. → `root-cause/configuration`

### Final Labels

```
severity/critical, impact/blocker, P0, type/bug, env/production,
area/auth, area/infra, root-cause/configuration
```

---

## Bug Classification Flowchart

Follow these steps when filing any bug:

```
1. DESCRIBE the bug
   → Steps to reproduce, expected vs. actual, environment
   
2. ASSESS severity (how broken is the code?)
   → critical / high / medium / low
   
3. ASSESS impact (how badly are users affected?)
   → blocker / high / medium / low
   
4. DERIVE priority (severity × impact matrix)
   → P0 / P1 / P2 / P3
   
5. CLASSIFY type
   → bug / regression / performance / security / visual
   
6. TAG environment
   → production / staging / development
   
7. TAG area(s)
   → api / frontend / mobile / database / infra / auth / 
     data-pipeline / payments / ux
   
8. FILE the bug with all labels
   
9. After fix: ADD root cause label
   → requirements / logic-error / testing-gap / data / 
     configuration / dependency / unknown
```

::: tip When In Doubt, Triage Together
If you are unsure about severity or impact, do not guess — flag it for triage. A 5-minute triage conversation is cheaper than a mislabelled bug sitting in the wrong priority queue for two weeks.
:::

---

## Anti-Patterns

| Anti-Pattern | Why It Is Harmful | What to Do Instead |
|-------------|-------------------|-------------------|
| Everything is `severity/critical` | Real critical bugs get buried in noise | Use the definitions. Most bugs are medium or low. |
| Skipping impact assessment | Priority is wrong without impact data | Always assess both severity AND impact |
| Using `root-cause/unknown` as a default | Hides systemic issues; prevents trend analysis | Investigate before closing. Use `unknown` only after genuine effort. |
| Single area label when multiple apply | Misroutes the bug; delays fix | Apply all relevant area labels |
| Changing priority manually | Undermines the auto-calculation system | Change severity or impact instead; let priority follow |
| Filing feature requests as bugs | Inflates bug counts; distorts quality metrics | If nothing is broken, it is a Story |

---

[← Back to Standards Overview](/standards/)
