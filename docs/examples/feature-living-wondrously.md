# Feature Document — Living Wondrously Journal

:::info Document Metadata
| Field | Value |
|-------|-------|
| **Version** | 1.2 |
| **Date** | Oct 2025 |
| **Status** | Approved — development in progress |
| **Owner** | Product (Momentum App Team) |
| **Linked Initiative** | Create daily ritual for emotional connection |
| **Linked Epic** | Entry Creation & Prompt Flow |
| **Feature Board** | [MOMENTUM-Journal](https://200apps.atlassian.net/jira/software/projects/MOM/boards/9) |
:::

---

## 1. Vision

The Living Wondrously Journal exists to **deepen the user's relationship with daily moments of meaning**. It transforms a passive content consumption app into an active reflection tool — a space where users don't just read about living wondrously, they *practice* it.

The journal is a **daily ritual, not a feature**. It should feel like opening a favourite notebook at the end of the day — warm, personal, unhurried. Every design decision optimises for **habit formation** and **emotional engagement** over feature density.

:::tip Design North Star
If a user opens the journal and feels rushed, we've failed. If they close it and feel lighter, we've succeeded.
:::

---

## 2. Goals

| # | Goal | Metric | Target |
|---|------|--------|--------|
| G1 | Increase 7-day retention | % of users returning within 7 days of first journal entry | ≥ 45% |
| G2 | Drive daily engagement | % of DAU who open the journal section | ≥ 15% of DAU |
| G3 | Build personalization foundation | # of entries per user (data for future AI features) | ≥ 3 entries in first 14 days |
| G4 | Emotional satisfaction | Post-entry micro-survey ("How do you feel?") | ≥ 4.2 / 5.0 |

---

## 3. Experience Snapshot — Maya's Evening Routine

> **Maya** is a 34-year-old working mother. She uses the Momentum app for 5–10 minutes before bed as a wind-down ritual. Tonight, after putting the kids to sleep, she opens the app.
>
> She sees a gentle prompt on her Saved screen: *"What made you smile today?"*
>
> She taps into the journal. Three prompts are waiting — she swipes to the second one: *"Describe a moment today when you felt fully present."* She writes two sentences about watching her daughter discover a ladybug in the garden.
>
> She taps the ✨ button. An AI-generated summary appears — a warm, affirming reflection of what she wrote, highlighting the theme of presence and connection. She smiles.
>
> She saves the entry. A star animation plays. She's earned her third star this week. She taps "Past Entries" and scrolls through her week — three small moments she'd already forgotten. She closes the app feeling grateful.

---

## 4. User Experience Overview

The journal flow follows a deliberate sequence designed around reflection, not productivity:

```
Prompt → Write → Enrich with AI → Save → Star → Revisit
```

| Step | What Happens | Design Intent |
|------|-------------|---------------|
| **Prompt** | User sees 3 rotating prompts, swipeable | Reduce blank-page anxiety; give starting points |
| **Write** | Free-text area, no formatting, no word count | Remove friction; honour the thought, not the form |
| **Enrich** | Optional AI summary (Wonder or Motivation mode) | Reflect the user's words back with warmth; surprise and delight |
| **Save** | Single tap, confirmation animation | Closure; the moment is captured |
| **Star** | Celebratory micro-animation, streak counter | Habit reinforcement; visible progress |
| **Revisit** | Past entries in chronological list, grouped by day | Build identity narrative; "look how far I've come" |

---

## 5. Functional Breakdown

### 5.1 Access & Entry Creation

**Entry point:** The journal is accessible from the Saved/Bookmark screen via a dedicated "Journal" tab. This placement is intentional — the Saved screen is where users already go for personal content.

**Today-first pattern:** When the journal tab opens, today's entry (if it exists) is shown first. If no entry exists for today, the prompt carousel appears. Users can always scroll down to see past entries.

| Rule | Detail |
|------|--------|
| One primary entry per day | Users can write multiple entries, but only the first one counts for the star/streak |
| Entry date = local device date | Not server date — respects the user's timezone |
| No editing after save | Entries are immutable after saving (encourages honesty over perfectionism) |
| Offline creation | Entries save locally and sync when connectivity returns |

### 5.2 Prompt Carousel

Three prompts are displayed in a swipeable horizontal carousel at the top of the journal entry screen.

| Attribute | Detail |
|-----------|--------|
| **Source** | Prompts are managed in the CMS (Contentful) and tagged by theme (gratitude, presence, connection, growth) |
| **Selection** | 3 prompts per day, selected by: 1 from today's theme, 1 random, 1 from least-used theme for this user |
| **Stability** | Prompts are stable within a calendar day — refreshing the app shows the same 3 prompts |
| **Fallback** | If CMS is unreachable, show 3 hardcoded prompts from an embedded fallback set |
| **Display** | Each prompt card shows: prompt text (max 120 chars), theme icon, theme colour accent |

### 5.3 AI Summaries

After the user writes their entry, they can optionally tap the ✨ button to generate an AI-enriched summary. Two modes are available:

#### Wonder Mode
- **Tone:** Warm, reflective, affirming
- **Purpose:** Mirror the user's words back with added depth
- **System prompt:**

```
You are a warm, thoughtful companion. The user has written a brief 
journal reflection. Summarise their entry in 2-3 sentences that:
1. Acknowledge the specific moment they described
2. Name the emotion or theme you sense (presence, gratitude, 
   connection, growth)
3. End with an affirming observation — not advice

Tone: gentle, never preachy. Use "you" naturally. Do not use emojis.
Max 60 words.
```

#### Motivation Mode
- **Tone:** Encouraging, energising, forward-looking
- **Purpose:** Connect today's reflection to tomorrow's intention
- **System prompt:**

```
You are an encouraging daily companion. The user has written a brief 
journal reflection. Respond in 2-3 sentences that:
1. Acknowledge what they noticed today
2. Connect it to a strength or pattern you see
3. Offer a gentle prompt for tomorrow — not a task, a possibility

Tone: warm but energising. Use "you" naturally. Do not use emojis.
Max 60 words.
```

:::warning AI integration is stateless
Each summary request is independent — the AI does not have access to past entries. This is a deliberate privacy decision. Future phases may introduce opt-in memory with explicit consent.
:::

| Rule | Detail |
|------|--------|
| Provider | OpenAI GPT-4o-mini via backend proxy (no direct client-to-API calls) |
| Rate limit | 1 summary per entry, 5 summaries per day per user |
| Timeout | 8 seconds; on timeout, show "Summary unavailable" with retry option |
| Content safety | Response is filtered for harmful content before display |
| Storage | AI summary is stored alongside the entry; user can delete it independently |

### 5.4 Past Entries

Past entries are displayed in a reverse-chronological list below the today section.

| Attribute | Detail |
|-----------|--------|
| **Grouping** | Entries grouped by day with date headers ("Today", "Yesterday", "Mon, Oct 13") |
| **Preview** | Each entry card shows: first 80 characters of text, theme icon, star indicator, AI summary indicator |
| **Detail view** | Tapping an entry opens full view: prompt text, user text, AI summary (if generated), timestamp |
| **Scroll behaviour** | Infinite scroll with lazy loading (20 entries per page) |
| **Empty state** | If no past entries: illustration + "Your story starts today" message |

### 5.5 Reward System

Stars reinforce the daily journaling habit without gamifying the reflective experience.

| Mechanic | Detail |
|----------|--------|
| **Star earned** | One star per calendar day for saving at least one entry |
| **Streak** | Consecutive days with entries; displayed as "🔥 3-day streak" |
| **Celebration** | On save: star icon scales up with a gentle particle animation (< 1.5 seconds) |
| **Streak milestones** | 3, 7, 14, 30 days — special animation variant at each milestone |
| **Streak grace** | Missing one day reduces the streak counter but doesn't reset to zero (forgiveness model) |
| **No leaderboard** | Journaling is personal — no social comparison features |

### 5.6 Notifications

The journal uses the app's existing notification system. No new notification infrastructure is required.

| Notification | Trigger | Content | Frequency |
|-------------|---------|---------|-----------|
| Evening reminder | 8:00 PM local time (configurable) | "Take a moment to reflect on your day" | Daily (if enabled) |
| Streak at risk | 9:00 PM on a day with no entry, if streak ≥ 3 | "Don't break your [N]-day streak!" | Once per day |

### 5.7 Privacy & Data Handling

:::warning Privacy is non-negotiable
Journal entries are deeply personal. The data handling rules below are product requirements, not engineering nice-to-haves.
:::

| Rule | Detail |
|------|--------|
| **Anonymous by default** | Entries are stored with a device-generated UUID, not linked to an account unless the user explicitly signs in |
| **No analytics on content** | We track *that* an entry was saved, not *what* was written. Entry text is never sent to analytics. |
| **Tooltip** | A 🔒 icon next to the text area; tapping shows: "Your words stay private. We never read or analyse your journal entries." |
| **Deletion** | Users can delete individual entries or all entries from settings. Deletion is permanent and immediate — no soft delete. |
| **Encryption** | Entries encrypted at rest (AES-256) on device and in transit (TLS 1.3) |
| **Export** | Users can export all entries as a plain text file from settings |

---

## 6. Components Involved

| Component | Type | Change Required |
|-----------|------|----------------|
| `JournalTab` | New frontend component | Build from scratch |
| `PromptCarousel` | New frontend component | Build from scratch |
| `EntryEditor` | New frontend component | Build from scratch |
| `AISummaryCard` | New frontend component | Build from scratch |
| `PastEntriesList` | New frontend component | Build from scratch |
| `StarAnimation` | New frontend component | Build from scratch |
| `SavedScreen` | Existing screen | Add Journal tab to tab bar |
| `NotificationService` | Existing service | Add journal reminder templates |
| `ContentfulCMS` | Existing integration | Add prompt content type |
| `AI Proxy API` | New backend service | Build endpoint for summary generation |
| `Journal API` | New backend service | CRUD endpoints for entries |
| `LocalStorage` | Existing module | Add journal entry schema |

---

## 7. Architecture Plan

### Data Model

```typescript
interface JournalEntry {
  id: string;              // UUID v4
  date: string;            // ISO 8601 date (YYYY-MM-DD), local to device
  index: number;           // Entry number for this date (1-based)
  prompt_id: string;       // Reference to CMS prompt
  prompt_text: string;     // Denormalized for offline access
  user_text: string;       // The user's reflection (plaintext, max 2000 chars)
  ai_summary: string | null;
  ai_mode: 'wonder' | 'motivation' | null;
  starred: boolean;        // Whether this entry earned a star
  created_at: string;      // ISO 8601 datetime
  synced_at: string | null;
}
```

### API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `POST` | `/journal/entries` | Create a new entry |
| `GET` | `/journal/entries` | List entries (paginated, newest first) |
| `GET` | `/journal/entries/:id` | Get a single entry |
| `DELETE` | `/journal/entries/:id` | Permanently delete an entry |
| `POST` | `/journal/entries/:id/summarize` | Generate AI summary for an entry |
| `GET` | `/journal/prompts/today` | Get today's 3 prompts |
| `GET` | `/journal/stats` | Get streak count, total stars, total entries |

### AI Integration Flow

```
┌─────────┐     ┌──────────┐     ┌────────────┐     ┌──────────┐
│  Client  │────▶│  API GW  │────▶│  AI Proxy  │────▶│  OpenAI  │
│          │◀────│          │◀────│            │◀────│  GPT-4o  │
└─────────┘     └──────────┘     └────────────┘     └──────────┘
                                       │
                                 ┌─────┴─────┐
                                 │  Content   │
                                 │  Filter    │
                                 └───────────┘
```

The AI Proxy handles: rate limiting, timeout management, content safety filtering, and response caching (same entry ID + mode = cached response for 24 hours).

### Frontend Component Tree

```
SavedScreen
└── JournalTab
    ├── TodaySection
    │   ├── PromptCarousel
    │   │   └── PromptCard (×3)
    │   ├── EntryEditor
    │   │   ├── TextArea
    │   │   ├── AISummaryButton
    │   │   └── SaveButton
    │   └── AISummaryCard
    │       ├── SummaryText
    │       └── ModeToggle (Wonder / Motivation)
    ├── StarAnimation (overlay)
    └── PastEntriesSection
        ├── DayGroup
        │   └── EntryCard (×n)
        └── EmptyState
```

---

## 8. Risks & Mitigation

| # | Risk | Likelihood | Impact | Mitigation |
|---|------|-----------|--------|------------|
| R1 | AI summaries feel generic or tone-deaf | Medium | High | Extensive prompt engineering with 50+ test entries; A/B test Wonder vs Motivation modes; include a "This didn't resonate" feedback button |
| R2 | Low adoption — users don't find the journal | Medium | High | Prominent placement on Saved screen; onboarding tooltip on first visit; evening push notification |
| R3 | Privacy concerns deter usage | Low | Critical | Visible privacy tooltip; no content analytics; transparent data handling in settings; clear deletion flow |
| R4 | Offline-online sync conflicts | Medium | Medium | Conflict resolution: device entry wins (last-write-wins with device priority); sync status indicator visible to user |
| R5 | Prompt fatigue — same prompts feel repetitive | Medium | Medium | Minimum 90 prompts in CMS at launch; prompt rotation algorithm avoids recent repeats; allow user to refresh prompts |
| R6 | AI latency ruins the reflective mood | Low | Medium | 8-second timeout; skeleton loader with "Reflecting on your words..." message; cached responses for retry |

---

## 9. Testing & Quality Strategy

### Functional Testing

| Area | Test Type | Coverage |
|------|-----------|----------|
| Entry CRUD | Unit + Integration | Create, read, list, delete; pagination; date boundaries |
| Prompt loading | Unit + Integration | CMS fetch, fallback to hardcoded, stability within day |
| AI summary | Integration + Contract | Both modes, timeout handling, content filter, rate limiting |
| Offline creation | E2E | Create entry offline, verify local storage, verify sync on reconnect |
| Star/streak logic | Unit | First entry per day, multiple entries, streak calculation, grace period |

### Privacy Testing

| Test | Method |
|------|--------|
| Entry text never appears in analytics events | Code review + integration test asserting analytics payload excludes `user_text` |
| Deletion is permanent | Integration test verifying no record exists in any storage layer after delete |
| Encryption at rest | Verify device storage is encrypted; attempt to read raw database file |

### UX Testing

| Test | Method |
|------|--------|
| First-time journal experience | Usability test with 5 users; measure time-to-first-entry and qualitative feedback |
| AI summary satisfaction | A/B test Wonder vs Motivation; measure "This resonated" tap rate |
| Prompt carousel usability | Observe 5 users interacting with prompts; check for swipe discoverability |

### AI Quality Testing

| Test | Method |
|------|--------|
| Tone consistency | 50 test entries across themes; rate each AI response on a 5-point scale for warmth, relevance, and non-prescriptiveness |
| Edge cases | Empty-ish entries ("good day"), very long entries (2000 chars), entries in non-English languages |
| Safety | Entries describing distress or self-harm; verify response is compassionate and does not offer medical advice |

### Notification Testing

| Test | Method |
|------|--------|
| Evening reminder fires at correct local time | Manual test across 3 timezones |
| Streak-at-risk notification logic | Unit test for streak ≥ 3 with no entry by 9 PM |
| Notification respects user preferences | Verify no notification if user has disabled journal reminders |

---

:::details How this feature document connects to the framework
This document follows the structure recommended in the [Discovery Backbone](/upstream/discovery-backbone): it starts with vision (Station 1), defines measurable goals (Station 2), walks through the user experience (Station 3), breaks down into functional requirements (Station 4), and addresses architecture and risks (Station 5).

The Experience Snapshot (Maya's evening routine) is a [User Journey](/upstream/user-journey) compressed into a narrative. It serves the same purpose — ensuring the team builds for a real person in a real context, not an abstract "user."

Each story within this feature should pass the [Definition of Ready](/upstream/definition-of-ready) checklist before entering the sprint backlog. The [Journal Entry Creation story](./story-journal-entry) in this gallery shows what that looks like in practice.
:::

---

**Next example:** [RCA — Wallet Balance Bug →](./rca-wallet-balance)
