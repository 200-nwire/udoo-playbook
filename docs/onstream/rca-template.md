# RCA Template

<span class="phase-badge onstream">🟠 Onstream</span>

## Why RCA Matters

A Root Cause Analysis (RCA) is a structured document that explains **why** a bug occurred, not just what happened. It is written for P1 and P0 bugs after the fix is deployed.

The instinct after fixing a bug is to close the ticket and move on. The code is patched, the test passes, the deployment is green. But the bug was a symptom. If you only treat the symptom, the underlying condition remains — and it will produce another symptom, in a different place, at a worse time.

RCA exists to answer one question: **What systemic condition allowed this defect to exist, survive code review, pass testing, and reach users?** The answer is never "someone made a mistake." People always make mistakes. The question is why the system did not catch the mistake before it mattered.

::: tip RCA Is Prevention, Not Punishment
The moment an RCA becomes a tool for assigning blame, people stop writing honest ones. They sanitise the root cause, omit the embarrassing details, and produce a document that prevents nothing. A good RCA requires psychological safety: the author must feel safe writing "I misunderstood the requirement" or "the code review missed this because the diff was too large." The value of an RCA is directly proportional to its honesty.
:::

An RCA is distinct from a Post-Mortem:
- **RCA** = written for bugs found in dev/staging/production — focused on the defect and prevention
- **Post-Mortem** = written for incidents that caused production outages — focused on system resilience and process

---

## When to Write an RCA

| Trigger | Required? |
|---------|-----------|
| P0 or P1 bug in production | ✅ Always |
| P0 or P1 bug caught in staging before release | ✅ Always (prevention matters) |
| P2 bug with interesting root cause pattern | ⚠️ Recommended |
| P3 bug | ❌ Not required |

---

## The "5 Whys" Technique

The 5 Whys is the simplest and most effective tool for reaching root cause. Start with the observed problem and ask "why" repeatedly until you reach a systemic cause — something you can fix structurally, not just patch.

**Rules for effective 5 Whys:**

1. Each "why" must be answered with a **fact**, not a guess. If you do not know, investigate before continuing.
2. Stop when you reach something the team **can change structurally** (a process, a tool, a convention, a test).
3. Do not stop at "human error." A human error is always the trigger, never the root cause. The system should have prevented or caught it.
4. It may take 3 whys or 7 — the number 5 is a guideline, not a rule.

### 5 Whys Example — Wallet Balance Bug

| # | Question | Answer |
|---|----------|--------|
| 1 | Why did the dashboard display `$0.00` for negative balances? | The `WalletCard.vue` component clamped negative values to zero. |
| 2 | Why did the component clamp negative values? | The developer used `balance.amount > 0 ? balance.amount : 0` intending to guard against null/undefined. |
| 3 | Why did the developer confuse null-guarding with value-clamping? | The codebase had no standard pattern for null-safe numeric display, so the developer improvised. |
| 4 | Why was there no standard pattern? | The team had not created a shared `useCurrencyFormatter` composable or documented the null-guard convention. |
| 5 | Why was this not caught in code review or testing? | **The AC did not include a negative balance test case**, and the reviewer did not consider negative values because the happy path worked. |

**Root cause:** Missing acceptance criteria for edge cases (negative values) combined with no shared formatting utility. Both are systemic — they can be fixed with a convention and a composable, not by blaming the developer.

---

## Ishikawa (Fishbone) Diagram

For complex bugs with multiple contributing factors, the Ishikawa diagram helps visualise all the causes that converged to produce the defect. Group causes into six categories:

```
                    ┌──────────────┐
  People ──────────►│              │
  Process ─────────►│   DEFECT     │
  Technology ──────►│   (Effect)   │
  Environment ─────►│              │
  Requirements ────►│              │
  Testing ─────────►└──────────────┘
```

| Category | Questions to Ask |
|----------|-----------------|
| **People** | Was the developer experienced with this area? Was the reviewer familiar with the domain? |
| **Process** | Was the DoD followed? Was there a code review? Was the deployment process correct? |
| **Technology** | Did the tooling support catching this? Were there linting rules? Static analysis? |
| **Environment** | Was the test environment representative? Did staging have the same data shape as production? |
| **Requirements** | Were the acceptance criteria complete? Did they cover edge cases? |
| **Testing** | Were there unit tests? Integration tests? Were boundary values tested? |

::: info When to Use Ishikawa vs. 5 Whys
Use **5 Whys** for straightforward bugs with a single causal chain. Use **Ishikawa** when multiple independent factors contributed — for example, a bug that survived because of a missing test AND a rushed code review AND incomplete requirements. The fishbone diagram makes it visible that fixing only one factor is insufficient.
:::

---

## RCA Template

Use this template in Confluence or as a Jira comment on the bug ticket.

---

### Metadata

| Field | Details |
|-------|---------|
| **Title** | Descriptive: what was wrong, not the fix |
| **Reported On** | Date + time + timezone |
| **Detected By** | Who or what found it (QA, customer, monitoring) |
| **Severity** | Use the [bug taxonomy labels](/onstream/bug-taxonomy) |
| **Priority** | P0 / P1 / P2 |
| **Environment** | Where it was found |
| **Labels** | Full label set from taxonomy |

---

### Section 1 — Description

**Observed Behavior:** What actually happened. Be specific and factual.

**Expected Behavior:** What should have happened. Reference the AC if it exists.

**Steps to Reproduce:**
1. Step one
2. Step two
3. Observed result

---

### Section 2 — Investigation Summary

**Initial Triage Findings:** What was the first hypothesis? What was confirmed or ruled out?

**5 Whys Analysis:** Walk through the causal chain from symptom to systemic root cause.

**Technical Root Cause:** The deepest "why" — the actual code, configuration, or data that caused the fault.

**Related Components:** Which files, services, or systems were involved?

---

### Section 3 — Resolution

**Fix Implemented:** What was changed. Include code snippets where helpful.

**Testing Performed:** What tests were run to confirm the fix.

**Deployment Info:** Version, branch, deployment method.

---

### Section 4 — Lessons & Actions

**Preventive Measures:** Structural changes to prevent this class of bug.

**Follow-Up Tasks:** Concrete action items with owners and due dates.

---

## Worked Example — Balance Display Bug

This is the complete RCA from the balance display defect used throughout this book. Every field is filled in to demonstrate the expected level of detail.

| Field | Details |
|-------|---------|
| **Title** | Incorrect display of user balance on dashboard |
| **Reported On** | 2025-07-27 14:22 UTC |
| **Detected By** | QA Team during staging UAT |
| **Severity** | <span class="label sev-high">severity/high</span> |
| **Priority** | <span class="priority-p1">P1</span> |
| **Environment** | <span class="label yellow">env/staging</span> `v2.13.5` |
| **Labels** | `severity/high` `impact/high` `type/bug` `area/frontend` `root/logic-error` |

### Description

**Observed Behavior:** Users with negative wallet balances see `$0.00` on the dashboard wallet card instead of the correct negative amount. The API returns the correct value (`-125.50`); the frontend displays `0`.

**Expected Behavior:** Negative balances should be displayed correctly with proper formatting, e.g., `-$125.50`. The wallet card should never silently transform financial data.

**Steps to Reproduce:**
1. Log in as a user with a negative wallet balance (test account: `test_negative@domain.com`, balance: `-125.50`)
2. Navigate to `/dashboard`
3. Observe the wallet card component
4. **Expected:** Wallet card shows `-$125.50`
5. **Actual:** Wallet card shows `$0.00`
6. Open browser DevTools → Network tab → confirm `/api/user/wallet` returns `{ "amount": -125.50 }`

### Investigation Summary

**Initial Triage:** The API is correct — confirmed via network tab and direct API call. The bug is isolated to the frontend rendering layer. Hypothesis: the Vue component is transforming the value before display.

**5 Whys Analysis:**

1. *Why does the UI show $0.00?* → The display variable is clamped to zero.
2. *Why is it clamped?* → Code uses `balance.amount > 0 ? balance.amount : 0`.
3. *Why did the developer write that conditional?* → Intent was to guard against null/undefined, but `> 0` was used instead of `!= null`.
4. *Why was there no standard null-guard pattern?* → No shared formatting utility existed in the codebase.
5. *Why wasn't this caught in testing?* → AC did not include negative balance scenarios; manual test only used positive values.

**Technical Root Cause:**

```javascript
// WalletCard.vue — BEFORE (incorrect)
const displayAmount = balance.amount > 0 ? balance.amount : 0;
//                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//                    This clamps any non-positive value to 0
//                    Negative values become 0. Bug confirmed.
```

The developer intended to handle `null` or `undefined` gracefully, but used `> 0` instead of `!= null`, silently clamping all negative values.

**Related Components:**
- `WalletCard.vue` — UI Layer only. API returns correct data.

### Resolution

**Fix:**
```javascript
// WalletCard.vue — AFTER (correct)
const displayAmount = balance.amount;

// Formatting function updated to handle negatives:
export function formatCurrency(amount) {
  const formatted = Math.abs(amount).toFixed(2)
  return amount < 0 ? `-$${formatted}` : `$${formatted}`
}
```

**Testing Performed:**
- Unit tests added for negative (`-125.50`), zero (`0.00`), positive (`250.00`), and boundary values (`-0.01`, `0.01`)
- Manual regression on staging with all three value types confirmed
- Visual regression snapshot added for the wallet card component

**Deployment:** Merged to `main` → deployed as `v2.13.6` hotfix

### Lessons & Actions

**Root cause pattern:** Defensive null-checks using `> 0` are a known anti-pattern for numeric display. The correct null-guard is `value != null && value !== undefined` (or `value ?? defaultValue` with nullish coalescing).

| Action | Owner | Due |
|--------|-------|-----|
| Add lint rule against `> 0` conditional clamping on numeric display fields | Tech Lead | Sprint +1 |
| Create shared `useCurrencyFormatter` composable | Assigned Dev | Sprint +1 |
| Add visual regression snapshot for dashboard balance card | QA | Sprint +1 |
| Add the missing AC for negative balance to the story template examples | PM | This sprint |
| Review all existing numeric display components for similar clamping patterns | Tech Lead | Sprint +2 |

---

## Tips for Writing Good RCAs

### Be Specific

| Bad | Good |
|-----|------|
| "The display was wrong" | "The wallet card displayed `$0.00` instead of `-$125.50` for users with negative balances" |
| "A code error caused the bug" | "Line 47 of `WalletCard.vue` used `> 0` instead of `!= null`, clamping negative values to zero" |
| "Fixed the code" | "Replaced the clamping expression with a direct reference and added a `formatCurrency` utility for display formatting" |

### Include Code Snippets

Show the before and after. Code is unambiguous. Prose descriptions of code changes are ambiguous. A reviewer should be able to read the RCA and understand exactly what changed without looking at the PR.

### Link to Commits and PRs

Every RCA should include:
- Link to the Jira ticket
- Link to the PR that introduced the bug (if known)
- Link to the PR that fixed the bug
- Link to any related test additions

### Quantify the Impact

| Bad | Good |
|-----|------|
| "Some users were affected" | "All users with negative balances (~340 accounts, 4.2% of active users) saw incorrect data" |
| "Found in staging" | "Found in staging UAT on 2025-07-27, 2 days before planned production release" |

::: warning Avoid These RCA Anti-Patterns
- **The Changelog RCA:** "Fixed the bug. Deployed. Done." — This is not an RCA; it is a deployment note.
- **The Blame RCA:** "Developer X wrote incorrect code." — This is not a root cause; it is finger-pointing.
- **The Novel RCA:** 3,000 words that could have been 300. Be thorough but concise. Every sentence should add information.
- **The Copy-Paste RCA:** Using the template but filling every field with "N/A." If a field doesn't apply, explain why briefly.
:::

---

## The RCA Review Process

An RCA is not complete when the author writes it. It is complete when the team has reviewed and agreed on the root cause and action items.

### Who Reviews

| Role | Responsibility in Review |
|------|-------------------------|
| **Author** (usually the fixing developer) | Writes the initial RCA within 48 hours of the fix |
| **Tech Lead** | Validates the technical root cause and proposed prevention |
| **QA Lead** | Validates the testing gap analysis and proposed test improvements |
| **Delivery Manager** | Validates that action items are concrete, owned, and time-bound |
| **PM** (for P0 only) | Validates that the root cause is communicated to stakeholders appropriately |

### Review Cadence

| Step | When | Duration |
|------|------|----------|
| Author drafts RCA | Within 48 hours of fix deployment | — |
| Async review by Tech Lead + QA Lead | Within 24 hours of draft | 15 min each |
| Sync review (if needed) | Next team standup or dedicated slot | 10 min |
| Action items added to sprint backlog | Same sprint or Sprint +1 | — |
| Follow-up verification | 30 days after action items completed | 10 min |

### Follow-Up Tracking

Every action item from an RCA becomes a Jira ticket with:
- **Type:** Task or Sub-task, linked to the original bug
- **Label:** `rca-action`
- **Due date:** As specified in the RCA
- **Assignee:** The named owner from the RCA table

The Delivery Manager reviews open `rca-action` tickets in the weekly service review. Action items that are overdue for more than one sprint are escalated.

::: details 30-Day Follow-Up Check
One month after all action items are completed, the Tech Lead performs a brief check:
1. Has the same class of bug recurred? If yes, the prevention was insufficient — reopen the RCA.
2. Were the action items effective? For example, if a lint rule was added, has it caught any violations?
3. Is there anything else to learn now that time has passed?

This closes the loop and ensures RCAs produce real change, not just paperwork.
:::

---

## RCA Quality Standards

A good RCA answers:

- **What** was the user experience of the bug?
- **Where** did the bug live in the system?
- **Why** did this code exist — what was the original intent?
- **How** will we prevent this class of bug?
- **Who** owns each follow-up action?

A bad RCA says: *"Developer made a mistake. Fixed. Done."* This is not an RCA — it is a changelog entry.

---

[← Bug Taxonomy](/onstream/bug-taxonomy) · [Post-Mortem Template →](/onstream/post-mortem-template)
