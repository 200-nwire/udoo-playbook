# Upstream Anti-Patterns

<span class="phase-badge upstream">🔵 Upstream</span>

These are the eight most common ways Upstream fails — and what to do instead. Each anti-pattern includes a description, how to spot it, real consequences, the fix, and a "wrong then right" comparison.

---

## 1. The Ticket Factory

### Description
The PM writes stories alone at their desk, then throws them into the backlog for developers to pick up. No conversation, no refinement, no shared understanding. Discovery is treated as a solo writing exercise rather than a team sport.

### How to Recognise It
- Stories appear in the sprint backlog without anyone remembering a discussion about them
- Developers ask "what does this mean?" during sprint planning — for the first time
- QA writes test cases that don't match what the developer built
- The PM is the only person who has read the Initiative Brief

### Real Consequences
Stories built from tickets-thrown-over-the-wall have a **2–3× higher bounce-back rate** — they return from development to the PM because the developer built something different from what was intended. Each bounce costs 1–2 days of rework plus the morale tax of wasted effort.

### The Fix
Discovery is a **team activity**. The PM drafts the story, but the story is refined in a session with the Tech Lead, QA Lead, and at least one developer. The conversation *is* the deliverable — the written story is just its record.

### Wrong Then Right

::: danger ❌ Wrong
PM writes 12 stories over the weekend. Pastes them into Jira on Monday morning. Tags the team: "Stories are ready for next sprint." No one asks questions because no one wants to seem difficult.

Sprint starts. Developer reads the story for the first time. Interprets "improve the reading experience" as "add dark mode." PM meant "fix the font rendering on Android." QA tests neither. Story bounces.
:::

::: tip ✅ Right
PM drafts 4 stories as conversation starters — rough format, clear problem, placeholder ACs. Brings them to a 30-minute refinement session. Developer asks: "When you say 'reading experience,' do you mean rendering, layout, or theme?" QA adds: "What about right-to-left text?" The team writes ACs together.

Sprint starts. Developer, PM, and QA all built the same mental model. Story ships clean.
:::

---

## 2. Solution Named as Problem

### Description
The initiative is framed as a solution rather than a problem. "We need to redesign the balance card" (solution) instead of "Users can't trust the balance display" (problem). This closes off alternative approaches before discovery even begins.

### How to Recognise It
- The initiative name contains a technical term or UI component name
- The "problem statement" section describes what to build, not what's broken
- When you ask "why?", the answer is a different (and better) problem statement
- No one has talked to a user — the solution came from an internal stakeholder or a competitor analysis

### Real Consequences
When you name the solution as the problem, you lock the team into one approach. Maybe the balance display issue is best solved by fixing the API, not redesigning the card. Maybe it's a data integrity problem, not a UI problem. Solution-framing prevents the team from discovering the cheapest, fastest, most effective fix.

### The Fix
Always ask **"Why do we need to do that?"** If the answer is a user pain, *that* is the problem. The original statement is a candidate solution — one of potentially many.

### Wrong Then Right

| | Problem Statement | What Happens |
|-|------------------|-------------|
| ❌ | "We need to redesign the balance card" | Team spends 3 sprints on a card redesign. Turns out the issue was the API returning stale data. Users still don't trust the balance. |
| ✅ | "Users cannot trust the balance display, causing 140 support tickets per month and measurable NPS decline" | Team investigates root cause. Discovers the API caching issue in 2 days. Fixes it. Tickets drop 80%. Card redesign becomes optional. |

---

## 3. The Invisible User

### Description
Stories and briefs are written for "users" in general — no named persona, no specific job-to-be-done, no experience snapshot. Every team member imagines a different user and builds for their own mental model.

### How to Recognise It
- Stories say "As a user..." instead of "As Avi..." or "As a daily commuter who studies halacha..."
- No persona document exists, or it exists but no one has read it in months
- Designers and developers disagree about what "the user" would want — because they're imagining different people
- Edge cases are missed because no one thought about *this specific person* in *this specific context*

### Real Consequences
Without a concrete persona, the product becomes a compromise between everyone's assumptions. The developer builds for power users (because they are one). The designer builds for first-timers (because that's what design school taught). QA tests the happy path (because there's no persona context to generate realistic edge cases). The result: a product that's mediocre for everyone and perfect for no one.

### The Fix
Name the persona. Give them a role, a job-to-be-done, and an Experience Snapshot. Pin the persona card next to the team's board. Reference the persona name in every story. When someone says "users would prefer X," ask: "Would *Avi* prefer X? Why?"

### Wrong Then Right

::: danger ❌ Wrong
```
Story: As a user, I want to search for content, so that I can find what I need.

AC: Search should return relevant results.
```

Who is this user? What are they searching for? On what device? In what language? How fast do they need results? What happens when there are no results? "Relevant" to whom?
:::

::: tip ✅ Right
```
Story: As Avi, a daily commuter who studies halacha, I want to search for
a specific ruling across all volumes by keyword, so that I can quickly find
the passage I need during my 30-minute bus ride.

AC1: Given Avi types "שבת" (Shabbat) in the search bar
     When results load
     Then results appear within 2 seconds, showing chapter title + snippet

AC2: Given Avi searches with nikud variations ("שַׁבָּת" vs "שבת")
     When results load
     Then both variations return the same results

AC3: Given Avi searches for a term that doesn't exist
     When results load
     Then the app displays "No results found" with a suggestion to broaden the search
```
:::

---

## 4. The Infinite Discovery

### Description
Analysis paralysis. The team keeps researching, interviewing, mapping, and refining — but never declares anything "ready." Discovery becomes a permanent state rather than a bounded phase.

### How to Recognise It
- The Initiative Brief has been "in progress" for more than 3 sprints
- Every refinement session surfaces "one more thing we need to research"
- The team has conducted 15+ user interviews but hasn't synthesised findings
- No one is willing to say "we know enough to start"
- The PM keeps adding scope to the brief instead of cutting it

### Real Consequences
Infinite discovery has the same outcome as no discovery: nothing ships. But it's worse, because the team has invested significant time and energy with nothing to show for it. Morale drops. Stakeholders lose trust. The market window closes. Eventually, an executive forces a premature start — and the team enters development with all the research but none of the decisions.

### The Fix
Time-box discovery. Set a **discovery deadline** at the start: "We will have a Ready brief in 2 sprints." If the brief isn't ready by the deadline, ask: "What is the *smallest* version of this initiative that we *do* know enough to build?" Ship that as S1. Use what you learn from S1 to inform S2.

### Wrong Then Right

| | Approach | Outcome |
|-|----------|---------|
| ❌ | "We need 5 more interviews before we can commit to S1" (said for the third sprint in a row) | 4 months of discovery. Zero shipped. Team demoralised. Executive overrides and forces a rushed build. |
| ✅ | "We've learned enough for S1. We'll validate our remaining assumptions with real usage data from S1, then scope S2." | S1 ships in 3 weeks. Real data answers the remaining questions faster than 5 more interviews would have. |

::: tip The 80% Rule
If you have 80% confidence in the problem, persona, and journey — start building S1. The remaining 20% will be resolved faster by shipping code to real users than by conducting more research.
:::

---

## 5. The Premature Commitment

### Description
Pulling stories into the sprint before the Definition of Ready is met because "we need to start" or "we'll figure it out as we go." This is the inverse of The Infinite Discovery — moving to development too early instead of too late.

### How to Recognise It
- Stories enter the sprint with placeholder ACs like "TBD" or "to be refined"
- The Tech Lead hasn't reviewed the story for feasibility
- No visual reference exists — "the designer will provide it during the sprint"
- The story was sized without a conversation ("the PM said it's small")
- Dependencies are listed as "probably fine"

### Real Consequences
Premature commitments create **mid-sprint chaos**. Developers start work, hit ambiguity, and context-switch to track down answers. The PM spends the sprint clarifying instead of preparing next sprint's stories. QA writes test cases against moving requirements. The sprint becomes a mini-discovery session at 5× the cost of doing discovery properly in Upstream.

### The Fix
Enforce the DoR. If a story doesn't pass the 9-point checklist, it does not enter the sprint — no exceptions. If the sprint backlog is too thin without these stories, that's a signal that Upstream needs more investment, not that the DoR should be relaxed.

### Wrong Then Right

::: danger ❌ Wrong
Sprint planning, Monday morning:

PM: "We don't have enough Ready stories. Let's pull in the search feature — I'll write the ACs tomorrow."

Tech Lead: "I haven't looked at the search infrastructure yet..."

PM: "It's fine, we'll figure it out. We can't have an empty sprint."

Result: Developer starts building search. Discovers the Hebrew text index doesn't support nikud. Spends 3 days researching indexing strategies. PM writes ACs on Wednesday that invalidate Monday's work. Sprint fails.
:::

::: tip ✅ Right
Sprint planning, Monday morning:

PM: "We only have 6 Ready stories — that fills 70% of capacity."

Tech Lead: "Let's commit to those 6 and use the remaining 30% for two things: (1) a spike on search infrastructure, and (2) refining the 4 stories that aren't Ready yet for next sprint."

Result: 6 stories ship clean. Spike reveals the nikud indexing challenge early. 4 stories get proper ACs and visual references. Next sprint starts with a full backlog of Ready stories.
:::

---

## 6. The Kitchen Sink Initiative

### Description
An initiative that tries to solve everything at once. The brief has 8 success metrics, 6 personas, 20 journey steps, and an "In Scope" section that reads like a product roadmap. The team is excited about the vision but paralysed by the scope.

### How to Recognise It
- The brief is 15+ pages long and still growing
- The "In Scope" section has more than 10 items
- Success metrics cover engagement, revenue, retention, NPS, performance, and accessibility simultaneously
- The slice plan has S1 through S7
- When you ask "what's the MVP?", the answer is "all of it"

### Real Consequences
Kitchen sink initiatives never ship. They're too big to estimate, too broad to staff, and too complex to test. Partial progress is invisible because nothing works until everything works. Eventually, the initiative is either abandoned or forcibly descoped by an executive — who cuts the wrong things because they lack the context to choose.

### The Fix
Apply the **"One persona, one problem, one metric"** test. If the initiative can't be expressed as solving one primary problem for one primary persona, measured by one primary metric — it's too broad. Split it into 2–3 focused initiatives with independent value.

### Wrong Then Right

| | Scope | What Happens |
|-|-------|-------------|
| ❌ | "Pninei Halacha: reading + search + bookmarks + audio + community + multi-language + sharing + notifications + analytics" | 12-month roadmap disguised as one initiative. No slice is independently shippable. Team burns out at month 4. |
| ✅ | Initiative 1: "Pninei Halacha Foundation — calm mobile reading experience" (read + offline + resume). Initiative 2: "Library & Discovery" (search + browse). Initiative 3: "Engagement & Community" (bookmarks + sharing + feedback). | Each initiative ships independently. Foundation ships in 6 weeks. Real data from Foundation informs the priority of initiatives 2 and 3. |

---

## 7. Discovery as Homework

### Description
One person — usually the PM — does all the discovery alone. User interviews, journey mapping, problem framing, brief writing — all solo work done between meetings. The rest of the team first sees the output at sprint planning.

### How to Recognise It
- Only the PM attends user interviews
- The journey map was created without the Tech Lead or QA Lead present
- Developers say "I didn't know about this initiative until it hit the sprint"
- The PM is a bottleneck — everything waits for their availability
- Technical feasibility concerns surface for the first time at sprint planning

### Real Consequences
Solo discovery produces briefs that are **product-accurate but technically naive**. The PM captures user pain correctly but misses infrastructure constraints, security implications, and integration complexity. Stories written without engineering input are routinely mis-sized and frequently bounce. Worse, the team feels no ownership of the work — they're building someone else's plan, not their own.

### The Fix
Discovery is a **team sport with a PM quarterback**. The PM drives the process, but key activities are collaborative:

| Activity | Who participates |
|----------|-----------------|
| User interviews | PM + 1 developer (rotates) |
| Journey mapping | PM + UX + Tech Lead + QA Lead |
| Problem framing | PM + Tech Lead |
| Solution sketching | PM + Tech Lead + UX |
| Story writing | PM drafts, team refines |
| Sizing | Full team |

### Wrong Then Right

::: danger ❌ Wrong
PM spends 3 weeks doing discovery alone. Writes a 10-page brief. Presents it to the team on Monday. Team nods politely. Sprint starts.

Day 2: Developer discovers the proposed API design conflicts with the existing auth model.
Day 3: QA realises the ACs don't cover the offline scenario.
Day 4: UX designer says the flow contradicts last month's usability test findings.

Brief gets rewritten mid-sprint. Two stories are pulled. Sprint commitment breaks.
:::

::: tip ✅ Right
PM kicks off discovery with a 60-minute journey mapping session (PM + UX + Tech Lead + QA Lead). Tech Lead flags the auth constraint on day 1. QA asks about offline on day 2. Developer rotates into a user interview on day 3 and returns with an insight about nikud search that reshapes the story.

Brief is written collaboratively over 1 week. By the time it reaches sprint planning, every team member has contributed. No surprises. No mid-sprint rewrites.
:::

---

## 8. The Foregone Conclusion

### Description
Running "discovery theater" when the decision is already made. A stakeholder (or the PM) has already decided the solution, but the team goes through the motions of discovery to create the appearance of due process.

### How to Recognise It
- The solution sketch was written before the problem statement
- User interviews are conducted but the findings don't change anything
- When someone proposes an alternative approach, it's dismissed immediately
- The Initiative Brief was clearly written backwards — solution first, problem retrofitted
- The PM says "we're exploring options" but only one option is described in the brief

### Real Consequences
Foregone conclusions destroy trust. The team learns that discovery is performative, not genuine. Smart people stop contributing — why invest energy in a process whose outcome is predetermined? Over time, the team disengages from Upstream entirely, and the PM wonders why no one cares about product quality.

Worse, when the predetermined solution is wrong (and it often is), there's no corrective mechanism. The discovery process that should have caught the error was just a rubber stamp.

### The Fix
Genuine discovery requires **at least two viable options** at Station 4. If there's only one option, ask: "Why are we doing discovery? Is this actually a project, not a discovery?" If it truly is the only option, be honest — skip the theater and frame it as an implementation brief, not a discovery brief.

For genuine discoveries: protect the process by having the Tech Lead or UX Lead propose at least one alternative. Evaluate each option against the same criteria. Document why the chosen approach won — not just that it was chosen.

### Wrong Then Right

::: danger ❌ Wrong
Stakeholder in a meeting: "We need to build a mobile app for Pninei Halacha. Use React Native."

PM creates an Initiative Brief with "React Native Mobile App" as the title. Conducts two user interviews that confirm people want a mobile experience (which was never in question). Lists one solution option: React Native app. Brings it to approval.

Engineering Lead: "Did we consider a PWA? It might ship faster and avoid app store delays."

PM: "We already committed to React Native."

Result: React Native app takes 4 months. Could have shipped a PWA in 6 weeks. App store review adds 2 more weeks. Users don't care about native — they just want to read.
:::

::: tip ✅ Right
Stakeholder: "We need a mobile reading experience for Pninei Halacha."

PM: "Agreed. Let me run discovery with the team to find the best approach."

Station 4 evaluates two real options:
- **Option A: PWA** — Faster to ship (6 weeks), no app store dependency, offline via service worker, limited push notifications
- **Option B: React Native** — Full native feel (12 weeks), app store distribution, full push notifications, more complex maintenance

Team evaluates against success criteria: "reading session > 4 min within 14 days." Both options achieve this. PWA ships in half the time.

Decision: PWA for S1. Evaluate native for S2 if PWA hits limitations.
ADR logged. Stakeholder signs off.
:::

---

## Quick Anti-Pattern Diagnostic

Before any Story is marked Ready, ask these eight questions. If any answer is "yes," you've found an anti-pattern:

| # | Question | If Yes → Anti-Pattern |
|---|----------|----------------------|
| 1 | Did one person write this story alone, without team discussion? | The Ticket Factory |
| 2 | Does the title describe a solution rather than a problem? | Solution Named as Problem |
| 3 | Does the story say "users" without naming a specific persona? | The Invisible User |
| 4 | Has discovery been running for more than 3 sprints without a Ready output? | The Infinite Discovery |
| 5 | Are there placeholder ACs or missing visual references? | The Premature Commitment |
| 6 | Does the initiative have more than 3 success metrics or 10 scope items? | The Kitchen Sink |
| 7 | Did only the PM participate in discovery? | Discovery as Homework |
| 8 | Was the solution decided before the problem was framed? | The Foregone Conclusion |

::: info Using This Diagnostic
Print this table and bring it to your next Readiness Review. Run through it for every story. Over time, the team will internalise these checks and catch anti-patterns before they form. The goal is not to police — it's to build a shared instinct for quality discovery.
:::

---

