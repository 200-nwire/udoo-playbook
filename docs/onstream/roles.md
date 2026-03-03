# Roles & Ownership

<span class="phase-badge onstream">🟠 Onstream</span>

## The Principle: You Build It, You Run It

Onstream is not a separate team that inherits production problems. It is a shared responsibility model where the people who build a service are accountable for its operational health. When a developer ships a feature, they do not throw it over a wall — they own its behaviour in production until it is stable, monitored, and documented.

This does not mean every developer is on-call 24/7. It means every developer understands the operational consequences of their code, writes runbooks for their features, and participates in incident response when their service is affected.

::: warning "Someone Else Will Handle Production" Is a Myth
Teams that separate build and run create a knowledge gap. The people who understand the code are not the ones responding to incidents. The people responding to incidents lack context to resolve them quickly. Result: longer outages, higher MTTR, and frustrated on-call engineers.
:::

---

## Onstream Roles

### DevOps Engineers

DevOps engineers own the **infrastructure and deployment pipeline**. They ensure that the machinery of delivery — CI/CD pipelines, container orchestration, infrastructure-as-code, environment provisioning — operates reliably.

| Responsibility | Detail |
|---------------|--------|
| **CI/CD pipeline health** | Build times, deployment success rates, rollback capability |
| **Infrastructure management** | Cloud resources, networking, DNS, certificates, secrets management |
| **Environment parity** | Staging mirrors production. Drift between environments is tracked and eliminated. |
| **Deployment automation** | Zero-touch deployments with automated smoke tests and rollback triggers |
| **Cost management** | Resource utilization monitoring, right-sizing, idle resource cleanup |

::: tip DevOps Is Not a Gatekeeper
DevOps engineers enable teams to deploy safely, not control when teams can deploy. The goal is self-service with guardrails, not ticket-driven gatekeeping.
:::

### Site Reliability Engineers (SRE)

SREs own **reliability as a measurable property**. They define SLOs, track error budgets, and build the automation that prevents and mitigates incidents.

| Responsibility | Detail |
|---------------|--------|
| **SLO definition and tracking** | Translating business requirements into measurable reliability targets |
| **Error budget management** | Tracking budget consumption, triggering slowdowns when budgets are thin |
| **Monitoring and alerting** | Designing alerts that detect symptoms (not causes), reducing noise |
| **Incident tooling** | PagerDuty/Opsgenie configuration, war room automation, status page management |
| **Reliability reviews** | Quarterly deep-dives into reliability trends, capacity planning, architecture risks |
| **Toil reduction** | Automating repetitive operational tasks. Target: < 50% of SRE time on toil. |

### Support Teams

Support teams are the **front line between the product and its users**. They detect issues that monitoring misses — because users will tell you about problems before your dashboards do.

| Responsibility | Detail |
|---------------|--------|
| **Customer query triage** | First response, categorization, and routing of customer issues |
| **Known issue management** | Maintaining a known-issues list with workarounds for active defects |
| **Escalation to engineering** | Escalating confirmed bugs with reproduction steps, severity, and customer impact data |
| **Feedback aggregation** | Identifying patterns in support tickets that indicate systemic problems |
| **Communication** | Proactive customer communication during incidents: status updates, ETA, workarounds |

::: info Support Tickets Are a Signal
A spike in support tickets about the same feature is an incident signal. Teams should monitor support ticket volume by category alongside their technical dashboards. The JWT outage was detected by customers before the engineering dashboard — that should never happen.
:::

### Developers

In the Onstream context, developers are responsible for the **operational health of the code they ship**. This goes beyond writing code — it includes the instrumentation, documentation, and knowledge transfer that enable others to support their features.

| Responsibility | Detail |
|---------------|--------|
| **Observability instrumentation** | Emitting events, metrics, and traces that enable monitoring |
| **Runbook authorship** | Writing operational documentation for features they build |
| **Bug fix ownership** | Fixing production defects in their code within SLA response times |
| **On-call participation** | Rotating onto the on-call schedule for their service |
| **Post-incident contribution** | Participating in post-mortems and implementing follow-up actions |
| **Handoff to Onstream** | Ensuring the Delivery Point is clean: dashboards, alerts, runbooks all in place |

### Delivery Manager

The Delivery Manager is **accountable for operational stability** across the team's services. They do not fix incidents — they ensure the system, processes, and communication channels are in place for incidents to be resolved efficiently.

| Responsibility | Detail |
|---------------|--------|
| **Operational accountability** | Single point of accountability for service health across the team |
| **Incident coordination** | Ensuring incident response follows the defined process (severity, escalation, comms) |
| **Risk visibility** | Surfacing operational risks to stakeholders before they become incidents |
| **Process enforcement** | Ensuring post-mortems happen, follow-up actions are tracked, runbooks are maintained |
| **Stakeholder communication** | Reporting on SLA compliance, incident trends, and reliability metrics |
| **Change management** | Approving or escalating high-risk changes through the Change Advisory Board |

### Customer Success

Customer Success operates at the **boundary between the product and business outcomes**. They translate operational metrics into customer-facing language and ensure that reliability decisions are informed by customer impact.

| Responsibility | Detail |
|---------------|--------|
| **Feedback loops** | Channeling customer experience data back to engineering and product |
| **Impact assessment** | Quantifying the customer impact of incidents (users affected, revenue, churn risk) |
| **SLA communication** | Translating SLA commitments to customers and reporting on compliance |
| **Feature adoption monitoring** | Tracking whether shipped features are actually used and performing as expected |
| **Escalation advocacy** | Representing customer urgency in incident triage and prioritization decisions |

---

## RACI Matrix for Onstream Activities

The RACI matrix clarifies who is **Responsible** (does the work), **Accountable** (owns the outcome), **Consulted** (provides input), and **Informed** (needs to know) for each Onstream activity.

| Activity | DevOps | SRE | Support | Developer | Delivery Mgr | Customer Success |
|----------|--------|-----|---------|-----------|-------------|-----------------|
| **Monitoring & alerting setup** | R | A | I | C | I | I |
| **SLO definition** | C | R | I | C | A | C |
| **Incident detection** | C | R | R | I | I | I |
| **Incident response (P0/P1)** | R | R | C | R | A | I |
| **Incident communication** | I | C | R | I | A | R |
| **Post-mortem facilitation** | I | R | C | R | A | I |
| **Runbook creation** | C | C | I | R | A | I |
| **On-call rotation** | R | R | — | R | A | — |
| **Error budget review** | C | R | I | C | A | C |
| **Change approval (high-risk)** | R | C | I | R | A | I |
| **Customer impact assessment** | I | C | R | I | I | A |
| **Capacity planning** | R | A | I | C | I | I |
| **Service review (weekly)** | R | R | C | C | A | I |
| **Reliability review (quarterly)** | R | R | I | C | A | C |

::: details How to Read This Matrix
- **R (Responsible):** Does the work. Multiple roles can be responsible.
- **A (Accountable):** Owns the outcome. Only ONE role per activity. The buck stops here.
- **C (Consulted):** Provides input before a decision. Two-way communication.
- **I (Informed):** Notified after a decision. One-way communication.

If an activity has no "A," no one owns the outcome. If an activity has multiple "A"s, no one owns the outcome. Both are failure modes.
:::

---

## Ownership Boundaries

### Service Ownership

Every service in production must have a named owner. Not a team — a person.

| Attribute | Requirement |
|-----------|------------|
| **Service owner** | A named individual (usually a senior developer or tech lead) |
| **Backup owner** | A second named individual who can act in the owner's absence |
| **Service catalogue entry** | Name, description, dependencies, SLOs, runbook link, owner, backup |
| **On-call rotation** | At least 2 people qualified to respond to incidents for the service |

::: warning Unowned Services Are Ticking Time Bombs
If no one owns a service, no one monitors it, no one updates its runbook, and no one responds when it breaks. During the JWT outage, the APIM policy was in a gray area of ownership — "it's infrastructure" said the developers, "it's application config" said DevOps. The 15-minute detection delay was a direct consequence of unclear ownership.
:::

### The Ownership Handoff at the Delivery Point

When a feature transitions from Downstream to Onstream at the Delivery Point, ownership does not transfer — it **expands**. The developer remains responsible for their code. The on-call team becomes additionally responsible for operational response.

```
Before Delivery Point:
  Developer → owns code, tests, and behaviour

After Delivery Point:
  Developer → owns code, tests, and behaviour
  On-call   → owns operational response and monitoring
  Support   → owns customer communication
  SRE       → owns reliability measurement and error budget tracking
```

The developer is never "done" with their code. They are the subject-matter expert who will be called upon during incidents, post-mortems, and improvement cycles.

---

## Common Failure Modes in Role Definition

| Failure Mode | Symptom | Fix |
|-------------|---------|-----|
| "That's not my job" | Incidents bounce between teams with no resolution | Clarify RACI. Ensure every service has a named owner. |
| Hero culture | One person handles all incidents because "they know the system" | Distribute knowledge via pair on-call and mandatory runbooks. |
| Shadow IT operations | Developers manage production without DevOps/SRE awareness | All production access goes through audited, role-based controls. |
| Absent Delivery Manager | No one tracks post-mortem follow-ups or process compliance | DM attends every service review. Follow-up actions are Jira tickets with due dates. |
| Support as a black hole | Support tickets go in but engineering never sees the patterns | Weekly support ticket review in the service review meeting. |

---

## Getting Started: Role Checklist

Before a team can operate a service in production, the following must be in place:

- [ ] Every service has a named owner and backup owner in the service catalogue
- [ ] On-call rotation is configured with at least 2 qualified responders per service
- [ ] RACI matrix is documented and reviewed with all roles
- [ ] Developers have written runbooks for every service they own
- [ ] Support team has access to known-issues list and escalation paths
- [ ] Delivery Manager has scheduled weekly service reviews
- [ ] SRE has defined SLOs and error budgets for each service
- [ ] Customer Success has access to incident impact data

::: tip Start Small
You do not need all roles filled on day one. Start with: service owner, on-call rotation, and a Delivery Manager who tracks follow-ups. Add SRE and Customer Success capabilities as the team matures.
:::
