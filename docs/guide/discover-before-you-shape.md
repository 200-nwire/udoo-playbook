# Discover Before You Shape

Noa has been running the product for a year. Her team shapes features well — journey maps, story maps, The Cut, Gherkin, the whole practice. Features ship clean and on time.

But last quarter, three features shipped that nobody uses.

Not because they were built badly. Because they were the wrong features. The team spent twelve weeks building a social sharing capability that users didn't want, a notification system that users turned off within a week, and an analytics dashboard that the stakeholder requested but no customer has opened since launch.

Each feature had a journey map. Each had acceptance criteria. Each passed DoR. Each shipped successfully. And each solved a problem that didn't exist — or existed for the wrong person, or existed at the wrong time, or wasn't the most important problem to solve this quarter.

Noa looks at the next quarter and realizes she has six feature candidates and no principled way to choose between them. Three came from stakeholder requests. One came from a competitor launching something similar. One came from a support ticket pattern she noticed. One came from her own intuition about what users need.

Which three should the team build? She doesn't know. She's been shaping features without first validating whether those features deserve to exist.

---

This is the gap between feature-level discipline and initiative-level thinking.

Ship Clean gave the team clean stories. Shape Before You Build gave them coherent features. But coherent features built in service of the wrong initiative are well-executed waste. The most expensive kind of waste — because nobody noticed it was waste until after it shipped.

The fix is not more features or better features. The fix is discovery at a higher level: understanding who you're building for, what problem actually matters to them, and what evidence supports that understanding. Before a single feature is shaped.

## What to Adopt

### The Discovery Workshop

This is where the five discovery stations earn their keep. The stations are a structured workshop for thinking through a problem you don't fully understand yet — and they are specifically designed for this level. Not for shaping stories. Not for mapping features. For validating that an initiative is worth the team's next quarter.

Think of it like a doctor's visit. A patient doesn't walk in and say "give me antibiotics." They describe symptoms. The doctor examines, diagnoses, presents treatment options, and writes a prescription — in that order. The stations follow the same logic: who has the problem (Station 1), what's actually wrong (Station 2), what does their life look like (Station 3), what are the treatment options (Station 4), here's the prescription (Station 5). The prescription is the Initiative Brief.

**Station 1 — Vision & Context.** Who is the primary user of this initiative, and why does solving their problem matter now? Not "users" — a named person. Not "to improve retention" — a specific pain that a specific person experiences in a specific moment.

The station starts with disagreement. Noa puts the question on the wall and everyone writes their answer on a sticky note before speaking. Four people, four answers. One says the primary user is the power user. Another says it's the churning user. A third says it's the new user who never got past onboarding. They can't all be right. Resolving this disagreement — picking one primary user with evidence — is the most valuable hour the team will spend this quarter.

**Station 2 — Problem Framing.** What is the actual friction this user experiences? Not the symptom — the structural breakdown.

A PM who hasn't done Station 2 will say "retention is low." A PM who has done Station 2 will say "the app treats inconsistency as failure — users who miss a day lose their streak, feel like they failed, and stop opening the app." The first is a metric. The second is a diagnosis. You can build features against a metric and be wrong. You can build features against a diagnosis and learn whether you're right.

Station 2 also produces the Assumption Register — the list of things the team believes but hasn't proven. "We assume users care about streaks." "We assume the return experience is where we lose people." "We assume the problem is emotional, not functional." Each assumption is rated: validated (evidence exists), unvalidated (reasonable belief), or risky (could be wrong and would change everything). The risky assumptions become the things to test first.

**Station 3 — User Journey & Slices.** What does the user's experience actually look like, end to end, before and after this initiative ships?

At initiative level, this isn't a detailed step-by-step journey. It's a before-and-after. The Experience Snapshot — a 150-word narrative of the user's current experience and what changes — lives here. It's the artifact that makes the initiative feel real before anyone designs a feature.

**Station 4 — Solution Options.** What could we build? Not what should we build — what are the genuine options? Two minimum, three preferred, with tradeoffs stated.

This station is where the tech lead earns their seat. An initiative-level option might be: rebuild the core mechanic (expensive, high impact) vs. patch the worst symptom (cheap, low impact) vs. add a new capability that makes the old mechanic irrelevant (medium cost, unknown impact). The team needs to see all three before committing to one. ADRs are written here for architecture-level decisions.

**Station 5 — Decision & Scope.** What are we actually committing to? Which features are in Now, which are in Next, which are in Later? What is the success metric, and what's the current baseline?

Now / Next / Later is not a backlog. It's a declaration of focus. Now features get full Feature Discovery. Next features are shaped enough to start when Now is done. Later features are ideas — acknowledged, recorded, and explicitly not worked on. The "explicitly not worked on" part is the most important. It prevents the team from being pulled in six directions when the stakeholder asks "what about social sharing?" and the answer is: "Later. Here's why. It's written down."

The full workshop — all five stations — takes about two weeks for a new initiative. That's the heaviest investment in the framework. It's heavy because this is where the expensive mistakes live. A feature shaped wrong costs a sprint. An initiative aimed wrong costs a quarter.

→ [Station 1 — Vision & Context](/upstream/station-1-vision) through [Station 5 — Decision & Scope](/upstream/station-5-decision)

### The Initiative Brief

The workshop produces a document. One document, signed by the Core Trio (PM, designer, tech lead), that captures everything the team learned. Six outcomes:

1. **Persona locked.** One named primary user, agreed by the team, with evidence.
2. **Problem validated.** The friction is named, with data or research supporting it — not assumed.
3. **Experience Snapshot written.** The 150-word narrative that makes the problem real.
4. **Feature Map produced.** Now / Next / Later features identified and sequenced.
5. **Success metric defined.** One KPI, current state → target, measurable.
6. **Brief signed.** Reviewed by Core Trio, disagreements recorded, decision made.

The Initiative Brief is the reference document for the entire quarter. Every feature shaped after it connects back to it. Every "should we build this?" question is answered by checking: does this feature serve the initiative's validated problem, for the initiative's named user, moving the initiative's success metric?

When someone asks "why aren't we building social sharing?", the PM pulls up the Initiative Brief. "Our primary user this quarter is Sara, who is leaving because the app punishes inconsistency. Social sharing serves a different user — someone who is already engaged enough to share. That's a Next or Later feature, not Now." The brief makes "not now" a decision, not a fight.

→ [Initiative Brief](/upstream/initiative-brief) — the full template and guide
→ [Experience Snapshot](/upstream/experience-snapshot) — how to write the 150-word narrative

### Reopen Triggers

Every Initiative Brief should include three bullets at the bottom:

**Reopen this initiative if:**
- The success metric hasn't moved after two shipped features
- Offstream data contradicts the primary persona (different user segment is actually churning)
- A P0 incident reveals that the initiative's core assumption was wrong

These aren't theoretical. They're the conditions under which the team should stop feature delivery and return to initiative discovery. Without them, teams keep shipping features against a brief that reality has already invalidated — because reopening discovery feels like admitting failure, and nobody wants to be the one to say it.

The reopen triggers make it safe. "We said we'd reopen if the metric didn't move. The metric didn't move. We're reopening." That's not failure — that's the framework working.

→ [Initiative Template](/reference/initiative-template) — includes reopen trigger section

### Scrum for Discovery

Discovery is not a phase you do before the "real work." It is work — and it needs the same discipline as delivery.

Noa's first discovery attempt ran six weeks. The team interviewed users, mapped journeys, debated options — and never converged. There was always one more question to answer, one more assumption to validate. The delivery team sat idle for a month waiting for "discovery to finish." Discovery didn't finish. It just faded out when the pressure to ship became unbearable, and the team started building from whatever they had.

The fix: run discovery in sprints. A two-week discovery sprint with a backlog of discovery activities, daily standups, and a sprint review where the team presents what they learned — not what they built, what they learned.

The standup is three questions: "What did I learn yesterday? What am I investigating today? What's blocking my understanding?" The sprint review is the Core Trio presenting: "Here's who we think the user is, here's the problem as we understand it, here's what we're still unsure about." The Initiative Brief is the definition of done.

This prevents the two most common discovery failures: discovery that never ends (because there's always more to learn) and discovery that never starts (because the team "doesn't have time" for it). A sprint has a start, an end, and a deliverable. Discovery deserves the same.

→ [Scrum for Discovery](/upstream/scrum-for-discovery)

---

## Going Deeper

Once Discover Before You Shape is working — initiatives are validated, features connect to a problem with evidence, Now/Next/Later is a real prioritization — here's how to sharpen:

**Better discovery workshops.** Move from PM-led workshops to shared facilitation. When the designer facilitates Station 3, they catch journey issues the PM would miss. When the tech lead facilitates Station 4, the PM focuses on listening instead of defending. Rotation builds shared ownership of the discovery output. → [Roles & Ownership](/upstream/roles)

**Better initiative sequencing.** Noa has four candidate initiatives and no principled way to choose between them. Move from gut-feel to a structured method: score each initiative on reach, impact, confidence, and effort. The candidate with the highest score per unit of effort goes first — not the one the loudest stakeholder wants. → [Discovery Frameworks Catalog](/upstream/discovery-frameworks)

**Better assumption management.** The Assumption Register from Station 2 is powerful when maintained. After each feature ships, revisit the assumptions: which were validated? Which were wrong? The register becomes the team's learning record — a living document of what they believed, what they tested, and what they know. → [Station 2 — Problem Framing](/upstream/station-2-problem)

**Better framing.** The difference between "retention is low" and "the app punishes inconsistency" is the difference between a metric and a diagnosis. The Framing Matters page shows what bad framing costs — in real money, real time, and real features built for no one. → [What Bad Framing Costs](/upstream/framing-matters)

---

## What You'll Notice Next

Discover Before You Shape solves the "wrong initiative" problem. The team builds features that connect to a validated problem for a named user. The Initiative Brief is the anchor. Feature Briefs connect to it. Stories connect to features. The chain is traceable.

But after a couple of quarters of good discovery and clean delivery, a new problem appears — and it comes from the other end.

The team ships well. Features go live. And then... nothing. Nobody monitors whether the feature is actually used. Nobody checks whether the success metric moved. Production incidents happen with no runbook. A bug that 140 customers reported three months ago is still open because nobody classified it. The on-call engineer has no playbook for the service that just broke at 2am.

The team has learned to build the right thing and build it right. They haven't learned to keep it running.

→ [Own What You Ship](/guide/own-what-you-ship) — the next step
