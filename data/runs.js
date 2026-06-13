/* ============================================================================
   Minervini S&P 500 Weekly Screen — Dashboard data
   ----------------------------------------------------------------------------
   This file feeds the dashboard (index.html). It defines window.SCREEN_RUNS,
   an array of weekly-run objects, NEWEST FIRST. The dashboard reads this array,
   builds the week selector, and renders the selected run.

   To add a new week: paste a new run object at the TOP of the array (index 0).
   Keep the same shape as the example below. See README.md for the full schema.
   Using a .js file (not .json) means the dashboard works by double-clicking
   index.html — no local web server required.
   ========================================================================== */

window.SCREEN_RUNS = [
  {
    reportDate: "2026-06-12",
    title: "S&P 500 Momentum Screen",
    framework: "Minervini SEPA Framework — Weekly Report",
    market: {
      index: "S&P 500",
      verdict: "CONFIRMED UPTREND",
      verdictNote: "Index still above 50MA & 200MA, but breadth narrowed — several mega-caps slipped below their moving averages this week.",
      metrics: [
        { metric: "S&P 500 Price (FMP, Jun 12)", value: "$7,431.46", signal: "-2.5% from 52-week high ($7,620.90)" },
        { metric: "50-Day MA", value: "$7,247.79", signal: "Price +2.5% above 50MA", good: true },
        { metric: "200-Day MA", value: "$6,881.99", signal: "Price +8.0% above 200MA", good: true },
        { metric: "52-Week Range", value: "$5,943.23 – $7,620.90", signal: "At 97.5% of 52-week high" }
      ],
      sectorAsOf: "NASDAQ, June 12, 2026",
      sectors: [
        { sector: "Utilities", change: 1.39 },
        { sector: "Technology", change: 0.94 },
        { sector: "Basic Materials", change: 0.86 },
        { sector: "Consumer Defensive", change: 0.58 },
        { sector: "Real Estate", change: 0.57 },
        { sector: "Financial Services", change: 0.37 },
        { sector: "Energy", change: -0.26 },
        { sector: "Consumer Cyclical", change: -0.35 },
        { sector: "Healthcare", change: -0.37 },
        { sector: "Industrials", change: -0.71 },
        { sector: "Communication Services", change: -0.84 }
      ],
      sectorNote: "Defensives (Utilities) and Technology led on Jun 12; Communication Services and Industrials lagged. Leadership is rotating and narrowing."
    },
    dataSources: [
      "Primary: FMP (Financial Modeling Prep) connector — live single-stock quotes (Jun 12 close)",
      "AVGO via Yahoo Finance fallback (FMP ACCESS DENIED)",
      "Sector performance: FMP sector-performance-snapshot (Jun 12)"
    ],
    dataQualityNote: "Prices are Friday June 12 close (weekend refresh). NVDA–UBER via FMP live; AVGO via Yahoo fallback. Volume triggers are NOT included — confirm 10-day average volume and the breakout bar on TradingView before any trade.",
    dataQuality: [
      { ticker: "NVDA", source: "FMP Live", date: "Jun 12, 2026", status: "IN REPORT" },
      { ticker: "AAPL", source: "FMP Live", date: "Jun 12, 2026", status: "IN REPORT" },
      { ticker: "AMZN", source: "FMP Live", date: "Jun 12, 2026", status: "IN REPORT" },
      { ticker: "AMD", source: "FMP Live", date: "Jun 12, 2026", status: "IN REPORT" },
      { ticker: "AVGO", source: "Yahoo Finance (FMP denied)", date: "Jun 12, 2026", status: "IN REPORT" },
      { ticker: "MSFT", source: "FMP Live", date: "Jun 12, 2026", status: "FAILED SCREEN" },
      { ticker: "PLTR", source: "FMP Live", date: "Jun 12, 2026", status: "FAILED SCREEN" },
      { ticker: "TSLA", source: "FMP Live", date: "Jun 12, 2026", status: "IN REPORT" },
      { ticker: "META", source: "FMP Live", date: "Jun 12, 2026", status: "FAILED SCREEN" },
      { ticker: "NFLX", source: "FMP Live", date: "Jun 12, 2026", status: "FAILED SCREEN" },
      { ticker: "UBER", source: "FMP Live", date: "Jun 12, 2026", status: "FAILED SCREEN" }
    ],
    criteria: [
      { key: "c1", label: "Price > 150MA" },
      { key: "c2", label: "Price > 200MA" },
      { key: "c3", label: "200MA Trending Up" },
      { key: "c4", label: "50MA > 200MA" },
      { key: "c5", label: "Price > 50MA" },
      { key: "c6", label: "Price ≥ 30% Above 52wLow" },
      { key: "c7", label: "Price Within 25% of 52wHigh" },
      { key: "c8", label: "RS ≥ 80 Proxy (within 15% of 52wHigh)" }
    ],
    summary: [
      { ticker: "AAPL", flags: [1,1,1,1,1,1,1,1], score: "8/8", result: "PASS" },
      { ticker: "NVDA", flags: [1,1,1,1,0,1,1,1], score: "7/8", result: "WATCHLIST" },
      { ticker: "AMD",  flags: [1,1,1,1,1,1,1,1], score: "8/8", result: "WATCHLIST" },
      { ticker: "AVGO", flags: [0,1,1,1,0,1,1,0], score: "5/8", result: "WATCHLIST" },
      { ticker: "AMZN", flags: [0,1,0,1,0,0,1,1], score: "4/8", result: "WATCHLIST" },
      { ticker: "TSLA", flags: [0,0,1,0,1,1,1,0], score: "4/8", result: "WATCHLIST" },
      { ticker: "MSFT", flags: [0,0,0,0,0,0,0,0], score: "0/8", result: "FAIL" },
      { ticker: "META", flags: [0,0,0,0,0,0,0,0], score: "0/8", result: "FAIL" },
      { ticker: "PLTR", flags: [0,0,0,0,0,0,0,0], score: "0/8", result: "FAIL" },
      { ticker: "NFLX", flags: [0,0,0,0,0,0,0,0], score: "0/8", result: "FAIL" },
      { ticker: "UBER", flags: [0,0,0,0,0,0,0,0], score: "0/8", result: "FAIL" }
    ],
    stocksNote: "Big shift vs June 1: only AAPL holds a clean 8/8 with price above its 50MA. NVDA & AMD remain technically strong but are below the 50MA (NVDA) or far extended (AMD). MSFT, META, PLTR, NFLX, UBER have broken down. EPS figures are last-reported quarter (unchanged since June 1). Volume triggers omitted — verify on TradingView.",
    stocks: [
      {
        rank: 1, ticker: "AAPL", name: "Apple Inc.", sector: "Technology",
        status: "BUY NOW", techScore: "8/8", dataDate: "FMP Live, Jun 12, 2026",
        technical: [
          { metric: "Price (FMP, Jun 12)", value: "$291.13", signal: "-8.3% from 52-week high" },
          { metric: "50-Day MA", value: "$285.49", signal: "Price ABOVE 50MA ✓", good: true },
          { metric: "200-Day MA", value: "$266.87", signal: "Price ABOVE 200MA ✓", good: true },
          { metric: "50MA vs 200MA", value: "50MA > 200MA ✓", signal: "Golden Cross (bullish)", good: true },
          { metric: "52-Week High", value: "$317.40", signal: "Pivot level" },
          { metric: "52-Week Low", value: "$195.07", signal: "+49% above 52w low", good: true }
        ],
        eps: [
          { quarter: "Q1 (Most Recent)", growth: "-29.2%", pass: false, revenue: "Rev: -22.7%" },
          { quarter: "Q4", growth: "+53.5%", pass: true, revenue: "—" },
          { quarter: "Q3", growth: "+17.8%", pass: false, revenue: "—" },
          { quarter: "Q2", growth: "-4.8%", pass: false, revenue: "—" }
        ],
        epsNote: "EPS as of last reported quarter (unchanged since Jun 1). March quarter seasonally soft; Dec quarter +53.5%.",
        entry: {
          pivot: "$317.40 (52-week high)",
          entryCondition: "Daily close above $317.40",
          volumeTrigger: "≥40% above 10-day avg volume — VERIFY ON TRADINGVIEW",
          stop: "$292.01 (8% below pivot)",
          target1: "$380.88 (+20%)",
          target2: "$412.62 (+30%)",
          rr: "2.5:1",
          sizing: "50% initial at pivot | 30% at first add-on | 20% at third entry"
        },
        alerts: [
          { type: "BREAKOUT ALERT", price: "$317.41 — close above pivot" },
          { type: "WARNING LEVEL", price: "$285.00 — approaching 50MA" },
          { type: "STOP ALERT", price: "$292.01 — hard stop below pivot entry" }
        ],
        notes: "The cleanest setup in the screen — 8/8 with price above a rising 50MA and 200MA, 8% below its ATH. The only S&P name still in a textbook Stage-2 structure this week. Pivot is the 52-week high $317.40."
      },
      {
        rank: 2, ticker: "NVDA", name: "NVIDIA Corporation", sector: "Technology",
        status: "WATCHLIST — Near Buy", techScore: "7/8", dataDate: "FMP Live, Jun 12, 2026",
        technical: [
          { metric: "Price (FMP, Jun 12)", value: "$205.19", signal: "-13.3% from 52-week high" },
          { metric: "50-Day MA", value: "$206.91", signal: "Price just BELOW 50MA ✗", good: false },
          { metric: "200-Day MA", value: "$189.26", signal: "Price ABOVE 200MA ✓", good: true },
          { metric: "50MA vs 200MA", value: "50MA > 200MA ✓", signal: "Golden Cross (bullish)", good: true },
          { metric: "52-Week High", value: "$236.54", signal: "Pivot level" },
          { metric: "52-Week Low", value: "$142.03", signal: "+44% above 52w low", good: true }
        ],
        eps: [
          { quarter: "Q1 (Most Recent)", growth: "+35.8%", pass: true, revenue: "Rev: +19.8%" },
          { quarter: "Q4", growth: "+35.4%", pass: true, revenue: "—" },
          { quarter: "Q3", growth: "+20.4%", pass: false, revenue: "—" },
          { quarter: "Q2", growth: "+42.1%", pass: true, revenue: "—" }
        ],
        epsNote: "Fundamentals intact (last-reported quarter). Technicals slipped: now consolidating just under the 50MA.",
        entry: {
          pivot: "$236.54 (52-week high)",
          entryCondition: "Daily close above $236.54 AND reclaim of 50MA first",
          volumeTrigger: "≥40% above 10-day avg volume — VERIFY ON TRADINGVIEW",
          stop: "$217.62 (8% below pivot)",
          target1: "$283.85 (+20%)",
          target2: "$307.50 (+30%)",
          rr: "2.5:1",
          sizing: "Wait for 50MA reclaim before initiating"
        },
        alerts: [
          { type: "BREAKOUT ALERT", price: "$236.55 — close above pivot" },
          { type: "RECLAIM ALERT", price: "$207.00 — back above 50MA = re-arm" },
          { type: "STOP ALERT", price: "$217.62 — hard stop below pivot entry" }
        ],
        notes: "Still 7/8 with strong fundamentals, but price has dipped fractionally below its 50MA ($206.91) — not an active buy under Minervini rules until it reclaims the 50MA and clears the pivot. Watch for a tight base."
      },
      {
        rank: 3, ticker: "AMD", name: "Advanced Micro Devices", sector: "Technology",
        status: "EXTENDED — WATCH", techScore: "8/8", dataDate: "FMP Live, Jun 12, 2026",
        technical: [
          { metric: "Price (FMP, Jun 12)", value: "$511.57", signal: "+4.7% on the day; -6.4% from ATH" },
          { metric: "50-Day MA", value: "$386.78", signal: "Price +32% above 50MA (extended)", good: false },
          { metric: "200-Day MA", value: "$253.93", signal: "Price ABOVE 200MA ✓", good: true },
          { metric: "50MA vs 200MA", value: "50MA > 200MA ✓", signal: "Golden Cross (bullish)", good: true },
          { metric: "52-Week High", value: "$546.44", signal: "Pivot level" },
          { metric: "52-Week Low", value: "$117.78", signal: "+334% above 52w low", good: true }
        ],
        eps: [
          { quarter: "Q1 (Most Recent)", growth: "-8.7%", pass: false, revenue: "Rev: -0.2%" },
          { quarter: "Q4", growth: "+21.1%", pass: false, revenue: "—" },
          { quarter: "Q3", growth: "+40.7%", pass: true, revenue: "—" },
          { quarter: "Q2", growth: "+22.7%", pass: false, revenue: "—" }
        ],
        epsNote: "Last-reported quarter. Technically 8/8 but the extension is the problem, not the trend.",
        entry: {
          pivot: "$546.44 (52-week high)",
          entryCondition: "Do NOT chase — wait for a base/pullback toward the 50MA",
          volumeTrigger: "≥40% above 10-day avg volume — VERIFY ON TRADINGVIEW",
          stop: "$502.72 (8% below pivot)",
          target1: "$655.73 (+20%)",
          target2: "$710.37 (+30%)",
          rr: "2.5:1",
          sizing: "No new entry while >25% above 50MA"
        },
        alerts: [
          { type: "PULLBACK ALERT", price: "$430.00 — pullback toward 50MA = re-evaluate" },
          { type: "BREAKOUT ALERT", price: "$546.45 — only after a base forms" },
          { type: "STOP ALERT", price: "$502.72 — if entered on a confirmed breakout" }
        ],
        notes: "Perfect 8/8 template but trading +32% above its 50MA — Minervini's explicit 'never chase extended stocks' rule applies. Up +4.7% on Jun 12 alone. Wait for a volatility contraction near the 50MA before any entry."
      },
      {
        rank: 4, ticker: "AVGO", name: "Broadcom Inc.", sector: "Technology",
        status: "WATCHLIST", techScore: "5/8", dataDate: "Yahoo (FMP denied), Jun 12, 2026",
        technical: [
          { metric: "Price (Yahoo, Jun 12)", value: "$382.07", signal: "-22.8% from 52-week high" },
          { metric: "50-Day MA", value: "$406.45", signal: "Price BELOW 50MA ✗", good: false },
          { metric: "200-Day MA", value: "$358.10", signal: "Price ABOVE 200MA ✓", good: true },
          { metric: "50MA vs 200MA", value: "50MA > 200MA ✓", signal: "Golden Cross (bullish)", good: true },
          { metric: "52-Week High", value: "$495.00", signal: "Prior pivot" },
          { metric: "52-Week Low", value: "$244.17", signal: "+56% above 52w low", good: true }
        ],
        alerts: [
          { type: "RECLAIM ALERT", price: "$406.00 — back above 50MA = re-arm" },
          { type: "PIVOT ALERT", price: "$495.00 — prior 52-week high" }
        ],
        notes: "Long-term trend intact (above 200MA, golden cross) but price is below the 50MA and 23% off its high — building a base, not buyable yet. Pulled via Yahoo fallback (FMP denied AVGO)."
      },
      {
        rank: 5, ticker: "AMZN", name: "Amazon.com Inc.", sector: "Consumer Cyclical",
        status: "WATCHLIST", techScore: "4/8", dataDate: "FMP Live, Jun 12, 2026",
        technical: [
          { metric: "Price (FMP, Jun 12)", value: "$238.55", signal: "-14.4% from 52-week high" },
          { metric: "50-Day MA", value: "$254.77", signal: "Price BELOW 50MA ✗", good: false },
          { metric: "200-Day MA", value: "$232.51", signal: "Price ABOVE 200MA ✓", good: true },
          { metric: "50MA vs 200MA", value: "50MA > 200MA ✓", signal: "Golden Cross (bullish)", good: true },
          { metric: "52-Week High", value: "$278.56", signal: "Pivot level" },
          { metric: "52-Week Low", value: "$196.00", signal: "+22% above 52w low", good: false }
        ],
        eps: [
          { quarter: "Q1 (Most Recent)", growth: "+42.6%", pass: true, revenue: "Rev: -14.9%" },
          { quarter: "Q4", growth: "0.0%", pass: false, revenue: "—" },
          { quarter: "Q3", growth: "+16.1%", pass: false, revenue: "—" },
          { quarter: "Q2", growth: "+5.7%", pass: false, revenue: "—" }
        ],
        epsNote: "Last-reported quarter. Technically slipped below the 50MA this week.",
        alerts: [
          { type: "RECLAIM ALERT", price: "$255.00 — back above 50MA = re-arm" },
          { type: "PIVOT ALERT", price: "$278.56 — 52-week high" }
        ],
        notes: "Dropped below its 50MA; only 4/8 now. Above the 200MA with a golden cross, so the longer-term uptrend holds — watch for a base above the 200MA ($232) and a 50MA reclaim."
      },
      {
        rank: 6, ticker: "TSLA", name: "Tesla Inc.", sector: "Consumer Cyclical",
        status: "WATCHLIST", techScore: "4/8", dataDate: "FMP Live, Jun 12, 2026",
        technical: [
          { metric: "Price (FMP, Jun 12)", value: "$406.43", signal: "+1.8% on the day; -18.5% from ATH" },
          { metric: "50-Day MA", value: "$398.30", signal: "Price ABOVE 50MA ✓", good: true },
          { metric: "200-Day MA", value: "$415.69", signal: "Price BELOW 200MA ✗", good: false },
          { metric: "50MA vs 200MA", value: "50MA < 200MA ✗", signal: "Death Cross (bearish)", good: false },
          { metric: "52-Week High", value: "$498.83", signal: "Pivot level" },
          { metric: "52-Week Low", value: "$288.77", signal: "+41% above 52w low", good: true }
        ],
        eps: [
          { quarter: "Q1 (Most Recent)", growth: "-45.8%", pass: false, revenue: "Rev: -10.1%" },
          { quarter: "Q4", growth: "-38.5%", pass: false, revenue: "—" },
          { quarter: "Q3", growth: "+17.1%", pass: false, revenue: "—" },
          { quarter: "Q2", growth: "+186.6%", pass: true, revenue: "—" }
        ],
        epsNote: "Last-reported quarter; fundamentals weak. Thesis is autonomy/Robotaxi optionality.",
        alerts: [
          { type: "RECLAIM ALERT", price: "$416.00 — back above 200MA = re-arm" },
          { type: "PIVOT ALERT", price: "$498.83 — 52-week high" }
        ],
        notes: "Above its 50MA but below the 200MA with a death cross (50MA<200MA) — 4/8. Speculative; needs to reclaim the 200MA ($415.69) before it's a Minervini candidate again."
      }
    ],
    riskRules: [
      "Never risk more than 1–2% of total portfolio on any single trade.",
      "Always enter with a pre-defined stop loss — 8% below entry. No exceptions.",
      "Cut all losses immediately without hesitation. Do not average down.",
      "Never buy a stock that is more than 5% past its pivot (chasing = poor R:R).",
      "Take partial profits at Target 1 (+20%); trail the remainder with a tight stop.",
      "In a Confirmed Uptrend: 80–120% invested. Under Pressure: 50%. Downtrend: cash.",
      "If 3 consecutive trades fail, step back and reassess market conditions.",
      "ALWAYS verify price and volume live on TradingView 1D chart before placing any trade."
    ],
    verification: "Confirm current price, 50MA, 200MA, 52-week high, and 10-day average volume on TradingView 1D chart before any trade. Prices are June 12, 2026 close; volume triggers are NOT included in this refresh.",
    disclaimer: "For informational purposes only. Not financial advice."
  },
  {
    reportDate: "2026-06-01",
    title: "S&P 500 Momentum Screen",
    framework: "Minervini SEPA Framework — Weekly Report",
    market: {
      index: "S&P 500",
      verdict: "CONFIRMED UPTREND",
      verdictNote: "Deploy aggressively: 80–120% invested",
      metrics: [
        { metric: "S&P 500 Price (FMP, Jun 1)", value: "$7,577.27", signal: "Near 52-week high ($7,599.38)" },
        { metric: "50-Day MA", value: "$7,058.17", signal: "Price +7.4% above 50MA" },
        { metric: "200-Day MA", value: "$6,830.83", signal: "Price +10.9% above 200MA" },
        { metric: "52-Week Range", value: "$5,861.43 – $7,599.38", signal: "Currently at 99.7% of 52-week high" }
      ],
      sectorAsOf: "NASDAQ, June 1, 2026",
      sectors: [
        { sector: "Technology", change: 1.17 },
        { sector: "Energy", change: 0.78 },
        { sector: "Financial Services", change: 0.51 },
        { sector: "Consumer Defensive", change: -0.38 },
        { sector: "Industrials", change: -0.42 },
        { sector: "Basic Materials", change: -0.49 },
        { sector: "Real Estate", change: -0.51 },
        { sector: "Healthcare", change: -0.58 },
        { sector: "Communication Services", change: -1.23 },
        { sector: "Utilities", change: -1.31 },
        { sector: "Consumer Cyclical", change: -1.70 }
      ],
      sectorNote: "Technology (+1.17%) leads all sectors today — strongly supportive of this screen's tech-heavy holdings."
    },
    dataSources: [
      "Primary: FMP (Financial Modeling Prep) MCP Connector — live single-stock quotes",
      "FMP Batch Quote: ACCESS DENIED (plan limitation) — individual quotes used",
      "Secondary candidates: ACCESS DENIED on FMP (CRWD, PANW, NOW, etc. unavailable)",
      "Yahoo Finance JSON API: BLOCKED by sandbox firewall (403 Forbidden)",
      "Sector performance: FMP marketPerformance endpoint (live)"
    ],
    dataQualityNote: "All prices sourced from FMP live connector (single quote endpoint). The batch-quote endpoint and all non-NASDAQ-primary tickers returned ACCESS DENIED under the current FMP plan. Yahoo Finance fallback was blocked by sandbox firewall. All volume figures are ESTIMATED — verify on TradingView 1D chart.",
    dataQuality: [
      { ticker: "NVDA", source: "FMP Live (single quote)", date: "Jun 1, 2026", status: "IN REPORT" },
      { ticker: "AAPL", source: "FMP Live (single quote)", date: "Jun 1, 2026", status: "IN REPORT" },
      { ticker: "AMZN", source: "FMP Live (single quote)", date: "Jun 1, 2026", status: "IN REPORT" },
      { ticker: "AMD", source: "FMP Live (single quote)", date: "Jun 1, 2026", status: "IN REPORT" },
      { ticker: "MSFT", source: "FMP Live (single quote)", date: "Jun 1, 2026", status: "IN REPORT" },
      { ticker: "META", source: "FMP Live (single quote)", date: "Jun 1, 2026", status: "FAILED SCREEN — not in Top 10" },
      { ticker: "PLTR", source: "FMP Live (single quote)", date: "Jun 1, 2026", status: "IN REPORT" },
      { ticker: "TSLA", source: "FMP Live (single quote)", date: "Jun 1, 2026", status: "IN REPORT" },
      { ticker: "NFLX", source: "FMP Live (single quote)", date: "Jun 1, 2026", status: "FAILED SCREEN — not in Top 10" },
      { ticker: "UBER", source: "FMP Live (single quote)", date: "Jun 1, 2026", status: "FAILED SCREEN — not in Top 10" },
      { ticker: "AVGO", source: "FMP — ACCESS DENIED", date: "N/A", status: "EXCLUDED — Verify on TradingView" },
      { ticker: "CRWD/NOW/PANW/AXON/ANET/etc.", source: "FMP — ACCESS DENIED", date: "N/A", status: "EXCLUDED — FMP plan limitation; secondary screen skipped" }
    ],
    criteria: [
      { key: "c1", label: "Price > 150MA" },
      { key: "c2", label: "Price > 200MA" },
      { key: "c3", label: "200MA Trending Up" },
      { key: "c4", label: "50MA > 200MA" },
      { key: "c5", label: "Price > 50MA" },
      { key: "c6", label: "Price ≥ 30% Above 52wLow" },
      { key: "c7", label: "Price Within 25% of 52wHigh" },
      { key: "c8", label: "RS ≥ 80 Proxy (within 15% of 52wHigh)" }
    ],
    summary: [
      { ticker: "NVDA", flags: [1,1,1,1,1,1,1,1], score: "8/8", result: "PASS" },
      { ticker: "AAPL", flags: [1,1,1,1,1,1,1,1], score: "8/8", result: "PASS" },
      { ticker: "AMZN", flags: [1,1,1,1,1,1,1,1], score: "8/8", result: "PASS" },
      { ticker: "AMD",  flags: [1,1,1,1,1,1,1,1], score: "8/8", result: "PASS" },
      { ticker: "TSLA", flags: [1,1,1,0,1,1,1,0], score: "6/8", result: "PASS" },
      { ticker: "PLTR", flags: [1,0,1,0,1,1,1,0], score: "5/8", result: "WATCHLIST" },
      { ticker: "MSFT", flags: [1,1,0,0,1,0,1,0], score: "5/8", result: "WATCHLIST" },
      { ticker: "META", flags: [0,0,0,0,0,0,1,0], score: "1/8", result: "FAIL" },
      { ticker: "NFLX", flags: [0,0,0,0,0,0,0,0], score: "0/8", result: "FAIL" },
      { ticker: "UBER", flags: [0,0,0,0,0,0,0,0], score: "0/8", result: "FAIL" }
    ],
    stocksNote: "Only 7 stocks returned data. Secondary candidates (CRWD, PANW, NOW, AXON, ANET, SMCI, LRCX, ORCL) were unavailable due to FMP plan limitations. AVGO also returned ACCESS DENIED. Screen results limited to 7 names. Verify secondary names on TradingView independently.",
    stocks: [
      {
        rank: 1, ticker: "NVDA", name: "NVIDIA Corporation", sector: "Technology",
        status: "BUY NOW", techScore: "8/8", dataDate: "FMP Live, Jun 1, 2026",
        technical: [
          { metric: "Price (FMP, Jun 1)", value: "$220.93", signal: "-6.6% from 52-week high" },
          { metric: "50-Day MA", value: "$199.35", signal: "Price ABOVE 50MA ✓", good: true },
          { metric: "200-Day MA", value: "$187.65", signal: "Price ABOVE 200MA ✓", good: true },
          { metric: "50MA vs 200MA", value: "50MA > 200MA ✓", signal: "Golden Cross (bullish)", good: true },
          { metric: "52-Week High", value: "$236.54", signal: "6.6% below ATH" },
          { metric: "52-Week Low", value: "$135.40", signal: "+63% above 52w low", good: true }
        ],
        eps: [
          { quarter: "Q1 (Most Recent)", growth: "+35.8%", pass: true, revenue: "Rev: +19.8%" },
          { quarter: "Q4", growth: "+35.4%", pass: true, revenue: "—" },
          { quarter: "Q3", growth: "+20.4%", pass: false, revenue: "—" },
          { quarter: "Q2", growth: "+42.1%", pass: true, revenue: "—" }
        ],
        epsNote: "Consistent EPS acceleration: +35.8% most recent Q",
        entry: {
          pivot: "$236.54 (52-week high / VCP pivot)",
          entryCondition: "Close ABOVE $236.54 on daily candle",
          volumeTrigger: "≥350,000,000 shares (est. avgVol × 1.40) — VERIFY ON TRADINGVIEW",
          stop: "$217.62 (exit immediately if closed below)",
          target1: "$283.85 — take 50% of position",
          target2: "$307.50 — trail remaining with 8% stop",
          rr: "2.5:1 (minimum 2.5:1 required)",
          sizing: "50% initial at pivot | 30% at first add-on | 20% at third entry"
        },
        alerts: [
          { type: "BREAKOUT ALERT", price: "$236.55 — Alert: \"NVDA above pivot 236.55\"" },
          { type: "WARNING LEVEL", price: "$220.00 — Price approaching stop zone" },
          { type: "STOP ALERT", price: "$217.62 — HARD STOP — EXIT ALL SHARES" }
        ],
        notes: "NVIDIA continues to dominate AI accelerator hardware with Blackwell architecture. Data center demand remains robust with Q1 FY2027 showing +19.8% revenue growth and +35.8% EPS growth. Trading 93.4% of 52-week high — just below ATH breakout level. The world's most profitable AI infrastructure play."
      },
      {
        rank: 2, ticker: "AAPL", name: "Apple Inc.", sector: "Technology",
        status: "BUY NOW", techScore: "8/8", dataDate: "FMP Live, Jun 1, 2026",
        technical: [
          { metric: "Price (FMP, Jun 1)", value: "$309.76", signal: "-1.7% from 52-week high" },
          { metric: "50-Day MA", value: "$275.28", signal: "Price ABOVE 50MA ✓", good: true },
          { metric: "200-Day MA", value: "$263.24", signal: "Price ABOVE 200MA ✓", good: true },
          { metric: "50MA vs 200MA", value: "50MA > 200MA ✓", signal: "Golden Cross (bullish)", good: true },
          { metric: "52-Week High", value: "$315.00", signal: "1.7% below ATH" },
          { metric: "52-Week Low", value: "$195.07", signal: "+59% above 52w low", good: true }
        ],
        eps: [
          { quarter: "Q1 (Most Recent)", growth: "-29.2%", pass: false, revenue: "Rev: -22.7%" },
          { quarter: "Q4", growth: "+53.5%", pass: true, revenue: "—" },
          { quarter: "Q3", growth: "+17.8%", pass: false, revenue: "—" },
          { quarter: "Q2", growth: "-4.8%", pass: false, revenue: "—" }
        ],
        epsNote: "Q1 FY2026 EPS +53.5%; Q2 March quarter historically soft. Verify with next quarter.",
        entry: {
          pivot: "$315.00 (52-week high / VCP pivot)",
          entryCondition: "Close ABOVE $315.00 on daily candle",
          volumeTrigger: "≥112,000,000 shares (est. avgVol × 1.40) — VERIFY ON TRADINGVIEW",
          stop: "$289.80 (exit immediately if closed below)",
          target1: "$378.00 — take 50% of position",
          target2: "$409.50 — trail remaining with 8% stop",
          rr: "2.5:1 (minimum 2.5:1 required)",
          sizing: "50% initial at pivot | 30% at first add-on | 20% at third entry"
        },
        alerts: [
          { type: "BREAKOUT ALERT", price: "$315.01 — Alert: \"AAPL above pivot 315.01\"" },
          { type: "WARNING LEVEL", price: "$295.00 — Price approaching stop zone" },
          { type: "STOP ALERT", price: "$289.80 — HARD STOP — EXIT ALL SHARES" }
        ],
        notes: "Apple trades within 1.7% of its 52-week high, reflecting strong product cycles and services momentum. Technically a perfect 8/8 Minervini setup. Note: March quarter seasonally weak (-29% EPS); the December quarter showed explosive +53.5% EPS. Monitor WWDC catalysts and next earnings for confirmation."
      },
      {
        rank: 3, ticker: "AMZN", name: "Amazon.com Inc.", sector: "Consumer Cyclical",
        status: "BUY NOW", techScore: "8/8", dataDate: "FMP Live, Jun 1, 2026",
        technical: [
          { metric: "Price (FMP, Jun 1)", value: "$264.51", signal: "-5.0% from 52-week high" },
          { metric: "50-Day MA", value: "$246.67", signal: "Price ABOVE 50MA ✓", good: true },
          { metric: "200-Day MA", value: "$231.52", signal: "Price ABOVE 200MA ✓", good: true },
          { metric: "50MA vs 200MA", value: "50MA > 200MA ✓", signal: "Golden Cross (bullish)", good: true },
          { metric: "52-Week High", value: "$278.56", signal: "5.0% below ATH" },
          { metric: "52-Week Low", value: "$196.00", signal: "+35% above 52w low", good: true }
        ],
        eps: [
          { quarter: "Q1 (Most Recent)", growth: "+42.6%", pass: true, revenue: "Rev: -14.9%" },
          { quarter: "Q4", growth: "0.0%", pass: false, revenue: "—" },
          { quarter: "Q3", growth: "+16.1%", pass: false, revenue: "—" },
          { quarter: "Q2", growth: "+5.7%", pass: false, revenue: "—" }
        ],
        epsNote: "Q1 2026 EPS +42.6% YoY; non-operating gains drove beat. AWS growth key watch.",
        entry: {
          pivot: "$278.56 (52-week high / VCP pivot)",
          entryCondition: "Close ABOVE $278.56 on daily candle",
          volumeTrigger: "≥70,000,000 shares (est. avgVol × 1.40) — VERIFY ON TRADINGVIEW",
          stop: "$256.28 (exit immediately if closed below)",
          target1: "$334.27 — take 50% of position",
          target2: "$362.13 — trail remaining with 8% stop",
          rr: "2.5:1 (minimum 2.5:1 required)",
          sizing: "50% initial at pivot | 30% at first add-on | 20% at third entry"
        },
        alerts: [
          { type: "BREAKOUT ALERT", price: "$278.57 — Alert: \"AMZN above pivot 278.57\"" },
          { type: "WARNING LEVEL", price: "$268.00 — Price approaching stop zone" },
          { type: "STOP ALERT", price: "$256.28 — HARD STOP — EXIT ALL SHARES" }
        ],
        notes: "Amazon trades at 94.9% of its 52-week high with all MAs aligned bullishly. AWS continues to drive high-margin earnings growth. Q1 2026 showed EPS +42.6% with AWS gaining share in AI workloads. Clean 8/8 Minervini setup approaching ATH breakout."
      },
      {
        rank: 4, ticker: "AMD", name: "Advanced Micro Devices", sector: "Technology",
        status: "BUY NOW", techScore: "8/8", dataDate: "FMP Live, Jun 1, 2026",
        technical: [
          { metric: "Price (FMP, Jun 1)", value: "$497.51", signal: "-5.6% from 52-week high" },
          { metric: "50-Day MA", value: "$328.15", signal: "Price ABOVE 50MA ✓", good: true },
          { metric: "200-Day MA", value: "$237.58", signal: "Price ABOVE 200MA ✓", good: true },
          { metric: "50MA vs 200MA", value: "50MA > 200MA ✓", signal: "Golden Cross (bullish)", good: true },
          { metric: "52-Week High", value: "$527.20", signal: "5.6% below ATH" },
          { metric: "52-Week Low", value: "$111.01", signal: "+348% above 52w low", good: true }
        ],
        eps: [
          { quarter: "Q1 (Most Recent)", growth: "-8.7%", pass: false, revenue: "Rev: -0.2%" },
          { quarter: "Q4", growth: "+21.1%", pass: false, revenue: "—" },
          { quarter: "Q3", growth: "+40.7%", pass: true, revenue: "—" },
          { quarter: "Q2", growth: "+22.7%", pass: false, revenue: "—" }
        ],
        epsNote: "Q1 2026 EPS -8.7%; prior 3Q showed acceleration. Watch MI300X ramp.",
        entry: {
          pivot: "$527.20 (52-week high / VCP pivot)",
          entryCondition: "Close ABOVE $527.20 on daily candle",
          volumeTrigger: "≥126,000,000 shares (est. avgVol × 1.40) — VERIFY ON TRADINGVIEW",
          stop: "$485.02 (exit immediately if closed below)",
          target1: "$632.64 — take 50% of position",
          target2: "$685.36 — trail remaining with 8% stop",
          rr: "2.5:1 (minimum 2.5:1 required)",
          sizing: "50% initial at pivot | 30% at first add-on | 20% at third entry"
        },
        alerts: [
          { type: "BREAKOUT ALERT", price: "$527.21 — Alert: \"AMD above pivot 527.21\"" },
          { type: "WARNING LEVEL", price: "$510.00 — Price approaching stop zone" },
          { type: "STOP ALERT", price: "$485.02 — HARD STOP — EXIT ALL SHARES" }
        ],
        notes: "AMD has surged +348% from its 52-week low, reflecting a massive fundamental re-rating driven by MI300X AI GPU demand. Trades 94.4% of ATH. While most recent EPS dipped, the prior 3 quarters showed strong acceleration. A confirmed break above $527 would be a major new high breakout."
      },
      {
        rank: 5, ticker: "TSLA", name: "Tesla Inc.", sector: "Consumer Cyclical",
        status: "BUY NOW (Speculative)", techScore: "6/8", dataDate: "FMP Live, Jun 1, 2026",
        technical: [
          { metric: "Price (FMP, Jun 1)", value: "$423.00", signal: "-15.2% from 52-week high" },
          { metric: "50-Day MA", value: "$391.80", signal: "Price ABOVE 50MA ✓", good: true },
          { metric: "200-Day MA", value: "$412.13", signal: "Price ABOVE 200MA ✓", good: true },
          { metric: "50MA vs 200MA", value: "50MA < 200MA ✗", signal: "Death Cross (bearish)", good: false },
          { metric: "52-Week High", value: "$498.83", signal: "15.2% below ATH" },
          { metric: "52-Week Low", value: "$273.21", signal: "+55% above 52w low", good: true }
        ],
        eps: [
          { quarter: "Q1 (Most Recent)", growth: "-45.8%", pass: false, revenue: "Rev: -10.1%" },
          { quarter: "Q4", growth: "-38.5%", pass: false, revenue: "—" },
          { quarter: "Q3", growth: "+17.1%", pass: false, revenue: "—" },
          { quarter: "Q2", growth: "+186.6%", pass: true, revenue: "—" }
        ],
        epsNote: "EPS down 45.8% most recent Q. Revenue -10%. Autonomous driving optionality is the thesis.",
        entry: {
          pivot: "$498.83 (52-week high / VCP pivot)",
          entryCondition: "Close ABOVE $498.83 on daily candle",
          volumeTrigger: "≥140,000,000 shares (est. avgVol × 1.40) — VERIFY ON TRADINGVIEW",
          stop: "$458.92 (exit immediately if closed below)",
          target1: "$598.60 — take 50% of position",
          target2: "$648.48 — trail remaining with 8% stop",
          rr: "2.5:1 (minimum 2.5:1 required)",
          sizing: "50% initial at pivot | 30% at first add-on | 20% at third entry"
        },
        alerts: [
          { type: "BREAKOUT ALERT", price: "$498.84 — Alert: \"TSLA above pivot 498.84\"" },
          { type: "WARNING LEVEL", price: "$430.00 — Price approaching stop zone" },
          { type: "STOP ALERT", price: "$458.92 — HARD STOP — EXIT ALL SHARES" }
        ],
        notes: "Tesla passes 6/8 Minervini criteria despite declining EPS, reflecting market pricing of Robotaxi and autonomous driving optionality. Price > 200MA by just 2.6% — critical support level. CAUTION: fundamentals are weak. Only enter on confirmed 52-week high breakout above $498.83 with heavy volume."
      },
      {
        rank: 6, ticker: "PLTR", name: "Palantir Technologies", sector: "Technology",
        status: "WATCHLIST — Near Buy", techScore: "5/8", dataDate: "FMP Live, Jun 1, 2026",
        technical: [
          { metric: "Price (FMP, Jun 1)", value: "$158.07", signal: "-23.8% from 52-week high" },
          { metric: "50-Day MA", value: "$141.79", signal: "Price ABOVE 50MA ✓", good: true },
          { metric: "200-Day MA", value: "$161.78", signal: "Price BELOW 200MA ✗", good: false },
          { metric: "50MA vs 200MA", value: "50MA < 200MA ✗", signal: "Death Cross (bearish)", good: false },
          { metric: "52-Week High", value: "$207.52", signal: "23.8% below ATH" },
          { metric: "52-Week Low", value: "$118.93", signal: "+33% above 52w low", good: true }
        ],
        eps: [
          { quarter: "Q1 (Most Recent)", growth: "+41.7%", pass: true, revenue: "Rev: +16.0%" },
          { quarter: "Q4", growth: "+26.3%", pass: true, revenue: "—" },
          { quarter: "Q3", growth: "+46.2%", pass: true, revenue: "—" },
          { quarter: "Q2", growth: "+55.1%", pass: true, revenue: "—" }
        ],
        epsNote: "Best fundamental profile in screen: EPS +41.7% Q1, consistent 4Q acceleration.",
        entry: {
          pivot: "$161.78 (52-week high / VCP pivot)",
          entryCondition: "Close ABOVE $161.78 on daily candle",
          volumeTrigger: "≥168,000,000 shares (est. avgVol × 1.40) — VERIFY ON TRADINGVIEW",
          stop: "$148.84 (exit immediately if closed below)",
          target1: "$194.14 — take 50% of position",
          target2: "$210.31 — trail remaining with 8% stop",
          rr: "2.5:1 (minimum 2.5:1 required)",
          sizing: "50% initial at pivot | 30% at first add-on | 20% at third entry"
        },
        alerts: [
          { type: "BREAKOUT ALERT", price: "$161.79 — Alert: \"PLTR above pivot 161.79\"" },
          { type: "WARNING LEVEL", price: "$155.00 — Price approaching stop zone" },
          { type: "STOP ALERT", price: "$148.84 — HARD STOP — EXIT ALL SHARES" }
        ],
        notes: "Palantir has the strongest fundamental profile in this screen with 4 consecutive quarters of 25%+ EPS growth and accelerating revenue. Technically WATCHLIST: price sits just below its 200MA ($161.78). A daily close above $161.78 on heavy volume would trigger a buy. Government + commercial AI software demand continues to compound."
      },
      {
        rank: 7, ticker: "MSFT", name: "Microsoft Corporation", sector: "Technology",
        status: "WATCHLIST", techScore: "5/8", dataDate: "FMP Live, Jun 1, 2026",
        technical: [
          { metric: "Price (FMP, Jun 1)", value: "$461.04", signal: "-17.0% from 52-week high" },
          { metric: "50-Day MA", value: "$402.83", signal: "Price ABOVE 50MA ✓", good: true },
          { metric: "200-Day MA", value: "$458.46", signal: "Price ABOVE 200MA ✓", good: true },
          { metric: "50MA vs 200MA", value: "50MA < 200MA ✗", signal: "Death Cross (bearish)", good: false },
          { metric: "52-Week High", value: "$555.45", signal: "17.0% below ATH" },
          { metric: "52-Week Low", value: "$356.28", signal: "+29% above 52w low", good: true }
        ],
        eps: [
          { quarter: "Q1 (Most Recent)", growth: "-17.2%", pass: false, revenue: "Rev: +2.0%" },
          { quarter: "Q4", growth: "+38.7%", pass: true, revenue: "—" },
          { quarter: "Q3", growth: "+1.9%", pass: false, revenue: "—" },
          { quarter: "Q2", growth: "+5.5%", pass: false, revenue: "—" }
        ],
        epsNote: "Q3 FY2026 EPS -17.2%; 50MA below 200MA (death cross). Needs repair.",
        entry: {
          pivot: "$555.45 (52-week high / VCP pivot)",
          entryCondition: "Close ABOVE $555.45 on daily candle",
          volumeTrigger: "≥35,000,000 shares (est. avgVol × 1.40) — VERIFY ON TRADINGVIEW",
          stop: "$511.01 (exit immediately if closed below)",
          target1: "$666.54 — take 50% of position",
          target2: "$722.09 — trail remaining with 8% stop",
          rr: "2.5:1 (minimum 2.5:1 required)",
          sizing: "50% initial at pivot | 30% at first add-on | 20% at third entry"
        },
        alerts: [
          { type: "BREAKOUT ALERT", price: "$555.46 — Alert: \"MSFT above pivot 555.46\"" },
          { type: "WARNING LEVEL", price: "$475.00 — Price approaching stop zone" },
          { type: "STOP ALERT", price: "$511.01 — HARD STOP — EXIT ALL SHARES" }
        ],
        notes: "Microsoft is in repair mode: 50MA ($402) has crossed below 200MA ($458) — a technical death cross. Recent EPS declined -17.2% in Q3 FY2026. However, Azure AI momentum remains real. Watch for 50MA to recross above 200MA before considering entry. Long-term setup remains intact with ATH target $555.45."
      }
    ],
    riskRules: [
      "Never risk more than 1–2% of total portfolio on any single trade.",
      "Always enter with a pre-defined stop loss — 8% below entry. No exceptions.",
      "Cut all losses immediately without hesitation. Do not average down.",
      "Never buy a stock that is more than 5% past its pivot (chasing = poor R:R).",
      "Take partial profits at Target 1 (+20%); trail the remainder with a tight stop.",
      "In a Confirmed Uptrend: 80–120% invested. Under Pressure: 50%. Downtrend: cash.",
      "If 3 consecutive trades fail, step back and reassess market conditions.",
      "ALWAYS verify price and volume live on TradingView 1D chart before placing any trade."
    ],
    verification: "Always confirm current price, 50MA, 200MA, 52-week high, and average volume (MA 50) on TradingView 1D chart before placing any trade. All volume figures in this report are ESTIMATED. Prices were live as of June 1, 2026 market hours.",
    disclaimer: "For informational purposes only. Not financial advice."
  }
];
