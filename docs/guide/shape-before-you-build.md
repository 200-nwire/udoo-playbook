# Shape Before You Build

The grooming sessions are working. Stories enter the sprint with acceptance criteria, a named persona, a developer-confirmed size. The board moves. Cycle time is stable. The team feels good.

Then Tal, the designer, presents the quarterly demo. She walks through the Return States feature — five stories, all shipped, all passing DoD, all technically correct. The stakeholder watches, nods, and says: "But what happens when someone comes back after being away for a month?"

Silence. Nobody built that. Nobody wrote a story for it. Nobody thought about it — because nobody mapped the full experience before splitting it into stories.

The five stories were clean. Each one made sense on its own. But they were written from a list, not from a map. The PM thought of five things the feature should do and wrote five stories. What the PM didn't do — what nobody did — was walk through the entire experience from the user's perspective and ask: what are all the ways this can go? What are the edge cases between the stories, in the transitions, in the states nobody specified?

The return-after-a-month scenario wasn't a missing story. It was a missing journey step. And journey steps don't surface from story lists. They surface from maps.

---

This is the gap between story-level discipline and feature-level thinking. Ship Clean gave the team clean bricks. Shape Before You Build gives them the blueprint.

The difference is spatial. A story list is linear — do this, then this, then this. A map is spatial — you can see the whole experience at once, the gaps become visible, and the connections between stories reveal themselves. Edge cases live in the gaps between stories, not inside them.

## What to Adopt

### Journey Mapping

Before you write a single story for a feature, map the user's experience through it. Not the system's behavior — the person's experience.

Start with a named persona in a specific moment. Sara, opening the app after four days away. Yossi, searching for an article he vaguely remembers. Maya, tired at 10pm, wanting one quiet moment before sleep. The specificity matters — "a user opens the app" produces a generic flow. "Sara, four days gone, half-expecting to feel bad about her streak" produces a flow with emotional states, failure modes, and design constraints that are invisible from the generic version.

Walk through every step. Out loud, as a team. App opens. Screen loads. Sara sees... what? What does she see if she's been away a day? A week? A month? What does she see if she's never used the app before? What does she see if she's offline?

Every time the story breaks down — every time someone says "and then she... does the thing" — stop. That pause is a gap. That gap is where the edge cases live.

Write each step as a numbered journey step: J1, J2, J3. Annotate each step with what works today, what's broken, where the pain is, where the opportunity is. When the map is complete, the feature's shape is visible. The epics emerge from the journey sections. The stories emerge from the steps within each section.

A journey map built by three people in two hours will surface more edge cases than a PM working alone for a week. Not because the PM is bad at their job — because the designer sees interaction states the PM misses, and the developer sees technical constraints that change what's possible.

→ [Station 3 — User Journey & Slices](/upstream/station-3-journey) — the full journey mapping guide

### Story Mapping

The journey map shows what the user experiences. The story map shows what the team will build.

These are different artifacts, and confusing them is one of the most common mistakes in product development. The journey map lives in the problem space — it describes reality. The story map lives in the solution space — it describes the plan.

A story map is spatial. The horizontal axis is the user's journey — the steps they take, left to right, through the feature. The vertical axis is depth — the must-have story at the top, the should-have below it, the nice-to-have below that.

You build it in a workshop. The PM, the designer, a developer, and QA in one room for three to four hours. Sticky notes on a wall, or a Miro board if the team is remote. The journey map is already on the wall — the story map reads from it.

Phase 1: lay out the activities across the top. These are the big steps — "Open app," "See return screen," "Choose action," "Write reflection," "See confirmation." These come directly from the journey map.

Phase 2: add stories below each activity. Under "See return screen": show total count, show last entry excerpt, show time since last visit, handle first-ever-use empty state. Under "Choose action": write now, browse past entries, skip for today. Each story is a card.

Phase 3: draw the line. This is The Cut — the horizontal line that separates what you're going to refine in depth right now from what stays mapped but shallow.

The map stays on the wall for the life of the feature. It is not a planning artifact that gets produced and forgotten. It is the team's shared picture of the whole — the thing they look at when a sprint-level decision needs feature-level context.

→ [Story Mapping](/upstream/story-mapping) — the full workshop guide with real examples

### The Cut

After the story map is complete — every story visible, every depth level mapped — you draw a horizontal line.

Above the line: the stories you're going to refine in full. Acceptance criteria, Gherkin scenarios, design states, sizing, DoR gate. The full investment.

Below the line: the stories you've identified and mapped but aren't touching yet. They're visible. They're not forgotten. They're waiting.

The Cut is not a release decision. It's a focus decision. You're saying: given what we know right now, these stories are worth the depth of full refinement. The rest stay on the map. When the first batch ships and you come back for the next cycle, the map is already drawn. You move the line, not start from scratch.

The Cut prevents two failure modes that kill teams:

**Going deep on everything at once.** A team that tries to refine twenty stories to DoR-ready before any development starts spends two weeks in discovery and the delivery team sits idle. The Cut says: refine four stories to ready, start building, refine the next four in parallel.

**Going shallow on everything.** A team that writes quick, rough stories for the whole feature and throws them all into the sprint discovers the edge cases mid-build. The Cut says: go deep on a few, go shallow on the rest, and go deep on those when it's their turn.

As you refine stories above the line, you learn things. An edge case below the line turns out to block the happy path — it gets pulled up. A story above the line turns out to be three stories — the cut adjusts. The map is alive during refinement. The Cut is where it started, not where it has to stay.

→ [The Cut](/upstream/the-cut) — the full practice guide

### The Feature Brief

Every feature needs one page that captures what it is, who it's for, and what success looks like. Not a long document — one page with six things:

1. **Who specifically uses this feature, and in what moment?** Not the generic persona — the specific trigger. "Sara, returning after a gap, half-expecting to feel judged."
2. **What specific friction does this feature resolve?** One sentence. "The current return screen shows a broken streak and nothing else — emptiness that tells Sara she failed."
3. **The journey map.** The step-by-step flow with failure states and edge cases.
4. **Key decisions recorded.** Design choices and architecture decisions that affect this feature, written as ADRs with options considered and tradeoffs stated.
5. **Epic list.** Read from the journey map — each epic is a section of the flow.
6. **Success metric.** One number, current state and target. "Return-to-write rate: 12% → 30%."

The Feature Brief is the handoff document. When the PM finishes it and the Core Trio (PM, designer, tech lead) signs it, the feature is shaped. The story mapping workshop reads from it. The stories trace back to it. A developer who wants to understand why a story exists follows the chain: story → epic → feature brief → journey map → persona.

→ [Feature Activities](/upstream/feature-activities) — the full Feature Discovery outcome checklist

### Gherkin as Specification

At Ship Clean, acceptance criteria were plain text. That works. But Gherkin — Given/When/Then — is the format that turns acceptance criteria into executable specifications.

A Gherkin scenario is a test case written before the code exists. The developer builds toward it. QA runs it. The PM reviews it. Everyone is working from the same definition of done — not because they discussed it, but because it's literally written in a format that runs.

When a team writes Gherkin at the story mapping stage — even rough "Gherkin seeds" that will be refined later — the test plan exists before development starts. The QA lead isn't guessing at what to test. The developer isn't guessing at what success looks like. The PM isn't reviewing something they have to mentally compare against unwritten expectations.

→ [Gherkin & BDD Patterns](/downstream/gherkin) — formats, tags, and real examples

---

## Going Deeper

Once Shape Before You Build is working — features are mapped, The Cut is drawn, stories above the line have Gherkin, the team can see the whole before they build the parts — here's how to get better:

**Better journey maps.** Move from PM-drawn maps to workshop-produced maps with the full Core Trio present. The designer catches interaction states the PM misses. The tech lead catches technical constraints that change the flow. QA catches failure modes that become acceptance scenarios. A journey map built by one person has one perspective. A map built by four has four. → [Roles & Ownership](/upstream/roles)

**Better story maps with tooling.** Move the story map from a one-time workshop artifact into a living Jira integration. ProductGo keeps the map and the backlog as the same data — every status change in Jira updates the map. The Cut becomes a release swimlane. Stories below the line are visible and searchable, not archived. → [Jira Setup](/upstream/jira-setup)

**Better decisions.** When a feature has a technical choice that's hard to reverse — database schema, API design, third-party integration — write an Architecture Decision Record before the code exists. Two options minimum, tradeoffs stated, decision made explicitly. Six months from now, when someone asks "why does the schema look like this?", the ADR has the answer. → [Station 4 — Solution Options](/upstream/station-4-options)

**Better slicing.** Move from "The Cut as a focus line" to deliberate release slicing — S1 (walking skeleton), S2 (enhanced), S3 (full). The walking skeleton is the thinnest vertical slice that touches all journey steps end to end. It's not a partial feature — it's a thin feature that a user can walk from beginning to end. → [Release Slicing](/downstream/release-slicing)

---

## What You'll Notice Next

Shape Before You Build solves the feature coherence problem. The team sees the whole before they build the parts. Edge cases surface in mapping, not in QA. Stories connect to a journey, not to a list.

But after a quarter of well-shaped features, a strategic question starts to emerge. The features are right — each one solves a real problem for a real person. But which features should exist in the first place? The team has three features in flight and no one can explain why these three rather than three others. The PM picks features based on intuition, stakeholder requests, and whatever the loudest customer asked for last. There's no initiative-level validation — no evidence that the problem these features address is the right problem to be solving this quarter.

Individual features are well-shaped. The initiative that connects them isn't.

→ [Discover Before You Shape](/guide/discover-before-you-shape) — the next step
