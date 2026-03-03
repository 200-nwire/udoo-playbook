# Tutorial Hub

<div class="phase-header tutorials">
<h1>🎓 Tutorials</h1>
<p>Hands-on exercises to practice the UDOO R&D Lifecycle Framework with real scenarios.</p>
</div>

## Why Tutorials?

Reading about a framework is necessary. Practising it is what makes it stick.

The Guide section explains **what** the framework is and **why** each piece exists. The tutorials in this section ask you to **do** the work — frame a problem, break down stories, write Gherkin, run a post-mortem, and trace an initiative from a napkin idea through production and back into the discovery pipeline.

Each tutorial uses real project patterns drawn from 200apps' portfolio: Pninei Halacha, Living Wondrously, Someone for Coffee, and the operational incidents that shaped our practices. Where confidentiality requires it, details are fictionalised — but the patterns, mistakes, and hard-won lessons are real.

::: tip Before You Start
These tutorials assume you have read (or at least skimmed) the four phase chapters: [Upstream](/upstream/), [Downstream](/downstream/), [Onstream](/onstream/), and [Offstream](/offstream/). You don't need to memorise every page, but you should understand the flow: **Idea → Initiative → Feature → Epic → Story → Sprint → Release → Operations → Feedback → next Idea**. If terms like "Commitment Point," "Definition of Ready," or "Delivery Point" feel unfamiliar, revisit the [Framework Overview](/framework-overview) first.
:::

---

## The Tutorials

### 1. Your First Upstream Sprint

| | |
|---|---|
| **File** | [Your First Upstream Sprint](./zero-to-ready) |
| **Difficulty** | 🟢 Beginner |
| **Time** | 2–3 hours (or spread across a real 2-week sprint) |
| **Best for** | Teams adopting the framework for the first time; PMs and BAs who want to practise the discovery stations |
| **What you'll do** | Walk through a 10-day discovery sprint using a fictional project ("TaskFlow"), from problem statement to ready stories. Complete templates, run readiness checks, and produce a sprint-ready backlog. |

This is the "start here" tutorial. If your team has never run a structured discovery sprint, this exercise gives you a safe practice run before you do it with a real initiative.

---

### 2. The Wrong Way (Then the Right Way)

| | |
|---|---|
| **File** | [The Wrong Way (Then the Right Way)](./wrong-way-right-way) |
| **Difficulty** | 🟡 Intermediate |
| **Time** | 1–2 hours |
| **Best for** | Anyone who has read the framework and wants to build intuition for common mistakes; excellent for team workshops and onboarding |
| **What you'll do** | Examine 6 scenarios that look correct on the surface but contain fundamental framework violations. Identify the mistake, understand why it happens, and rewrite each scenario the right way. |

This tutorial is designed to produce "aha moments." It's one thing to know the rules — it's another to recognise violations when they look reasonable. By the end, you'll have a trained eye for the anti-patterns that cost teams weeks of rework.

---

### 3. E2E Initiative Lifecycle

| | |
|---|---|
| **File** | [E2E Initiative Lifecycle](./e2e-initiative) |
| **Difficulty** | 🔴 Advanced |
| **Time** | 3–4 hours |
| **Best for** | PMs, Delivery Managers, and Tech Leads who want to see the entire framework in action end-to-end; useful for leadership alignment sessions |
| **What you'll do** | Follow the Someone for Coffee project from its origin as a personal vision through all five Upstream stations, across the Commitment Point into Downstream delivery, through the Delivery Point into Onstream operations, and into the Offstream feedback loop that spawns the next initiative. |

This is the most comprehensive tutorial. It demonstrates that the UDOO framework is not a collection of disconnected ceremonies — it is a continuous loop where every phase feeds the next.

---

### 4. BDD Workshop

| | |
|---|---|
| **File** | [BDD Workshop](./bdd-workshop) |
| **Difficulty** | 🟡 Intermediate |
| **Time** | 2–3 hours |
| **Best for** | Developers, QA engineers, and PMs who write or review Gherkin scenarios; teams preparing for their first Three Amigos session |
| **What you'll do** | Write Gherkin scenarios for four features of the Living Wondrously Journal app. Simulate Three Amigos discussions, identify common BDD mistakes, and connect scenarios to test automation. |

If your team has adopted BDD in theory but scenarios are inconsistent, too vague, or test implementation instead of behaviour, this workshop will reset your practice.

---

### 5. From Incident to Improvement

| | |
|---|---|
| **File** | [From Incident to Improvement](./incident-to-improvement) |
| **Difficulty** | 🟡 Intermediate |
| **Time** | 1.5–2 hours |
| **Best for** | DevOps engineers, SREs, Tech Leads, and anyone involved in incident response or post-mortems |
| **What you'll do** | Follow the JWT Outage from the moment the alert fires through incident response, root cause analysis, blameless post-mortem, and the creation of preventive improvements that feed back into Upstream. See how the Onstream→Upstream feedback loop closes. |

Incidents are not failures of the framework — they are inputs to it. This tutorial shows how a 44-minute outage became the catalyst for a permanent reliability improvement.

---

## How to Use These Tutorials

### Solo Practice

Work through each tutorial at your own pace. Complete every exercise and template before reading the solution. The learning happens in the struggle, not in the reading.

### Team Workshop

These tutorials are designed to work as facilitated team exercises:

1. **Choose a tutorial** based on what your team needs most
2. **Assign roles** — PM, Developer, QA, Tech Lead — even if people don't hold those titles
3. **Time-box each section** — don't let discussions run indefinitely
4. **Capture decisions** — write them down as if they were real
5. **Debrief** — after each tutorial, discuss: what felt natural? What felt awkward? That awkwardness is where the learning lives.

::: info Bring Your Own Project
Every tutorial includes a fictional project for practice, but the exercises are designed to be adaptable. Once you've completed a tutorial with the fictional project, repeat it with your team's actual initiative. The second pass — with real stakes, real ambiguity, and real constraints — is where the framework becomes yours.
:::

### Recommended Sequence

If you're working through all five tutorials, this order builds skills progressively:

```
1. Your First Upstream Sprint    → Learn the discovery mechanics
2. The Wrong Way (Then Right)    → Build intuition for anti-patterns
3. BDD Workshop                  → Master the specification craft
4. E2E Initiative Lifecycle      → See the full system in action
5. From Incident to Improvement  → Close the operational loop
```

Each tutorial stands alone — you can jump to any one that addresses your current need. But the sequence above ensures that each tutorial builds on skills practised in the previous one.

---

## Prerequisites Checklist

Before starting any tutorial, confirm you have:

- [ ] Read the [Framework Overview](/framework-overview) and the [4-Layer Hierarchy](/four-layers)
- [ ] A notebook or document for writing your answers (pen and paper works best for mapping exercises)
- [ ] Access to a whiteboard or digital canvas (Miro, FigJam, or even a spreadsheet)
- [ ] At least one other person to discuss scenarios with (optional for solo, required for workshops)
- [ ] A willingness to write things down before reading the "answer" — the exercise has no value if you skip the work

::: warning Don't Skip the Exercises
Each tutorial includes exercises marked with a ✏️ icon. These are not optional reading — they are the tutorial. If you read the scenario and immediately jump to the solution, you've consumed content but you haven't practised. The framework becomes intuition through repetition, not through reading.
:::

---

## Ready?

Start with [Your First Upstream Sprint →](./zero-to-ready)
