# YOU DO

**A Saga in Three Books**

**I** — *The Weight of Knowing* | **II** — *The Agreement* | **III** — *The Craft of War*

[![Deploy to GitHub Pages](https://github.com/200-nwire/udoo-playbook/actions/workflows/deploy.yml/badge.svg)](https://github.com/200-nwire/udoo-playbook/actions/workflows/deploy.yml)

> **Live site:** [200-nwire.github.io/udoo-playbook](https://200-nwire.github.io/udoo-playbook/)

---

## What This Is — And Why It Exists

The novel opens with an IV drip counting seconds. It closes with a man asking to watch drivers work before planning anything. Everything lives in the distance between those two images.

YOU DO is a saga in three books about what it means to do work with care for the person who comes after you. Not productivity — care. The ceremonies, templates, and practices across all three books are mechanisms for one thing: moving knowledge from where it was created to where it is needed, at the least possible cost.

Most teams don't lack talent. They lack the shared language to coordinate that talent toward something finished. They burn out building things that don't matter, or building the right things wrong, or building them right but shipping into a void where nobody measures whether it worked. They end up in jobs they chose because they wanted to make things, doing work that feels like filling forms.

This body of work is an answer to that. It says: here is what it looks like when a team works with intention. Here is what every role is for. Here is what the person after you needs from you. Here is what *done* actually means. Here is the vet on her Tuesday morning, thinking about her patient, not the software — and that is the whole point.

---

## The Central Philosophical Claim

**Every team's deepest problem is not skill. It's the distance between what one person knows and what the next person needs.**

That distance is everywhere. PM to developer: the story that looked clear in the PM's head, opaque on the ticket. Designer to engineer: the intention visible in the mockup, invisible in the implementation. Engineer to on-call team: the system behavior obvious to the builder, catastrophic to whoever inherited it. CS to product: the signal that lived in a spreadsheet, never becoming an initiative.

The cost travels in one direction: forward, to the next person, compounding at each stage. One hour of vagueness in discovery becomes one day of rework in development, one week of instability in operations, one quarter of misalignment in strategy.

The three books are three ways of closing that distance:

- **The Agreement** closes it through shared agreements — we all operate from the same model
- **The Craft of War** closes it through shared craft — we all know how to do the specific things
- **The Weight of Knowing** closes it through shared experience — we all feel what it costs when the distance stays open

Agreements without craft are theater. Craft without agreements is heroism. Both without the felt cost are compliance. You need all three.

---

## The Three Books

| | Book | Register | What it does |
|---|---|---|---|
| **I** | *The Weight of Knowing* | Experience | A novel. Thirty-five chapters, four parts, eleven characters building software for a veterinary clinic. Every framework concept embedded in story, unnamed, felt. |
| **II** | *The Agreement* | Understanding | The operating system. What teams must agree on before any practice can work. A constitution, not a manual — it addresses the ethical layer that most frameworks skip. |
| **III** | *The Craft of War* | Craft | The field guide. Thirty-three chapters on the specific skills — discovery research, schema design, post-mortem facilitation, CS signal translation — organized by what you're trying to do, not what phase you're in. |

They are not sequential. They are three instruments playing the same theme. But they have natural entry points:

- Start with **The Weight of Knowing** if you want to feel the cost before understanding the system.
- Start with **The Agreement** if you want to understand the system before applying it.
- Start with **The Craft of War** if something is on fire right now and you need the direct answer first.

---

## The Framework at a Glance

| Phase | Question | Key Artifacts |
|---|---|---|
| **Upstream** | Are we building the right thing? | Initiative Brief, Experience Snapshot, Definition of Ready |
| **Downstream** | Are we building it right? | Story state machine, Definition of Done, Gherkin scenarios |
| **Onstream** | Is it running reliably? | Runbooks, SLO dashboards, Incident playbooks, Post-mortems |
| **Offstream** | Is it creating value? | Health scores, Feedback loops, Strategic Synthesis |

### The Spine

**Gates protect the next person.** That sentence is the entire operating system.

The DoR protects the developer from receiving unclear work. The DoD protects QA from receiving unfinished work. The runbook protects the on-call engineer. The feedback loop protects the PM from deciding in a vacuum. The ceremonies are the mechanism. The ethic is care for whoever comes after you in the chain.

---

## Who This Is For

**Primary:** Product Managers, Tech Leads, and Senior Developers at teams of 5–50 people who feel the tension between moving fast and building right. They've read Shape Up, Accelerate, The Phoenix Project — and found them useful but incomplete.

**Secondary:** QA engineers and designers who want influence earlier in the cycle. Engineering managers who want a shared operating model without imposing a methodology. CS and account managers who want customer signals to become product decisions. Team leads at consultancies running multiple concurrent products.

---

## What's Inside

```
docs/
├── novel/           # Book I — The Weight of Knowing (35 chapters)
├── guide/           # Book II foundations — manifesto, growth path, start here
├── upstream/        # Discovery & refinement — 5 stations, spiral model, DoR
├── downstream/      # Delivery — DoD, Gherkin, Kanban, story workflow
├── onstream/        # Operations — SLOs, incidents, runbooks, post-mortems
├── offstream/       # Growth — feedback loop, strategic synthesis, health scores
├── field-guide/     # Book III — The Craft of War (sample chapters)
├── portfolio/       # Roadmap, cross-team dependencies
├── standards/       # Jira conventions, bug labels, Gherkin tags, tooling
├── tutorials/       # Hands-on walkthroughs
├── examples/        # Real-world initiative briefs, RCAs, post-mortems
└── reference/       # Templates, non-negotiables, phase gates, glossary
```

---

## Quick Start

**Read online:**
[200-nwire.github.io/udoo-playbook](https://200-nwire.github.io/udoo-playbook/)

**Run locally:**

```bash
# Prerequisites: Node.js 22, pnpm
git clone https://github.com/200-nwire/udoo-playbook.git
cd udoo-playbook
pnpm install
pnpm run dev
```

**Three doors:**

- **Something isn't working right now** — [Tension Scenarios](/field-guide/) (The Craft of War, Part 7)
- **I want to understand the system** — [The Manifesto](/guide/manifesto) (The Agreement)
- **Start with a story** — [Chapter 1 — Tuesday](/novel/chapter-01) (The Novel)

**Adopt progressively (the Growth Path):**

1. **Ship Clean** — DoR + DoD + grooming
2. **Shape Before You Build** — Story mapping + The Cut
3. **Discover Before You Shape** — 5-station discovery workshop
4. **Own What You Ship** — SLOs, runbooks, on-call
5. **Close the Loop** — Feedback pipeline + strategic synthesis

---

## Use With AI Assistants

This repo ships AI configurations that teach your assistant the UDOO framework. The assistant follows the same discipline as a human team: decompose first, find the right level, produce artifacts in sessions with review gates.

### Slash Commands (Claude Code)

```bash
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

Each command checks for upstream context. `/story` asks for a persona before writing. `/spec` asks for the initiative context. `/epic` checks for a Feature Brief. The assistant doesn't skip levels.

See [`ai/README.md`](ai/README.md) for the full setup guide.

---

## What Makes This Different

- **Three registers, one subject** — a literary novel, a practical constitution, and a practitioner craft manual, each deepening the others
- **The novel embeds every framework concept without naming it** — the reader feels the cost before being told what the practices are
- **The Agreement is a constitution, not a methodology** — it addresses the ethical layer (care for the next person) that most frameworks skip
- **The Craft of War contains content that doesn't exist elsewhere** — particularly DB schema as a product decision, and twenty-six tension scenarios with the direct answer before the explanation
- **All three books share a world** — the characters in the novel are the roles in The Agreement and the practitioners in The Craft of War

---

## Contributing

Contributions are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

The most valuable contributions are:
- Real-world examples (incidents, initiative briefs, post-mortems) with sensitive details removed
- Clarity improvements to any section
- Fixes for gaps or inconsistencies

---

## License

MIT — see [LICENSE](LICENSE).

---

*Alexander Gefter — Architect, UDOO OS — 200apps / NWIRE*

*Built with [VitePress](https://vitepress.dev). Deployed with GitHub Pages.*
