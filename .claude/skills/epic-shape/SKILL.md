---
name: epic-shape
description: Shape a big or foggy piece of work into one epic file, by interviewing the user. Use when the user starts an epic, a big feature, or says the way forward is not clear.
disable-model-invocation: true
---

# Shape an epic

The goal is one file that holds everything known about the epic. No code is written here.

## File

Use `private/epics/<slug>.md`. If the user names an existing file, work in that file. If `private/` does not exist in this project, use `docs/epics/<slug>.md` and warn that it is tracked.

```markdown
# Epic: <name>

Status: shaping

## Destination
What is true when this is done. One or two lines.

## Context
Why now, what exists today, and which code and docs matter.

## Decisions
- <decision>: <why>. Not picked: <other options>.

## Open questions
- <question that blocks slicing>

## Fog
In scope, but too unclear to decide yet.

## Out of scope
- <work ruled out, and why>

## Design
The design as far as it is decided.

## Slices
Filled in by epic-slice.

## Log
```

## Process

1. Read the code and docs the epic touches. Look up facts yourself.
2. Name the destination first, and confirm it with the user.
3. Use the grilling skill to walk the open decisions one at a time, each with your recommended answer. Write each answer into the file as soon as it is given.
4. If the work is too large to hold in one session, use the map ideas in [WAYFINDER.md](WAYFINDER.md): the destination, decisions so far, fog and out of scope. Keep them as sections of this one file, not as issues, so skip its parts about creating map issues.
5. Record a hard-to-reverse technical decision as an ADR in `docs/adr/`, and add new code terms to `docs/glossary.md`. Never name competitors or personal data in tracked files.
6. Stop when Open questions is empty. Set `Status: ready to slice`, and tell the user to run `/epic-slice`.
