# The Experience Snapshot

Before designing a screen, before writing a story, before naming an epic — write the snapshot.

The Experience Snapshot is a short, human narrative. It puts one real person in one real moment and walks through what they experience. It is written in plain language, not product language. It describes feeling, not functionality. And it is created at the Feature layer — before any design or technical work begins.

If you can't write it, the Feature isn't clear enough yet. That's the point.

---

## Why It Exists

Every team has experienced the same failure mode: a Feature gets built, shipped, and celebrated — and then users don't respond the way the team expected.

The feature was technically correct. The AC was met. The QA passed.

But nobody stopped to ask: *What is it like to be the person using this?*

The Experience Snapshot exists to answer that question early — when changing direction is cheap, when the team is still thinking in concepts rather than in code.

It does three things:
1. **Anchors empathy** — it forces the team to think through a real person's eyes, not a product spec
2. **Reveals scope ambiguity** — if the narrative breaks down or feels awkward, the Feature isn't properly defined
3. **Aligns the team** — everyone can read it, visualise it, and work from it, regardless of discipline

A designer reading the snapshot knows what emotional state to design for.
A developer reading it knows what the experience should feel like at the seams.
A QA engineer reading it knows what failure would look like from the user's perspective.

---

## Format

An Experience Snapshot is 100–250 words. No wireframes. No user stories. No AC. Just the narrative.

**Structure:**

```
Character:    [Name, role, relevant context]
Moment:       [When and where this happens, emotional starting state]
The journey:  [What they do, step by step, in plain language]
The feeling:  [How they feel at the end — what changed for them]
```

**Rules:**
- Write it in third person with a named fictional user (not "the user")
- Ground it in a specific time, place, and emotional context
- Describe the experience as it should feel, not how the system should work
- Keep it to one sitting to read — if it takes more than 2 minutes, it's too long
- Write it before any UI, before any Figma mockup, before any technical design

---

## A Complete Example

> **Feature:** Living Wondrously Journal

**Character:**
Maya, 34. Works in healthcare administration. Three children. She joined the app six weeks ago after a friend recommended it. She opens the app maybe twice a week, usually when she gets a new content notification. She doesn't feel like she *belongs* to the app yet — it's a visitor relationship, not a home.

**Moment:**
Tuesday evening, 10:17pm. The kids are finally asleep. The kitchen is still messy but she's choosing to sit down for five minutes before facing it. She's not looking for anything big. She just wants one moment that's hers.

**The journey:**
She opens the app. The Journal is right there on the home screen — a gentle, simple entry point. There's a prompt waiting for her: *"What made you smile today, even briefly?"*

She almost puts the phone down. But the question is small enough to answer. She taps into the writing space. She types four sentences about her youngest daughter mispronouncing "spaghetti" at dinner. She hits save.

The app responds quietly — no fanfare, just a small star added to a simple row of days. She can see she's written on 3 of the last 7 days. Nothing dramatic. Just a quiet record that she showed up.

She puts the phone down. The kitchen can wait another five minutes.

**The feeling:**
She didn't accomplish anything important. But she noticed something that mattered to her, wrote it down, and the app witnessed it. She feels slightly more herself than she did ten minutes ago.

---

## What the Snapshot Reveals

Notice what this short narrative tells the team without ever writing a specification:

| Implication | Design/Tech decision it informs |
|---|---|
| Maya is tired and time-limited | The entry flow must be fast — under 30 seconds to first word |
| The prompt must be small enough to answer | Prompts should feel inviting, not demanding |
| The response must feel quiet, not celebratory | No confetti, no streaks-on-fire animations |
| She needs to see her history simply | A minimal calendar view, not a complex dashboard |
| The app is building a relationship over time | State must persist reliably — losing an entry would break trust |
| She might not write every day | Missing days should not feel punishing |

None of these decisions required a meeting. They came naturally from one paragraph of empathetic narrative.

---

## Personas Are Company Artifacts

The persona — Maya, Avi, Noa — is not recreated per initiative or per feature.

Personas are defined once, at the product level, and stored in the [Project Master Document](/upstream/project-master-doc). They represent the real user types discovered through research and refined over time. Once a persona exists, every initiative and every feature references her — it does not reinvent her.

What changes per feature is the **moment and context** of the snapshot, not the persona herself.

Maya is always Maya: 34, working mother, healthcare administrator, building a reflection habit. What changes between the Journal Entry feature and the Past Entries Browser feature is the specific moment she finds herself in — Tuesday at 10pm typing a reflection vs. Sunday morning revisiting a memory from last month. Same person. Different scene.

::: info When to create a new persona
Add a new persona only when user research reveals a genuinely new user type — someone with a different job-to-be-done, a fundamentally different context, or a failure mode that doesn't apply to existing personas. "Another type of professional" is a variant, not a new persona. New personas come from evidence, not brainstorming.
:::

**The practical rule:** Before writing a new Experience Snapshot, check the Project Master Document. If the persona already exists, use her. Write the new moment, reference the existing character. If a new persona is genuinely needed, add her to the master document first — so she becomes a company artifact, not a feature-specific note.

---

## When to Write It

The Experience Snapshot is written during the **Feature Loop** (F-2), before epics are defined.

**The test:** If you can read the snapshot aloud to the team and they all visualise the same thing, the Feature is real. If people visualise different things — or the narrative has gaps or awkwardness — the Feature needs more definition before it can be broken into epics.

---

## Writing Tips

**Start with the emotional state, not the action.**
What is the user feeling before they open this feature? Rushed, curious, anxious, hopeful? That emotional starting point determines everything about what the design needs to do.

**Name the moment specifically.**
"On a Tuesday evening" is more powerful than "when the user wants to use the feature." Specificity makes it real. Real makes it empathetic.

**Describe the experience at the seams.**
The most revealing moments are the transitions: what does the user see when they first open the feature? What happens when they complete the action? What do they take away when they close the app?

**Write what the user feels, not what the system does.**
"She sees a confirmation message" is a system description. "The app responds quietly — she feels witnessed" is an experience description. Aim for the second.

**If the narrative breaks down, stop.**
If you write "and then she... completes the action... and it works" — you've hit an undefined moment. Go back and clarify the Feature before proceeding.

---

## Variations by Feature Type

Not all features have a single emotional user. Adapt accordingly:

| Feature type | Adaptation |
|---|---|
| **Admin / back-office feature** | Focus on the task context: time pressure, data volume, decision stakes |
| **Developer tool** | Focus on cognitive load: what does the developer need to understand quickly? |
| **API / integration** | Write the snapshot from the perspective of the *consuming team's* experience |
| **Notification / async feature** | Write the moment the notification arrives, not just the destination |
| **Multi-role feature** | Write two snapshots — one per role (e.g., requester + approver) |

---

## Common Mistakes

| Mistake | Why it fails | Fix |
|---|---|---|
| Writing it in product language ("the user navigates to the X screen") | Describes the system, not the person | Rewrite in human language — remove screen names |
| Writing it after the mockup already exists | Defeats the purpose — the design has already made the decisions | Write it before anyone opens Figma |
| Making the snapshot too long | Team won't read it; it becomes a spec in disguise | Keep it to 200 words max |
| Using "the user" instead of a named person | Anonymous = no empathy | Name the person, give them context |
| Writing it for the PM only | If the dev and QA haven't read it, it hasn't served its purpose | Read it aloud in the Feature kickoff meeting |
| Skipping it for "simple" features | Even simple features benefit from one paragraph of empathy | There is no Feature too simple for a 2-minute snapshot |
