# CLAUDE.md — [PROJECT NAME]

> **Setup:** Fill in every `[PLACEHOLDER]` before using. Delete this line when done.

---

## Project Overview

**Name:** [PROJECT NAME]
**Description:** [One sentence: what it does, who it's for]
**Current UDOO phase:** [Upstream / Downstream / Onstream / Offstream — or "All active"]
**Jira project key:** [e.g. PROJ]
**Confluence space:** [e.g. PROJ or link]
**Repo:** [git URL or monorepo path]

---

## Tech Stack

**Backend:**
- Runtime: [Node.js / Python / Go / etc.]
- Framework: [Koa / Express / FastAPI / etc.]
- Database: [MongoDB + Mongoose / PostgreSQL + Prisma / etc.]
- Cache: [Redis / none]
- Auth: [Firebase / JWT / etc.]

**Frontend:**
- Framework: [Vue 3 / React / Next.js / etc.]
- Styling: [Tailwind / PrimeVue / etc.]
- State: [Pinia / Zustand / etc.]

**Infrastructure:**
- Hosting: [GCP / Azure / AWS / etc.]
- CI/CD: [GitHub Actions / etc.]
- Package manager: [pnpm / npm / yarn]

---

## Key File Paths

```
[src/]             # Main source directory
[src/routes/]      # API routes or page routes
[src/models/]      # Data models
[src/components/]  # UI components
[src/stores/]      # State management
[tests/]           # Test files
[docs/]            # Internal docs (if any)
```

---

## Team & Personas

| Role | Name / Handle |
|---|---|
| PM / PO | [name] |
| Tech Lead | [name] |
| Frontend | [names] |
| Backend | [names] |
| QA | [name] |
| DevOps | [name] |

**Named personas used in stories:**
| Persona | Who they are |
|---|---|
| [e.g. Maya] | [e.g. Team lead at a 12-person agency, uses the app daily for reporting] |
| [e.g. Avi] | [e.g. First-time user evaluating the product during a trial] |

---

## Branching Convention

- **Main branch:** `main` (production)
- **Development:** `develop` (staging)
- **Features:** `feature/[JIRA-KEY]-short-description`
- **Bugs:** `fix/[JIRA-KEY]-short-description`
- **Hotfixes:** `hotfix/[JIRA-KEY]-short-description`

PRs require: [1 / 2] approvals + passing CI.

---

## UDOO Framework Rules

This project follows the [UDOO framework](https://200-nwire.github.io/udoo-playbook/).

### Agentic approach — how to work on this project

**Classify first.** When I describe work, determine the level (Initiative / Feature / Epic / Story / Bug) before producing anything.

**Check what exists.** Before writing an artifact, check whether the level above it has been documented:
- Writing a story? → Does a Feature Brief exist? If not, start there.
- Writing an epic? → Does the Feature have a journey map? If not, start there.
- Writing a feature brief? → Does an Initiative Brief exist? If not, start there.

**Work in sessions.** Don't produce a complete brief from a one-line description. Ask questions, synthesise, review. One level at a time.

**Pause at gates.** After producing an Initiative Brief, Feature Brief, or Epic — pause for review before moving to the next level.

### Story format
Always: `As [named persona], I want [action], so that [outcome].`
Never write task-format tickets ("implement X", "add Y endpoint").

### Before writing a story
- Is there a named persona? (Not "the user" — use a persona from the table above)
- Is there a journey step reference?
- Are all states defined? (empty, loading, success, error, edge cases)
- Does the Feature Brief exist above this story?

### Before starting a sprint
- Every story must pass the 9-point DoR checklist
- Every story must have at least 3 Gherkin acceptance criteria
- Every story must be sized (1–3 days max)

### Before shipping
- Story must pass the DoD for this project (see below)
- Runbook or monitoring signal defined for any new user-facing change
- PR description traces back to the Jira story and persona

### Definition of Done (customize for this project)
- [ ] Code reviewed and approved
- [ ] All Gherkin ACs pass (automated or manual)
- [ ] No new linting errors
- [ ] Feature flag / rollout strategy applied (if needed)
- [ ] Observability signal confirmed (event/metric/log)
- [ ] Jira story moved to Done

---

## Current Initiatives

> Update this section as the team's focus evolves.

| Initiative | Level | Status | Owner |
|---|---|---|---|
| [Initiative name] | [Initiative Discovery / Feature Discovery / Epic Refinement / Downstream] | [Active / Parked] | [name] |

---

## Never Do List

- Never write or merge a story that hasn't passed DoR
- Never skip a level — no stories without a Feature Brief above them
- Never ship a feature without at least one observability signal
- Never use "the user" — name the persona
- Never skip the "so that" clause in a user story
- Never push directly to `main` — always use a PR
- Never dump a complete spec without walking through discovery first
- [Add project-specific rules here]

---

## Common Commands

```bash
# Development
[pnpm dev / npm run dev / etc.]

# Tests
[pnpm test / etc.]

# Build
[pnpm build / etc.]

# Lint
[pnpm lint / etc.]
```
