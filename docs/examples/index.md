# Examples Gallery

Every framework needs proof that it works outside the slide deck. This section contains **real, unabridged documents** drawn from production projects — initiative briefs that shipped, post-mortems that changed processes, stories that developers actually built from, and RCAs that prevented repeat failures.

Names, domains, and some numbers have been changed to protect confidentiality, but the structure, depth, and decision-making are authentic. Nothing has been simplified "for the book."

:::tip Use these as starting points, not rigid templates
No two teams operate identically. The examples here reflect specific contexts — a religious-text companion app, an LMS analytics platform, a wellness journal feature. Your domain will differ. What should stay constant is the **level of rigour**: clear goals, explicit acceptance criteria, honest risk assessment, and traceable decisions.

Copy the structure. Adapt the content. Delete what doesn't serve your team.
:::

---

## What's in the Gallery

| # | Document | Type | Project Context | What It Demonstrates |
|---|----------|------|-----------------|---------------------|
| 1 | [Initiative Brief — Pninei Halacha Foundation](./initiative-pninei-halacha) | Initiative Brief | Multilingual religious-text companion app | How to frame a foundation milestone with epics, language strategy, and readiness measures |
| 2 | [Initiative Brief — Analytics & Graph Intelligence Layer](./initiative-analytics-layer) | Initiative Brief | LMS analytics and graph intelligence platform | A technically deep initiative covering architecture, data models, graph ontology, and ADRs |
| 3 | [Feature Document — Living Wondrously Journal](./feature-living-wondrously) | Feature Document | Wellness / habit-forming mobile app | End-to-end feature specification with experience snapshot, architecture plan, and AI integration |
| 4 | [RCA — Wallet Balance Bug](./rca-wallet-balance) | Root Cause Analysis | FinTech dashboard | How a single line of code caused a trust-breaking display bug — and how to prevent it |
| 5 | [Post-Mortem — JWT API Outage](./postmortem-jwt-outage) | Post-Mortem | SaaS platform (API gateway) | Blameless post-mortem for a 44-minute production outage caused by a configuration change |
| 6 | [Fully Shaped Story — Journal Entry Creation](./story-journal-entry) | Story | Wellness / habit-forming mobile app | What "ready for dev" actually looks like: Gherkin scenarios, data model, API contract, DoR checklist |
| 7 | <a href="/examples/journey-story-map-exam.html" target="_blank">Journey & Story Map — Exam Feature</a> | Journey + Story Map | LMS exam feature | Interactive dual-persona journey map with sliced story map, emotion curves, and deferred scope — a complete discovery artifact in one view |

---

## Journey & Story Map — Why This Exists

Most teams keep their journey map in Miro and their story map in Jira. Different documents, different authors, different languages. Discovery happens, then delivery planning happens, and somewhere between them the real user gets lost.

The <a href="/examples/journey-story-map-exam.html" target="_blank">Exam Feature map</a> collapses that gap into a single surface.

The top half is the problem space. Gal, a science teacher, spends three hours on manual grade transfer after every exam. Yoav, her student, submits his answers not knowing if they went through. The journey rows — actions, thoughts, pain points, emotion — are not decoration. They are a validated record of what actually happens to real people. The emotion curves tell you that Gal enters the grading phase overwhelmed and that this is precisely where the feature needs to do its most important work.

The bottom half is the solution space. Every story card is a direct response to something observed above it. The columns don't change — Create, Deliver, Grade, Publish run straight through from Gal's journey into the delivery slices. The structure is not imposed by the product team. It is inherited from the user's path.

---

## How to Read These Examples

### If you're a Product Manager
Start with the two **Initiative Briefs**. Notice how each one ties business intent to measurable outcomes, then decomposes into epics and stories with acceptance criteria. Pay attention to the **Decision Log** pattern — it captures the "why" behind choices that would otherwise be lost in Slack threads.

### If you're an Engineering Lead
The **Analytics Layer initiative** shows how to embed architecture decisions (ADRs) inside the initiative document so they travel with the context. The **Feature Document** demonstrates how to bridge product intent and technical implementation without either side losing fidelity.

### If you're a Developer
The **Fully Shaped Story** is your blueprint. It shows exactly what you should expect before picking up a ticket: Gherkin acceptance criteria, edge cases enumerated, data model sketched, API contract defined, and a DoR checklist proving readiness.

### If you're in QA or Operations
The **RCA** and **Post-Mortem** show how to write documents that actually prevent recurrence. Notice the 5-Whys analysis, the labelling taxonomy, and the action items with owners and deadlines — not vague "we'll do better next time" promises.

---

## Framework Connections

Each example maps back to the framework's core structure:

```
┌─────────────────────────────────────────────────────┐
│  Upstream                                           │
│  ├─ Initiative Briefs (Pninei Halacha, Analytics)   │
│  ├─ Feature Documents (Living Wondrously Journal)   │
│  └─ Fully Shaped Stories (Journal Entry Creation)   │
├─────────────────────────────────────────────────────┤
│  Downstream                                         │
│  └─ Story → Dev Workflow → Definition of Done       │
├─────────────────────────────────────────────────────┤
│  Onstream                                           │
│  ├─ RCA (Wallet Balance Bug)                        │
│  └─ Post-Mortem (JWT API Outage)                    │
├─────────────────────────────────────────────────────┤
│  Offstream                                          │
│  └─ Signals from all of the above feed back here    │
└─────────────────────────────────────────────────────┘
```

:::info Cross-references throughout
Each example includes annotations pointing back to the relevant framework chapters — [Discovery Backbone](/upstream/discovery-backbone), [Bug Taxonomy](/onstream/bug-taxonomy), [Definition of Ready](/upstream/definition-of-ready), and others. Use the cross-references to understand not just *what* the document contains, but *why* each section exists.
:::

---

## Contributing Your Own Examples

If your team produces a document you're proud of — one that follows the framework and led to a good outcome — consider contributing it to this gallery. The criteria:

1. **Real** — it was used on an actual project, not written as an exercise
2. **Complete** — it includes all the sections the framework recommends (or explains why some were omitted)
3. **Outcome-linked** — you can point to what happened as a result of the document
4. **Anonymisable** — sensitive details can be changed without losing instructional value

:::warning Before you submit
Scrub all proprietary information, real customer names, internal URLs, and credentials. Replace them with realistic but fictional equivalents. When in doubt, ask your team lead.
:::

---

## A Note on Document Length

You'll notice these examples are thorough — some run several hundred lines. That's intentional. A well-written initiative brief or feature document **saves time downstream** by eliminating ambiguity, reducing back-and-forth, and giving developers confidence that the requirements have been thought through.

A short document isn't always a simple document — sometimes it's just an incomplete one.

That said, length is not a goal. Every section should earn its place. If your project doesn't need a Language Strategy section, don't include one. If your feature has no AI integration, skip that part. The framework is a menu, not a mandate.

---

<div style="text-align: center; padding: 2rem 0; color: var(--vp-c-text-2);">

*"The best documentation is the kind that makes the next person's job easier."*

</div>
