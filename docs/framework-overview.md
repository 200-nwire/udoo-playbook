# Framework Overview

<div class="phase-header upstream" data-label="U.D.O.O">
  <h1>The R&D Lifecycle</h1>
  <p class="subtitle">Four phases. One continuous loop. No shortcuts.</p>
</div>

Every piece of work — whether a product bet, a bug fix, or a customer-requested feature — flows through four connected phases. They are not sequential in a waterfall sense. They run in parallel across different initiatives and feed each other continuously.

## The Four Phases

| Phase | Owned by | Question answered | Primary artifact |
|-------|----------|-------------------|-----------------|
| **🔵 Upstream** | Product, UX, Arch | What are we building and why? | Initiative Brief + Ready Stories |
| **🟢 Downstream** | Engineering, QA | How do we build it correctly? | Released feature + passing tests |
| **🟠 Onstream** | DevOps, Support | How do we keep it running? | Stable SLA + incident learnings |
| **🟣 Offstream** | CS, Sales, Marketing | How do we grow value from it? | Adopted feature + new Initiatives |

## Two Critical Handoff Points

<div class="callout rule">
  <div class="callout-title">Commitment Point — Upstream → Downstream</div>
  When Upstream hands a Ready story to Downstream. Nothing moves until the <a href="/upstream/definition-of-ready">Definition of Ready (DoR)</a> is fully met.
</div>

<div class="callout rule">
  <div class="callout-title">Delivery Point — Downstream → Onstream</div>
  When Downstream hands a released feature to Onstream. Nothing moves until the <a href="/downstream/definition-of-done">Definition of Done (DoD)</a> is fully met.
</div>

## The Feedback Loop

Offstream does not wait for the Delivery Point. It engages from the first moment a feature is visible to customers and feeds insights back into new Upstream Initiatives continuously.

This loop — **Idea → Clarity → Code → Operations → Learning → Idea** — is the whole point of the framework. Break it anywhere and the system degrades.

## The Golden Rule

<div class="callout warning">
  <div class="callout-title">The Golden Rule</div>
  No phase begins until the previous phase has produced its required artifact. This is not bureaucracy. It is the only reliable way to eliminate rework.
</div>

## How Work Flows

```
UPSTREAM          DOWNSTREAM        ONSTREAM          OFFSTREAM
─────────         ──────────        ────────          ─────────
Idea              Ready Story  →    Released     →    Adopted
   ↓                   ↓               ↓                  ↓
Initiative        In Dev        →    Stable       →    Renewed
   ↓                   ↓               ↓                  ↓
Feature           In Test       →    Observed     →    Expanded
   ↓                   ↓               ↓                  ↓
Ready Story  →    Released ─────────────────────────────────→ New Initiatives
```

## Why This Framework Exists

Every rule in this framework exists because someone, somewhere, skipped it and paid a real price:

- **Unclear stories** entering dev → mid-sprint discovery → rework
- **No runbook** at go-live → on-call engineer debugging in the dark
- **CS signals not logged** → customer pain disappears before it reaches product
- **Renewals discovered 2 weeks out** → recoveries instead of planned renewals
- **Post-mortems skipped** → the same incident happens six months later

The framework is not about control. It is about the cheapest, most reliable path from idea to value.

---

**Next:** [The 4-Layer Hierarchy →](/four-layers)
