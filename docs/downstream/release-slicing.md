# Release Slicing

<span class="phase-badge downstream">🟢 Downstream</span>

## Why Slice Releases?

The single most reliable way to reduce risk in software delivery is to **make releases smaller**. Smaller releases mean faster feedback, fewer unknowns, shorter rollback windows, and higher confidence. A release with 3 stories has 3 stories' worth of risk. A release with 30 stories has exponentially more — because the interactions between those 30 changes create failure modes that no one predicted.

The mathematics are simple:

```
RISK ≈ (Number of Changes) × (Interaction Complexity)

3 stories:   3 × ~1 interaction  = ~3 risk units
10 stories:  10 × ~5 interactions = ~50 risk units
30 stories:  30 × ~30 interactions = ~900 risk units
```

This is not theoretical. The JWT outage was caused by a single APIM policy change that was bundled into a 12-story release. Had the policy change shipped independently, the blast radius would have been isolated and the rollback trivial.

::: info The Core Principle
**Release early, release often, release small.** Every additional story in a release is a multiplier on risk, not an addition.
:::

---

## The Connection to Upstream Slicing

Release slicing in Downstream is not invented from scratch — it inherits from the story mapping work done in Upstream.

### From Story Map to Release Plan

In Upstream Station 3, the team draws horizontal slice lines across the story map:

- **S1 (Walking Skeleton):** The minimum end-to-end path through every activity. Ships first.
- **S2 (Enrichment):** The next most valuable capabilities. Ships second.
- **S3 (Full Experience):** The complete product vision. Ships third (or later).

These slice lines become release boundaries in Downstream. The team does not re-debate what is in S1 — that decision was made and frozen at Station 5. Downstream's job is to execute S1 as a coherent release, then S2, then S3.

```
UPSTREAM (Discovery)                DOWNSTREAM (Delivery)
─────────────────────              ─────────────────────
Story Map created                  Release 1.0 = S1 stories
S1/S2/S3 lines drawn   ────────►  Release 1.1 = S2 stories
Frozen at Station 5                Release 2.0 = S3 stories
```

::: warning Don't Re-Slice in Downstream
If the team discovers during implementation that S1 is too large for a single release, the correct response is to split S1 into S1a and S1b — preserving the original scope intent but delivering it in two tranches. The incorrect response is to move S2 stories into S1 because "we're already building nearby code." That is scope creep, and it violates the Station 5 freeze.
:::

---

## What Makes a Good Release?

A release is not "whatever stories happen to be done this week." A release is a **coherent set of stories that together deliver a complete user-facing capability**.

### The Three Rules of Release Composition

| Rule | Description | Example |
|------|------------|---------|
| **End-to-end** | The release covers a complete user flow, not a partial layer | "User can browse, read, and bookmark" — not "browsing API is ready" |
| **Independently valuable** | A user who gets only this release (and nothing after) still benefits | Pninei Halacha S1: users can browse, read, and bookmark — even without search, offline download, or text-to-speech |
| **Demonstrable** | The release can be shown in a demo and explained in one sentence | "Users can now save journal reflections and view past entries" |

### Good vs. Bad Release Composition

| ✅ Good Release | ❌ Bad Release |
|----------------|---------------|
| "Save a reflection: user can write, save, and view a journal entry" | "Backend sprint: API endpoints for entries, prompts, and settings" |
| "Matching MVP: user gets one match per day based on preferences" | "Infrastructure: set up CI/CD, database, and monitoring" |
| "Offline reading: user can download books and read without internet" | "UI polish: fix spacing on 14 screens, update fonts, adjust colours" |

The bad releases are not useless work — infrastructure and polish are necessary. But they are not releases. They are enablers that should be embedded within real releases.

::: tip The "Show Your Grandmother" Test
Can you call a non-technical stakeholder and explain the release in one sentence without using technical jargon? If yes, it is a good release. If the best you can say is "we upgraded the database and refactored the service layer," it is not a release — it is a technical milestone that should be bundled into a user-facing release.
:::

---

## Capacity-Based Planning

Once the release scope is defined (from the story map slice), the team must verify that the scope fits within the team's capacity. This is not estimation theatre — it is a reality check.

### Calculating Team Capacity

```
Available Capacity = Available Days × Focus Factor

Where:
  Available Days = Team Members × Working Days − Leave − Holidays − Support Rotation
  Focus Factor   = 0.6–0.8 (accounts for meetings, interrupts, context switching)
```

### Worked Example: Living Wondrously S1

| Input | Value |
|-------|-------|
| Team size | 4 developers + 1 QA |
| Sprint length | 2 weeks (10 working days) |
| Leave | 2 dev-days (one developer on holiday for 2 days) |
| Support rotation | 1 dev-day (one developer on support for 1 day) |
| Focus factor | 0.7 |

```
Available dev-days  = (4 × 10) − 2 − 1 = 37 dev-days
Focused capacity    = 37 × 0.7 = 25.9 ≈ 26 focused dev-days
QA capacity         = (1 × 10) × 0.7 = 7 focused QA-days
```

If S1 stories are estimated at a total of 30 dev-days, the scope exceeds capacity. The team has three options:

| Option | Trade-off |
|--------|-----------|
| **Cut scope** (preferred) | Remove the lowest-priority S1 story and defer to S1b |
| **Extend timeline** | Add a sprint. Delays feedback. Use only if scope is genuinely irreducible. |
| **Add capacity** | Bring in another developer. Ramp-up cost. Use only for sustained capacity gaps, not sprint-by-sprint. |

::: danger Never Cut Quality
When scope exceeds capacity, the answer is **always** to cut scope — never to cut testing, skip code review, or defer observability. Shipping faster by skipping quality gates produces incidents, not value.
:::

### The Buffer Rule

Always reserve **15–20% of capacity** for unplanned work: bugs found during testing, production support requests, and the inevitable "quick fix" that takes 3 days.

```
Planned story work:   80–85% of capacity
Unplanned buffer:     15–20% of capacity

For our example:
  Planned:  26 × 0.85 = 22 dev-days for stories
  Buffer:   26 × 0.15 = 4 dev-days for the unexpected
```

A team that plans at 100% capacity will never finish a sprint on time. The unplanned work does not disappear because you did not plan for it.

---

## Release Cadence: Trains vs. Feature-Based

There are two models for when releases ship. Each has strengths.

### The Release Train (Fixed Cadence)

Releases ship on a fixed schedule — every 2 weeks, every month — regardless of what is "done." Whatever stories have completed the full Kanban flow (Released status) by the release date go on the train. Stories not ready wait for the next train.

```
RELEASE TRAIN (every 2 weeks)
────────────────────────────────────────────────────
  Train 1        Train 2        Train 3        Train 4
  ──────         ──────         ──────         ──────
  MOM-234 ✓      MOM-238 ✓      SFC-42 ✓       PH-88 ✓
  MOM-235 ✓      MOM-239 ✓      SFC-43 ✓       PH-89 ✓
  MOM-236 ✓      MOM-240 ✓      SFC-44 ✓       ANA-15 ✓
                                 (OPS-991 ✓)

  Jan 15         Jan 29         Feb 12         Feb 26
```

| Advantage | Why It Matters |
|-----------|---------------|
| Predictable | Stakeholders know exactly when the next release ships |
| Low ceremony | No "is it ready?" debates — the train leaves on schedule |
| Reduces batching | Stories ship as they finish, not when the whole scope is done |
| Easier coordination | QA, ops, and support can prepare in advance |

### Feature-Based Releases

Releases ship when a coherent feature set is complete. No fixed schedule — the release ships when it is ready.

| Advantage | Why It Matters |
|-----------|---------------|
| Coherent | Every release tells a complete story |
| Flexible | No pressure to ship half-finished features |
| Better for marketing | Launch events can align with feature readiness |

### The UDOO Recommendation

**Use the release train as the default.** Switch to feature-based releases only for major launches (new product, significant milestone, external event) where coherent messaging matters more than cadence.

Most teams benefit from the discipline of a fixed cadence. Feature-based releases sound appealing but often degenerate into "it ships when it ships" — which means it ships late, if at all.

::: tip Combine Both Models
Many mature teams use a hybrid: the release train runs every 2 weeks for standard work, and a feature-based release is planned separately for major milestones. The train keeps the flow moving; the milestone release gets dedicated attention.
:::

---

## Scope Negotiation: What Happens When Scope Exceeds Capacity

Every release iteration begins with a scope conversation. The PM presents the desired scope; the team presents the available capacity. When scope exceeds capacity — and it almost always does — the team negotiates.

### The Negotiation Framework

```
PM:   "I want 8 stories in this release."
Team: "We have capacity for 5."

OPTION A: Cut 3 stories (preferred)
  PM selects the lowest-priority 3 for deferral.
  Team delivers 5 high-confidence stories.

OPTION B: Reduce quality (NEVER)
  Skip testing, skip reviews, skip observability.
  Team delivers 8 stories that break in production.

OPTION C: Extend timeline (sometimes)
  Add 1 week. Team delivers 7 stories.
  Only if the 6th and 7th stories are genuinely irreducible.

OPTION D: Reduce scope per story (sometimes)
  Simplify 2 stories: e.g., "match by interests only"
  instead of "match by interests + location + schedule."
  PM decides which dimension to defer.
```

The iron triangle (scope, quality, time) is real. When one corner is fixed, the other two must flex. In UDOO, **quality is always fixed**. The negotiation is between scope and time.

::: warning The "Just This Once" Trap
"Let's skip code review just this once to hit the deadline." There is no "just this once." Every shortcut creates precedent. The team that skips review once will skip it again — and then again — until the practice is dead. Guard quality gates with the same ferocity you guard production access.
:::

---

## Feature Flags

Feature flags decouple **deployment** from **release**. Code can be deployed to production without being visible to users. This enables:

### Why Feature Flags Matter

| Capability | How It Works |
|-----------|-------------|
| **Gradual rollout** | Enable the feature for 5% of users, monitor, then expand to 100% |
| **Kill switch** | Disable a feature in production without deploying new code |
| **A/B testing** | Show variant A to 50% and variant B to 50%; measure which performs better |
| **Trunk-based development** | Merge incomplete features behind a flag; no long-lived branches |
| **Decoupled releases** | Deploy on Friday; enable on Monday when the team is available to monitor |

### Feature Flag Lifecycle

```
1. CREATE     Developer adds flag: journal.save.new_flow = false
2. DEVELOP    Code is written behind the flag. Merged to main. Deployed.
3. ENABLE     PM or Dev enables for internal users (dogfooding)
4. EXPAND     Enable for 10% → 25% → 50% → 100%
5. CLEAN UP   Remove the flag and the old code path. ← CRITICAL
```

::: danger Flag Debt
Feature flags that are never cleaned up become the worst kind of tech debt. A codebase with 200 active flags is untestable — the combinatorial explosion of flag states is astronomical. Rule: **every flag has an expiry date** (typically 30 days after 100% rollout). If the flag is still in the code after expiry, it becomes a tech debt story with a deadline.
:::

### Real Example: Someone for Coffee — Matching Algorithm Rollout

The matching algorithm (SFC-42) was deployed behind a feature flag `matching.use_preference_scoring`.

```
Week 1: Flag = false for all users. Old random matching active.
         Team deploys and monitors. No errors.

Week 2: Flag = true for internal team (10 users).
         Team tests matching quality manually.
         Found issue: empty preferences caused null score.
         Fix deployed. Still behind flag.

Week 3: Flag = true for 25% of users.
         Monitoring: match acceptance rate increased from 34% to 51%.
         No errors. No performance degradation.

Week 4: Flag = true for 100% of users.
         Old code path removed. Flag cleaned up.
```

Without the feature flag, the empty-preference bug would have affected all users on Day 1. With the flag, it was caught with 10 internal users and fixed before any external user saw it.

---

## Canary Releases

A canary release deploys new code to a **small subset of production infrastructure** before rolling it out to the full fleet. Named after the canary in the coal mine — if the canary dies, pull it out before the miners are affected.

### How Canary Works

```
PRODUCTION FLEET (10 instances)
─────────────────────────────────

Before canary:
  [v2.3] [v2.3] [v2.3] [v2.3] [v2.3]
  [v2.3] [v2.3] [v2.3] [v2.3] [v2.3]

Canary deployed (1 instance):
  [v2.4] [v2.3] [v2.3] [v2.3] [v2.3]
  [v2.3] [v2.3] [v2.3] [v2.3] [v2.3]
     ↑
  canary — 10% of traffic

Monitor for 30–60 minutes:
  ✓ Error rate same as baseline?
  ✓ Latency within SLO?
  ✓ No crash loops?

If healthy → promote to all instances
If unhealthy → roll back canary only (90% of users never affected)
```

### Canary vs. Feature Flags

| Aspect | Canary Release | Feature Flag |
|--------|---------------|-------------|
| **Granularity** | Infrastructure-level (which servers run new code) | Application-level (which users see new feature) |
| **Rollback** | Redeploy old version to canary instances | Toggle flag to `false` |
| **Use case** | Infrastructure changes, performance-sensitive changes | Feature rollout, A/B testing |
| **Combination** | Often used together: canary deploys the code, feature flag controls visibility |

---

## Release Readiness Checklist

Before any release reaches production, the team walks through the release readiness checklist. This is not a meeting — it is a systematic verification, typically done asynchronously in Slack or Confluence.

| # | Check | Verified By | Evidence |
|---|-------|-------------|----------|
| 1 | All stories meet DoD | Tech Lead | Every story in Released status has DoD checklist completed |
| 2 | No open P1/P2 bugs | QA Lead | Jira filter: `project = X AND type = Bug AND priority in (P1, P2) AND status != Done` returns 0 |
| 3 | Smoke suite green on staging | QA Lead | CI run link showing `@smoke` suite passing |
| 4 | Performance within SLOs | Dev Lead | p95 latency ≤ 500ms (API), p95 page load ≤ 3s |
| 5 | Rollback plan documented | DevOps | Runbook entry with rollback steps and verification |
| 6 | Monitoring dashboards ready | Dev Lead | Feature-specific dashboard exists, alert thresholds set |
| 7 | On-call team briefed | Tech Lead | On-call engineer has reviewed release notes and runbook |
| 8 | Release notes drafted | PM | Internal notes for support; external notes for users (if applicable) |
| 9 | Feature flags configured | Dev Lead | Flags set to correct initial state (disabled for gradual rollout) |
| 10 | Stakeholder sign-off | PM | PM has verified key stories in staging |

::: info Automate What You Can
Items 2, 3, and 4 can be automated as CI/CD gates. The pipeline should block production deployment if the smoke suite fails, if P1/P2 bugs exist, or if performance thresholds are breached. Items 1, 5–10 require human judgment — but the checklist ensures nothing is forgotten.
:::

---

## Real Example: Pninei Halacha Foundation Release (S1)

The Pninei Halacha S1 release was the walking skeleton — the minimum end-to-end reading experience.

### What S1 Included

| Activity | S1 Story | What It Delivered |
|----------|----------|-------------------|
| Discover | App store listing | Users can find and install the app |
| Browse | Browse by volume | Users see all 17 books organized by topic |
| Read | Open chapter + scroll paragraphs | Users read full chapters with numbered paragraphs |
| Support | View donation page | Users see how to support the project |
| Return | Bookmark a paragraph | Users can mark their place and return to it |

### What S1 Deliberately Excluded

| Deferred Feature | Why It Waited |
|-----------------|--------------|
| Search by keyword | S2: valuable but not essential for first use |
| Offline download manager | S2: app ships with bundled content; user-managed downloads come later |
| Text-to-speech | S3: requires audio infrastructure; significant investment |
| AI Q&A | S3: experimental; needs data from real usage to train |
| Cross-device sync | S3: requires account system not in S1 |

### The Key Insight

S1 was not "the reading feature." It was a thin slice through *every* activity. A user who installed the S1 release could discover the app, browse books, read a chapter, bookmark their place, and come back tomorrow. The experience was minimal but **complete**. This is what "walking skeleton" means — not a fancy torso with no legs, but a stick figure that walks.

::: details The S1 Debate: Should Search Be S1 or S2?
The team initially placed search in S2. During the story mapping session, the QA lead challenged: *"The books have 30+ chapters each. Without search, how does the user find a specific halacha?"*

The PM argued that browse-by-volume was sufficient for S1 — users could navigate by table of contents. The QA lead countered: *"I asked three potential users. All three said the first thing they would do is search for a specific topic."*

Search moved to S1. This added 2 stories and 4 development days — but it transformed S1 from "technically functional" to "actually useful." The lesson: **S1 is not defined by what is easiest to build. It is defined by what delivers minimum viable value.**
:::

---

## Real Example: Living Wondrously Release Slicing

Living Wondrously was sliced into three releases, each delivering progressively richer journal experiences.

### S1: The Foundation — Write and Save

| Story | Capability |
|-------|-----------|
| MOM-230 | User sees a daily prompt |
| MOM-231 | User can write a free-text reflection |
| MOM-234 | User can save a reflection |
| MOM-235 | User sees confirmation after saving |
| MOM-237 | User can view a list of past entries |

**Value delivered:** A user can open the app, see an inspiring prompt, write a reflection, save it, and view their history. This is a complete journaling experience — minimal, but complete.

**What was staked on S1:** The core hypothesis — *"Will users actually write daily reflections?"* If S1 usage data showed low engagement, the team would re-evaluate the product direction before investing in S2 and S3.

### S2: The Habit Loop — Stars and History

| Story | Capability |
|-------|-----------|
| MOM-240 | User earns a star for writing on consecutive days |
| MOM-241 | User sees their star streak on the home screen |
| MOM-242 | User can filter past entries by date range |
| MOM-243 | User can star (favourite) individual entries |
| MOM-244 | User can edit a past entry |

**Value delivered:** Gamification (streak tracking) and richer history management. S2 turned the journal from a tool into a habit.

**What S2 depended on:** S1 usage data. If users were writing but not returning, the streak mechanic would address retention. If users were not writing at all, S2 would pivot to onboarding improvements instead.

### S3: The Companion — Notifications and AI

| Story | Capability |
|-------|-----------|
| MOM-250 | User receives a daily reminder notification |
| MOM-251 | User can customise reminder time |
| MOM-252 | User sees AI-generated insights from their entries |
| MOM-253 | User can share an entry as an image |
| MOM-254 | User sees mood trends over time |

**Value delivered:** Active engagement (notifications pull users back) and intelligence (AI insights make the journal feel personal).

### The Release Timeline

```
LIVING WONDROUSLY RELEASES
──────────────────────────────────────────────────────────
  S1 (Foundation)          S2 (Habit Loop)         S3 (Companion)
  ───────────────          ────────────────         ──────────────
  5 stories                5 stories                5 stories
  3 weeks                  3 weeks                  4 weeks

  Week 1─3                 Week 4─6                 Week 7─10
  ├── Learn: Are users     ├── Learn: Are users     ├── Learn: Does AI
  │   writing?             │   returning?            │   increase retention?
  │                        │                         │
  └── Decision gate:       └── Decision gate:        └── Decision gate:
      If <10% write daily,     If streak has no          If AI insights get
      pivot S2 to              effect on D7              <20% engagement,
      onboarding               retention, pivot          defer and invest
                                to social features        in sharing
```

::: tip The Decision Gate Pattern
Each release has a **decision gate** — a measurable question that must be answered before the next release scope is confirmed. This prevents the team from building three slices on faith. S1 answers "will they use it?" S2 answers "will they come back?" S3 answers "will they deepen?" If any answer is "no," the team pivots — and the pivot is cheap because each slice is small.
:::

---

## Anti-Pattern: The Big Bang Release

The most dangerous anti-pattern in release slicing is the **Big Bang Release** — holding all work until every story in every slice is complete, then deploying everything at once.

### What It Looks Like

```
BIG BANG RELEASE
──────────────────────────────────────────────────────
Week 1─12: All 15 stories developed in parallel
Week 13:   Integration testing begins ("integration hell")
Week 14:   42 bugs found. 12 are P1.
Week 15:   Bug fixing. 8 bugs remain.
Week 16:   More testing. 3 new bugs from fixes.
Week 17:   Release. Fingers crossed.
Week 18:   Production incident. 3 AM hotfix.
```

### Why It Fails

| Problem | Consequence |
|---------|------------|
| **No feedback until the end** | The team builds for 12 weeks without knowing if users want what they are building |
| **Integration risk compounds** | 15 stories touching shared code create merge conflicts, behavioural conflicts, and subtle regressions |
| **Testing is impossible** | Testing 15 changes simultaneously means any bug could be caused by any story. Root cause analysis becomes guesswork. |
| **Rollback is all-or-nothing** | If one story causes a production issue, you must roll back all 15 — including the 14 that work perfectly |
| **Team burnout** | The "integration sprint" is always the worst sprint. It is demoralising, unpredictable, and feels like punishment for doing the work. |

### The Fix

Slice into 3–5 releases of 3–5 stories each. Ship S1 in Week 3, get feedback, adjust S2, ship S2 in Week 6, and so on. By Week 12, you have shipped three stable releases instead of one unstable Big Bang.

::: danger The Economics of Big Bangs
A study by the Standish Group found that projects with releases larger than 10 features had a 65% failure rate. Projects releasing 1–3 features at a time had an 83% success rate. The data is unambiguous: **small releases succeed; big releases fail**.
:::

---

## Release Notes

Every release needs notes — but the audience determines the format.

### Internal Release Notes (for Support, QA, Onstream)

```markdown
## Release 1.2.0 — 2025-02-15

### Stories Shipped
- [MOM-234] Save journal reflection — users can now save entries
- [MOM-235] Save confirmation — success state shown after save
- [MOM-237] Past entries list — users see chronological entry list

### Known Issues
- Past entries list does not paginate beyond 100 entries (PH-102)
- Save button briefly flickers on slow connections (cosmetic, P3)

### Rollback Plan
- Revert to v1.1.0: `kubectl rollout undo deployment/journal-api`
- Verify: `curl https://api.example.com/health` returns v1.1.0

### Monitoring
- Dashboard: [Living Wondrously — Release 1.2.0]
- Key alerts: save_error_rate > 1%, entry_list_p95 > 800ms
```

### External Release Notes (for Users)

```markdown
## What's New in Living Wondrously 1.2

📝 **Save Your Reflections**
Write your thoughts and save them with a single tap. Your
reflections are stored securely and available whenever you
need them.

📚 **View Past Entries**
Scroll through your journal history to revisit past reflections.
See how far you've come.
```

The internal notes are detailed, technical, and action-oriented. The external notes are concise, benefit-focused, and human. Both are necessary. Neither is optional.

---

## Quick Reference

| Concept | Rule |
|---------|------|
| Slice source | S1/S2/S3 lines from Upstream story mapping |
| Release composition | End-to-end, independently valuable, demonstrable |
| Capacity planning | Available days × focus factor (0.7) minus 15–20% buffer |
| Scope negotiation | Cut scope, not quality. Never skip quality gates. |
| Release cadence | Release train (every 2 weeks) as default; feature-based for milestones |
| Feature flags | Decouple deployment from release. Every flag has a 30-day expiry. |
| Canary releases | Deploy to 10% of infrastructure, monitor, then promote |
| Readiness checklist | 10-point checklist before every production deployment |
| Decision gates | Each release answers a measurable question before the next slice is confirmed |
| Anti-pattern | Big Bang Release — holding everything until it is all "done" |

---

