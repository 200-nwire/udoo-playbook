# Contributing to the UDOO Playbook

Thank you for your interest in improving this framework. Contributions are welcome from practitioners, teams, and individuals who have lived experience with the problems this framework addresses.

## Ways to Contribute

### Fix a gap or error
Found something unclear, inaccurate, or missing? Open an issue with:
- The specific page or section
- What it currently says
- What you think it should say, and why

### Add a real example
The framework is most useful when grounded in real experience. If you have a real incident post-mortem, initiative brief, or story mapping example you're willing to share (with sensitive details removed), please contribute it to `docs/examples/`.

### Improve a section
Some sections are stronger than others. See the issues list for areas marked `help-wanted`. Focus contributions on:
- Making explanations clearer
- Adding concrete examples where they're missing
- Fixing gaps identified in the analysis

### Translate to another language
If you want to localise the playbook for a non-English-speaking team, open an issue first to discuss the approach.

## How to Contribute

1. **Fork** the repository
2. **Create a branch** from `main` with a descriptive name (`fix/rca-template-clarity`, `add/incident-example-api-timeout`)
3. **Make your changes** — see the writing guidelines below
4. **Test locally** with `pnpm install && pnpm run dev`
5. **Open a pull request** with a clear description of what you changed and why

## Writing Guidelines

The playbook has a consistent voice. Please match it:

- **Human, not corporate.** Write to a real person. Use "you". Use named fictional users (Maya, not "the user").
- **Specific, not vague.** Real examples beat abstract principles. "140 support tickets per month" beats "many users complained."
- **Problem-first.** Explain the pain the guidance solves before explaining the guidance.
- **Short.** Each sentence should earn its place. If you can cut it without losing meaning, cut it.
- **Opinionated.** The playbook has a point of view. If you disagree with a rule, make the case in an issue rather than silently watering it down.

## Local Development

```bash
# Requirements: Node.js 22, pnpm
pnpm install
pnpm run dev       # starts dev server at http://localhost:5173
pnpm run build     # production build
pnpm run preview   # preview production build
```

## What We Don't Accept

- Changes that dilute the framework into "it depends, choose your own adventure"
- Content that removes concrete examples and replaces them with abstractions
- Vendor promotion or tool-specific content (the framework is tool-agnostic)
- Changes to the core four-phase model (Upstream/Downstream/Onstream/Offstream) without substantial discussion

## Questions?

Open an issue. We read all of them.
