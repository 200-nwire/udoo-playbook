# RCA — Wallet Balance Display Bug

This is a real-world Root Cause Analysis annotated against the framework. Read it alongside the [Bug Taxonomy](/onstream/bug-taxonomy) and [Post-Mortem Guide](/onstream/post-mortem).

---

## Why This RCA Matters

A user opens their dashboard and sees `$0.00` in their wallet. They panic. They contact support. They lose trust — not in one feature, but in every number the platform displays. Financial display bugs are unique in that their blast radius is emotional, not just functional. A user who sees a wrong balance will question every other figure on the screen, even if those are correct.

This RCA documents a bug that was, technically, a single line of code. But the story it tells is about something larger: **how missing boundary-value tests allow logic errors to reach users, and how a well-structured RCA prevents the same class of bug from recurring.**

:::warning Trust is the product
For any application that displays financial data — balances, transactions, invoices — a display error is a trust error. The severity isn't about the code complexity; it's about what the user feels when they see the wrong number.
:::

---

## The Report

> **Title:** Incorrect display of user balance on dashboard  
> **Reported on:** 2025-07-27 14:22 UTC  
> **Detected by:** QA Team during staging UAT  
> **Environment:** Staging (`v2.13.5`)  
> **Jira:** [WAL-1847](https://200apps.atlassian.net/browse/WAL-1847)

---

### 1. Description

**Observed behaviour:** Users with negative wallet balances see `$0.00` instead of the correct negative amount.  
**Expected behaviour:** Negative balances should be displayed correctly, e.g., `-$125.50`.

**Steps to reproduce:**
1. Log in as user with negative balance (`test_negative@domain.com`)
2. Navigate to `/dashboard`
3. Observe that wallet card displays `$0.00`

**Affected users:** Any user with a negative wallet balance. In staging, 12 of 340 test accounts had negative balances. In production (had this shipped), approximately 8% of active users carry negative balances at any given time.

---

### 2. 5 Whys Analysis

| # | Why? | Answer |
|---|------|--------|
| **1** | Why did the wallet display `$0.00` for negative balances? | The frontend component clamped negative values to zero before rendering. |
| **2** | Why did the component clamp negative values to zero? | The developer used a conditional expression `balance.amount > 0 ? balance.amount : 0` — likely assuming balances are always non-negative. |
| **3** | Why did the developer assume balances are non-negative? | The story's acceptance criteria did not include negative balance scenarios. The assumption was never explicitly challenged. |
| **4** | Why didn't the acceptance criteria cover negative balances? | The story was written from a "happy path" perspective. Boundary values (negative, zero, very large) were not part of the Definition of Ready checklist at the time. |
| **5** | Why didn't the DoR checklist include boundary-value scenarios for financial fields? | The checklist was generic and didn't have domain-specific rules for financial display. This gap has now been closed. |

:::info The real root cause is at Why #4
The code fix is at Why #1, but the *systemic* fix is at Why #4 — ensuring acceptance criteria for financial display fields always include boundary values. Fixing only the code means the next financial field will have the same gap.
:::

---

### 3. Investigation Summary

**Initial triage:** Balance is fetched correctly via API (`/api/user/wallet`). The API returns `{ "amount": -125.50, "currency": "USD" }` — the backend is correct. The bug is entirely in the frontend rendering layer.

**The code that caused the bug:**

```javascript
// WalletCard.vue — line 47
// ❌ Incorrect — clamps negative values to zero
const displayAmount = balance.amount > 0 ? balance.amount : 0;
```

The intent was likely to prevent displaying `null` or `undefined` as a balance. But the ternary treats any non-positive value — including legitimate negative balances — as zero.

**The fix:**

```javascript
// WalletCard.vue — line 47
// ✅ Correct — displays the actual amount
const displayAmount = balance.amount;
```

The formatting function (`formatCurrency`) was also updated to handle negative values correctly, rendering them as `-$125.50` rather than `$-125.50`:

```javascript
// utils/currency.js
function formatCurrency(amount, currency = 'USD') {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    signDisplay: 'auto',
  });
  return formatter.format(amount);
}
```

**Affected components:**
- Frontend component: `WalletCard.vue`
- Utility: `formatCurrency` in `utils/currency.js`
- Affected service: UI layer only — API returns correct data

---

### 4. Unit Tests That Would Have Caught It

These tests were added as part of the fix. Had they existed before development, the bug would never have been written:

```javascript
describe('WalletCard', () => {
  it('displays positive balance correctly', () => {
    const wrapper = mount(WalletCard, {
      props: { balance: { amount: 250.00, currency: 'USD' } }
    });
    expect(wrapper.find('[data-testid="balance"]').text()).toBe('$250.00');
  });

  it('displays zero balance correctly', () => {
    const wrapper = mount(WalletCard, {
      props: { balance: { amount: 0, currency: 'USD' } }
    });
    expect(wrapper.find('[data-testid="balance"]').text()).toBe('$0.00');
  });

  it('displays negative balance correctly', () => {
    const wrapper = mount(WalletCard, {
      props: { balance: { amount: -125.50, currency: 'USD' } }
    });
    expect(wrapper.find('[data-testid="balance"]').text()).toBe('-$125.50');
  });

  it('displays very small negative balance correctly', () => {
    const wrapper = mount(WalletCard, {
      props: { balance: { amount: -0.01, currency: 'USD' } }
    });
    expect(wrapper.find('[data-testid="balance"]').text()).toBe('-$0.01');
  });

  it('displays large balance with comma formatting', () => {
    const wrapper = mount(WalletCard, {
      props: { balance: { amount: 1000000.00, currency: 'USD' } }
    });
    expect(wrapper.find('[data-testid="balance"]').text()).toBe('$1,000,000.00');
  });
});
```

---

### 5. Resolution

**Fix deployed:** Merged to `main` via PR [#2341](https://github.com/200apps/platform/pull/2341), deployed as `v2.13.6` hotfix.

**Testing performed:**
- Unit tests added (5 scenarios, all passing)
- Manual test on staging with negative, zero, positive, and large values
- Visual regression snapshot added for dashboard totals
- QA sign-off obtained before production deploy

---

### 6. Labels Applied

| Label | Value | Reasoning |
|-------|-------|-----------|
| `severity` | `severity/high` | Core financial display is wrong |
| `impact` | `impact/high` | Users see wrong balance — erodes trust in all displayed numbers |
| **Priority** | **P1** | high severity + high impact = P1 (urgent, fix in current sprint) |
| `type` | `type/bug` | Logic error in rendering |
| `env` | `env/staging` | Caught in UAT before production |
| `area` | `area/frontend` | UI layer only |
| `root` | `root/logic-error` | Incorrect conditional expression |

---

### 7. Lessons Learned

:::tip What we learned — and what we changed
1. **Boundary values are not edge cases for financial fields.** Negative balances, zero balances, and very large balances are *expected* states, not exceptions. The Definition of Ready now requires explicit boundary-value scenarios for any story involving monetary display.

2. **Defensive code can be offensive.** The original developer was trying to be defensive — preventing `null` from displaying. But the defense created a new bug. The lesson: defensive code should use type checks (`if (amount == null)`), not range checks (`if (amount > 0)`), unless the range constraint is a real business rule.

3. **Format functions need their own test suite.** `formatCurrency` was untested. It's a shared utility used by 14 components. One untested function multiplied across the codebase is 14 potential bugs.
:::

---

### 8. Preventive Measures

| # | Measure | Status | Owner |
|---|---------|--------|-------|
| PM1 | Add boundary-value requirement to DoR checklist for financial stories | ✅ Done | Product Owner |
| PM2 | Add lint rule against conditional clamping on numeric display fields | ✅ Done | Tech Lead |
| PM3 | Create shared `useCurrencyFormatter` composable with built-in tests | ✅ Done | Frontend Lead |
| PM4 | Add visual regression snapshots for all dashboard numeric displays | 🔄 In Progress | QA Lead |
| PM5 | Conduct audit of all `formatCurrency` call sites for similar patterns | ✅ Done (0 additional issues found) | Frontend Lead |

---

### 9. Follow-Up Actions

| # | Action | Owner | Deadline | Status |
|---|--------|-------|----------|--------|
| FA1 | Add unit test suite for `WalletCard` rendering (all boundary values) | @dev-sarah | 2025-07-29 | ✅ Complete |
| FA2 | Create shared `useCurrencyFormatter` composable | @dev-marcus | 2025-08-02 | ✅ Complete |
| FA3 | Add visual regression snapshot for dashboard totals | @qa-lead | 2025-08-05 | 🔄 In Progress |
| FA4 | Update DoR checklist to require boundary-value scenarios for financial fields | @product-owner | 2025-07-30 | ✅ Complete |
| FA5 | Audit all frontend components using `formatCurrency` for similar clamping patterns | @dev-sarah | 2025-08-09 | ✅ Complete |
| FA6 | Add ESLint custom rule to flag `> 0 ? value : 0` patterns on numeric variables | @dev-marcus | 2025-08-12 | ✅ Complete |

---

## Framework Analysis

### What the Report Does Well

- **Clear symptom vs root cause separation.** The symptom is "shows $0.00." The root cause is the conditional clamping logic. Many bug reports conflate the two.
- **Affected components named.** `WalletCard.vue` is specific and actionable.
- **Code before and after.** The fix is unambiguous.
- **5 Whys reaches the systemic level.** The analysis doesn't stop at "fix the code" — it traces back to the acceptance criteria gap and the DoR checklist.
- **Follow-up actions are specific** with owners, deadlines, and status tracking.

### What Could Be Improved

- **Customer impact count should be quantified earlier.** The report mentions 8% of active users but only in passing. A dedicated "Impact Assessment" section with user counts and revenue exposure would strengthen the urgency case.
- **Regression risk assessment is implicit.** The audit (FA5) found no additional issues, but this should have been called out as a risk before the fix was deployed, not after.
- **Timeline of discovery is missing.** When was the bug introduced? Was it in the codebase for one release or ten? This context matters for understanding detection gaps.

### Was a Post-Mortem Required?

At P1 severity, a post-mortem is recommended but not mandatory (mandatory = P0). In this case, the **preventive measures** section does the job: it proposes systemic fixes (lint rule, design pattern, visual regression). If a post-mortem were written, it would focus on the same root cause — missing test coverage for boundary values on financial display fields.

### The Testing Gap

The real lesson is in Station 2 of the Discovery Backbone: **edge cases are not optional**.

A negative balance is a boundary value. The Acceptance Criteria for any financial display story must include:

```gherkin
@area-frontend @risk-high @type-edge
Scenario Outline: Wallet balance displays correctly at boundary values
  Given my wallet has a balance of <balance>
  When I view the dashboard
  Then the wallet card displays "<expected>"

  Examples:
    | balance    | expected     |
    | 0.00       | $0.00        |
    | -0.01      | -$0.01       |
    | -125.50    | -$125.50     |
    | 1000000.00 | $1,000,000.00|
```

If this scenario had existed, the bug would have been caught before QA even ran. This is why [Gherkin & AssertThat](/downstream/gherkin) scenarios are written before code is written, not after.

---

:::tip How this RCA connects to the framework
This RCA demonstrates the full lifecycle of a bug through the framework:

- **Upstream gap:** The story's acceptance criteria didn't cover boundary values → fixed via [Definition of Ready](/upstream/definition-of-ready) update
- **Downstream gap:** No unit tests for the rendering component → fixed via test suite addition
- **Onstream response:** The [Bug Taxonomy](/onstream/bug-taxonomy) labels enabled proper prioritisation and pattern detection

The 5 Whys analysis is the bridge between "fix this bug" and "prevent this class of bug." Without it, the team fixes the symptom and moves on. With it, the team strengthens the system.
:::

---

**Next example:** [Post-Mortem: JWT API Outage →](./postmortem-jwt-outage)
