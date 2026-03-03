# Glossary

Comprehensive terminology reference for the UDOO R&D Lifecycle Framework. Terms are alphabetical.

::: tip Using this glossary
When you encounter an unfamiliar term in the framework, search this page (Ctrl/Cmd + F). Each term includes a concise definition and, where helpful, a cross-reference to the relevant section of the guidebook.
:::

---

| Term | Definition |
|------|-----------|
| **Acceptance Criteria (AC)** | Testable conditions that must be true for a story to be considered complete. Written in Given/When/Then (Gherkin) format. Each criterion is independently verifiable. See [Story Template](/reference/story-template). |
| **ADR** | Architecture Decision Record. A short document capturing a significant technical decision, its context, options considered, and the chosen approach. Required for decisions with lasting consequences. See [Station 4 — Solution Options](/upstream/station-4-options). |
| **BDD** | Behaviour-Driven Development. A practice where acceptance criteria are written as executable specifications in natural language (Gherkin), bridging the gap between business intent and automated tests. |
| **Blameless Post-Mortem** | A structured review of a production incident focused on systemic causes, not individual fault. The goal is learning and prevention, not punishment. Required within 48h for P0/P1. See [Post-Mortem Template](/onstream/post-mortem-template). |
| **Burndown Chart** | A sprint-level chart showing remaining work (story points or tasks) over time. Used to track whether the team is on pace to complete the sprint commitment. |
| **Burnup Chart** | A chart showing cumulative work completed over time against the total scope. Unlike burndown, it also reveals scope changes. |
| **Canary Release** | A deployment strategy where a new version is rolled out to a small subset of users (the "canary group") before full rollout. Allows detection of issues with limited blast radius. |
| **Capacity Planning** | The practice of forecasting how much work a team can take on in a sprint or quarter, based on team size, velocity, and planned absences. |
| **Commitment Point** | The gate between Upstream and Downstream. A story crosses it only when the DoR is fully met. This is where the team commits to delivering the story. See [Phase Gates](/reference/phase-gates#gate-1). |
| **CSAT** | Customer Satisfaction Score. A metric typically measured via post-interaction surveys ("How satisfied were you?"). Ranges from 1–5 or 1–10. Used as a tactical signal in Offstream. |
| **CS Feedback** | A Jira issue type used to log signals from Customer Success, including feature gaps, friction, and churn risk indicators. Must be logged within 24h. See [Non-Negotiables](/reference/non-negotiables#rule-9). |
| **Cumulative Flow Diagram (CFD)** | A stacked area chart showing the count of items in each workflow state over time. Reveals bottlenecks (widening bands), WIP violations, and flow health. |
| **Cycle Time** | The time from when work actively begins on a story (moved to "In Progress") to when it is completed (moved to "Done" or "Released"). A key flow metric. |
| **Definition of Done (DoD)** | The 8-point checklist that must be satisfied before a story is marked Released. It is the quality contract between the team and the organisation. See [Definition of Done](/downstream/definition-of-done). |
| **Definition of Ready (DoR)** | The 9-point checklist that must be satisfied before a story enters a sprint. It protects the team from incomplete work entering Downstream. See [Definition of Ready](/upstream/definition-of-ready). |
| **Delivery Point** | The gate between Downstream and Onstream. A story crosses it only when the DoD and operational readiness checks are fully met. See [Phase Gates](/reference/phase-gates#gate-2). |
| **Downstream** | The implementation phase of the UDOO framework. Transforms Ready stories into Released features. Owned by Engineering. Colour: <span style="color:#16a34a">green</span>. |
| **Epic** | A cohesive experience room — a cluster of stories that together deliver a meaningful part of a Feature's journey. Lives in Jira. Third layer in the hierarchy (Initiative > Feature > Epic > Story). See [4-Layer Hierarchy](/guide/hierarchy). |
| **Error Budget** | The allowed amount of unreliability within an SLO. If the SLO is 99.9% availability, the error budget is 0.1% (about 43 minutes/month). When the budget is exhausted, the team shifts focus from features to reliability. |
| **Escaped Defect** | A bug that reaches production without being caught by testing. Tracked as a quality metric — lower is better. |
| **Experience Snapshot** | A structured summary of the current customer experience for a feature or product area, compiled from CS Feedback, NPS, support tickets, and usage data. Used to feed signal back into Upstream. |
| **Feature** | A user-facing capability nested inside an Initiative. Describes the experience from the user's perspective. Lives in Confluence. Second layer in the hierarchy (Initiative > Feature > Epic > Story). See [4-Layer Hierarchy](/guide/hierarchy). |
| **Feature Flag** | A runtime toggle that controls whether a feature is visible to users. Enables decoupling deployment from release, canary testing, and gradual rollout. |
| **Feedback Point** | The gate between Offstream and Upstream. Ensures that learning from operations and customer success flows back into product discovery. See [Phase Gates](/reference/phase-gates#gate-4). |
| **Gherkin** | A structured natural-language format (Given/When/Then) for writing executable test specifications. Used for acceptance criteria and BDD tests. |
| **Golden Signals** | The four key metrics for monitoring any service: latency, traffic, errors, and saturation. From Google's SRE handbook. Used in Onstream dashboards. |
| **Health Score** | A composite metric used in Offstream to assess the overall health of a customer account. Combines usage frequency, support ticket volume, NPS, feature adoption, and engagement trends. |
| **Incident Commander** | The designated leader during a production incident. Responsible for coordinating response, communication, and escalation. Has authority to pull engineers off other work during P0 events. |
| **Initiative** | A strategic bet — a meaningful problem worth solving. The highest layer in the 4-layer hierarchy. Lives in Confluence. Frozen via an Initiative Brief before development begins. See [Initiative Brief](/upstream/initiative-brief). |
| **Initiative Brief** | A structured document that defines an Initiative's problem statement, success metrics, constraints, target personas, and scope boundaries. Must be frozen before any Feature under it enters sprint planning. See [Initiative Brief](/upstream/initiative-brief). |
| **INVEST** | Story quality criteria: **I**ndependent, **N**egotiable, **V**aluable, **E**stimable, **S**mall, **T**estable. A story that fails any INVEST criterion is not ready for Downstream. |
| **Journey Map** | A step-by-step narration of what a user does to achieve their goal, annotated with pain points, emotions, and risks. Steps are numbered J1, J2, etc. Used in Upstream to ground stories in real user behaviour. See [Station 3 — Journey & Slices](/upstream/station-3-journey). |
| **Kanban** | A visual workflow management method that limits work in progress and optimises flow. Used in Onstream for operational work where sprint-based planning is less appropriate. |
| **Lead Time** | The total time from when a story is created (enters the backlog) to when it is released to production. Includes both wait time and active work time. |
| **NPS** | Net Promoter Score. A customer loyalty metric based on the question "How likely are you to recommend us?" (0–10 scale). Promoters (9–10), Passives (7–8), Detractors (0–6). Score = %Promoters - %Detractors. |
| **Observability** | The ability to understand a system's internal state from its external outputs (logs, metrics, traces). A prerequisite for effective incident response and SLO monitoring. |
| **Offstream** | The growth and customer success phase of the UDOO framework. Transforms a stable product into a growing business. Feeds signals back into Upstream. Colour: <span style="color:#9333ea">purple</span>. |
| **Onstream** | The service delivery and operations phase of the UDOO framework. Owns SLA compliance, incident response, and reliability. Colour: <span style="color:#ea580c">orange</span>. |
| **P0 / P1 / P2 / P3** | Priority levels for bugs and incidents. P0 = critical + blocker (immediate). P1 = high severity + high impact (this sprint). P2 = medium (planned). P3 = low (backlog). See [Bug Taxonomy](/onstream/bug-taxonomy). |
| **Post-Mortem** | See **Blameless Post-Mortem**. |
| **QBR** | Quarterly Business Review. A structured meeting with a key customer to review ROI, align on roadmap, discuss expansion, and strengthen the relationship. An Offstream ceremony. |
| **RACI** | A responsibility assignment matrix: **R**esponsible (does the work), **A**ccountable (owns the outcome), **C**onsulted (provides input), **I**nformed (kept in the loop). Used to clarify roles in cross-functional work. |
| **RCA** | Root Cause Analysis. A structured investigation into why an incident or bug occurred, going beyond the immediate symptom to identify systemic causes. Required for P0/P1 bugs. |
| **Rollback** | The process of reverting a deployment to a previous known-good state. Every release must have a documented rollback procedure before passing the Delivery Point gate. |
| **Runbook** | A service-specific operational document used by on-call engineers. Contains alerts, escalation contacts, rollback steps, health checks, and common troubleshooting procedures. Required before go-live. See [Runbook Template](/onstream/runbook-template). |
| **Shift Left** | The practice of moving quality activities (testing, security review, accessibility) earlier in the development lifecycle. Catching issues in Upstream or early Downstream is cheaper than catching them in Onstream. |
| **SLA** | Service Level Agreement. The customer-facing contractual commitment about availability, performance, and support response times. Breaching an SLA may have financial or legal consequences. |
| **SLI** | Service Level Indicator. A quantitative measure of a service's behaviour (e.g., request latency at the 95th percentile, error rate, availability). SLIs are the raw data that SLOs are built on. |
| **SLO** | Service Level Objective. The internal reliability target that underpins the SLA. Owned and signed off by the PM (reliability is a product decision). See [SLA & SLO Framework](/onstream/sla-slo). |
| **Slice** | A thin, end-to-end path through the user journey that delivers real user value. The unit of MVP planning. A good slice touches all layers (UI, API, DB) but only for one narrow path. See [Story Mapping](/upstream/story-mapping). |
| **Spike** | A time-boxed research task to reduce uncertainty. Spikes answer a specific question (e.g., "Can we integrate with API X within our latency budget?") and produce a recommendation, not production code. |
| **Sprint** | A fixed-length iteration (typically 2 weeks) during which the team commits to delivering a set of stories. The core Downstream cadence. |
| **SSDLC** | Secure Software Development Lifecycle. A set of security practices integrated into each phase of development — threat modelling in Upstream, secure coding in Downstream, vulnerability scanning in Onstream. |
| **Stability Point** | The gate between Onstream and Offstream. A feature crosses it when SLOs are met, the stabilisation window passes without P0/P1 incidents, and customer-facing teams are prepared. See [Phase Gates](/reference/phase-gates#gate-3). |
| **Story** | The smallest independently testable unit of user value. Lives in Jira. Must pass the INVEST test. Fourth layer in the hierarchy (Initiative > Feature > Epic > Story). See [4-Layer Hierarchy](/guide/hierarchy). |
| **Story Map** | A visual arrangement of stories along a horizontal axis (user journey steps) and a vertical axis (priority/depth). Used to identify slices, gaps, and release boundaries. See [Story Mapping](/upstream/story-mapping). |
| **Story Points** | A relative measure of effort, complexity, and uncertainty used for estimation. Not a measure of time. Used for velocity tracking and capacity planning. |
| **Three Amigos** | A 15-minute Story Kick-Off session with Developer + QA + PM. Aligns on examples, edge cases, and test approach before coding begins. See [Story Workflow](/downstream/story-workflow). |
| **Throughput** | The number of stories (or story points) completed per unit of time (typically per sprint). A measure of team delivery capacity. |
| **UDOO** | **U**pstream, **D**ownstream, **O**nstream, **O**ffstream. The four-phase R&D lifecycle framework. |
| **Upstream** | The product discovery phase of the UDOO framework. Transforms ideas and signals into Ready stories. Owned by Product. Colour: <span style="color:#2563eb">blue</span>. |
| **Velocity** | The average number of story points completed per sprint, measured over recent sprints. Used for capacity planning, not performance evaluation. |
| **Walking Skeleton** | A minimal end-to-end implementation that connects all architectural layers (UI, API, DB, infrastructure) with the thinnest possible functionality. Proves the architecture works before building out features. |
| **War Room** | A dedicated communication channel (Slack or video call) opened during P0/P1 incidents. All responders join the war room; the Incident Commander coordinates activity there. |
| **WIP** | Work in Progress. The number of items actively being worked on. WIP limits constrain how many items can be in a given state simultaneously, preventing overload and improving flow. |
| **WIP Limit** | The maximum number of items allowed in a workflow state at any time. Enforced on Kanban boards. When a column hits its WIP limit, no new items can enter until an existing item moves forward. |

::: info Missing a term?
If you encounter a term in the UDOO framework that is not listed here, flag it in the next retrospective or submit a PR to this page. The glossary is a living document.
:::
