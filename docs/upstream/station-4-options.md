# Station 4 — Solution Options

<span class="phase-badge upstream">🔵 Upstream</span>

## Purpose

Station 4 is where the team transitions from understanding the problem to **exploring how to solve it** — but with discipline. The cardinal rule of this station: **never commit to the first idea**. Always compare at least two viable approaches.

This is counterintuitive. When the problem is well understood (thanks to Stations 1–3), the "obvious" solution often appears self-evident. Why waste time exploring alternatives?

Because the first idea is usually the most familiar one, not the best one. Confirmation bias is strongest when the team feels confident. Station 4 exists to slow the team down just enough to make a deliberate choice — and to create a record of *why* one approach was chosen over others.

::: info The Research Behind Multiple Options
A study by Paul Nutt (Ohio State University) analysed 168 organisational decisions and found that teams who considered only one option had a 52% failure rate. Teams who compared two or more options reduced the failure rate to 32%. Exploring alternatives is not overhead — it is risk reduction.
:::

## Why Multiple Options Matter

| Benefit | Without Options | With 2–3 Options |
|---------|----------------|-------------------|
| **Bias reduction** | Team anchors on the first idea | Forced comparison surfaces trade-offs |
| **Team confidence** | "We went with the PM's idea" | "We evaluated three approaches and chose the best fit" |
| **Stakeholder trust** | "Why this approach?" → no answer | "Here's why we chose A over B and C" |
| **Risk visibility** | Risks discovered mid-sprint | Risks surfaced and compared before commitment |
| **Decision record** | No trace of reasoning | ADR provides a permanent record |

## The Options Template

For each option, document the following:

```
OPTION [A/B/C]: [Name — descriptive, not "Option 1"]
──────────────────────────────────────────────────────
Description:
  [What this approach does, in plain language. 2–3 sentences.]

Pros:
  - [Advantage 1]
  - [Advantage 2]

Cons:
  - [Disadvantage 1]
  - [Disadvantage 2]

Estimated effort:
  [S / M / L / XL — with rough sprint count]
  S = 1 sprint, M = 2–4 sprints, L = 1 quarter, XL = 2+ quarters

Risk level:
  [Low / Medium / High — with explanation]

Dependencies:
  - [What must exist or happen first]
  - [External teams, APIs, contracts, infrastructure]

Open questions:
  - [What we don't know yet about this option]
```

::: tip Naming Options
Give each option a descriptive name, not a letter. "Local Index Search" is memorable and discussable. "Option B" is not. When the team revisits the decision in six months, they'll remember names, not letters.
:::

## Real Example: Pninei Halacha Offline Search

The Pninei Halacha reading app needed a search feature for a library of 2,400+ halachic texts. During Station 2, the team identified that users need to find specific rulings quickly — often while offline (synagogues, study halls with poor connectivity).

The team explored three options:

### Option A: Server-Side Search

**Description:** All search queries are sent to the backend API, which performs a full-text search against a PostgreSQL database and returns results.

**Pros:**
- Simplest implementation — leverage existing infrastructure
- Index stays current automatically as content is updated
- No client-side storage overhead

**Cons:**
- Requires network connectivity — unusable offline
- Latency depends on connection quality (3G in some study halls)
- Hebrew text search with diacritics (nikud) requires specialised PostgreSQL configuration

**Effort:** S (1 sprint)
**Risk:** Medium — works online but fails the offline requirement entirely
**Dependencies:** Backend API team capacity; PostgreSQL Hebrew full-text config

---

### Option B: Naive Client-Side String Match

**Description:** Download all text content to the device and perform JavaScript `String.includes()` or regex matching on the client.

**Pros:**
- Works fully offline
- No backend changes required
- Simple to implement

**Cons:**
- Performance degrades with library size: 2,400 texts × average 5,000 words = unacceptable search time on mid-range devices
- No relevance ranking — results are unsorted
- Memory pressure on lower-end Android devices
- Hebrew diacritics complicate matching (צָפוֹן vs צפון)

**Effort:** S (1 sprint)
**Risk:** High — performance is likely unacceptable at scale
**Dependencies:** Content download/sync mechanism

---

### Option C: Local Search Index (Lunr/MiniSearch)

**Description:** Pre-build a search index from the content library. Ship the index as part of the app bundle (or download on first sync). Use a lightweight client-side search engine (MiniSearch or Lunr.js) to query the index offline.

**Pros:**
- Works fully offline
- Fast search even on mid-range devices (index lookup vs. full scan)
- Supports relevance ranking and partial matching
- Hebrew-aware tokenisation can be configured

**Cons:**
- Index must be rebuilt when content changes (build pipeline addition)
- Index adds ~2–4 MB to initial download
- Requires a spike to validate Hebrew tokenisation quality

**Effort:** M (2 sprints — 1 for indexing pipeline, 1 for search UI)
**Risk:** Medium — Hebrew tokenisation is the main unknown (spike needed)
**Dependencies:** Content team must provide structured export; build pipeline modification

---

The team selected **Option C** after a one-day spike confirmed that MiniSearch handled Hebrew text (with nikud stripped during indexing) at acceptable speed on a mid-range Android device. The decision was recorded in an ADR.

## Architecture Decision Records (ADRs)

Any solution choice with lasting architectural consequences requires a written decision record. ADRs are not design documents — they are **short, structured records of what was decided and why**.

### When to Write an ADR

Write an ADR when:
- The choice affects system structure (new service, changed data flow, new dependency)
- The choice is hard to reverse (database schema, API contract, auth mechanism)
- The team debated multiple approaches and needs a record of the reasoning
- A future developer will ask "why did we do it this way?"

Do *not* write an ADR for:
- UI copy changes
- Bug fixes with a single obvious approach
- Configuration changes that are trivially reversible

### MADR Template

The framework uses the [MADR](https://adr.github.io/madr/) (Markdown Any Decision Records) format:

```markdown
# ADR-NNN: [Short Title of the Decision]

**Date:** YYYY-MM-DD
**Status:** Proposed | Accepted | Deprecated | Superseded by ADR-XXX
**Deciders:** [Names of people involved in the decision]

## Context and Problem Statement

[What is the issue? Why does this decision need to be made now?
Include the relevant Station 2 findings.]

## Decision Drivers

- [Driver 1: e.g., must work offline]
- [Driver 2: e.g., performance on mid-range devices]
- [Driver 3: e.g., Hebrew text support]

## Considered Options

1. [Option A name]
2. [Option B name]
3. [Option C name]

## Decision Outcome

Chosen option: "[Option name]" because [justification].

### Positive Consequences

- [What becomes easier or better]

### Negative Consequences

- [What becomes harder or more complex]

## Pros and Cons of the Options

### [Option A name]
- ✅ [Pro]
- ❌ [Con]

### [Option B name]
- ✅ [Pro]
- ❌ [Con]

### [Option C name]
- ✅ [Pro]
- ❌ [Con]
```

### Real ADR Example: Analytics Layer

```markdown
# ADR-01: Retain Native Event Schema for Player

**Date:** 2024-11-15
**Status:** Accepted
**Deciders:** Tech Lead, Data Lead, Product Manager

## Context and Problem Statement

The LMS Analytics Layer must ingest behavioural events from
the video player component. The player emits events using
the xAPI (Experience API) schema — a verbose JSON-LD format
designed for learning record stores.

The analytics pipeline uses a flat event schema (event_name,
timestamp, user_id, properties{}). We must decide whether to
transform player events into the flat schema at ingestion, or
retain the native xAPI schema and transform at query time.

## Decision Drivers

- Query performance: dashboards must load in <2 seconds
- Data fidelity: xAPI events contain pedagogical metadata
  (verb, object, result) that flat events lose
- Pipeline complexity: fewer transformation steps = fewer bugs
- Future extensibility: other xAPI-emitting tools may be added

## Considered Options

1. Transform at ingestion (flatten xAPI → flat schema)
2. Retain native xAPI and transform at query time
3. Dual-write: store both formats

## Decision Outcome

Chosen option: "Retain native xAPI schema" because it
preserves pedagogical metadata that product and data teams
need for learning-outcome analysis. Query-time transformation
is acceptable given current data volumes (<500k events/day).

### Positive Consequences

- Full xAPI metadata available for learning analytics
- No lossy transformation at ingestion
- New xAPI sources plug in without pipeline changes

### Negative Consequences

- Query-time transformation adds ~200ms to dashboard loads
- Dashboard SQL is more complex (JSON path extraction)
- If event volume exceeds 5M/day, query performance
  must be re-evaluated (add materialised views)
```

::: details Why ADRs Are Worth the Effort
ADRs take 15–30 minutes to write. They save hours of "why did we do this?" conversations months later. They also protect the team: when a stakeholder asks "why didn't you do X?", the ADR shows that X was considered and rejected for documented reasons. Without an ADR, the team must reconstruct the reasoning from memory — which is unreliable and politically risky.
:::

## Spikes

A spike is a **time-boxed investigation** to reduce uncertainty about a specific technical question. Spikes are not features — they produce knowledge, not shippable code.

### Spike Rules

| Rule | Rationale |
|------|-----------|
| **Time-box: 1–2 days maximum** | If you can't answer the question in 2 days, the question is too broad. Split it. |
| **Define the question before starting** | "Investigate search options" is not a spike. "Can MiniSearch handle Hebrew text with nikud at <100ms on a Snapdragon 665?" is a spike. |
| **Output is a written finding, not code** | The spike may produce prototype code, but the deliverable is a document: "We tested X. Result: Y. Recommendation: Z." |
| **One spike per unknown** | Don't bundle multiple questions into a single spike. Each question gets its own time-box. |
| **Spike results feed the ADR** | The spike's finding is evidence that supports the decision. Reference it in the ADR. |

### Spike Output Template

```
SPIKE REPORT
────────────
Question:    Can MiniSearch index 2,400 Hebrew texts and return
             results in <100ms on a mid-range Android device?
Time spent:  1 day (6 hours)
Approach:    Built a prototype with MiniSearch 6.x. Indexed a
             sample of 500 texts (representative length and
             nikud density). Tested on a Xiaomi Redmi Note 10
             (Snapdragon 678, 4GB RAM).
Result:      Index build time: 4.2 seconds (one-time, at sync).
             Index size: 1.8 MB (for 500 texts; projected 8 MB
             for full library).
             Search latency: 12–45ms for single-word queries,
             80–120ms for phrase queries.
             Hebrew with nikud: works after stripping diacritics
             during indexing. Exact nikud match is not supported.
Recommendation: MiniSearch is viable. Proceed with Option C.
             Plan for nikud stripping in the indexing pipeline.
Risks:       Full library index size (~8 MB) may be large for
             initial app download. Consider lazy-loading the
             index after first sync.
```

## Tradeoff Analysis

When comparing options, a subjective "pros and cons" list is a starting point — but for significant decisions, use a structured tradeoff analysis against **quality attributes**.

### Quality Attribute Comparison

| Quality Attribute | Option A (Server) | Option B (Naive Client) | Option C (Local Index) |
|-------------------|:-:|:-:|:-:|
| **Performance** | ⚠️ Depends on network | ❌ Degrades at scale | ✅ Fast (<100ms) |
| **Offline capability** | ❌ None | ✅ Full | ✅ Full |
| **Maintenance cost** | ✅ Low | ✅ Low | ⚠️ Medium (index pipeline) |
| **User experience** | ⚠️ Variable latency | ❌ No ranking | ✅ Ranked results |
| **Risk** | ⚠️ Fails core requirement | ❌ Performance risk | ⚠️ Hebrew tokenisation (mitigated by spike) |
| **Effort** | ✅ 1 sprint | ✅ 1 sprint | ⚠️ 2 sprints |

This format makes trade-offs visible and discussable. It prevents the loudest person from winning the argument by forcing the conversation onto evidence.

::: tip Weighted Scoring
For high-stakes decisions, assign weights to quality attributes based on the initiative's priorities. If offline capability is a hard requirement (weight: 5), even a perfect server-side solution scores zero. This prevents the team from being swayed by an option that excels on unimportant dimensions.
:::

## Non-Functional Requirements

Station 4 is the right time to make non-functional requirements (NFRs) explicit. These are the "ilities" — the quality characteristics that users experience but rarely articulate.

| NFR | Question to Answer | Example Budget |
|-----|--------------------|---------------|
| **Performance** | How fast must it be? Under what conditions? | Search results in <200ms on 3G |
| **Reliability** | What is the acceptable failure rate? | 99.5% uptime for search; graceful degradation if index is unavailable |
| **Accessibility** | What WCAG level? Which assistive technologies? | WCAG 2.1 AA; screen reader support for search results |
| **Privacy** | What data is collected? Where is it stored? Who can access it? | Search queries are not logged; no PII in analytics events |
| **Scalability** | What growth must the solution handle? | Support 10× current content library without architecture change |
| **Localisability** | What languages? What text directions? | Hebrew (RTL), English (LTR); UI must support both |

NFRs should be captured as acceptance criteria on the relevant stories — not in a separate document that nobody reads.

## C4 Model: Diagrams at the Right Level

Station 4 often requires architectural diagrams. The C4 model provides a consistent vocabulary:

| Level | Shows | When to Use in Station 4 |
|-------|-------|-------------------------|
| **Context** (Level 1) | System boundaries, external actors, integrations | Always — shows where the solution sits in the landscape |
| **Container** (Level 2) | Applications, data stores, message queues | When the solution spans multiple deployable units |
| **Component** (Level 3) | Internal structure of a single container | When the team needs to discuss internal design (e.g., search indexing pipeline) |
| **Code** (Level 4) | Class/module level | Rarely in Station 4 — this level belongs in Downstream |

::: tip Keep Diagrams Simple
The purpose of a Station 4 diagram is to support a decision, not to document the system comprehensively. A Context diagram with five boxes and four arrows is more useful than a Component diagram with forty classes. If the diagram takes more than 20 minutes to draw, it's too detailed for this stage.
:::

## Station 4 Output Checklist

By the end of Station 4, you should have:

- [ ] **2–3 solution options** documented using the options template
- [ ] **Tradeoff analysis** comparing options against quality attributes
- [ ] **ADR(s)** for any decisions with lasting architectural impact
- [ ] **Spike report(s)** for technical unknowns that were investigated
- [ ] **Non-functional requirements** defined with measurable budgets
- [ ] **Architecture diagram** (C4 Context level minimum) showing system boundaries
- [ ] **Recommendation** — which option the team recommends and why (decision is formalised in Station 5)

Write these into the **Solution Options** section of the Initiative Brief.

## Anti-Pattern: The Foregone Conclusion

This is when the team "explores options" but the decision was already made before the exploration started. The options are presented as straw men — obviously inferior alternatives designed to make the preferred option look good.

**How to spot it:**
- Option A has five pros and no cons. Options B and C have no pros and five cons each.
- The effort estimate for Option A is "S" while B and C are "XL" (conveniently).
- The spike was only run for Option A.
- Someone says "we all know we're going with A, but we need to document alternatives."

**Why it's harmful:** Foregone conclusions undermine trust. Team members who see the pattern stop engaging in future option discussions — "why bother, the decision is already made." It also produces brittle ADRs: when the chosen approach fails, the team has no real alternatives to fall back on because the alternatives were never genuinely explored.

**What to do instead:** Assign different team members to champion different options. The person advocating for Option B should genuinely try to make Option B look compelling. If, after genuine exploration, one option is clearly superior, that's a legitimate outcome — but it must be earned through honest comparison.

::: warning The "Consensus" Trap
Consensus is not the same as agreement. If everyone immediately agrees on one option with no debate, either the decision is trivial (and doesn't need Station 4) or dissenting views are being suppressed. Healthy option exploration involves disagreement. If the room is too quiet, the facilitator should explicitly ask: *"Who can make a case for Option B?"*
:::

---

[← Station 3 — User Journey & Slices](/upstream/station-3-journey) · [Station 5 — Decision & Scope →](/upstream/station-5-decision)
