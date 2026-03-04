# Introduction

## What This Framework Is

UDOO is a product development operating model — a shared language and a set of practices for teams who build software together and want to do it well.

It covers four connected phases: discovering what to build, building it, keeping it running, and learning from customers. It is not a methodology for any single phase. It is the loop that connects all four.

The reason it exists as a single framework rather than four separate guides is the same reason those phases break down without one: they are not independent. The quality of what gets built depends on how well it was discovered. The reliability of what runs depends on how it was handed from development to operations. The relevance of what comes next depends on how carefully customer signals were heard after the last release.

Every phase feeds the next. And the last feeds the first.

---

## What Problem This Solves

Most teams we've seen don't struggle from lack of ability. They struggle from lack of shared agreement on how to work.

The PM writes specs alone and presents them at planning. The designer finishes mockups the team sees for the first time in review. The tech lead raises an architectural concern after two sprints of work. QA joins the last three days of a sprint to test something already built. Customers send feedback to CS that never reaches the product team.

Each of these, taken separately, looks like a communication problem. Together, they are a structural problem: the team has no shared model of what good collaboration looks like at each stage.

UDOO names that model. It makes explicit what was previously assumed, different for each team member, and therefore constantly disappointing.

---

## The Four Phases

Each phase answers a different question, involves different people, and produces different outputs:

| Phase | Question | Primary job |
|---|---|---|
| 🔵 **Upstream** | Are we building the right thing? | Discover, frame, shape |
| 🟢 **Downstream** | Are we building it right? | Build, review, release |
| 🟠 **Onstream** | Is it running reliably? | Monitor, respond, improve |
| 🟣 **Offstream** | Is it creating value? | Listen, measure, feed back |

These don't run sequentially across the whole team — they run in parallel across different initiatives. While one feature is being built, another is being discovered. While one service is being stabilised, a customer signal from it is already feeding the next discovery cycle.

---

## The Three Handoffs That Matter

Between each phase, there is a gate. Not bureaucracy — a shared agreement about what the next person needs before they can do their job well.

**Commitment Point** (Upstream → Downstream): A story crosses this point only when it meets the Definition of Ready. Everything the developer needs to start — and finish — is already decided.

**Delivery Point** (Downstream → Onstream): A feature crosses this point only when it meets the Definition of Done. A runbook exists. Observability is in place. The on-call team has been briefed.

**Stability Point** (Onstream → Offstream): A feature reaches this point when it has run within SLOs for a meaningful period. Customer Success can now confidently present it.

The handoffs protect the next person. That is their only purpose.

---

## The Projects We Follow

Throughout this book we use real project patterns — the kind of problems and decisions that come from building actual software for actual people. The names and details are drawn from 200apps' portfolio, with context compressed for teaching.

**Maya, Avi, and Noa** are the recurring personas — not abstract role labels, but people doing specific jobs in specific moments. When you see Maya writing a journal entry at 10pm, or Avi studying halacha on his commute, or Noa looking for coffee with someone in a new city, you're seeing the Experience Snapshot in action: a named person in a named moment, making every design decision that follows obvious.

The projects:
- **Living Wondrously / Momentum** — a daily reflection and habit-building app
- **Pninei Halacha** — a multilingual, offline-first religious study app
- **Someone for Coffee** — a women-only social networking platform
- **Amit LMS / Analytics Layer** — a ministry-grade learning management system

---

## Reading Paths

You don't have to read cover to cover. Start where your team is.

::: tip Something isn't working
[The Manifesto](/guide/manifesto) → [Why Teams Fail](/guide/why-teams-fail) → [From Chaos to Flow](/tutorials/from-chaos-to-flow) → the specific phase that's broken
:::

::: tip New to the framework
[The Manifesto](/guide/manifesto) → [Why Teams Fail](/guide/why-teams-fail) → [5 Core Principles](/guide/principles) → [Lifecycle](/guide/lifecycle) → [Scale Tiers](/guide/scale-tiers) → your role's phase
:::

::: tip Product Manager
[Upstream overview](/upstream/) → [Station 1](/upstream/station-1-vision) through [Station 5](/upstream/station-5-decision) → [Initiative Walkthrough](/upstream/initiative-walkthrough) → [Story Mapping](/upstream/story-mapping) → [DoR](/upstream/definition-of-ready) → [E2E Tutorial](/tutorials/e2e-initiative)
:::

::: tip Developer / Tech Lead
[Roles](/guide/roles) → [DoR](/upstream/definition-of-ready) → [Downstream overview](/downstream/) → [Kanban Flow](/downstream/kanban-flow) → [Feature Branches](/downstream/feature-branches) → [Developer E2E](/downstream/dev-workflow-e2e) → [BDD Workshop](/tutorials/bdd-workshop)
:::

::: tip QA Engineer
[DoR](/upstream/definition-of-ready) → [Station 3 — Journey](/upstream/station-3-journey) → [Gherkin Patterns](/downstream/gherkin) → [DoD](/downstream/definition-of-done) → [Bug Taxonomy](/onstream/bug-taxonomy) → [BDD Workshop](/tutorials/bdd-workshop)
:::

::: tip Manager / Leadership
[Scale Tiers](/guide/scale-tiers) → [Roles](/guide/roles) → [Non-Negotiables](/reference/non-negotiables) → [Phase Gates](/reference/phase-gates) → [Master Cadence](/reference/master-cadence)
:::

---

## A Note on Judgment

This framework is not a rulebook. It is an operating model — a set of agreements a team makes with itself about how to work.

When a story is simple and the answer is obvious, the DoR checklist takes five minutes. When a technical decision is genuinely reversible, a note in Slack is enough and a full ADR is waste. When a team is three people on a two-week project, Lite Mode is the right configuration.

The non-negotiables are few: don't start building unclear work, don't ship without knowing how you'll monitor it, don't close an incident without a learning, don't let a customer signal disappear.

Everything else is calibration. Master the principles. Adapt the practice.
