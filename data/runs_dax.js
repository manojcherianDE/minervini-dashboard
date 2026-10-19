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
    reportDate: "2026-10-19",
    title: "Germany Broad — DAX+MDAX+SDAX",
    framework: "Minervini SEPA Framework (v3 engine, regime-gated) | German Equities — DAX + MDAX + SDAX",
    market: {
      index: "Germany Broad — DAX+MDAX+SDAX · Breadth UNDER PRESSURE · 47.7% > 200MA",
      verdict: "UNDER PRESSURE",
      verdictNote: "REGIME GATE ACTIVE — no name can be BUY or SETUP this week. Breadth across 155 German names: 47.7% above the 200-day (uptrend needs >=60%), 40.0% above the 50-day, 29.0% stacked 50>150>200 (needs >=45%). The gate downgraded 4 would-be BUY NOW and 26 would-be SETUP names to EXTENDED — WATCH. Several of these are not real setups: DHER (Uber EUR 41.50 bid) and NA9 (Persistent EUR 81 bid) are deal-spread pins, and YOU, ECV, KCO, B4B, COP and AOX carry stale bars from delistings/takeovers. No index quote is used — the verdict comes purely from breadth. Universe = DAX + MDAX + SDAX (177 attempted, 155 evaluated). Narrow, top-heavy tape. Data through 2026-10-19.",
      metrics: [
        { metric: "% above 200-day MA", value: "47.7%", signal: "Uptrend needs >=60%", good: false },
        { metric: "% above 50-day MA", value: "40.0%", signal: "Short-term participation weak", good: false },
        { metric: "% stacked 50 > 150 > 200", value: "29.0%", signal: "Uptrend needs >=45%", good: false },
        { metric: "Names gated out by the market", value: "30", signal: "4 would-be BUY NOW + 26 would-be SETUP" }
      ],
      sectorAsOf: "",
      sectors: [],
      sectorNote: "Clean gated leaders (ex deal pins and delisted names): DHL, DB1, SY1, GFT, INH, EVK, BNR, MRK. Only DHL and GFT pair a near-pivot VCP with EPS growth >=25%. Quick-run caveat: the M&A check this week reused last run's findings (DHER, NA9 bids; stale delisted names) and did not re-search every featured ticker."
    },
    dataSources: [
      "stockanalysis.com (ETR-*) — 5Y daily OHLCV per name via in-app browser, 155 of 177 symbols",
      "Deterministic v3 engine (browser JS port of engine.py) — 8-criterion trend template, RS percentile vs the 155-name universe, algorithmic VCP, breadth regime gate",
      "stockanalysis.com quarterly financials (EPS / revenue growth YoY) for featured names",
      "Verify live on TradingView (XETR)."
    ],
    dataQualityNote: "155/177 tickers evaluated; 22 failed (retired/mistyped symbols, CGN short history) — same set as the prior run. 9 stale names carry an old last bar (YOU, ECV, KCO, B4B, COP, AOX, BIO3, SHA, M5Z), mostly delisted after takeovers. The 155-row payload transfer was replaced by a direct JSON read of the top rows (base64 copy mismatch); engine numbers are unchanged. Spec's de_universe.txt holds only 40 DAX names, so the 177-name de_universe_broad_176.txt + DHER list was used for comparability.",
    dataQuality: [
      { ticker: "Universe", source: "de_universe_broad_176.txt + DHER", date: "2026-10-19", status: "177 requested, 155 IN REPORT" },
      { ticker: "Price history", source: "stockanalysis.com", date: "2026-10-19", status: "155 OK / 22 FAILED" },
      { ticker: "YOU, ECV, KCO, B4B, COP, AOX, BIO3, SHA, M5Z", source: "stockanalysis.com", date: "2026-10-19", status: "STALE — 9 names, old last bar" },
      { ticker: "Engine v3 + VCP", source: "browser engine", date: "2026-10-19", status: "COMPUTED" }
    ],
    criteria: [
      { key: "c1", label: "Price > 200MA" },
      { key: "c2", label: "200MA Trending Up" },
      { key: "c3", label: "Price >= 30% Above 52W Low" },
      { key: "c4", label: "Within 25% of 52W High" },
      { key: "c5", label: "50MA > 200MA" },
      { key: "c6", label: "Price > 50MA" },
      { key: "c7", label: "RS >= 70 (vs universe)" }
    ],
    summary: [
      { ticker: "DHER", flags: [1,1,1,1,1,1,1], score: "7/7", result: "FAIL" },
      { ticker: "YOU", flags: [0,1,1,1,0,1,1], score: "5/7", result: "FAIL" },
      { ticker: "ECV", flags: [1,1,1,1,1,1,1], score: "7/7", result: "FAIL" },
      { ticker: "ALV", flags: [1,1,0,1,1,0,1], score: "5/7", result: "FAIL" },
      { ticker: "KCO", flags: [1,1,1,1,1,0,1], score: "6/7", result: "FAIL" },
      { ticker: "GFT", flags: [1,1,1,1,1,1,1], score: "7/7", result: "FAIL" },
      { ticker: "INH", flags: [1,1,1,1,1,1,1], score: "7/7", result: "FAIL" },
      { ticker: "EVK", flags: [1,1,1,1,1,1,1], score: "7/7", result: "FAIL" },
      { ticker: "NA9", flags: [1,1,1,1,1,1,1], score: "7/7", result: "FAIL" },
      { ticker: "SGL", flags: [1,1,1,1,1,1,1], score: "7/7", result: "FAIL" },
      { ticker: "DB1", flags: [1,1,1,1,1,1,1], score: "7/7", result: "FAIL" },
      { ticker: "TKA", flags: [1,1,1,1,1,0,1], score: "6/7", result: "FAIL" },
      { ticker: "SY1", flags: [1,1,1,1,1,1,1], score: "7/7", result: "FAIL" },
      { ticker: "B4B", flags: [1,1,1,1,1,0,1], score: "6/7", result: "FAIL" },
      { ticker: "SFQ", flags: [1,1,1,1,1,0,1], score: "6/7", result: "FAIL" },
      { ticker: "DHL", flags: [1,1,1,1,1,1,1], score: "7/7", result: "FAIL" },
      { ticker: "TMV", flags: [1,1,1,1,1,1,1], score: "7/7", result: "FAIL" },
      { ticker: "FPE3", flags: [1,1,1,1,1,1,1], score: "7/7", result: "FAIL" },
      { ticker: "BNR", flags: [1,1,1,1,1,1,1], score: "7/7", result: "FAIL" },
      { ticker: "MRK", flags: [1,1,1,1,1,1,1], score: "7/7", result: "FAIL" },
      { ticker: "RHK", flags: [1,1,0,1,1,0,1], score: "5/7", result: "FAIL" },
      { ticker: "COP", flags: [1,1,1,1,1,1,1], score: "7/7", result: "FAIL" },
      { ticker: "SRT3", flags: [1,1,1,1,0,1,1], score: "6/7", result: "FAIL" },
      { ticker: "SRT", flags: [1,1,1,1,0,1,1], score: "6/7", result: "FAIL" },
      { ticker: "TLX", flags: [1,1,0,1,1,1,1], score: "6/7", result: "FAIL" },
      { ticker: "SZU", flags: [1,1,1,1,1,0,1], score: "6/7", result: "FAIL" },
      { ticker: "BAYN", flags: [0,1,1,1,1,0,1], score: "5/7", result: "FAIL" },
      { ticker: "BAS", flags: [1,1,0,1,1,1,1], score: "6/7", result: "FAIL" },
      { ticker: "HNR1", flags: [1,1,0,1,1,1,1], score: "6/7", result: "FAIL" },
      { ticker: "RWE", flags: [0,1,1,1,1,0,1], score: "5/7", result: "FAIL" },
      { ticker: "S92", flags: [0,1,1,1,1,0,1], score: "5/7", result: "FAIL" },
      { ticker: "GMM", flags: [1,1,1,0,1,0,1], score: "5/7", result: "FAIL" },
      { ticker: "GXI", flags: [1,1,1,1,1,1,1], score: "7/7", result: "FAIL" },
      { ticker: "AOX", flags: [0,1,1,1,0,1,1], score: "5/7", result: "FAIL" },
      { ticker: "ZIL2", flags: [1,1,1,1,0,1,1], score: "6/7", result: "FAIL" },
      { ticker: "SAP", flags: [1,0,1,1,0,1,1], score: "5/7", result: "WATCHLIST" },
      { ticker: "IFX", flags: [0,1,1,0,0,0,0], score: "2/7", result: "FAIL" },
      { ticker: "RHM", flags: [0,0,0,0,0,1,0], score: "1/7", result: "FAIL" }
    ],
    stocks: [
      {
        rank: 1, ticker: "ALV", name: "Allianz SE (DAX)", sector: "",
        status: "EXTENDED — WATCH (gated by market)",
        techScore: "6/8",
        dataDate: "stockanalysis.com, 2026-10-19",
        technical: [
          { metric: "Price", value: "€425.90", signal: "6.3% from 52W high" },
          { metric: "50-Day MA", value: "€435.39", signal: "Ext -2.2% vs 50MA", good: true },
          { metric: "200-Day MA", value: "€398.78", signal: "Price above 200MA", good: true },
          { metric: "52-Week High", value: "€454.60", signal: "Pivot reference" },
          { metric: "RS Rank", value: "73", signal: "vs German universe", good: true },
          { metric: "VCP", value: "VCP CONFIRMED", signal: "Tightness 5.8%, volume drying" },
          { metric: "EPS / Revenue", value: "FAIL", signal: "EPS -7.99% / Rev 12.09% YoY (Q2 2026)" }
        ],
        entry: { pivot: "€444.10", entryCondition: "Daily close above €444.10 on volume >= 675,628 shares (1.4x 50-day avg)", volumeTrigger: ">= 675,628 shares — VERIFY ON TRADINGVIEW (XETR)", stop: "€410.79", target1: "€532.92", target2: "€577.33", rr: "2.67" },
        alerts: [ { type: "BREAKOUT ALERT", price: "€444.11" }, { type: "WARNING LEVEL", price: "€421.89" }, { type: "STOP ALERT", price: "€410.79" } ],
        notes: "Only would-be BUY NOW left after the M&A screen (VCP CONFIRMED) — GATED by the market. Price sits 2% below its 50MA (extension negative), so the engine's pivot is a recent-high reference rather than a tight base. Latest EPS -8%: a defensive technical setup, not a growth leader. No new bid found in the quick check. Exit: hard stop intraday; trend exit only on a WEEKLY close >3% below the 50MA; 4-6 week cooldown after any stop. Not actionable while the market gate is active."
      },
      {
        rank: 2, ticker: "GFT", name: "GFT Technologies (SDAX)", sector: "",
        status: "EXTENDED — WATCH (gated by market)",
        techScore: "8/8",
        dataDate: "stockanalysis.com, 2026-10-19",
        technical: [
          { metric: "Price", value: "€27.50", signal: "2.5% from 52W high" },
          { metric: "50-Day MA", value: "€25.25", signal: "Ext +8.9% vs 50MA", good: true },
          { metric: "200-Day MA", value: "€21.15", signal: "Price above 200MA", good: true },
          { metric: "52-Week High", value: "€28.20", signal: "Pivot reference" },
          { metric: "RS Rank", value: "98", signal: "vs German universe", good: true },
          { metric: "VCP", value: "VCP FORMING", signal: "Tightness 10.8%, volume not drying" },
          { metric: "EPS / Revenue", value: "STRONG PASS", signal: "EPS 35.14% / Rev 6.12% YoY (Q2 2026)" }
        ],
        entry: { pivot: "€28.20", entryCondition: "Daily close above €28.20 on volume >= 100,076 shares (1.4x 50-day avg)", volumeTrigger: ">= 100,076 shares — VERIFY ON TRADINGVIEW (XETR)", stop: "€26.09", target1: "€33.84", target2: "€36.66", rr: "2.67" },
        alerts: [ { type: "BREAKOUT ALERT", price: "€28.21" }, { type: "WARNING LEVEL", price: "€26.79" }, { type: "STOP ALERT", price: "€26.09" } ],
        notes: "EPS accelerating (+35%) but revenue only +6% (FLAG). Volume not drying. Thin liquidity (~71k shares/day): the 1.4x trigger is ~100k shares; size down. Exit: hard stop intraday; trend exit only on a WEEKLY close >3% below the 50MA; 4-6 week cooldown after any stop. Not actionable while the market gate is active."
      },
      {
        rank: 3, ticker: "INH", name: "INDUS Holding (SDAX)", sector: "",
        status: "EXTENDED — WATCH (gated by market)",
        techScore: "8/8",
        dataDate: "stockanalysis.com, 2026-10-19",
        technical: [
          { metric: "Price", value: "€38.15", signal: "10.7% from 52W high" },
          { metric: "50-Day MA", value: "€37.29", signal: "Ext +2.3% vs 50MA", good: true },
          { metric: "200-Day MA", value: "€31.32", signal: "Price above 200MA", good: true },
          { metric: "52-Week High", value: "€42.70", signal: "Pivot reference" },
          { metric: "RS Rank", value: "97", signal: "vs German universe", good: true },
          { metric: "VCP", value: "VCP FORMING", signal: "Tightness 13.5%, volume drying" },
          { metric: "EPS / Revenue", value: "PASS", signal: "EPS 270% / Rev 20.58% YoY (Q2 2026)" }
        ],
        entry: { pivot: "€42.70", entryCondition: "Daily close above €42.70 on volume >= 59,420 shares (1.4x 50-day avg)", volumeTrigger: ">= 59,420 shares — VERIFY ON TRADINGVIEW (XETR)", stop: "€39.50", target1: "€51.24", target2: "€55.51", rr: "2.67" },
        alerts: [ { type: "BREAKOUT ALERT", price: "€42.71" }, { type: "WARNING LEVEL", price: "€40.56" }, { type: "STOP ALERT", price: "€39.50" } ],
        notes: "Pivot is ~12% above price, not a near buy point. Very thin (~42k shares/day): liquidity risk — consider skipping or sizing down. Exit: hard stop intraday; trend exit only on a WEEKLY close >3% below the 50MA; 4-6 week cooldown after any stop. Not actionable while the market gate is active."
      },
      {
        rank: 4, ticker: "EVK", name: "Evonik Industries (MDAX)", sector: "",
        status: "EXTENDED — WATCH (gated by market)",
        techScore: "8/8",
        dataDate: "stockanalysis.com, 2026-10-19",
        technical: [
          { metric: "Price", value: "€21.34", signal: "2.3% from 52W high" },
          { metric: "50-Day MA", value: "€19.09", signal: "Ext +11.8% vs 50MA", good: true },
          { metric: "200-Day MA", value: "€16.66", signal: "Price above 200MA", good: true },
          { metric: "52-Week High", value: "€21.84", signal: "Pivot reference" },
          { metric: "RS Rank", value: "96", signal: "vs German universe", good: true },
          { metric: "VCP", value: "VCP FORMING", signal: "Tightness 6.6%, volume drying" },
          { metric: "EPS / Revenue", value: "FAIL", signal: "EPS -30.77% / Rev 11.26% YoY (Q2 2026)" }
        ],
        entry: { pivot: "€21.84", entryCondition: "Daily close above €21.84 on volume >= 1,873,813 shares (1.4x 50-day avg)", volumeTrigger: ">= 1,873,813 shares — VERIFY ON TRADINGVIEW (XETR)", stop: "€20.20", target1: "€26.21", target2: "€28.39", rr: "2.67" },
        alerts: [ { type: "BREAKOUT ALERT", price: "€21.85" }, { type: "WARNING LEVEL", price: "€20.75" }, { type: "STOP ALERT", price: "€20.20" } ],
        notes: "Tight, volume drying, 2% from high, but ext 11.8% above 50MA and EPS negative: price strength without earnings confirmation. Exit: hard stop intraday; trend exit only on a WEEKLY close >3% below the 50MA; 4-6 week cooldown after any stop. Not actionable while the market gate is active."
      },
      {
        rank: 5, ticker: "DB1", name: "Deutsche Börse (DAX)", sector: "",
        status: "EXTENDED — WATCH (gated by market)",
        techScore: "8/8",
        dataDate: "stockanalysis.com, 2026-10-19",
        technical: [
          { metric: "Price", value: "€307.70", signal: "1.4% from 52W high" },
          { metric: "50-Day MA", value: "€285.21", signal: "Ext +7.9% vs 50MA", good: true },
          { metric: "200-Day MA", value: "€253.07", signal: "Price above 200MA", good: true },
          { metric: "52-Week High", value: "€312.20", signal: "Pivot reference" },
          { metric: "RS Rank", value: "93", signal: "vs German universe", good: true },
          { metric: "VCP", value: "VCP FORMING", signal: "Tightness 7.5%, volume not drying" },
          { metric: "EPS / Revenue", value: "FAIL", signal: "EPS 13.75% / Rev 11.65% YoY (Q2 2026)" }
        ],
        entry: { pivot: "€312.20", entryCondition: "Daily close above €312.20 on volume >= 425,045 shares (1.4x 50-day avg)", volumeTrigger: ">= 425,045 shares — VERIFY ON TRADINGVIEW (XETR)", stop: "€288.79", target1: "€374.64", target2: "€405.86", rr: "2.67" },
        alerts: [ { type: "BREAKOUT ALERT", price: "€312.21" }, { type: "WARNING LEVEL", price: "€296.59" }, { type: "STOP ALERT", price: "€288.79" } ],
        notes: "1.4% under 52-week high; pivot €312.20. EPS +13.8% below the 25% bar. Volume not drying. Exit: hard stop intraday; trend exit only on a WEEKLY close >3% below the 50MA; 4-6 week cooldown after any stop. Not actionable while the market gate is active."
      },
      {
        rank: 6, ticker: "DHL", name: "DHL Group (DAX)", sector: "",
        status: "EXTENDED — WATCH (gated by market)",
        techScore: "8/8",
        dataDate: "stockanalysis.com, 2026-10-19",
        technical: [
          { metric: "Price", value: "€57.70", signal: "2.0% from 52W high" },
          { metric: "50-Day MA", value: "€56.10", signal: "Ext +2.8% vs 50MA", good: true },
          { metric: "200-Day MA", value: "€51.56", signal: "Price above 200MA", good: true },
          { metric: "52-Week High", value: "€58.90", signal: "Pivot reference" },
          { metric: "RS Rank", value: "86", signal: "vs German universe", good: true },
          { metric: "VCP", value: "VCP FORMING", signal: "Tightness 7.4%, volume not drying" },
          { metric: "EPS / Revenue", value: "STRONG PASS", signal: "EPS 28.57% / Rev 12.82% YoY (Q2 2026)" }
        ],
        entry: { pivot: "€58.90", entryCondition: "Daily close above €58.90 on volume >= 2,053,648 shares (1.4x 50-day avg)", volumeTrigger: ">= 2,053,648 shares — VERIFY ON TRADINGVIEW (XETR)", stop: "€54.48", target1: "€70.68", target2: "€76.57", rr: "2.67" },
        alerts: [ { type: "BREAKOUT ALERT", price: "€58.91" }, { type: "WARNING LEVEL", price: "€55.95" }, { type: "STOP ALERT", price: "€54.48" } ],
        notes: "Closest to a clean setup: tight, near pivot, low extension, EPS accelerating and liquid. Revenue growth only 12.8% and prior quarters negative — keep an eye. Still gated by the market. Exit: hard stop intraday; trend exit only on a WEEKLY close >3% below the 50MA; 4-6 week cooldown after any stop. Not actionable while the market gate is active."
      },
      {
        rank: 7, ticker: "SY1", name: "Symrise (DAX)", sector: "",
        status: "EXTENDED — WATCH (gated by market)",
        techScore: "8/8",
        dataDate: "stockanalysis.com, 2026-10-19",
        technical: [
          { metric: "Price", value: "€100.70", signal: "0.1% from 52W high" },
          { metric: "50-Day MA", value: "€91.54", signal: "Ext +10.0% vs 50MA", good: true },
          { metric: "200-Day MA", value: "€81.57", signal: "Price above 200MA", good: true },
          { metric: "52-Week High", value: "€100.80", signal: "Pivot reference" },
          { metric: "RS Rank", value: "90", signal: "vs German universe", good: true },
          { metric: "VCP", value: "VCP FORMING", signal: "Tightness 12.0%, volume not drying" },
          { metric: "EPS / Revenue", value: "FAIL", signal: "EPS -0.37% / Rev -0.56% YoY (H1 2026)" }
        ],
        entry: { pivot: "€100.80", entryCondition: "Daily close above €100.80 on volume >= 441,351 shares (1.4x 50-day avg)", volumeTrigger: ">= 441,351 shares — VERIFY ON TRADINGVIEW (XETR)", stop: "€93.24", target1: "€120.96", target2: "€131.04", rr: "2.67" },
        alerts: [ { type: "BREAKOUT ALERT", price: "€100.81" }, { type: "WARNING LEVEL", price: "€95.76" }, { type: "STOP ALERT", price: "€93.24" } ],
        notes: "At its 52-week high, 10% extended; EPS flat, revenue declining — technical only. Exit: hard stop intraday; trend exit only on a WEEKLY close >3% below the 50MA; 4-6 week cooldown after any stop. Not actionable while the market gate is active."
      },
      {
        rank: 8, ticker: "MRK", name: "Merck KGaA (DAX)", sector: "",
        status: "EXTENDED — WATCH (gated by market)",
        techScore: "8/8",
        dataDate: "stockanalysis.com, 2026-10-19",
        technical: [
          { metric: "Price", value: "€144.35", signal: "3.0% from 52W high" },
          { metric: "50-Day MA", value: "€136.88", signal: "Ext +5.5% vs 50MA", good: true },
          { metric: "200-Day MA", value: "€128.65", signal: "Price above 200MA", good: true },
          { metric: "52-Week High", value: "€148.80", signal: "Pivot reference" },
          { metric: "RS Rank", value: "84", signal: "vs German universe", good: true },
          { metric: "VCP", value: "VCP FORMING", signal: "Tightness 7.2%, volume not drying" },
          { metric: "EPS / Revenue", value: "FAIL", signal: "EPS -24.67% / Rev 3.41% YoY (Q2 2026)" }
        ],
        entry: { pivot: "€145.15", entryCondition: "Daily close above €145.15 on volume >= 367,577 shares (1.4x 50-day avg)", volumeTrigger: ">= 367,577 shares — VERIFY ON TRADINGVIEW (XETR)", stop: "€134.26", target1: "€174.18", target2: "€188.70", rr: "2.67" },
        alerts: [ { type: "BREAKOUT ALERT", price: "€145.16" }, { type: "WARNING LEVEL", price: "€137.89" }, { type: "STOP ALERT", price: "€134.26" } ],
        notes: "Tight base but EPS down 25% — fails the fundamental screen. Exit: hard stop intraday; trend exit only on a WEEKLY close >3% below the 50MA; 4-6 week cooldown after any stop. Not actionable while the market gate is active."
      }
    ]
  },
    {
    reportDate: "2026-10-17",
    title: "Germany Broad — DAX+MDAX+SDAX",
    framework: "Minervini SEPA Framework (v3 engine, regime-gated) | German Equities — DAX + MDAX + SDAX",
    market: {
      index: "Germany Broad — DAX+MDAX+SDAX · Breadth UNDER PRESSURE · 47.1% > 200MA",
      verdict: "UNDER PRESSURE",
      verdictNote: "REGIME GATE ACTIVE — no name can be BUY or SETUP this week. Breadth across 155 German names: 47.1% above the 200-day (uptrend needs ≥60%), 43.9% above the 50-day, 28.4% stacked 50>150>200 (needs ≥45%). The gate downgraded 3 would-be BUY NOW and 24 would-be SETUP names to EXTENDED — WATCH. After the M&A check, 6 of those are disqualified (bids/delistings) and 12 remain on the watch list. No index quote is used — the verdict comes purely from breadth. Universe = DAX + MDAX + SDAX (~160 names; 177 attempted). Narrow, top-heavy tape: the index can hold up while the average German share sits below its 50-day. Data through 2026-10-16.",
      metrics: [
        { metric: "% above 200-day MA", value: "47.1%", signal: "Uptrend needs ≥60%", good: false },
        { metric: "% above 50-day MA", value: "43.9%", signal: "Short-term participation still weak", good: false },
        { metric: "% stacked 50 > 150 > 200", value: "28.4%", signal: "Uptrend needs ≥45%", good: false },
        { metric: "Names gated out by the market", value: "27", signal: "3 would-be BUY NOW + 24 would-be SETUP" }
      ],
      sectorAsOf: "",
      sectors: [],
      sectorNote: "Top raw signals are again dominated by deal pins and frozen delisted prices: DHER (Uber €41.50 bid), NA9 (Persistent €81), and stale YOU/KCO/B4B/COP. Clean gated leaders are large-cap defensives and industrials (ALV, DB1, DHL, SY1, BNR, MRK) plus SDAX names INH, GFT, SFQ."
    },
    dataSources: [
      "stockanalysis.com (ETR-*) — 5Y daily OHLCV per name via in-app browser, 155 of 177 symbols",
      "Deterministic v3 engine (browser JS port of engine.py) — 8-criterion trend template, RS percentile vs the 155-name universe, algorithmic VCP, breadth regime gate",
      "stockanalysis.com quarterly financials (EPS / revenue growth YoY) for featured names",
      "Web search for confirmation only (offers, delistings, analyst targets). Verify live on TradingView (XETR)."
    ],
    dataQualityNote: "155/177 tickers evaluated. 22 failed (mostly retired/mistyped symbols; CGN short history). 10 stale names carry an old last bar — mostly delisted after takeovers: YOU, KCO, B4B, COP, AOX, ECV, 1COV, BIO3, SHA, M5Z. Payload SHA verified by decode_payload.py.",
    dataQuality: [
      { ticker: "Universe", source: "de_universe_broad_176.txt + DHER", date: "2026-10-17", status: "177 requested, 155 IN REPORT" },
      { ticker: "Price history", source: "stockanalysis.com", date: "2026-10-16", status: "155 OK / 22 FAILED" },
      { ticker: "YOU, KCO, B4B, COP, AOX, ECV, 1COV, BIO3, SHA, M5Z", source: "stockanalysis.com", date: "2026-10-17", status: "STALE — 10 names, old last bar" },
      { ticker: "Engine v3 + VCP", source: "browser engine", date: "2026-10-17", status: "COMPUTED + PAYLOAD VERIFIED" }
    ],
    criteria: [
      { key: "c1", label: "Price > 200MA" },
      { key: "c2", label: "200MA Trending Up" },
      { key: "c3", label: "Price ≥ 30% Above 52W Low" },
      { key: "c4", label: "Within 25% of 52W High" },
      { key: "c5", label: "50MA > 200MA" },
      { key: "c6", label: "Price > 50MA" },
      { key: "c7", label: "RS ≥ 70 (vs universe)" }
    ],
    summary: [
      { ticker: "DHER", flags: [1,1,1,1,1,1,1], score: "7/7", result: "FAIL" },
      { ticker: "YOU", flags: [0,1,1,1,0,1,1], score: "5/7", result: "FAIL" },
      { ticker: "ALV", flags: [1,1,0,1,1,0,1], score: "5/7", result: "FAIL" },
      { ticker: "KCO", flags: [1,1,1,1,1,0,1], score: "6/7", result: "FAIL" },
      { ticker: "INH", flags: [1,1,1,1,1,1,1], score: "7/7", result: "FAIL" },
      { ticker: "GFT", flags: [1,1,1,1,1,1,1], score: "7/7", result: "FAIL" },
      { ticker: "EVK", flags: [1,1,1,1,1,1,1], score: "7/7", result: "FAIL" },
      { ticker: "NA9", flags: [1,1,1,1,1,1,1], score: "7/7", result: "FAIL" },
      { ticker: "DB1", flags: [1,1,1,1,1,1,1], score: "7/7", result: "FAIL" },
      { ticker: "TKA", flags: [1,1,1,1,1,1,1], score: "7/7", result: "FAIL" },
      { ticker: "SFQ", flags: [1,1,1,1,1,1,1], score: "7/7", result: "FAIL" },
      { ticker: "SY1", flags: [1,1,1,1,1,1,1], score: "7/7", result: "FAIL" },
      { ticker: "B4B", flags: [1,1,1,1,1,0,1], score: "6/7", result: "FAIL" },
      { ticker: "GXI", flags: [1,1,1,1,1,1,1], score: "7/7", result: "FAIL" },
      { ticker: "DHL", flags: [1,1,1,1,1,1,1], score: "7/7", result: "FAIL" },
      { ticker: "BNR", flags: [1,1,1,1,1,1,1], score: "7/7", result: "FAIL" },
      { ticker: "MRK", flags: [1,1,1,1,1,1,1], score: "7/7", result: "FAIL" },
      { ticker: "TMV", flags: [1,1,1,1,1,1,1], score: "7/7", result: "FAIL" },
      { ticker: "FPE3", flags: [1,1,1,1,1,1,1], score: "7/7", result: "FAIL" },
      { ticker: "RHK", flags: [1,1,0,1,1,0,1], score: "5/7", result: "FAIL" },
      { ticker: "SRT3", flags: [1,1,1,1,1,1,1], score: "7/7", result: "FAIL" },
      { ticker: "TLX", flags: [1,1,0,1,1,1,1], score: "6/7", result: "FAIL" },
      { ticker: "BAYN", flags: [1,1,1,1,1,0,1], score: "6/7", result: "FAIL" },
      { ticker: "SZU", flags: [1,1,1,1,1,0,1], score: "6/7", result: "FAIL" },
      { ticker: "COP", flags: [1,1,1,1,1,1,1], score: "7/7", result: "FAIL" },
      { ticker: "BAS", flags: [1,1,0,1,1,1,1], score: "6/7", result: "FAIL" },
      { ticker: "RWE", flags: [1,1,1,1,1,1,1], score: "7/7", result: "FAIL" },
      { ticker: "S92", flags: [1,1,1,1,1,0,1], score: "6/7", result: "FAIL" },
      { ticker: "SGL", flags: [1,1,1,1,1,1,1], score: "7/7", result: "FAIL" },
      { ticker: "IFX", flags: [0,1,1,0,1,0,1], score: "4/7", result: "WATCHLIST" },
      { ticker: "RHM", flags: [0,0,0,0,0,1,0], score: "1/7", result: "FAIL" },
      { ticker: "SAP", flags: [1,0,1,1,1,1,1], score: "6/7", result: "WATCHLIST" },
      { ticker: "GMM", flags: [1,1,1,0,1,0,1], score: "5/7", result: "FAIL" }
    ],
    stocks: [
      {
        rank: 1, ticker: "ALV", name: "Allianz SE (DAX)", sector: "",
        status: "EXTENDED — WATCH (gated by market)",
        techScore: "6/8 (7-crit: 5/7)",
        dataDate: "stockanalysis.com, 2026-10-16",
        technical: [
          { metric: "Price", value: "€433.90", signal: "4.6% from 52W high" },
          { metric: "50-Day MA", value: "€435.63", signal: "Ext -0.4% vs 50MA", good: true },
          { metric: "200-Day MA", value: "€398.58", signal: "Price above 200MA", good: true },
          { metric: "52-Week High", value: "€454.60", signal: "Pivot reference" },
          { metric: "RS Rank", value: "72", signal: "vs German universe", good: true },
          { metric: "VCP", value: "VCP CONFIRMED", signal: "Tightness 5.8%, volume drying" },
          { metric: "EPS / Revenue", value: "FAIL", signal: "EPS -7.99% / Rev 12.09% YoY (Q2 2026)" }
        ],
        entry: { pivot: "€445.90", entryCondition: "Daily close above €445.90 on volume ≥ 678,847 shares (1.4× 50-day avg)", volumeTrigger: "≥ 678,847 shares — VERIFY ON TRADINGVIEW (XETR)", stop: "€412.46", target1: "€535.08", target2: "€579.67", rr: "2.67 : 1", sizing: "€10k: 50% at pivot · 30% +5–7% higher · 20% from a higher base. Never add to a loser. Only if the gate lifts." },
        alerts: [ { type: "BREAKOUT ALERT", price: "€445.91" }, { type: "WARNING LEVEL", price: "€423.60" }, { type: "STOP ALERT", price: "€412.46" } ],
        notes: "Only clean would-be BUY NOW (VCP CONFIRMED) after M&A screening — GATED by the market. Price is above the mid-2026 analyst mean (~€414): outrun consensus. Latest EPS −8% (FAIL): a technical/defensive setup, not a growth leader. Exit: hard stop intraday; trend exit only on a WEEKLY close >3% below the 50MA; 4–6 week cooldown after any stop."
      },
      {
        rank: 2, ticker: "INH", name: "INDUS Holding (SDAX)", sector: "",
        status: "EXTENDED — WATCH (gated by market)",
        techScore: "8/8 (7-crit: 7/7)",
        dataDate: "stockanalysis.com, 2026-10-16",
        technical: [
          { metric: "Price", value: "€37.60", signal: "11.9% from 52W high" },
          { metric: "50-Day MA", value: "€37.14", signal: "Ext +1.3% vs 50MA", good: true },
          { metric: "200-Day MA", value: "€31.28", signal: "Price above 200MA", good: true },
          { metric: "52-Week High", value: "€42.70", signal: "Pivot reference" },
          { metric: "RS Rank", value: "97", signal: "vs German universe", good: true },
          { metric: "VCP", value: "VCP FORMING", signal: "Tightness 14.6%, volume drying" },
          { metric: "EPS / Revenue", value: "PASS", signal: "EPS 270% / Rev 20.58% YoY (Q2 2026)" }
        ],
        entry: { pivot: "€42.70", entryCondition: "Daily close above €42.70 on volume ≥ 58,523 shares (1.4× 50-day avg)", volumeTrigger: "≥ 58,523 shares — VERIFY ON TRADINGVIEW (XETR)", stop: "€39.50", target1: "€51.24", target2: "€55.51", rr: "2.67 : 1", sizing: "€10k: 50% at pivot · 30% +5–7% higher · 20% from a higher base. Never add to a loser. Only if the gate lifts." },
        alerts: [ { type: "BREAKOUT ALERT", price: "€42.71" }, { type: "WARNING LEVEL", price: "€40.56" }, { type: "STOP ALERT", price: "€39.50" } ],
        notes: "Raised 2026 guidance (tungsten carbide). One analyst cut to HOLD, target €41; consensus ~€37 — limited room. Pivot €42.70 is ~13.6% above price, not near a buy point. EPS PASS (+270% latest). Exit: hard stop intraday; trend exit only on a WEEKLY close >3% below the 50MA; 4–6 week cooldown after any stop."
      },
      {
        rank: 3, ticker: "GFT", name: "GFT Technologies (SDAX)", sector: "",
        status: "EXTENDED — WATCH (gated by market)",
        techScore: "8/8 (7-crit: 7/7)",
        dataDate: "stockanalysis.com, 2026-10-16",
        technical: [
          { metric: "Price", value: "€27.20", signal: "3.5% from 52W high" },
          { metric: "50-Day MA", value: "€25.14", signal: "Ext +8.2% vs 50MA", good: true },
          { metric: "200-Day MA", value: "€21.11", signal: "Price above 200MA", good: true },
          { metric: "52-Week High", value: "€28.20", signal: "Pivot reference" },
          { metric: "RS Rank", value: "96", signal: "vs German universe", good: true },
          { metric: "VCP", value: "VCP FORMING", signal: "Tightness 10.8%, volume not drying" },
          { metric: "EPS / Revenue", value: "STRONG PASS", signal: "EPS 35.14% / Rev 6.12% YoY (Q2 2026)" }
        ],
        entry: { pivot: "€28.20", entryCondition: "Daily close above €28.20 on volume ≥ 101,774 shares (1.4× 50-day avg)", volumeTrigger: "≥ 101,774 shares — VERIFY ON TRADINGVIEW (XETR)", stop: "€26.09", target1: "€33.84", target2: "€36.66", rr: "2.67 : 1", sizing: "€10k: 50% at pivot · 30% +5–7% higher · 20% from a higher base. Never add to a loser. Only if the gate lifts." },
        alerts: [ { type: "BREAKOUT ALERT", price: "€28.21" }, { type: "WARNING LEVEL", price: "€26.79" }, { type: "STOP ALERT", price: "€26.09" } ],
        notes: "EPS accelerating (+35%) → STRONG PASS, but revenue only +6% (FLAG). Consensus ~€30.6 — ~12% room. GFT is an acquirer (Megawork), not a target. Exit: hard stop intraday; trend exit only on a WEEKLY close >3% below the 50MA; 4–6 week cooldown after any stop."
      },
      {
        rank: 4, ticker: "DB1", name: "Deutsche Börse (DAX)", sector: "",
        status: "EXTENDED — WATCH (gated by market)",
        techScore: "8/8 (7-crit: 7/7)",
        dataDate: "stockanalysis.com, 2026-10-16",
        technical: [
          { metric: "Price", value: "€309.50", signal: "0.2% from 52W high" },
          { metric: "50-Day MA", value: "€284.57", signal: "Ext +8.8% vs 50MA", good: true },
          { metric: "200-Day MA", value: "€252.60", signal: "Price above 200MA", good: true },
          { metric: "52-Week High", value: "€310.20", signal: "Pivot reference" },
          { metric: "RS Rank", value: "93", signal: "vs German universe", good: true },
          { metric: "VCP", value: "VCP FORMING", signal: "Tightness 8.3%, volume not drying" },
          { metric: "EPS / Revenue", value: "FAIL", signal: "EPS 13.75% / Rev 11.65% YoY (Q2 2026)" }
        ],
        entry: { pivot: "€310.20", entryCondition: "Daily close above €310.20 on volume ≥ 418,649 shares (1.4× 50-day avg)", volumeTrigger: "≥ 418,649 shares — VERIFY ON TRADINGVIEW (XETR)", stop: "€286.94", target1: "€372.24", target2: "€403.26", rr: "2.67 : 1", sizing: "€10k: 50% at pivot · 30% +5–7% higher · 20% from a higher base. Never add to a loser. Only if the gate lifts." },
        alerts: [ { type: "BREAKOUT ALERT", price: "€310.21" }, { type: "WARNING LEVEL", price: "€294.69" }, { type: "STOP ALERT", price: "€286.94" } ],
        notes: "0.2% under its 52-week high; pivot €310.20. EPS +13.8% (FAIL vs 25% bar). No bid found. Exit: hard stop intraday; trend exit only on a WEEKLY close >3% below the 50MA; 4–6 week cooldown after any stop."
      },
      {
        rank: 5, ticker: "SFQ", name: "SAF-Holland (SDAX)", sector: "",
        status: "EXTENDED — WATCH (gated by market)",
        techScore: "8/8 (7-crit: 7/7)",
        dataDate: "stockanalysis.com, 2026-10-16",
        technical: [
          { metric: "Price", value: "€22.25", signal: "3.3% from 52W high" },
          { metric: "50-Day MA", value: "€22.03", signal: "Ext +1% vs 50MA", good: true },
          { metric: "200-Day MA", value: "€19.61", signal: "Price above 200MA", good: true },
          { metric: "52-Week High", value: "€23.00", signal: "Pivot reference" },
          { metric: "RS Rank", value: "91", signal: "vs German universe", good: true },
          { metric: "VCP", value: "VCP FORMING", signal: "Tightness 8.4%, volume not drying" },
          { metric: "EPS / Revenue", value: "STRONG PASS", signal: "EPS 100% / Rev 2.62% YoY (Q2 2026)" }
        ],
        entry: { pivot: "€23.00", entryCondition: "Daily close above €23.00 on volume ≥ 107,873 shares (1.4× 50-day avg)", volumeTrigger: "≥ 107,873 shares — VERIFY ON TRADINGVIEW (XETR)", stop: "€21.28", target1: "€27.60", target2: "€29.90", rr: "2.67 : 1", sizing: "€10k: 50% at pivot · 30% +5–7% higher · 20% from a higher base. Never add to a loser. Only if the gate lifts." },
        alerts: [ { type: "BREAKOUT ALERT", price: "€23.01" }, { type: "WARNING LEVEL", price: "€21.85" }, { type: "STOP ALERT", price: "€21.28" } ],
        notes: "EPS +100% and accelerating → STRONG PASS, but revenue +2.6% (FLAG). Consensus ~€21.7; Warburg €26 / Hauck €27. No bid. Exit: hard stop intraday; trend exit only on a WEEKLY close >3% below the 50MA; 4–6 week cooldown after any stop."
      },
      {
        rank: 6, ticker: "SY1", name: "Symrise (DAX)", sector: "",
        status: "EXTENDED — WATCH (gated by market)",
        techScore: "8/8 (7-crit: 7/7)",
        dataDate: "stockanalysis.com, 2026-10-16",
        technical: [
          { metric: "Price", value: "€99.44", signal: "1.3% from 52W high" },
          { metric: "50-Day MA", value: "€91.35", signal: "Ext +8.9% vs 50MA", good: true },
          { metric: "200-Day MA", value: "€81.41", signal: "Price above 200MA", good: true },
          { metric: "52-Week High", value: "€100.80", signal: "Pivot reference" },
          { metric: "RS Rank", value: "89", signal: "vs German universe", good: true },
          { metric: "VCP", value: "VCP FORMING", signal: "Tightness 12%, volume not drying" },
          { metric: "EPS / Revenue", value: "FAIL", signal: "EPS -0.37% / Rev -0.56% YoY (H1 2026)" }
        ],
        entry: { pivot: "€100.80", entryCondition: "Daily close above €100.80 on volume ≥ 437,210 shares (1.4× 50-day avg)", volumeTrigger: "≥ 437,210 shares — VERIFY ON TRADINGVIEW (XETR)", stop: "€93.24", target1: "€120.96", target2: "€131.04", rr: "2.67 : 1", sizing: "€10k: 50% at pivot · 30% +5–7% higher · 20% from a higher base. Never add to a loser. Only if the gate lifts." },
        alerts: [ { type: "BREAKOUT ALERT", price: "€100.81" }, { type: "WARNING LEVEL", price: "€95.76" }, { type: "STOP ALERT", price: "€93.24" } ],
        notes: "Half-year reporter; EPS −0.4% (FAIL). Extension 8.9%. No bid found. Exit: hard stop intraday; trend exit only on a WEEKLY close >3% below the 50MA; 4–6 week cooldown after any stop."
      },
      {
        rank: 7, ticker: "DHL", name: "DHL Group (DAX)", sector: "",
        status: "EXTENDED — WATCH (gated by market)",
        techScore: "8/8 (7-crit: 7/7)",
        dataDate: "stockanalysis.com, 2026-10-16",
        technical: [
          { metric: "Price", value: "€58.22", signal: "1.2% from 52W high" },
          { metric: "50-Day MA", value: "€56.05", signal: "Ext +3.9% vs 50MA", good: true },
          { metric: "200-Day MA", value: "€51.51", signal: "Price above 200MA", good: true },
          { metric: "52-Week High", value: "€58.90", signal: "Pivot reference" },
          { metric: "RS Rank", value: "86", signal: "vs German universe", good: true },
          { metric: "VCP", value: "VCP FORMING", signal: "Tightness 7.4%, volume not drying" },
          { metric: "EPS / Revenue", value: "STRONG PASS", signal: "EPS 28.57% / Rev 12.82% YoY (Q2 2026)" }
        ],
        entry: { pivot: "€58.90", entryCondition: "Daily close above €58.90 on volume ≥ 2,051,445 shares (1.4× 50-day avg)", volumeTrigger: "≥ 2,051,445 shares — VERIFY ON TRADINGVIEW (XETR)", stop: "€54.48", target1: "€70.68", target2: "€76.57", rr: "2.67 : 1", sizing: "€10k: 50% at pivot · 30% +5–7% higher · 20% from a higher base. Never add to a loser. Only if the gate lifts." },
        alerts: [ { type: "BREAKOUT ALERT", price: "€58.91" }, { type: "WARNING LEVEL", price: "€55.95" }, { type: "STOP ALERT", price: "€54.48" } ],
        notes: "EPS +28.6% rising three quarters → STRONG PASS; revenue +12.8%. Very liquid. No bid found. Exit: hard stop intraday; trend exit only on a WEEKLY close >3% below the 50MA; 4–6 week cooldown after any stop."
      },
      {
        rank: 8, ticker: "BNR", name: "Brenntag (DAX)", sector: "",
        status: "EXTENDED — WATCH (gated by market)",
        techScore: "8/8 (7-crit: 7/7)",
        dataDate: "stockanalysis.com, 2026-10-16",
        technical: [
          { metric: "Price", value: "€65.04", signal: "2.7% from 52W high" },
          { metric: "50-Day MA", value: "€61.10", signal: "Ext +6.5% vs 50MA", good: true },
          { metric: "200-Day MA", value: "€57.06", signal: "Price above 200MA", good: true },
          { metric: "52-Week High", value: "€66.86", signal: "Pivot reference" },
          { metric: "RS Rank", value: "85", signal: "vs German universe", good: true },
          { metric: "VCP", value: "VCP FORMING", signal: "Tightness 12%, volume not drying" },
          { metric: "EPS / Revenue", value: "PASS", signal: "EPS 321.72% / Rev 10.18% YoY (Q2 2026)" }
        ],
        entry: { pivot: "€65.12", entryCondition: "Daily close above €65.12 on volume ≥ 335,044 shares (1.4× 50-day avg)", volumeTrigger: "≥ 335,044 shares — VERIFY ON TRADINGVIEW (XETR)", stop: "€60.24", target1: "€78.14", target2: "€84.66", rr: "2.67 : 1", sizing: "€10k: 50% at pivot · 30% +5–7% higher · 20% from a higher base. Never add to a loser. Only if the gate lifts." },
        alerts: [ { type: "BREAKOUT ALERT", price: "€65.13" }, { type: "WARNING LEVEL", price: "€61.86" }, { type: "STOP ALERT", price: "€60.24" } ],
        notes: "EPS +322% off a weak base (PASS) while revenue only just turned positive — FLAG. No bid found. Exit: hard stop intraday; trend exit only on a WEEKLY close >3% below the 50MA; 4–6 week cooldown after any stop."
      },
      {
        rank: 9, ticker: "MRK", name: "Merck KGaA (DAX)", sector: "",
        status: "EXTENDED — WATCH (gated by market)",
        techScore: "8/8 (7-crit: 7/7)",
        dataDate: "stockanalysis.com, 2026-10-16",
        technical: [
          { metric: "Price", value: "€144.30", signal: "3% from 52W high" },
          { metric: "50-Day MA", value: "€136.87", signal: "Ext +5.4% vs 50MA", good: true },
          { metric: "200-Day MA", value: "€128.56", signal: "Price above 200MA", good: true },
          { metric: "52-Week High", value: "€148.80", signal: "Pivot reference" },
          { metric: "RS Rank", value: "84", signal: "vs German universe", good: true },
          { metric: "VCP", value: "VCP FORMING", signal: "Tightness 7%, volume not drying" },
          { metric: "EPS / Revenue", value: "FAIL", signal: "EPS -24.67% / Rev 3.41% YoY (Q2 2026)" }
        ],
        entry: { pivot: "€144.45", entryCondition: "Daily close above €144.45 on volume ≥ 366,404 shares (1.4× 50-day avg)", volumeTrigger: "≥ 366,404 shares — VERIFY ON TRADINGVIEW (XETR)", stop: "€133.62", target1: "€173.34", target2: "€187.79", rr: "2.67 : 1", sizing: "€10k: 50% at pivot · 30% +5–7% higher · 20% from a higher base. Never add to a loser. Only if the gate lifts." },
        alerts: [ { type: "BREAKOUT ALERT", price: "€144.46" }, { type: "WARNING LEVEL", price: "€137.23" }, { type: "STOP ALERT", price: "€133.62" } ],
        notes: "EPS −24.7% (FAIL) — technical repair, not earnings leadership. No bid found. Exit: hard stop intraday; trend exit only on a WEEKLY close >3% below the 50MA; 4–6 week cooldown after any stop."
      },
      {
        rank: 10, ticker: "TKA", name: "thyssenkrupp (MDAX)", sector: "",
        status: "EXTENDED — WATCH (gated by market)",
        techScore: "8/8 (7-crit: 7/7)",
        dataDate: "stockanalysis.com, 2026-10-16",
        technical: [
          { metric: "Price", value: "€14.35", signal: "9.6% from 52W high" },
          { metric: "50-Day MA", value: "€14.23", signal: "Ext +0.9% vs 50MA", good: true },
          { metric: "200-Day MA", value: "€11.39", signal: "Price above 200MA", good: true },
          { metric: "52-Week High", value: "€15.87", signal: "Pivot reference" },
          { metric: "RS Rank", value: "93", signal: "vs German universe", good: true },
          { metric: "VCP", value: "VCP FORMING", signal: "Tightness 12.3%, volume drying" },
          { metric: "EPS / Revenue", value: "FAIL", signal: "EPS None% / Rev 7.79% YoY (Q3 2026)" }
        ],
        entry: { pivot: "€15.86", entryCondition: "Daily close above €15.86 on volume ≥ 2,951,588 shares (1.4× 50-day avg)", volumeTrigger: "≥ 2,951,588 shares — VERIFY ON TRADINGVIEW (XETR)", stop: "€14.67", target1: "€19.03", target2: "€20.62", rr: "2.66 : 1", sizing: "€10k: 50% at pivot · 30% +5–7% higher · 20% from a higher base. Never add to a loser. Only if the gate lifts." },
        alerts: [ { type: "BREAKOUT ALERT", price: "€15.87" }, { type: "WARNING LEVEL", price: "€15.07" }, { type: "STOP ALERT", price: "€14.67" } ],
        notes: "OUTRUN ESTIMATES: €14.35 vs targets mostly €9–12.50. Jindal indicative offer is for the steel division, not the shares — event risk. EPS deeply negative; contractions 16–19% are wide. Exit: hard stop intraday; trend exit only on a WEEKLY close >3% below the 50MA; 4–6 week cooldown after any stop."
      },
      {
        rank: 11, ticker: "GXI", name: "Gerresheimer (MDAX)", sector: "",
        status: "EXTENDED — WATCH (gated by market)",
        techScore: "8/8 (7-crit: 7/7)",
        dataDate: "stockanalysis.com, 2026-10-16",
        technical: [
          { metric: "Price", value: "€30.44", signal: "4.9% from 52W high" },
          { metric: "50-Day MA", value: "€27.73", signal: "Ext +9.8% vs 50MA", good: true },
          { metric: "200-Day MA", value: "€24.99", signal: "Price above 200MA", good: true },
          { metric: "52-Week High", value: "€32.00", signal: "Pivot reference" },
          { metric: "RS Rank", value: "87", signal: "vs German universe", good: true },
          { metric: "VCP", value: "VCP FORMING", signal: "Tightness 10.8%, volume not drying" },
          { metric: "EPS / Revenue", value: "FAIL", signal: "EPS None% / Rev -0.77% YoY (Q1 2026)" }
        ],
        entry: { pivot: "€30.48", entryCondition: "Daily close above €30.48 on volume ≥ 190,266 shares (1.4× 50-day avg)", volumeTrigger: "≥ 190,266 shares — VERIFY ON TRADINGVIEW (XETR)", stop: "€28.19", target1: "€36.58", target2: "€39.62", rr: "2.66 : 1", sizing: "€10k: 50% at pivot · 30% +5–7% higher · 20% from a higher base. Never add to a loser. Only if the gate lifts." },
        alerts: [ { type: "BREAKOUT ALERT", price: "€30.49" }, { type: "WARNING LEVEL", price: "€28.96" }, { type: "STOP ALERT", price: "€28.19" } ],
        notes: "OUTRUN ESTIMATES: €30.44 vs Sept consensus ~€28.25 (mostly HOLD). Past PE takeover talks collapsed; current speculation unconfirmed. EPS NO DATA. Exit: hard stop intraday; trend exit only on a WEEKLY close >3% below the 50MA; 4–6 week cooldown after any stop."
      },
      {
        rank: 12, ticker: "EVK", name: "Evonik (MDAX)", sector: "",
        status: "EXTENDED — WATCH (gated by market)",
        techScore: "8/8 (7-crit: 7/7)",
        dataDate: "stockanalysis.com, 2026-10-16",
        technical: [
          { metric: "Price", value: "€21.42", signal: "1.9% from 52W high" },
          { metric: "50-Day MA", value: "€19.02", signal: "Ext +12.6% vs 50MA", good: true },
          { metric: "200-Day MA", value: "€16.62", signal: "Price above 200MA", good: true },
          { metric: "52-Week High", value: "€21.84", signal: "Pivot reference" },
          { metric: "RS Rank", value: "95", signal: "vs German universe", good: true },
          { metric: "VCP", value: "VCP FORMING", signal: "Tightness 6.6%, volume drying" },
          { metric: "EPS / Revenue", value: "FAIL", signal: "EPS -30.77% / Rev 11.26% YoY (Q2 2026)" }
        ],
        entry: { pivot: "€21.84", entryCondition: "Daily close above €21.84 on volume ≥ 1,881,223 shares (1.4× 50-day avg)", volumeTrigger: "≥ 1,881,223 shares — VERIFY ON TRADINGVIEW (XETR)", stop: "€20.20", target1: "€26.21", target2: "€28.39", rr: "2.66 : 1", sizing: "€10k: start 25% (€2,500) — >10% extended. Only if the gate lifts." },
        alerts: [ { type: "BREAKOUT ALERT", price: "€21.85" }, { type: "WARNING LEVEL", price: "€20.75" }, { type: "STOP ALERT", price: "€20.20" } ],
        notes: "12.6% above the 50DMA — start 25% if ever. EPS −31%, revenue mostly negative (FAIL). Exit: hard stop intraday; trend exit only on a WEEKLY close >3% below the 50MA; 4–6 week cooldown after any stop."
      }
    ],
    riskManagement: [
      "Regime gate first: no new buys unless breadth says CONFIRMED UPTREND (≥60% above 200DMA, ≥45% stacked).",
      "Buy only on a daily close above the pivot with volume ≥1.4× the 50-day average.",
      "Never buy more than ~14% above the 50-day; >10% extended → start at 25%.",
      "Hard stop ~7.5% below pivot; exit if hit intraday.",
      "Trend exit only on a WEEKLY close >3% below the 50-day MA.",
      "Re-entry cooldown: no re-buy for 4–6 weeks after a stop, only on a fresh higher base.",
      "Never average down; add only to winners at planned tranches (50% / 30% / 20%).",
      "M&A check every name — this week DHER, NA9 are bid pins and YOU, KCO, B4B, COP are frozen delisted prices.",
      "Watch liquidity in SDAX names; size for the exit, not the entry.",
      "Sell into strength near +20% / +30%. This mechanical screen has historically LAGGED buy-and-hold — idea generator, not auto-buy."
    ],
    verification: "Every pivot, base and volume figure is engine-computed from stockanalysis.com end-of-day Xetra data (through 2026-10-16). Before any order, confirm the pattern and pivot on a live TradingView chart (XETR) and re-check for new offers or delistings.",
    disclaimer: "For informational purposes only. Not financial advice."
  },

  {
    "reportDate": "2026-09-14",
    "title": "Germany Broad — DAX+MDAX+SDAX",
    "framework": "Minervini SEPA Framework (v2, regime-gated) | German Equities — DAX + MDAX + SDAX",
    "market": {
      "index": "Germany Broad — DAX+MDAX+SDAX · Breadth UNDER PRESSURE · 43.9% > 200MA",
      "verdict": "UNDER PRESSURE",
      "verdictNote": "REGIME GATE ACTIVE — no name can be BUY or SETUP this week. Breadth over the full broad universe: 43.9% above the 200-day MA (an uptrend needs ≥60%), only 36.5% above the 50-day, and 33.1% with the 50/150/200 correctly stacked (needs ≥45%). Both tests fail, so the engine automatically downgraded 28 would-be SETUP — NEAR BUY names to EXTENDED — WATCH (gated_by_market). No index quote is used: the verdict is derived purely from breadth across the universe. Universe = DAX 40 + MDAX + SDAX, 148 names evaluated of 152 requested. Context: the DAX set record highs on 28 Aug and then fell back to ~25,558 by 12 Sep on oil and inflation worries — a classic narrow, top-heavy rally where the index holds up while the average German share sits below its 50-day.",
      "metrics": [
        { "metric": "% above 200-day MA", "value": "43.9%", "signal": "Uptrend needs ≥60%", "good": false },
        { "metric": "% above 50-day MA", "value": "36.5%", "signal": "Short-term momentum is worse than the trend", "good": false },
        { "metric": "% stacked 50 > 150 > 200", "value": "33.1%", "signal": "Uptrend needs ≥45%", "good": false },
        { "metric": "Names gated out by the market", "value": "28", "signal": "Would have been SETUP — NEAR BUY" }
      ],
      "sectorAsOf": "",
      "sectors": [],
      "sectorNote": "Leadership is narrow and partly artificial: two of the three highest-RS names in the universe are takeover pins rather than momentum bases — Nagarro (NA9) under a €81.00 all-cash offer from Persistent, and Delivery Hero (DHER) under a €41.50 offer from Uber. Genuine trend leadership sits in solar/industrial recovery (S92, TKA, DEZ, INH) but those names are all too extended or too far off their highs to buy. 55% of the universe scores below 4/8 on the trend template."
    },
    "dataSources": [
      "Yahoo Finance (.DE / XETRA) — 2 years of daily OHLCV per name, 148 of 152 symbols",
      "Deterministic v2 engine — 8-criterion trend template, RS percentile vs the 148-name universe, algorithmic VCP, breadth-derived regime gate",
      "Confirmation research only (offers, guidance, analyst targets, DAX context) — never used to generate the numbers. Verify live on TradingView (XETR)."
    ],
    "dataQualityNote": "148/152 tickers returned ≥221 daily bars (97.4%). Engine output was cross-checked against the reference Python engine: evaluate() reproduced every field for NA9 exactly, and the RS percentile ranks matched on all 148 names with zero mismatches. Mechanical screen historically LAGGED buy-and-hold — idea generator, not a buy list.",
    "dataQuality": [
      { "ticker": "Universe", "source": "DAX 40 + MDAX 50 + SDAX 62", "date": "Sep 14, 2026", "status": "152 requested, 148 IN REPORT" },
      { "ticker": "Yahoo 2y history", "source": "Yahoo Finance", "date": "Sep 14, 2026", "status": "148 OK / 4 FAILED" },
      { "ticker": "1COV, ECV", "source": "Yahoo Finance", "date": "Sep 14, 2026", "status": "NO DATA — delisted after takeover" },
      { "ticker": "KCO, M8G", "source": "Yahoo Finance", "date": "Sep 14, 2026", "status": "SKIPPED — ticker/listing change" },
      { "ticker": "Engine v2 + VCP", "source": "engine", "date": "Sep 14, 2026", "status": "COMPUTED + VERIFIED" }
    ],
    "criteria": [
      { "key": "c1", "label": "Price > 200MA" },
      { "key": "c2", "label": "200MA Trending Up" },
      { "key": "c3", "label": "Price ≥ 30% Above 52W Low" },
      { "key": "c4", "label": "Within 25% of 52W High" },
      { "key": "c5", "label": "50MA > 200MA" },
      { "key": "c6", "label": "Price > 50MA" },
      { "key": "c7", "label": "RS ≥ 70 (vs universe)" }
    ],
    "summary": [
      { "ticker": "NA9", "flags": [1,1,1,1,1,1,1], "score": "7/7", "result": "FAIL" },
      { "ticker": "DRW3", "flags": [1,1,1,1,1,1,1], "score": "7/7", "result": "FAIL" },
      { "ticker": "DHER", "flags": [1,1,1,1,1,0,1], "score": "6/7", "result": "FAIL" },
      { "ticker": "BAYN", "flags": [1,1,1,1,1,1,1], "score": "7/7", "result": "FAIL" },
      { "ticker": "1SXP", "flags": [1,1,1,1,1,1,1], "score": "7/7", "result": "FAIL" },
      { "ticker": "GFT", "flags": [1,1,1,1,1,1,1], "score": "7/7", "result": "FAIL" },
      { "ticker": "SFQ", "flags": [1,1,1,1,1,1,1], "score": "7/7", "result": "FAIL" },
      { "ticker": "SDF", "flags": [1,1,1,1,1,1,1], "score": "7/7", "result": "FAIL" },
      { "ticker": "SZU", "flags": [1,1,1,1,1,1,1], "score": "7/7", "result": "FAIL" },
      { "ticker": "CBK", "flags": [1,1,1,1,1,1,1], "score": "7/7", "result": "FAIL" },
      { "ticker": "MLP", "flags": [1,1,1,1,1,1,1], "score": "7/7", "result": "FAIL" },
      { "ticker": "BFSA", "flags": [1,1,1,1,1,1,1], "score": "7/7", "result": "FAIL" },
      { "ticker": "EVK", "flags": [1,1,1,1,1,1,1], "score": "7/7", "result": "FAIL" },
      { "ticker": "DHL", "flags": [1,1,1,1,1,0,1], "score": "6/7", "result": "FAIL" },
      { "ticker": "RWE", "flags": [1,1,1,1,1,0,1], "score": "6/7", "result": "FAIL" },
      { "ticker": "F3C", "flags": [1,1,1,1,1,0,1], "score": "6/7", "result": "FAIL" },
      { "ticker": "BNR", "flags": [1,1,1,1,1,1,1], "score": "7/7", "result": "FAIL" },
      { "ticker": "NOEJ", "flags": [1,1,1,1,1,0,1], "score": "6/7", "result": "FAIL" },
      { "ticker": "ALV", "flags": [1,1,1,1,1,1,1], "score": "7/7", "result": "FAIL" },
      { "ticker": "DB1", "flags": [1,1,1,1,1,1,1], "score": "7/7", "result": "FAIL" },
      { "ticker": "KWS", "flags": [1,1,0,1,1,1,1], "score": "6/7", "result": "FAIL" },
      { "ticker": "SY1", "flags": [1,1,1,1,1,0,1], "score": "6/7", "result": "FAIL" },
      { "ticker": "8TRA", "flags": [1,1,1,1,1,0,1], "score": "6/7", "result": "FAIL" },
      { "ticker": "DBK", "flags": [1,1,1,1,1,1,1], "score": "7/7", "result": "FAIL" },
      { "ticker": "TLX", "flags": [1,1,0,1,1,1,1], "score": "6/7", "result": "FAIL" },
      { "ticker": "WAC", "flags": [1,1,1,1,1,1,1], "score": "7/7", "result": "FAIL" },
      { "ticker": "BAS", "flags": [1,1,0,1,1,1,1], "score": "6/7", "result": "FAIL" },
      { "ticker": "MRK", "flags": [1,1,0,1,1,0,1], "score": "5/7", "result": "FAIL" },
      { "ticker": "S92", "flags": [1,1,1,1,1,1,1], "score": "7/7", "result": "FAIL" },
      { "ticker": "TKA", "flags": [1,1,1,1,1,1,1], "score": "7/7", "result": "FAIL" },
      { "ticker": "JEN", "flags": [1,1,1,1,1,0,1], "score": "6/7", "result": "FAIL" },
      { "ticker": "INH", "flags": [1,1,1,1,1,1,1], "score": "7/7", "result": "FAIL" },
      { "ticker": "SZG", "flags": [1,1,1,1,1,0,1], "score": "6/7", "result": "FAIL" },
      { "ticker": "DEZ", "flags": [1,1,1,1,1,1,1], "score": "7/7", "result": "FAIL" },
      { "ticker": "SBS", "flags": [1,1,1,1,1,1,1], "score": "7/7", "result": "FAIL" },
      { "ticker": "SPG", "flags": [1,0,1,1,1,1,0], "score": "5/7", "result": "FAIL" },
      { "ticker": "AIXA", "flags": [0,1,1,0,0,0,1], "score": "3/7", "result": "WATCHLIST" },
      { "ticker": "SMHN", "flags": [0,1,1,0,0,0,1], "score": "3/7", "result": "WATCHLIST" },
      { "ticker": "WAF", "flags": [0,1,1,0,0,0,1], "score": "3/7", "result": "WATCHLIST" },
      { "ticker": "IFX", "flags": [0,1,1,0,0,0,1], "score": "3/7", "result": "WATCHLIST" }
    ],
    "stocks": [
      {
        "rank": 1, "ticker": "NA9", "name": "Nagarro SE (SDAX)", "sector": "",
        "status": "WATCHLIST — Near Buy",
        "techScore": "6/8 (7-crit: 7/7)",
        "dataDate": "Yahoo, Sep 14, 2026",
        "technical": [
          { "metric": "Price", "value": "€78.20", "signal": "2.7% from 52W high" },
          { "metric": "50-Day MA", "value": "€77.45", "signal": "Ext +1.0% vs 50MA", "good": true },
          { "metric": "200-Day MA", "value": "€61.02", "signal": "Price above 200MA", "good": true },
          { "metric": "52-Week High", "value": "€80.35", "signal": "Pivot reference" },
          { "metric": "RS Rank", "value": "98", "signal": "vs German universe", "good": true },
          { "metric": "VCP", "value": "VCP FORMING", "signal": "Tightness 0.4%, volume drying" }
        ],
        "entry": { "pivot": "€78.45", "entryCondition": "Daily close above €78.45 on volume ≥ 77,231 shares (1.4× 50-day avg)", "volumeTrigger": "≥ 77,231 shares — VERIFY ON TRADINGVIEW (XETR)", "stop": "€72.57", "target1": "€94.14", "target2": "€101.99", "rr": "2.67 : 1", "sizing": "DO NOT TRADE — deal pin, upside capped at the €81.00 offer." },
        "alerts": [ { "type": "BREAKOUT ALERT", "price": "€78.46" }, { "type": "WARNING LEVEL", "price": "€74.53" }, { "type": "STOP ALERT", "price": "€72.57" } ],
        "notes": "DISQUALIFIED BY DEAL. Persistent Systems (Galaxy Germany Holding SE) has a €81.00 all-cash offer; both boards recommend acceptance, acceptance period ran to 17 Sep 2026, delisting planned, closing expected Q4 2026 / Q1 2027. The 0.4% tightness and drying volume the engine sees is merger arbitrage, not accumulation — roughly 3-4% of deal spread with the upside capped. Skip."
      },
      {
        "rank": 2, "ticker": "DRW3", "name": "Drägerwerk AG & Co. KGaA Vz. (SDAX)", "sector": "",
        "status": "WATCHLIST — Near Buy",
        "techScore": "8/8 (7-crit: 7/7)",
        "dataDate": "Yahoo, Sep 14, 2026",
        "technical": [
          { "metric": "Price", "value": "€112.40", "signal": "3.9% from 52W high" },
          { "metric": "50-Day MA", "value": "€103.29", "signal": "Ext +8.8% vs 50MA", "good": true },
          { "metric": "200-Day MA", "value": "€89.61", "signal": "Price above 200MA", "good": true },
          { "metric": "52-Week High", "value": "€117.00", "signal": "Pivot reference" },
          { "metric": "RS Rank", "value": "96", "signal": "vs German universe", "good": true },
          { "metric": "VCP", "value": "VCP FORMING", "signal": "8.0→5.1→3.7% contractions, volume drying" }
        ],
        "entry": { "pivot": "€117.00", "entryCondition": "Daily close above €117.00 on volume ≥ 28,933 shares (1.4× 50-day avg)", "volumeTrigger": "≥ 28,933 shares — VERIFY ON TRADINGVIEW (XETR)", "stop": "€108.22", "target1": "€140.40", "target2": "€152.10", "rr": "2.67 : 1", "sizing": "€10k: 50% at pivot · 30% +5–7% higher · 20% from a higher base. Never add to a loser." },
        "alerts": [ { "type": "BREAKOUT ALERT", "price": "€117.01" }, { "type": "WARNING LEVEL", "price": "€111.15" }, { "type": "STOP ALERT", "price": "€108.22" } ],
        "notes": "Cleanest technical structure in the universe: 8/8 trend, shrinking contractions, 6.6% ten-day tightness, volume 5% below base. Fundamental flag — FY26 guidance is only +1–5% revenue and a 5.0–7.5% EBIT margin, nowhere near the ≥25% EPS standard, and analyst targets cluster in the high-€80s to low-€90s, i.e. the share has outrun consensus. Thin liquidity (~20k shares/day)."
      },
      {
        "rank": 3, "ticker": "DHER", "name": "Delivery Hero SE (MDAX)", "sector": "",
        "status": "WATCHLIST — Near Buy",
        "techScore": "7/8 (7-crit: 6/7)",
        "dataDate": "Yahoo, Sep 14, 2026",
        "technical": [
          { "metric": "Price", "value": "€36.69", "signal": "7.9% from 52W high" },
          { "metric": "50-Day MA", "value": "€37.22", "signal": "Ext -1.4% vs 50MA", "good": false },
          { "metric": "200-Day MA", "value": "€27.61", "signal": "Price above 200MA", "good": true },
          { "metric": "52-Week High", "value": "€39.83", "signal": "Pivot reference" },
          { "metric": "RS Rank", "value": "95", "signal": "vs German universe", "good": true },
          { "metric": "VCP", "value": "VCP FORMING", "signal": "Tightness 2.3%, volume drying" }
        ],
        "entry": { "pivot": "€37.19", "entryCondition": "Daily close above €37.19 on volume ≥ 947,808 shares (1.4× 50-day avg)", "volumeTrigger": "≥ 947,808 shares — VERIFY ON TRADINGVIEW (XETR)", "stop": "€34.40", "target1": "€44.63", "target2": "€48.35", "rr": "2.67 : 1", "sizing": "DO NOT TRADE — deal situation, not a momentum base." },
        "alerts": [ { "type": "BREAKOUT ALERT", "price": "€37.20" }, { "type": "WARNING LEVEL", "price": "€35.33" }, { "type": "STOP ALERT", "price": "€34.40" } ],
        "notes": "DISQUALIFIED BY DEAL. Uber has a €41.50 per share offer outstanding with an acceptance period to 5 Nov 2026; the stock trades ~11.6% below it, which is exactly why the chart looks like a tight base. Operationally strong (FY26 guidance raised to +9–11% GMV, +17–19% revenue, €960m–1.0bn adj. EBITDA) but the price now tracks deal probability, not momentum."
      },
      {
        "rank": 4, "ticker": "BAYN", "name": "Bayer AG (DAX)", "sector": "",
        "status": "WATCHLIST — Near Buy",
        "techScore": "8/8 (7-crit: 7/7)",
        "dataDate": "Yahoo, Sep 14, 2026",
        "technical": [
          { "metric": "Price", "value": "€49.33", "signal": "8.5% from 52W high" },
          { "metric": "50-Day MA", "value": "€48.61", "signal": "Ext +1.5% vs 50MA", "good": true },
          { "metric": "200-Day MA", "value": "€41.87", "signal": "Price above 200MA", "good": true },
          { "metric": "52-Week High", "value": "€53.92", "signal": "Pivot reference" },
          { "metric": "RS Rank", "value": "94", "signal": "vs German universe", "good": true },
          { "metric": "VCP", "value": "VCP FORMING", "signal": "15.6→12.7→6.5→4.1%, volume NOT drying" }
        ],
        "entry": { "pivot": "€50.32", "entryCondition": "Daily close above €50.32 on volume ≥ 2,882,764 shares (1.4× 50-day avg)", "volumeTrigger": "≥ 2,882,764 shares — VERIFY ON TRADINGVIEW (XETR)", "stop": "€46.55", "target1": "€60.38", "target2": "€65.42", "rr": "2.67 : 1", "sizing": "€10k: 50% at pivot · 30% +5–7% higher · 20% from a higher base. Not before the court date." },
        "alerts": [ { "type": "BREAKOUT ALERT", "price": "€50.33" }, { "type": "WARNING LEVEL", "price": "€47.80" }, { "type": "STOP ALERT", "price": "€46.55" } ],
        "notes": "Textbook contraction sequence and 8/8 on the trend template, but volume is not drying (today ~1.5× average). BINARY EVENT: the US glyphosate settlement hearing was set for 14 Sep 2026 — the same date as this data. Consensus sits near €53 (range roughly €46–70), so modest room. Do not pre-position into a court date; let it pass, then judge the base."
      },
      {
        "rank": 5, "ticker": "1SXP", "name": "Schott Pharma AG & Co. KGaA (SDAX)", "sector": "",
        "status": "WATCHLIST — Near Buy",
        "techScore": "8/8 (7-crit: 7/7)",
        "dataDate": "Yahoo, Sep 14, 2026",
        "technical": [
          { "metric": "Price", "value": "€22.60", "signal": "4.8% from 52W high" },
          { "metric": "50-Day MA", "value": "€21.77", "signal": "Ext +3.8% vs 50MA", "good": true },
          { "metric": "200-Day MA", "value": "€17.03", "signal": "Price above 200MA", "good": true },
          { "metric": "52-Week High", "value": "€23.75", "signal": "Pivot = 52W high" },
          { "metric": "RS Rank", "value": "93", "signal": "vs German universe", "good": true },
          { "metric": "VCP", "value": "VCP FORMING", "signal": "Tightness 4.6%, volume 24% below base" }
        ],
        "entry": { "pivot": "€23.75", "entryCondition": "Daily close above €23.75 on volume ≥ 105,727 shares (1.4× 50-day avg)", "volumeTrigger": "≥ 105,727 shares — VERIFY ON TRADINGVIEW (XETR)", "stop": "€21.97", "target1": "€28.50", "target2": "€30.88", "rr": "2.67 : 1", "sizing": "€10k: 50% at pivot · 30% +5–7% higher · 20% from a higher base. Never add to a loser." },
        "alerts": [ { "type": "BREAKOUT ALERT", "price": "€23.76" }, { "type": "WARNING LEVEL", "price": "€22.56" }, { "type": "STOP ALERT", "price": "€21.97" } ],
        "notes": "One of the better-looking small caps: 8/8 trend, tight 4.6% range, volume drying, pivot equal to the 52-week high so the trigger is unambiguous. Pharma packaging — steady growth rather than explosive; verify the latest quarter against the ≥25% EPS standard before acting. Would be a SETUP if the market were in gear."
      },
      {
        "rank": 6, "ticker": "CBK", "name": "Commerzbank AG (DAX)", "sector": "",
        "status": "WATCHLIST — Near Buy",
        "techScore": "8/8 (7-crit: 7/7)",
        "dataDate": "Yahoo, Sep 14, 2026",
        "technical": [
          { "metric": "Price", "value": "€42.67", "signal": "1.2% from 52W high" },
          { "metric": "50-Day MA", "value": "€39.18", "signal": "Ext +8.9% vs 50MA", "good": true },
          { "metric": "200-Day MA", "value": "€35.94", "signal": "Price above 200MA", "good": true },
          { "metric": "52-Week High", "value": "€43.20", "signal": "Pivot reference" },
          { "metric": "RS Rank", "value": "87", "signal": "vs German universe", "good": true },
          { "metric": "VCP", "value": "VCP FORMING", "signal": "Shallow even contractions, volume elevated" }
        ],
        "entry": { "pivot": "€43.20", "entryCondition": "Daily close above €43.20 on volume ≥ 3,173,661 shares (1.4× 50-day avg)", "volumeTrigger": "≥ 3,173,661 shares — VERIFY ON TRADINGVIEW (XETR)", "stop": "€39.96", "target1": "€51.84", "target2": "€56.16", "rr": "2.67 : 1", "sizing": "€10k: extension already 8.9% — 50% at pivot, then add only on strength." },
        "alerts": [ { "type": "BREAKOUT ALERT", "price": "€43.21" }, { "type": "WARNING LEVEL", "price": "€41.04" }, { "type": "STOP ALERT", "price": "€39.96" } ],
        "notes": "Fresh 52-week high at €43.12 on 8 Sep and 8/8 on the trend template — the highest-quality large-cap trend here. But OUTRUN ESTIMATES: JPMorgan lifted its target only to €39 (Neutral) in early September, so the share trades ~9% above it, and government stake-sale headlines are a live supply overhang on any breakout."
      },
      {
        "rank": 7, "ticker": "GFT", "name": "GFT Technologies SE (SDAX)", "sector": "",
        "status": "WATCHLIST — Near Buy",
        "techScore": "8/8 (7-crit: 7/7)",
        "dataDate": "Yahoo, Sep 14, 2026",
        "technical": [
          { "metric": "Price", "value": "€25.90", "signal": "4.4% from 52W high" },
          { "metric": "50-Day MA", "value": "€22.80", "signal": "Ext +13.6% vs 50MA", "good": false },
          { "metric": "200-Day MA", "value": "€20.14", "signal": "Price above 200MA", "good": true },
          { "metric": "52-Week High", "value": "€27.10", "signal": "Pivot reference" },
          { "metric": "RS Rank", "value": "92", "signal": "vs German universe", "good": true },
          { "metric": "VCP", "value": "VCP FORMING", "signal": "Last contraction WIDENED to 10.3%" }
        ],
        "entry": { "pivot": "€27.10", "entryCondition": "Daily close above €27.10 on volume ≥ 96,916 shares (1.4× 50-day avg)", "volumeTrigger": "≥ 96,916 shares — VERIFY ON TRADINGVIEW (XETR)", "stop": "€25.07", "target1": "€32.52", "target2": "€35.23", "rr": "2.67 : 1", "sizing": "Extension >10% — start at 25%, not 50%." },
        "alerts": [ { "type": "BREAKOUT ALERT", "price": "€27.11" }, { "type": "WARNING LEVEL", "price": "€25.75" }, { "type": "STOP ALERT", "price": "€25.07" } ],
        "notes": "8/8 trend and a strong recovery off €13.86, but the base is not finished: the last contraction widened (3.7% then 10.3%), volume is not drying and extension is 13.6%, right at the limit. IT services for banks — recovery, not ≥25% growth."
      },
      {
        "rank": 8, "ticker": "SFQ", "name": "SAF-Holland SE (SDAX)", "sector": "",
        "status": "WATCHLIST — Near Buy",
        "techScore": "8/8 (7-crit: 7/7)",
        "dataDate": "Yahoo, Sep 14, 2026",
        "technical": [
          { "metric": "Price", "value": "€22.15", "signal": "3.7% from 52W high" },
          { "metric": "50-Day MA", "value": "€21.38", "signal": "Ext +3.6% vs 50MA", "good": true },
          { "metric": "200-Day MA", "value": "€18.72", "signal": "Price above 200MA", "good": true },
          { "metric": "52-Week High", "value": "€23.00", "signal": "Pivot reference" },
          { "metric": "RS Rank", "value": "89", "signal": "vs German universe", "good": true },
          { "metric": "VCP", "value": "VCP FORMING", "signal": "Volume 48% ABOVE base — churn" }
        ],
        "entry": { "pivot": "€23.00", "entryCondition": "Daily close above €23.00 on volume ≥ 102,150 shares (1.4× 50-day avg)", "volumeTrigger": "≥ 102,150 shares — VERIFY ON TRADINGVIEW (XETR)", "stop": "€21.28", "target1": "€27.60", "target2": "€29.90", "rr": "2.67 : 1", "sizing": "€10k: 50% at pivot · 30% +5–7% higher · 20% from a higher base." },
        "alerts": [ { "type": "BREAKOUT ALERT", "price": "€23.01" }, { "type": "WARNING LEVEL", "price": "€21.85" }, { "type": "STOP ALERT", "price": "€21.28" } ],
        "notes": "8/8 trend and close to the high, but the final contraction widened to 7.4% and ten-day volume runs ~48% above the base — churn rather than the quiet dry-up the method wants. Cyclical truck and trailer components into a weak European commercial-vehicle cycle. Needs another two to three quiet weeks."
      },
      {
        "rank": 9, "ticker": "S92", "name": "SMA Solar Technology AG (SDAX) — teaching case", "sector": "",
        "status": "WATCHLIST",
        "techScore": "8/8 (7-crit: 7/7)",
        "dataDate": "Yahoo, Sep 14, 2026",
        "technical": [
          { "metric": "Price", "value": "€57.65", "signal": "18.5% from 52W high" },
          { "metric": "50-Day MA", "value": "€56.87", "signal": "Ext +1.4% vs 50MA", "good": true },
          { "metric": "200-Day MA", "value": "€47.38", "signal": "Price above 200MA", "good": true },
          { "metric": "52-Week High", "value": "€70.70", "signal": "Pivot far overhead" },
          { "metric": "RS Rank", "value": "99", "signal": "Strongest in the universe", "good": true },
          { "metric": "VCP", "value": "VCP NOT YET", "signal": "16.9% ten-day range — correcting" }
        ],
        "entry": { "pivot": "€63.95", "entryCondition": "No valid trigger — the base does not exist yet", "volumeTrigger": "n/a", "stop": "€59.15", "target1": "€76.74", "target2": "€83.14", "rr": "2.66 : 1", "sizing": "No position — wait for the range to tighten below ~12%." },
        "alerts": [ { "type": "BREAKOUT ALERT", "price": "€63.96" }, { "type": "WARNING LEVEL", "price": "€60.75" }, { "type": "STOP ALERT", "price": "€59.15" } ],
        "notes": "WHY NOT ACTIONABLE: highest relative strength in the universe (RS 99, more than 3× off the €18.46 low) and a perfect trend, but 18.5% below the high with a 16.9% ten-day range. That is a correction, not a base. Best candidate to graduate if breadth recovers."
      },
      {
        "rank": 10, "ticker": "TKA", "name": "thyssenkrupp AG (MDAX) — teaching case", "sector": "",
        "status": "WATCHLIST",
        "techScore": "8/8 (7-crit: 7/7)",
        "dataDate": "Yahoo, Sep 14, 2026",
        "technical": [
          { "metric": "Price", "value": "€15.01", "signal": "4.4% from 52W high" },
          { "metric": "50-Day MA", "value": "€13.03", "signal": "Ext +15.2% vs 50MA — too far", "good": false },
          { "metric": "200-Day MA", "value": "€10.74", "signal": "Price above 200MA", "good": true },
          { "metric": "52-Week High", "value": "€15.70", "signal": "Pivot reference" },
          { "metric": "RS Rank", "value": "98", "signal": "vs German universe", "good": true },
          { "metric": "VCP", "value": "VCP NOT YET", "signal": "15.4% range, contractions not shrinking" }
        ],
        "entry": { "pivot": "€15.70", "entryCondition": "No entry — extension 15.2% exceeds the 14% limit", "volumeTrigger": "n/a", "stop": "€14.52", "target1": "€18.84", "target2": "€20.41", "rr": "2.66 : 1", "sizing": "No position — wait for a pullback to the 50-day or a real base." },
        "alerts": [ { "type": "BREAKOUT ALERT", "price": "€15.71" }, { "type": "WARNING LEVEL", "price": "€14.92" }, { "type": "STOP ALERT", "price": "€14.52" } ],
        "notes": "WHY NOT ACTIONABLE: the Infineon lesson in a German wrapper. RS 98, 8/8 trend, doubled off the low — and completely unbuyable, because entering 15.2% above the 50-day puts any sane stop more than 10% away. Great trends and good entries are different questions."
      }
    ],
    "riskManagement": [
      "REGIME GATE: no new buying while breadth is below 60% above the 200-day and 45% stacked. This week that means zero new positions.",
      "Risk ≤1.25% of capital per trade; size from entry-to-stop distance.",
      "Never buy more than ~14% above the 50-day; extension is a risk measure, not an opinion.",
      "Hard stop ~7.5% below pivot; exit if hit intraday.",
      "Trend exit only on a WEEKLY close >3% below the 50-day MA (buffered — daily noise does not count).",
      "Re-entry cooldown: no re-buy for 4–6 weeks after a stop, only on a fresh higher base.",
      "Never average down; add only to winners at planned tranches (50% / 30% / 20%).",
      "Check for takeover situations before trusting a base — NA9 and DHER both look tight only because they are pinned to cash offers.",
      "Watch liquidity in SDAX names; several trade under 100,000 shares a day. Size for the exit, not the entry.",
      "Sell into strength near +20% / +30%. This mechanical screen has historically LAGGED buy-and-hold — idea generator, not auto-buy."
    ],
    "verification": "Every pivot, base and volume figure is engine-computed from Yahoo end-of-day data and was cross-checked against the reference Python engine (identical output on NA9; RS ranks matched on all 148 names). Before any order, confirm the pattern and pivot on a live TradingView chart (XETR), check earnings, ex-dividend, court and offer-acceptance dates, and re-check that the broader market has reconfirmed an uptrend.",
    "disclaimer": "For informational purposes only. Not financial advice."
  },

    {
      "reportDate": "2026-07-15",
      "title": "Germany Broad — DAX+MDAX+SDAX",
      "framework": "Minervini SEPA Framework (v2, regime-gated) | German Equities — SNAPSHOT (degraded) run",
      "market": {
        "index": "Germany Broad — DAX+MDAX+SDAX · Breadth UNDER PRESSURE · 62.5% > 200MA",
        "verdict": "UNDER PRESSURE",
        "verdictNote": "DEGRADED RUN: the 2-year daily-history feed (Yahoo) was unreachable (sandbox egress fully blocked), web_fetch is provenance-locked and FMP historical charts are plan-gated, so the deterministic 8-criterion engine and the algorithmic VCP could NOT run. Breadth here is a live-quote snapshot: 62.5% of names above their 200-day MA (uptrend needs ≥60%) but only 35.0% fully stacked (needs ≥45%), so the regime gate is ACTIVE. No name can be BUY/SETUP — VCP is uncomputable and the market is not in a confirmed uptrend. Universe: de_universe.txt, 40 DAX names (intended DAX+MDAX+SDAX ~160).",
        "metrics": [
          {
            "metric": "% above 200-day MA",
            "value": "62.5%",
            "signal": "Uptrend needs ≥60%",
            "good": true
          },
          {
            "metric": "% above 50-day MA",
            "value": "65.0%",
            "signal": "Short-term momentum",
            "good": true
          },
          {
            "metric": "% stacked 50 > 200 (snapshot)",
            "value": "35.0%",
            "signal": "Uptrend needs ≥45%",
            "good": false
          },
          {
            "metric": "Engine mode",
            "value": "SNAPSHOT",
            "signal": "No 2y history → no VCP, no true RS, no 150MA"
          }
        ],
        "sectorAsOf": "",
        "sectors": [],
        "sectorNote": "Web-confirmed: DAX 40 hit an all-time high ~25,900 on 6 Jul 2026, then pulled back to ~25,147 (14 Jul) and ~24,860 (16 Jul) on oil/US–Iran tension and profit-taking. Prior leader Rheinmetall is ~38% off its high (F126 frigate cancellation). Leadership is narrow; the tape reads UNDER PRESSURE. Prices FMP XETRA live snapshot, Jul 15, 2026."
      },
      "dataSources": [
        "FMP live XETRA quotes (.DE) — price, 50/200-day MA, 52-week high/low (real-time snapshot)",
        "Intended Yahoo 2-year daily history + deterministic v2 engine + algorithmic VCP — UNAVAILABLE this run (network blocked / plan-gated)",
        "Market context web-confirmed (DAX level, Rheinmetall correction). Verify live on TradingView (XETR)."
      ],
      "dataQualityNote": "DEGRADED SNAPSHOT: 40/40 quotes fetched, 0 failed, but the 2-year history engine and VCP could not run. Rankings are a rough trend-quality sort only. Mechanical screen historically lagged buy-and-hold — idea generator, not a buy list.",
      "dataQuality": [
        {
          "ticker": "Universe",
          "source": "de_universe.txt",
          "date": "Jul 15, 2026",
          "status": "40 DAX names (not full ~160)"
        },
        {
          "ticker": "Yahoo 2y history",
          "source": "Yahoo Finance",
          "date": "Jul 15, 2026",
          "status": "FAILED — egress blocked (403)"
        },
        {
          "ticker": "FMP historical",
          "source": "FMP",
          "date": "Jul 15, 2026",
          "status": "BLOCKED — plan-gated"
        },
        {
          "ticker": "FMP live quotes",
          "source": "FMP XETRA",
          "date": "Jul 15, 2026",
          "status": "40/40 IN REPORT"
        },
        {
          "ticker": "VCP / RS / 150MA",
          "source": "engine",
          "date": "Jul 15, 2026",
          "status": "NOT COMPUTED (no history)"
        }
      ],
      "criteria": [
        {
          "key": "c1",
          "label": "Price > 200MA"
        },
        {
          "key": "c2",
          "label": "200MA Trending Up"
        },
        {
          "key": "c3",
          "label": "Price ≥ 30% Above 52W Low"
        },
        {
          "key": "c4",
          "label": "Within 25% of 52W High"
        },
        {
          "key": "c5",
          "label": "50MA > 200MA"
        },
        {
          "key": "c6",
          "label": "Price > 50MA"
        },
        {
          "key": "c7",
          "label": "RS ≥ 70 (vs universe)"
        }
      ],
      "summary": [
        {
          "ticker": "IFX",
          "flags": [
            1,
            null,
            1,
            1,
            1,
            0,
            1
          ],
          "score": "5/6",
          "result": "FAIL"
        },
        {
          "ticker": "BAYN",
          "flags": [
            1,
            null,
            1,
            1,
            1,
            1,
            1
          ],
          "score": "6/6",
          "result": "FAIL"
        },
        {
          "ticker": "DHL",
          "flags": [
            1,
            null,
            1,
            1,
            1,
            1,
            1
          ],
          "score": "6/6",
          "result": "FAIL"
        },
        {
          "ticker": "ZAL",
          "flags": [
            1,
            null,
            1,
            1,
            1,
            1,
            1
          ],
          "score": "6/6",
          "result": "FAIL"
        },
        {
          "ticker": "SY1",
          "flags": [
            1,
            null,
            1,
            1,
            1,
            1,
            1
          ],
          "score": "6/6",
          "result": "FAIL"
        },
        {
          "ticker": "MRK",
          "flags": [
            1,
            null,
            1,
            1,
            1,
            1,
            1
          ],
          "score": "6/6",
          "result": "FAIL"
        },
        {
          "ticker": "ADS",
          "flags": [
            1,
            null,
            1,
            1,
            1,
            1,
            1
          ],
          "score": "6/6",
          "result": "FAIL"
        },
        {
          "ticker": "BNR",
          "flags": [
            1,
            null,
            1,
            1,
            1,
            1,
            1
          ],
          "score": "6/6",
          "result": "FAIL"
        },
        {
          "ticker": "DB1",
          "flags": [
            1,
            null,
            0,
            1,
            1,
            1,
            1
          ],
          "score": "5/6",
          "result": "FAIL"
        },
        {
          "ticker": "CBK",
          "flags": [
            1,
            null,
            1,
            1,
            1,
            1,
            1
          ],
          "score": "6/6",
          "result": "FAIL"
        },
        {
          "ticker": "ALV",
          "flags": [
            1,
            null,
            0,
            1,
            1,
            1,
            1
          ],
          "score": "5/6",
          "result": "FAIL"
        },
        {
          "ticker": "RWE",
          "flags": [
            1,
            null,
            1,
            1,
            1,
            1,
            1
          ],
          "score": "6/6",
          "result": "FAIL"
        },
        {
          "ticker": "EOAN",
          "flags": [
            1,
            null,
            1,
            1,
            1,
            1,
            0
          ],
          "score": "5/6",
          "result": "FAIL"
        },
        {
          "ticker": "CON",
          "flags": [
            1,
            null,
            1,
            1,
            1,
            1,
            0
          ],
          "score": "5/6",
          "result": "FAIL"
        },
        {
          "ticker": "SIE",
          "flags": [
            1,
            null,
            1,
            1,
            1,
            0,
            0
          ],
          "score": "4/6",
          "result": "WATCHLIST"
        },
        {
          "ticker": "DTG",
          "flags": [
            1,
            null,
            0,
            1,
            1,
            1,
            0
          ],
          "score": "4/6",
          "result": "WATCHLIST"
        },
        {
          "ticker": "DBK",
          "flags": [
            1,
            null,
            1,
            1,
            0,
            1,
            0
          ],
          "score": "4/6",
          "result": "WATCHLIST"
        },
        {
          "ticker": "SRT3",
          "flags": [
            1,
            null,
            1,
            1,
            0,
            1,
            0
          ],
          "score": "4/6",
          "result": "WATCHLIST"
        },
        {
          "ticker": "ENR",
          "flags": [
            1,
            null,
            1,
            1,
            1,
            0,
            0
          ],
          "score": "4/6",
          "result": "WATCHLIST"
        },
        {
          "ticker": "FME",
          "flags": [
            1,
            null,
            0,
            1,
            0,
            1,
            0
          ],
          "score": "3/6",
          "result": "WATCHLIST"
        },
        {
          "ticker": "HEN3",
          "flags": [
            1,
            null,
            0,
            1,
            0,
            1,
            0
          ],
          "score": "3/6",
          "result": "WATCHLIST"
        },
        {
          "ticker": "AIR",
          "flags": [
            1,
            null,
            0,
            1,
            0,
            1,
            0
          ],
          "score": "3/6",
          "result": "WATCHLIST"
        },
        {
          "ticker": "P911",
          "flags": [
            1,
            null,
            0,
            1,
            1,
            0,
            0
          ],
          "score": "3/6",
          "result": "WATCHLIST"
        },
        {
          "ticker": "BAS",
          "flags": [
            1,
            null,
            0,
            1,
            1,
            0,
            0
          ],
          "score": "3/6",
          "result": "WATCHLIST"
        },
        {
          "ticker": "MTX",
          "flags": [
            1,
            null,
            1,
            1,
            0,
            1,
            0
          ],
          "score": "4/6",
          "result": "WATCHLIST"
        },
        {
          "ticker": "QIA",
          "flags": [
            0,
            null,
            1,
            1,
            0,
            1,
            0
          ],
          "score": "3/6",
          "result": "WATCHLIST"
        },
        {
          "ticker": "1COV",
          "flags": [
            0,
            null,
            0,
            1,
            0,
            0,
            0
          ],
          "score": "1/6",
          "result": "FAIL"
        },
        {
          "ticker": "HNR1",
          "flags": [
            0,
            null,
            0,
            1,
            0,
            1,
            0
          ],
          "score": "2/6",
          "result": "FAIL"
        },
        {
          "ticker": "MUV2",
          "flags": [
            0,
            null,
            0,
            1,
            0,
            1,
            0
          ],
          "score": "2/6",
          "result": "FAIL"
        },
        {
          "ticker": "DTE",
          "flags": [
            0,
            null,
            0,
            1,
            0,
            0,
            0
          ],
          "score": "1/6",
          "result": "FAIL"
        },
        {
          "ticker": "FRE",
          "flags": [
            0,
            null,
            0,
            1,
            0,
            1,
            0
          ],
          "score": "2/6",
          "result": "FAIL"
        },
        {
          "ticker": "BEI",
          "flags": [
            0,
            null,
            0,
            0,
            0,
            1,
            0
          ],
          "score": "1/6",
          "result": "FAIL"
        },
        {
          "ticker": "HEI",
          "flags": [
            0,
            null,
            0,
            0,
            0,
            0,
            0
          ],
          "score": "0/6",
          "result": "FAIL"
        },
        {
          "ticker": "SHL",
          "flags": [
            0,
            null,
            0,
            0,
            0,
            1,
            0
          ],
          "score": "1/6",
          "result": "FAIL"
        },
        {
          "ticker": "MBG",
          "flags": [
            0,
            null,
            0,
            0,
            0,
            0,
            0
          ],
          "score": "0/6",
          "result": "FAIL"
        },
        {
          "ticker": "PAH3",
          "flags": [
            0,
            null,
            0,
            0,
            0,
            0,
            0
          ],
          "score": "0/6",
          "result": "FAIL"
        },
        {
          "ticker": "VOW3",
          "flags": [
            0,
            null,
            0,
            0,
            0,
            0,
            0
          ],
          "score": "0/6",
          "result": "FAIL"
        },
        {
          "ticker": "SAP",
          "flags": [
            0,
            null,
            0,
            0,
            0,
            0,
            0
          ],
          "score": "0/6",
          "result": "FAIL"
        },
        {
          "ticker": "BMW",
          "flags": [
            0,
            null,
            0,
            0,
            0,
            0,
            0
          ],
          "score": "0/6",
          "result": "FAIL"
        },
        {
          "ticker": "RHM",
          "flags": [
            0,
            null,
            0,
            0,
            0,
            0,
            0
          ],
          "score": "0/6",
          "result": "FAIL"
        }
      ],
      "stocks": [
        {
          "rank": 1,
          "ticker": "IFX",
          "name": "Infineon Technologies AG",
          "sector": "",
          "status": "EXTENDED — WATCH (snapshot)",
          "techScore": "5/6 (7-crit; c2 N/A)",
          "dataDate": "FMP XETRA snapshot, Jul 15, 2026",
          "technical": [
            {
              "metric": "Price",
              "value": "€67.31",
              "signal": "24.2% from 52W high"
            },
            {
              "metric": "50-Day MA",
              "value": "€74.81",
              "signal": "Ext -10.0% vs 50MA",
              "good": false
            },
            {
              "metric": "200-Day MA",
              "value": "€48.63",
              "signal": "Price above 200MA",
              "good": true
            },
            {
              "metric": "52-Week High / Low",
              "value": "€88.83 / €30.82",
              "signal": "Range reference"
            },
            {
              "metric": "RS Rank (proxy)",
              "value": "99",
              "signal": "vs German universe (snapshot proxy)",
              "good": true
            },
            {
              "metric": "VCP",
              "value": "NOT COMPUTED",
              "signal": "No 2y history this run"
            }
          ],
          "entry": {
            "pivot": "N/A",
            "entryCondition": "Not derivable — the 2-year price history needed for the VCP base and pivot was unavailable this run.",
            "volumeTrigger": "N/A",
            "stop": "N/A",
            "target1": "N/A",
            "target2": "N/A",
            "rr": "N/A",
            "sizing": "No position — market UNDER PRESSURE and no validated base. Watch only."
          },
          "alerts": [
            {
              "type": "NOTE",
              "price": "Re-run with full history to compute pivot/stop/targets"
            }
          ],
          "notes": "Strong trend snapshot (price above 50/200-day MAs, near 52-week high) but this is NOT a buy: VCP/base structure could not be validated and the market regime gate is active."
        },
        {
          "rank": 2,
          "ticker": "BAYN",
          "name": "Bayer AG",
          "sector": "",
          "status": "EXTENDED — WATCH (snapshot)",
          "techScore": "6/6 (7-crit; c2 N/A)",
          "dataDate": "FMP XETRA snapshot, Jul 15, 2026",
          "technical": [
            {
              "metric": "Price",
              "value": "€47.71",
              "signal": "11.5% from 52W high"
            },
            {
              "metric": "50-Day MA",
              "value": "€40.71",
              "signal": "Ext +17.2% vs 50MA",
              "good": true
            },
            {
              "metric": "200-Day MA",
              "value": "€37.80",
              "signal": "Price above 200MA",
              "good": true
            },
            {
              "metric": "52-Week High / Low",
              "value": "€53.92 / €24.80",
              "signal": "Range reference"
            },
            {
              "metric": "RS Rank (proxy)",
              "value": "96",
              "signal": "vs German universe (snapshot proxy)",
              "good": true
            },
            {
              "metric": "VCP",
              "value": "NOT COMPUTED",
              "signal": "No 2y history this run"
            }
          ],
          "entry": {
            "pivot": "N/A",
            "entryCondition": "Not derivable — the 2-year price history needed for the VCP base and pivot was unavailable this run.",
            "volumeTrigger": "N/A",
            "stop": "N/A",
            "target1": "N/A",
            "target2": "N/A",
            "rr": "N/A",
            "sizing": "No position — market UNDER PRESSURE and no validated base. Watch only."
          },
          "alerts": [
            {
              "type": "NOTE",
              "price": "Re-run with full history to compute pivot/stop/targets"
            }
          ],
          "notes": "Strong trend snapshot (price above 50/200-day MAs, near 52-week high) but this is NOT a buy: VCP/base structure could not be validated and the market regime gate is active."
        },
        {
          "rank": 3,
          "ticker": "DHL",
          "name": "DHL Group",
          "sector": "",
          "status": "EXTENDED — WATCH (snapshot)",
          "techScore": "6/6 (7-crit; c2 N/A)",
          "dataDate": "FMP XETRA snapshot, Jul 15, 2026",
          "technical": [
            {
              "metric": "Price",
              "value": "€57.72",
              "signal": "0.0% from 52W high"
            },
            {
              "metric": "50-Day MA",
              "value": "€51.51",
              "signal": "Ext +12.0% vs 50MA",
              "good": true
            },
            {
              "metric": "200-Day MA",
              "value": "€47.21",
              "signal": "Price above 200MA",
              "good": true
            },
            {
              "metric": "52-Week High / Low",
              "value": "€57.72 / €37.14",
              "signal": "Range reference"
            },
            {
              "metric": "RS Rank (proxy)",
              "value": "94",
              "signal": "vs German universe (snapshot proxy)",
              "good": true
            },
            {
              "metric": "VCP",
              "value": "NOT COMPUTED",
              "signal": "No 2y history this run"
            }
          ],
          "entry": {
            "pivot": "N/A",
            "entryCondition": "Not derivable — the 2-year price history needed for the VCP base and pivot was unavailable this run.",
            "volumeTrigger": "N/A",
            "stop": "N/A",
            "target1": "N/A",
            "target2": "N/A",
            "rr": "N/A",
            "sizing": "No position — market UNDER PRESSURE and no validated base. Watch only."
          },
          "alerts": [
            {
              "type": "NOTE",
              "price": "Re-run with full history to compute pivot/stop/targets"
            }
          ],
          "notes": "Strong trend snapshot (price above 50/200-day MAs, near 52-week high) but this is NOT a buy: VCP/base structure could not be validated and the market regime gate is active."
        },
        {
          "rank": 4,
          "ticker": "ZAL",
          "name": "Zalando SE",
          "sector": "",
          "status": "EXTENDED — WATCH (snapshot)",
          "techScore": "6/6 (7-crit; c2 N/A)",
          "dataDate": "FMP XETRA snapshot, Jul 15, 2026",
          "technical": [
            {
              "metric": "Price",
              "value": "€27.84",
              "signal": "2.0% from 52W high"
            },
            {
              "metric": "50-Day MA",
              "value": "€23.65",
              "signal": "Ext +17.7% vs 50MA",
              "good": true
            },
            {
              "metric": "200-Day MA",
              "value": "€23.27",
              "signal": "Price above 200MA",
              "good": true
            },
            {
              "metric": "52-Week High / Low",
              "value": "€28.40 / €18.61",
              "signal": "Range reference"
            },
            {
              "metric": "RS Rank (proxy)",
              "value": "91",
              "signal": "vs German universe (snapshot proxy)",
              "good": true
            },
            {
              "metric": "VCP",
              "value": "NOT COMPUTED",
              "signal": "No 2y history this run"
            }
          ],
          "entry": {
            "pivot": "N/A",
            "entryCondition": "Not derivable — the 2-year price history needed for the VCP base and pivot was unavailable this run.",
            "volumeTrigger": "N/A",
            "stop": "N/A",
            "target1": "N/A",
            "target2": "N/A",
            "rr": "N/A",
            "sizing": "No position — market UNDER PRESSURE and no validated base. Watch only."
          },
          "alerts": [
            {
              "type": "NOTE",
              "price": "Re-run with full history to compute pivot/stop/targets"
            }
          ],
          "notes": "Strong trend snapshot (price above 50/200-day MAs, near 52-week high) but this is NOT a buy: VCP/base structure could not be validated and the market regime gate is active."
        },
        {
          "rank": 5,
          "ticker": "SY1",
          "name": "Symrise AG",
          "sector": "",
          "status": "EXTENDED — WATCH (snapshot)",
          "techScore": "6/6 (7-crit; c2 N/A)",
          "dataDate": "FMP XETRA snapshot, Jul 15, 2026",
          "technical": [
            {
              "metric": "Price",
              "value": "€87.76",
              "signal": "5.1% from 52W high"
            },
            {
              "metric": "50-Day MA",
              "value": "€81.85",
              "signal": "Ext +7.2% vs 50MA",
              "good": true
            },
            {
              "metric": "200-Day MA",
              "value": "€75.00",
              "signal": "Price above 200MA",
              "good": true
            },
            {
              "metric": "52-Week High / Low",
              "value": "€92.46 / €64.70",
              "signal": "Range reference"
            },
            {
              "metric": "RS Rank (proxy)",
              "value": "89",
              "signal": "vs German universe (snapshot proxy)",
              "good": true
            },
            {
              "metric": "VCP",
              "value": "NOT COMPUTED",
              "signal": "No 2y history this run"
            }
          ],
          "entry": {
            "pivot": "N/A",
            "entryCondition": "Not derivable — the 2-year price history needed for the VCP base and pivot was unavailable this run.",
            "volumeTrigger": "N/A",
            "stop": "N/A",
            "target1": "N/A",
            "target2": "N/A",
            "rr": "N/A",
            "sizing": "No position — market UNDER PRESSURE and no validated base. Watch only."
          },
          "alerts": [
            {
              "type": "NOTE",
              "price": "Re-run with full history to compute pivot/stop/targets"
            }
          ],
          "notes": "Strong trend snapshot (price above 50/200-day MAs, near 52-week high) but this is NOT a buy: VCP/base structure could not be validated and the market regime gate is active."
        },
        {
          "rank": 6,
          "ticker": "MRK",
          "name": "Merck KGaA",
          "sector": "",
          "status": "EXTENDED — WATCH (snapshot)",
          "techScore": "6/6 (7-crit; c2 N/A)",
          "dataDate": "FMP XETRA snapshot, Jul 15, 2026",
          "technical": [
            {
              "metric": "Price",
              "value": "€140.10",
              "signal": "5.8% from 52W high"
            },
            {
              "metric": "50-Day MA",
              "value": "€132.42",
              "signal": "Ext +5.8% vs 50MA",
              "good": true
            },
            {
              "metric": "200-Day MA",
              "value": "€121.21",
              "signal": "Price above 200MA",
              "good": true
            },
            {
              "metric": "52-Week High / Low",
              "value": "€148.65 / €100.70",
              "signal": "Range reference"
            },
            {
              "metric": "RS Rank (proxy)",
              "value": "86",
              "signal": "vs German universe (snapshot proxy)",
              "good": true
            },
            {
              "metric": "VCP",
              "value": "NOT COMPUTED",
              "signal": "No 2y history this run"
            }
          ],
          "entry": {
            "pivot": "N/A",
            "entryCondition": "Not derivable — the 2-year price history needed for the VCP base and pivot was unavailable this run.",
            "volumeTrigger": "N/A",
            "stop": "N/A",
            "target1": "N/A",
            "target2": "N/A",
            "rr": "N/A",
            "sizing": "No position — market UNDER PRESSURE and no validated base. Watch only."
          },
          "alerts": [
            {
              "type": "NOTE",
              "price": "Re-run with full history to compute pivot/stop/targets"
            }
          ],
          "notes": "Strong trend snapshot (price above 50/200-day MAs, near 52-week high) but this is NOT a buy: VCP/base structure could not be validated and the market regime gate is active."
        },
        {
          "rank": 7,
          "ticker": "ADS",
          "name": "adidas AG",
          "sector": "",
          "status": "EXTENDED — WATCH (snapshot)",
          "techScore": "6/6 (7-crit; c2 N/A)",
          "dataDate": "FMP XETRA snapshot, Jul 15, 2026",
          "technical": [
            {
              "metric": "Price",
              "value": "€182.90",
              "signal": "13.0% from 52W high"
            },
            {
              "metric": "50-Day MA",
              "value": "€166.91",
              "signal": "Ext +9.6% vs 50MA",
              "good": true
            },
            {
              "metric": "200-Day MA",
              "value": "€158.75",
              "signal": "Price above 200MA",
              "good": true
            },
            {
              "metric": "52-Week High / Low",
              "value": "€210.20 / €129.95",
              "signal": "Range reference"
            },
            {
              "metric": "RS Rank (proxy)",
              "value": "84",
              "signal": "vs German universe (snapshot proxy)",
              "good": true
            },
            {
              "metric": "VCP",
              "value": "NOT COMPUTED",
              "signal": "No 2y history this run"
            }
          ],
          "entry": {
            "pivot": "N/A",
            "entryCondition": "Not derivable — the 2-year price history needed for the VCP base and pivot was unavailable this run.",
            "volumeTrigger": "N/A",
            "stop": "N/A",
            "target1": "N/A",
            "target2": "N/A",
            "rr": "N/A",
            "sizing": "No position — market UNDER PRESSURE and no validated base. Watch only."
          },
          "alerts": [
            {
              "type": "NOTE",
              "price": "Re-run with full history to compute pivot/stop/targets"
            }
          ],
          "notes": "Strong trend snapshot (price above 50/200-day MAs, near 52-week high) but this is NOT a buy: VCP/base structure could not be validated and the market regime gate is active."
        },
        {
          "rank": 8,
          "ticker": "BNR",
          "name": "Brenntag SE",
          "sector": "",
          "status": "EXTENDED — WATCH (snapshot)",
          "techScore": "6/6 (7-crit; c2 N/A)",
          "dataDate": "FMP XETRA snapshot, Jul 15, 2026",
          "technical": [
            {
              "metric": "Price",
              "value": "€59.10",
              "signal": "7.3% from 52W high"
            },
            {
              "metric": "50-Day MA",
              "value": "€56.93",
              "signal": "Ext +3.8% vs 50MA",
              "good": true
            },
            {
              "metric": "200-Day MA",
              "value": "€53.12",
              "signal": "Price above 200MA",
              "good": true
            },
            {
              "metric": "52-Week High / Low",
              "value": "€63.76 / €43.72",
              "signal": "Range reference"
            },
            {
              "metric": "RS Rank (proxy)",
              "value": "81",
              "signal": "vs German universe (snapshot proxy)",
              "good": true
            },
            {
              "metric": "VCP",
              "value": "NOT COMPUTED",
              "signal": "No 2y history this run"
            }
          ],
          "entry": {
            "pivot": "N/A",
            "entryCondition": "Not derivable — the 2-year price history needed for the VCP base and pivot was unavailable this run.",
            "volumeTrigger": "N/A",
            "stop": "N/A",
            "target1": "N/A",
            "target2": "N/A",
            "rr": "N/A",
            "sizing": "No position — market UNDER PRESSURE and no validated base. Watch only."
          },
          "alerts": [
            {
              "type": "NOTE",
              "price": "Re-run with full history to compute pivot/stop/targets"
            }
          ],
          "notes": "Strong trend snapshot (price above 50/200-day MAs, near 52-week high) but this is NOT a buy: VCP/base structure could not be validated and the market regime gate is active."
        }
      ],
      "disclaimer": "For informational purposes only. Not financial advice."
    },
  {
    "reportDate": "2026-06-15",
    "title": "Germany Broad — DAX+MDAX+SDAX",
    "framework": "Minervini SEPA Framework (v2, regime-gated) | German Equities",
    "market": {
      "index": "Germany Broad — DAX+MDAX+SDAX · Breadth UNDER PRESSURE · 51.3% > 200MA",
      "verdict": "UNDER PRESSURE",
      "verdictNote": "No index quote used; breadth derived from the universe. Only 51.3% of names are above their 200-day line (uptrend needs ≥60%) and 38.5% are fully stacked (needs ≥45%). The regime gate downgraded all would-be buys to EXTENDED — WATCH. Universe: German blue chips (de_universe.txt, 40 names; intended DAX+MDAX+SDAX ~160).",
      "metrics": [
        {
          "metric": "% above 200-day MA",
          "value": "51.3%",
          "signal": "Uptrend needs ≥60%",
          "good": false
        },
        {
          "metric": "% above 50-day MA",
          "value": "46.2%",
          "signal": "Short-term momentum soft",
          "good": false
        },
        {
          "metric": "% stacked 50 > 150 > 200",
          "value": "38.5%",
          "signal": "Uptrend needs ≥45%",
          "good": false
        },
        {
          "metric": "Would-be buys gated by market",
          "value": "7",
          "signal": "RWE, CON, DHL, CBK, SIE, MRK, P911 — downgraded to WATCH"
        }
      ],
      "sectorAsOf": "",
      "sectors": [],
      "sectorNote": "DAX has been correcting off its June highs amid rate and geopolitical jitters. Leadership is narrow (semis IFX, banks CBK, industrials SIE/CON, logistics DHL); autos, chemicals, healthcare and SAP remain in Stage-3/4 declines. Prices Yahoo Jun 13 close (XETRA)."
    },
    "dataSources": [
      "Yahoo Finance (.DE / XETRA) — 2-year daily history, pulled locally (sandbox cannot reach Yahoo)",
      "8-criterion Trend Template + RS percentile + algorithmic VCP computed by the deterministic v2 engine",
      "Jun 13, 2026 close — verify live on TradingView (XETR)"
    ],
    "dataQualityNote": "39 of 40 names evaluated; 1 download failure (1COV). Breadth verdict UNDER PRESSURE. Mechanical screen — historically lagged buy-and-hold; treat as an idea generator, not a buy list.",
    "dataQuality": [
      {
        "ticker": "Universe",
        "source": "Yahoo Finance (.DE)",
        "date": "Jun 13, 2026",
        "status": "39/40 IN REPORT"
      },
      {
        "ticker": "1COV",
        "source": "Yahoo Finance",
        "date": "Jun 13, 2026",
        "status": "EXCLUDED (download failed)"
      },
      {
        "ticker": "RWE/CON/DHL/CBK/SIE",
        "source": "Yahoo Finance",
        "date": "Jun 13, 2026",
        "status": "IN REPORT (gated)"
      },
      {
        "ticker": "IFX/ENR",
        "source": "Yahoo Finance",
        "date": "Jun 13, 2026",
        "status": "IN REPORT (extended)"
      }
    ],
    "criteria": [
      {
        "key": "c1",
        "label": "Price > 200MA"
      },
      {
        "key": "c2",
        "label": "200MA Trending Up"
      },
      {
        "key": "c3",
        "label": "Price ≥ 30% Above 52W Low"
      },
      {
        "key": "c4",
        "label": "Within 25% of 52W High"
      },
      {
        "key": "c5",
        "label": "50MA > 200MA"
      },
      {
        "key": "c6",
        "label": "Price > 50MA"
      },
      {
        "key": "c7",
        "label": "RS ≥ 70 (vs universe)"
      }
    ],
    "summary": [
      {
        "ticker": "IFX",
        "flags": [
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        "score": "7/7",
        "result": "FAIL"
      },
      {
        "ticker": "ENR",
        "flags": [
          1,
          1,
          1,
          1,
          1,
          0,
          1
        ],
        "score": "6/7",
        "result": "FAIL"
      },
      {
        "ticker": "RWE",
        "flags": [
          1,
          1,
          1,
          1,
          1,
          0,
          1
        ],
        "score": "6/7",
        "result": "FAIL"
      },
      {
        "ticker": "CON",
        "flags": [
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        "score": "7/7",
        "result": "FAIL"
      },
      {
        "ticker": "DHL",
        "flags": [
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        "score": "7/7",
        "result": "FAIL"
      },
      {
        "ticker": "P911",
        "flags": [
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        "score": "7/7",
        "result": "FAIL"
      },
      {
        "ticker": "CBK",
        "flags": [
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        "score": "7/7",
        "result": "FAIL"
      },
      {
        "ticker": "MRK",
        "flags": [
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        "score": "7/7",
        "result": "FAIL"
      },
      {
        "ticker": "SIE",
        "flags": [
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        "score": "7/7",
        "result": "FAIL"
      },
      {
        "ticker": "BAS",
        "flags": [
          1,
          1,
          0,
          1,
          1,
          0,
          1
        ],
        "score": "5/7",
        "result": "FAIL"
      },
      {
        "ticker": "BNR",
        "flags": [
          1,
          1,
          0,
          1,
          1,
          0,
          1
        ],
        "score": "5/7",
        "result": "FAIL"
      },
      {
        "ticker": "ALV",
        "flags": [
          1,
          1,
          0,
          1,
          1,
          1,
          0
        ],
        "score": "5/7",
        "result": "FAIL"
      },
      {
        "ticker": "BAYN",
        "flags": [
          0,
          1,
          1,
          0,
          1,
          0,
          1
        ],
        "score": "4/7",
        "result": "WATCHLIST"
      },
      {
        "ticker": "EOAN",
        "flags": [
          1,
          1,
          0,
          1,
          1,
          0,
          0
        ],
        "score": "4/7",
        "result": "WATCHLIST"
      },
      {
        "ticker": "ADS",
        "flags": [
          1,
          0,
          1,
          1,
          0,
          1,
          0
        ],
        "score": "4/7",
        "result": "WATCHLIST"
      },
      {
        "ticker": "SRT3",
        "flags": [
          0,
          1,
          1,
          1,
          0,
          1,
          0
        ],
        "score": "4/7",
        "result": "WATCHLIST"
      },
      {
        "ticker": "DTG",
        "flags": [
          1,
          1,
          0,
          1,
          1,
          0,
          0
        ],
        "score": "4/7",
        "result": "WATCHLIST"
      },
      {
        "ticker": "DB1",
        "flags": [
          1,
          0,
          0,
          1,
          1,
          0,
          0
        ],
        "score": "3/7",
        "result": "WATCHLIST"
      },
      {
        "ticker": "ZAL",
        "flags": [
          1,
          0,
          1,
          1,
          0,
          1,
          0
        ],
        "score": "4/7",
        "result": "WATCHLIST"
      },
      {
        "ticker": "SY1",
        "flags": [
          1,
          0,
          0,
          1,
          1,
          1,
          0
        ],
        "score": "4/7",
        "result": "FAIL"
      },
      {
        "ticker": "SAP",
        "flags": [
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "score": "0/7",
        "result": "FAIL"
      },
      {
        "ticker": "RHM",
        "flags": [
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "score": "0/7",
        "result": "FAIL"
      },
      {
        "ticker": "BMW",
        "flags": [
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "score": "0/7",
        "result": "FAIL"
      }
    ],
    "stocksNote": "No BUY NOW or SETUP this week — the regime gate is active. The seven 'Near Buy' cards (RWE, CON, DHL, CBK, SIE, MRK, P911) met buy criteria but were downgraded to WATCH because German breadth is UNDER PRESSURE. IFX (stretched leader) and ENR (deep base) are instructive non-buys. All data Yahoo Jun 13 close — verify on TradingView (XETR).",
    "stocks": [
      {
        "rank": 1,
        "ticker": "RWE",
        "name": "RWE AG",
        "sector": "",
        "status": "WATCHLIST — Near Buy",
        "techScore": "7/8 (7-crit: 6/7)",
        "dataDate": "Yahoo, Jun 13, 2026",
        "technical": [
          {
            "metric": "Price",
            "value": "€57.46",
            "signal": "7.3% from 52W high"
          },
          {
            "metric": "50-Day MA",
            "value": "€57.82",
            "signal": "Ext -0.6% vs 50MA",
            "good": false
          },
          {
            "metric": "200-Day MA",
            "value": "€48.84",
            "signal": "Price above 200MA",
            "good": true
          },
          {
            "metric": "52-Week High",
            "value": "€62.00",
            "signal": "Pivot reference"
          },
          {
            "metric": "RS Rank",
            "value": "94",
            "signal": "vs German universe",
            "good": true
          },
          {
            "metric": "VCP",
            "value": "VCP FORMING",
            "signal": "Base status"
          }
        ],
        "entry": {
          "pivot": "€57.72",
          "entryCondition": "Daily close above €57.72 on volume ≥ 2,182,686 shares (1.4× 50-day avg)",
          "volumeTrigger": "≥ 2,182,686 shares — VERIFY ON TRADINGVIEW (XETR)",
          "stop": "€53.39",
          "target1": "€69.26",
          "target2": "€75.04",
          "rr": "2.67 : 1",
          "sizing": "€10k: 50% at pivot · 30% +5–7% higher · 20% from a higher base. Never add to a loser."
        },
        "alerts": [
          {
            "type": "BREAKOUT ALERT",
            "price": "€57.73"
          },
          {
            "type": "WARNING LEVEL",
            "price": "€54.83"
          },
          {
            "type": "STOP ALERT",
            "price": "€53.39"
          }
        ],
        "notes": "Tightest gated base (5.7%, volume drying). Would be a SETUP if the market reconfirms. Analyst avg ~€63, Goldman Sachs Buy €68.50 → ~10–20% room above the €57.72 pivot."
      },
      {
        "rank": 2,
        "ticker": "CON",
        "name": "Continental AG",
        "sector": "",
        "status": "WATCHLIST — Near Buy",
        "techScore": "8/8 (7-crit: 7/7)",
        "dataDate": "Yahoo, Jun 13, 2026",
        "technical": [
          {
            "metric": "Price",
            "value": "€72.30",
            "signal": "4.1% from 52W high"
          },
          {
            "metric": "50-Day MA",
            "value": "€67.10",
            "signal": "Ext 7.8% vs 50MA",
            "good": true
          },
          {
            "metric": "200-Day MA",
            "value": "€64.57",
            "signal": "Price above 200MA",
            "good": true
          },
          {
            "metric": "52-Week High",
            "value": "€75.36",
            "signal": "Pivot reference"
          },
          {
            "metric": "RS Rank",
            "value": "91",
            "signal": "vs German universe",
            "good": true
          },
          {
            "metric": "VCP",
            "value": "VCP FORMING",
            "signal": "Base status"
          }
        ],
        "entry": {
          "pivot": "€73.08",
          "entryCondition": "Daily close above €73.08 on volume ≥ 619,473 shares (1.4× 50-day avg)",
          "volumeTrigger": "≥ 619,473 shares — VERIFY ON TRADINGVIEW (XETR)",
          "stop": "€67.6",
          "target1": "€87.7",
          "target2": "€95.0",
          "rr": "2.67 : 1",
          "sizing": "€10k: 50% at pivot · 30% +5–7% higher · 20% from a higher base. Never add to a loser."
        },
        "alerts": [
          {
            "type": "BREAKOUT ALERT",
            "price": "€73.09"
          },
          {
            "type": "WARNING LEVEL",
            "price": "€69.43"
          },
          {
            "type": "STOP ALERT",
            "price": "€67.6"
          }
        ],
        "notes": "Full 7/7 trend, RS 91. DZ Bank lifted target to €79 Buy (Jun 10); consensus ~€74–75 — modest room above pivot. Volume not yet drying."
      },
      {
        "rank": 3,
        "ticker": "DHL",
        "name": "DHL Group",
        "sector": "",
        "status": "WATCHLIST — Near Buy",
        "techScore": "8/8 (7-crit: 7/7)",
        "dataDate": "Yahoo, Jun 13, 2026",
        "technical": [
          {
            "metric": "Price",
            "value": "€51.72",
            "signal": "2.9% from 52W high"
          },
          {
            "metric": "50-Day MA",
            "value": "€48.95",
            "signal": "Ext 5.7% vs 50MA",
            "good": true
          },
          {
            "metric": "200-Day MA",
            "value": "€45.17",
            "signal": "Price above 200MA",
            "good": true
          },
          {
            "metric": "52-Week High",
            "value": "€53.26",
            "signal": "Pivot reference"
          },
          {
            "metric": "RS Rank",
            "value": "89",
            "signal": "vs German universe",
            "good": true
          },
          {
            "metric": "VCP",
            "value": "VCP FORMING",
            "signal": "Base status"
          }
        ],
        "entry": {
          "pivot": "€53.26",
          "entryCondition": "Daily close above €53.26 on volume ≥ 2,800,151 shares (1.4× 50-day avg)",
          "volumeTrigger": "≥ 2,800,151 shares — VERIFY ON TRADINGVIEW (XETR)",
          "stop": "€49.27",
          "target1": "€63.91",
          "target2": "€69.24",
          "rr": "2.67 : 1",
          "sizing": "€10k: 50% at pivot · 30% +5–7% higher · 20% from a higher base. Never add to a loser."
        },
        "alerts": [
          {
            "type": "BREAKOUT ALERT",
            "price": "€53.27"
          },
          {
            "type": "WARNING LEVEL",
            "price": "€50.60"
          },
          {
            "type": "STOP ALERT",
            "price": "€49.27"
          }
        ],
        "notes": "At a 4-year high; pivot €53.26 is the 52-week high. Tight base, volume drying, buybacks supportive. Consensus €51.79 ≈ price, so upside leans on the €61 high target."
      },
      {
        "rank": 4,
        "ticker": "CBK",
        "name": "Commerzbank AG",
        "sector": "",
        "status": "WATCHLIST — Near Buy",
        "techScore": "8/8 (7-crit: 7/7)",
        "dataDate": "Yahoo, Jun 13, 2026",
        "technical": [
          {
            "metric": "Price",
            "value": "€36.83",
            "signal": "4.1% from 52W high"
          },
          {
            "metric": "50-Day MA",
            "value": "€35.66",
            "signal": "Ext 3.3% vs 50MA",
            "good": true
          },
          {
            "metric": "200-Day MA",
            "value": "€33.72",
            "signal": "Price above 200MA",
            "good": true
          },
          {
            "metric": "52-Week High",
            "value": "€38.40",
            "signal": "Pivot reference"
          },
          {
            "metric": "RS Rank",
            "value": "84",
            "signal": "vs German universe",
            "good": true
          },
          {
            "metric": "VCP",
            "value": "VCP FORMING",
            "signal": "Base status"
          }
        ],
        "entry": {
          "pivot": "€38.17",
          "entryCondition": "Daily close above €38.17 on volume ≥ 4,245,789 shares (1.4× 50-day avg)",
          "volumeTrigger": "≥ 4,245,789 shares — VERIFY ON TRADINGVIEW (XETR)",
          "stop": "€35.31",
          "target1": "€45.8",
          "target2": "€49.62",
          "rr": "2.67 : 1",
          "sizing": "€10k: 50% at pivot · 30% +5–7% higher · 20% from a higher base. Never add to a loser."
        },
        "alerts": [
          {
            "type": "BREAKOUT ALERT",
            "price": "€38.18"
          },
          {
            "type": "WARNING LEVEL",
            "price": "€36.26"
          },
          {
            "type": "STOP ALERT",
            "price": "€35.31"
          }
        ],
        "notes": "Very tight, shallow contractions (all <7%). RS 84, full trend. Volume not yet drying. Banks leadership."
      },
      {
        "rank": 5,
        "ticker": "SIE",
        "name": "Siemens AG",
        "sector": "",
        "status": "WATCHLIST — Near Buy",
        "techScore": "8/8 (7-crit: 7/7)",
        "dataDate": "Yahoo, Jun 13, 2026",
        "technical": [
          {
            "metric": "Price",
            "value": "€264.50",
            "signal": "5.6% from 52W high"
          },
          {
            "metric": "50-Day MA",
            "value": "€254.68",
            "signal": "Ext 3.9% vs 50MA",
            "good": true
          },
          {
            "metric": "200-Day MA",
            "value": "€241.28",
            "signal": "Price above 200MA",
            "good": true
          },
          {
            "metric": "52-Week High",
            "value": "€280.20",
            "signal": "Pivot reference"
          },
          {
            "metric": "RS Rank",
            "value": "78",
            "signal": "vs German universe",
            "good": true
          },
          {
            "metric": "VCP",
            "value": "VCP FORMING",
            "signal": "Base status"
          }
        ],
        "entry": {
          "pivot": "€280.2",
          "entryCondition": "Daily close above €280.2 on volume ≥ 1,655,701 shares (1.4× 50-day avg)",
          "volumeTrigger": "≥ 1,655,701 shares — VERIFY ON TRADINGVIEW (XETR)",
          "stop": "€259.19",
          "target1": "€336.24",
          "target2": "€364.26",
          "rr": "2.67 : 1",
          "sizing": "€10k: 50% at pivot · 30% +5–7% higher · 20% from a higher base. Never add to a loser."
        },
        "alerts": [
          {
            "type": "BREAKOUT ALERT",
            "price": "€280.21"
          },
          {
            "type": "WARNING LEVEL",
            "price": "€266.19"
          },
          {
            "type": "STOP ALERT",
            "price": "€259.19"
          }
        ],
        "notes": "Index heavyweight, full trend, volume drying. Pivot €280.20 sits 5.6% overhead — needs to push back toward the high before triggering."
      },
      {
        "rank": 6,
        "ticker": "MRK",
        "name": "Merck KGaA",
        "sector": "",
        "status": "WATCHLIST — Near Buy",
        "techScore": "8/8 (7-crit: 7/7)",
        "dataDate": "Yahoo, Jun 13, 2026",
        "technical": [
          {
            "metric": "Price",
            "value": "€133.25",
            "signal": "5.0% from 52W high"
          },
          {
            "metric": "50-Day MA",
            "value": "€120.40",
            "signal": "Ext 10.7% vs 50MA",
            "good": true
          },
          {
            "metric": "200-Day MA",
            "value": "€117.66",
            "signal": "Price above 200MA",
            "good": true
          },
          {
            "metric": "52-Week High",
            "value": "€140.25",
            "signal": "Pivot reference"
          },
          {
            "metric": "RS Rank",
            "value": "81",
            "signal": "vs German universe",
            "good": true
          },
          {
            "metric": "VCP",
            "value": "VCP FORMING",
            "signal": "Base status"
          }
        ],
        "entry": {
          "pivot": "€140.25",
          "entryCondition": "Daily close above €140.25 on volume ≥ 502,944 shares (1.4× 50-day avg)",
          "volumeTrigger": "≥ 502,944 shares — VERIFY ON TRADINGVIEW (XETR)",
          "stop": "€129.73",
          "target1": "€168.3",
          "target2": "€182.33",
          "rr": "2.67 : 1",
          "sizing": "€10k: 50% at pivot · 30% +5–7% higher · 20% from a higher base. Never add to a loser."
        },
        "alerts": [
          {
            "type": "BREAKOUT ALERT",
            "price": "€140.26"
          },
          {
            "type": "WARNING LEVEL",
            "price": "€133.24"
          },
          {
            "type": "STOP ALERT",
            "price": "€129.73"
          }
        ],
        "notes": "Full trend, RS 81. Extension 10.7% above the 50MA — upper end of a comfortable entry. Volume not drying; pivot €140.25."
      },
      {
        "rank": 7,
        "ticker": "P911",
        "name": "Porsche AG",
        "sector": "",
        "status": "WATCHLIST — Near Buy",
        "techScore": "6/8 (7-crit: 7/7)",
        "dataDate": "Yahoo, Jun 13, 2026",
        "technical": [
          {
            "metric": "Price",
            "value": "€49.10",
            "signal": "1.8% from 52W high"
          },
          {
            "metric": "50-Day MA",
            "value": "€44.10",
            "signal": "Ext 11.3% vs 50MA",
            "good": true
          },
          {
            "metric": "200-Day MA",
            "value": "€43.20",
            "signal": "Price above 200MA",
            "good": true
          },
          {
            "metric": "52-Week High",
            "value": "€50.00",
            "signal": "Pivot reference"
          },
          {
            "metric": "RS Rank",
            "value": "86",
            "signal": "vs German universe",
            "good": true
          },
          {
            "metric": "VCP",
            "value": "VCP FORMING",
            "signal": "Base status"
          }
        ],
        "entry": {
          "pivot": "€50.0",
          "entryCondition": "Daily close above €50.0 on volume ≥ 778,218 shares (1.4× 50-day avg)",
          "volumeTrigger": "≥ 778,218 shares — VERIFY ON TRADINGVIEW (XETR)",
          "stop": "€46.25",
          "target1": "€60.0",
          "target2": "€65.0",
          "rr": "2.67 : 1",
          "sizing": "€10k: 50% at pivot · 30% +5–7% higher · 20% from a higher base. Never add to a loser."
        },
        "alerts": [
          {
            "type": "BREAKOUT ALERT",
            "price": "€50.01"
          },
          {
            "type": "WARNING LEVEL",
            "price": "€47.50"
          },
          {
            "type": "STOP ALERT",
            "price": "€46.25"
          }
        ],
        "notes": "RS 86, right at its 52-week high (€50 pivot) but only 6/7 (150MA still above 200MA stack incomplete) and 11.3% extended. Watch for a tighter base."
      },
      {
        "rank": 8,
        "ticker": "IFX",
        "name": "Infineon Technologies",
        "sector": "",
        "status": "WATCHLIST",
        "techScore": "8/8 (7-crit: 7/7)",
        "dataDate": "Yahoo, Jun 13, 2026",
        "technical": [
          {
            "metric": "Price",
            "value": "€80.06",
            "signal": "9.5% from 52W high"
          },
          {
            "metric": "50-Day MA",
            "value": "€61.94",
            "signal": "Ext 29.3% vs 50MA",
            "good": true
          },
          {
            "metric": "200-Day MA",
            "value": "€43.48",
            "signal": "Price above 200MA",
            "good": true
          },
          {
            "metric": "52-Week High",
            "value": "€88.46",
            "signal": "Pivot reference"
          },
          {
            "metric": "RS Rank",
            "value": "99",
            "signal": "vs German universe",
            "good": true
          },
          {
            "metric": "VCP",
            "value": "VCP NOT YET",
            "signal": "Base status"
          }
        ],
        "entry": {
          "pivot": "€88.46",
          "entryCondition": "Daily close above €88.46 on volume ≥ 8,321,630 shares (1.4× 50-day avg)",
          "volumeTrigger": "≥ 8,321,630 shares — VERIFY ON TRADINGVIEW (XETR)",
          "stop": "€81.83",
          "target1": "€106.15",
          "target2": "€115.0",
          "rr": "2.67 : 1",
          "sizing": "€10k: 50% at pivot · 30% +5–7% higher · 20% from a higher base. Never add to a loser."
        },
        "alerts": [
          {
            "type": "BREAKOUT ALERT",
            "price": "€88.47"
          },
          {
            "type": "WARNING LEVEL",
            "price": "€84.04"
          },
          {
            "type": "STOP ALERT",
            "price": "€81.83"
          }
        ],
        "notes": "TEACHING CASE — strongest RS (99) and full trend, but +29.3% above the 50MA with no tight base; trades above the average analyst target (~€78). Do NOT chase; wait for a fresh base."
      },
      {
        "rank": 9,
        "ticker": "ENR",
        "name": "Siemens Energy",
        "sector": "",
        "status": "WATCHLIST",
        "techScore": "7/8 (7-crit: 6/7)",
        "dataDate": "Yahoo, Jun 13, 2026",
        "technical": [
          {
            "metric": "Price",
            "value": "€153.58",
            "signal": "19.9% from 52W high"
          },
          {
            "metric": "50-Day MA",
            "value": "€168.56",
            "signal": "Ext -8.9% vs 50MA",
            "good": false
          },
          {
            "metric": "200-Day MA",
            "value": "€134.47",
            "signal": "Price above 200MA",
            "good": true
          },
          {
            "metric": "52-Week High",
            "value": "€191.66",
            "signal": "Pivot reference"
          },
          {
            "metric": "RS Rank",
            "value": "96",
            "signal": "vs German universe",
            "good": true
          },
          {
            "metric": "VCP",
            "value": "VCP NOT YET",
            "signal": "Base status"
          }
        ],
        "entry": {
          "pivot": "€186.98",
          "entryCondition": "Daily close above €186.98 on volume ≥ 3,718,789 shares (1.4× 50-day avg)",
          "volumeTrigger": "≥ 3,718,789 shares — VERIFY ON TRADINGVIEW (XETR)",
          "stop": "€172.96",
          "target1": "€224.38",
          "target2": "€243.07",
          "rr": "2.67 : 1",
          "sizing": "€10k: 50% at pivot · 30% +5–7% higher · 20% from a higher base. Never add to a loser."
        },
        "alerts": [
          {
            "type": "BREAKOUT ALERT",
            "price": "€186.99"
          },
          {
            "type": "WARNING LEVEL",
            "price": "€177.63"
          },
          {
            "type": "STOP ALERT",
            "price": "€172.96"
          }
        ],
        "notes": "High RS (96) but in a DEEP correction: 19.9% below its high and below the 50MA. €1bn buyback underway; avg target €186–195 implies big upside IF a base rebuilds. Not a setup yet."
      },
      {
        "rank": 10,
        "ticker": "EOAN",
        "name": "E.ON SE",
        "sector": "",
        "status": "WATCHLIST",
        "techScore": "5/8 (7-crit: 4/7)",
        "dataDate": "Yahoo, Jun 13, 2026",
        "technical": [
          {
            "metric": "Price",
            "value": "€18.41",
            "signal": "9.7% from 52W high"
          },
          {
            "metric": "50-Day MA",
            "value": "€18.61",
            "signal": "Ext -1.1% vs 50MA",
            "good": false
          },
          {
            "metric": "200-Day MA",
            "value": "€17.23",
            "signal": "Price above 200MA",
            "good": true
          },
          {
            "metric": "52-Week High",
            "value": "€20.39",
            "signal": "Pivot reference"
          },
          {
            "metric": "RS Rank",
            "value": "65",
            "signal": "vs German universe",
            "good": false
          },
          {
            "metric": "VCP",
            "value": "VCP CONFIRMED",
            "signal": "Base status"
          }
        ],
        "entry": {
          "pivot": "€18.75",
          "entryCondition": "Daily close above €18.75 on volume ≥ 5,363,820 shares (1.4× 50-day avg)",
          "volumeTrigger": "≥ 5,363,820 shares — VERIFY ON TRADINGVIEW (XETR)",
          "stop": "€17.34",
          "target1": "€22.5",
          "target2": "€24.38",
          "rr": "2.66 : 1",
          "sizing": "€10k: 50% at pivot · 30% +5–7% higher · 20% from a higher base. Never add to a loser."
        },
        "alerts": [
          {
            "type": "BREAKOUT ALERT",
            "price": "€18.76"
          },
          {
            "type": "WARNING LEVEL",
            "price": "€17.81"
          },
          {
            "type": "STOP ALERT",
            "price": "€17.34"
          }
        ],
        "notes": "Only VCP-CONFIRMED base in the universe (3.7% tight, volume drying), but RS 65 (<70) and not yet 30% above its 52-week low — fails leadership filters despite the clean pattern."
      }
    ],
    "riskRules": [
      "Regime gate first: outside a confirmed uptrend nothing is a buy — this run is gated, so the list is preparation, not a shopping list.",
      "Risk ≤1.25% of capital per trade; size from entry-to-stop distance.",
      "Hard stop ~7.5% below pivot; exit if hit intraday.",
      "Trend exit only on a WEEKLY close >3% below the 50-day MA.",
      "Re-entry cooldown: no re-buy for 4–6 weeks after a stop, only on a fresh higher base.",
      "Never average down; add only to winners at planned tranches.",
      "Don't chase extension >10–15% above the 50MA (see IFX); a 20%-deep pullback is a correction, not a VCP (see ENR).",
      "Sell into strength near +20% / +30%.",
      "This mechanical screen has historically LAGGED buy-and-hold — idea generator, not auto-buy."
    ],
    "verification": "Every pivot, base and volume figure is engine-computed from Yahoo end-of-day data. Before any order, confirm the pattern/pivot on a live TradingView chart (XETR), check earnings/ex-dividend dates, and re-check that the broader market has reconfirmed an uptrend.",
    "disclaimer": "For informational purposes only. Not financial advice."
  },

  {
    reportDate: "2026-06-12",
    title: "DAX 40 Weekly Momentum Screen",
    framework: "Minervini SEPA Framework | German Equities",
    market: {
      index: "DAX 40",
      verdict: "CONFIRMED UPTREND",
      verdictNote: "DAX above both 50MA and 200MA (50 > 200), but ~3% off its high; leadership remains narrow.",
      metrics: [
        { metric: "DAX Index Level (Jun 12)", value: "24,635.30", signal: "-3.4% from 52-week high (25,507.79)" },
        { metric: "50-Day MA", value: "24,361.53", signal: "Price +1.1% above 50MA", good: true },
        { metric: "200-Day MA", value: "24,181.75", signal: "Price +1.9% above 200MA; 50MA > 200MA", good: true }
      ],
      sectorAsOf: "",
      sectors: [],
      sectorNote: "DAX is in a confirmed uptrend (price > 50MA > 200MA, correct order). Genuine Stage-2 leadership is narrow: semis (IFX), banks (CBK), industrials (SIE). Autos, chemicals, defense (RHM) and SAP remain in Stage-3/4 declines. Data is Friday Jun 12 close via Yahoo (XETRA)."
    },
    dataSources: [
      "Yahoo Finance (.DE / XETRA tickers) — FMP denies most German names (FMP+Yahoo fallback policy)",
      "50/200-day MAs computed from the 1-year daily close series",
      "Friday June 12, 2026 close — verify live on TradingView (XETR)"
    ],
    dataQualityNote: "All DAX prices and 52-week ranges pulled live from Yahoo Finance (Jun 12 close); 50MA/200MA computed from the daily series. RSI (C7) not computed — shown as N/A. Verify on TradingView (XETR) before trading.",
    dataQuality: [
      { ticker: "^GDAXI", source: "Yahoo Finance", date: "Jun 12, 2026", status: "LIVE" },
      { ticker: "IFX.DE", source: "Yahoo Finance", date: "Jun 12, 2026", status: "LIVE" },
      { ticker: "CBK.DE", source: "Yahoo Finance", date: "Jun 12, 2026", status: "LIVE" },
      { ticker: "SIE.DE", source: "Yahoo Finance", date: "Jun 12, 2026", status: "LIVE" },
      { ticker: "ENR.DE", source: "Yahoo Finance", date: "Jun 12, 2026", status: "LIVE" },
      { ticker: "ALV.DE", source: "Yahoo Finance", date: "Jun 12, 2026", status: "LIVE" },
      { ticker: "BAS.DE", source: "Yahoo Finance", date: "Jun 12, 2026", status: "LIVE" },
      { ticker: "DB1.DE", source: "Yahoo Finance", date: "Jun 12, 2026", status: "LIVE" },
      { ticker: "AIR.DE / DTE.DE / MTX.DE", source: "Yahoo Finance", date: "Jun 12, 2026", status: "FAILED SCREEN" },
      { ticker: "RHM/SAP/BMW/MBG/VOW3/MUV2", source: "Yahoo Finance", date: "Jun 12, 2026", status: "FAILED SCREEN" }
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
      { ticker: "CBK",  flags: [1,1,1,1,1,1,null], score: "6/6", result: "PASS" },
      { ticker: "SIE",  flags: [1,1,1,1,1,1,null], score: "6/6", result: "PASS" },
      { ticker: "ENR",  flags: [1,1,1,1,1,0,null], score: "5/6", result: "WATCHLIST" },
      { ticker: "ALV",  flags: [1,1,0,1,1,1,null], score: "5/6", result: "WATCHLIST" },
      { ticker: "BAS",  flags: [1,1,0,1,1,0,null], score: "4/6", result: "WATCHLIST" },
      { ticker: "DB1",  flags: [1,1,0,1,1,0,null], score: "4/6", result: "WATCHLIST" },
      { ticker: "AIR",  flags: [0,0,0,1,0,1,null], score: "2/6", result: "FAIL" },
      { ticker: "MTX",  flags: [0,0,0,1,0,1,null], score: "2/6", result: "FAIL" },
      { ticker: "DTE",  flags: [0,0,0,1,0,0,null], score: "1/6", result: "FAIL" },
      { ticker: "RHM",  flags: [0,0,0,0,0,0,null], score: "0/6", result: "FAIL" },
      { ticker: "SAP",  flags: [0,0,0,0,0,0,null], score: "0/6", result: "FAIL" },
      { ticker: "BMW",  flags: [0,0,0,0,0,0,null], score: "0/6", result: "FAIL" },
      { ticker: "MBG",  flags: [0,0,0,0,0,0,null], score: "0/6", result: "FAIL" },
      { ticker: "VOW3", flags: [0,0,0,0,0,0,null], score: "0/6", result: "FAIL" },
      { ticker: "MUV2", flags: [0,0,0,0,0,0,null], score: "0/6", result: "FAIL" }
    ],
    stocksNote: "Three clean buys (IFX, CBK, SIE) still above a rising 50MA near their highs. ENR pulled back below its 50MA; ALV/BAS/DB1 are constructive (above 200MA, golden cross) but below the 50MA or short of the +30%-above-low test. AVOID names broken. All data Yahoo Jun 12 close — verify on TradingView (XETR).",
    stocks: [
      {
        rank: 1, ticker: "IFX", name: "Infineon Technologies AG", sector: "Semiconductors",
        status: "BUY NOW", techScore: "6/6", dataDate: "Yahoo, Jun 12, 2026",
        technical: [
          { metric: "Price", value: "€80.06", signal: "-9.5% from 52W high" },
          { metric: "50-Day MA", value: "€61.94", signal: "Price ABOVE 50MA ✓ (+29%, extended)", good: true },
          { metric: "200-Day MA", value: "€43.48", signal: "Price ABOVE 200MA ✓", good: true },
          { metric: "52-Week High", value: "€88.46", signal: "Pivot level" },
          { metric: "52-Week Low", value: "€30.82", signal: "+160% above 52w low", good: true }
        ],
        entry: {
          pivot: "€88.46 (52-week high)",
          entryCondition: "Daily close above €88.46 on ≥40% above-average volume",
          volumeTrigger: "≥40% above 10-day avg volume — VERIFY ON TRADINGVIEW (XETR)",
          stop: "€81.38 (8% below pivot)",
          target1: "€106.15 (+20%)",
          target2: "€115.00 (+30%)",
          rr: "2.50:1",
          sizing: "50% at pivot | 30% on pullback to ~50MA | 20% on secondary breakout"
        },
        alerts: [
          { type: "BREAKOUT ALERT", price: "€88.46 — close above pivot" },
          { type: "SUPPORT ALERT", price: "€62 — approx 50MA" }
        ],
        notes: "Still the DAX's strongest momentum name — 6/6, above a rising 50MA and 200MA, 9.5% off its high. Note price is ~29% above the 50MA, so size carefully on any breakout and prefer adds on a pullback."
      },
      {
        rank: 2, ticker: "CBK", name: "Commerzbank AG", sector: "Banking",
        status: "BUY NOW", techScore: "6/6", dataDate: "Yahoo, Jun 12, 2026",
        technical: [
          { metric: "Price", value: "€36.83", signal: "-4.1% from 52W high" },
          { metric: "50-Day MA", value: "€35.66", signal: "Price ABOVE 50MA ✓", good: true },
          { metric: "200-Day MA", value: "€33.72", signal: "Price ABOVE 200MA ✓", good: true },
          { metric: "52-Week High", value: "€38.40", signal: "Pivot level" },
          { metric: "52-Week Low", value: "€26.23", signal: "+40% above 52w low", good: true }
        ],
        entry: {
          pivot: "€38.40 (52-week high)",
          entryCondition: "Daily close above €38.40 on ≥40% above-average volume",
          volumeTrigger: "≥40% above 10-day avg volume — VERIFY ON TRADINGVIEW (XETR)",
          stop: "€35.33 (8% below pivot)",
          target1: "€46.08 (+20%)",
          target2: "€49.92 (+30%)",
          rr: "2.50:1",
          sizing: "50% at pivot | 30% on pullback to ~50MA | 20% on secondary breakout"
        },
        alerts: [
          { type: "BREAKOUT ALERT", price: "€38.40 — close above pivot" },
          { type: "SUPPORT ALERT", price: "€35.66 — 50MA" }
        ],
        notes: "Textbook 6/6 — 4% below its 52-week high with price above a rising 50MA and 200MA. Tight, low-extension structure. UniCredit M&A backdrop remains a catalyst."
      },
      {
        rank: 3, ticker: "SIE", name: "Siemens Aktiengesellschaft", sector: "Industrials",
        status: "BUY NOW", techScore: "6/6", dataDate: "Yahoo, Jun 12, 2026",
        technical: [
          { metric: "Price", value: "€264.50", signal: "-5.6% from 52W high" },
          { metric: "50-Day MA", value: "€254.68", signal: "Price ABOVE 50MA ✓", good: true },
          { metric: "200-Day MA", value: "€241.28", signal: "Price ABOVE 200MA ✓", good: true },
          { metric: "52-Week High", value: "€280.20", signal: "Pivot level" },
          { metric: "52-Week Low", value: "€198.00", signal: "+33.6% above 52w low", good: true }
        ],
        entry: {
          pivot: "€280.20 (52-week high)",
          entryCondition: "Daily close above €280.20 on ≥40% above-average volume",
          volumeTrigger: "≥40% above 10-day avg volume — VERIFY ON TRADINGVIEW (XETR)",
          stop: "€257.78 (8% below pivot)",
          target1: "€336.24 (+20%)",
          target2: "€364.26 (+30%)",
          rr: "2.50:1",
          sizing: "50% at pivot | 30% on pullback to ~50MA | 20% on secondary breakout"
        },
        alerts: [
          { type: "BREAKOUT ALERT", price: "€280.20 — close above pivot" },
          { type: "SUPPORT ALERT", price: "€255 — 50MA" }
        ],
        notes: "Clean 6/6 with all MAs aligned and rising; 5.6% off its high. Low-extension Stage-2 structure — a confirmed close above €280.20 on volume is the buy signal."
      },
      {
        rank: 4, ticker: "ENR", name: "Siemens Energy AG", sector: "Energy / Industrials",
        status: "WATCHLIST — pullback", techScore: "5/6", dataDate: "Yahoo, Jun 12, 2026",
        technical: [
          { metric: "Price", value: "€153.58", signal: "-19.9% from 52W high" },
          { metric: "50-Day MA", value: "€168.56", signal: "Price BELOW 50MA ✗", good: false },
          { metric: "200-Day MA", value: "€134.47", signal: "Price ABOVE 200MA ✓", good: true },
          { metric: "52-Week High", value: "€191.66", signal: "ATH pivot" },
          { metric: "52-Week Low", value: "€83.32", signal: "+84% above 52w low", good: true }
        ],
        alerts: [
          { type: "RECLAIM ALERT", price: "€169 — back above 50MA = re-arm" },
          { type: "BREAKOUT ALERT", price: "€191.66 — close above ATH pivot" }
        ],
        notes: "Long-term trend intact (well above the 200MA) but the pullback has deepened below the 50MA (€168.56) — now 20% off its high. Not buyable until it reclaims the 50MA and builds a base. Watch for a VCP."
      },
      {
        rank: 5, ticker: "ALV", name: "Allianz SE", sector: "Insurance",
        status: "WATCHLIST — Near Buy", techScore: "5/6", dataDate: "Yahoo, Jun 12, 2026",
        technical: [
          { metric: "Price", value: "€386.40", signal: "-2.7% from 52W high" },
          { metric: "50-Day MA", value: "€381.31", signal: "Price ABOVE 50MA ✓", good: true },
          { metric: "200-Day MA", value: "€369.46", signal: "Price ABOVE 200MA ✓", good: true },
          { metric: "52-Week High", value: "€397.00", signal: "Pivot level" },
          { metric: "52-Week Low", value: "€333.20", signal: "+15.9% above 52w low (fails 30% test)", good: false }
        ],
        alerts: [
          { type: "BREAKOUT ALERT", price: "€397.00 — close above 52W high" },
          { type: "SUPPORT ALERT", price: "€381 — 50MA" }
        ],
        notes: "MAs have re-aligned (price > 50MA > 200MA, golden cross) and it sits 2.7% off its high — much improved vs late May. The only failed criterion is the +30%-above-low test (it's a low-volatility name). A close above €397 would make it actionable."
      },
      {
        rank: 6, ticker: "BAS", name: "BASF SE", sector: "Chemicals",
        status: "WATCHLIST", techScore: "4/6", dataDate: "Yahoo, Jun 12, 2026",
        technical: [
          { metric: "Price", value: "€49.50", signal: "-10.1% from 52W high" },
          { metric: "50-Day MA", value: "€52.18", signal: "Price BELOW 50MA ✗", good: false },
          { metric: "200-Day MA", value: "€46.97", signal: "Price ABOVE 200MA ✓", good: true },
          { metric: "52-Week High", value: "€55.05", signal: "Pivot level" },
          { metric: "52-Week Low", value: "€40.97", signal: "+20.8% above 52w low", good: false }
        ],
        alerts: [
          { type: "RECLAIM ALERT", price: "€52.20 — back above 50MA = re-arm" },
          { type: "BREAKOUT ALERT", price: "€55.05 — close above 52W high" }
        ],
        notes: "Turning constructive — back above the 200MA with a golden cross (50MA > 200MA) after a long Stage-4. Still below the 50MA and short of the +30%-above-low test, so watch-only; a 50MA reclaim and base would put it in play."
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
    verification: "Verify on TradingView (XETR, 1D) before trading: price, 50MA, 200MA, 52-week high, and that the breakout bar exceeds the 50-period Volume MA by ≥40%. Prices are June 12, 2026 close (Yahoo); RSI not computed.",
    disclaimer: "All prices in EUR. For informational purposes only. Not financial advice."
  },
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
