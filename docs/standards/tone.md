# Communication Tone

## The Principle: Kind, Clear, Specific

Every piece of written communication in a product team — from PR descriptions to incident updates to Slack messages — follows three rules:

1. **Kind.** Assume good intent. Write to a colleague, not an adversary.
2. **Clear.** Say what you mean. Ambiguity is not politeness — it is a source of bugs, misunderstandings, and wasted time.
3. **Specific.** Replace vague words with concrete ones. "Improve performance" means nothing. "Reduce p95 latency from 800ms to 200ms" means everything.

These are not personality traits. They are professional skills. You can be direct without being rude. You can be kind without being vague. You can be specific without being pedantic.

::: tip The Audience Test
Before you write, ask: "Who will read this, and what do they need to do with it?" A developer reading a PR description needs different information than a stakeholder reading a sprint update. Same facts, different framing.
:::

---

## PR Descriptions

PR descriptions exist for two audiences: the reviewer (now) and the future developer reading `git log` (later). Both need to understand **what** changed and **why**.

### Guidelines

- Link to the Jira Story. Always.
- Explain **what** the change does and **why** it was done this way.
- Do not explain **how** — the code explains how. If the code cannot explain how, the code needs better structure, not a longer PR description.
- Include testing notes: what you tested, how to test it, and any edge cases the reviewer should pay attention to.
- If there is a visual change, include a screenshot or recording.

### Good Example

```markdown
## [UDOO-341] Add balance validation for negative amounts

**Story:** [UDOO-341](https://jira.example.com/browse/UDOO-341)

### What
Added server-side validation to reject wallet transactions that would 
result in a negative balance. Returns a 422 with a descriptive error 
message.

### Why
The frontend validates this, but the API accepted negative-balance 
transactions if the request bypassed the UI (e.g., API integrations, 
race conditions on concurrent requests).

### Testing
- Unit tests for the validation logic (including boundary: $0.00 balance)
- Integration test for the 422 response
- Manual test: confirmed the existing frontend validation still works 
  and the error message matches

### Notes
This does not address the concurrent-request race condition itself — 
that is tracked in UDOO-345.
```

### Bad Example

```markdown
Fixed the balance thing. Should work now. Let me know if there are issues.
```

::: warning Why the Bad Example Fails
No story link (reviewer cannot check requirements). No explanation of what changed (reviewer must read every line of diff to understand intent). No testing notes (reviewer does not know what was verified). No context for future readers.
:::

---

## Code Review Comments

Code review is a conversation between professionals, not a performance evaluation. Every comment should make the code better without making the author feel worse.

### Guidelines

- **Suggest alternatives.** "Consider using `Map` here for O(1) lookup" is better than "This is wrong."
- **Distinguish blocking vs. non-blocking.** Prefix non-blocking comments with `nit:` or `suggestion:`. Blocking comments should be clear about what must change before approval.
- **Never make it personal.** Comment on the code, not the person. "This function is doing too much" — not "You always write monolithic functions."
- **Ask questions when unsure.** "Is there a reason this uses `any` instead of a typed parameter?" opens dialogue. "Don't use `any`" shuts it down.
- **Acknowledge good work.** A quick "Nice approach here" costs nothing and reinforces good patterns.

### Good Examples

| Comment | Why It Works |
|---------|-------------|
| `nit: Could rename this to \`calculateNetBalance\` for clarity — the current name is ambiguous.` | Non-blocking, specific, provides alternative |
| `Blocking: This query runs without an index on \`user_id\`. On our current dataset that is ~3s per call. Can we add an index or restructure the query?` | Blocking, explains impact, asks for solution |
| `Question: Is the retry logic here intentional? If the upstream service is down, this will retry indefinitely.` | Opens dialogue, highlights risk without assuming error |
| `Nice — I like how you extracted this into a shared utility. Much cleaner than the previous inline approach.` | Positive feedback reinforces the pattern |

### Bad Examples

| Comment | Why It Fails |
|---------|-------------|
| `Wrong.` | No information. What is wrong? What should it be? |
| `Why did you do it this way?` | Reads as accusatory. Rephrase: "What was the reasoning for this approach?" |
| `This is not how I would do it.` | Irrelevant. The question is whether it works correctly and is maintainable, not whether it matches the reviewer's style. |
| `LGTM` (on a 400-line PR) | Not a review. Every PR of meaningful size deserves at least one substantive comment or explicit confirmation that the approach, edge cases, and tests were evaluated. |

::: info The "Blocking" Convention
Prefixing comments as `blocking:` or `nit:` / `suggestion:` removes ambiguity about whether the author must address the comment before merging. Without this convention, authors either over-correct (treating every nit as a blocker) or under-correct (ignoring real issues).
:::

---

## Incident Communications

During an incident, communication is as important as the fix. Users are affected. Stakeholders are anxious. The team is under pressure. This is exactly when disciplined communication matters most.

### Guidelines

- **Be calm.** Urgency in action, composure in language. Panicked messages create panic.
- **Be factual.** State what you know, what you do not know, and what you are doing. Do not speculate about root cause until you have evidence.
- **Be timeline-focused.** Every update should include: what happened, when it happened, what we are doing now, when the next update will be.
- **No blame.** "The deployment at 14:32 introduced a regression" — not "Someone deployed broken code."
- **Acknowledge impact.** "We understand this is affecting your ability to process transactions" — not "The system is experiencing minor issues."
- **Update regularly.** Every 30 minutes for P0, every 60 minutes for P1 — even if the update is "no change, still investigating."

### Good Example (Internal Slack Update)

```
🔴 INCIDENT UPDATE — Payment Service — 14:55 UTC

Status: Investigating
Impact: All payment transactions failing with 500 errors since 14:32 UTC.
Users affected: ~2,400 active sessions.

Timeline:
- 14:32 — Deployment v2.14.3 completed
- 14:35 — Error rate alert triggered (>5% threshold)
- 14:38 — On-call engineer paged, acknowledged
- 14:45 — Identified: new validation logic rejects valid currency codes
- 14:50 — Rollback to v2.14.2 initiated

Current action: Rollback in progress. ETA 5 minutes.
Next update: 15:10 UTC or sooner if status changes.
```

### Bad Example

```
Hey team, payments are broken. We're looking into it. Probably the last 
deploy. Will update when we know more.
```

::: warning Why the Bad Example Fails
No timestamp. No impact quantification. No timeline. "Probably" introduces speculation. "Will update when we know more" provides no commitment to regular updates. Stakeholders reading this have zero actionable information.
:::

---

## Stakeholder Updates

Stakeholders — PMs, leadership, clients — need outcomes, not implementation details. They need to know what is done, what is at risk, and what they need to decide.

### Guidelines

- **Lead with outcomes.** "Users can now export transactions as CSV" — not "We implemented the CSV export endpoint and added the download button."
- **Avoid jargon.** "The system processes transactions 4x faster" — not "We migrated from synchronous REST calls to an event-driven architecture using Kafka."
- **Include next steps.** Every update ends with what happens next and whether anything requires their input.
- **Highlight risks early.** Do not hide risks at the bottom. If something threatens the timeline, say so up front and propose options.
- **Use visuals.** A progress bar, a simple chart, or a RAG (Red/Amber/Green) status table communicates faster than paragraphs.

### Good Example

```markdown
## Sprint 14 Update — Journal Feature

### Completed
- Users can create journal entries with prompts ✅
- Entry auto-save prevents data loss ✅

### In Progress
- Prompt recommendation engine (80% complete, on track)

### At Risk
- Push notification delivery on Android has a 15% failure rate in testing.
  We are investigating with the notification provider. Fallback: in-app 
  notification only for v1, push for v1.1.
  
  **Decision needed:** Are we comfortable shipping v1 without Android push?

### Next Sprint
- Journal sharing between matched users
- Analytics dashboard for journal engagement
```

### Bad Example

```
Sprint 14 is going well. We finished most of the stories. There are a 
few things we're still working on. Let me know if you have questions.
```

---

## Story Writing

Stories are contracts between product and engineering. Vague stories produce vague software.

### Guidelines

- **User-centered.** Every Story starts with a persona, an action, and a benefit.
- **Specific.** Replace "improve," "enhance," and "optimize" with measurable statements.
- **Testable acceptance criteria.** If QA cannot verify it, it is not an acceptance criterion — it is a wish.
- **Negative cases included.** What happens when the input is invalid? When the network is down? When the user cancels mid-flow?

### Good vs. Bad Acceptance Criteria

| Good | Bad |
|------|-----|
| `Given a balance of -$50, when the user views the dashboard, then the balance displays as "-$50.00" in red text` | `Balance should display correctly` |
| `Given no internet connection, when the user taps Save, then the entry is saved locally and synced when connectivity resumes` | `Should work offline` |
| `Given a prompt list of 20 items, when the user scrolls, then items load in batches of 10 with a loading indicator` | `Prompts should load fast` |

::: details Words That Signal Vague Stories
If you see these words in acceptance criteria, the Story needs more work:

- **"Improve"** — improve to what? Specify the metric and target.
- **"Enhance"** — enhance how? Describe the specific change.
- **"Optimize"** — optimize for what? Latency? Memory? Cost? By how much?
- **"Better"** — better than what? Define the baseline and the target.
- **"Appropriate"** — appropriate according to whom? Specify the rule.
- **"Handle gracefully"** — what does gracefully mean? Describe the exact behaviour.
:::

---

## Bug Reports

A bug report that cannot be reproduced cannot be fixed. Every bug report is a recipe — follow it and the bug appears.

### Guidelines

- **Steps to reproduce.** Numbered steps, starting from a clean state. Include environment, browser/device, and account type.
- **Expected behaviour.** What should happen according to the AC or design.
- **Actual behaviour.** What actually happens. Include error messages verbatim.
- **Environment.** Browser, OS, device, environment (production/staging/dev), app version.
- **Severity justification.** Why you chose this severity level (see [Bug Label System](/standards/bug-labels)).
- **Attachments.** Screenshots, screen recordings, console logs, network traces.

### Good Example

```markdown
## [Frontend] Negative balance displays as $0.00

**Environment:** Chrome 120 / macOS 14.2 / Production / v2.14.3
**Account:** Test user with balance of -$125.50

### Steps to Reproduce
1. Log in as test user (credentials in 1Password: "QA Negative Balance")
2. Navigate to Dashboard
3. Observe the balance widget in the top-right

### Expected
Balance displays as "-$125.50" in red text (per design spec: Figma v1.2)

### Actual
Balance displays as "$0.00" in standard black text

### Severity Justification
severity/high — financial data is displayed incorrectly. Users cannot 
trust their balance information. Not critical because the actual balance 
in the database is correct and transactions process normally.

### Attachments
- Screenshot: [attached]
- Console: no errors logged
```

### Bad Example

```
Balance is wrong. See attached screenshot.
```

---

## Retrospective Feedback

Retrospectives only work when feedback is honest, specific, and forward-looking. Vague praise and vague complaints are equally useless.

### Guidelines

- **Behaviour-focused, not person-focused.** "The code review turnaround was slow this sprint" — not "Alex is slow at reviewing."
- **Specific examples.** "Story UDOO-312 was blocked in review for 3 days" — not "Reviews take too long."
- **Forward-looking.** Every piece of feedback should suggest or invite a concrete improvement. "What if we set a 24-hour SLA for initial review comments?"
- **Balanced.** Acknowledge what went well with the same specificity as what went poorly.

### Good Examples

| Feedback | Why It Works |
|----------|-------------|
| `"The new sub-task checklist caught two missing doc updates this sprint. Let's keep it."` | Specific, evidence-based, forward-looking |
| `"We had 4 stories bounce back from QA. Three were missing negative-case ACs. Can we add a 'negative cases' prompt to the Story template?"` | Specific data, root cause identified, actionable proposal |
| `"Pairing on the payment integration saved us at least 2 days. I'd like to pair on complex stories going forward."` | Specific benefit, clear proposal |

### Bad Examples

| Feedback | Why It Fails |
|----------|-------------|
| `"Good sprint everyone!"` | No information. What was good? Why? |
| `"We need to do better at testing."` | Vague. Better how? Which tests? What specifically failed? |
| `"Some people need to be more careful."` | Personal, vague, not actionable, passive-aggressive |

---

## Email and Slack

### Email Conventions

- **Subject line:** `[Project/Team] — Action Required / FYI / Decision Needed — Topic`
- **One topic per email.** Do not combine unrelated items.
- **Lead with the ask.** The first sentence states what the reader needs to do.
- **Bottom-line up front.** Context comes after the request, not before.

| Good Subject | Bad Subject |
|-------------|-------------|
| `[UDOO] Decision Needed — Android push notification fallback for v1` | `Quick question` |
| `[UDOO] FYI — Sprint 14 retrospective notes published` | `Update` |
| `[Platform] Action Required — Review ADR for transaction storage by Friday` | `Please read` |

### Slack Conventions

- **Thread discipline.** Replies go in threads, not in the main channel. Breaking this rule buries other conversations.
- **@-mention etiquette.** Use `@here` only for time-sensitive items that affect everyone online. Use `@channel` only for emergencies. Name individuals when the message is for specific people.
- **Ephemeral by design.** Slack is not a knowledge base. Decisions, action items, and important information must be recorded in Jira, Confluence, or the appropriate tool within 24 hours.
- **Status updates go in Jira.** "I finished the payment validation story" in Slack is nice, but the Jira card must move too. If you only update Slack, the board is wrong.

::: info The 24-Hour Rule
If a decision is made in Slack and is not recorded in the appropriate system within 24 hours, it did not happen. Slack is volatile. Jira and Confluence are durable.
:::

### Good Slack Message

```
@alice @bob — The staging deploy for v2.14.3 is ready for QA. 

Stories included: UDOO-341, UDOO-342, UDOO-345
Known issues: None
Deployment notes: New env var PAYMENT_TIMEOUT added (already configured)

QA board filter: [Alpha] - Staging Ready
```

### Bad Slack Message

```
hey can someone check staging? i pushed some stuff
```

---

## Tone Across Contexts — Summary

| Context | Tone | Key Principle |
|---------|------|--------------|
| PR Descriptions | Factual, structured | Explain what and why; link to story |
| Code Reviews | Constructive, collaborative | Comment on code, not people; distinguish blocking vs. nit |
| Incidents | Calm, factual, timeline-focused | No blame; acknowledge impact; update regularly |
| Stakeholder Updates | Outcome-focused, jargon-free | Lead with results; highlight risks early; include next steps |
| Story Writing | Specific, testable, user-centered | No vague words; measurable acceptance criteria |
| Bug Reports | Reproducible, structured | Steps, expected, actual, environment, severity justification |
| Retrospectives | Behaviour-focused, forward-looking | Specific examples; actionable proposals |
| Email / Slack | Purposeful, scannable | Clear subject lines; thread discipline; record decisions elsewhere |

::: tip When In Doubt
Ask yourself: "If I were reading this for the first time, with no other context, would I know exactly what to do next?" If the answer is no, add the missing information.
:::

---

[← Back to Standards Overview](/standards/)
