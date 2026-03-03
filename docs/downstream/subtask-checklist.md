# Subtask Checklist

<span class="phase-badge downstream">🟢 Downstream</span>

Every story in Downstream follows the same execution pattern. Not because creativity is unwelcome, but because **consistency prevents omission**. The most common reason stories ship with gaps is not incompetence — it is the absence of a checklist.

This page defines the **7 default subtasks** that every story should have. Each subtask is created as a Jira sub-task under the parent story, assigned to the responsible person, and tracked through completion.

::: info Why Subtasks, Not Just "Do the Story"?
A story like "User can create a journal entry" sounds simple. But it contains at least 7 distinct activities performed by different people at different times. Without subtasks, the question "how far along is this story?" has no answer other than "in progress." With subtasks, the team sees exactly which steps are done and which remain.
:::

## The 7 Default Subtasks

```
Story: [ABC-123] User can create a journal entry
├── [1] Story Kick-Off .................. 15 min
├── [2] Implementation .................. 1–3 days
├── [3] Unit & Component Tests .......... 2–4 hours
├── [4] Code Review ..................... 2–4 hours
├── [5] QA Testing ...................... 2–4 hours
├── [6] Design Review ................... 30–60 min
└── [7] Documentation Update ............ 30–60 min
```

---

## Subtask 1: Story Kick-Off

**Purpose:** Ensure the developer, QA engineer, and PM share the same understanding of the story before a single line of code is written. This is the three-amigos session applied at the story level.

**Who is responsible:** Developer (facilitates), QA Engineer (participates), PM (participates)

**Time expectation:** 15 minutes. If it takes longer than 20 minutes, the story is not ready — send it back to Upstream.

**What "done" looks like:**
- All three participants can state the story's intent in one sentence
- Edge cases have been identified and either added to AC or noted as out-of-scope
- QA has confirmed the AC is testable
- Any ambiguity has been resolved or the AC has been updated

**Agenda:**

| Time | Activity |
|------|----------|
| 0–3 min | Developer reads the story and acceptance criteria aloud |
| 3–8 min | QA asks: "How would I break this?" — surfaces missing edge cases |
| 8–12 min | PM clarifies intent for any ambiguous AC |
| 12–15 min | Agreement: proceed as-is, or update AC before starting |

**Example — Living Wondrously Journal entry creation:**

During the kick-off for "User can create a journal entry," the QA engineer asked: *"What happens if the user submits an entry with no text — just a title?"* The AC didn't address this. The PM clarified: empty-body entries are allowed (the user might add a photo only). This became a new AC:

```gherkin
Scenario: User creates entry with title only
  Given the user is on the new entry screen
  When they enter a title "Morning Walk"
  And they leave the body empty
  And they tap "Save"
  Then the entry is saved successfully
  And the entry appears in the journal list with no body preview
```

Without the kick-off, the developer might have added a validation error for empty bodies — building the wrong behaviour.

::: tip The 15-Minute Rule
If a story kick-off exceeds 15 minutes, it is a signal that the story is not well-shaped. Either the AC is ambiguous, the scope is too large, or the story has hidden dependencies. Stop the kick-off, note the issues, and return the story to the PM for refinement. Do not start coding a story you don't fully understand.
:::

---

## Subtask 2: Implementation

**Purpose:** Write the code that satisfies all acceptance criteria. Nothing more, nothing less.

**Who is responsible:** Developer (owner)

**Time expectation:** 1–3 days for a well-sized story. If implementation takes longer than 3 days, the story was likely too large and should have been split in Upstream.

**What "done" looks like:**
- All acceptance criteria are implemented
- Code follows team conventions (linting, naming, file structure)
- The developer has **self-tested** every AC in the target environment
- The PR is ready to open (implementation subtask completes before code review begins)

**The self-test protocol:**

Before marking implementation as done, the developer walks through each acceptance criterion manually:

```
Story: User can create a journal entry

AC 1: User sees "New Entry" button on journal home .... ✓ Verified
AC 2: Tapping opens creation screen with title/body ... ✓ Verified
AC 3: Saving with valid data creates the entry ......... ✓ Verified
AC 4: Entry appears in journal list immediately ........ ✓ Verified
AC 5: Empty body is allowed ............................ ✓ Verified
AC 6: Title > 200 characters shows validation error .... ✓ Verified
AC 7: Network error shows retry option ................. ✓ Verified
```

This is not QA testing. This is the developer confirming they built what was asked. It takes 10 minutes and prevents the most common reason PRs are sent back.

**PR requirements:**

Every PR opened from an implementation subtask must include:

| Element | Purpose |
|---------|---------|
| Jira story link | Traceability — the reviewer can read the AC |
| Description of changes | What changed and why (not a commit log dump) |
| Screenshots or recording | For UI changes — before/after or walkthrough |
| Test instructions | How the reviewer can verify the change locally |
| Breaking changes noted | If this PR changes an API, schema, or contract |

::: warning The "Self-Test Before PR" Principle
The developer is the first line of quality. Opening a PR that hasn't been self-tested wastes the reviewer's time, the QA engineer's time, and the developer's own time when the PR bounces back. A developer who self-tests before PR will have fewer review comments, fewer QA rejections, and shorter cycle times. This is not optional — it is a professional standard.
:::

---

## Subtask 3: Unit & Component Tests

**Purpose:** Write automated tests that verify each acceptance criterion programmatically. These tests become the regression safety net for future changes.

**Who is responsible:** Developer (owner)

**Time expectation:** 2–4 hours, depending on story complexity. Tests should be written alongside implementation, not as an afterthought.

**What "done" looks like:**
- Every AC has at least one corresponding test
- Positive cases (happy path) are tested
- Negative cases (invalid input, errors) are tested
- Edge cases (boundary values, empty states) are tested
- All tests pass in CI
- Code coverage has not regressed

**Test structure for the journal entry story:**

```javascript
describe('JournalEntryCreation', () => {
  // AC 1 + AC 2: UI presence
  it('renders the new entry button on journal home', () => {
    const wrapper = mount(JournalHome, { props: { entries: [] } })
    expect(wrapper.find('[data-testid="new-entry-btn"]').exists()).toBe(true)
  })

  // AC 3: Successful creation
  it('creates entry with title and body', async () => {
    const wrapper = mount(NewEntryForm)
    await wrapper.find('#title').setValue('Morning Reflections')
    await wrapper.find('#body').setValue('Today I noticed...')
    await wrapper.find('form').trigger('submit')
    expect(mockApi.createEntry).toHaveBeenCalledWith({
      title: 'Morning Reflections',
      body: 'Today I noticed...',
    })
  })

  // AC 5: Edge case — empty body allowed
  it('allows entry with empty body', async () => {
    const wrapper = mount(NewEntryForm)
    await wrapper.find('#title').setValue('Quick Thought')
    await wrapper.find('form').trigger('submit')
    expect(mockApi.createEntry).toHaveBeenCalledWith({
      title: 'Quick Thought',
      body: '',
    })
  })

  // AC 6: Negative case — title too long
  it('shows validation error for title exceeding 200 characters', async () => {
    const wrapper = mount(NewEntryForm)
    await wrapper.find('#title').setValue('A'.repeat(201))
    await wrapper.find('form').trigger('submit')
    expect(wrapper.text()).toContain('Title must be 200 characters or fewer')
    expect(mockApi.createEntry).not.toHaveBeenCalled()
  })

  // AC 7: Error state — network failure
  it('shows retry option on network error', async () => {
    mockApi.createEntry.mockRejectedValue(new Error('Network error'))
    const wrapper = mount(NewEntryForm)
    await wrapper.find('#title').setValue('Test')
    await wrapper.find('form').trigger('submit')
    await flushPromises()
    expect(wrapper.find('[data-testid="retry-btn"]').exists()).toBe(true)
    expect(wrapper.text()).toContain('Unable to save')
  })
})
```

**Example — Wallet Balance Bug:**

The negative balance clamping bug (`displayAmount = balance.amount > 0 ? balance.amount : 0`) would have been caught by a test like this:

```javascript
describe('WalletCard balance display', () => {
  it('displays negative balance correctly', () => {
    const wrapper = mount(WalletCard, { props: { balance: -125.50 } })
    expect(wrapper.text()).toContain('-$125.50')
  })

  it('does not clamp negative values to zero', () => {
    const wrapper = mount(WalletCard, { props: { balance: -0.01 } })
    expect(wrapper.text()).not.toContain('$0.00')
    expect(wrapper.text()).toContain('-$0.01')
  })
})
```

The test didn't exist because no one wrote an AC for the negative balance case, and the developer didn't write a test for a scenario the AC didn't mention. This is why the **Story Kick-Off** subtask exists — it catches these gaps before implementation begins.

---

## Subtask 4: Code Review

**Purpose:** A second pair of eyes validates that the implementation is correct, complete, maintainable, and safe.

**Who is responsible:** Reviewer (a peer developer — not the author), assigned by the author or rotated by convention

**Time expectation:** Response within 4 hours of request. Review itself takes 30–60 minutes depending on PR size.

**What "done" looks like:**
- At least 1 peer approval (2 for critical paths: auth, payments, data migration)
- No unresolved blocking comments
- All CI checks pass
- Reviewer has confirmed: AC coverage, edge cases, conventions, regression risk

**The reviewer's checklist:**

| Check | Question the Reviewer Asks |
|-------|---------------------------|
| **AC coverage** | Does this code implement every acceptance criterion? |
| **Edge cases** | What happens with empty input, null values, extreme lengths, concurrent access? |
| **Conventions** | Does this follow our naming, file structure, and pattern conventions? |
| **Regression risk** | Could this change break something adjacent? |
| **Test quality** | Do the tests actually verify behaviour, or just exercise code? |
| **Security** | Does this introduce any auth bypass, data exposure, or injection risk? |
| **Performance** | Are there N+1 queries, unbounded loops, or missing pagination? |

**Constructive feedback format:**

Reviews should be specific, actionable, and respectful:

```
❌ "This is wrong."
✅ "This condition doesn't handle the case where balance is null —
    the API can return null for new accounts with no transactions.
    Consider adding a null check with a fallback to 0."

❌ "Why did you do it this way?"
✅ "I see you used a computed property here. A watcher might be
    more appropriate since we need the side effect of updating
    the analytics tracker. What do you think?"
```

::: details When to Request Changes vs. Approve with Comments
- **Request Changes:** The PR has a bug, a missing AC, a security issue, or a convention violation that must be fixed before merge. The story cannot proceed.
- **Approve with Comments:** The PR is correct and complete, but the reviewer has suggestions for improvement (naming, minor refactoring, documentation). These can be addressed in a follow-up. The story can proceed to QA.

The default should be to **approve with comments** unless there is a blocking issue. Perfection is not the standard; correctness and completeness are.
:::

---

## Subtask 5: QA Testing

**Purpose:** Validate that the feature works as specified in a realistic environment. QA testing is independent verification — the QA engineer tests without assuming the developer's self-test was sufficient.

**Who is responsible:** QA Engineer (owner)

**Time expectation:** 2–4 hours per story, including exploratory testing.

**What "done" looks like:**
- All acceptance criteria verified in the target environment (staging or feature environment)
- All linked Gherkin scenarios pass in AssertThat
- Exploratory testing performed around the story edges
- No P1 or P2 bugs remain open
- Any bugs found are documented in Jira with severity, steps to reproduce, and expected vs. actual behaviour

**QA testing flow:**

```
1. Read the story and AC (fresh — don't rely on kick-off memory)
2. Set up test data in the target environment
3. Test each AC systematically — document pass/fail
4. Run Gherkin scenarios via AssertThat
5. Perform exploratory testing:
   - What happens with unusual input?
   - What happens on slow connections?
   - What happens if I navigate away mid-action?
   - What happens on different screen sizes?
6. Document any defects found
7. Sign off or reject the story
```

**Example — Living Wondrously Journal entry creation:**

QA testing for the journal entry story included:

| AC | Test | Result |
|----|------|--------|
| New Entry button visible | Open journal home, verify button | ✅ Pass |
| Creation screen opens | Tap button, verify form loads | ✅ Pass |
| Valid entry saves | Enter title + body, save | ✅ Pass |
| Entry appears in list | Check journal home after save | ✅ Pass |
| Empty body allowed | Save with title only | ✅ Pass |
| Title > 200 chars rejected | Enter 201 characters | ✅ Pass |
| Network error shows retry | Disconnect network, attempt save | ✅ Pass |

Exploratory testing found: when the user rapidly tapped "Save" twice, two duplicate entries were created. This was logged as a P3 bug (non-blocking) and added to the next iteration's backlog.

---

## Subtask 6: Design Review

**Purpose:** Confirm that the implementation matches the design specifications. The Designer validates visual accuracy, interaction fidelity, and state coverage.

**Who is responsible:** UX/UI Designer (owner)

**Time expectation:** 30–60 minutes per story. UI-heavy stories may take longer.

**What "done" looks like:**
- Implementation matches the design mockups/wireframes
- All states validated: empty, loading, error, success
- Typography, spacing, and colours match the design system
- Interactions (transitions, animations, hover states) behave as specified
- Responsive behaviour verified (if applicable)
- Accessibility basics confirmed: focus order, contrast, screen-reader labels

**The state matrix:**

The Designer must check the component in every relevant state — not just the "everything works" screenshot:

| State | What the Designer Checks | Journal Entry Example |
|-------|-------------------------|----------------------|
| **Empty** | Default view before data exists | New user with zero entries — onboarding prompt visible? |
| **Loading** | Data is being fetched | Skeleton screen while entries load |
| **Success** | Normal operation with data | Entry list with 3+ entries, proper formatting |
| **Error** | Something went wrong | "Unable to load entries" with retry button |
| **Partial** | Some data available, some missing | Entry with title but image still uploading |

::: tip The "Phone in the Other Hand" Test
For mobile stories, the Designer should test with the device held in their non-dominant hand, using only their thumb. If a critical action (like "Save") requires reaching the top of the screen, the interaction design has a usability gap. This is cheap to catch in design review and expensive to catch after release.
:::

---

## Subtask 7: Documentation Update

**Purpose:** Ensure that the knowledge created during implementation is captured for future team members, users, and support staff.

**Who is responsible:** Developer (owner), with input from QA and PM as needed

**Time expectation:** 30–60 minutes. Often the fastest subtask to complete but the most frequently skipped.

**What "done" looks like:**
- Release notes or changelog entry created for user-facing changes
- Technical documentation updated if architecture, API, or data model changed
- API documentation updated if endpoints were added, modified, or deprecated
- User guide updated if the feature changes the user's workflow
- Runbook updated if the feature introduces new operational concerns

**Documentation checklist by change type:**

| Change Type | Release Notes | Tech Docs | API Docs | User Guide | Runbook |
|-------------|:-:|:-:|:-:|:-:|:-:|
| New feature | ✅ | ✅ | If API | ✅ | If ops impact |
| Bug fix | ✅ | If arch change | If API | If UX change | If ops change |
| Config change | ✅ | ✅ | — | — | ✅ |
| Performance fix | ✅ | ✅ | — | — | ✅ |

**Example — Living Wondrously Journal entry creation:**

- **Release notes:** "Users can now create journal entries with a title and optional body text. Entries appear immediately in the journal list."
- **Tech docs:** Updated the data model documentation to include the `journal_entries` table schema and the `POST /api/entries` endpoint contract.
- **User guide:** No update needed — the feature is self-explanatory via the UI.
- **Runbook:** No update needed — no new infrastructure or operational concerns.

---

## When Subtasks Can Be Skipped

Not every story needs all 7 subtasks. Small, low-risk changes can use a reduced checklist:

| Story Type | Skip | Keep |
|-----------|------|------|
| **Small bug fix** (< 1 hour) | Story Kick-Off, Design Review, Documentation Update | Implementation, Tests, Code Review, QA Testing |
| **Config change** (env variable, feature flag) | Story Kick-Off, Design Review, Unit Tests | Implementation, Code Review, QA Testing, Documentation |
| **Copy/text change** | Story Kick-Off, Unit Tests | Implementation, Code Review, Design Review, QA Testing, Documentation |
| **Infrastructure change** (CI/CD, pipeline) | Design Review | Story Kick-Off, Implementation, Tests, Code Review, QA Testing, Documentation |

::: warning Don't Skip by Default
The default is **all 7 subtasks**. Skipping requires an explicit decision logged in the story's comments: "Skipping Design Review — this is a backend-only API change with no UI impact." If someone asks "why was the design review skipped?", the answer should be in the Jira story.
:::

## How Subtasks Map to Jira

Each subtask is created as a **Jira Sub-task** under the parent story. This gives the team visibility into progress at a glance.

```
Story: ABC-123 — User can create a journal entry
  ├── Sub-task: ABC-124 — Story Kick-Off .......... Done
  ├── Sub-task: ABC-125 — Implementation .......... In Progress
  ├── Sub-task: ABC-126 — Unit & Component Tests .. To Do
  ├── Sub-task: ABC-127 — Code Review ............. To Do
  ├── Sub-task: ABC-128 — QA Testing .............. To Do
  ├── Sub-task: ABC-129 — Design Review ........... To Do
  └── Sub-task: ABC-130 — Documentation Update .... To Do
```

**Jira automation tip:** Create a sub-task template in Jira that automatically generates all 7 sub-tasks when a story moves to "Ready to Pull." This prevents the team from needing to manually create them each time.

**Assignees:**

| Subtask | Default Assignee |
|---------|-----------------|
| Story Kick-Off | Developer (facilitator) |
| Implementation | Developer |
| Unit & Component Tests | Developer |
| Code Review | Assigned reviewer (peer) |
| QA Testing | QA Engineer |
| Design Review | UX/UI Designer |
| Documentation Update | Developer |

---

## Anti-Pattern: "The PR Without a Story Link"

**What happens:** A developer opens a PR with the title "Fix wallet display" and no Jira story link. The reviewer has no acceptance criteria to check against, no context for why the change was made, and no way to confirm completeness.

**Why it matters:** A PR without a story link is untraceable work. It cannot be:
- Verified against acceptance criteria
- Included in release notes accurately
- Tracked in velocity or throughput metrics
- Audited for compliance or change management

**The fix:** Make story links a PR template requirement. If your team uses GitHub or GitLab, add a PR template with a mandatory Jira link field:

```markdown
## Jira Story
[ABC-123](https://yourorg.atlassian.net/browse/ABC-123)

## Changes
<!-- What changed and why -->

## Self-Test Confirmation
- [ ] I have self-tested all acceptance criteria
- [ ] Screenshots/recording attached (for UI changes)

## Checklist
- [ ] Unit/component tests added
- [ ] No lint errors introduced
- [ ] Documentation updated (if applicable)
```

If a PR is opened without a story link, the reviewer's first action is to request one — not to start reviewing code that has no specification.

---

[← Back to Downstream Overview](/downstream/) · [Definition of Done →](/downstream/definition-of-done)
