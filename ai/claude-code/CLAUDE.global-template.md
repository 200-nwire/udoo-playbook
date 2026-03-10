# CLAUDE.md — Global Context

> This file lives at `~/.claude/CLAUDE.md` and is loaded in every Claude Code session.
> Customize the sections marked [PLACEHOLDER] before using.

---

## Identity

I am [YOUR NAME]. I'm a [PM / Engineer / Founder / etc.] with a background in [brief context].

My primary stack: [your stack — e.g., Node.js + Vue 3 + TypeScript, pnpm, MongoDB]

---

## Environment

- **Node:** v22 via nvm
- **Package manager:** pnpm (not npm)
- **Shell:** zsh
- **Platform:** macOS

To use nvm in scripts: source `~/.nvm/nvm.sh` first.

---

## Projects

> One-liner per project so Claude understands the landscape.

| Project | Path | Stack | Purpose |
|---|---|---|---|
| [project-name] | [~/Projects/name] | [tech] | [one-liner] |
| [project-name] | [~/Projects/name] | [tech] | [one-liner] |

---

## Working Style

- **Communication:** Concise and direct. No filler phrases, no preamble. Get to the answer.
- **Code style:** [your preferences — e.g., TypeScript, no `any`, functional where practical]
- **Testing:** [your preference — e.g., Vitest for unit, always include edge cases]
- **Commits:** Conventional commits format (`feat:`, `fix:`, `chore:`)
- **PRs:** Title = the user story outcome. Body = what changed and why.

---

## UDOO Framework — Automatic Behavior Rules

I follow the **UDOO R&D framework** (https://200-nwire.github.io/udoo-playbook/) for all product and feature work. These rules apply automatically.

### Classification (always do this first)

When I describe a piece of work, classify it before doing anything else:

| What it is | Classification | What you produce |
|---|---|---|
| New problem space never worked on | **Initiative** | 5-station discovery (conversational, one station at a time) |
| New capability within known initiative | **Feature** | Experience Snapshot + Feature Brief + Epics |
| Cluster of stories for a known feature | **Epic** | Epic brief + candidate stories + DoD |
| Single user action (1–3 days) | **Story** | DoR-checked story + ACs + Gherkin |
| Something that was built but doesn't work | **Bug** | Severity + steps to reproduce + expected vs actual |
| Something with no direct user change | **Tech chore** | Justification + what it unblocks |

If the classification is ambiguous, say which it is and why before proceeding.

### The Agentic Discipline

**Enter at the right level.** Check what artifacts exist before producing anything:
- No Initiative Brief? → Start at Initiative Discovery (5-station workshop)
- Initiative exists but no Feature Brief? → Start at Feature Discovery
- Feature Brief exists but no Epic Brief? → Start at Epic Refinement
- All context exists? → Write the story, check DoR (30 minutes)

**Work in sessions, not monologues.** Discovery is conversational:
- Run one station at a time. Ask questions. Wait for answers. Synthesise.
- Don't dump a complete brief from a one-sentence prompt.
- After each station, review the output before moving on.

**Pause at gates.** After producing an artifact:
- Initiative Brief → review before starting Feature Discovery
- Feature Brief → review before starting Epic Refinement
- Stories → DoR check before marking ready
- No level is skipped, no gate is bypassed.

**Recover, don't restart.** For existing work:
- Audit what exists. Find the highest documented level.
- Trace up: can you connect it to a business goal?
- Backfill gaps downward from what's solid.
- Don't throw away existing work — build on it.

### Three types of upstream work

- **Discovery** (PM + Core Trio): 5-station workshop. Validates the problem. Produces Initiative Briefs and Feature Briefs.
- **Refinement** (PO + Three Amigos): Story mapping, The Cut, grooming, DoR. Breaks validated features into buildable stories.
- **The boundary:** if you don't have a Feature Brief, you're still in discovery. If you do, you're in refinement.

### Universal rules

- **Never write solutions before naming whose problem we're solving.**
- **Never use anonymous personas.** Named people only.
- **Always name the journey step** a story belongs to.
- **If a story doesn't have a success metric, ask for one.**
- **Every spec must be verifiable.** If QA can't test it, it's not a spec.
- **Cross-reference what exists.** Before designing something, check the codebase.

---

## Conventions I Always Want

- Prefer editing existing files over creating new ones
- Don't add comments or docstrings to code I haven't touched
- When asked to fix a bug, fix the bug — don't refactor the surrounding code
- Always run the relevant tests before marking a task done
- Never push to main directly — always ask about branch strategy first

---

## Things I Never Want

- Corporate jargon ("leverage", "synergy", "utilize")
- Scaffolding files I didn't ask for
- Adding error handling for scenarios that can't happen
- Guessing at requirements — ask if unclear
- Auto-committing code without asking
- Writing "the user" — always a named persona
- Skipping the DoR checklist on stories
- Dumping a complete spec without walking through discovery stations first
