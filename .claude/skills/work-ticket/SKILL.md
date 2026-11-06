---
name: work-ticket
description: Build one GitHub issue locally through to a PR. Use when the user runs /work-ticket or asks to work on a ticket by its number.
disable-model-invocation: true
---

# Work on a ticket

Input: an issue number. Running this skill is the user's permission to commit, push, and open a PR for this ticket only.

1. Read the issue and its comments with `gh issue view <number> --comments`. If a `Blocked by #N` issue is still open, stop and say so.
2. Make sure the working tree is clean. If it is not, stop and ask. Create the branch from an up-to-date default branch: `gh issue develop <number> --checkout`.
3. Read `CLAUDE.md` and the docs and code the ticket touches. If the ticket is unclear or conflicts with a doc, ask the user.
4. Use the ponytail skill to keep it small, the tdd skill for behaviour, and the diagnosing-bugs skill for bugs. Do only this ticket.
5. Run the project's checks that `CLAUDE.md` allows on this machine. If it bans local test runs, write the tests and let CI run them.
6. Commit, push, and open a PR: `gh pr create --title "<title>" --body-file <file>`. The text starts with `Closes #<number>`, then what changed, then any manual steps for the user.
7. Stop. The review workflow runs by itself and sets `review:ready` or `review:fix`. Never merge. Report the PR link and any manual steps.
