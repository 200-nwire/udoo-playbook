# Standards

## Why Standards Exist

Every team eventually invents its own conventions — naming patterns, label taxonomies, workflow statuses, communication norms. Without deliberate alignment, these conventions diverge silently. One developer names bugs `[FE] broken layout`, another uses `frontend - layout issue`, a third uses no prefix at all. Multiply that drift across issue types, tags, tooling, and communication channels and you get a codebase and backlog that only the original author can navigate.

Standards solve three problems simultaneously:

1. **Shared language.** When everyone uses the same terms, meetings get shorter, handoffs get cleaner, and onboarding stops being an oral tradition.
2. **Reduced friction.** Decisions that repeat — "what severity is this?", "which tag do I use?", "how do I name this branch?" — are answered once and referenced forever.
3. **Faster onboarding.** A new team member reads these pages and understands not just *what* to do, but *why* the team chose to do it this way.

::: tip Standards Are Guardrails, Not Handcuffs
A standard that prevents the team from doing the right thing is a bad standard. Every convention in this section exists because it solves a real, recurring problem. If a standard stops solving problems and starts creating them, propose a change in a retrospective — don't silently ignore it, and don't treat it as sacred.
:::

---

## How to Use This Section

Each page is self-contained. You do not need to read them in order. Jump to the standard relevant to the work you are doing right now.

For each standard you will find:

- **The rule** — what to do, stated plainly.
- **The rationale** — why it exists, with concrete examples.
- **Tables and checklists** — quick-reference material designed for daily use, not just first-time reading.
- **Anti-patterns** — common mistakes and how to avoid them.

::: info Cross-Cutting by Design
Standards apply to **all phases** of the UDOO lifecycle — Upstream, Downstream, Onstream, and Offstream. They are the shared foundation that makes phase-specific processes work. You will see these standards referenced from within each phase's documentation.
:::

---

## Standards at a Glance

| Standard | What It Covers | When You Need It |
|----------|---------------|-----------------|
| [Jira Issue Type Guide](/standards/jira-issue-types) | Issue hierarchy (Initiative → Epic → Story → Sub-task), required fields, naming conventions, workflows | Creating or triaging any Jira issue |
| [Bug Label System](/standards/bug-labels) | Five-dimension taxonomy — severity, impact, priority, type, area, root cause | Filing, triaging, or reviewing any bug |
| [Gherkin Tagging Standard](/standards/gherkin-tags) | Tags for smoke, regression, acceptance, priority, scope, and feature grouping | Writing, organising, or running BDD scenarios |
| [Tooling Conventions](/standards/tooling) | Tool-by-tool conventions for Jira, Confluence, AssertThat, Figma, Git, CI/CD, and monitoring | Setting up a project, onboarding, or choosing where to put something |
| [Communication Tone](/standards/tone) | Writing guidelines for PRs, code reviews, incidents, stakeholder updates, stories, bugs, retros, and Slack | Writing anything that another human will read |

---

## The Compliance Model

Standards are not optional, but they are also not enforced through punishment. The model is:

1. **Default to the standard.** Follow it unless you have a specific, articulable reason not to.
2. **Deviate with intent.** If the standard does not fit, note the deviation and the reason in the relevant artifact (story, PR, retro note).
3. **Propose a change.** If you find yourself deviating repeatedly, raise it in a retrospective. The standard may need to evolve.

::: warning Silent Deviation Is the Enemy
The worst outcome is not breaking a standard — it is breaking it silently, so no one knows the team's conventions have drifted until the inconsistency causes a real problem. If you are going to deviate, make it visible.
:::

---

## Maintaining Standards

Standards are living documents. They are updated through the normal retrospective process:

1. Someone identifies a friction point or gap.
2. A proposal is discussed in a retrospective or standards review.
3. If accepted, the relevant page is updated, and the team is notified.
4. The change takes effect from the next sprint or immediately, depending on scope.

No individual unilaterally changes a standard. No standard is permanent.

---

## Quick Links

- [Jira Issue Type Guide →](/standards/jira-issue-types)
- [Bug Label System →](/standards/bug-labels)
- [Gherkin Tagging Standard →](/standards/gherkin-tags)
- [Tooling Conventions →](/standards/tooling)
- [Communication Tone →](/standards/tone)
