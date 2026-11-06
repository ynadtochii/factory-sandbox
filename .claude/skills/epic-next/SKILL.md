---
name: epic-next
description: Show the state of an epic and start what can run next. Use when the user asks what is next on an epic, or to move an epic forward.
disable-model-invocation: true
---

# Move an epic forward

Input: an epic issue number or epic file. GitHub is the source of truth for status.

1. List the sub-issues: `gh api repos/{owner}/{repo}/issues/<parent>/sub_issues --paginate`.
2. A ticket is ready when it is open and every `Blocked by #N` is closed.
3. For each open ticket, read its labels and any linked PR, then show:

| Group | Meaning |
| --- | --- |
| To merge | PR has `review:ready` |
| To fix | PR has `review:fix` |
| Running | `agent:in-progress` or `review:pending` |
| Next for the factory | Ready, with `mode:factory` |
| Next for you | Ready, with `mode:human`. Give the `/work-ticket <number>` command |
| Blocked | Not ready, and what it waits for |

4. Start factory tickets only if the user asked to start them: add `agent:implement`. Never start a `db:migration` ticket while another is open with a PR or `agent:in-progress`.
5. Never merge a PR, and never add `agent:implement` to a `mode:human` ticket.
6. Add a short line to `## Log` in the epic file if one exists. When all tickets are closed, set `Status: done` and close the parent issue only if the user agrees.
