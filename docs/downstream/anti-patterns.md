# Anti-Patterns

<span class="phase-badge downstream">🟢 Downstream</span>

Anti-patterns are not mistakes made by bad teams. They are **predictable failure modes** that emerge in every engineering organisation under pressure. Recognising them is the first step to preventing them.

Each anti-pattern below follows the same structure: what goes wrong, what it costs, how to detect it, how to fix it, and how to prevent it from recurring. Where possible, examples are drawn from real project incidents.

---

## 1. The Scope Creep Monster

**Description:** The PM adds requirements to a story that is already In Dev. The developer, wanting to be accommodating, absorbs the change without updating the estimate, the test plan, or the acceptance criteria.

**What it looks like:**

> **PM (on Slack, Tuesday afternoon):** *"Hey, while you're building the journal entry screen, can you also add the ability to attach photos? The stakeholder mentioned it in this morning's call."*
>
> **Developer:** *"Sure, I'll add it."*

The developer spends an extra day on photo attachment. QA's test plan doesn't cover it. The design review catches a mismatched UI because the Designer was never consulted. The story's cycle time doubles.

**Real consequence:** On the Living Wondrously Journal project, a "simple" journal entry creation story absorbed photo attachment, mood tagging, and location tagging through informal Slack requests. What was estimated as a 2-day story shipped after 8 days. QA found 4 bugs in the un-specced features.

**How to detect:**
- Stories take significantly longer than estimated
- QA finds features that aren't in the acceptance criteria
- Developers report "it grew" during standup
- Cycle time variance is high (some stories are 2x or 3x the median)

**The fix:** When a PM requests a change to an in-progress story, the developer responds:

> *"I can add photo attachment, but it's not in the current AC. Let's create a new story for it — that way it gets properly sized, designed, and tested. I'll keep the current story focused on text entries as specified."*

**Prevention mechanism:**
- Freeze acceptance criteria when a story enters In Dev
- PM creates a new story for any additional requirement
- Kanban Facilitator monitors cycle time variance and investigates outliers
- Retrospectives explicitly ask: "Did any story's scope change after it started?"

---

## 2. The PR Without Tests

**Description:** A developer opens a PR with implementation code but no tests, accompanied by the phrase: *"I'll add tests later."*

**What it looks like:**

```
PR #247: Implement matching algorithm
Files changed: 12
Tests added: 0
Description: "Tests TBD — wanted to get the logic reviewed first."
```

**Real consequence:** On the Someone for Coffee project, the matching algorithm shipped without unit tests. The algorithm worked for the test dataset (20 profiles) but produced incorrect matches when two users had identical preference vectors. This edge case was caught by a user report 3 weeks post-release — not by a test suite that didn't exist.

**How to detect:**
- PR diff shows implementation files but no test files
- Code coverage drops after merge
- Jira story's "Unit & Component Tests" subtask is still open when the story is marked done
- CI pipeline has no coverage gate (or it's set to 0%)

**The fix:**
- The reviewer does not approve. The review response is:
  > *"Implementation looks good. I need tests before I can approve — specifically for [edge case A] and [negative case B]. Happy to pair on the test structure if that helps."*
- "Tests later" PRs are treated as incomplete. They stay in In Review until tests are added.

**Prevention mechanism:**
- CI pipeline enforces a coverage threshold — PRs that reduce coverage are blocked
- PR template includes a mandatory "Tests added" checkbox
- The subtask checklist requires the "Unit & Component Tests" subtask to be completed before "Code Review" begins
- Team agreement: no test, no review. Period.

::: warning "I'll Add Tests Later" — A Statistical Analysis
Track how often "I'll add tests later" actually results in tests being added. In most teams, the answer is less than 10%. "Later" is a polite way of saying "never." The only reliable time to write tests is now.
:::

---

## 3. The Rubber Stamp Review

**Description:** A reviewer approves a PR within minutes of it being opened, without reading the code, checking the acceptance criteria, or running the changes locally.

**What it looks like:**

```
PR #312: Fix wallet display component
  Opened: 14:02
  Approved: 14:04
  Comments: "LGTM 👍"
```

Two minutes. Twelve files changed. Zero comments. This is not a code review — it is a rubber stamp.

**Real consequence:** The Wallet Balance Bug (`displayAmount = balance.amount > 0 ? balance.amount : 0`) passed through code review with a "looks good" approval. The reviewer did not check the acceptance criteria (which didn't mention negative balances) and did not question the conditional clamping logic. A 30-second review led to a bug that affected every user with a negative balance.

**How to detect:**
- Review approval time is consistently under 5 minutes for non-trivial PRs
- Review comments are generic ("LGTM", "looks good", thumbs up emoji)
- Bugs are found in QA or production that a reviewer should have caught
- The same reviewer always approves the same developer's PRs (a "buddy system" that bypasses real review)

**The fix:**
- Define minimum review expectations: for a PR with N files changed, expect at least N/3 review comments (questions, suggestions, or confirmations)
- Require reviewers to reference specific acceptance criteria in their approval: *"Verified: AC 1–4 are covered. Edge case for negative balance is handled in line 47."*
- Rotate reviewers — don't let the same two developers always review each other

**Prevention mechanism:**
- Track review depth metrics: average review time, comments per PR, bugs caught in review vs. QA
- The Kanban Facilitator raises rubber-stamp patterns in retrospectives
- Establish a team agreement: a review that takes less than 10 minutes for a PR with 5+ files changed requires an explanation

::: tip The Review That Catches Bugs Is the Valuable One
A review with 5 questions and 2 requested changes is not a "tough review" — it is a good review. A review with zero comments is either reviewing trivial code or not reviewing at all. Celebrate reviewers who find issues; they are saving the team production incidents.
:::

---

## 4. The QA Bottleneck

**Description:** All development work happens first, and then all testing happens at the end. QA engineers are idle during development and overwhelmed with a batch of stories when development "finishes."

**What it looks like:**

```
Week 1:
  Developers: 8 stories In Dev
  QA: 0 stories In Test (waiting)

Week 2 (Friday):
  Developers: 0 stories In Dev (all done!)
  QA: 8 stories dumped into In Test simultaneously
  QA: "We need 3 more days."
  PM: "The release is Monday."
```

**Real consequence:** When QA receives 8 stories at once, testing becomes shallow. Edge cases are skipped. Exploratory testing is dropped. The team ships with untested scenarios because "we ran out of time." This is how the Someone for Coffee profile verification feature shipped with a bug where uploading a verification photo on slow connections silently failed — the error state was never tested because QA was rushed.

**How to detect:**
- QA engineers have multi-day idle periods followed by multi-day crunch periods
- The "In Test" column fills up rapidly at the end of an iteration
- Stories batch-enter QA instead of flowing one at a time
- QA finds fewer bugs than expected (not because quality is high — because testing was shallow)

**The fix:**
- Enforce **WIP limits** on the In Dev column. If only 3 stories can be In Dev simultaneously, stories flow to In Test continuously rather than in a batch.
- Developers pull new stories only when their current story exits In Review — this creates natural flow.
- QA begins testing each story as soon as it enters In Test, not when all stories are ready.

**Prevention mechanism:**
- Set a WIP limit: In Dev ≤ number of developers, In Review ≤ 3, In Test ≤ 2
- The Kanban Facilitator monitors the board daily — if In Test is empty and In Dev is full, the flow is broken
- Track the **wait time** in In Test (time between story arriving and QA starting) — it should be < 4 hours
- Pair dev and QA on complex stories so testing preparation happens during development

::: info The Kanban Solution to the QA Bottleneck
The QA bottleneck is a **flow problem**, not a staffing problem. Adding more QA engineers without fixing the flow just creates a larger batch of people waiting and then crunch-testing. The fix is WIP limits: fewer stories in progress simultaneously means each story flows through the system faster. Counterintuitively, doing less work at once results in more work completed per week.
:::

---

## 5. The Silent Blocker

**Description:** A developer encounters a blocker — a failing dependency, an unclear AC, a broken test environment — and does not raise it. They either work around it silently, switch to a different task, or sit idle hoping it resolves.

**What it looks like:**

> **Monday standup:** *"Working on the chat feature. No blockers."*
> **Tuesday standup:** *"Still working on the chat feature. No blockers."*
> **Wednesday standup:** *"Still on the chat feature. Making progress."*
> **Thursday (PM asks directly):** *"Actually, the WebSocket service has been down since Monday. I've been trying to set up a local mock but it's not working."*

Three days lost. The WebSocket issue could have been escalated and resolved in hours.

**Real consequence:** On the Someone for Coffee project, a developer was blocked for 2 days because the staging environment's database had stale test data that caused the matching algorithm to return empty results. The developer assumed the algorithm was buggy and spent 2 days debugging correct code. A 5-minute conversation with the QA engineer (who had refreshed the test data the previous week) would have resolved it immediately.

**How to detect:**
- Stories stay In Dev significantly longer than estimated with no status updates
- Developers report "making progress" without specifying what progress
- Blockers surface only when someone asks directly
- The Kanban board shows the same story in the same column for 3+ days

**The fix:**
- Establish a **blocker protocol**: if you're stuck for more than 30 minutes, post in the team channel. If you're stuck for more than 2 hours, it becomes a standup topic. If it's unresolved after standup, the Tech Lead or Kanban Facilitator escalates.
- Normalise raising blockers. A developer who raises a blocker is not admitting failure — they are protecting the team's throughput.

**Prevention mechanism:**
- Daily standup explicitly asks: "Is anything slowing you down — even a little?"
- The Kanban Facilitator checks story age daily — any story In Dev for more than 2 days without a status update gets a direct check-in
- Team agreement: raising a blocker within 30 minutes is professional. Sitting on it for 2 days is not.
- Create a `#blockers` Slack channel with a low bar for posting

::: warning The Culture Problem Behind Silent Blockers
Silent blockers are rarely a communication problem — they are a **culture problem**. If developers feel that raising blockers makes them look incompetent, they will stay silent. The Tech Lead sets the tone by raising their own blockers publicly: *"I'm stuck on the deployment pipeline — the certificate expired and I need DevOps to renew it. Can someone help?"* When leaders model vulnerability, the team follows.
:::

---

## 6. The Missing Edge Case

**Description:** The happy path works perfectly. The feature is demoed, approved, and released. Then a user encounters an edge case that no one tested, and the feature breaks in a visible, embarrassing way.

**What it looks like:**

```javascript
// The code that shipped
const displayAmount = balance.amount > 0 ? balance.amount : 0

// What users with negative balances saw
// Balance: -$125.50 → displayed as $0.00
// Users thought their debt had been forgiven
// Support received 140 tickets in one week
```

**Real consequence:** The Wallet Balance Bug. The developer implemented a conditional that clamped negative values to zero. The acceptance criteria didn't mention negative balances. The code review didn't question it. QA tested with positive balances only. The feature shipped, and users with negative balances saw $0.00 — leading to confusion, support tickets, and a trust issue.

**How to detect:**
- Acceptance criteria only describe the happy path
- Test suite has no negative/edge cases
- Story kick-off (three-amigos) was skipped
- The question "what happens when X is negative/empty/null/very large?" was never asked

**The fix:**
- Retroactively add the missing test cases
- Conduct a **pattern review**: search the codebase for similar conditional clamping logic
- Add a regression test that specifically prevents this bug from recurring

```javascript
// The fix
const displayAmount = balance.amount // show the actual value

// The regression test
it('does not clamp negative balances to zero', () => {
  const wrapper = mount(WalletCard, { props: { balance: -125.50 } })
  expect(wrapper.text()).toContain('-$125.50')
  expect(wrapper.text()).not.toContain('$0.00')
})
```

**Prevention mechanism:**
- Story kick-offs require QA to ask: "What are the boundary values? What happens at zero, negative, null, maximum?"
- Acceptance criteria templates include a mandatory "Edge cases" section
- Code review checklist includes: "Are boundary conditions handled?"
- Use Gherkin `Scenario Outline` with boundary value tables:

```gherkin
Scenario Outline: Balance display boundary values
  Given the user's wallet balance is <balance>
  When they navigate to the dashboard
  Then the balance card displays "<display>"

  Examples:
    | balance    | display     |
    | 100.00     | $100.00     |
    | 0.01       | $0.01       |
    | 0.00       | $0.00       |
    | -0.01      | -$0.01      |
    | -125.50    | -$125.50    |
    | -99999.99  | -$99,999.99 |
```

---

## 7. The Configuration Cowboy

**Description:** A developer or DevOps engineer deploys a configuration change directly to production without passing through staging, without peer review, and without a rollback plan. Because "it's just a config change."

**What it looks like:**

> *"It's just a policy update in API Management. I'll push it directly to prod — it doesn't need a staging test."*

**Real consequence:** The JWT Outage. An APIM policy requiring the `aud` (audience) claim was deployed directly to production without staging validation. Legacy tokens issued before the policy change did not contain the `aud` claim. Result: **every API request from every user returned 403 Forbidden.** Full production outage, 44 minutes, all hands on deck.

The root cause was not the policy itself — it was deploying it to production without testing against real-world token diversity in staging first.

**How to detect:**
- Config changes bypass the PR process ("it's not code")
- Production deployments happen without a staging step
- There is no rollback plan documented for config changes
- The deployment was done by one person with no peer review
- Post-mortems repeatedly cite "config change" as a contributing factor

**The fix:**
- Treat configuration as code. Config changes go through the same PR → Review → Staging → Production pipeline as application code.
- For the JWT incident specifically:
  1. Deploy the policy to staging first
  2. Run the existing token test suite against staging
  3. Specifically test with tokens that lack the `aud` claim
  4. Only promote to production after staging validation passes
  5. Have a one-click rollback plan (revert to previous policy version)

**Prevention mechanism:**
- **All config changes go through a PR.** No exceptions. Infrastructure-as-Code tools (Terraform, Pulumi, ARM templates) enforce this naturally.
- Config changes require a staging deployment and a validation step before production promotion
- Deployment runbooks for config changes include a "rollback procedure" section
- Post-mortems for config-related incidents result in process changes, not just "be more careful next time"

::: warning "It's Just a Config Change" Is the Most Dangerous Phrase in Engineering
Config changes have the same blast radius as code changes — often larger, because they affect every request, not just one feature. A misconfigured auth policy locks out every user. A wrong database connection string takes down the entire application. Treat config with the same rigour as code, or accept that your next outage will be caused by "just a config change."
:::

---

## 8. The Definition of Almost Done

**Description:** A story is marked as "done" in Jira, but one or more quality gates are incomplete: documentation is missing, design review was skipped, observability events aren't emitted, or PM sign-off never happened.

**What it looks like:**

```
Story: ABC-456 — User can verify profile photo
Status: Done ✅

Subtask checklist:
  ✅ Story Kick-Off
  ✅ Implementation
  ✅ Unit Tests
  ✅ Code Review
  ✅ QA Testing
  ⬜ Design Review — "Designer was on PTO, we'll do it next sprint"
  ⬜ Documentation — "Nothing to document"
  ⬜ Observability — "It's a UI feature, what would we monitor?"
```

Three of seven subtasks incomplete. The story is not done — it is "almost done." Almost done is the same as not done, except the team believes it is done, which is worse.

**Real consequence:** On the Someone for Coffee project, the profile verification feature shipped without observability events. When the verification flow broke silently 2 weeks later (a third-party ID verification API changed its response format), no alert fired. The team discovered the issue from user complaints, not from monitoring. Time to detection: 6 days. If observability events had been emitted, an alert would have fired within minutes.

**How to detect:**
- Stories marked "done" have open subtasks
- The [Definition of Done](/downstream/definition-of-done) checklist is not reviewed before marking a story complete
- Release notes are missing or generic
- Post-release issues trace back to skipped quality gates
- "We'll do it next sprint" appears in story comments (it never happens next sprint)

**The fix:**
- A story cannot be moved to "Released" status in Jira unless all 8 DoD checklist items are verified
- Jira workflow automation: block the transition to "Released" unless all subtasks are in "Done" status
- The QA engineer or Tech Lead performs a final DoD review before the story is released

**Prevention mechanism:**
- Automate the DoD gate in Jira — if any subtask is open, the story cannot transition to Released
- The Kanban Facilitator reviews the board weekly for "almost done" stories and flags them
- Retrospectives track: how many stories were "done" but missing quality gates?
- Team agreement: "done" means all 8 DoD items are complete. There is no "done enough."

::: details The Cost of "Almost Done"
Track the time spent fixing issues that trace back to skipped quality gates. Common examples:
- Missing documentation → developer spends 2 hours answering questions that a doc would have prevented
- Skipped design review → 3 UI bugs filed by users, 1 day of rework
- Missing observability → silent failure for 6 days, emergency fix, post-mortem
- No PM sign-off → feature doesn't match intent, rework required

In every case, the time spent fixing the gap exceeds the time it would have taken to complete the subtask. "Almost done" is more expensive than "done."
:::

---

## Quick Anti-Pattern Detection Checklist

Use this checklist in retrospectives to identify which anti-patterns are active in your team:

- [ ] **Scope Creep Monster:** Did any story's scope change after it entered In Dev?
- [ ] **PR Without Tests:** Were any PRs merged without corresponding test changes?
- [ ] **Rubber Stamp Review:** Were any PRs approved in under 5 minutes with no substantive comments?
- [ ] **QA Bottleneck:** Did stories batch-enter In Test, or did they flow continuously?
- [ ] **Silent Blocker:** Did any blocker go unreported for more than 4 hours?
- [ ] **Missing Edge Case:** Did QA or production reveal an edge case that should have been in the AC?
- [ ] **Configuration Cowboy:** Did any config change bypass staging or peer review?
- [ ] **Almost Done:** Were any stories marked "done" with incomplete subtasks or DoD items?

If more than 2 boxes are checked, the team has systemic issues that individual discipline cannot fix. Address them as process improvements with owners and deadlines — not as personal failings.

---

[← Gherkin & AssertThat Patterns](/downstream/gherkin) · [Cadence & Ceremonies →](/downstream/cadence)
