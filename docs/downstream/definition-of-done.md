# Definition of Done (DoD)

<span class="phase-badge downstream">🟢 Downstream</span>

## What Is the DoD?

The Definition of Done is the **quality gate at the Delivery Point** — the moment a Story transitions from "In Test" to "Released." It is the team's shared agreement on what "done" actually means.

A Story that passes all acceptance criteria but has no release notes, no observability, and no runbook entry is not done. It is done-ish. Done-ish creates incidents.

::: warning Done-ish Is Expensive
Teams that ship done-ish stories accumulate hidden debt. Each missing DoD item is a landmine: the missing observability event means the regression goes undetected for 3 days. The missing release note means support cannot answer customer questions. The missing PM sign-off means the feature gets reworked after launch.
:::

---

## The 8-Point DoD Checklist

Every story must satisfy all 8 points before it can be marked "Released."

### 1. Functionality

> All acceptance criteria pass in the target environment (staging or production).

This is not "works on my machine." The developer must verify that the feature functions correctly in the deployed environment where QA will test it. For Living Wondrously, this meant verifying the journal entry creation flow on the staging server with production-like data, not against a local SQLite database with 3 test records.

**Example failure:** The prompt carousel worked locally but failed on staging because the CDN for prompt images had a different CORS policy. The developer had bypassed CORS locally with a browser extension. This was caught because the DoD requires target-environment verification.

### 2. Unit / Component Tests

> All unit and component tests are green. Coverage has not regressed.

"Coverage has not regressed" means the team tracks coverage as a ratchet, not a target. If coverage was 78% before this PR, it must be ≥ 78% after. New code should be tested. Deleting dead code that drops coverage is acceptable if the team agrees.

```javascript
// Good: tests mirror acceptance criteria
describe('JournalEntry creation', () => {
  it('creates an entry with the selected prompt', () => { /* ... */ })
  it('saves draft automatically after 5 seconds of inactivity', () => { /* ... */ })
  it('rejects entries exceeding 10,000 characters', () => { /* ... */ })
})

// Bad: tests mirror implementation details
describe('JournalEntry creation', () => {
  it('calls the useCreateEntry composable', () => { /* ... */ })
  it('sets isLoading to true before API call', () => { /* ... */ })
  it('dispatches SET_ENTRY_STATE action', () => { /* ... */ })
})
```

### 3. Gherkin Scenarios

> All Gherkin/BDD scenarios linked to this story are green in AssertThat.

This is non-negotiable. If a Gherkin scenario fails, the story is not done — regardless of whether the failure is "expected" or "a test environment issue." Flaky tests are treated as P2 bugs.

### 4. Code Review

> At least one peer review approved. No unresolved blocking comments remain.

"No unresolved blocking comments" means exactly that. A comment marked "blocking" by the reviewer must be addressed before merge. Non-blocking comments (suggestions, style preferences) can be deferred to follow-up work.

::: tip The Reviewer Is a Co-Owner
When a reviewer approves a PR, they are co-signing the quality of that code. A reviewer who rubber-stamps a PR without reading it is as accountable for defects as the author.
:::

### 5. No Open P1/P2 Bugs

> No P1 or P2 bugs linked to this story remain open.

If QA finds a P2 during testing, the story cannot be released until the P2 is resolved or explicitly deferred by PM with a documented rationale. "We'll fix it next sprint" without a PM decision is not an acceptable deferral.

### 6. Documentation

> Release notes / changelog entry created. API docs updated if interface changed.

This includes:
- Changelog entry in the team's release notes document
- Updated API documentation if any endpoint changed (request/response schema, headers, status codes)
- Updated user-facing documentation or help centre articles if the feature is customer-visible
- Runbook entry if the feature introduces new operational considerations

### 7. Observability

> Required events are emitted and visible in the monitoring dashboard. Alert thresholds confirmed.

This is the most commonly skipped DoD item. Teams reason: *"It's a UI fix, what is there to monitor?"*

The answer is: everything that matters.

For the negative balance bug fix:

```javascript
analytics.track('balance_card_rendered', {
  balance_amount: balance.amount,
  is_negative: balance.amount < 0,
  display_value: formatCurrency(balance.amount),
  user_id: user.id,
})

analytics.track('balance_card_error', {
  error_type: error.type,
  status_code: error.status,
  user_id: user.id,
})
```

Without these events, you cannot:
- Confirm the fix is working in production
- Detect a regression if a future change re-introduces the bug
- Measure the impact on support ticket volume

### 8. PM Sign-Off

> Product Manager has confirmed the feature matches the intended outcome.

PM sign-off means: the PM has opened the feature in the target environment, tested the primary AC, and confirmed it matches the intended outcome. This takes 10 minutes. Skipping it costs hours in post-release rework.

"PM saw it in standup" is not sign-off. "PM said it looks good on the screenshot" is not sign-off. Sign-off requires hands-on verification in the target environment.

---

## Three Levels of Done

The 8-point checklist above is the **Story-level DoD**. But "done" exists at three levels, each with increasing scope.

### Story DoD (Per Story)

The checklist above. Applied to every individual story before it transitions to "Released."

### Sprint DoD (Per Iteration)

Applied at the end of each sprint before the team calls the sprint "complete."

| # | Check | Criterion |
|---|-------|-----------|
| 1 | **All committed stories meet Story DoD** | No story is in a half-done state |
| 2 | **Sprint backlog is clean** | All stories are either Released, Improved, or explicitly deferred with PM approval |
| 3 | **No regression in existing features** | Full regression suite is green |
| 4 | **Sprint metrics captured** | Velocity, cycle time, defect escape rate logged |
| 5 | **Retrospective scheduled** | Retro is on the calendar within 48h of sprint end |
| 6 | **Demo delivered** | Stakeholders have seen the working software |

### Release DoD (Per Deployment)

Applied before a release goes to production. This is the final quality gate.

| # | Check | Criterion |
|---|-------|-----------|
| 1 | **All Sprint DoD items met** | No outstanding sprint-level issues |
| 2 | **Smoke suite passes in staging** | The `@smoke` Gherkin suite is green in the staging environment |
| 3 | **Performance baseline met** | Core flows within latency SLOs (p95 < 500ms for API, p95 < 3s for page load) |
| 4 | **Rollback plan documented** | The team knows exactly how to roll back if the release fails |
| 5 | **Deployment window approved** | CAB (Change Advisory Board) has approved the deployment window for high-risk changes |
| 6 | **Onstream handoff complete** | Runbooks updated, alerts configured, on-call team briefed |
| 7 | **Release notes published** | Customer-facing release notes are ready for publication |

::: info The Nesting Principle
Release DoD includes Sprint DoD, which includes Story DoD. You cannot skip a lower level and satisfy a higher one. A release where individual stories didn't meet Story DoD is, by definition, not done — regardless of how many other release checks pass.
:::

---

## The Delivery Point: Where Downstream Meets Onstream

The **Delivery Point** is the boundary between Downstream ("build it right") and Onstream ("keep it running"). When a story meets all three levels of DoD and is deployed to production, ownership transitions.

```
Downstream (build)          │ Delivery Point │          Onstream (run)
                            │                │
Story DoD ✅                │                │  Monitoring begins
Sprint DoD ✅               │   ────────►    │  On-call rotation owns it
Release DoD ✅              │                │  SLOs enforced
Runbook handed off          │                │  Incident response ready
```

A clean Delivery Point means Onstream has everything they need:
- Runbook entries for new services or features
- Alert thresholds configured and tested
- Dashboards showing feature-specific metrics
- Known issues documented with workarounds

A dirty Delivery Point — missing runbooks, no alerts, no dashboards — means Onstream is flying blind. Every incident response starts with "What does this service even do?" instead of "Here's the remediation step."

---

## What Happens When DoD Is Not Met

### Consequence Chain

```
DoD skipped
  → Missing observability
    → Bug goes undetected for 3 days
      → 47 customer support tickets
        → Emergency hotfix at 2 AM
          → Fatigued developer introduces a second bug
            → Trust erodes with stakeholders
```

This is not hypothetical. This was the Wallet Balance Bug timeline.

### Real Example: The JWT Outage

During a routine deployment, a team skipped DoD item 6 (Documentation) and item 7 (Observability) for an APIM policy change. The policy was deployed directly to production without staging validation. Result: **100% of API requests returned 403 for 44 minutes**. The missing observability meant the team did not detect the issue from their own dashboards — it was reported by customers.

Had the DoD been enforced:
- Item 2 (tests): Integration tests against the APIM policy would have caught the misconfiguration
- Item 6 (documentation): The deployment would have required a rollback plan, which would have shortened resolution from 44 minutes to under 10
- Item 7 (observability): The 403 spike would have triggered an alert within 2 minutes, not 15

---

## The DoD Ceremony

Before any story is marked "Released," the team runs a **2-minute DoD review**. This is not a meeting — it is a checklist walkthrough.

### How It Works

1. **Developer opens the DoD checklist** (pinned in the team's Slack channel or Confluence page)
2. **Developer reads each item aloud** and confirms it is met, providing evidence:
   - "Functionality: AC verified on staging — here's the screenshot."
   - "Tests: Pipeline green — here's the link."
   - "Gherkin: All 7 scenarios green in AssertThat — here's the run."
   - "Code review: Approved by Sarah — here's the PR."
   - "No P1/P2 bugs: Zero open — checked in Jira."
   - "Documentation: Changelog updated — here's the commit."
   - "Observability: Events firing on staging dashboard — here's the screenshot."
   - "PM sign-off: Maria confirmed in Slack — here's the message."
3. **QA or Tech Lead confirms** — a second pair of eyes on the checklist
4. **Story transitions to Released**

::: tip Automate Where Possible
Items 2, 3, 4, and 5 can be automatically verified by CI. The pipeline should block deployment if tests fail, if Gherkin scenarios are red, if the PR is not approved, or if there are open P1/P2 bugs. Items 1, 6, 7, and 8 require human judgment.
:::

---

## Common Pushback

### "DoD slows us down"

This is the most frequent objection, and it is exactly wrong.

Teams without a DoD ship faster initially but spend **30-40% of subsequent sprints** on rework, bug fixes, and incident response. Teams with a DoD spend an extra 10-15 minutes per story on the checklist but avoid the downstream cost.

::: details Data: Team With DoD vs. Team Without DoD
| Metric | Team A (No DoD) | Team B (Enforced DoD) |
|--------|-----------------|----------------------|
| Average cycle time (story start → production) | 6.2 days | 5.1 days |
| Defect escape rate (bugs found in production) | 18% | 4% |
| Sprint rework ratio (% of sprint spent fixing prior work) | 34% | 8% |
| Average incident duration | 52 minutes | 18 minutes |
| Customer satisfaction (NPS) | +12 | +41 |
| Developer satisfaction (survey) | 3.1 / 5 | 4.2 / 5 |

Team A ships stories faster but spends a third of every sprint cleaning up after itself. Team B spends a few extra minutes per story and reclaims that time through fewer incidents, less rework, and happier developers who are not woken up at 2 AM.

*Data collected across 6 sprints, 2 teams of similar size (5 developers), same product domain.*
:::

### "We don't need observability for this story"

Every story that touches production needs observability. If it is not worth monitoring, it is not worth shipping.

### "PM doesn't have time to sign off"

If the PM does not have 10 minutes to verify the feature they requested, the feature's priority should be questioned. PM sign-off is the final alignment check between what was requested and what was built.

---

## Definition of Done for Bug Fixes

Bug fixes have a slightly extended DoD:

| Additional Check | Criterion |
|-----------------|-----------|
| **Root cause documented** | RCA entry exists in Jira or Confluence. |
| **Regression test added** | A new test prevents this exact bug from recurring. |
| **Related areas checked** | Adjacent code was reviewed for the same pattern. |
| **Lint rule added (if applicable)** | If the bug was a preventable code pattern, a lint rule prevents it. |

For the balance bug example, the team's follow-up tasks were:
- Add lint rule against conditional clamping on numeric display fields ✅
- Create shared `useCurrencyFormatter` composable ✅
- Add visual regression snapshot for dashboard totals ✅

These are not optional nice-to-haves. They are DoD items for a bug fix.

---

## The DoD vs. the DoR

| | Definition of Ready (DoR) | Definition of Done (DoD) |
|--|--------------------------|--------------------------|
| **Gate** | Upstream → Downstream | Downstream → Released |
| **Question** | "Is it safe to start?" | "Is it safe to ship?" |
| **Owner** | Product Manager + QA | Tech Lead + QA + PM |
| **Failure means** | Story returns to Upstream | Story stays in "In Test" |
| **Time cost of failure** | Hours (refinement rework) | Days (implementation rework + incident risk) |

::: info DoR and DoD Are a Pair
DoR without DoD means you start well but finish poorly. DoD without DoR means you finish well but start in chaos. Both gates must exist. Both must be enforced. Neither is optional.
:::
