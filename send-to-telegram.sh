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

# --- market selection (arg 1: sp500 | dax; default sp500) --------------------
MARKET="${1:-sp500}"
case "$MARKET" in
  dax)   DATA_FILE="data/runs_dax.js"; MARKET_NAME="DAX 40";      LINK="${DASHBOARD_URL%/}/#dax";;
  sp500) DATA_FILE="data/runs.js";     MARKET_NAME="S&amp;P 500"; LINK="${DASHBOARD_URL%/}/#sp500";;
  *) echo "Unknown market '$MARKET' (use: sp500 | dax)" >&2; exit 1;;
esac

# --- pull a few facts from the latest run (best-effort) ----------------------
latest_date="$(grep -m1 'reportDate:' "$DATA_FILE" | sed -E 's/.*"([^"]+)".*/\1/' || true)"
verdict="$(grep -m1 'verdict:' "$DATA_FILE" | sed -E 's/.*"([^"]+)".*/\1/' || true)"
buy_count="$(grep -c 'result: "PASS"' "$DATA_FILE" || true)"
watch_count="$(grep -c 'result: "WATCHLIST"' "$DATA_FILE" || true)"

# --- build the message --------------------------------------------------------
msg="<b>📈 ${MARKET_NAME} Minervini Weekly Screen</b>"
[[ -n "${latest_date}" ]] && msg+=$'\n'"🗓 Latest run: <b>${latest_date}</b>"
[[ -n "${verdict}"     ]] && msg+=$'\n'"🚦 Market: <b>${verdict}</b>"
if [[ -n "${buy_count}" || -n "${watch_count}" ]]; then
  msg+=$'\n'"✅ Buy Now: <b>${buy_count:-0}</b>  ·  👀 Watchlist: <b>${watch_count:-0}</b>"
fi
msg+=$'\n\n'"<i>Tap below for the live, refreshable dashboard.</i>"
msg+=$'\n'"<i>For informational purposes only. Not financial advice.</i>"

# inline keyboard: one URL button that opens the live dashboard at this market's latest run
reply_markup="{\"inline_keyboard\":[[{\"text\":\"🔄 Open latest run\",\"url\":\"${LINK}\"}]]}"

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
