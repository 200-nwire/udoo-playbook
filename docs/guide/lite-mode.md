# Lite Mode

The framework exists to create clarity, not ceremony.

If you are a team of two working on an internal tool, running all 9 points of the DoR checklist in a formal story readiness review twice a week is overkill. But running zero process and shipping straight from conversations is how you end up discovering requirements mid-sprint and shipping things nobody needed.

Lite Mode gives you the principles without the ceremony overhead. It scales with your team.

---

## When to Use Lite Mode

Use Lite Mode when **any of these are true:**

- Your team is 1–4 people
- The product is internal-facing (not customer-facing)
- The initiative is low-risk or highly reversible
- You are in early prototyping or proof-of-concept phase
- You are a startup before product-market fit
- You are operating with a single discipline (one person doing PM + dev + QA)

::: warning Lite Mode is not "no mode"
The principles are non-negotiable even in Lite Mode:
- Never write stories straight from ideas
- Never ship without knowing how you'll measure success
- Never close an incident without a learning

What changes is *how* you implement those principles — not *whether* you implement them.
:::

---

## The Lite Mode Compression Map

| Full Mode | Lite Mode |
|---|---|
| 5-station discovery sprint (2 weeks) | 1 discovery workshop (2–4 hours) |
| Formal Initiative Brief (1–2 pages) | A single Notion/Confluence page with the 5 key fields |
| 9-point Definition of Ready | 5-point DoR checklist |
| 8-point Definition of Done | 5-point DoD checklist |
| Three Amigos ceremony (scheduled, 15–30 min) | Async Slack thread with PM, Dev, QA tagging each other |
| Story Readiness Review (2x/week, 30 min) | PM + Dev sync (15 min, before each sprint) |
| Sprint Retrospective (formal) | "What worked / What didn't" in a shared doc, async |
| Post-mortem (formal, within 48h) | A 30-minute call or async doc within 1 week |
| RCA template (structured) | 5 bullet points: what, why, impact, fix, prevention |

---

## Lite Mode Discovery Workshop

Replace the 5-station process with a single 2–4 hour workshop.

**Who should be there:** Everyone working on the initiative (even if that's just 2 people).

**Agenda:**

```
Block 1 — 30 minutes: The Problem
  - Whose problem is this?
  - What is the user currently doing without us?
  - Why is now the right time to address it?
  - How will we know we succeeded? (Name one metric)

Block 2 — 30 minutes: The User
  - Write one Experience Snapshot (100 words, fictional user)
  - Walk through the key moment in their day

Block 3 — 45 minutes: The Solution
  - List 2–3 possible approaches
  - Choose one — write down why (this is your ADR)
  - Name the MVP scope — what's in, what's explicitly out

Block 4 — 45 minutes: The Work
  - Break the MVP into Features (name them)
  - For each Feature, name the Epics (3–5 per Feature)
  - Shape the first 3 stories for the first Epic to the Lite DoR

Block 5 — 30 minutes: Sanity check
  - Can we trace every story back to the user problem?
  - Do we have a metric to measure success?
  - Is there anything we assumed that we should validate?
```

Output: A simple doc with 5 sections. One metric. A few shaped stories ready for Sprint 1.

---

## Lite Mode DoR (5 points)

A story is Ready when all five are true:

| # | Requirement |
|---|---|
| 1 | **Story format**: "As [user], I want [action] so that [outcome]" |
| 2 | **Acceptance criteria**: At least 2 concrete, testable conditions |
| 3 | **Scope clear**: Everyone agrees what's in and what's out |
| 4 | **Sized**: Team agrees it's completable in 1–3 days |
| 5 | **No blockers**: No dependency waiting on another team or decision |

---

## Lite Mode DoD (5 points)

A story is Done when all five are true:

| # | Requirement |
|---|---|
| 1 | **Acceptance criteria met**: Tested manually in the target environment |
| 2 | **No open P1/P2 bugs**: Critical issues resolved before merging |
| 3 | **Code reviewed**: At least one other person reviewed the PR |
| 4 | **PM confirmed**: PM verified the feature works as intended |
| 5 | **No regressions**: Existing functionality still works |

---

## Lite Mode Ceremonies

| Ceremony | Full Mode | Lite Mode |
|---|---|---|
| **Daily standup** | 15 min, daily | Async Slack update: what I did, what I'm doing, blockers |
| **Sprint planning** | 2 hours | 30-minute sync before sprint starts |
| **Story kickoff** | Three Amigos (15–30 min) | Async Slack: PM writes AC, Dev + QA comment within 24h |
| **Sprint review** | Demo to stakeholders | Quick video recording or async Loom |
| **Retrospective** | 45-min facilitated meeting | Shared doc: 3 columns (keep / change / try), async contributions |
| **Incident review** | Formal post-mortem | 30-min call or async doc within 1 week |

---

## Lite Mode Non-Negotiables

Even in Lite Mode, these rules do not change:

::: danger Always
- Frame work as a user problem before writing stories
- Write at least 2 acceptance criteria per story
- Name one metric before starting an initiative
- Run an RCA after every production incident (even a 5-bullet version)
- Review + approve every PR before merging to main
:::

::: tip Never
- Write stories straight from ideas
- Ship without knowing how you'll measure success
- Skip PR review because "it's just a small change"
- Let an incident pass without capturing the root cause
- Start building when scope is unclear — clarify in a 30-minute call instead
:::

---

## When to Grow Out of Lite Mode

Lite Mode is a starting point, not a permanent state. Graduate to Full Mode when:

| Signal | What it means |
|---|---|
| Sprint surprises are frequent | Stories aren't clear enough at start — need stronger DoR |
| PRs get blocked in review often | AC isn't precise enough — need Three Amigos |
| Post-release bugs are common | DoD isn't strong enough — need more QA discipline |
| Team has grown beyond 4–5 people | Coordination costs are rising — need formal ceremonies |
| Customers are depending on the product | Stakes are higher — invest in reliability practices |
| Delivery is becoming unpredictable | Story quality needs more upstream work |

Growing into Full Mode doesn't mean adding bureaucracy. It means adding the specific practices that solve the specific problems you're experiencing. Add one practice at a time, not everything at once.

---

## The Lite Mode Starter Kit

If you're starting fresh in Lite Mode, here's everything you need:

**Tools:**
- Any issue tracker (Jira, Linear, Notion, GitHub Issues)
- Any document tool (Confluence, Notion, Google Docs)
- Slack or equivalent for async communication

**First week:**
1. Run the [Discovery Workshop](#lite-mode-discovery-workshop) (2–4 hours)
2. Create one Initiative page with 5 fields (problem, user, metric, scope, approach)
3. Shape 5–8 stories to the Lite DoR
4. Start Sprint 1

**First sprint:**
1. Async standup daily (3 lines in Slack)
2. 15-min sync mid-sprint to check if stories are still on track
3. Demo or Loom at end of sprint
4. 30-minute retrospective doc: what worked, what didn't, one thing to change

That's the whole process to start. Everything else can be added when you feel the gap.
