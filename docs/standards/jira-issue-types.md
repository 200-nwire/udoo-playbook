# Jira Issue Type Guide

## Why Issue Types Matter

Jira is only as useful as the consistency of what goes into it. When issue types are used interchangeably — Epics that are really Stories, Tasks that are really Spikes, Bugs that are really feature requests — the board becomes a junk drawer. Reporting breaks. Velocity is meaningless. Sprint planning turns into archaeology.

UDOO uses a strict issue type hierarchy. Each type has a specific definition, required fields, naming convention, and workflow. This is not bureaucracy — it is the minimum structure required for a team to trust its own backlog.

::: tip The One-Sentence Test
If you cannot explain in one sentence *why* this issue is the type you chose, you probably chose wrong. Read the definitions below and pick the type that matches the nature of the work, not its size.
:::

---

## The Issue Hierarchy

```
Initiative (strategic problem)
 └── Epic (structural building block)
      └── Story (smallest testable user value)
           └── Sub-task (execution step within a story)

Bug (defect in existing functionality)
Task (technical / non-functional work)
Spike (time-boxed investigation)
```

Initiatives contain Epics. Epics contain Stories. Stories contain Sub-tasks. Bugs, Tasks, and Spikes live alongside Stories within an Epic but are not part of the parent-child hierarchy — they are linked to the relevant Epic via Jira issue links.

---

## Initiative

### Definition

An Initiative represents a **strategic problem** the organisation has decided to explore and potentially solve. It is the highest-level unit of work in UDOO. An Initiative does not describe a solution — it describes a problem space, a target persona, and a measurable outcome.

Initiatives map to **Jira Epics** with a custom workflow (see below). They are distinguished from delivery Epics by their workflow and the `initiative` label.

### When to Use

- You are describing a problem that will take multiple Epics to solve.
- The work spans multiple sprints and potentially multiple teams.
- There is a corresponding Initiative Document in Confluence.

### Required Fields

| Field | Description |
|-------|-------------|
| Summary | Initiative name following naming convention |
| Description | Link to Initiative Document in Confluence |
| Label | `initiative` |
| Custom: Initiative Doc | URL to Confluence Initiative Document |
| Custom: DoR Status | Current readiness status (Not Started / In Progress / Ready) |
| Fix Version | Target release or quarter |

### Naming Convention

**Pattern:** `[Domain] Initiative name`

| Example | Explanation |
|---------|-------------|
| `[Analytics] Graph Intelligence Layer` | Domain = Analytics, describes the problem space |
| `[Payments] Cross-Border Settlement` | Domain = Payments |
| `[Journal] Reflective Journaling Experience` | Domain = Journal |

### Workflow

```
Backlog → Discovery In Progress → Discovery Drafting → Discovery Review
  → Ready for Approval → Approved → Ready for Dev
```

| Status | Meaning |
|--------|---------|
| **Backlog** | Identified but not yet started |
| **Discovery In Progress** | Team is actively investigating the problem space |
| **Discovery Drafting** | Initiative Document is being written |
| **Discovery Review** | Document is circulating for peer review |
| **Ready for Approval** | All feedback addressed; awaiting stakeholder sign-off |
| **Approved** | Stakeholders have approved; ready for Epic breakdown |
| **Ready for Dev** | Epics and Stories are created and meet DoR |

::: info Initiative ≠ Feature Request
An Initiative is not "build feature X." It is "solve problem Y for persona Z." The solution emerges from discovery. If you already know the exact solution, you probably need an Epic, not an Initiative.
:::

---

## Epic

### Definition

An Epic is a **structural building block** within an Initiative. It groups related Stories into a coherent deliverable. An Epic is not a "big Story" — it is a container that represents a meaningful slice of the Initiative's solution.

Epics map to **Jira Epics** and are linked to their parent Initiative via an issue link.

### When to Use

- You are grouping 3–10 related Stories that together deliver a coherent capability.
- The work is too large for a single Story but is a distinct part of a larger Initiative.
- You need a tracking level between Initiative and Story.

### Required Fields

| Field | Description |
|-------|-------------|
| Summary | Epic name following naming convention |
| Description | What this Epic delivers, acceptance criteria at Epic level, link to parent Initiative |
| Linked Issue | Parent Initiative (blocks / is part of) |
| Label | Feature area label (e.g., `journal`, `payments`, `analytics`) |
| Fix Version | Target release |

### Naming Convention

**Pattern:** `[Feature] Epic name`

| Example | Explanation |
|---------|-------------|
| `[Journal] Entry Creation & Prompt Flow` | Feature = Journal, describes what the Epic delivers |
| `[Matching] Real-Time Score Calculation` | Feature = Matching |
| `[Payments] Wallet Top-Up via Bank Transfer` | Feature = Payments |

### Workflow

Epics use the standard Jira Epic workflow: `To Do → In Progress → Done`.

::: warning One Epic, One Feature Area
An Epic should not span multiple unrelated feature areas. If you find yourself adding Stories from different domains to the same Epic, you need to split it. Cross-cutting concerns (e.g., "improve performance") are better modelled as separate Epics per affected area.
:::

---

## Story

### Definition

A Story is the **smallest testable increment of user value**. It describes something a user can do, see, or experience after the Story is complete. Every Story has acceptance criteria that can be verified by QA.

Stories map to **Jira Stories** and are linked to their parent Epic.

### When to Use

- You are describing a change that delivers value directly to a user or persona.
- The work can be completed by one developer in 1–3 days.
- You can write testable acceptance criteria for it.

::: details When Is It NOT a Story?
- If there is no user-facing outcome → it is a **Task**.
- If you are investigating whether something is feasible → it is a **Spike**.
- If you are fixing broken existing functionality → it is a **Bug**.
- If it takes more than 3 days → it needs to be split into smaller Stories.
:::

### Required Fields

| Field | Description |
|-------|-------------|
| Summary | Story name following naming convention |
| Description | User story format + context |
| Acceptance Criteria | 3–7 testable criteria, Gherkin-ready |
| Epic Link | Parent Epic |
| Story Points | Team estimate (relative sizing) |
| Label | Feature area + any applicable tags |
| Visual Reference | Link to Figma or sketch |
| Observability Signal | At least one event/metric defined |

### Naming Convention

**Full form:** `As a [persona], I want [action] so that [benefit]`

| Example |
|---------|
| `As Avi, I want to resume reading where I left off so that I don't waste time finding my place` |
| `As a finance admin, I want to export transactions as CSV so that I can reconcile in our accounting tool` |

**Short form (for boards):** `[Epic] Action description`

| Example |
|---------|
| `[Journal] Add prompt selection to entry creation` |
| `[Wallet] Display pending transactions in balance view` |

::: tip Use the Full Form in the Description
Even if the Summary uses the short form for readability on the board, the Description should always contain the full "As a… I want… so that…" statement. This ensures the user context is never lost.
:::

### Workflow

Stories follow the [Story Workflow](/downstream/story-workflow): `Ready to Pull → In Dev → In Review → In Test → Released → Observed → Improved`.

---

## Bug

### Definition

A Bug is a **defect found in existing functionality**. Something that used to work (or was specified to work) does not behave as expected. A Bug is not a feature request, a missing feature, or a change in requirements.

Bugs map to **Jira Bugs** and carry severity, impact, and priority labels from the [Bug Label System](/standards/bug-labels).

### When to Use

- Existing functionality does not match its acceptance criteria or documented behaviour.
- A regression has been introduced — something that previously worked is now broken.
- A user reports behaviour that contradicts the product's design intent.

### Required Fields

| Field | Description |
|-------|-------------|
| Summary | Bug name following naming convention |
| Description | Steps to reproduce, expected behaviour, actual behaviour |
| Environment | Where it was found (production / staging / development) |
| Labels | `severity/*`, `impact/*`, `type/*`, `area/*` (see [Bug Label System](/standards/bug-labels)) |
| Linked Issue | Related Story or Epic |
| Attachments | Screenshots, logs, or screen recordings |
| Root Cause | Required for severity/critical and severity/high (after investigation) |

### Naming Convention

**Pattern:** `[Area] Description of incorrect behaviour`

| Example | Explanation |
|---------|-------------|
| `[Frontend] Negative balance displays as $0.00` | Area = Frontend, describes what is wrong |
| `[API] Transaction endpoint returns 500 for valid currency codes` | Area = API |
| `[Mobile] Push notification not received after journal entry save` | Area = Mobile |

::: warning Bugs Describe Broken Behaviour, Not Desired Behaviour
"Add dark mode support" is not a bug — it is a feature request (Story). "Dark mode toggle does not persist after app restart" is a bug. The distinction matters because bugs and features follow different workflows and have different priority calculations.
:::

### Workflow

Bugs follow a simplified workflow: `Open → In Progress → In Review → Verified → Closed`.

P0 bugs bypass the normal queue and follow the [Incident Management](/onstream/incident-management) process.

---

## Task

### Definition

A Task is **technical or non-functional work** that does not deliver direct user value. Infrastructure changes, configuration updates, documentation, tooling setup, dependency upgrades, and tech debt reduction are all Tasks.

Tasks map to **Jira Tasks** and are linked to the relevant Epic or Initiative.

### When to Use

- The work has no user-facing outcome.
- You are setting up infrastructure, configuring environments, or updating dependencies.
- The work supports delivery but is not itself a deliverable that a user would recognise.

### Required Fields

| Field | Description |
|-------|-------------|
| Summary | Task name following naming convention |
| Description | What needs to be done and why |
| Epic Link or Linked Issue | Parent Epic or related Initiative |
| Label | `tech-debt`, `infra`, `tooling`, `docs`, or relevant area |

### Naming Convention

**Pattern:** `[Type] Description`

| Example | Explanation |
|---------|-------------|
| `[Infra] Configure staging environment for APIM` | Type = Infra |
| `[Tech-Debt] Migrate user service from REST to gRPC` | Type = Tech-Debt |
| `[Docs] Update API reference for v2 transaction endpoints` | Type = Docs |
| `[Tooling] Add Datadog APM to payment microservice` | Type = Tooling |

---

## Spike

### Definition

A Spike is a **time-boxed investigation** to answer a specific question. The output of a Spike is not code — it is a decision, a proof of concept, or a documented finding. Spikes exist because some questions cannot be answered by discussion alone; they require hands-on investigation.

Spikes map to **Jira Tasks** with the `spike` label.

### When to Use

- The team needs to answer a technical feasibility question before committing to a Story.
- A new technology, library, or approach needs evaluation.
- The team is choosing between two or more implementation options and needs data.

### Required Fields

| Field | Description |
|-------|-------------|
| Summary | Spike name following naming convention |
| Description | The specific question to answer, time-box, and expected output format |
| Label | `spike` |
| Time-box | Maximum duration (typically 1–2 days) |
| Epic Link | Parent Epic (if applicable) |

### Naming Convention

**Pattern:** `[Spike] Question to answer`

| Example | Explanation |
|---------|-------------|
| `[Spike] Can offline search work on mid-tier devices?` | Specific, answerable question |
| `[Spike] What is the latency profile of GraphQL vs REST for journal queries?` | Comparison investigation |
| `[Spike] Is Stripe Connect viable for our multi-currency settlement model?` | Feasibility assessment |

::: tip A Spike Without a Time-Box Is Just Procrastination
Every Spike must have an explicit time-box in the Description. When the time-box expires, the Spike is complete — even if the answer is "we need more information." In that case, document what you learned, what remains unknown, and create a follow-up Spike if warranted.
:::

### Spike Output Template

Every completed Spike should update its Description with:

```markdown
## Question
[The original question]

## Time-box
[Duration spent] / [Duration allocated]

## Findings
[What we learned]

## Recommendation
[What we should do based on findings]

## Follow-up
[Any new Stories, Tasks, or Spikes created as a result]
```

---

## Sub-task

### Definition

Sub-tasks are the **execution steps within a Story**. They represent the work a developer does to complete the Story. Sub-tasks are not independently valuable — they only make sense in the context of their parent Story.

### The 7 Default Sub-tasks

Every Story is created with the following sub-tasks. Not all are required for every Story, but they exist as a checklist to ensure nothing is forgotten.

| # | Sub-task | Owner | Purpose |
|---|---------|-------|---------|
| 1 | **Implementation** | Developer | Write the production code |
| 2 | **Unit Tests** | Developer | Automated tests for the implementation |
| 3 | **Code Review** | Reviewer | Peer review of the PR |
| 4 | **QA Testing** | QA | Verify against acceptance criteria |
| 5 | **Gherkin Scenarios** | QA / Developer | Write or update BDD scenarios |
| 6 | **Documentation** | Developer | Update any affected docs (API, README, runbook) |
| 7 | **Observability** | Developer | Add events, metrics, or log lines defined in the Story |

::: info Sub-tasks Are a Checklist, Not a Mandate
If a Story genuinely does not need documentation updates (e.g., a backend-only change with no API surface change), mark the Documentation sub-task as "Won't Do" with a brief note. Do not delete it — the audit trail matters.
:::

### Naming Convention

Sub-tasks inherit the parent Story's context. Their names are short and action-oriented:

| Example |
|---------|
| `Implement prompt selection component` |
| `Write unit tests for prompt selection` |
| `Review PR #247` |
| `QA: verify prompt selection against AC 1–5` |

---

## Quick Reference: Choosing the Right Type

| I need to… | Use | Not |
|------------|-----|-----|
| Describe a strategic problem to investigate | **Initiative** | Epic (too tactical) |
| Group related stories into a deliverable | **Epic** | Initiative (too strategic) |
| Deliver a user-facing outcome | **Story** | Task (no user value) |
| Fix something that is broken | **Bug** | Story (not new functionality) |
| Do technical work with no user-facing output | **Task** | Story (no user value) |
| Investigate a question before committing | **Spike** | Task (spikes have time-boxes and outputs) |
| Track an execution step within a story | **Sub-task** | Story (not independently valuable) |

::: warning The Most Common Mistakes
1. **Using a Story for technical work.** "Refactor the payment service" is a Task, not a Story. No user sees or experiences the refactor directly.
2. **Using a Bug for a feature request.** "Add support for dark mode" is a Story, not a Bug. Nothing is broken — the feature does not exist yet.
3. **Creating an Epic for a single Story.** If your Epic contains only one Story, it is probably not an Epic. Epics group 3–10 related Stories.
4. **Skipping the Spike.** If the team debates feasibility for more than 15 minutes in refinement, create a Spike. Debate is not investigation.
:::

---

## Custom Fields Reference

| Custom Field | Applies To | Values | Purpose |
|-------------|-----------|--------|---------|
| Initiative Doc | Initiative | URL | Links to Confluence Initiative Document |
| DoR Status | Initiative, Epic | Not Started / In Progress / Ready | Tracks Definition of Ready progress |
| Time-box | Spike | Duration (e.g., "2 days") | Constrains investigation effort |
| Severity | Bug | critical / high / medium / low | Technical seriousness |
| Impact | Bug | blocker / high / medium / low | User/business seriousness |
| Root Cause | Bug | Category label | Post-fix classification |

---

## Workflow Statuses by Type

| Type | Statuses |
|------|----------|
| **Initiative** | Backlog → Discovery In Progress → Discovery Drafting → Discovery Review → Ready for Approval → Approved → Ready for Dev |
| **Epic** | To Do → In Progress → Done |
| **Story** | Ready to Pull → In Dev → In Review → In Test → Released → Observed → Improved |
| **Bug** | Open → In Progress → In Review → Verified → Closed |
| **Task** | To Do → In Progress → Done |
| **Spike** | To Do → In Progress → Done |
| **Sub-task** | To Do → In Progress → Done |

---

