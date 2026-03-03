# Gherkin Tagging Standard

## Why Tags Matter

Gherkin scenarios are only useful if you can run the right ones at the right time. Without a tagging standard, every test run requires someone to manually curate a list of scenarios, CI/CD pipelines cannot selectively execute tests, and reporting gives you a single pass/fail number with no ability to drill down by feature, priority, or scope.

Tags are the metadata layer that makes a test suite navigable, filterable, and automatable.

::: tip Tags Are Cheap — Inconsistency Is Expensive
Adding a tag to a scenario costs nothing. Debugging a pipeline failure because the wrong tests ran (or the right tests did not run) costs hours. Tag deliberately and tag consistently.
:::

---

## Tag Categories

UDOO uses six categories of tags. Every scenario should have at least one tag from the **Suite**, **Priority**, and **Scope** categories.

| Category | Purpose | Examples |
|----------|---------|---------|
| **Suite** | Which test suite includes this scenario | `@smoke`, `@regression`, `@acceptance` |
| **Priority** | Execution ordering and importance | `@P0`, `@P1`, `@P2`, `@P3` |
| **Status** | Current state of the scenario | `@wip`, `@manual`, `@flaky` |
| **Scope** | Which part of the system is tested | `@api`, `@frontend`, `@mobile`, `@e2e` |
| **Feature** | Feature-level grouping | `@feature-journal`, `@feature-matching` |
| **Epic** | Epic-level grouping | `@epic-wallet`, `@epic-onboarding` |

---

## Suite Tags

Suite tags determine which collection of tests a scenario belongs to. A scenario may belong to multiple suites.

### `@smoke`

**Definition:** Critical path tests that validate the system's most essential functionality. Smoke tests answer one question: "Is the build fundamentally broken?"

**Constraints:**
- Maximum **20 scenarios** in the entire smoke suite.
- Must complete in **under 5 minutes**.
- Every scenario must be deterministic — no flakiness tolerance.
- Only covers the highest-value user flows (login, core transaction, primary CRUD).

**When to add:** Only when a scenario tests a flow so critical that its failure means the build cannot be deployed under any circumstances.

**When to remove:** If the smoke suite exceeds 20 scenarios or 5 minutes, the team reviews and removes the least critical entries.

::: warning Smoke Is Not "Important Tests"
Smoke is not a synonym for "high priority." It is a specific, constrained suite for deployment gatekeeping. Most high-priority tests belong in `@regression`, not `@smoke`.
:::

### `@regression`

**Definition:** Comprehensive test suite covering all automated scenarios. Regression tests answer: "Have we broken anything that used to work?"

**Constraints:**
- Run **nightly** and **before every release**.
- No maximum scenario count, but execution time should stay under 30 minutes.
- Flaky tests are tagged `@flaky` and tracked separately (see below).

**When to add:** Every automated scenario that is complete and stable gets `@regression`.

### `@acceptance`

**Definition:** Scenarios that map directly to a Story's acceptance criteria. These are the tests that prove a Story is done.

**Constraints:**
- Every Story's acceptance criteria should have at least one corresponding `@acceptance` scenario.
- Acceptance scenarios are run as part of the [Definition of Done](/downstream/definition-of-done) check.

**When to add:** When writing Gherkin scenarios for a Story's acceptance criteria.

**When to remove:** Never — acceptance scenarios are the permanent record of what "done" means for that Story.

---

## Priority Tags

Priority tags mirror the [Bug Label System](/standards/bug-labels) priority levels and control execution ordering.

| Tag | Meaning | Execution |
|-----|---------|-----------|
| `@P0` | Tests for critical-path, no-workaround functionality | Run first in every suite; failure blocks deployment |
| `@P1` | Tests for high-value functionality | Run second; failure blocks release (not individual builds) |
| `@P2` | Tests for standard functionality | Run in full regression; failure is investigated but does not block |
| `@P3` | Tests for edge cases and low-priority flows | Run in full regression; failure is logged and triaged normally |

::: info Priority Tags Are About Test Importance, Not Bug Priority
A `@P0` tag means "this test validates something so important that its failure is an emergency." It does not mean the scenario was written for a P0 bug. A test for the login flow is `@P0` regardless of whether login has ever had a bug.
:::

---

## Status Tags

Status tags indicate the current health or maturity of a scenario.

### `@wip`

**Definition:** Work in progress. The scenario is incomplete — steps may be missing, automation is not finished, or the feature is still in development.

**Rules:**
- `@wip` scenarios are **excluded from all CI/CD pipelines**.
- They exist in the repository as documentation of intent.
- Remove `@wip` as soon as the scenario is complete and passing.
- Do not let `@wip` scenarios accumulate — review them in every sprint retrospective.

### `@manual`

**Definition:** The scenario cannot be automated and must be run manually. This is a last resort, not a convenience label.

**Rules:**
- Every `@manual` tag must include a comment explaining *why* automation is not possible.
- `@manual` scenarios are tracked in AssertThat and included in release test plans.
- Review `@manual` scenarios quarterly — technology changes may make automation feasible.

**Valid reasons for `@manual`:**
- Physical device interaction (NFC, Bluetooth pairing)
- Visual verification that cannot be programmatically asserted
- Third-party system with no test environment

**Invalid reasons for `@manual`:**
- "We haven't had time to automate it" → prioritise automation
- "The UI changes too often" → fix the UI stability problem
- "It's too complex" → break it into smaller, automatable scenarios

### `@flaky`

**Definition:** The scenario is automated but intermittently fails for reasons unrelated to actual product defects.

**Rules:**
- Adding `@flaky` immediately creates a **Bug** in Jira with `type/bug`, `area/infra`, and a link to the scenario.
- `@flaky` scenarios run in a **separate, non-blocking pipeline** — their results are logged but do not fail the build.
- The team reviews all `@flaky` scenarios every sprint. Each one must have an owner and a target resolution date.
- Maximum **5 `@flaky` scenarios** at any time. If the count exceeds 5, fixing flaky tests becomes a sprint priority.

::: warning Flaky Tests Erode Trust
Every flaky test teaches the team to ignore failures. If you stop trusting test results, you stop testing. The `@flaky` tag is a quarantine — it is not an excuse to let broken tests linger.
:::

---

## Scope Tags

Scope tags indicate which layer or part of the system the scenario exercises.

| Tag | Scope | Typical Runner |
|-----|-------|---------------|
| `@api` | Backend API endpoints — request/response validation | REST client (e.g., Karate, RestAssured) |
| `@frontend` | Web application UI interactions | Browser automation (e.g., Playwright, Cypress) |
| `@mobile` | Native or hybrid mobile application | Mobile automation (e.g., Appium, Detox) |
| `@e2e` | Full end-to-end flow spanning multiple layers | Browser or mobile automation with real backend |

**Rules:**
- Every scenario gets exactly **one scope tag**.
- `@e2e` implies the test crosses boundaries — if it only tests the API, use `@api` even if it is an important flow.
- Scope tags are used in CI/CD to route tests to the correct runner infrastructure.

---

## Feature and Epic Tags

Grouping tags connect scenarios to the product structure.

### `@feature-[name]`

Groups scenarios by feature area. The name matches the feature label used in Jira.

| Example | Feature |
|---------|---------|
| `@feature-journal` | Journal entries, prompts, reflections |
| `@feature-matching` | User matching, score calculation |
| `@feature-wallet` | Balance, transactions, top-up |
| `@feature-onboarding` | Registration, profile setup, tutorial |
| `@feature-notifications` | Push notifications, in-app alerts |

### `@epic-[name]`

Groups scenarios by Epic. Useful for tracking test coverage at the Epic level during delivery.

| Example | Epic |
|---------|------|
| `@epic-entry-creation` | Journal Entry Creation & Prompt Flow |
| `@epic-realtime-matching` | Real-Time Score Calculation |
| `@epic-bank-topup` | Wallet Top-Up via Bank Transfer |

::: tip Feature Tags Are Permanent, Epic Tags Are Temporal
Feature tags persist as long as the feature exists. Epic tags are most useful during active delivery of that Epic and can be archived (but not deleted) when the Epic is complete.
:::

---

## Tag Naming Rules

1. **Lowercase only.** `@smoke`, not `@Smoke` or `@SMOKE`.
2. **Hyphens for multi-word names.** `@feature-journal`, not `@feature_journal` or `@featureJournal`.
3. **No spaces.** Tags cannot contain spaces.
4. **Prefix consistency.** Feature tags always start with `@feature-`, Epic tags with `@epic-`.
5. **No custom tags without team agreement.** New tag categories require a discussion in retrospective.
6. **Tags go on the Scenario, not the Feature.** Unless every Scenario in a Feature file shares the tag, place it on individual Scenarios.

---

## Tagging Examples

### Example 1: Smoke-Level Login Test

```gherkin
@smoke @P0 @e2e @feature-onboarding @acceptance
Scenario: User logs in with valid credentials
  Given the user is on the login page
  When they enter valid credentials
  And they click the login button
  Then they are redirected to the dashboard
  And their session token is stored
```

### Example 2: Regression-Level API Test

```gherkin
@regression @P1 @api @feature-wallet
Scenario: Wallet balance reflects completed transaction
  Given the user has a wallet balance of $100.00
  When a transaction of $25.00 is completed
  Then the GET /wallet/balance endpoint returns $75.00
  And a transaction record exists in the history
```

### Example 3: Work-in-Progress Scenario

```gherkin
@wip @P2 @frontend @feature-journal @epic-entry-creation
Scenario: User selects a prompt before writing a journal entry
  Given the user is on the new entry screen
  When they tap "Choose a Prompt"
  Then a list of available prompts is displayed
  # TODO: complete steps for prompt selection and entry creation
```

### Example 4: Manual Test with Justification

```gherkin
@manual @P1 @mobile @feature-notifications
# Manual: requires physical device to verify push notification 
# delivery via APNs. No simulator support for push in test env.
Scenario: Push notification received after journal entry is saved
  Given the user has notifications enabled on their device
  When another user responds to their journal entry
  Then a push notification appears on the lock screen
  And tapping the notification opens the response
```

### Example 5: Flaky Test Under Investigation

```gherkin
@flaky @regression @P2 @e2e @feature-matching
# Flaky: intermittent timeout on matching service under load.
# Tracked in UDOO-4521. Owner: @dev-sam. Target fix: Sprint 14.
Scenario: Match score updates in real-time during session
  Given two users are in an active matching session
  When user A answers a compatibility question
  Then user B sees the updated match score within 3 seconds
```

---

## CI/CD Integration

Tags determine which scenarios run at each pipeline stage.

| Pipeline Stage | Tags Included | Tags Excluded | Trigger |
|---------------|--------------|---------------|---------|
| **PR check** | `@smoke` | `@wip`, `@flaky`, `@manual` | Every pull request |
| **Merge to main** | `@smoke` + `@P0` + `@P1` | `@wip`, `@flaky`, `@manual` | Every merge to main branch |
| **Nightly regression** | `@regression` | `@wip`, `@manual` | Scheduled (nightly) |
| **Pre-release** | `@regression` + `@acceptance` | `@wip` | Manual trigger before release |
| **Flaky quarantine** | `@flaky` only | Everything else | Scheduled (nightly, non-blocking) |

::: details Example CI Configuration (Conceptual)

```yaml
smoke:
  tags: "@smoke and not @wip and not @flaky and not @manual"
  timeout: 5m
  fail_build: true

regression:
  tags: "@regression and not @wip and not @manual"
  timeout: 30m
  fail_build: true

flaky_quarantine:
  tags: "@flaky"
  timeout: 15m
  fail_build: false
  report_to: "#test-health"
```
:::

---

## Test Reporting by Tag

Tags enable meaningful test reports beyond simple pass/fail:

| Report | Grouped By | Purpose |
|--------|-----------|---------|
| **Coverage by feature** | `@feature-*` tags | Which features have the most/least test coverage? |
| **Failure rate by scope** | `@api`, `@frontend`, `@mobile`, `@e2e` | Which layer is most unstable? |
| **Priority distribution** | `@P0` – `@P3` | Are we testing the right things at the right priority? |
| **Flaky trend** | `@flaky` count over time | Is test reliability improving or degrading? |
| **Acceptance coverage** | `@acceptance` vs. total Stories | Do all Stories have acceptance test coverage? |

---

## Tag Lifecycle

| Event | Action |
|-------|--------|
| New scenario written | Add suite, priority, scope, and feature tags |
| Scenario passes consistently for 2 weeks | Remove `@wip` if present |
| Scenario starts failing intermittently | Add `@flaky`, create Jira bug, assign owner |
| Flaky root cause fixed | Remove `@flaky`, close Jira bug |
| Feature decommissioned | Archive scenarios (move to `archive/` folder), do not delete |
| Epic completed | `@epic-*` tag remains for historical traceability |
| Smoke suite exceeds 20 scenarios | Team reviews and removes least critical entries |

---

## Anti-Patterns

| Anti-Pattern | Why It Is Harmful | What to Do Instead |
|-------------|-------------------|-------------------|
| No tags on scenarios | Cannot filter, cannot report, cannot integrate with CI/CD | Every scenario gets at least suite + priority + scope |
| Tags on Feature instead of Scenario | Over-applies tags; makes filtering imprecise | Tag individual Scenarios unless all share the tag |
| `@smoke` on more than 20 scenarios | Smoke suite takes too long; loses its purpose as a quick gate | Review and prune to the 20 most critical |
| `@flaky` without a Jira ticket | Flaky tests linger forever without accountability | Every `@flaky` tag gets a corresponding bug |
| Custom tags without team discussion | Tag namespace becomes inconsistent and unparseable | Propose new tags in retrospective |
| Never removing `@wip` | Dead scenarios clutter the repository | Review `@wip` every sprint; complete or delete |

---

[← Back to Standards Overview](/standards/)
