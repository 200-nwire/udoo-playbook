# Runbook Template

A runbook is the first thing an on-call engineer opens at 2am when an alert fires. It must be clear, fast, and correct. It is not a design document. It is a **tactical guide**.

**Every production service must have a runbook before its first deployment.** No runbook = no deployment. This is a hard rule.

## Template

```markdown
# Runbook: [Service Name]

**Last updated:** YYYY-MM-DD  
**Owner:** @team-name  
**On-call contact:** @on-call-engineer (rotate weekly)  
**Related Jira Epic:** [link]  
**Confluence page:** [link]

---

## 1. Service Overview

**What does this service do?**  
[1–2 sentences. Plain language. What user action does this power?]

**Who is affected if this goes down?**  
[Which user segments? What is the business impact per hour of outage?]

**Critical dependencies:**
| Dependency | Type | What breaks without it |
|-----------|------|------------------------|
| Auth service | Internal API | All users cannot authenticate |
| Stripe | External payment | Payment submission fails |
| S3 | Storage | File upload/download unavailable |

---

## 2. Architecture Overview

[Link to architecture diagram or embed a simple ASCII diagram]

```
User → CDN → API Gateway → [This Service] → PostgreSQL
                                          → Redis (cache)
                                          → Auth Service
```

---

## 3. Health Checks

| Endpoint | Expected response | Check frequency |
|----------|-----------------|-----------------|
| `GET /health` | `200 { "status": "ok" }` | Every 1 min |
| `GET /ready` | `200 { "ready": true }` | Per deploy |

**Dashboard link:** [Datadog / Grafana / CloudWatch link]

---

## 4. Common Alerts & Response Steps

### Alert: High Error Rate (> 1% 5xx)

**What it means:** More than 1% of requests are returning server errors.

**Step 1:** Check the error dashboard → filter by `service=[this-service]`  
**Step 2:** Look for the most common error message in the last 15 minutes  
**Step 3:** If errors are `DB connection timeout` → see [Database section]  
**Step 4:** If errors are `External service unavailable` → see [Dependencies section]  
**Step 5:** If unclear → escalate to Tech Lead and open incident ticket

### Alert: p95 Latency > 500ms

**What it means:** 1 in 20 requests is taking longer than 500ms.

**Step 1:** Check the latency histogram for which endpoints are slow  
**Step 2:** Check if a recent deployment coincides with the latency spike  
**Step 3:** Check database slow query log  
**Step 4:** If no obvious cause and latency is climbing → consider rollback

### Alert: Service Unavailable (healthcheck failing)

**Step 1:** Check pod/container status in the deployment console  
**Step 2:** Check recent deployment history — was there a deploy in the last 30 min?  
**Step 3:** If yes → rollback to previous version (see Rollback section)  
**Step 4:** If no recent deploy → check infrastructure health (see Dependencies)

---

## 5. Rollback Procedure

```bash
# 1. Identify the previous stable version
kubectl rollout history deployment/[service-name]

# 2. Roll back to the previous version
kubectl rollout undo deployment/[service-name]

# 3. Monitor rollout
kubectl rollout status deployment/[service-name]

# 4. Verify health check
curl https://[service-url]/health
```

**Expected rollback time:** 3–5 minutes  
**Data migration considerations:** [List any schema changes that may complicate rollback]

---

## 6. Escalation Contacts

| Who | When to contact | How |
|-----|----------------|-----|
| @tech-lead-name | P1+ incidents; unclear root cause | Slack DM + phone |
| @delivery-manager | SLA breach risk; customer impact > 30 min | Slack DM |
| @cto-name | P0 incidents; data loss; security | Phone call — do not wait |

---

## 7. Known Issues & Ongoing Degradations

| Issue | Status | Impact | Mitigation |
|-------|--------|--------|-----------|
| Memory leak under high load | Investigating | Restarts every ~12h | Auto-restart configured |
| [None currently] | — | — | — |

---

## 8. Changelog

| Date | Change | Author |
|------|--------|--------|
| YYYY-MM-DD | Initial runbook created | @name |
| YYYY-MM-DD | Added DB alert response | @name |
```

## Runbook Review Cadence

Runbooks are reviewed:
- **After every incident** — add the new alert and its resolution steps
- **After every significant deployment** — update the architecture and known issues
- **Quarterly** — full review with the on-call team to confirm accuracy
