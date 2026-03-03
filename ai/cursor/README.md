# Cursor — UDOO Setup

## Files in This Directory

| File | Format | Purpose | Install to |
|---|---|---|---|
| `.cursorrules` | Legacy | Single-file combined rules | Project root `./` |
| `rules/01-udoo-framework.mdc` | Modern MDC | Core framework, always active | `.cursor/rules/` |
| `rules/02-upstream.mdc` | Modern MDC | Planning & discovery rules | `.cursor/rules/` |
| `rules/03-downstream.mdc` | Modern MDC | Coding rules | `.cursor/rules/` |
| `rules/04-writing.mdc` | Modern MDC | Documentation writing rules | `.cursor/rules/` |

## Which Format Should I Use?

**Use `.cursorrules`** if:
- You're on Cursor < 0.40
- You want one file, drop it in and go
- You're setting up a project quickly

**Use the MDC files** if:
- You're on Cursor 0.40+
- You want rules to activate by file type (coding rules only fire on `.ts`/`.vue`, writing rules only on `.md`)
- You want more granular control

You can use both — they don't conflict.

## Quick Install

```bash
# Legacy format (works everywhere)
cp ai/cursor/.cursorrules ./

# Modern MDC format
mkdir -p .cursor/rules
cp ai/cursor/rules/* .cursor/rules/
```

## What the Rules Do

### Always Active (all files)
The core UDOO framework rules are always on:
- Story format enforcement (As X, I want Y, so that Z)
- Never write from ideas — name the persona and problem first
- 4-layer hierarchy awareness (Initiative → Feature → Epic → Story)
- DoR/DoD awareness

### Planning files (`docs/**`, `**/*.md`, `**/specs/**`)
Additional rules fire when working on planning documents:
- Require Experience Snapshot for feature-level work
- Require KPI for initiative-level work
- INVEST criteria for story validation
- Discovery station structure for initiative briefs

### Code files (`**/*.ts`, `**/*.vue`, `**/*.js`, `**/*.py`, etc.)
Additional rules fire when writing code:
- Reference the user story before implementing
- Name things from the user's perspective
- Write tests that trace to acceptance criteria

### Documentation files (`docs/**`, `**/*.md`)
Additional rules fire when writing docs:
- Human voice (not corporate)
- Problem-first structure
- Named personas (not "the user")
- No passive voice
