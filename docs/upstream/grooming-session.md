# Grooming Session (Backlog Refinement)

<span class="phase-badge upstream">🔵 Upstream</span>

## The Moment This Page Is For

It's Tuesday afternoon. Lior has sprint planning in 20 hours. She opens the backlog and reads the next story: *"As a user, publish a journal entry."* Two acceptance criteria. No design reference. No mention of what "publish" means — save as draft? sync to server? appear in the feed? She messages the PM. No reply. She picks it up anyway.

Three days in, the PM reviews it. "That's not what I meant."

The grooming session exists to prevent that conversation from happening on Day 3 of the sprint. Its job is to catch — before commitment — every question the developer would otherwise discover mid-build.

---

## What Grooming Is

Grooming (also called backlog refinement) is a **recurring team ceremony** where candidate stories are reviewed, challenged, and either confirmed Ready or sent back.

It is not a status meeting. It is not the PM presenting what they wrote. It is the team asking every question they can think of — and the story surviving or not surviving those questions.

A story that survives grooming intact is Ready. A story that generates five unresolved questions is not — and it's better to know that on Tuesday than on Thursday sprint planning morning.

---

## Who's in the Room

**The Three Amigos: PM + Developer + QA.**

Not optional. All three, every session.

**The PM** knows the intent — what the story is for, what user problem it solves, what's in scope and out.

**The Developer** knows the cost — what this touches technically, what's unclear, what will block them from starting or finishing.

**The QA** knows the contract — what the acceptance criteria actually mean when turned into test cases, where edge cases hide, what "done" needs to look like to be verifiable.

Remove any one of the three and you get a different kind of failure:

- **No developer:** stories are written correctly but aren't buildable as described.
- **No QA:** stories are buildable but the ACs don't cover the failure cases that will show up in testing.
- **No PM:** the team refines stories away from their original intent and nobody notices until review.

A designer joins when there's visual or interaction work to clarify. A tech lead joins when there's an architectural question that needs resolving before the story can be sized.

---

## What You Bring In

Before the session, the PM prepares **candidate stories** — stories that are drafted but not yet Ready. Each one should already have:

- The story format (As [named persona], I want [action], so that [outcome])
- A first draft of acceptance criteria
- A link to the relevant epic and feature brief

Stories without these three things are **pre-candidate** — they're not ready to be groomed, they're ready to be written. Don't bring them to grooming. Grooming refines; it doesn't draft.

A good session reviews **4–6 stories** in 60 minutes. More than that and quality drops.

---

## What Happens in the Room

**Step 1: The PM reads the story aloud.**

Not paraphrases it. Reads it. Word for word. If it sounds wrong when read aloud, it is wrong. This is the first filter.

**Step 2: The developer asks the cost questions.**

*"What does this touch?"*
*"Is there an existing API for this, or do we build one?"*
*"Any unknowns I'd need to resolve before I could start?"*

These questions are not complaints. They are the cost of clarity, paid now instead of mid-sprint.

**Step 3: QA asks the testability questions.**

*"How do I test this?"*
*"What's the happy path? What breaks it?"*
*"What's the AC for the error state?"*

If QA can't describe a test scenario for an acceptance criterion, the AC is not a criterion — it's a wish.

**Step 4: The team walks the DoR checklist together.**

Nine checkpoints. Out loud. Takes 3 minutes per story when it's healthy.

**Step 5: Decision — Ready, Not Ready, or Split.**

| Verdict | Meaning | What happens |
|---|---|---|
| **Ready** | All 9 DoR items pass. Story is committed to the upcoming sprint. | Move to Ready column in Jira |
| **Not Ready** | One or more items fail. Work is assigned to fix it before next grooming. | Back to Refinement with an action owner |
| **Split** | The story is too large, or contains two distinct scenes. | PM splits it; both halves go back through grooming |

---

## A Real Example: Maya's Journal Entry

The story enters grooming: *"As Maya, a daily journalling app user, I want to write a journal entry, so that I can reflect on what happened today."*

Acceptance criteria as drafted:
- Maya can write free text
- Maya can add a star rating (1–5)
- Entry is saved and visible in her history

The PM reads it aloud. Sounds reasonable.

The developer asks: *"The star component — is that a new widget or do we have one?"* No existing component. *"That's probably 2–3 days on its own."*

QA asks: *"What happens if Maya rates zero stars? Can she change the rating after saving? What if she submits with no text?"*

Nobody has answers to those questions.

This is the grooming session doing its job. The team has just discovered that the star rating is not a small detail on this story — it's a separate feature with its own edge cases, its own component work, and its own acceptance criteria. It doesn't belong in S1.

The PM makes the call: **stars are S2**. The story is rewritten:

*"As Maya, a daily journalling app user, I want to write a free-text journal entry, so that I can capture my reflection for the day."*

ACs: text input, save, visible in history, empty-state if no text. Four testable things. No unanswered questions. Story passes the DoR. It's Ready.

Stars go on the backlog as a separate story, linked to the S2 slice. They'll be groomed before the S2 sprint. Not before.

This is not scope reduction. This is clarity. The feature didn't shrink — it was correctly understood for the first time.

---

## Edge Cases Every Team Hits

### The story touches two repositories

Maya's journal entry needs an API endpoint (backend repo) and a UI component (frontend repo). This is not two stories — it's still one scene: Maya writes and saves an entry.

**What you do:** create two subtasks in Jira, one per repo. The story has one assignee (whichever side is more complex, usually the backend). The second developer is on the linked subtask. The story is Done only when both subtasks are merged and the AC is verified end-to-end.

The story boundary is the user action. The implementation details — how many repos, how many PRs — live inside the story as subtasks.

### Two developers will work on this simultaneously

Same answer: the story remains one scene. Split the work into subtasks. One person owns the story card and the integration. The other owns their subtask and syncs. Sprint planning assigns the story to one name; the work is divided inside it.

If the work is truly parallel and independent enough that neither developer depends on the other, ask whether these are actually two separate scenes — in which case they should be two stories from the beginning.

### No design reference exists yet

The story is not Ready. Full stop.

Grooming doesn't fix missing design. It reveals that design is missing. The action: assign the design work (even if it's a quick wireframe or a Figma annotation) before the next grooming session. Don't compromise the DoR to meet a date.

### The story is clear but too large

If a story is well-written but the developer estimates more than 3 days, it needs to be split. Ask: *"Is there a version of this that delivers value in 1–2 days?"*

Almost always yes. Split there. The remainder becomes a follow-up story in the same epic.

---

## When and How Often

**Frequency:** Once per week, mid-sprint, preparing stories for the next sprint.

**Duration:** 60 minutes. Hard stop. If you can't groom 4–6 stories in 60 minutes, the stories aren't ready to be groomed — they need more PM prep before they reach the session.

**Timing:** Run grooming on the Wednesday or Thursday of Sprint N, preparing the backlog for Sprint N+1. This gives 2–3 days to fix anything that wasn't Ready.

**Target:** At least 6–8 Ready stories in the backlog at all times — enough for sprint planning to have options.

---

## Failure Modes

**Rubber-stamp grooming.** The team says "looks good" to everything. No one challenges the ACs. No edge cases are raised. Stories sail through and fall apart in development. Root cause: psychological safety or habit. Fix: the facilitator asks *"What could go wrong with this?"* for every story, even the obvious ones.

**Grooming without QA.** The PM and developer review stories together. Technically efficient. Catastrophically wrong. Testability is not a property the developer can evaluate for themselves — QA will find things in review that could have been named on Wednesday.

**Grooming too close to sprint planning.** Stories "refined" the morning of planning. No time to fix anything that fails the DoR. Team either skips planning or takes Not Ready stories into the sprint. Fix: two days minimum between grooming and planning.

**Grooming stories without a traceable epic.** The story has no epic. No feature brief. The team reviews it in isolation and it seems fine. It isn't — nobody knows what it's for or whether it's the right S1 scope. Run the trace-up check before grooming even starts: initiative → feature → epic → story. If the chain breaks, fix it upstream.

---

## What Good Looks Like

A good grooming session ends with:

- 4–6 stories with a clear verdict (Ready / Not Ready / Split)
- Not Ready stories have a named action and an owner
- Nobody leaves with an open question about a Ready story
- QA has mentally simulated a test scenario for every AC

The team should feel like they just de-risked the next sprint — not like they sat through a meeting.

If the developer says *"I could pick this up tomorrow and start immediately"* — that story is Ready. That's the only test that matters.
