#!/usr/bin/env bash

# UDOO AI Config Installer
# Copies AI assistant configurations to the right locations.
#
# Usage:
#   ./ai/install.sh --global-claude     Install commands + CLAUDE.md globally (~/.claude/)
#   ./ai/install.sh --project-claude    Install CLAUDE.md + commands into current project (./)
#   ./ai/install.sh --cursor            Install Cursor rules into current project
#   ./ai/install.sh --all-global        Install everything globally
#   ./ai/install.sh --all-project       Install everything into current project
#   ./ai/install.sh --help              Show this help

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CLAUDE_CODE_DIR="$SCRIPT_DIR/claude-code"
CURSOR_DIR="$SCRIPT_DIR/cursor"

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

info()    { echo -e "${BLUE}[info]${NC} $1"; }
success() { echo -e "${GREEN}[done]${NC} $1"; }
warn()    { echo -e "${YELLOW}[warn]${NC} $1"; }
error()   { echo -e "${RED}[error]${NC} $1"; exit 1; }

show_help() {
  echo ""
  echo "UDOO AI Config Installer"
  echo ""
  echo "Usage: ./ai/install.sh [option]"
  echo ""
  echo "Options:"
  echo "  --global-claude     Install Claude Code commands to ~/.claude/commands/"
  echo "                      and CLAUDE.global-template.md to ~/.claude/CLAUDE.md"
  echo "                      (prompts before overwriting existing CLAUDE.md)"
  echo ""
  echo "  --project-claude    Install CLAUDE.project-template.md to ./CLAUDE.md"
  echo "                      and commands to ./.claude/commands/"
  echo "                      (prompts before overwriting existing CLAUDE.md)"
  echo ""
  echo "  --cursor            Install .cursorrules to ./ and MDC rules to .cursor/rules/"
  echo "                      (use from project root)"
  echo ""
  echo "  --all-global        --global-claude + any cursor install if desired"
  echo "  --all-project       --project-claude + --cursor"
  echo ""
  echo "  --help              Show this help"
  echo ""
  echo "Examples:"
  echo "  # Set up global Claude Code commands:"
  echo "  ./ai/install.sh --global-claude"
  echo ""
  echo "  # Set up a new project (run from project root):"
  echo "  cd ~/Projects/my-project && /path/to/udoo-playbook/ai/install.sh --all-project"
  echo ""
}

install_global_claude() {
  info "Installing Claude Code commands globally to ~/.claude/commands/"

  mkdir -p ~/.claude/commands

  # Copy commands
  for cmd in "$CLAUDE_CODE_DIR/commands/"*.md; do
    name=$(basename "$cmd")
    if [ -f ~/.claude/commands/"$name" ]; then
      warn "~/.claude/commands/$name already exists — overwriting"
    fi
    cp "$cmd" ~/.claude/commands/"$name"
    success "Installed /$(basename "$name" .md) → ~/.claude/commands/$name"
  done

  # Handle global CLAUDE.md
  if [ -f ~/.claude/CLAUDE.md ]; then
    echo ""
    warn "~/.claude/CLAUDE.md already exists."
    read -r -p "Overwrite with template? (y/N) " response
    if [[ "$response" =~ ^[Yy]$ ]]; then
      cp "$CLAUDE_CODE_DIR/CLAUDE.global-template.md" ~/.claude/CLAUDE.md
      success "Installed global CLAUDE.md → ~/.claude/CLAUDE.md"
      warn "Remember to fill in the [PLACEHOLDER] sections in ~/.claude/CLAUDE.md"
    else
      info "Skipped ~/.claude/CLAUDE.md — your existing file is unchanged"
      info "Template is at: $CLAUDE_CODE_DIR/CLAUDE.global-template.md"
    fi
  else
    cp "$CLAUDE_CODE_DIR/CLAUDE.global-template.md" ~/.claude/CLAUDE.md
    success "Installed global CLAUDE.md → ~/.claude/CLAUDE.md"
    warn "Remember to fill in the [PLACEHOLDER] sections in ~/.claude/CLAUDE.md"
  fi

  echo ""
  success "Global Claude Code setup complete."
  info "Commands available in any Claude Code session: /upstream /story /triage /spec /adr /postmortem /rca /dor /epic"
}

install_project_claude() {
  info "Installing Claude Code config into current project: $(pwd)"

  mkdir -p .claude/commands

  # Handle project CLAUDE.md
  if [ -f ./CLAUDE.md ]; then
    echo ""
    warn "CLAUDE.md already exists in this directory."
    read -r -p "Overwrite with UDOO project template? (y/N) " response
    if [[ "$response" =~ ^[Yy]$ ]]; then
      cp "$CLAUDE_CODE_DIR/CLAUDE.project-template.md" ./CLAUDE.md
      success "Installed project CLAUDE.md → ./CLAUDE.md"
      warn "Remember to fill in the [PLACEHOLDER] sections in ./CLAUDE.md"
    else
      info "Skipped ./CLAUDE.md — your existing file is unchanged"
      info "Template is at: $CLAUDE_CODE_DIR/CLAUDE.project-template.md"
    fi
  else
    cp "$CLAUDE_CODE_DIR/CLAUDE.project-template.md" ./CLAUDE.md
    success "Installed project CLAUDE.md → ./CLAUDE.md"
    warn "Remember to fill in the [PLACEHOLDER] sections in ./CLAUDE.md"
  fi

  # Copy commands to project
  for cmd in "$CLAUDE_CODE_DIR/commands/"*.md; do
    name=$(basename "$cmd")
    cp "$cmd" .claude/commands/"$name"
    success "Installed /$(basename "$name" .md) → .claude/commands/$name"
  done

  echo ""
  success "Project Claude Code setup complete."
}

install_cursor() {
  info "Installing Cursor rules into current project: $(pwd)"

  # Legacy .cursorrules
  if [ -f ./.cursorrules ]; then
    warn ".cursorrules already exists — overwriting"
  fi
  cp "$CURSOR_DIR/.cursorrules" ./.cursorrules
  success "Installed .cursorrules → ./.cursorrules"

  # Modern MDC rules
  mkdir -p .cursor/rules
  for rule in "$CURSOR_DIR/rules/"*.mdc; do
    name=$(basename "$rule")
    cp "$rule" .cursor/rules/"$name"
    success "Installed MDC rule → .cursor/rules/$name"
  done

  echo ""
  success "Cursor setup complete."
  info "Both .cursorrules (legacy) and .cursor/rules/ (modern MDC) are installed."
}

# --- Main ---

if [ $# -eq 0 ]; then
  show_help
  exit 0
fi

case "$1" in
  --global-claude)
    install_global_claude
    ;;
  --project-claude)
    install_project_claude
    ;;
  --cursor)
    install_cursor
    ;;
  --all-global)
    install_global_claude
    echo ""
    read -r -p "Also install Cursor rules into current directory? (y/N) " response
    if [[ "$response" =~ ^[Yy]$ ]]; then
      install_cursor
    fi
    ;;
  --all-project)
    install_project_claude
    echo ""
    install_cursor
    ;;
  --help|-h)
    show_help
    ;;
  *)
    error "Unknown option: $1. Run ./ai/install.sh --help for usage."
    ;;
esac
