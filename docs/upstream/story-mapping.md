# Story Mapping

<span class="phase-badge upstream">🔵 Upstream</span>

## What Is Story Mapping?

Story Mapping is a visual technique created by Jeff Patton for organizing user stories into a two-dimensional map that shows the **big picture** and the **details** simultaneously. Instead of a flat backlog list where stories are ranked from 1 to N, a story map arranges work along two axes:

- **Horizontal axis (left → right):** The narrative flow — the sequence of activities a user performs to achieve their goal.
- **Vertical axis (top → bottom):** Priority and detail — the most essential version at the top, progressively richer versions below.

The result is a map that answers three questions at a glance:

1. **What is the full scope?** (read left to right)
2. **What is the minimum viable path?** (read just the top rows)
3. **What ships when?** (read the horizontal slice lines: S1, S2, S3)

::: info Why "Map" and Not "List"?
A flat backlog is a list of ingredients. A story map is a recipe. The list tells you *what* exists; the map tells you *how it fits together*. Teams with lists build features in isolation. Teams with maps build coherent experiences.
:::

---

## The Anatomy of a Story Map

A story map has three structural layers:

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                              THE BACKBONE                                       │
│  ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐     │
│  │ Activity │   │ Activity │   │ Activity │   │ Activity │   │ Activity │     │
│  │    1     │   │    2     │   │    3     │   │    4     │   │    5     │     │
│  └──────────┘   └──────────┘   └──────────┘   └──────────┘   └──────────┘     │
├─────────────────────────────────────────────────────────────────────────────────┤
│                              THE BODY                                           │
│  ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐     │
│  │  Task 1a │   │  Task 2a │   │  Task 3a │   │  Task 4a │   │  Task 5a │     │
│  │  Task 1b │   │  Task 2b │   │  Task 3b │   │  Task 4b │   │  Task 5b │     │
│  │  Task 1c │   │          │   │  Task 3c │   │          │   │  Task 5c │     │
│  │          │   │          │   │  Task 3d │   │          │   │          │     │
│  └──────────┘   └──────────┘   └──────────┘   └──────────┘   └──────────┘     │
├─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ S1 (MVP) line ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┤
│  ┌──────────┐                  ┌──────────┐                  ┌──────────┐     │
│  │  Task 1d │                  │  Task 3e │                  │  Task 5d │     │
│  └──────────┘                  └──────────┘                  └──────────┘     │
├─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ S2 line ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┤
│  ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐     │
│  │  Task 1e │   │  Task 2c │   │  Task 3f │   │  Task 4c │   │  Task 5e │     │
│  └──────────┘   └──────────┘   └──────────┘   └──────────┘   └──────────┘     │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### Layer 1: The Backbone (Activities)

The top row contains **activities** — the big things a user does, expressed as verb phrases. These are not features; they are user goals. Read left to right, they tell the story of a user's journey.

Good activities for a reading app:
```
Discover → Browse → Read → Bookmark → Share
```

Good activities for a social platform:
```
Register → Verify → Match → Chat → Meet
```

### Layer 2: The Body (Tasks / Steps)

Below each activity sit the **tasks** or **steps** — the specific things a user does within that activity. These are more granular. Under "Browse" in a reading app, you might have:

- Search by topic
- Browse by volume
- Filter by category
- View recently opened

### Layer 3: The Stories

Each task can be decomposed into one or more **stories** — the smallest deliverable units that a developer can build and QA can test. Under "Search by topic," you might have:

- User types a search term and sees matching results
- User sees "no results found" when nothing matches
- User taps a result and navigates to the content

### The Slice Lines

Horizontal lines drawn across the map define **release slices**:

- **S1 (MVP):** The minimum end-to-end path. Must cover *every* activity, but only the most essential task under each.
- **S2:** The next most valuable capabilities.
- **S3:** The full experience.

::: tip The Walking Skeleton
The S1 line creates what Alistair Cockburn calls a "walking skeleton" — a thin, end-to-end implementation that touches every major activity but does the minimum at each one. It proves the architecture works and delivers real (if minimal) value. Everything below S1 adds flesh to the skeleton.
:::

---

## How to Run a Story Mapping Session

### Before the Session

| Item | Details |
|------|---------|
| **Participants** | PM, UX Designer, Tech Lead, QA Lead, BA. 4–6 people. More than 7 becomes unwieldy. |
| **Duration** | 60–90 minutes for a Feature-level map. Half a day for a full product. |
| **Materials** | Large wall or digital board (Miro, FigJam). Sticky notes in 3 colours: one for activities, one for tasks, one for stories. Markers. Timer. |
| **Preparation** | Station 1 output (persona, problem statement). The persona should be printed and visible throughout the session. |
| **Facilitator** | One person (usually the PM) runs the session. Their job is to keep the group moving forward, enforce the timer, and prevent solution debates. |

### Phase 1: Build the Top Row (20–30 minutes)

**Goal:** Lay out 6–12 activities in narrative order.

**Process:**
1. The facilitator states the persona and their goal: *"Maya wants to journal daily and feel rewarded for it."*
2. Each participant writes activities on sticky notes — one per note, verb phrase format.
3. Place all notes on the board. Cluster duplicates.
4. Arrange left to right in the order the user would experience them.
5. Read the backbone aloud: *"First Maya opens the app. Then she sees a prompt. Then she writes. Then she saves. Then she views past entries."* Does it make sense as a story?

**Rules:**
- Limit to 8–12 activities. If you have more, you are going too granular — those should be tasks, not activities.
- Every activity must start with a verb: "Browse," "Save," "Match," "Verify."
- If an activity doesn't have a clear "done when..." condition, it is too vague.

::: warning The #1 Mistake: Confusing Activities with Features
An activity is something the **user** does. A feature is something the **system** provides. "Push Notifications" is a feature. "Get Reminded" is an activity. "Admin Dashboard" is a feature. "Monitor Usage" is an activity. Always phrase from the user's perspective.

| ❌ Feature (wrong for top row) | ✅ Activity (correct for top row) |
|-------------------------------|----------------------------------|
| Push Notifications | Get Reminded |
| Search Engine | Find Content |
| Profile Page | Set Up Identity |
| Payment Module | Pay for Service |
| Analytics Dashboard | Understand Progress |
:::

### Phase 2: Fill the Body (20–30 minutes)

**Goal:** Add tasks/steps below each activity.

**Process:**
1. Take one activity at a time. Ask: *"What are all the things Maya might do within this activity?"*
2. Write each task on a sticky note and place it below the activity.
3. Arrange tasks from most essential (top) to least essential (bottom) within each column.
4. Don't worry about stories yet — stay at the task level.

**Facilitation tip:** Give participants 3 minutes of silent writing per activity, then share and arrange. Silent writing prevents the loudest voice from dominating.

### Phase 3: Draw the S1 Line (15–20 minutes)

**Goal:** Define the minimum viable path through the entire map.

**Process:**
1. The facilitator asks: *"What is the shortest end-to-end path a new user could take?"*
2. For each activity, identify the ONE task that is absolutely essential. Draw a line below it.
3. Everything above the line is S1. Everything below is S2 or later.
4. Read the S1 path aloud: *"Maya opens the journal, sees a prompt, writes, saves, and can view past entries."* Is this valuable on its own?

**The S1 test:**
- Does S1 cover every activity? (If not, the user journey has a gap.)
- Is S1 valuable to a real user without S2? (If not, the slice is wrong.)
- Can S1 be built in one sprint? (If not, it's too big — reduce scope.)

### Phase 4: Name the Epics (5–10 minutes)

**Goal:** Group related activities into named epics.

**Process:**
1. Look at the activity columns. Are there natural groupings? (e.g., "Write" + "Save" = Entry Creation)
2. Name each group with a verb-noun phrase.
3. These names become your UDOO Epic names.

### Phase 5: Photograph and Digitize (5 minutes)

Take a photo of the physical board. Transcribe the map into your digital tool (Miro, Confluence, or a simple table in the Initiative Brief). The physical session produces better results, but the digital artifact is what the team references during delivery.

---

## Real Example: Pninei Halacha

The Pninei Halacha app is an offline-first religious reading app serving Hebrew and English users. Here is the story map from the discovery sprint:

### The Backbone

```
Discover        Browse         Read          Support         Return
──────────      ──────────     ──────────    ──────────      ──────────
User finds      User explores  User reads    User supports   User comes
the app and     content by     a chapter     the project     back to
installs it     book/topic     in depth      financially     continue
```

### The Full Map

```
  Discover        Browse           Read              Support         Return
  ─────────       ─────────        ─────────         ─────────       ─────────
  See app in      Browse by        Open a chapter    View support    Open app &
  store           volume           from TOC          options         see last
                                                                     position
S ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─
1  Read app       Search by        Scroll through    See donation    Bookmark
   description    keyword          paragraphs        page            a paragraph
                                   (numbered)

S ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─
2  Share app      Filter by        Adjust text       Monthly         Reading
   link           category         size & theme      recurring       history
                                                     donation

                  Browse by        Footnotes &       In-app          Offline
                  halacha          cross-refs        purchase        download
                  topic                                              manager

S ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─
3  Onboarding     AI-powered       Text-to-speech    Dedication      Sync across
   wizard         Q&A              (for Shabbat      in honor of     devices
                                   prep)             a loved one
```

### What the Map Reveals

1. **S1 is clear:** Browse by volume → Open chapter → Scroll paragraphs → Bookmark → Return to bookmark. Five stories. One sprint.
2. **Search is S1, not S2:** The team initially placed search in S2, but during the mapping session the QA lead pointed out: *"The books have 30+ chapters each. Without search, how does the user find anything?"* Search moved up to S1.
3. **Offline download is S2, not S1:** Surprising, since "offline-first" is the core value proposition. But the team realized that S1 can ship with bundled content (downloaded at install), and the download manager (user chooses which books to sync) is S2. The core offline experience works without a manager.
4. **Text-to-speech is S3:** Valuable for Shabbat preparation (users listen while cooking), but requires significant audio infrastructure. Deferred.

::: tip What Story Mapping Exposed
Without the map, the team would have built "reading" first, then "browsing," then "bookmarking" — three separate vertical features with no end-to-end experience until all three shipped. The map showed that S1 must touch all five activities (Discover through Return) even if it only does the minimum at each. That is the difference between a map and a list.
:::

---

## Real Example: Someone for Coffee

Someone for Coffee is a women-only social networking platform for meeting new people over coffee. The discovery sprint produced this story map:

### The Backbone

```
Register       Verify          Match           Chat           Meet
──────────     ──────────      ──────────      ──────────     ──────────
Create an      Prove you are   Get matched     Talk before    Have the
account with   a real woman    with someone    meeting in     coffee
basic info                     compatible      person         meeting
```

### S1 Slice Decisions

The team's S1 debate was intense. The key question: *"Can we launch without verification?"*

Arguments for skipping verification in S1:
- Faster to ship
- Lets us test matching without the verification friction
- Verification is technically complex (ID upload, manual review)

Arguments for including verification in S1:
- **Safety is the product.** A women-only platform without verification is not women-only — it is just a platform.
- Users will not trust the app if matches are unverified
- The matching algorithm's value depends on match quality, which depends on real profiles

The team chose to include verification in S1. This was a values-driven decision, not a feature-driven one. The story map made this trade-off visible — without it, verification might have been deferred as "non-essential."

```
  Register         Verify           Match            Chat            Meet
  ─────────        ─────────        ─────────        ─────────       ─────────
  Email signup     Upload selfie    See one match    Send a text     Confirm
  + basic          + govt ID        per day          message         meeting
  profile                                                            time

S ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─
1
  Profile photo    Manual review    Preferences      Media           Suggest
  + interests      queue            (distance,       messages        a café
                                    interests)        (photos)

S ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─
2
  Social login     Automated ID     Smart matching   Group chat      Calendar
  (Google/Apple)   verification     (ML scoring)     (3-way coffee)  integration
                   (OCR + liveness)
```

::: details Why "One Match Per Day"?
The team debated showing a list of matches vs. one match per day. The one-per-day model won because:

1. **Reduces decision fatigue** — the core persona is busy; she doesn't want to browse profiles
2. **Increases match quality perception** — scarcity signals that the app is curating, not dumping
3. **Simplifies S1** — the matching algorithm only needs to find the best match, not rank 20

This is a product decision, not a technical one. But it emerged from the story mapping session because the team was thinking about the user's experience, not the feature list.
:::

---

## The Wrong Way: A Flat Backlog

Here is the same Pninei Halacha work organized as a traditional flat backlog:

```
BACKLOG (prioritized list)
──────────────────────────
1. User can browse books by volume
2. User can open a chapter
3. User can scroll through paragraphs
4. User can search by keyword
5. User can bookmark a paragraph
6. User can return to a bookmark
7. User can filter by category
8. User can adjust text size
9. User can adjust theme (light/dark)
10. User can view footnotes
11. User can see cross-references
12. User can download books for offline
13. User can view donation page
14. User can share app link
15. User can browse by halacha topic
16. User can set up recurring donation
17. User can view reading history
18. User can use text-to-speech
19. User sees onboarding wizard
20. User can use AI Q&A
```

### What the Flat Backlog Hides

| Problem | Consequence |
|---------|------------|
| **No narrative flow** | Stories 1, 4, 7, and 15 are all "browse" activities, but they are scattered across the list. You cannot see that "Browse" is a single user activity. |
| **No slice boundaries** | Where does S1 end? Is it the top 6? The top 10? You can't tell from a list. |
| **No end-to-end path** | If you build items 1–6 in order, the user can browse, read, and bookmark. But "Discover" (finding the app) and "Support" (donating) are at positions 13–16. The sprint ships a reading experience with no acquisition story and no monetisation story. |
| **No visual gaps** | The story map shows that "Return" has only 2 stories — that is a visual signal that the team hasn't thought enough about re-engagement. A flat list hides this gap. |
| **Encourages top-down execution** | Teams read lists top to bottom and build in that order. They build "browse" six different ways before they build "read" at all. |

The story map solves all five problems by adding the second dimension: narrative flow. The same 20 stories become a coherent picture instead of a shopping list.

---

## Common Mistakes

### Mistake 1: Too Many Activities

**Symptom:** The backbone has 15–20 activities. The map sprawls across multiple screens.

**Fix:** Merge activities. If "Open app," "Navigate to Journal," and "See home screen" are three separate activities, they should be one: "Open Journal." Activities are big user goals, not UI interactions.

### Mistake 2: Confusing Activities with Features

**Symptom:** The top row reads: "Push Notifications," "Admin Panel," "API Integration," "Database Migration."

**Fix:** Ask: "Who is the user, and what verb are they performing?" Features belong in the body of the map (as tasks or stories), not in the backbone. The backbone is always from the user's perspective.

### Mistake 3: Forgetting the Backbone

**Symptom:** The team skips the top row and jumps straight to writing stories. The result is a flat backlog arranged in columns — it looks like a map but has no narrative flow.

**Fix:** Build the backbone first and read it aloud as a story. Only then add tasks below. If the backbone doesn't read as a coherent user journey, no amount of stories will fix the map.

### Mistake 4: Building the Map Alone

**Symptom:** The PM builds the story map solo and presents it to the team as a finished artifact.

**Fix:** Story mapping is a collaborative discovery activity. The value is as much in the *conversation* as in the *artifact*. When the developer says "Wait, how does the user get from Browse to Read?", that is discovery happening in real time. A solo-built map misses those moments.

### Mistake 5: Not Updating the Map

**Symptom:** The map was built on Day 2 of the discovery sprint and never touched again. By sprint 3 of delivery, the map bears no resemblance to what was actually built.

**Fix:** The map is a living artifact. Update it during sprint planning (new stories appear, completed ones get marked, scope changes are reflected). The map should always answer: "Where are we?"

### Mistake 6: Horizontal Slicing

**Symptom:** S1 = "all the backend APIs," S2 = "all the frontend UI," S3 = "all the mobile."

**Fix:** Every slice must be **vertical** — it must touch every activity in the backbone and deliver a complete (if minimal) user experience. S1 is not a layer; it is a *walking skeleton*.

::: danger The Horizontal Slice Trap
```
❌ HORIZONTAL SLICING             ✅ VERTICAL SLICING

S1: Backend APIs                  S1: User can browse, read, and
S2: Frontend Web UI                   bookmark — across all layers
S3: Mobile App                    S2: User can search, filter,
                                       adjust text — across all layers
Problem: No user can use S1.      S3: Full experience with offline,
No value delivered until S3.           sharing, donations
```
:::

---

## Connection to UDOO

Story Mapping is the engine of **Station 3 — User Journey & Slices**. Here is how the map's components map to UDOO concepts:

| Story Map Component | UDOO Concept | Where It Lives |
|-------------------|-------------|----------------|
| Activities (top row) | Journey steps (J1, J2, J3...) | Initiative Brief, journey map |
| Activity groups | Epics | Jira Epics, Confluence Feature page |
| Tasks (body) | Story candidates | Story backlog |
| S1 line | MVP slice | Initiative Brief (frozen at Station 5) |
| S2, S3 lines | Future slices | Roadmap, Feature page |

The story map also feeds other stations:

- **Station 1 (Vision & Context):** The backbone validates the persona's journey. If the persona can't walk the backbone, the persona or the map is wrong.
- **Station 2 (Problem Framing):** Pain points annotated on the map become assumptions to test.
- **Station 4 (Solution Options):** Alternative solutions might rearrange the backbone or change which tasks are in S1.
- **Station 5 (Decision & Scope):** The slice lines are frozen at stakeholder approval. Changes after freeze require a logged decision.

---

## Tips for Remote / Digital Story Mapping

Physical story maps (sticky notes on a wall) produce the best conversations. But remote teams need digital alternatives.

### Recommended Tools

| Tool | Strength | Limitation |
|------|----------|-----------|
| **Miro** | Templates for story maps, infinite canvas, voting | Can feel overwhelming with too many features |
| **FigJam** | Tight integration with Figma, great for design-heavy teams | Less structured templates |
| **Notion** | Good for async work, easy to link to other pages | Loses the spatial/visual dimension |
| **Simple spreadsheet** | Everyone has it, low barrier | Lacks the visual impact of a real map |

### Remote Facilitation Tips

1. **Pre-populate the persona and problem statement** on the board before the session. Don't spend the first 15 minutes setting context — have it visible from the start.
2. **Use silent writing** (3 minutes of individual brainstorming before sharing). Remote groups are even more prone to "loudest voice wins" than in-person groups.
3. **Timebox aggressively.** Remote attention span is shorter. Run 60-minute sessions, not 90.
4. **Vote with dots.** After adding tasks, give each participant 3 dot votes for "most essential for S1." This surfaces priorities quickly.
5. **Record the session.** The conversation is as valuable as the artifact. Capture it for team members who couldn't attend.
6. **Assign a "backbone guardian."** One person (not the facilitator) watches the top row and speaks up if activities are being confused with features or tasks.

::: tip The "Two-Screen" Setup
For remote story mapping, encourage participants to use two screens (or a tablet + laptop): one screen for the Miro/FigJam board, and one for the video call. Trying to do both on one screen leads to constant tab-switching and lost context.
:::

---

## Story Map Maintenance During Delivery

The story map does not retire after the discovery sprint. During Downstream delivery, it serves three purposes:

### 1. Sprint Planning Anchor

At sprint planning, the PM opens the story map and walks the team through: *"Here is where we are. These stories are done (marked green). These are in this sprint (marked yellow). These are next (unmarked)."* The map provides spatial context that a flat backlog cannot.

### 2. Scope Change Visualisation

When a stakeholder requests a new feature, add it to the map. If it sits below the S1 line, it is clearly deferred. If it sits above, the team can see what it displaces. The map makes trade-offs visible.

### 3. Coverage Gap Detection

After a few sprints, look at the map. Are there activities with no green (completed) stories? Those are gaps in the user experience. Are there activities with all stories completed? That activity might be over-invested.

---

## Summary

| Concept | Description |
|---------|------------|
| **Backbone** | 6–12 activities (verb phrases) telling the user's story left-to-right |
| **Body** | Tasks/steps below each activity, ordered by priority top-to-bottom |
| **Stories** | Smallest deliverable units, the lowest level of the map |
| **S1 Line** | The walking skeleton — minimum end-to-end viable path |
| **S2, S3 Lines** | Subsequent releases adding richness and breadth |
| **Slice rule** | Every slice must be vertical (touch all activities), never horizontal |
| **Session** | 60–90 min, 4–6 people, persona visible, facilitator enforces time |
| **Living artifact** | Updated during delivery, not frozen after discovery |

::: tip Jeff Patton's One Rule
*"The goal of a story map is not to build a map. It is to build a shared understanding."*

If the team finishes the session and everyone has a clear, shared picture of what the user does, what ships first, and why — the map has done its job, even if it is messy, incomplete, and covered in coffee stains.
:::

---

