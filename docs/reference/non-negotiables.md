# The 10 Non-Negotiables

These are the rules that may never be broken. Each one exists because skipping it caused a real, documented problem. They are not aspirational guidelines — they are guardrails with teeth.

::: warning These are not suggestions
Non-negotiables are binary. A team either follows them or it doesn't. There is no "we mostly do this." If a retrospective reveals a violation, the action item is always to restore compliance — never to downgrade the rule.
:::

---

## 1. No Story Enters Downstream Without Meeting the DoR {#rule-1}

> A story crosses the Commitment Point only when all 9 points of the [Definition of Ready](/upstream/definition-of-ready) are satisfied.

**Rationale:** Incomplete stories cause mid-sprint discovery — the most expensive kind of discovery. When a developer opens a story on Monday morning and finds missing acceptance criteria, undefined edge cases, or no linked designs, the sprint absorbs the cost of what should have been Upstream work. This turns predictable delivery into a guessing game.

**Real example:** On the *Pninei Halacha* reading app, a story for "user bookmarks a page" entered a sprint without specifying behaviour for offline mode. The developer built a server-side-only solution. On Thursday, the PM clarified that bookmarks must work offline. The story was rewritten, re-estimated, and delivered one sprint late — a 3-week delay from a 15-minute missing conversation.

**Consequence of violation:** Stories that enter Downstream unready have a **3x higher rate of mid-sprint scope change** (measured across 14 sprints). Each unready story delays an average of 1.2 other stories in the same sprint through dependency cascades and context switching.

::: tip Enforcement mechanism
The sprint planning ceremony includes a DoR walkthrough for each candidate story. Any story with an open checkbox returns to Upstream with a named owner and a target date. No exceptions.
:::

---

## 2. No Story Is Released Without Meeting the DoD {#rule-2}

> A story crosses the Delivery Point only when all 8 points of the [Definition of Done](/downstream/definition-of-done) are satisfied.

**Rationale:** The DoD is not a quality aspiration — it is the minimum standard for production-safe code. Skipping code review, test coverage, or documentation creates invisible debt that surfaces as incidents, regressions, and on-call fatigue.

**Real example:** On the *Momentum / Living Wondrously* journal app, a prompt-rendering story was marked "Done" without updating the runbook. Two weeks later, a deployment issue required on-call intervention. The engineer spent 35 minutes debugging because the runbook still described the old architecture. The fix itself took 4 minutes.

**Consequence of violation:** Incomplete DoD correlates with a **2.5x higher P1/P2 incident rate** in the 30 days following release. Each skipped DoD item is a deferred cost that compounds.

::: tip Enforcement mechanism
The Delivery Point gate review is conducted by the Tech Lead and PM. A story with any open DoD item stays in "In Review" and does not merge to the release branch.
:::

---

## 3. Every Initiative Has a Frozen Initiative Brief Before Development Begins {#rule-3}

> An [Initiative Brief](/upstream/initiative-brief) must be written, reviewed, and frozen before any Feature under it enters sprint planning.

**Rationale:** Without a frozen brief, scope creep is invisible. If the Initiative's problem statement, success metrics, and constraints are not locked, every stakeholder conversation becomes an opportunity to redefine the project mid-flight.

**Real example:** The *Someone for Coffee* social app began development on a "Discovery Feed" initiative without a frozen brief. Over 4 sprints, the scope expanded from "show nearby users" to "show nearby users with shared interests, availability matching, and mutual-friend indicators." The team delivered 60% of a large scope instead of 100% of the original, smaller scope. A frozen brief would have forced the expansion into a separate initiative.

**Consequence of violation:** Initiatives without frozen briefs take **40% longer** to complete on average, and their success metrics are frequently redefined after launch — making it impossible to determine whether the initiative succeeded.

::: tip Enforcement mechanism
Sprint Planning will not accept stories from Features whose parent Initiative lacks a frozen brief. The PM is responsible for the brief; the VP Product signs off.
:::

---

## 4. Every Released Feature Has a Runbook Before Go-Live {#rule-4}

> A production service or feature must have a [runbook](/onstream/runbook-template) before the Delivery Point gate is passed.

**Rationale:** On-call engineers must not debug in the dark. A runbook is the difference between a 5-minute resolution and a 45-minute outage. It encodes the institutional knowledge that would otherwise live only in the original developer's head.

**Real example:** The *Analytics Layer* (LMS) experienced a JWT token validation outage that lasted 44 minutes. The on-call engineer was unfamiliar with the service. No runbook existed. Of the 44 minutes, approximately 30 were spent locating the correct configuration files and understanding the service's dependencies. A runbook with the alert-to-action mapping would have reduced resolution to under 15 minutes.

**Consequence of violation:** Services without runbooks have a mean time to resolution (MTTR) **2.8x higher** than services with runbooks. On-call engineers report significantly higher stress levels when responding to alerts for undocumented services.

::: tip Enforcement mechanism
The Delivery Point checklist includes "Runbook exists and has been reviewed by someone other than the author." The on-call team has the authority to block a release if the runbook is missing or inadequate.
:::

---

## 5. Every P0/P1 Incident Gets a Blameless Post-Mortem Within 48 Hours {#rule-5}

> A [post-mortem](/onstream/post-mortem-template) must be completed within 48 hours of incident resolution for any P0 or P1 incident.

**Rationale:** Memory degrades. After 48 hours, the team's recollection of the incident timeline becomes unreliable. The post-mortem must capture root causes, contributing factors, and corrective actions while the details are fresh. "Blameless" is non-negotiable because blame drives hiding, and hiding drives recurrence.

**Real example:** On the *Analytics Layer*, a data pipeline failure caused 6 hours of stale dashboard data. The post-mortem revealed that the pipeline's retry mechanism had been disabled during a previous hotfix and never re-enabled. This discovery led to a new DoD item: "verify retry configuration in staging before release."

**Consequence of violation:** Without a timely post-mortem, the same class of incident recurs within 90 days in **65% of cases**. Delayed post-mortems (>1 week) produce fewer actionable items and lower follow-through rates.

::: tip Enforcement mechanism
The incident commander is responsible for scheduling the post-mortem before closing the incident ticket. The SRE lead tracks post-mortem completion as a weekly metric.
:::

---

## 6. Every Bug Is Classified with Severity, Impact, and Priority Labels {#rule-6}

> Every bug report in Jira must carry severity, impact, and priority labels from the [Bug Taxonomy](/onstream/bug-taxonomy) before it enters triage.

**Rationale:** Without classification, bugs compete on volume and volume of complaints rather than actual impact. A P3 cosmetic issue reported by 50 users can drown out a P0 data-loss bug reported by 1 user. Labels enforce objective prioritisation.

**Real example:** On the *Someone for Coffee* app, a button alignment issue on the profile page generated 23 support tickets in one week. Meanwhile, a silent data-sync bug affecting 4 users was causing duplicate match notifications. Without classification, the team spent a sprint on the button issue while the sync bug — which was driving churn — went unaddressed for 3 more weeks.

**Consequence of violation:** Unclassified bugs take **60% longer** to reach resolution because they cycle through triage multiple times. Teams without a classification standard report spending 30% of sprint planning debating bug priority.

::: tip Enforcement mechanism
The bug report template in Jira enforces required label fields. The [Bug Template](/reference/bug-template) includes the full taxonomy. Bugs without labels are returned to the reporter before triage.
:::

---

## 7. Every Story Has Acceptance Criteria Written in Testable Language {#rule-7}

> Every story must have acceptance criteria written in Given/When/Then format (or equivalent testable language) before it crosses the Commitment Point.

**Rationale:** Vague acceptance criteria — "the feature should work well" or "the page loads fast" — make it impossible to know when a story is done. Testable criteria create shared understanding between PM, developer, and QA. They are the contract.

**Real example:** On the *Pninei Halacha* app, a story for "search results are relevant" had acceptance criteria that read: "Search returns good results." QA could not write tests. The developer's definition of "good" differed from the PM's. The story was rejected in review, rewritten with specific criteria (e.g., "Given a query for 'שבת', When the user submits the search, Then the first 5 results contain the word 'שבת' in the title or body"), and delayed by one sprint.

**Consequence of violation:** Stories with vague acceptance criteria are **4x more likely** to be rejected in review. Each rejection adds an average of 3 days to cycle time.

::: tip Enforcement mechanism
The [Three Amigos](/downstream/story-workflow) session (Developer + QA + PM) reviews acceptance criteria before sprint start. QA has explicit authority to flag criteria as untestable.
:::

---

## 8. Every Architecture Decision Is Recorded in an ADR {#rule-8}

> Every significant technical decision must be documented in an [Architecture Decision Record](/upstream/station-4-options) (ADR).

**Rationale:** Undocumented decisions become folklore. Folklore becomes rework. Six months from now, a new developer will ask "why did we use WebSockets instead of SSE?" If the answer is "ask Avi, he was here then" and Avi has left the company, the team will either reverse the decision unnecessarily or live with something they don't understand.

**Real example:** On the *Momentum / Living Wondrously* journal app, the team chose a specific local-first sync strategy for offline journal entries. The decision was made in a Slack thread and never documented. Eight months later, a new tech lead proposed migrating to a different sync approach, unaware of the edge cases that drove the original choice. The migration was abandoned after 2 sprints of work when the original constraints resurfaced.

**Consequence of violation:** Teams without ADRs spend an estimated **15% of architecture discussion time** re-litigating past decisions. New team members take 30% longer to reach productive contribution when the reasoning behind existing architecture is undocumented.

::: tip Enforcement mechanism
The DoR includes "ADRs written for all significant technical decisions." The Tech Lead maintains the ADR log and reviews it during the Readiness Check ceremony.
:::

---

## 9. Every Customer Signal Is Logged and Routed to the Product Team {#rule-9}

> Every customer signal — support ticket, NPS comment, churn indicator, feature request — must be logged as a CS Feedback issue in Jira within 24 hours and routed to the product team.

**Rationale:** If it is not in the system, it does not exist for the product team. Customer success teams absorb enormous amounts of signal through daily conversations. Without a logging discipline, this signal dissipates. The product team makes roadmap decisions based on incomplete data.

**Real example:** On the platform behind *Someone for Coffee*, the balance display bug (showing $0.00 instead of negative balances) generated 140 support tickets per month before it was escalated to the product team. CS had been handling each ticket individually — resetting balances manually — for 4 months. If the first 10 tickets had been logged and routed, the fix would have been prioritised 3 months earlier.

**Consequence of violation:** Product teams without systematic signal routing miss **40-60% of customer friction points**. Churn post-mortems frequently reveal that CS knew about the problem months before it reached product.

::: tip Enforcement mechanism
CS logs feedback within 24 hours using the CS Feedback Jira template. A weekly CS Sync ceremony reviews the backlog. The PM triages and links high-signal items to Initiatives.
:::

---

## 10. Every Sprint Ends with a Retrospective That Produces Actionable Improvements {#rule-10}

> Every sprint retrospective must produce at least one concrete, assigned, time-bound improvement action.

**Rationale:** A retrospective without action items is a venting session. Venting sessions create cynicism — the team learns that raising problems leads to nothing. Actionable retrospectives create a culture where raising problems leads to change.

**Real example:** Across all four projects (*Pninei Halacha*, *Momentum*, *Someone for Coffee*, *Analytics Layer*), the teams that tracked retrospective actions to completion showed a **measurable sprint-over-sprint improvement** in velocity and escaped defect rate. The teams that held retros without tracking actions showed flat or declining metrics over the same period.

**Consequence of violation:** Teams that skip retros or produce no actions experience **process drift** — the gradual abandonment of agreed practices. Within 3-4 sprints, other non-negotiables begin to erode because there is no mechanism to detect and correct the drift.

::: tip Enforcement mechanism
The Scrum Master documents retro actions in the sprint record with an owner and due date. Action completion is the first agenda item of the next retrospective.
:::

---

## Why These Ten?

These are not ten arbitrary rules. They map directly to the four most common failure modes:

| Failure Mode | Non-Negotiables That Prevent It |
|-------------|--------------------------------|
| **Building the wrong thing** | 1, 3, 7, 8 |
| **Shipping unreliable software** | 2, 4, 5, 6 |
| **Losing customers silently** | 6, 9 |
| **Repeating the same mistakes** | 5, 8, 10 |

::: info Feedback loop
Notice that rules 9 and 10 close the loop. Without them, the other eight rules protect the team from known problems but cannot surface new ones. The framework's power comes from the cycle, not from any single rule.
:::

---

## A Test for Your Team

Run this checklist in your next retrospective:

- [ ] Can every open Epic be traced to a Confluence Feature page with a frozen Initiative Brief?
- [ ] Does every in-flight story have testable acceptance criteria in Given/When/Then format?
- [ ] Are all production services covered by a reviewed runbook?
- [ ] Are all post-mortems from the last quarter tracked to completion?
- [ ] When was the last CS Feedback issue logged in Jira?
- [ ] Which accounts are renewing in the next 90 days?
- [ ] Can you find an ADR for the last significant architecture decision?
- [ ] Did the last retrospective produce an action item? Was it completed?
- [ ] Is every open bug classified with severity, impact, and priority?
- [ ] Does your team know the escalation path for a P0 incident right now?

If any of these questions produces a pause — that pause is the work.
