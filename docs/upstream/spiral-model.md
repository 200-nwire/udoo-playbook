# The Discovery Spiral

<span class="phase-badge upstream">🔵 Upstream</span>

## The Problem With Linear Discovery

When a new initiative arrives, the instinct is to run discovery once — gather context, map the journey, write stories, hand off. Linear. Sequential. Done in two weeks.

This works for a feature with one epic and five stories. It does not work for anything real.

A real initiative has three to six features. Each feature has four to eight epics. Each epic has three to eight stories. If you try to run all of that through a single two-week sprint, one of two things happens: you rush and ship unprepared stories, or you spend six weeks in discovery and the delivery team sits idle.

Neither outcome is acceptable.

The solution is not to run discovery longer. It is to run it at the right level — and to run it multiple times, on a pipeline.

---

## Discovery Is Recursive

The same questions appear at every level of the hierarchy. They just narrow in scope.

*Who is this for? What does done look like? What are the risks? What ships first?*

At the Initiative level, those questions span the whole product bet. At the Feature level, they scope down to one user capability. At the Epic level, they focus on a single user goal and the stories that deliver it.

This is the spiral: the same structure, repeated three times, each iteration tighter and more concrete than the last.

```
🔵 INITIATIVE LOOP (2 weeks)
   Who is the primary user? Why this, why now?
   What features make up this initiative?
   What does success look like in 90 days?
   OUTPUT: Approved initiative brief + prioritized Feature list

      🔵 FEATURE LOOP (1 week, per feature)
         How does this Feature work end-to-end?
         What are the Epics inside it?
         What are the technical and UX risks?
         OUTPUT: Feature brief + User journey + Epic list

            🔵 EPIC LOOP (2–3 days, per epic)
               What stories deliver this Epic's user goal?
               Are they all DoR-ready?
               OUTPUT: DoR-ready Stories → enter Downstream
```

---

## The Three Loops at a Glance

| | Initiative Loop | Feature Loop | Epic Loop |
|--|----------------|--------------|-----------|
| **Core question** | What are we building and why? | How does this feature work? | What exactly are we building next? |
| **Participants** | PM, UX Lead, Tech Lead, Stakeholders | PM, UX Designer, Tech Lead | PM, Lead Dev, QA Lead |
| **Duration** | 2-week sprint | 1-week sprint | 2–3 days |
| **Output** | Prioritized Feature list | Prioritized Epic list | DoR-ready Stories |
| **Done when** | Team agrees on what the initiative is and what ships in S1 | Journey mapped, Epics named, tech feasibility confirmed | Every story passes all 9 DoR checkpoints |
| **Activities** | 10 | 11 | 8 |

---

## The Pipeline: Loops Run in Parallel

The spiral does not run sequentially. You do not finish all Feature Loops before starting any Epic Loop. You pipeline.

```
Week 1–2  │ Initiative Loop → Feature List (A, B, C)
           │
Week 3    │ Feature Loop: A ──────────────────────────► Epic List (A1, A2, A3)
           │ Feature Loop: B begins
           │
Week 4    │ Epic Loop: A1 ──────────────────────────► Ready Stories → Dev starts
           │ Epic Loop: A2 begins
           │ Feature Loop: B ────────────────────────► Epic List (B1, B2)
           │ Feature Loop: C begins
           │
Week 5    │ [Feature A stories in Downstream]
           │ Epic Loop: A2 → Ready Stories
           │ Epic Loop: B1 → Ready Stories
           │ Feature Loop: C → Epics
```

The delivery team starts building Epic A1 while Epic A2 is still being shaped and Feature C is still being scoped. Upstream continuously feeds Downstream — no six-week wait at the start, no delivery team idling while discovery runs.

::: tip The feeding velocity insight
Downstream needs roughly 3–5 DoR-ready stories per developer per sprint. That means the Epic Loop must produce stories fast enough to stay ahead. One Epic Loop every 2–3 days, per epic, is the target cadence for a team of four developers.
:::

---

## Why This Matters at Each Scale

The spiral adapts to project size, not the other way around.

| Tier | Initiative Loop | Feature Loop | Epic Loop |
|------|----------------|--------------|-----------|
| **Tier 1 — Programme** | Full 2-week sprint, all 10 activities | Full 1-week sprint, all 11 activities | Full 2–3 day session, all 8 activities |
| **Tier 2 — Standard** | 2-week sprint, MUST activities only | 3-day sprint, MUST activities | 1-day session |
| **Tier 3 — Lean** | Initiative + Feature loops combined: 1 week | — (merged into initiative loop) | Informal Three Amigos per story |

::: info Tier 3 note
At Tier 3, the team is typically small enough that one person holds the initiative context, the feature context, and the epic context simultaneously. The loops collapse into a single lightweight sprint. The output still matters — Ready stories, a feature brief, an initiative direction — but the ceremony is minimal.
:::

---

## The Handoff Artifacts

Each loop produces specific artifacts. These are not bureaucracy — they are the memory of decisions made so that the next loop doesn't have to remake them.

```
Initiative Loop produces:
  ✓ Initiative Brief (frozen on approval)
  ✓ Feature list with one-line descriptions
  ✓ S1 / S2 / S3 slice at the Feature level
  ✓ Primary Experience Snapshot
  ✓ Success KPIs with measurement method

Feature Loop produces:
  ✓ Feature Brief (linked to Initiative Brief)
  ✓ User Journey Map for this feature
  ✓ Lo-fi wireframe or flow for the main path
  ✓ Prioritized Epic list
  ✓ Technical feasibility confirmation
  ✓ ADR(s) for key architectural decisions

Epic Loop produces:
  ✓ DoR-ready Stories in Jira (all 9 checkpoints)
  ✓ Gherkin seeds in AssertThat
  ✓ Design references attached to stories
  ✓ Sizing confirmed by lead developer
```

A story that enters Downstream without these artifacts — especially the Feature Brief and Journey Map context — is a story that will be misbuilt. The developer has no context. The QA lead has no frame of reference. The PM will be asked questions that should have been answered two loops ago.

---

## The Failure Mode: Skipping Levels

The most common failure: teams run the Initiative Loop, skip the Feature Loop, and go straight to writing stories.

What happens:
- Stories written without a journey map drift in scope mid-sprint
- Edge cases discovered during QA that a Three Amigos session would have caught in an afternoon
- Developers ask "what happens when X?" in the middle of implementation — because the Feature Brief didn't exist to answer it
- The epic ships, but nobody is sure what the *feature* was supposed to feel like

The Feature Loop is the most commonly skipped level. It is also where the most expensive ambiguity lives.

::: warning The expensive skip
Skipping the Feature Loop feels like saving a week. It costs 2–3 sprints of rework, scope confusion, and QA bounces.
:::

---

→ [Initiative Activities](/upstream/activities-sprint) — the 10 activities in the Initiative Loop
→ [Feature Activities](/upstream/feature-activities) — the 11 activities in the Feature Loop
→ [Epic Activities](/upstream/epic-activities) — the 8 activities in the Epic Loop
