# Initiative Template

Copy this template into a new Confluence page when starting an initiative. Link a Jira Epic before writing anything else — the ticket is the anchor, not the doc.

::: info What makes a good initiative name?
Frame the initiative as a problem, not a solution. "Pninei Halacha — Calm Digital Reading Experience" works. "Build a Reading App" does not. If the name describes a solution, the team will skip discovery and jump to building the predetermined answer.
:::

---

## Template

```markdown
# Initiative: [Name — problem-framed, not solution-framed]

**Status:** Backlog | Discovery In Progress | Discovery Drafting | Discovery Review
           | Ready for Approval | Approved | Ready for Dev
**Owner:** [Product Manager name]
**Jira Epic:** [Epic ID + link]
**Created:** YYYY-MM-DD
**Last updated:** YYYY-MM-DD

---

## TL;DR
One paragraph. What problem, who has it, why it matters, what success looks like.
Written last — after all other sections are complete.

---

## 1. Business Context
How this connects to company OKRs or strategic pillars. One paragraph.
Why now? What changes if we don't do this?

---

## 2. Problem Statement
[Persona] cannot [action] because [root cause], which results in [measurable impact].

---

## 3. Target Users

### Primary Persona
| Field | Detail |
|-------|--------|
| Name | [Persona name] |
| Role | [Role / segment] |
| Job-to-be-done | [What they're trying to accomplish] |
| Current workaround | [How they solve this today] |
| Pain severity | High / Medium / Low |

### Experience Snapshot
[3–5 sentence day-in-the-life narrative. Named person. Specific moment.
No UI language. No feature names. Just the felt human experience.]

---

## 4. In/Out of Scope

| In Scope ✅ | Out of Scope ❌ | Reason for exclusion |
|------------|----------------|---------------------|
| [Item] | [Item] | [Why excluded] |

---

## 5. Solution Sketch
High-level description of the chosen approach from Station 4.
Not a spec — enough for an engineer to estimate and a stakeholder to understand.

[Link to ADR if an architecture decision was made]

---

## 6. Systems Involved
| System | Role in this initiative | Owner |
|--------|------------------------|-------|
| [Service name] | [What it does here] | [Team/person] |

[Link to architecture diagram]

---

## 7. API Contracts (if applicable)
| Endpoint | Method | Request | Response | Auth |
|----------|--------|---------|----------|------|
| /api/... | GET | — | { ... } | Bearer token |

Skip this section for non-API initiatives.

---

## 8. Risks & Mitigations
| Risk | Likelihood | Impact | Mitigation | Owner |
|------|-----------|--------|------------|-------|
| [Risk description] | H / M / L | H / M / L | [Strategy] | @name |

### Assumption Register
| Assumption | Confidence | If wrong, impact | How to verify |
|-----------|-----------|-----------------|---------------|
| [Assumption] | H / M / L | [Impact] | [Verification method] |

### Open Questions
- [ ] [Question] — Owner: @name — Due: YYYY-MM-DD

---

## 9. Success Metrics
| Signal | Type | Current baseline | Target | Measurement | Review date |
|--------|------|-----------------|--------|-------------|-------------|
| [Metric name] | Leading / Lagging | [Current] | [Target] | [Tool/method] | Day 7 / Day 30 |

---

## 10. Story Mapping

### Journey Map
[Link to Confluence journey page or whiteboard photo]

### Epics
| Epic | Journey Steps | Slice | Status |
|------|--------------|-------|--------|
| E1: [Name] | J1–J4 | S1 | To Do / Ready / Done |

### Slice Plan
| Slice | Scope | Out of scope | Sequencing rationale |
|-------|-------|-------------|---------------------|
| S1 (MVP / Walking Skeleton) | [What's in] | [What's out] | [Why first] |
| S2 | [What's in] | [What's out] | [Depends on S1] |

---

## 11. BDD Scenario Coverage
Key scenarios for the most critical acceptance criteria:

| Scenario | Epic | Journey Step |
|----------|------|-------------|
| Given [precondition] / When [action] / Then [outcome] | E1 | J3 |

---

## 12. Rollout Plan
- **Feature flag:** [Flag name or "none"]
- **Canary %:** [Initial rollout percentage]
- **Ramp schedule:** [Timeline — e.g., 5% day 1, 25% day 3, 100% day 7]
- **Rollback trigger:** [What behaviour causes rollback]
- **Data migration:** [If applicable — or "none"]

---

## 13. Approval Signatures

| Role | Name | Decision | Date |
|------|------|----------|------|
| Product Owner | @name | ✅ Approved / ❌ Rejected / ⏳ Pending | YYYY-MM-DD |
| Engineering Lead | @name | | |
| UX Lead | @name | | |
| Security Lead | @name | | |
| Data Lead | @name | | |
| Stakeholder | @name | | |

---

## Reopen Triggers

Reopen this initiative's discovery if any of the following occur:

- [ ] The success metric hasn't moved after two shipped features
- [ ] Offstream data contradicts the primary persona (a different segment is actually affected)
- [ ] A P0 incident reveals that a core assumption was wrong
- [ ] [Add initiative-specific trigger]

**When triggered:** Stop feature delivery. Return to Station 2 (Problem Framing) with the new evidence. Update the Assumption Register and re-evaluate the Feature Map before resuming.

---

## Decision Log
| Date | Decision | Rationale | Decided by |
|------|----------|-----------|-----------|
| YYYY-MM-DD | [What was decided or changed] | [Why] | @name |
```

---

## Required Sections Checklist

Before moving to "Ready for Approval", verify:

- [ ] TL;DR is written last and fits in one paragraph
- [ ] Problem Statement is falsifiable and quantified (measurable impact)
- [ ] Primary persona is named — not "the user"
- [ ] Experience Snapshot has no UI language or feature names
- [ ] In/Out of Scope has explicit exclusions with reasons
- [ ] Success Metrics have a current baseline (not just a target)
- [ ] At least one success metric is a leading indicator
- [ ] Story Map shows journey steps and slice plan
- [ ] S1 is a walking skeleton — thin, end-to-end, independently shippable
- [ ] All risks have mitigations and owners
- [ ] All open questions have owners and due dates
- [ ] Decision Log captures any choices made during discovery
- [ ] Reopen Triggers include at least one initiative-specific condition
- [ ] All required approval signatures are in place before moving to Approved

::: warning The two most common template failures
1. **Problem Statement is really a solution statement.** "We need to build X" is not a problem. "Users cannot do Y because Z, causing W" is a problem. If your problem statement could be a product brief, rewrite it.
2. **Success Metrics have no baseline.** "Increase retention to 40%" means nothing if you don't know current retention. Measure before you build.
:::

---

## Scaling the Template

Not every initiative needs all 13 sections. Scale based on scope:

| Initiative size | Sections to complete | Sections to skip |
|----------------|---------------------|-----------------|
| **Small** (1 Epic, 1 sprint) | 1–5, 8–10 | API Contracts, Systems, BDD, Rollout |
| **Medium** (2–4 Epics, 2–3 sprints) | 1–11 | Skip BDD and Rollout if no API change |
| **Large** (5+ Epics, multi-team) | All 13 | — |

Rule of thumb: if the initiative spans more than one team or requires a formal approval gate, complete all sections.

---

::: tip Worked example
See [Initiative — Pninei Halacha](/examples/initiative-pninei-halacha) for a complete, real-world Initiative Brief from discovery through approval.
:::
