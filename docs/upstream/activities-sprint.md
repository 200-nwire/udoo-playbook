# Initiative Activities — Initiative Discovery

<span class="phase-badge upstream">🔵 Upstream</span>

> **Where this fits:** This is the first level of [Initiative Discovery](/upstream/spiral-model) — a 2-week sprint where the PM and Core Trio (PM, Designer, Tech Lead) run the 5-station Discovery Workshop at initiative scope. Its output — an approved Initiative Brief and a prioritized Feature list — feeds directly into Feature Discovery for each Feature.

---

## The Moment This Page Is For

The initiative just got approved. Stakeholders said yes. There's excitement. Someone opens Jira and starts creating epics. Another person starts writing stories. A developer begins an architecture diagram.

Nobody has written down who the primary user is. Nobody has agreed on what S1 looks like. Nobody has asked whether the three features being discussed are actually distinct features or one large one with different modes.

Two weeks later, the team reconvenes. The developer's architecture assumes Feature A is an admin tool. The PM assumed it was user-facing. The stakeholder who approved the initiative had a third interpretation entirely.

Initiative Discovery exists to answer five questions before anyone opens a code editor or a Figma file:
1. Who is the primary user, and what is their actual pain?
2. What does success look like, in measurable terms?
3. What are the 3–6 features that make up this initiative?
4. What ships in S1 — and what explicitly does not?
5. Do the stakeholders agree with all of the above?

When those five questions are answered and documented, the initiative is ready to enter Feature Discovery.

---

::: tip Station deep-dives for this loop
The 5 Discovery Stations are detailed question guides that go deeper than the activity descriptions below. For this loop, the most relevant are:
- **[Station 1 — Vision & Context](/upstream/station-1-vision)** → feeds I-1, I-2, I-5, I-6
- **[Station 2 — Problem Framing](/upstream/station-2-problem)** → feeds I-3, I-4, I-8
- **[Station 5 — Decision & Scope](/upstream/station-5-decision)** → feeds I-9, I-10
:::

::: info If you need the short version
Four things must happen before this loop ends:
1. **Initiative Brief** — one page on the problem, the user, and why now (I-1)
2. **Experience Snapshot** — 150 words, a named person in a specific moment (I-6)
3. **Stakeholder sign-off** — agreement on the problem before you name any features (I-7)
4. **Feature List with S1 line** — what ships first, confirmed by stakeholder (I-9, I-10)

Everything else in this loop deepens those four. Read the activities as reference when you're working on a specific one — not as a sequential checklist to complete top to bottom.
:::

## The 10 Initiative Activities

Activities are organized into three phases. Each activity is marked:

- **MUST** — required to proceed. No exceptions.
- **GOOD** — significantly reduces risk. Strongly recommended.
- **NICE** — future-proofing. Do when capacity allows.

---

### Phase 1: Frame the Problem

> *Who are we building for, and what is the real problem? Answers here determine everything downstream.*

---

**[I-1] Create Initiative Brief** — MUST

The single document that anchors the initiative. Everything else in the loop traces back to it.

- **Output:** Confluence Initiative Brief with: problem statement, primary persona, success signals, what is explicitly out of scope, and the business context that justifies the investment
- **Who:** PM
- **Done when:** Any team member can read it in 5 minutes and explain the initiative accurately to someone who wasn't in the room

::: tip Write the TL;DR last
The Initiative Brief has 14 sections. Fill them in as you learn. Write the one-paragraph TL;DR last, after you've completed the rest — it forces you to distil, not decorate.
:::

---

**[I-2] Define Success Metrics (KPIs)** — MUST

You cannot evaluate whether the initiative worked if you didn't decide in advance how you'd know.

- **Output:** 2–4 KPIs with baseline, target, and measurement method. At least one leading indicator (measures behaviour during the initiative) and one lagging indicator (measures impact after).
- **Who:** PM + stakeholder
- **Done when:** Every KPI has a data source. "We'll figure out how to measure it later" is not a KPI — it's a guess.

---

**[I-3] User Research / Customer Interviews** — GOOD

Even three conversations with real users will change the direction.

- **Output:** Research notes + key quotes + pattern summary (Confluence or shared doc). Top 3 pain points with verbatim quotes.
- **Who:** PM + UX Designer
- **Done when:** At least 3 users or customers interviewed. The findings inform at least one decision in the initiative brief.

---

**[I-4] Market / Competitive Review** — NICE

Understand what already exists before designing from scratch.

- **Output:** Comparative table — 3–5 alternatives (competitors or internal tools), what each does well, and where the gap is.
- **Who:** PM
- **Done when:** At least one "we won't do X because Y already does it better" decision has been made and documented.

---

**[I-5] Write Problem Statement + Hypothesis** — MUST

Forces clarity. A vague problem statement is the first symptom of a team that will build the wrong thing.

- **Output:** One-sentence problem statement + hypothesis in the format: "We believe [action] will produce [outcome] for [persona]."
- **Who:** PM
- **Done when:** The Tech Lead and QA Lead can both explain the hypothesis without looking at the document. If they can't, it isn't clear enough yet.

---

### Phase 2: Align the Team

> *The problem is framed. Now bring the people who need to agree into the same room — before anyone starts building.*

---

**[I-6] Primary Experience Snapshot** — MUST

The 150-word day-in-the-life narrative for the primary user. Named. Present-tense. Specific moment, specific pain, specific gap.

This is the most human artifact the initiative produces. It is the reference point for every Feature Brief that follows. See [Experience Snapshot](/upstream/experience-snapshot) for the full format.

- **Output:** Experience Snapshot (≥150 words) — linked from the Initiative Brief
- **Who:** PM + UX Designer
- **Done when:** The snapshot names a person, places them in a specific moment, describes their feeling, and names the gap that the initiative addresses. Reading it should make someone nod.

---

**[I-7] Stakeholder Alignment Session** — MUST

Alignment at Day 5 costs nothing. Misalignment discovered at Day 10 costs a sprint.

- **Output:** Session notes, action items, documented disagreements and their resolutions
- **Who:** PM + all decision-making stakeholders
- **Done when:** Stakeholders have confirmed the problem framing, the success metrics, and the proposed scope. Any objections are written down and addressed — not deferred.

::: warning Do this before writing any features
The most common alignment session mistake: presenting a Feature list for approval before the stakeholders have confirmed they agree on the *problem*. Agree on the problem first. Features come last in this phase.
:::

---

**[I-8] Assumption Log** — GOOD

Every initiative runs on assumptions. Write them down. Rank them by risk. Assign owners to the highest-risk ones.

- **Output:** Assumption Register — list of assumptions with risk level (high / medium / low) and validation method
- **Who:** PM + Tech Lead
- **Done when:** The top 3 highest-risk assumptions have explicit validation plans — a spike, a user test, or a data pull. Not "we think this is fine."

---

### Phase 3: Shape the Scope

> *The team is aligned. Now draw the lines: what features make up this initiative, and what ships first?*

---

**[I-9] Define the Feature List** — MUST

Name each feature that makes up the initiative. A Feature is a distinct user capability — something a user can do that they couldn't do before. Features are not technical components. They are not task lists. They are user outcomes.

- **Output:** Named Feature list (3–6 features for most initiatives) — each with a one-line description and an assigned Experience Snapshot seed (who uses it, what they're doing)
- **Who:** PM + Tech Lead
- **Done when:** Any team member can name the features in S1, describe who uses each one, and explain what makes each one distinct from the others. No two features on the list should overlap in what they let the user do.

::: details How to identify features
Start from the Initiative Brief's problem statement. Ask: "What capabilities does the user need to solve this problem?" Each capability is a Feature. Then gut-check: can each feature ship independently and deliver value without the others? If not, it's probably an Epic inside a larger Feature, not a Feature itself.
:::

---

**[I-10] Feature Prioritization (S1 / S2 / S3)** — MUST

Not all features ship at once. This activity draws the line.

- **Output:** Features grouped into S1 (ships first and must deliver value independently), S2 (second release), and S3 (future / deferred). Rationale documented for each grouping.
- **Who:** PM + stakeholder
- **Done when:** S1 features can each be described in one sentence. The Tech Lead confirms each S1 feature is buildable within the sprint capacity. The stakeholder confirms S1 is valuable without S2.

---

## The 2-Week Initiative Sprint Calendar

```
WEEK 1: FRAME IT
─────────────────────────────────────────────────────────

Monday (Day 1) — Kickoff
  ├── I-1: Draft Initiative Brief (or review if exists)
  └── I-7: Stakeholder kickoff — confirm problem framing

Tuesday (Day 2) — Research
  ├── I-3: User research synthesis (if done async)
  ├── I-4: Competitive review (if applicable)
  └── Start I-5: Problem statement draft

Wednesday (Day 3) — Frame It
  ├── I-5: Problem statement + hypothesis (finalize)
  ├── I-6: Experience Snapshot (first draft with UX)
  └── I-2: KPI discussion begins

Thursday (Day 4) — Align Internally
  ├── I-6: Experience Snapshot finalized
  ├── I-2: KPIs finalized with measurement methods
  └── I-8: Assumption Log (30 min session with Tech Lead)

Friday (Day 5) — Stakeholder Alignment
  ├── I-7: Full stakeholder alignment session
  └── Adjust brief based on session outputs

WEEK 2: SCOPE IT
─────────────────────────────────────────────────────────

Monday (Day 6) — Feature Thinking
  └── I-9: Draft Feature List (PM + Tech Lead, 90 min)

Tuesday (Day 7) — Feature Review
  ├── I-9: Feature List reviewed with UX and QA Lead
  └── Gaps: which features need more research before Feature Discovery?

Wednesday (Day 8) — Prioritize
  ├── I-10: Feature prioritization with stakeholder (S1/S2/S3)
  └── Document rationale for all groupings

Thursday (Day 9) — Final Review
  ├── I-9: Feature List finalized — Experience Snapshot seed per feature
  ├── I-7b: Quick stakeholder sign-off on S1 scope
  └── Initiative Brief updated with final scope

Friday (Day 10) — Handoff
  ├── Initiative Brief frozen (any changes now require a decision log entry)
  ├── Feature Discovery scheduled — which features enter Feature Discovery first?
  └── Retro: what helped, what hurt, what to improve
```

---

## Per-Role Guide

### Product Manager — The Owner
You own this sprint. Every activity either starts with you or requires your decision.

**Your activities:** I-1, I-2, I-3, I-4, I-5, I-6, I-7, I-8, I-9, I-10
**Key rule:** If only you understand the initiative at Day 10, the sprint failed — regardless of how many activities are marked done. Understanding must transfer.

---

### UX Designer — The Human Translator
Your job in Initiative Discovery is narrower than in Feature Discovery. You focus on the persona and the snapshot.

**Your activities:** I-3 (co-lead), I-6 (owner)
**Key rule:** The Experience Snapshot must be specific enough to design from. "A busy professional who wants to stay organized" is not specific. "Maya, a 34-year-old team lead at a 12-person agency who rebuilds her weekly status update from scratch every Monday morning" is.

---

### Tech Lead — The Reality Check
Your job here is to confirm feasibility at the initiative level — not the story level. You're asking "can we build features of this scope with this team?" not "can we build this specific API endpoint?"

**Your activities:** I-8 (co-lead), I-9 (co-author), I-10 (confirmer)
**Key rule:** If any S1 feature is architecturally impossible or will require 3× the estimated capacity, say so now — in Initiative Discovery. Not mid-sprint, not at the sprint review.

---

### QA Lead — The Testability Signal
Your presence in Initiative Discovery is light — but one question from you is worth hours of PM thinking.

**Your activities:** I-7 (participant), I-8 (participant)
**Key question:** "How will we know if each KPI is actually moving?" Ask it during the stakeholder alignment session. If the answer is vague, the measurement plan is broken.

---

## Non-Negotiables

If these activities are incomplete at Day 10, the initiative is not ready to enter Feature Discovery:

```
✓ I-1: Initiative Brief exists and is readable
✓ I-2: KPIs have baselines, targets, and data sources
✓ I-5: Problem statement is one sentence; hypothesis is testable
✓ I-6: Experience Snapshot has a name, a moment, and a gap
✓ I-7: Stakeholder sign-off on the problem and S1 scope
✓ I-9: Feature List is named, described, and distinct
✓ I-10: S1 / S2 / S3 groupings are documented with rationale
```

GOOD and NICE activities (I-3, I-4, I-8) can be skipped with a documented reason — mark as Regret in Jira and note what you're assuming instead.

---

## Handoff to Feature Discovery

At Day 10, the PM hands off to Feature Discovery. Each S1 Feature enters its own Feature Discovery — in parallel if capacity allows, or sequentially if the team is small.

The handoff package for each Feature:
- Link to the Initiative Brief (frozen)
- Feature name and one-line description
- Experience Snapshot seed (who uses it, what they're trying to do)
- S1 confirmation (this feature ships first)
- Any known constraints or dependencies from the Assumption Log

A Feature Discovery that starts without this package will spend its first two days reconstructing context that should have been produced in Initiative Discovery.

---

