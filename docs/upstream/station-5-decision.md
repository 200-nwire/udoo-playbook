# Station 5 — Decision & Scope

<span class="phase-badge upstream">🔵 Upstream</span>

::: info Where this fits in the spiral
Station 5 spans two loops. At the **Initiative Loop** level, it corresponds to [Activities I-9 and I-10](/upstream/activities-sprint) — defining the Feature List and slicing S1/S2/S3. At the **Feature Loop** level, it corresponds to [Activity F-7 (Feature Slice)](/upstream/feature-activities) — freezing which Epics ship first. The convergence discipline is the same at both levels: stop exploring, make a defensible decision, document the rationale.
:::

## Purpose

Station 5 is where exploration ends and commitment begins. The team **freezes the chosen approach, defines the MVP, plans the rollout, and sets the conditions under which the initiative can be declared a success or a failure**.

Everything before this station was divergent: broadening understanding, exploring options, surfacing risks. Station 5 is convergent: narrowing to a single path and locking it.

This is also the last station before the commitment point — the handoff between Upstream and Downstream. After Station 5, stories enter the sprint backlog. Changes to scope require a formal decision log entry. The team is no longer discovering; they are delivering.

::: info The Cost of Late Decisions
Indecision is not free. Every day the team spends deliberating after options have been explored costs capacity, delays feedback, and keeps stakeholders in uncertainty. Station 5 exists to force a timely decision — not a perfect one, but a *defensible* one.
:::

## Decision Criteria

How does the team pick the winning option from Station 4? Not by gut feeling, and not by the loudest voice. Use structured criteria:

| Criterion | Question | How to Evaluate |
|-----------|----------|----------------|
| **Alignment with initiative goals** | Does this option solve the problem stated in Station 1? | Map the option back to the success signals. Does it move the needle? |
| **Technical feasibility** | Can we build this with the team, tools, and timeline we have? | Refer to the Tech Lead's assessment and any spike results from Station 4 |
| **Risk profile** | What can go wrong, and can we recover? | Compare risk levels from the tradeoff analysis. Prefer options with known risks over options with unknown risks. |
| **Effort vs. value** | Is the effort proportionate to the expected impact? | Use rough sizing from Station 4. An XL effort for a minor pain point is a poor trade. |
| **Reversibility** | If this is the wrong choice, how hard is it to change course? | Prefer reversible decisions. One-way doors deserve more scrutiny than two-way doors. |
| **Dependencies** | Does this option create or inherit blockers? | Map dependencies. An option with zero blockers is more attractive than one that requires three other teams to deliver first. |

::: tip Two-Way vs. One-Way Doors
Jeff Bezos's framing is useful here: **two-way door** decisions are reversible — try it, and if it doesn't work, walk back through the door. **One-way door** decisions are hard or impossible to reverse (database schema changes, public API contracts, data deletion). Apply Station 5 rigour proportionally: one-way doors deserve 90% confidence. Two-way doors can proceed at 70%.
:::

### Decision Matrix Example

For the Pninei Halacha search decision:

| Criterion | Weight | Option A: Server | Option B: Naive Client | Option C: Local Index |
|-----------|:------:|:----------------:|:---------------------:|:--------------------:|
| Solves offline search (hard requirement) | 5 | 0 | 5 | 5 |
| Performance on mid-range devices | 4 | 3 | 1 | 4 |
| Implementation effort | 3 | 5 | 5 | 3 |
| Maintenance burden | 2 | 4 | 5 | 3 |
| Hebrew text quality | 4 | 3 | 2 | 4 |
| **Weighted total** | | **42** | **56** | **73** |

Option C wins — not because it's cheapest (it isn't), but because it satisfies the hard requirement and scores highest on the dimensions that matter most.

## MVP Scoping: The Art of the Minimum

MVP does not mean "minimum viable product" in the sense of the smallest, crappiest thing you can ship. It means **the smallest thing that proves whether the approach delivers value**.

The question is not "what can we cut?" but rather: *"What is the shortest end-to-end path a real user can walk that tests our core hypothesis?"*

### The Living Wondrously First Slice

The Momentum team faced a rich feature vision for the Living Wondrously journal: prompts, writing, saving, reviewing history, notifications, starred entries, AI-generated reflections, sharing, streaks.

Shipping all of this would take 4+ sprints and delay learning by months. Instead, the team asked: *"What is the smallest thing that tests whether guided prompts increase journal engagement?"*

**S1 (MVP): Prompts + Write + Save**
- User opens journal → sees a daily prompt
- User writes a response in a text area
- Response is saved and retrievable

**Deferred to S2:**
- Review history (timeline view)
- Favourite/star entries

**Deferred to S3:**
- Notifications ("time to journal")
- AI-generated reflections
- Sharing entries

**Why this slice works:**
- It tests the **core hypothesis** (prompts increase write rates) without building the full feature
- It delivers **real user value** — the user can journal with guidance and retrieve their entries
- It is **end-to-end** — not a backend-only or frontend-only slice
- It can **ship in one sprint** — fast feedback, low waste if the hypothesis is wrong

::: warning The MVP Trap
"MVP" is one of the most misused terms in product development. Common misinterpretations:
- **"Minimum" means "bad quality"** — No. The MVP should be well-built; it just does less.
- **"Viable" means "has every feature"** — No. "Viable" means a real user can use it and get value.
- **"Product" means "shippable to everyone"** — Not necessarily. An MVP can be shipped to a subset of users (see Rollout Plan below).
:::

### Slice Planning Format

```
SLICE PLAN
──────────
S1 (MVP) — "Prompted Journaling"
  Journey steps: J1 (open journal) → J2 (see prompt) → J3 (write) → J4 (save)
  Scope: Daily prompt display, text input, save to backend, retrieve on return
  Out of scope: History view, notifications, AI, sharing
  Hypothesis tested: Prompts increase write rate from 22% to >50%
  Ship target: Sprint 14

S2 — "Journal History"
  Journey steps: J5 (review past entries) → J6 (favourite an entry)
  Scope: Timeline view, star/favourite, search within entries
  Depends on: S1 shipped and write rate data collected (2 weeks)
  Ship target: Sprint 16

S3 — "Engagement Loop"
  Journey steps: J7 (receive notification) → J1 (return to journal)
  Scope: Push notifications, streaks, AI reflections
  Depends on: S2 shipped and retention data collected (4 weeks)
  Ship target: Sprint 19
```

## Real Example: Pninei Halacha Foundation Decision

The Pninei Halacha team faced a similar scoping challenge. The full vision included: reading, search, bookmarks, annotations, offline access, audio playback, community discussion, and rabbi Q&A.

The Station 5 decision: **ship reading value first**.

**S1 (MVP): Read + Navigate**
- User opens a text → reads it with proper Hebrew rendering (RTL, nikud, paragraph spacing)
- User navigates between chapters and sections via a table of contents
- Content syncs for offline reading

**Stubs for future features:**
- Search: UI element present but labelled "Coming Soon" (not built until S2)
- Bookmarks: Data model includes bookmark schema; UI deferred
- Audio: Not stubbed — separate initiative

**Why this decision was correct:**
The team's assumption A1 was "users will read long-form halachic texts on mobile." Before building search, bookmarks, or audio, they needed to validate that people actually *read* on the device. Shipping reading first (S1) tested the foundational assumption. If nobody reads, search and bookmarks are irrelevant.

## Rollout Plan

Not every release should go to 100% of users on day one. Station 5 defines **how** the feature reaches users.

### Rollout Strategies

| Strategy | How It Works | When to Use |
|----------|-------------|-------------|
| **Feature flag** | Toggle the feature on/off per user segment or percentage | Default for most features. Low risk. Easy to disable. |
| **Canary release** | Deploy to a small subset (1–5%) and monitor before expanding | When the change touches critical paths (payments, auth, data) |
| **Staged rollout** | Enable for 10% → 25% → 50% → 100% over days/weeks | When you need progressive confidence and metrics at each stage |
| **Beta / opt-in** | Users choose to enable the feature | When the feature is experimental and feedback quality matters more than adoption speed |
| **Big bang** | Ship to everyone at once | Only when the change is low-risk and does not affect critical paths. Rare. |

**Rollout plan template:**

```
ROLLOUT PLAN
────────────
Feature:     Prompted Journaling (S1)
Strategy:    Staged rollout with feature flag
Timeline:
  Day 0:     Enable for internal team (dogfooding)
  Day 3:     Enable for 10% of journal-active users
  Day 7:     Review metrics → if write rate > 40%, expand to 50%
  Day 14:    Review metrics → if no regressions, expand to 100%
Kill switch: Feature flag "JOURNAL_PROMPTS_ENABLED" in LaunchDarkly
Monitoring:  Dashboard: [link]. Alerts: write-rate drop > 20%,
             error rate > 1%, latency p95 > 2s.
```

## Rollback Plan

Every rollout plan must have a rollback plan. The rollback plan answers: **if this goes wrong, how do we undo it?**

| Component | Question | Example Answer |
|-----------|----------|---------------|
| **Trigger** | What signals that we should roll back? | Error rate > 2%; write rate *decreases* after enabling prompts; critical bug in production |
| **Mechanism** | How do we disable it? | Turn off feature flag. No code deployment needed. |
| **Data** | What happens to data created during the rollout? | Journal entries are preserved. Prompts stop appearing but saved entries remain accessible. |
| **Communication** | Who is informed? | Product Manager notifies stakeholders via Slack. Support team is briefed on possible user questions. |
| **Timeline** | How fast can we roll back? | < 5 minutes (feature flag toggle). No downtime. |

::: danger No Rollback = No Ship
If the team cannot articulate a rollback plan, the feature is not ready to ship. This is not negotiable. Every deployment must be reversible — or the risks must be explicitly accepted and documented by the Engineering Lead and Product Manager.
:::

## Success Metrics Finalisation

Station 1 defined success signals. Station 5 **finalises them** with precision: exactly what is measured, how, where, and when.

### Leading vs. Lagging Indicators

| Type | Definition | Example | When to Check |
|------|-----------|---------|--------------|
| **Leading** | Early signal that predicts future success | Journal write rate increases from 22% to 50% | Day 7 post-launch |
| **Lagging** | Outcome that confirms long-term value | 30-day retention for journalers improves from 35% to 50% | Day 60 post-launch |

Leading indicators let you know quickly whether you're on track. Lagging indicators confirm whether the feature actually delivered business value. You need both.

### Measurement Plan Template

```
MEASUREMENT PLAN
────────────────
Metric 1: Journal write rate
  Definition:   (sessions with ≥1 journal write) / (sessions where journal was opened)
  Current:      22%
  Target:       50% within 14 days of 100% rollout
  Data source:  Mixpanel event "journal_entry_saved"
  Dashboard:    [link]
  Owner:        Data Lead
  Check dates:  Day 7, Day 14, Day 30

Metric 2: Journal retention (30-day)
  Definition:   % of users who journal in week 1 and return to journal in week 4
  Current:      35%
  Target:       50% within 60 days
  Data source:  Mixpanel cohort analysis
  Dashboard:    [link]
  Owner:        Data Lead
  Check dates:  Day 30, Day 60

Metric 3: Support tickets re: journal
  Definition:   Zendesk tickets tagged "journal"
  Current:      12/month
  Target:       No increase (new feature should not generate support load)
  Data source:  Zendesk
  Owner:        Support Lead
  Check dates:  Day 14, Day 30
```

## The Decision Log

The Decision Log is the permanent record of what was decided and why. It is not the ADR (which covers architectural decisions) — it is a broader log that captures **scope, approach, and trade-off decisions**.

**Format:**

```
DECISION LOG
────────────
Date:       2024-12-03
Decision:   Ship S1 (Prompts + Write + Save) as MVP. Defer history,
            notifications, and AI to S2/S3.
Rationale:  Core hypothesis is that prompts increase engagement.
            Fastest way to test is to ship prompts alone.
            If write rate doesn't improve, S2/S3 are unnecessary.
Decided by: PM (Accountable), Tech Lead, UX Lead
Dissenters: None
Related:    ADR-04 (prompt content storage), Station 4 tradeoff analysis

Date:       2024-12-05
Decision:   Use staged rollout (10% → 50% → 100%) instead of big bang.
Rationale:  Journal feature touches user data; want to monitor data
            integrity before full rollout.
Decided by: PM, Engineering Lead
Dissenters: UX Lead preferred big bang for consistent user experience.
            Concern noted; will review at 50% stage.
```

::: tip Log Dissenters
A decision log that shows unanimous agreement on every decision is either dishonest or a sign that the team doesn't feel safe disagreeing. Logging dissenting views (with respect) builds trust and creates a record that can be revisited if the decision proves wrong.
:::

## The Approval Gate

Station 5 concludes with a formal approval. The Initiative Brief is presented to the approval group, and each member confirms that the work is ready to enter Downstream.

### Who Signs Off

| Role | What They Confirm |
|------|------------------|
| **Product Owner / PM** | Problem is well-framed, MVP scope is viable, success metrics are defined |
| **Engineering Lead / Tech Lead** | Chosen approach is technically feasible, risks are mitigated, stories are sizeable |
| **UX Lead** | User flows are designed, visual references exist, accessibility is addressed |
| **QA Lead** | Acceptance criteria are testable, test strategy is defined, Gherkin seeds are drafted |
| **Security Lead** | Data flows are secure, auth/access control is addressed, regulatory requirements are met |
| **Data Lead** | Analytics events are specified, dashboards are planned, measurement plan is complete |
| **Stakeholder(s)** | Business alignment confirmed, expectations are realistic, timeline is accepted |

The approval is not a rubber stamp. If any approver has unresolved concerns, the initiative does not cross the commitment point. Concerns are logged, addressed, and the approval is re-requested.

::: warning Approval Is Not a Ceremony — It's a Gate
If the approval meeting takes 5 minutes and everyone says "looks good," one of two things is true: either the Upstream work was exceptional and all concerns were addressed asynchronously beforehand (great), or nobody actually reviewed the brief (very bad). As a PM, you should know which one it is.
:::

## Station 5 Output Checklist

By the end of Station 5, you should have:

- [ ] **Frozen Initiative Brief** — all five station sections complete, status set to "Ready"
- [ ] **Chosen approach documented** — with rationale and link to ADR(s)
- [ ] **MVP scope defined** — S1 with explicit in-scope and out-of-scope
- [ ] **Slice plan** — S1, S2, S3… with sequencing rationale and dependencies
- [ ] **Rollout plan** — strategy, timeline, monitoring, kill switch
- [ ] **Rollback plan** — trigger, mechanism, data impact, communication
- [ ] **Success metrics** — leading and lagging indicators with targets, data sources, check dates
- [ ] **Decision log** — all significant decisions recorded with rationale and dissenters
- [ ] **Approval gate passed** — all required sign-offs obtained

Once all items are checked, the Initiative Brief is frozen. Stories that meet the [Definition of Ready](/upstream/definition-of-ready) cross the commitment point into Downstream.

## Anti-Pattern: The Infinite MVP

The Infinite MVP happens when the team cannot say no. Every stakeholder review adds "just one more thing." Every readiness check surfaces "just one more edge case." The MVP grows until it is no longer minimum, no longer fast to ship, and no longer a test of a hypothesis — it is a full product masquerading as a first slice.

**How to spot it:**
- The MVP scope has been revised upward three or more times
- S1 now contains items that were originally in S2 or S3
- The ship target has slipped from "this sprint" to "next quarter"
- The team jokes (or complains) that "MVP stands for Maximum Viable Product"

**Why it happens:**
- **Fear of negative feedback:** "If we ship without X, users will complain." (They might. That's data.)
- **Stakeholder pressure:** "The board expects to see Y." (Then manage the board's expectations, don't expand the MVP.)
- **Perfectionism:** "We can't ship something incomplete." (You're not shipping something incomplete — you're shipping something *focused*.)

**What to do:**
1. **Revisit the hypothesis.** What is S1 trying to prove? If the answer is clear, scope should be obvious.
2. **Apply the "would S1 alone be valuable?" test.** If a user can achieve a meaningful outcome with just S1, it's enough.
3. **Set a scope freeze date.** After this date, any new items go to S2 — no exceptions.
4. **Name the trade-off explicitly.** "Adding X to S1 delays the ship date by 2 weeks. Is the learning from shipping 2 weeks earlier worth more than X?" Usually, it is.

::: tip The Scope Freeze Rule
Set a specific date — typically Day 7 of the discovery sprint — after which the MVP scope cannot change without a formal decision log entry. This creates a forcing function: stakeholders must raise concerns early, and the team has a defensible boundary against late additions.
:::

---

