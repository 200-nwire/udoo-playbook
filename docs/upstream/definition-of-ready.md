# Definition of Ready (DoR)

<span class="phase-badge upstream">🔵 Upstream</span>

## The Moment This Page Is For

Sprint planning starts in twenty minutes. The PM posted four stories to the backlog last night. The developer pulls the first one: "As a user, I want to export my data so that I can back it up." There are no acceptance criteria. No visual reference. No mention of which data, what format, what happens if the export is large, or whether it's available on mobile. The developer starts asking questions. The PM isn't online yet.

The sprint starts anyway. The developer makes their best guess. Three days later, the PM reviews it and says "that's not what I meant."

That is what happens without a Definition of Ready. Not once — every sprint, on every team that doesn't enforce one.

## What Is the DoR?

The Definition of Ready is the **quality gate between Upstream and Downstream**. A Story does not enter the sprint until every item on this checklist is true.

Violating the DoR is not a sign of speed. It is a sign of borrowing time from the sprint team at a very high interest rate.

## Why DoR Exists: The Economics of Shifting Left

Every hour of ambiguity that leaks into a sprint costs **5–15× more** than resolving it during Upstream. This is not theoretical — it's observable in every project.

| When ambiguity is caught | Typical cost to resolve | Example |
|--------------------------|------------------------|---------|
| Station 1 (Vision) | 30 min conversation | "Wait — are we solving for new users or existing?" |
| Station 3 (Journey) | 2 hours of rework | "This step doesn't match the persona's actual workflow" |
| Sprint planning | 1 day of re-scoping | "This story has no AC — let's write them now" (blocks planning) |
| Mid-sprint | 2–3 days of rework | Developer builds wrong thing; code review catches it late |
| QA / staging | 3–5 days + morale damage | "This isn't what we agreed on" — story bounces back |
| Production | 1–2 weeks + incident cost | Bug reaches users; support tickets spike; hotfix scramble |

::: info The Commitment Point
The DoR represents the **Commitment Point** — the moment where a story crosses from "we're figuring this out" to "we're building this." Before the commitment point, change is cheap and expected. After it, change is expensive and disruptive.

The DoR checklist is not bureaucracy — it's the team's agreement about what "figured out enough to commit" means.
:::

---

## The 9-Point DoR Checklist

| # | Check | What "done" looks like | Good Example ✅ | Bad Example ❌ |
|---|-------|----------------------|-----------------|---------------|
| 1 | **Story format** | Written as "As a `<persona>`, I want `<action>`, so that `<outcome>`." | "As Avi, I want to resume reading where I left off, so that I don't waste time finding my place." | "Implement bookmark persistence feature." |
| 2 | **Journey reference** | References at least one journey step ID (e.g., `J4`). | "Journey step(s): J8, J11" | "Journey step(s): N/A" |
| 3 | **Acceptance criteria** | 3–7 testable ACs; edge and negative cases included. Gherkin-ready phrasing. | See [Writing Good ACs](#writing-good-acceptance-criteria) below | "Balance should display correctly" |
| 4 | **Visual reference** | Sketch, lo-fi mockup, or whiteboard photo exists. (Even a napkin drawing is fine.) | Photo of whiteboard sketch linked in story | "Designer will provide later" |
| 5 | **Copy / text** | All user-facing strings drafted; accessibility labels noted. | "Button text: 'Resume Reading' / aria-label: 'Resume reading from last position'" | "TBD — will figure out during dev" |
| 6 | **Observability signal** | At least one measurable signal defined (event name, metric, or log line). | "Event: `reading_session_resumed`, props: { book_id, chapter, position }" | "We'll add analytics later" |
| 7 | **Dependencies** | All blockers identified. Each is either resolved or explicitly de-risked with an owner. | "Depends on content-sync API (ready, deployed to staging). No other blockers." | "Might need something from the backend team" |
| 8 | **Size** | Team consensus: completable in 1–3 days by one developer. | "Sized as M (2 days) by team consensus in refinement" | No sizing conversation happened |
| 9 | **Technical feasibility** | Tech Lead has confirmed no hidden blockers. | "Tech Lead confirmed: local storage API supports this; no migration needed" | Tech Lead hasn't seen the story |

---

## The Architecture Ready Checklist

For **Epics** or major feature areas, the standard 9-point DoR is necessary but not sufficient. Before breaking an Epic into stories, confirm architecture readiness.

| # | Check | What "done" looks like |
|---|-------|----------------------|
| A1 | **System boundaries identified** | Which services/modules are touched? Diagram exists. |
| A2 | **API contracts defined** | Request/response shapes agreed between frontend and backend teams. |
| A3 | **Data model reviewed** | New tables/fields/indexes identified. Migration plan exists if needed. |
| A4 | **Auth & permissions mapped** | Which roles can do what? Edge cases for unauthorized access defined. |
| A5 | **Performance constraints stated** | Latency targets, payload size limits, concurrent user expectations documented. |
| A6 | **Spike completed (if needed)** | Any "can we even do this?" question answered with working code, not opinion. |
| A7 | **Rollout strategy agreed** | Feature flag plan, canary rollout %, or rollback mechanism defined. |

::: tip When to Use the Architecture Checklist
Use it when the Epic involves: a new service, a new external integration, a data migration, a change to auth/permissions, or any work that spans more than one team. For small Epics within a single codebase, the standard 9-point DoR per story is sufficient.
:::

**Good example — Pninei Halacha Reader Epic (E3):**

| Check | Status |
|-------|--------|
| A1: System boundaries | Reader module (frontend), Content API (backend), Offline Storage (service worker + IndexedDB) |
| A2: API contracts | `GET /api/books/{id}/chapters/{num}` — returns markdown + metadata. Contract reviewed by FE + BE. |
| A3: Data model | IndexedDB schema for offline chapters: `{ bookId, chapterNum, content, lastRead, scrollPosition }` |
| A4: Auth & permissions | Public content — no auth needed for reading. Bookmarks require authenticated user. |
| A5: Performance | Chapter load < 500ms on 3G. Offline content available < 100ms from IndexedDB. |
| A6: Spike | Spike completed: service worker caching strategy validated with 3 chapters. |
| A7: Rollout | Feature-flagged by book ID. Start with one volume, expand weekly. |

---

## How to Use This Checklist

During the **Story Readiness Review** (2× per week), the PM, BA, QA Lead, and Tech Lead walk through candidate stories together. For each story, run the checklist:

- **All 9 ticked** → Story is **Ready**. Move to the sprint backlog.
- **Any item fails** → Story is **Not Ready**. Assign the specific fix to a named owner with a due date. Revisit at the next Readiness Review.

::: danger The Most Common DoR Failures
1. **No journey reference** — developer builds something, QA tests something different, PM expects something else
2. **Vague acceptance criteria** — "should look correct" is not testable
3. **Missing edge cases** — the negative balance bug would have been caught with one extra AC
4. **No sizing conversation** — "quick task" turns into 5-day rabbit hole
:::

---

## The Readiness Check Ceremony

### Format

| Aspect | Detail |
|--------|--------|
| **Frequency** | Twice per week (typically Tuesday and Thursday) |
| **Duration** | 30 minutes, hard stop |
| **Attendees** | PM/PO, BA (if applicable), QA Lead, Tech Lead |
| **Input** | Stories the PM believes are ready for sprint |
| **Output** | Stories marked Ready or returned with specific action items |

### How to Run It

**1. PM presents the story (2 minutes per story)**
Read the story aloud. Show the ACs. Show the visual reference.

**2. Checklist walk-through (3 minutes per story)**
Go through each of the 9 points. The Tech Lead and QA Lead confirm or flag.

**3. Verdict (30 seconds)**

Use these phrases:

| Verdict | Phrase | What happens next |
|---------|--------|-------------------|
| ✅ Ready | "This story is Ready." | Moves to sprint backlog |
| 🔄 Almost | "This story needs [specific item]. [Name] owns the fix by [date]." | Returns to Upstream backlog with action item |
| ❌ Not Ready | "This story has [multiple gaps]. It goes back to discovery." | PM re-works the story; re-enters the Readiness queue |

### What Happens When a Story Fails Readiness

Stories that fail readiness are **not abandoned** — they follow the "Fix and Come Back" process:

1. **Identify** the specific failing checklist items
2. **Assign** each gap to a named owner (not "the team")
3. **Set** a due date (typically before the next Readiness Review)
4. **Log** the gaps in the story's comments in Jira
5. **Re-present** at the next Readiness Review

::: warning Never Skip the Owner
"We'll sort it out" is not a fix. Every gap must have a name next to it. "Maya will draft the missing ACs by Thursday" is a fix. Unnamed action items have a near-zero completion rate.
:::

---

## Writing Good Acceptance Criteria

Acceptance criteria are the contract between Product and Engineering. They must be:

- **Observable** — describes an outcome the user or system can observe
- **Specific** — no ambiguity about what "correct" means
- **Gherkin-convertible** — phrased as Given/When/Then without effort

### Bad AC Examples (and why they fail)

| Bad AC | Problem |
|--------|---------|
| "Balance should display correctly" | What is "correctly"? Has no edge cases. |
| "Improve the wallet card UI" | This is a task, not an outcome. |
| "Fix the negative balance bug" | Describes the bug, not the expected behaviour. |
| "Reading experience should be good" | Subjective — untestable by QA |
| "Offline should work" | Which offline scenario? First load? Loss of signal mid-read? |

### Good AC Examples

For the story "User sees negative balance correctly formatted":

```
AC1: Given a user has a wallet balance of -$125.50
     When they navigate to the dashboard
     Then the balance card displays "-$125.50" in red text

AC2: Given a user has a wallet balance of $0.00
     When they navigate to the dashboard
     Then the balance card displays "$0.00" in neutral colour

AC3: Given a user has a wallet balance of $250.00
     When they navigate to the dashboard
     Then the balance card displays "$250.00" in default colour

AC4 (edge): Given a user has a wallet balance of -$0.01
            When they navigate to the dashboard
            Then the balance card displays "-$0.01" (not "$0.00")

AC5 (error): Given the balance API returns a 500 error
             When the user navigates to the dashboard
             Then the balance card displays "Unable to load balance" with a retry button
```

The bug described in this book (`balance.amount > 0 ? balance.amount : 0`) would have been caught by **AC4** — it was a negative value so close to zero that manual testing might have missed it. A unit test driven by this AC would not.

For the story "Avi resumes reading where he left off" (Pninei Halacha):

```
AC1: Given Avi was reading Chapter 3, paragraph 7, scrolled 60% down
     When he closes and reopens the app
     Then the app opens to Chapter 3 at the exact scroll position

AC2: Given Avi was reading on his phone
     When he opens the app on a different device
     Then he sees a "Continue where you left off?" prompt with the correct chapter

AC3 (edge): Given Avi has never opened the app before
            When he opens the app for the first time
            Then the app opens to the welcome/onboarding flow, not a blank reader

AC4 (offline): Given Avi read to Chapter 5 while offline
               When he regains connectivity
               Then his reading position syncs to the server within 30 seconds

AC5 (error): Given the position sync API is unreachable
             When Avi opens the app
             Then the app uses the last locally stored position (not an error screen)
```

---

## The DoR Is a Team Agreement

The DoR is not the PM's checklist alone. It requires:

- **Product** to write quality ACs and ensure journey references exist
- **QA** to confirm the ACs are testable and Gherkin seeds are drafted
- **Tech Lead** to confirm feasibility and flag unknown risks
- **Dev** to confirm sizing is realistic

If any of these people disagree that a story is ready, it is not ready.

---

## Common Pushback and Responses

| Pushback | Response |
|----------|----------|
| "DoR slows us down" | No — ambiguity slows you down. DoR surfaces ambiguity *before* it costs 10× more to resolve mid-sprint. Track your bounce-back rate: stories that return from dev to PM. DoR reduces this to near-zero. |
| "We don't have time for all 9 checks" | If you don't have time to clarify the story, you don't have time to build it wrong. A 5-minute readiness check prevents a 3-day mid-sprint rewrite. |
| "Our team is experienced — we don't need this" | Experience means you check the boxes faster, not that you skip them. Even experienced pilots use pre-flight checklists. |
| "The PM should just write better stories" | DoR is a team responsibility. The PM writes the story, but QA validates testability, Tech Lead validates feasibility, and Dev validates sizing. No single person can do all four. |
| "We can figure it out during the sprint" | That's called "discovery in the sprint" — it's the most expensive form of discovery. Every hour of in-sprint discovery displaces an hour of planned work and risks the sprint commitment. |

---

## How DoR Scales

### Small Features (Quick Checklist)

For features that are well-understood, contained within one team, and small in scope:

- Run through the 9-point checklist informally during refinement
- No separate Readiness Review ceremony needed
- Tech Lead and QA Lead confirm readiness asynchronously (Jira comment)
- Typical time: 5–10 minutes per story

### Major Initiatives (Full Ceremony)

For initiatives that span multiple teams, involve new architecture, or carry significant risk:

- **Architecture Ready checklist** completed for each Epic before story breakdown
- **Formal Readiness Review** ceremony for every story
- **PM presents** each story to the full review panel
- **Written verdict** logged in Jira (Ready / Not Ready with action items)
- Typical time: 3–5 minutes per story in a dedicated 30-minute session

::: details Example: Scaling DoR for Pninei Halacha
**Epic E3 (Reader Experience)** is a major, architecture-heavy epic with offline, sync, and cross-device concerns. It gets the full ceremony:

1. Architecture Ready checklist completed first (service worker strategy, IndexedDB schema, sync protocol)
2. Each of the 5 stories presented individually at Readiness Review
3. Stories J9 (offline) and J11 (resume position) flagged with extra edge-case ACs due to complexity
4. Tech Lead requests a spike for service worker caching before J9 is marked Ready

**Epic E4 (Feedback & Sharing)** is a small, well-understood epic. It gets the quick checklist:

1. PM writes stories with ACs, Tech Lead and QA review asynchronously in Jira
2. All 2 stories confirmed Ready within one refinement session
3. No separate ceremony needed
:::

---

## DoR Checklist — Printable Version

Use this as a quick reference during Readiness Reviews:

```
STORY READINESS — 9-POINT CHECK
================================
[ ] 1. Story format: As [persona], I want [action], so that [outcome]
[ ] 2. Journey reference: J-step ID(s) assigned
[ ] 3. Acceptance criteria: 3–7 testable ACs with edge/negative cases
[ ] 4. Visual reference: Sketch, mockup, or whiteboard photo linked
[ ] 5. Copy / text: User-facing strings drafted, a11y labels noted
[ ] 6. Observability: Event name or metric defined
[ ] 7. Dependencies: All blockers identified, de-risked, or resolved
[ ] 8. Size: 1–3 days, team consensus
[ ] 9. Technical feasibility: Tech Lead confirmed, no hidden blockers

Verdict: [ ] Ready  [ ] Almost (action: ___ owner: ___ by: ___)  [ ] Not Ready
```

---

<div style="display: flex; justify-content: space-between; margin-top: 2rem;">
  <a href="/upstream/station-3-journey">← Station 3 — Journey & Slices</a>
  <a href="/upstream/anti-patterns">Upstream Anti-Patterns →</a>
</div>
