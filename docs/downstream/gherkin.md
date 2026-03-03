# Gherkin & AssertThat Patterns

<span class="phase-badge downstream">🟢 Downstream</span>

## Why Gherkin?

Gherkin scenarios are executable specifications. They are the bridge between human-readable acceptance criteria and automated tests. When written well, they serve three audiences simultaneously:

- **Product** reads them to confirm the feature is specified correctly
- **Developers** use them to understand the required behaviour before coding
- **QA** runs them in AssertThat to confirm the feature works in CI

The key insight: **Gherkin should be written before development begins**, not after. This is Behaviour-Driven Development (BDD) in practice.

## Feature File Structure

```gherkin
Feature: [Area] — [Capability name]
  As a [persona]
  I want [capability]
  So that [outcome]

  Background:
    Given a user "liam@example.com" exists with role "accountant"
    And the user is authenticated

  @area-frontend @risk-high @type-happy @smoke
  Scenario: User views correct positive balance
    Given the user's wallet balance is $250.00
    When they navigate to the dashboard
    Then the balance card displays "$250.00"
    And the balance is displayed in the default text colour

  @area-frontend @risk-high @type-edge
  Scenario: User views correct negative balance
    Given the user's wallet balance is -$125.50
    When they navigate to the dashboard
    Then the balance card displays "-$125.50"
    And the balance is displayed in red text

  @area-frontend @risk-high @type-edge
  Scenario: User views zero balance
    Given the user's wallet balance is $0.00
    When they navigate to the dashboard
    Then the balance card displays "$0.00"
    And the balance is not displayed in red

  @area-frontend @risk-high @type-error
  Scenario: Balance API returns error
    Given the balance API returns a 500 error
    When the user navigates to the dashboard
    Then the balance card displays "Unable to load balance"
    And a retry button is visible

  @area-frontend @risk-medium @type-edge
  Scenario Outline: Balance boundary values
    Given the user's wallet balance is <balance>
    When they navigate to the dashboard
    Then the balance card displays "<display>"

    Examples:
      | balance   | display    |
      | -0.01     | -$0.01     |
      | 0.00      | $0.00      |
      | 0.01      | $0.01      |
      | -99999.99 | -$99,999.99 |
```

## Tagging Standard

Tags drive reporting, filtering, and CI gates. Every scenario must have at minimum an `@area-*` and a `@type-*` tag.

### Required Tags

| Tag | Values | Purpose |
|-----|--------|---------|
| `@area-*` | `api`, `frontend`, `mobile`, `database`, `auth`, `payments`, `ux` | Domain ownership. Routes failures to the right team. |
| `@type-*` | `happy`, `edge`, `error`, `security`, `performance` | Test classification. Drives risk-based execution. |

### Optional Tags

| Tag | Values | Purpose |
|-----|--------|---------|
| `@risk-*` | `low`, `med`, `high` | Execution priority. High-risk scenarios run first. |
| `@smoke` | — | Core scenarios run on every deployment (keep suite < 5 min) |
| `@regression` | — | Full suite, run before every release |
| `@acceptance` | — | Scenarios that map 1:1 to an acceptance criterion. Run during "In Test" QA gate. |
| `@P0` | — | Business-critical path. Failure blocks release. Must never be flaky. |
| `@wip` | — | Work in progress. Excluded from CI runs. Removed before PR merge. |
| `@env-*` | `dev`, `staging`, `production` | Environment-specific scenarios |

### When to Use Each Tag

| Tag | Use When | Don't Use When |
|-----|----------|----------------|
| `@smoke` | The scenario covers a core user journey that must work after every deploy | The scenario covers an edge case or low-traffic flow |
| `@regression` | The scenario protects against a known bug or validates a broad feature area | The scenario is already in `@smoke` (smoke is a subset of regression) |
| `@acceptance` | The scenario directly mirrors an acceptance criterion from the Jira story | The scenario is an exploratory edge case added by QA |
| `@P0` | System down, revenue loss, or data corruption if this fails | The scenario covers a cosmetic or non-critical path |
| `@wip` | The scenario is being drafted during the current sprint and step definitions are incomplete | The scenario is ready for CI — `@wip` must be removed before merge |

::: warning Never Merge @wip Tags
A `@wip` tag that reaches the main branch means your CI suite silently skips a scenario. The PR review checklist should include: "Are there any `@wip` tags remaining?" Treat a merged `@wip` tag as a P2 bug.
:::

### Tag Usage Example

```gherkin
@area-payments @risk-high @type-security @regression
Scenario: Unauthenticated user cannot access wallet API
  Given no authentication token is present
  When a request is made to GET /api/user/wallet
  Then the response status is 401
  And the response body contains "Unauthorized"
```

## Quality Gates for Gherkin

| Gate | Criterion |
|------|-----------|
| Every `Then` is verifiable | No `Then` uses subjective language ("looks correct", "seems right") |
| Deterministic data | No reliance on production data or real time. Use fixtures or factory data. |
| One behaviour per scenario | Scenarios are not test scripts. One observable outcome per scenario. |
| Jira Story linked | Every feature file has the Story ID in a comment or tag (`@story-ABC-123`) |
| No flakiness tolerated | Flaky scenarios are treated as P2 bugs — they must be fixed or quarantined |

---

## The Three-Amigos Session

Before a developer writes the first line of code for a story, the team runs a **Story Kick-Off** (also called "three amigos"):

- **Product** confirms the intent and acceptance criteria
- **Developer** asks "how would I implement this?" — surfaces technical edge cases
- **QA** asks "how would I break this?" — surfaces test scenarios not in the AC

This 15-minute session is where the Gherkin seeds are agreed. The scenarios that come out of it become the feature file for the story.

### How Gherkin Scenarios Emerge from the Three-Amigos Session

The three-amigos session follows a specific pattern that naturally produces Gherkin:

1. **PM states the intent** → this becomes the `Feature:` block and the happy-path `Scenario`
2. **Developer asks "what if?"** → each technical edge case becomes an `@type-edge` scenario
3. **QA asks "how would I break this?"** → each failure mode becomes an `@type-error` scenario
4. **All three agree on boundaries** → these become `Scenario Outline` with `Examples` tables

The output of every three-amigos session should be a feature file committed to the repository before development begins. This file is the contract between the three roles.

### Story Kick-Off for the Balance Bug Example

Had a three-amigos session been run for the WalletCard story, a QA engineer would have asked:

> *"What happens if the balance is negative? What does the API return — a negative number, or a special field? What should the UI do?"*

The developer would have discovered that the conditional `balance.amount > 0 ? balance.amount : 0` was the implementation plan — and the team would have caught it before a single line was committed.

---

## Living Wondrously Journal — BDD Examples

The Living Wondrously journal app provides rich examples of real-world Gherkin patterns. Each feature below emerged from a three-amigos session.

### Prompt Carousel

```gherkin
Feature: Journal — Prompt Carousel
  As a journal user
  I want to see a rotating carousel of writing prompts
  So that I am inspired to write a new entry

  Background:
    Given the user "emma@livingwondrously.com" is authenticated
    And the prompt library contains at least 9 prompts

  @area-frontend @risk-high @type-happy @smoke
  Scenario: User sees prompts on the journal home screen
    When the user navigates to the journal home
    Then a carousel displays 3 prompts
    And each prompt shows the prompt text and a category icon

  @area-frontend @risk-medium @type-edge
  Scenario: User swipes to the next set of prompts
    Given the user is viewing the first set of 3 prompts
    When the user swipes left on the carousel
    Then the next set of 3 prompts is displayed
    And the carousel indicator advances by one position

  @area-frontend @risk-high @type-happy @acceptance
  Scenario: User taps a prompt to start a new entry
    Given the user is viewing the prompt "What made you smile today?"
    When the user taps that prompt
    Then a new journal entry is created with the prompt pre-filled
    And the cursor is placed in the entry body field

  @area-frontend @risk-medium @type-edge
  Scenario: Prompt library has fewer than 3 prompts
    Given the prompt library contains only 2 prompts
    When the user navigates to the journal home
    Then the carousel displays 2 prompts
    And no empty placeholder card is shown

  @area-frontend @risk-high @type-error
  Scenario: Prompt API is unavailable
    Given the prompt API returns a 503 error
    When the user navigates to the journal home
    Then the carousel displays cached prompts from the last successful load
    And a subtle banner shows "Using saved prompts — new prompts unavailable"

  @area-frontend @risk-medium @type-edge @acceptance
  Scenario: User taps a prompt while an unsaved draft exists
    Given the user has an unsaved draft entry
    And the user is viewing the prompt carousel
    When the user taps a new prompt
    Then a confirmation dialog asks "Save your current draft?"
    And selecting "Save" saves the draft and opens the new entry
```

### Entry Creation

```gherkin
Feature: Journal — Entry Creation
  As a journal user
  I want to write and save journal entries
  So that I can reflect on my experiences

  Background:
    Given the user "emma@livingwondrously.com" is authenticated
    And the user has selected the prompt "What are you grateful for?"

  @area-frontend @risk-high @type-happy @smoke
  Scenario: User creates and saves a journal entry
    Given the user has typed "I am grateful for the morning light"
    When the user taps the "Save" button
    Then the entry is saved with the current date and time
    And a confirmation message "Entry saved" is displayed
    And the user is returned to the journal home

  @area-frontend @risk-medium @type-happy @acceptance
  Scenario: Auto-save triggers after inactivity
    Given the user has typed at least 10 characters
    When 5 seconds pass without any typing
    Then the entry is auto-saved as a draft
    And a "Draft saved" indicator appears in the toolbar

  @area-frontend @risk-high @type-edge
  Scenario: Entry exceeds maximum character limit
    Given the user has typed 9,990 characters
    When the user types 15 more characters
    Then only the first 10,000 characters are accepted
    And a warning message shows "Character limit reached (10,000)"

  @area-api @risk-high @type-error
  Scenario: Save fails due to network error
    Given the save API returns a network timeout
    When the user taps the "Save" button
    Then the entry is stored locally on the device
    And a message shows "Saved offline — will sync when connected"
    And a retry icon appears in the toolbar
```

### Past Entries

```gherkin
Feature: Journal — Past Entries
  As a journal user
  I want to browse my past journal entries
  So that I can revisit my reflections

  Background:
    Given the user "emma@livingwondrously.com" is authenticated
    And the user has 250 saved journal entries

  @area-frontend @risk-high @type-happy @smoke
  Scenario: User views past entries in reverse chronological order
    When the user navigates to the "Past Entries" screen
    Then the 20 most recent entries are displayed
    And each entry shows the date, prompt, and a preview of the first 80 characters

  @area-frontend @risk-medium @type-happy @acceptance
  Scenario: User scrolls to load more entries
    Given the user is viewing the first 20 entries
    When the user scrolls to the bottom of the list
    Then the next 20 entries are loaded
    And a loading spinner is briefly visible during the fetch

  @area-frontend @risk-high @type-edge @P0
  Scenario: Scroll performance with 200+ entries
    Given the user has scrolled past 200 entries
    Then the scroll frame rate remains above 55fps
    And entries above the visible viewport are virtualized

  @area-frontend @risk-medium @type-edge
  Scenario: User has no past entries
    Given the user has 0 saved journal entries
    When the user navigates to the "Past Entries" screen
    Then an empty state illustration is displayed
    And the message "Start your journey — write your first entry" is shown
    And a "Write Now" button links to the entry creation screen
```

### Star Increment

```gherkin
Feature: Journal — Star Increment for Streaks
  As a journal user
  I want to earn stars for consecutive daily entries
  So that I am motivated to maintain my journaling habit

  Background:
    Given the user "emma@livingwondrously.com" is authenticated

  @area-api @risk-high @type-happy @smoke
  Scenario: User earns a star for a consecutive day
    Given the user wrote an entry yesterday
    And the user writes an entry today
    When the entry is saved
    Then the user's star count increments by 1
    And the streak counter shows the current streak length

  @area-api @risk-high @type-edge
  Scenario: Streak resets after a missed day
    Given the user's last entry was 2 days ago
    When the user writes an entry today
    Then the streak counter resets to 1
    And the star count does not increment

  @area-api @risk-high @type-edge @P0
  Scenario: Timezone boundary does not cause double increment
    Given the user is in timezone UTC+12
    And the user wrote an entry at 11:30 PM local time yesterday
    And the user writes an entry at 12:30 AM local time today
    When the entry is saved
    Then the star count increments by exactly 1
    And the "consecutive day" check uses the user's local date, not the server UTC date

  @area-frontend @risk-medium @type-happy @acceptance
  Scenario: Star animation plays on increment
    Given the user has just earned a new star
    When the entry save confirmation is displayed
    Then a star animation plays for 2 seconds
    And the updated star count is visible after the animation completes
```

::: info These Scenarios Caught Real Bugs
The timezone boundary scenario above was written during a three-amigos session when QA asked: "What clock does the streak logic use?" The developer realized the server used UTC while the client used local time. This scenario caught the double-increment bug during the Observed window at hour 19 — before any user complained.
:::

---

## Someone for Coffee — BDD Examples

The Someone for Coffee app connects professionals for casual coffee meetings. These scenarios demonstrate Gherkin patterns for a matching and scheduling domain.

### Profile Verification

```gherkin
Feature: Coffee — Profile Verification
  As a new user
  I want to verify my professional profile
  So that I can be matched with other verified professionals

  Background:
    Given the user "dan@company.com" has created an account

  @area-api @risk-high @type-happy @smoke
  Scenario: User verifies email successfully
    Given a verification email has been sent to "dan@company.com"
    When the user clicks the verification link within 24 hours
    Then the user's email status is "verified"
    And the user can access the matching feature

  @area-api @risk-high @type-edge
  Scenario: Verification link has expired
    Given a verification email was sent 25 hours ago
    When the user clicks the verification link
    Then the message "This link has expired" is displayed
    And a "Resend verification" button is visible

  @area-api @risk-high @type-security @regression
  Scenario: User cannot match without verified email
    Given the user's email status is "unverified"
    When the user attempts to access the matching screen
    Then the user is redirected to the verification prompt
    And no match data is returned by the API
```

### Matching

```gherkin
Feature: Coffee — Profile Matching
  As a verified user
  I want to see my top coffee matches
  So that I can choose someone to meet for coffee

  Background:
    Given the user "dan@company.com" is verified
    And the matching pool contains at least 20 users

  @area-api @risk-high @type-happy @smoke
  Scenario: User sees top 5 matches
    When the user opens the "Find a Match" screen
    Then 5 match cards are displayed
    And each card shows the match's name, role, and shared interest count

  @area-api @risk-medium @type-happy @acceptance
  Scenario: Matches are scored by shared interests
    Given "dan@company.com" has interests: ["architecture", "hiking", "cooking"]
    And "sara@company.com" has interests: ["architecture", "cooking", "travel"]
    And "mike@company.com" has interests: ["gaming", "travel", "music"]
    When the user opens the "Find a Match" screen
    Then "sara@company.com" appears ranked higher than "mike@company.com"

  @area-api @risk-medium @type-edge
  Scenario: User has no matches in the pool
    Given the matching pool contains 0 other verified users
    When the user opens the "Find a Match" screen
    Then an empty state message shows "No matches yet — check back soon"
    And a "Share with colleagues" action is available

  @area-api @risk-medium @type-edge
  Scenario: User has already met with a match this month
    Given "dan@company.com" had coffee with "sara@company.com" 5 days ago
    When the user opens the "Find a Match" screen
    Then "sara@company.com" does not appear in the top 5
```

### Coffee Meeting Coordination

```gherkin
Feature: Coffee — Meeting Coordination
  As a matched user
  I want to schedule a coffee meeting with my match
  So that we can meet at a convenient time and place

  Background:
    Given the user "dan@company.com" is matched with "sara@company.com"
    And both users are verified

  @area-frontend @risk-high @type-happy @smoke @acceptance
  Scenario: User sends a coffee invitation
    When "dan@company.com" taps "Invite for Coffee" on sara's card
    And selects "Tuesday 10:00 AM" as the proposed time
    And selects "Ground Floor Café" as the location
    Then an invitation is sent to "sara@company.com"
    And the match card shows status "Invitation Sent"

  @area-api @risk-high @type-happy @acceptance
  Scenario: Match accepts the invitation
    Given "dan@company.com" has sent an invitation for Tuesday 10:00 AM
    When "sara@company.com" accepts the invitation
    Then both users see a confirmed meeting card
    And a calendar event is created for both users
    And a reminder is scheduled for 1 hour before the meeting

  @area-api @risk-medium @type-edge
  Scenario: Match declines the invitation
    Given "dan@company.com" has sent an invitation
    When "sara@company.com" declines the invitation
    Then "dan@company.com" sees status "Declined"
    And "dan@company.com" can propose a new time or choose another match

  @area-api @risk-medium @type-edge
  Scenario: Invitation expires without response
    Given "dan@company.com" sent an invitation 72 hours ago
    And "sara@company.com" has not responded
    Then the invitation status changes to "Expired"
    And "dan@company.com" is notified: "Sara didn't respond — try another match"
```

---

## Anti-Patterns: What Bad Gherkin Looks Like

Bad Gherkin scenarios undermine the entire purpose of BDD. They are brittle, unreadable, and test implementation details instead of behaviour. Below are the most common anti-patterns with corrected versions.

### Anti-Pattern 1: Testing Implementation Instead of Behaviour

::: details Bad vs. Good — Implementation Coupling
**Bad — tests how the code works internally:**
```gherkin
Scenario: User creates a journal entry
  Given the Redux store is initialized
  When the user dispatches CREATE_ENTRY action with payload { prompt: "gratitude" }
  Then the store state contains a new entry with status "draft"
  And the useCreateEntry hook returns isLoading: false
```

**Good — tests what the user experiences:**
```gherkin
Scenario: User creates a journal entry
  Given the user has selected the prompt "What are you grateful for?"
  When the user types "I am grateful for sunlight" and taps "Save"
  Then the entry is saved with today's date
  And a confirmation message "Entry saved" is displayed
```

The bad version breaks when you refactor state management. The good version survives any implementation change as long as the user experience is preserved.
:::

### Anti-Pattern 2: Too Many Steps

::: details Bad vs. Good — Step Overload
**Bad — a scenario that reads like a test script:**
```gherkin
Scenario: User completes coffee meeting flow
  Given the user opens the app
  And the user logs in with "dan@company.com" and "password123"
  And the user navigates to the dashboard
  And the user taps the "Find Match" button
  And the system loads 5 matches
  And the user scrolls to the second match
  And the user taps "Invite"
  And the user selects Tuesday
  And the user selects 10:00 AM
  And the user selects "Ground Floor Café"
  And the user taps "Send"
  Then the invitation is sent
  And the match card shows "Invitation Sent"
  And an email notification is sent to the match
```

**Good — focused on one behaviour with context in Background:**
```gherkin
Background:
  Given "dan@company.com" is authenticated and on the matching screen

Scenario: User sends a coffee invitation
  When the user taps "Invite for Coffee" on their top match
  And selects Tuesday 10:00 AM at "Ground Floor Café"
  Then an invitation is sent to the matched user
  And the match card shows status "Invitation Sent"
```

Scenarios with more than 7 steps are almost always trying to test too many things at once. Split them.
:::

### Anti-Pattern 3: Unclear Given State

::: details Bad vs. Good — Vague Preconditions
**Bad — no one knows what state the system is in:**
```gherkin
Scenario: User sees their entries
  Given the system is set up
  When the user goes to the entries page
  Then entries are shown
```

**Good — precise, reproducible state:**
```gherkin
Scenario: User sees their past entries in reverse chronological order
  Given the user "emma@livingwondrously.com" is authenticated
  And the user has 5 saved entries from the last 7 days
  When the user navigates to the "Past Entries" screen
  Then the 5 entries are displayed with the most recent first
  And each entry shows the date, prompt, and first 80 characters
```

Every `Given` should establish a specific, deterministic state that any team member can reproduce.
:::

### Anti-Pattern 4: Non-Verifiable Then Steps

::: details Bad vs. Good — Subjective Assertions
**Bad — how does a test runner verify "correctly" or "properly"?**
```gherkin
Scenario: Dashboard loads correctly
  When the user opens the dashboard
  Then the dashboard is displayed correctly
  And all data loads properly
  And the page looks good
```

**Good — concrete, measurable assertions:**
```gherkin
Scenario: Dashboard displays wallet balance and recent transactions
  Given the user's wallet balance is $250.00
  And the user has 3 transactions in the last 7 days
  When the user opens the dashboard
  Then the balance card displays "$250.00"
  And 3 transaction rows are visible
  And each transaction shows the date, description, and amount
```
:::

### Anti-Pattern 5: Scenario Outlines Without Meaningful Variation

::: details Bad vs. Good — Pointless Examples Tables
**Bad — variations that don't test different behaviour:**
```gherkin
Scenario Outline: User creates an entry with different prompts
  Given the user selects the prompt "<prompt>"
  When the user saves the entry
  Then the entry is saved

  Examples:
    | prompt                        |
    | What are you grateful for?    |
    | What made you smile today?    |
    | What did you learn today?     |
    | What challenge did you face?  |
```

These all exercise the identical code path. Use Scenario Outlines when examples trigger **different behaviour**:

**Good — boundary values that test different code paths:**
```gherkin
Scenario Outline: Balance display at boundary values
  Given the user's wallet balance is <balance>
  When they navigate to the dashboard
  Then the balance card displays "<display>"
  And the balance colour is <colour>

  Examples:
    | balance   | display     | colour  |
    | -0.01     | -$0.01      | red     |
    | 0.00      | $0.00       | default |
    | 0.01      | $0.01       | default |
    | -99999.99 | -$99,999.99 | red     |
```
:::

---

## AssertThat Integration

### Linking Scenarios to Jira Stories

Every feature file must be linked to its Jira story. This creates bidirectional traceability: from the story you can see which scenarios test it, and from the test run you can see which story is affected.

```gherkin
@story-LW-342
Feature: Journal — Prompt Carousel
  ...
```

In AssertThat, this tag creates a link between the feature file and Jira story LW-342. When the scenario runs, the result is reported back to the Jira story as a test execution.

### Configuration

```yaml
# assertthat.yml
projectKey: "LW"
jqlFilter: "project = LW AND sprint in openSprints()"
outputFormat: "json"
featureFileDirectory: "./tests/features"
stepDefinitionDirectory: "./tests/step-definitions"
```

### CI Pipeline Integration

```yaml
# .github/workflows/bdd.yml
bdd-tests:
  runs-on: ubuntu-latest
  steps:
    - name: Run smoke suite
      run: npx assertthat run --tags "@smoke"

    - name: Run regression suite (pre-release only)
      if: github.ref == 'refs/heads/release/*'
      run: npx assertthat run --tags "@regression"

    - name: Upload results to Jira
      if: always()
      run: npx assertthat upload --results ./test-results

    - name: Fail pipeline on red scenarios
      run: |
        FAILURES=$(cat ./test-results/summary.json | jq '.failures')
        if [ "$FAILURES" -gt "0" ]; then
          echo "❌ $FAILURES Gherkin scenarios failed"
          exit 1
        fi
```

### Test Execution Tracking

AssertThat provides a test execution dashboard in Jira that answers three questions:

| Question | Where to Find It |
|----------|-----------------|
| "Are all scenarios for this sprint green?" | Sprint test execution report — filter by `jqlFilter` |
| "Which stories have failing scenarios?" | Story-level test panel — red/green indicator per story |
| "What is our pass rate trend?" | Project-level trend chart — week-over-week pass rate |

::: tip Use AssertThat Cycles for Release Tracking
Create a test cycle per release. Add all `@regression` and `@smoke` scenarios to the cycle. The cycle report shows overall release readiness and highlights which stories have risk.
:::

---

## Gherkin as Living Documentation

### The Documentation Problem

Traditional documentation has a half-life. A Confluence page written during sprint 3 is stale by sprint 6. API docs written by a developer who has since left the project are archaeological artifacts. No one trusts them.

Gherkin solves this because **the documentation is the test suite**. If the scenario passes, the documentation is accurate. If someone changes the behaviour, the scenario fails — forcing the documentation to be updated.

### What Living Documentation Looks Like

```
docs/features/
├── journal/
│   ├── entry-creation.feature      ← How entries are created
│   ├── past-entries.feature        ← How past entries are browsed
│   ├── prompt-carousel.feature     ← How the prompt carousel works
│   └── star-increment.feature      ← How streaks and stars work
├── wallet/
│   ├── balance-display.feature     ← How balances are displayed
│   └── transaction-history.feature ← How transactions are listed
└── matching/
    ├── profile-verification.feature ← How profiles are verified
    ├── matching-algorithm.feature   ← How matches are ranked
    └── meeting-coordination.feature ← How meetings are scheduled
```

A new team member reads these feature files and understands what the system does — not what someone once wrote that it does. The CI pipeline proves these descriptions are true every time it runs.

### The Litmus Test

> If you deleted all your Confluence documentation tomorrow, could a new team member understand the system by reading your Gherkin feature files?

If the answer is no, your Gherkin is either too low-level (testing implementation) or too sparse (not enough scenarios). The feature files should read like a user manual written in structured English.

::: info Gherkin Is Not a Substitute for All Documentation
Gherkin documents **behaviour**: what the system does in response to user actions. It does not replace architecture diagrams, runbooks, onboarding guides, or decision records. Use Gherkin for behavioural specifications. Use other formats for everything else.
:::

### Keeping Gherkin Current

| Practice | How |
|----------|-----|
| Feature files live in the same repo as the code | Changes to behaviour require changes to both code and scenarios in the same PR |
| PR reviews include Gherkin review | Reviewers check that new code has corresponding scenarios and that changed scenarios are accurate |
| `@wip` cleanup | CI job flags any `@wip` tags on the main branch as a P2 bug |
| Quarterly feature file audit | QA lead reviews feature file coverage against the product's current feature set |

---

## Quick Reference: Scenario Writing Checklist

Before committing a new scenario, verify:

| # | Check | Why |
|---|-------|-----|
| 1 | `Given` establishes a specific, reproducible state | Vague preconditions make scenarios flaky |
| 2 | `When` describes a single user action or system event | Multiple actions in `When` test multiple behaviours |
| 3 | `Then` asserts a concrete, measurable outcome | Subjective assertions cannot be automated |
| 4 | Scenario has `@area-*` and `@type-*` tags | Untagged scenarios cannot be filtered or routed |
| 5 | Scenario is linked to a Jira story via `@story-*` tag | Unlinked scenarios have no traceability |
| 6 | Scenario tests behaviour, not implementation | Implementation-coupled scenarios break on refactors |
| 7 | Scenario has ≤ 7 steps | Longer scenarios are likely testing too much |
| 8 | No `@wip` tag remains on merged feature files | `@wip` tags cause silent test skips in CI |
