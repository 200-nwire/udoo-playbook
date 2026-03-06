# Initiative Walkthrough — From Noise to Clarity

<span class="phase-badge upstream">🔵 Upstream</span>

This chapter tells a single story from beginning to end: how the **Living Wondrously Journal** went from a vague feeling ("engagement is flat") to a set of ready stories that a developer could pick up and start building the same day. It is not a template — it is a narrative. Follow along, and watch the UDOO framework in motion.

::: info The Discovery Spiral in this story
This walkthrough passes through all three loops. Watch for the loop markers as you read — they show when the scope changes level.

| Steps 1–2 | [Initiative Loop](/upstream/activities-sprint) — 2 weeks | Problem framing, alignment, feature list |
| Steps 3–6 (per Feature) | [Feature Loop](/upstream/feature-activities) — 1 week | Journey mapping, Epic shaping, slice decision |
| Steps 4–5 (per Epic) | [Epic Loop](/upstream/epic-activities) — 2–3 days | Story writing, Example Mapping, DoR |

In practice these loops run in parallel as features are picked from the backlog — but this walkthrough shows them in sequence so the logic is clear.
:::

---

## The Starting Point

It is a Tuesday morning. The Momentum wellness app has 12,000 monthly active users, but the numbers have plateaued. The weekly retention chart is flat. The NPS score hovers around 38 — decent, not inspiring. In the Slack channel, the conversation sounds like this:

> **Product:** "We need to give users a reason to come back every day."
>
> **Design:** "What about a daily challenge? Or maybe a streak counter?"
>
> **Engineering:** "We could add push notifications. That always bumps retention."
>
> **Stakeholder:** "My daughter uses an app that has a journal. Can we do something like that?"

Everyone has an idea. Nobody has a problem statement. The team is swimming in solutions before they have agreed on what they are solving.

This is the noise. The entire purpose of the Upstream phase is to turn this noise into clarity — and it starts by doing something that feels unnatural: **slowing down**.

---

## Step 1 — The Initiative Emerges <span style="font-size: 0.75em; padding: 2px 6px; background: #e8f4fd; border-radius: 4px; color: #1565c0">Initiative Loop begins</span>

### Find the Pattern

The PM pulls three data sources together:

1. **NPS verbatims** — 23 responses mention "nothing to do after the first week" or "I finished the course, now what?"
2. **Retention cohorts** — Day-7 retention is 41%, Day-30 is 19%. Users who complete the starter content don't come back.
3. **Support tickets** — 8 tickets in the last month ask "Is there a way to write my own reflections?"

Three signals pointing in the same direction: users want an ongoing, personal reason to return — not more content to consume, but a space to *create*.

### Frame the Problem, Not the Solution

The PM writes a TL;DR:

> *Momentum users who complete the starter content have no daily reason to return. Day-30 retention for this cohort is 19%, compared to 34% for the overall user base. We believe providing a personal, low-friction daily creation experience will increase Day-30 retention for post-content users to 30% within 90 days of launch.*

Notice what this statement does and does not do:

| ✅ What it does | ❌ What it avoids |
|----------------|-------------------|
| Names a specific user segment (post-content users) | Does not say "build a journal" |
| Quantifies the pain (19% retention) | Does not prescribe a solution |
| Sets a measurable goal (30% within 90 days) | Does not mention features, screens, or buttons |
| Explains why now (flat retention, user signals) | Does not assume it will work (uses "we believe") |

::: tip The Initiative Is Not a Feature
An Initiative describes the *change in the world* the team wants to create. "Increase Day-30 retention for post-content users" is an Initiative. "Build a journal" is a Feature — and it is only one possible way to achieve the Initiative. The distinction matters because it keeps the solution space open during discovery.
:::

This becomes the Initiative Brief's TL;DR. It is one paragraph, and it took the PM 45 minutes to write — because saying less requires thinking more.

---

## Step 2 — The Feature Appears

The team runs a Station 1 session (30 minutes). They explore the problem space: What would make post-content users come back? Ideas include:

- A daily journal with prompts
- A peer accountability partner
- A progressive meditation program
- A daily micro-challenge (2-minute activities)

They evaluate each idea against the data. The journal concept aligns best with the user signals: users *asked* for a reflection space; the NPS verbatims mention "writing" and "reflections." The micro-challenge concept is interesting but lacks user demand evidence.

The team names the Feature: **Living Wondrously Journal**.

### The Purpose

The journal is not a generic text editor. It has a specific emotional aim: to give users a moment of intentional reflection that feels rewarding, not burdensome. The design principle is *"90 seconds that change your evening."*

### The Experience Snapshot: Maya

The team creates a persona to anchor every decision:

> **Maya** is a 34-year-old marketing manager who completed Momentum's starter content three weeks ago. She liked it but hasn't opened the app since. She is not depressed or in crisis — she is someone who *wants* to be more mindful but forgets unless something nudges her. Her evenings are busy (dinner, kids, cleanup). She has about 5 minutes of phone time before sleep. She does not want homework. She wants a small, pleasant ritual.

The PM tells the team: *"Every story we write, every AC, every design decision — ask yourself: would Maya do this at 10:15 PM after putting the kids to bed? If the answer requires effort, focus, or decision fatigue, we've failed."*

::: info Why Personas Work
A persona is not a demographics chart. It is a decision-making tool. When the team argues about whether the journal should support rich text formatting, the answer is obvious: Maya at 10:15 PM does not want to bold her words. She wants to type a sentence and feel done. The persona resolves the argument before it starts.
:::

::: tip Initiative Loop completes here
The Initiative Loop ends with: an approved Initiative Brief, named KPIs, confirmed primary persona (Maya), a one-sentence Feature (Living Wondrously Journal), and stakeholder sign-off on the S1 scope. **The Feature Loop for the Living Wondrously Journal now begins.** In practice, multiple features run in parallel once the initiative brief is frozen.
:::

---

## Step 3 — Epics Take Shape <span style="font-size: 0.75em; padding: 2px 6px; background: #e8f5e9; border-radius: 4px; color: #2e7d32">Feature Loop begins</span>

The team runs a Story Mapping session (60 minutes, whiteboard, sticky notes). They walk through Maya's complete evening journey with the journal and identify five major activities:

```
Activity 1        Activity 2         Activity 3        Activity 4        Activity 5
──────────────    ──────────────     ──────────────    ──────────────    ──────────────
Create Entry      View Past          Get Reminded      Earn Stars        AI Reflection
                  Entries                                                (Phase II)

Maya opens the    Maya scrolls       Maya gets a       Maya sees her     Maya reads an
journal, picks    through her        notification at   star streak       AI-generated
a prompt, types   past entries       9pm reminding     grow as she       reflection on
her reflection,   and feels a        her to journal    writes daily      her week's
and saves.        sense of                                               entries
                  continuity
```

Each activity becomes an **Epic** in the UDOO hierarchy:

| Epic | UDOO ID | Journey Steps | Slice |
|------|---------|---------------|-------|
| Entry Creation | E-LW-01 | J1: Open Journal → J2: See Prompt → J3: Write → J4: Save | S1 (MVP) |
| Past Entries | E-LW-02 | J5: View History → J6: Read Entry | S1 (MVP) |
| Notifications | E-LW-03 | J0: Receive Nudge → J1: Open Journal | S2 |
| Stars & Streaks | E-LW-04 | J4: Save → J4a: See Star Animation | S1 (partial) |
| AI Reflection | E-LW-05 | J7: View Weekly Reflection | S3 (Phase II) |

::: warning Epics Are Not "Big Stories"
An Epic is not a story that is too large. An Epic is a **named theme of value** that maps to a section of the user journey. "Entry Creation" is a theme — it covers the entire flow from opening the journal to saving. It will contain 4–6 stories. If your Epic name doesn't correspond to a verb the user does, it is probably a technical task masquerading as an Epic.
:::

The team draws the slice lines on the whiteboard:

- **S1 (MVP):** Entry Creation + Past Entries + Stars (just the counter, no animation yet). This is the shortest path that lets Maya journal and see her history.
- **S2:** Notifications + Star animations + Streak tracking. This brings Maya back.
- **S3:** AI Reflection. This deepens the experience but requires ML infrastructure.

---

## Step 4 — Stories Emerge <span style="font-size: 0.75em; padding: 2px 6px; background: #fff3e0; border-radius: 4px; color: #e65100">Epic Loop begins</span>

Now the team walks through Maya's evening in slow motion. Every moment, every tap, every hesitation becomes a story candidate.

### Maya's Evening: 10:12 PM

Maya is in bed. She picks up her phone. She sees the Momentum app icon. She taps it.

**Story candidate:** *"Maya sees the Journal tab on the home screen and taps it."*

Wait — where does the Journal live in the app? Is it a tab? A card on the home screen? A separate section? The team discusses for 3 minutes and decides: it is a dedicated tab in the bottom navigation, labeled "Journal" with a pen icon. Simple. Findable.

### 10:13 PM

Maya sees today's prompt: *"What made you smile today?"*

**Story candidates:**
- *"Maya sees a daily prompt when she opens the Journal"*
- *"The prompt changes each day"*
- *"If Maya doesn't like the prompt, she can skip to a blank page"*

The PM writes these on sticky notes and places them under the "Create Entry" activity column.

### 10:14 PM

Maya taps the prompt and starts typing: *"The way my daughter laughed at breakfast when the cat knocked over the milk. Pure chaos, pure joy."*

**Story candidate:** *"Maya types her reflection in a text field below the prompt."*

How much text? What's the limit? The team agrees: minimum 1 character to save, no maximum, but the UI should feel like a notecard, not a document editor. No formatting toolbar. No word count. Just a text area and a save button.

### 10:15 PM

Maya taps "Save." A small star appears briefly near the top of the screen, and her star count goes from 6 to 7.

**Story candidates:**
- *"Maya taps Save and her entry is stored as today's journal entry"*
- *"Maya's star count increases by one when she saves"*
- *"If Maya already saved today and comes back, she sees her entry (editable)"*

### 10:15:30 PM

Maya smiles. She closes the app. Total time: 90 seconds.

That is the experience — four minutes, six moments, all in one continuous session.

The PM now looks at the sticky notes. Six moments. The question is not "what are the stories?" — it is "which of these moments are the *same* story?"

*"Can Maya navigate to the journal, see the prompt, write, and save — and walk away satisfied? Does she need multiple sessions to feel the value?"*

The team agrees: everything from 10:12 to 10:15:30 is **one scene**. Maya arrived with a goal (journal tonight) and completed it. The tab navigation, the prompt display, the text field, the save button, the star animation — these are all moments *within* the same user action. They are not separate stories. They are acceptance criteria.

A new story starts only when the **scene changes**: a different visit, a different intent.

::: details All Story Candidates from This Walkthrough
| # | Story | Epic | Journey Steps |
|---|-------|------|--------------|
| 1 | **Maya writes a daily journal entry** — navigate to journal, see or skip prompt, write reflection, save, earn star | Entry Creation | J1–J4 |
| 2 | **Maya edits an existing journal entry** — return to today's already-saved entry, modify it, save again | Entry Creation | J4 |
| 3 | **Maya reviews her past journal entries** — browse entry list, tap one, read it | Past Entries | J5–J6 |

The walkthrough generated ten sticky-note moments. Three of them are stories. The other seven are acceptance criteria on Story 1.
:::

---

## Step 5 — Shaping a Story Fully

Let's take Story 1 — *"Maya writes a daily journal entry"* — and shape it into a Ready story. This single story covers everything from opening the journal to earning the star. The moments the walkthrough identified (navigation, prompt display, typing, saving, star increment) are all acceptance criteria on this one story, not separate stories.

### The Story Card

```
Title:       Maya writes a daily journal entry
Persona:     Maya (post-content wellness app user)
Story:       As Maya, I want to open the journal, pick a prompt, write
             my reflection, and save — so that I capture a moment of
             my day and feel the small reward of keeping up.
Epic:        E-LW-01 (Entry Creation)
Journey:     J1–J4 (Open → Prompt → Write → Save)
Slice:       S1 (MVP)
```

### Acceptance Criteria

The team runs an Example Mapping session (PM, Developer, QA — 25 minutes). They produce:

**Rule 1: An entry requires at least one character**
- Maya types "Hello" → Save button is enabled
- Maya opens the editor, types nothing → Save button is disabled
- Maya types a space character only → Save button is disabled (whitespace-only doesn't count)

**Rule 2: Save stores the entry for today**
- Maya saves at 9:00 PM → entry is stored with today's date
- Maya opens the Journal again at 10:00 PM → she sees the same entry
- Maya closes the app, reopens it tomorrow → yesterday's entry is in Past Entries, today is fresh

**Rule 3: One entry per calendar day**
- Maya saves, then comes back the same day → she sees her existing entry (editable)
- She edits and saves again → the entry is updated, not duplicated

**Rule 4: Save awards one star (per day)**
- Maya saves for the first time today → star count increments by 1
- Maya edits and saves again the same day → star count does not increment again

**Edge cases identified:**
- What happens at midnight? → The day boundary uses the device's local timezone
- What if the network is down? → Save locally first, sync when connectivity returns (offline-first)
- What if two devices are used? → Out of scope for S1; conflict resolution is S2

### Gherkin Seeds

The QA lead drafts the first scenarios:

```gherkin
Feature: Save Journal Entry

  Scenario: Maya saves a new entry
    Given Maya has selected a prompt and typed at least one character
    When she taps "Save"
    Then her text is stored as today's entry
    And when she opens the Journal again today she sees that entry
    And her star count increases by one

  Scenario: Maya tries to save an empty entry
    Given Maya has opened the journal editor
    And she has not typed any visible characters
    Then the "Save" button is disabled

  Scenario: Maya edits an existing entry
    Given Maya already saved an entry today
    When she modifies the text and taps "Save"
    Then the entry is updated with the new text
    And her star count does not change

  Scenario: Save works offline
    Given Maya has no network connectivity
    When she types an entry and taps "Save"
    Then the entry is saved to local storage
    And a sync icon indicates the entry will upload when connectivity returns
```

### States and Transitions

The developer sketches the state diagram:

```
                 ┌─────────────┐
                 │   Empty     │ (no text, Save disabled)
                 └──────┬──────┘
                        │ user types
                        ▼
                 ┌─────────────┐
                 │   Dirty     │ (text entered, Save enabled)
                 └──────┬──────┘
                        │ taps Save
                        ▼
                 ┌─────────────┐
                 │   Saved     │ (persisted, editable)
                 └──────┬──────┘
                        │ user edits
                        ▼
                 ┌─────────────┐
                 │   Dirty     │ (modified, Save re-enabled)
                 └─────────────┘
```

### The DoR Checklist

| # | Check | Status |
|---|-------|--------|
| 1 | Story format | ✅ "As Maya, I want to save..." |
| 2 | Journey reference | ✅ J4 (Save) |
| 3 | Acceptance criteria | ✅ 4 rules, 10+ examples, edge cases |
| 4 | Visual reference | ✅ Lo-fi wireframe of save button and star animation |
| 5 | Copy / text | ✅ Button: "Save" · Success: (star animation, no text) · Disabled hint: "Write at least a few words" |
| 6 | Observability signal | ✅ Event: `journal.entry.saved` with properties: `user_id`, `date`, `char_count`, `is_first_today` |
| 7 | Dependencies | ✅ Prompt API (available) · Local storage (KMP shared module, exists) |
| 8 | Size | ✅ Team estimate: 2 days |
| 9 | Technical feasibility | ✅ Tech Lead confirmed: KMP shared module, SQLDelight for local persistence |

**Verdict: Ready.** This story crosses the Commitment Point.

---

## Step 6 — The First Slice <span style="font-size: 0.75em; padding: 2px 6px; background: #e8f5e9; border-radius: 4px; color: #2e7d32">Feature Loop · Validate Phase</span>

The PM looks at the story map and asks: *"What is the smallest thing we can ship that proves the journal concept has value?"*

The team debates:

- **Option A:** Ship just "Save entry" (one story). But without "View past entries," Maya can never re-read what she wrote. That feels broken.
- **Option B:** Ship "Save entry" + "View past entries" + "See star count." Three stories. Maya can write, re-read, and feel a small reward. That is a complete experience.
- **Option C:** Add prompts and notifications too. Five stories. More complete, but doubles the delivery time.

They choose **Option B**. Three stories. That is S1 — a Jira Release. Maya can journal, revisit her entries, and see her stars grow. If the metrics move (Day-30 retention increases), the team has evidence to invest in S2 (notifications, animations, streaks). If the metrics don't move, the team learned something valuable without spending a quarter.

::: tip The First Slice Test
Ask two questions:
1. **Is it valuable on its own?** Maya can journal, read back, and see stars. Yes.
2. **Does it test the hypothesis?** If retention doesn't increase, we learn that journaling alone isn't enough — maybe it's the notifications that matter. Yes.

If both answers are yes, you have a good first slice.
:::

### What S1 Does Not Include (and Why)

| Deferred to S2 | Reason |
|----------------|--------|
| Push notifications | Requires notification infrastructure; can measure S1 value without it |
| Star animations | Polish, not core value; static counter is sufficient for S1 |
| Streak tracking | Requires 7+ days of data to be meaningful; premature for MVP |
| Prompt skipping | Can be added after we see if users engage with prompts at all |

| Deferred to S3 (Phase II) | Reason |
|---------------------------|--------|
| AI Reflection | Requires ML infrastructure; separate Initiative if proven valuable |
| Social sharing | "Share my reflection" is a growth feature, not a retention feature |

---

## Step 7 — How It Changed the Team

Two iterations later, the Living Wondrously Journal S1 is live. Day-7 retention for journal users is 58% (vs. 41% baseline). The PM shares the data at the demo. But the bigger change is not in the metrics — it is in the team's behavior.

### Before UDOO Discovery

Conversations sounded like: *"Can we make the button bigger?"* and *"I think we should use React Native for this."* People argued about implementations because there was no shared understanding of the problem.

### After UDOO Discovery

Conversations sound like: *"Does this serve Maya at 10:15 PM?"* and *"Which journey step does this cover?"* People still disagree — but they disagree about *framing*, not buttons. They argue about which problem is most important, not which shade of blue to use.

The PM reports:

> "The biggest change wasn't the journal itself. It was that we stopped arguing about solutions and started arguing about Initiatives. The arguments got harder — but the outcomes got better."

The Tech Lead adds:

> "I used to get tickets that said 'build journal feature.' Now I get stories with Gherkin scenarios, state diagrams, and offline-sync requirements. I spend zero time guessing what the PM meant. I just build."

::: warning This Doesn't Happen Automatically
The transformation described above took three discovery sprints. The first sprint was awkward — people felt like they were "wasting time" on mapping instead of coding. The second sprint was faster because the team had templates and muscle memory. By the third sprint, nobody wanted to go back. Invest in the learning curve.
:::

---

## The Full Picture

Here is the complete UDOO hierarchy for the Living Wondrously Journal, from Initiative to Story:

```
INITIATIVE: Increase Day-30 retention for post-content users
│
└── FEATURE: Living Wondrously Journal
    │
    ├── EPIC: Entry Creation (E-LW-01) — covers J1→J4
    │   ├── Story: Maya writes a daily journal entry        [S1] ← the one we shaped above
    │   │         (open, see/skip prompt, write, save, earn star — one continuous scene)
    │   └── Story: Maya edits an existing journal entry     [S1]
    │             (return to today's saved entry, modify, save — a different visit)
    │
    ├── EPIC: Past Entries (E-LW-02) — covers J5→J6
    │   └── Story: Maya reviews her past journal entries    [S1]
    │             (browse list, tap entry, read, go back — one scene)
    │
    ├── EPIC: Notifications (E-LW-03) — covers J0          [S2]
    │   └── Story: Maya is reminded and returns to journal
    │             (notification arrives, taps it, journal opens at today's entry)
    │
    ├── EPIC: Stars & Streaks (E-LW-04) — covers J4a
    │   └── Story: Maya sees her writing streak grow        [S2]
    │             (star animation + consecutive-day streak counter, after save)
    │
    └── EPIC: AI Reflection (E-LW-05) — covers J7          [S3]
        └── Story: Maya reads her weekly AI reflection
              (AI-generated summary of her entries, delivered at week's end)
```

Five epics. Seven stories. Each story is one scene — one user, one goal, one session. Each scene traces back through Epic → Feature → Initiative. Each story references the journey steps it covers. Each story has acceptance criteria shaped by Example Mapping that cover the happy path, the error states, and the edge cases — all on one story, not spread across five. And every story was born from a single question: *"What is Maya doing right now, and what does she need?"*

That is the Upstream process. Not a waterfall document. Not a Jira ticket factory. A conversation — structured by stations, guided by personas, and validated by data — that transforms noise into clarity.

---

