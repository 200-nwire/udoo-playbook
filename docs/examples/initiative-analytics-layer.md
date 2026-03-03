# Initiative Brief — Analytics & Graph Intelligence Layer

:::info Document Metadata
| Field | Value |
|-------|-------|
| **Version** | 0.7 |
| **Date** | Nov 2025 |
| **Status** | Active — Architecture approved, Phase 1 in progress |
| **Owner** | @Alex Gefter |
| **Initiative Board** | [ANALYTICS Board](https://200apps.atlassian.net/jira/software/projects/ANLYT/boards/18) |
:::

---

## 1. Introduction & Context

Amit LMS currently delivers learning content in a linear, one-size-fits-all model. Courses play from start to finish. Every student gets the same sequence, the same pacing, and the same content — regardless of whether they're breezing through fundamentals or struggling with a concept they've failed three times.

The platform has **no understanding of student behaviour**. Instructors see completion percentages but cannot answer basic questions:

- *Which lesson causes the most drop-offs?*
- *Do students who struggle with Lesson 4 also struggle with Lesson 9?*
- *Is there a 3-minute mark where engagement consistently drops?*
- *Which students are at risk of not completing the course?*

Without these answers, course designers guess. Instructors react. Students disengage.

:::warning The cost of ignorance
Amit's current churn rate among enterprise customers is 18% annually. Exit interviews consistently cite "lack of visibility into learner performance" as a top-3 reason for switching to competitors. This initiative directly addresses that gap.
:::

---

## 2. Executive Summary

The Analytics & Graph Intelligence Layer transforms Amit LMS from a **static content delivery system** into a **living learning platform** that understands how students learn, where they struggle, and what to do about it.

It introduces four interconnected capabilities:

1. **Telemetry** — Captures fine-grained learning events (play, pause, skip, answer, revisit) in a standardised event model
2. **Data Lake** — Stores and transforms raw events through a medallion architecture (Bronze → Silver → Gold) for reliable analytics
3. **Knowledge Graph** — Models relationships between students, courses, lessons, skills, and learning patterns in a graph database
4. **Intelligence API** — Exposes profiles, insights, and recommendations to the LMS frontend and to third-party integrations

---

## 3. Goals & Non-Goals

### Goals

| # | Goal | Success Metric |
|---|------|---------------|
| G1 | Capture 100% of meaningful learning interactions as structured events | Event loss rate < 0.1% over 30 days |
| G2 | Build student profiles that update in real-time as learning happens | Profile staleness < 30 seconds after event |
| G3 | Identify at-risk students before they disengage | Predictive accuracy ≥ 70% for churn within 14 days |
| G4 | Enable course designers to see content effectiveness at the lesson and block level | Time-to-insight < 5 seconds for any lesson analytics query |
| G5 | Provide an API that powers adaptive learning in future phases | API response time p95 < 200ms |
| G6 | Maintain xAPI/Caliper compatibility for enterprise LRS integration | Pass conformance tests for xAPI 1.0.3 |

### Non-Goals

| # | Non-Goal | Rationale |
|---|----------|-----------|
| NG1 | Building an adaptive learning engine (content sequencing) | Deferred to Phase 3; this initiative builds the data foundation |
| NG2 | Replacing existing reporting dashboards | Existing dashboards remain; new insights are additive |
| NG3 | Real-time collaborative analytics (multi-user live views) | Complexity not justified for initial rollout; batch refresh is sufficient |

---

## 4. Initiative Framing

This initiative follows the **Upstream / Downstream / Onstream** lifecycle:

### Upstream (Discovery & Design)

| Objective | Output |
|-----------|--------|
| Map the current data landscape — what exists, what's missing | Data audit document with gap analysis |
| Define the event taxonomy — which interactions matter | Event catalog (50+ event types) with schemas |
| Design the graph ontology — how entities relate | Ontology diagram + Neo4j schema definition |
| Validate architecture with performance benchmarks | Load test results for 10K concurrent students |

### Downstream (Build & Deliver)

| Objective | Output |
|-----------|--------|
| Instrument the LMS player for event capture | SDK integration in web and mobile players |
| Build the data pipeline (ingest → transform → store) | Dataform models, BigQuery datasets, dbt tests |
| Deploy the graph database with sync pipelines | Neo4j Aura instance with change-stream sync |
| Ship the Intelligence API (v1) | OpenAPI spec, deployed endpoints, integration tests |

### Onstream (Operate & Observe)

| Objective | Output |
|-----------|--------|
| Monitor pipeline health and data freshness | Grafana dashboards, PagerDuty alerts |
| Track API reliability and latency | SLO: 99.9% uptime, p95 < 200ms |
| Run incident response for data quality issues | Runbook for common failure modes |

---

## 5. Educational & Business Rationale

### Educational Value

Research in learning analytics (Siemens 2013, Gašević et al. 2015) consistently shows that:

- **Early intervention** reduces course failure rates by 15–25%
- **Personalised feedback** based on learning patterns increases engagement by 30%
- **Content effectiveness data** enables iterative course improvement that compounds over semesters

The graph structure is particularly suited to learning analytics because learning is inherently relational: a student's mastery of Skill A affects their readiness for Lesson B, which is a prerequisite for Course C.

### Business Value

| Metric | Current | Target (6 months post-launch) |
|--------|---------|-------------------------------|
| Enterprise churn rate | 18% annually | 12% annually |
| Upsell rate (analytics add-on) | N/A | 25% of enterprise accounts |
| Time-to-insight for instructors | Manual export + spreadsheet (hours) | < 5 seconds in-app |
| Support tickets re: "no visibility" | ~40/month | < 10/month |

---

## 6. Architecture Overview

```
┌─────────────┐     ┌──────────────┐     ┌─────────────┐     ┌──────────────────┐
│   LMS Player │────▶│   Data Lake   │────▶│    Graph     │────▶│  Intelligence    │
│  (Web/Mobile)│     │  (BigQuery)   │     │   (Neo4j)    │     │     API          │
│              │     │              │     │              │     │  (Cloud Run)     │
│  Events SDK  │     │  Medallion   │     │  Ontology    │     │  /profiles       │
│              │     │  B → S → G   │     │  Sync        │     │  /insights       │
│              │     │              │     │              │     │  /recommendations │
└─────────────┘     └──────────────┘     └─────────────┘     └──────────────────┘
       │                    │                    │                      │
       └──── Pub/Sub ──────┘                    │                      │
                            └── Change Streams ─┘                      │
                                                 └── REST / gRPC ─────┘
```

---

## 7. Data Layer — Medallion Architecture

### Bronze (Raw)

- **Source:** Pub/Sub topic `learning-events-raw`
- **Storage:** BigQuery dataset `analytics_bronze`
- **Format:** Raw JSON events, append-only, partitioned by `event_date`
- **Retention:** 2 years
- **Schema enforcement:** None — accept all, validate downstream

### Silver (Cleaned & Validated)

- **Transformation:** Dataform models (`stg_events`, `stg_sessions`, `stg_attempts`)
- **Storage:** BigQuery dataset `analytics_silver`
- **Changes from Bronze:** Deduplicated, schema-validated, enriched with session boundaries, null-safe casts
- **Freshness SLA:** < 5 minutes from event to Silver
- **Tests:** Not-null checks, referential integrity, accepted-values for enums

### Gold (Business-Ready)

- **Models:** `fct_learning_sessions`, `fct_assessment_attempts`, `dim_students`, `dim_courses`, `dim_lessons`
- **Storage:** BigQuery dataset `analytics_gold`
- **Aggregations:** Session duration, completion rates, struggle scores, skill mastery levels
- **Freshness SLA:** < 15 minutes from event to Gold
- **Access:** Intelligence API reads from Gold; instructor dashboards query Gold directly

:::details Technology Choices
| Component | Technology | Rationale |
|-----------|-----------|-----------|
| Event bus | Google Cloud Pub/Sub | Managed, scalable, at-least-once delivery, integrates with BigQuery subscriptions |
| Data warehouse | BigQuery | Serverless, columnar, cost-effective for analytical queries at scale |
| Transformation | Dataform (BigQuery-native) | SQL-based, version-controlled, built-in testing, no separate orchestrator needed |
| Graph database | Neo4j Aura (managed) | Purpose-built for relationship queries; Cypher query language; managed reduces ops burden |
| API runtime | Cloud Run | Serverless, auto-scaling, pay-per-request, container-based |
| Monitoring | Grafana Cloud + PagerDuty | Unified observability, alerting with escalation paths |
:::

---

## 8. Real-Time Graph Sync

The graph must stay current as students learn. The sync strategy balances freshness with reliability:

### Change Stream Pattern

1. **Gold tables** in BigQuery have change tracking enabled
2. A **Cloud Run sync service** polls for changes every 30 seconds
3. Changes are translated into **Cypher MERGE statements** (upsert pattern)
4. The sync service maintains a **checkpoint** to handle restarts without data loss

### Upsert Pattern

```cypher
// Student node — create or update
MERGE (s:Student {id: $studentId})
ON CREATE SET s.created_at = datetime(), s.name = $name
ON MATCH SET s.last_active = datetime(), s.session_count = s.session_count + 1

// Learning relationship — create or update
MERGE (s)-[r:COMPLETED]->(l:Lesson {id: $lessonId})
ON CREATE SET r.first_completed = datetime(), r.score = $score
ON MATCH SET r.last_attempted = datetime(), r.best_score = CASE WHEN $score > r.best_score THEN $score ELSE r.best_score END
```

### Hybrid Sync Strategy

| Data Type | Sync Method | Latency Target |
|-----------|------------|----------------|
| Student activity (session start/end) | Near-real-time (30s polling) | < 60 seconds |
| Assessment results | Near-real-time | < 60 seconds |
| Course structure changes | Batch (hourly) | < 2 hours |
| Skill mappings | Batch (daily) | < 24 hours |

---

## 9. Telemetry & Event Model

### Event Kinds

| Kind | Description | Examples |
|------|------------|---------|
| `navigation` | Movement between content units | `lesson_opened`, `chapter_navigated`, `course_entered` |
| `engagement` | Interaction with content | `video_played`, `video_paused`, `video_seeked`, `text_scrolled` |
| `assessment` | Responses to questions or exercises | `question_answered`, `quiz_submitted`, `exercise_completed` |
| `social` | Interactions with peers or instructors | `comment_posted`, `discussion_joined`, `help_requested` |
| `system` | Platform-level events | `session_started`, `session_ended`, `error_occurred` |

### Event Shape

Every event conforms to a common envelope:

```json
{
  "event_id": "evt_8f3a2b1c-4d5e-6f7a-8b9c-0d1e2f3a4b5c",
  "event_type": "video_played",
  "event_kind": "engagement",
  "timestamp": "2025-11-15T14:32:07.123Z",
  "actor": {
    "id": "stu_12345",
    "type": "student",
    "session_id": "sess_abc123"
  },
  "object": {
    "id": "block_video_789",
    "type": "video_block",
    "lesson_id": "les_456",
    "course_id": "crs_001"
  },
  "context": {
    "platform": "web",
    "app_version": "3.2.1",
    "viewport": "desktop",
    "locale": "en-US"
  },
  "data": {
    "position_seconds": 47,
    "playback_speed": 1.5,
    "is_resuming": true
  }
}
```

### xAPI / Caliper Adapter

:::info Planned for Phase 2
Enterprise customers using external Learning Record Stores (LRS) expect xAPI or Caliper-formatted statements. Rather than emitting dual formats at the source, we will build an adapter layer that transforms Gold-tier events into xAPI statements on demand.

- **xAPI conformance target:** 1.0.3
- **Caliper conformance target:** 1.2
- **Delivery:** Batch export endpoint (`GET /api/v1/xapi/statements?since=...`) and webhook subscription
:::

---

## 10. Graph Ontology

### Node Types

| Node | Key Properties | Description |
|------|---------------|-------------|
| `Student` | id, name, email_hash, created_at, last_active | A learner in the platform |
| `Course` | id, title, version, published_at | A structured learning program |
| `Lesson` | id, title, sequence, course_id, duration_minutes | A unit within a course |
| `Block` | id, type (video/text/quiz/exercise), lesson_id | An atomic content element |
| `Variant` | id, block_id, variant_type, difficulty | An alternative version of a block (for A/B testing or adaptive delivery) |
| `Skill` | id, name, domain, taxonomy_level | A competency that content teaches or assesses |

### Relationships

```
(Student)-[:ENROLLED_IN {enrolled_at, role}]->(Course)
(Student)-[:COMPLETED {score, duration, attempts}]->(Lesson)
(Student)-[:ATTEMPTED {answer, correct, timestamp}]->(Block)
(Student)-[:MASTERED {level, confidence, last_assessed}]->(Skill)
(Course)-[:CONTAINS {sequence}]->(Lesson)
(Lesson)-[:CONTAINS {sequence}]->(Block)
(Block)-[:HAS_VARIANT {is_default}]->(Variant)
(Block)-[:TEACHES {weight}]->(Skill)
(Lesson)-[:PREREQUISITE_OF]->(Lesson)
(Skill)-[:PREREQUISITE_OF]->(Skill)
```

---

## 11. Profiles & Memory

The system maintains three tiers of student profiles, each serving a different time horizon:

### Session Profile (Ephemeral)

- **Lifetime:** Current learning session only
- **Storage:** In-memory (Redis)
- **Contents:** Events in the current session, current lesson progress, time-on-task, engagement score
- **Use case:** Real-time UI updates ("You've been studying for 25 minutes"), in-session nudges
- **Eviction:** On session end (flushed to Data Lake)

### Course Profile (Per Student-Course)

- **Lifetime:** Duration of enrolment
- **Storage:** Neo4j (graph) + BigQuery (Gold)
- **Contents:** Lessons completed, quiz scores, struggle areas, time patterns, predicted completion date
- **Use case:** Instructor dashboard, progress reports, at-risk detection
- **Update frequency:** Near-real-time (< 60 seconds)

### Long-Term Profile (Cross-Course)

- **Lifetime:** Persistent (lifetime of student account)
- **Storage:** Neo4j (graph)
- **Contents:** Skills mastered across all courses, learning velocity, preferred content types, historical engagement patterns
- **Use case:** Course recommendations, skill gap analysis, portfolio/transcript generation
- **Update frequency:** Batch (hourly)

:::tip Why three tiers?
A single profile model forces a choice between freshness and completeness. The tiered approach gives the system the right data at the right speed: ephemeral data is fast but disposable, course data is durable and relationship-rich, long-term data is comprehensive but tolerates latency.
:::

---

## 12. Intelligence API

### Endpoints (v1)

| Method | Path | Description | Response Time SLO |
|--------|------|-------------|-------------------|
| `GET` | `/profiles/:studentId` | Full student profile (course + long-term) | < 150ms |
| `GET` | `/profiles/:studentId/courses/:courseId` | Course-specific profile with progress and predictions | < 100ms |
| `GET` | `/lessons/:lessonId/insights` | Lesson effectiveness metrics (completion rate, avg score, drop-off points) | < 200ms |
| `GET` | `/courses/:courseId/at-risk` | List of students predicted to disengage within 14 days | < 300ms |
| `POST` | `/events` | Ingest a batch of learning events | < 50ms (async processing) |
| `GET` | `/skills/:studentId` | Skill mastery map for a student | < 150ms |

### Authentication

All endpoints require a valid JWT issued by the Amit auth service. Scopes:

- `analytics:read` — Read profiles and insights
- `analytics:write` — Ingest events (player SDK only)
- `analytics:admin` — Access all students (instructor/admin role)

---

## 13. Risks & Mitigations

| # | Risk | Likelihood | Impact | Mitigation |
|---|------|-----------|--------|------------|
| R1 | Event volume overwhelms Pub/Sub quota | Low | High | Start with conservative throughput; enable auto-scaling; monitor with alerts at 70% capacity |
| R2 | Graph sync falls behind during peak usage | Medium | Medium | Implement backpressure mechanism; alert when sync lag exceeds 5 minutes; batch-catch-up job runs hourly |
| R3 | Neo4j Aura has unplanned downtime | Low | High | Intelligence API degrades gracefully to BigQuery-only responses (slower, no graph traversals); monitor Aura status |
| R4 | Event schema changes break downstream models | Medium | High | Schema registry with versioning; backward-compatible changes only; breaking changes require a migration plan with 2-week notice |
| R5 | GDPR/privacy compliance for student data | Medium | Critical | All student identifiers are hashed at ingestion; PII stored only in the LMS database (not in analytics layer); data retention policy enforced automatically |
| R6 | Team lacks Neo4j/Cypher expertise | High | Medium | Budget 2 weeks for training; pair with Neo4j consulting partner for initial ontology design; document all Cypher patterns |

---

## 14. Key Architecture Decision Records (ADRs)

### ADR-01: Medallion Architecture Over Lambda Architecture

**Status:** Accepted  
**Context:** We need a data architecture that handles both real-time and batch analytics.  
**Decision:** Use a medallion (Bronze → Silver → Gold) architecture in BigQuery rather than a Lambda architecture with separate batch and speed layers.  
**Rationale:** Lambda architecture introduces operational complexity (two codepaths to maintain). Medallion gives us progressive refinement in a single system. BigQuery's streaming inserts provide near-real-time freshness without a separate speed layer.  
**Consequences:** We accept slightly higher latency (minutes, not seconds) for the simplicity of one codebase.

### ADR-02: Neo4j Over Property Columns in BigQuery

**Status:** Accepted  
**Context:** Student-course-skill relationships require multi-hop traversals (e.g., "What skills does Student X need to improve to succeed in Course Y?").  
**Decision:** Use Neo4j as a dedicated graph layer rather than modelling relationships as columns or nested structs in BigQuery.  
**Rationale:** BigQuery is optimised for analytical queries over flat/wide tables. Multi-hop relationship queries require self-joins that become expensive and slow beyond 3 hops. Neo4j handles these queries natively in single-digit milliseconds.  
**Consequences:** Additional infrastructure to manage; sync layer required between BigQuery and Neo4j.

### ADR-03: Dataform Over dbt for Transformation

**Status:** Accepted  
**Context:** We need a transformation framework for BigQuery.  
**Decision:** Use Dataform (BigQuery-native) over dbt Cloud.  
**Rationale:** Dataform is fully integrated into Google Cloud console, requires no separate infrastructure, and supports BigQuery-specific features natively. The team is already on GCP.  
**Consequences:** Less community ecosystem than dbt; acceptable given our straightforward transformation needs.

### ADR-04: Event Envelope Over xAPI-Native Events

**Status:** Accepted  
**Context:** Enterprise customers need xAPI compatibility, but our internal event model must serve real-time analytics and graph sync.  
**Decision:** Use a custom event envelope internally; build an xAPI adapter for external consumption.  
**Rationale:** xAPI's Actor-Verb-Object model is verbose for internal use and doesn't map cleanly to our graph ontology. A leaner internal format reduces storage costs and simplifies pipeline logic. The adapter translates on-demand without data loss.  
**Consequences:** Adapter must be maintained and tested for conformance with each xAPI version.

### ADR-05: Redis for Session Profiles Over In-Process Memory

**Status:** Accepted  
**Context:** Session profiles need sub-millisecond reads and writes during a learning session.  
**Decision:** Use Redis (Memorystore) for ephemeral session profiles rather than in-process memory in the API server.  
**Rationale:** Cloud Run instances are stateless and may be recycled mid-session. Redis provides persistence across instance restarts and enables horizontal scaling without session affinity.  
**Consequences:** Added latency (~1ms per Redis call); acceptable for the reliability gain.

### ADR-06: Hashed Student IDs at Ingestion Boundary

**Status:** Accepted  
**Context:** GDPR and institutional privacy policies require that the analytics layer cannot independently identify students.  
**Decision:** Hash all student identifiers (SHA-256 with rotating salt) at the Pub/Sub ingestion boundary. The analytics layer never stores raw PII.  
**Rationale:** Decoupling PII from analytics data means a breach of the analytics layer does not expose student identities. The LMS database remains the single source of truth for PII.  
**Consequences:** Debugging requires joining back to the LMS database (acceptable friction for the privacy benefit).

---

## 15. Roadmap

| Phase | Timeline | Scope | Key Deliverable |
|-------|----------|-------|----------------|
| **Phase 1** — Foundation | Nov–Dec 2025 | Event model, Pub/Sub ingestion, Bronze + Silver layers, basic Gold models | Events flowing through pipeline; Silver data queryable in BigQuery |
| **Phase 2** — Graph & Profiles | Jan–Feb 2026 | Neo4j deployment, sync pipeline, session + course profiles, Intelligence API v1 | Instructor dashboard shows real-time student progress |
| **Phase 3** — Intelligence | Mar–Apr 2026 | At-risk prediction model, skill mastery scoring, xAPI adapter | Automated alerts for at-risk students; xAPI export for enterprise LRS |
| **Phase 4** — Adaptive | May–Jun 2026 | Content recommendation engine, A/B variant selection, feedback loops | Platform suggests next-best-action for students and course designers |

:::tip How this brief connects to the framework
This initiative demonstrates a technically deep brief where architecture decisions (ADRs) are embedded directly in the document rather than scattered across separate Confluence pages. The [Initiative Walkthrough](/upstream/initiative-walkthrough) chapter explains why co-locating decisions with their context produces better outcomes.

The three-tier profile model (Session → Course → Long-Term) mirrors the framework's principle of **right-sizing documentation to its audience** — ephemeral data for real-time UX, durable data for stakeholder reporting, persistent data for strategic decisions.
:::

---

**Next example:** [Feature Document — Living Wondrously Journal →](./feature-living-wondrously)
