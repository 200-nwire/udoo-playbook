# Scale Tiers

UDOO scales. Not every project needs every practice, every ceremony, or every artifact. What never scales is using "we're a small team" as the reason to skip the things that protect you.

This page defines three scale tiers. Each tier is a configuration of UDOO — a different emphasis, a different level of formality, and a different set of non-negotiables.

---

## The Three Tiers at a Glance

| | Tier 1 — Programme | Tier 2 — Standard | Tier 3 — Lean |
|---|---|---|---|
| **Team size** | 8+ people | 3–8 people | 1–3 people |
| **Typical duration** | 12+ months | 3–12 months | 1–3 months |
| **Budget** | Large · multi-client or product | Mid · feature-level investment | Small · fast iteration |
| **Examples** | Ministry LMS, enterprise SaaS, multi-team platform | Feature track on a funded product, client project | Internal tool, MVP, single-initiative engagement |
| **Upstream** | Full 5-station discovery · upstream sprint · portfolio board | Stations 1–3 required · activities menu | Station 1 only · written briefly |
| **Downstream** | Full Lean Kanban · DoR gate · daily ceremonies | Kanban with WIP limits · weekly sync | Pull-based · implicit DoR · async |
| **Onstream** | SLA commitments · runbooks · incident playbooks · on-call | Runbook per service · incident log | Basic monitoring · quick fixes documented |
| **Offstream** | Health scores · QBRs · retention campaigns | Monthly check-in · feedback loop | Ad hoc feedback · note to next cycle |
| **ADRs** | Required for every significant architectural decision | Required when decision is hard to reverse | Recommended; optional for reversible decisions |
| **Reports** | Programme-level status reports · CO/change management | Sprint-level visibility · stakeholder updates | GitHub / Jira native visibility |

---

## Tier 1 — Programme

> Eight or more people. Multiple concurrent initiatives. A client or stakeholder who needs to see progress and make resource decisions. A timeline measured in years, not months.

At this scale, the framework is a programme operating model, not a team practice.

**What Tier 1 adds:**
- A company-wide upstream sprint that manages all upstream work as a portfolio (see [24 Activities — Sprint System](/upstream/activities-sprint))
- Cross-initiative dependency management — initiatives block each other, and someone must own that map
- A portfolio board that gives leadership visibility across all active work without requiring status meetings
- Change order management — any scope change is documented, estimated, and signed before work begins
- Multiple PM tracks running simultaneously, each doing their own upstream work, coordinating through the portfolio board

**What Tier 1 requires most:**
- A dedicated Team Lead or Engineering Manager who owns process health (see [Roles](/guide/roles))
- Architecture decisions documented before significant downstream work begins (ADR-first culture)
- Downstream teams with genuine WIP limits — at Tier 1 scale, a team without WIP limits will gridlock
- Onstream discipline — at 8+ people, someone is always on-call and runbooks must exist before incidents

**Where Tier 1 teams fail:**
The overhead is real and justified, but it becomes waste when the ceremonies run without outcomes. A programme-level standup that produces no decisions is bureaucracy. A portfolio board that nobody reads is theater. The ceremonies at Tier 1 exist to create shared situational awareness — if they're not doing that, they need to change, not just continue.

---

## Tier 2 — Standard

> Three to eight people. A clear product or feature track. A client or internal stakeholder with defined expectations. A timeline of three to twelve months.

This is the most common configuration for product teams at 200apps. One PM, one to two designers, three to four developers, and a shared QA resource. A Jira project, a Confluence space, a Kanban board.

**What Tier 2 uses:**
- Discovery Stations 1–3 required before any Feature enters the board (Station 4 and 5 as needed for complex decisions)
- A weekly upstream review — not a full sprint, but a consistent slot for shaping work
- Kanban with enforced WIP limits — the team sets them and holds to them
- DoR gate — a story that doesn't meet DoR goes back, not forward
- Biweekly or monthly stakeholder update — written, not a meeting
- Runbooks for production services; incident log when something breaks

**What Tier 2 can defer:**
- Portfolio board (one team, one board — Jira is enough)
- Formal upstream sprint (a weekly planning session works at this scale)
- Change order formality (scope changes can be managed as Jira epics with estimates, not signed documents)
- On-call rotation (one-person on-call is fine with a runbook)

**Where Tier 2 teams fail:**
They treat the framework as optional. "We're small, we don't need all that." They skip the DoR and let vague stories in. They don't hold WIP limits when sprint pressure increases — exactly when WIP limits matter most. They do discovery alone because "there's no time for a session." Six months later they wonder why estimates are always wrong and velocity is unpredictable.

The lesson: Tier 2 teams need the core practices more than Tier 1, not less. They have no slack to absorb the rework that bad practices generate.

---

## Tier 3 — Lean

> One to three people. A focused initiative. A short horizon. Fast feedback.

At this scale, ceremony is waste and rigor is survival.

**What Tier 3 keeps:**
- Station 1 written — even for a three-week piece of work, you need to know who you're building for, what pain you're solving, and what success looks like. Without this, the work will drift.
- Named personas — even informally, the team (or solo developer-PM) should know whose problem they're solving
- WIP limits — a solo developer who has four things "in progress" is fooling themselves. One thing at a time.
- A brief experience snapshot for each feature — one paragraph that makes the goal concrete
- Documentation of architectural decisions that are hard to reverse

**What Tier 3 drops:**
- Upstream sprint and portfolio board
- Formal DoR checklist (internalized, not written out)
- Confluence / Jira hierarchy (GitHub Issues or a single Notion board is fine)
- Weekly ceremonies (async standups or daily notes)
- Formal Gherkin (ACs still exist, just in plain language)

**Where Tier 3 teams fail:**
They skip everything, including the things that protect them. The experience snapshot takes fifteen minutes. The architecture note takes thirty. The brief description of who this is for and what it must do takes ten. These are not bureaucratic formalities — at Tier 3 they are the only thing stopping a solo developer from building the wrong thing for six weeks and discovering it at the demo.

---

## Choosing Your Tier

Start with team size and project duration. Then adjust based on context:

| Situation | Adjust tier |
|---|---|
| A small team on a high-stakes project (ministry, finance, healthcare) | Move up one tier in Onstream practices |
| A large team on a fast MVP with high uncertainty | Move down one tier in Upstream formality — learn first, document after |
| A project with external dependencies or integrations | Move up one tier in architecture discipline (ADRs required) |
| A project with a regulatory audit trail requirement | Move up one tier in xAPI, audit, and Onstream |

**The rule of thumb:** When in doubt, use more upstream discipline and less downstream ceremony. Almost every failure comes from insufficient discovery, not insufficient process.

---

## Team Lead at Each Tier

The Team Lead role looks different at each tier:

**Tier 1:** A dedicated Team Lead or Engineering Manager. This is a full-time role. They own: downstream health (WIP limits, cycle time, DoD), tech lead coordination, sprint retrospectives, and escalation. They are the person who ensures the framework is actually being followed, not just named. If this role is vacant at Tier 1, the framework will not work.

**Tier 2:** The Team Lead is typically the Senior Developer or Tech Lead. The role is shared — they still write code. Their additional responsibilities: PR review coordination, flagging when DoR isn't met, running retrospectives, and escalating scope creep to the PM. This works, but requires explicit agreement that these responsibilities exist alongside technical work.

**Tier 3:** The PM or most senior developer acts as Team Lead by default. There's no ceremony — just someone who owns "are we building the right thing, in the right order, without unnecessary complexity." That person must be willing to say "no" when scope expands.

**What happens when the Team Lead role is missing or unclear:** The most common symptom is that nobody is accountable for process health. DoR slips. WIP limits are ignored when there's pressure. PRs sit unreviewed. The framework degrades into vocabulary without practice. The fix is not more framework — it is clarity about who owns the health of the system.

---

## Tier is a Configuration, Not a Rank

Tier 3 is not "doing it wrong." It is doing exactly what the project requires, without excess.

The mistake is carrying Tier 1 practices into a Tier 3 project — running full upstream sprints and writing ADRs for a three-week internal tool. That is waste. The other mistake is treating a Tier 1 programme with Tier 3 discipline — skipping DoR, ignoring WIP limits, doing solo discovery on a ministry-grade LMS. That is risk.

Know your tier. Apply the right configuration. Add more structure when you feel the pain of not having it — not before.
