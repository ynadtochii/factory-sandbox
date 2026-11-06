#!/usr/bin/env bash
set -uo pipefail

for _ in $(seq 1 90); do
  checks=$(gh pr checks "$PR_NUMBER" --json name,bucket --jq '[.[] | select(.name != "review")]' 2>/dev/null || echo '[]')
  total=$(jq length <<<"$checks")
  pending=$(jq '[.[] | select(.bucket == "pending")] | length' <<<"$checks")
  if [ "$total" -gt 0 ] && [ "$pending" -eq 0 ]; then
    failed=$(jq '[.[] | select(.bucket == "fail" or .bucket == "cancel")] | length' <<<"$checks")
    if [ "$failed" -eq 0 ]; then echo pass; else echo fail; fi
    exit 0
  fi
  sleep 10
done
echo timeout
