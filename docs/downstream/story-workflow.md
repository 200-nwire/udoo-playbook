# Story Workflow

<span class="phase-badge downstream">🟢 Downstream</span>

## The Moment This Page Is For

It's Wednesday. Three stories are "In Dev." One has a PR open — has been for two days. Another is technically "done" but the developer forgot to move it in Jira so QA hasn't picked it up. The third is blocked on a backend endpoint that isn't ready yet, but nobody flagged the dependency.

The sprint ends Friday. None of the three will make it to Released.

At standup, everyone is busy. The board looks active. But busyness and progress are not the same thing. The difference between a team that ships reliably and one that is always "almost there" is not effort — it is the discipline of moving work through defined states, explicitly, every time.

---

Every story follows a strict state machine from the moment it is pulled into development. States are visible in Jira. Transitions have entry and exit criteria.

## The State Machine

```
┌──────────────┐
│ Ready to Pull│  ← Upstream hands off (DoR met)
└──────┬───────┘
       │ Dev pulls
┌──────▼───────┐
│   In Dev     │  ← Implementation + unit tests
└──────┬───────┘
       │ PR opened
┌──────▼───────┐
│  In Review   │  ← Peer code review
└──────┬───────┘
       │ Approved + merged
┌──────▼───────┐
│   In Test    │  ← QA tests against AC + Gherkin
└──────┬───────┘
       │ All AC pass, no P1/P2 bugs
┌──────▼───────┐
│   Released   │  ← Deployed to production
└──────┬───────┘
       │ 48h stability window
┌──────▼───────┐
│   Observed   │  ← Signals monitored
└──────┬───────┘
       │ Stable. Learning captured.
┌──────▼───────┐
│   Improved   │  → Next initiative if needed
└──────────────┘
```

## State Reference

| State | Entry Criteria | Work Done in This State | Exit Criteria |
|-------|---------------|------------------------|---------------|
| **Ready to Pull** | DoR fully met | — | Developer pulls into In Dev |
| **In Dev** | Pulled from Ready | Implementation + unit tests | PR opened; self-tested by dev |
| **In Review** | PR opened | Peer code review | At least 1 approval; no blocking comments |
| **In Test** | Approved + merged to feature branch | QA testing against all AC; Gherkin scenarios run | All AC pass; no P1/P2 bugs open |
| **Released** | QA sign-off + deployment approved | Deploy to production; smoke test | DoD met; PM notified |
| **Observed** | Released to production | Monitor signals, error rates, user feedback | Stable for 48h; no regression detected |
| **Improved** | Observed (issue found or learning captured) | Log new story or initiative | Work item created |

---

## Story Kick-Off: The Three Amigos Ceremony

The Story Kick-Off is a **15-minute time-boxed session** held before a developer writes the first line of code. Three perspectives are required at the table:

| Role | Question They Ask | What They Bring |
|------|------------------|-----------------|
| **Product Manager** | *"Is this what the user needs?"* | Intent, acceptance criteria, priority context |
| **Developer** | *"How would I build this?"* | Technical feasibility, edge cases, dependencies |
| **QA Engineer** | *"How would I break this?"* | Test scenarios, boundary conditions, risk areas |

### How to Run a Kick-Off

1. **PM reads the story aloud** — acceptance criteria, personas, and business context. No Jira ticket ID shorthand; speak the intent.
2. **Developer sketches the technical approach** — components affected, APIs involved, data flow. This surfaces hidden dependencies.
3. **QA challenges the edges** — "What if the user has no data? What if the API times out? What if the value is negative?" Every question that doesn't have a clear answer becomes a new AC or Gherkin scenario.
4. **Agreement** — The three roles agree on the set of Gherkin scenarios that will define "done" for this story. These are committed to the feature file before coding begins.

::: tip Why 15 Minutes?
Kick-offs that run longer than 15 minutes indicate the story is not ready. If the team cannot agree on what "done" looks like in 15 minutes, the story needs refinement and should go back to Upstream.
:::

### Kick-Off Example: Living Wondrously — Prompt Carousel

**Story:** *As a journal user, I want to see a rotating carousel of prompts so that I am inspired to write.*

| Role | Contribution |
|------|-------------|
| PM | "The carousel should show 3 prompts at a time. Swiping advances to the next set. Prompts are sourced from the prompt library. The user should be able to tap a prompt to start a new entry." |
| Dev | "What happens if the prompt library has fewer than 3 prompts? Do we repeat? Do we show a placeholder? Also, should the carousel auto-advance or only on swipe?" |
| QA | "What if the prompt API is down — do we show an empty carousel or cached prompts? What about accessibility — can a screen reader navigate the carousel? What if the user taps a prompt but hasn't finished their current entry?" |

This 15-minute session produced **7 Gherkin scenarios** that would not have existed otherwise — including the API-down scenario that later caught a real production issue.

---

## What "In Dev" Means

A developer in the **In Dev** state is responsible for:

1. **Understanding the story fully** before writing any code. If there is ambiguity, stop and use the Story Kick-Off ceremony (15-min three-amigos call with Dev + QA + PM).
2. **Implementing to the acceptance criteria** — not to what "seems right." The AC is the spec.
3. **Writing unit and component tests** that mirror the AC. For the negative balance bug example, a unit test like this would have caught it immediately:

```javascript
// WalletCard.test.js
describe('WalletCard balance display', () => {
  it('displays negative balance correctly', () => {
    const wrapper = mount(WalletCard, { props: { balance: -125.50 } })
    expect(wrapper.text()).toContain('-$125.50')
  })

  it('displays zero balance correctly', () => {
    const wrapper = mount(WalletCard, { props: { balance: 0 } })
    expect(wrapper.text()).toContain('$0.00')
  })

  it('does not clamp negative values to zero', () => {
    const wrapper = mount(WalletCard, { props: { balance: -0.01 } })
    expect(wrapper.text()).not.toContain('$0.00')
    expect(wrapper.text()).toContain('-$0.01')
  })
})
```

4. **Opening the PR with a description** that links the Jira Story and describes what changed and why.

## What "In Review" Means

Code review is not optional and is not a formality. Reviewers check:

- Does this implementation satisfy all the ACs?
- Are there edge cases not covered by the tests?
- Is there anything that could cause a regression in adjacent functionality?
- Does the code follow team conventions?

A reviewer who approves a story knowing it is incomplete is taking on the technical debt themselves.

## What "In Test" Means

QA owns this state. A QA engineer:

1. Tests all acceptance criteria in the target environment
2. Runs all Gherkin scenarios in AssertThat — they must be green
3. Performs exploratory testing around the edges of the story
4. Documents any defects found as Jira bugs with severity, impact, steps to reproduce

**No story exits "In Test" with an open P1 or P2 bug.**

## What "Observed" Means

A story entering **Observed** has been released to production, but the team's responsibility is not over. Observed is a **48-hour stability window** where the team actively monitors the story's real-world impact.

### What Happens During Observation

| Activity | Who | Frequency |
|----------|-----|-----------|
| Check error rates in monitoring dashboard | Dev who built it | Twice daily |
| Review user feedback channels (support, analytics) | PM | Daily |
| Validate Gherkin smoke suite still passes against production | QA | Once after deploy, once at 24h |
| Confirm observability events are firing correctly | Dev + QA | Once after deploy |

::: warning Observed Is Not "Forget About It"
A common anti-pattern is treating Observed as a rubber-stamp state. The team marks "Released" and immediately moves on. When a regression surfaces 36 hours later, no one is watching. Observed exists to catch exactly this scenario.
:::

### Living Wondrously Example: Star Increment

After deploying the star-increment feature (users earn stars for consecutive journal entries), the team monitored during Observed and discovered that the star count was incrementing twice for users in the UTC+12 timezone. The day boundary logic used the server clock (UTC) but the "consecutive day" check used the client's local date. This was caught at hour 19 of the Observed window — before any user filed a complaint.

### Exit Criteria for Observed

- 48 hours have passed since deployment
- No new P1/P2 bugs linked to the story
- Error rates have not increased beyond the pre-release baseline
- Observability events are firing as expected
- PM has confirmed no negative user feedback trends

If any criterion fails, the story moves back to **In Dev** (for a fix) or forward to **Improved** (if the issue requires a new story).

---

## What "Improved" Means

**Improved** is not a failure state — it is a learning state. A story reaches Improved when the team has captured actionable insight from the Observed period and created follow-up work.

### Types of Improvement

| Type | Trigger | Output |
|------|---------|--------|
| **Bug fix** | Regression or edge case found during Observed | New bug story, linked to original |
| **Performance tuning** | Latency or resource usage higher than expected | New tech story with SLO target |
| **UX refinement** | User feedback suggests confusion or friction | New story in next iteration |
| **Operational hardening** | Missing alerts, runbook gaps, or flaky tests | Tech debt story + runbook update |
| **No action needed** | Observation period clean, no issues | Story is closed. Learning logged in retro. |

::: info Improved Closes the Loop
Improved is what separates a reactive team from a learning team. Without it, the same mistakes compound. With it, every release makes the next one safer.
:::

### Living Wondrously Example: Past Entries Scroll

After releasing the "Past Entries" infinite-scroll feature, the Observed period revealed that scroll performance degraded significantly after 200+ entries. The team logged an Improved story: *"Virtualize past-entries list for users with 200+ entries."* This became a tech story in the next iteration with a clear SLO: render 1,000 entries at 60fps on mid-range Android devices.

---

## Blocking vs. Non-Blocking Bugs Found in Test

| Severity | Blocks release? | Action |
|----------|----------------|--------|
| P0 / P1 | Yes | Story goes back to **In Dev**. Sprint goals reassessed. |
| P2 | Yes (usually) | Discuss with PM and Tech Lead. |
| P3 | No | Log as bug. Add to backlog for next iteration. |

---

## Handling Blocked Stories

A story is **blocked** when it cannot make forward progress due to an external dependency, environment issue, missing information, or upstream failure. Blocked stories are poison to flow — they consume capacity without producing value.

### The 4-Hour Rule

If a story has been blocked for **4 hours**, the developer must escalate. Not tomorrow. Not at standup. Four hours.

```
0–1h:   Developer attempts to resolve independently
1–2h:   Developer asks the team (Slack, quick call)
2–4h:   Developer raises to Tech Lead with a clear blocker statement
4h+:    Tech Lead escalates to Delivery Manager
        Blocker is flagged on the board with a red icon
        Daily standup includes blocker status update
```

::: warning Don't Let Blockers Silently Age
The most expensive blockers are the quiet ones. A developer who says "I'm waiting on the API team" in Monday standup and repeats it unchanged on Thursday has lost four days of capacity. The 4-hour rule exists to prevent this.
:::

### Visualizing Blockers on the Board

Every blocked story must be visually distinct on the Jira board:

| Element | How |
|---------|-----|
| **Flag** | Jira impediment flag (red) — visible in all board views |
| **Blocker label** | `BLOCKED: [reason]` prepended to the story title |
| **Linked blocker** | Jira "is blocked by" link to the blocking issue or external ticket |
| **Daily update** | Comment on the story every day it remains blocked, with current status |
| **Escalation tag** | After 4h: add `@tech-lead`; after 24h: add `@delivery-manager` |

### What the Delivery Manager Does with a Blocker

The DM's job is not to fix the blocker — it is to **remove the organizational obstacle**. This might mean:

- Scheduling a cross-team call with the blocking team's lead
- Escalating to the programme level if the blocker is systemic
- Re-prioritizing the backlog to swap in unblocked work
- Communicating the impact to stakeholders if the blocker threatens a milestone

### Living Wondrously Example: Authentication Blocker

During one iteration, the "Social Login" story was blocked because the OAuth provider's sandbox environment was down for maintenance (no ETA). The developer raised the blocker at hour 3. The Tech Lead reassigned the developer to an unblocked story within the hour. The DM contacted the provider's support and got an ETA of 48 hours. The story was pulled back to Ready and picked up once the environment recovered — no capacity waste.

---

## Story Splitting Mid-Sprint

Sometimes a story that passed the Definition of Ready turns out to be larger than estimated once development begins. The developer discovers hidden complexity, undocumented edge cases, or an API that behaves differently than expected. When this happens, the answer is not to power through — it is to **split the story**.

### When to Split

| Signal | Example |
|--------|---------|
| Estimate was 5 points, actual effort is trending toward 13+ | Developer is on day 3 of a 2-day story |
| Story has multiple independent behaviours | "Create, edit, and delete journal entries" is actually three stories |
| One AC depends on infrastructure not yet available | "Display real-time notifications" requires a WebSocket service that doesn't exist |
| Testing reveals the story needs a prerequisite | "Show matching profiles" needs a matching algorithm story first |

### How to Split Without Losing Context

1. **Stop coding.** Do not split while continuing to work on the original. Splitting requires clear thinking.
2. **Identify the vertical slice.** The first story should deliver end-to-end value, even if it is minimal. "User can create a journal entry with a prompt" is a vertical slice. "Build the entry creation API" is not.
3. **Create the new stories in Jira:**
   - Original story keeps the work already done. Its AC is narrowed to what is completable in this iteration.
   - New story (or stories) gets the remaining AC with full context: link to original, copy relevant Gherkin scenarios, reference technical notes from the developer.
4. **Update estimates.** The original story's estimate is revised down. The new stories are estimated fresh.
5. **Inform the team.** The split is announced in standup. PM re-prioritizes the new stories.
6. **Move Gherkin scenarios.** Scenarios that belong to the split-off story are moved to a new feature file. Scenarios that belong to the original stay.

::: details Example: Splitting "Someone for Coffee — Profile Matching"
**Original story:** *As a user, I want to see my top 5 coffee matches so that I can choose someone to meet.*

During development, the team discovered that the matching algorithm needed to account for timezone differences, preferred meeting locations, and dietary preferences — none of which were in the AC.

**Split result:**
- **Story A (this iteration):** *Show top 5 matches based on shared interests.* Simple scoring: count of overlapping interest tags. No location or timezone logic.
- **Story B (next iteration):** *Refine matching with timezone and location weighting.* Requires geolocation API integration and timezone-aware scheduling.
- **Story C (next iteration):** *Add dietary preference filter to matching.* Requires new profile field and database migration.

Each story had its own Gherkin file. Story A shipped in that iteration. Stories B and C shipped in the following iteration with proper DoR.
:::

### The Golden Rule of Splitting

::: tip Always Split Vertically
A vertical split delivers a thin slice of end-to-end functionality. A horizontal split delivers a layer (API only, UI only, database only) that a user cannot see or use. Horizontal splits create integration risk. Vertical splits create shippable increments.
:::

### What Not to Do

- **Don't split and forget.** The new stories must go through DoR before they enter development.
- **Don't split into "Part 1" and "Part 2."** Each story must have independent value.
- **Don't split to hide scope creep.** If the original estimate was wrong because the story was poorly refined, that is a retrospective item — not just a splitting exercise.
- **Don't leave orphaned Gherkin.** Every scenario must belong to exactly one story after a split.
