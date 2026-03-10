# UDOO Playbook

**A battle-tested R&D operating framework for product teams.**

[![Deploy to GitHub Pages](https://github.com/200-nwire/udoo-playbook/actions/workflows/deploy.yml/badge.svg)](https://github.com/200-nwire/udoo-playbook/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

> **Live site:** [200-nwire.github.io/udoo-playbook](https://200-nwire.github.io/udoo-playbook/)

---

## What Is This?

UDOO is a complete operating model for software product teams — from the first messy idea all the way to a growing customer base, and back again.

Most frameworks cover one phase well: Scrum covers planning and delivery, SRE covers operations, customer success frameworks cover growth. UDOO connects all four into a single, continuous loop:

```
🔵 Upstream   — Discover and shape the right thing to build
🟢 Downstream — Build and ship it with discipline
🟠 Onstream   — Operate it reliably
🟣 Offstream  — Grow customers and feed learnings back upstream
```

The loop never ends. Customer signals from Offstream become the raw material for the next Upstream cycle. Incidents from Onstream become upstream initiatives. Working software flows forward; learning flows backward.

---

## Why It Exists

Most product teams don't fail because of poor engineering. They fail because of:

- **Discovery failures** — building the right solution to the wrong problem
- **Handoff failures** — ambiguous work arriving at the most expensive place to discover it (mid-sprint)
- **Feedback loop failures** — customer signals that never reach the product team
- **Operational blindness** — shipping features with no runbooks, no SLOs, no on-call plan

UDOO fixes all four — not with more meetings, but with clearer thinking and better artifacts at each transition point.

---

## What Makes This Different

**1. Three types of upstream work — not one.**
Upstream is not a single activity. It splits into Strategic Alignment (Leadership + PM, quarterly), Discovery (PM + Core Trio, 5-station workshop), and Refinement (PO + Three Amigos, story mapping + DoR). Different people, different practices, different outputs — pipelined so delivery never waits.

**2. Discovery and refinement are not the same practice at different scales.**
Discovery validates the problem (Initiative Discovery, Feature Discovery). Refinement breaks validated features into buildable stories (Epic Refinement). Teams that blur this boundary either waste time re-validating known problems or ship stories without context.

**3. Downstream uses lean Kanban — not sprint-based delivery.**
Once work is shaped and clear, it should flow — not batch. Kanban with WIP limits, story state machines, and the Definition of Done creates predictable, continuous delivery without the mini-waterfall of sprints.

**4. Onstream is SRE-grade — not an afterthought.**
Features shipped without runbooks and SLOs are liabilities. UDOO treats operations as a first-class product discipline: on-call playbooks, blameless post-mortems, bug taxonomy, and service reliability targets are built into the delivery process.

**5. Offstream closes the loop — not just manages accounts.**
Customer success is the beginning of the next product cycle. Health scores, feedback loops, and strategic synthesis feed learnings back into the next upstream cycle. The loop is literal, not aspirational.

**6. Narrative is the core skill.**
Before wireframes, before tickets, before estimates — write the story. Experience snapshots, user stories with named personas, and Gherkin scenarios create shared mental models across every discipline.

---

## The Framework at a Glance

| Phase | Methodology | Primary Question | Key Artifacts |
|---|---|---|---|
| 🔵 **Upstream** | Scrum for discovery | Are we building the right thing? | Initiative Brief, Experience Snapshot, Definition of Ready |
| 🟢 **Downstream** | Lean Kanban | Are we building it right? | Story state machine, Definition of Done, Gherkin scenarios |
| 🟠 **Onstream** | SRE / SLA | Is it running reliably? | Runbooks, SLO dashboards, Incident playbooks, Post-mortems |
| 🟣 **Offstream** | Customer success | Is it creating value? | Health scores, Feedback loops, Strategic Synthesis |

### The 4-Layer Work Hierarchy

```
Initiative  →  Why? (the strategic problem)
  Feature   →  What? (the user-facing capability)
    Epic     →  How? (the structural room inside the feature)
      Story  →  Now? (the smallest testable unit of value)
```

### The Upstream Spiral

Upstream work pipelines through three levels. Each level has different people, different practices, and different outputs:

```
Initiative Discovery (2 weeks)  →  Initiative Brief + Feature list
  Feature Discovery (1 week)    →  Feature Brief + Epic list + ADRs
    Epic Refinement (2–3 days)  →  DoR-ready Stories → enter Downstream
```

Discovery feeds refinement. Refinement feeds delivery. All run concurrently on different features — no six-week wait, no idle developers.

---

## Who This Is For

| Role | What you'll find |
|---|---|
| **Product Manager** | 5-station discovery workshop, initiative briefs, journey mapping, experience snapshots, and story-ready backlogs |
| **Developer / Tech Lead** | Stories with acceptance criteria and Gherkin before you start. Clear branching strategy, PR conventions, and Definition of Done |
| **QA Engineer** | Testable ACs written before development. BDD with Gherkin, scenario tagging, and the Three Amigos grooming session |
| **Designer** | Involvement from Station 1. Experience Snapshots anchor empathy. Design states (empty, loading, error, success) in every story |
| **Engineering Manager** | Cadences, escalation paths, WIP limits, and phase gates that create predictability without micromanagement |
| **DevOps / SRE** | Runbook templates, SLO frameworks, incident severity tiers, and blameless post-mortem templates |
| **Customer Success** | A feedback loop that actually reaches the product team. Health scores, strategic synthesis, and signal routing |
| **CEO / CTO / Leadership** | A single operating model. Shared language. Phase gates. Business goal → KPI → initiative chain |

---

## What's Inside

```
docs/
├── guide/                       # Start here — introduction, lifecycle, growth path
│   ├── start-here.md            # "What's my situation? Where do I go?"
│   ├── narrative.md             # Why storytelling is the core skill
│   ├── ship-clean.md            # Growth Path stage 1: DoR + DoD
│   ├── shape-before-you-build.md # Growth Path stage 2: story mapping + The Cut
│   ├── discover-before-you-shape.md # Growth Path stage 3: 5-station workshop
│   ├── own-what-you-ship.md     # Growth Path stage 4: Onstream practices
│   ├── close-the-loop.md        # Growth Path stage 5: Offstream → next cycle
│   └── ...
├── upstream/                    # Discovery & Refinement
│   ├── spiral-model.md          # The Upstream Spiral: three types of work
│   ├── station-1-vision.md      # Discovery Workshop — Vision & Context
│   ├── station-2-problem.md     # Discovery Workshop — Problem Framing
│   ├── station-3-journey.md     # Discovery Workshop — User Journey & Slices
│   ├── station-4-options.md     # Discovery Workshop — Solution Options
│   ├── station-5-decision.md    # Discovery Workshop — Decision & Scope
│   ├── activities-sprint.md     # Initiative Discovery activities
│   ├── feature-activities.md    # Feature Discovery activities
│   ├── epic-activities.md       # Epic Refinement activities
│   ├── definition-of-ready.md   # 9-point DoR checklist
│   ├── story-mapping.md         # Story mapping practice
│   ├── the-cut.md               # The Cut — focus decision on what to refine
│   └── ...
├── downstream/                  # Engineering & Delivery
│   ├── story-workflow.md        # 7-state story machine
│   ├── definition-of-done.md    # DoD checklist
│   ├── gherkin.md               # BDD patterns + Gherkin tagging
│   ├── kanban-flow.md           # WIP limits, flow metrics
│   └── ...
├── onstream/                    # Service Delivery & SLA
│   ├── incident-management.md   # P0–P3 playbooks
│   ├── bug-taxonomy.md          # 5-dimension classification
│   ├── rca-template.md          # Root cause analysis
│   ├── post-mortem-template.md  # Blameless post-mortem
│   └── ...
├── offstream/                   # Growth & Customer Success
│   ├── feedback-loop.md         # CS → Product signal pipeline
│   ├── strategic-synthesis.md   # Quarterly synthesis → next direction
│   ├── health-score.md          # Account health model
│   └── ...
├── tutorials/                   # Hands-on walkthroughs
│   ├── from-chaos-to-flow.md    # Start from a real failure
│   ├── zero-to-ready.md         # Your first discovery sprint
│   ├── wrong-way-right-way.md   # Common mistakes, revealed
│   ├── e2e-initiative.md        # Full initiative lifecycle
│   ├── bdd-workshop.md          # Gherkin practice
│   ├── two-products-one-team.md # Stress test — full framework under pressure
│   ├── incident-to-improvement.md # Onstream → Upstream feedback loop
│   └── ...
├── reference/                   # Templates, standards, examples
│   ├── initiative-template.md   # Copy-paste Initiative Brief
│   ├── story-template.md        # Copy-paste Story template
│   ├── non-negotiables.md       # The 10 rules that never bend
│   └── ...
└── examples/                    # Real project documents
    ├── initiative-pninei-halacha.md
    ├── feature-living-wondrously.md
    ├── postmortem-jwt-outage.md
    └── ...
```

---

## Quick Start

**Read the playbook online:**
→ [200-nwire.github.io/udoo-playbook](https://200-nwire.github.io/udoo-playbook/)

**Run it locally:**

```bash
# Prerequisites: Node.js 22, pnpm
git clone https://github.com/200-nwire/udoo-playbook.git
cd udoo-playbook
pnpm install
pnpm run dev
# → http://localhost:5173
```

**Adopt progressively (the Growth Path):**
1. **Ship Clean** — DoR + DoD + grooming. Start here.
2. **Shape Before You Build** — Add story mapping + The Cut.
3. **Discover Before You Shape** — Add the 5-station discovery workshop.
4. **Own What You Ship** — Add Onstream practices.
5. **Close the Loop** — Add Offstream + strategic synthesis.

---

## Use With AI Assistants

This repo ships AI configurations that teach your assistant the UDOO framework. The assistant doesn't just know the vocabulary — it works like an agentic product team: decompose first, find the right level, produce artifacts in sessions with review gates.

### The Agentic Approach

The AI assistant follows the same discipline as a human team:

**1. Triage first — don't jump to output.**
When you describe work, the assistant classifies it (Initiative / Feature / Epic / Story / Bug) before producing anything. The wrong classification means the wrong artifact, which means wasted work.

**2. Find the level, not the finish line.**
The assistant checks what artifacts already exist. If a Feature Brief is missing, it doesn't write stories — it starts Feature Discovery. If an Initiative Brief is missing, it goes there first. It enters the spiral at the right level and works downward.

**3. Recover, don't restart.**
For existing projects, the assistant audits what's in place, traces upward to find the highest documented level, and backfills gaps — the same recovery process described in the playbook's recovery tutorial.

**4. Sessions, not monologues.**
Discovery is conversational. The assistant runs one station at a time, asks questions, waits for answers, synthesises, and reviews before moving on. It doesn't dump a complete Initiative Brief from a one-sentence prompt — it walks you through the same five stations the Core Trio would.

**5. Review gates between levels.**
After producing an artifact (Initiative Brief, Feature Brief, Epic with stories), the assistant pauses for review before moving to the next level. Just like a real team: discovery review → refinement → DoR check → sprint. No level is skipped, no gate is bypassed.

### Slash Commands (Claude Code)

```bash
# Install globally (available in every session)
./ai/install.sh --global-claude
```

| Command | What it does | Level |
|---|---|---|
| `/triage` | Classify an idea into the right UDOO layer | Entry point |
| `/upstream` | Run a full 5-station discovery session | Initiative Discovery |
| `/spec` | Write an Experience Snapshot + Feature Brief | Feature Discovery |
| `/epic` | Write a Jira-ready Epic with candidate stories | Epic Refinement |
| `/story` | Shape a rough idea into a DoR-ready user story | Epic Refinement |
| `/dor` | Audit a story against the 9-point DoR checklist | Quality gate |
| `/adr` | Document an architecture decision (MADR format) | Any level |
| `/rca` | Root cause analysis with 5 Whys | Onstream |
| `/postmortem` | Write a blameless post-mortem | Onstream |

**The recommended flow mirrors the spiral:**

```
/triage  →  what level is this?
/upstream  →  Initiative Discovery (if new problem space)
/spec  →  Feature Discovery (if initiative exists)
/epic  →  Epic Refinement (if feature is shaped)
/story  →  Story shaping (if epic context exists)
/dor  →  Readiness check before sprint
```

Each command checks for upstream context. `/story` asks for a persona before writing. `/spec` asks for the initiative context. `/epic` checks for a Feature Brief. The assistant doesn't skip levels — it asks you to fill the gap first.

**For a specific project:**
```bash
cd your-project
/path/to/udoo-playbook/ai/install.sh --project-claude
# Then fill in the [PLACEHOLDER] sections in ./CLAUDE.md
```

### Cursor

```bash
# Legacy format (works everywhere)
cp ai/cursor/.cursorrules your-project/

# Modern MDC format (Cursor 0.40+)
cp -r ai/cursor/rules/ your-project/.cursor/rules/
```

See [`ai/README.md`](ai/README.md) for the full setup guide.

---

## Real Examples Used Throughout

The playbook uses real project patterns as teaching vehicles:

| Project | Used to illustrate |
|---|---|
| **Pninei Halacha** (religious reading app) | Upstream discovery, multilingual/offline constraints, ADR writing |
| **Living Wondrously** (wellness journal) | End-to-end lifecycle: initiative → feature → stories → Gherkin → release |
| **Someone for Coffee** (social matching) | Downstream flow, story splitting, incident management |
| **Reflect + PathFinder** (stress test) | Two products, one team: parallel discovery/delivery, reopen triggers, strategic synthesis |

Two incidents are used as concrete teaching examples:
- **Balance Display Bug** — `$0.00` instead of `-$50.00`: AC precision, edge case coverage, RCA
- **JWT Policy Outage** — 44-minute full outage: assumption blindness, post-mortems, runbooks

---

## Lite Mode

Running a small team or a simple project? The full framework is adaptable.

[Lite Mode →](https://200-nwire.github.io/udoo-playbook/guide/lite-mode) compresses the ceremonies and checklists for teams of 1–4, with a clear path to grow into the full framework as the product matures.

---

## Contributing

Contributions are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

The most valuable contributions are:
- Real-world examples (incidents, initiative briefs, post-mortems) with sensitive details removed
- Clarity improvements to any section
- Fixes for gaps or inconsistencies

---

## License

MIT — see [LICENSE](LICENSE). Use it, adapt it, share it. Attribution appreciated but not required.

---

## Acknowledgements

This framework synthesises ideas from many sources: Jeff Patton's story mapping, the Google SRE book, Shape Up, the Basecamp team's thinking on work hierarchy, Marty Cagan's continuous discovery, and years of hard-won experience shipping software products.

The goal is not to add another methodology to the pile — but to give teams a single, coherent operating model that spans the full lifecycle of a product.

---

*Built with [VitePress](https://vitepress.dev). Deployed with GitHub Pages.*
