# BDD Workshop

<span class="phase-badge downstream">🟢 Downstream</span>

**Difficulty:** 🟡 Intermediate · **Time:** 2–3 hours · **Best for:** Developers, QA engineers, PMs, and teams preparing for their first Three Amigos session

This workshop teaches you to write Gherkin scenarios that are clear, testable, and valuable. You'll work through four features of the **Living Wondrously Journal** app, simulate Three Amigos discussions, identify common BDD mistakes, and connect scenarios to test automation.

::: info What Is Living Wondrously?
Living Wondrously is a daily reflection journal app built by Momentum. The core features include: a prompt carousel that presents daily writing prompts, an entry creation flow where users write and save reflections, a past entries browser, and a star/streak reward system that motivates daily journaling. The app is part of a broader wellness platform.
:::

---

## What Is BDD?

Behaviour-Driven Development is a practice where the team **specifies expected behaviour before writing code**. The specification is written in Gherkin — a structured, human-readable language that can also be executed as automated tests.

BDD is not a testing technique. It is a **collaboration technique** that produces tests as a by-product.

The key insight: **the conversation about the behaviour is more valuable than the written scenario.** The scenario is just the artefact that survives the conversation.

### The BDD Workflow

```
1. PM writes the story with acceptance criteria
2. Three Amigos session: PM + Dev + QA discuss the story
3. QA drafts Gherkin scenarios during or after the session
4. Dev reviews scenarios and begins implementation
5. Dev writes step definitions that connect Gherkin to test code
6. Tests run in CI — failures mean the behaviour doesn't match the spec
```

::: warning BDD Is Not "Write Tests First"
BDD is "agree on behaviour first." The agreement happens in a conversation (the Three Amigos session). The Gherkin is the written record of that agreement. If the QA engineer writes scenarios alone at their desk without a conversation, that's test scripting — not BDD.
:::

---

## The Three Amigos

### Who Are They?

| Role | Their Question | What They Contribute |
|------|---------------|---------------------|
| **Product (PM/PO)** | "What should the user experience?" | Intent, acceptance criteria, business rules |
| **Developer** | "What if...?" | Technical edge cases, implementation constraints, data questions |
| **QA** | "How would I break this?" | Failure modes, boundary values, security concerns |

### How the Session Works

1. **PM reads the story aloud** (2 minutes)
2. **Developer asks clarifying questions** (5 minutes) — "What happens when the prompt list is empty?" "Does this work offline?"
3. **QA proposes failure scenarios** (5 minutes) — "What if the save fails?" "What if two entries are saved in the same second?"
4. **All three agree on scenarios** (3 minutes) — PM confirms intent, Dev confirms feasibility, QA confirms testability
5. **QA writes or refines Gherkin** after the session

::: tip The 15-Minute Rule
Three Amigos sessions should take 15 minutes per story. If they run longer, the story is either too big (split it) or the ACs are too vague (rewrite them). The session is not a design meeting — it's a verification that everyone interprets the story the same way.
:::

---

## Exercise 1: The Prompt Carousel

### The Story

```
As a journal user,
I want to see a carousel of daily writing prompts when I open the journal,
So that I feel inspired to begin my reflection.
```

**Acceptance Criteria:**
- AC1: The carousel displays 3 prompts at a time
- AC2: Each prompt shows the prompt text and a category icon
- AC3: The user can swipe to see more prompts
- AC4: Tapping a prompt opens a new entry with that prompt pre-filled

### Simulated Three Amigos Discussion

**Developer asks:** "What happens if the prompt library has fewer than 3 prompts? Do we show empty slots?"

**PM responds:** "No empty slots. If there are only 2 prompts, show 2. If there's 1, show 1 without the carousel UI."

**QA asks:** "What if the prompt API is down? Does the user see an error, or do we cache prompts locally?"

**PM responds:** "Cache the last successful load. Show cached prompts with a subtle banner saying prompts might be stale."

**Developer asks:** "What if the user has an unsaved draft and taps a new prompt? Do we discard the draft?"

**PM responds:** "Show a confirmation dialog: 'Save your current draft?' with Save and Discard options."

### ✏️ Try It Yourself

Before reading the solution, write 4–6 Gherkin scenarios for the prompt carousel feature. Include: a happy path, at least one edge case, one error scenario, and one scenario that emerged from the Three Amigos discussion.

::: details Solution: Prompt Carousel Gherkin
```gherkin
Feature: Journal — Prompt Carousel
  As a journal user
  I want to see a carousel of daily writing prompts
  So that I feel inspired to begin my reflection

  Background:
    Given the user "emma@livingwondrously.com" is authenticated

  @area-frontend @risk-high @type-happy @smoke
  Scenario: User sees prompts on the journal home screen
    Given the prompt library contains 9 prompts
    When the user navigates to the journal home
    Then a carousel displays 3 prompts
    And each prompt shows the prompt text and a category icon

  @area-frontend @risk-medium @type-happy
  Scenario: User swipes to the next set of prompts
    Given the prompt library contains 9 prompts
    And the user is viewing the first 3 prompts
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
    And the device has cached prompts from a previous session
    When the user navigates to the journal home
    Then the carousel displays the cached prompts
    And a banner shows "Using saved prompts — new prompts unavailable"

  @area-frontend @risk-medium @type-edge @acceptance
  Scenario: User taps a prompt while an unsaved draft exists
    Given the user has an unsaved draft entry
    When the user taps the prompt "What are you grateful for?"
    Then a confirmation dialog asks "Save your current draft?"
    And selecting "Save" saves the draft and opens the new entry
    And selecting "Discard" discards the draft and opens the new entry
```

Notice how every scenario from the Three Amigos discussion became a formal Gherkin scenario. The developer's question about fewer-than-3 prompts, the QA's question about API failure, and the developer's question about unsaved drafts — all captured, all testable.
:::

---

## Exercise 2: Entry Creation

### The Story

```
As a journal user,
I want to write and save a journal entry,
So that my reflection is preserved and I can revisit it later.
```

**Acceptance Criteria:**
- AC1: User can type free-form text in the entry body
- AC2: Tapping "Save" persists the entry with the current date and time
- AC3: A confirmation message appears after saving
- AC4: Auto-save triggers after 5 seconds of inactivity
- AC5: Character limit is 10,000 characters

### Simulated Three Amigos Discussion

**QA asks:** "What happens when the user is offline and taps Save? Do we show an error or save locally?"

**PM responds:** "Save locally. Show 'Saved offline — will sync when connected.' When connectivity returns, sync automatically."

**Developer asks:** "For auto-save, does the entry get a 'draft' status that's different from a manually saved entry?"

**PM responds:** "Yes. Auto-saved entries are drafts. Manually saved entries are final. Drafts show a 'Draft' badge in the past entries list."

**QA asks:** "What if the character limit is reached? Do we block typing or truncate?"

**PM responds:** "Block typing. Show a counter that turns red at 9,900 characters and a message at 10,000."

### ✏️ Try It Yourself

Write 5–6 Gherkin scenarios for entry creation. Cover: happy path save, auto-save as draft, character limit, offline save, and at least one more edge case.

::: details Solution: Entry Creation Gherkin
```gherkin
Feature: Journal — Entry Creation
  As a journal user
  I want to write and save a journal entry
  So that my reflection is preserved

  Background:
    Given the user "emma@livingwondrously.com" is authenticated
    And the user has selected the prompt "What are you grateful for?"

  @area-frontend @risk-high @type-happy @smoke
  Scenario: User creates and saves a journal entry
    Given the user has typed "I am grateful for the morning light"
    When the user taps the "Save" button
    Then the entry is saved with status "final" and the current timestamp
    And a confirmation message "Entry saved" is displayed
    And the user is returned to the journal home

  @area-frontend @risk-medium @type-happy @acceptance
  Scenario: Auto-save triggers after inactivity
    Given the user has typed at least 10 characters
    When 5 seconds pass without any typing
    Then the entry is auto-saved with status "draft"
    And a "Draft saved" indicator appears in the toolbar

  @area-frontend @risk-high @type-edge
  Scenario: Entry reaches maximum character limit
    Given the user has typed 9,990 characters
    And the character counter is displayed in red
    When the user types 15 more characters
    Then only the first 10,000 characters are accepted
    And a message shows "Character limit reached (10,000)"
    And further typing is blocked

  @area-api @risk-high @type-error
  Scenario: Save fails due to network error
    Given the device has no internet connection
    When the user taps the "Save" button
    Then the entry is stored locally on the device
    And a message shows "Saved offline — will sync when connected"
    And a sync icon appears in the toolbar

  @area-api @risk-medium @type-happy
  Scenario: Offline entry syncs when connectivity returns
    Given an entry was saved offline 10 minutes ago
    When the device regains internet connectivity
    Then the entry is synced to the server within 30 seconds
    And the sync icon is replaced by a checkmark

  @area-frontend @risk-medium @type-edge
  Scenario: User navigates away with unsaved changes
    Given the user has typed 50 characters without saving
    When the user taps the back button
    Then a dialog asks "You have unsaved changes. Save as draft?"
    And selecting "Save" saves the entry as a draft
    And selecting "Discard" discards the entry and navigates back
```
:::

---

## Exercise 3: Past Entries

### The Story

```
As a journal user,
I want to browse my past journal entries by date,
So that I can revisit earlier reflections.
```

**Acceptance Criteria:**
- AC1: Past entries are displayed in reverse chronological order
- AC2: Each entry shows the date, the prompt, and a preview (first 80 characters)
- AC3: Pagination loads 20 entries at a time
- AC4: Tapping an entry opens the full text

### Simulated Three Amigos Discussion

**Developer asks:** "Do drafts appear in the past entries list?"

**PM responds:** "Yes, but with a 'Draft' badge. Tapping a draft reopens the editor, not a read-only view."

**QA asks:** "What if the user has no entries at all? What's the empty state?"

**PM responds:** "Show an illustration and the text 'Start your journey — write your first entry' with a 'Write Now' button."

**QA asks:** "What about scroll performance with hundreds of entries?"

**Developer responds:** "We'll virtualize the list. I can guarantee 55fps even with 500+ entries."

### ✏️ Try It Yourself

Write 4–5 Gherkin scenarios for past entries browsing. Include: the happy path, the empty state, pagination, and drafts.

::: details Solution: Past Entries Gherkin
```gherkin
Feature: Journal — Past Entries
  As a journal user
  I want to browse my past journal entries
  So that I can revisit earlier reflections

  Background:
    Given the user "emma@livingwondrously.com" is authenticated

  @area-frontend @risk-high @type-happy @smoke
  Scenario: User views past entries in reverse chronological order
    Given the user has 30 saved journal entries
    When the user navigates to the "Past Entries" screen
    Then the 20 most recent entries are displayed
    And each entry shows the date, prompt, and first 80 characters
    And entries are ordered newest first

  @area-frontend @risk-medium @type-happy @acceptance
  Scenario: User scrolls to load more entries
    Given the user has 30 saved entries
    And the user is viewing the first 20 entries
    When the user scrolls to the bottom of the list
    Then the next 10 entries are loaded
    And a loading spinner is briefly visible during the fetch

  @area-frontend @risk-medium @type-edge
  Scenario: User has no past entries
    Given the user has 0 saved journal entries
    When the user navigates to the "Past Entries" screen
    Then an empty state illustration is displayed
    And the message "Start your journey — write your first entry" is shown
    And a "Write Now" button links to the entry creation screen

  @area-frontend @risk-medium @type-edge
  Scenario: Draft entries appear with a badge
    Given the user has 3 final entries and 1 draft entry
    When the user navigates to the "Past Entries" screen
    Then the draft entry shows a "Draft" badge
    And tapping the draft opens the entry in edit mode
    And tapping a final entry opens it in read-only mode

  @area-frontend @risk-high @type-edge @P0
  Scenario: Scroll performance with 200+ entries
    Given the user has 250 saved entries
    And the user scrolls through 200 entries
    Then the scroll frame rate remains above 55fps
    And entries above the visible viewport are virtualized
```
:::

---

## Exercise 4: Star Rewards & Streaks

### The Story

```
As a journal user,
I want to earn a star when I write entries on consecutive days,
So that I am motivated to maintain my journaling habit.
```

**Acceptance Criteria:**
- AC1: Writing on a consecutive day increments the star count by 1
- AC2: Missing a day resets the streak counter but preserves total stars
- AC3: A star animation plays when a new star is earned
- AC4: The streak counter shows the current consecutive-day count

### Simulated Three Amigos Discussion

**QA asks:** "What clock do we use for 'consecutive days'? Server UTC or user's local timezone?"

**Developer responds:** "Good question. If we use UTC, a user in UTC+12 could write at 11pm Monday local time and 1am Tuesday local time — and the server would see both entries on the same UTC day. No star earned."

**PM decides:** "Use the user's local timezone for streak calculations. The server stores the timezone from the user's device."

**QA asks:** "Can a user game the system by changing their device timezone?"

**PM responds:** "For MVP, we accept this risk. The motivation feature doesn't have financial value — gaming it only harms the user's own habit building."

**Developer asks:** "What if the user writes two entries on the same day? Do they get two stars?"

**PM responds:** "No. One star per calendar day, regardless of how many entries are written."

### ✏️ Try It Yourself

Write 5–6 Gherkin scenarios for the star reward system. Be sure to include the timezone edge case and the multiple-entries-per-day case.

::: details Solution: Star Rewards Gherkin
```gherkin
Feature: Journal — Star Rewards for Streaks
  As a journal user
  I want to earn stars for consecutive daily entries
  So that I am motivated to maintain my journaling habit

  Background:
    Given the user "emma@livingwondrously.com" is authenticated

  @area-api @risk-high @type-happy @smoke
  Scenario: User earns a star for a consecutive day
    Given the user wrote an entry yesterday (in their local timezone)
    And the user's current star count is 5
    When the user saves an entry today
    Then the star count increments to 6
    And the streak counter shows the current consecutive-day count

  @area-api @risk-high @type-edge
  Scenario: Streak resets after a missed day
    Given the user's last entry was 2 days ago (in their local timezone)
    And the user's streak count is 7
    When the user saves an entry today
    Then the streak counter resets to 1
    And the total star count remains unchanged

  @area-api @risk-high @type-edge @P0
  Scenario: Timezone boundary does not cause false streak break
    Given the user is in timezone UTC+3 (Israel)
    And the user saved an entry at 11:50 PM local time yesterday
    And the user saves an entry at 12:10 AM local time today
    When the entry is saved
    Then the star count increments by exactly 1
    And the streak is calculated using the user's local date

  @area-api @risk-medium @type-edge
  Scenario: Multiple entries on the same day do not earn extra stars
    Given the user has already saved an entry today
    And the user's star count is 3
    When the user saves a second entry today
    Then the star count remains 3
    And the streak counter does not change

  @area-frontend @risk-medium @type-happy @acceptance
  Scenario: Star animation plays on increment
    Given the user has just earned a new star
    When the entry save confirmation is displayed
    Then a star animation plays for 2 seconds
    And the updated star count is visible after the animation completes

  @area-api @risk-medium @type-edge
  Scenario: First-ever entry starts a streak of 1
    Given the user has never saved a journal entry
    And the user's star count is 0
    When the user saves their first entry
    Then the streak counter shows 1
    And the star count remains 0
    And the message "Keep writing tomorrow to earn your first star!" is shown
```
:::

---

## Common BDD Mistakes

Now that you've written scenarios, let's examine the mistakes that undermine BDD in practice.

### Mistake 1: Testing Implementation, Not Behaviour

```gherkin
# ❌ BAD — tests internal implementation
Scenario: User creates an entry
  Given the Redux store is initialized
  When the user dispatches CREATE_ENTRY with payload { prompt: "gratitude" }
  Then the store state includes a new entry with status "draft"
```

```gherkin
# ✅ GOOD — tests user-visible behaviour
Scenario: User creates an entry
  Given the user has selected the prompt "What are you grateful for?"
  When the user types "I am grateful for sunlight" and taps "Save"
  Then the entry is saved with today's date
  And a confirmation message "Entry saved" is displayed
```

::: warning The Refactoring Test
If refactoring your code (without changing behaviour) breaks your Gherkin scenarios, your scenarios are testing implementation. Gherkin should survive any refactoring that preserves the user experience.
:::

### Mistake 2: Too Many Steps

A scenario with more than 7 steps is almost always testing multiple behaviours in a single scenario. Split it.

```gherkin
# ❌ BAD — 11 steps testing three different behaviours
Scenario: Complete journal flow
  Given the user opens the app
  And the user logs in
  And the user sees the prompt carousel
  And the user swipes to the second page
  And the user taps "What made you smile?"
  And the user types a 200-character entry
  And the user waits 5 seconds for auto-save
  And the draft indicator appears
  And the user taps "Save"
  Then the entry is saved
  And the star count increments
```

This scenario tests: prompt browsing, entry creation, auto-save, manual save, and star earning — all in one. When it fails, you don't know which behaviour broke. Split into 3–4 focused scenarios.

### Mistake 3: Unclear Given States

```gherkin
# ❌ BAD — what does "set up" mean?
Scenario: User sees entries
  Given the system is set up
  When the user goes to the entries page
  Then entries are shown
```

```gherkin
# ✅ GOOD — specific, reproducible state
Scenario: User sees past entries in reverse chronological order
  Given the user "emma@livingwondrously.com" is authenticated
  And the user has 5 saved entries from the last 7 days
  When the user navigates to the "Past Entries" screen
  Then the 5 entries are displayed with the most recent first
```

### Mistake 4: Overlapping Scenarios

Two scenarios that test the same code path with trivially different data add maintenance cost without testing value.

```gherkin
# ❌ BAD — these test the identical behaviour
Scenario: User saves entry about gratitude
  Given the user selected the prompt "What are you grateful for?"
  When the user saves the entry
  Then the entry is saved

Scenario: User saves entry about smiling
  Given the user selected the prompt "What made you smile today?"
  When the user saves the entry
  Then the entry is saved
```

The prompt text doesn't change the save behaviour. One scenario is sufficient. Use `Scenario Outline` only when different inputs trigger **different code paths** (e.g., boundary values for character limits).

### Mistake 5: Non-Verifiable Then Steps

```gherkin
# ❌ BAD — "correctly" and "properly" are not verifiable
Scenario: Dashboard loads correctly
  When the user opens the dashboard
  Then everything displays properly
  And the page looks correct
```

Every `Then` must describe something a test runner can assert: a specific text value, a specific element visible, a specific state change, a specific count.

---

## From Gherkin to Automation

Gherkin scenarios are meant to be **executed**, not just read. Here's how scenarios connect to test code.

### Step Definitions

Each Gherkin step maps to a step definition function:

```gherkin
Given the user "emma@livingwondrously.com" is authenticated
```

```javascript
const { Given } = require('@cucumber/cucumber');

Given('the user {string} is authenticated', async function (email) {
  this.user = await testHelper.createAuthenticatedUser(email);
  this.authToken = await testHelper.getAuthToken(email);
});
```

```gherkin
When the user taps the "Save" button
```

```javascript
const { When } = require('@cucumber/cucumber');

When('the user taps the {string} button', async function (buttonText) {
  await this.page.click(`button:has-text("${buttonText}")`);
});
```

```gherkin
Then a confirmation message "Entry saved" is displayed
```

```javascript
const { Then } = require('@cucumber/cucumber');

Then('a confirmation message {string} is displayed', async function (message) {
  const toast = await this.page.waitForSelector('[data-testid="toast"]');
  const text = await toast.textContent();
  assert.strictEqual(text, message);
});
```

::: info Step Reuse Is the Goal
Well-written step definitions are **reusable** across scenarios. The step `Given the user {string} is authenticated` can be used in every feature file. The step `Then a confirmation message {string} is displayed` works for any toast notification. Over time, your step library becomes a domain-specific language for your product.
:::

### Running Scenarios in CI

```yaml
# .github/workflows/bdd.yml
bdd-tests:
  runs-on: ubuntu-latest
  steps:
    - name: Run smoke scenarios
      run: npx cucumber-js --tags "@smoke"

    - name: Run acceptance scenarios
      run: npx cucumber-js --tags "@acceptance"

    - name: Run full regression (pre-release only)
      if: github.ref == 'refs/heads/release/*'
      run: npx cucumber-js --tags "@regression"
```

---

## Tagging Your Scenarios

Tags control which scenarios run when. The tagging strategy should be agreed by the team and enforced in PR reviews.

### When to Use Each Tag

| Tag | Use When | Example |
|-----|----------|---------|
| `@smoke` | Core journey that must work after every deploy | "User saves an entry" |
| `@acceptance` | Maps directly to a story's acceptance criterion | "User earns a star for consecutive day" |
| `@regression` | Protects against a known bug or broad feature area | "Timezone boundary calculation" |
| `@P0` | Business-critical — failure blocks release | "Scroll performance with 200+ entries" |
| `@wip` | Step definitions not yet implemented | New scenario being drafted this sprint |

### Tag Rules

1. **Every scenario must have `@area-*` and `@type-*`** — no exceptions
2. **`@smoke` scenarios must run in under 5 minutes total** — keep the suite lean
3. **`@wip` must never reach the main branch** — treat a merged `@wip` as a P2 bug
4. **`@P0` scenarios must never be flaky** — if a P0 flakes, fix it immediately or demote it

::: tip Start Small with Tags
If your team is new to BDD, start with just `@area-*`, `@type-*`, and `@smoke`. Add `@regression`, `@acceptance`, and `@P0` as your suite grows. Over-tagging from the start creates confusion and discourages adoption.
:::

---

## Workshop Wrap-Up

### What You Practised

| Exercise | Skill |
|----------|-------|
| Prompt Carousel | Writing happy-path and edge-case scenarios from Three Amigos discussions |
| Entry Creation | Handling error states, offline behaviour, and boundary values |
| Past Entries | Empty states, pagination, and performance scenarios |
| Star Rewards | Timezone edge cases, preventing double-counting, gamification logic |

### Three Things to Remember

1. **The conversation produces the scenarios, not the QA engineer alone.** If your Three Amigos sessions don't happen, your Gherkin will be incomplete or wrong.

2. **Every `Then` must be verifiable by a machine.** If a human has to judge whether the assertion passed, it's not a valid Gherkin assertion.

3. **Gherkin is living documentation.** If the scenario passes, the documentation is accurate. If someone changes the behaviour, the scenario fails — forcing the documentation to be updated. This makes Gherkin the most trustworthy documentation in your codebase.

::: details Further Reading
- [Gherkin & AssertThat Patterns](/downstream/gherkin) — the full reference guide for Gherkin conventions in the UDOO framework
- [Definition of Done](/downstream/definition-of-done) — how Gherkin scenarios connect to the DoD checklist
- [Story Workflow](/downstream/story-workflow) — where Three Amigos fits in the story lifecycle
:::

---

**Next tutorial:** [From Incident to Improvement →](./incident-to-improvement)
