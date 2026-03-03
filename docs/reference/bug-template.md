# Bug Report Template

Copy this template into Jira when creating a Bug. Apply labels from the [Bug Taxonomy](/onstream/bug-taxonomy).

::: info Why bug reports matter
A well-written bug report is the difference between a 30-minute fix and a 3-day investigation. Every minute spent writing a clear report saves multiples in developer time. The goal is to make the bug **reproducible by anyone** without further conversation.
:::

---

## Classification Guide

Before filling out the template, classify the bug using these two dimensions. Priority is derived automatically.

### Severity (how broken is it?)

| Level | Label | Definition | Examples |
|-------|-------|-----------|----------|
| **Critical** | `severity/critical` | System unusable, data loss, or security breach | Auth service down, payment double-charged, PII exposed |
| **High** | `severity/high` | Major feature broken, no acceptable workaround | Search returns no results, export produces corrupt file |
| **Medium** | `severity/medium` | Feature impaired, workaround exists | Slow page load (>5s), filter resets on navigation |
| **Low** | `severity/low` | Minor issue, cosmetic, or rare edge case | Button misalignment, typo, tooltip cut off |

### Impact (how many users are affected?)

| Level | Label | Definition |
|-------|-------|-----------|
| **Blocker** | `impact/blocker` | All users or a critical workflow for all users |
| **High** | `impact/high` | >30% of users or a key customer segment |
| **Medium** | `impact/medium` | 5–30% of users or a secondary workflow |
| **Low** | `impact/low` | <5% of users or an edge case |

### Priority Matrix (Severity × Impact)

| | Blocker | High | Medium | Low |
|---|---------|------|--------|-----|
| **Critical** | **P0** | **P0** | P1 | P1 |
| **High** | **P0** | **P1** | P1 | P2 |
| **Medium** | P1 | P1 | **P2** | P2 |
| **Low** | P2 | P2 | P2 | **P3** |

::: tip Quick reference
- **P0:** Fix immediately. War room. CEO notified. See [Escalation](/reference/escalation).
- **P1:** Fix this sprint. RCA required.
- **P2:** Planned fix. Prioritised in backlog.
- **P3:** Fix when convenient. Batched with related work.
:::

---

## Reproduction Steps Quality Guide

Poor reproduction steps are the #1 reason bugs bounce between reporter and developer. Follow these rules:

### The Five Requirements

1. **Specific:** Use exact values, not "some data" — write "balance = -$125.50", not "a negative balance"
2. **Numbered:** Every action is a discrete, numbered step
3. **Include the starting state:** Step 1 should describe the precondition or setup
4. **Separate observed from expected:** Clearly state what happened vs. what should have happened
5. **One path:** Describe one path to the bug, not every path you tried

### Good vs. Bad Examples

::: warning Bad
"The balance is wrong sometimes. I think it happens on the dashboard."
:::

::: tip Good
```
1. Log in as test_negative@domain.com (balance: -$125.50)
2. Navigate to /dashboard
3. Observe the wallet balance card

Observed: Balance card displays "$0.00"
Expected: Balance card displays "-$125.50" in red text
```
:::

---

## Environment Details Checklist

Include as many of these as applicable. The more context, the faster the fix.

- [ ] **Browser & version:** e.g., Chrome 126, Firefox 128, Safari 17.5
- [ ] **OS & version:** e.g., macOS 15.1, Windows 11 23H2, iOS 18.1, Android 15
- [ ] **Device:** e.g., iPhone 15 Pro, Samsung Galaxy S24, MacBook Air M3
- [ ] **App version / build:** e.g., v2.13.5, build 4821
- [ ] **API version:** e.g., API v3.2, staging endpoint
- [ ] **User role / permissions:** e.g., admin, regular user, guest
- [ ] **Account type:** e.g., free tier, premium, enterprise
- [ ] **Test account used:** e.g., test_negative@domain.com
- [ ] **Network conditions:** e.g., WiFi, 4G, offline, VPN
- [ ] **Locale / language:** e.g., en-US, he-IL, ar-SA

---

## Screenshot & Recording Requirements by Severity

| Severity | Screenshot Required? | Video Required? | Network Trace? | Console Logs? |
|----------|---------------------|----------------|----------------|--------------|
| **P0 (Critical)** | Yes | Yes | Yes | Yes |
| **P1 (High)** | Yes | Recommended | Recommended | Recommended |
| **P2 (Medium)** | Yes | If UI-related | If API-related | If error shown |
| **P3 (Low)** | Recommended | No | No | No |

::: tip Recording tools
- **Screenshots:** Built-in OS tools (Cmd+Shift+4 on Mac, Win+Shift+S on Windows)
- **Video:** Loom, built-in screen recording, or browser DevTools Recorder
- **Network trace:** Browser DevTools → Network tab → Export HAR
- **Console logs:** Browser DevTools → Console tab → screenshot or copy
:::

---

## Template

```
Title: [Area] Short imperative description of the defect
       Example: "Wallet balance displays $0.00 for users with negative balance"

─────────────────────────────────────────────────────────────────
LABELS (required)
─────────────────────────────────────────────────────────────────
Severity:    severity/critical | severity/high | severity/medium | severity/low
Impact:      impact/blocker | impact/high | impact/medium | impact/low
Priority:    P0 | P1 | P2 | P3  (derived from severity × impact)
Type:        type/bug | type/regression | type/performance | type/security | type/visual
Environment: env/production | env/staging | env/development
Area:        area/api | area/frontend | area/mobile | area/database | area/infra | 
             area/auth | area/data-pipeline | area/payments | area/ux
Root Cause:  root/requirements | root/logic-error | root/testing-gap | root/data |
             root/configuration | root/dependency | root/unknown
             (required for P0/P1 only; set to root/unknown until RCA complete)

─────────────────────────────────────────────────────────────────
SYMPTOM & IMPACT
─────────────────────────────────────────────────────────────────
What the user experiences. Include customer impact count if known.
Example: "Users with negative wallet balance see $0.00. Causes ~140 support 
tickets/month. High churn risk for affected accounts."

─────────────────────────────────────────────────────────────────
STEPS TO REPRODUCE
─────────────────────────────────────────────────────────────────
1. [Starting state / precondition]
2. [Action]
3. [Action]

Observed result: [What actually happened]
Expected result: [What should have happened]

─────────────────────────────────────────────────────────────────
ENVIRONMENT
─────────────────────────────────────────────────────────────────
Environment:     [production / staging / dev]
Version/Build:   [e.g., v2.13.5]
Browser/Device:  [e.g., Chrome 126 / iPhone 15 Pro]
OS:              [e.g., macOS 15.1]
User Role:       [e.g., regular user, admin]
Test Account:    [e.g., test_negative@domain.com]
Locale:          [e.g., en-US]

─────────────────────────────────────────────────────────────────
ATTACHMENTS
─────────────────────────────────────────────────────────────────
[ ] Screenshot
[ ] Video recording
[ ] Network trace / HAR file
[ ] Console errors
[ ] Server logs
[ ] API request/response

─────────────────────────────────────────────────────────────────
OWNER & RCA
─────────────────────────────────────────────────────────────────
Assigned to:   [team or person]
RCA required:  Yes / No (required for P0/P1)
RCA link:      [leave blank until complete]
Related bugs:  [links to related or duplicate bugs]
```

---

## The Bug Triage Ceremony

Bug triage is a recurring ceremony where the team classifies, prioritises, and assigns incoming bugs. Without triage, bugs accumulate in an unstructured backlog and compete on noise rather than impact.

### Format

| Aspect | Detail |
|--------|--------|
| **Frequency** | Twice per week (Tuesday & Thursday recommended) |
| **Duration** | 15–30 minutes |
| **Participants** | QA Lead, Tech Lead, PM, Support Rep (rotating) |
| **Input** | All new bugs since last triage |
| **Output** | Every new bug has: severity, impact, priority, owner, and sprint assignment (if P0/P1) |

### Triage Agenda

1. **Review new bugs** (2 min each): Read title, symptom, and reproduction steps
2. **Classify:** Assign severity and impact labels; derive priority
3. **Deduplicate:** Link to existing bugs if duplicate; close with reference
4. **Assign:** Assign an owner (team or individual)
5. **Schedule:** P0/P1 go into the current sprint. P2 goes into backlog with target sprint. P3 goes into backlog.
6. **Escalate:** Any bug that qualifies as P0 triggers the [escalation protocol](/reference/escalation) immediately — do not wait for triage

::: warning Don't skip triage
Teams that skip triage develop "bug blindness" — a growing backlog that nobody reviews, where P2 bugs hide until they become P0 incidents. The 15-minute investment prevents this.
:::

### Triage Decision Tree

```
Is the bug reproducible?
├── No → Request more info from reporter; mark "Needs Info"
└── Yes
    ├── Is it a duplicate?
    │   ├── Yes → Link to original; close as duplicate
    │   └── No → Continue
    ├── Classify severity (how broken?)
    ├── Classify impact (how many users?)
    ├── Derive priority (P0/P1/P2/P3)
    ├── Is it P0?
    │   ├── Yes → STOP triage. Escalate immediately.
    │   └── No → Continue
    ├── Assign owner
    └── Schedule into sprint or backlog
```

---

## Worked Example 1 — Wallet Balance Bug (P1)

```
Title: [Frontend] Wallet balance displays $0.00 for users with negative balance

─────────────────────────────────────────────────────────────────
LABELS
─────────────────────────────────────────────────────────────────
Severity:    severity/high
Impact:      impact/high
Priority:    P1
Type:        type/bug
Environment: env/staging
Area:        area/frontend
Root Cause:  root/logic-error

─────────────────────────────────────────────────────────────────
SYMPTOM & IMPACT
─────────────────────────────────────────────────────────────────
Users with negative wallet balances see $0.00 on the dashboard 
balance card instead of their actual negative amount.
Detected by QA during staging UAT for v2.13.5.
Estimated ~140 monthly support tickets would result if shipped to production.
Root cause: WalletCard.vue uses Math.max(0, balance) which clamps 
negatives to zero.

─────────────────────────────────────────────────────────────────
STEPS TO REPRODUCE
─────────────────────────────────────────────────────────────────
1. Log in as test_negative@domain.com (balance: -$125.50)
2. Navigate to /dashboard
3. Observe wallet balance card

Observed result: Balance card displays "$0.00"
Expected result: Balance card displays "-$125.50" in red text

─────────────────────────────────────────────────────────────────
ENVIRONMENT
─────────────────────────────────────────────────────────────────
Environment:     staging
Version/Build:   v2.13.5
Browser/Device:  Chrome 126 (also confirmed Firefox 128)
OS:              macOS 14.5
User Role:       regular user
Test Account:    test_negative@domain.com
Locale:          en-US

─────────────────────────────────────────────────────────────────
ATTACHMENTS
─────────────────────────────────────────────────────────────────
[x] Screenshot: balance-zero-bug.png (showing $0.00 on card)
[x] Network trace: API response shows balance: -125.5 (correct)
[x] Console errors: None
[ ] Video: not needed (static display issue)

─────────────────────────────────────────────────────────────────
OWNER & RCA
─────────────────────────────────────────────────────────────────
Assigned to:   Frontend team
RCA required:  Yes (P1)
RCA link:      [RCA-2025-0144 — completed after fix]
Related bugs:  None (first report)
```

---

## Worked Example 2 — P3 Cosmetic Bug

```
Title: [Frontend] Profile page "Save" button misaligned on narrow viewports

─────────────────────────────────────────────────────────────────
LABELS
─────────────────────────────────────────────────────────────────
Severity:    severity/low
Impact:      impact/low
Priority:    P3
Type:        type/visual
Environment: env/production
Area:        area/frontend
Root Cause:  root/unknown

─────────────────────────────────────────────────────────────────
SYMPTOM & IMPACT
─────────────────────────────────────────────────────────────────
On viewports narrower than 375px (e.g., iPhone SE), the "Save" 
button on the profile edit page overlaps the "Cancel" link. 
Functionality is not affected — both elements are tappable — 
but it looks broken and may reduce user confidence.

No support tickets received. Discovered during internal QA sweep.
Estimated <2% of users on sub-375px devices.

─────────────────────────────────────────────────────────────────
STEPS TO REPRODUCE
─────────────────────────────────────────────────────────────────
1. Open Chrome DevTools and set viewport to 360x640 (Galaxy S5)
2. Log in as any test user
3. Navigate to /profile/edit
4. Scroll to bottom of the form
5. Observe the "Save" button and "Cancel" link

Observed result: "Save" button overlaps "Cancel" link by ~20px
Expected result: "Save" and "Cancel" are side-by-side with 
adequate spacing, or stacked vertically

─────────────────────────────────────────────────────────────────
ENVIRONMENT
─────────────────────────────────────────────────────────────────
Environment:     production
Version/Build:   v2.14.0
Browser/Device:  Chrome 126 (DevTools emulation: Galaxy S5 360x640)
OS:              macOS 14.5 (reproduces on actual Android device too)
User Role:       regular user
Test Account:    test_user@domain.com
Locale:          en-US

─────────────────────────────────────────────────────────────────
ATTACHMENTS
─────────────────────────────────────────────────────────────────
[x] Screenshot: profile-save-overlap-360px.png
[ ] Video: not needed
[ ] Network trace: not applicable
[ ] Console errors: none

─────────────────────────────────────────────────────────────────
OWNER & RCA
─────────────────────────────────────────────────────────────────
Assigned to:   Frontend team (backlog)
RCA required:  No (P3)
RCA link:      N/A
Related bugs:  None
```

---

## Worked Example 3 — Analytics Layer Pipeline Bug (P1)

```
Title: [Data Pipeline] Dashboard shows stale data after ETL retry failure

─────────────────────────────────────────────────────────────────
LABELS
─────────────────────────────────────────────────────────────────
Severity:    severity/high
Impact:      impact/medium
Priority:    P1
Type:        type/bug
Environment: env/production
Area:        area/data-pipeline
Root Cause:  root/configuration (retry mechanism disabled)

─────────────────────────────────────────────────────────────────
SYMPTOM & IMPACT
─────────────────────────────────────────────────────────────────
The Analytics Layer LMS dashboard is showing data that is 6+ hours 
stale. The ETL pipeline's retry mechanism was disabled during a 
previous hotfix (PIPE-287) and never re-enabled. When the upstream 
data source has a transient failure, the pipeline silently fails 
without retry, leaving dashboards stale.

Affected: All LMS dashboard users (~200 internal users).
Business impact: Instructors making decisions on stale engagement data.
3 support tickets from instructors reporting "yesterday's numbers."

─────────────────────────────────────────────────────────────────
STEPS TO REPRODUCE
─────────────────────────────────────────────────────────────────
1. Confirm ETL pipeline retry is disabled: check config RETRY_ENABLED=false
   in pipeline-config.yaml (line 42)
2. Trigger a transient upstream failure (or wait for natural occurrence)
3. Observe pipeline logs: single attempt, no retry, silent failure
4. Navigate to /analytics/dashboard
5. Compare "last updated" timestamp with current time

Observed result: Dashboard shows "Last updated: 6h ago" with no 
error indication
Expected result: Pipeline retries up to 3 times with exponential 
backoff; dashboard shows data <1h old; if all retries fail, 
dashboard shows "Data may be stale" warning

─────────────────────────────────────────────────────────────────
ENVIRONMENT
─────────────────────────────────────────────────────────────────
Environment:     production
Version/Build:   Pipeline v1.8.3
Browser/Device:  N/A (backend issue)
OS:              N/A
User Role:       N/A (affects all dashboard users)
Test Account:    N/A
Locale:          N/A

─────────────────────────────────────────────────────────────────
ATTACHMENTS
─────────────────────────────────────────────────────────────────
[x] Server logs: pipeline-failure-2025-02-18.log (showing single 
    attempt, no retry)
[x] Screenshot: dashboard-stale-data.png (showing "Last updated: 6h ago")
[x] Config file: pipeline-config.yaml showing RETRY_ENABLED=false
[ ] Video: not applicable

─────────────────────────────────────────────────────────────────
OWNER & RCA
─────────────────────────────────────────────────────────────────
Assigned to:   Data Engineering team
RCA required:  Yes (P1)
RCA link:      [Pending — root cause already identified: PIPE-287 
               hotfix disabled retry and was not re-enabled]
Related bugs:  PIPE-287 (hotfix that disabled retry)
```

::: details Bug report self-review checklist
Before submitting your bug report, verify:

- [ ] Title follows `[Area] Imperative description` format
- [ ] All required labels are set (severity, impact, priority, type, environment, area)
- [ ] Symptom & Impact includes user-facing description and affected user count
- [ ] Steps to reproduce are numbered, specific, and include starting state
- [ ] Observed vs. Expected results are clearly separated
- [ ] Environment details include version, browser, OS, and test account
- [ ] Attachments meet the requirements for this severity level
- [ ] Owner is assigned
- [ ] RCA is flagged as required (if P0/P1)
- [ ] Related/duplicate bugs are linked
:::
