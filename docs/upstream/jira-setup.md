# Jira Setup for the Discovery Spiral

<span class="phase-badge upstream">🔵 Upstream</span>

> **What this page covers:** How to configure Jira to reflect the three-loop Discovery Spiral — the right hierarchy, naming conventions, board views, and labels for each loop. This is not a Jira tutorial; it assumes you know the basics and need the UDOO-specific configuration.

---

## The Hierarchy in Jira

The UDOO hierarchy maps directly onto Jira's issue hierarchy:

| UDOO Level | Jira Type | Scope | Loop that creates it |
|---|---|---|---|
| **Initiative** | Epic (or Portfolio Epic, or Initiative if enabled) | Quarterly bet | Initiative Loop |
| **Feature** | Epic | 1–4 weeks of discovery | Initiative Loop (named), Feature Loop (specified) |
| **Epic** | Epic | 2–5 sprints of delivery | Feature Loop |
| **Story** | Story | 1–3 days | Epic Loop |
| **Subtask** | Subtask | Hours | During sprint |
| **Bug** | Bug | — | Reported anytime |
| **Tech Chore** | Task | — | Backlog at any time |

::: info Jira tier depends on your plan
If your Jira plan supports Portfolio/Program features, use the native hierarchy: Portfolio Epic → Epic → Story. If you're on a standard plan, use a flat-Epic model with a **label convention** to distinguish Initiatives, Features, and Epics. Both approaches are described below.
:::

---

## Option A — Flat Epic Model (Standard Jira)

Use a single Epic level for all three tiers. Distinguish them with a label prefix:

| Label | What it marks | Example |
|---|---|---|
| `udoo:initiative` | This Epic IS an Initiative | "Increase Day-30 Retention" |
| `udoo:feature` | This Epic IS a Feature | "Living Wondrously Journal" |
| `udoo:epic` | This Epic IS an Epic in the delivery sense | "E-LW-01 Entry Creation" |

**Parent–child links:**
- Feature Epic → linked to Initiative Epic via "is part of" (use Jira issue links or Epic link field)
- Delivery Epic → linked to Feature Epic via Epic Link field
- Stories → linked to Delivery Epic via Epic Link

**Custom field to add:** `Journey Steps` (text field) — used on Delivery Epics and Stories. Value: `J1–J4` or `J3`.

### Board Setup

Create one board per team (not per initiative). Configure board columns:

```
Backlog → Selected for Development → In Progress → In Review → Done
```

Use **Swimlanes by Epic** to group stories under their Delivery Epic.

Use the **Backlog** view for Epic Loop refinement sessions — drag stories from backlog into sprint during the E-7 DoR Readiness Check.

---

## Option B — Portfolio Hierarchy (Jira Advanced / Premium)

If your plan supports it, enable the full 4-level hierarchy:

```
Initiative (Portfolio level)
  └── Feature (Epic level, marked as Feature)
       └── Delivery Epic (Epic level, marked as Epic)
            └── Story
                 └── Subtask
```

Use Jira's **Plan** view to see the Initiative → Feature → Epic → Story chain in a timeline. This is the most powerful option but requires Advanced Roadmaps.

---

## Naming Conventions

Consistent naming makes the hierarchy readable at a glance.

### Initiatives

**Format:** `[Initiative] [Short goal description]`

```
[Initiative] Increase Day-30 Retention — Post-Content Users
[Initiative] Offline Reading — Pninei Halacha v2
[Initiative] Self-Service Onboarding — SMB Segment
```

### Features

**Format:** `[Feature] [Name]`

```
[Feature] Living Wondrously Journal
[Feature] Local Search Index
[Feature] Guided Onboarding Flow
```

### Delivery Epics

**Format:** `E-[PROJECT]-[NN]: [Value theme]`

```
E-LW-01: Entry Creation
E-LW-02: Past Entries
E-PH-01: Onboarding
E-PH-02: Library & Search
```

### Stories

**Format:** Plain language, user-perspective, verb-first.

```
Maya sees today's prompt when she opens the Journal
User can resume exact scroll position on reopen
Admin can export filtered billing report as CSV
```

No "As a user..." in the title — that goes in the description. The title should be the outcome, not the format.

---

## Labels and Custom Fields

### Labels to Configure

| Label | Applied to | Meaning |
|---|---|---|
| `s1` | Stories, Epics | Ships in first release of this Feature |
| `s2` | Stories, Epics | Ships in second release |
| `s3` | Stories, Epics | Deferred / future |
| `regret-skipped` | Epics | GOOD/NICE activity skipped with documented reason |
| `blocked` | Stories | Dependency not resolved — do not pull into sprint |
| `needs-dor` | Stories | Story in backlog that hasn't passed DoR check |
| `spike` | Tasks | Time-boxed investigation, not shippable code |

### Custom Fields to Add

| Field | Type | Applied to | Value |
|---|---|---|---|
| `Journey Steps` | Text | Epics, Stories | e.g., `J3–J5` or `J4` |
| `Loop` | Select | Epics | `Initiative`, `Feature`, `Delivery` |
| `Persona` | Text | Stories, Feature Epics | e.g., `Maya`, `Avi` |
| `DoR Status` | Select | Stories | `Not Checked`, `Partial`, `Ready` |
| `Slice` | Select | Stories, Epics | `S1`, `S2`, `S3` |

---

## Workflow per Loop

### Initiative Loop (2 weeks)

During the Initiative Loop, you are working above the story level. Jira is light here.

**Create:**
- One Initiative Epic
- One Feature Epic per Feature in the feature list (with one-line description, status: `Backlog`)

**Do not create:**
- Delivery Epics — too early
- Stories — far too early

**Use Confluence, not Jira, for:**
- Initiative Brief
- KPIs
- Experience Snapshot
- Assumption Register
- Feature prioritization (S1/S2/S3 groupings)

Jira's job in the Initiative Loop is to hold the named list of Features with their Slice label so the team can see what's in S1 vs. S2 at a glance.

---

### Feature Loop (1 week per Feature)

The Feature Loop produces the Delivery Epics and the Feature Slice.

**Create:**
- Delivery Epics for each Epic in this Feature (from F-5: Define Epics)
- Set `Journey Steps` on each Delivery Epic
- Set `Slice` (`s1`, `s2`, `s3`) on each Delivery Epic
- Link each Delivery Epic to its parent Feature Epic

**Do not create stories yet** — the Feature Loop produces Epic briefs, not stories. Stories come in the Epic Loop.

**Create a spike ticket** (Task, labelled `spike`) for any technical unknowns from F-8/F-9 that need investigation before the Epic Loop.

---

### Epic Loop (2–3 days per Epic)

The Epic Loop produces the DoR-ready stories.

**Create:**
- Stories for every step in the Epic
- Add `Journey Steps` field to each Story
- Add `Slice` label
- Add `Persona` field
- Set `DoR Status` to `Not Checked` initially → update to `Ready` after E-7

**Sprint planning:**
After all Stories in the Epic pass E-7, move them from Backlog → Selected for Development in the sprint planning session.

**Never drag a story into a sprint if `DoR Status` is not `Ready`.** This rule, enforced consistently, eliminates the most common source of sprint failures.

---

## The Epic Loop Board View

For Epic Loop refinement, use the Backlog view — not the sprint board. Configure a filter:

```jql
project = LW
AND issueType = Story
AND sprint is EMPTY
AND labels = "needs-dor"
ORDER BY epic ASC, created ASC
```

This shows all stories that haven't been DoR-checked, grouped by Epic. Work through them in the Three Amigos session (E-2 through E-5).

---

## Sample JQL Queries

```jql
-- All S1 stories not yet in a sprint
project = LW AND labels = s1 AND sprint is EMPTY AND issueType = Story

-- All stories missing Journey Steps
project = LW AND issueType = Story AND "Journey Steps" is EMPTY

-- Stories in current sprint that are blocked
project = LW AND sprint in openSprints() AND labels = blocked

-- DoR candidates: stories in backlog that need checking
project = LW AND issueType = Story AND sprint is EMPTY AND "DoR Status" = "Not Checked"
```

---

## When the Board Looks Wrong

If your Jira board looks like one of these, the loop structure is breaking down:

| What you see | What went wrong | Fix |
|---|---|---|
| Epics with no stories | Feature Loop produced Epics but Epic Loop hasn't run yet | Run the Epic Loop before pulling into sprint |
| Stories with no Epic link | Stories written outside the loop model | Assign to the correct Delivery Epic, add Journey Steps |
| 20+ stories in a single Epic | Epic is too large — it's actually a Feature | Split: create sub-Epics or a new Feature Epic |
| Stories in sprint with no AC | Epic Loop ended too early or was skipped | Block the story with `blocked` label; run E-4/E-5 before picking up |
| Initiative Epic with 50+ linked stories | Hierarchy not being used | Add Feature Epic layer between Initiative and Stories |

---

