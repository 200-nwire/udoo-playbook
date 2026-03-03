# Roles & Ownership

<span class="phase-badge downstream">🟢 Downstream</span>

Downstream is where clarity becomes code. But clarity does not execute itself — people do. And when accountability is fuzzy, even well-shaped stories produce messy outcomes: code without tests, PRs without reviews, features without sign-off.

This page defines **who does what** during the Downstream phase, how roles interact, and where the most common ownership failures occur.

## The Downstream Team

Downstream requires a smaller cast than Upstream, but the accountability model is tighter. Every action has an owner. Every transition in the [story workflow](/downstream/story-workflow) has a responsible party.

| Role | Primary Focus |
|------|--------------|
| **Tech Lead / Engineering Manager** | Technical direction, quality standards, blocker resolution |
| **Developers** | Implementation, unit testing, peer review, self-testing |
| **QA Engineers** | Validation, Gherkin execution, exploratory testing, defect documentation |
| **Kanban Facilitator** | Flow efficiency, WIP limits, ceremony facilitation, metrics |
| **UX/UI Designer** | Implementation review against design specs, state validation |
| **Product Manager** | AC clarification, demo attendance, scope protection |

## Role Profiles

### Tech Lead / Engineering Manager

The Tech Lead is the **technical conscience** of Downstream. They do not write every line of code — they ensure that the code the team writes is sound, maintainable, and aligned with architectural decisions made during Upstream.

**Responsibilities:**

- Guide technical implementation decisions within stories
- Resolve technical blockers — escalate within 4 hours if unresolvable
- Review architecture-sensitive PRs personally (not just any peer)
- Ensure code quality standards are followed: linting, test coverage thresholds, naming conventions
- Own the **technical debt register** — log, prioritise, and schedule debt paydown
- Conduct or delegate spike work when a story reveals unexpected complexity
- Participate in story kick-offs for high-risk or cross-cutting stories

**What "done" looks like for a Tech Lead:** The team ships without the Tech Lead being a bottleneck. If every PR requires the Tech Lead's personal approval, the team has a bus-factor problem, not a quality process.

::: tip The Technical Debt Register
Technical debt is not a vague complaint — it is a managed inventory. The Tech Lead maintains a register in Jira (or Confluence) with entries that include: what the debt is, why it was incurred, the cost of carrying it, and a recommended paydown timeline. Stories that create new debt must reference the register entry. Debt without a register entry is invisible debt — and invisible debt compounds.
:::

---

### Developers

Developers are the **primary executors** in Downstream. Their job is not to interpret requirements — it is to implement what was decided in Upstream, test their own work, and make it easy for others to review.

**Responsibilities:**

- Pull stories from the **Ready to Pull** column when capacity allows (Kanban pull, not push)
- Implement features that satisfy all acceptance criteria — not more, not less
- Write unit and component tests that mirror the AC, covering positive, negative, and edge cases
- Self-test before opening a PR — the developer is the first QA
- Open PRs with linked Jira stories, a clear description of changes, and screenshots/recordings for UI changes
- Conduct peer reviews within 4 hours of request
- Participate in story kick-offs (three-amigos) for any story they will implement
- Communicate blockers immediately — not at the next standup

**The self-test principle:** Before a developer opens a PR, they must have manually tested every acceptance criterion in the target environment. "It works on my machine" is not self-testing. Self-testing means: "I have verified each AC in a deployed environment and confirmed it behaves as specified."

::: warning The "It Compiled" Developer
A developer who opens a PR saying "it compiles and the tests pass" has not self-tested. Compiling is a necessary condition, not a sufficient one. The Living Wondrously Journal's entry creation story had 6 acceptance criteria — a proper self-test means the developer opened the app, created a journal entry, verified the entry appeared in the list, confirmed the timestamp format, checked the empty-state transition, and validated the error state. That takes 10 minutes and prevents 2 days of QA ping-pong.
:::

---

### QA Engineers

QA in Downstream is not a gate at the end — it is a **continuous presence**. QA engineers participate from story kick-off through release observation.

**Responsibilities:**

- Attend story kick-offs to surface testability concerns and missing edge cases
- Validate features against all acceptance criteria in the target environment
- Run Gherkin scenarios in AssertThat — all scenarios must be green before sign-off
- Perform **exploratory testing** around the story edges — what happens when the user does something unexpected?
- Document defects as Jira bugs with: severity, impact, steps to reproduce, expected vs. actual behaviour, screenshots/recordings
- Own the test strategy: which stories need regression testing? Which need performance testing?
- Participate in release readiness reviews

**What "done" looks like for QA:** Every acceptance criterion is verified. Gherkin scenarios are green. Exploratory testing has been performed. No P1 or P2 bugs remain open against the story.

**Example — Someone for Coffee matching algorithm:**

When QA tested the matching algorithm story, exploratory testing revealed that users with no profile photo were being matched but the match card displayed a broken image placeholder. This was not in the acceptance criteria — the AC covered matching logic, not display. But a QA engineer performing exploratory testing caught it before release.

::: info QA Is Not "Testing at the End"
The biggest QA anti-pattern is treating In Test as a phase that happens after all development is complete. In a healthy Kanban flow, QA tests stories as they arrive — one at a time, continuously. If QA is idle while developers code, something is wrong with the flow. If QA is overwhelmed with a batch of stories at the end of an iteration, the team has a WIP problem.
:::

---

### Kanban Facilitator

In the UDOO framework, Downstream uses **Kanban flow** rather than Scrum sprints. The Kanban Facilitator (often a Scrum Master adapting to flow-based delivery) ensures the system works smoothly.

**Responsibilities:**

- Ensure **WIP limits** are respected — if the In Review column has a WIP limit of 3, a fourth PR does not enter until one exits
- Facilitate daily standups, retrospectives, and release planning
- Track flow metrics: **cycle time** (how long a story takes from In Dev to Released), **lead time** (from Ready to Pull to Released), **throughput** (stories completed per week)
- Remove organisational bottlenecks — blocked stories should not age
- Make flow problems visible: if stories are piling up in In Review, the team sees it and acts
- Shield the team from external interruptions and scope changes

**Key metrics the Facilitator tracks:**

| Metric | What It Measures | Healthy Range |
|--------|-----------------|---------------|
| **Cycle Time** | Time from In Dev to Released | 2–5 days per story |
| **Lead Time** | Time from Ready to Pull to Released | 3–7 days per story |
| **WIP** | Stories currently in progress | ≤ team size × 1.5 |
| **Throughput** | Stories completed per week | Stable or improving |
| **Blocker Age** | Days a blocker remains unresolved | < 1 day |

::: tip Cycle Time Is the North Star
Of all flow metrics, cycle time is the most actionable. If cycle time is increasing, something in the system is slowing down — usually code review delays, QA bottlenecks, or environment issues. Track it weekly and investigate any increase greater than 20%.
:::

---

### UX/UI Designer (Continued from Upstream)

The Designer's Upstream work (journey maps, wireframes, interaction specs) continues into Downstream as **implementation review**. The Designer is the guardian of user experience during execution.

**Responsibilities:**

- Review implementation against design specs before QA testing begins
- Validate all UI states: **empty state**, **loading state**, **error state**, **success state**, **partial data state**
- Confirm typography, spacing, colour, and interaction patterns match the design system
- Participate in story kick-offs for UI-heavy stories
- Flag deviations that affect usability — not cosmetic preferences, but functional gaps
- Review on actual devices/browsers specified in the story's AC

**The four-state check:**

Every UI component must be reviewed in four states. Designers who only check the success state are reviewing 25% of the user experience.

| State | What to Check | Common Miss |
|-------|--------------|-------------|
| **Empty** | What does the user see before any data loads? | Generic "No data" text instead of helpful guidance |
| **Loading** | Is there a skeleton, spinner, or progress indicator? | Content layout shift when data arrives |
| **Error** | Is the error message actionable? Can the user retry? | Technical error codes shown to users |
| **Success** | Does the completed state match the design? | Correct data but wrong formatting or truncation |

**Example — Living Wondrously Journal:**

The journal entry creation story had a design review subtask. The Designer caught that the empty state for a new user (no journal entries yet) showed a blank page instead of the onboarding illustration and "Start your first entry" prompt specified in the wireframes. This would have shipped without the design review step.

---

### Product Manager (Observer Role)

In Downstream, the PM shifts from **driver** to **observer**. Their primary Downstream responsibilities are narrow and focused:

**Responsibilities:**

- Be available for acceptance criteria clarification — response time < 2 hours during business hours
- Attend demos and provide feedback on working software
- Confirm PM sign-off as part of the [Definition of Done](/downstream/definition-of-done) (DoD item 8)
- Do **NOT** change scope after a story enters In Dev
- Do **NOT** add requirements to stories that are already in progress
- Do **NOT** attend every standup — async updates are sufficient

::: warning The PM Who Changes Scope Mid-Flight
This is the single most destructive Downstream anti-pattern. When a PM adds a requirement to a story that is already In Dev, the developer absorbs the change silently. This breaks the sizing, invalidates the QA plan, and teaches the team that acceptance criteria are suggestions, not contracts.

**The rule:** Once a story enters In Dev, its acceptance criteria are frozen. If the PM discovers a missing requirement, the correct action is to create a **new story** for the next iteration — not to modify the current one. The only exception is a factual error in the AC that would cause the feature to be built incorrectly.
:::

---

## RACI Matrix for Downstream Activities

**R** = Responsible (does the work) · **A** = Accountable (owns the outcome) · **C** = Consulted (provides input) · **I** = Informed (kept in the loop)

| Activity | Tech Lead | Developers | QA Engineers | Kanban Facilitator | UX/UI Designer | Product Manager |
|----------|:-:|:-:|:-:|:-:|:-:|:-:|
| **Story Kick-Off** | C | **R** | **R** | I | C | **R** |
| **Implementation** | C | **A/R** | I | I | I | I |
| **Unit & Component Tests** | C | **A/R** | I | I | I | I |
| **Code Review** | R | **A/R** | I | I | I | I |
| **QA Testing** | I | C | **A/R** | I | I | I |
| **Design Review** | I | I | I | I | **A/R** | I |
| **Stakeholder Demo** | C | R | I | **R** | C | **A** |
| **Release Planning** | **A** | C | C | **R** | I | C |
| **CI/CD & Deployment** | **A/R** | R | C | I | I | I |
| **Retrospective** | R | R | R | **A/R** | R | C |

::: details How to Read This Matrix
- **A (Accountable):** This person owns the outcome. There is exactly one Accountable per activity. If the output is wrong or missing, this person answers for it.
- **R (Responsible):** This person does the work. There can be multiple Rs — for example, both the developer and QA are Responsible for the story kick-off because both must actively participate.
- **C (Consulted):** This person provides input before a decision is made. Two-way communication.
- **I (Informed):** This person is told about the outcome. One-way communication.

Small teams may combine roles (e.g., Tech Lead also reviews all PRs). The principle is that **every activity has a clear owner and no activity is unowned**.
:::

## Cross-Functional Principles

### 1. Dev + QA Pairing on Complex Stories

For stories tagged as high-risk, cross-cutting, or touching critical paths (authentication, payments, data integrity), the developer and QA engineer should **pair during implementation** — not wait for a handoff.

What this looks like in practice:

| Activity | Solo (default) | Paired (complex stories) |
|----------|---------------|-------------------------|
| Story kick-off | Dev + QA + PM attend together | Same |
| Implementation | Dev codes alone | QA writes Gherkin scenarios while dev codes |
| Test environment setup | QA sets up after dev is done | Dev and QA set up test data together |
| Edge case discovery | QA finds gaps during In Test | QA surfaces gaps during In Dev |

**Example — Someone for Coffee chat feature:**

The real-time chat feature touched WebSocket connections, message persistence, and notification delivery. The developer and QA paired from the start: while the dev implemented the WebSocket handler, the QA wrote Gherkin scenarios for message delivery, connection loss, and reconnection. When the PR was opened, the Gherkin suite was already complete. Cycle time for this story: 3 days. Comparable stories without pairing: 5–7 days.

### 2. Three-Amigos Kick-Off for Ambiguous Stories

Any story where the developer reads the acceptance criteria and has a question should trigger a **three-amigos session** (Dev + QA + PM, 15 minutes). The threshold is low: if you're unsure, kick it off.

**Trigger criteria:**

- The story touches a system boundary (API, third-party integration, auth)
- The AC references behaviour that could be interpreted multiple ways
- The story is estimated at more than 3 story points
- The developer has not worked in this area of the codebase before

### 3. Role Continuity from Upstream

The people who shaped a story in Upstream should be reachable during Downstream. This is the **role continuity** principle — it prevents the "I didn't know that was the intent" problem.

| Continuity looks like | What it prevents |
|-----------------------|-----------------|
| PM who wrote the AC responds to dev questions within 2 hours | "I interpreted the AC differently" |
| Designer who created the wireframes performs the design review | "This doesn't match what I intended" |
| Tech Lead who approved feasibility is consulted on unexpected complexity | "Nobody told us about the rate limit" |
| QA Lead who reviewed testability in Upstream tests the story in Downstream | "These ACs aren't actually testable" |

### 4. No Single Points of Failure

No one person should be the sole owner of a critical Downstream activity. Apply the **bus factor test**: if this person is unavailable for a week, does the activity stop?

| Risk | Mitigation |
|------|-----------|
| Only one person can deploy | Document the deployment process; rotate deployment duty |
| Only the Tech Lead can approve PRs | Designate 2–3 senior developers as approved reviewers |
| Only one QA knows the test suite | Pair QA engineers on test strategy; document the test architecture |
| Only the PM can clarify AC | Ensure AC is detailed enough to stand alone; designate a backup |

---

## Anti-Pattern: "The PM Who Changes Scope Mid-Sprint"

**What happens:**

A PM watches a demo of a partially-built feature and says: *"Actually, can we also add the ability to filter journal entries by mood? The stakeholder mentioned it yesterday."*

The developer, wanting to be helpful, adds the filter. This means:
- The story's original estimate is now wrong
- QA's test plan does not cover the new filter
- The design review will flag the filter as unreviewed
- The story's cycle time doubles

**What should happen:**

> *"That's a great idea. Let me create a new story for mood filtering and add it to the backlog. We can prioritise it for the next iteration. The current story ships as specified."*

The PM's job in Downstream is to **protect scope**, not expand it. New ideas go to the backlog. The current iteration delivers what was committed.

::: tip The Scope Freeze Protocol
When a story moves from Ready to Pull to In Dev, its acceptance criteria are frozen. Changes require a formal process:
1. PM creates a new story for the additional requirement
2. If the change is urgent, PM and Tech Lead assess the impact on the current iteration
3. The team decides together: absorb (and adjust commitments) or defer
4. The decision is logged in Jira as a comment on both stories
:::

---

[← Back to Downstream Overview](/downstream/) · [Story Workflow →](/downstream/story-workflow)
