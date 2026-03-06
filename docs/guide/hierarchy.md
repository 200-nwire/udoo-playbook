# The 4-Layer Hierarchy

Avi had a working database schema before anyone asked who needed the journaling feature, or why. The ticket said "Add journaling." That was all. Three weeks later, at the sprint review, the PM asked: "Wait — is this daily or weekly? Prompted or open-ended?" Nobody knew. The work started over.

That's not an execution failure. That's a thinking failure — skipping the layers that make the answers obvious before a line of code is written.

## Why Layers Matter

Without layers, teams make one of these mistakes daily:

- A product person says "let's add journaling" and a developer starts coding the database schema before anyone has asked *why* journaling matters or *who* it is for.
- A designer opens Figma and creates beautiful screens for a feature that no one has validated with a single user.
- Stories get written that hide entire user flows inside a single ticket — "As a user, I want to use the journal" is not a story, it is a project.
- Stakeholders argue about scope because no one agreed on what is *in* and what is *out* at the right level of abstraction.

The 4-layer hierarchy gives every idea a home. It tells you exactly *where* to have each conversation and *when* to go deeper.

## The Four Layers

```mermaid
flowchart TD
  L1[Layer 1: Initiatives\n"Why are we doing this?"]
  L2[Layer 2: Features\n"What can the user do?"]
  L3[Layer 3: Epics\n"What are the structural parts?"]
  L4[Layer 4: Stories\n"What is the smallest testable increment?"]
  L1 --> L2 --> L3 --> L4
```

Each layer answers different questions, produces different artifacts, and clears fog for the next layer. Skipping a layer is the fastest path to Downstream pain. Respecting the layers is the fastest path to predictable delivery.

---

## Layer 1: Initiatives — Where Clarity Begins

### The pain it solves

Most product failures start long before a single story is written. They start when a team builds something without fully understanding:

- **Why** it matters
- **Whose** problem it solves
- **What** success looks like
- What is **in scope**
- What is **definitely not in scope**

Without this clarity, teams solve symptoms instead of causes.

### What happens at this layer

Initiatives define the big bets — the strategic problems worth solving this quarter or cycle. They come from everywhere: support complaints, CEO ideas, client commitments, analytics drops, feature requests, industry shifts, competitive gaps, team insights. Initially, they all mix together in a confusing soup.

Upstream begins by pulling these ideas into one place and asking:

1. What is the real pain beneath these symptoms?
2. Why now?
3. What would success look like in measurable terms?
4. Who are the users involved?
5. What is clearly not part of this?

### The output

A clear, sharp **Initiative Brief** — one or two pages that make the problem undeniable and the direction obvious.

### A real example

A product team keeps seeing the same pattern: users open the app only when new content arrives. Retention is flat. The client worries the app doesn't become part of users' daily lives.

Everyone has ideas. A designer wants to make the home screen "warmer." A product person suggests streaks and badges. An engineer says, "maybe we should add journaling." The CEO casually throws in, "can't we just do something with AI?"

Instead of immediately building any of these, the Upstream compass forces a step back. The team looks for the pattern *underneath* the noise.

The Initiative emerges:

> **Create a daily ritual that increases emotional connection and repeat engagement.**
>
> - Target users: existing users after onboarding
> - Success metric: improve repeat weekly visits by 15%
> - Out of scope: deep AI personalization, complex profile building

Suddenly, the noise turns into direction. Every idea will either serve this Initiative or fall aside. Only then is the team ready to talk about Features.

::: tip Key Insight
An Initiative is not a feature request. It is a problem worth solving. The moment you name a solution as the Initiative ("add journaling"), you have closed off alternatives before discovery has happened.
:::

---

## Layer 2: Features — Turning the "Why" Into Concrete User Value

### The pain it solves

People often jump into UI or user stories before defining the actual user-facing capability. This leads to endless rethinking:

- "What are we actually building?"
- "Is this a full experience or just a screen?"
- "Is this one feature or three?"

### What happens at this layer

A Feature becomes the conceptual home for value. Thinking shifts from problem to possibility. This is where the team defines:

- The **purpose** of the Feature
- The **emotional or behavioral outcome** it creates
- The **user benefit** in plain language
- A short **"day-in-the-life" example** (Experience Snapshot)
- The **high-level flow** (no UI yet)
- What is **in scope** and **out of scope**

A Feature describes the *what* at a human level, not a UI or technical level.

### A real example

From the Initiative above, one Feature emerges naturally:

> **Living Wondrously Journal**
>
> - Purpose: give users a simple, meaningful daily ritual
> - Emotional aim: calm, clarity, gratitude
> - Experience Snapshot: Maya ends her day writing one reflective moment
> - In scope: prompts, writing, saving, viewing past entries
> - Out of scope: advanced analytics, custom themes

The Feature is now real enough to break into Epics.

---

## Layer 3: Epics — Giving the Feature Structure

### The pain it solves

A Feature is still too big to build. Without a structured breakdown, the team risks:

- Stories with hidden dependencies
- Unclear build sequencing
- Missing architectural elements
- Chaotic sprints
- Design that doesn't match technical reality

### What happens at this layer

The team groups work into 3–7 major slices. Each Epic:

- Has a clear **purpose**
- Represents a coherent part of the **user journey**
- Carries its own **complexity**
- Captures its own **constraints and states**
- Identifies **dependencies**

Epics are the "rooms" inside a Feature.

### A real example

From the Living Wondrously Journal Feature, natural Epics surface:

| # | Epic | Boundary |
|---|------|----------|
| 1 | Entry Creation & Prompt Flow | Daily writing experience |
| 2 | Past Entries (Day/Week/Month) | Browsing history |
| 3 | Notifications & Reminders | Return triggers |
| 4 | Stars & Habit Loop | Habit reinforcement |
| 5 | AI Reflection (Phase II) | *Clearly marked as later, not part of first slice* |

Each Epic gets a boundary. Entry Creation handles daily writing. Past Entries handles browsing. Notifications handles reminders. Stars handles habit reinforcement. Now each Epic can break into Stories.

---

## Layer 4: Stories — One Scene, All Its Paths

### The pain it solves

Teams create stories at the wrong level — and it usually goes in one of two directions:

**Too big** — a story that is really a feature or an epic in disguise:
- "As a user, I want a journal" (that's a Feature)
- "As a user, I want to manage my notifications" (that's an Epic)

**Too small** — a story that is really a technical subtask:
- "Display today's prompt" (a UI element, not a user goal)
- "Handle empty save attempt" (an error case, not a scene)
- "Save journal entry to API" (an implementation task, not a user moment)

The too-small trap is the more common one, and the more expensive. It produces three branches, three PRs, and three review cycles for what a single developer does in two hours as part of one continuous session. None of the three stories is independently valuable — a user who can only "see the prompt" cannot accomplish anything. The value only exists when all three pieces work together.

### Stories are scenes

A story maps to a **scene** — one user, one goal, one moment in their life. Not a technical component, not a UI state, not one step in a larger action.

A scene includes all the paths through it: the happy path, the error paths, and the edge cases. Those are **acceptance criteria** on the story — not separate stories.

**One developer. One branch. One PR. One review. Everything needed for that scene to work.**

| ❌ Wrong: stories split by technical state | ✅ Right: one story per scene |
|---|---|
| "See today's prompt" | |
| "Write in the text field" | **"Maya writes a daily journal entry"** |
| "Save the entry" | |
| "Show error when empty" | |

The right-hand story covers all four of those states — as acceptance criteria. The left-hand stories each fail the V in INVEST: none of them delivers something a user can use alone.

**When does a new story start?** When the *scene* changes — a different user goal, a different moment. "Maya edits an existing entry" is a separate story because it's a different moment with a different intent. "Maya browsing her past entries" is a separate story because it's a different visit entirely.

### What happens at this layer

Each Story is shaped until it meets the **INVEST** criteria:

| Letter | Meaning | Practical test |
|--------|---------|------|
| **I** | Independent | One developer can build it without waiting for another story to finish |
| **N** | Negotiable | The exact scope can be discussed; it's not carved in stone |
| **V** | Valuable | A real user can accomplish a real goal with only this story — not a fragment of a goal |
| **E** | Estimable | The team can size it with reasonable confidence |
| **S** | Small | One complete scene that a developer can finish in 1–3 days |
| **T** | Testable | QA can write a clear pass/fail test for the outcome |

::: tip The S and V test together
If a story passes S but fails V — it's small but not independently valuable — it's a subtask in disguise. Merge it with its siblings into one scene. If it passes V but fails S — it's a complete scene but too large — split it into two scenes by finding the earliest moment the user gets real value.
:::

When a Story reaches "Ready for Dev," Upstream ends and Downstream begins.

### A real example

From the Entry Creation Epic:

> **Story:** As Maya, I want to write and save my daily journal entry, so that I capture a moment of reflection and feel the small reward of keeping my streak.

One story. Everything that happens in Maya's 90-second journaling session is in it:

| Artifact | Content |
|----------|---------|
| **Acceptance criteria** | AC1: Prompt visible when journal opens · AC2: Tapping prompt starts writing session · AC3: Can skip prompt and write freely · AC4: Min 1 character to save; empty rejected with "Write at least a few words" · AC5: Successful save stores entry for today · AC6: Star count increments by 1 on first save of the day · AC7: Saving again same day edits, not duplicates · AC8: Offline save queues locally, shows sync icon |
| **Visual reference** | Lo-fi wireframe: prompt card → text field → save button → star animation |
| **Copy** | Button: "Save" · Empty state: "Write at least a few words" · Offline: "Saved — will sync when back online" |
| **Observability** | `journal.entry.saved` {user_id, date, char_count, is_first_today, is_offline} |
| **Data model** | `JournalEntry { id, user_id, date, prompt_id?, text, created_at, updated_at }` |

One branch. One PR. One review. Two days. The developer builds the complete journaling flow — prompt display, text input, save logic, validation, offline handling, star logic — as one coherent unit of work.

::: details What about the separate states and edge cases?
They are acceptance criteria — not separate stories. The developer tests all of them in the same branch. QA verifies all of them in one pass. The PR covers all of them. This is faster, not slower: there's no context-switching between stories, no coordination overhead between branches, no question about "which story does this edge case belong to?"
:::

Only when a story has all of its ACs, a visual reference, copy, observability, and tech feasibility confirmed is it truly ready. No guessing. No surprises.

---

## The Full Picture

```
Initiative: Create a daily ritual that increases emotional connection
  │
  └── Feature: Living Wondrously Journal
        │
        ├── Epic: Entry Creation (S1)
        │     ├── Story: Maya writes a daily journal entry      ← one scene: open, prompt, write, save, star
        │     └── Story: Maya edits a saved entry              ← one scene: return, see entry, update
        │
        ├── Epic: Past Entries (S1)
        │     └── Story: Maya reviews her past journal entries  ← one scene: browse list, read entry, go back
        │
        ├── Epic: Return & Reminders (S2)
        │     ├── Story: Maya receives a daily journal reminder
        │     └── Story: Maya manages her reminder time
        │
        ├── Epic: Stars & Streaks (S2)
        │     └── Story: Maya sees her writing streak grow
        │
        └── Epic: AI Reflection (S3)   ← out of scope for first release
```

Notice the difference: the S1 epics now have 2–3 stories total instead of 5–6. Each story covers a complete scene — everything that happens in one user session. The developer building "Maya writes a daily journal entry" handles the prompt display, text input, save logic, validation, offline handling, and star increment in one branch. That's the right unit of work.

## Choosing What to Build First — The First Release

With all four layers clear, a crucial question emerges: *"What is the smallest release that would actually mean something to the user?"*

Without the hierarchy, the instinct is: "Let's build the whole Journal with everything — past entries, notifications, stars, AI, the works."

With the hierarchy, the team defines S1 as two epics: Entry Creation and Past Entries. Together they let Maya write a journal entry and come back to read it. That is a complete loop of value — she creates something, and it persists.

S1 is a **Jira Release**. Stories in those two epics are assigned to that release. When all stories pass their Definition of Done, the release ships. Not when a calendar sprint ends — when the work is done and quality is confirmed.

In that first release, Maya can already do something real: sit down at the end of the day, answer a gentle prompt, feel the small reward of saving it, and return the next week to read what she wrote. The next releases (S2, S3) add reminders, streaks, and AI reflections — but the core ritual is already complete.

## How the Hierarchy Changes the Team Experience

When teams work through these layers deliberately, the internal experience changes:

- People aren't arguing about button colors. They are discussing whether the Initiative is framed correctly.
- They aren't throwing random stories into a sprint board. They are walking the path from Initiative to Feature to Epic to Story.
- They aren't trying to secretly smuggle "cool ideas" into the backlog. They can locate exactly where an idea belongs: as a new Feature, as a future Epic, or as a Story that hasn't yet been shaped.
- Most importantly, by the time a Story enters Downstream, it doesn't feel like speculation — it feels like the last step of a thoughtful chain. Everyone can point from that Story all the way back to the Initiative's original "why."

The result is not just cleaner tickets. It's a different emotional experience of work. People understand how their efforts contribute. Newcomers can follow the trail. Clients hear a coherent narrative, not a grab-bag of features.

::: warning Common Pitfall
The most dangerous shortcut is jumping from Layer 1 (Initiative) directly to Layer 4 (Stories). When you skip Features and Epics, every story becomes an island — disconnected from the user journey, impossible to sequence, and full of hidden dependencies that surface mid-sprint. Always walk the layers in order.
:::
