# Onstream — Service Delivery & SLA

<div class="phase-header onstream">
<h1>🟠 Onstream</h1>
<p>Released → Stable → Reliably Operated &nbsp;·&nbsp; <em>Keep the lights on.</em></p>
</div>

## The Moment This Phase Is For

It's 2am. An alert fires. The developer on call has never seen this service before. There's no runbook. Slack is being pinged by someone from sales who heard from a customer. The developer is making production changes based on intuition and hope.

Forty minutes later the service recovers. Nobody knows exactly why it failed or exactly what fixed it. The post-mortem is scheduled and then cancelled because "the sprint is busy." Three weeks later, a different developer is in the same situation.

This is Onstream failing — not dramatically in the moment, but structurally, before the incident ever happened. The runbook wasn't written. The on-call rotation wasn't defined. The alert threshold wasn't set. The learning from last time wasn't captured.

Onstream done well means the on-call engineer pulls up a runbook with a diagnosis checklist, follows it, resolves the issue, and adds a note for next time. The incident is documented. The post-mortem happens — blameless, curious, useful. Something changes so the same thing doesn't happen again.

## Purpose

Onstream keeps the lights on — reliably, transparently, and with a clear escalation path. It owns the covenant with customers about availability, performance, and support quality. Everything that leaves Downstream enters Onstream and **must be operated with accountability**.

Onstream is not a passive ops role. It feeds incidents, signals, and operational learnings back into Upstream as new Initiatives. **A well-run Onstream is a continuous discovery engine.**

## Chapter Contents

| Page | What you will learn |
|------|---------------------|
| [Roles & Ownership](/onstream/roles) | Who does what in Onstream |
| [SLA & SLO Framework](/onstream/sla-slo) | How reliability is defined and measured |
| [Incident Management](/onstream/incident-management) | The P0–P3 playbook |
| [On-Call Runbook Template](/onstream/runbook-template) | What every service needs before go-live |
| [Bug Taxonomy](/onstream/bug-taxonomy) | Severity, Impact, Priority, Type labels |
| [RCA Template](/onstream/rca-template) | Structured root cause analysis |
| [Post-Mortem Template](/onstream/post-mortem-template) | Blameless incident post-mortems |
| [Anti-Patterns](/onstream/anti-patterns) | The 5 most common Onstream failures |
| [Cadence](/onstream/cadence) | Service review ceremonies |

## The Delivery Point

<div class="callout onstream">
<strong>The Delivery Point is the handoff from Downstream to Onstream.</strong>
Before a feature is released to production, Onstream must be briefed. A runbook must exist. SLOs must be defined. On-call must know what changed. Skipping this creates the conditions for a preventable incident.
</div>

## Two Real Examples in This Framework

The following pages use two real incident patterns as teaching examples:

1. **The Balance Display Bug** (`severity/high`, `area/frontend`, `root/logic-error`) — A developer used `balance.amount > 0 ? balance.amount : 0`, clamping negative values to zero. Caught in staging UAT. Fixed in v2.13.6 hotfix. See [RCA Template](/onstream/rca-template) for the full structured write-up.

2. **The JWT Policy Outage** (`severity/critical`, `area/auth`, `root/configuration`) — A new APIM policy enforcing `aud` claim was deployed to production without validating existing tokens. 44-minute full outage. 100% of API requests returned 403. See [Post-Mortem Template](/onstream/post-mortem-template) for the blameless write-up.
