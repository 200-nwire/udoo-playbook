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

## UDOO Framework

I follow the **UDOO R&D framework** (https://200-nwire.github.io/udoo-playbook/) for all product and feature work.

### When I ask you to help with product work:

**Always apply these rules:**
- Stories must follow: `As [named persona], I want [action], so that [outcome].`
- Features must have an Experience Snapshot before any implementation details
- Initiatives must have a 2-paragraph Problem Story (current pain + opportunity)
- Never write solutions before naming whose problem we're solving

**Story hierarchy:** Initiative → Feature → Epic → Story → Subtask

**Before a story can start:** It must pass the 9-point DoR (format, journey reference, ACs, visual, copy, observability, dependencies, sizing, tech feasibility).

**When I describe an idea:** Use `/triage` logic to classify it before expanding:
1. Can you articulate whose pain this solves? (No → parking lot)
2. New problem space? → Initiative
3. New capability within known initiative? → Feature
4. Structural piece of a known feature? → Epic
5. Single user action? → Story
6. Defect? → Bug

### When writing specs or planning docs:
- Require Experience Snapshot for any Feature-level work
- Require KPI for any Initiative-level work
- Use INVEST criteria to validate Stories

### When writing code:
- Reference the user story before implementing
- Name things from the user's perspective (not the system's)
- Consider the Gherkin acceptance criteria when writing tests
- Tests should trace back to the story's "so that" clause

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
