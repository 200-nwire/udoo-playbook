# E2E Initiative Lifecycle

<span class="phase-badge upstream">🔵🟢🟠🟣 Full Lifecycle</span>

**Difficulty:** 🔴 Advanced · **Time:** 3–4 hours · **Best for:** PMs, Delivery Managers, Tech Leads, and leadership alignment sessions

This tutorial follows a real initiative — **Someone for Coffee** — from the moment an idea arrives through every phase of the UDOO framework: Upstream discovery, the Commitment Point, Downstream delivery, the Delivery Point, Onstream operations, and the Offstream feedback loop that spawns the next initiative.

By the end, you'll see how the four phases are not a sequence but a continuous loop.

::: info About Someone for Coffee
Someone for Coffee (originally *Mישהי לקפה* — "Mishehi LeKafe") is a women-only social networking app that connects women for casual coffee meetings. It was conceived by Galit, a mother who lost her son Or in military service. She noticed that women in her life — especially those who had relocated, gone through divorce, or entered a new life stage — were struggling with shrinking social circles. The app is dedicated to Or's memory and built on the belief that meaningful connection starts with a single cup of coffee.
:::

---

## Part 1: The Idea Arrives

### The First Conversation

Galit approaches 200apps with a vision, not a specification. She describes what she sees:

> *"Women move to a new city, or get divorced, or their kids leave home, and suddenly they realise their social circle has shrunk to almost nothing. They have acquaintances but no one to call for coffee on a Tuesday. Dating apps exist. Professional networks exist. But there's nothing for women who just want a friend."*

This is the raw input. It's emotional, it's real, and it's completely unstructured. The UDOO framework's job is to transform this into something a team can build — without losing the soul of the idea.

### What Happens Before Upstream

Before entering the formal discovery stations, the PM has a preliminary conversation to determine whether this idea warrants a full initiative:

| Question | Galit's Answer |
|----------|---------------|
| Is there evidence of demand? | Galit has talked to 40+ women who expressed this need |
| Is the target audience reachable? | Yes — women's Facebook groups, community centres, word of mouth |
| Is there a viable business model? | Freemium — free matching, premium for group events and expanded radius |
| Does it align with 200apps' capabilities? | Yes — mobile app development is core competency |
| Is the founder committed? | Full-time commitment, personal funding for MVP |

The PM concludes: this warrants a full Upstream discovery cycle. An initiative is created.

---

## Part 2: Upstream Station 1 — Vision & Context

**The team asks: Why? Who? What does success look like?**

### Initiative Brief (Draft)

```
INITIATIVE: Reduce Social Isolation Among Women in Life Transitions

Problem:    Women experiencing life transitions (relocation, divorce,
            empty nest, career change) face shrinking social circles
            with no dedicated, safe platform to form new friendships.

Persona:    Noa, 42, relocated to Be'er Sheva for work 8 months ago.
            She has colleagues but no friends in the city. She tried
            a general meetup app but felt unsafe as a woman meeting
            strangers alone.

Why now:    Post-COVID social isolation has accelerated. Community
            centres report 35% increase in loneliness-related
            programme enquiries among women 35–55.

Success:    200 verified users within 6 months of Israel launch.
            60% of matched pairs complete a coffee meeting.
            NPS > 40 among active users.

Non-goals:  This is not a dating app. Not a professional network.
            Not a group therapy platform.
```

::: tip Notice: The Initiative Names a Problem, Not a Feature
The initiative is "Reduce Social Isolation Among Women in Life Transitions" — not "Build a Coffee Meeting App." The app is one possible solution. The discovery process will determine whether it's the right one.
:::

### ✏️ Exercise 2.1 — Write Noa's Persona Card

Using what you know about Noa, fill in her persona card. Think about her daily routine, her frustrations, and what "success" looks like in her life — not in the app.

::: details Solution: Noa's Persona Card
```
PERSONA CARD
============
Name:           Noa
Age:            42
Location:       Be'er Sheva, Israel (relocated 8 months ago)
Life stage:     Career move to a new city; divorced 2 years ago
Social circle:  3–4 work colleagues, 2 old friends in Tel Aviv
                she sees every few months
Daily routine:  Works 8–5. Comes home to an empty apartment.
                Scrolls Instagram. Watches TV. Goes to bed.
                Weekends are the hardest.
Top frustration: "I have plenty of acquaintances but no one
                  I can call at 10pm when I'm having a bad day."
Success:        Having 2–3 women in Be'er Sheva she sees regularly
                for coffee, walks, or weekend plans.
Quote:          "I'm not looking for a best friend. I just want
                 someone to sit with."
```
:::

---

## Part 3: Upstream Station 2 — Problem Framing

**The team asks: What exists today? What's broken? What do we assume?**

### Current State Analysis

| What Noa Tries | Why It Fails |
|----------------|-------------|
| General meetup apps (Meetup, Bumble BFF) | Mixed-gender, no verification, feels unsafe for solo coffee |
| Facebook groups | Too passive — "anyone want to meet?" posts get likes but no meetings |
| Community centre events | Scheduled, structured, impersonal — not the casual "coffee on Tuesday" she wants |
| Asking colleagues | Power dynamics — she's senior; it feels awkward |
| Doing nothing | Social isolation deepens over time |

### Pain Map

The PM maps Noa's pains across the friendship formation journey:

```
DISCOVER         TRUST          CONNECT        MAINTAIN
(find someone)   (feel safe)    (meet IRL)     (keep meeting)
──────────────   ────────────   ────────────   ────────────
No dedicated     Mixed-gender   No scheduling  No momentum —
platform for     platforms      help           one meeting
women seeking    feel unsafe                   and then
friendship                                    nothing

Can't filter     No identity    Location       No reminder
by life stage    verification   mismatch —     to meet again
or interests                    too far
                 Fake profiles  Awkwardness
                                of first
                                meeting alone
```

### Assumptions Register

Every initiative carries assumptions. The team lists them explicitly and marks how they'll be validated:

| # | Assumption | Risk if Wrong | Validation Method |
|---|-----------|---------------|-------------------|
| A1 | Women 35–55 will use a mobile app for this | High — entire product depends on it | Landing page test + waitlist sign-ups |
| A2 | Women-only verification is technically feasible | High — core safety promise | Spike: ID verification API research |
| A3 | Women will meet a stranger for coffee after online matching | Medium — core conversion metric | Pilot with 20 matched pairs |
| A4 | Interest-based matching produces better connections than random | Medium — algorithm value prop | A/B test after launch |
| A5 | Hebrew-first is sufficient for Israel launch | Low — but limits early market | Validated by founder's network research |

::: warning Every Assumption Is a Risk
Unvalidated assumptions are the #1 cause of product failure. The assumptions register forces the team to be honest about what they don't know. Each high-risk assumption should be validated before the team commits significant development resources.
:::

---

## Part 4: Upstream Station 3 — Story Mapping

**The team asks: What is the user's journey? What's the first slice?**

### The Journey Map

The PM and designer map Noa's journey from first hearing about the app to her third coffee meeting:

```
REGISTER    VERIFY     SET UP      MATCH       CHAT      MEET       RE-ENGAGE
  │           │        PROFILE       │           │         │           │
  │           │          │           │           │         │           │
Sign up     Upload    Add photo    See top     Send      Schedule    Rate the
with email  ID for    Add bio      matches     first     coffee      meeting
            women-    Select       (scored     message   meeting
            only      interests    by shared             Get
            verify    Set city     interests)            reminded
                      & radius
```

### First Slice

The team draws the first slice — the minimum journey that lets Noa go from sign-up to her first coffee meeting:

```
SLICE 1 (MVP)
═══════════════════════════════════════════════════════
Register → Verify email → Basic profile (name, city,
3 interests) → See top 5 matches → Send invitation →
Accept/Decline → Confirmed meeting card
═══════════════════════════════════════════════════════

OUT OF SLICE 1:
- ID-based verification (email only in MVP)
- Chat messaging (use existing phone/WhatsApp)
- Location-based meeting suggestions
- Group meetings
- Rating system
```

### ✏️ Exercise 4.1 — Write 3 Stories for Slice 1

Write three stories from the Someone for Coffee Slice 1 journey. Include acceptance criteria.

::: details Solution: Three Slice 1 Stories
**Story 1:**
```
As Noa, I want to create a profile with my name, city, and
3 interests, so that the matching algorithm can find relevant
women near me.

AC1: Given Noa is on the profile creation screen
     When she enters her name, selects "Be'er Sheva" as her city,
     and selects 3 interests from a list of 20
     Then her profile is saved and she is taken to the matching screen

AC2: Given Noa has selected fewer than 3 interests
     When she taps "Save Profile"
     Then a validation message says "Please select at least 3 interests"

AC3: Given Noa has not set a city
     When she taps "Save Profile"
     Then a validation message says "Please select your city"
```

**Story 2:**
```
As Noa, I want to see my top 5 matches ranked by shared interests,
so that I can choose someone relevant to invite for coffee.

AC1: Given Noa has a complete profile with interests
     ["hiking", "cooking", "reading"]
     When she opens the matching screen
     Then she sees 5 match cards sorted by shared interest count
     And each card shows: name, city, shared interest count, bio preview

AC2: Given a match shares 3/3 interests with Noa
     And another match shares 1/3 interests
     Then the 3/3 match appears higher in the list

AC3: Given there are fewer than 5 verified users in Noa's city
     Then the matching screen shows available matches
     And a message: "More women are joining — check back soon!"
```

**Story 3:**
```
As Noa, I want to send a coffee invitation with a proposed
time and place, so that I can initiate a meeting with a match.

AC1: Given Noa taps "Invite for Coffee" on a match card
     When she selects a date, time, and suggests a café name
     Then an invitation notification is sent to the match
     And Noa's match card shows "Invitation Sent"

AC2: Given a match accepts Noa's invitation
     Then both see a "Confirmed Meeting" card with date, time,
     and location
     And both receive a reminder notification 2 hours before

AC3: Given a match declines Noa's invitation
     Then Noa sees "Declined" on the match card
     And Noa can invite a different match or propose a new time
```
:::

---

## Part 5: Upstream Station 4 — Technical Options

**The team asks: How could we build this? What are the trade-offs?**

### Option A: Firebase + React Native

| Aspect | Detail |
|--------|--------|
| Backend | Firebase (Firestore, Auth, Cloud Functions) |
| Frontend | React Native (cross-platform) |
| Pros | Fast to launch, real-time sync built in, low infrastructure cost at small scale |
| Cons | Vendor lock-in, complex queries for matching algorithm, limited server-side control |

### Option B: Custom Backend + Native Apps

| Aspect | Detail |
|--------|--------|
| Backend | Node.js + PostgreSQL on AWS |
| Frontend | Swift (iOS) + Kotlin (Android) |
| Pros | Full control, optimised matching queries, no vendor lock-in |
| Cons | 2× frontend effort, longer time to market, higher infrastructure cost |

### Option C: Firebase + Flutter

| Aspect | Detail |
|--------|--------|
| Backend | Firebase (Firestore, Auth, Cloud Functions) |
| Frontend | Flutter (single codebase, near-native performance) |
| Pros | Single codebase, fast to market, Firebase real-time features |
| Cons | Flutter developer availability in Israel, Firebase query limitations |

### ADR: Technology Stack

```
ADR-001: Technology Stack for Someone for Coffee
==================================================
Status:   Accepted
Date:     2026-01-15
Context:  MVP needs to launch within 4 months for Israel market.
          Team has 2 developers. Budget is constrained. User base
          expected < 1,000 in first 6 months.

Decision: Option A — Firebase + React Native

Rationale:
  - Time to market is critical (founder's personal investment)
  - Firebase eliminates infrastructure management for a 2-dev team
  - React Native gives iOS + Android from a single codebase
  - Matching algorithm can run in Cloud Functions initially
  - Scale concerns are premature at < 1,000 users

Consequences:
  - Matching query performance may need redesign at 5,000+ users
  - Migration to custom backend is possible but expensive
  - Team must avoid deep Firestore-specific patterns that
    increase lock-in
```

---

## Part 6: Upstream Station 5 — Decision & Scope

**The team decides: What are we building, for whom, in what order?**

### MVP Definition

```
SOMEONE FOR COFFEE — MVP SCOPE
================================
IN:
  ✅ Email registration and verification
  ✅ Basic profile (name, city, 3 interests, photo, bio)
  ✅ Interest-based matching (top 5 matches)
  ✅ Coffee invitation (propose time + place)
  ✅ Accept / Decline invitation flow
  ✅ Confirmed meeting card with reminder

OUT (Future):
  ❌ ID-based women-only verification (manual review in MVP)
  ❌ In-app chat (WhatsApp link as workaround)
  ❌ Group coffee meetings
  ❌ Meeting rating and feedback
  ❌ Premium features
  ❌ Arabic / English languages

Target: Israel, Hebrew, women 30–55
Timeline: 4-month build, 2-month soft launch
```

### Rollout Plan

| Phase | Duration | Scope | Success Criteria |
|-------|----------|-------|-----------------|
| Alpha | 2 weeks | 20 women from Galit's network (manual onboarding) | 10+ matched pairs, 5+ meetings |
| Beta | 6 weeks | 200 women via waitlist (self-serve onboarding) | 60% match-to-meeting conversion |
| Launch | Ongoing | Open registration in Israel | 200 verified users in 6 months |

---

## Part 7: The Commitment Point

The Upstream phase is complete. Before crossing into Downstream, the team runs the final check:

| Check | Status |
|-------|--------|
| Initiative Brief frozen | ✅ Problem, persona, success metrics, non-goals documented |
| Story map complete | ✅ 7 activities, Slice 1 drawn |
| Stories meet DoR | ✅ 8 stories checked against 9-point DoR — all pass |
| Architecture ready | ✅ ADR-001 accepted, Firebase project created, data model reviewed |
| Stakeholder aligned | ✅ Galit reviewed story map and approved Slice 1 scope |
| Assumptions registered | ✅ 5 assumptions with validation plans |

::: info Crossing the Commitment Point
This is the moment where the team shifts from "we're figuring this out" to "we're building this." Before this point, change is cheap and expected. After it, change is expensive and disruptive. The Commitment Point is not a ceremony — it's a state change. The stories are ready. The architecture is confirmed. The team is committed.
:::

---

## Part 8: Downstream — Delivery

The 8 ready stories enter the Downstream Kanban board:

```
BACKLOG     │  IN PROGRESS  │  IN REVIEW  │  IN TEST  │  DONE
────────────┼───────────────┼─────────────┼───────────┼────────
S1: Profile │               │             │           │
S2: Matching│               │             │           │
S3: Invite  │               │             │           │
S4: Accept  │               │             │           │
S5: Reminder│               │             │           │
S6: Dashboard               │             │           │
S7: Verify  │               │             │           │
S8: Onboard │               │             │           │
```

### BDD Scenarios for Matching

Before the developer writes matching code, the Three Amigos write the Gherkin:

```gherkin
Feature: Coffee — Profile Matching
  As a verified user
  I want to see my top coffee matches
  So that I can choose someone to meet

  @area-api @risk-high @type-happy @smoke
  Scenario: User sees top 5 matches sorted by shared interests
    Given "noa@example.com" has interests: ["hiking", "cooking", "reading"]
    And the matching pool contains 20 verified users in "Be'er Sheva"
    When Noa opens the matching screen
    Then 5 match cards are displayed
    And cards are sorted by shared interest count (highest first)

  @area-api @risk-high @type-edge
  Scenario: Matching excludes users already met this month
    Given Noa had coffee with "dana@example.com" 5 days ago
    When Noa opens the matching screen
    Then "dana@example.com" does not appear in the top 5

  @area-api @risk-medium @type-edge
  Scenario: Fewer than 5 matches available
    Given only 3 verified users exist in "Be'er Sheva"
    When Noa opens the matching screen
    Then 3 match cards are displayed
    And a message shows "More women are joining — check back soon!"
```

### The Sprint in Motion

The team works in 2-week sprints. Stories move from Backlog → In Progress → In Review → In Test → Done. Each story is developed on a feature branch, reviewed via PR, and tested by QA against the Gherkin scenarios.

**Sprint 1 delivers:** Profile creation, basic matching, coffee invitation flow.
**Sprint 2 delivers:** Accept/decline, meeting card, reminder notification, email verification.

---

## Part 9: The Delivery Point

Before the alpha release, the team completes the Delivery Point checklist:

```
DELIVERY POINT — Someone for Coffee Alpha
===========================================
[✅] Runbook written (health checks, rollback via feature flags)
[✅] SLOs defined:
     - Matching response time: p95 < 3 seconds
     - Invitation delivery: < 30 seconds
     - App crash rate: < 1%
[✅] Alerts configured:
     - Firebase Cloud Function error rate > 5%
     - Firestore read quota > 80%
     - Matching algorithm returns 0 results for verified user
[✅] Rollback plan: Feature flags for matching and invitation flows
[✅] On-call: Dev team available during alpha (20 users)
[✅] Data privacy: GDPR consent flow implemented, data deletion API ready
```

::: tip The Delivery Point Is Not "Done"
"Done" means the code works. The Delivery Point means the code is safe to operate. The distinction is the difference between a feature and a product.
:::

---

## Part 10: Onstream — Operations

### The Alpha Launch

The app goes live for 20 women from Galit's network. The team monitors:

| Metric | Target | Day 1 Actual | Day 7 Actual |
|--------|--------|-------------|-------------|
| App crash rate | < 1% | 0.3% | 0.2% |
| Matching response time (p95) | < 3s | 1.8s | 2.1s |
| Invitation delivery time | < 30s | 12s | 15s |
| Profile completion rate | > 80% | 90% | 90% |
| Match-to-invitation rate | > 40% | 35% | 45% |

### First Incident

**Day 4, 08:15 UTC:** An alert fires — the matching algorithm returns 0 results for a user who should have 12 matches. Investigation reveals a Firestore index was not deployed for the compound query (city + interests). The user's city name had a trailing space ("Be'er Sheva ") that didn't match the index.

**Resolution:** Trim city names on profile save. Add Firestore index. Fix in 45 minutes. No post-mortem required (P3 severity, 1 user affected, resolved quickly).

**Action item:** Add input sanitisation to all profile fields before save. Ticket: `SFC-089`.

---

## Part 11: Offstream — Growth & Feedback

### The First Users Speak

After 4 weeks of alpha, the team collects feedback:

| Signal | Source | Frequency |
|--------|--------|-----------|
| "I wish I could chat in the app instead of switching to WhatsApp" | 8 of 20 users | High — feature gap |
| "The matching is great but I've already met everyone in my city" | 3 users in small cities | Medium — scale problem |
| "Can I meet with a group instead of 1:1? It's less intimidating." | 5 users | High — new capability |
| "I love this. My daughter should use it too." | 4 users | Low — validation signal |

### Signal Processing

The feedback enters the pipeline:

1. **"In-app chat"** — 8/20 users. Pattern confirmed. High impact on conversion. → **Becomes an Upstream Initiative:** "Enable real-time communication between matched users"

2. **"Group meetings"** — 5/20 users. New capability. Aligns with reducing intimidation barrier. → **Becomes an Upstream Initiative:** "Reduce first-meeting anxiety through group formats"

3. **"Already met everyone"** — 3 users. Scale problem. Not solvable with features. → **Monitoring.** Will become relevant when user base exceeds 200.

4. **"My daughter should use it"** — validation, not actionable. Logged as a positive signal.

### The Next Initiative Is Born

The PM writes a new Initiative Brief:

```
INITIATIVE: Reduce First-Meeting Anxiety Through Group Formats

Problem:    5 of 20 alpha users expressed reluctance to meet a
            stranger 1:1. Group meetings (3–4 women) feel safer
            and less pressure.

Persona:    Revital, 38, recently divorced. Wants to expand her
            social circle but finds 1:1 meetings with strangers
            intimidating. "What if we have nothing to talk about?"

Success:    30% of first meetings are group format within 90 days.
            Group-meeting users have 2× retention vs. 1:1 only.

Non-goals:  This is not an event platform. Not classes. Not
            support groups. Just casual coffee with 3–4 women.
```

::: info The Loop Closes
An idea from Galit → Upstream discovery → Downstream delivery → Onstream operation → Offstream feedback → a new Upstream initiative. The framework is not a pipeline with a beginning and an end. It is a cycle where every phase feeds the next.

The "group meetings" initiative will now enter Station 1, go through all five discovery stations, cross the Commitment Point, and the loop continues.
:::

---

## The Complete Lifecycle — One Diagram

```
                    ┌─────────────────────────────┐
                    │                             │
                    ▼                             │
            ┌──────────────┐                     │
            │   UPSTREAM   │                     │
            │ Discovery &  │                     │
            │   Framing    │                     │
            └──────┬───────┘                     │
                   │                             │
           Commitment Point                      │
                   │                             │
            ┌──────▼───────┐                     │
            │  DOWNSTREAM  │                     │
            │  Delivery &  │                     │
            │   Testing    │                     │
            └──────┬───────┘                     │
                   │                             │
           Delivery Point                        │
                   │                             │
            ┌──────▼───────┐                     │
            │   ONSTREAM   │                     │
            │ Operations & │                     │
            │  Monitoring  │                     │
            └──────┬───────┘                     │
                   │                             │
            ┌──────▼───────┐                     │
            │  OFFSTREAM   │─────────────────────┘
            │  Feedback &  │
            │   Growth     │
            └──────────────┘
```

The arrow from Offstream back to Upstream is the most important connection in the entire framework. Without it, the team builds confidently in the wrong direction. With it, every cycle is informed by reality.

---

## What You Should Take Away

1. **Discovery is not optional overhead** — it's what prevents building the wrong thing
2. **The Commitment Point protects the team** — from ambiguity leaking into delivery
3. **The Delivery Point protects the users** — from unmonitored, unrecoverable releases
4. **Offstream signals are the fuel for the next cycle** — without them, the framework runs on assumptions
5. **The loop never ends** — and that's the point. Every product is a conversation between the team and its users, conducted through the four phases

---

**Next tutorial:** [BDD Workshop →](./bdd-workshop)
