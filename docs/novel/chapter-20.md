# Chapter 20 — Story Mapping

Tamar had been waiting for the right moment to do this and had decided, after two weeks, that the right moment was a myth and the next available Thursday would have to do.

She booked the big room. The one with the long wall. Brought sticky notes in four colors, a roll of brown paper that she taped across the wall horizontally, and a marker with which she drew, at the top of the paper, a single horizontal line labeled: Ronit's week.

Seven people around the table. Lior, Oren, Shira, Yoav, Michal, Tamar, and Eran who had by now become a de facto member of the team in everything except the org chart.

"We've been building features," Tamar said. "Individual stories, refined and shipped. Each one correct in isolation. But I don't think we've ever looked at the whole thing from Ronit's perspective. Not as a list of features — as a journey. The actual sequence of what she does, when, and what the system needs to do alongside her."

She picked up a marker.

"We're going to map it. Not the system. Not the features. Ronit's week. Starting from Sunday evening, when she's thinking about Monday, to Friday afternoon, when she closes the last record. Everything in between."

The mapping took three hours.

It happened in layers, the way story mapping always happened when it was done properly — not one person narrating while others listened, but a building, each voice adding to what the previous one had established, the map growing horizontally across the wall in the order of Ronit's experience and vertically in the order of priority, the essential things near the top, the enrichments below.

The first layer: the backbone. The high-level activities, in sequence.

Prepare for the day. See patients. Handle emergencies. Update records. Communicate with owners. Close out.

Six activities. Written on blue notes, pinned to the brown paper in a horizontal line. Simple. Obvious. And yet — Lior noticed — already different from the way the team had been thinking about the product, which had been organized by feature type rather than by user activity.

"We've been building a column," he said. "Records. Scheduling. Notifications. We should have been building a row." He gestured at the backbone. "This row. Ronit's day."

Tamar nodded. Wrote on the whiteboard beside the map: Features are vertical. User activities are horizontal. We've been building vertically into a problem that lives horizontally.

Second layer: the tasks within each activity. Smaller, more specific. Orange notes.

Under Prepare for the day:

Review tomorrow's appointments. Check flagged patients. Read overnight messages. Prepare materials for complex cases. Brief the vet assistant.

Under See patients:

Review patient file before entering room. Take history from owner. Examine patient. Diagnose. Administer treatment. Write notes. Schedule follow-up.

Under Handle emergencies:

Assess urgency. Adjust schedule. Communicate with waiting patients. Triage.

This layer took longer. The room argued — not badly, productively. Shira kept asking when exactly does this happen? which forced precision. Yoav kept asking does she do this on the tablet or does she switch to desktop? which forced context. Oren kept asking does the system know this is happening or does it find out afterward? which was the most important question, the one that distinguished reactive software from anticipatory software.

Third layer: the stories. The actual development work, beneath each task, in the order they would need to be built.

And here — here was where it became visible.

The stories they had already built were distributed across the map in a pattern that told a story of their own. Clustered heavily under Prepare for the day — the morning briefing, the patient flags, the history surface. Almost nothing under Communicate with owners. Nothing at all under Brief the vet assistant, which was a task that appeared on almost every orange note in the first two columns and which nobody had built anything for because nobody had known it existed until this Thursday morning.

"Sigal handles owner communication," Yoav said. "But the vet assistant —"

"Is different," Ronit had said, in the workshop. Lior remembered it now. I brief her before the first patient. She needs to know the same things I know.

"There's a second user," Shira said. She was looking at the map with the diagnostic attention she brought to everything. "We've been building for Ronit. The vet assistant has a morning prep need too. Different information, different level of detail, different device probably."

"We didn't scope her," Tamar said. Not with blame. With the clear-eyed acknowledgment of someone noting a gap in the map.

"No," Lior said. "We didn't know she existed. Not as a user. We knew the role existed. We didn't know what the role needed."

A silence.

"This is why you do this before you build," Eran said quietly. Not to anyone in particular. "Not to capture everything. To find the things you don't know you don't know."

Fourth layer: the slices.

Tamar drew a horizontal line across the map, below the first row of stories.

"This is the line," she said. "Everything above it is S1 — the pilot. The things Ronit needs to have a better Tuesday starting Monday. Everything below it is S2 and beyond." She looked at the room. "I want to challenge every story above the line. Does it belong above the line? Is it truly necessary for Ronit's minimum viable Tuesday? Or is it something we added because we could, because it was already built, because it felt wrong not to include it?"

The challenge took forty minutes.

Six stories moved below the line. Not because they were wrong — because they were enrichments rather than essentials. The vaccination status indicator — the dot that had bounced — moved below the line in its current form. Yoav's version — the 3 patients need vaccination check today surface — stayed above it, but smaller, simpler than he'd sketched.

Two new stories appeared above the line that hadn't existed before the mapping session. Both related to the vet assistant. Both small. Both, when Lior estimated them, two days of work that would make a person's Tuesday better in a way no feature on the board had yet done.

"We need to talk to the vet assistant," Tamar said.

"I'll go back to the clinic," Lior said.

"We'll go," Tamar said. "Together."

He looked at her.

"Discovery isn't yours," she said. "I should have been doing it from the beginning. I'm starting now."

Fifth layer — the one Yoav had been building toward without knowing it.

"The map," he said. "The journey. Can I show you something?"

He took a photo of the brown paper wall. Opened his laptop. In twenty minutes, while the rest of the room talked through the slice implications, he built something quick and rough — not a wireframe, something between a map and a flow, the backbone activities as containers, the tasks within them connected by the lines of Ronit's attention as it moved through the day.

He put it on the projector.

The room went quiet.

It was not a beautiful thing. It was a functional thing — the visual representation of what they'd spent three hours building on the wall, but organized by flow rather than by feature, showing not what the system did but where the system touched Ronit's day and how those touches connected.

"This is the design brief," Yoav said. "Not a Figma file. This. Every screen we build should be answerable to this map. Where does it sit in the journey? What does Ronit know at this moment? What does she need to know next? What decision is she making?"

Lior looked at it.

Thought about the Figma file. Avi's forty-seven screens, organized by feature, each one internally coherent and externally disconnected from the one before and after.

Thought about the morning prep screen. Five points. It knew about Mitzpeh before I did.

"The journey map is the design system," he said.

Yoav looked at him. "Say that again."

"A design system tells you what a button looks like. This tells you what a button is for. The design system answers the how. The journey map answers the why." He paused. "If you build the screens to this — if every design decision is answerable to where it sits in Ronit's day — you don't need forty-seven screens. You need the right ten."

Yoav looked at the map on the projector.

Looked at his portfolio, in his head, the twelve projects with their clean photography.

Thought about thirty-one deleted screens.

Thought about the word obvious.

"I need to redesign my process," he said. Not to the room. To himself, quietly, the way you say something when it becomes true.

The room heard it anyway.

Nobody commented. The statement didn't need commentary.

It needed time, and the afternoon still had some left.
