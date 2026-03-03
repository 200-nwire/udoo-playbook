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

**1. Upstream uses Scrum for discovery — not for delivery.**
Discovery is uncertain and iterative. It needs timeboxing, ceremonies, and cross-functional collaboration. UDOO uses five structured discovery stations, a Definition of Ready, and experience snapshots to create clarity before a single line of code is written.

**2. Downstream uses lean Kanban — not sprint-based delivery.**
Once work is shaped and clear, it should flow — not batch. Kanban with WIP limits, story state machines, and the Definition of Done creates predictable, continuous delivery without the mini-waterfall of sprints.

**3. Onstream is SRE-grade — not an afterthought.**
Features shipped without runbooks and SLOs are liabilities. UDOO treats operations as a first-class product discipline: on-call playbooks, blameless post-mortems, bug taxonomy, and service reliability targets are built into the delivery process.

**4. Offstream closes the loop — not just manages accounts.**
Customer success is treated as the beginning of the next product cycle. Health scores, feedback loop protocols, and signal routing from CS back to product create the continuous learning machine that actually improves the product.

**5. Narrative is the core skill.**
Before wireframes, before tickets, before estimates — write the story. Experience snapshots, user stories with clear "so that" outcomes, and Gherkin scenarios that trace back to named personas create shared mental models across every discipline.

---

## The Framework at a Glance

| Phase | Methodology | Primary Question | Key Artifacts |
|---|---|---|---|
| 🔵 **Upstream** | Scrum for discovery | Are we building the right thing? | Initiative Brief, Experience Snapshot, Definition of Ready |
| 🟢 **Downstream** | Lean Kanban | Are we building it right? | Story state machine, Definition of Done, Gherkin scenarios |
| 🟠 **Onstream** | SRE / SLA | Is it running reliably? | Runbooks, SLO dashboards, Incident playbooks, Post-mortems |
| 🟣 **Offstream** | Customer success | Is it creating value? | Health scores, Feedback loops, Account cadence |

### The 4-Layer Work Hierarchy

Every piece of work belongs to one of four layers:

```
Initiative  →  Why? (the strategic problem)
  Feature   →  What? (the user-facing capability)
    Epic     →  How? (the structural room inside the feature)
      Story  →  Now? (the smallest testable unit of value)
```

Skipping a layer is the fastest path to downstream pain. Respecting the layers is the fastest path to predictable delivery.

---

## Who This Is For

| Role | What you'll find |
|---|---|
| **Product Manager** | A structured discovery process: 5 stations, initiative briefs, user journey mapping, Experience Snapshots, and story-ready backlogs |
| **Developer / Tech Lead** | Stories with acceptance criteria and Gherkin before you start. Clear branching strategy, PR conventions, and Definition of Done |
| **QA Engineer** | Testable ACs written before development. BDD with Gherkin, scenario tagging, and AssertThat integration |
| **Designer** | Involvement from Station 1. Experience Snapshots anchor empathy. Design states (empty, loading, error, success) in every story |
| **Engineering Manager** | Cadences, escalation paths, WIP limits, and phase gates that create predictability without micromanagement |
| **DevOps / SRE** | Runbook templates, SLO frameworks, incident severity tiers, and blameless post-mortem templates |
| **Customer Success** | A feedback loop that actually reaches the product team. Health scores, QBR structures, and churn prevention cadences |
| **CEO / CTO / Leadership** | A single operating model. Shared language. Phase gates. Business goal → KPI → initiative chain |
| **New team member** | A complete onboarding guide. Role-based reading paths. Real examples throughout |

---

## What's Inside

```
docs/
├── guide/                    # Start here — introduction, lifecycle, hierarchy
│   ├── start-here.md         # "What's my situation? Where do I go?"
│   ├── narrative.md          # Why storytelling is the core skill
│   ├── lite-mode.md          # Scaled-down version for small teams
│   └── ...
├── upstream/                 # Phase 1 — Product & Discovery
│   ├── discovery-types.md    # New project vs feature vs story — what level?
│   ├── idea-triage.md        # Where does this idea belong?
│   ├── business-goals.md     # Company Goal → OKR → KPI → Initiative chain
│   ├── experience-snapshot.md # The day-in-the-life narrative tool
│   ├── station-1-vision.md   # Vision & Context
│   ├── station-2-problem.md  # Problem Framing
│   ├── station-3-journey.md  # User Journey & Slices
│   ├── station-4-options.md  # Solution Options & ADRs
│   ├── station-5-decision.md # Decision & Scope
│   ├── definition-of-ready.md # 9-point DoR checklist
│   └── ...
├── downstream/               # Phase 2 — Engineering & Delivery
│   ├── story-workflow.md     # 7-state story machine
│   ├── definition-of-done.md # 8-point DoD checklist
│   ├── gherkin.md            # BDD patterns + Gherkin tagging
│   ├── kanban-flow.md        # WIP limits, Little's Law, flow metrics
│   └── ...
├── onstream/                 # Phase 3 — Service Delivery & SLA
│   ├── incident-management.md # P0–P3 playbooks
│   ├── bug-taxonomy.md       # 5-dimension classification system
│   ├── rca-template.md       # Root cause analysis (with worked example)
│   ├── post-mortem-template.md # Blameless post-mortem (with JWT outage example)
│   └── ...
├── offstream/                # Phase 4 — Growth & Customer Success
│   ├── customer-lifecycle.md # Onboarding → Activation → Advocacy
│   ├── health-score.md       # Red/Amber/Green account health model
│   ├── feedback-loop.md      # CS → Jira → Product pipeline
│   └── ...
├── portfolio/                # Managing multiple initiatives
│   ├── index.md              # Now/Next/Later model
│   ├── roadmap.md            # Building and communicating the roadmap
│   └── dependencies.md      # Cross-team dependency management
├── standards/                # Cross-cutting conventions
│   ├── jira-issue-types.md   # Hierarchy and naming
│   ├── bug-labels.md         # Bug taxonomy labels
│   └── gherkin-tags.md       # @smoke, @regression, @acceptance
├── reference/                # Templates and quick reference
│   ├── non-negotiables.md    # The 10 rules that never bend
│   ├── phase-gates.md        # 4 checklist gates
│   ├── story-template.md     # Copy-paste Jira template
│   └── glossary.md           # 60+ defined terms
├── tutorials/                # Hands-on walkthroughs
│   ├── zero-to-ready.md      # Your first discovery sprint
│   ├── wrong-way-right-way.md # The most common mistakes, revealed
│   └── ...
└── examples/                 # Real project documents
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

**Adapt it for your team:**
1. Fork this repository
2. Replace `200apps` references with your organisation name
3. Update `docs/onstream/sla-slo.md` with your service tiers and targets
4. Add your team's real examples to `docs/examples/`
5. Update the Jira/Confluence domain in `docs/standards/tooling.md`

---

## Use With AI Assistants

This repo ships ready-made AI configurations that embed the UDOO framework into your tools. Clone the repo once — your AI assistant learns the framework.

### Claude Code

```bash
# Install slash commands globally (available in every session)
./ai/install.sh --global-claude
```

This installs 9 slash commands into `~/.claude/commands/`:

| Command | What it does |
|---|---|
| `/upstream` | Run a full 5-station discovery session for an initiative |
| `/story` | Shape a rough idea into a DoR-ready user story with Gherkin |
| `/triage` | Classify an idea into the right UDOO layer |
| `/spec` | Write an Experience Snapshot + Feature brief |
| `/adr` | Document an architecture decision (MADR format) |
| `/postmortem` | Write a blameless post-mortem for an incident |
| `/rca` | Root cause analysis with 5 Whys |
| `/dor` | Audit a story against the 9-point DoR checklist |
| `/epic` | Write a Jira-ready Epic with candidate stories |

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

# Modern MDC format (Cursor 0.40+, activates rules by file type)
cp -r ai/cursor/rules/ your-project/.cursor/rules/
```

### Everything at once

```bash
chmod +x ai/install.sh
./ai/install.sh --help
```

See [`ai/README.md`](ai/README.md) for the full setup guide.

---

## Real Examples Used Throughout

The playbook uses four real project patterns as teaching vehicles:

| Project | Used to illustrate |
|---|---|
| **Pninei Halacha** (religious reading app) | Upstream discovery, multilingual/offline constraints, ADR writing |
| **Living Wondrously / Momentum** (wellness journal) | End-to-end lifecycle: engagement problem → initiative → feature → stories → Gherkin → release |
| **Someone for Coffee** (social matching) | Downstream flow, story splitting, incident management |
| **Analytics Layer** (Amit LMS) | Architecture decisions, data model design, graph ontology |

Two specific incidents are used as concrete teaching examples:
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
