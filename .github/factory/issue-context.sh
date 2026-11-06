#!/usr/bin/env bash
set -euo pipefail

mkdir -p .factory
echo ".factory/" >> .git/info/exclude

{
  gh api "repos/$GH_REPO/issues/$ISSUE_NUMBER" --jq '"# \(.title)\n\n\(.body)"'
  echo
  echo "## Comments"
  gh api "repos/$GH_REPO/issues/$ISSUE_NUMBER/comments" --paginate \
    | jq -r --arg owner "$OWNER" \
      '.[] | select(.user.login == $owner or .user.login == "github-actions[bot]") | "\n### \(.user.login)\n\n\(.body)"'
} > .factory/issue.md
