# Epic or Feature? How to Tell

<span class="phase-badge upstream">🔵 Upstream</span>

The confusion usually surfaces in a planning session. Someone says "the journal feature" and someone else says "the journal epic" and for ten minutes nobody is sure they're talking about the same scope. The meeting moves on. The ambiguity stays.

It matters because the two levels do different work — and getting it wrong doesn't just create messy Jira tickets. It means either the Experience Snapshot never gets written, or you're writing one for something too small to need it. One of those leaves your team building for imagined users. The other wastes an afternoon.

---

## The Fastest Test

**Feature:** A user couldn't do this before. Now they can. It changes their relationship with the product.

**Epic:** The feature is already defined. This epic handles one structured section of how that feature gets built.

If you're still unsure: the Experience Snapshot test is definitive. If this thing needs a day-in-the-life narrative of a named person in a specific moment — it's a Feature. If it's a cluster of stories that together complete one section of the user journey — it's an Epic.

---

## The Same Example, Seen From Both Levels

The [hierarchy page](/guide/hierarchy) established this structure for the Living Wondrously app:

```
Initiative: Create a daily ritual that increases emotional connection
  └── Feature: Living Wondrously Journal
        ├── Epic: Entry Creation & Prompt Flow  (S1)
        ├── Epic: Past Entries                  (S1)
        ├── Epic: Stars & Streaks               (S2)
        └── Epic: AI Reflection                 (S3)
```

**The Feature is "Living Wondrously Journal."** It has:

- An Experience Snapshot: Maya at 10pm, the day winding down, sitting with her phone for three minutes, writing one honest thing about her day
- A KPI: repeat weekly visits +15%
- A scope boundary: writing, saving, reading back — not AI, not social
- An emotional aim: calm, clarity, a small ritual that becomes a habit

**The Epics have none of those things.** "Entry Creation" is not an Experience Snapshot — it's a functional cluster. "Stars & Streaks" is not a KPI — it serves the KPI of the Feature it belongs to. "Past Entries" is not an emotional aim — it's a journey section (browsing history).

That's the difference. The Feature is the soul. The Epics are the structure.

---

## The Common Mistakes

### Calling an Epic a Feature — and skipping the Experience Snapshot

When teams go straight from Initiative to Epics, no one writes the Experience Snapshot. The epics exist. The stories get written. But nobody on the team can say — in one sentence, without opening Jira — what it actually feels like to use the thing.

Design gets built for imagined users. Scope creeps because there's no emotional aim to anchor decisions. At the sprint review, the team demos a complete set of working stories and feels vaguely dissatisfied. The reason: they built the right pieces but never agreed on the right feeling.

### Calling a Feature an Epic because it "seems too small"

Small doesn't mean it isn't a Feature. "Maya can write a journal entry" is small — deliverable in one sprint. But it completely changes what the user can do. They went from having no journalling capability to having one. That's a Feature.

Write the Experience Snapshot. Name the KPI. Without those, you won't know whether you built the right thing after you ship it — because you never agreed on what "right" felt like.

### Treating scope creep as an Epic problem when it's actually a Feature problem

If the team keeps arguing about whether stars belong in S1, whether notifications are essential, whether you really need the back-button behavior — those arguments are a sign the Feature isn't defined clearly. The fix is not a more detailed Epic breakdown. It's returning to the Feature Brief and answering: what is the minimum that creates the feeling we're after?

In the [grooming session](/upstream/grooming-session), Lior caught that stars didn't belong in S1 because the team had already agreed on the Feature's emotional aim: calm, simple, daily. Stars are a habit-reinforcement mechanism — valuable, but S2. The Feature Brief was the anchor that made that decision obvious.

---

## The Decision Table

| Question | Points toward... |
|---|---|
| Does it have its own Experience Snapshot? | Feature |
| Does it have its own KPI? | Feature or Initiative |
| Does it trace to a named section of the user journey? | Epic |
| Does it describe one user action in one scene (1–3 days)? | Story |
| Is it a business problem with no solution named yet? | Initiative |

When still unsure: ask whether removing this thing would change the *initiative scope* or just the *build sequence*.

If removing it changes the initiative — it's a Feature. The initiative's KPI or user group shifts without it.

If removing it just resequences other work — it's an Epic. The initiative still makes sense. The team just builds in a different order.

---

## A Note on Nesting

Features can contain many Epics. But an Epic should never span two Features — that's a sign one of the Feature boundaries is wrong.

Stories always belong to exactly one Epic. If a story seems relevant to two Epics, either the story is two scenes that should be split, or the two Epics are really one.

The hierarchy is not decoration. Every item in your backlog should have a clean line upward: Story → Epic → Feature → Initiative. If that line breaks anywhere, the thing isn't ready to be built — it's ready to be clarified.
