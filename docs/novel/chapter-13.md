# Chapter 13 — Bounded Context

The architecture conversation started, as most important conversations do, as something else.

They had called it a technical sync — Lior, Oren, and Eran, who had joined the Kelev project not officially but effectively, in the way that senior engineers get pulled into projects that are adjacent to their concern. He had been on three calls in two weeks. Nobody had updated his Jira assignments. He was there because Lior had called him and because the problems were interesting and because, since the document, he had been looking for a different way to be useful than the way he had been useful before.

The technical sync was supposed to be about the briefing engine — Oren's redesign of the notification system, which had evolved over five days of thinking into something more interesting than either of them had expected.

It became, within twenty minutes, a conversation about language.

"Walk me through the data model," Eran said. He had a whiteboard — they were in the office, the first time all three of them had been in the same room. He had drawn a rough entity diagram while Oren talked. Appointment. Vet. Clinic. Patient. Owner.

"The problem," Oren said, pointing at Appointment, "is that this entity is doing too much. It's the scheduling object, the clinical record stub, the billing reference, and the communication trigger. Four different concerns, one object, and every time we touch it for one concern we risk breaking the others."

"When did that happen?" Eran said.

"Gradually," Lior said. "Week two we needed billing to link to appointments. Week four we added the clinical notes stub because Avi wanted vets to start notes during scheduling. Week six —"

"The communication trigger," Oren said. "For the notification system."

"That we're now replacing."

"Right."

Eran looked at the diagram. The lines radiating from Appointment like a star, each one connecting it to another concern, another context, another set of rules about what the data meant and how it should behave.

"You have a bounded context problem," he said.

Lior and Oren looked at him.

"The word appointment means different things to different parts of the system. To scheduling it's a time slot with a vet and a patient. To billing it's a chargeable event. To clinical records it's the container for medical data. To the briefing engine it's a piece of information that needs to be surfaced at a specific moment." He paused. "Same word. Four different concepts. And you've been building them all into the same object."

"How did that happen without anyone noticing?" Lior said.

"Because the word appointment is coherent in natural language. When a human says appointment they mean all of those things simultaneously and context disambiguates. The problem is that software can't disambiguate. It holds the word and tries to make it do all the jobs at once and you get" — he gestured at the bug register Shira had shared, open on Lior's laptop — "this."

A silence.

"Domain-driven design," Oren said. Not a question. He'd heard the term.

"The relevant part of it," Eran said. "Not the whole thing — we don't have time for the whole thing and honestly most of it is intuition that practitioners formalized. But the bounded context idea. The recognition that the same word can mean different things in different parts of a system, and that trying to unify those meanings into one model creates exactly this kind of debt." He looked at the whiteboard. "The fix isn't to refactor the Appointment object. It's to split it. Scheduling context has its own model. Billing has its own. Clinical has its own. They share an identifier — the appointment ID — but they don't share the object."

Oren was already drawing something on the other side of the whiteboard.

"The briefing engine," he said, sketching. "It doesn't talk to the Appointment object. It talks to a Briefing context that aggregates what it needs from each domain — the scheduling information, the relevant clinical flags, the communication state — and composes a briefing object that's specifically shaped for Dina's needs at eight forty-seven."

"Right," Eran said. "And when Dina's needs change — when we learn something new from a Tuesday, when a new clinic type has different requirements — you change the briefing context without touching scheduling or billing or clinical."

Lior was looking at the whiteboard. The original star diagram, radiating from one overloaded object. Oren's new sketch, the same information distributed into distinct contexts, connected but not merged, each shaped by the language of the people who used it.

He thought about something Dina had said. Mitzpeh's file. She hadn't said patient record or clinical history or medical data. She had said Mitzpeh's file. The language of a vet. The language of someone who thought about animals as individuals with histories, not as records in a database.

"We should use their language," he said.

Both of them looked at him.

"In the code. In the briefing context. Not patient — patient is a clinical term. Dina says Mitzpeh. She says my eight-forty-five. She says the anxious owner. Those are the concepts in her world. The briefing engine should think in those terms."

Eran was quiet for a moment.

"Ubiquitous language," he said. "Also DDD. The idea that the language in the code should match the language of the domain expert. So that when you read the code you're reading something that makes sense to Dina, not just to the developer who wrote it."

"Does that actually work?" Oren said. "In practice?"

"When you do it," Eran said. "Which is harder than it sounds, because developers like abstract names. Entity. Manager. Handler. Names that feel general, that feel reusable. The discipline is to resist that and name things what the user calls them."

He wrote on the whiteboard: DailyBriefing. MorningPrep. UrgentFlag. ReturningPatient.

"Read that," he said. "Now read: NotificationAggregate. AppointmentEventHandler. PatientRecordStub."

The difference was, once seen, impossible to unsee.

"We're rewriting some of this anyway," Oren said. He was looking at his sketch with the focused energy of someone who has found the shape of a solution and wants to start immediately. "We can rename as we go."

"Do it deliberately," Eran said. "Not as you go. Sit with Dina's language first. Make a glossary. Actual terms she uses, what they mean in her context. Then bring it to the code." He paused. "There'll be things you can't translate — the database tables, the external API contracts, the legacy stuff. Make those boundaries explicit. Document where the translation happens. The seam between her language and the system's language is where bugs are born."

Lior was writing. Not code. Notes. The same kind of notes he had taken in Ramat Gan, in the clinic, watching Dina work.

He thought: we've been building a system in our language and calling it hers.

He thought: every assumption in the data model is a failure of translation.

He thought, with the particular clarity of someone who has just seen something they can't unsee: the document I wrote about Dina's Tuesday is the glossary. We already have it. We just haven't used it as the foundation.
