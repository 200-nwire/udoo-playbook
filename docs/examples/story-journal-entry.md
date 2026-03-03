# Fully Shaped Story — Journal Entry Creation

This example demonstrates what a **"ready for dev"** story looks like — the level of detail that a developer should expect before picking up a ticket from the backlog. Read it alongside the [Definition of Ready](/upstream/definition-of-ready) and [Story Workflow](/downstream/story-workflow).

:::tip Why this level of detail?
A vague story creates a conversation. A shaped story creates momentum. When a developer reads this ticket, they should be able to start coding within 30 minutes — not start a thread in Slack asking "what does this mean?"

This doesn't mean the developer has no autonomy. Implementation details (which hook to use, how to structure the component) are theirs. But the *what*, the *why*, and the *boundaries* are defined.
:::

---

## Story Card

:::info
| Field | Value |
|-------|-------|
| **Story ID** | MOM-247 |
| **Story** | As a user, I want to write and save a reflection for today's prompt so I can capture my daily moment of meaning |
| **Linked Epic** | Entry Creation & Prompt Flow |
| **Linked Feature** | [Living Wondrously Journal](./feature-living-wondrously) |
| **Linked Initiative** | Create daily ritual for emotional connection |
| **Story Points** | 3 |
| **Estimate** | ~2 days |
| **Sprint** | Sprint 14 |
| **Assignee** | Unassigned (ready for pickup) |
:::

---

## Persona

**Maya**, 34, is a working mother who uses the Momentum app for 5–10 minutes before bed. She values the app as a moment of calm in a hectic day. She is not tech-savvy and will not read instructions — the experience must be self-explanatory. She writes short, honest reflections (1–3 sentences). She will abandon the flow if anything feels complicated or slow.

| Attribute | Detail |
|-----------|--------|
| **Tech comfort** | Low — uses phone daily but doesn't explore settings or advanced features |
| **Writing style** | Brief and personal ("My daughter found a ladybug today and we watched it for 5 minutes") |
| **Session context** | Evening, in bed, low light, likely tired |
| **Motivation** | Wants to feel like she's doing something meaningful, even for 2 minutes |
| **Risk of churn** | High if the app feels like work; low if it feels like a gift |

---

## Acceptance Criteria (Gherkin)

```gherkin
@feature-journal @epic-entry-creation @story-MOM-247

Feature: Journal Entry Creation
  As a user
  I want to write and save a reflection for today's prompt
  So I can capture my daily moment of meaning

  Background:
    Given I am on the Journal tab of the Saved screen
    And today's prompts have loaded successfully

  # --- Happy Path ---

  Scenario: User writes and saves a journal entry
    Given I see the prompt carousel with 3 prompts
    When I tap on the text area below the selected prompt
    And I type "My daughter found a ladybug today"
    And I tap the "Save" button
    Then the entry is saved locally
    And a star animation plays for ≤ 1.5 seconds
    And the entry appears in the "Past Entries" section
    And the text area resets to empty
    And an analytics event "journal_entry_saved" is fired

  Scenario: User selects a different prompt before writing
    Given I see the prompt carousel showing prompt 1 of 3
    When I swipe left to prompt 2
    Then prompt 2 is displayed with its theme icon
    And the text area is ready for input
    When I type "A colleague thanked me today" and tap "Save"
    Then the entry is saved with prompt 2's ID as the linked prompt

  # --- Edge Cases ---

  Scenario: User taps Save with no text entered
    Given the text area is empty
    When I tap the "Save" button
    Then the button does not trigger a save
    And a subtle hint appears: "Write a few words first"
    And the hint disappears after 3 seconds
    And no analytics event is fired

  Scenario: User writes an entry while offline
    Given my device has no network connectivity
    When I type "Grateful for the rain" and tap "Save"
    Then the entry is saved to local storage
    And a star animation plays
    And a small "Saved offline" indicator appears
    And when connectivity returns, the entry syncs to the server

  Scenario: User attempts to save a duplicate entry for the same prompt
    Given I have already saved an entry for today linked to prompt 1
    When I open the journal and select prompt 1 again
    Then I see my existing entry in read-only mode
    And the "Save" button is replaced with "Saved ✓"
    And I can still write a new entry by selecting a different prompt

  Scenario: User writes multiple entries in one day
    Given I have already saved one entry today
    When I open the journal and select a different prompt
    And I write and save a second entry
    Then both entries appear in the "Past Entries" section under today's date
    And only the first entry of the day counts for the star/streak

  Scenario: Prompt content fails to load
    Given the CMS is unreachable and no cached prompts are available
    When I open the journal
    Then 3 fallback prompts from the embedded set are displayed
    And the experience is otherwise identical
    And an error event "prompt_load_failed" is logged (not shown to user)

  Scenario: User types the maximum character limit
    Given I am writing an entry
    When my text reaches 2000 characters
    Then a character counter appears: "2000 / 2000"
    And further typing is prevented
    And the counter text turns amber at 1800 characters as a warning
```

---

## States

The entry creation flow has four distinct states. Each must be visually designed and tested:

| State | Description | Visual |
|-------|-------------|--------|
| **Empty** | Text area is blank, Save button is disabled (greyed out), prompt carousel is active | Placeholder text: *"What made today meaningful?"* in light grey |
| **Writing** | Text area has content, Save button is enabled (primary colour), character counter appears at 1800+ chars | Text area has a subtle border highlight; Save button pulses gently once when first enabled |
| **Saved** | Entry has been saved, star animation plays, text area resets | Full-screen overlay for star animation (1.5s), then returns to empty state with "Past Entries" updated |
| **Error** | Save failed (network error, server error) | Toast message: "Couldn't save — your entry is safe locally. We'll try again." Entry remains in text area. Retry is automatic on next connectivity change. |

---

## Edge Cases

| # | Case | Expected Behaviour |
|---|------|-------------------|
| EC1 | User enters only whitespace | Treated as empty — Save button remains disabled |
| EC2 | User is offline | Entry saved locally; syncs on reconnect; "Saved offline" indicator shown |
| EC3 | User taps Save rapidly (double tap) | Debounce on Save button (300ms); only one entry created |
| EC4 | Multiple entries per day | Allowed (max 5 per day); only first entry earns star |
| EC5 | Prompt carousel not loaded | Show 3 hardcoded fallback prompts |
| EC6 | App backgrounded during save | Save completes in background; entry appears on return |
| EC7 | User rotates device during writing | Text area content preserved; layout reflows correctly |
| EC8 | Entry text contains special characters or emoji | Stored and displayed correctly; no sanitisation that strips user content |
| EC9 | User's device clock is wrong | Entry date is local device date (even if "wrong"); this is a conscious decision — we trust the device |

---

## Wireframes (Lo-Fi)

The flow consists of four screens/states. These are descriptive wireframes — visual design is handled by the design team in Figma.

### Screen 1: Prompt Selection
```
┌──────────────────────────────┐
│  ← Saved          Journal ○  │
├──────────────────────────────┤
│                              │
│  ┌─────┐ ┌─────┐ ┌─────┐   │
│  │ P1  │ │ P2  │ │ P3  │   │
│  │     │ │     │ │     │   │
│  │ 🌿  │ │ ✨  │ │ 💛  │   │
│  └─────┘ └─────┘ └─────┘   │
│     ●       ○       ○       │
│                              │
│  "What made you smile today?"│
│                              │
│  ┌──────────────────────┐   │
│  │ Write your reflection │   │
│  │                      │   │
│  │                      │   │
│  └──────────────────────┘   │
│                              │
│    [ Save ]  (disabled)      │
│                              │
│  ── Past Entries ──          │
│  Yesterday: "Grateful..."   │
│  Oct 12: "The sunset..."    │
└──────────────────────────────┘
```

### Screen 2: Writing
```
┌──────────────────────────────┐
│  ← Saved          Journal ○  │
├──────────────────────────────┤
│                              │
│  "What made you smile today?"│
│                              │
│  ┌──────────────────────┐   │
│  │ My daughter found a   │   │
│  │ ladybug today and we  │   │
│  │ watched it for five   │   │
│  │ minutes.              │   │
│  │                      │   │
│  └──────────────────────┘   │
│                   87 / 2000  │
│                              │
│    [ Save ✓ ]  (enabled)     │
│                              │
└──────────────────────────────┘
```

### Screen 3: Saved Confirmation
```
┌──────────────────────────────┐
│                              │
│                              │
│            ⭐                │
│         ✨    ✨             │
│       ✨   ⭐   ✨           │
│         ✨    ✨             │
│            ✨                │
│                              │
│     "Moment captured"        │
│                              │
│                              │
└──────────────────────────────┘
  (auto-dismiss after 1.5s)
```

### Screen 4: Return to Journal
```
┌──────────────────────────────┐
│  ← Saved          Journal ○  │
├──────────────────────────────┤
│                              │
│  (prompt carousel, reset)    │
│                              │
│  ┌──────────────────────┐   │
│  │ What made today       │   │
│  │ meaningful?           │   │
│  └──────────────────────┘   │
│                              │
│    [ Save ]  (disabled)      │
│                              │
│  ── Past Entries ──          │
│  Today: "My daughter..."  ⭐ │
│  Yesterday: "Grateful..."   │
│  Oct 12: "The sunset..."    │
└──────────────────────────────┘
```

---

## Data Model

```typescript
interface JournalEntry {
  id: string;              // UUID v4, generated client-side
  date: string;            // ISO 8601 date (YYYY-MM-DD), local device date
  index: number;           // Entry number for this date (1-based, max 5)
  prompt_id: string;       // CMS prompt ID (e.g., "prmt_abc123")
  user_text: string;       // Plaintext, max 2000 characters
  created_at: string;      // ISO 8601 datetime with timezone
  synced_at: string | null; // null until synced to server
}
```

:::details Why no `ai_summary` field here?
The AI summary feature is a separate story (MOM-251). This story covers entry creation only. The data model in the feature document includes `ai_summary` and `ai_mode` fields, but those will be added when MOM-251 is implemented. Keeping stories atomic means the data model grows incrementally.
:::

---

## API Contract

### POST `/journal/entries`

**Request:**

```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "date": "2025-10-14",
  "index": 1,
  "prompt_id": "prmt_abc123",
  "user_text": "My daughter found a ladybug today and we watched it for five minutes.",
  "created_at": "2025-10-14T21:34:07+02:00"
}
```

**Response (201 Created):**

```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "date": "2025-10-14",
  "index": 1,
  "prompt_id": "prmt_abc123",
  "user_text": "My daughter found a ladybug today and we watched it for five minutes.",
  "created_at": "2025-10-14T21:34:07+02:00",
  "synced_at": "2025-10-14T19:34:08Z"
}
```

**Error responses:**

| Status | Condition | Body |
|--------|-----------|------|
| `400` | Missing required field or `user_text` exceeds 2000 chars | `{ "error": "validation_error", "message": "user_text exceeds 2000 characters" }` |
| `409` | Entry with same `id` already exists | `{ "error": "duplicate_entry", "message": "Entry already exists" }` |
| `429` | More than 5 entries in one day | `{ "error": "rate_limited", "message": "Maximum 5 entries per day" }` |
| `500` | Server error | `{ "error": "internal_error", "message": "Please try again" }` |

---

## Accessibility Notes

| Requirement | Implementation |
|-------------|---------------|
| **Screen reader — prompt carousel** | Each prompt card has `aria-label="Journal prompt [N] of 3: [prompt text]"` and `role="option"` |
| **Screen reader — text area** | `aria-label="Write your reflection"`, linked to the active prompt via `aria-describedby` |
| **Screen reader — Save button** | `aria-label="Save journal entry"` when enabled; `aria-disabled="true"` with `aria-label="Save journal entry — write something first"` when disabled |
| **Screen reader — star animation** | `aria-live="polite"` announcement: "Entry saved. You earned a star." |
| **Font scaling** | Text area and prompt text respect system font size settings (Dynamic Type on iOS, font scale on Android) up to 200% |
| **Colour contrast** | All text meets WCAG 2.1 AA (≥ 4.5:1 body, ≥ 3:1 large text) in both light and dark themes |
| **Motor accessibility** | All interactive elements have minimum tap target of 44×44 points; no gesture-only interactions (swipe has tap alternative) |
| **Reduced motion** | If "Reduce Motion" is enabled, star animation is replaced with a static "Saved ✓" confirmation |

---

## Signals (Analytics Events)

| Event | Trigger | Properties |
|-------|---------|------------|
| `journal_entry_saved` | Entry saved (locally or synced) | `entry_id`, `prompt_id`, `char_count`, `is_offline`, `entry_index` (1st–5th of day) |
| `journal_prompt_viewed` | Prompt carousel displayed | `prompt_ids` (array of 3), `source` ("cms" or "fallback") |
| `journal_prompt_swiped` | User swipes between prompts | `from_index`, `to_index` |
| `time_spent_writing` | Calculated on save | `entry_id`, `duration_seconds` (time between first keystroke and save tap) |
| `journal_save_failed` | Save attempt failed | `entry_id`, `error_type`, `is_offline` |
| `journal_tab_opened` | User navigates to journal tab | `has_entry_today` (boolean), `streak_count` |

:::warning Content is never logged
The `user_text` field is **never** included in analytics events. We track behavioural signals (did they write, how long, which prompt) but never the content of the reflection. This is a privacy requirement, not a nice-to-have.
:::

---

## Dependencies

| Dependency | Owner | Status | Risk if Unavailable |
|------------|-------|--------|-------------------|
| Prompt content in CMS (Contentful) | Content team | ✅ 90 prompts loaded | Fallback to hardcoded set (no blocker) |
| Star increment service | Backend team | ✅ Existing endpoint | Star animation plays but count may not update until sync |
| Local storage schema (SQLite) | Mobile team | ✅ Schema approved | Blocker — required for offline support |
| Analytics SDK configured | Platform team | ✅ SDK v3.2 integrated | Events silently dropped (no user impact) |

---

## Estimate

| Component | Effort |
|-----------|--------|
| Frontend: EntryEditor component + state management | 0.75 days |
| Frontend: Save flow + offline handling | 0.5 days |
| Frontend: Star animation + streak update | 0.25 days |
| Backend: POST endpoint + validation | 0.25 days |
| Integration: Analytics events | 0.25 days |
| **Total** | **2 days (~3 story points)** |

---

## Definition of Ready — Checklist

Every item must be checked before this story enters a sprint:

| # | DoR Item | Status | Evidence |
|---|----------|--------|----------|
| 1 | **User story is clearly written** with persona, action, and value | ✅ | Story card above; persona section details Maya's context |
| 2 | **Acceptance criteria are complete** with happy path and edge cases | ✅ | 8 Gherkin scenarios covering happy path, edge cases, and error states |
| 3 | **Wireframes or visual reference** exists | ✅ | 4 lo-fi wireframes above; hi-fi in Figma (linked in Jira) |
| 4 | **Data model is defined** | ✅ | `JournalEntry` interface with field types and constraints |
| 5 | **API contract is specified** | ✅ | POST endpoint with request/response format and error codes |
| 6 | **Dependencies are identified and resolved** | ✅ | 4 dependencies listed, all resolved or have fallbacks |
| 7 | **Accessibility requirements are specified** | ✅ | 7 accessibility requirements with implementation notes |
| 8 | **Analytics events are defined** | ✅ | 6 events with triggers and properties; privacy constraint documented |
| 9 | **Estimate is provided** by the development team | ✅ | 3 story points / ~2 days, broken down by component |

:::info All 9 items are green
This story is ready for sprint planning. A developer can pick it up, read it once, and start building. Questions about scope, edge cases, and technical contracts have been answered in advance — not because developers can't figure them out, but because answering them in advance prevents misalignment and rework.
:::

---

## Framework Connections

This story demonstrates the full chain from the [4-Layer Hierarchy](/four-layers):

```
Initiative: Create daily ritual for emotional connection
  └── Epic: Entry Creation & Prompt Flow
       └── Feature: Living Wondrously Journal
            └── Story: Journal Entry Creation  ← you are here
```

The [Definition of Ready](/upstream/definition-of-ready) checklist ensures that every story entering a sprint has been through the rigour of [Upstream](/upstream/) discovery. The Gherkin acceptance criteria feed directly into [AssertThat](/downstream/gherkin) for automated testing. The analytics events defined here will eventually appear in the [Offstream](/offstream/) feedback loop, closing the cycle.

---

**← Back to:** [Examples Gallery](./index)
