# Station 2 — Problem Framing

<span class="phase-badge upstream">🔵 Upstream</span>

::: info Where this fits in the spiral
Station 2 belongs to the **Initiative Loop** (Phase 1–2 — Frame the Problem). It runs during Days 2–4 of the 2-week Initiative Sprint, and feeds into [Activities I-3, I-4, I-5, and I-8](/upstream/activities-sprint). The discipline of "understand before solving" also applies inside every Feature Loop — particularly when the feature touches an unfamiliar problem area.
:::

## Purpose

Station 1 set the frame: who, what, why now, and what success looks like. Station 2 goes deeper. Its job is to **understand the current state with enough rigour that the solution space narrows naturally** — before anyone proposes a solution.

This is the station that separates mature product teams from reactive ones. Reactive teams hear a complaint and jump to a fix. Mature teams hear a complaint and ask: *What is actually happening? How bad is it? Who is affected? What have they tried? What are we assuming?*

Station 2 is uncomfortable because it demands patience. The team is not yet allowed to propose solutions. They are only allowed to understand.

::: info Why "Understand Before Solving" Matters
Research from the Design Council (the "Double Diamond" model) and Toyota's problem-solving culture consistently shows that teams who spend more time in the problem space produce better solutions faster. The temptation to skip ahead — "we already know the fix" — is the single most expensive shortcut in product development.
:::

## The Four Instruments of Problem Framing

### 1. Current State Analysis

Before proposing where you want to go, describe where you are. The current state analysis answers three questions:

- **How do things work today?** Walk through the existing flow step by step. Not how you think it works — how it *actually* works. Watch a user do it. Read the code. Check the logs.
- **Who is affected?** Be specific: which user segments, how many users, which internal teams?
- **What is the cost of inaction?** If the team does nothing, what happens in 3 months? 6 months? 12 months?

**Template:**

```
CURRENT STATE ANALYSIS
──────────────────────
Process today:
  [Step-by-step description of how the user/system handles this today]

Who is affected:
  [User segments, approximate count, internal teams]

Workarounds in use:
  [What users do instead — manual processes, third-party tools, ignoring the problem]

Cost of inaction (next 6 months):
  [Quantified: support tickets, churn, revenue loss, compliance risk, team hours]
```

**Good example — Momentum app:**

> **Process today:** Users open the Living Wondrously journal section. There is no guided prompt — they see a blank text area. Most users stare at it, type nothing, and leave within 8 seconds (median session duration). Some users who do write have no way to retrieve their entries after the session.
>
> **Who is affected:** 4,200 monthly active users of the journal feature; 78% abandon without writing.
>
> **Workarounds:** Power users screenshot their entries. Some use a separate notes app and copy-paste.
>
> **Cost of inaction:** Journal engagement continues to fall. The feature becomes dead weight, dragging down the app's perceived value. Retention for users who *do* journal is 2.3× higher than non-journalers — every lost journaler is a retention risk.

**Bad example:**

> "Users don't really use the journal feature."

The bad example gives no actionable information. It does not explain *why* users don't engage, *how many* are affected, or *what it costs* the business.

---

### 2. Pain Mapping

Pain mapping goes beyond listing complaints. It creates a structured inventory of user pains, rated by **severity**, **frequency**, and **workaround quality**.

| Pain | Severity (1–5) | Frequency | Workaround | Workaround Quality |
|------|:-:|-----------|-----------|:---:|
| Blank page with no prompt — user doesn't know what to write | 4 | Every session | None — users just leave | ❌ None |
| Written entries are not saved | 5 | Every session | Screenshot, external notes app | ⚠️ Poor |
| No way to review past entries | 3 | Weekly (for users who do write) | Scroll through chat history | ⚠️ Poor |
| No visual feedback after writing | 2 | Every session | None | ❌ None |

**How to score severity:**

| Score | Meaning | Signal |
|:-----:|---------|--------|
| 5 | Blocks the user entirely | User cannot achieve their goal at all |
| 4 | Significant friction | User achieves their goal but with major frustration or time cost |
| 3 | Moderate annoyance | User notices and is bothered, but can work around it |
| 2 | Minor irritation | User notices but it doesn't change their behaviour |
| 1 | Cosmetic | User might not even notice |

**Why workaround quality matters:** A pain with a "good" workaround is less urgent than a pain with no workaround. If users have found a reliable way to work around a problem, fixing it is still worthwhile — but it may not be the most impactful thing to do first.

::: tip Where Do Pains Come From?
Don't brainstorm pains in a meeting room. Gather them from:
- **Support tickets** — search for keywords related to the feature, count and categorise
- **User interviews** — 5 conversations will reveal patterns that 500 survey responses miss
- **Session recordings** — watch users struggle (tools like Hotjar, FullStory)
- **Analytics funnels** — where do users drop off? How long do they spend on each step?
- **NPS/CSAT verbatim comments** — theme the free-text responses
:::

---

### 3. Constraints Analysis

Every initiative operates within boundaries. Making constraints explicit prevents the team from designing solutions that are dead on arrival.

**Categories of constraints:**

| Category | Example | Impact on Solution Space |
|----------|---------|------------------------|
| **Technical** | The mobile app uses an offline-first architecture; server-side features require sync logic | Limits solution architecture |
| **Regulatory** | User journal entries may contain health data; GDPR data-subject-access requests must be supported | Requires data classification and retention design |
| **Resource** | Only 1 backend developer available for the next 2 sprints | Limits solution complexity and timeline |
| **Timeline** | Feature must ship before the Q3 board review | Constrains scope to MVP |
| **Organisational** | Design system migration is in progress; no new custom components allowed | Limits UI options |
| **Budget** | No new third-party services above $200/month | Eliminates some vendor options |

::: warning Constraints Are Not Excuses
Constraints are facts, not objections. "We can't do X because of constraint Y" is valid. "We can't do anything because everything is constrained" is learned helplessness. The point of listing constraints is to define the space within which creative solutions are possible.
:::

---

### 4. Assumptions Register

This is the most important — and most frequently skipped — instrument of Station 2.

An assumption is **something the team believes to be true but has not proven**. Every initiative carries assumptions. The dangerous ones are the assumptions nobody wrote down.

**Template:**

```
ASSUMPTION REGISTER
───────────────────
ID:          A1
Assumption:  [State what you believe to be true]
Confidence:  [High / Medium / Low]
If wrong:    [What changes? What breaks? What is the blast radius?]
Validation:  [How will you test this? By when?]
Owner:       [Who is responsible for validating?]
```

**Example — Pninei Halacha reading app:**

| ID | Assumption | Confidence | If Wrong | Validation |
|----|-----------|:----------:|----------|-----------|
| A1 | Users will read long-form halachic texts on mobile | Medium | The entire reading feature is unnecessary; pivot to audio | User interviews (5 readers) by Day 4 |
| A2 | The existing content API can serve Hebrew text with correct diacritics | High | Need new text-rendering pipeline; adds 2 sprints | Spike: test API response with nikud-heavy text (Day 3) |
| A3 | Offline reading is a "nice to have," not a core requirement | Low | If users need offline, the architecture must change fundamentally | Survey existing user base; check analytics for connectivity patterns |
| A4 | The search function can work with a server-round-trip | Medium | Need local indexing — significant architectural change | Latency test on 3G connection (Day 3 spike) |

::: danger The Invisible Assumption
The most dangerous assumption is the one nobody stated. In the JWT incident described in this book, the team assumed *"all existing tokens include the `aud` claim."* Nobody wrote it down. Nobody validated it. The result was a 44-minute production outage affecting 100% of API requests. **If your assumption register has zero entries, you haven't looked hard enough.**
:::

## The "5 Whys" Technique

When a pain or problem feels vague, use the 5 Whys to reach the root cause. The technique is simple: keep asking "why?" until you reach a cause you can act on.

**Example — Momentum app retention:**

```
Observation:  Engagement with the journal feature is flat (DAU/MAU = 4%).

Why #1:  Why is journal engagement flat?
Answer:  Because 78% of users who open the journal leave without writing.

Why #2:  Why do they leave without writing?
Answer:  Because they face a blank page with no guidance on what to write.

Why #3:  Why is there no guidance?
Answer:  Because the feature was shipped as a bare text area — prompts were in the "nice to have" backlog.

Why #4:  Why were prompts deprioritised?
Answer:  Because the team assumed users would "just know" what to write.
         (← This is an assumption that should have been in the register!)

Why #5:  Why did the team assume this?
Answer:  Because the feature was modelled after a physical journal, where users
         bring their own motivation. But a digital journal competes with
         dozens of other apps for attention — the context is different.

Root cause:  The feature was designed for motivated users but shipped to a
             general audience without the scaffolding (prompts, examples,
             streaks) that a digital context requires.
```

The 5 Whys technique is not magic — it simply forces the team to push past surface symptoms. The number "5" is a guideline, not a rule. Sometimes you reach the root in 3 whys; sometimes it takes 7.

::: tip Good 5-Whys Hygiene
- **Avoid blame.** "Because the developer didn't test it" is not a root cause — it's a finger-point. Ask why the test wasn't written: was the AC missing? Was there time pressure? Was the test environment broken?
- **Follow the evidence.** Each "because" should be backed by data, logs, or testimony — not opinion.
- **Stop when you reach a cause you can change.** "Because physics" is too deep. "Because our CI pipeline doesn't run accessibility checks" is actionable.
:::

## Good vs. Bad Problem Framing

The difference between useful and useless problem framing is specificity and evidence.

### Example: Wallet Balance Bug

**Bad problem framing:**

> "The balance display needs improvement. Users have complained about it. We should redesign the wallet card."

This is three problems in one sentence:
1. It's vague — "improvement" means different things to different people
2. It smuggles a solution ("redesign") into the problem statement
3. It offers no evidence of impact

**Good problem framing:**

> **Current state:** Users view their wallet balance on the dashboard via the `WalletCard` component. The component retrieves the balance from the `/api/wallet/balance` endpoint and displays it as a formatted currency string.
>
> **Pain:** When the balance is negative (e.g., -$125.50), the frontend renders "$0.00" because the display logic clamps negative values to zero (`balance.amount > 0 ? balance.amount : 0`). Users with negative balances see incorrect information and either (a) contact support (140 tickets/month) or (b) lose trust silently (NPS from affected segment: -12).
>
> **Who is affected:** ~3,200 users with negative balances (8% of active wallet users).
>
> **Cost of inaction:** Support ticket volume continues at $12/ticket → $1,680/month. Churn risk from affected segment compounds: projected 15% incremental churn over 6 months.
>
> **Constraints:** The API returns correct negative values — this is a frontend-only issue. The component is shared across web and mobile via a design system token; any fix must respect both platforms.
>
> **Key assumption:** A3: Users who see "$0.00" instead of a negative balance are the primary driver of wallet-related support tickets (confidence: high, validated by support ticket analysis).

The good framing gives the team everything they need to enter Station 3 and Station 4 with clarity.

---

## Anti-Pattern: The Solution Disguised as a Problem

This is the single most common Station 2 failure. It happens when someone frames the work as a solution before the problem has been understood.

| Solution disguised as problem | Actual problem statement |
|------------------------------|------------------------|
| "We need to add a search bar to the library" | "Users cannot find specific texts in a library of 2,400 entries, leading to a 45-second average time-to-content" |
| "We need to migrate to PostgreSQL" | "Query performance degrades above 100k records, causing 3-second page loads for enterprise customers" |
| "We need to redesign the onboarding flow" | "60% of trial users abandon at step 3 (email verification), and mobile users cannot complete verification at all" |
| "We need an admin dashboard" | "Operations team spends 3 hours/day manually reconciling data across 4 different tools" |

**How to catch it:** If the problem statement contains an implementation verb ("add," "build," "migrate," "redesign," "integrate"), it is probably a solution. Rephrase it as a user pain with evidence.

::: warning Ask This Question
When someone presents a "problem," ask: *"If there were a completely different way to solve this, would the problem statement still be valid?"* If the answer is no — if the statement only makes sense for one specific solution — then it's a solution, not a problem.
:::

## Real Example: Momentum App Retention

The Momentum team noticed that engagement with the Living Wondrously journal feature was flat. The initial instinct was to "add gamification" — badges, streaks, points.

Instead of jumping to gamification, the team ran Station 2 properly:

**Current state:** Users open the journal and see a blank text area. No prompts, no suggestions, no examples. Median time-on-page before exit: 8 seconds.

**Pain map:**

| Pain | Severity | Frequency | Workaround |
|------|:--------:|-----------|:----------:|
| Blank page — "what do I write?" | 5 | Every session | None |
| Entries not saved | 5 | Every session | Screenshots |
| No way to review history | 3 | Weekly | Scroll chat |
| No feedback after writing | 2 | Every session | None |

**5 Whys result:** The root cause was not "lack of gamification" — it was "lack of scaffolding." Users needed prompts, not points. They needed to see their past entries, not earn badges.

**Assumption register:**

| ID | Assumption | Confidence | If Wrong |
|----|-----------|:----------:|---------|
| A1 | Users *want* to journal but don't know *how* to start | Medium | The feature may not be viable regardless of UX changes |
| A2 | Daily prompts will increase write rates | Low | Need to test prompt types — inspirational vs. reflective vs. gratitude |
| A3 | Saving and reviewing entries will drive return visits | Medium | Users may write once and never come back |

The assumptions reshaped the solution exploration in Station 4. Instead of building gamification (which would not have addressed the root cause), the team explored prompt-based journaling with saved entries — which is what eventually shipped as S1.

## Station 2 Output Checklist

By the end of Station 2, you should have:

- [ ] **Current State Analysis** — documented process, affected users, workarounds, cost of inaction
- [ ] **Pain Map** — pains listed with severity (1–5), frequency, and workaround quality
- [ ] **Constraints** — technical, regulatory, resource, timeline, and organisational constraints listed
- [ ] **Assumption Register** — every assumption stated with confidence, blast radius, and validation plan
- [ ] **Open Questions** — remaining unknowns, each assigned to an owner with a due date
- [ ] **Root Cause Analysis** — at least one 5 Whys trace for the primary pain

Write these into the **Problem Framing** section of the Initiative Brief. This is the foundation for everything that follows.

::: tip The Station 2 Litmus Test
If someone who has never heard of this initiative can read your Station 2 output and understand (a) what is broken, (b) how bad it is, (c) who it affects, and (d) what you still don't know — you've done Station 2 well. If they need to ask clarifying questions, go deeper.
:::

---

