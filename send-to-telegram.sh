#!/usr/bin/env bash
# Send a Telegram message with a tappable button that opens the live Minervini
# dashboard at its latest run.
#
# Setup (once):
#   1. cp telegram.config.example telegram.config   then fill in the 3 values
#   2. chmod +x send-to-telegram.sh
# Run:
#   ./send-to-telegram.sh
#
# Config can also come from environment variables instead of telegram.config.

set -euo pipefail
cd "$(dirname "$0")"

# --- load config -------------------------------------------------------------
if [[ -f telegram.config ]]; then
  # shellcheck disable=SC1091
  source telegram.config
fi

: "${TELEGRAM_BOT_TOKEN:?Set TELEGRAM_BOT_TOKEN in telegram.config}"
: "${TELEGRAM_CHAT_ID:?Set TELEGRAM_CHAT_ID in telegram.config}"
: "${DASHBOARD_URL:?Set DASHBOARD_URL in telegram.config (public https URL of the dashboard)}"

# --- chat-id allowlist guard -------------------------------------------------
# The bot only ever sends to IDs listed in ALLOWED_CHAT_IDS (space/comma list).
# Defaults to the configured TELEGRAM_CHAT_ID if the allowlist is unset.
ALLOWED_CHAT_IDS="${ALLOWED_CHAT_IDS:-$TELEGRAM_CHAT_ID}"
allowed=0
for id in ${ALLOWED_CHAT_IDS//,/ }; do
  [[ "$id" == "$TELEGRAM_CHAT_ID" ]] && allowed=1
done
if [[ "$allowed" != "1" ]]; then
  echo "❌ Refusing to send: chat ID ${TELEGRAM_CHAT_ID} is not in ALLOWED_CHAT_IDS (${ALLOWED_CHAT_IDS})." >&2
  exit 1
fi

# --- market selection (arg 1: sp500 | dax | both; default sp500) -------------
MARKET="${1:-sp500}"
SP_LINK="${DASHBOARD_URL%/}/#sp500"
DAX_LINK="${DASHBOARD_URL%/}/#dax"

# facts <data-file>  → sets globals f_date f_verdict f_buy f_watch (best-effort)
#
# IMPORTANT: counts must come from the LATEST run only (the first object in the
# array), not from the whole file. The old version grepped the entire file, so a
# week with zero buys still reported the running total of every past week — on
# 2026-09-14 that would have announced "Buy Now: 31" on a zero-buy week.
# Accepts both  reportDate:  and  "reportDate":  key styles.
facts(){
  local file="$1" block
  # first run object = from the array opening until the SECOND reportDate key
  # NB: the S&P file declares window.SCREEN_RUNS, the German one
  # window.SCREEN_RUNS_DAX — match both, and only the real assignment line.
  block="$(awk '
    /^window\.SCREEN_RUNS(_DAX)?[[:space:]]*=[[:space:]]*\[/ { inarr=1; next }
    inarr && /"?reportDate"?[[:space:]]*:/ { n++; if (n==2) exit }
    inarr { print }
  ' "$file")"
  f_date="$(grep -m1 -E '"?reportDate"?[[:space:]]*:' "$file" | sed -E 's/.*: *"([^"]+)".*/\1/' || true)"
  f_verdict="$(grep -m1 -E '"?verdict"?[[:space:]]*:' <<<"$block" | sed -E 's/.*: *"([^"]+)".*/\1/' || true)"
  f_buy="$(grep -c -E '"?result"?[[:space:]]*: *"PASS"' <<<"$block" || true)"
  f_watch="$(grep -c -E '"?result"?[[:space:]]*: *"WATCHLIST"' <<<"$block" || true)"
}

# --- build the message + inline keyboard -------------------------------------
case "$MARKET" in
  sp500)
    facts data/runs.js
    msg="<b>📈 S&amp;P 1500 Minervini Weekly Screen</b>"$'\n'"🗓 Latest run: <b>${f_date}</b>"$'\n'"🚦 Market: <b>${f_verdict}</b>"$'\n'"✅ Buy Now: <b>${f_buy:-0}</b>  ·  👀 Watchlist: <b>${f_watch:-0}</b>"
    reply_markup="{\"inline_keyboard\":[[{\"text\":\"🔄 Open latest run\",\"url\":\"${SP_LINK}\"}]]}"
    ;;
  dax)
    facts data/runs_dax.js
    msg="<b>📈 Germany Broad (DAX+MDAX+SDAX) Minervini Weekly Screen</b>"$'\n'"🗓 Latest run: <b>${f_date}</b>"$'\n'"🚦 Market: <b>${f_verdict}</b>"$'\n'"✅ Buy Now: <b>${f_buy:-0}</b>  ·  👀 Watchlist: <b>${f_watch:-0}</b>"
    reply_markup="{\"inline_keyboard\":[[{\"text\":\"🔄 Open latest run\",\"url\":\"${DAX_LINK}\"}]]}"
    ;;
  both)
    msg="<b>📊 Minervini Weekly Screen</b>"
    facts data/runs.js
    msg+=$'\n\n'"🇺🇸 <b>S&amp;P 1500</b> — ${f_date}"$'\n'"🚦 ${f_verdict}  ·  ✅ ${f_buy:-0} Buy  ·  👀 ${f_watch:-0} Watch"
    facts data/runs_dax.js
    msg+=$'\n\n'"🇩🇪 <b>Germany Broad</b> — ${f_date}"$'\n'"🚦 ${f_verdict}  ·  ✅ ${f_buy:-0} Buy  ·  👀 ${f_watch:-0} Watch"
    reply_markup="{\"inline_keyboard\":[[{\"text\":\"🇺🇸 S&P 1500\",\"url\":\"${SP_LINK}\"},{\"text\":\"🇩🇪 Germany Broad\",\"url\":\"${DAX_LINK}\"}]]}"
    ;;
  *) echo "Unknown market '$MARKET' (use: sp500 | dax | both)" >&2; exit 1;;
esac

msg+=$'\n\n'"<i>Tap a button for the live, refreshable dashboard.</i>"
msg+=$'\n'"<i>For informational purposes only. Not financial advice.</i>"

# --- send ---------------------------------------------------------------------
resp="$(curl -fsS "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage" \
  -d chat_id="${TELEGRAM_CHAT_ID}" \
  -d parse_mode="HTML" \
  -d disable_web_page_preview="true" \
  --data-urlencode text="${msg}" \
  --data-urlencode reply_markup="${reply_markup}")"

if grep -q '"ok":true' <<<"$resp"; then
  echo "✅ Sent to Telegram chat ${TELEGRAM_CHAT_ID}."
else
  echo "❌ Telegram API error:"; echo "$resp"; exit 1
fi
