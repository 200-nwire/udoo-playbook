---
pageClass: field-guide-page
---

# Code Review as Craft

<span class="part-label">Part 4 — Build Craft</span>

::: tip When this chapter is for
Reviews are either rubber stamps or battlegrounds. PRs sit open for days. Nobody says anything, or everybody argues about style while missing that the feature solves the wrong problem.
:::

## The Direct Answer

- **Review in priority order:** (1) Does this solve the right problem? (2) Will this break in production? (3) Is the approach sound? (4) Is the code clear? (5) Style and convention. Most review comments are at level 5. Most review value is at levels 1 and 2.
- **A rubber-stamp review is worse than no review.** It gives the team the illusion of a safety net. Nobody actually looked. The bug ships with a green checkmark next to it.
- **If a PR sits unreviewed for more than one day, you have a flow problem, not a discipline problem.** Fix it structurally: WIP limits, dedicated review time, pairing.
- **Self-review before pushing.** Five minutes. Read your own diff as if someone else wrote it. This prevents 80% of review comments and is the single highest-leverage habit in this chapter.
- **The most important review is the one that says: "This code is good. The direction is wrong."** That is not a code review. That is an architecture review wearing a PR's clothes. Recognize it and escalate it.

## Why This Works

Code review has two purposes, and teams that struggle usually treat it as though it has one. The visible purpose is quality: catching bugs, enforcing patterns, improving clarity. The invisible purpose is shared understanding: after a review, two people understand the code instead of one. The team's bus factor on that module goes from one to two. That is the real return on the investment.

When Oren's PR sat unreviewed for four days, the board was technically clean. Lior had one thing in progress, Oren had one thing in review, WIP limits were respected. The metric was clean. The reality was that both of them were blocked and neither was finishing anything. This is the 4-day PR problem, and it reveals that your WIP policy counts cards, not flow. A card in review is not "done by the author" — it is "in progress by the team." Until someone reviews it, it is inventory, not progress.

The priority order matters because attention is finite. A reviewer who spends twenty minutes arguing about variable names has no energy left to ask whether the notification system should exist as designed. Oren built two thousand lines of good, tested, well-structured code that solved the wrong problem. No amount of style review would have caught that. But a reviewer who starts at level 1 — "Does this solve the right problem?" — reads Oren's PR description, thinks about Dina, and says: "Wait. She is never in a position to receive notifications."

Feedback language shapes whether review feels like collaboration or judgment. "Have you considered a pull model instead of push?" opens a conversation. "This is wrong" closes one. The distinction is not politeness — it is epistemic. The reviewer might be wrong. The question form acknowledges that. The declaration form does not. Oren knew his architecture was wrong before Lior reviewed it. He needed a conversation, not a verdict.

## Step by Step

### Before you push (the 5-minute self-review)

1. **Run the diff yourself.** Read every changed file as if you are seeing it for the first time.
2. **Check for accidental includes.** Console logs, debug flags, commented-out code, hardcoded values. Remove them.
3. **Read your own PR description.** Does it explain what changed, why, what to look at first, and what you considered and rejected? If it says "Notification system — initial implementation" and nothing else, rewrite it.
4. **Ask yourself level 1:** "Does this solve the right problem?" If you feel a tug of doubt — the feeling Oren had since Monday — write it down. Put it in the PR description. Do not wait until you know what "right" looks like.

### Writing a PR description that gets reviewed fast

5. **What changed.** One paragraph. The functional difference between before and after.
6. **Why.** Link to the story or brief. One sentence on the motivation.
7. **What to look at first.** Point the reviewer to the core change — the file or function where the real decision lives. Everything else is scaffolding.
8. **What was considered and rejected.** If you chose approach A over approach B, say so. This saves the reviewer from suggesting B and saves you from explaining why not.
9. **What you are unsure about.** If there is a section you are not confident in, flag it. Reviewers prioritize flagged areas.

### Reviewing someone else's PR

10. **Start at level 1.** Read the PR description. Read the linked story. Ask: does this solve the right problem? If you cannot answer this question, the PR description is insufficient — request it before reviewing code.
11. **Move to level 2.** Scan for production risks: unhandled errors, missing validation, race conditions, data migration gaps. These are the comments that prevent incidents.
12. **Level 3: approach.** Is the architecture sound? Would you build it this way? If not, is your way actually better, or just different? Only comment if you can articulate why your approach is better for this specific situation.
13. **Level 4: clarity.** Are there functions you cannot understand without asking the author? Name them. Suggest alternatives. "I had to read this three times — could we extract the filter logic into a named function?" is actionable.
14. **Level 5: style.** If the team has a linter, let the linter handle it. If there is no linter, this is a tooling problem, not a review problem.

### When to approve, request changes, or block

15. **Approve** when you would be comfortable being paged at 3am about this code. You understand it. You believe it works. You have no concerns at levels 1-3.
16. **Request changes** when you have specific, actionable feedback that would make the code better. Every requested change should include what to do, not just what is wrong.
17. **Block** when you believe merging would cause harm — a production risk, a direction error, a security concern. Blocking is a commitment: you are saying "I will re-review promptly after changes." Do not block and disappear.

### The architecture review (when a PR reveals wrong direction)

18. **Recognize it.** The code is good. The tests pass. The implementation is clean. But something feels off at level 1. The PR solves a problem the user does not have, or solves it in a way that creates a bigger problem.
19. **Do not try to fix it in review comments.** This is not a "request changes" situation. This is a conversation. Say: "I want to talk about this before we decide on next steps. Can we call?"
20. **Review to understand, not to merge.** Lior reviewed Oren's PR not to merge it but to understand what they had and what carried forward. Most of Oren's code was reusable. The direction was wrong. Both things were true.

## Common Mistakes

**Reviewing at level 5 and calling it done.** You catch the inconsistent naming. You suggest a more idiomatic approach to the loop. You approve. The code ships. It breaks in production because nobody checked the error handling path. Style review feels productive because it is easy. Safety review is harder and more valuable.

**The 4-day PR.** Oren's PR sat open while both developers were technically within WIP limits. "The metric was clean. The reality was that both of them were blocked." If PRs routinely sit for more than a day, your flow is broken. Possible fixes: pair on complex PRs instead of async review, schedule a daily 30-minute review block, enforce "review before starting new work," reduce PR size so reviews take 15 minutes not 90.

**Rubber-stamping under pressure.** Sprint ends Friday. The PR is big. You skim it, approve, move on. You have just created a liability with a green checkmark. If you do not have time to review properly, say so: "I can not give this a real review until tomorrow. Is that okay, or should someone else take it?" Honesty about capacity is a review practice.

**Blocking without commitment.** You block a PR with a long list of concerns. The author makes changes. You do not re-review for three days. Blocking is a social contract: "I am taking responsibility for re-reviewing promptly." If you cannot commit to that, request changes instead and trust the author to address them.

**Confusing "I would have done it differently" with "this is wrong."** If the code works, is clear, and solves the right problem, but you would have structured it differently — that is a preference, not a defect. Mention it as a thought, not a request. "Interesting approach — I might have used X, but this works well" builds shared understanding without creating churn.

## From the Novel

::: details Chapter 10 — Technical Debt Has a Half-Life
Oren's PR — fourteen files, two thousand and forty-one lines, "Notification system — initial implementation" — sits unreviewed for four days. Lior comments "Will review properly tomorrow." Tomorrow arrives twice and departs without the review.

**The metric was clean.** Lior has one item in progress. Oren has one in review. WIP limits are respected. "The metric was clean. The reality was that both of them were blocked and neither of them was finishing anything and the sprint would end on Friday with the board in this exact state." This is the gap between measuring activity and measuring flow. A card in review is not progress — it is inventory. If your board looks healthy but nothing is shipping, check how long PRs sit in review. That number is your actual cycle time, and the board is hiding it.

**"The notification system is technically complete and functionally wrong."** Oren writes this in a document after reading Lior's notes about Dina's Tuesday. He has built good code — solid queue implementation, clean retry logic, normalized schema, documented endpoints. He knows it is good code. He also knows it solves the wrong problem. "We built a push system for a person who needs a pull system. We assumed Dina would be waiting for information. She is never waiting." This is what a level 1 review catches that a level 5 review never will. The code quality is fine. The direction is wrong. And refactoring the code will not fix the direction.

The craft: Oren recognized the direction error himself but sat on it since Monday, "because it means the sprint is wrong. The PR is wrong. The velocity is wrong. And I didn't want to say that without knowing what right looked like." Lior's response: "Next time you see this in the first week, say it in the first week. Even if you don't know what right looks like yet." The lesson is not "speak up sooner" as an abstract virtue. It is that partial information shared early is more valuable than complete analysis shared late. Oren waited for certainty. The team would have benefited from his doubt.

**"I'll review it today. Not to merge it. To understand what we have and what carries forward."** Lior shifts the purpose of the review. He is not gatekeeping — approving or rejecting. He is building shared understanding: which parts of Oren's work survive the direction change, which parts do not. Most of it carries forward. The database schema works. Sixty percent of the service layer. But the delivery model — the core concept of pushing notifications — that goes. The review becomes a salvage operation, not a quality gate. This is what reviewing at level 1 looks like in practice: you read the code to understand the team's position, not to judge the author's skill.

**"That's on me."** Four words. No hedge. No explanation. No "I was busy" or "I should have but..." Lior acknowledges that he should have reviewed the PR four days ago. Oren does not make anything of it. But the weight of it sits: "the specific weight of a direct acknowledgment, no hedging, no explanation." Ownership in review culture is not about blame. It is about reliability. When you say you will review tomorrow, review tomorrow. When you do not, say so plainly. The team's trust in the review process depends on people doing what they said they would do. Four words, no hedge — that is what ownership sounds like.
:::

## When This Breaks Down

**The team is too small for formal review.** Two developers, moving fast, shipping daily. Full PR review feels like ceremony. Adapt: pair on complex changes instead of reviewing after. Do synchronous 10-minute walkthroughs instead of async PR comments. The principle — two people understand every change — still holds. The mechanism changes.

**PRs are too large to review meaningfully.** If a PR has two thousand lines, nobody will review it well. The fix is upstream: smaller stories, feature flags that let you merge incomplete work safely, a team agreement that PRs over 400 lines get split or get a pairing session instead of async review. Do not ask reviewers to be heroic. Make the work reviewable.

**Review becomes a power dynamic.** One senior developer blocks PRs routinely with extensive feedback. Junior developers start avoiding reviews or shipping only "safe" code. Review is a teaching tool, not a gatekeeping tool. If juniors dread reviews, the senior's feedback style needs to change — from "this is wrong" to "here is what I'd consider and why." Lior's "That's on me" models the vulnerability that makes review culture safe.

---

*See also: [Definition of Done](/downstream/definition-of-done) | [Developer Workflow E2E](/downstream/dev-workflow-e2e) | [Story Workflow](/downstream/story-workflow) | [Chapter 10 — Technical Debt Has a Half-Life](/novel/chapter-10)*
