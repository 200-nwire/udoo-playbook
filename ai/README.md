# AI Configuration for UDOO Framework

This directory contains ready-made AI assistant configurations that embed the UDOO R&D framework into your tools.

## What's Here

```
ai/
├── claude-code/    # Claude Code (claude.ai/claude-code) configs and slash commands
└── cursor/         # Cursor IDE rules (legacy .cursorrules + modern MDC format)
```

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

| Command | What it does |
|---|---|
| `/upstream` | Run a full discovery session for an initiative |
| `/story` | Shape a rough idea into a DoR-ready user story |
| `/triage` | Classify an idea into the right UDOO layer |
| `/spec` | Write an Experience Snapshot + Feature brief |
| `/adr` | Document an architecture decision (MADR format) |
| `/postmortem` | Write a blameless post-mortem for an incident |
| `/rca` | Root cause analysis with 5 Whys |
| `/dor` | Audit a story against the 9-point DoR checklist |
| `/epic` | Write a Jira-ready Epic with candidate stories |

## The Framework

These configs encode the **UDOO R&D framework**:
- **Upstream** — discovery, narrative, user stories with DoR
- **Downstream** — lean delivery, Gherkin, DoD
- **Onstream** — SRE, incidents, blameless operations
- **Offstream** — customer success, feedback loops

Full documentation: https://200-nwire.github.io/udoo-playbook/
