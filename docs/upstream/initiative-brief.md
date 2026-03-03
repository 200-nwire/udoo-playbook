# Initiative Brief

<span class="phase-badge upstream">🔵 Upstream</span>

## What Is an Initiative Brief?

The Initiative Brief is the **single source of truth** for an initiative — from the moment it's conceived through approval and into development. It captures the *why*, *who*, *what*, and *how* of a body of work, and serves as the contract between Product, Engineering, UX, and stakeholders.

::: info Living Until Frozen
Initiative Briefs are **living documents** during discovery — updated as the team learns. Once approved, they are **frozen**. Any scope changes after approval require a logged decision with stakeholder sign-off.
:::

---

## The Complete Structure

An Initiative Brief has 14 sections. Not every section applies to every initiative — small features may skip Solution Sketch and Systems Involved — but the template ensures nothing critical is forgotten.

### Section-by-Section Guide

#### 1. TL;DR
One paragraph. What problem, who has it, why it matters, what success looks like. This is the section stakeholders read when they have 30 seconds. Make it count.

::: tip Writing a Good TL;DR
Write the TL;DR *last*, after all other sections are complete. Distil the entire brief into 3–4 sentences. If you can't summarise it in one paragraph, the initiative is probably too broad.
:::

#### 2. Business Context
Why does this initiative matter to the organisation? Connect it to company-level OKRs, revenue targets, or strategic pillars. This is the section that justifies the investment.

#### 3. Problem Statement
The falsifiable, quantified problem from Station 1. Include the persona, the pain, the root cause, and the measurable impact.

#### 4. Target Users
Named persona(s) with job-to-be-done, Experience Snapshot, and segment sizing. If multiple personas, state which one is primary for this initiative.

#### 5. In/Out of Scope
Two columns: what's included, what's explicitly excluded with a reason. Non-goals from Station 1 feed directly into the Out of Scope column.

#### 6. Solution Sketch
A high-level description of the chosen approach (from Station 4). Not a spec — enough detail for an engineer to estimate and a stakeholder to understand.

#### 7. Systems Involved
Which services, databases, APIs, and third-party integrations are touched? A simple architecture diagram (even a box-and-arrow sketch) is valuable here.

#### 8. API Contracts
For initiatives that involve new or modified APIs: request/response shapes, authentication requirements, error codes. This section prevents frontend/backend misalignment.

#### 9. Risks & Mitigations
The assumption register from Station 2, enriched with technical and business risks. Each risk has a mitigation strategy and an owner.

#### 10. Success Metrics
Leading and lagging indicators from Station 1, with current baseline, target, and measurement method.

#### 11. Story Mapping
The journey map and slice plan from Station 3. Link to the whiteboard and/or Confluence journey page. List Epics with their journey step coverage.

#### 12. BDD Scenario Coverage
Key Gherkin scenarios that validate the most critical acceptance criteria. These become the foundation for automated tests.

#### 13. Rollout Plan
How the feature reaches users: feature flags, canary rollout, % ramp, rollback triggers, data migration steps.

#### 14. Approval Signatures
Formal sign-off from required stakeholders before the initiative moves to development.

---

## The Template

Copy the template below into a new Confluence page inside your project space. Link a Jira Epic immediately — before writing anything else.

```markdown
# Initiative: [Name — problem-framed, not solution-framed]

**Status:** Backlog | Discovery In Progress | Discovery Drafting | Discovery Review
           | Ready for Approval | Approved | Ready for Dev
**Owner:** [Product Manager name]
**Epic link:** [Jira Epic ID]
**Created:** YYYY-MM-DD
**Last updated:** YYYY-MM-DD

---

## TL;DR
One paragraph. What problem, who has it, why it matters, what success looks like.

---

## 1. Business Context
How this connects to company OKRs or strategic pillars.

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
| Job-to-be-done | [Primary JTBD] |
| Current workaround | [How they solve this today] |
| Pain severity | [High / Medium / Low] |

### Experience Snapshot
[3–5 sentence day-in-the-life narrative]

---

## 4. In/Out of Scope

| In Scope ✅ | Out of Scope ❌ | Reason for exclusion |
|------------|----------------|---------------------|
| [Item] | [Item] | [Why] |

---

## 5. Solution Sketch
High-level description of the chosen approach.
[Link to ADR if applicable]

---

## 6. Systems Involved
| System | Role | Owner |
|--------|------|-------|
| [Service name] | [What it does in this initiative] | [Team/person] |

[Link to architecture diagram]

---

## 7. API Contracts (if applicable)
| Endpoint | Method | Request | Response | Auth |
|----------|--------|---------|----------|------|
| /api/... | GET | — | { ... } | Bearer token |

---

## 8. Risks & Mitigations
| Risk | Likelihood | Impact | Mitigation | Owner |
|------|-----------|--------|------------|-------|
| [Risk] | H/M/L | H/M/L | [Strategy] | @name |

### Assumption Register
| Assumption | Confidence | If wrong, impact | Verification method |
|-----------|-----------|-----------------|-------------------|
| [Assumption] | H/M/L | [Impact] | [How to verify] |

### Open Questions
- [ ] Question — Owner: @name — Due: YYYY-MM-DD

---

## 9. Success Metrics
| Signal | Type | Current | Target | Measurement | Review date |
|--------|------|---------|--------|-------------|-------------|
| [Metric] | Leading | [Baseline] | [Target] | [Tool/method] | Day 7 / Day 30 |

---

## 10. Story Mapping

### Journey Map
[Link to Confluence journey page or whiteboard]

### Epics
| Epic | Journey Steps | Slice | Status |
|------|--------------|-------|--------|
| E1: [Name] | J1–J4 | S1 | Ready |

### Slice Plan
| Slice | Scope | Out of scope | Sequencing rationale |
|-------|-------|-------------|---------------------|
| S1 (MVP) | [Scope] | [Exclusions] | [Why first] |

---

## 11. BDD Scenario Coverage
Key scenarios for the most critical flows:

| Scenario | Epic | Journey Step |
|----------|------|-------------|
| Given... When... Then... | E1 | J3 |

---

## 12. Rollout Plan
- **Feature flag:** [Flag name]
- **Canary %:** [Initial rollout %]
- **Ramp schedule:** [Timeline]
- **Rollback trigger:** [What causes rollback]
- **Data migration:** [If applicable]

---

## 13. Approval Signatures

| Role | Name | Decision | Date |
|------|------|----------|------|
| Product Owner | @name | ✅ Approved / ❌ Rejected | YYYY-MM-DD |
| Engineering Lead | @name | | |
| UX Lead | @name | | |
| Security Lead | @name | | |
| Data Lead | @name | | |
| Stakeholder | @name | | |

---

## Decision Log
| Date | Decision | Rationale | Decided by |
|------|----------|-----------|-----------|
| YYYY-MM-DD | [What changed] | [Why] | @name |
```

---

## The Jira Workflow for Initiatives

Initiatives move through a defined workflow in Jira. Each status has **entry criteria** (what must be true to enter) and **exit criteria** (what must be true to leave).

```
Backlog → Discovery In Progress → Discovery Drafting → Discovery Review
       → Ready for Approval → Approved → Ready for Dev
```

### Status Details

| Status | Entry Criteria | Exit Criteria | Who Moves It |
|--------|---------------|---------------|-------------|
| **Backlog** | Idea exists; someone logged it | PM triages: pursue or archive | PM |
| **Discovery In Progress** | PM decides to investigate; assigns discovery tasks to sprint | All Station 1–3 questions answered | PM |
| **Discovery Drafting** | Vision, problem, and journey mapped | Initiative Brief complete (all 14 sections drafted) | PM |
| **Discovery Review** | Brief is complete | Reviewers have provided feedback; all comments resolved | PM + Reviewers |
| **Ready for Approval** | All feedback incorporated; brief is final draft | Approval gate passed (see below) | PM |
| **Approved** | All required signatures obtained | Epics and stories are created in Jira with DoR met | PM + Eng Lead |
| **Ready for Dev** | Stories pass DoR; sprint capacity confirmed | Sprint planning pulls stories | Eng Lead |

::: warning Status ≠ Progress
Moving a Jira status is not the same as making progress. A brief that moves to "Discovery Drafting" without completing Station 1–3 will bounce back. Respect the entry criteria.
:::

---

## The Approval Gate

The approval gate is the formal checkpoint before an initiative moves from Upstream to Downstream. It ensures that the organisation is making an informed commitment.

### Who Must Sign Off

| Role | What They Validate |
|------|-------------------|
| **Product Owner** | Problem is real, solution is viable, priority is justified against backlog |
| **Engineering Lead** | Architecture is sound, estimates are realistic, team has capacity |
| **UX Lead** | Persona is validated, journey is realistic, visual direction is clear |
| **Security Lead** | No new attack surfaces, auth model is correct, data handling is compliant |
| **Data Lead** | Metrics are measurable with current instrumentation, no data gaps |
| **Stakeholder** | Business context is accurate, investment is justified, timeline is acceptable |

### Approval Rules

- **All signatures required** before moving to "Approved"
- A **rejection** from any signer returns the brief to "Discovery Review" with specific feedback
- Conditional approvals ("Approved if X is resolved by sprint start") are logged in the Decision Log
- Approval is **per-initiative**, not per-Epic or per-Story

::: tip Approval Is Not a Ceremony of Delay
When discovery is done well, approval should take 15–30 minutes. If approval meetings routinely take 2+ hours, it's a sign that discovery was incomplete — the approval gate is catching problems that should have been resolved at Stations 1–5.
:::

---

## Preparing the Brief During Sprints

Discovery work is real work. It belongs in sprints — not "on the side."

Teams that treat discovery as homework produce shallow briefs. Teams that allocate sprint capacity to discovery produce briefs that survive their first contact with development.

### Discovery Tasks in Sprints

| Sprint Task | Station | Typical Size | Output |
|-------------|---------|-------------|--------|
| Research user pain points (interviews, data analysis) | Station 1 | 3–5 hours | Persona + problem statement |
| Write TL;DR and business context | Station 1 | 1–2 hours | Brief sections 1–2 |
| Map user journey on whiteboard | Station 3 | 2–3 hours (session) | Journey map + whiteboard photo |
| Define slice plan (S1, S2, S3) | Station 3 | 1–2 hours | Brief section 10 |
| Map systems and draft API contracts | Station 4–5 | 3–5 hours | Brief sections 6–7 |
| Define success metrics and instrumentation plan | Station 1 | 1–2 hours | Brief section 9 |
| Write acceptance criteria for S1 stories | DoR prep | 2–3 hours | Stories with ACs |
| Run spike for technical unknowns | Station 4 | 2–5 days | Spike report, feasibility confirmed |

::: info Sprint Allocation Rule of Thumb
For a team running 2-week sprints, allocate **10–20% of capacity** (1–2 days per developer) to Upstream discovery tasks. This ensures a continuous pipeline of Ready stories. Teams that allocate zero sprint time to discovery eventually run out of Ready stories and pull unready work — the most expensive failure mode.
:::

---

## Filled Example: Pninei Halacha Foundation

::: details Click to expand full example

```markdown
# Initiative: Pninei Halacha — Calm Digital Reading Experience

**Status:** Approved
**Owner:** Rivka (Product Manager)
**Epic link:** PH-100
**Created:** 2024-11-15
**Last updated:** 2025-01-20

---

## TL;DR
Religious readers who study Pninei Halacha daily cannot do so comfortably on
mobile devices because the existing web edition lacks mobile formatting, offline
support, and bookmarking. This forces them to carry heavy physical volumes.
We will validate that a calm, multilingual, offline-first companion app delivers
real reading value — measured by average session length > 4 min within 14 days
and 5,000 monthly active readers within 6 months.

---

## 1. Business Context
Pninei Halacha is a foundational work of Jewish law with a growing digital
audience (mobile readership up 20% QoQ). Competing apps are emerging.
A quality mobile reading experience secures first-mover advantage, builds a
direct relationship with readers (vs. third-party web), and creates a
foundation for future features (audio, community, multi-language).

---

## 2. Problem Statement
Religious readers cannot study halacha on-the-go because the existing web
edition lacks mobile formatting, offline support, and bookmarking, which
results in readers abandoning digital study and carrying heavy physical
volumes instead.

---

## 3. Target Users

### Primary Persona
| Field | Detail |
|-------|--------|
| Name | Avi |
| Role | Religious reader, daily commuter |
| Job-to-be-done | Study halacha during 30-min bus commute |
| Current workaround | Carries physical volume; uses mobile browser (poor UX) |
| Pain severity | High |

### Experience Snapshot
It's 7:20 AM on a crowded bus. Avi pulls out his phone — the physical volume
is too heavy for his bag today. He opens the app, and it drops him exactly
where he left off yesterday. He reads for 25 minutes. When the bus enters a
tunnel and loses signal, nothing changes — the text is already cached.
He bookmarks a passage to discuss with his study partner tonight.

---

## 4. In/Out of Scope

| In Scope ✅ | Out of Scope ❌ | Reason |
|---|---|---|
| Mobile-optimised reader | Audio narration | Separate initiative |
| Offline content caching | Community features | Phase 2 |
| Reading position persistence | Multi-language support | Validate Hebrew first |
| Bookmarking | User-generated annotations | Separate initiative |
| Search across volumes | In-app purchases | Free app for Phase 1 |

---

## 5. Solution Sketch
Native-feel progressive web app (or lightweight native wrapper) with:
- Markdown-based content rendering optimised for mobile
- Service worker + IndexedDB for offline access
- Server-synced reading position and bookmarks
- Hebrew text rendering with proper nikud support

---

## 6. Systems Involved
| System | Role | Owner |
|--------|------|-------|
| Content API | Serves book/chapter content as structured markdown | Backend team |
| Reader Frontend | PWA rendering, offline storage, UX | Frontend team |
| Sync Service | Reading position + bookmark sync | Backend team |
| CDN | Static content delivery for offline pre-cache | DevOps |

---

## 8. Risks & Mitigations
| Risk | Likelihood | Impact | Mitigation | Owner |
|------|-----------|--------|------------|-------|
| Hebrew nikud rendering breaks on some Android devices | Medium | High | Test on 5 most common Android models before launch | QA Lead |
| Offline storage exceeds device limits for full library | Low | Medium | Cache only active + recently read volumes; lazy-load rest | Tech Lead |
| Service worker update breaks cached content | Medium | High | Versioned cache; fallback to network if cache corrupt | Tech Lead |

---

## 9. Success Metrics
| Signal | Type | Current | Target | Measurement |
|--------|------|---------|--------|-------------|
| Avg reading session duration | Leading | N/A (new app) | > 4 min | Analytics |
| Monthly active readers | Lagging | 0 | 5,000 | Analytics |
| Offline usage rate | Leading | N/A | > 30% of sessions | Service worker logs |

---

## 10. Story Mapping

### Epics
| Epic | Journey Steps | Slice |
|------|--------------|-------|
| E1: Onboarding | J1–J4 | S1 (partial), S2 |
| E2: Library & Search | J5–J6 | S2 |
| E3: Reader Experience | J7–J11 | S1 (core), S3 |
| E4: Feedback & Sharing | J12–J13 | S3 |

### Slice Plan
| Slice | Scope | Sequencing rationale |
|-------|-------|---------------------|
| S1 (MVP) | Install → read one volume → resume position | Proves core value: "can Avi read comfortably?" |
| S2 | Full library, search, reading preferences | Enables exploration and personalisation |
| S3 | Robust offline, bookmarks, sharing, feedback | Engagement and retention features |

---

## 13. Approval Signatures
| Role | Name | Decision | Date |
|------|------|----------|------|
| Product Owner | Rivka | ✅ Approved | 2025-01-18 |
| Engineering Lead | Dan | ✅ Approved | 2025-01-19 |
| UX Lead | Shira | ✅ Approved | 2025-01-18 |
| Security Lead | Amit | ✅ Approved (no auth in S1) | 2025-01-20 |
| Data Lead | Yael | ✅ Approved | 2025-01-19 |

---

## Decision Log
| Date | Decision | Rationale | Decided by |
|------|----------|-----------|-----------|
| 2024-12-01 | PWA over native app | Faster to ship; content-heavy app doesn't need native APIs | Dan, Rivka |
| 2025-01-05 | Hebrew-only for Phase 1 | 90% of current readers are Hebrew speakers; validate before translating | Rivka |
| 2025-01-10 | Service worker over AppCache | AppCache deprecated; SW gives better control over caching strategy | Dan |
```

:::

---

## Filling In the Brief — Common Questions

**Q: How long should it take to write?**
An Initiative Brief for a medium-sized initiative should take 2–4 focused hours, spread across 1–2 working days with async input from the team. If it's taking longer, the problem isn't clear enough yet.

**Q: When is the Brief "done"?**
When a stakeholder review has happened and the PM has marked status as `Ready for Approval`. From that point, scope changes require a logged decision.

**Q: What if things change mid-discovery?**
Update the Brief. Log what changed and why in the Decision Log section. A living Brief is healthy. An undocumented change is a risk.

**Q: What if we have a small feature, not a full initiative?**
Scale down. A small feature might only need sections 1–5 and 9–10 (TL;DR, Business Context, Problem, Users, Scope, Metrics, Story Map). Skip API Contracts, Systems, and BDD if they're overkill. The judgment call: if the feature spans more than one sprint or more than one team, use the full template.

**Q: Who writes the brief?**
The PM owns the document, but sections are collaborative. Engineering Lead drafts Systems Involved and API Contracts. UX Lead drafts the persona and visual direction. QA Lead reviews BDD scenarios. The PM stitches it together and drives it to approval.

---

<div style="display: flex; justify-content: space-between; margin-top: 2rem;">
  <a href="/upstream/discovery-backbone">← Discovery Backbone</a>
  <a href="/upstream/user-journey">User Journey Mapping →</a>
</div>
