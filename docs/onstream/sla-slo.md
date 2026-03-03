# SLA & SLO Framework

<span class="phase-badge onstream">🟠 Onstream</span>

## The Three Pillars: SLI, SLO, SLA

Reliability is not a feeling. It is a measurable property with three layers, each building on the one below it.

| Layer | What It Is | Who Cares | Example |
|-------|-----------|-----------|---------|
| **SLI** (Service Level Indicator) | What you **measure** | Engineering | p95 API response latency |
| **SLO** (Service Level Objective) | What you **target** | Engineering + Product | p95 API latency < 300ms |
| **SLA** (Service Level Agreement) | What you **promise** | Business + Customer | 99.9% availability per calendar month |

```
SLI (raw signal)
  └── SLO (internal target, tighter)
        └── SLA (external contract, looser)
```

::: info SLOs Are Tighter Than SLAs
If your SLA promises 99.9% availability, your SLO should target 99.95%. The gap between SLO and SLA is your safety margin. If you only target the SLA, you will breach it — because you will always discover problems slightly after they begin.
:::

---

## Service Level Indicators (SLIs)

SLIs are the **raw measurements** that tell you how your service is performing. They must be objective, measurable, and tied to user experience.

### Choosing Good SLIs

| Good SLI | Why | Bad SLI | Why Bad |
|----------|-----|---------|---------|
| p95 API response time | Reflects what 95% of users experience | Average API response time | Hides tail latency — 1% of users could wait 30s |
| Percentage of requests returning non-5xx | Directly measures user-facing errors | Number of errors per hour | Raw count is meaningless without context of total traffic |
| Time from page request to first contentful paint | Measures perceived performance | Server CPU utilization | Infrastructure metric, not user-facing |
| Percentage of successful login attempts | Measures a critical user journey | Number of database connections | Internal resource metric |

### SLI Specification Template

For each SLI, document:

```
SLI Name:           API Success Rate
Description:        Percentage of non-5xx responses out of total API requests
Measurement source: Application load balancer access logs
Calculation:        (total_requests - 5xx_responses) / total_requests × 100
Measurement window: Rolling 30-day period
Granularity:        5-minute intervals
Owner:              SRE team
```

---

## Service Level Objectives (SLOs)

SLOs are **internal targets** that the team sets for each SLI. They answer: "How reliable does this service need to be?"

### Setting SLOs: Not Everything Needs Five Nines

| SLO Target | Allowed Downtime/Month | Suitable For |
|-----------|----------------------|-------------|
| 99.0% | 7h 18m | Internal tools, dev environments |
| 99.5% | 3h 39m | Non-critical features, batch processing |
| 99.9% | 43m 50s | Customer-facing APIs, web applications |
| 99.95% | 21m 55s | Payment processing, authentication |
| 99.99% | 4m 23s | Core infrastructure, data pipelines |

::: warning More Nines = More Cost
Each additional nine roughly doubles the engineering effort. A team targeting 99.99% needs redundant infrastructure, automated failover, canary deployments, and 24/7 on-call with 5-minute response times. A team targeting 99.9% can achieve reliability with good practices and standard monitoring. Choose the SLO that matches the business value of the service.
:::

### SLO Examples for a Real Product

| Service | SLI | SLO | Rationale |
|---------|-----|-----|-----------|
| Journal API | Request success rate | 99.9% over 30 days | Core user journey — entry creation must work |
| Journal API | p95 response latency | < 300ms | Users perceive anything > 500ms as slow |
| Prompt Service | Request success rate | 99.5% over 30 days | Prompts are nice-to-have; cached fallback exists |
| Authentication | Login success rate | 99.95% over 30 days | Failed logins block all functionality |
| Matching API | Match calculation latency | p99 < 2s | Matching is a background process; users can wait |
| Dashboard | Page load time (FCP) | p95 < 2.5s | First impression; directly impacts engagement |

### Product Owner Signs Off on SLOs

SLOs are not purely technical decisions. The Product Owner must approve every SLO because SLOs directly affect product decisions:

- A **tight SLO** (99.95%) means the team must invest in reliability work, which competes with feature work.
- A **loose SLO** (99.0%) means the team can move faster but users may experience more errors.
- **Error budget consumption** determines whether the team ships features or pauses to stabilize.

The PO's signature on an SLO means: "I understand the trade-off between reliability and velocity, and I accept this target."

---

## Error Budgets

The error budget is the **flip side of the SLO**. If your SLO is 99.9%, your error budget is 0.1% — that is the amount of unreliability you are allowed.

### How Error Budgets Work

```
SLO:            99.9% availability over 30 days
Error budget:   0.1% = 43 minutes 50 seconds of downtime per month

Day 15:         28 minutes consumed (64% of budget used)
                → Proceed with caution. No high-risk deployments.

Day 22:         41 minutes consumed (94% of budget used)
                → Freeze feature deployments. Focus on reliability.

Day 28:         44 minutes consumed (100% of budget breached)
                → Incident review required. No deploys until next month.
```

### Error Budget Policy

| Budget Consumed | Action |
|----------------|--------|
| 0–50% | Normal operations. Ship features. Deploy at will. |
| 50–80% | Caution. High-risk deployments require CAB approval. |
| 80–95% | Slow down. Only ship reliability improvements and critical fixes. |
| 95–100% | Feature freeze. All engineering effort goes to reliability. |
| > 100% | Budget breached. Post-mortem required. Stakeholder notification. No feature work until budget is replenished in the next window. |

::: tip Error Budgets Align Engineering and Product
Without error budgets, reliability vs. velocity is a subjective argument. With error budgets, it is a data-driven conversation: "We have consumed 82% of our error budget with 10 days left in the month. Deploying the new matching algorithm is high-risk. Let's defer it to next month." The PO can weigh the business value of the feature against the remaining budget.
:::

---

## The Golden Signals

Google's four golden signals are the foundation of service monitoring. Every dashboard should surface these four metrics.

| Signal | What It Measures | Example Metric | Alert Threshold |
|--------|-----------------|----------------|-----------------|
| **Latency** | Time to serve a request | p95 API response time | > 500ms for 5 consecutive minutes |
| **Traffic** | Demand on the system | Requests per second | < 50% or > 200% of baseline (anomaly) |
| **Errors** | Rate of failed requests | 5xx responses / total requests | > 1% error rate for 3 consecutive minutes |
| **Saturation** | How "full" the service is | CPU utilization, memory, queue depth | > 85% utilization for 10 consecutive minutes |

### Why These Four?

These four signals cover the full spectrum of failure modes:

- **Latency** degrades → users experience slowness before errors appear
- **Traffic** anomalies → either you are under attack (spike) or something upstream is broken (drop)
- **Errors** increase → users are seeing failures
- **Saturation** grows → the system is approaching its capacity limit and will soon fail

::: details Real Example: JWT Outage Through the Golden Signals Lens
During the JWT outage (APIM policy misconfiguration, 44 minutes of 100% 403 errors):

- **Latency**: Unchanged — requests were fast (they were just all rejected)
- **Traffic**: Unchanged — users kept retrying
- **Errors**: 100% error rate — every request returned 403
- **Saturation**: Unchanged — the system was not under load stress

An alert on **errors** alone would have detected this in under 2 minutes. The team was monitoring latency and saturation but not error rate at the APIM layer. This is why all four signals are mandatory.
:::

---

## RED and USE Methods

The golden signals work well for general monitoring. For more targeted analysis, use RED for request-driven services and USE for resource-driven infrastructure.

### RED Method (Request-Driven Services)

| Metric | What It Measures | When to Use |
|--------|-----------------|-------------|
| **Rate** | Requests per second | APIs, web servers, microservices |
| **Errors** | Number of failed requests per second | Any service processing requests |
| **Duration** | Distribution of request latency (p50, p95, p99) | Any service with a response time expectation |

```
Dashboard panel layout for a RED service:

┌─────────────────┬─────────────────┬─────────────────┐
│ Rate (RPS)      │ Error Rate (%)  │ Duration (p95)  │
│ ████████████    │ ▁▁▁▁▁▁▁▃▇▇     │ ████████▂▂▂▂    │
│ 1,200 req/s     │ 4.2% ⚠️        │ 312ms           │
└─────────────────┴─────────────────┴─────────────────┘
```

### USE Method (Resource-Driven Infrastructure)

| Metric | What It Measures | When to Use |
|--------|-----------------|-------------|
| **Utilization** | Percentage of resource capacity in use | CPU, memory, disk, network bandwidth |
| **Saturation** | Amount of queued/waiting work | Thread pool queue depth, disk I/O wait, connection pool wait |
| **Errors** | Count of error events | Hardware errors, dropped packets, OOM kills |

```
Dashboard panel layout for a USE resource:

┌─────────────────┬─────────────────┬─────────────────┐
│ CPU Utilization  │ Queue Depth     │ OOM Events      │
│ ████████████▂▂  │ ▁▁▁▁▁▁▁▁▁▁▁▁   │ ▁▁▁▁▁▁▁▁▁▁▁▁   │
│ 72% ✅          │ 3 ✅            │ 0 ✅            │
└─────────────────┴─────────────────┴─────────────────┘
```

::: tip When to Use Which Method
- **RED** for anything that processes requests (APIs, web apps, microservices)
- **USE** for anything that provides resources (servers, databases, caches, queues)
- Most services need both: RED for the application layer, USE for the infrastructure layer
:::

---

## Dashboard Requirements

Every service in production must have a dashboard. A dashboard without the right panels is decoration, not monitoring.

### Mandatory Dashboard Panels

| Panel | Content | Refresh Rate |
|-------|---------|-------------|
| **Service health** | Current SLO compliance (green/yellow/red) | 1 minute |
| **Error budget** | Budget consumed vs. remaining for the current window | 1 minute |
| **Golden signals** | Latency, traffic, errors, saturation — last 24 hours | 1 minute |
| **Recent deployments** | Deployment markers on the timeline to correlate with signal changes | Event-driven |
| **Active alerts** | Currently firing alerts with severity and duration | Real-time |
| **Dependency health** | Status of upstream/downstream services | 5 minutes |

### Dashboard Anti-Patterns

| Anti-Pattern | Problem | Fix |
|-------------|---------|-----|
| "Wall of green" | Everything is always green. Thresholds are too loose. | Calibrate thresholds from historical data. If an alert never fires, it is useless. |
| "Dashboard as screensaver" | Dashboard exists but no one looks at it | Pin to the service review agenda. Review in every standup. |
| "Too many panels" | 50+ panels. Information overload. | One dashboard per service. Golden signals + SLO status. Deep-dive dashboards linked separately. |
| "No deployment markers" | Cannot correlate signal changes with releases | Add deployment annotations to every dashboard timeline |

---

## Alert Design: Symptoms Not Causes

### The Core Principle

Alert on **symptoms** (what the user experiences) not **causes** (what might be wrong internally).

| Alert Type | Example | Problem |
|-----------|---------|---------|
| **Cause-based** (bad) | "CPU > 90%" | CPU can be 95% and users are fine. Or CPU is 50% and the service is broken. |
| **Symptom-based** (good) | "Error rate > 1% for 3 minutes" | Directly measures user impact regardless of the underlying cause. |

### Alert Severity Levels

| Level | Criteria | Response |
|-------|----------|----------|
| **Critical** | SLO breach imminent. User impact confirmed. | Page on-call immediately. |
| **Warning** | Error budget consumption accelerating. No user impact yet. | Notify on-call via Slack. Investigate within 1 hour. |
| **Info** | Anomaly detected. May or may not be a problem. | Log for review in daily standup. |

### Alert Hygiene

| Practice | Why |
|----------|-----|
| Every alert has a runbook link | On-call engineer knows what to do without reading code at 3 AM |
| Alerts that fire > 3x/week without action are deleted or tuned | Alert fatigue causes real alerts to be ignored |
| Every alert is reviewed quarterly | Services evolve. Alert thresholds must evolve with them. |
| On-call handoff includes alert review | Outgoing on-call briefs incoming on known noisy alerts and active investigations |

::: warning Alert Fatigue Kills Reliability
If your on-call engineer receives 50 alerts per shift and 48 of them are noise, they will eventually ignore alert #49 — which is a real P0. Treat every noisy alert as a reliability bug. Fix it or delete it.
:::

---

## Putting It All Together: SLO Lifecycle

```
1. Define SLIs (what to measure)
   └── 2. Set SLOs (what targets to hit) — PO signs off
        └── 3. Configure error budgets (how much failure is allowed)
             └── 4. Build dashboards (make it visible)
                  └── 5. Design alerts (detect deviations)
                       └── 6. Review monthly (are SLOs still right?)
                            └── 7. Adjust (tighten, loosen, or add new SLOs)
```

This is not a one-time setup. SLOs evolve as the product evolves. A feature that was non-critical in sprint 5 may become business-critical by sprint 15. Review SLOs quarterly and update them based on actual usage patterns and business priorities.
