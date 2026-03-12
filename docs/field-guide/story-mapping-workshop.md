---
pageClass: field-guide-page
---

# Story Mapping Workshop

<span class="part-label">Part 2 — Shaping Craft</span>

::: tip When this chapter is for
You have validated a problem. You have a Feature Brief or an Initiative Brief. Now you need to turn that understanding into stories the team can build — and you need to see the shape of the work before anyone writes a ticket. You are about to book a room, buy sticky notes, and spend three hours with your team.
:::

## The Direct Answer

- Map the user's journey horizontally — activities in sequence, left to right. "Prepare for the day" not "Dashboard." "See patients" not "Records module."
- Build five layers: backbone (activities), tasks, stories, slices, design flow. Each layer adds resolution without losing the horizontal thread.
- Challenge every story above the cut line: "Is this essential for a minimum viable Tuesday?" If the answer is "it would be nice" — it goes below the line.
- Budget three hours. Do not try to compress this into one. The most important discoveries happen in hour two when the obvious things have been placed and the gaps become visible.
- The map is not a plan. It is a shared understanding. Photograph it, digitize it, reference it — but do not treat it as a backlog.

## Why This Works

Teams build vertically. They pick a feature — notifications, records, scheduling — and build it deep. Each column is internally coherent. But the user does not live in a column. The user lives in a row: a sequence of activities that spans multiple features in the order they happen during the day. When you build columns, you build deep capability in isolated areas and leave gaps between them. The user's experience has holes that no single feature team can see.

Story mapping forces horizontal thinking. By laying out the user's journey as a timeline — not a feature list — you see where the built work clusters and where it thins. You see the activities nobody has touched. You see the user who appeared in the journey that nobody scoped. These gaps are invisible in a backlog. They are obvious on a wall.

The backbone — the top row of activities — is the most important output of the session. It is also the part teams most often skip. When you write "Prepare for the day" instead of "Dashboard," you make a commitment: every story beneath that activity must serve the experience of preparation. If a story does not serve that experience, it belongs under a different activity or below the cut line. The backbone is a filter, not just a label.

The cut is where the mapping session earns its cost. Every team overbuilds. Not because they are wasteful, but because they are thorough — and thoroughness is a virtue that becomes a liability when time is finite. The cut forces a question that thoroughness avoids: not "is this good?" but "is this necessary for the first version of Tuesday?" Stories below the line are not rejected. They are sequenced. The discipline is in the distinction.

## Step by Step

1. **Prepare the room.** Long wall. Brown paper taped horizontally across it. Four colors of sticky notes — one per role (blue for user activities, orange for tasks, green for stories, yellow for system events). Wide markers, not pens. The writing must be legible from across the room. Push the table to the side. People should stand.

2. **Set the frame.** Do not open with features. Open with the person. "We are mapping Ronit's week. Not the system. Not our backlog. The actual sequence of what she does, when she does it, and where the system needs to be alongside her." Write this on the whiteboard. It is not a speech — it is the operating instruction for the next three hours.

3. **Build the backbone (30 minutes).** Ask the team to name the high-level activities in the user's day, in sequence. Write each on a blue note. Pin them left to right along the brown paper. A clinic vet's backbone might be: *Prepare for the day → See patients → Handle emergencies → Update records → Communicate with owners → Close out.* Six to eight activities. If you have more than ten, you are too granular. If you have fewer than four, you are too abstract.

4. **Fill in tasks (45 minutes).** Under each backbone activity, add the specific tasks the user performs. Orange notes. "Review tomorrow's appointments." "Check flagged patients." "Brief the vet assistant." This layer takes longer than you expect. The productive arguments happen here — Shira asks "when exactly does this happen?" which forces precision. Yoav asks "does she do this on a tablet or desktop?" which forces context. Oren asks "does the system know this is happening?" which distinguishes reactive software from anticipatory software. Let those arguments run. They are the point.

5. **Add stories (45 minutes).** Beneath each task, place the development stories — the actual work items. Green notes. This is where the current state of the build becomes visible. Some tasks have a cluster of stories beneath them. Others have nothing. The gaps in coverage tell you where the product has been built deep and where it has not been built at all. Do not fill the gaps yet. See them first.

6. **Discover the unknown users.** This will happen if your backbone is honest. Under "Prepare for the day," someone will write "Brief the vet assistant." And then someone will say: "The vet assistant — does she have a morning prep need too?" And the room will realize there is a whole user nobody scoped. You did not plan for this discovery. You created the conditions for it by mapping horizontally instead of thinking vertically. When it happens, note it. Add a new color. Do not try to solve it in the session — but name the gap.

7. **Draw the cut line (40 minutes).** Draw a horizontal line across the map, below the first row of stories. Everything above the line is S1 — the first slice, the minimum viable Tuesday. Everything below is S2 and beyond. Now challenge every story above the line. Go one by one. "Is this essential for Ronit to have a better Tuesday starting Monday? Or is this something we added because we could, because it was already built, because it felt incomplete without it?" Six stories will move below the line. Two new stories will appear above it — small, surprising, high-impact things that nobody saw before the map made the gaps visible.

8. **The design layer (20 minutes).** If your designer is in the room — and they should be — give them twenty minutes to photograph the map and sketch the flow. Not wireframes. A visual representation of the backbone as containers, the tasks within them connected by the lines of the user's attention. This is the design brief. Every screen the team builds should be answerable to this map: where does it sit in the journey? What does the user know at this moment? What do they need to know next?

9. **Close and capture.** Photograph the wall. Assign one person to digitize it by end of day — not as a Jira import, as a visual document that preserves the spatial relationships. List the open questions that surfaced. Identify the follow-up interviews needed ("we need to talk to the vet assistant"). Name the next action: who refines the S1 stories to DoR?

## Common Mistakes

**Mapping features instead of activities.** The backbone reads "Dashboard — Records — Scheduling — Notifications." These are system modules, not user activities. Ronit does not "do Dashboard." She prepares for her day. The backbone must be written in the user's language, describing what they do — not in the system's language, describing what exists. If the backbone sounds like a nav menu, start over.

**Running the session in 90 minutes.** Someone books 90 minutes because "three hours is a lot." The first hour produces the obvious things. The second hour produces the gaps. The third hour produces the cut. If you stop at 90 minutes, you leave with a tidy map of what you already knew. The whole point is to get past what you already knew.

**One person narrating while others listen.** The PM describes the journey. The team writes it down. This is a briefing, not a mapping session. Every voice should add to the map. Shira sees different gaps than Lior. Yoav sees different flows than Tamar. The map is richer because it holds seven perspectives, not one. If three people have not spoken by the end of the backbone, stop and ask them what is missing.

**Treating the map as a backlog.** After the session, someone takes the green notes and creates Jira tickets for each one. The spatial relationships disappear. The backbone disappears. The map becomes a flat list, indistinguishable from the backlog you had before. The map is a thinking tool, not a ticketing tool. Reference it during grooming. Point at it during sprint planning. But the stories still need individual refinement, DoR checks, and acceptance criteria before they are buildable.

**Skipping the cut.** The map is on the wall. Everything looks important. Nobody wants to draw the line because drawing the line means saying "not yet" to work that is genuinely valuable. So the team ships the whole map as S1, and the first slice takes four months instead of four weeks. The cut is not a rejection of work. It is a sequencing decision. Everything below the line gets built — later, after you have learned from everything above it.

## From the Novel

::: details Chapter 20 — Story Mapping
Tamar books the big room on a Thursday. Long wall, brown paper, four colors of sticky notes. She opens with the frame that makes the whole session work:

> "We're going to map it. Not the system. Not the features. Ronit's week. Starting from Sunday evening, when she's thinking about Monday, to Friday afternoon, when she closes the last record. Everything in between."

This framing does three things. First, it names the person — Ronit, not "the user." Second, it names the unit of time — a week, not a workflow. Third, it excludes the system and the features. The team is not allowed to start from what they have built. They must start from what Ronit lives.

The backbone emerges: *Prepare for the day. See patients. Handle emergencies. Update records. Communicate with owners. Close out.* Six activities. Lior notices immediately that the team has been organized differently:

> "We've been building a column. Records. Scheduling. Notifications. We should have been building a row."

Tamar writes the insight on the whiteboard: *Features are vertical. User activities are horizontal. We've been building vertically into a problem that lives horizontally.* This is the core revelation of story mapping. Every feature team builds columns. The user's day is a row. You cannot see the gaps between the columns until you draw the row.

The vet assistant discovery happens in the third layer. Under "Prepare for the day," a task appears: "Brief the vet assistant." Nobody has built anything for this task. Nobody scoped the vet assistant as a user. She existed in the clinic — Ronit had mentioned her in an earlier interview — but the team did not know what the role needed until the map made the gap visible.

> "There's a second user," Shira says. "We've been building for Ronit. The vet assistant has a morning prep need too. Different information, different level of detail, different device probably."

This is why you run the mapping before you finalize the build plan. Not to capture everything — to find the things you don't know you don't know. The vet assistant discovery produced two new stories above the cut line: small, two days of work each, high impact. They would not have appeared in a backlog-first process. They appeared because the horizontal map revealed a person-shaped gap.

The cut takes forty minutes. Tamar draws the line and challenges every story above it: "Is it truly necessary for Ronit's minimum viable Tuesday?" Six stories move below the line — not wrong, just enrichments rather than essentials. The discipline is brutal and necessary.

Then Yoav's fifth layer. He photographs the map, and in twenty minutes builds a rough flow — not a wireframe, but the backbone activities as containers connected by the lines of Ronit's attention moving through the day. He puts it on the projector.

> "This is the design brief. Not a Figma file. This. Every screen we build should be answerable to this map. Where does it sit in the journey? What does Ronit know at this moment? What does she need to know next? What decision is she making?"

Lior responds: "A design system tells you what a button looks like. This tells you what a button is for." The journey map becomes the design system's *why*. Every design decision is answerable to where it sits in Ronit's day. This is the fifth layer that most mapping sessions miss — the bridge from product thinking to design thinking to build thinking, all on one wall.
:::

## When This Breaks Down

**You do not have a validated problem.** If no one has interviewed Ronit — if the team is mapping from assumptions about the user's day rather than observed reality — the backbone will be wrong, and every layer built on it will inherit the error. Story mapping is a shaping tool, not a discovery tool. You must have done the discovery first. If you have not, go back to [How to Run a Discovery Interview](/field-guide/discovery-interview) before booking the room.

**The scope is too large for one session.** If the initiative has three distinct user types and twelve activities, a single three-hour session will produce a map that is wide and shallow. Map one user's journey per session. If Ronit's week is one session and Sigal's week is another, you will get the depth you need. Combine the maps afterward to find the intersections.

**The decision-maker is not in the room.** You map, you cut, you sequence — and then the PM or the founder overrides the cut because "we promised the client scheduling in Q2." The cut only holds if the person who can override it was present when it was made. If Avi is not in the room, his absence will undo the session's most important output. Invite the decision-maker. Not to facilitate — to witness.

---

*See also: [Story Mapping](/upstream/story-mapping) for the framework's formal definition. [The Cut](/upstream/the-cut) for the practice of deciding what is above and below the line. [How to Run a Discovery Interview](/field-guide/discovery-interview) for the work that must happen before this session.*
