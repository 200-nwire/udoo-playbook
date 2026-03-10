# How to Use This Book

This book is designed to work four ways: as an **adoption guide** you follow progressively, as a **learning resource** for understanding the full framework, as a **reference** you consult when needed, and as a **checklist** your team follows daily.

## Four Modes of Use

### Mode 1: Adoption (The Growth Path)

If you are building a team or scaling a company, start here. The Growth Path is the primary adoption guide — five steps, each solving a real problem that the previous step makes visible.

**The path:**
1. [Ship Clean](/guide/ship-clean) — stories start and finish with discipline
2. [Shape Before You Build](/guide/shape-before-you-build) — features are mapped before stories are written
3. [Discover Before You Shape](/guide/discover-before-you-shape) — initiatives are validated before features are shaped
4. [Own What You Ship](/guide/own-what-you-ship) — production is monitored, incidents have playbooks
5. [Close the Loop](/guide/close-the-loop) — customer signals feed the next discovery cycle

Start at the step that matches your team's worst current pain. Each step has horizontal scale (what to adopt) and vertical scale (how to go deeper once it's working).

### Mode 2: Learning (Read Progressively)

If you want to understand the full framework conceptually, follow the **Guide** section first, then read each phase in order.

**Recommended order:**
1. [Introduction](/guide/introduction) — understand the "why"
2. [Lifecycle at a Glance](/guide/lifecycle) — see the four phases
3. [4-Layer Hierarchy](/guide/hierarchy) — understand the thinking model
4. Walk through each phase: [Upstream](/upstream/) → [Downstream](/downstream/) → [Onstream](/onstream/) → [Offstream](/offstream/)
5. Explore [Tutorials](/tutorials/) for hands-on practice

### Mode 3: Reference (Look Things Up)

When you need a template, a checklist, or a specific process:

| I need to... | Go to... |
|--------------|----------|
| Write an Initiative Brief | [Initiative Brief template](/upstream/initiative-brief) |
| Check if a story is ready | [Definition of Ready checklist](/upstream/definition-of-ready) |
| Check if a story is done | [Definition of Done checklist](/downstream/definition-of-done) |
| Write Gherkin scenarios | [Gherkin & BDD Patterns](/downstream/gherkin) |
| Handle an incident | [Incident Management](/onstream/incident-management) |
| Write a post-mortem | [Post-Mortem Template](/onstream/post-mortem-template) |
| Write an RCA | [RCA Template](/onstream/rca-template) |
| Label a bug correctly | [Bug Label System](/standards/bug-labels) |
| Create a Jira epic | [Epic Template](/reference/epic-template) |
| Create a Jira story | [Story Template](/reference/story-template) |
| See all ceremonies | [Master Cadence Table](/reference/master-cadence) |
| Understand escalation | [Escalation Paths](/reference/escalation) |
| See a real initiative example | [Examples Gallery](/examples/) |

### Mode 4: Checklist (Daily Operations)

Pin these pages for daily use:

- **Before starting work on a new initiative:** [Phase Gate Checklists](/reference/phase-gates)
- **Before pulling a story into sprint:** [Definition of Ready](/upstream/definition-of-ready)
- **Before marking a story as done:** [Definition of Done](/downstream/definition-of-done)
- **When a production incident occurs:** [Incident Management](/onstream/incident-management)
- **When filing a bug:** [Bug Taxonomy](/onstream/bug-taxonomy) + [Bug Labels](/standards/bug-labels)
- **The 10 rules that always apply:** [Non-Negotiables](/reference/non-negotiables)

## Role-Based Reading Paths

### Product Manager

You own the Upstream phase. Start here:

1. [Introduction](/guide/introduction) — the framework philosophy
2. [4-Layer Hierarchy](/guide/hierarchy) — your core thinking model
3. [Upstream Overview](/upstream/) → all five Discovery Stations
4. [Initiative Brief](/upstream/initiative-brief) — your primary deliverable
5. [Story Mapping](/upstream/story-mapping) — how to slice work
6. [Definition of Ready](/upstream/definition-of-ready) — the quality gate you own
7. [Initiative Walkthrough](/upstream/initiative-walkthrough) — see it end-to-end
8. [Downstream Overview](/downstream/) — understand what happens after handoff
9. [Feedback Loop](/offstream/feedback-loop) — where your next initiatives come from
10. [E2E Tutorial](/tutorials/e2e-initiative) — practice the full lifecycle

### Developer / Tech Lead

You own the code and architecture. Start here:

1. [Introduction](/guide/introduction) — why this matters for you
2. [Lifecycle](/guide/lifecycle) — where you fit in the loop
3. [Definition of Ready](/upstream/definition-of-ready) — what you should demand before starting
4. [Story Workflow](/downstream/story-workflow) — the state machine every story follows
5. [Subtask Checklist](/downstream/subtask-checklist) — the 7 default subtasks
6. [Feature Branches & SSDLC](/downstream/feature-branches) — branching, CI/CD, linking to tasks
7. [Kanban Flow](/downstream/kanban-flow) — WIP limits and flow management
8. [Definition of Done](/downstream/definition-of-done) — the quality gate you must meet
9. [Developer E2E Workflow](/downstream/dev-workflow-e2e) — from picking a story to shipping it
10. [Station 4 — Solution Options](/upstream/station-4-options) — how architecture decisions are made

### QA Engineer

You own quality gates across all phases. Start here:

1. [Introduction](/guide/introduction) — quality starts in discovery
2. [Definition of Ready](/upstream/definition-of-ready) — you sign off on readiness
3. [Station 3 — Journey & Slices](/upstream/station-3-journey) — understand what is being tested
4. [Gherkin & BDD Patterns](/downstream/gherkin) — write executable specifications
5. [BDD Workshop Tutorial](/tutorials/bdd-workshop) — hands-on practice
6. [Definition of Done](/downstream/definition-of-done) — the exit gate
7. [Bug Taxonomy](/onstream/bug-taxonomy) — how to classify defects
8. [Bug Labels](/standards/bug-labels) — the labeling system
9. [RCA Template](/onstream/rca-template) — when bugs need root cause analysis
10. [Gherkin Tags](/standards/gherkin-tags) — tagging conventions

### Designer (UX/UI)

You shape experiences from Station 1 through delivery. Start here:

1. [Introduction](/guide/introduction) — design is not an afterthought
2. [4-Layer Hierarchy](/guide/hierarchy) — where design decisions live at each layer
3. [Station 1 — Vision](/upstream/station-1-vision) — personas and job-to-be-done
4. [Station 2 — Problem](/upstream/station-2-problem) — current state and pain mapping
5. [Station 3 — Journey & Slices](/upstream/station-3-journey) — user journey mapping
6. [Definition of Ready](/upstream/definition-of-ready) — design deliverables that must be present
7. [Story Mapping](/upstream/story-mapping) — visual mapping techniques
8. [Subtask Checklist](/downstream/subtask-checklist) — design review subtask
9. [Communication Tone](/standards/tone) — microcopy and communication standards
10. [Feature Example — Living Wondrously](/examples/feature-living-wondrously) — see a fully documented feature

### DevOps / SRE

You own operational reliability. Start here:

1. [Introduction](/guide/introduction) — operations is a first-class phase
2. [Onstream Overview](/onstream/) — your home phase
3. [SLA & SLO Framework](/onstream/sla-slo) — defining and measuring reliability
4. [Incident Management](/onstream/incident-management) — the P0–P3 playbook
5. [Runbook Template](/onstream/runbook-template) — what every service needs
6. [Post-Mortem Template](/onstream/post-mortem-template) — blameless incident reviews
7. [RCA Template](/onstream/rca-template) — structured root cause analysis
8. [From Incident to Improvement](/tutorials/incident-to-improvement) — the Onstream→Upstream loop
9. [Bug Taxonomy](/onstream/bug-taxonomy) — severity, impact, priority
10. [Escalation Paths](/reference/escalation) — when and how to escalate

### Customer Success / Sales

You own the customer relationship. Start here:

1. [Introduction](/guide/introduction) — you are the beginning of the next loop
2. [Offstream Overview](/offstream/) — your home phase
3. [Customer Lifecycle](/offstream/customer-lifecycle) — from onboarding to advocacy
4. [Health Score Framework](/offstream/health-score) — measure and act on account health
5. [Feedback Loop](/offstream/feedback-loop) — how your signals reach the product team
6. [Account Cadence](/offstream/account-cadence) — QBRs, renewals, expansion
7. [Upstream Overview](/upstream/) — understand what happens with the signals you send
8. [Non-Negotiables](/reference/non-negotiables) — the rules that protect customers
9. [Glossary](/reference/glossary) — shared language with engineering

## The Tutorials

The [Tutorials section](/tutorials/) provides hands-on exercises that let you practice the framework:

| Tutorial | What You Practice |
|----------|-------------------|
| [Your First Upstream Sprint](/tutorials/zero-to-ready) | Running a 2-week discovery sprint from scratch |
| [The Wrong Way (Then the Right Way)](/tutorials/wrong-way-right-way) | Common mistakes revealed through "aha moments" |
| [E2E Initiative Lifecycle](/tutorials/e2e-initiative) | Following Someone for Coffee from idea to production |
| [BDD Workshop](/tutorials/bdd-workshop) | Writing Gherkin scenarios for the Journal feature |
| [From Incident to Improvement](/tutorials/incident-to-improvement) | Turning the JWT outage into a prevention initiative |

## The Examples Gallery

The [Examples section](/examples/) contains real, unabridged documents you can study and use as templates:

- Real Initiative Briefs (Pninei Halacha, Analytics Layer)
- Real Feature Documents (Living Wondrously Journal)
- Real Post-Mortems and RCAs (JWT Outage, Wallet Balance Bug)
- Real Fully-Shaped Stories (Journal Entry Creation)
