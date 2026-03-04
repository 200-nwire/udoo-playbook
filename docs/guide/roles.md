# Roles

UDOO is a team practice. Individual roles define accountabilities — who is responsible for which outputs, which quality gates, and which ceremonies at each phase.

This page covers who does what, and what breaks when a role is missing or unclear.

---

## Role Map by Phase

| Role | Upstream | Downstream | Onstream | Offstream |
|---|---|---|---|---|
| **Product Manager** | Leads discovery · owns initiative and feature briefs · writes and maintains DoR-compliant stories | Answers clarification questions · owns backlog priority | Provides context for incidents affecting features | Gathers and interprets customer signals · feeds next Upstream |
| **Designer (UX/UI)** | Participates from Station 1 · owns experience snapshots and visual references | Provides design assets · reviews implementation | Reviews UX degradation in incidents | Collects user feedback on shipped features |
| **Tech Lead** | Participates in discovery · owns ADRs · flags architectural risks · confirms technical feasibility | Owns code quality · reviews PRs · coordinates technical complexity | Leads technical incident response · owns runbooks | Identifies technical debt feeding back to Upstream |
| **Developer** | Participates in Station 3+ · provides feasibility input · flags impossible scope | Implements stories · writes unit tests · owns PR quality | Participates in on-call · executes runbooks | N/A (indirect) |
| **QA Lead** | Participates in story shaping · reviews Gherkin ACs before sprint | Runs test cycles · owns DoD verification · writes E2E tests | Monitors production for regressions · participates in incident review | Reviews quality-related customer signals |
| **Team Lead** | Facilitates upstream ceremonies · owns process health | Maintains WIP limits · tracks cycle time · facilitates retrospectives | Coordinates incident response at team level | Reviews team health relative to customer signals |
| **Engineering Manager / SDM** | Reviews portfolio health · allocates discovery capacity | Reviews downstream metrics · removes blockers | Owns on-call rotation · escalation path | Participates in QBRs · reports on reliability |
| **Customer Success** | Provides customer signals and usage context at Station 1 | N/A | Reviews customer-facing impact of incidents | Owns customer health scores · runs QBRs · feeds signals to PM |

---

## Role Definitions

### Product Manager

The PM is not the person who decides everything. They are the person who ensures the right people are in the room and the right questions are asked.

**Accountabilities:**
- Initiative briefs and feature specs — written, reviewed, updated as understanding develops
- Story quality — every story the PM writes must meet DoR before it enters the sprint
- Backlog priority — the PM owns the order of the backlog, not the size of the stories
- Stakeholder communication — translates technical and design progress into business language

**PM on multiple projects:** This is the default configuration at 200apps. A PM carrying two or three projects simultaneously must be ruthless about upstream capacity. The upstream sprint model exists precisely for this situation — all upstream work across all projects in one portfolio, managed with the same Scrum disciplines (backlog, sprint planning, review, retro). Without this structure, multi-project PMs constantly context-switch and do shallow discovery on all projects instead of deep discovery on any.

**What a PM must never do:** Approve their own stories. A story written and accepted by the same person has no quality gate. The tech lead or a developer must confirm technical feasibility; the designer must confirm the visual reference exists; QA must confirm the ACs are testable.

---

### Designer (UX/UI)

The designer is not the person who makes things look good at the end. They are the person who makes things understandable from the beginning.

**Accountabilities:**
- Experience snapshots — the narrative that makes a feature real before a line of code is written
- Design states — every story must have empty state, loading state, error state, and success state defined
- Component decisions — which patterns exist and can be reused; which require new design work
- Visual reference in DoR — no story enters the sprint without a visual reference (lo-fi wireframe minimum)

**When design is missing or silo'd:** The symptoms are: developers making UX decisions in isolation ("I just used a modal, seemed fine"), inconsistent UI patterns across features, states that were never specified getting built as bugs ("what's supposed to show when there are no results?"), and design reviews that happen after development — when changes are expensive and often don't happen.

The fix is not more reviews at the end. It is earlier involvement at the beginning. A designer who participates in Station 1 and 2 shapes the solution direction before anyone has committed to an approach.

---

### Tech Lead

The tech lead is the keeper of technical integrity across the team.

**Accountabilities:**
- ADRs — every significant, hard-to-reverse architectural decision gets a MADR-format ADR before work begins
- Technical feasibility sign-off in DoR — a story is not ready until a developer or tech lead has confirmed it can be built as described in the estimated time
- PR review — not delegatable to automation; tech lead ensures the codebase stays coherent
- Upstream participation — particularly at Station 2 (constraints), Station 4 (solution options), and Station 5 (decision)

**What happens when the tech lead is absent from upstream:** Estimates are fiction. Not because developers are bad at estimation — because they are estimating based on a spec that doesn't reflect the technical reality they know. The classic symptom: a developer says "that's going to take much longer than you thought" at sprint planning — three weeks after the upstream discovery that they weren't part of.

**Tech lead vs Team Lead:** These are different roles. The tech lead owns technical quality. The Team Lead owns process health. The same person can do both, but only if the project is small enough that neither role suffers. At Tier 1, they should be different people.

---

### Developer

Developers are not the last link in the chain. They are participants from Station 3 of discovery onward.

**Accountabilities:**
- Station 3+ participation — developers who participate in user journey mapping write better code because they understand why
- Subtask breakdown — stories are broken into subtasks (typically 4–6) before development begins; this is developer work, not PM work
- PR quality — the author is responsible for their PR: description written, linked story, self-reviewed before review requested
- Definition of Done adherence — a developer who marks a story "done" that doesn't meet DoD is creating a problem for someone else

**What happens when developers are excluded from upstream:** Technical feasibility is guessed. Implementation decisions are made by people who don't understand the constraints. Developers feel no ownership over the product they're building — because they weren't part of building the vision. The most motivated developers are ones who participated in the discovery and understand why the work matters.

---

### QA Lead

QA in UDOO is not a phase. It is a discipline that runs throughout the lifecycle.

**Accountabilities:**
- Gherkin AC review — before a story enters the sprint, QA reviews the acceptance criteria for testability
- DoD ownership — the QA lead is the final sign-off on "done" for any story with external-facing behavior
- E2E test maintenance — as features ship, E2E test coverage is maintained (not left as tech debt)
- Regression monitoring — in Onstream, QA monitors production behavior for regressions after releases

**The QA anti-pattern:** QA joins the sprint at the end, reads the PR or a brief description, tries to figure out what to test, finds bugs, sends things back, gets pressure to approve things that aren't ready. This is not QA — this is hope. The alternative is Gherkin ACs written at story shaping time, reviewed by QA before the sprint starts, and used as the test plan by both developer and QA lead.

---

### Team Lead

This is the role most teams leave implicit — and the one whose absence most predictably causes framework failure.

The Team Lead does not own product decisions (that's the PM). They do not own technical decisions (that's the Tech Lead). They own **process health**.

**Accountabilities:**
- WIP limit enforcement — when the board is full, the Team Lead calls it and redirects the team to finish existing work
- Cycle time tracking — the Team Lead monitors how long stories are taking and identifies blockers before they become crises
- Retrospective facilitation — the Team Lead runs retros and ensures actions are tracked and closed
- Upstream-downstream handoff — the Team Lead ensures that what the PM and designer are producing actually meets DoR; they are the quality gate between upstream and downstream
- Ceremony health — standups, refinements, reviews — the Team Lead ensures these have outcomes, not just agendas
- Escalation — when something is blocking the team and not resolving, the Team Lead escalates to the EM before it becomes a crisis

**Dedicated vs. shared:** At Tier 1, a dedicated Team Lead is required. At Tier 2, the role is typically held by the senior developer or tech lead alongside technical work — this works if the expectation is explicit. At Tier 3, the PM or most senior person carries this implicitly.

**What happens when this role is absent:** The team defaults to individual accountability without coordination. WIP limits are ignored because no one is tracking them. PRs sit because no one is nagging the reviewer. Retrospectives don't happen because "we're too busy." The framework degrades from a practice into a vocabulary. Everyone knows the words, but the behavior doesn't change.

---

### Engineering Manager / SDM

At Tier 1, this role owns the system above the team — capacity allocation, cross-team dependencies, and escalation paths.

**Accountabilities:**
- Upstream capacity allocation — the EM ensures each initiative has enough discovery time; they are the referee when discovery capacity is oversubscribed
- Cross-team blocking — when one team is blocked by another, the EM resolves it
- On-call rotation — the EM owns the on-call schedule and ensures it's not exclusively falling on the same people
- Programme visibility — status reports, stakeholder updates, and CO (change order) tracking
- People health — the EM watches for burnout signals, load distribution problems, and motivation issues

**At Tier 2 and 3:** This role is often the PM or a part-time involvement from a senior leader. That's fine. What matters is that someone is watching the system level — not just the individual team's sprint.

---

### Customer Success

Customer Success is the organization's ears. They hear what customers actually experience — not what the product team imagined they would experience.

**Accountabilities:**
- Health scores — tracking customer engagement, adoption, support volume, and renewal risk
- QBR ownership — Quarterly Business Reviews that surface usage patterns, complaints, and feature gaps
- Feedback channel to PM — structured signals (not just "a customer said...") that translate customer experience into Upstream opportunities
- Churn early warning — CS flags at-risk accounts before they churn, enabling PM to prioritize retention-oriented features

**The feedback loop failure:** CS collects feedback but it never reaches the PM. The PM does discovery based on product intuition rather than customer signal. The wrong features get built. Customers churn. The postmortem says "we weren't aligned with customer needs" — but no one traces that back to CS signals that existed and were ignored.

**What CS needs from the product team:** Transparency about what's being built and why. A clear channel to submit feedback signals (not just a Slack message that gets lost). An acknowledgment when their input shaped a decision.

---

## When Roles Are Missing

| Missing role | Most likely symptom |
|---|---|
| PM | Dev-led products that solve interesting technical problems but not customer ones |
| Designer | Inconsistent UX, undefined edge states, "the backend developer made the UI decision" |
| Tech Lead | Architectural divergence, no ADRs, estimates that are always wrong |
| Developer in upstream | Impossible scope that reaches the sprint with no plan |
| QA Lead | Bugs found in production that were predictable from the spec |
| Team Lead | WIP limits ignored, stale PRs, retros that don't happen |
| Customer Success | Discovery based entirely on PM intuition with no signal from actual customers |

---

## The Minimum Viable Team

For most Tier 2 projects, the minimum viable team that can run UDOO properly is:

- **1 PM** (owns upstream, backlog, stories)
- **1 Designer** (owns experience, visual references, design states)
- **2–3 Developers** with one acting as Tech Lead (owns technical quality, ADRs)
- **1 QA Lead** (even if shared across projects — can be one day per week, but it must be consistent)
- **1 person accountable for Team Lead responsibilities** (can be Tech Lead, can be PM — but must be named and explicit)

A team of five with one person per role and clear accountabilities will outperform a team of ten where "everyone is responsible" for process health and therefore no one is.
