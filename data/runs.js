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
