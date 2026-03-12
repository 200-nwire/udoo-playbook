# How to Write a Story Worth Building

## The moment this chapter is for

It's Tuesday afternoon. You have four stories to write before Thursday's grooming session. You open Jira and start typing. The first one comes out in six minutes. It says: "As a user, I want to see my account balance so that I know how much I've spent."

You move to the next one.

On Thursday, the developer reads that story and starts building. On Friday, they show you what they built. The number is there. The currency symbol is missing. The negative balance case shows "-100" instead of a red indicator. The zero case says "$0.00" instead of "No charges yet." The loading state is a blank white space.

None of this is wrong, exactly. It's just not what you meant. And now it's Friday, and the sprint ends Monday.

If this has happened to you — more than once, on stories you thought were clear — this chapter is for you.

## The direct answer

A story worth building answers four questions before the developer picks it up:

**Who** is doing this, **in what situation**, trying to accomplish **what**, and **how will we know** the implementation is correct.

Not as a template to fill. As a test to pass. If a developer can read your story and make zero assumptions about the intended behavior, the story is ready. If they have to guess about one thing, it isn't.

## Why this works

A story is not a description of a feature. It is a transfer of context.

By the time you write the story, you have been thinking about this problem for hours or days. You've talked to users. You've looked at the data. You understand the edge cases. You know why the zero state matters, why the negative case needs to be visually distinct, why the loading state can't be a blank space because some users have slow connections and think the page broke.

None of that is in your six-minute ticket.

The developer has six stories in front of them. They will spend three minutes reading yours before they start building. The question is not whether they're good enough to figure out what you meant — they are. The question is whether the assumptions they make will match yours.

They usually won't. Not because of failure. Because of distance.

A well-written story closes that distance before it costs anything.

## Step by step

### 1. Start with the persona, not the role

Don't write "as a user." Write "as a clinic manager who handles scheduling for a multi-vet practice." The developer needs to know who this person is, because who they are determines what matters. A clinic manager scheduling for multiple vets has different needs than a solo practitioner. The role is generic. The persona is specific. Specific generates the right questions during implementation.

### 2. Name the situation, not just the goal

"When Dina opens the dashboard at 7am before the first patient arrives, she needs to see at a glance whether any appointments have been added or changed overnight."

That sentence contains information that changes implementation decisions. At 7am, she's moving fast. *At a glance* means density matters. *Changed overnight* means freshness indicators matter. None of that is in "as a user, I want to see my appointments."

### 3. Write the acceptance criteria as scenarios, not as requirements

The difference:

**Requirement:** Balance displays correctly.

**Scenario:** Given the user has a positive balance of $42.50, the dashboard shows "$42.50" in black. Given the balance is negative, it shows the amount in red with a minus sign. Given the balance is zero, it shows "No charges yet" — not "$0.00." Given the balance hasn't loaded, it shows a skeleton loader, not a blank space.

Scenarios are executable. Requirements are interpretable. Interpretable stories produce surprises on Friday.

### 4. Name the edge cases explicitly

Every story has two or three states that aren't the happy path. Name them in the story, not in the PR review. Loading states. Empty states. Error states. Maximum values. Minimum values. The case where the user does the unexpected thing. If you can't name them, you don't know the story well enough yet.

### 5. Add a link, not a summary

If there's a design, link to the specific frame — not the Figma file. If there's a related backend ticket, link it. If there's a prior decision that constrains this story, link to where that decision was made. Don't summarize. Links age better than summaries, and they give the developer the full context rather than your compressed version of it.

## Common mistakes

**Writing stories to close planning.** The most common reason stories are underdefined is that they were written to fill the sprint board, not to enable development. If you don't have time to write it well, you don't have time to build it right. A thirty-minute story that takes three days of rework costs more than a ninety-minute story that ships clean.

**Confusing familiarity with clarity.** You've been thinking about this feature for two weeks. It's obvious to you. That's exactly the problem. The developer has been thinking about something else. What's obvious to you is invisible to them. Read your story as if you've never heard of the feature. If you still understand it, it might be ready.

**Writing the solution, not the need.** "Add a red border to the balance field when negative" is a solution. "Negative balances must be visually distinct and immediately noticeable" is a need. Write the need. The developer and the designer are better positioned than you to choose the solution. When you write the solution, you bypass their judgment. Sometimes you're right. Often you're constraining them in ways that create unnecessary work.

**Leaving the edge cases for standup.** Edge cases discovered at standup cost a half-day. Edge cases discovered in PR review cost a day. Edge cases discovered in QA cost two days. Edge cases discovered in production cost a week and a reputation. The cost of discovering an edge case rises steeply the later it surfaces. Write them in the story, when you're already thinking about the problem, when changing the answer is free.

## Worked example

Here is the same story, written badly and then written well.

**Bad:**

> As a user, I want to see my payment history so that I can track my spending.

**Good:**

> **Who:** Yael is a small business owner who uses the platform to pay for multiple services. She reconciles her accounts monthly and needs to match platform charges to her accounting software.
>
> **Situation:** At the end of the month, Yael opens the payment history page to download or review charges before closing her books.
>
> **Acceptance criteria:**
> - The page shows all transactions from the last 90 days by default, sorted by date descending.
> - Each row shows: date, description, amount, status (paid / pending / failed).
> - Failed transactions display in red. Pending in grey. Paid in default text color.
> - Yael can filter by date range. The range picker defaults to current month.
> - If there are no transactions in the selected range, the page shows: "No transactions in this period" — not a blank page.
> - The page is exportable as CSV. The export uses the same date range as the current filter.
>
> **Edge cases:**
> - Yael has 847 transactions. Pagination kicks in at 50 per page.
> - A transaction description can be up to 120 characters. The row truncates at 80 with a tooltip on hover.
> - If the export fails, show an error toast. Don't silently fail.
>
> **Design:** [link to Figma frame]
> **Related:** [link to backend ticket for transaction API]

The second story takes longer to write. It takes less time to build correctly. The PR is cleaner. QA finds nothing the developer didn't already account for. The feature ships on the day it was expected to ship.

That's the trade.

## When this breaks down

A well-written story cannot compensate for a poorly-understood problem. If you don't know what Yael actually needs — if you haven't talked to her, or someone like her, or read the support tickets about payment confusion — then writing the story carefully will produce a beautifully-specified wrong thing.

The story is the last step of understanding, not a substitute for it. If you find yourself unable to write the acceptance criteria because you don't know what "correct" looks like, stop. The story isn't ready to be written. Go back to the user, or the data, or the discovery session that should have happened before this sprint.

A story you can't write well is a discovery problem wearing a writing problem's clothes.

---

**→** [The Agreement: Definition of Ready](/upstream/definition-of-ready) — what a story must contain before it enters development

**→** [The Agreement: The Chain](/guide/the-chain) — why the cost of vagueness compounds forward

**→** [The Craft of War: Grooming Session](/upstream/grooming-session) — how to review stories before they hit the sprint

**→** [The Craft of War: Gherkin & BDD Patterns](/downstream/gherkin) — deeper treatment of scenario patterns
