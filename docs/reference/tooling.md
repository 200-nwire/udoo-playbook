# Tooling Conventions

| Tool | What lives here | Rules |
|------|----------------|-------|
| **Confluence** | Initiatives, Features, Architecture docs, Runbooks, Post-mortems | Every Initiative and Feature has its own page. Link both ways with Jira Epics. Archive (do not delete) superseded pages. |
| **Jira** | Epics, Stories, Subtasks, Bugs, CS Feedback | No orphan Epics. Every Story links to its Confluence Feature page. Labels follow the taxonomy exactly. |
| **Whiteboards** | User Journey Maps, Architecture Options, Slice Plans | Embed or link from both Confluence page and Jira Epic. Always name and date the board. |
| **AssertThat / Gherkin** | Executable test scenarios | Link every scenario to its Jira Story. Tag per standard. Run in CI. Coverage % reported in release check. |
| **Git / CI-CD** | Code, pipelines, deployment artefacts | Branch from main, merge back to main, tag on release. Branch naming: `feature/<story-id>-desc`, `bugfix/<bug-id>-desc`, `hotfix/<incident-id>-desc`. No direct commits to main. CI must be green before merge. |
| **Monitoring** | Alerts, dashboards, SLO tracking | Every service has a dashboard. Every alert has a runbook link. SLO dashboards reviewed weekly. |

## Linking Conventions

**Confluence → Jira:** Every Initiative/Feature page links to its Epic(s) as an inline Jira card.  
**Jira → Confluence:** Every Epic and Story has the Feature page URL in the "Feature link" field.  
**Both ways. Always.**

## Branch Naming

```
feat/PROJ-123-add-negative-balance-display
fix/PROJ-456-wallet-card-zero-clamp
hotfix/INC-2025-137-jwt-policy-revert
```
