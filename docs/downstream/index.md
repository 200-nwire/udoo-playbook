# Downstream — Engineering & Execution

<div class="phase-header downstream">
<h1>🟢 Downstream</h1>
<p>Ready Story → In Dev → In Review → In Test → Released &nbsp;·&nbsp; <em>Build it right.</em></p>
</div>

## The Moment This Phase Is For

There's a board with eleven stories "In Progress." Nobody is finishing anything because everybody is working on three things. A PR has been open for four days. Two developers are blocked on the same API endpoint but didn't know it. Sprint review is tomorrow and the three most important stories aren't done.

This is Downstream failing. Not from lack of effort — from lack of flow.

Downstream done well is quieter than this. Stories start when the developer is ready for them. They finish in one to three days. PRs are reviewed within a business day because the team has made that agreement. The board moves. At sprint review, what was planned got built — and the team can show it with confidence.

The practices in this chapter — WIP limits, pull-based flow, Gherkin acceptance criteria, the Definition of Done — are not compliance overhead. They are the conditions that make that quieter, more productive experience possible.

## Purpose

Downstream transforms clarity into working software. It is the execution phase — disciplined, iterative, and quality-obsessed. The job of the engineering team is not to interpret requirements; it is to **implement what has already been decided**, raise flags early when reality differs from the plan, and ship with confidence.

::: warning The cardinal rule of Downstream
If a story arrives without meeting the [Definition of Ready](/upstream/definition-of-ready), **send it back**. The team does not absorb missing clarity. That cost belongs in Upstream.
:::

## Chapter Contents

| Page | What you will learn |
|------|---------------------|
| [Roles & Ownership](/downstream/roles) | Who does what in Downstream |
| [Story Workflow](/downstream/story-workflow) | The state machine every story follows |
| [Kanban Flow](/downstream/kanban-flow) | Why Downstream uses Kanban, WIP limits, flow metrics, and Little's Law |
| [Feature Branches & SSDLC](/downstream/feature-branches) | Branching strategy, PR conventions, CI/CD pipeline, and shift-left security |
| [Release Slicing](/downstream/release-slicing) | How to slice releases, feature flags, canary deployments, and scope negotiation |
| [Developer Workflow E2E](/downstream/dev-workflow-e2e) | A complete walkthrough from pulling a story to observing it in production |
| [Subtask Checklist](/downstream/subtask-checklist) | The 7 default subtasks per story |
| [Definition of Done](/downstream/definition-of-done) | The 8-point quality gate |
| [Gherkin & AssertThat Patterns](/downstream/gherkin) | How to write executable specs |
| [Anti-Patterns](/downstream/anti-patterns) | The 6 most common Downstream failures |
| [Cadence](/downstream/cadence) | Sprint ceremonies reference |
