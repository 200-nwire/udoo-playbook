# Two Products, One Team

<span class="phase-badge upstream">🔵</span> <span class="phase-badge downstream">🟢</span> <span class="phase-badge onstream">🟠</span> <span class="phase-badge offstream">🟣</span>

**Difficulty:** 🔴 Advanced
**Time:** 90 minutes
**Best for:** PMs managing multiple products, team leads, anyone who wants to see the full framework under real pressure
**Purpose:** Walk through a full quarter where every phase runs concurrently, a reopen trigger fires, and strategic synthesis forces a direction change — across two products sharing one dev team.

---

## Why This Tutorial Exists

The Growth Path teaches the framework one step at a time. The phase pages teach each practice in isolation. This tutorial does neither. It puts the entire framework under stress — the kind of stress that happens when a real PM runs two real products with one team, a quarter goes sideways, and the framework has to hold.

If UDOO only works when things go smoothly, it's not a framework — it's a wish. This is the stress test.

---

## The Cast

| Person | Role | Context |
|--------|------|---------|
| **Noa** | PM | Owns two products. Sharp, overloaded, runs on evidence. |
| **Lior** | PO | Owns the delivery backlog for both products. The one who says "is this story actually ready?" |
| **Tal** | Designer | Core Trio member. Sees interaction states everyone else misses. |
| **Oren** | Tech Lead | Core Trio + Three Amigos. The bridge between discovery and refinement. |
| **Roee** | Developer | On the team for four months. On-call every third week. |
| **Dina** | QA Lead | Three Amigos member. Asks "how do I test this?" before anyone writes code. |
| **Yael** | CSM | Offstream. Talks to customers daily. Logs feedback nobody else sees. |

---

## The Two Products

**Reflect** — a reflective journaling app. Users write daily entries, track streaks, and return to past reflections. The current initiative is "Return Experience" — making the app feel welcoming when Sara comes back after a gap, instead of punishing her with a broken streak.

**PathFinder** — a halacha study tool. Users follow structured learning paths through religious texts. The current initiative is "Path Discovery" — helping Yossi find and follow a learning path that matches his level and interests.

One team of five developers builds both. Noa is PM for both. Oren is tech lead for both. The capacity is shared.

---

## Q4 Begins: Week 1

### The State of Things

Noa opens the quarter with two initiative briefs on the wall.

**Reflect — Return Experience Initiative:**
- Primary persona: Sara, returning after a gap
- Problem: the app treats inconsistency as failure
- Success metric: week-4 retention from 9% → 25%
- Status: Feature A (Return Screen) shipped in Q3. Feature B (Gentle Re-engagement) is in Feature Discovery. Feature C (Streak Forgiveness) is in Later.
- Two features shipped. Retention moved from 9% to 17%. Better, but below target.

**PathFinder — Path Discovery Initiative:**
- Primary persona: Yossi, searching for a learning path
- Problem: users can't find paths that match their level — they browse randomly and abandon
- Success metric: path-start rate from 12% → 35%
- Status: Discovery complete. Feature A (Path Recommendations) is ready for the Epic Loop. Feature B (Path Preview) is in Feature Discovery.

### The Portfolio Decision

Noa has one team and two products. She cannot do everything. The [portfolio allocation](/portfolio/) principle says: 70% Downstream, 20% Upstream, 10% Onstream/tech debt.

For five developers, that means:
- **3.5 developers on delivery** (Downstream) — split between the two products
- **1 developer supporting discovery** (Upstream) — spikes, feasibility checks, prototypes
- **0.5 developer on reliability** (Onstream) — tech debt, monitoring, on-call support

Noa makes the call:

| Product | Phase | Allocation | What happens this sprint |
|---------|-------|-----------|------------------------|
| PathFinder | Downstream | 2 developers | Epic Loop for Path Recommendations → stories → dev starts |
| Reflect | Upstream | Noa + Tal + Oren (Core Trio) | Feature Discovery for Gentle Re-engagement |
| Reflect | Downstream | 1.5 developers | Finishing last stories from Return Screen |
| Both | Onstream | 0.5 developer (rotating) | On-call, monitoring, tech debt |

This is the pipeline working. Noa is discovering Reflect's next feature while the team delivers PathFinder's current one. She's not waiting for one to finish before starting the other. She's running two products through different phases simultaneously.

::: tip The upstream sprint model for multi-product PMs
Noa doesn't do discovery for Reflect on Monday, PathFinder on Tuesday, and context-switch between them. She runs a single [upstream sprint](/upstream/scrum-for-discovery) that contains discovery activities for both products. One backlog, one standup ("what did I learn yesterday across both products?"), one sprint review. The structure prevents shallow discovery on everything and forces deep discovery on whatever is prioritized this sprint.

→ [Roles — PM on multiple projects](/guide/roles)
:::

---

## Weeks 2–3: Discovery and Delivery Run in Parallel

### Upstream: The Doctor's Visit for Reflect

Noa, Tal, and Oren sit down for the Gentle Re-engagement feature. They run the [Discovery Workshop](/upstream/station-1-vision) — the doctor's visit.

**Station 1 — "What brings you in today?"**
Sara has been away for five days. She opens the app. What does she see?

Right now: a broken streak counter, zero reflection count for this week, and a "Start writing" button that feels like an accusation. Sara closes the app.

**Station 2 — "Let me examine — where does it hurt?"**
The Core Trio maps the assumptions:

| Assumption | Confidence | If wrong |
|-----------|-----------|---------|
| Sara feels guilt when she sees the broken streak | Medium | The entire feature premise is wrong |
| Sara wants to be reminded of past positive entries | Low | The re-engagement flow might need a different anchor |
| A gentle notification on day 3 of absence would bring Sara back | Low | The notification could feel like nagging, making things worse |

Two low-confidence assumptions. These need testing before the team builds anything.

**Station 3 — "Walk me through your daily routine"**
Tal maps Sara's return journey. Seven steps. At step 3 — the moment Sara sees her streak — Tal says: "We don't actually know if Sara cares about the streak. The support tickets about streaks come from power users, not from returning users. We might be solving the wrong person's problem."

Noa writes it down. This is a risky assumption that could change everything.

**Station 4 — "Here are three treatment options"**
Oren presents three approaches:

| Option | Cost | Impact | Risk |
|--------|------|--------|------|
| A: Redesign the return screen to hide the streak and show a warm welcome | M | High if streak is the problem | Doesn't address notification |
| B: Add a gentle push notification on day 3 with a past positive entry | S | Medium if Sara responds to notifications | Could feel like nagging |
| C: Replace the streak mechanic entirely with a "momentum" model that doesn't punish gaps | L | High if the core mechanic is the problem | Expensive and risky — changes the product's core loop |

**Station 5 — "Here's the prescription"**
Noa picks Option A for Now, Option B for Next. Option C goes to Later — too expensive without more evidence.

The Feature Brief is written. The Core Trio signs it.

### Downstream: PathFinder Enters the Epic Loop

While Noa discovers Reflect's next feature, Lior runs the Epic Loop for PathFinder's Path Recommendations feature.

Lior, Oren, and Dina — the Three Amigos — sit down with the [story map](/upstream/story-mapping). Twelve stories across three epics. Lior draws [The Cut](/upstream/the-cut): four stories above the line (the minimum for Yossi to see a recommendation and start a path), eight below.

Dina asks: "What happens when Yossi has no reading history? The recommendation engine needs input — where does it come from for a new user?"

Nobody had thought about this. It's an edge case that lives in the gap between two stories — exactly the kind of thing story mapping catches that story lists miss.

Lior adds a fifth story above The Cut: "First-time path selection" — a manual preference step for users with no history. The Cut adjusts. Five stories above, seven below.

The [grooming session](/upstream/grooming-session) refines the five stories. Each passes the [9-point DoR](/upstream/definition-of-ready). By end of week 3, two developers are building PathFinder stories while Noa finishes the Reflect feature brief.

---

## Week 5: The Reopen Trigger Fires

Noa checks the Reflect dashboard. Two features shipped in the Return Experience initiative (Return Screen in Q3, and the final Return Screen stories completed in week 4). The success metric was: week-4 retention from 9% → 25%.

Current: 17%. Same as six weeks ago. Two shipped features, zero additional movement.

She opens the [Initiative Brief](/reference/initiative-template). At the bottom, the reopen triggers:

- [x] **The success metric hasn't moved after two shipped features**
- [ ] Offstream data contradicts the primary persona
- [ ] A P0 incident reveals that a core assumption was wrong

The first trigger is hit.

Noa doesn't panic. The framework told her this might happen. The reopen trigger says: stop feature delivery, return to Station 2 with new evidence.

She pauses the Gentle Re-engagement feature. The stories that were about to enter the Epic Loop go back to "mapped, not refined." The developers allocated to Reflect shift to PathFinder, which has a healthy backlog of ready stories below The Cut.

::: warning This is the framework working, not failing
A PM who doesn't have reopen triggers keeps building. Three more features ship. The metric stays at 17%. A quarter is wasted. The reopen trigger caught the problem in week 5 — early enough to redirect, late enough to have real evidence.
:::

### The Evidence Gathering

Noa asks Yael, the CSM, for every piece of customer signal about Reflect from the past two months.

Yael pulls up the [feedback loop](/offstream/feedback-loop) data:

| Signal | Source | Count | Theme |
|--------|--------|-------|-------|
| "I don't know what to write when I come back" | CS Feedback | 8 accounts | Content friction, not streak friction |
| "The streak reset makes me feel bad" | CS Feedback | 3 accounts | Streak pain — but only power users |
| "I stopped because the app felt empty after a week away" | Churn interview | 4 churned users | Emptiness, not guilt |
| "I came back but there was nothing waiting for me" | Support ticket pattern | 12 tickets | No re-engagement hook |

Noa reads the signals. The Initiative Brief assumed Sara feels guilt about broken streaks. The feedback says something different: Sara feels emptiness. The app has nothing for her when she returns — no warmth, no memory, no reason to stay. The streak is a symptom, not the cause.

The persona might still be right — returning users are the right focus. But the problem framing is wrong. "The app punishes inconsistency" should be "the app has nothing to offer a returning user."

This changes everything. The Gentle Re-engagement feature (Option A: hide the streak, show warmth) was treating the symptom. The real treatment is Option C territory — not replacing the streak mechanic, but filling the emptiness with something valuable. A past entry. A prompt. A reason to write today that isn't "you should have written yesterday."

---

## Week 6: Strategic Synthesis — Mid-Quarter

Noa doesn't wait for quarter-end. The signal is strong enough to run [Strategic Synthesis](/offstream/strategic-synthesis) now.

She writes the synthesis document:

**What the metrics say:**
Week-4 retention at 17%, unchanged after two features. The Return Screen feature moved it from 9% to 17% — that was real impact. The second batch of Return Screen stories (polish and edge cases) added nothing to the number.

**What customers say:**
Health scores: 4 accounts moved from green to amber in the past 6 weeks. Feedback themes: "emptiness on return" (12 signals), not "guilt about streaks" (3 signals). The emptiness theme is 4x stronger than the streak theme.

**What operations say:**
Reflect is stable. No incidents. Error budget is healthy. This is not a reliability problem.

**What the market says:**
No competitor moves. No regulatory changes. The market hasn't shifted — the team's understanding of the problem has.

**Synthesis:**
The initiative direction is correct — returning users are the right focus, and the retention metric is the right measure. But the problem framing is wrong. We diagnosed "the app punishes inconsistency" when the real diagnosis is "the app offers nothing to a returning user." Feature A (Return Screen) worked because it partially addressed emptiness by showing past entries. Features focused on streaks will not move the metric further.

**Recommendation: Direction challenged.**
Reopen discovery at Station 2 with the updated evidence. Reframe the problem statement. The Gentle Re-engagement feature should be redesigned around content value on return, not streak hiding.

Noa presents this to leadership. It's a 15-minute conversation. The evidence is clear. Leadership agrees: continue the initiative, reframe the problem, redesign the next feature.

---

## Week 7: A P1 Incident on PathFinder

Thursday night. Roee is on call. At 10:22pm, an alert fires: PathFinder's recommendation engine is returning empty results for all users.

Roee opens the [runbook](/onstream/runbook-template). It exists — because the team wrote it during the [release gate](/guide/own-what-you-ship) before Path Recommendations went live.

The runbook says:

> **Empty recommendations:** Check the recommendation cache in Redis. If the cache is empty, the nightly batch job may have failed. Check the batch job logs at [link]. If the batch job failed, trigger a manual re-run with `node scripts/rebuild-recommendations.js`. Expected recovery: 5–10 minutes.

Roee checks the cache. Empty. Checks the batch job logs. Failed at 9:47pm — disk space issue on the batch worker. He frees disk space, re-runs the job. Recommendations are back at 10:38pm. Total downtime: 16 minutes. Time to understand what happened: 3 minutes (because the runbook existed).

Without the runbook, this would have been Roee's midnight story from [Own What You Ship](/guide/own-what-you-ship) — 40 minutes of reading code, messaging Oren, reverse-engineering the system. The runbook compressed 40 minutes into 3.

### The Post-Mortem

The next morning, the team runs a [blameless post-mortem](/onstream/post-mortem-template).

**Root cause:** The batch worker's disk fills up when recommendation data exceeds 2GB. The data grew past this threshold when the team added path metadata in sprint 3. Nobody monitored disk space on the batch worker.

**Action items:**
1. Roee adds disk space monitoring and alert to the batch worker — due Friday
2. Oren adds a log rotation config to the batch job — due next sprint
3. Lior adds "batch worker health" to the PathFinder runbook — due Friday

All three actions have owners, due dates, and are tracked in Jira. This is not a post-mortem that sits in a doc nobody reads — it's a commitment.

### The Signal Hidden in the Incident

During the post-mortem, Dina mentions something: "The recommendation engine returned empty results for 16 minutes. But nobody noticed until the alert fired. No user reported it. No support ticket came in."

Noa writes this down. Zero user reports during a feature outage means one of two things: users weren't using the feature at that hour, or users didn't care enough about the feature to report it missing.

She checks the analytics. Path Recommendations has a 23% adoption rate after 4 weeks. The target was 35% path-start rate. The feature is live but underperforming.

This isn't an incident signal — it's an Offstream signal. It goes into the [feedback loop](/offstream/feedback-loop) as a usage analytics data point. Noa adds it to the PathFinder initiative's assumption register: "We assumed users would discover recommendations organically. Adoption at 23% suggests they might not be finding them."

---

## Weeks 8–10: Two Products, Adjusted Course

### Reflect: Reopened Discovery

Noa reruns Station 2 with the new evidence. The problem statement changes:

**Before:** "Sara cannot maintain her journaling habit because the app treats inconsistency as failure, resulting in 83% of returning users leaving within a week."

**After:** "Sara has no reason to open the app after a gap because it offers nothing of value when she returns — no memory of what she wrote, no prompt to write again, no warmth — resulting in 83% of returning users leaving within a week."

The Gentle Re-engagement feature is redesigned. Instead of hiding the streak (treating the symptom), the return screen now surfaces Sara's best past entries and offers a low-friction prompt: "You wrote this three weeks ago. Want to add to it?" The prompt gives Sara a reason to write — not guilt, not obligation, but curiosity about her own past words.

The Feature Brief is rewritten. The Core Trio signs it. The Epic Loop begins.

### PathFinder: Delivery Continues, Discovery Starts

PathFinder's Path Recommendations feature is in Downstream. Stories ship steadily. But the 23% adoption rate nags at Noa.

She starts a lightweight discovery for PathFinder's Feature B (Path Preview) — but reframes it. The original feature assumed users would find paths through recommendations. The low adoption suggests they might need a different entry point.

Noa asks Yael to interview three users who started paths and three who didn't. The interviews reveal: users who didn't start paths said they couldn't tell what a path contained before committing. The recommendation showed a title and a topic — but not what the learning experience would feel like.

Feature B (Path Preview) becomes the priority. It's a 30-second preview of the first lesson in a path — enough for Yossi to feel what the learning will be like before committing. This directly addresses the adoption gap.

---

## Week 12: Quarter-End Strategic Synthesis

Noa runs the full [Strategic Synthesis](/offstream/strategic-synthesis) for both products.

### Reflect Synthesis

**What the metrics say:** Week-4 retention moved from 17% to 22% in the final three weeks — after the redesigned return experience shipped. The trend line is heading toward the 25% target.

**What customers say:** Yael reports: "Three accounts that were amber went back to green. Two users specifically mentioned the 'past entries' feature on return." Feedback loop signals shifted from "emptiness" (declining) to "I forgot I wrote that" (emerging positive theme).

**What operations say:** Stable. No incidents.

**Recommendation: Direction confirmed.** Continue the initiative. The reframed problem statement is working. Feature C (the next slice) should deepen the "returning to past entries" experience.

### PathFinder Synthesis

**What the metrics say:** Path-start rate moved from 12% to 19%. Below the 35% target but trending upward. Path Preview shipped in week 10 and the data is only two weeks old.

**What customers say:** Early signal from Yael: "Two users said the preview made them confident enough to start a path they'd been looking at for weeks."

**What operations say:** One P1 incident (recommendation cache). Resolved in 16 minutes. Runbook effective. Action items completed.

**Recommendation: Direction confirmed.** Continue but adjust: the next feature should focus on path completion (users who start but don't finish), not path discovery (which is now partially solved).

---

## What This Quarter Taught

Noa managed two products through a full quarter. Here's what the framework handled that intuition alone could not:

### The Pipeline Prevented Idle Time
While Reflect was in discovery (weeks 2–5), PathFinder was in delivery. When Reflect's reopen trigger fired and paused its delivery, developers shifted to PathFinder without a gap. The [70/20/10 allocation](/portfolio/) and the [spiral pipeline](/upstream/spiral-model) ensured that upstream always fed downstream — across both products.

### The Reopen Trigger Saved a Quarter
Without the trigger, Noa would have shipped the Gentle Re-engagement feature as originally designed — hiding streaks, adding warmth. It would have moved retention from 17% to maybe 19%. The reframed version moved it to 22% in three weeks. The difference: treating the cause (emptiness) instead of the symptom (streak guilt). The reopen trigger forced Noa to stop and look at the evidence instead of shipping the plan.

### The Runbook Saved a Night
Roee resolved a P1 in 16 minutes instead of 53. The 37 minutes saved are not just Roee's sleep — they're customer trust that wasn't eroded.

### The Feedback Loop Connected Two Insights
Yael's CS Feedback data ("emptiness on return") changed the Reflect problem framing. The PathFinder incident's zero-user-reports signal revealed an adoption gap. Both signals entered the same feedback loop, were reviewed in the same weekly triage, and influenced the next discovery cycle for their respective products. Without the loop, both signals would have been Slack messages that faded by Thursday.

### Strategic Synthesis Made the Pivot Safe
"Direction challenged" is a scary recommendation. But when it comes with five inputs — metrics, health scores, feedback themes, operations data, market signals — it's not a panic. It's evidence-based course correction. Noa presented it in 15 minutes. Leadership agreed because the data was clear. No drama. No blame. Just: "the evidence says our framing was wrong, here's what we know now, here's the adjusted plan."

---

## The Framework Map

Every practice in the playbook appeared in this quarter. Here's where:

| Practice | When it appeared | What it prevented |
|----------|-----------------|-------------------|
| [Portfolio allocation](/portfolio/) | Week 1 — capacity split | Idle developers, starved discovery |
| [Discovery Workshop (5 stations)](/upstream/station-1-vision) | Weeks 2–3 — Reflect Feature B | Building without validating assumptions |
| [Story Mapping + The Cut](/upstream/the-cut) | Week 3 — PathFinder Epic Loop | Refining 12 stories when 5 would do |
| [Three Amigos grooming](/upstream/grooming-session) | Week 3 — PathFinder DoR | "What about new users?" edge case missed |
| [Reopen Triggers](/reference/initiative-template) | Week 5 — metric didn't move | Another quarter of building against wrong framing |
| [Feedback Loop](/offstream/feedback-loop) | Week 5 — Yael's CS data | Evidence invisible to PM, decision made on gut |
| [Strategic Synthesis](/offstream/strategic-synthesis) | Week 6 — mid-quarter | Slow-drifting direction without explicit checkpoint |
| [Runbook](/onstream/runbook-template) | Week 7 — PathFinder P1 | 40 minutes of midnight debugging |
| [Post-Mortem](/onstream/post-mortem-template) | Week 8 — after incident | Same disk issue recurring next month |
| [Health Scores](/offstream/health-score) | Week 12 — quarter review | Amber accounts invisible until churn |
| [Direction Map](/guide/close-the-loop) | Week 12 — both products | Next quarter planned from assumptions, not evidence |

---

## The Principle

The framework doesn't prevent problems. It makes problems visible early enough to fix, small enough to handle, and specific enough to learn from.

A PM without the framework would have had the same quarter — two products, one team, a metric that didn't move, an incident at night, customer signals scattered across Slack. The difference is what happens with those signals. Do they accumulate silently until a quarter is wasted? Or do they travel a structured path — from customer to CSM to feedback loop to PM to synthesis to decision — fast enough to change course while it still matters?

That path is the framework. This tutorial is what it looks like when the path holds.

→ [The Growth Path](/guide/ship-clean) — adopt the framework progressively
→ [Portfolio Overview](/portfolio/) — managing multiple initiatives
→ [Strategic Synthesis](/offstream/strategic-synthesis) — the quarterly direction check
→ [The Discovery Spiral](/upstream/spiral-model) — how discovery and refinement pipeline
