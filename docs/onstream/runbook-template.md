# On-Call Runbook Template

<span class="phase-badge onstream">🟠 Onstream</span>

## What Is a Runbook?

A runbook is the operational manual for a service. It contains everything an on-call engineer needs to understand, diagnose, and fix problems — without reading the source code at 3 AM. A runbook that requires "tribal knowledge" to use is not a runbook; it is a liability.

::: warning No Runbook = No Go-Live
A service without a runbook must not go to production. This is a Release DoD item. If the team cannot document how to operate a service, they do not understand it well enough to run it.
:::

---

## Runbook Template

Copy this template for every service your team operates. Fill in every section. If a section does not apply, write "N/A — [reason]" so reviewers know it was considered, not skipped.

---

### 1. Service Overview

| Field | Value |
|-------|-------|
| **Service name** | `journal-api` |
| **Description** | REST API for journal entry creation, retrieval, and management |
| **Owner** | Emma Chen (backup: Liam Patel) |
| **Team** | Living Wondrously — Backend |
| **Repository** | `github.com/livingwondrously/journal-api` |
| **Language / Framework** | Node.js / Express / TypeScript |
| **Deployment target** | Azure App Service (production), Azure App Service (staging) |
| **Documentation** | [Confluence: Journal API](https://confluence.internal/journal-api) |
| **Dashboard** | [Grafana: Journal API](https://grafana.internal/d/journal-api) |
| **Slack channel** | `#team-journal-backend` |
| **On-call schedule** | [PagerDuty: Journal API](https://pagerduty.com/schedules/journal-api) |

---

### 2. Architecture Diagram

Include or link a diagram showing:
- The service and its direct dependencies
- Data flow direction
- External integrations
- Infrastructure components (load balancer, database, cache, queue)

```
┌─────────┐     ┌──────────────┐     ┌──────────────┐
│  Client  │────▶│  API Gateway │────▶│  journal-api │
│  (App)   │     │  (APIM)      │     │  (App Svc)   │
└─────────┘     └──────────────┘     └──────┬───────┘
                                            │
                              ┌─────────────┼─────────────┐
                              ▼             ▼             ▼
                        ┌──────────┐  ┌──────────┐  ┌──────────┐
                        │ Postgres │  │  Redis   │  │  Blob    │
                        │ (DB)     │  │ (Cache)  │  │ Storage  │
                        └──────────┘  └──────────┘  └──────────┘
```

::: tip Keep the Diagram Updated
An outdated architecture diagram is worse than no diagram — it gives the on-call engineer false confidence. Update the diagram whenever a dependency is added, removed, or changed. Include the "last updated" date.
:::

---

### 3. Dependencies

List every service, database, and external system this service depends on. For each, document what happens when it is unavailable.

| Dependency | Type | What Happens If Down | Degradation Strategy |
|-----------|------|---------------------|---------------------|
| PostgreSQL (primary) | Database | Service cannot read/write entries | Return 503 with "Service temporarily unavailable" |
| Redis | Cache | Increased latency on reads (~200ms → ~800ms) | Bypass cache, serve from database directly |
| Azure Blob Storage | File storage | Image attachments fail to upload | Accept entry without images, queue upload for retry |
| APIM (API Gateway) | Gateway | All traffic blocked | No client-side mitigation. Escalate to platform team. |
| Prompt Service | Internal API | Prompt carousel shows cached prompts | Return last-known prompts from local cache (TTL: 24h) |
| Auth Service | Internal API | Authentication fails for all users | No service-side mitigation. Escalate to auth team. P0. |

---

### 4. Health Check Endpoints

| Endpoint | Method | Expected Response | What It Checks |
|----------|--------|-------------------|----------------|
| `/health` | GET | `200 { "status": "healthy" }` | Application is running and accepting requests |
| `/health/ready` | GET | `200 { "status": "ready" }` | Application is running AND all dependencies are reachable |
| `/health/live` | GET | `200 { "status": "live" }` | Process is alive (Kubernetes liveness probe) |

```bash
# Quick health check from the command line
curl -s https://journal-api.prod.internal/health/ready | jq .

# Expected output when healthy:
{
  "status": "ready",
  "checks": {
    "database": "up",
    "cache": "up",
    "storage": "up"
  },
  "version": "2.14.3",
  "uptime_seconds": 342891
}

# When a dependency is down:
{
  "status": "degraded",
  "checks": {
    "database": "up",
    "cache": "down",          ← This is the problem
    "storage": "up"
  },
  "version": "2.14.3",
  "uptime_seconds": 342891
}
```

---

### 5. Common Failure Modes and Remediation

For each known failure mode, document the symptoms, likely cause, and exact steps to remediate.

#### 5.1 High Error Rate (5xx > 1%)

**Symptoms:** Alert fires for elevated 5xx error rate. Dashboard shows red on error panel.

**Likely causes:**
1. Recent deployment introduced a bug
2. Database connection pool exhausted
3. Downstream dependency returning errors

**Remediation:**
```bash
# Step 1: Check if there was a recent deployment
az webapp deployment list --resource-group prod --name journal-api --query "[0].{time:receivedTime, status:status}" -o table

# Step 2: Check application logs for the error pattern
az webapp log tail --resource-group prod --name journal-api | head -100

# Step 3: If deployment-related, rollback
az webapp deployment slot swap --resource-group prod --name journal-api --slot staging --target-slot production

# Step 4: If database-related, check connection pool
curl -s https://journal-api.prod.internal/health/ready | jq .checks.database
```

#### 5.2 High Latency (p95 > 500ms)

**Symptoms:** Alert fires for elevated p95 latency. Users report slow page loads.

**Likely causes:**
1. Redis cache is down → all reads hit the database
2. Database is under heavy load (long-running queries)
3. Increased traffic beyond normal baseline

**Remediation:**
```bash
# Step 1: Check cache health
curl -s https://journal-api.prod.internal/health/ready | jq .checks.cache

# Step 2: If cache is down, check Redis status
az redis show --name journal-cache-prod --resource-group prod --query "provisioningState" -o tsv

# Step 3: If Redis needs restart
az redis force-reboot --name journal-cache-prod --resource-group prod --reboot-type PrimaryNode

# Step 4: If database is the bottleneck, check active queries
psql $DATABASE_URL -c "SELECT pid, now() - pg_stat_activity.query_start AS duration, query FROM pg_stat_activity WHERE state = 'active' ORDER BY duration DESC LIMIT 10;"
```

#### 5.3 Service Completely Unreachable

**Symptoms:** Health check returns no response. All requests time out.

**Likely causes:**
1. App Service instance crashed
2. APIM gateway routing misconfigured
3. DNS resolution failure

**Remediation:**
```bash
# Step 1: Check if the App Service is running
az webapp show --resource-group prod --name journal-api --query "state" -o tsv

# Step 2: If stopped, restart
az webapp restart --resource-group prod --name journal-api

# Step 3: If running but unreachable, check APIM
az apim api show --resource-group prod --service-name prod-apim --api-id journal-api --query "serviceUrl" -o tsv

# Step 4: Check DNS
nslookup journal-api.prod.internal
```

#### 5.4 Out of Memory (OOM)

**Symptoms:** Application restarts unexpectedly. Logs show OOM kill events.

**Likely causes:**
1. Memory leak in application code
2. Unusually large request payload
3. Too many concurrent connections

**Remediation:**
```bash
# Step 1: Check current memory usage
az webapp show --resource-group prod --name journal-api --query "usageState" -o tsv

# Step 2: Restart the service (immediate relief)
az webapp restart --resource-group prod --name journal-api

# Step 3: If recurring, scale up temporarily
az webapp update --resource-group prod --name journal-api --set siteConfig.numberOfWorkers=4

# Step 4: Log a bug ticket for the memory leak investigation
# Include: time of OOM, request volume, heap dump if available
```

---

### 6. Restart Procedures

| Environment | Command | Estimated Downtime |
|------------|---------|-------------------|
| Production | `az webapp restart --resource-group prod --name journal-api` | 30–60 seconds |
| Staging | `az webapp restart --resource-group staging --name journal-api-staging` | 30–60 seconds |

::: warning Restart Is Not a Fix
A restart clears transient state issues (memory leaks, deadlocks, corrupted caches). It does not fix the underlying problem. Every restart should be followed by an investigation. If the same service needs restarting more than twice in a week, file a P2 bug.
:::

---

### 7. Rollback Procedures

| Rollback Type | When to Use | Command | Time to Complete |
|--------------|-------------|---------|-----------------|
| **Deployment rollback** | Recent deploy caused the issue | `az webapp deployment slot swap --resource-group prod --name journal-api --slot staging --target-slot production` | 2–5 minutes |
| **Database rollback** | Migration caused data issues | Run reverse migration: `npx knex migrate:rollback --env production` | 5–15 minutes |
| **Feature flag rollback** | Specific feature is broken | Disable flag in LaunchDarkly: `journal-new-editor → OFF` | < 1 minute |
| **Configuration rollback** | Config change caused the issue | Revert in Azure App Configuration: restore previous version | 1–2 minutes |

::: details Rollback Decision Matrix
```
Is the issue caused by a code change?
  ├── Yes → Deployment rollback (slot swap)
  └── No → Is it caused by a data change?
              ├── Yes → Database migration rollback
              └── No → Is it caused by a config change?
                          ├── Yes → Configuration rollback
                          └── No → Is it caused by a specific feature?
                                      ├── Yes → Feature flag rollback
                                      └── No → Escalate to Tech Lead
```
:::

---

### 8. Scaling Procedures

| Dimension | Current | Scale-Up Command | Max Safe Value |
|-----------|---------|------------------|---------------|
| **Instances** | 2 | `az webapp update -g prod -n journal-api --set siteConfig.numberOfWorkers=4` | 8 |
| **App Service Plan** | S2 | `az appservice plan update -g prod -n journal-plan --sku P1V2` | P3V2 |
| **Database connections** | 50 | Update `DATABASE_POOL_SIZE` in App Configuration | 100 |
| **Redis connections** | 100 | Update `REDIS_MAX_CONNECTIONS` in App Configuration | 500 |

::: tip Scale Up, Then Investigate
When under load, scale up first to restore service, then investigate why the load exceeded capacity. Common causes: traffic spike, upstream retry storm, missing pagination, inefficient query.
:::

---

### 9. Contact List

| Role | Name | Slack | Phone | Availability |
|------|------|-------|-------|-------------|
| Service Owner | Emma Chen | @emma.chen | +44 7xxx xxx001 | Business hours |
| Backup Owner | Liam Patel | @liam.patel | +44 7xxx xxx002 | Business hours |
| On-Call (Primary) | Rotation | @oncall-journal | PagerDuty | 24/7 |
| Tech Lead | Sarah Kim | @sarah.kim | +44 7xxx xxx003 | Business hours + P0 |
| Delivery Manager | James Rivera | @james.rivera | +44 7xxx xxx004 | Business hours + P0/P1 |
| Platform Team | — | #platform-support | PagerDuty | 24/7 |
| Database Admin | — | #dba-support | PagerDuty | Business hours + P0 |

---

### 10. Escalation Path

```
On-call engineer (primary)
  │ Cannot resolve in 15 min (P0) / 30 min (P1)
  ▼
On-call engineer (secondary)
  │ Cannot resolve in 30 min (P0) / 1h (P1)
  ▼
Tech Lead + Service Owner
  │ Cross-team dependency or infrastructure issue
  ▼
Platform Team / DBA / Auth Team (as appropriate)
  │ Programme-level impact
  ▼
Delivery Manager → Programme Lead
```

---

## Runbook Readiness Checklist

Before a service goes live, the following must be in place. This checklist is part of the Release DoD.

| # | Check | Status |
|---|-------|--------|
| 1 | Service overview section is complete with owner, repo, dashboard links | ☐ |
| 2 | Architecture diagram is current and includes all dependencies | ☐ |
| 3 | All dependencies are listed with degradation strategies | ☐ |
| 4 | Health check endpoints are implemented and documented | ☐ |
| 5 | At least 3 common failure modes are documented with step-by-step remediation | ☐ |
| 6 | Restart procedure is documented and tested | ☐ |
| 7 | Rollback procedure is documented and tested (including database rollback) | ☐ |
| 8 | Scaling procedure is documented with safe limits | ☐ |
| 9 | Contact list includes service owner, backup, and on-call rotation | ☐ |
| 10 | Escalation path is documented and all parties are aware | ☐ |
| 11 | Alerts are configured with runbook links | ☐ |
| 12 | Dashboard is live with golden signals visible | ☐ |
| 13 | On-call team has been briefed on the service and walked through the runbook | ☐ |
| 14 | Runbook has been reviewed by someone who did NOT write the service | ☐ |

::: info The "Stranger Test"
A runbook passes the stranger test when an engineer who has never seen the service can follow the runbook to diagnose and mitigate a common failure mode — without asking the author for help. If the runbook fails the stranger test, it is incomplete.
:::

---

## Runbook Maintenance

A runbook is not a document you write once and forget. It is a living operational artifact.

| Trigger | Runbook Action |
|---------|---------------|
| New dependency added | Add to dependencies table with degradation strategy |
| New failure mode discovered (incident) | Add failure mode with remediation steps |
| Architecture change | Update the architecture diagram |
| Team member change | Update the contact list |
| Post-mortem action item | Add or update the relevant runbook section |
| Quarterly review | Review all sections for accuracy. Remove stale content. |

::: tip Link Post-Mortems to Runbook Updates
Every post-mortem should produce at least one runbook update. If the failure mode was not in the runbook, add it. If the remediation steps were wrong, fix them. The runbook is the team's operational memory.
:::
