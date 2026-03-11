# Chapter 14 — The Language of the Domain

Avi had been in many workshops.

He had the scar tissue to prove it — the Post-it notes that filled walls and meant nothing by Monday, the journey maps that captured everything and changed nothing, the facilitators who used the word alignment as a verb and believed it. He had learned, from experience, to arrive at workshops with a specific kind of patience — not the open patience of someone expecting to discover something, but the managed patience of someone waiting to find the one useful thing in the room and extract it before the energy collapsed into catering and follow-up emails.

He arrived at the domain workshop on a Thursday morning carrying this patience like a tool.

He left it at the door within twenty minutes.

The room was not large. A meeting room in the office — whiteboard on one wall, the kind of chairs that are comfortable for forty minutes and punishing for two hours, a table that someone had pushed to the side to create space. On the whiteboard, in Eran's handwriting, a single instruction:

Write one thing that happens in a veterinary clinic on a sticky note. One event. Past tense. One color per role.

Orange for vets. Blue for receptionists. Green for owners. Yellow for the system — things the software currently did or should do.

Carmit from Vetcare was there. She had driven two hours and looked like someone who had driven two hours and considered it a reasonable investment if the thing at the end was worth it and was still deciding. Beside her, a woman Lior hadn't met — introduced as Ronit, which made him stop for a half-second, because Ronit was also the name Avi used for the archetypal vet, the one in his wireframes, and this was, it turned out, not a coincidence. Avi had based the persona on a real person, who was sitting three feet from Lior with a cup of coffee and the expression of someone who has been asked to spend a morning away from her clinic and is not entirely convinced it was a good idea.

Shira. Oren. Michal, who had positioned herself at the edge of the room in a way that Lior recognized as deliberately not-facilitating.

Eran at the whiteboard.

"Fifteen minutes," Eran said. "Write everything you can think of. Don't filter. Don't organize. Just — things that happen."

The sticky notes went up.

Lior watched them accumulate with the focused attention of someone reading a text in a language they half-understand.

Orange notes — Ronit's, written in a hand that moved fast and didn't second-guess itself:

Patient arrived for appointment.
Owner described symptoms.
Diagnosis made.
Treatment administered.
Follow-up scheduled.
Prescription written.

Then, after a pause, smaller, as if these were different in kind:

Previous visit notes not found.
Wrong patient file opened.
Double-booking discovered at appointment time.
Owner called to say pet worse — no record of last visit in system.

Blue notes — from a receptionist at one of Carmit's clinics, a woman named Sigal who had said almost nothing so far but wrote with the velocity of someone who had been waiting for exactly this kind of question:

Appointment booked by phone.
Appointment booked online — no vet preference specified.
Appointment rescheduled — third time.
Owner arrived without appointment.
Owner arrived twenty minutes early.
Owner arrived twenty minutes late — vet now running behind.
Emergency walk-in — no space in schedule.
Vet called in sick — thirty appointments to redistribute.

Green notes from Avi — owner perspective, which he wrote with the care of someone who has spent years trying to understand it:

Made appointment online.
Forgot appointment.
Received reminder — wrong date.
Arrived to find vet doesn't have the file.
Was asked questions already answered at previous visit.
Left without understanding the diagnosis.
Received follow-up call — felt cared for.
Did not receive follow-up call — worried.
Switched to different clinic.

Yellow notes from Lior and Oren — system events, current and planned:

Appointment created.
Notification sent.
Record accessed.
Briefing generated.
Payment processed.

Eran let them go for twenty minutes. Then he stopped them and stood back and looked at the wall.

It was covered. Forty, fifty notes in four colors, scattered with the randomness of things written in the order they were remembered rather than the order they occurred.

"Now," he said, "let's put them in order."

This was the part Avi hadn't expected.

Not the ordering itself — that was obvious, of course you put events in sequence. It was what happened in the ordering. The conversations that the ordering forced.

The first one happened immediately. Ronit had written Diagnosis made and Sigal had written Appointment booked and they were placing them on the timeline when Carmit said, quietly: "When does the vet see the history?"

Everyone stopped.

"Before the appointment," Ronit said.

"When before?" Eran said.

"Morning. Before the first patient."

"Always?"

A pause. "When I can. When the system shows me I need to."

"And when does the system show you?"

Another pause. Longer. "It doesn't," she said. "I check."

Lior wrote in his notebook: Vet checks. System doesn't prompt. History retrieval is manual, triggered by vet memory, not by system awareness.

Eran moved Patient history reviewed on the timeline. Not after Patient arrived. Before. Before the morning started. Before the first appointment. In the gap between Vet arrives and Clinic opens — the seven minutes he now knew about.

"Is that right?" he asked Ronit.

She looked at the note on the wall. Something in her face — a recognition.

"Yes," she said. "That's right. I do it in the morning. Or I try to. When I'm running late I don't, and then I'm catching up all day."

"So the system's job," Eran said carefully, "is not to give you history when you ask for it. It's to make sure you've seen what you need before you need it."

She looked at him.

"Yes," she said. "That's exactly it."

Lior looked at the yellow notes. Record accessed. Passive. Reactive. A system that waited to be asked.

He thought about the briefing engine. Oren's redesign. The morning prep. It runs when she opens the app. It knows what she needs to know.

He thought: we already figured this out. But we figured it out from Dina's description. Hearing Ronit say it — a different vet, same truth — is the difference between a hypothesis and evidence.

The second conversation happened around the emergency walk-in.

Sigal's blue note: Emergency walk-in — no space in schedule.

"What happens?" Eran asked.

Sigal described it. The owner at the door, the animal distressed, the schedule full, the receptionist making a decision in thirty seconds about whether this was a true emergency or an anxious owner with a mildly unwell pet, and either way having no good option because the schedule was full and the vet was already running ten minutes behind.

"What does the system do?" Eran asked.

"Nothing," Sigal said. "It shows the schedule. The schedule is full."

"What would you want it to do?"

She thought about it. Not long — she had clearly thought about it before, in the way people think about chronic problems without expecting solutions.

"Show me where there's flexibility. Which appointments are routine, which are critical. If someone is coming in for a weight check and someone else's dog can't breathe, I need to be able to see that and make the call."

Lior and Oren looked at each other.

This was not in the spec. This was not in any of the tickets. This was not in the forty-seven screens of Avi's Figma file.

"Is that a common situation?" Michal said from the edge of the room. Her first words in forty minutes.

Sigal looked at her. "Daily," she said. "In a busy clinic, daily."

A silence.

Avi was writing something. Not on a sticky note — in his own notebook. Lior could see his hand moving.

"This is a new thing," Lior said. Not quite a question.

"This is a real thing," Avi said without looking up. "I knew it existed. I didn't know it needed to be in the system." He paused. "Because I designed the system from the vet's perspective. The receptionist's problem —" He stopped. "I didn't spend enough time with Sigal."

A beat that had weight in it.

"That's what this is for," Eran said. Not unkindly.

By noon the wall was a timeline.

Not a clean one. It had branches and loops — the emergency that disrupted the linear flow, the missed follow-up that created a return visit, the booking that was made and rescheduled and cancelled and eventually happened. It was the actual shape of a clinic's day, which was not linear, had never been linear, and had been treated as linear by every system anyone had built for it, including theirs.

Eran stood back and looked at it.

"Okay," he said. "Look at the wall. Tell me what you see."

A long pause.

Ronit spoke first. "It's two different things," she said. "The morning — the preparation, the briefing, the history review. That's one thing. And then the actual clinic — the appointments, the emergencies, the receptions. That's different."

"Different how?"

"Different pace. Different information needs. Different decisions." She looked at the timeline. "In the morning I need to know what's coming. During the day I need to know what's happening now."

Eran nodded slowly. Wrote on the whiteboard, separating the timeline into two zones with a vertical line:

PREPARATION | FLOW

"Two contexts," he said. "Different information. Different timing. Different users, almost — the morning Ronit and the in-clinic Ronit need different things from the system."

"And Sigal," Oren said. "The receptionist's context is different from both."

Another line. Three zones now.

PREPARATION | FLOW | RECEPTION

"Three bounded contexts," Lior said. "We've been building one."

The room was quiet.

Carmit, who had said almost nothing for two hours, set down her coffee.

"How long," she said, "to rebuild it properly?"

Eran looked at the wall.

This was the question that followed every honest workshop. The moment the real shape of the problem became visible, and the gap between the current system and the right system became measurable, and someone had to say a number.

"Before I answer that," he said, "I want to ask something. Because I think the answer depends on a question we haven't agreed on yet."

He picked up a marker.

"The morning briefing — Ronit knowing what her Tuesday is before it starts. That's one thing. One specific problem. One context. We have most of the pieces for it already. We could ship something real in three weeks."

He drew a circle around the PREPARATION zone.

"This —" He gestured at the full wall. "The scheduling intelligence, the emergency triage, the receptionist's decision support, the owner communication loop, the follow-up tracking — this is something else. This isn't a feature. This is a different level of problem."

He wrote two words on the whiteboard, separated by a space.

FEATURE | INITIATIVE

"The briefing engine is a feature. It has a specific user, Ronit, a specific moment, the morning, a specific job to be done, knowing what Tuesday is. We can define it. We can build it. We can measure whether we got it right within two weeks of shipping."

He tapped the rest of the wall.

"This is an initiative. It has multiple users — Ronit, Sigal, owners. Multiple moments. Multiple jobs. Multiple things we don't yet fully understand. You cannot sprint to this. You discover your way to this — carefully, in slices, validating each slice before the next one, because the mistakes you make here will be load-bearing and expensive to undo."

A silence.

Avi was looking at the whiteboard. The two words. The space between them.

"We've been treating everything as a feature," he said quietly.

"Yes," Eran said. "And some things are features. The briefing engine is a feature — it's well understood, well scoped, the user is specific, the outcome is measurable. Ship it. Learn from it. But the scheduling intelligence, the emergency triage — those need discovery before they need development. You need to watch Sigal make decisions for a week before you write a line of code for her problem."

"We don't have time for that," Carmit said. Not aggressively — practically. The voice of someone managing a timeline.

"You don't have time not to," Eran said. "Because if you build the scheduling system on the wrong model — the way the notification system was built on the wrong model — you will spend six months and ship something Sigal ignores. We've already done that once. It cost three weeks. At forty-two clinics, it costs something you can't recover from."

Carmit looked at him for a long moment.

Then at the wall.

Then at Ronit, who was still looking at the timeline with the expression of someone seeing their own day reflected back with unexpected accuracy.

"What's the slice?" Carmit said. "If we do this right. What's the first thing that ships that's actually useful?"

Everyone looked at Lior.

He looked at the PREPARATION zone. The morning briefing. Dina's seven minutes. Ronit saying I need to see what's coming before it comes.

"The morning prep screen," he said. "One screen. Opens automatically when the vet logs in. Shows three things — the day's shape, the flags, the cases that need preparation. Built in their language. Mitzpeh's return visit. Anxious owner. Last notes: UTI resolved. Not clinical record IDs. Names. Context. The thing Ronit needs to carry into the room."

He paused.

"Three weeks," he said. "If we start Monday."

Carmit nodded. Once, the way she did everything — economically, without performance.

"The rest?" she said.

"Discovery," Avi said. Before Lior could answer. "Sigal's problem needs discovery. The emergency triage needs discovery. We don't build those until we understand them."

He said it as if it were obvious. As if he had always known it. Lior looked at him and saw, in the careful neutrality of Avi's expression, the effort it had taken to say it — the founder's instinct to build, to move, to make the vision real, held in check by the newer and harder instinct to understand first.

"Okay," Carmit said. She stood. Picked up her coat. "Monday."

She paused at the door.

"The wall," she said. "Can we photograph it?"

"We'll do better," Eran said. "We'll digitize it and send it to you by end of day. With the open questions documented."

She looked at him.

"You've done this before," she said.

"I've done the wrong version of it before," he said. "This is the first time I've done it early enough for it to matter."

She almost smiled. Left.

The room exhaled.
