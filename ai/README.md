# AI Configuration for UDOO Framework

This directory contains AI assistant configurations that teach the UDOO R&D framework. The assistant doesn't just know the vocabulary — it works like an agentic product team: decompose first, find the right level, produce artifacts in sessions with review gates.

## What's Here

```
ai/
├── claude-code/    # Claude Code configs, templates, and slash commands
└── cursor/         # Cursor IDE rules (legacy .cursorrules + modern MDC format)
```

## The Agentic Approach

Every configuration in this directory teaches the AI to follow the same discipline as a human UDOO team:

1. **Triage first** — classify work (Initiative / Feature / Epic / Story / Bug) before producing anything
2. **Enter at the right level** — check what artifacts exist, find the gap, start there
3. **Work in sessions** — one station at a time, ask questions, synthesise, review
4. **Pause at gates** — review after each artifact before moving to the next level
5. **Recover, don't restart** — for existing projects, audit and backfill rather than starting from scratch

## How to Use

### Option 1 — Working on this playbook
Just use Claude Code in this repo directory. `CLAUDE.md` at the root is auto-loaded.

### Option 2 — Your project (Claude Code)
```bash
# Copy the project template into your repo root
cp ai/claude-code/CLAUDE.project-template.md ./CLAUDE.md
# Then edit it to fill in your project details

# Copy slash commands for this session
cp -r ai/claude-code/commands/ .claude/commands/
```

### Option 3 — Global setup (Claude Code)
```bash
# Install commands globally (available in every Claude Code session)
cp -r ai/claude-code/commands/ ~/.claude/commands/

# Set up your global context (edit the template first!)
cp ai/claude-code/CLAUDE.global-template.md ~/.claude/CLAUDE.md
```

### Option 4 — Cursor
```bash
# Legacy format (works everywhere)
cp ai/cursor/.cursorrules ./

# Modern MDC format (Cursor 0.40+)
cp -r ai/cursor/rules/ .cursor/rules/
```

### Option 5 — Run the install script
```bash
chmod +x ai/install.sh
./ai/install.sh --help
```

## Available Slash Commands (Claude Code)

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

**The recommended flow mirrors the Upstream Spiral:**

```
/triage  →  what level is this?
/upstream  →  Initiative Discovery (if new problem space)
/spec  →  Feature Discovery (if initiative exists)
/epic  →  Epic Refinement (if feature is shaped)
/story  →  Story shaping (if epic context exists)
/dor  →  Readiness check before sprint
```

Each command checks for upstream context. `/story` asks for a persona before writing. `/spec` asks for the initiative context. `/epic` checks for a Feature Brief. The assistant doesn't skip levels.

## The Framework

These configs encode the **UDOO R&D framework**:
- **Upstream** — three types of work: Strategic Alignment, Discovery (5-station workshop), Refinement (story mapping + The Cut + grooming)
- **Downstream** — lean Kanban delivery, Gherkin, DoD
- **Onstream** — SRE, incidents, blameless operations
- **Offstream** — customer success, feedback loops, strategic synthesis

Full documentation: https://200-nwire.github.io/udoo-playbook/
