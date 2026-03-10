# The Cut

<span class="phase-badge upstream">🔵 Upstream</span>

## A Release Isn't Defined by What's Finished — It's Defined by What's Enough

Dana is the PO for the Path Discovery feature on Pninei Halacha. The story mapping session just finished. The map is on the wall — four columns of activities, three rows of depth, fourteen stories total.

The team could refine all fourteen stories to DoR-ready. That would take about a week and a half. The delivery team would sit idle during that time. By the time stories enter development, two of the fourteen will have changed based on things learned during refinement of the other twelve.

Or the team could refine all fourteen shallowly — quick ACs, rough sizing, no Gherkin. That would take two days. But when developers pick up those stories, they'll immediately have questions. Edge cases will surface mid-sprint. The DoR gate will catch stories that aren't actually ready, and the sprint will stall.

Neither option works. Both are common. Both are what teams default to when they don't have a deliberate practice for deciding how deep to go.

The practice is The Cut.

---

## How It Works

After the story map is complete — every story visible, every depth level mapped — you draw a horizontal line.

Above the line: the stories the team will refine in full. Acceptance criteria with edge cases, Gherkin scenarios, design states, dev-confirmed sizing, full DoR gate. The heavy investment.

Below the line: stories that are identified and mapped but not being touched yet. They're visible. They're not forgotten. They have names and rough descriptions. They just aren't getting the depth of refinement until it's their turn.

The line is The Cut.

### Drawing The Cut

The PO draws The Cut. Not the PM, not the tech lead — the PO, because the PO owns the delivery pipeline and knows what the team needs next.

The PO draws it by asking one question: **"What is the smallest set of stories that delivers a coherent experience?"**

Not the smallest set that's easy to build. Not the set the developer is most excited about. The set that, if a user encountered only these stories and nothing else, would feel like something real happened. A user can complete a meaningful action. The feature feels like a feature, not a fragment.

Dana looks at the Path Discovery map and asks: what does Yossi need to feel that the site has changed? He needs to see a path name when he lands on an article (PD-101). He needs to see where he is in the path — "Step 3 of 8" (PD-102). He needs the option to continue to the next article (PD-103). And if it's his first time seeing a path, it can't break (PD-104, the edge case).

Four stories. Above The Cut. Everything else — progress bars, path thumbnails, jump-to-any-step navigation — stays below. Mapped and waiting.

Then Avi, the tech lead, points to PD-103 and says: "The next-article link needs to know which article is next. That data comes from the curation tool, which is Epic PD-3. PD-3 isn't built yet. PD-103 has a hard dependency."

Dana moves PD-103 below The Cut.

Three stories above. One dependency acknowledged. The release plan adjusted — in the mapping session, before a sprint was planned. A dependency that would have blocked a sprint was caught in a conversation.

This is The Cut working as intended.

### The Cut Is Not Permanent

As the team refines stories above The Cut, they learn things.

An edge case below the line turns out to block the happy path — it gets pulled up. A story above the line turns out to be three stories — The Cut adjusts. A developer's sizing estimate changes the math — what seemed like one sprint of work above the line is actually two, and the PO decides to move one story below to keep the first delivery small.

The map is alive during refinement. The Cut is where the team started, not where they have to stay. The discipline is in drawing the line deliberately and adjusting it explicitly — not in freezing it.

---

## The Cut Is Not Release Slicing

Release slicing (S1/S2/S3) and The Cut serve different purposes at different moments.

| | The Cut | Release Slicing (S1/S2/S3) |
|---|---|---|
| **When** | After story mapping, before deep refinement | During initiative or feature discovery |
| **Scope** | One epic — which stories to refine now | The whole initiative — which features form v1 |
| **Question** | "What do we go deep on next?" | "What's the thinnest end-to-end experience?" |
| **Who decides** | PO | PM (with Core Trio input) |
| **Adjusts** | During refinement, continuously | Between discovery cycles |

Release slicing happens earlier, at a higher level. It answers: across all features in this initiative, which combination forms the walking skeleton — the minimum end-to-end experience worth shipping? That's a Now / Next / Later decision at feature scope.

The Cut happens later, within one epic. It answers: of all the stories in this epic, which ones do we refine to DoR-ready right now? That's a focus decision at story scope.

They connect but they don't replace each other. The features in S1 produce epics. The epics produce story maps. The story maps get The Cut. The Cut feeds the delivery pipeline.

→ [Release Slicing](/downstream/release-slicing) — the S1/S2/S3 practice at initiative scope
→ [Story Mapping](/upstream/story-mapping) — the workshop that produces the map The Cut divides

---

## Anti-Patterns

### Drawing The Cut Before the Map Is Complete

A team that draws The Cut after mapping only half the stories will miss dependencies between the mapped half and the unmapped half. Map everything first. Cut second. The discipline is: see the whole, then decide what to focus on.

### Drawing The Cut by Engineering Effort Instead of User Value

"Let's put the easy stories above The Cut." This produces a first delivery that's technically simple and experientially hollow. The user can see a label but can't do anything with it. The Cut should be drawn by asking "what does the user need to feel the product changed?" — not "what can we ship fastest?"

### Never Moving The Cut

The Cut drawn on day one of refinement should not be the same Cut on day five. If nothing moved, either the team isn't learning during refinement (unlikely) or they're not allowing the map to be alive (a discipline problem). A cut that never moves is a plan that never updates.

### Not Having a Cut at All

A team that refines all stories to the same shallow depth — or all stories to the same deep depth — is treating the backlog as a flat list, not a spatial map. Flat lists don't surface dependencies, don't reveal coherence gaps, and don't enable the delivery team to start building while discovery continues. The Cut is what makes the pipeline possible.

---

## The Relationship to Three Amigos

Once stories are above The Cut, they enter the Three Amigos refinement process — the PO, a developer, and QA examine each story in detail. This is where ACs are finalized, Gherkin is written, sizing is confirmed, and the DoR gate is applied.

The Three Amigos don't decide what's above The Cut. The PO decides, during the story mapping session. The Three Amigos refine what's already been selected.

This separation matters. If the Three Amigos are also deciding which stories to refine, the session becomes a prioritization debate rather than a quality session. The Cut separates the "what to focus on" decision (mapping session) from the "is this ready?" decision (Three Amigos). Different questions, different moments.

→ [Grooming Session](/upstream/grooming-session) — the Three Amigos ceremony
→ [Definition of Ready](/upstream/definition-of-ready) — the 9-point gate

---

## Quick Reference

**When:** After story mapping is complete for an epic, before deep story refinement begins.

**Who:** PO draws it. Dev and QA present for dependency and risk input.

**Input:** A complete story map — all stories visible at all depth levels.

**Output:** A line on the map. Stories above = refine now. Stories below = mapped and waiting.

**Rule:** The Cut is a focus decision, not a forever decision. It moves as the team learns.

**Cadence:** Redrawn at the start of each refinement cycle. Reviewed when stories above the line are all in development or done.
