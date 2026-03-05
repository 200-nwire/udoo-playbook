# Where Do I Start?

The one thing that changes everything: **never write a story straight from an idea.** Every story must trace to a Feature, an Epic, and an Initiative — not ceremony, but the chain that makes the "why" answerable at every step.

---

## The Mental Model

Four things to hold before anything else makes sense.

### The 4-phase loop

The framework runs in parallel across initiatives — not sequentially:

- 🔵 **Upstream** — shape the work before it reaches engineering
- 🟢 **Downstream** — build and ship with discipline
- 🟠 **Onstream** — keep it running reliably
- 🟣 **Offstream** — turn production into the next discovery

While one initiative is being built, another is being shaped. Your job is to make sure every initiative is in the right phase for its current state.

### The hierarchy

`Initiative → Feature → Epic → Story`

- **Initiative** — a business problem worth solving, tied to a KPI
- **Feature** — a new user capability within an initiative
- **Epic** — a coherent cluster of stories that delivers part of a feature
- **Story** — one user action in one scene, sized 1–3 days

A story is a scene, not a chapter. It traces back up the chain or it isn't ready.

### The 3 gates

Three handoffs you never skip:

- **DoR** (Definition of Ready) — protects the developer. A story doesn't start until all 9 checkpoints pass.
- **DoD** (Definition of Done) — protects QA and ops. A story isn't done until it ships with monitoring and a runbook.
- **Stability Point** — protects Customer Success. A feature doesn't move to Offstream until it's run clean within SLOs.

Each gate protects the person who comes next.

### The spiral

Discovery nests: Initiative Loop → Feature Loop → Epic Loop.

"Loop" means you revisit. You don't finish Station 1 and never return — you cycle through, adding fidelity each time. Each loop produces a concrete output (Initiative Brief, Feature Brief, DoR-ready stories) that unlocks the next loop.

---

## Where Are You Right Now?

**Starting from nothing** — no codebase, no backlog, no conventions yet.
→ [Full Discovery — New Project](/upstream/discovery-types#new-project)

**Have an idea or spotted an opportunity** — something new, not sure how big.
→ [Idea Triage](/upstream/idea-triage)

**Adding a feature to an existing product** — bigger than a story, smaller than a new product.
→ [Feature Activities](/upstream/feature-activities)

**Have epics, need DoR-ready stories** — the feature is understood, stories need shaping.
→ [Epic Activities](/upstream/epic-activities) · [Definition of Ready](/upstream/definition-of-ready)

**Something is broken in production** — an alert fired, a user reported it, a customer escalated.
→ [Bug Taxonomy](/onstream/bug-taxonomy)

**New to the team** — want to understand the system before working inside it:
1. [The Manifesto](/guide/manifesto) — why we work this way
2. [Lifecycle at a Glance](/guide/lifecycle) — the full loop in one page
3. [The 4-Layer Hierarchy](/guide/hierarchy) — how work is structured
4. [Wrong Way / Right Way tutorial](/tutorials/wrong-way-right-way) — the fastest 30 minutes
5. [How to Use This Book](/guide/how-to-use) — your role-specific path

**Small team (2–3 people)** — same thinking model, compressed ceremonies.
→ [Lite Mode](/guide/lite-mode)

---

## Reading Paths by Role

**Product Manager**
[Upstream overview](/upstream/) · [Stations 1–5](/upstream/station-1-vision) · [Experience Snapshot](/upstream/experience-snapshot) · [Initiative Walkthrough](/upstream/initiative-walkthrough) · [DoR](/upstream/definition-of-ready)

**Developer / Tech Lead**
[Downstream overview](/downstream/) · [Kanban Flow](/downstream/kanban-flow) · [Feature Branches](/downstream/feature-branches) · [Developer E2E](/downstream/dev-workflow-e2e) · [BDD Workshop](/tutorials/bdd-workshop)

**QA Engineer**
[DoR](/upstream/definition-of-ready) · [Gherkin Patterns](/downstream/gherkin) · [DoD](/downstream/definition-of-done) · [Bug Taxonomy](/onstream/bug-taxonomy) · [BDD Workshop](/tutorials/bdd-workshop)

**Manager / Leadership**
[Scale Tiers](/guide/scale-tiers) · [Roles](/guide/roles) · [Non-Negotiables](/reference/non-negotiables) · [Phase Gates](/reference/phase-gates) · [Master Cadence](/reference/master-cadence)

---

**→** [The Manifesto](/guide/manifesto) — the spirit behind the practices

**→** [Introduction](/guide/introduction) — full overview with projects and personas

**→** [Wrong Way / Right Way Tutorial](/tutorials/wrong-way-right-way) — 30 minutes, the fastest way to get it
