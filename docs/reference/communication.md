# Communication Tone

All written communication — Confluence pages, Jira tickets, incident updates, release notes, client-facing messages — follows these principles.

## Core Principles

- **Formal and neutral** — no slang, no emojis in professional documentation
- **Fact and outcome first** — state what happened or what is decided before explaining why
- **Decisions are explicit** — `"We will {X} because {Y}. See {link}."` Never leave decisions implicit
- **Assumptions are stated** — `"Clarifying assumption: … If this fails, impact is: …"`
- **Risks are named** — `"Current risk: … Mitigation: … Owner: …"`

## By Audience

### Engineering / Architecture

**Emphasis:** Constraints, assumptions, tradeoffs, current vs proposed state clearly separated.  
**Avoid:** Vague requirements, missing non-functionals, informal ADRs.

Example:
> "The current implementation fetches all records on page load (N+1 query pattern). The proposed change paginates at the API layer with cursor-based pagination, reducing initial load from ~800ms to ~120ms at p95 under current traffic. Trade-off: clients must implement pagination; existing clients using the full-list endpoint will require a migration."

### Product / Stakeholders

**Emphasis:** Problem framing, impact quantified, options compared, risks explicit, timeline realistic.  
**Avoid:** Solution-first framing, missing success metrics.

Example:
> "60% of trial users drop off at step 3 (account verification). This is our highest single-point churn risk. Option A (email verification) ships in 2 sprints and recovers ~15% of drop-off. Option B (open banking integration) ships in 5 sprints and recovers ~40%. We recommend Option A as the foundation, with Option B as Phase 2."

### Customers / External

**Emphasis:** Outcomes stated, actions required highlighted, risk and continuity notes.  
**Avoid:** Technical jargon, passive voice in incident updates, vague ETAs.

Example:
> "We identified an issue affecting wallet balance display for accounts with negative balances. This has been resolved in version 2.13.6, deployed at 15:42 UTC today. No data was lost. If you continue to see incorrect balance figures, please clear your browser cache and reload. Contact support@200apps.com if the issue persists."

## Reusable Phrases

```
Clarifying assumption: [X]. If this assumption fails, impact is: [Y].

Decision: We will {X} because {Y}. See {link}.

Current risk: [description]. Mitigation: [action]. Owner: @name.

Fallback / rollback: If [trigger], we will [action] within [timeframe].
```
