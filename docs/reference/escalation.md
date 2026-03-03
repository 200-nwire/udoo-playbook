# Escalation Paths

Escalation is not failure — it is a safety mechanism. A team that escalates well is a team that protects its customers, its reputation, and its people from preventable damage.

::: tip The "No Surprises" Rule
Leadership should never learn about a problem from a customer. If a customer knows before your VP does, the escalation process has failed. Escalate early, escalate clearly, and escalate without guilt.
:::

---

## Escalation Philosophy

**Escalation is information flow, not blame assignment.** When you escalate, you are saying: "This problem has exceeded my ability to resolve it within the expected timeframe, and I am bringing in the right people to help."

Three principles govern escalation in the UDOO framework:

1. **Speed over perfection.** A 90%-accurate escalation message sent in 5 minutes is better than a 100%-accurate one sent in 30 minutes. You can update details later.
2. **Over-escalate, then stand down.** It is always cheaper to de-escalate a false alarm than to under-escalate a real incident. Nobody has ever been fired for escalating too early.
3. **Escalation is a skill, not a personality trait.** Teams must practice escalation. Include it in tabletop exercises and incident simulations.

---

## Escalation Matrix by Severity

| | **P0 — Critical** | **P1 — High** | **P2 — Medium** | **P3 — Low** |
|---|---|---|---|---|
| **Definition** | Service down or data loss affecting multiple customers | Major feature broken, workaround exists but is painful | Feature degraded, workaround is acceptable | Minor issue, cosmetic, or edge case |
| **Examples** | Auth service down, payment processing failure, data corruption | Search returns wrong results, export fails for large datasets | Slow page load (>5s), minor calculation error | Button misalignment, typo in UI, tooltip missing |
| **Notify** | CEO + VP Eng + VP Product + On-call | VP Eng + Engineering Manager + PM | Engineering Manager + PM | Team lead at next standup |
| **Time to notify** | **15 minutes** from detection | **1 hour** from detection | **4 hours** from detection | **Next standup** |
| **War room** | Open within **30 minutes** | Assemble within **2 hours** if not resolved | Not required | Not required |
| **Status updates** | Every **30 minutes** until resolved | Every **2 hours** until resolved | Daily until resolved | Sprint-level tracking |
| **Post-mortem** | Required within **24 hours** | Required within **48 hours** | Optional (recommended) | Not required |
| **Customer comms** | Proactive notification within **1 hour** | Proactive if >10 customers affected | Reactive (respond to tickets) | No customer comms |

::: warning P0 Protocol
A P0 is a "drop everything" event. The incident commander has authority to pull any engineer off any task. All meetings are cancelled for war room participants. The CEO is notified — not for approval, but for awareness. This is not optional.
:::

---

## Escalation Triggers

Escalation is not only for production incidents. These situations also require escalation:

### Blocked Work

| Trigger | Escalation Level | Action |
|---------|-----------------|--------|
| Story blocked for **>4 hours** | Team lead | Reassign, unblock, or escalate dependency |
| Story blocked for **>1 day** | Engineering Manager | Cross-team coordination, dependency resolution |
| Sprint at risk (>20% stories blocked) | VP Eng + PM | Re-scope sprint, stakeholder communication |

### Scope & Requirements

| Trigger | Escalation Level | Action |
|---------|-----------------|--------|
| Scope change requested mid-sprint | PM + Tech Lead | Evaluate impact, decide accept/defer/reject |
| Requirements conflict discovered | PM + stakeholders | Resolve conflict, update Initiative Brief if needed |
| Stakeholder requests bypass of gate | VP Product | Review request; gates are non-negotiable without VP approval |

### Dependencies & External

| Trigger | Escalation Level | Action |
|---------|-----------------|--------|
| Third-party API failure | Tech Lead + vendor contact | Activate fallback, contact vendor, communicate ETA |
| Infrastructure failure | SRE Lead + cloud provider | Failover procedure, provider support ticket |
| Security vulnerability discovered | VP Eng + Security Lead | SSDLC response protocol, assess blast radius |

### Customer Impact

| Trigger | Escalation Level | Action |
|---------|-----------------|--------|
| Single customer reports data loss | P0 protocol | Immediate investigation, customer communication |
| >10 tickets on same issue in 24h | PM + CS Lead | Bug classification, priority bump consideration |
| Key account at churn risk | VP CS + PM | Executive sponsor engagement, remediation plan |

---

## Communication Chain

### Who Calls Whom — In Order

For a **P0 incident**, the escalation chain is:

```
1. Engineer detects issue
   ↓
2. Engineer notifies On-Call Lead (Slack + phone)
   ↓
3. On-Call Lead confirms severity, becomes Incident Commander
   ↓
4. Incident Commander notifies (in parallel):
   → VP Engineering (phone call)
   → Engineering Manager (Slack + phone)
   → PM (Slack)
   → CS Lead (Slack — for customer comms prep)
   ↓
5. VP Engineering notifies CEO (Slack or phone)
   ↓
6. Incident Commander opens war room (Slack channel or Zoom)
   ↓
7. CS Lead prepares customer communication (draft within 30 min)
```

For a **P1 incident:**

```
1. Engineer detects issue
   ↓
2. Engineer notifies On-Call Lead (Slack)
   ↓
3. On-Call Lead confirms severity
   ↓
4. On-Call Lead notifies:
   → Engineering Manager (Slack)
   → VP Engineering (Slack — FYI only)
   → PM (Slack)
   ↓
5. Engineering Manager decides: assemble team or let On-Call handle
```

::: info Contact Methods by Urgency
- **P0:** Phone call first, then Slack. If no response in 5 minutes, call again. If no response in 10 minutes, call the next person up the chain.
- **P1:** Slack first, then phone if no response in 15 minutes.
- **P2/P3:** Slack only. Async is acceptable.
:::

---

## Escalation Templates

### Slack Message — Incident

Use this format in the `#incidents` channel:

```
🔴 P[0/1] INCIDENT — [Service Name]

What: [One-sentence description of the problem]
Impact: [Who is affected and how many]
Since: [Time detected, with timezone]
Status: [Investigating / Identified / Mitigating / Resolved]
Incident Commander: @[name]
War Room: [link to channel or Zoom]
Next Update: [time]
```

**Example:**

```
🔴 P0 INCIDENT — Auth Service

What: JWT validation failing for all users — login impossible
Impact: All users (~12,000 active) cannot log in
Since: 14:22 UTC
Status: Investigating
Incident Commander: @dana
War Room: #incident-2025-0422
Next Update: 14:52 UTC (30 min)
```

### Slack Message — Blocked Story

```
🟡 BLOCKED — [Story ID]: [Story Title]

Blocked by: [What is blocking — dependency, decision, environment, etc.]
Blocked since: [Date/time]
Impact: [What happens if this stays blocked — sprint risk, other stories affected]
Help needed: [Specific ask — who can unblock, what decision is needed]
```

### Email — Executive Escalation

Use this format when escalating to VP or C-level by email:

```
Subject: [P0/P1] [Service] — [One-line summary]

Current status: [Investigating / Mitigating / Resolved]
Customer impact: [Number of users/accounts affected, revenue impact if known]
Timeline:
  - [HH:MM] Issue detected
  - [HH:MM] Incident Commander assigned
  - [HH:MM] Root cause identified (if known)
  - [HH:MM] Mitigation in progress (if applicable)

Next steps: [What is being done right now]
ETA to resolution: [Best estimate, or "unknown — next update at HH:MM"]
Decision needed (if any): [Specific decision required from leadership]

Sent by: [Name], [Role]
```

### Phone Call Script — P0

When calling someone for a P0:

> "Hi, this is [name] from [team]. We have a P0 incident. [Service name] is [one-sentence problem]. [Number] of customers are affected. I need you to [join the war room / be aware / make a decision on X]. The war room is in [channel/Zoom link]. Can you join now?"

::: tip Keep it short
The call should be under 60 seconds. The goal is to get people into the war room, not to explain the full situation on the phone.
:::

---

## De-Escalation Protocol

De-escalation is as important as escalation. Lingering war rooms drain energy and create alert fatigue.

### When to Stand Down

- **Immediate resolution:** The issue is resolved and confirmed (monitoring shows recovery)
- **Workaround in place:** A stable workaround is deployed and customers are unblocked
- **Severity downgrade:** Investigation reveals the impact is lower than initially assessed

### How to Communicate Resolution

**Slack — Incident Resolved:**

```
🟢 RESOLVED — P[0/1] INCIDENT — [Service Name]

What happened: [One-sentence root cause]
Resolution: [What was done to fix it]
Duration: [Total incident duration]
Customer impact: [Final assessment]
Post-mortem: Scheduled for [date/time]
Action items: Will be tracked in post-mortem

War room closed. Thank you to everyone who responded.
```

**Email — Executive Update (Resolution):**

```
Subject: RESOLVED — [P0/P1] [Service] — [One-line summary]

The incident has been resolved.

Root cause: [Brief explanation]
Duration: [Start to resolution]
Customer impact: [Final count]
Post-mortem: Scheduled for [date/time]
Preventive actions: Will be defined in post-mortem

No further action needed at this time.
```

### After De-Escalation

- [ ] War room channel archived (not deleted — preserve for post-mortem)
- [ ] Status page updated (if applicable)
- [ ] Customer communication sent (resolution notice)
- [ ] Post-mortem scheduled within 48 hours (P0/P1)
- [ ] Incident ticket updated with timeline and resolution
- [ ] On-call engineer takes a break if incident lasted >2 hours

::: info Human care
After a stressful incident, check in on the people involved. Ask "how are you doing?" not just "what happened?" Burnout from incident response is cumulative. A 15-minute debrief immediately after resolution — separate from the formal post-mortem — helps the team decompress.
:::

---

## The "No Surprises" Rule

This rule is simple and absolute:

> **If a customer knows about a problem before your VP does, the escalation process has failed.**

This does not mean every bug is escalated to the VP. It means that any issue with customer-visible impact is communicated upward *before* customers start calling. The VP does not need to act — they need to not be surprised.

### How to implement it

1. **Monitoring catches it first.** Alerts should fire before customers notice. If customers report an issue before your monitoring does, add monitoring after the post-mortem.
2. **CS flags it immediately.** If a customer reports something before monitoring catches it, CS logs it and notifies the on-call team within 15 minutes.
3. **On-call assesses and escalates.** Even if the issue turns out to be minor, a quick "FYI — we're seeing X, impact appears limited, monitoring" message to the Engineering Manager prevents surprise.

::: warning The cost of surprise
When leadership learns about a problem from a customer, three things happen: (1) they lose confidence in the team's operational awareness, (2) they make decisions with incomplete information, and (3) the team spends cycles on damage control that could have been spent on resolution. All three are preventable with early escalation.
:::
