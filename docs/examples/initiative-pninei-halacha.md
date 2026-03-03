# Initiative Brief — Pninei Halacha Foundation

:::info Document Metadata
| Field | Value |
|-------|-------|
| **Version** | 0.3 |
| **Date** | Sep 28, 2025 |
| **Status** | Draft — pending stakeholder review |
| **Owner** | Product (200Apps) × Yeshivat Har Bracha |
| **Milestone** | M1 — Foundation |
| **Linked Epic Board** | [PH Board](https://200apps.atlassian.net/jira/software/projects/PH/boards/12) |
:::

---

## 1. Business Intent

**Validate that a calm, multilingual, offline-first companion app delivers reading value with minimal setup.**

Pninei Halacha is a comprehensive halachic (Jewish law) series authored by Rabbi Eliezer Melamed. The works span 20+ volumes and are read daily by tens of thousands of learners in Hebrew, with growing demand in English, French, Spanish, and Russian.

Today, readers access content through a dated website with no mobile-first experience, no offline support, and no way to track reading progress. The Foundation milestone exists to prove — with evidence — that a native mobile experience can serve this audience better than the status quo.

:::tip Why "Foundation" and not "MVP"?
We deliberately avoid the term MVP because it implies shipping the minimum viable *product*. This milestone is about shipping the minimum viable *learning experience* — the smallest set of functionality that lets a real reader complete a real reading session without friction. If we can't get that right, nothing else matters.
:::

---

## 2. Target Outcomes

The Foundation milestone succeeds when a reader can:

| # | Outcome | Measurable Signal |
|---|---------|-------------------|
| 1 | **Install → Choose → Find → Read** entirely offline | First reading begins within 90 seconds of launch, with airplane mode on |
| 2 | **Reading feels respectful** of the content's nature | Qualitative feedback from 5+ beta testers rates typography and layout ≥ 4/5 |
| 3 | **Evidence to steer** future milestones | Analytics events fire for install, first-open, book-select, chapter-open, read-duration |
| 4 | **Conventions scale** across languages | Adding a new language requires content import only — no code changes to UI or navigation |

---

## 3. Readiness Measures

These are the quantitative gates that must pass before M1 is considered complete:

| Measure | Target | Method |
|---------|--------|--------|
| First-time journey (install → reading) | < 90 seconds without external guidance | Stopwatch test with 3 unfamiliar users |
| Crash-free rate | ≥ 99.5% on mid-tier Android (Pixel 5a equivalent) | Firebase Crashlytics over 7-day beta |
| Content availability | At least one complete Hebrew work downloadable for offline | Manual verification |
| Accessibility baseline | Passes WCAG 2.1 AA for text content screens | Automated scan + manual screen-reader test |
| Cold start time | < 3 seconds on target device | Measured via performance trace |

---

## 4. Scope — 6 Epics

### Epic 1: First-Run Setup

**Goal:** Get the reader from install to their first book selection in under 60 seconds with zero confusion.

| Story | Acceptance Criteria |
|-------|--------------------|
| **PH-101** As a new user, I want to select my preferred app UI language so the interface speaks my language | Given the app launches for the first time, When the language picker appears, Then I see Hebrew, English, French, Spanish, Russian as options; And selecting one sets all UI strings immediately; And the selection persists across app restarts |
| **PH-102** As a new user, I want a brief onboarding that explains what the app offers so I understand its purpose | Given I've selected my language, When onboarding begins, Then I see ≤ 3 screens explaining: what Pninei Halacha is, how to browse, how offline works; And I can skip at any point; And skip is visually prominent (not hidden) |
| **PH-103** As a new user, I want to download content for offline reading so I can read without connectivity | Given onboarding completes, When the download prompt appears, Then I see available content packs with sizes; And I can choose which to download; And download progress is visible; And the app remains usable during background download |

### Epic 2: Library Discovery

**Goal:** Let the reader browse available works and find the chapter they want within 3 taps.

| Story | Acceptance Criteria |
|-------|--------------------|
| **PH-201** As a reader, I want to see all available books organized by topic so I can choose what to study | Given I'm on the library screen, When books are displayed, Then they are grouped by topic (Prayer, Shabbat, Festivals, etc.); And each book shows title, author, and chapter count; And the list respects my content language preference |
| **PH-202** As a reader, I want to search for a topic or chapter so I can jump directly to what I need | Given I tap the search icon, When I type a query, Then results appear as I type (debounced, 300ms); And results include book title, chapter title, and a snippet; And tapping a result opens the chapter |
| **PH-203** As a reader, I want to see my recently opened chapters so I can resume where I left off | Given I've previously read chapters, When I open the library, Then a "Continue Reading" section appears at the top; And it shows the last 5 chapters with progress indicators; And tapping resumes at my last scroll position |

### Epic 3: Reading Experience (Core)

**Goal:** Deliver a reading experience that honours the content — clean typography, comfortable scrolling, and no distractions.

| Story | Acceptance Criteria |
|-------|--------------------|
| **PH-301** As a reader, I want to read a chapter with proper Hebrew typography so the text is legible and respectful | Given I open a chapter, When the text renders, Then it uses a serif font appropriate for Hebrew religious texts; And line height is ≥ 1.6; And paragraph spacing visually separates halachic rulings from explanatory text; And footnotes are accessible but not intrusive |
| **PH-302** As a reader, I want to adjust text size so I can read comfortably | Given I'm reading a chapter, When I access display settings, Then I can adjust font size (5 levels: XS, S, M, L, XL); And the change applies immediately without page reload; And my preference persists |
| **PH-303** As a reader, I want the reading experience to work identically offline | Given I have downloaded content, When I enable airplane mode and open a chapter, Then the content renders identically to online mode; And navigation between chapters works; And my reading position is saved locally |
| **PH-304** As a reader, I want to bookmark a passage so I can return to it later | Given I'm reading, When I long-press a paragraph, Then a bookmark option appears; And bookmarked passages are accessible from a dedicated Bookmarks screen; And bookmarks sync when connectivity returns |

### Epic 4: Trust & External Actions

**Goal:** Respect the user's autonomy — no dark patterns, no forced sign-up, no hidden data collection.

| Story | Acceptance Criteria |
|-------|--------------------|
| **PH-401** As a reader, I want to use the app without creating an account so I don't face unnecessary barriers | Given I launch the app, When I complete onboarding, Then I can read without signing up; And account creation is available but optional; And the app clearly states what is lost without an account (cross-device sync only) |
| **PH-402** As a reader, I want to share a passage with someone so I can discuss it | Given I'm reading a chapter, When I select text and tap Share, Then the shared content includes the passage text, book title, and chapter reference; And it uses the system share sheet; And shared text is attributed with source |

### Epic 5: Evidence & Readiness

**Goal:** Instrument the app so we have the data to make M2 decisions with confidence.

| Story | Acceptance Criteria |
|-------|--------------------|
| **PH-501** As a product owner, I want anonymous usage events so I can understand reading patterns | Given a reader uses the app, When they perform key actions (install, first-open, book-select, chapter-open, chapter-complete, bookmark-add), Then an analytics event fires with: event_name, timestamp, session_id (anonymous), content_id, platform, app_version; And no PII is collected; And events are batched and sent when online |
| **PH-502** As a product owner, I want a readiness dashboard so I can track M1 gate metrics | Given M1 is in beta, When I open the readiness dashboard, Then I see: crash-free rate (7-day rolling), cold start p50/p95, first-journey completion rate, DAU, chapters read per session; And data refreshes daily |

### Epic 6: Accessibility Baseline

**Goal:** Ensure the app is usable by readers with visual impairments or motor difficulties.

| Story | Acceptance Criteria |
|-------|--------------------|
| **PH-601** As a reader using a screen reader, I want all screens to be navigable so I can use the app independently | Given I enable TalkBack (Android) or VoiceOver (iOS), When I navigate the app, Then all interactive elements have meaningful labels; And reading order follows visual layout; And focus management works correctly on screen transitions |
| **PH-602** As a reader, I want sufficient colour contrast so text is readable in all lighting conditions | Given the app is open, When I view any text content screen, Then text-to-background contrast ratio meets WCAG 2.1 AA (≥ 4.5:1 for body text, ≥ 3:1 for large text); And this is verified in both light and dark themes |

---

## 5. Language Strategy

:::warning This is the hardest architectural decision in M1
Getting language wrong at the foundation level creates debt that compounds with every new locale. The rules below are non-negotiable for M1.
:::

### App UI Language vs. Content Language

These are **independent axes**:

| Concept | Definition | Example |
|---------|------------|---------|
| **App UI Language** | The language of buttons, labels, navigation, and system messages | A French user sees "Bibliothèque" for the library tab |
| **Content Language** | The language of the halachic text being read | The same French user reads a chapter in Hebrew |

A reader may set their UI to French but read content in Hebrew. These must never be coupled.

### Directionality Rules

| Scenario | Direction | Implementation |
|----------|-----------|----------------|
| UI language is Hebrew | RTL | `dir="rtl"` on root layout |
| UI language is English/French/Spanish | LTR | `dir="ltr"` on root layout |
| Content is Hebrew | RTL | `dir="rtl"` on content container, independent of UI |
| Content is English translation | LTR | `dir="ltr"` on content container |
| Mixed (Hebrew quote in English text) | Bi-directional | Use Unicode bidi markers; test with real mixed content |

### Adding a New Language

Adding a new content language must require **only**:
1. Importing the translated content into the CMS
2. Adding the language to a configuration file
3. No code changes to UI components, navigation, or layout logic

---

## 6. Product Principles

These principles resolve ambiguity when the team faces trade-offs:

| Principle | What It Means in Practice |
|-----------|--------------------------|
| **Clarity** | If a reader doesn't understand what to do next, the UI has failed — not the reader. Every screen has one primary action. |
| **Continuity** | Reading is sacred time. The app never interrupts a reading session with modals, promotions, or update prompts. |
| **Trust** | The app does exactly what it says. No surprise data collection, no hidden sign-up gates, no "recommended" content that is actually sponsored. |
| **Inclusion** | The app works for a 70-year-old rabbi on a budget Android phone and a 25-year-old student on the latest iPhone. Performance and accessibility are not afterthoughts. |
| **Privacy Minimalism** | Collect only what is needed to improve the reading experience. No PII. No tracking across apps. No selling of data. Ever. |

---

## 7. Definition of Done — Foundation Milestone

M1 is done when **all** of the following are true:

- [ ] All 6 epics have stories in "Done" status with passing acceptance tests
- [ ] Readiness measures (Section 3) are met with documented evidence
- [ ] The app is available on TestFlight (iOS) and Internal Testing (Android)
- [ ] At least 10 beta testers have completed one full reading session
- [ ] Qualitative feedback collected and synthesised in a 1-page summary
- [ ] Analytics events verified end-to-end (app → pipeline → dashboard)
- [ ] No open P0 or P1 bugs
- [ ] Decision Log (Section 11) is up to date
- [ ] Stakeholder review meeting held with Yeshivat Har Bracha representative

---

## 8. Success Signals for Green-Light to M2

:::details What does "green-light" mean?
Green-light means the product owner and stakeholders agree that M1 has delivered enough evidence to justify investing in M2 (Growth). It is not automatic — it requires a conscious decision based on data.
:::

| Signal | Threshold | Source |
|--------|-----------|--------|
| Beta tester retention (7-day) | ≥ 40% return after first session | Analytics |
| Reading session duration | ≥ 5 minutes median | Analytics |
| Qualitative satisfaction | ≥ 4/5 on "Would you use this instead of the website?" | Survey |
| Crash-free rate | ≥ 99.5% | Crashlytics |
| First-journey completion | ≥ 80% of users reach their first chapter | Analytics funnel |
| Stakeholder confidence | Explicit written approval from Yeshivat Har Bracha | Meeting minutes |

---

## 9. Dependencies & Assumptions

### Dependencies

| Dependency | Owner | Risk if Late |
|------------|-------|-------------|
| Hebrew content in structured format (JSON/Markdown) | Yeshivat Har Bracha editorial team | Blocks Epic 3 entirely — no content to render |
| Typography review by sofer (scribe) or typographic expert | External consultant | Reading experience may not meet "respectful" bar |
| Firebase project provisioned with Analytics + Crashlytics | DevOps (200Apps) | Blocks Epic 5 — no instrumentation |
| App Store / Play Store developer accounts | 200Apps operations | Blocks beta distribution |

### Assumptions

1. Content will be provided in a structured format — not as PDFs or scanned images
2. The initial release targets Hebrew content only; other languages follow in M2
3. No user authentication is required for M1 (anonymous usage)
4. The app will be free with no monetisation in M1
5. Content licensing terms with Yeshivat Har Bracha are finalised before development begins

---

## 10. Risks & Mitigations

| # | Risk | Likelihood | Impact | Mitigation |
|---|------|-----------|--------|------------|
| R1 | Hebrew content delayed or in unusable format | Medium | Critical | Request a sample chapter in week 1; build content importer against that sample; escalate immediately if format differs |
| R2 | RTL layout bugs on older Android devices | High | Medium | Test on a Pixel 3a (Android 12) from sprint 1; budget 20% of reading-experience effort for RTL fixes |
| R3 | Offline storage exceeds device capacity on budget phones | Low | High | Measure content pack sizes early; implement selective download (per-book, not all-at-once) |
| R4 | Beta tester recruitment falls short | Medium | Medium | Partner with Yeshivat Har Bracha to recruit from their existing readership; target 20 testers, minimum 10 |
| R5 | Stakeholder disagreement on typography / presentation | Medium | Medium | Share design mockups in week 2 for early feedback; treat typography review as a formal gate before development |

---

## 11. Timeline (4 Weeks — Indicative)

:::warning This is a planning target, not a commitment
Estimates assume one full-stack developer, one designer (50%), and content availability from day 1. Adjust if team composition differs.
:::

| Week | Focus | Key Deliverables |
|------|-------|-----------------|
| **Week 1** | Setup + Epic 1 (First-Run) + Epic 6 (Accessibility baseline) | Project scaffolding, CI/CD pipeline, language picker, onboarding flow, accessibility audit setup |
| **Week 2** | Epic 2 (Library) + Epic 3 (Reading — start) | Library screen with content groups, search, reading screen with Hebrew typography, offline content storage |
| **Week 3** | Epic 3 (Reading — complete) + Epic 4 (Trust) | Font sizing, bookmarks, sharing, offline parity testing, account-optional flow |
| **Week 4** | Epic 5 (Evidence) + Integration testing + Beta prep | Analytics instrumentation, readiness dashboard, end-to-end testing, beta distribution, stakeholder review prep |

---

## 12. Decision Log

| # | Date | Decision | Rationale | Decided By |
|---|------|----------|-----------|------------|
| D1 | Sep 15, 2025 | Use React Native, not native iOS/Android | Team expertise is in React; cross-platform reduces M1 timeline by ~40%; reading experience is text-heavy (not GPU-intensive) | Tech Lead + Product |
| D2 | Sep 18, 2025 | Anonymous-first, no mandatory sign-up in M1 | Reduces friction; aligns with privacy minimalism principle; account features (sync) deferred to M2 | Product Owner |
| D3 | Sep 22, 2025 | Content stored as structured Markdown with JSON metadata | Markdown renders cleanly with existing libraries; JSON metadata enables search and categorisation without a custom CMS | Tech Lead |
| D4 | Sep 25, 2025 | Hebrew only for M1 content; UI supports 5 languages from day 1 | Content in other languages is not ready; but UI language independence must be proven at foundation level to avoid rework | Product Owner + Yeshivat HB |
| D5 | Sep 28, 2025 | Offline-first architecture (local SQLite + background sync) | Core audience includes users in areas with unreliable connectivity; offline is a requirement, not a feature | Tech Lead |

---

:::tip How this brief connects to the framework
This document follows the [Initiative Brief Template](/upstream/initiative-brief) and was shaped using the [Discovery Backbone](/upstream/discovery-backbone). Each epic maps to a station in the backbone: Epics 1–4 cover the user journey, Epic 5 provides evidence for the [Phase Gate Checklist](/reference/phase-gates), and Epic 6 ensures non-functional requirements are first-class citizens.

The Decision Log pattern comes from the [Upstream Cadence](/upstream/cadence) — decisions are captured in the document, not buried in Slack.
:::

---

**Next example:** [Initiative Brief — Analytics & Graph Intelligence Layer →](./initiative-analytics-layer)
