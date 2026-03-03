# Discovery Frameworks Catalog

<span class="phase-badge upstream">🔵 Upstream</span>

## Why a Catalog?

Discovery is not a single method — it is a **toolkit**. Different problems require different lenses. A team building a new product from scratch needs different frameworks than a team adding a feature to a mature platform.

This catalog organises 25+ industry frameworks into three groups that mirror the Upstream streams:

| Group | Stream | Question it answers |
|-------|--------|-------------------|
| **A — Shape the Work** | Stream A: Map the Work | *What should we build, and in what order?* |
| **B — Story Readiness** | Stream B: Story Readiness | *Is each story clear enough to build and test?* |
| **C — Tech & Architecture** | Stream C: Tech & Architecture | *How should we build it, and what risks exist?* |

Each entry follows the same format:

- **What it is** — one-paragraph explanation
- **When to use it** — the trigger or context
- **What it produces** — the concrete artifact
- **UDOO fit** — where it plugs into the framework
- **Gotcha** — the mistake teams make most often

::: tip How to Read This Page
You do not need all of these. Start with the [Minimal Starter Stack](#minimal-starter-stack) at the bottom, then add frameworks as your team matures. This page is a reference, not a curriculum.
:::

---

## Group A — Shape the Work (Product)

These frameworks help you decide **what** to build, **for whom**, and **in what order**. They operate at the Initiative and Feature level.

---

### 1. Design Thinking / Double Diamond

**What it is:** A two-phase creative process. The first diamond *diverges* (explore the problem space broadly) then *converges* (define the real problem). The second diamond *diverges* again (generate many solutions) then *converges* (select and prototype the best one). Originated at the Design Council (UK, 2005) and refined by IDEO and Stanford d.school.

**When to use it:** When the problem itself is unclear — the team has symptoms but not a diagnosis. Particularly useful at the Initiative level when stakeholders disagree about what the actual user pain is.

**What it produces:** A validated problem statement (Diamond 1) and a tested prototype or concept (Diamond 2).

**UDOO fit:** Diamond 1 maps to Stations 1–2 (Vision & Context, Problem Framing). Diamond 2 maps to Stations 3–4 (Journey & Slices, Solution Options). The "converge" moments are the station gates.

**Gotcha:** Teams skip Diamond 1 entirely and jump to solution ideation. If you only run one diamond, you are designing a beautiful solution to the wrong problem.

---

### 2. Jobs-to-Be-Done (JTBD) & Job Stories

**What it is:** A demand-side theory of innovation developed by Clayton Christensen and Bob Moesta. Instead of asking "what features does the user want?", JTBD asks "what progress is the user trying to make in their life?" Features are hired and fired to get a job done.

**Job story format:**
```
When [situation], I want to [motivation], so I can [expected outcome].
```

**When to use it:** When you need to understand *why* users switch products, or when traditional personas feel too demographic and not behavioral enough. Powerful for new products and pivots.

**What it produces:** A set of job stories that describe the demand side — the progress users seek — independent of any solution.

**UDOO fit:** Job stories feed Station 1 (persona + job-to-be-done). They replace or enrich the traditional user story format at the Initiative level. At the Story level, UDOO still uses the "As a... I want... so that..." format because it is familiar to developers, but the *intent* behind each story should trace back to a job.

**Gotcha:** JTBD interviews require real skill. "What job does our app do for you?" is not a JTBD interview — it is a leading question. Use the Switch Interview technique (timeline of the last time they switched) to surface real jobs.

::: details Example — Pninei Halacha
**Job:** *When I'm preparing for Shabbat and need to check a specific halacha, I want to find the relevant ruling quickly without internet, so I can act correctly even when my phone is in airplane mode.*

This job reveals that offline-first is not a "nice to have" — it is the core hiring criterion. The user fires Google and hires the app specifically because it works without connectivity. Any solution that requires a network call for content retrieval violates the job.
:::

---

### 3. Opportunity Solution Tree (Teresa Torres)

**What it is:** A visual thinking tool from Teresa Torres' *Continuous Discovery Habits*. It structures discovery as a tree: the **desired outcome** (top) branches into **opportunities** (user pains, needs, desires), which branch into **solutions**, which branch into **experiments** that validate each solution.

```
                    Desired Outcome
                   /       |       \
              Opp A      Opp B      Opp C
             /    \        |       /    \
          Sol 1  Sol 2   Sol 3   Sol 4  Sol 5
           |      |       |       |      |
         Exp 1  Exp 2   Exp 3   Exp 4  Exp 5
```

**When to use it:** When you have many possible things to build and need a principled way to choose. When stakeholders push pet solutions and you need to show them in context of the full opportunity space.

**What it produces:** A living tree artifact (usually in Miro or FigJam) that shows the relationship between outcomes, opportunities, and solutions. Updated weekly.

**UDOO fit:** The tree sits above the Story Map. The *outcome* is the Initiative's success signal. *Opportunities* map to Features. *Solutions* become Epics. *Experiments* become spikes or S1 stories.

**Gotcha:** The tree is useless if the outcome is a vanity metric. "Increase DAU" is not specific enough. "Increase Day-7 retention from 32% to 45% among first-time users" is.

---

### 4. Impact Mapping

**What it is:** A strategic planning technique by Gojko Adzic. It maps **Goal → Actors → Impacts → Deliverables** in a mind-map structure, forcing the team to answer *why* before *what*.

```
Goal: Increase onboarding completion to 70%
├── Actor: New SMB customer
│   ├── Impact: Completes verification faster
│   │   ├── Deliverable: SMS OTP instead of email
│   │   └── Deliverable: ID upload with OCR
│   └── Impact: Understands next steps
│       └── Deliverable: Onboarding checklist with progress
└── Actor: Support agent
    └── Impact: Resolves verification issues without escalation
        └── Deliverable: Admin override for stuck verifications
```

**When to use it:** When you need to justify *why* each deliverable exists to stakeholders, especially when fighting scope creep. Impact maps make "nice to have" features visible because they can't trace to an impact.

**What it produces:** A map linking every deliverable to a measurable business goal through specific actors and behaviour changes.

**UDOO fit:** Impact maps feed Station 1 (goal, actors) and Station 5 (scope decisions). If a deliverable can't trace back through the map to the goal, it does not belong in S1.

**Gotcha:** Impact maps become stale fast. Create them at the start of discovery and use them for scoping decisions, but do not treat them as living documents. The Story Map is the living artifact.

---

### 5. Story Mapping (Jeff Patton)

**What it is:** A visual technique for organizing user stories into a two-dimensional map. The top row shows **activities** (big user goals, verb phrases). Below each activity sit **tasks/steps** the user performs. Below those sit **stories** — the smallest deliverable units. A horizontal line drawn across the map defines the **release slice** (S1, S2, S3).

**When to use it:** Always. Story Mapping is the backbone of UDOO's Upstream process. If you use only one framework from this entire catalog, use this one.

**What it produces:** A physical or digital board that shows the entire scope of a feature at a glance, with clear release boundaries.

**UDOO fit:** Story Mapping *is* Station 3 (User Journey & Slices). The top row becomes the journey map. The activities become Epics. The stories below the S1 line become the first sprint's backlog.

**Gotcha:** Teams build the map once and never update it. The map should evolve as discovery progresses — stories move between slices, new stories appear, some get cut. Treat it as a living wall, not a frozen diagram.

::: info Deep Dive
Story Mapping has its own dedicated chapter: [Story Mapping →](/upstream/story-mapping). This entry is a summary; read the full chapter for facilitation guides, real examples, and common mistakes.
:::

---

### 6. Service Blueprinting

**What it is:** An extension of journey mapping that adds **backstage** and **support process** layers. The blueprint has four swimlanes: (1) Customer Actions, (2) Frontstage (what the customer sees), (3) Backstage (internal processes the customer doesn't see), (4) Support Processes (systems, databases, third-party services).

**When to use it:** When the user experience depends heavily on internal operations — support workflows, fulfillment pipelines, manual processes that need automation. Particularly valuable for Onstream readiness.

**What it produces:** A multi-lane diagram showing where the customer journey depends on internal systems and processes, revealing handoff points and failure modes.

**UDOO fit:** Service blueprints extend Station 3's journey map into Onstream territory. They are especially useful for Initiatives that span Upstream and Onstream (e.g., incident response redesign, SLA improvements).

**Gotcha:** Blueprints become overwhelming if you map everything. Start with the happy path for one persona, then add the failure paths that have the highest business impact.

::: details Example — Someone for Coffee
The "Meet" activity in Someone for Coffee has a complex backstage:

| Layer | What happens |
|-------|-------------|
| **Customer Action** | Taps "Confirm Meeting" |
| **Frontstage** | Sees confirmation screen with café name, time, and partner's first name |
| **Backstage** | Matching algorithm verifies both users confirmed; sends push notification to partner; reserves a "meeting slot" in the system |
| **Support Process** | Verification service checks both profiles are still active and verified; abuse-detection model scores the pair |

Without a service blueprint, the team might build the frontstage beautifully but forget the abuse-detection check — discovering it as a P1 bug after launch.
:::

---

### 7. Prioritization Frameworks

**What it is:** A family of scoring and ranking methods for deciding what to build first. The most common:

| Framework | Formula / Method | Best for |
|-----------|-----------------|----------|
| **RICE** | (Reach × Impact × Confidence) / Effort | Feature-level prioritisation with data |
| **WSJF** | (User Value + Time Criticality + Risk Reduction) / Job Size | SAFe environments, economic sequencing |
| **ICE** | Impact × Confidence × Ease | Quick prioritisation in small teams |
| **MoSCoW** | Must / Should / Could / Won't | Stakeholder alignment workshops |
| **Kano** | Must-be / One-dimensional / Attractive / Indifferent / Reverse | Understanding which features delight vs. satisfy |

**When to use it:** When the backlog has more candidates than capacity, and the team needs a shared, transparent method for choosing.

**What it produces:** A ranked or categorized list of features/epics, with explicit rationale for the ordering.

**UDOO fit:** Prioritization happens at Station 5 (Decision & Scope) to sequence Features and Epics. RICE or WSJF scores can be recorded in the Initiative Brief to justify the chosen slice order.

**Gotcha:** Scoring frameworks create a false sense of objectivity. The scores are only as good as the assumptions behind them. Use the score to *start* a conversation, not to *end* one.

---

### 8. North Star Metric & OKRs

**What it is:** Two complementary goal-setting systems. The **North Star Metric** is the single metric that best captures the value your product delivers to customers (e.g., "weekly active readers" for Pninei Halacha). **OKRs** (Objectives and Key Results) set quarterly goals: an Objective is a qualitative aim; Key Results are 2–4 measurable outcomes.

**When to use it:** At the Initiative level, to ensure every Feature traces back to a measurable business outcome. OKRs set the quarterly frame; the North Star ensures long-term alignment.

**What it produces:** A shared compass metric and a set of quarterly objectives with measurable key results.

**UDOO fit:** The North Star feeds Station 1's success signals. OKR Key Results become the measurable targets in the Initiative Brief. If an Initiative doesn't move a Key Result, it probably shouldn't be in this quarter's backlog.

**Gotcha:** North Star metrics that are too broad ("revenue") or too narrow ("clicks on button X") fail. The metric should reflect the *value exchange* between the product and the user.

::: details Example — Analytics Layer
**North Star Metric:** *Weekly active insight consumers* — the number of unique staff members who view or act on an analytics insight each week.

This metric captures the value exchange: the Analytics Layer provides intelligence, and the measure of success is whether people actually consume that intelligence. "Data ingested" or "queries run" would be output metrics, not value metrics.
:::

---

### 9. HEART / AARRR (Pirate Metrics)

**What it is:** Two signal frameworks for measuring product health.

**HEART** (Google) measures UX quality:
- **H**appiness — user satisfaction (surveys, NPS)
- **E**ngagement — depth of interaction (sessions/week, features used)
- **A**doption — new users starting to use a feature
- **R**etention — users coming back over time
- **T**ask Success — efficiency and error rates for key tasks

**AARRR** (Dave McClure) measures the growth funnel:
- **A**cquisition — how users find you
- **A**ctivation — first "aha" moment
- **R**etention — users return
- **R**evenue — users pay
- **R**eferral — users invite others

**When to use it:** When defining the observability signals for Station 1 success metrics, or when an Initiative targets a specific funnel stage.

**What it produces:** A categorized set of metrics with clear ownership and measurement plans.

**UDOO fit:** HEART signals map to the DoR's observability requirement (DoR #6). Every story should emit at least one signal that feeds into the HEART/AARRR framework. AARRR is particularly useful for Offstream (customer lifecycle) alignment.

**Gotcha:** Measuring everything in HEART is as bad as measuring nothing. Pick 1–2 categories per Initiative. For Living Wondrously Journal, the primary categories are Engagement (journal entries per user per week) and Retention (Day-7 return rate among journal users).

---

### 10. Wardley Mapping

**What it is:** A strategic mapping technique by Simon Wardley that plots components of your value chain on two axes: **visibility to the user** (y-axis) and **evolution stage** (x-axis, from Genesis → Custom-Built → Product → Commodity). It reveals which components to build, buy, or outsource.

**When to use it:** For strategic technology decisions — build vs. buy, platform investments, identifying components that are commoditising (and should be replaced with off-the-shelf solutions). Useful at the Initiative level for major architectural decisions.

**What it produces:** A map showing the evolution and positioning of every component in the value chain, with strategic moves annotated.

**UDOO fit:** Wardley Maps feed Station 4 (Solution Options) for architecture-level decisions. They are optional and advanced — most teams won't need them for typical feature work, but they are invaluable for platform-level Initiatives.

**Gotcha:** Wardley Mapping has a steep learning curve. Don't introduce it until the team is comfortable with Story Mapping and Impact Mapping. Start with a facilitated session led by someone who has built maps before.

::: warning
Wardley Mapping is an advanced framework. If your team is new to structured discovery, skip this for now and revisit when you have 3+ discovery sprints under your belt.
:::

---

## Group B — Story Readiness (DoR)

These frameworks ensure that each story is **clear, testable, and complete** before it crosses the Commitment Point into Downstream.

---

### 1. INVEST

**What it is:** A mnemonic for evaluating story quality, created by Bill Wake:

| Letter | Criterion | Question |
|--------|-----------|----------|
| **I** | Independent | Can this story be built and delivered without waiting for another story? |
| **N** | Negotiable | Is there room for the team to discuss *how* to implement it? |
| **V** | Valuable | Does this story deliver value to a real user or the business? |
| **E** | Estimable | Can the team give a size estimate with reasonable confidence? |
| **S** | Small | Can one developer complete this in 1–3 days? |
| **T** | Testable | Can QA write a test that proves this story is done? |

**When to use it:** At every readiness check. Run INVEST as a quick diagnostic on each story before applying the full 9-point DoR.

**What it produces:** A pass/fail assessment per story, with the specific failing criterion identified.

**UDOO fit:** INVEST is embedded in the DoR. Items #1 (format), #3 (ACs), #7 (dependencies), #8 (size), and #9 (feasibility) directly test INVEST criteria.

**Gotcha:** "Independent" does not mean "no dependencies exist." It means the story can be deployed and tested without another story being finished first. Technical dependencies are fine if they are *resolved* before the story enters the sprint.

---

### 2. Example Mapping (Three Amigos)

**What it is:** A structured conversation format where three roles — **Product Owner**, **Developer**, and **QA** — sit together and decompose a story into **rules**, **examples**, and **questions** using colour-coded cards:

```
🟡 Story (yellow card)
├── 🔵 Rule 1 (blue card)
│   ├── 🟢 Example 1a (green card)
│   └── 🟢 Example 1b (green card)
├── 🔵 Rule 2 (blue card)
│   ├── 🟢 Example 2a (green card)
│   └── 🟢 Example 2b (green card)
└── 🔴 Question: What happens if...? (red card)
```

**When to use it:** Before writing Gherkin scenarios. Example Mapping is the bridge between a story's acceptance criteria and formal BDD specs. Run it during Stream B of the discovery sprint (Day 4 or 9).

**What it produces:** A set of rules (business logic), examples (concrete test cases), and unresolved questions. If there are too many red cards, the story needs more discovery.

**UDOO fit:** Example Mapping feeds DoR #3 (acceptance criteria). The green cards become Gherkin scenarios. The red cards become blockers that must be resolved before the story is Ready.

**Gotcha:** If the session produces more than 4 rules or 3 questions, the story is too big. Split it.

::: details Example — Living Wondrously "Save Entry"
🟡 **Story:** Maya saves a journal entry

🔵 **Rule 1:** An entry requires at least one character of text
- 🟢 Maya types "Grateful for morning walk" → Save is enabled
- 🟢 Maya opens the editor but types nothing → Save is disabled

🔵 **Rule 2:** Only one entry per day
- 🟢 Maya saves at 9pm, opens journal at 10pm → sees the saved entry, can edit
- 🟢 Maya saves, closes app, reopens → entry is preserved

🔵 **Rule 3:** Saving awards a star
- 🟢 Maya has 3 stars, saves → star count becomes 4
- 🟢 Maya edits an existing entry and saves again → no additional star

🔴 **Question:** What happens if Maya saves at 11:58pm and edits at 12:01am?
:::

---

### 3. BDD / ATDD / Specification by Example

**What it is:** A family of practices that express requirements as executable specifications in Given/When/Then format.

- **BDD** (Behaviour-Driven Development): Collaborative specification using natural language scenarios. Focus on *behaviour*, not implementation.
- **ATDD** (Acceptance Test-Driven Development): Write the acceptance test before the code. The test is the spec.
- **Specification by Example**: Use concrete examples to specify behaviour, avoiding ambiguous abstract requirements.

```gherkin
Feature: Journal Entry Saving

  Scenario: Maya saves her first entry today
    Given Maya has selected the prompt "What made you smile today?"
    And she has typed "The cat sat on my laptop"
    When she taps "Save"
    Then her text is stored as today's journal entry
    And her star count increases by one

  Scenario: Maya tries to save without typing
    Given Maya has selected a prompt
    And she has not typed any text
    Then the "Save" button is disabled
    And a hint reads "Write at least a few words to save"
```

**When to use it:** For every story that has user-facing behaviour. Gherkin scenarios are the final form of acceptance criteria in UDOO.

**What it produces:** `.feature` files that serve as both documentation and automated test scripts (via Cucumber, SpecFlow, or AssertThat for Jira).

**UDOO fit:** BDD is baked into the DoR (#3: Gherkin-ready ACs) and into Downstream's testing workflow. Upstream writes the *seeds* (draft scenarios); Downstream refines and automates them.

**Gotcha:** Gherkin scenarios should describe *what* the system does, not *how* it does it internally. `Then the API returns 200` is an implementation detail. `Then Maya sees her saved entry` is behaviour.

---

### 4. Heuristic Evaluation & Cognitive Walkthrough

**What it is:** Two UX inspection methods that don't require users:

- **Heuristic Evaluation:** 1–3 evaluators review the interface against Nielsen's 10 usability heuristics (visibility of system status, match between system and real world, user control and freedom, consistency, error prevention, recognition over recall, flexibility, aesthetic minimalism, error recovery, help and documentation).
- **Cognitive Walkthrough:** Evaluators step through a task scenario asking four questions at each step: (1) Will the user try to achieve the right effect? (2) Will they notice the correct action? (3) Will they associate it with the desired effect? (4) Will they see that progress is being made?

**When to use it:** When you have wireframes or prototypes but haven't run usability tests yet. Fast and cheap — a single evaluator can do it in 1–2 hours.

**What it produces:** A list of usability issues, categorized by severity and heuristic violated.

**UDOO fit:** Heuristic evaluation is a lightweight quality check during Station 3 (journey mapping). Issues found become additional stories or AC refinements. Cognitive walkthroughs validate that the journey map's steps match user mental models.

**Gotcha:** Heuristic evaluation finds *possible* usability issues, not *actual* user behaviour. It is a complement to usability testing, not a replacement.

---

### 5. UX Writing / Content Design

**What it is:** The discipline of writing the words users see — button labels, error messages, onboarding copy, empty states, tooltips, confirmation dialogs. Effective microcopy is clear, concise, and consistent.

**Principles:**
- **Clarity over cleverness** — "Save entry" not "Capture this moment ✨"
- **Front-load the verb** — "Delete this entry?" not "Are you sure you want to delete?"
- **Match the user's language** — use the words they use, not your internal jargon
- **Write the error message first** — if you can't explain the failure clearly, the flow is too complex

**When to use it:** For every story that has user-facing text. UX writing should happen during Stream B alongside acceptance criteria, not as an afterthought in development.

**What it produces:** A copy document or content strings attached to each story, covering happy path, empty states, error states, and loading states.

**UDOO fit:** DoR #5 (Copy / text) requires all user-facing strings to be drafted before a story is Ready. UX Writing is how you fulfill that requirement.

**Gotcha:** "We'll figure out the copy during development" is how you get buttons labeled "Submit" and error messages that say "Error: null."

::: tip Real Example — Pninei Halacha
The Pninei Halacha app serves Hebrew and English audiences. Content design decisions include: right-to-left layout as the *default* (not an afterthought), paragraph numbering that matches the printed book, and a bookmark label that says "שמור מקום" (save place) rather than the generic "סימנייה" (bookmark) — because users think in terms of "where was I?" not "bookmarks."
:::

---

### 6. Accessibility (WCAG 2.2 AA) & Internationalization

**What it is:** Two complementary quality dimensions:

- **Accessibility (a11y):** Ensuring the product is usable by people with disabilities. WCAG 2.2 AA is the baseline standard. Key areas: perceivable (text alternatives, contrast), operable (keyboard navigation, no seizure triggers), understandable (readable, predictable), robust (compatible with assistive technology).
- **Internationalization (i18n):** Designing the product so it can be adapted to different languages and regions without re-engineering. Includes text direction (LTR/RTL), date/number formats, string externalization, and layout flexibility.

**When to use it:** As a checklist during story readiness. Accessibility and i18n requirements should be part of *every* story's acceptance criteria, not a separate initiative.

**What it produces:** Accessibility annotations on wireframes, ARIA label requirements in story ACs, locale-aware string tables, RTL layout specifications.

**UDOO fit:** Accessibility feeds DoR #5 (accessibility labels noted). I18n feeds the architecture pack (Stream C) when the product serves multiple locales.

**Gotcha:** Retrofitting accessibility is 5–10× more expensive than building it in. The same is true for i18n. A Pninei Halacha story that says "display the paragraph" without specifying RTL text rendering will produce a bug that takes longer to fix than the original story took to build.

---

### 7. Lean Usability Testing

**What it is:** A lightweight usability testing approach based on Jakob Nielsen's finding that 5 users uncover ~85% of usability issues. Instead of lab studies with 20+ participants, run quick tests with 5 people, observe, fix, and test again.

**Protocol:**
1. Write 3–5 task scenarios (verb + object + context)
2. Recruit 5 users who match the persona
3. Ask each user to complete the tasks while thinking aloud
4. Record observations (not just quotes — watch where they hesitate, tap wrong things, or squint)
5. Debrief: list issues, categorize by severity, prioritize

**When to use it:** Before finalizing the journey map (Station 3) if you have a prototype, or during Stream B to validate that the story's flow matches user expectations.

**What it produces:** A prioritized list of usability findings, linked to specific journey steps.

**UDOO fit:** Usability findings become additional stories or modified ACs. Each finding should reference the journey step where it was observed.

**Gotcha:** "We tested with 5 users and they all liked it" is not usability testing — it is a satisfaction survey. Usability testing measures *task completion*, *time on task*, and *errors*, not opinions.

---

## Group C — Tech & Architecture (DAR)

These frameworks ensure the solution is **technically sound, well-documented, and operationally viable** before delivery begins.

---

### 1. Event Storming / Domain Storytelling

**What it is:** Two collaborative workshop formats for exploring complex business domains:

- **Event Storming** (Alberto Brandolini): Participants place orange sticky notes for **domain events** (things that happened, past tense) on a timeline. Then they add commands (blue), actors (yellow), aggregates (pale yellow), read models (green), policies (lilac), and external systems (pink). The result is a shared understanding of the entire domain.
- **Domain Storytelling** (Stefan Hofer & Henning Schwentner): Participants narrate a business process as a story using pictographic language: actors, work objects, and activities, numbered in sequence.

**When to use it:** At the start of a complex Initiative, especially when the domain has many actors, processes, and integration points. Essential for the Analytics Layer project (BigQuery pipelines, Neo4j graph, telemetry ingestion, profile construction).

**What it produces:** A wall of domain events with clear boundaries, aggregates, and hot spots (areas of confusion or contention). Domain stories produce numbered visual narratives.

**UDOO fit:** Event Storming feeds Station 2 (Problem Framing — understanding the current state) and Station 4 (Solution Options — identifying bounded contexts). The event timeline becomes input for the Story Map's top row.

**Gotcha:** Event Storming without a facilitator who has done it before degenerates into a chaotic sticky-note party. Have someone experienced lead the first session, or run a 15-minute practice round with a familiar domain (e.g., "ordering coffee at a café").

::: details Example — Analytics Layer
An Event Storming session for the Analytics Layer revealed these key domain events:

```
Student Logged In → Course Opened → Video Started → Video Paused →
Video Completed → Quiz Attempted → Quiz Scored → Certificate Issued →
Engagement Score Calculated → Learning Path Recommended
```

Hot spots identified:
- 🔥 "Engagement Score Calculated" — no one agreed on the formula
- 🔥 "Learning Path Recommended" — depends on Neo4j graph, which doesn't exist yet
- 🔥 "Quiz Scored" — two different scoring systems in legacy code

Each hot spot became a spike in Stream C of the discovery sprint.
:::

---

### 2. Domain-Driven Design & Bounded Contexts

**What it is:** An approach to software design by Eric Evans that aligns software structure with business domain structure. Key concepts:

- **Bounded Context:** A boundary within which a particular domain model is defined and applicable. Different contexts can use the same word to mean different things ("Account" in billing ≠ "Account" in authentication).
- **Ubiquitous Language:** A shared vocabulary between developers and domain experts, used consistently in code, conversations, and documentation.
- **Aggregates:** Clusters of objects treated as a single unit for data changes.
- **Context Mapping:** Showing how bounded contexts relate to each other (upstream/downstream, shared kernel, anti-corruption layer).

**When to use it:** When the system has multiple sub-domains that need clear boundaries — preventing one team's model from polluting another's. Critical for microservice architecture decisions.

**What it produces:** A context map showing bounded contexts and their relationships, plus a ubiquitous language glossary.

**UDOO fit:** DDD feeds Station 4 (Solution Options — system decomposition) and the architecture pack. The ubiquitous language becomes the glossary that everyone references. Bounded contexts inform how Epics are scoped — one Epic should not cross context boundaries without explicit acknowledgment.

**Gotcha:** DDD is not "just give everything a fancy name." If the ubiquitous language is only used in documentation and not in code (class names, method names, API endpoints), it is shelf-ware.

---

### 3. C4 Model

**What it is:** A hierarchical approach to software architecture diagramming by Simon Brown, with four zoom levels:

| Level | Shows | Audience |
|-------|-------|----------|
| **Context** | The system as a box, surrounded by users and external systems | Everyone — stakeholders, PMs, execs |
| **Containers** | The high-level technology choices — web app, API, database, message queue | Developers and architects |
| **Components** | The major structural building blocks within each container | Developers building that container |
| **Code** | Class diagrams, entity-relationship diagrams (optional, often auto-generated) | Developers working on specific modules |

**When to use it:** For the architecture pack in Stream C. Level 1 (Context) should be created for every Initiative. Level 2 (Containers) for any Initiative that introduces new systems. Levels 3–4 only when needed.

**What it produces:** 1–4 diagrams at progressive zoom levels, using a consistent notation.

**UDOO fit:** C4 diagrams are a required artifact in the architecture pack (Stream C, Day 8). The Context diagram feeds Station 1 (system boundary). The Container diagram feeds Station 4 (solution options). ADRs reference C4 diagrams to show what changed.

**Gotcha:** Don't start at Level 4 (Code). Start at Level 1 and only zoom in where there is uncertainty or complexity. Most Initiatives only need Levels 1–2.

::: tip Tooling
Use Structurizr, draw.io, or Mermaid (which renders natively in VitePress and Confluence) for C4 diagrams. Avoid PowerPoint — diagrams become stale because they are hard to update.
:::

---

### 4. ADRs (MADR Template)

**What it is:** Architecture Decision Records — short documents that capture the context, decision, and consequences of a significant architecture choice. The MADR (Markdown Any Decision Record) template provides a lightweight, consistent format.

**Template:**
```markdown
# ADR-NNN: Title

## Status
Proposed | Accepted | Deprecated | Superseded by ADR-XXX

## Context
What is the issue? What forces are at play?

## Decision
What did we decide?

## Consequences
What becomes easier? What becomes harder?

## Options Considered
### Option A: ...
- Pro: ...
- Con: ...
### Option B: ...
- Pro: ...
- Con: ...
```

**When to use it:** For every technical decision with lasting consequences — database choices, API protocol, authentication mechanism, state management approach, deployment strategy.

**What it produces:** A searchable, versioned record of decisions and their rationale.

**UDOO fit:** ADRs are created in Station 4 (Solution Options) and finalized in Station 5 (Decision & Scope). They are linked from the Initiative Brief and from the Jira Epic. Every story that implements an ADR-level decision references the ADR number.

**Gotcha:** An ADR without the "Options Considered" section is just an announcement. The value of an ADR is showing *why* this option was chosen over the alternatives.

---

### 5. ATAM — Architecture Tradeoff Analysis Method

**What it is:** A structured evaluation method from the Software Engineering Institute (SEI) for analyzing architecture quality attributes — performance, availability, security, modifiability, usability — and identifying tradeoff points where improving one quality attribute hurts another.

**Process (simplified):**
1. Present the architecture and its business drivers
2. Identify the key quality attribute scenarios (e.g., "The system must handle 10,000 concurrent users with < 200ms response time")
3. Analyze the architecture against each scenario
4. Identify sensitivity points (places where a small change has big impact) and tradeoff points (where two quality attributes conflict)
5. Document risks and non-risks

**When to use it:** For large, high-risk Initiatives where the architecture has significant tradeoffs. Not needed for small features.

**What it produces:** A risk register tied to quality attribute scenarios, plus identified tradeoff points.

**UDOO fit:** ATAM feeds Station 4 (Solution Options — tradeoff analysis). The quality attribute scenarios become part of the architecture pack. Risks feed the Initiative Brief's Assumption Register.

**Gotcha:** Full ATAM is heavyweight (multi-day workshops). For most UDOO discovery sprints, a "light ATAM" is sufficient: list 3–5 quality attribute scenarios, evaluate the chosen architecture against each, and document the tradeoffs in an ADR.

---

### 6. Threat & Privacy Modeling (STRIDE, LINDDUN)

**What it is:** Systematic approaches to identifying security and privacy risks:

- **STRIDE** (Microsoft): Identifies threats in six categories — **S**poofing, **T**ampering, **R**epudiation, **I**nformation Disclosure, **D**enial of Service, **E**levation of Privilege. Applied to each component in the system's data flow diagram.
- **LINDDUN** (KU Leuven): Identifies privacy threats — **L**inkability, **I**dentifiability, **N**on-repudiation, **D**etectability, **D**isclosure of information, **U**nawareness, **N**on-compliance.

**When to use it:** For any Initiative that handles personal data, authentication, financial transactions, or operates in regulated industries. Someone for Coffee (women-only, verified identity) and Pninei Halacha (religious content, personal bookmarks) both require privacy consideration.

**What it produces:** A threat model with identified threats, their likelihood, impact, and mitigations. Each unmitigated threat becomes a story or an AC.

**UDOO fit:** Threat models feed Station 4 (Solution Options — security considerations) and the architecture pack. High-severity threats that are not mitigated before the Commitment Point are blockers for the DoR.

**Gotcha:** Threat modeling after the architecture is frozen is an audit, not a design activity. Do it during Station 4, while the architecture is still malleable.

::: warning Someone for Coffee — Privacy Is the Product
For a women-only social networking platform, privacy is not a non-functional requirement — it is the product. LINDDUN analysis revealed:

- **Identifiability risk:** Profile photos combined with café meeting locations could enable stalking
- **Linkability risk:** Matching patterns could reveal social graphs to third parties
- **Non-compliance risk:** GDPR "right to be forgotten" requires full data deletion, including Neo4j graph edges

Each of these became a dedicated story with its own acceptance criteria and architecture decisions.
:::

---

### 7. SRE & Observability (SLI/SLO/SLA, Golden Signals, RED/USE)

**What it is:** A family of operational frameworks for defining and measuring system reliability:

- **SLI** (Service Level Indicator): A quantitative measure of service behavior (e.g., request latency, error rate)
- **SLO** (Service Level Objective): A target value for an SLI (e.g., 99.9% of requests < 200ms)
- **SLA** (Service Level Agreement): A contract with consequences for missing an SLO
- **Golden Signals** (Google SRE): Latency, Traffic, Errors, Saturation — the four signals every service should monitor
- **RED** (Tom Wilkie): Rate, Errors, Duration — for request-driven services
- **USE** (Brendan Gregg): Utilization, Saturation, Errors — for resource-oriented analysis

**When to use it:** During Station 4 (Solution Options) to define operational requirements, and during the architecture pack (Day 8) to specify monitoring and alerting.

**What it produces:** SLI definitions, SLO targets, alert thresholds, and dashboard specifications.

**UDOO fit:** SLI/SLO definitions feed DoR #6 (observability signal). The architecture pack should include a monitoring section that specifies which Golden Signals to track for each container in the C4 diagram. These definitions also bridge Upstream into Onstream — the SLOs defined here become the Onstream team's operational baseline.

**Gotcha:** Defining SLOs without error budgets is meaningless. The SLO must include what happens when the budget is exhausted (e.g., freeze feature releases and focus on reliability).

---

### 8. Team Topologies

**What it is:** A framework by Matthew Skelton and Manuel Pais for organizing teams based on software architecture. Four team types:

| Type | Purpose | Example |
|------|---------|---------|
| **Stream-aligned** | Delivers value on a single stream of work (a product, a set of features) | The Pninei Halacha team |
| **Enabling** | Helps stream-aligned teams adopt new capabilities | A DevOps enablement team |
| **Complicated subsystem** | Owns a component that requires specialist knowledge | The Neo4j graph team in Analytics Layer |
| **Platform** | Provides internal services that reduce cognitive load for other teams | The shared CI/CD platform team |

Three interaction modes: **Collaboration** (working together), **X-as-a-Service** (consuming a clear API), **Facilitating** (coaching and enabling).

**When to use it:** When an Initiative spans multiple teams and you need to define ownership, interaction modes, and handoff boundaries.

**What it produces:** A team topology diagram showing team types, interaction modes, and the streams they own.

**UDOO fit:** Team Topologies inform how Epics are assigned. If an Epic crosses a team boundary, the interaction mode (collaboration vs. X-as-a-Service) must be explicit. This prevents the "everyone owns it, so no one owns it" anti-pattern.

**Gotcha:** Assigning team types without changing actual communication patterns is organizational theater. If you call a team "platform" but they still get pulled into feature work, the topology is fiction.

---

## Combo Recipes

Not every Initiative needs every framework. Here are recommended combinations based on scope:

### Small Feature (1–2 Stories)

| Step | Framework | Time |
|------|-----------|------|
| Understand the job | JTBD (lightweight: one job story) | 15 min |
| Write the stories | INVEST check | 20 min |
| Draft ACs | Example Mapping (one session) | 30 min |
| Verify | DoR 9-point checklist | 15 min |

**Total: ~80 minutes.** No architecture work needed. No formal Story Map. Just clarity.

---

### New Epic (3–8 Stories)

| Step | Framework | Time |
|------|-----------|------|
| Frame the problem | Station 1 + JTBD | 30 min |
| Map the journey | Story Mapping (one activity's worth) | 60 min |
| Prioritize stories | MoSCoW or ICE within the epic | 20 min |
| Shape each story | Example Mapping (Three Amigos per story) | 30 min × N stories |
| Architecture check | C4 Level 1 + any ADRs needed | 45 min |
| Readiness | DoR checklist for each story | 15 min × N stories |

**Total: half a day to a full day**, depending on story count.

---

### New Product / Major Project

| Step | Framework | Time |
|------|-----------|------|
| Strategic framing | Impact Mapping + North Star + OKRs | Half day |
| Domain understanding | Event Storming | Half day |
| Problem deep-dive | Design Thinking Diamond 1 | 1–2 days |
| Journey + slicing | Full Story Mapping workshop | Half day |
| Solution exploration | Opportunity Solution Tree + C4 (L1–L2) | Half day |
| Architecture decisions | DDD Bounded Contexts + ADRs + ATAM (light) | 1 day |
| Security & privacy | STRIDE / LINDDUN threat model | Half day |
| Operational readiness | SLI/SLO definitions + Team Topologies | Half day |
| Story readiness | Example Mapping + BDD + DoR for S1 stories | 1–2 days |

**Total: 1–2 discovery sprints (2–4 weeks)** for a full product. This is not overhead — it is the difference between a product that ships coherently and one that ships in chaos.

---

## Minimal Starter Stack

::: info For Teams Just Starting Out
If your team has never done structured discovery before, start here. These five practices give you 80% of the value with 20% of the framework catalog. Add more frameworks as your team matures.
:::

| # | Practice | Why it matters | Time to learn |
|---|----------|---------------|--------------|
| 1 | **Story Mapping** | Gives the team a shared visual model of the work | One facilitated session |
| 2 | **INVEST** | Catches bad stories before they enter the sprint | 10 minutes to explain |
| 3 | **Example Mapping** | Turns vague ACs into concrete, testable examples | One practice round |
| 4 | **C4 Level 1** | Shows the system boundary — prevents "where does this live?" confusion | 30 minutes |
| 5 | **DoR Checklist** | The quality gate that prevents half-baked stories from entering Downstream | Print it and tape it to the wall |

**Adoption order:** Start with INVEST and the DoR Checklist (they require no new meetings). Then add Story Mapping to your next Initiative kickoff. Then add Example Mapping to your readiness checks. Finally, add C4 diagrams to your architecture discussions.

::: tip The One Rule
If you take nothing else from this catalog: **never write a Jira ticket that does not trace back to a user's job-to-be-done and a step in a journey map.** That single discipline prevents more rework than any framework.
:::

---

[← Discovery Backbone](/upstream/discovery-backbone) · [Initiative Walkthrough →](/upstream/initiative-walkthrough)
