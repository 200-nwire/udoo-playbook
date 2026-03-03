# Phase Gate Checklists

Four gates. Each one is a binary check — the work either passes or it doesn't. These checklists are designed to be printed, pulled up on a second screen, or embedded in your sprint review template.

::: info Philosophy
Gates are not bureaucracy. They are safety mechanisms. A gate that catches a missing runbook saves 30 minutes of on-call confusion. A gate that catches vague acceptance criteria saves a sprint of rework. The cost of running a gate is minutes; the cost of skipping one is weeks.
:::

---

## Gate 1 — Commitment Point (Upstream → Downstream) {#gate-1}

*Can this story safely enter the sprint?*

**Who approves:** Product Manager + Tech Lead (both must sign off)

**When it runs:** Sprint Planning ceremony, for each candidate story

### Full Checklist

#### Definition of Ready (all 9 points)

- [ ] **User story format:** Story follows "As a [persona], I want [action], so that [outcome]" structure
- [ ] **Acceptance criteria:** Written in Given/When/Then format; each criterion is independently testable
- [ ] **Journey step:** At least one journey step (J1, J2…) is referenced
- [ ] **Scope boundaries:** "In Scope" and "Out of Scope" sections are explicit
- [ ] **Design assets:** Wireframes, mockups, or design specs are linked and approved by UX
- [ ] **Technical feasibility:** Tech Lead has confirmed the approach is viable within the sprint
- [ ] **Dependencies:** All external dependencies are identified and their status is known
- [ ] **Estimation:** Story is estimated by the team (story points or t-shirt size)
- [ ] **Open questions:** Zero open questions remain — all have been resolved or deferred to a separate story

#### Strategic Alignment

- [ ] **Initiative Brief:** The parent Initiative has a frozen, approved Initiative Brief
- [ ] **Feature linkage:** The story's Epic links to a Confluence Feature page
- [ ] **ADRs:** All significant technical decisions for this story are documented in ADRs

#### Approval

- [ ] **PM sign-off:** Product Manager confirms the acceptance criteria match the intended user outcome
- [ ] **Tech Lead sign-off:** Tech Lead confirms the story is technically feasible and well-scoped

::: warning What happens if not met
The story returns to Upstream. It does not enter the sprint under any circumstances — not as a "stretch goal," not as "we'll figure it out during the sprint," not as a favour. The PM assigns an owner and a target date for the missing items. The story is a candidate for the next sprint once the gaps are closed.
:::

::: details Printable Checklist — Gate 1
```
COMMITMENT POINT GATE — Story: _______________  Date: ___________

DoR Checklist:
[ ] User story format complete
[ ] Acceptance criteria in Given/When/Then
[ ] Journey step referenced
[ ] Scope & out-of-scope defined
[ ] Design assets linked
[ ] Tech feasibility confirmed
[ ] Dependencies identified
[ ] Estimation complete
[ ] Zero open questions

Strategic Alignment:
[ ] Initiative Brief frozen
[ ] Epic linked to Feature page
[ ] ADRs documented

Approvals:
[ ] PM sign-off: _____________ (name)   Date: _________
[ ] Tech Lead sign-off: _____________ (name)   Date: _________

Result:  [ ] PASS — enters sprint    [ ] FAIL — returns to Upstream
Notes: _________________________________________________________
```
:::

---

## Gate 2 — Delivery Point (Downstream → Onstream) {#gate-2}

*Can this story safely ship to production?*

**Who approves:** Tech Lead + QA Lead (both must sign off). PM confirms feature intent.

**When it runs:** Before merge to release branch, for each completed story

### Full Checklist

#### Definition of Done (all 8 points)

- [ ] **Code complete:** All acceptance criteria are implemented
- [ ] **Code reviewed:** At least one peer review completed; all comments resolved
- [ ] **Tests passing:** Unit tests, integration tests, and E2E tests pass in CI
- [ ] **Test coverage:** New code meets minimum coverage threshold (per team agreement)
- [ ] **No regressions:** Existing test suite passes with no new failures
- [ ] **Documentation:** Technical docs updated (API docs, component docs, inline docs where non-obvious)
- [ ] **Changelog:** Release notes or changelog entry written
- [ ] **Branch clean:** Feature branch rebased on main, no merge conflicts

#### Operational Readiness

- [ ] **Runbook:** Runbook exists for this service/feature and has been reviewed by someone other than the author
- [ ] **Observability:** Required events are emitting; dashboard updated; alerts configured
- [ ] **Rollback procedure:** Rollback steps documented and tested (or feature flag confirmed)
- [ ] **Performance:** No performance regressions identified (load test results if applicable)
- [ ] **Security:** No new vulnerabilities introduced (SSDLC checks pass)

#### Stakeholder Confirmation

- [ ] **PM confirmation:** Product Manager confirms the delivered feature matches the intended outcome
- [ ] **Onstream briefing:** DevOps, Support, and on-call teams have been briefed on the change
- [ ] **Release coordination:** Release window confirmed; deployment plan reviewed

::: warning What happens if not met
The deployment is blocked. The story stays in "In Review" and does not merge to the release branch. The Tech Lead identifies the specific gap, assigns an owner, and estimates remediation time. If the gap is operational readiness (runbook, observability), the on-call team has explicit authority to block the release.
:::

::: details Printable Checklist — Gate 2
```
DELIVERY POINT GATE — Story: _______________  Date: ___________

DoD Checklist:
[ ] Code complete (all AC implemented)
[ ] Code reviewed (comments resolved)
[ ] Tests passing (unit, integration, E2E)
[ ] Test coverage meets threshold
[ ] No regressions
[ ] Documentation updated
[ ] Changelog entry written
[ ] Branch clean (rebased, no conflicts)

Operational Readiness:
[ ] Runbook exists and reviewed
[ ] Observability (events, dashboards, alerts)
[ ] Rollback procedure documented
[ ] Performance verified
[ ] Security checks pass

Stakeholder Confirmation:
[ ] PM confirms feature intent     _____________ (name)
[ ] Onstream teams briefed         _____________ (name)
[ ] Release window confirmed       Date: _________

Result:  [ ] PASS — approved for release    [ ] FAIL — stays in review
Blocker: _________________________________________________________
```
:::

---

## Gate 3 — Stability Point (Onstream → Offstream) {#gate-3}

*Has this feature proven stable enough to be actively sold and expanded?*

**Who approves:** Engineering Manager + PM + CS Lead (all three must agree)

**When it runs:** After the feature has been in production for the agreed stabilisation window (typically 2-4 weeks)

### Full Checklist

#### SLO Compliance

- [ ] **SLOs defined:** Service Level Objectives are defined, documented, and owned by the PM
- [ ] **Dashboards live:** SLO dashboards are operational and accessible to all stakeholders
- [ ] **Error budget:** Current error budget consumption is within acceptable range
- [ ] **SLO met:** The feature has met its SLOs for the duration of the stabilisation window
- [ ] **No P0/P1 incidents:** Zero unresolved P0 or P1 incidents during the stabilisation window

#### Incident-Free Window

- [ ] **Incident count:** Total incidents during stabilisation window is below threshold (team-defined)
- [ ] **Post-mortems complete:** All incidents during the window have completed post-mortems
- [ ] **Action items tracked:** All post-mortem action items are assigned and in progress
- [ ] **On-call burden:** On-call pages for this service are within acceptable frequency

#### Customer Readiness

- [ ] **Support training:** Support team has been trained on the feature (FAQs, known limitations, workarounds)
- [ ] **CS briefing:** Customer Success team has talking points, demo scripts, and known limitations
- [ ] **Documentation:** User-facing documentation (help centre, knowledge base) is published
- [ ] **Marketing assets:** Marketing materials are ready (if external launch)
- [ ] **Feature flag / rollout:** Phased rollout plan confirmed, or feature flag toggled for GA

#### Feedback Baseline

- [ ] **Feedback channel:** Mechanism for collecting user feedback on this feature is active
- [ ] **Baseline metrics:** Pre-launch baseline for key metrics (adoption, satisfaction) is recorded
- [ ] **Health score:** Customer Health Score model updated to include this feature's signals

::: warning What happens if not met
Go-live to the broader customer base is **deferred** — not cancelled. The PM assigns a named owner and a target date for each open item. The feature remains available to early-access users or internal users. The gate is re-evaluated at the next Weekly Service Review.
:::

::: details Printable Checklist — Gate 3
```
STABILITY POINT GATE — Feature: _______________  Date: ___________
Stabilisation window: _________ to _________  (min 2 weeks)

SLO Compliance:
[ ] SLOs defined and PM-owned
[ ] Dashboards live
[ ] Error budget within range
[ ] SLOs met for full window
[ ] No unresolved P0/P1 incidents

Incident-Free Window:
[ ] Incident count below threshold
[ ] All post-mortems complete
[ ] Action items assigned
[ ] On-call page frequency acceptable

Customer Readiness:
[ ] Support team trained
[ ] CS team briefed
[ ] User docs published
[ ] Marketing assets ready (if applicable)
[ ] Rollout plan confirmed

Feedback Baseline:
[ ] Feedback channel active
[ ] Baseline metrics recorded
[ ] Health score updated

Approvals:
[ ] Eng Manager: _____________ (name)   Date: _________
[ ] PM: _____________ (name)            Date: _________
[ ] CS Lead: _____________ (name)       Date: _________

Result:  [ ] PASS — go-live approved    [ ] DEFER — re-evaluate on _________
Gaps: ___________________________________________________________
```
:::

---

## Gate 4 — Feedback Point (Offstream → Upstream) {#gate-4}

*Is the learning from this release informing the next initiative?*

**Who approves:** PM (owns the routing decision). VP Product reviews quarterly.

**When it runs:** Continuously, with formal review at Quarterly Planning

### Full Checklist

#### Signal Quality

- [ ] **CS Feedback reviewed:** All CS Feedback Jira issues from the period are reviewed and triaged
- [ ] **NPS/CSAT analysed:** Net Promoter Score and Customer Satisfaction results for this feature are compiled
- [ ] **Usage data reviewed:** Adoption metrics, engagement patterns, and drop-off points are analysed
- [ ] **Support ticket themes:** Top 5 support ticket themes related to this feature are identified
- [ ] **Win/Loss data:** Win/Loss data from relevant sales period is reviewed for this feature's impact

#### Initiative Threshold

- [ ] **Signal volume:** Sufficient signal volume exists to draw conclusions (minimum thresholds per team agreement)
- [ ] **Pattern identification:** Recurring themes are identified and documented (not just individual anecdotes)
- [ ] **Quantified impact:** Each theme has a quantified impact estimate (users affected, revenue at risk, support cost)
- [ ] **Comparison to goals:** Actual outcomes are compared against the Initiative Brief's success metrics

#### Routing Process

- [ ] **New initiatives proposed:** High-signal themes are drafted as candidate Initiative Briefs
- [ ] **Existing initiatives updated:** Current initiatives are updated with new learning
- [ ] **Backlog groomed:** Feature backlog is re-prioritised based on new signal
- [ ] **Post-mortem actions routed:** Completed post-mortem actions that have systemic implications are proposed as initiatives
- [ ] **Presentation prepared:** Top themes are prepared for presentation to PM and stakeholders at the next planning cycle

::: info This gate has no "fail" state
The Feedback Point is a habit, not a binary gate. It runs continuously. The formal quarterly review ensures the habit is alive and the signal is flowing. If the review reveals that signal has dried up — no CS Feedback logged, no NPS analysed, no usage data reviewed — that itself is the most important finding.
:::

::: details Printable Checklist — Gate 4
```
FEEDBACK POINT GATE — Period: _______________  Date: ___________

Signal Quality:
[ ] CS Feedback issues reviewed and triaged
[ ] NPS/CSAT results compiled
[ ] Usage data analysed (adoption, engagement, drop-off)
[ ] Top 5 support ticket themes identified
[ ] Win/Loss data reviewed

Initiative Threshold:
[ ] Sufficient signal volume
[ ] Recurring patterns documented
[ ] Impact quantified per theme
[ ] Actuals compared to Initiative success metrics

Routing:
[ ] New initiative candidates drafted
[ ] Existing initiatives updated
[ ] Backlog re-prioritised
[ ] Post-mortem systemic actions routed
[ ] Presentation prepared for planning cycle

Reviewed by: _____________ (PM)   Date: _________

Signal health:  [ ] STRONG    [ ] ADEQUATE    [ ] WEAK — investigate
Notes: _________________________________________________________
```
:::

---

## Gate Summary

| Gate | Transition | Approvers | Failure Mode | Frequency |
|------|-----------|-----------|-------------|-----------|
| **Commitment Point** | Upstream → Downstream | PM + Tech Lead | Story returns to Upstream | Every sprint planning |
| **Delivery Point** | Downstream → Onstream | Tech Lead + QA Lead + PM | Deploy blocked | Every release |
| **Stability Point** | Onstream → Offstream | Eng Manager + PM + CS Lead | Go-live deferred | Post-stabilisation window |
| **Feedback Point** | Offstream → Upstream | PM (VP reviews quarterly) | No fail state — habit check | Continuous + quarterly |
