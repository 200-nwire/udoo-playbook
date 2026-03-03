# Epic Template

Copy this template into Jira when creating a new Epic. An Epic is a cohesive experience room — a cluster of stories that together deliver a meaningful part of a Feature's journey.

::: info Hierarchy reminder
**Initiative** (Confluence) → **Feature** (Confluence) → **Epic** (Jira) → **Story** (Jira)

An Epic lives in Jira and links upward to a Feature page in Confluence. Every Epic must have this linkage — orphan Epics with no business context cannot be prioritised or retired intelligently.
:::

---

## Epic Title Format

Use this naming convention for consistency:

```
[Product/Area] Verb-phrase describing the experience room
```

**Examples:**
- `[Pninei Halacha] Library Discovery and Browse Experience`
- `[Living Wondrously] Entry Creation and Prompt Flow`
- `[Someone for Coffee] Profile Setup and Preference Matching`
- `[Analytics Layer] Dashboard Data Pipeline Reliability`

::: tip Title rules
- Start with the product or area in brackets
- Use a verb-phrase that describes what the user experiences, not what the developer builds
- Avoid technical jargon in the title — save that for the description
- Keep it under 80 characters
:::

---

## Template

```
Epic Title: [Product/Area] Verb-phrase describing the experience room

─────────────────────────────────────────────────────────────────
GOAL
─────────────────────────────────────────────────────────────────
What is the outcome this Epic delivers? Write one paragraph that 
a stakeholder could read and understand the value.

─────────────────────────────────────────────────────────────────
LINKED INITIATIVE
─────────────────────────────────────────────────────────────────
Initiative: [Name + Confluence link]
Feature:    [Name + Confluence link]

─────────────────────────────────────────────────────────────────
ASSIGNED PM
─────────────────────────────────────────────────────────────────
Product Manager: [Name]
Tech Lead:       [Name]

─────────────────────────────────────────────────────────────────
TARGET RELEASE
─────────────────────────────────────────────────────────────────
Target Sprint/Release: [Sprint number or release version]
Hard deadline (if any): [Date and reason, or "None"]

─────────────────────────────────────────────────────────────────
USER JOURNEY COVERAGE
─────────────────────────────────────────────────────────────────
This Epic covers the following journey steps:

J[#] — [Step description]
J[#] — [Step description]
J[#] — [Step description]

See journey map: [link]

─────────────────────────────────────────────────────────────────
STORIES INCLUDED
─────────────────────────────────────────────────────────────────
| # | Story Title | Status | Points |
|---|-------------|--------|--------|
| 1 | [Story title] | [Ready / In Progress / Done] | [pts] |
| 2 | [Story title] | [Ready / In Progress / Done] | [pts] |
| 3 | [Story title] | [Ready / In Progress / Done] | [pts] |

Total stories: [count]
Total points:  [sum]

─────────────────────────────────────────────────────────────────
DEPENDENCIES
─────────────────────────────────────────────────────────────────
| Dependency | Owner | Status | Risk if Delayed |
|-----------|-------|--------|-----------------|
| [What we depend on] | [Team/Person] | [Met / In Progress / At Risk] | [Impact] |

─────────────────────────────────────────────────────────────────
SUCCESS METRICS
─────────────────────────────────────────────────────────────────
How will we know this Epic succeeded? List 2-4 measurable outcomes.

1. [Metric]: from [baseline] to [target] within [timeframe]
2. [Metric]: from [baseline] to [target] within [timeframe]

─────────────────────────────────────────────────────────────────
OUT OF SCOPE
─────────────────────────────────────────────────────────────────
Explicitly NOT included in this Epic:
- [Item 1 — and where it will be addressed, if known]
- [Item 2]

─────────────────────────────────────────────────────────────────
RISKS & OPEN QUESTIONS
─────────────────────────────────────────────────────────────────
| Risk / Question | Owner | Due Date | Status |
|----------------|-------|----------|--------|
| [Risk or question] | [Name] | [Date] | [Open / Resolved] |

─────────────────────────────────────────────────────────────────
LINKS
─────────────────────────────────────────────────────────────────
Initiative Brief:  [Confluence link]
Feature Page:      [Confluence link]
Journey Map:       [link]
Design / Figma:    [link]
ADRs:              [links]
```

---

## Required Fields Summary

Before an Epic is considered valid in Jira, these fields must be populated:

| Field | Required? | Notes |
|-------|-----------|-------|
| Title | Yes | Follows `[Product/Area] Verb-phrase` format |
| Goal | Yes | One paragraph, stakeholder-readable |
| Linked Initiative | Yes | Confluence link to parent Initiative |
| Linked Feature | Yes | Confluence link to parent Feature |
| Assigned PM | Yes | Named individual |
| Target Release | Yes | Sprint number or release version |
| Journey Coverage | Yes | At least one journey step |
| Stories | Yes | At least one story linked |
| Success Metrics | Yes | At least two measurable outcomes |
| Out of Scope | Recommended | Prevents scope creep |
| Dependencies | If applicable | Required if cross-team work exists |

::: warning Orphan Epic check
An Epic without a linked Feature page violates [Non-Negotiable #2](/reference/non-negotiables#rule-1). During Sprint Planning, the PM verifies that every candidate Epic has its Feature linkage. Orphan Epics are sent back to Upstream.
:::

---

## Worked Example 1 — Pninei Halacha: Library Discovery

```
Epic Title: [Pninei Halacha] Library Discovery and Browse Experience

─────────────────────────────────────────────────────────────────
GOAL
─────────────────────────────────────────────────────────────────
Enable users to discover and browse the full Pninei Halacha library 
through an intuitive category-based navigation experience. Users 
should be able to find any book or chapter within 3 taps from the 
home screen, with clear visual hierarchy reflecting the halachic 
topic structure.

─────────────────────────────────────────────────────────────────
LINKED INITIATIVE
─────────────────────────────────────────────────────────────────
Initiative: "Make Pninei Halacha the go-to digital halacha reference"
            [Confluence: /initiatives/PH-2025-01]
Feature:    "Library Browse & Discovery"
            [Confluence: /features/PH-LIB-01]

─────────────────────────────────────────────────────────────────
ASSIGNED PM
─────────────────────────────────────────────────────────────────
Product Manager: Sarah K.
Tech Lead:       Avi M.

─────────────────────────────────────────────────────────────────
TARGET RELEASE
─────────────────────────────────────────────────────────────────
Target Sprint/Release: Sprint 8 (v1.2.0)
Hard deadline: None (quality over speed for first library experience)

─────────────────────────────────────────────────────────────────
USER JOURNEY COVERAGE
─────────────────────────────────────────────────────────────────
This Epic covers the following journey steps:

J1 — User opens the app and sees the home screen
J2 — User browses the library by halachic category
J3 — User selects a book within a category
J4 — User navigates to a specific chapter

See journey map: [Confluence: /journeys/PH-library-browse]

─────────────────────────────────────────────────────────────────
STORIES INCLUDED
─────────────────────────────────────────────────────────────────
| # | Story Title | Status | Points |
|---|-------------|--------|--------|
| 1 | User sees halachic categories on home screen | Ready | 3 |
| 2 | User browses books within a selected category | Ready | 5 |
| 3 | User views chapter list for a selected book | Ready | 3 |
| 4 | User sees "recently viewed" section on home screen | Ready | 3 |
| 5 | User searches library by keyword | In Progress | 8 |
| 6 | App displays empty state when category has no content | Ready | 2 |
| 7 | App handles offline library browse gracefully | Ready | 5 |

Total stories: 7
Total points:  29

─────────────────────────────────────────────────────────────────
DEPENDENCIES
─────────────────────────────────────────────────────────────────
| Dependency | Owner | Status | Risk if Delayed |
|-----------|-------|--------|-----------------|
| Content API with category taxonomy | Backend team | Met | Blocks stories 1-4 |
| Search index for halachic terms | Data team | In Progress | Blocks story 5 |
| Offline storage framework | Mobile team | Met | Blocks story 7 |

─────────────────────────────────────────────────────────────────
SUCCESS METRICS
─────────────────────────────────────────────────────────────────
1. Library browse adoption: 0% to 60% of weekly active users 
   within 4 weeks of release
2. Time to find a chapter: under 30 seconds (measured via analytics)
3. Support tickets about "can't find content": reduce from 
   ~45/month to <10/month within 8 weeks
4. Category browse completion rate (J2→J4): >70%

─────────────────────────────────────────────────────────────────
OUT OF SCOPE
─────────────────────────────────────────────────────────────────
- Bookmarking and favourites (separate Epic: PH-FAV-01)
- Social sharing of chapters
- Content recommendations engine
- Multi-language support (separate Initiative)

─────────────────────────────────────────────────────────────────
RISKS & OPEN QUESTIONS
─────────────────────────────────────────────────────────────────
| Risk / Question | Owner | Due Date | Status |
|----------------|-------|----------|--------|
| Category taxonomy may change after content team review | Sarah K. | Sprint 7 | Open |
| Search relevance for Hebrew diacritics (nikud) | Avi M. | Sprint 7 | Open |
| Offline storage size limits on older devices | Avi M. | Sprint 7 | Resolved — 50MB cap agreed |

─────────────────────────────────────────────────────────────────
LINKS
─────────────────────────────────────────────────────────────────
Initiative Brief:  [Confluence: /initiatives/PH-2025-01]
Feature Page:      [Confluence: /features/PH-LIB-01]
Journey Map:       [Confluence: /journeys/PH-library-browse]
Design / Figma:    [Figma: PH Library Browse v3]
ADRs:              [ADR-041: Category taxonomy structure]
                   [ADR-042: Offline storage approach]
```

---

## Worked Example 2 — Living Wondrously: Entry Creation & Prompt Flow

```
Epic Title: [Living Wondrously] Entry Creation and Prompt Flow

─────────────────────────────────────────────────────────────────
GOAL
─────────────────────────────────────────────────────────────────
Deliver the core journal entry creation experience for Living 
Wondrously (Momentum). Users should be able to create a daily 
journal entry guided by a rotating prompt, write their reflection, 
and save it to their personal timeline. The experience should feel 
contemplative and unhurried — the opposite of a productivity tool.

─────────────────────────────────────────────────────────────────
LINKED INITIATIVE
─────────────────────────────────────────────────────────────────
Initiative: "Build a daily reflection habit for personal growth"
            [Confluence: /initiatives/LW-2025-02]
Feature:    "Guided Journal Entry"
            [Confluence: /features/LW-ENTRY-01]

─────────────────────────────────────────────────────────────────
ASSIGNED PM
─────────────────────────────────────────────────────────────────
Product Manager: Noa R.
Tech Lead:       Dan L.

─────────────────────────────────────────────────────────────────
TARGET RELEASE
─────────────────────────────────────────────────────────────────
Target Sprint/Release: Sprint 4 (v0.3.0 — closed beta)
Hard deadline: March 15 (beta cohort onboarding begins)

─────────────────────────────────────────────────────────────────
USER JOURNEY COVERAGE
─────────────────────────────────────────────────────────────────
This Epic covers the following journey steps:

J1 — User opens the app and sees today's prompt
J2 — User reads the prompt and begins writing
J3 — User saves their entry
J4 — User sees confirmation and their entry on the timeline

See journey map: [Confluence: /journeys/LW-entry-creation]

─────────────────────────────────────────────────────────────────
STORIES INCLUDED
─────────────────────────────────────────────────────────────────
| # | Story Title | Status | Points |
|---|-------------|--------|--------|
| 1 | User sees today's prompt on the home screen | Ready | 3 |
| 2 | User taps prompt and enters writing mode | Ready | 5 |
| 3 | User saves entry and sees confirmation animation | Ready | 3 |
| 4 | User views saved entry on personal timeline | Ready | 5 |
| 5 | App rotates prompts daily from the prompt library | Ready | 3 |
| 6 | User can skip today's prompt and free-write instead | Ready | 2 |
| 7 | App auto-saves draft if user leaves mid-entry | In Progress | 5 |
| 8 | App shows empty state for new users with no entries | Ready | 2 |

Total stories: 8
Total points:  28

─────────────────────────────────────────────────────────────────
DEPENDENCIES
─────────────────────────────────────────────────────────────────
| Dependency | Owner | Status | Risk if Delayed |
|-----------|-------|--------|-----------------|
| Prompt content library (50 prompts minimum) | Content team | In Progress | Blocks stories 1, 5 |
| Local-first sync architecture (ADR-038) | Dan L. | Met | Blocks story 7 |
| Design system — entry editor component | UX team | Met | Blocks story 2 |

─────────────────────────────────────────────────────────────────
SUCCESS METRICS
─────────────────────────────────────────────────────────────────
1. Entry creation rate: >40% of daily active users create an 
   entry on any given day (beta cohort)
2. Entry completion rate (J2→J3): >75% (users who start writing 
   finish and save)
3. 7-day retention: >50% of beta users return on day 7
4. Auto-save recovery rate: >95% of interrupted entries are 
   recovered successfully

─────────────────────────────────────────────────────────────────
OUT OF SCOPE
─────────────────────────────────────────────────────────────────
- Photo or media attachments to entries (separate Epic: LW-MEDIA-01)
- Sharing entries with others
- Entry editing after save (separate story in a future Epic)
- Prompt personalisation / AI-generated prompts (future Initiative)
- Notifications / reminders to write (separate Epic: LW-NOTIF-01)

─────────────────────────────────────────────────────────────────
RISKS & OPEN QUESTIONS
─────────────────────────────────────────────────────────────────
| Risk / Question | Owner | Due Date | Status |
|----------------|-------|----------|--------|
| Prompt tone may not resonate with beta cohort | Noa R. | Sprint 3 | Open — plan A/B test |
| Auto-save sync conflict if user has 2 devices | Dan L. | Sprint 3 | Resolved — last-write-wins per ADR-038 |
| Text editor performance with long entries (>2000 words) | Dan L. | Sprint 4 | Open |

─────────────────────────────────────────────────────────────────
LINKS
─────────────────────────────────────────────────────────────────
Initiative Brief:  [Confluence: /initiatives/LW-2025-02]
Feature Page:      [Confluence: /features/LW-ENTRY-01]
Journey Map:       [Confluence: /journeys/LW-entry-creation]
Design / Figma:    [Figma: LW Entry Flow v2]
ADRs:              [ADR-038: Local-first sync strategy]
                   [ADR-039: Prompt rotation algorithm]
```

---

## Epic Quality Checklist

Before submitting your Epic, verify:

- [ ] Title follows `[Product/Area] Verb-phrase` format
- [ ] Goal is written in one paragraph a stakeholder can understand
- [ ] Linked to Initiative and Feature in Confluence
- [ ] PM and Tech Lead are named
- [ ] Target release is specified
- [ ] Journey steps are identified and linked
- [ ] At least one story is listed
- [ ] Success metrics are measurable with baselines and targets
- [ ] Out of Scope section explicitly lists excluded items
- [ ] Dependencies are identified with owners and risk assessment
- [ ] Open questions have owners and due dates
