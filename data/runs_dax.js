/* ============================================================================
   Minervini DAX 40 Weekly Screen — Dashboard data
   ----------------------------------------------------------------------------
   Defines window.SCREEN_RUNS_DAX (newest first). Same shape as the S&P file
   (data/runs.js), with two differences the dashboard handles automatically:
     - 7 criteria instead of 8
     - summary flags may be null  → rendered as N/A (criterion not applicable)
     - stocks have no `eps` block  → the EPS section is simply omitted
   See README.md for the schema. Add a new week at the TOP of the array.
   ========================================================================== */

window.SCREEN_RUNS_DAX = [
  {
    reportDate: "2026-05-30",
    title: "DAX 40 Weekly Momentum Screen",
    framework: "Minervini SEPA Framework | German Equities",
    market: {
      index: "DAX 40",
      verdict: "CONFIRMED UPTREND",
      verdictNote: "Deploy in leading stocks only — DAX rallies are narrow; fewer names lead than in the S&P 500.",
      metrics: [
        { metric: "DAX Index Level (May 30)", value: "25,113", signal: "Above 50MA and 200MA" },
        { metric: "50-Day MA", value: "24,086.73", signal: "Rising; price above" },
        { metric: "200-Day MA", value: "23,947.58", signal: "Rising; 50MA > 200MA (correct order)" }
      ],
      sectorAsOf: "",
      sectors: [],
      sectorNote: "DAX above both 50MA and 200MA, MAs rising and in correct Minervini order (50 > 200). Verdict: CONFIRMED UPTREND — deploy capital in leading stocks only. DAX leadership is narrow: IFX (semis), CBK (banking M&A), SIE (infrastructure), ENR (energy transition)."
    },
    dataSources: [
      "Yahoo Finance / Investing.com / Investtech (via web search)",
      "XETRA (XETR) is the primary venue for DAX volume — verify there",
      "Some names carry partial/stale data — flagged below; verify on TradingView"
    ],
    dataQualityNote: "MUV2, BMW and DB1 have partial/stale data (flagged amber). Every price includes its source date; prices older than 1 trading day are STALE. Verify live on TradingView (XETR, 1D) before trading.",
    dataQuality: [
      { ticker: "^GDAXI", source: "WebSearch", date: "May 30, 2026", status: "LIVE" },
      { ticker: "ENR", source: "Investing.com via WebSearch", date: "May 29, 2026", status: "LIVE" },
      { ticker: "RHM", source: "Investtech/Stockinvest via WebSearch", date: "May 29, 2026", status: "LIVE" },
      { ticker: "CBK", source: "Stockinvest via WebSearch", date: "May 29, 2026", status: "LIVE" },
      { ticker: "IFX", source: "Investing.com via WebSearch", date: "May 29, 2026", status: "LIVE" },
      { ticker: "AIR", source: "Investing.com via WebSearch", date: "May 29, 2026", status: "LIVE" },
      { ticker: "MTX", source: "Investing.com via WebSearch", date: "May 25, 2026", status: "LIVE" },
      { ticker: "SAP", source: "GuruFocus/Stockinvest — USD→EUR converted", date: "May 29, 2026", status: "ESTIMATED" },
      { ticker: "DTE", source: "Stockinvest via WebSearch", date: "May 29, 2026", status: "LIVE" },
      { ticker: "SIE", source: "MarketBeat/Investtech via WebSearch", date: "May 28, 2026", status: "LIVE" },
      { ticker: "ALV", source: "Stockinvest via WebSearch", date: "May 30, 2026", status: "LIVE" },
      { ticker: "MUV2", source: "Partial — verify on TradingView", date: "May 8, 2026", status: "STALE" },
      { ticker: "BMW", source: "Partial — verify on TradingView", date: "Estimated", status: "STALE" },
      { ticker: "MBG", source: "MarketScreener via WebSearch", date: "May 25, 2026", status: "LIVE" },
      { ticker: "DB1", source: "52W high only — verify on TradingView", date: "Partial", status: "STALE" },
      { ticker: "BAS / VOW3 / HNR1 / ADS", source: "No current data retrieved", date: "N/A", status: "NOT SCREENED" }
    ],
    criteria: [
      { key: "c1", label: "Price > 200MA" },
      { key: "c2", label: "200MA Trending Up" },
      { key: "c3", label: "Price ≥ 30% Above 52W Low" },
      { key: "c4", label: "Within 25% of 52W High" },
      { key: "c5", label: "50MA > 200MA" },
      { key: "c6", label: "Price > 50MA" },
      { key: "c7", label: "RSI ≥ 50" }
    ],
    summary: [
      { ticker: "IFX",  flags: [1,1,1,1,1,1,null], score: "6/6", result: "PASS" },
      { ticker: "CBK",  flags: [1,1,1,1,1,1,1],    score: "7/7", result: "PASS" },
      { ticker: "SIE",  flags: [1,1,1,1,1,1,1],    score: "7/7", result: "PASS" },
      { ticker: "ENR",  flags: [1,1,1,1,1,1,null], score: "6/6", result: "PASS" },
      { ticker: "AIR",  flags: [null,null,0,1,null,null,null], score: "1/2", result: "WATCHLIST" },
      { ticker: "ALV",  flags: [null,null,0,1,0,0,null],       score: "1/4", result: "WATCHLIST" },
      { ticker: "DTE",  flags: [null,null,0,1,null,null,null], score: "1/2", result: "WATCHLIST" },
      { ticker: "RHM",  flags: [0,0,0,0,0,0,0], score: "0/7", result: "FAIL" },
      { ticker: "SAP",  flags: [0,0,0,0,0,0,0], score: "0/7", result: "FAIL" },
      { ticker: "MTX",  flags: [0,0,0,0,0,0,0], score: "0/7", result: "FAIL" },
      { ticker: "BMW",  flags: [0,0,0,0,0,0,0], score: "0/7", result: "FAIL" },
      { ticker: "MBG",  flags: [0,0,0,0,0,0,0], score: "0/7", result: "FAIL" },
      { ticker: "BAS",  flags: [0,0,0,0,0,0,0], score: "0/7", result: "FAIL" },
      { ticker: "VOW3", flags: [0,0,0,0,0,0,0], score: "0/7", result: "FAIL" }
    ],
    stocksNote: "Entry requires a confirmed daily close above the pivot on Minervini volume (≥40% above the 10-day average daily volume). All prices in EUR. AVOID names are shown in the matrix only.",
    stocks: [
      {
        rank: 1, ticker: "IFX", name: "Infineon Technologies AG", sector: "Semiconductors",
        status: "BUY NOW", techScore: "6/6", dataDate: "WebSearch, May 29, 2026",
        technical: [
          { metric: "Price", value: "€81.11", signal: "-2.5% from 52W high" },
          { metric: "50-Day MA", value: "€~55–65", signal: "Price ABOVE 50MA ✓", good: true },
          { metric: "200-Day MA", value: "€~48–55", signal: "Price ABOVE 200MA ✓", good: true },
          { metric: "52-Week High", value: "€83.17", signal: "Pivot level" },
          { metric: "52-Week Low", value: "€30.82", signal: "+163% above 52W low", good: true }
        ],
        entry: {
          pivot: "€83.17 (52-week high)",
          entryCondition: "Daily close above €83.17 on volume ≥ 7,592,624 shares",
          volumeTrigger: "7,592,624 shares (10D avg 5,423,303 × 1.40)",
          stop: "€76.52 (8% below pivot)",
          target1: "€99.80 (+20%)",
          target2: "€108.12 (+30%)",
          rr: "2.50:1",
          sizing: "50% at pivot | 30% on pullback to ~50MA | 20% on secondary breakout"
        },
        alerts: [
          { type: "BREAKOUT ALERT", price: "€83.17 — close condition, 1D chart" },
          { type: "SUPPORT ALERT", price: "€65 — approx 50MA" }
        ],
        notes: "Surged +41.7% in May 2026 — strongest monthly move in the DAX. RSI overbought (75+): expect short consolidation before breakout. Pivot = 52-week high €83.17; a confirmed weekly close above is the Minervini buy signal."
      },
      {
        rank: 2, ticker: "CBK", name: "Commerzbank AG", sector: "Banking",
        status: "BUY NOW", techScore: "7/7", dataDate: "WebSearch, May 29, 2026",
        technical: [
          { metric: "Price", value: "€36.98", signal: "-3.7% from 52W high" },
          { metric: "50-Day MA", value: "€~35.65", signal: "Price ABOVE 50MA ✓", good: true },
          { metric: "200-Day MA", value: "€~33.78", signal: "Price ABOVE 200MA ✓", good: true },
          { metric: "52-Week High", value: "€38.40", signal: "Pivot level" },
          { metric: "52-Week Low", value: "€26.03", signal: "+42% above 52W low", good: true }
        ],
        entry: {
          pivot: "€38.40 (52-week high)",
          entryCondition: "Daily close above €38.40 on volume ≥ 4,608,720 shares",
          volumeTrigger: "4,608,720 shares (10D avg 3,291,943 × 1.40)",
          stop: "€35.33 (8% below pivot)",
          target1: "€46.08 (+20%)",
          target2: "€49.92 (+30%)",
          rr: "2.50:1",
          sizing: "50% at pivot | 30% on pullback to ~50MA | 20% on secondary breakout"
        },
        alerts: [
          { type: "BREAKOUT ALERT", price: "€38.40 — close condition" },
          { type: "SUPPORT ALERT", price: "€35.65 — 50MA" }
        ],
        notes: "All 7 Minervini criteria pass. Sits 3.7% below its 52-week high — classic pre-breakout structure. 50MA resistance (~€35.65) recently reclaimed; long-term support ~€33.78. UniCredit M&A backdrop is a potential catalyst."
      },
      {
        rank: 3, ticker: "SIE", name: "Siemens Aktiengesellschaft", sector: "Industrials",
        status: "BUY NOW", techScore: "7/7", dataDate: "WebSearch, May 28, 2026",
        technical: [
          { metric: "Price", value: "€271.65", signal: "-2.8% from 52W high" },
          { metric: "50-Day MA", value: "€~243", signal: "Price ABOVE 50MA ✓", good: true },
          { metric: "200-Day MA", value: "€~235", signal: "Price ABOVE 200MA ✓", good: true },
          { metric: "52-Week High", value: "€279.60", signal: "Pivot level" },
          { metric: "52-Week Low", value: "€198.00", signal: "+37.2% above 52W low", good: true }
        ],
        entry: {
          pivot: "€279.60 (52-week high)",
          entryCondition: "Daily close above €279.60 on volume ≥ 700,000 shares",
          volumeTrigger: "~700,000 shares (10D avg ~500,000 × 1.40)",
          stop: "€257.23 (8% below pivot)",
          target1: "€335.52 (+20%)",
          target2: "€363.48 (+30%)",
          rr: "2.50:1",
          sizing: "50% at pivot | 30% on pullback to ~50MA | 20% on secondary breakout"
        },
        alerts: [
          { type: "BREAKOUT ALERT", price: "€279.60 — close condition" },
          { type: "SUPPORT ALERT", price: "€243 — 50MA" }
        ],
        notes: "Crossed above the 50MA in late May — bullish. Now 2.8% from its 52-week high. 200MA ~€235 and 50MA ~€243 both rising, price well above both — classic Stage 2 structure. Verify exact (lower-turnover large-cap) volume on TradingView."
      },
      {
        rank: 4, ticker: "ENR", name: "Siemens Energy AG", sector: "Energy / Industrials",
        status: "BUY NOW", techScore: "6/6", dataDate: "WebSearch, May 29, 2026",
        technical: [
          { metric: "Price", value: "€163.24", signal: "-14.8% from 52W high (in pullback)" },
          { metric: "50-Day MA", value: "€~157", signal: "Price ABOVE 50MA ✓", good: true },
          { metric: "200-Day MA", value: "€~121", signal: "Price ABOVE 200MA ✓", good: true },
          { metric: "52-Week High", value: "€191.66", signal: "ATH (Apr 24, 2026) — pivot" },
          { metric: "52-Week Low", value: "€82.10", signal: "+99% above 52W low", good: true }
        ],
        entry: {
          pivot: "€191.66 (all-time high)",
          entryCondition: "Daily close above €191.66 on volume ≥ 3,612,000 shares",
          volumeTrigger: "3,612,000 shares (10D avg 2,580,000 × 1.40)",
          stop: "€176.33 (8% below pivot)",
          target1: "€229.99 (+20%)",
          target2: "€249.16 (+30%)",
          rr: "2.50:1",
          sizing: "50% at pivot | 30% on pullback to ~50MA | 20% on secondary breakout"
        },
        alerts: [
          { type: "BREAKOUT ALERT", price: "€191.66 — close condition" },
          { type: "SUPPORT ALERT", price: "€157 — 50MA (breach = caution)" }
        ],
        notes: "ATH €191.66 hit Apr 24, 2026; currently ~15% in pullback — watch for a VCP. Price remains well above 200MA (~€121) and 50MA (~€157); trend firmly intact. Buy trigger is a close above the ATH on heavy volume — do NOT buy the dip blindly."
      },
      {
        rank: 5, ticker: "AIR", name: "Airbus SE", sector: "Aerospace / Defense",
        status: "WATCHLIST", techScore: "1/2", dataDate: "WebSearch, May 29, 2026",
        technical: [
          { metric: "Price", value: "€177.70", signal: "-19.7% from 52W high" },
          { metric: "50-Day MA", value: "€N/A", signal: "—" },
          { metric: "200-Day MA", value: "€N/A", signal: "—" },
          { metric: "52-Week High", value: "€221.30", signal: "Alert level" },
          { metric: "52-Week Low", value: "€157.42", signal: "+12.9% above 52W low", good: false }
        ],
        alerts: [
          { type: "ALERT", price: "€221.30 — reclaim + volume = re-evaluate" },
          { type: "BUY THRESHOLD", price: "€204.65 — 30% above 52W low (€157.42 × 1.30)" }
        ],
        notes: "FAIL: only 12.9% above its 52-week low — needs to build a base before a Minervini buy signal fires. Declined from €221.30 to €177.70 (-19.7%). Do not buy until price is ≥30% above the 52-week low."
      },
      {
        rank: 6, ticker: "ALV", name: "Allianz SE", sector: "Insurance",
        status: "WATCHLIST", techScore: "1/4", dataDate: "WebSearch, May 30, 2026",
        technical: [
          { metric: "Price", value: "€381.60", signal: "-3.9% from 52W high" },
          { metric: "50-Day MA", value: "€N/A", signal: "sell signal", good: false },
          { metric: "200-Day MA", value: "€N/A", signal: "sell signal", good: false },
          { metric: "52-Week High", value: "€397.00", signal: "Breakout alert level" },
          { metric: "52-Week Low", value: "€333.20", signal: "+14.5% above 52W low", good: false }
        ],
        alerts: [
          { type: "ALERT", price: "€397.00 — breakout; wait for MAs to align" }
        ],
        notes: "FAIL: only 14.5% above its 52-week low, with sell signals from both short- and long-term MAs. Near its 52W high (€397.00) but the MA structure is not aligned for a Minervini buy."
      },
      {
        rank: 7, ticker: "DTE", name: "Deutsche Telekom AG", sector: "Telecom",
        status: "WATCHLIST", techScore: "1/2", dataDate: "WebSearch, May 29, 2026",
        technical: [
          { metric: "Price", value: "€28.86", signal: "-16.0% from 52W high" },
          { metric: "50-Day MA", value: "€N/A", signal: "—" },
          { metric: "200-Day MA", value: "€N/A", signal: "—" },
          { metric: "52-Week High", value: "€34.36", signal: "Alert level" },
          { metric: "52-Week Low", value: "€26.00", signal: "+11.0% above 52W low", good: false }
        ],
        alerts: [
          { type: "ALERT", price: "€34.36 — revisit on reclaim" },
          { type: "BUY THRESHOLD", price: "€33.80 — 30% above 52W low (€26.00 × 1.30)" }
        ],
        notes: "FAIL: only 11% above its 52-week low; pulling back from the high and needs a basing period. Revisit when price is ≥30% above the 52-week low."
      }
    ],
    riskRules: [
      "NEVER buy without a confirmed volume trigger — breakouts require ≥40% above the 10-day average daily volume on the breakout bar.",
      "ALWAYS cut losses at 8%. Stop = entry × 0.92. Close below it → exit, no exceptions.",
      "NEVER average down into a losing position. If price hits the stop, the thesis is broken.",
      "Risk no more than 2% of total portfolio per position. Size = (Portfolio × 0.02) ÷ (Entry − Stop).",
      "Scale in: 50% at pivot break, 30% on VCP pullback to ~50MA, 20% on secondary confirmation.",
      "NEVER trade on stale data — verify live on TradingView (XETR, 1D) before any order.",
      "Re-evaluate WATCHLIST stocks weekly — a name can become BUY NOW quickly on base completion + volume.",
      "Preserve capital above all else. Even in a confirmed DAX uptrend, most stocks will not pass the screen."
    ],
    verification: "Verify on TradingView before trading: price on XETR (1D); add 200MA (price must be clearly above); add Volume with a 50-period MA (buy bar must exceed it by ≥40%). Use XETRA (XETR), not Frankfurt (ETR/FRA). Prices here are from May 28–30, 2026.",
    disclaimer: "All prices in EUR. For informational purposes only. Not financial advice."
  }
];
