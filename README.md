# Minervini S&P 500 Weekly Screen — Web Dashboard

A reusable, self-contained web interface that presents the final outcome of the
scheduled **`sp500-minervini-weekly-screen`** task (the 3-layer Minervini SEPA
screen: Trend Template → Extension → VCP).

## Files

| File | Purpose |
|------|---------|
| `index.html` | The dashboard template. No build step, no external libraries. |
| `data/runs.js` | **S&P 500** data — one object per weekly run, **newest first** (`window.SCREEN_RUNS`). |
| `data/runs_dax.js` | **DAX 40** data — same shape (`window.SCREEN_RUNS_DAX`); 7 criteria, no EPS, EUR prices. |
| `server.py` | Tiny static server for local preview (`python3 server.py` → http://127.0.0.1:8077). |
| `README.md` | This file. |

## How to view

- **Quickest:** double-click `index.html` — it loads `data/runs.js` via a relative
  `<script>` tag, so it works straight from the file system (no server needed).
- **Or** run `python3 server.py` and open http://127.0.0.1:8077.

## How it works

`index.html` reads `window.SCREEN_RUNS` (S&P 500) from `data/runs.js` and, if present,
`window.SCREEN_RUNS_DAX` (DAX 40) from `data/runs_dax.js`. When both exist it shows a
**market toggle** (S&P 500 / DAX 40) in the header; you can deep-link a market with a URL
hash (`…/#dax` or `…/#sp500`). It builds the **Week** dropdown from the active market and
renders the selected run:

1. **KPI strip** — Buy Now / Watchlist / Failed counts + market state
2. **Market Condition** — index metrics + diverging sector-performance bars
3. **3-Layer SEPA Framework** — explainer (Trend Template → Extension → VCP)
4. **Screen Summary Matrix** — the 8 Minervini criteria as a pass/fail grid
5. **Stock Cards** — per name: technicals, EPS bars, entry/exit plan, TradingView alerts, notes (filterable by Buy Now / Watchlist)
6. **Risk Management** rules + verification box
7. **Data Sources & Quality** table

## Adding a new week

Each run of the scheduled screen produces a `SP500_Minervini_Screen_<date>.docx`.
To show it here, paste a new object at the **top** (index 0) of the array in
`data/runs.js`, following the existing shape. The newest entry is auto-labelled
"(latest)" and shown by default; older weeks remain selectable in the dropdown.

### Run object schema

```js
{
  reportDate: "YYYY-MM-DD",
  title: "S&P 500 Momentum Screen",
  framework: "Minervini SEPA Framework — Weekly Report",
  market: {
    index: "S&P 500",
    verdict: "CONFIRMED UPTREND",          // drives the header badge colour
    verdictNote: "…",
    metrics: [ { metric, value, signal } ],
    sectorAsOf: "NASDAQ, June 1, 2026",
    sectors: [ { sector, change } ],        // change is a number, e.g. 1.17 or -1.70
    sectorNote: "…"
  },
  dataSources: [ "…" ],
  dataQualityNote: "…",
  dataQuality: [ { ticker, source, date, status } ],   // status text containing
                                                        // "IN REPORT" / "EXCLUDED" / else → colour
  criteria: [ { key, label } ],             // 8 Trend-Template criteria (C1…C8)
  summary: [ { ticker, flags:[1/0 ×8], score:"8/8", result:"PASS|WATCHLIST|FAIL" } ],
  stocksNote: "…",
  stocks: [ {
    rank, ticker, name, sector,
    status: "BUY NOW" | "BUY NOW (Speculative)" | "WATCHLIST" | "WATCHLIST — Near Buy",
    techScore: "8/8", dataDate: "…",
    technical: [ { metric, value, signal, good:true|false } ],  // good → green/red signal
    eps: [ { quarter, growth:"+35.8%", pass:true|false, revenue:"…" } ],
    epsNote: "…",
    entry: { pivot, entryCondition, volumeTrigger, stop, target1, target2, rr, sizing },
    alerts: [ { type:"BREAKOUT ALERT|WARNING LEVEL|STOP ALERT", price } ],
    notes: "…"
  } ],
  riskRules: [ "…" ],
  verification: "…",
  disclaimer: "For informational purposes only. Not financial advice."
}
```

### Status / colour conventions

- **Header badge:** verdict containing "CONFIRMED"/"UPTREND" → green; "PRESSURE" → amber; else red.
- **Stock badge:** status with "BUY" → green (amber if it also says "SPEC"); "WATCH" → blue.
- **KPI counts** are derived from each row's `result` in `summary`.
- `technical[].good` and `eps[].pass` drive the green/red highlighting.

> Optional: the scheduled task (`sp500-minervini-weekly-screen/SKILL.md`) currently
> emits a Word document. It can be extended to also write a run object to this
> `data/runs.js` so the dashboard updates automatically each week — ask Claude to
> wire that up if you'd like it hands-free.

## Send to Telegram (with a button to the live dashboard)

A tappable Telegram button can only open a **public https URL**, so the dashboard
must be hosted on the web first (localhost won't open on a phone).

### Step 1 — Host the folder (pick one)
- **Netlify Drop (fastest):** go to https://app.netlify.com/drop and drag this
  `Minervini Dashboard` folder onto the page. You get an `https://…netlify.app` URL
  instantly. To update later, drag the folder again.
- **GitHub Pages (durable):** push this folder to a repo, then enable
  Settings → Pages → deploy from branch. URL looks like `https://<user>.github.io/<repo>/`.

> `.gitignore` keeps `telegram.config` and `server.py` out of any public repo so your
> bot token is never published.

### Step 2 — Make a bot + get your chat ID
1. In Telegram, message **@BotFather** → `/newbot` → follow prompts → copy the **token**.
2. Message your new bot once (e.g. "hi"), then open
   `https://api.telegram.org/bot<TOKEN>/getUpdates` and copy `chat.id`.

### Step 3 — Configure and send
```bash
cp telegram.config.example telegram.config   # then fill in TOKEN, CHAT_ID, DASHBOARD_URL
./send-to-telegram.sh
```
This posts a message summarising the latest run with a **🔄 Open latest run** button
that opens the hosted dashboard (which defaults to the newest week and has an in-page
refresh). Re-run the script whenever you want to push a fresh message.

> A button that re-fetches *inside* Telegram would require an always-on bot server.
> The URL button is the practical equivalent: it always opens the live, latest view.

> **Auto-send weekly:** the scheduled screen (`sp500-minervini-weekly-screen`) can be
> extended to append the new week to `data/runs.js`, re-deploy, and run this script
> automatically after each run — ask Claude to wire it up.

---
*For informational purposes only. Not financial advice.*
