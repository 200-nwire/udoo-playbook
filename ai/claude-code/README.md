# Claude Code — UDOO Setup

## Files in This Directory

| File | Purpose | Install to |
|---|---|---|
| `CLAUDE.md` | For working on THIS playbook repo | Already in repo root |
| `CLAUDE.project-template.md` | For any project following UDOO | `./CLAUDE.md` in your project |
| `CLAUDE.global-template.md` | Global AI context for all sessions | `~/.claude/CLAUDE.md` |
| `commands/` | Slash commands for UDOO workflows | `~/.claude/commands/` or `.claude/commands/` |

## Quick Install

```bash
# Global commands (available everywhere)
mkdir -p ~/.claude/commands
cp ai/claude-code/commands/* ~/.claude/commands/

# Project CLAUDE.md
cp ai/claude-code/CLAUDE.project-template.md ./CLAUDE.md
# Then fill in the template sections
```

## How Slash Commands Work

Claude Code auto-loads any `.md` file in `.claude/commands/` or `~/.claude/commands/` as a slash command. The filename becomes the command name.

Example: `~/.claude/commands/story.md` → type `/story` in any Claude Code session.

## Commands Overview

### `/upstream`
Full discovery facilitation. Give it a problem signal or idea and it walks through all 5 UDOO discovery stations, producing an Initiative Brief, first Feature with Experience Snapshot, and top 3 user stories.

### `/story`
Story shaping. Give it a rough task/idea and it produces a properly formatted user story with named persona, all states, DoR verification, and Gherkin scenarios.

### `/triage`
Idea classification. Give it any idea and it routes it to the right layer: parking lot, Initiative, Feature, Epic, Story, or Bug.

### `/spec`
Feature specification. Produces Experience Snapshot (150-word narrative) + Feature brief + high-level flow + candidate Epics.

### `/adr`
Architecture Decision Record in MADR format. Give it a technical decision context and it outputs a complete ADR.

### `/postmortem`
Blameless post-mortem. Give it incident details and it outputs a structured, system-focused post-mortem with action items.

### `/rca`
Root cause analysis. Uses 5 Whys to trace a bug or incident to its system root, with prevention recommendations.

### `/dor`
DoR audit. Takes a story (complete or partial) and runs the 9-point Definition of Ready checklist, flagging gaps.

### `/epic`
Epic definition. Takes a scope description and produces a Jira-ready Epic with goal, story candidates, dependencies, and Definition of Done.
