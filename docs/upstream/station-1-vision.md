# Station 1 — Vision & Context

<span class="phase-badge upstream">🔵 Upstream</span>

::: info Where this fits in the spiral
Station 1 belongs to the **Initiative Loop** (Phase 1 — Frame the Problem). It runs during the first two days of the 2-week Initiative Sprint, and feeds directly into [Initiative Activities I-1, I-2, I-5, and I-6](/upstream/activities-sprint). The questions here are also relevant to the **Feature Loop** when a feature is new enough that the team needs to reestablish who uses it and why.
:::

## The Moment This Page Is For

Six weeks into development, someone asks: "Who actually uses this?"

The room goes quiet. Everyone has a slightly different answer. The PM says "our paying SMB customers." The tech lead says "ops managers — that's who the PM described in the original brief." The developer who built the reporting module says "wait, I thought it was finance teams."

No one is wrong. The feature was shaped from a vague direction and each person filled in the blanks differently. Six weeks of work was built on three separate assumptions about who it was for.

This is what it costs to skip Station 1. Not one bad decision — a hundred small decisions, each made in the absence of a shared frame, each drifting a little further from the others.

Station 1 is not a ceremony. It is the 60-minute conversation that prevents six weeks of drift.

---

## Purpose

Station 1 sets the frame. Before any team member writes a single line of code, acceptance criterion, or wireframe, the product team must answer four foundational questions with rigour. Vague answers here compound into expensive rework in every downstream phase.

A well-framed vision does three things:
1. **Aligns** every team member on *who* we're building for and *why*
2. **Constrains** the solution space so discovery stays focused
3. **Creates** a measurable contract that lets us know when we've succeeded

## The Four Foundational Questions

### 1. Who is the user?

Describe a specific, named persona — not a generic segment. A persona without a job-to-be-done is useless.

**Template:**
```
[Persona Name] is a [role] who [primary job-to-be-done].
They currently [how they do this today] and experience [specific friction/pain].
Their primary goal when using our product is [desired outcome].
```

**Good example — Momentum / Living Wondrously:**
> *Maya is a working mother in her 30s who wants to develop a daily gratitude and reflection habit. She currently uses a paper notebook but misses days because she forgets or doesn't have it on hand. Her primary goal is to capture moments of wonder throughout her day without friction, building a personal record she can revisit.*

**Good example — Pninei Halacha:**
> *Avi is a religious reader who studies Jewish law daily during his commute. He currently reads from physical volumes that are heavy to carry and hard to search. His primary goal is to read comfortably on his phone, pick up where he left off, and quickly find rulings on specific topics — even without cellular service.*

**Good example — Someone for Coffee:**
> *Noa is a woman who recently relocated to a new city and wants to build a local friendship circle. She currently relies on chance encounters at work and synagogue but finds it awkward to "ask someone out" platonically. Her primary goal is to find and meet compatible women nearby for a casual coffee — safely, without the social pressure of dating apps.*

**Bad example:**
> *Business users who need financial features.*

::: warning Anti-Pattern: "The Invisible User"
When stories are written for "users" in general, every team member fills in their own mental image. The developer imagines a power user. The designer imagines a first-timer. QA imagines an edge case. No one builds for the same person — and the product ends up serving no one well. **Always name your persona.**
:::

---

### 2. What is the problem or opportunity?

State the problem in a single, falsifiable sentence. Then quantify it.

**Template:**
```
[User type] cannot [do X] because [root cause], which results in [measurable impact].
```

**Good example — Wallet balance:**
> *Wallet users cannot see negative balances on the dashboard because the frontend clamps values to zero, which results in 140+ monthly support tickets and measurable customer distrust (NPS -12 from affected users).*

**Good example — Pninei Halacha:**
> *Religious readers cannot study halacha on-the-go because the existing web edition lacks mobile formatting, offline support, and bookmarking, which results in readers abandoning digital study and carrying heavy physical volumes instead.*

**Good example — Analytics Layer:**
> *Course creators cannot understand how learners engage with their content because the LMS only provides static completion metrics, which results in instructors making curriculum decisions based on intuition rather than evidence — leading to 35% content that is never accessed.*

**Bad example:**
> *The balance display needs improvement.*

---

### 3. Why now?

The "why now" forces the team to compete this initiative against everything else in the backlog. If you cannot answer this, the initiative may not be urgent enough.

**Triggers that justify "now":**
- A quantified user pain that is growing (ticket volume, churn correlation, NPS theme)
- A contractual commitment or compliance deadline
- A market window (competitor shipped, buyer trend)
- A strategic dependency (another initiative is blocked until this ships)

**Real examples:**

| Initiative | Why Now? |
|------------|----------|
| Pninei Halacha Foundation | Content is already digitised. Mobile readership is growing 20% QoQ. Competing apps are emerging — first-mover window is closing. |
| Analytics Layer | Enterprise clients are asking for learner analytics in every renewal conversation. Two deals lost to competitors who offer dashboards. |
| Someone for Coffee | Post-pandemic loneliness research shows record demand. Three competitors launched in adjacent segments this quarter. |
| Living Wondrously | Journal feature has highest user-request volume. Retention data shows journaling users have 3× Day-30 retention. |

---

### 4. What are the success signals?

Success signals must be **measurable, time-bound, and owned**. Avoid vanity metrics.

#### Leading vs. Lagging Indicators

Understanding the difference prevents teams from celebrating too early — or giving up too soon.

| Type | Definition | When it moves | Example |
|------|-----------|---------------|---------|
| **Leading** | An early signal that predicts future success | Days–weeks after launch | Daily active readers increase by 25% within 14 days |
| **Lagging** | The outcome you ultimately care about | Weeks–months after launch | 30-day retention improves from 40% to 55% within 90 days |

::: tip Rule of Thumb
Pick **1–2 leading signals** to validate the launch quickly, and **1 lagging signal** to confirm lasting impact. If only the leading signals move but the lagging one doesn't, your feature is novel but not valuable.
:::

**Good signals from real projects:**

| Initiative | Leading Signal | Lagging Signal |
|------------|---------------|----------------|
| Pninei Halacha | Avg. reading session > 4 minutes within 14 days | Monthly active readers reach 5,000 within 6 months |
| Living Wondrously | 60% of journal users write ≥3 entries in first week | Journaling users show 3× Day-30 retention vs. non-journaling |
| Analytics Layer | 40% of course creators view dashboard weekly within 30 days | Instructor-driven content changes increase by 50% in Q2 |
| Someone for Coffee | 30% of new users send a coffee invitation within 48 hours | 20% of matched pairs meet more than once within 60 days |

**Bad signals:**

| Signal | Problem |
|--------|---------|
| "Users will be happy with the balance display" | Not measurable |
| "We shipped the WalletCard fix" | Output metric, not outcome |
| "Page views increase" | Vanity — doesn't indicate value delivered |
| "No bugs reported" | Absence of evidence is not evidence of absence |

---

## Non-Goals

Explicitly stating what is **out of scope** is as important as stating what is in scope. Non-goals prevent scope creep and align stakeholder expectations before discovery goes deep.

**Format:**
```
OUT OF SCOPE for this initiative:
- Currency conversion or multi-currency display
- Balance history or transaction detail
- Mobile-specific balance UI (separate initiative)
```

**Real example — Pninei Halacha Foundation:**
```
OUT OF SCOPE:
- Community features (comments, forums) — deferred to Phase 2
- Audio narration of texts — separate initiative
- Support for non-Hebrew languages — deferred until readership validates demand
- User-generated content or annotations — separate initiative
```

---

## Vague vs. Sharp Framing

The same initiative can be expressed vaguely or sharply. Sharpness at Station 1 compounds into clarity everywhere downstream.

| Dimension | Vague Framing ❌ | Sharp Framing ✅ |
|-----------|-----------------|-----------------|
| **Persona** | "Our users" | "Avi, a religious reader who studies halacha during his 30-minute commute" |
| **Problem** | "Reading experience needs improvement" | "Readers abandon digital study because the web edition lacks mobile formatting, offline support, and bookmarking" |
| **Why now** | "We should do it" | "Mobile readership growing 20% QoQ; competing apps emerging; content already digitised" |
| **Success** | "More users read" | "Avg. session > 4 min within 14 days; 5,000 MAR within 6 months" |
| **Non-goals** | *(none stated)* | "No audio, no community features, no languages beyond Hebrew in Phase 1" |

---

## Experience Snapshot

An Experience Snapshot is a short **day-in-the-life narrative** that makes the persona feel real. It turns abstract personas into tangible humans with context, emotion, and constraints. Write it in present tense, 3–5 sentences.

::: info Why Write Experience Snapshots?
Personas are easily forgotten. A paragraph of demographics sits in a document no one re-reads. An Experience Snapshot is memorable — teams quote it in sprint planning, designers pin it above their monitors, and developers recall it when making micro-decisions about edge cases.
:::

**Template:**
```
It's [time of day]. [Persona] is [where they are, what they're doing].
They [action related to the problem]. They feel [emotion].
[What happens next — the friction or delight moment].
```

**Example — Maya from Living Wondrously:**
> *It's 6:45 AM. Maya pours coffee while her kids eat cereal. Last night's sunset was extraordinary — she wants to capture the feeling before it fades. She opens the app, types two sentences and attaches a photo. By the time the kids need shoes tied, the moment is saved. On Friday evening, she scrolls back through the week's entries and smiles — it was a better week than she thought.*

**Example — Avi from Pninei Halacha:**
> *It's 7:20 AM on a crowded bus. Avi pulls out his phone — the physical volume is too heavy for his bag today. He opens the app, and it drops him exactly where he left off yesterday. He reads for 25 minutes. When the bus enters a tunnel and loses signal, nothing changes — the text is already cached. He bookmarks a passage to discuss with his study partner tonight.*

**Example — Noa from Someone for Coffee:**
> *It's Sunday evening. Noa finished unpacking the last box in her new apartment. She doesn't know anyone in this neighbourhood. She opens the app, fills in that she's into hiking and baking, and sees three women nearby who also marked "new to the area." She sends a coffee invitation to one. By Tuesday, they're sitting at a café two blocks away, laughing about the moving process.*

---

## Stakeholder Alignment

Station 1 outputs are only valuable if key stakeholders agree on them. Misalignment here creates political rework later — the most expensive kind.

### Who Needs to Align?

| Stakeholder | What they validate |
|------------|-------------------|
| **Product Owner** | Problem is real, persona is correct, priority is justified |
| **Engineering Lead** | Problem is solvable within reasonable constraints |
| **UX Lead** | Persona resonates, experience snapshot is realistic |
| **Business Stakeholder** | "Why now" connects to business objectives, success signals are meaningful |
| **Data Lead** | Success signals are measurable with existing (or planned) instrumentation |

### Alignment Ceremony

Run a **30-minute Station 1 Review** before moving to Station 2:

1. **Present** the Vision & Context document (10 min)
2. **Challenge** — each stakeholder asks one "what if we're wrong about X?" question (10 min)
3. **Decide** — thumbs up / thumbs down / thumbs sideways from each stakeholder (5 min)
4. **Capture** — log any open questions with owner and due date (5 min)

::: details What Do the Thumbs Mean?
- **👍 Thumbs up** — "I agree with the framing, let's proceed"
- **👎 Thumbs down** — "I disagree with a fundamental element; we need to revisit before proceeding"
- **👉 Thumbs sideways** — "I have concerns but they're resolvable; proceed with caveats logged"

If *any* stakeholder gives thumbs down, the team must resolve the disagreement before moving to Station 2. Proceeding without alignment is a recipe for mid-sprint pivots.
:::

---

## Station 1 Anti-Patterns

::: danger Anti-Pattern: "The Solution Named as Problem"
**Example:** *"We need to redesign the balance card."*
This is a solution. The problem is: *"Users cannot trust the balance display, leading to 140 support tickets per month."* Naming the solution as the problem closes off alternative approaches before discovery has happened.

**The fix:** Always ask "why do we need to do that?" If the answer is a user pain, *that* is the problem. The original statement is a candidate solution.
:::

::: danger Anti-Pattern: "The Kitchen Sink Problem"
**Example:** An initiative with 8 success signals covering engagement, revenue, retention, NPS, support tickets, page speed, accessibility score, and SEO ranking.

**Why it fails:** When everything is a success signal, nothing is. The team cannot optimise for 8 metrics simultaneously — improvements in one often degrade another. After launch, stakeholders cherry-pick whichever metric moved to claim success or failure, making learning impossible.

**The fix:** Pick **2–3 signals maximum**. One leading, one lagging, and optionally one guardrail metric (a metric that must *not* degrade). If you cannot choose, the initiative is probably too broad — split it.
:::

::: danger Anti-Pattern: "The Invisible User"
**Example:** Stories and briefs that say "users" without ever defining who.

**Why it fails:** "Users" is a projection screen — every team member projects their own assumptions. The developer assumes a technical power user. The designer assumes a first-timer. QA assumes an adversarial edge case. The PM assumes the complaining customer from last week. No one builds for the same person.

**The fix:** Name the persona. Give them a job-to-be-done. Write an Experience Snapshot. If you have multiple distinct user types, create separate personas and explicitly state which one this initiative prioritises.
:::

---

## Station 1 Output

By the end of Station 1, you should have:

- [ ] A named, described persona with a specific job-to-be-done
- [ ] An Experience Snapshot (day-in-the-life narrative)
- [ ] A problem statement with quantified impact
- [ ] A "why now" rationale
- [ ] 1–3 measurable success signals (leading + lagging)
- [ ] An explicit out-of-scope list
- [ ] Stakeholder alignment recorded (thumbs + logged concerns)

Write these into the **Initiative Brief** in Confluence. This is the document you will freeze at approval.

---

<div style="display: flex; justify-content: space-between; margin-top: 2rem;">
  <span></span>
  <a href="/upstream/station-2-problem">Station 2 — Problem Framing →</a>
</div>
