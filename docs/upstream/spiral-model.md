# The Upstream Spiral

<span class="phase-badge upstream">🔵 Upstream</span>

## The Problem This Page Solves

A new initiative arrives. The instinct is to run through discovery once — gather context, map the journey, write stories, hand off. Linear. Sequential. Done in two weeks.

This works for a feature with one epic and five stories. It does not work for anything real.

A real initiative has three to six features. Each feature has four to eight epics. Each epic has three to eight stories. If you try to run all of that through a single two-week sprint, one of two things happens: you rush and ship unprepared stories, or you spend six weeks in a room and the delivery team sits idle.

The solution is not to run everything longer. It is to run different kinds of work at different levels — and to pipeline them so delivery never waits for discovery.

---

## Three Types of Work

Not all Upstream work is the same. The hierarchy — Initiative → Feature → Epic → Story — represents three fundamentally different types of work. Different people, different practices, different outputs.

```
Strategic Alignment          Discovery                    Refinement
───────────────────          ─────────────────            ────────────────────
Direction · OKRs · KPIs      Initiative · Feature         Epic · Story

Who: Leadership + PM         Who: PM + Core Trio          Who: PO + Tech Lead + QA
                             (PM, Designer, Tech Lead)    (the Three Amigos)

Practice: Direction Map,     Practice: 5-Station          Practice: Story Mapping,
OKR setting, Strategic       Discovery Workshop           The Cut, Three Amigos
Synthesis                                                 Grooming, DoR

Question: What problems      Question: Is this the        Question: What exactly
are worth our next           right problem, and           are we building, and is
quarter?                     what's the best approach?    every story ready to start?

Output: Initiative themes    Output: Initiative Brief,    Output: DoR-ready stories
(Now / Next / Later)         Feature Brief, journey       with Gherkin, sizing,
                             maps, validated persona      and design reference
```

**Strategic Alignment** draws on evidence from [Strategic Synthesis](/offstream/strategic-synthesis), OKR retrospectives, and the [Feedback Loop](/offstream/feedback-loop). It happens quarterly and produces the Direction Map.

**Discovery** is the [5-station workshop](/upstream/station-1-vision) — the doctor's visit. The PM and Core Trio validate the problem, map the journey, evaluate options, and commit to a scope. It produces Initiative Briefs and Feature Briefs.

**Refinement** is [story mapping](/upstream/story-mapping), [The Cut](/upstream/the-cut), and [grooming](/upstream/grooming-session). The PO and Three Amigos break known features into buildable stories. Every story passes the [9-point DoR](/upstream/definition-of-ready) before entering Downstream.

These run concurrently. While the PM discovers the next feature, the PO refines stories for the current one. The spiral is the pipeline that makes this possible.

---

## How Discovery Works: The Initiative and Feature Levels

Discovery repeats at two levels. The same five stations, the same Core Trio, the same workshop — but scoped differently each time.

```
🔵 INITIATIVE DISCOVERY (2 weeks)
   Stations 1–5, full scope
   Who is the primary user? Why this, why now?
   What features make up this initiative?
   What does success look like in 90 days?
   OUTPUT → Initiative Brief + prioritized Feature list + S1/S2/S3 slices

      🔵 FEATURE DISCOVERY (1 week, per feature)
         Stations 1–5, scoped to one feature
         How does this feature work end-to-end?
         What are the Epics? What are the technical risks?
         OUTPUT → Feature Brief + journey map + Epic list + ADRs
```

Initiative Discovery runs once per initiative. Feature Discovery runs once per feature — in parallel if the team has capacity, or sequentially if it doesn't.

→ [Initiative Discovery outcomes](/upstream/activities-sprint)
→ [Feature Discovery outcomes](/upstream/feature-activities)

---

## How Refinement Works: Epic Refinement

Refinement is different from discovery. The problem is validated. The feature is shaped. The journey is mapped. Now the team needs buildable stories.

Different people lead. The PO owns the backlog, not the PM. The Three Amigos (PO, Tech Lead, QA) do the work, not the Core Trio. The practices are different: story mapping, The Cut, example mapping, Gherkin, DoR.

```
      🟢 EPIC REFINEMENT (2–3 days, per epic)
         Story map the epic's journey section
         Draw The Cut — which stories to refine now
         Three Amigos grooming for each story
         OUTPUT → DoR-ready Stories → enter Downstream
```

::: warning Discovery and refinement are not the same practice at different scales
Teams that use discovery practices for refinement — running five stations to write a story — waste time on questions that are already answered. Teams that use refinement practices for discovery — jumping straight to story mapping without validating the problem — waste sprints building the wrong thing.

The boundary is clear: **if you don't have a Feature Brief, you're still in discovery. If you do, you're in refinement.**
:::

→ [Epic Refinement outcomes](/upstream/epic-activities)
→ [Story Mapping](/upstream/story-mapping)
→ [The Cut](/upstream/the-cut)

---

## The Pipeline: Discovery and Refinement Run Concurrently

The spiral does not run sequentially. Discovery feeds refinement. Refinement feeds delivery. All three run at the same time on different features.

```
Week 1–2  │ Initiative Discovery → Feature List (A, B, C)
           │
Week 3    │ Feature Discovery: A ─────────────────────► Epic List (A1, A2, A3)
           │ Feature Discovery: B begins
           │
Week 4    │ Epic Refinement: A1 ──────────────────────► Ready Stories → Dev starts
           │ Epic Refinement: A2 begins
           │ Feature Discovery: B ────────────────────► Epic List (B1, B2)
           │ Feature Discovery: C begins
           │
Week 5    │ [Feature A stories in Downstream]
           │ Epic Refinement: A2 → Ready Stories
           │ Epic Refinement: B1 → Ready Stories
           │ Feature Discovery: C → Epics
```

The delivery team starts building Epic A1's stories while Epic A2 is still being refined and Feature C is still being discovered. Upstream continuously feeds Downstream — no six-week wait, no idle developers.

::: tip Feeding velocity
Downstream needs roughly 3–5 DoR-ready stories per developer per sprint. Epic Refinement must produce stories fast enough to stay ahead. One Epic Refinement every 2–3 days is the target cadence for a team of four developers.
:::

---

## The Three Loops at a Glance

| | Initiative Discovery | Feature Discovery | Epic Refinement |
|--|---------------------|-------------------|----------------|
| **Type** | Discovery | Discovery | Refinement |
| **Core question** | What are we building and why? | How does this feature work? | What exactly are we building next? |
| **Who leads** | PM | PM | PO |
| **Participants** | Core Trio (PM, Designer, Tech Lead) | Core Trio | Three Amigos (PO, Tech Lead, QA) |
| **Key practice** | 5-Station Workshop | 5-Station Workshop (feature scope) | Story Mapping → The Cut → Grooming |
| **Duration** | 2-week sprint | 1-week sprint | 2–3 days |
| **Output** | Initiative Brief + Feature list | Feature Brief + Epic list | DoR-ready Stories |
| **Done when** | Problem validated, S1 scope agreed | Journey mapped, Epics named, feasibility confirmed | Every story passes 9 DoR checkpoints |

---

## Handoff Artifacts

Each loop produces artifacts that the next loop reads. These are the memory of decisions already made — so the next team doesn't remake them.

**Initiative Discovery produces:**
- Initiative Brief (frozen on approval)
- Feature list with one-line descriptions
- S1 / S2 / S3 slice at the Feature level
- Primary Experience Snapshot
- Success KPIs with measurement method
- Reopen triggers

**Feature Discovery produces:**
- Feature Brief (linked to Initiative Brief)
- User Journey Map for this feature
- Lo-fi wireframe or flow for the main path
- Prioritized Epic list
- Technical feasibility confirmation
- ADR(s) for key architectural decisions

**Epic Refinement produces:**
- DoR-ready Stories in Jira (all 9 checkpoints)
- Gherkin seeds
- Design references attached to stories
- Sizing confirmed by lead developer

A story that enters Downstream without these artifacts — especially the Feature Brief and Journey Map context — is a story that will be misbuilt.

---

## Scaling the Spiral

The spiral adapts to project size, not the other way around.

| Tier | Initiative Discovery | Feature Discovery | Epic Refinement |
|------|---------------------|-------------------|----------------|
| **Tier 1 — Programme** | Full 2-week sprint, all activities | Full 1-week sprint, all activities | Full 2–3 day session |
| **Tier 2 — Standard** | 2-week sprint, MUST activities only | 3-day sprint, MUST activities | 1-day session |
| **Tier 3 — Lean** | Initiative + Feature combined: 1 week | — (merged into initiative) | Informal Three Amigos per story |

::: info Tier 3 note
At Tier 3, the team is typically small enough that one person holds the initiative, feature, and epic context simultaneously. The loops collapse into a single lightweight sprint. The output still matters — Ready stories, a feature brief, an initiative direction — but the ceremony is minimal. → [Lite Mode](/guide/lite-mode)
:::

---

## Slices Are Releases

The S1/S2/S3 slices defined in Initiative Discovery map directly to **Jira Releases**. Stories in S1 are assigned to the S1 Release. When all stories in a Release pass DoD, it ships — not when a calendar sprint expires.

A well-defined S1 — small, end-to-end, independently valuable — becomes a Release that ships in 3–5 weeks. A poorly scoped S1 becomes a Release that "almost ships" for two months. This is why slicing matters so much in Initiative Discovery.

→ [Release Slicing](/downstream/release-slicing)

---

## The Failure Mode: Skipping Levels

The most common failure: teams run Initiative Discovery, skip Feature Discovery, and go straight to writing stories.

What happens:
- Stories written without a journey map drift in scope mid-sprint
- Edge cases discovered during QA that a Three Amigos session would have caught in an afternoon
- Developers ask "what happens when X?" in the middle of implementation — because no Feature Brief exists to answer it
- The epic ships, but nobody agrees what the *feature* was supposed to feel like

Feature Discovery is the most commonly skipped level. It is also where the most expensive ambiguity lives.

::: warning The expensive skip
Skipping Feature Discovery feels like saving a week. It costs 2–3 sprints of rework, scope confusion, and QA bounces.
:::

---

## Where to Enter the Spiral

You rarely start from zero. The question is not "do I run the whole spiral?" but "where does my current work slot in?"

> **Find the lowest level above your work that has no artifact. Start there.**

```
You need to add a story or start a new piece of work.
│
└── Does a Feature Brief exist for this Feature?
    │
    ├── NO → Does an Initiative exist that this Feature belongs to?
    │         │
    │         ├── NO → Start at Initiative Discovery.
    │         │         The work is not traceable to a business goal yet.
    │         │
    │         └── YES → Start at Feature Discovery.
    │                   The initiative context exists; shape the feature.
    │
    └── YES → Does an Epic Brief exist for this Epic?
              │
              ├── NO → Start at Epic Refinement.
              │         The feature is shaped; break it into stories.
              │
              └── YES → Just check DoR.
                        All context exists. Write the story, verify the
                        9 checkpoints, and move it to the sprint backlog.
                        This should take 30 minutes.
```

The critical discipline: **never jump levels downward**. Writing stories without a Feature Brief is not a shortcut — it is spending the context you don't have.

::: tip Personas don't change per initiative
Personas are defined at the product level, not per initiative. Maya is Maya. When you write a new Feature Snapshot, you zoom into a specific moment for this feature, but the person doesn't change unless you've learned something genuinely new. Personas live in the [Project Master Document](/upstream/project-master-doc).
:::

---

## Recovering an Existing Project

Most projects don't start with a clean spiral. The recovery path is the decision tree above, applied backward:

1. **Audit what exists**: Stories? Epics? Feature Briefs? Initiative Briefs?
2. **Find the highest documented level** — that's where the context exists.
3. **Trace up**: Can you connect what exists to a business goal? If not, work upward first.
4. **Work down from what's solid**: Enter the spiral at the right level.

The full recovery process is in the [Recovering an Existing Project](/tutorials/recovery) tutorial.

---

## How This Connects to the Growth Path

You don't adopt the full spiral on day one. The [Growth Path](/guide/ship-clean) builds toward it progressively:

1. **[Ship Clean](/guide/ship-clean)** — The team learns to write and finish stories with discipline. This is Epic Refinement working: DoR, grooming, DoD.
2. **[Shape Before You Build](/guide/shape-before-you-build)** — The team adds story mapping and The Cut. Refinement gets sharper. Feature Discovery begins.
3. **[Discover Before You Shape](/guide/discover-before-you-shape)** — The team adds the 5-station workshop. Initiative Discovery begins. The full spiral is now running.
4. **[Own What You Ship](/guide/own-what-you-ship)** — Onstream practices ensure what ships keeps running.
5. **[Close the Loop](/guide/close-the-loop)** — Offstream practices feed [Strategic Synthesis](/offstream/strategic-synthesis) back into strategic alignment, completing the cycle.

The spiral is the destination. The growth path is how you get there.
