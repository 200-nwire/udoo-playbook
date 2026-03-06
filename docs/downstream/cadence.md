# Cadence & Ceremonies

<span class="phase-badge downstream">🟢 Downstream</span>

Downstream runs on **Kanban flow** — stories are pulled when capacity allows, not pushed in batch at sprint planning. But flow without rhythm produces chaos. Ceremonies provide the rhythm: regular checkpoints where the team aligns, inspects, and adapts.

This page defines every Downstream ceremony: its purpose, format, participants, duration, and anti-patterns. It concludes with a weekly calendar template and time investment analysis.

::: info Kanban, Not Scrum — But Still Disciplined
The UDOO framework uses Kanban flow for Downstream execution. There are no fixed-length sprints, no sprint commitments, and no sprint backlogs. Work is pulled continuously from the "Ready to Pull" column. However, the team still needs planning horizons, demos, retrospectives, and release checkpoints. These ceremonies provide structure without the rigidity of sprint boundaries.
:::

## Ceremony Overview

| Ceremony | Frequency | Duration | Core Participants |
|----------|-----------|----------|-------------------|
| **Daily Standup** | Daily | 15 min | All Downstream team |
| **Story Kick-Off (Three Amigos)** | Per story | 15 min | Dev + QA + PM |
| **Iteration Planning** | Every 2 weeks | 60 min | Tech Lead + Developers + QA + PM |
| **Code Review Etiquette** | Ongoing | — | Developers |
| **Demo / Showcase** | Every 2 weeks | 30 min | All + stakeholders |
| **Retrospective** | Every 2 weeks | 45 min | All Downstream team |
| **Release Readiness Review** | Per release | 15 min | Tech Lead + QA + PM |

---

## 1. Daily Standup

**Purpose:** Synchronise the team on flow, surface blockers, and coordinate handoffs. The standup is a **flow inspection**, not a status report.

**Frequency:** Daily (same time, same place)

**Duration:** 15 minutes maximum. If it regularly exceeds 15 minutes, the format needs adjustment.

**Participants:** All Downstream team members. PM attendance is optional (async update via standup notes is acceptable).

### Format

The standup walks **the board, not the people**. Start from the rightmost column (closest to Released) and move left:

```
STANDUP FORMAT — Walk the Board (Right to Left)
────────────────────────────────────────────────

1. IN TEST (rightmost active column)
   "ABC-123 is in test. QA started yesterday. Two ACs verified,
    three remaining. Expecting sign-off by end of day."

2. IN REVIEW
   "ABC-456 has been in review for 6 hours. Reviewer: anyone
    available to pick this up this morning?"

3. IN DEV
   "ABC-789 is in dev. I hit a blocker — the staging database
    is returning stale data. Posted in #blockers. Need DevOps
    to refresh the seed."

4. READY TO PULL
   "Three stories ready. I'll pull ABC-790 after my current
    story moves to review."

5. BLOCKERS
   "Any blockers not already mentioned?"
```

### Why "Walk the Board" Works

Walking the board (right to left) ensures the team focuses on **finishing work** before starting new work. If two stories are stuck In Review, the team addresses that before pulling a new story into In Dev. This is the fundamental Kanban principle: **stop starting, start finishing.**

### Async-First Option for Distributed Teams

For teams across multiple time zones, a synchronous standup may not be practical. The async alternative:

1. Each team member posts their update in a dedicated Slack channel by a fixed time (e.g., 10:00 AM in their local timezone)
2. Updates follow the same format: what moved, what's blocked, what I'll work on
3. The Kanban Facilitator reviews all updates and flags any coordination needs
4. A 10-minute **sync call** is held only when blockers require real-time discussion

```
Async standup template (Slack):

📌 *[Name] — [Date]*
✅ Moved: ABC-123 → In Review (PR opened)
🔨 Working on: ABC-456 implementation, AC 3-5
🚫 Blocked: None
💬 Need: Review on PR #312 when someone has capacity
```

::: warning Anti-Pattern: "The Status Meeting"
A standup becomes a status meeting when:
- People report to the manager instead of coordinating with each other
- Updates are "I worked on X yesterday, I'll work on X today" with no mention of flow or blockers
- It takes 30+ minutes because each person gives a monologue
- The board is not visible or referenced during the standup

**The fix:** The Kanban Facilitator physically (or virtually) walks the board. The team discusses stories, not people. If someone's update is "same as yesterday, no blockers," that's a valid 5-second contribution.
:::

---

## 2. Story Kick-Off / Three Amigos

**Purpose:** Align the developer, QA engineer, and PM on a story's intent, acceptance criteria, and edge cases **before implementation begins**. This is the most valuable 15 minutes in the Downstream process.

**Frequency:** Once per story, before the developer starts coding

**Duration:** 15 minutes. If it takes longer, the story is not ready.

**Participants:** Developer (who will implement), QA Engineer (who will test), PM (who wrote the AC)

### When to Do It

- **Always** for stories estimated at 3+ story points
- **Always** for stories touching system boundaries (APIs, auth, payments, third-party integrations)
- **Always** for stories where the developer has questions about the AC
- **Optionally** for small, well-understood stories (< 2 points, single-component, familiar area)

### Agenda

| Time | Activity | Led By |
|------|----------|--------|
| 0–3 min | Developer reads the story and AC aloud | Developer |
| 3–8 min | QA asks: "How would I break this?" | QA Engineer |
| 8–12 min | PM clarifies any ambiguity in the AC | PM |
| 12–15 min | Agree: proceed as written, or update AC first | All |

### Key Questions

Each participant brings a different lens:

| Role | Their Question | What It Surfaces |
|------|---------------|-----------------|
| **Developer** | "How would I build this?" | Technical complexity, hidden dependencies |
| **QA** | "How would I break this?" | Missing edge cases, untestable criteria |
| **PM** | "Does this match the user's intent?" | Misinterpretation of requirements |

### Example — Living Wondrously Journal Entry Creation

**Developer reads AC aloud:** *"User can create a journal entry with a title and body. Entry appears in the journal list."*

**QA asks:** *"What if the user submits with no body? What if the title is 500 characters? What if the network drops mid-save?"*

**PM clarifies:** *"Empty body is allowed — users might just want a title. Title max is 200 characters. Network error should show a retry option."*

**Outcome:** Three new ACs added before a line of code was written. Estimated time saved: 1–2 days of rework.

::: tip The Cheapest Bug Fix
A bug caught in a story kick-off costs 15 minutes to fix (update the AC). The same bug caught in QA costs 4 hours (fix code, re-test). Caught in production, it costs days (incident response, hotfix, post-mortem). The three-amigos session is the cheapest quality investment in the entire lifecycle.
:::

---

## 3. Iteration Planning

**Purpose:** Look ahead at the next 2 weeks of work. Select stories from "Ready to Pull," identify dependencies, assess capacity, and set a planning horizon — not a sprint commitment.

**Frequency:** Every 2 weeks

**Duration:** 60 minutes

**Participants:** Tech Lead (facilitates), Developers, QA Engineers, PM, Kanban Facilitator

### Agenda

| Time | Activity | Facilitator |
|------|----------|------------|
| 0–10 min | Review flow metrics: cycle time trend, throughput, WIP | Kanban Facilitator |
| 10–25 min | Review "Ready to Pull" backlog: which stories are next? | PM |
| 25–40 min | Capacity check: who is available? Any PTO, on-call rotations, or dependencies? | Tech Lead |
| 40–55 min | Identify cross-story dependencies and sequence | Tech Lead + Developers |
| 55–60 min | Confirm: stories selected for the next 2-week horizon | All |

### Capacity Planning

Kanban does not use sprint commitments, but the team still needs a realistic view of how much work can flow through the system in 2 weeks.

**Capacity formula:**

```
Available capacity = (team members) × (days in period) × (focus factor)

Example:
  4 developers × 10 days × 0.7 focus factor = 28 developer-days
  2 QA engineers × 10 days × 0.7 focus factor = 14 QA-days

  Focus factor accounts for: ceremonies, code reviews,
  support rotation, unplanned work
```

**Story selection criteria:**

| Priority | Criterion |
|----------|-----------|
| 1 | Stories that unblock other stories (dependencies first) |
| 2 | Stories on the critical path to the next release |
| 3 | High-value stories (PM prioritisation) |
| 4 | Stories that reduce technical debt (Tech Lead prioritisation) |
| 5 | Small stories that fill capacity gaps |

::: details Dependency Mapping
For each planning horizon, draw a simple dependency map:

```
ABC-101 (API endpoint) ──→ ABC-102 (frontend integration)
                        ──→ ABC-103 (mobile integration)

ABC-104 (database migration) ──→ ABC-105 (data backfill)
                              ──→ ABC-106 (API update)

ABC-107 (standalone — no dependencies)
```

Stories with no dependencies should be pulled first. Stories with upstream dependencies should not enter In Dev until their dependency is in In Review or later.
:::

---

## 4. Code Review Etiquette

**Purpose:** Code review is not a ceremony with a fixed time slot — it is an **ongoing practice** with agreed-upon norms. These norms prevent reviews from becoming bottlenecks.

### Response Time Expectations

| PR Size | Expected Response Time | Rationale |
|---------|----------------------|-----------|
| Small (< 100 lines) | < 2 hours | Quick wins should flow fast |
| Medium (100–400 lines) | < 4 hours | Standard review cadence |
| Large (400+ lines) | < 8 hours | May require dedicated review time |
| Critical (auth, payments, data) | < 4 hours | High-risk work should not age in queue |

**The 4-hour rule:** If a PR has been In Review for more than 4 hours with no reviewer activity, the author should ping the assigned reviewer. If no reviewer is assigned, the author posts in the team channel.

### Constructive Feedback Format

Good reviews are **specific, actionable, and kind**:

```
BLOCKING (must fix before merge):
  "Line 47: This condition doesn't handle null balances — the
   API returns null for new accounts. This will throw a TypeError
   in production. Add a null check with fallback to 0."

NON-BLOCKING (suggestion for improvement):
  "Line 82: Consider extracting this into a composable — we
   have similar logic in ProfileCard. Not a blocker for this PR,
   but worth a follow-up refactor. nit: "

QUESTION (seeking understanding):
  "Line 23: Why did you choose a watcher here instead of a
   computed? Curious about the reasoning — there might be a
   side effect I'm not seeing."
```

### When to Approve

| Scenario | Action |
|----------|--------|
| All ACs covered, no bugs, follows conventions | **Approve** |
| Correct but has minor style/naming suggestions | **Approve with comments** |
| Missing an AC, has a bug, or introduces regression risk | **Request changes** |
| Unclear intent — you can't tell if it's correct | **Comment with questions**, don't approve yet |

---

## 5. Demo / Showcase

**Purpose:** Show working software to stakeholders. Collect feedback. Celebrate completed work. The demo is the team's primary accountability mechanism — and it is a chance to build trust with stakeholders.

**Frequency:** Every 2 weeks (aligned with iteration planning)

**Duration:** 30 minutes

**Participants:** Developers (present their stories), QA (confirms test status), PM (facilitates), Tech Lead, stakeholders, UX/UI Designer

### Format

| Time | Activity | Who |
|------|----------|-----|
| 0–3 min | Context: what was the goal for this iteration? | PM |
| 3–20 min | Live demos of completed stories (working software, not slides) | Developers |
| 20–25 min | QA summary: test coverage, bugs found and fixed, outstanding issues | QA |
| 25–30 min | Stakeholder feedback and questions | Stakeholders |

### Demo Rules

1. **Show working software, not slides.** If you can't demo it, it's not done.
2. **Demo in the target environment** (staging or production), not on localhost.
3. **Each developer presents their own story.** This builds individual ownership and communication skills.
4. **Include the failure cases.** Show what happens when the network drops, when input is invalid, when the system is under load. Stakeholders are impressed by resilience, not just happy paths.
5. **Record the demo.** Team members who couldn't attend, and future team members, benefit from the recording.

### Collecting Stakeholder Feedback

Stakeholder feedback during demo is valuable but must be channelled correctly:

| Feedback Type | Action |
|--------------|--------|
| "This is great, exactly what we needed" | Celebrate. Log as positive signal. |
| "Can we also add X?" | PM logs as a new story in the backlog. Does **not** enter current iteration. |
| "This doesn't match what I expected" | PM and stakeholder clarify offline. May result in a bug or new story. |
| "When will Y be ready?" | PM provides the current timeline from the backlog. |

::: warning Anti-Pattern: "The Slide Deck Demo"
A demo that consists of slides with screenshots and bullet points is not a demo — it is a presentation. Stakeholders cannot interact with slides. They cannot see edge cases in slides. They cannot trust slides. Show the real application, running in a real environment, with real data. If the feature isn't demoable, it isn't done.
:::

---

## 6. Retrospective

**Purpose:** Inspect the team's process and identify improvements. The retrospective is the single most important ceremony for continuous improvement — and the one most often cancelled.

**Frequency:** Every 2 weeks (after the demo)

**Duration:** 45 minutes

**Participants:** All Downstream team members. Stakeholders do **not** attend — the retro is a safe space for honest reflection.

### Format Options

Rotate formats every few retros to keep the conversation fresh:

#### Format A: Start / Stop / Continue

```
🟢 START (things we should begin doing)
  • Pair dev+QA on stories touching auth
  • Post PR links in Slack when opened

🔴 STOP (things we should stop doing)
  • Skipping story kick-offs for "small" stories
  • Merging PRs on Friday afternoons

🔵 CONTINUE (things that are working well)
  • Walking the board in standup
  • Design review before QA testing
```

#### Format B: 4Ls (Liked, Learned, Lacked, Longed For)

| Liked | Learned | Lacked | Longed For |
|-------|---------|--------|-----------|
| Quick PR turnaround this iteration | WIP limits actually reduce cycle time | Better test data in staging | Automated deployment to staging on PR merge |
| QA catching the race condition early | Config changes need the same rigour as code | Documentation updates — we skipped 3 | A shared understanding of "done" |

#### Format C: Sailboat

```
⛵ WIND (what propelled us forward)
  • Clear acceptance criteria on most stories
  • PM was responsive to AC questions

⚓ ANCHOR (what held us back)
  • Code review delays — some PRs waited 8+ hours
  • Staging environment was down for a full day

🪨 ROCKS (risks ahead)
  • The authentication refactor touches 12 services
  • QA capacity is thin for the next iteration (PTO)

🏝️ ISLAND (our destination / goal)
  • Ship the matching algorithm with full test coverage
  • Reduce cycle time to under 3 days per story
```

### Retro Ground Rules

1. **Vegas rule:** What is said in the retro stays in the retro.
2. **No blame:** Discuss systems and processes, not individuals.
3. **Action items have owners:** Every improvement gets a person and a deadline. "We should do X" without an owner is a wish, not an action.
4. **Follow up:** The Kanban Facilitator reviews last retro's actions at the start of each retro. Unresolved actions are either completed, re-prioritised, or explicitly dropped.

::: tip The Retro That Prevents the Next Incident
Many of the anti-patterns in this book were first identified in retrospectives. The JWT outage's root cause — deploying config without staging validation — was raised as a concern in a retro 3 iterations before the incident. It was logged as an action item but never assigned an owner. After the incident, it became a non-negotiable process change. The retro had the signal; the team failed to act on it.
:::

---

## 7. Release Readiness Review

**Purpose:** A final checkpoint before deploying to production. The team confirms that all quality gates are met and a rollback plan exists.

**Frequency:** Per release (may be multiple times per iteration in continuous delivery)

**Duration:** 15 minutes

**Participants:** Tech Lead (facilitates), QA Engineer, PM, Kanban Facilitator

### Checklist

| # | Check | Owner | Status |
|---|-------|-------|--------|
| 1 | All stories in this release meet the [Definition of Done](/downstream/definition-of-done) | QA | ☐ |
| 2 | All Gherkin scenarios pass in staging | QA | ☐ |
| 3 | No open P1 or P2 bugs linked to release stories | QA | ☐ |
| 4 | Smoke test suite passes in staging | QA | ☐ |
| 5 | Release notes / changelog prepared | Developer | ☐ |
| 6 | Rollback plan documented and tested | Tech Lead | ☐ |
| 7 | Monitoring dashboards and alerts configured | Tech Lead | ☐ |
| 8 | PM has signed off on all stories in the release | PM | ☐ |
| 9 | No deployment blockers (infra, dependencies, feature flags) | Tech Lead | ☐ |

### Go / No-Go Decision

| Scenario | Decision |
|----------|----------|
| All 9 checks pass | **Go** — deploy to production |
| 1–2 non-critical checks incomplete | **Conditional Go** — deploy with documented exceptions and follow-up tasks |
| Any critical check fails (items 1, 2, 3, 6) | **No-Go** — resolve before deploying |

::: warning The Friday Deploy
Deploying to production on Friday afternoon is an anti-pattern with a 100% correlation to weekend incidents. If the release readiness review happens on Friday, schedule the deployment for Monday morning when the full team is available to monitor.
:::

---

## Weekly Calendar Template

A typical 2-week iteration cadence:

### Week 1

| Day | Ceremony | Time | Duration | Participants |
|-----|----------|------|----------|-------------|
| **Mon** | Daily Standup | 09:30 | 15 min | All |
| | Iteration Planning | 10:00 | 60 min | All + PM |
| **Tue** | Daily Standup | 09:30 | 15 min | All |
| | Story Kick-Offs (batch) | 10:00 | 30 min | Dev + QA + PM (per story) |
| **Wed** | Daily Standup | 09:30 | 15 min | All |
| **Thu** | Daily Standup | 09:30 | 15 min | All |
| **Fri** | Daily Standup | 09:30 | 15 min | All |

### Week 2

| Day | Ceremony | Time | Duration | Participants |
|-----|----------|------|----------|-------------|
| **Mon** | Daily Standup | 09:30 | 15 min | All |
| **Tue** | Daily Standup | 09:30 | 15 min | All |
| **Wed** | Daily Standup | 09:30 | 15 min | All |
| **Thu** | Daily Standup | 09:30 | 15 min | All |
| | Release Readiness Review | 14:00 | 15 min | Tech Lead + QA + PM |
| **Fri** | Daily Standup | 09:30 | 15 min | All |
| | Demo / Showcase | 14:00 | 30 min | All + stakeholders |
| | Retrospective | 14:45 | 45 min | All (no stakeholders) |

::: tip Batch Story Kick-Offs
Rather than scheduling individual 15-minute kick-offs throughout the week, batch 2–3 kick-offs into a single 30–45 minute block on Tuesday of Week 1. This reduces calendar fragmentation while ensuring kick-offs happen before development begins.
:::

---

## Time Investment Per Role

Ceremonies are an investment, not overhead. Here is the expected time each role spends in ceremonies per 2-week iteration:

| Role | Standups | Planning | Kick-Offs | Reviews | Demo | Retro | Release | **Total** |
|------|:--------:|:--------:|:---------:|:-------:|:----:|:-----:|:-------:|:---------:|
| **Developer** | 2.5h | 1h | 0.5h | — | 0.5h | 0.75h | — | **~5h** |
| **QA Engineer** | 2.5h | 1h | 0.5h | — | 0.5h | 0.75h | 0.25h | **~5.5h** |
| **Tech Lead** | 2.5h | 1h | 0.25h | — | 0.5h | 0.75h | 0.25h | **~5.25h** |
| **PM** | 1.25h | 1h | 0.5h | — | 0.5h | — | 0.25h | **~3.5h** |
| **Designer** | — | — | 0.25h | — | 0.5h | 0.75h | — | **~1.5h** |
| **Kanban Facilitator** | 2.5h | 1h | — | — | 0.5h | 0.75h | 0.25h | **~5h** |

**Per developer, per week: approximately 2.5 hours in ceremonies.** This leaves ~35 hours per week for focused implementation, code review, and testing.

::: details Is 5 Hours Too Much?
Five hours per fortnight is 6% of total working time. Compare this to the alternative: no planning (stories arrive unclear, rework doubles), no standups (blockers fester for days), no demos (stakeholders lose trust), no retros (the same problems repeat). Teams that skip ceremonies typically spend 15–25% of their time on rework, miscommunication, and incident response. The 6% investment in ceremonies prevents the 15% tax on chaos.
:::

---

## Tips for Remote Teams

### Make ceremonies visual
- Share the Kanban board on screen during every standup
- Use a collaborative tool (Miro, FigJam) for retrospectives
- Record demos and post them in Slack for async viewing

### Respect time zones
- Schedule ceremonies in the overlap window between time zones
- Rotate meeting times if the overlap is narrow — don't always penalise the same timezone
- Make the async standup the default; sync standups are the exception

### Reduce ceremony fatigue
- Keep cameras optional for standups (it's 15 minutes, not a social event)
- Use threaded Slack conversations for async follow-ups instead of scheduling extra meetings
- Cancel ceremonies when there's genuinely nothing to discuss (the retro has no actions, the demo has no completed stories) — but make this a conscious decision, not a habit

### Build connection intentionally
- Start one standup per week with a 2-minute personal check-in ("how are you, not just what are you working on")
- Celebrate releases and milestones in the team channel
- Pair programming and pair testing build stronger working relationships than any team-building exercise

::: tip The Best Ceremony Is the One That Happens
A perfectly formatted retro that gets cancelled every other iteration is worse than an informal 20-minute conversation that happens reliably. Consistency beats perfection. If the team is struggling with ceremony fatigue, shorten the format rather than skipping it.
:::

---

