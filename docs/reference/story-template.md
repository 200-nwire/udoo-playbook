# Story Template

Copy this template into Jira when creating a new Story. A story is the smallest independently testable unit of user value.

::: tip The "One Breath" Test
If you cannot explain what this story delivers in a single breath, it is too big. Split it. A well-scoped story can be described in one sentence: "The user can [do X] and see [result Y]." If your sentence needs "and then… and also… plus…" — you have multiple stories.
:::

---

## Template

```
Title: [Product/Area] Imperative-verb benefit-oriented summary
       Example: "User sees negative wallet balance correctly formatted on dashboard"

─────────────────────────────────────────────────────────────────
BACKGROUND
─────────────────────────────────────────────────────────────────
Brief context paragraph. What is the user doing before this story?
What Initiative/Feature does this belong to? Link the Feature page.

─────────────────────────────────────────────────────────────────
PROBLEM / GOAL
─────────────────────────────────────────────────────────────────
As a [persona],
I want [action],
So that [outcome].

─────────────────────────────────────────────────────────────────
SCOPE
─────────────────────────────────────────────────────────────────
What is included in this story:
- [specific item 1]
- [specific item 2]

─────────────────────────────────────────────────────────────────
OUT OF SCOPE
─────────────────────────────────────────────────────────────────
What is explicitly NOT included:
- [item not in scope 1]
- [item not in scope 2]

─────────────────────────────────────────────────────────────────
USER JOURNEY STEP(S)
─────────────────────────────────────────────────────────────────
J[#] — [Step description]

─────────────────────────────────────────────────────────────────
PROPOSED SOLUTION (high level only)
─────────────────────────────────────────────────────────────────
Brief description of approach. Not a design doc.
Link wireframe / mockup / whiteboard if applicable.

─────────────────────────────────────────────────────────────────
ACCEPTANCE CRITERIA
─────────────────────────────────────────────────────────────────
AC1 (happy path):
Given [precondition]
When [action]
Then [observable outcome]

AC2 (happy path):
Given [precondition]
When [action]
Then [observable outcome]

AC3 (edge case):
Given [edge precondition]
When [action]
Then [observable edge outcome]

AC4 (error case):
Given [error precondition]
When [action]
Then [observable error outcome]

─────────────────────────────────────────────────────────────────
DESIGN STATES
─────────────────────────────────────────────────────────────────
[ ] Empty state — what the user sees when there is no data
[ ] Loading state — what the user sees while data is being fetched
[ ] Success state — the happy-path view with data
[ ] Partial state — what happens with incomplete data
[ ] Error state — what the user sees when something fails
[ ] Offline state — what happens without connectivity (if applicable)

─────────────────────────────────────────────────────────────────
DATA MODEL NOTES
─────────────────────────────────────────────────────────────────
Key entities/fields this story touches:
- [Entity]: [fields affected]
- [API endpoint]: [request/response changes]
- New fields: [list any new database fields or API contracts]
- Migration required: Yes / No

─────────────────────────────────────────────────────────────────
EDGE CASES
─────────────────────────────────────────────────────────────────
- [Edge case 1]: [Expected behaviour]
- [Edge case 2]: [Expected behaviour]
- [Edge case 3]: [Expected behaviour]

─────────────────────────────────────────────────────────────────
QA SCENARIOS
─────────────────────────────────────────────────────────────────
| # | Scenario | Precondition | Steps | Expected Result |
|---|----------|-------------|-------|-----------------|
| 1 | [name] | [setup] | [steps] | [result] |
| 2 | [name] | [setup] | [steps] | [result] |

─────────────────────────────────────────────────────────────────
RISKS
─────────────────────────────────────────────────────────────────
- [risk 1 — and mitigation if known]

─────────────────────────────────────────────────────────────────
OPEN QUESTIONS
─────────────────────────────────────────────────────────────────
- [question 1] — Owner: [name] — Due: [date]

─────────────────────────────────────────────────────────────────
LINKS
─────────────────────────────────────────────────────────────────
Epic: [link]
Feature page: [Confluence link]
Whiteboard: [link]
Related stories: [links]
```

---

## Edge Case Identification Guide

Catching edge cases before development begins prevents mid-sprint surprises. Use this list as a prompt during the [Three Amigos](/downstream/story-workflow) session:

### Data Edge Cases
- **Empty / null values:** What if the field is blank, null, or undefined?
- **Boundary values:** What happens at 0, 1, MAX_INT, negative numbers, -0.01?
- **Long strings:** What if the user enters 10,000 characters?
- **Special characters:** Unicode, RTL text, emoji, HTML entities, SQL injection attempts?
- **Duplicate data:** What if the same action is performed twice quickly?

### User Behaviour Edge Cases
- **Double-click / rapid taps:** What if the user taps the submit button twice?
- **Back button:** What happens if the user navigates back mid-flow?
- **Concurrent sessions:** What if the user is logged in on two devices?
- **Permissions change:** What if the user's role changes while they are mid-task?
- **Timeout:** What if the session expires during a long form?

### System Edge Cases
- **Network failure:** What happens if connectivity drops mid-request?
- **API timeout:** What if the backend takes >10 seconds to respond?
- **Partial failure:** What if one of three API calls succeeds and two fail?
- **Race condition:** What if two users modify the same record simultaneously?
- **Clock skew:** What if the user's device clock is significantly wrong?

::: tip Three Amigos prompt
During Story Kick-Off, ask: "What is the weirdest thing a user could do here?" and "What is the most likely thing to go wrong?" These two questions surface 80% of edge cases.
:::

---

## Design States Checklist

Every UI story should account for these states. If a state is not applicable, mark it N/A with a reason.

| State | Description | Questions to Answer |
|-------|-------------|-------------------|
| **Empty** | No data exists yet | What does the user see on first use? Is there a call-to-action? |
| **Loading** | Data is being fetched | Is there a skeleton, spinner, or shimmer? How long before timeout? |
| **Success** | Happy path with data | Is this the Figma mockup? Does it handle 1 item and 1,000 items? |
| **Partial** | Incomplete data | What if only some fields are populated? What if the image fails to load? |
| **Error** | Something went wrong | Is there a user-friendly message? A retry button? A fallback? |
| **Offline** | No network connectivity | Does the app show cached data? A "you're offline" banner? |

::: warning The most common miss
Teams consistently forget the **empty state** and the **partial state**. A beautiful dashboard with no data shows a blank white screen. A profile page where the avatar fails to load shows a broken image icon. These are the states that real users hit first.
:::

---

## Worked Example 1 — Balance Bug Story

```
Title: User sees negative wallet balance correctly formatted on dashboard

─────────────────────────────────────────────────────────────────
BACKGROUND
─────────────────────────────────────────────────────────────────
Part of Initiative: "Improve financial transparency for wallet users"
Feature: "Real-time wallet balance display"
140 support tickets/month from users seeing $0.00 instead of 
their negative balance. Root cause: WalletCard.vue clamps negatives.

─────────────────────────────────────────────────────────────────
PROBLEM / GOAL
─────────────────────────────────────────────────────────────────
As Liam, a freelance accountant with a negative wallet balance,
I want to see my actual balance (e.g., -$125.50) on the dashboard,
So that I can accurately reconcile my accounts without contacting support.

─────────────────────────────────────────────────────────────────
SCOPE
─────────────────────────────────────────────────────────────────
- Correct display of negative, zero, and positive balances on WalletCard
- Formatting function handles all numeric cases including boundary values
- Red text styling for negative balances per design system

─────────────────────────────────────────────────────────────────
OUT OF SCOPE
─────────────────────────────────────────────────────────────────
- Balance history or transaction detail
- Push notification for balance changes
- Mobile-specific rendering (separate story)
- Currency conversion

─────────────────────────────────────────────────────────────────
USER JOURNEY STEP(S)
─────────────────────────────────────────────────────────────────
J4 — User views wallet balance card on dashboard

─────────────────────────────────────────────────────────────────
PROPOSED SOLUTION
─────────────────────────────────────────────────────────────────
Update WalletCard.vue to remove the conditional clamping.
Create useCurrencyFormatter composable to handle all numeric cases.
See Figma mockup: [link]

─────────────────────────────────────────────────────────────────
ACCEPTANCE CRITERIA
─────────────────────────────────────────────────────────────────
AC1 (negative balance):
Given a user has a wallet balance of -$125.50
When they navigate to the dashboard
Then the balance card displays "-$125.50" in red text

AC2 (positive balance):
Given a user has a wallet balance of $250.00
When they navigate to the dashboard
Then the balance card displays "$250.00" in default text colour

AC3 (zero balance):
Given a user has a wallet balance of $0.00
When they navigate to the dashboard
Then the balance card displays "$0.00" in neutral colour (not red)

AC4 (boundary edge case):
Given a user has a wallet balance of -$0.01
When they navigate to the dashboard
Then the balance card displays "-$0.01" (NOT "$0.00")

AC5 (API error):
Given the balance API returns a 500 error
When the user navigates to the dashboard
Then the balance card displays "Unable to load balance" with a retry button

─────────────────────────────────────────────────────────────────
DESIGN STATES
─────────────────────────────────────────────────────────────────
[x] Empty state — "No wallet account" message with setup CTA
[x] Loading state — Skeleton shimmer on balance card
[x] Success state — Balance displayed with correct formatting
[x] Partial state — N/A (balance is a single value)
[x] Error state — "Unable to load balance" + retry button
[ ] Offline state — N/A (dashboard requires connectivity)

─────────────────────────────────────────────────────────────────
DATA MODEL NOTES
─────────────────────────────────────────────────────────────────
- Entity: UserWallet — field: balance (decimal, already supports negatives)
- API endpoint: GET /api/user/wallet — no changes needed (already returns negatives)
- Frontend only: WalletCard.vue + new useCurrencyFormatter composable
- Migration required: No

─────────────────────────────────────────────────────────────────
EDGE CASES
─────────────────────────────────────────────────────────────────
- Balance of exactly $0.00: display in neutral colour, not red
- Balance of -$0.001 (sub-cent): round to -$0.00, display as "$0.00" 
  in neutral (not red, since display value is zero)
- Very large balance ($1,000,000+): verify comma formatting
- Currency symbol placement for RTL locales: verify "-₪125.50" not "₪-125.50"

─────────────────────────────────────────────────────────────────
QA SCENARIOS
─────────────────────────────────────────────────────────────────
| # | Scenario | Precondition | Steps | Expected Result |
|---|----------|-------------|-------|-----------------|
| 1 | Negative display | User balance = -125.50 | Navigate to /dashboard | "-$125.50" in red |
| 2 | Positive display | User balance = 250.00 | Navigate to /dashboard | "$250.00" default colour |
| 3 | Zero display | User balance = 0.00 | Navigate to /dashboard | "$0.00" neutral colour |
| 4 | Boundary | User balance = -0.01 | Navigate to /dashboard | "-$0.01" in red |
| 5 | API failure | Balance API returns 500 | Navigate to /dashboard | Error message + retry |
| 6 | Large number | User balance = 1000000.00 | Navigate to /dashboard | "$1,000,000.00" |

─────────────────────────────────────────────────────────────────
RISKS
─────────────────────────────────────────────────────────────────
- Other components may use the same clamping pattern — Tech Lead to audit

─────────────────────────────────────────────────────────────────
OPEN QUESTIONS
─────────────────────────────────────────────────────────────────
- What colour does design use for zero balance? — Owner: UX — Due: [date]

─────────────────────────────────────────────────────────────────
LINKS
─────────────────────────────────────────────────────────────────
Epic: WALLET-42
Feature page: [Confluence: Real-time wallet balance display]
Whiteboard: [Journey map link]
```

---

## Worked Example 2 — Pninei Halacha: Chapter Reading View

```
Title: [Pninei Halacha] User reads a chapter with correct Hebrew text formatting

─────────────────────────────────────────────────────────────────
BACKGROUND
─────────────────────────────────────────────────────────────────
Part of Initiative: "Make Pninei Halacha the go-to digital halacha reference"
Feature: "Chapter Reading Experience"
This is the core reading experience for the app. Users have been 
reading Pninei Halacha in print; the digital experience must 
preserve the readability and typographic quality of the printed books.

─────────────────────────────────────────────────────────────────
PROBLEM / GOAL
─────────────────────────────────────────────────────────────────
As Rivka, a daily learner of halacha,
I want to read a chapter of Pninei Halacha with proper Hebrew 
formatting (nikud, paragraph structure, source references),
So that I can study comfortably on my phone without losing 
the quality of the printed edition.

─────────────────────────────────────────────────────────────────
SCOPE
─────────────────────────────────────────────────────────────────
- Render chapter content with correct RTL Hebrew text
- Display nikud (vowel points) accurately
- Show footnote references as tappable inline markers
- Support font size adjustment (3 levels)

─────────────────────────────────────────────────────────────────
OUT OF SCOPE
─────────────────────────────────────────────────────────────────
- Bookmarking or highlighting (separate Epic)
- Text-to-speech (future Initiative)
- Translation to other languages
- Chapter navigation (previous/next) — covered in a sibling story

─────────────────────────────────────────────────────────────────
USER JOURNEY STEP(S)
─────────────────────────────────────────────────────────────────
J5 — User reads chapter content
J6 — User taps a footnote reference to view the source

─────────────────────────────────────────────────────────────────
PROPOSED SOLUTION
─────────────────────────────────────────────────────────────────
Use a custom rich-text renderer optimised for Hebrew with nikud.
Footnotes rendered as bottom-sheet overlays on tap.
Font size stored in local preferences (SharedPreferences / UserDefaults).
See Figma: [link to reading view designs]

─────────────────────────────────────────────────────────────────
ACCEPTANCE CRITERIA
─────────────────────────────────────────────────────────────────
AC1 (basic reading):
Given a user has navigated to chapter "שבת פרק א"
When the chapter content loads
Then the text displays in RTL with correct nikud and paragraph breaks

AC2 (footnote):
Given the chapter contains inline footnote markers
When the user taps a footnote marker
Then a bottom sheet displays the footnote text

AC3 (font size):
Given the user is reading a chapter
When the user taps the font size control and selects "Large"
Then the text re-renders at the large size and the preference persists

AC4 (long chapter):
Given a chapter has >5000 words
When the user scrolls through the chapter
Then the rendering remains smooth (no jank, no missing text)

AC5 (content load failure):
Given the content API returns an error
When the user navigates to a chapter
Then an error message displays with a retry button

─────────────────────────────────────────────────────────────────
DESIGN STATES
─────────────────────────────────────────────────────────────────
[x] Empty state — N/A (user navigated from chapter list; content always exists)
[x] Loading state — Skeleton lines mimicking text layout
[x] Success state — Full chapter with nikud, paragraphs, footnotes
[x] Partial state — Chapter loads but images/diagrams fail: show placeholder
[x] Error state — "Unable to load chapter" + retry button
[x] Offline state — Show cached version if available; "You're offline" if not

─────────────────────────────────────────────────────────────────
DATA MODEL NOTES
─────────────────────────────────────────────────────────────────
- Entity: Chapter — fields: id, bookId, title, content (HTML), footnotes (JSON array)
- API endpoint: GET /api/books/{bookId}/chapters/{chapterId}
- New field: fontSizePreference stored client-side only
- Migration required: No

─────────────────────────────────────────────────────────────────
EDGE CASES
─────────────────────────────────────────────────────────────────
- Chapters with no footnotes: footnote UI should not appear at all
- Nikud rendering on older Android devices (API <26): verify fallback font
- Chapter with embedded tables (rare but exists in some halachic discussions)
- User rapidly changing font size: debounce re-render

─────────────────────────────────────────────────────────────────
QA SCENARIOS
─────────────────────────────────────────────────────────────────
| # | Scenario | Precondition | Steps | Expected Result |
|---|----------|-------------|-------|-----------------|
| 1 | Basic render | Chapter with nikud | Open chapter | RTL text with nikud |
| 2 | Footnote tap | Chapter with 3 footnotes | Tap footnote #2 | Bottom sheet with note |
| 3 | Font size change | Default font size | Change to Large | Text re-renders, persists |
| 4 | Long chapter | Chapter >5000 words | Scroll to bottom | Smooth, no missing text |
| 5 | Offline cached | Previously viewed chapter, airplane mode | Open chapter | Cached content displays |
| 6 | Offline uncached | Never-viewed chapter, airplane mode | Open chapter | "You're offline" message |

─────────────────────────────────────────────────────────────────
RISKS
─────────────────────────────────────────────────────────────────
- Hebrew font rendering inconsistency across Android OEMs
- Large chapter content may cause memory issues on low-end devices

─────────────────────────────────────────────────────────────────
OPEN QUESTIONS
─────────────────────────────────────────────────────────────────
- Should footnote bottom sheet be dismissible by swipe or tap-outside?
  — Owner: UX — Due: Sprint 7

─────────────────────────────────────────────────────────────────
LINKS
─────────────────────────────────────────────────────────────────
Epic: PH-LIB-01
Feature page: [Confluence: Chapter Reading Experience]
Design: [Figma: PH Reading View v4]
Related stories: [PH-NAV-03: Chapter navigation prev/next]
```

---

## Worked Example 3 — Someone for Coffee: Profile Match Card

```
Title: [Someone for Coffee] User sees potential match card with compatibility info

─────────────────────────────────────────────────────────────────
BACKGROUND
─────────────────────────────────────────────────────────────────
Part of Initiative: "Enable meaningful social connections over coffee"
Feature: "Discovery & Matching"
Users who complete their profile should see potential matches 
based on shared interests and location proximity. This story 
covers the individual match card — the atomic unit of the 
discovery experience.

─────────────────────────────────────────────────────────────────
PROBLEM / GOAL
─────────────────────────────────────────────────────────────────
As Maya, a new user who has completed her profile,
I want to see a card for each potential match showing their 
name, photo, shared interests, and distance,
So that I can decide whether to initiate a coffee invitation.

─────────────────────────────────────────────────────────────────
SCOPE
─────────────────────────────────────────────────────────────────
- Match card component showing: avatar, first name, shared interests 
  (max 3 displayed), distance (km), and a brief tagline
- Card is tappable to view full profile (navigation only; full 
  profile is a separate story)

─────────────────────────────────────────────────────────────────
OUT OF SCOPE
─────────────────────────────────────────────────────────────────
- Full profile view (separate story)
- Match algorithm / ranking logic (backend team, separate Epic)
- "Invite for coffee" action (separate story)
- Block/report functionality (separate story)

─────────────────────────────────────────────────────────────────
USER JOURNEY STEP(S)
─────────────────────────────────────────────────────────────────
J3 — User browses potential matches in the discovery feed

─────────────────────────────────────────────────────────────────
PROPOSED SOLUTION
─────────────────────────────────────────────────────────────────
Create a MatchCard.vue component consuming the /api/matches endpoint.
Cards rendered in a vertical scrollable list.
See Figma: [link to discovery feed designs]

─────────────────────────────────────────────────────────────────
ACCEPTANCE CRITERIA
─────────────────────────────────────────────────────────────────
AC1 (card display):
Given Maya has 5 potential matches
When she opens the discovery feed
Then she sees 5 match cards with avatar, name, shared interests, 
and distance

AC2 (shared interests):
Given a match shares 5 interests with Maya
When the card renders
Then it displays the top 3 shared interests with a "+2 more" indicator

AC3 (no shared interests):
Given a match shares 0 interests with Maya
When the card renders
Then the interests section shows "No shared interests yet"

AC4 (card tap):
Given Maya sees a match card
When she taps the card
Then she navigates to the full profile view for that match

AC5 (no matches):
Given Maya has no potential matches in her area
When she opens the discovery feed
Then she sees an empty state: "No matches nearby — try expanding 
your distance" with a link to settings

─────────────────────────────────────────────────────────────────
DESIGN STATES
─────────────────────────────────────────────────────────────────
[x] Empty state — "No matches nearby" + expand distance CTA
[x] Loading state — 3 skeleton cards with shimmer animation
[x] Success state — Cards with avatars, names, interests, distance
[x] Partial state — Avatar fails to load: show initials fallback
[x] Error state — "Unable to load matches" + retry
[ ] Offline state — N/A (discovery requires connectivity)

─────────────────────────────────────────────────────────────────
DATA MODEL NOTES
─────────────────────────────────────────────────────────────────
- API endpoint: GET /api/matches — returns array of MatchSummary objects
- MatchSummary: { id, firstName, avatarUrl, tagline, 
  sharedInterests: string[], distanceKm: number }
- No new DB fields; frontend component only
- Migration required: No

─────────────────────────────────────────────────────────────────
EDGE CASES
─────────────────────────────────────────────────────────────────
- User with no avatar: display initials in a coloured circle
- Distance < 1km: display "< 1 km" not "0 km"
- Very long tagline (>100 chars): truncate with ellipsis
- User who has blocked a match: match should not appear (API responsibility)

─────────────────────────────────────────────────────────────────
QA SCENARIOS
─────────────────────────────────────────────────────────────────
| # | Scenario | Precondition | Steps | Expected Result |
|---|----------|-------------|-------|-----------------|
| 1 | Normal display | 5 matches available | Open feed | 5 cards visible |
| 2 | Interests overflow | Match has 5 shared interests | View card | 3 shown + "+2 more" |
| 3 | No interests | Match has 0 shared interests | View card | "No shared interests yet" |
| 4 | No matches | 0 matches | Open feed | Empty state with CTA |
| 5 | Card tap | Match card visible | Tap card | Navigate to profile |
| 6 | Missing avatar | Match has no avatar | View card | Initials fallback |

─────────────────────────────────────────────────────────────────
RISKS
─────────────────────────────────────────────────────────────────
- Location permission denied: distance cannot be calculated (fallback: hide distance)
- Match API latency with large user base: need pagination

─────────────────────────────────────────────────────────────────
OPEN QUESTIONS
─────────────────────────────────────────────────────────────────
- Should distance show as "walking time" instead of km?
  — Owner: UX — Due: Sprint 5

─────────────────────────────────────────────────────────────────
LINKS
─────────────────────────────────────────────────────────────────
Epic: SFC-DISC-01
Feature page: [Confluence: Discovery & Matching]
Design: [Figma: SFC Discovery Feed v3]
Related stories: [SFC-PROF-02: Full profile view]
```

---

## Story Size Heuristics

Use these signals to detect stories that need splitting:

| Signal | What It Means |
|--------|--------------|
| More than 5 acceptance criteria | The story may be covering multiple behaviours |
| Estimated at >8 story points | The story likely spans multiple journey steps |
| "And" in the title | Two stories hiding as one ("User creates **and** edits entry") |
| Multiple design states are complex | Each state may warrant its own story |
| Dependencies within the story | The first half must work before the second half can start |
| QA scenario table has >8 rows | The testing surface suggests multiple stories |
| You can't explain it in one breath | Split it |

::: details Splitting strategies
**Split by workflow step:** "User creates entry" and "User edits entry" — not "User creates and edits entry."

**Split by user type:** "Admin configures settings" and "User views configured settings."

**Split by design state:** "Dashboard displays data" and "Dashboard handles empty state and errors."

**Split by platform:** "Balance displays on web" and "Balance displays on mobile."

**Split by happy path vs. edge case:** Deliver the happy path first; handle edge cases in a follow-up story.
:::
