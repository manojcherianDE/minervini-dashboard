#!/bin/bash
# One-click publisher for the 2026-06-14 S&P 1500 Minervini screen.
# Removes the stale git lock, commits the updated runs.js, pushes to GitHub,
# and sends the Telegram alert. Safe to re-run.
set +e
cd "$(dirname "$0")" || exit 1
echo "==> Repo: $(pwd)"
# clean up sandbox leftovers + stale lock
rm -f ".__chmodtest.sh" 2>/dev/null
if [ -f ".git/index.lock" ]; then echo "==> Removing stale .git/index.lock"; rm -f ".git/index.lock"; fi
echo "==> git add"; git add data/runs.js
echo "==> git commit"; git commit -m "Screen update 2026-06-14 (S&P 1500)" || echo "(nothing to commit or already committed)"
echo "==> git push"; git push origin main
PUSH=$?
if [ $PUSH -eq 0 ]; then echo "✅ Push OK"; else echo "❌ Push failed (exit $PUSH) — check SSH/network"; fi
echo "==> Sending Telegram alert"
if [ -x ./send-to-telegram.sh ]; then ./send-to-telegram.sh sp500; else bash ./send-to-telegram.sh sp500; fi
TG=$?
if [ $TG -eq 0 ]; then echo "✅ Telegram sent"; else echo "❌ Telegram failed (exit $TG)"; fi
echo ""
echo "Done. You can close this window."
