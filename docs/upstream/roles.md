# Roles & Ownership

<span class="phase-badge upstream">🔵 Upstream</span>

## Upstream Is a Team Sport

A common misconception: Upstream is the Product Manager's job. Everyone else waits for tickets.

This is wrong — and expensive. When only one person carries the weight of discovery, assumptions go unvalidated, technical risks stay hidden, and the team learns about surprises mid-sprint. The organizations that ship the most reliably are the ones where **multiple disciplines shape work before it enters development**.

Upstream does not require every role in every meeting. It requires the **right people at the right station**, with clear accountability and a shared commitment to producing stories that are genuinely ready.

## The Core Trio

Three roles form the nucleus of every Upstream effort:

| Role | Contribution |
|------|-------------|
| **Product Manager** | Owns the *what* and *why* — problem framing, prioritisation, stakeholder alignment |
| **UX/UI Designer** | Owns the *experience* — user flows, wireframes, accessibility, interaction patterns |
| **Tech Lead** | Owns the *how* and *whether* — feasibility, system impact, architecture constraints |

These three should be present at every station. They are the minimum viable discovery team.

::: tip The Core Trio Rule
If you cannot assemble at least the Core Trio for a discovery sprint, postpone the sprint. Discovery without any one of these three perspectives produces work that will be sent back — either by users, developers, or production incidents.
:::

## Role Profiles

### Product Manager

The Product Manager is the **end-to-end owner of the Initiative**. They do not "write tickets" — they lead discovery, build alignment, and ensure the team is solving a problem that matters.

**Responsibilities:**
- Lead discovery through all five stations
- Own the Initiative Brief and keep it current
- Maintain the product backlog: ordering, grooming, retiring stale items
- Write problem statements (not solution prescriptions)
- Define success signals with measurable targets
- Facilitate stakeholder alignment and manage expectation drift
- Ensure every story meets the Definition of Ready before handoff

**When to involve:** From day zero. The PM frames the problem before anyone else gets involved.

**Common failure mode:** The PM who writes user stories in isolation and drops them on the team. Discovery is a conversation, not a document handoff.

::: warning The "Ticket Factory" Anti-Pattern
A PM who spends most of their time writing Jira tickets is not doing product management — they are doing project administration. The PM's highest-value work happens in Stations 1–3, where the problem space is mapped and sliced. If your PM is buried in ticket formatting, something is structurally wrong.
:::

---

### UX/UI Designer

The Designer is not a downstream pixel-pusher. In Upstream, the Designer is a **co-discoverer** — they help understand user behaviour, map journeys, and test whether proposed flows make sense before a line of code is written.

**Responsibilities:**
- Contribute to the Initiative Brief (Audience, Problem, Journey sections)
- Lead or co-lead user journey mapping (Station 3)
- Create wireframes, low-fidelity prototypes, or flow diagrams for each slice
- Define interaction patterns and ensure consistency with the design system
- Champion accessibility: WCAG compliance, screen-reader flows, keyboard navigation
- Join story readiness reviews to confirm visual references exist
- Participate in stakeholder demos to walk through proposed experiences

**When to involve:** Station 1 (Vision) onwards. Designers should hear the problem framing directly — not receive it filtered through a requirements document.

**Common failure mode:** The designer who joins at Station 4 and receives a solution to "make pretty." By then, the interaction model is already locked and the design space is artificially narrowed.

::: info Accessibility Is Not Optional
Accessibility is a discovery concern, not a QA afterthought. If the Designer identifies that a proposed flow is inaccessible (e.g., relies solely on colour to convey meaning, or requires mouse-only interaction), this must be flagged at Station 3 — not discovered during testing.
:::

---

### Business Analyst

The Business Analyst is the team's **precision instrument for requirements**. They turn conversations into structured, testable statements.

**Responsibilities:**
- Document functional and non-functional requirements
- Draft acceptance criteria in Gherkin-ready format (Given/When/Then)
- Identify edge cases, error states, and boundary conditions
- Maintain the Assumption Register (Station 2)
- Facilitate requirement workshops — extracting clarity from ambiguity
- Cross-reference requirements against regulatory or contractual constraints
- Ensure traceability: every requirement links to a journey step

**When to involve:** Station 2 (Problem Framing) onwards. The BA brings rigour to what could otherwise remain vague.

**Common failure mode:** The BA who documents requirements in isolation without validating them against technical feasibility or user research. Requirements that are technically impossible or user-hostile are worse than no requirements at all.

---

### Tech Lead / Architect

The Tech Lead ensures that what the team discovers is **technically viable and system-safe**. They are not gate-keepers — they are risk illuminators.

**Responsibilities:**
- Validate technical feasibility of proposed solutions (Station 4)
- Identify system impacts: what existing services, schemas, or APIs are affected?
- Surface architectural risks and dependencies
- Write or co-author Architecture Decision Records (ADRs)
- Lead or participate in time-boxed spikes for unknowns
- Provide an implementation sketch: not a design doc, but enough for the team to size confidently
- Confirm no hidden blockers during story readiness checks (DoR item 9)
- Ensure alignment with the organisation's architecture principles

**When to involve:** Station 1 for context setting, actively from Station 2 onwards. The Tech Lead must hear the problem before they evaluate solutions.

**Common failure mode:** The Tech Lead who only appears at Station 4, sees the proposed solution for the first time, and says "this won't work." Early involvement prevents late vetoes.

::: tip "Feasibility" Doesn't Mean "Easy"
When the Tech Lead flags something as "feasible but risky" or "feasible with constraints," this is valuable signal — not an objection. Capture the constraints in the Initiative Brief and factor them into slice planning.
:::

---

### QA Lead

In traditional models, QA appears after code is written. In the UDOO framework, **QA is involved from Station 1**. This is not optional — it is one of the framework's most important principles.

**Responsibilities:**
- Define test strategy early: what types of testing will this initiative need? (unit, integration, E2E, performance, accessibility, security)
- Review acceptance criteria for testability during story readiness checks
- Identify missing edge cases and negative scenarios
- Ensure Gherkin seeds are drafted before stories cross the commitment point
- Define coverage expectations: which journey steps need automated tests?
- Flag risks that would require regression testing of existing features
- Contribute to the DoR checklist — specifically items 3 (acceptance criteria) and 6 (observability signal)

**When to involve:** Station 1 for awareness, actively from Station 2 onwards. QA should read the problem framing and start thinking about testability from the beginning.

**Common failure mode:** QA joins at sprint planning, sees stories for the first time, and discovers they are untestable. This forces a round-trip back to Upstream, costing days.

::: warning Early QA Is Not "Shift Left Testing"
This is a common misunderstanding. QA in Upstream is not about writing test scripts early. It is about **shaping stories so they are testable**. QA's input at Station 2 changes the quality of acceptance criteria. Their input at Station 4 changes the test architecture. Moving QA upstream is a design decision, not just a timing change.
:::

---

### Data Lead

The Data Lead ensures that the initiative is **measurable from day one** — not instrumented as an afterthought three sprints after launch.

**Responsibilities:**
- Define metrics and KPIs during Station 1 (success signals)
- Specify event schemas, tracking plans, and analytics requirements
- Assess data readiness: do we have the data we need? In what state? What gaps exist?
- Validate that observability signals in stories (DoR item 6) are implementable
- Define reporting needs: dashboards, alerts, data exports
- Ensure data privacy compliance (PII handling, retention, consent)

**When to involve:** Station 1 (defining success signals) and Station 5 (finalising the measurement plan).

**Common failure mode:** Launching a feature and then asking "how do we know if it worked?" The Data Lead prevents this by defining the measurement plan before the first story enters development.

---

### Security Lead

The Security Lead ensures that **data, authentication, authorisation, and integration risks** are identified and addressed during discovery — not discovered during a penetration test.

**Responsibilities:**
- Review the initiative for security implications: new data flows, auth changes, third-party integrations, PII exposure
- Ensure data classification is understood: what data is being created, stored, or transmitted?
- Validate that auth and access control requirements are captured in acceptance criteria
- Flag regulatory requirements (GDPR, SOC2, PCI-DSS) that affect scope or implementation
- Review ADRs for security consequences
- Participate in the approval gate at Station 5

**When to involve:** Station 2 (constraints analysis) and Station 4 (solution evaluation). The Security Lead does not need to attend daily standups, but they must review the Initiative Brief before it is frozen.

**Common failure mode:** The JWT incident described in this book — an authentication policy change was deployed without testing legacy token compatibility, causing a full production outage. A Security Lead reviewing the assumption register would have flagged the risk.

---

## RACI Matrix for Upstream Activities

RACI defines who does what. **R** = Responsible (does the work), **A** = Accountable (owns the outcome), **C** = Consulted (provides input), **I** = Informed (kept in the loop).

| Activity | Product Manager | UX/UI Designer | Business Analyst | Tech Lead | QA Lead | Data Lead | Security Lead |
|----------|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| **Concept Ideation** (Station 1) | **A** | R | C | C | I | C | I |
| **Requirements Definition** (Station 2) | A | C | **R** | C | C | I | C |
| **UX/UI Design** (Station 3) | C | **A/R** | C | C | C | I | I |
| **Backlog Refinement** | **A/R** | C | R | C | C | I | I |
| **Technical Feasibility** (Station 4) | C | I | C | **A/R** | C | I | C |
| **Story Readiness Check** (DoR) | **A** | C | R | R | **R** | C | I |
| **Architecture Decisions** (ADRs) | I | I | C | **A/R** | C | C | C |
| **Success Metrics Definition** | **A** | C | C | I | I | **R** | I |
| **Security & Compliance Review** | I | I | C | C | I | C | **A/R** |
| **Approval Gate** (Station 5) | **A** | C | I | R | R | R | R |

::: details How to Read This Matrix
- **A (Accountable):** This person owns the outcome. There is exactly one Accountable per activity. If the output is wrong, this person answers for it.
- **R (Responsible):** This person does the work. There can be multiple Rs.
- **C (Consulted):** This person is asked for input before a decision is made. Two-way communication.
- **I (Informed):** This person is told about the decision after it is made. One-way communication.

The matrix is a starting point. Small teams may combine roles (e.g., Tech Lead + Architect). The principle is that **every activity has a clear owner and no activity is unowned**.
:::

## Cross-Functional Principles

### 1. Accountability by Phase, Collaboration Across Teams

Each phase of the UDOO lifecycle has a primary accountable role — in Upstream, that is the Product Manager. But accountability does not mean isolation. The PM is accountable for the *outcome* of discovery, not for doing all the work alone.

Think of it this way: the PM is the conductor, not the entire orchestra.

### 2. Role Continuity

The people who shape a story in Upstream should be available during Downstream. This principle — **role continuity** — prevents the "I didn't know that" problem that plagues hand-offs.

| What continuity looks like | What it prevents |
|---------------------------|-----------------|
| The PM who wrote the story is available for developer questions during the sprint | "I interpreted the AC differently" |
| The Designer who created the wireframes reviews the implementation before QA | "This doesn't match the mockup" |
| The Tech Lead who approved feasibility is consulted when a hidden blocker surfaces | "Nobody told us about the API rate limit" |

### 3. Avoiding Silos

Upstream fails when it becomes a sequential assembly line: PM writes requirements → hands to BA → hands to Design → hands to Tech Lead → stamps as Ready.

Instead, the framework demands **concurrent collaboration**. The Core Trio works together through all five stations. They share a whiteboard, not a document queue.

::: warning The Silo Symptom
If your discovery process can be represented as a linear pipeline where each role touches the work only once, you have a silo problem. Real discovery is iterative — Station 3 often sends the team back to Station 2, and Station 4 may reshape the journey from Station 3.
:::

### 4. When to Involve Extended Roles

Not every initiative needs every role. Use this guide:

| Initiative Characteristic | Involve |
|--------------------------|---------|
| Handles user data, PII, or authentication | Security Lead |
| Requires new metrics, dashboards, or event tracking | Data Lead |
| Changes APIs or system architecture | Architect (if separate from Tech Lead) |
| Affects billing, contracts, or compliance | Legal / Compliance representative |
| Touches infrastructure or SLAs | DevOps / Platform Lead |

For small initiatives, the Core Trio may be sufficient. For large, cross-cutting initiatives (e.g., a new product vertical), you may need all seven roles engaged.

## Practical Tips

::: tip Capacity Is Not Infinite
In a multi-project reality, people serve on multiple discovery teams. Set explicit capacity limits: no person should be the Tech Lead on more than two concurrent discovery sprints. Spreading people too thin produces shallow discovery and rushed assumptions.
:::

::: tip The "One Throat to Choke" Principle
Every story, every epic, every initiative should have a single person who can answer "what is the current status?" at any moment. In Upstream, that person is the PM. If the PM is unavailable, someone must be explicitly deputised — not assumed.
:::

::: tip Rotate Facilitation
Don't let the PM run every meeting. When the BA facilitates a readiness check, they catch requirements issues the PM might overlook. When the Tech Lead facilitates an architecture decision session, the PM focuses on listening. Rotation builds shared ownership.
:::

---

[← Back to Upstream Overview](/upstream/) · [Station 1 — Vision & Context →](/upstream/station-1-vision)
