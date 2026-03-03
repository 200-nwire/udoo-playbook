# Jira Templates

Copy these templates into your Jira issue description fields. Every field matters.

## Epic Template

```markdown
## Context
[1–2 sentence description of what this Epic delivers. Link to the Initiative/Feature page in Confluence.]

**Confluence Feature page:** [Link]
**Parent Initiative:** [Initiative name + link]

## Problem / Goal
[What problem does this Epic solve? What user outcome does it enable?]

## Scope
[What is included in this Epic?]

## Out of Scope
[What is explicitly excluded?]

## User Journey Coverage
Covers journey steps: **J3–J5** (Configure → First Use → Approve)
[Link to journey whiteboard]

## Risks & Dependencies
- Dependency: [what, on whom, by when]
- Risk: [what could go wrong, mitigation]

## Success Criteria
- [ ] Metric / observable outcome 1
- [ ] Metric / observable outcome 2

## Links
- Feature page: [Confluence link]
- Related Epics: [links]
- Whiteboard: [link]
```

---

## Story Template

```markdown
## Background
[1–2 sentences on the context. Why does this story exist? Where does it fit?]

**Journey step:** J4 — Configure spending limits
**Epic:** [Epic ID + title]
**Feature page:** [Confluence link]

## Problem / Goal
[What user pain does this story address? What outcome does it enable?]

## Scope
[Exactly what this story includes.]

## Out of Scope
[Exactly what this story does NOT include.]

## Proposed Solution
[High-level approach only. Do not over-engineer. Dev owns the implementation detail.]

## Acceptance Criteria

**Happy path:**
- [ ] Given [precondition], when [action], then [observable outcome]
- [ ] Given [precondition], when [action], then [observable outcome]

**Edge cases:**
- [ ] Given [edge condition], when [action], then [observable outcome]
- [ ] Given [empty state], when [action], then [observable outcome]

**Error states:**
- [ ] Given [failure condition], when [action], then [error message shown]

## Risks
[Any risk to calling out before dev starts]

## Open Questions
- [ ] [Question] — Owner: @name

## Links
- Epic: [link]
- Wireframe: [link]
- Whiteboard: [link]
- Gherkin scenarios: [AssertThat link]
```

---

## Bug Template

```markdown
## Symptom & Impact
[What is broken? How many users are affected? What is the business cost?]

**Severity:** severity/[critical|high|medium|low]
**Impact:** impact/[blocker|high|medium|low]
**Priority:** P[0|1|2|3]
**Type:** type/[bug|regression|performance|security|visual]
**Environment:** env/[production|staging|development]
**Area:** area/[api|frontend|mobile|database|infra|auth|data-pipeline|payments|ux]

## Steps to Reproduce
1. [Step 1]
2. [Step 2]
3. [Step 3]

## Expected Behaviour
[What should happen]

## Actual Behaviour
[What actually happens]

## Environment Details
- App version: X.Y.Z
- Browser / OS / Device: [details]
- User ID / Account (if relevant): [details]
- Reproducibility: Always / Sometimes / Once

## Attachments
[Screenshots, screen recordings, log excerpts, network traces]

## Root Cause (required for Critical/High)
**Root cause label:** root/[requirements|logic-error|testing-gap|data|configuration|dependency|unknown]
**RCA summary:** [1–3 sentences on what went wrong]

## Follow-Up
- [ ] RCA completed
- [ ] Fix merged
- [ ] Regression test added
- [ ] Post-mortem required? [Yes/No — required for P0/P1]
```

---

## Issue Type Guide

| Issue type | Use when | Required fields |
|------------|---------|-----------------|
| **Epic** | Cohesive experience room within a Feature | Confluence link, journey steps, scope |
| **Story** | Smallest testable unit of user value | Epic link, journey step refs, AC, DoR ticked |
| **Subtask** | Discrete piece of work within a Story | Parent story, assignee, estimate |
| **Bug** | Observed deviation from defined behaviour | Severity, impact, priority, steps to reproduce |
| **CS Feedback** | Customer signal from Offstream | Source, customer name, impact, account link |

---

**Next:** [Gherkin & AssertThat →](/downstream/gherkin)
