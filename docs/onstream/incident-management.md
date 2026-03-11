# Incident Management

<span class="phase-badge onstream">🟠 Onstream</span>

## What Is an Incident?

An incident is any unplanned event that degrades or disrupts a service for users. A slow API is an incident. A broken login page is an incident. A misconfigured policy returning 403 errors to every request is an incident. An incident is not defined by whether engineering notices — it is defined by whether users are affected.

---

## Severity Matrix: P0 – P3

Every incident must be assigned a severity within the first 5 minutes of detection. Severity determines the response speed, communication cadence, and escalation path.

| Severity | Definition | Example | Response Time | Communication |
|----------|-----------|---------|---------------|---------------|
| **P0** | System down. All users affected. Revenue impact. | Complete API outage, data loss, security breach | 5 minutes | War room. Status page. Exec notification. |
| **P1** | Major feature broken. Large subset of users affected. | Login failures for 30% of users, payment processing down | 15 minutes | Incident channel. Status page. Customer comms. |
| **P2** | Feature degraded. Workaround exists. | Slow page loads (p95 > 5s), intermittent errors with retry success | 1 hour | Incident channel. Internal notification. |
| **P3** | Minor issue. Minimal user impact. | Cosmetic bug, incorrect label, tooltip not rendering | Next business day | Logged as bug. Prioritized in backlog. |

::: warning When in Doubt, Escalate Up
If you are unsure whether an incident is P1 or P2, treat it as P1. Downgrading is cheap. The cost of under-classifying a P0 as P2 — and responding in 1 hour instead of 5 minutes — is measured in lost users and lost revenue.
:::

### Severity Decision Tree

```
Is the service completely unavailable?
  ├── Yes → P0
  └── No → Are a significant number of users affected?
              ├── Yes → Is there a workaround?
              │           ├── No → P1
              │           └── Yes → P2
              └── No → P3
```

---

## Incident Response Flow

Every incident follows the same six-phase flow, regardless of severity. The phases are sequential — do not skip steps.

```
Detect → Acknowledge → Triage → Mitigate → Resolve → Review
```

### Phase 1: Detect

| Source | How |
|--------|-----|
| **Automated alert** | Monitoring system fires a symptom-based alert (error rate, latency, availability) |
| **Customer report** | Support team receives a ticket or call describing the issue |
| **Internal discovery** | A team member notices something wrong during routine work |
| **Synthetic monitoring** | Scheduled health checks or smoke tests fail |

The detection goal is **under 2 minutes** for P0/P1 incidents. If your monitoring cannot detect a complete outage within 2 minutes, your alerting configuration is a P2 bug.

### Phase 2: Acknowledge

The on-call engineer acknowledges the alert within the SLA response time. Acknowledgment means: "I have seen this, I am investigating, I own it until I hand off."

| Severity | Acknowledgment SLA |
|----------|-------------------|
| P0 | 5 minutes |
| P1 | 15 minutes |
| P2 | 1 hour |
| P3 | Next business day |

When acknowledging:
1. Confirm receipt in the alerting tool (PagerDuty/Opsgenie)
2. Post in the incident Slack channel: `"Acknowledged. Investigating [service] — [symptom]. Severity: [P0/P1/P2]."`
3. For P0/P1: open a war room (video call + dedicated Slack channel)

### Phase 3: Triage

Triage answers three questions:
1. **What is the impact?** — How many users are affected? Which functionality is broken?
2. **What changed?** — Was there a recent deployment, configuration change, or infrastructure event?
3. **What is the likely cause?** — Based on symptoms and recent changes, what is the most probable root cause?

::: tip Check the Deployment Log First
The majority of production incidents correlate with a recent change. Before deep-diving into logs, check: Was there a deployment in the last 2 hours? A configuration change? A database migration? A third-party update?
:::

### Phase 4: Mitigate

Mitigation is about **stopping the bleeding**, not fixing the root cause. The priority is to restore service for users as fast as possible.

| Mitigation Strategy | When to Use |
|---------------------|-------------|
| **Rollback** | A recent deployment caused the issue. Rollback to the last known good version. |
| **Feature flag** | A specific feature is broken. Disable it while the rest of the service stays up. |
| **Traffic redirect** | A region or instance is unhealthy. Route traffic to healthy instances. |
| **Manual override** | A configuration error. Correct the configuration directly. |
| **Restart** | A transient state issue (memory leak, deadlock). Restart the affected service. |
| **Scale up** | The service is overwhelmed. Add capacity to absorb the load. |

::: warning Mitigate First, Root-Cause Later
The urge to understand "why" before acting is natural but dangerous during an outage. Roll back first. Ask questions later. A 5-minute rollback followed by a calm investigation is always better than a 44-minute investigation conducted under pressure while users are locked out.
:::

### Phase 5: Resolve

Resolution means the service is fully restored and the incident is confirmed closed.

| Resolution Check | Detail |
|-----------------|--------|
| Service is healthy | All golden signals are within SLO thresholds |
| Users can confirm | Support verifies that customer-reported issues are resolved |
| Monitoring is clean | No residual alerts firing |
| Temporary mitigations are replaced | If you rolled back, the fix is deployed (not just the rollback) |
| Status page updated | External status page reflects "Resolved" with a summary |

### Phase 6: Review (Post-Incident)

Within **48 hours** of resolution, the team conducts a blameless post-incident review. See the [Post-Mortem Template](/onstream/post-mortem-template) page for the full template.

---

## War Room Protocol (P0/P1)

A war room is convened immediately for P0 and P1 incidents. It is a focused, time-boxed coordination space — not a free-for-all.

### War Room Roles

| Role | Person | Responsibility |
|------|--------|---------------|
| **Incident Commander (IC)** | Delivery Manager or senior engineer | Owns the incident lifecycle. Makes decisions. |
| **Technical Lead** | Senior developer or SRE | Leads the technical investigation. Directs debugging. |
| **Communications Lead** | Support lead or DM | Manages internal and external communication. |
| **Scribe** | Any team member | Documents timeline, actions, decisions in real-time. |

### War Room Rules

1. **One conversation at a time.** The IC controls the floor.
2. **Status updates every 15 minutes.** The IC broadcasts: current status, next action, ETA.
3. **No blame.** Focus on "what happened" and "what to do next," not "whose fault."
4. **Decisions are logged.** Every decision with its rationale is recorded by the scribe.
5. **People not needed are excused.** A war room with 15 people is a performance, not a response.

::: info The Incident Commander Is Not the Smartest Person in the Room
The IC's job is coordination, not debugging. The best IC is someone who can maintain calm, enforce process, track multiple workstreams, and communicate clearly — even if they are not the deepest technical expert.
:::

---

## Communication Templates

### P0/P1 — Internal Notification (Slack)

```
🔴 INCIDENT — P[0/1] — [Service Name]

Impact:     [Description of user-facing impact]
Detection:  [How it was detected — alert/customer report/internal]
Status:     [Investigating / Mitigating / Resolved]
War Room:   [Link to video call]
Channel:    #incident-[date]-[service]
IC:         [Name]

Next update in 15 minutes.
```

### P0/P1 — Customer Communication (Status Page)

```
[Service Name] — Service Disruption

We are aware of an issue affecting [description of impact].
Our team is actively investigating and working to restore service.

Impact:     [What users are experiencing]
Started:    [Time UTC]
Status:     [Investigating / Identified / Monitoring / Resolved]

Next update: [Time UTC]
```

### P2 — Internal Notification (Slack)

```
🟡 INCIDENT — P2 — [Service Name]

Impact:     [Description — include workaround]
Workaround: [Steps users can take]
Owner:      [Name of investigating engineer]
ETA:        [Expected resolution time or "investigating"]

Updates will be posted in this thread.
```

### Resolution Communication

```
✅ RESOLVED — [Service Name]

Duration:   [Start time] to [End time] ([total minutes])
Impact:     [What users experienced]
Cause:      [Brief root cause]
Resolution: [What was done to fix it]

Post-mortem will be published within 48 hours.
```

---

## Worked Example: The JWT Outage

### Timeline

| Time (UTC) | Event |
|-----------|-------|
| 14:00 | APIM policy change deployed directly to production (skipped staging) |
| 14:02 | First 403 errors appear in access logs |
| 14:05 | Customer support receives first complaint |
| 14:08 | Support escalates to engineering: "All API calls returning 403" |
| 14:12 | On-call engineer acknowledges. Severity set to P0. |
| 14:13 | War room opened. IC: Delivery Manager. |
| 14:15 | Triage: "What changed?" → Deployment log shows APIM policy update at 14:00 |
| 14:18 | Technical lead confirms: new policy rejects all JWTs due to incorrect audience claim validation |
| 14:22 | Decision: rollback the APIM policy to the previous version |
| 14:25 | Rollback initiated |
| 14:38 | Rollback complete. First successful API responses observed. |
| 14:41 | Error rate drops below 1%. Monitoring confirms recovery. |
| 14:44 | Incident resolved. Status page updated. Customer communication sent. |
| 14:44 | Total duration: **44 minutes**. 100% of API requests failed during this window. |

### What Went Wrong

| Failure | DoD Item That Would Have Prevented It |
|---------|--------------------------------------|
| Policy deployed directly to production | Release DoD #2: Smoke suite must pass in staging |
| No alert fired for 15 minutes | Story DoD #7: Observability — alert thresholds confirmed |
| No rollback plan documented | Release DoD #4: Rollback plan documented |
| Audience claim validation was wrong | Story DoD #2: Unit tests for the policy change |

### What Went Right

- Support escalated quickly (8 minutes from first complaint to engineering)
- Once in the war room, the team identified the cause in 6 minutes
- Rollback decision was made in 4 minutes (no analysis paralysis)
- Customer communication was sent within minutes of resolution

---

## Escalation Flow

### Who to Call

```
Alert fires
  └── On-call engineer (primary)
        ├── Resolves → Done
        └── Cannot resolve in 15 min (P0) or 30 min (P1)
              └── On-call engineer (secondary / backup)
                    ├── Resolves → Done
                    └── Cannot resolve
                          └── Tech Lead + Delivery Manager
                                ├── Tech Lead leads investigation
                                └── DM coordinates communication
                                      └── If cross-team dependency
                                            └── Programme-level escalation
```

### Escalation Response Time SLAs

| Severity | Primary On-Call | Secondary Escalation | Management Escalation |
|----------|----------------|---------------------|-----------------------|
| P0 | 5 min | 15 min | 30 min |
| P1 | 15 min | 45 min | 2 hours |
| P2 | 1 hour | 4 hours | Next business day |
| P3 | Next business day | — | — |

---

## On-Call Rotation Principles

| Principle | Detail |
|-----------|--------|
| **Minimum 2 people per rotation** | No single point of failure. If the primary is unavailable, the secondary is paged. |
| **Maximum 1 week on-call** | Longer rotations lead to fatigue and burnout. |
| **Handoff includes context** | Outgoing on-call briefs incoming on active issues, noisy alerts, and recent deployments. |
| **Compensated fairly** | On-call time is compensated — either financially or with time off. |
| **Equipped with runbooks** | Every service the on-call engineer is responsible for has a runbook. No "figure it out" responses. |
| **Post-incident recovery** | An engineer who handles a P0 at 3 AM is not expected at standup at 9 AM. |

::: tip On-Call Is Not Punishment
If on-call feels like punishment, the system is broken — either alerts are too noisy, runbooks are missing, or the rotation is unfair. Healthy on-call is boring: most shifts pass without a page, and when a page comes, the runbook tells you exactly what to do.
:::

---

## Incident Metrics to Track

| Metric | Definition | Target |
|--------|-----------|--------|
| **MTTD** (Mean Time to Detect) | Time from incident start to first alert | < 2 min (P0/P1) |
| **MTTA** (Mean Time to Acknowledge) | Time from alert to engineer acknowledgment | < 5 min (P0) |
| **MTTR** (Mean Time to Resolve) | Time from detection to full resolution | < 30 min (P0), < 2h (P1) |
| **Incidents per sprint** | Total incidents by severity | Trending down quarter-over-quarter |
| **Post-mortem completion rate** | % of P0/P1 incidents with a completed post-mortem within 48h | 100% |
| **Follow-up action completion** | % of post-mortem action items completed within their target sprint | > 90% |
