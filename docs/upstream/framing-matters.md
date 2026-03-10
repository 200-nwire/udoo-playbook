# What Bad Framing Costs

<span class="phase-badge upstream">🔵 Upstream</span>

The initiative is approved. Everyone is energised. The Feature List says "User Reporting." The one-line description says: *"Users can view and export their activity data."* The team nods.

Development begins.

---

## What Happens Without Feature Discovery

**Week 1–2: Building confidently**

Tali starts on the API. "Export to CSV, right?" She checks with Avi. "Yeah, I assume CSV." She builds the export endpoint. Lior starts on the frontend — a button, a file download trigger. Three stories in, it's going well.

**Week 3: The first question**

Rami is adding the date filter when he hits something: *"How far back does this go? All time? Last 90 days? User-configurable?"* He messages the PM. Dina says "let me check with the stakeholder."

The stakeholder says: *"We actually meant a dashboard — charts showing trends, not downloads."*

Pause.

Tali's CSV endpoint. Lior's download button. Rami's date filter. None of it is wrong technically. But it's not what was imagined. Three weeks of sprint work, 60% of the wrong thing.

**Week 4: The negotiation**

The team debates what to do. Rebuild? Keep the export and add a dashboard? The PM tries to recover scope. Someone says "let's just ship the export for now, we'll add dashboards in S2." The stakeholder reluctantly agrees. Six months later, the dashboard still hasn't shipped. The export that nobody wanted is a permanent fixture.

---

## What Actually Went Wrong

The one-line description — *"Users can view and export their activity data"* — was agreement on a name, not agreement on a feature.

"View" could mean a dashboard. "Export" could mean a CSV download. The PM imagined a dashboard. The tech lead imagined an export. The developer imagined what they'd built before at a previous job. Nobody said it out loud. The ambiguity wasn't hiding — it was invisible, because nobody had made it visible.

This is not a communication failure. It's a framing failure. The team had a Feature name without a Feature understanding. The [Feature Discovery](/upstream/feature-activities) exists specifically to convert one into the other — before any story is written.

---

## The Same Situation With Feature Discovery

**F-2: Experience Snapshot (Day 1, 60 minutes)**

PM and UX sit down to write 150 words about the user of this feature. *"Noa, a curriculum manager, opens the dashboard Monday morning before the weekly team call to see how the latest unit is performing..."*

Someone asks: *"Is she looking at charts? Or downloading a spreadsheet for her manager?"*

That question, answered in 15 minutes on Day 1, determines the entire feature.

The answer: both. But they're different scenes. She wants a quick visual read every Monday (dashboard). Her manager wants a monthly CSV for the ministry report (export). These are two separate Feature Briefs, two separate user journeys, two separate sets of stories.

**F-3: Journey Mapping (Day 1–2, 90 minutes)**

The team maps every step: Noa opens reporting, sees a summary, filters by cohort, drills into a unit, checks a specific lesson's completion rate. Then separately: Noa selects a date range, requests an export, receives a download link by email.

Thirty minutes in it's obvious — the journey map splits in two at step 3. These are different products serving different moments in Noa's week.

**The outcome**

The Feature Discovery produces two Feature Briefs instead of one. "Weekly dashboard" — Feature A. "Ministry export" — Feature B. The team starts with Feature A. Lior builds charts, not a download button. Tali builds a read API with aggregation, not a CSV writer.

Sprint 1 ships Feature A. Noa uses it every Monday. Feature B enters the Feature Discovery in Sprint 3. When the export ships, it's built for her manager's actual workflow — not as an afterthought.

---

## The Pattern

This story plays out on every team that skips the Feature Discovery:

| Without Feature Discovery | With Feature Discovery |
|---|---|
| "User Reporting" starts as a one-liner | "User Reporting" starts as an Experience Snapshot |
| Developer fills in the blank with an assumption | Assumption is surfaced and resolved on Day 1 |
| Stakeholder misalignment discovered in Week 3 | Stakeholder sees the journey map on Day 5 |
| 40–60% of sprint work discarded or rewritten | Scope is right before the first story is written |
| Feature ships late, incomplete, or wrong | Feature ships on time, for the right person |

The Feature Discovery costs one week. The rework costs two to three sprints. This arithmetic never changes.

---

## The Hardest Part

The hardest part is not doing the Feature Discovery. It's believing it's worth doing when the initiative is already approved and everyone is ready to build.

The pressure is real: *"We have the brief, we have the epics, why are we spending a week on a 'feature sprint' before we start?"*

The answer: you're not spending a week before you start. You're spending a week to make sure what starts is the right thing. The alternative isn't starting faster — it's discovering the scope is wrong in Week 3 instead of Week 1.

::: tip The week you think you're saving
If skipping the Feature Discovery feels like saving a week, consider: what did the last sprint review conversation cost? How long did it take to re-scope, re-brief, and re-plan after the stakeholder said "that's not what I meant"? The Feature Discovery is cheap compared to the conversation it prevents.
:::

---

## When Framing Goes Right

The [grooming session](/upstream/grooming-session) caught the stars-vs-journal-entry scoping issue for Maya's app because the Experience Snapshot had already established: *calm, simple, daily reflection.* Stars are a habit mechanism — they belong in S2, not S1.

That catch happened in one grooming session because the Feature Brief existed. Everyone knew what the feature was *supposed to feel like*. When the question came up, the answer was obvious.

Without the Feature Brief, it would have been a debate. With it, it was a decision.

That's what good framing does: it makes decisions obvious instead of political.
