# Station 3 — User Journey & Slices

<span class="phase-badge upstream">🔵 Upstream</span>

::: info Where this fits in the spiral
Station 3 belongs to the **Feature Loop** (Phase 1–2 — Frame and Structure). It is the core of [Feature Activity F-3 (User Journey Mapping)](/upstream/feature-activities) and directly informs F-5 (Define Epics). Every Epic in the system should trace back to the journey steps mapped here. The slicing model (S1/S2/S3) built in this station becomes the Feature Slice in F-7.
:::

## Purpose

Station 3 is where the abstract problem becomes a concrete, walkable path. The user journey map is the connective tissue of the entire framework — every Epic, every Story, and every test scenario traces back to a step on this map.

A good journey map answers three questions at a glance:
1. **What does the user actually do?** (Activities — top-row verbs)
2. **Where does it hurt?** (Pain points and risks per step)
3. **What do we build first?** (Slices — thin end-to-end paths)

---

## The User Journey Map

A user journey is a **step-by-step narration of what a user does to achieve their goal**, annotated with their emotional state, pain points, and risk.

### Identifying Activities (Top-Row Verbs)

Activities are the major phases of the user's experience. They are always **verbs** — things the user *does*, not things the product *has*. Each activity will typically map to one Epic.

::: tip How to Find Activities
Ask: "If I watched the user over their shoulder for a week, what would I see them doing?" Write each answer as a verb phrase. These become the column headers of your journey map.
:::

**Common activity patterns by product type:**

| Product Type | Typical Activities |
|-------------|-------------------|
| Reading app | Discover → Install → Browse → Read → Share → Support |
| Social app | Sign Up → Create Profile → Discover People → Connect → Meet → Return |
| Journal app | Onboard → Capture → Reflect → Review → Share |
| LMS platform | Enrol → Navigate → Learn → Practice → Assess → Certify |
| SaaS tool | Sign Up → Configure → First Use → Integrate → Habituate → Expand |

**Anti-pattern check:** If your "activities" are nouns like "Dashboard", "Settings", "Reports" — you're listing features, not activities. Translate: "Dashboard" → "Monitor Progress". "Settings" → "Personalise Experience". "Reports" → "Analyse Results".

---

### The Step ID System

Each step gets an ID (J1, J2, …) and a verb-noun title. The ID is the universal reference used across the entire framework — in Epics, Stories, test cases, and bug reports.

**Format:**
```
J[number]: [Verb] [noun/object]
```

**Naming rules:**
- Always start with a user-perspective verb: *Discovers*, *Chooses*, *Reads*, *Searches* — not system verbs like *Renders*, *Processes*, *Stores*
- Keep titles to 2–4 words
- Number sequentially within each activity group
- Re-number if you insert steps (or use J3a, J3b for minor additions)

**Example — Wallet Balance initiative:**
```
J1: Discovers app / feature
J2: Logs in or authenticates  
J3: Navigates to dashboard
J4: Views wallet balance card
J5: Notices discrepancy
J6: Contacts support OR trusts display and continues
```

---

### Journey Map Table

For each step, capture:

| Step | Action (User) | User Feeling | Pain / Risk | Notes |
|------|--------------|--------------|-------------|-------|
| J1 | Opens app to check balance | Neutral → Anxious | Unclear entry point | Mobile + Web |
| J2 | Logs in | Routine | None | Auth is out of scope |
| J3 | Navigates to dashboard | Expects quick load | Slow load increases distrust | < 1s target |
| J4 | Views balance card | Expects correct amount | **Sees $0.00 instead of -$125.50** | ← Root pain |
| J5 | Doubts the number | Confused / Frustrated | May contact support | 140 tickets/month |
| J6 | Contacts support OR accepts wrong data | Defeated / Accepting | Trust damaged permanently | Churn risk |

---

## Complete Example: Pninei Halacha Journey Map

This is a full journey map for the Pninei Halacha reading app. Persona: **Avi**, a religious reader who studies Jewish law during his daily commute.

### Activities (Top Row)

```
Install → Choose Basics → Browse Library → Read → Support
```

### Full Journey Map

| Step | Activity | Action (Avi) | Feeling | Pain / Risk | Epic |
|------|----------|-------------|---------|-------------|------|
| J1 | Install | Finds app in store, downloads | Curious, hopeful | Store listing must convey value in 3 seconds | E1: Onboarding |
| J2 | Install | Opens app for first time | Expectant | Overwhelming content = immediate bounce | E1: Onboarding |
| J3 | Choose Basics | Selects preferred volume/topic | Engaged | Too many choices → paralysis | E1: Onboarding |
| J4 | Choose Basics | Sets reading preferences (font size, theme) | In control | Must be fast — Avi is on the bus in 2 min | E1: Onboarding |
| J5 | Browse Library | Scans table of contents | Purposeful | Structure must mirror physical book (familiarity) | E2: Library |
| J6 | Browse Library | Searches for a specific ruling | Focused, time-pressed | **Search must work in Hebrew with nikud variations** | E2: Library |
| J7 | Read | Opens a chapter, begins reading | Calm, absorbed | Text must be comfortable on small screen | E3: Reader |
| J8 | Read | Scrolls through long chapter | In flow | **Losing place = frustration; need progress indicator** | E3: Reader |
| J9 | Read | Bus enters tunnel — loses signal | Unaware (ideal) / Anxious (if broken) | **Offline must work seamlessly — no error states** | E3: Reader |
| J10 | Read | Bookmarks passage for study partner | Satisfied | Must be one-tap, not a multi-step flow | E3: Reader |
| J11 | Read | Closes app, reopens next day | Expects continuity | **Must resume exact scroll position** | E3: Reader |
| J12 | Support | Wants to report a typo or error | Helpful, engaged | Easy feedback channel prevents frustration | E4: Support |
| J13 | Support | Tells a friend about the app | Proud, advocating | Share must include deep link to specific passage | E4: Support |

### Naming Value Themes (Epics)

Each activity group becomes an **Epic** — a container for related stories that deliver a coherent slice of user value:

| Activity Group | Epic | Journey Steps |
|---------------|------|---------------|
| Install + Choose Basics | **E1: Onboarding** | J1–J4 |
| Browse Library | **E2: Library & Search** | J5–J6 |
| Read | **E3: Reader Experience** | J7–J11 |
| Support | **E4: Feedback & Sharing** | J12–J13 |

::: info Epic Naming Convention
Name epics after the **value theme**, not the technical component. "Reader Experience" (good) vs. "ContentView Component" (bad). The epic name should be meaningful to a stakeholder who has never seen your codebase.
:::

---

## Slices

A slice is a **thin, end-to-end path through the journey** that delivers real user value. Slices are the unit of MVP planning.

### The Walking Skeleton

The first slice (S1) should be a **walking skeleton**: the thinnest possible end-to-end path that proves the architecture works and delivers a minimal but complete user experience.

::: tip What Makes a Good Walking Skeleton?
A walking skeleton is *not* a prototype or a proof-of-concept. It is **production code** that works end-to-end, but handles only the simplest happy path. Think of it as the frame of a house — no paint, no furniture, but structurally sound and liveable.
:::

**Pninei Halacha walking skeleton:**
```
S1: Avi opens the app → sees one volume → reads one chapter → closes and
    reopens to find his place.

Covers: J1 → J2 → J7 → J8 → J11 (skip J3-J6, minimal J9-J10)
What it proves: content rendering, offline storage, position persistence
What it skips: search, bookmarks, multiple volumes, settings, sharing
```

### Slice Planning Format

```
S1 (MVP — Walking Skeleton): J1 → J2 → J7 → J8 → J11
  - User can install, open app, read one pre-loaded volume
  - Text renders correctly on mobile with comfortable defaults
  - Closing and reopening preserves reading position
  - Content available offline (pre-bundled, not yet synced)
  - Out of scope: search, bookmarks, settings, multi-volume, sharing

S2 (Library & Personalisation): J3 → J4 → J5 → J6
  - Full volume library with table of contents
  - Search across all volumes (Hebrew with nikud tolerance)
  - Reading preferences: font size, light/dark theme
  - Requires: content sync infrastructure from S1

S3 (Engagement & Retention): J9 → J10 → J12 → J13
  - Robust offline with background sync
  - One-tap bookmarking with bookmark list
  - Typo/error reporting flow
  - Share passage via deep link
  - Requires: reader from S1, library from S2
```

### Why Slices Beat Big Bangs

| Approach | Risk | Feedback speed | Learning |
|----------|------|---------------|----------|
| Deliver S1 → learn → S2 → learn → S3 | Low | Fast | Continuous |
| Deliver S1+S2+S3 together | High | Slow | All-or-nothing |

Slices force conversations: *"If we only shipped S1, would it be valuable?"* If yes, ship S1 first.

::: warning The Slice Litmus Test
For each slice, ask: **"Can a real user achieve a real goal with only this slice?"** If the answer is no, the slice is too thin — it's a technical layer, not a user slice. Avi can read a chapter with S1. That's real value. A slice that only builds the API but has no UI is not a user slice — it's a technical task.
:::

---

## Where This Maps to Code

The real-world RCA example shows a bug at step **J4**: the `WalletCard.vue` component clamped negative balances to zero. Had the Story for J4 included:

```
AC: Given a user has a balance of -$125.50
    When they view the dashboard balance card
    Then the card displays "-$125.50" correctly formatted
```

…the bug would have been caught in unit tests before it ever reached staging.

---

## Whiteboard-to-Jira Process

Journey maps start as collaborative whiteboard sessions and must be translated into structured Jira artefacts. Here's how:

### Step 1: The Whiteboard Session

**Who:** PM, UX designer, Tech Lead, QA Lead, 1–2 developers
**Duration:** 60–90 minutes
**Materials:** Physical whiteboard or digital tool (Miro, FigJam), sticky notes in 4 colours

| Sticky Colour | Represents |
|--------------|------------|
| 🟡 Yellow | User action / step |
| 🔴 Red | Pain point / risk |
| 🟢 Green | Opportunity / delight moment |
| 🔵 Blue | Open question / assumption |

**Process:**
1. Write the persona name and goal at the top
2. Lay out activities (top-row verbs) left to right
3. Under each activity, add yellow stickies for each user step (verb-noun)
4. Walk through the entire journey aloud — "Avi opens the app… he sees…"
5. Add red stickies where pain exists, green where delight opportunities are
6. Add blue stickies for unresolved questions
7. Number the steps: J1, J2, J3…
8. Draw slice boundaries with horizontal lines (S1, S2, S3)
9. Take a photo of the whiteboard

### Step 2: Digitise to Confluence

Transfer the whiteboard to a structured Confluence page:
- Journey map table (the format shown above)
- Slice definitions with scope and out-of-scope
- Open questions with owners and due dates
- Link the whiteboard photo for reference

### Step 3: Create Jira Structure

```
Initiative (Jira Initiative)
  └── Feature (Jira Feature — optional, used for large initiatives)
       └── Epic: E1 Onboarding (Journey: J1–J4)
       │    ├── Story: First-time app open shows welcome flow (J1, J2)
       │    ├── Story: User selects preferred volume (J3)
       │    └── Story: User sets reading preferences (J4)
       └── Epic: E2 Library & Search (Journey: J5–J6)
       │    ├── Story: Browse table of contents (J5)
       │    └── Story: Search across volumes with nikud tolerance (J6)
       └── Epic: E3 Reader Experience (Journey: J7–J11)
            ├── Story: Read chapter with comfortable mobile formatting (J7)
            ├── Story: Progress indicator for long chapters (J8)
            ├── Story: Offline reading without error states (J9)
            ├── Story: One-tap bookmark (J10)
            └── Story: Resume exact position on reopen (J11)
```

### Step 4: Cross-Reference Everything

Every Epic and Story **must** reference the journey step(s) it covers.

**Epic field:**
```
Journey coverage: J3–J5
```

**Story field:**
```
Journey step(s): J4
```

This is how QA knows what to test, how PMs know what's shipping, and how future developers understand why a component exists.

---

## Facilitating Journey Mapping Sessions

::: details Facilitation Checklist
**Before the session:**
- [ ] Persona and problem statement from Station 1 are printed/visible
- [ ] Experience Snapshot is read aloud at session start
- [ ] Whiteboard or Miro board is prepared with activity headers
- [ ] All participants have reviewed Station 1 output

**During the session:**
- [ ] Facilitator (PM or BA) walks the group through the journey aloud
- [ ] "No solutioning" rule for the first 30 minutes — focus on what the user does, not how the product works
- [ ] Capture disagreements as blue stickies, don't resolve in real-time
- [ ] Time-box to 90 minutes maximum — schedule a follow-up if needed

**After the session:**
- [ ] Photo of whiteboard uploaded to Confluence within 24 hours
- [ ] Digital journey map table created within 48 hours
- [ ] Blue stickies (open questions) assigned to owners with due dates
- [ ] Slice boundaries reviewed with Tech Lead for feasibility
:::

### Common Facilitation Mistakes

| Mistake | Consequence | Fix |
|---------|------------|-----|
| Only PM attends | Journey reflects PM assumptions, not reality | Require PM + UX + Tech Lead + QA minimum |
| Jump to solutions | Map becomes a feature list | Enforce "user verbs only" for first pass |
| Skip the sad path | Only happy-path mapped; edge cases become bugs | Explicitly ask "what goes wrong at each step?" |
| No time-box | Session drifts for 3 hours, energy dies | Hard stop at 90 min; schedule follow-up |

---

## Anti-Patterns

::: danger Anti-Pattern: "The Feature List Disguised as a Journey"
**What it looks like:**
```
J1: Dashboard
J2: Settings page
J3: Export feature
J4: Admin panel
```

**Why it fails:** These are screens, not user actions. There's no user, no verb, no emotional arc, no pain point identification. It's a sitemap pretending to be a journey map.

**What it should look like:**
```
J1: Opens app to check today's progress
J2: Customises notification preferences
J3: Exports weekly report for manager
J4: Reviews team completion rates
```

**The test:** Read each step aloud starting with your persona's name. "Avi opens app to check today's progress" works. "Avi Dashboard" does not.
:::

::: danger Anti-Pattern: "The Infinite Journey"
A journey map with 40+ steps covering every possible path. This is unusable — no one can hold 40 steps in their head, and slice planning becomes impossible.

**The fix:** Limit the primary journey to 8–15 steps. If you have more, you either have multiple personas (split into separate maps) or you're mapping too granularly (combine related micro-steps).
:::

---

## Station 3 Output

- [ ] Journey map with step IDs (J1…Jn) in Confluence (or linked whiteboard)
- [ ] Activities (top-row verbs) identified and named
- [ ] Pain points and risks annotated per step
- [ ] Epics named after value themes with journey step coverage assigned
- [ ] Slice plan: S1 (walking skeleton), S2, S3… with scope and out-of-scope
- [ ] Whiteboard photo uploaded and linked
- [ ] All Epics and Stories have journey step references in Jira

---

