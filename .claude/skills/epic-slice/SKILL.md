---
name: epic-slice
description: Slice a shaped epic file into GitHub issues with blockers, and mark each one for the factory or for a person. Use after epic-shape, or when the user asks to slice an epic.
disable-model-invocation: true
---

# Slice an epic

Input: an epic file with `Status: ready to slice`. If it has open questions, stop and say so.

## Process

1. Draft tracer-bullet slices with blocking edges, following [TO-TICKETS.md](TO-TICKETS.md). Each slice is one PR that keeps CI green and fits one agent session. If a check can only pass once all slices land, add a shrinking list of items not moved yet.
2. Mark each slice:
   - `mode:factory` only if all are true: a merged PR or doc shows the pattern, tests can prove it, it needs no manual step, it edits no file in `.github/workflows/`, and it makes no security or design choice.
   - `mode:human` for everything else. If in doubt, choose this.
   - Add `db:migration` if it changes the database schema. Only one of these can be open at a time.
3. Show the user a table: title, mode, blocked by, what it delivers. Change it until the user approves it. Publish nothing before that.
4. The runner cannot read `private/`. Move technical design the tickets need into tracked `docs/tech/`, leaving a link in the epic file. Tracked files never link to `private/`.
5. Publish, blockers first:
   - One parent issue with the `epic` label, holding the destination, and the out of scope list, with no private content.
   - One issue per slice, with its labels. Use the template in `.claude/skills/write-ticket/AGENT-BRIEF.md`, and add `Blocked by #N` lines. A ticket must make sense on its own.
   - Link each one to the parent: `gh api -X POST repos/{owner}/{repo}/issues/<parent>/sub_issues -F sub_issue_id=<id>`, where `id` is the issue's `.id`, not its number.
   - Add native blockers if the API accepts them: `gh api -X POST repos/{owner}/{repo}/issues/<n>/dependencies/blocked_by -F issue_id=<blocker id>`. If it refuses, the `Blocked by` lines are enough.
6. Write the issue numbers into `## Slices` in the epic file, and set `Status: in progress`. Tell the user to run `/epic-next`.
