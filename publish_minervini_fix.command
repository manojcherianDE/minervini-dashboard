#!/bin/bash
# Fix-up: clear stale git locks left by the sandbox, then commit + push.
# Does NOT send Telegram (already sent).
set +e
cd "$(dirname "$0")" || exit 1
echo "==> Repo: $(pwd)"
echo "==> Removing any stale *.lock files under .git"
find .git -name '*.lock' -print -delete 2>/dev/null
echo "==> git status:"; git status --short
echo "==> git add"; git add -A
echo "==> git commit"; git commit -m "Screen update 2026-06-14 (S&P 1500)"
echo "==> git push"; git push origin main
PUSH=$?
if [ $PUSH -eq 0 ]; then echo "PUSH_RESULT=OK"; else echo "PUSH_RESULT=FAIL($PUSH)"; fi
echo "==> latest commit:"; git log --oneline -1
echo ""; echo "Done. You can close this window."
