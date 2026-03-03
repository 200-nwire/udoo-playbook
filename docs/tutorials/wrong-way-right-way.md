# The Wrong Way (Then the Right Way)

<span class="phase-badge upstream">🔵🟢🟠 Cross-Phase</span>

**Difficulty:** 🟡 Intermediate · **Time:** 1–2 hours · **Best for:** Team workshops, onboarding, intuition building

This tutorial presents six scenarios that look correct to a newcomer. Each one contains a fundamental mistake that costs teams days or weeks of rework. Your job is to identify the mistake before reading the reveal.

The pattern for each scenario: **What the team did** → **Why it seemed reasonable** → **What went wrong** → **The right way** → **Key takeaway**.

::: info How to Use This Tutorial
For each scenario, read the "What the team did" section and **stop**. Before reading further, write down what you think is wrong. The learning happens in the gap between your intuition and the reveal. If you read straight through, you'll nod along but you won't build the pattern-recognition skill this tutorial is designed to develop.
:::

---

## Scenario 1: The Story That's Really an Epic

### What the Team Did

During sprint planning, the PM added this story to the sprint backlog:

```
As a journal user,
I want to use the journal,
So that I can reflect on my daily experiences.
```

The developer estimated it at 5 story points. The QA engineer asked, "What does 'use the journal' mean?" The PM said, "You know — open it, write in it, save, see past entries, that kind of thing." The developer started building.

### Why It Seemed Reasonable

The story follows the "As a / I want / So that" format. It has a clear persona. The outcome makes sense. It looks like a story.

### ✏️ Pause — What's Wrong Here?

Write down your answer before continuing.

---

### What Went Wrong

Three days into the sprint, the developer had built a text editor. The PM reviewed it and said: "Where's the prompt carousel? Users need prompts to inspire their writing." The developer had never heard of prompts. They weren't in the story.

Two days later, the PM asked about viewing past entries. The developer had built "write and save" — not "browse past entries by date." That was a different screen entirely.

By sprint's end, the team had delivered a text editor with a save button. No prompts, no past entries, no stars, no streaks. The "story" was actually hiding **an entire feature** — and the team had built about 20% of it.

### The Right Way

The journal feature should have been broken into individual stories, each independently buildable and testable:

```
Story 1: As a journal user, I want to see a carousel of 3 writing prompts
         when I open the journal, so that I feel inspired to write.

Story 2: As a journal user, I want to tap a prompt and start writing a new
         entry, so that the prompt guides my reflection.

Story 3: As a journal user, I want to save my entry and see a confirmation,
         so that I know my writing is preserved.

Story 4: As a journal user, I want to browse my past entries in reverse
         chronological order, so that I can revisit earlier reflections.

Story 5: As a journal user, I want to earn a star when I write on
         consecutive days, so that I'm motivated to maintain a streak.
```

Each story is completable in 1–3 days by one developer. Each has clear, testable acceptance criteria. Each delivers a slice of value that can be reviewed independently.

::: tip The Litmus Test for Story vs. Epic
Ask: **Can a single developer complete this in 1–3 days and demo the result?** If the answer is "it depends on what you mean by [the action]," you're holding an epic, not a story. If the PM needs more than 30 seconds to explain the scope, it's too big.
:::

### Key Takeaway

**A story that requires clarification about what it includes is an epic in disguise.** The "As a / I want / So that" format doesn't make something a story — size and specificity do. When a story generates the question "what does that mean, exactly?" — split it.

---

## Scenario 2: The Initiative That's Actually a Solution

### What the Team Did

The PM wrote an Initiative Brief with the following heading:

```
INITIATIVE: Add a Journaling Feature
```

The team spent two weeks in discovery, designing a journaling feature — prompts, entries, streaks, stars, past entry browsing. They mapped out the screens, wrote stories, designed the data model.

### Why It Seemed Reasonable

The initiative has a clear name. The team knows exactly what to build. Discovery moved quickly because there was no ambiguity about the direction.

### ✏️ Pause — What's Wrong Here?

Write down your answer before continuing.

---

### What Went Wrong

Six months after launch, the team reviewed engagement data. The journal feature had a 12% adoption rate. Users who tried it wrote 1–2 entries and stopped. In user interviews, a recurring theme emerged:

> *"I don't need another place to write. I need something that helps me feel something. The prompts are nice, but I forget the app exists by noon."*

The problem wasn't "users don't have a journal." The problem was "users lack a daily ritual that creates emotional connection." A journal was one possible solution — but so was a daily reflection notification, a gratitude prompt in the morning, a shared reflection with a partner, or a voice-note option for people who don't like typing.

By naming the initiative as a solution ("add a journaling feature"), the team skipped the most important discovery question: **What problem are we actually solving?**

### The Right Way

```
INITIATIVE: Create a Daily Ritual That Increases Emotional Connection

Problem:   Users of Living Wondrously report feeling disconnected from
           the app between sessions. The app provides value during use,
           but nothing draws the user back daily.

Persona:   Emma, 35, a working parent who values mindfulness but
           forgets self-care practices by mid-morning.

Success:   40% of active users engage with the daily ritual feature
           at least 4 days per week within 90 days.

Possible solutions:
  A) A journaling feature with daily prompts
  B) A morning notification with a micro-reflection (30 seconds)
  C) A shared gratitude exchange with a partner or friend
  D) A voice-note option for on-the-go reflection
```

Now the team has options. Maybe they still build a journal — but now they know *why* they're building it, they can measure whether it works, and they have alternatives if it doesn't.

::: warning The Solution-Named-as-Problem Trap
When an initiative is named after a solution, discovery becomes validation theatre. The team isn't exploring — they're confirming a decision that's already been made. The five discovery stations lose their power because Station 4 (Solution Options) has been pre-answered.
:::

### Key Takeaway

**An initiative should name a problem, not a solution.** If the initiative title contains a feature name (journaling, notifications, dark mode), you've skipped discovery. Rename it as the outcome the user needs, and let discovery determine the best way to achieve it.

---

## Scenario 3: The Acceptance Criteria That Test Nothing

### What the Team Did

The PM wrote a story with the following acceptance criteria:

```
Story: As a user, I want to see my wallet balance on the dashboard.

Acceptance Criteria:
  - The feature works correctly
  - The balance is displayed in a user-friendly way
  - Edge cases are handled properly
```

The developer built a dashboard that displayed the balance. It looked great for positive balances. For negative balances, the code contained:

```javascript
const displayBalance = balance.amount > 0 ? balance.amount : 0;
```

The developer considered this "handling edge cases properly." The QA engineer tested with a positive balance and it passed. The story was marked Done.

### Why It Seemed Reasonable

The ACs are written in plain English. They cover the happy path ("works correctly"), the UX ("user-friendly"), and robustness ("edge cases"). That seems thorough.

### ✏️ Pause — What's Wrong Here?

Write down your answer before continuing.

---

### What Went Wrong

140 customers with negative balances saw \$0.00 on their dashboard. Support tickets piled up. Trust in the platform's financial accuracy eroded. The root cause: the acceptance criteria were **untestable**. "Works correctly" is not a test — it's a wish. "Edge cases are handled properly" delegates the definition of correctness to the developer, who made a reasonable (but wrong) assumption.

### The Right Way

```
Story: As a user, I want to see my wallet balance on the dashboard,
       so that I know my current financial position.

Acceptance Criteria:

AC1 (happy):  Given a user with a balance of $250.00
              When they navigate to the dashboard
              Then the balance card displays "$250.00"

AC2 (negative): Given a user with a balance of -$125.50
                When they navigate to the dashboard
                Then the balance card displays "-$125.50" in red text

AC3 (zero):   Given a user with a balance of $0.00
              When they navigate to the dashboard
              Then the balance card displays "$0.00"

AC4 (edge):   Given a user with a balance of -$0.01
              When they navigate to the dashboard
              Then the balance card displays "-$0.01" (not "$0.00")

AC5 (error):  Given the balance API returns a 500 error
              When the user navigates to the dashboard
              Then the balance card displays "Unable to load balance"
              And a retry button is visible
```

Each AC is **testable** — a QA engineer (or an automated test) can execute it and determine pass or fail without any interpretation. AC4 specifically would have caught the clamping bug.

::: info The Testability Rule
If a QA engineer cannot read the AC and write a test for it within 5 minutes, the AC is too vague. Every `Then` clause must describe something **observable and measurable** — a specific value, a specific colour, a specific error message, a specific state change.
:::

### Key Takeaway

**Acceptance criteria that use words like "correctly," "properly," "user-friendly," or "as expected" test nothing.** They pass responsibility to the developer to define correctness — and every developer will define it differently. The PM's job is to make the expected behaviour explicit enough that any developer, on any day, would build the same thing.

---

## Scenario 4: The Sprint That Starts Without Ready Stories

### What the Team Did

It was Monday morning. Sprint planning was scheduled. The backlog had 12 stories, but only 3 had full acceptance criteria. Two had no visual reference. Four hadn't been sized. One had an unresolved dependency on another team's API.

The PM said: "We can't wait for everything to be perfect. Let's pull the stories in and figure out the details during the sprint. We need to start building."

The team pulled 8 stories into the sprint.

### Why It Seemed Reasonable

The team felt pressure to deliver. Waiting for perfect stories felt like bureaucracy. "Agile is about flexibility," someone said. Starting to build felt more productive than spending another day on story refinement.

### ✏️ Pause — What's Wrong Here?

Write down your answer before continuing.

---

### What Went Wrong

**Day 2:** Developer picks up story #4. No ACs. Slacks the PM: "What exactly should this screen do?" PM is in meetings until 3pm. Developer blocks for 4 hours.

**Day 4:** Developer finishes story #6. QA finds the implementation doesn't match the PM's intent. "This isn't what I meant by 'filter by date.'" Story bounces back. 2 days of rework.

**Day 6:** Story #8 depends on another team's API. That API isn't ready. Story is blocked. Developer context-switches to story #9, which also has unclear ACs. Another Slack thread, another 3-hour delay.

**Day 9:** Sprint review. Of 8 stories pulled in, 3 are done, 2 are "almost done" (meaning not done), 2 are blocked, and 1 was abandoned because the scope was much larger than expected.

The team delivered 3 stories. If they had entered the sprint with 5 fully ready stories, they would have delivered 5.

### The Right Way

Enforce the [Definition of Ready](/upstream/definition-of-ready) before sprint planning. Only stories that pass all 9 checks enter the sprint:

| Sprint with unready stories | Sprint with DoR enforcement |
|---|---|
| 8 stories pulled in | 5 stories pulled in |
| 3 completed | 5 completed |
| 2 blocked | 0 blocked |
| 2 in rework | 0 in rework |
| 1 abandoned | 0 abandoned |
| **Net delivery: 3** | **Net delivery: 5** |
| Team morale: frustrated | Team morale: accomplished |

::: warning "We Don't Have Time for Readiness" Is the Most Expensive Sentence in Software
The time "saved" by skipping readiness is borrowed at 5× interest. A 30-minute readiness check prevents a 3-day mid-sprint rewrite. A 2-hour story refinement session prevents a failed sprint. The math is not close.
:::

### Key Takeaway

**Velocity is not how many stories you start — it's how many you finish.** A sprint with 5 ready stories will outperform a sprint with 10 unready stories every time. The Commitment Point exists to protect the team from the most common source of waste: building before understanding.

---

## Scenario 5: The Post-Mortem That Blames

### What the Team Did

A production outage lasted 44 minutes. During the post-mortem meeting, the following was written:

```
Root Cause:
Developer X forgot to test the edge case where JWTs don't
include the "aud" claim. This caused all API requests to
return 403 errors after the APIM policy was deployed.

Action Items:
- Developer X should be more careful with testing
- Developer X must review JWT documentation before
  making auth changes
- Team lead should review Developer X's PRs more closely
```

### Why It Seemed Reasonable

Someone did deploy a change that caused an outage. Identifying who made the mistake and asking them to do better seems like a logical response.

### ✏️ Pause — What's Wrong Here?

Write down your answer before continuing.

---

### What Went Wrong

Two things happened after this post-mortem:

1. **Developer X stopped deploying APIM changes.** They became risk-averse, routing all APIM work to other team members. The team's bus factor for infrastructure changes dropped to 1.

2. **Three months later, the exact same type of incident occurred** — a different developer deployed an APIM policy that hadn't been validated against staging tokens. The post-mortem's action items ("be more careful," "review docs") had done nothing to prevent recurrence because they addressed a person, not a system.

Blame-oriented post-mortems don't prevent incidents. They prevent people from admitting mistakes. And the mistakes don't stop — they just get hidden.

### The Right Way

```markdown
# Post-Mortem: APIM JWT Validation Outage

## Root Cause
A new APIM policy requiring the "aud" claim was deployed directly
to production without staging validation. Existing JWT tokens issued
by Auth0 did not include the "aud" claim, causing all authenticated
API requests to return 403 Forbidden.

## 5 Whys
1. Why did users get 403 errors? → APIM rejected their tokens.
2. Why did APIM reject valid tokens? → The new policy required
   a claim not present in existing tokens.
3. Why wasn't the claim in existing tokens? → Auth0 was not
   configured to include it.
4. Why wasn't Auth0 configuration updated first? → The deployment
   process does not enforce dependency ordering.
5. Why is there no staging validation? → APIM policy changes
   bypass the standard CI/CD pipeline.

## Action Items
| Action | Owner | Due Date | Ticket |
|--------|-------|----------|--------|
| Add staging deployment gate to APIM policy pipeline | @boaz.k | 2026-03-15 | OPS-123 |
| Create JWT test harness that validates token format against all active policies | @julio.m | 2026-03-22 | OPS-124 |
| Add Datadog alert for 403 rate > 5% from APIM in any 5-min window | @alex.g | 2026-03-08 | OPS-125 |
| Audit all token-based policies for backward compatibility | @julio.m | 2026-04-01 | OPS-126 |
```

Every action item changes a **system**, not a person. A staging gate prevents any developer from bypassing staging, not just Developer X. A JWT test harness catches token incompatibilities automatically, not through human vigilance.

::: tip The Blameless Litmus Test
Read every sentence in your post-mortem. If you can replace a person's name with "the deployment process" or "the testing pipeline" and the sentence still makes sense, you've written a blameless post-mortem. If removing the person's name makes the sentence collapse, you've written a blame report.
:::

### Key Takeaway

**Post-mortems that name individuals produce fear. Post-mortems that name systems produce improvements.** The question is never "who made the mistake?" — it's "what allowed the mistake to reach production?" Fix the system, and the next person who makes the same mistake will be caught by the safety net you built.

---

## Scenario 6: The Release Without a Runbook

### What the Team Did

The team finished building a major feature — a new matching algorithm for Someone for Coffee. The code was reviewed, tests passed, and the PM was excited to ship. On Friday at 4pm, the developer merged to main. The CI/CD pipeline deployed to production automatically.

No one wrote a runbook. No one defined SLOs. No one configured alerts. No one prepared a rollback plan.

### Why It Seemed Reasonable

The code was tested. CI passed. "We've done this before — it'll be fine." The team trusted their code and their pipeline.

### ✏️ Pause — What's Wrong Here?

Write down your answer before continuing.

---

### What Went Wrong

Saturday morning, the matching algorithm began returning incorrect results. Users in Tel Aviv were being matched with users in Haifa whose profiles were marked as "Tel Aviv only." The bug was in a geolocation radius calculation that used kilometers instead of miles in one code path.

But no one knew about it until Monday. There were no alerts for matching accuracy. No SLO for match relevance. No runbook describing how to verify the matching algorithm was working correctly. The team had no on-call rotation for the weekend.

By Monday, 47 users had reported bad matches. 12 had uninstalled the app. The team spent Monday morning in panic mode trying to understand what had happened, then rolled back manually — a process that took 2 hours because no one had documented the rollback procedure.

### The Right Way

Before any release crosses the **Delivery Point**, the team completes the operational readiness checklist:

```
DELIVERY POINT CHECKLIST
=========================
[ ] Runbook written — includes: health verification steps,
    rollback procedure, escalation contacts
[ ] SLOs defined — matching accuracy > 95%, match response
    time < 2 seconds, zero cross-region mismatches
[ ] Alerts configured — Datadog monitors for match accuracy
    drop, response time spike, error rate increase
[ ] Rollback plan tested — feature flag kill switch verified
    in staging
[ ] On-call rotation — weekend coverage assigned for first
    72 hours post-release
[ ] Canary deployment — 5% traffic first, monitor for 2 hours,
    then full rollout
```

::: details What the Runbook Should Have Contained
```markdown
# Runbook: Matching Algorithm v2.3

## Health Verification
1. Check matching accuracy dashboard: [link]
   - Expected: > 95% relevant matches (same-city threshold)
   - Alert threshold: < 90% triggers PagerDuty

2. Check match response time: [link]
   - Expected: p95 < 2 seconds
   - Alert threshold: p95 > 5 seconds triggers PagerDuty

3. Check error rate: [link]
   - Expected: < 0.5% 5xx responses
   - Alert threshold: > 2% triggers PagerDuty

## Rollback Procedure
1. Feature flag: Set `matching_v2_enabled` to `false` in LaunchDarkly
   - Effect: All traffic routes to v1 matching algorithm
   - Time to effect: < 30 seconds
   - No deploy needed

2. If feature flag fails:
   - Revert commit: git revert [commit-hash]
   - Deploy: trigger manual pipeline [link]
   - ETA: 15 minutes

## Escalation
- Primary on-call: @alex.g (phone: +972-XXX-XXXX)
- Secondary: @julio.m
- Engineering Manager: @boaz.k (escalate if unresolved > 30 min)
```
:::

::: danger Friday Afternoon Deploys
Deploying a major feature on Friday afternoon with no weekend coverage is not confidence — it's negligence. The UDOO framework's Delivery Point checklist exists specifically to prevent this pattern. If the runbook isn't written, the alerts aren't configured, and the on-call isn't assigned, the release is not ready — regardless of whether the code passes tests.
:::

### Key Takeaway

**Code that works is not the same as a release that's ready.** The Delivery Point is the gate between "the feature is built" and "the feature is safe to operate." Crossing it without a runbook, SLOs, alerts, and a rollback plan is like driving without brakes — everything is fine until the first curve.

---

## Summary: The Six Patterns

| # | Scenario | The Mistake | The Fix |
|---|----------|-------------|---------|
| 1 | Story that's an epic | Scope hidden behind vague language | Split until each story is 1–3 days |
| 2 | Initiative as solution | Skipping problem framing | Name the problem, not the feature |
| 3 | Untestable ACs | Vague language that delegates definition of "correct" | Given/When/Then with specific values |
| 4 | Sprint without ready stories | Starting to "feel productive" | Enforce DoR before sprint entry |
| 5 | Blame post-mortem | Naming people instead of systems | Fix processes, not people |
| 6 | Release without runbook | Trusting code, ignoring operations | Complete Delivery Point checklist |

::: tip The Meta-Lesson
All six scenarios share a common root cause: **skipping a gate because it felt like overhead.** The story didn't need splitting ("it's obvious"). The initiative didn't need problem framing ("we know what to build"). The ACs didn't need specificity ("the developer understands"). The sprint didn't need readiness ("we need to start"). The post-mortem didn't need blamelessness ("someone has to be accountable"). The release didn't need a runbook ("the code works").

Every gate in the UDOO framework exists because someone, somewhere, paid the price of skipping it. The framework is not theory — it is scar tissue.
:::

---

## Workshop Facilitator Notes

If you're running this as a team workshop:

1. **Time:** Allow 10–15 minutes per scenario (60–90 minutes total)
2. **Format:** Read each scenario aloud. Give the team 2 minutes of silent thinking. Then discuss. Then reveal.
3. **Scoring:** Give teams 1 point for each scenario they identify correctly before the reveal. Most teams score 3–4 out of 6 on their first attempt.
4. **Debrief question:** "Which of these six patterns has our team fallen into in the last 6 months?" This question produces the most valuable discussion.
5. **Follow-up:** After the workshop, have each team member commit to watching for one specific pattern in the next sprint.

---

**Next tutorial:** [E2E Initiative Lifecycle →](./e2e-initiative)
