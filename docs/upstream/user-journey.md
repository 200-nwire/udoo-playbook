# User Journey Mapping

A user journey map is the backbone of discovery. It shows — step by step — how a real person moves from a goal to an outcome. Every Epic and every Story must be anchored to at least one step on this map.

## Why Journey Maps Matter

Without a journey map:
- Stories float with no context
- Teams build the right feature for the wrong step
- Testing covers the happy path but misses the transitions
- Epics overlap and create redundant work

With a journey map:
- Every ticket has a "why it matters to the user" built in
- Gaps in coverage are visible before coding starts
- QA knows which journey steps need end-to-end tests

## How to Build One

### Step 1 — Name the persona and goal

Be specific. Not "user does onboarding" but:

> **Persona:** Maya, SMB account owner, 15 employees  
> **Goal:** Get her team into the product and using the expense tracker within their first week

### Step 2 — Map the steps

Name each step with an **imperative verb**. Keep them at the right altitude — not too granular (not "user clicks button") and not too vague (not "user uses product").

```
J1  Discover    User finds out the product exists
J2  Sign up     User creates an account
J3  Invite      User invites their team
J4  Configure   User sets spending limits and categories
J5  Submit      Team member submits their first expense
J6  Approve     Account owner reviews and approves
J7  Report      Account owner exports monthly report
```

### Step 3 — Annotate each step

For each journey step, capture:

| Field | Question |
|-------|---------|
| **Current pain** | What breaks or frustrates today? |
| **Risk** | What could go wrong if we change this? |
| **Opportunity** | What's the improvement we could deliver? |
| **This Initiative's coverage** | Does this Initiative touch this step? |

### Step 4 — Draw the slices

A slice is a **vertical cut** through the journey — a path a real user can walk end-to-end.

```
Full journey:  J1 → J2 → J3 → J4 → J5 → J6 → J7

S1 (MVP):      J2 → J3 → J5
               (Invite-only, submit only, no approval flow)

S2:            J2 → J3 → J4 → J5 → J6
               (Add configuration and approval)

S3:            J1 → J2 → J3 → J4 → J5 → J6 → J7
               (Full experience including discovery and reporting)
```

## Referencing Journeys in Jira

Every Epic field labelled "User Journey coverage" should contain:
- The journey steps it covers: `J3–J5`
- A link to the whiteboard map

Every Story's description should open with:
> "This story addresses **J4 (Configure)** from the SMB Onboarding journey."

This single line prevents more miscommunication than most team rituals.

## Tools

- **FigJam** — collaborative, easy to share as a Confluence embed
- **Miro** — more powerful for complex journeys
- **Confluence Whiteboard** — stays in the same ecosystem
- **Paper + photo** — completely valid for early discovery

Whatever tool you use, name the board, date it, and link it from the Initiative Brief and all related Epics.

---

**Next:** [Definition of Ready →](/upstream/definition-of-ready)
