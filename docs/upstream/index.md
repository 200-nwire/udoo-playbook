# Upstream — Product & Discovery

<div class="phase-header upstream">
<h1>🔵 Upstream</h1>
<p>Idea → Initiative → Feature → Ready Story &nbsp;·&nbsp; <em>Clarity before code.</em></p>
</div>

## The Moment This Phase Is For

It's Monday morning. The sprint starts today. The PM added a story last week: "Improve the submission flow." The developer pulls it, reads it, and has three immediate questions. They Slack the PM. The PM responds four hours later with a different interpretation than what the developer had built toward. The designer didn't know this was in the sprint at all.

This is Upstream failing. Not dramatically — just quietly, expensively, routinely.

Upstream done well means the developer pulls a story on Monday and starts. Not because the work is simple, but because everything they need was already decided: who they're building for, what the edge cases are, what done looks like, and why this matters enough to build now.

## Purpose

Upstream exists for one reason: **to ensure teams build the right thing before they build it right**.

It is the craft of building clarity — not code. Every hour invested in discovery prevents five hours of rework downstream. The Upstream phase transforms a vague idea into a fully shaped, prioritised, dependency-aware story that a developer can pick up and start the same day.

## What Upstream Produces

```
Input:   A vague idea, a client request, an incident learning, an NPS theme
         
Process: 5 Discovery Stations + Stakeholder Alignment + QA Readiness Check
         
Output:  Initiative Brief (frozen)
         Feature page with journey map
         Epics with journey coverage
         Stories meeting the Definition of Ready (DoR)
```

## The Commitment Point

<div class="callout upstream">
<strong>The Commitment Point is the handoff between Upstream and Downstream.</strong>
A Story crosses the Commitment Point only when it fully satisfies the <a href="/upstream/definition-of-ready">Definition of Ready (DoR)</a>. 
Not 90% ready. Not "mostly there." Fully ready.
</div>

## Chapter Contents

| Page | What you will learn |
|------|---------------------|
| [Roles & Ownership](/upstream/roles) | Who does what in Upstream |
| [Station 1 — Vision & Context](/upstream/station-1-vision) | Audience, problem, why now, success signals |
| [Station 2 — Problem Framing](/upstream/station-2-problem) | Current state, pains, constraints, assumptions |
| [Station 3 — User Journey & Slices](/upstream/station-3-journey) | Journey mapping, step IDs, slice planning |
| [Station 4 — Solution Options](/upstream/station-4-options) | 2–3 options, tradeoffs, ADRs, spikes |
| [Station 5 — Decision & Scope](/upstream/station-5-decision) | Chosen approach, MVP, rollout, rollback |
| [Definition of Ready](/upstream/definition-of-ready) | The 9-point checklist |
| [Anti-Patterns](/upstream/anti-patterns) | The 6 most common Upstream failures |
| [Cadence](/upstream/cadence) | Ceremonies, frequency, owners |

## The Discovery Workshop

The 5 stations are a structured workshop — not a phase, not a process, not a ceremony. A workshop for thinking through a problem you don't fully understand yet.

Think of it like a doctor's visit. You don't walk into a clinic and say "give me antibiotics." You describe your symptoms. The doctor examines you, runs tests, considers what could be wrong. They present options — medication, lifestyle change, surgery. You decide together. The prescription comes last, after the diagnosis.

The stations work the same way:

| Station | The Doctor Metaphor | What It Produces |
|---------|-------------------|------------------|
| **Station 1 — Vision & Context** | "What brings you in today?" | Who has the problem, why it matters now |
| **Station 2 — Problem Framing** | "Let me examine — where does it hurt?" | Root cause diagnosis, assumption register |
| **Station 3 — Journey & Slices** | "Walk me through your daily routine" | The full picture of the experience, before and after |
| **Station 4 — Solution Options** | "Here are three treatment options" | 2–3 approaches with tradeoffs, not one predetermined answer |
| **Station 5 — Decision & Scope** | "Here's the prescription" | Chosen approach, MVP scope, success metric |

::: warning The stations are for discovery — not for story refinement
The 5-station workshop is designed for **Initiative and Feature discovery** — when you're validating whether a problem is worth solving and how to approach it. It's where the PM and Core Trio (PM, Designer, Tech Lead) work.

For **Epic and Story refinement** — breaking known features into buildable stories — the team uses [Story Mapping](/upstream/story-mapping), [The Cut](/upstream/the-cut), and the [Three Amigos grooming session](/upstream/grooming-session). That's where the PO, Tech Lead, and QA work.

Different questions, different people, different practices.
:::

```
Station 1        Station 2        Station 3        Station 4        Station 5
─────────────    ─────────────    ─────────────    ─────────────    ─────────────
Vision &         Problem          User Journey     Solution         Decision &
Context          Framing          & Slices         Options          Scope
                                                                         │
Why? Who?        Current state    J1→J2→J3         Option A         Chosen approach
Success?         Pains            S1 (MVP)         Option B         MVP sequencing
Non-goals        Assumptions      S2               Option C         Rollout plan
                 Questions        Whiteboard       ADRs             Success metrics
```
