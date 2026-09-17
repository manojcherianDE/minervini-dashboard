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
    reportDate: "2026-09-17",
    title: "S&P 1500 Momentum Screen",
    framework: "Minervini SEPA — history-based engine v3 (full S&P 1500, 1,498 names evaluated)",
    market: {
      index: "S&P 1500 breadth — 50.0% above 200MA",
      verdict: "UNDER PRESSURE",
      verdictNote: "REGIME GATE ACTIVE — the gate downgraded ALL would-be buys to EXTENDED — WATCH, so nothing is actionable this week. Only 50.0% of the 1,498 evaluated S&P 1500 names are above their 200DMA (the gate needs at least 60%) and just 28.4% are above their 50DMA, although 47.1% still hold a full 50>150>200 stack. That combination — long-term structure intact, short-term trend broken across nearly three-quarters of the market — describes a broad, shallow pullback. Before the gate, 24 names met every BUY NOW condition and 260 met every SETUP condition on their own merits; after the gate, 0 and 0. Breadth is derived from the universe itself, no index quote is used. Universe is the full S&P 1500 (large, mid and small cap). THE WEEK’S MOST IMPORTANT FINDING: four of the six tightest “perfect” bases — ITGR, SAFT, TECH and LNTH — are announced cash acquisitions, not VCPs. All four are disqualified below.",
      metrics: [
        {
          metric: "Universe evaluated",
          value: "1,498 names",
          signal: "of 1,506 attempted"
        },
        {
          metric: "% above 200-day MA",
          value: "50.0%",
          signal: "≥60% = uptrend",
          good: false
        },
        {
          metric: "% above 50-day MA",
          value: "28.4%",
          signal: "Short-term breadth",
          good: false
        },
        {
          metric: "% in full MA stack",
          value: "47.1%",
          signal: "≥45% = healthy",
          good: true
        },
        {
          metric: "Regime gate",
          value: "ACTIVE",
          signal: "284 buys/setups downgraded",
          good: false
        },
        {
          metric: "Disqualified for M&A",
          value: "4 of 24",
          signal: "ITGR, SAFT, TECH, LNTH",
          good: false
        }
      ],
      sectorAsOf: "Count of GATED would-be BUY NOW names by sector (not daily performance)",
      sectors: [
        {
          sector: "Financial Services",
          change: 8
        },
        {
          sector: "Healthcare",
          change: 7
        },
        {
          sector: "Consumer Cyclical",
          change: 3
        },
        {
          sector: "Industrials",
          change: 2
        },
        {
          sector: "Basic Materials",
          change: 2
        },
        {
          sector: "Technology",
          change: 1
        },
        {
          sector: "Consumer Defensive",
          change: 1
        }
      ],
      sectorNote: "The would-be buy list is dominated by regional banks, insurers and healthcare services — defensive groups — with almost no technology. Combined with the fact that the highest-RS technology names are either 20–50% extended (DELL, MRNA) or 25–46% below their highs (MU, SNDK, INTC, MXL), this looks like late-cycle leadership rotation rather than a healthy broad advance."
    },
    dataSources: [
      "Prices: stockanalysis.com daily OHLCV via the in-app browser (5-year range, last 300 bars per name), last bar 2026-09-16",
      "Engine: deterministic v3 Trend Template + RS percentile + algorithmic VCP + breadth regime gate, executed in-browser",
      "Fundamentals: stockanalysis.com quarterly financials (EPS Growth / Revenue Growth YoY) — the EPS screen RAN this week, unlike 2026-09-14",
      "Transfer: gzip+base64 payload, SHA-256 verified before decode (f7eef3fda44aa520)",
      "Confirmation: web search on featured names only, including a mandatory pending-M&A check (never the basis for a setup)"
    ],
    dataQualityNote: "1,498 of 1,506 S&P 1500 names were evaluated from end-of-day prices through 2026-09-16; 20 names carry a one-day-stale bar. Closes are split-adjusted but not dividend-adjusted, consistent with prior runs. The fundamental screen DID run this week — EPS and revenue growth came from the browser rather than the plan-gated FMP endpoint. Pivots and volume triggers are mechanical: confirm every chart on TradingView, and run the M&A check first.",
    dataQuality: [
      {
        ticker: "FULL UNIVERSE",
        source: "stockanalysis.com daily OHLCV",
        date: "Sep 16, 2026",
        status: "1,498 EVALUATED"
      },
      {
        ticker: "Stale bars",
        source: "Vendor (one day behind)",
        date: "Sep 15, 2026",
        status: "20 NAMES — immaterial"
      },
      {
        ticker: "Insufficient history",
        source: "Engine (<260 bars)",
        date: "Sep 16, 2026",
        status: "5 SKIPPED — FDXF, Q, SOLS, VGNT, VSNT"
      },
      {
        ticker: "No data returned",
        source: "Vendor (HTTP 400)",
        date: "N/A",
        status: "3 SKIPPED — EQR, FDP, SATS"
      },
      {
        ticker: "BUY NOW set",
        source: "Engine (deterministic)",
        date: "Sep 16, 2026",
        status: "0 — REGIME GATE ACTIVE"
      },
      {
        ticker: "Fundamentals",
        source: "stockanalysis.com quarterly",
        date: "Sep 16, 2026",
        status: "35 NAMES SCREENED — endpoint working"
      },
      {
        ticker: "M&A screen",
        source: "Web search, featured names",
        date: "Sep 17, 2026",
        status: "4 DISQUALIFIED"
      }
    ],
    criteria: [
      {
        key: "c1",
        label: "Price > 150MA & 200MA"
      },
      {
        key: "c2",
        label: "150MA > 200MA"
      },
      {
        key: "c3",
        label: "200MA Trending Up"
      },
      {
        key: "c4",
        label: "50 > 150 > 200 (full stack)"
      },
      {
        key: "c5",
        label: "Price > 50MA"
      },
      {
        key: "c6",
        label: "Price ≥ 30% Above 52wLow"
      },
      {
        key: "c7",
        label: "Price Within 25% of 52wHigh"
      },
      {
        key: "c8",
        label: "RS Rank ≥ 70"
      }
    ],
    summary: [
      {
        ticker: "AMN",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "WATCHLIST (gated)"
      },
      {
        ticker: "ITGR",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "DISQUALIFIED — M&A"
      },
      {
        ticker: "SAFT",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "DISQUALIFIED — M&A"
      },
      {
        ticker: "BFH",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "WATCHLIST (gated)"
      },
      {
        ticker: "LNTH",
        flags: [
          1,
          1,
          1,
          1,
          0,
          1,
          1,
          1
        ],
        score: "7/8",
        result: "DISQUALIFIED — M&A"
      },
      {
        ticker: "TECH",
        flags: [
          1,
          0,
          1,
          0,
          1,
          1,
          1,
          1
        ],
        score: "6/8",
        result: "DISQUALIFIED — M&A"
      },
      {
        ticker: "WST",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "WATCHLIST (gated)"
      },
      {
        ticker: "PAG",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "WATCHLIST (gated)"
      },
      {
        ticker: "BNY",
        flags: [
          1,
          1,
          1,
          1,
          0,
          1,
          1,
          1
        ],
        score: "7/8",
        result: "WATCHLIST (gated)"
      },
      {
        ticker: "MD",
        flags: [
          1,
          1,
          1,
          1,
          0,
          1,
          1,
          1
        ],
        score: "7/8",
        result: "WATCHLIST (gated)"
      },
      {
        ticker: "SHC",
        flags: [
          1,
          0,
          1,
          0,
          1,
          1,
          1,
          1
        ],
        score: "6/8",
        result: "WATCHLIST (gated)"
      },
      {
        ticker: "AIZ",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "WATCHLIST (gated)"
      },
      {
        ticker: "IFF",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "WATCHLIST (gated)"
      },
      {
        ticker: "PRSU",
        flags: [
          1,
          1,
          1,
          1,
          0,
          1,
          1,
          1
        ],
        score: "7/8",
        result: "WATCHLIST (gated)"
      },
      {
        ticker: "PLMR",
        flags: [
          1,
          0,
          1,
          0,
          1,
          1,
          1,
          1
        ],
        score: "6/8",
        result: "WATCHLIST (gated)"
      },
      {
        ticker: "ABBV",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "WATCHLIST (gated)"
      },
      {
        ticker: "DCOM",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "WATCHLIST (gated)"
      },
      {
        ticker: "GILD",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "WATCHLIST (gated)"
      },
      {
        ticker: "WRLD",
        flags: [
          1,
          1,
          1,
          1,
          0,
          1,
          1,
          1
        ],
        score: "7/8",
        result: "WATCHLIST (gated)"
      },
      {
        ticker: "EIG",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "WATCHLIST (gated)"
      },
      {
        ticker: "STBA",
        flags: [
          1,
          1,
          1,
          1,
          0,
          1,
          1,
          1
        ],
        score: "7/8",
        result: "WATCHLIST (gated)"
      },
      {
        ticker: "GL",
        flags: [
          1,
          1,
          1,
          1,
          0,
          1,
          1,
          1
        ],
        score: "7/8",
        result: "WATCHLIST (gated)"
      },
      {
        ticker: "HAFC",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "WATCHLIST (gated)"
      },
      {
        ticker: "HSIC",
        flags: [
          1,
          1,
          1,
          1,
          0,
          1,
          1,
          1
        ],
        score: "7/8",
        result: "WATCHLIST (gated)"
      },
      {
        ticker: "AMD",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "SETUP (gated)"
      },
      {
        ticker: "LFST",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "SETUP (gated)"
      },
      {
        ticker: "PARR",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "SETUP (gated)"
      },
      {
        ticker: "CORT",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "SETUP (gated)"
      },
      {
        ticker: "IRDM",
        flags: [
          1,
          1,
          1,
          1,
          0,
          1,
          1,
          1
        ],
        score: "7/8",
        result: "SETUP (gated)"
      },
      {
        ticker: "MAN",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "SETUP (gated)"
      },
      {
        ticker: "AVNS",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "SETUP (gated)"
      },
      {
        ticker: "CAKE",
        flags: [
          1,
          1,
          1,
          1,
          0,
          1,
          1,
          1
        ],
        score: "7/8",
        result: "SETUP (gated)"
      },
      {
        ticker: "CRL",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "SETUP (gated)"
      },
      {
        ticker: "ECPG",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "SETUP (gated)"
      },
      {
        ticker: "MATX",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "SETUP (gated)"
      },
      {
        ticker: "NEOG",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "SETUP (gated)"
      }
    ],
    stocksNote: "0 BUY NOW and 0 SETUP — NEAR BUY this week: the regime gate downgraded all 284 qualifying names (24 would-be BUY NOW, 260 would-be SETUP) to EXTENDED — WATCH. A further 201 names are genuinely extended on their own merits, 355 are building bases and 658 fail outright. The first four cards below are DISQUALIFIED takeover pins, shown deliberately so the failure mode is visible: a stock frozen under a fixed cash bid produces the tightest possible base and a flawless algorithmic VCP. The remaining cards are the four would-be BUY NOW names that survived the M&A check, then the five strongest would-be SETUPs, with levels shown so alerts can be pre-loaded — not acted on.",
    stocks: [
      {
        rank: 1,
        ticker: "ITGR",
        name: "ITGR — DISQUALIFIED (announced acquisition)",
        sector: "M&A spread — do not trade",
        status: "DISQUALIFIED",
        techScore: "8/8",
        dataDate: "Close, Sep 16, 2026",
        technical: [
          {
            metric: "Price (close, Sep 16, 2026)",
            value: "$126.11",
            signal: "0.5% below 52w high"
          },
          {
            metric: "Base tightness (10-day range)",
            value: "1.2%",
            signal: "Artificially tight — deal pin",
            good: false
          },
          {
            metric: "Engine VCP reading",
            value: "VCP CONFIRMED",
            signal: "FALSE POSITIVE",
            good: false
          },
          {
            metric: "RS rank",
            value: "93",
            signal: "Meaningless under a fixed cash bid",
            good: false
          }
        ],
        entry: {
          pivot: "N/A — DO NOT TRADE",
          entryCondition: "DISQUALIFIED: announced cash acquisition",
          volumeTrigger: "N/A",
          stop: "N/A",
          target1: "N/A",
          target2: "N/A",
          rr: "N/A",
          sizing: "NO POSITION"
        },
        alerts: [
          {
            type: "DO NOT TRADE",
            price: "Announced acquisition — merger spread, not a VCP"
          }
        ],
        notes: "DEAL: KKR, $127.00/sh cash, announced 3 Aug 2026, ~$5.7bn EV, expected to close by year-end 2026.  |  WHY IT IS NOT A VCP: Price $126.11 vs $127 deal; 1.2% 10-day range and 0.5% from the 52w high is the shape of a merger spread, not a VCP."
      },
      {
        rank: 2,
        ticker: "SAFT",
        name: "SAFT — DISQUALIFIED (announced acquisition)",
        sector: "M&A spread — do not trade",
        status: "DISQUALIFIED",
        techScore: "8/8",
        dataDate: "Close, Sep 16, 2026",
        technical: [
          {
            metric: "Price (close, Sep 16, 2026)",
            value: "$103.55",
            signal: "0.2% below 52w high"
          },
          {
            metric: "Base tightness (10-day range)",
            value: "0.6%",
            signal: "Artificially tight — deal pin",
            good: false
          },
          {
            metric: "Engine VCP reading",
            value: "VCP CONFIRMED",
            signal: "FALSE POSITIVE",
            good: false
          },
          {
            metric: "RS rank",
            value: "92",
            signal: "Meaningless under a fixed cash bid",
            good: false
          }
        ],
        entry: {
          pivot: "N/A — DO NOT TRADE",
          entryCondition: "DISQUALIFIED: announced cash acquisition",
          volumeTrigger: "N/A",
          stop: "N/A",
          target1: "N/A",
          target2: "N/A",
          rr: "N/A",
          sizing: "NO POSITION"
        },
        alerts: [
          {
            type: "DO NOT TRADE",
            price: "Announced acquisition — merger spread, not a VCP"
          }
        ],
        notes: "DEAL: Mapfre S.A., $105.00/sh cash, announced 23 Jul 2026, ~$1.54bn, expected close Q1 2027.  |  WHY IT IS NOT A VCP: Price $103.55 vs $105 deal; 0.6% 10-day range. Textbook takeover pin."
      },
      {
        rank: 3,
        ticker: "TECH",
        name: "TECH — DISQUALIFIED (announced acquisition)",
        sector: "M&A spread — do not trade",
        status: "DISQUALIFIED",
        techScore: "6/8",
        dataDate: "Close, Sep 16, 2026",
        technical: [
          {
            metric: "Price (close, Sep 16, 2026)",
            value: "$72.33",
            signal: "0.4% below 52w high"
          },
          {
            metric: "Base tightness (10-day range)",
            value: "0.7%",
            signal: "Artificially tight — deal pin",
            good: false
          },
          {
            metric: "Engine VCP reading",
            value: "VCP CONFIRMED",
            signal: "FALSE POSITIVE",
            good: false
          },
          {
            metric: "RS rank",
            value: "89",
            signal: "Meaningless under a fixed cash bid",
            good: false
          }
        ],
        entry: {
          pivot: "N/A — DO NOT TRADE",
          entryCondition: "DISQUALIFIED: announced cash acquisition",
          volumeTrigger: "N/A",
          stop: "N/A",
          target1: "N/A",
          target2: "N/A",
          rr: "N/A",
          sizing: "NO POSITION"
        },
        alerts: [
          {
            type: "DO NOT TRADE",
            price: "Announced acquisition — merger spread, not a VCP"
          }
        ],
        notes: "DEAL: Merck KGaA, $73.00/sh cash, announced 25 Jun 2026, ~$11.3bn, expected close late 2026 / early 2027.  |  WHY IT IS NOT A VCP: Price $72.33 vs $73 deal; 0.7% 10-day range, 0.4% from the high."
      },
      {
        rank: 4,
        ticker: "LNTH",
        name: "LNTH — DISQUALIFIED (announced acquisition)",
        sector: "M&A spread — do not trade",
        status: "DISQUALIFIED",
        techScore: "7/8",
        dataDate: "Close, Sep 16, 2026",
        technical: [
          {
            metric: "Price (close, Sep 16, 2026)",
            value: "$100.54",
            signal: "10.1% below 52w high"
          },
          {
            metric: "Base tightness (10-day range)",
            value: "0.9%",
            signal: "Artificially tight — deal pin",
            good: false
          },
          {
            metric: "Engine VCP reading",
            value: "VCP CONFIRMED",
            signal: "FALSE POSITIVE",
            good: false
          },
          {
            metric: "RS rank",
            value: "89",
            signal: "Meaningless under a fixed cash bid",
            good: false
          }
        ],
        entry: {
          pivot: "N/A — DO NOT TRADE",
          entryCondition: "DISQUALIFIED: announced cash acquisition",
          volumeTrigger: "N/A",
          stop: "N/A",
          target1: "N/A",
          target2: "N/A",
          rr: "N/A",
          sizing: "NO POSITION"
        },
        alerts: [
          {
            type: "DO NOT TRADE",
            price: "Announced acquisition — merger spread, not a VCP"
          }
        ],
        notes: "DEAL: Curium US, $102.50/sh cash plus a non-tradeable CVR of up to $12.00/sh, announced 3 Aug 2026, ~$8bn, expected close H1 2027.  |  WHY IT IS NOT A VCP: Price $100.54 vs $102.50 cash; 0.9% 10-day range. Spread, not a base."
      },
      {
        rank: 5,
        ticker: "WST",
        name: "West Pharmaceutical Services",
        sector: "Life-science packaging & delivery",
        status: "EXTENDED — WATCH",
        techScore: "8/8",
        dataDate: "Close, Sep 16, 2026",
        technical: [
          {
            metric: "Price (close, Sep 16, 2026)",
            value: "$362.01",
            signal: "6.2% below 52w high"
          },
          {
            metric: "50-Day MA",
            value: "$348.89",
            signal: "Price ABOVE 50MA",
            good: true
          },
          {
            metric: "150 / 200-Day MA",
            value: "$307.65 / $296.57",
            signal: "Full stack 50>150>200",
            good: true
          },
          {
            metric: "Extension vs 50MA",
            value: "3.8%",
            signal: "Within buy range",
            good: true
          },
          {
            metric: "RS rank (vs 1,498)",
            value: "87",
            signal: "Strong",
            good: true
          },
          {
            metric: "52-Week High / Low",
            value: "$386.00 / $223.83",
            signal: "Pivot at 20-day high"
          },
          {
            metric: "Base tightness (10-day range)",
            value: "11.7%",
            signal: "Volume drying",
            good: true
          }
        ],
        eps: [
          {
            metric: "Latest quarter",
            value: "EPS 18.1%",
            signal: "Revenue 13.8%",
            good: false
          },
          {
            metric: "Prior quarter",
            value: "EPS 56.1%",
            signal: "Revenue 21.1%",
            good: true
          },
          {
            metric: "Two quarters ago",
            value: "EPS 2.1%",
            signal: "Revenue 7.5%",
            good: false
          },
          {
            metric: "Three quarters ago",
            value: "EPS 3.8%",
            signal: "Revenue 7.7%",
            good: false
          }
        ],
        entry: {
          pivot: "$370.67 (engine buy point)",
          entryCondition: "Daily close above $370.67 — BLOCKED: market gate active",
          volumeTrigger: "≥ 869,915 shares (1.4× 50-day avg) — VERIFY ON TRADINGVIEW",
          stop: "$342.87 (~7.5% below pivot)",
          target1: "$444.80 (+20%)",
          target2: "$481.87 (+30%)",
          rr: "2.67:1",
          sizing: "50% at pivot | 30% add +5–7% | 20% third entry — NOT THIS WEEK"
        },
        alerts: [
          {
            type: "BREAKOUT ALERT",
            price: "$370.68 — close above pivot"
          },
          {
            type: "WARNING LEVEL",
            price: "$352.14 — 5% below pivot"
          },
          {
            type: "STOP ALERT",
            price: "$342.87 — hard stop"
          },
          {
            type: "TREND EXIT (v2)",
            price: "$338.42 — weekly close >3% below 50DMA"
          }
        ],
        notes: "The cleanest would-be BUY NOW in the list: a genuine 8/8 trend, real base (15.7 → 7.4 → 7.9 → 4.0% contractions), volume drying, only 3.8% extended. EPS growth +18.1% in Q2 is short of the 25% bar, so the fundamental screen scores FAIL even though revenue is +13.8%.  |  ANALYST: Consensus ~$350 (23 analysts); Evercore ISI $390, Barclays $325. Price $362.01 sits at/just above the mean — modest room to run, not a wide gap.  |  M&A CHECK: No pending bid. Sold a Tempe, AZ device plant to AbbVie for ~$110m, completed 1 Jul 2026 — an asset sale, not a takeover.  |  FUNDAMENTALS: FAIL (Q2 2026): latest EPS growth 18.1%, revenue growth 13.8%.",
        epsNote: "FAIL (Q2 2026): latest EPS growth 18.1%, revenue growth 13.8%."
      },
      {
        rank: 6,
        ticker: "PAG",
        name: "Penske Automotive Group",
        sector: "Auto retail",
        status: "EXTENDED — WATCH",
        techScore: "8/8",
        dataDate: "Close, Sep 16, 2026",
        technical: [
          {
            metric: "Price (close, Sep 16, 2026)",
            value: "$214.15",
            signal: "5.7% below 52w high"
          },
          {
            metric: "50-Day MA",
            value: "$213.08",
            signal: "Price ABOVE 50MA",
            good: true
          },
          {
            metric: "150 / 200-Day MA",
            value: "$180.14 / $176.01",
            signal: "Full stack 50>150>200",
            good: true
          },
          {
            metric: "Extension vs 50MA",
            value: "0.5%",
            signal: "Within buy range",
            good: true
          },
          {
            metric: "RS rank (vs 1,498)",
            value: "85",
            signal: "Strong",
            good: true
          },
          {
            metric: "52-Week High / Low",
            value: "$227.00 / $140.12",
            signal: "Pivot at 20-day high"
          },
          {
            metric: "Base tightness (10-day range)",
            value: "3.5%",
            signal: "Volume drying",
            good: true
          }
        ],
        eps: [
          {
            metric: "Latest quarter",
            value: "EPS -1.7%",
            signal: "Revenue 6.0%",
            good: false
          },
          {
            metric: "Prior quarter",
            value: "EPS -7.8%",
            signal: "Revenue -1.1%",
            good: false
          },
          {
            metric: "Two quarters ago",
            value: "EPS -19.1%",
            signal: "Revenue -3.1%",
            good: false
          },
          {
            metric: "Three quarters ago",
            value: "EPS -4.7%",
            signal: "Revenue 1.4%",
            good: false
          }
        ],
        entry: {
          pivot: "$221.04 (engine buy point)",
          entryCondition: "Daily close above $221.04 — BLOCKED: market gate active",
          volumeTrigger: "≥ 572,450 shares (1.4× 50-day avg) — VERIFY ON TRADINGVIEW",
          stop: "$204.46 (~7.5% below pivot)",
          target1: "$265.25 (+20%)",
          target2: "$287.35 (+30%)",
          rr: "2.67:1",
          sizing: "50% at pivot | 30% add +5–7% | 20% third entry — NOT THIS WEEK"
        },
        alerts: [
          {
            type: "BREAKOUT ALERT",
            price: "$221.05 — close above pivot"
          },
          {
            type: "WARNING LEVEL",
            price: "$209.99 — 5% below pivot"
          },
          {
            type: "STOP ALERT",
            price: "$204.46 — hard stop"
          },
          {
            type: "TREND EXIT (v2)",
            price: "$206.69 — weekly close >3% below 50DMA"
          }
        ],
        notes: "Tight, orderly base (6.8 → 5.3 → 2.3 → 2.5%), sitting right on the 50DMA (+0.5% extended), volume drying. But EPS has fallen four quarters running (-1.7% latest) — this is a multiple-expansion move, not an earnings move. Minervini would want the earnings.  |  ANALYST: Mean target ~$184–197 (8 analysts, Strong Buy); recent hikes BofA $238, Barclays $220. Price $214.15 is above the mean but below the recent high targets — mixed.  |  M&A CHECK: No pending acquisition found.  |  FUNDAMENTALS: FAIL (Q2 2026): latest EPS growth -1.7%, revenue growth 6.0%.",
        epsNote: "FAIL (Q2 2026): latest EPS growth -1.7%, revenue growth 6.0%."
      },
      {
        rank: 7,
        ticker: "BFH",
        name: "Bread Financial Holdings",
        sector: "Consumer credit",
        status: "EXTENDED — WATCH",
        techScore: "8/8",
        dataDate: "Close, Sep 16, 2026",
        technical: [
          {
            metric: "Price (close, Sep 16, 2026)",
            value: "$107.85",
            signal: "5.8% below 52w high"
          },
          {
            metric: "50-Day MA",
            value: "$105.89",
            signal: "Price ABOVE 50MA",
            good: true
          },
          {
            metric: "150 / 200-Day MA",
            value: "$91.81 / $87.37",
            signal: "Full stack 50>150>200",
            good: true
          },
          {
            metric: "Extension vs 50MA",
            value: "1.8%",
            signal: "Within buy range",
            good: true
          },
          {
            metric: "RS rank (vs 1,498)",
            value: "90",
            signal: "Strong",
            good: true
          },
          {
            metric: "52-Week High / Low",
            value: "$114.53 / $53.83",
            signal: "Pivot at 20-day high"
          },
          {
            metric: "Base tightness (10-day range)",
            value: "7.9%",
            signal: "Volume drying",
            good: true
          }
        ],
        eps: [
          {
            metric: "Latest quarter",
            value: "EPS 21.2%",
            signal: "Revenue 3.8%",
            good: false
          },
          {
            metric: "Prior quarter",
            value: "EPS 49.3%",
            signal: "Revenue 6.1%",
            good: true
          },
          {
            metric: "Two quarters ago",
            value: "EPS 734.9%",
            signal: "Revenue 18.5%",
            good: true
          },
          {
            metric: "Three quarters ago",
            value: "EPS 9703.9%",
            signal: "Revenue 9.4%",
            good: true
          }
        ],
        entry: {
          pivot: "$112.09 (engine buy point)",
          entryCondition: "Daily close above $112.09 — BLOCKED: market gate active",
          volumeTrigger: "≥ 762,509 shares (1.4× 50-day avg) — VERIFY ON TRADINGVIEW",
          stop: "$103.68 (~7.5% below pivot)",
          target1: "$134.51 (+20%)",
          target2: "$145.72 (+30%)",
          rr: "2.67:1",
          sizing: "50% at pivot | 30% add +5–7% | 20% third entry — NOT THIS WEEK"
        },
        alerts: [
          {
            type: "BREAKOUT ALERT",
            price: "$112.10 — close above pivot"
          },
          {
            type: "WARNING LEVEL",
            price: "$106.49 — 5% below pivot"
          },
          {
            type: "STOP ALERT",
            price: "$103.68 — hard stop"
          },
          {
            type: "TREND EXIT (v2)",
            price: "$102.71 — weekly close >3% below 50DMA"
          }
        ],
        notes: "Only 1.8% above the 50DMA with a clean 11.7 → 12.0 → 7.7 → 6.1% contraction sequence. EPS +21.2% is just under the 25% bar; the prior quarters' four-digit growth rates are base effects off a depressed 2025, not a clean acceleration.  |  ANALYST: Targets diverge sharply by source: S&P Global mean ~$115, TipRanks 13-analyst mean ~$68.67 (high $98, low $50). Price $107.85. Treat the upside as unresolved.  |  M&A CHECK: No pending acquisition found.  |  FUNDAMENTALS: FAIL (Q2 2026): latest EPS growth 21.2%, revenue growth 3.8%.",
        epsNote: "FAIL (Q2 2026): latest EPS growth 21.2%, revenue growth 3.8%."
      },
      {
        rank: 8,
        ticker: "AMN",
        name: "AMN Healthcare Services",
        sector: "Healthcare staffing",
        status: "EXTENDED — WATCH",
        techScore: "8/8",
        dataDate: "Close, Sep 16, 2026",
        technical: [
          {
            metric: "Price (close, Sep 16, 2026)",
            value: "$34.92",
            signal: "6.2% below 52w high"
          },
          {
            metric: "50-Day MA",
            value: "$33.85",
            signal: "Price ABOVE 50MA",
            good: true
          },
          {
            metric: "150 / 200-Day MA",
            value: "$27.20 / $24.81",
            signal: "Full stack 50>150>200",
            good: true
          },
          {
            metric: "Extension vs 50MA",
            value: "3.2%",
            signal: "Within buy range",
            good: true
          },
          {
            metric: "RS rank (vs 1,498)",
            value: "96",
            signal: "Strong",
            good: true
          },
          {
            metric: "52-Week High / Low",
            value: "$37.22 / $14.97",
            signal: "Pivot at 20-day high"
          },
          {
            metric: "Base tightness (10-day range)",
            value: "11.0%",
            signal: "Volume drying",
            good: true
          }
        ],
        eps: [
          {
            metric: "Latest quarter",
            value: "EPS n/a",
            signal: "Revenue 2.3%",
            good: false
          },
          {
            metric: "Prior quarter",
            value: "EPS n/a",
            signal: "Revenue 99.9%",
            good: false
          },
          {
            metric: "Two quarters ago",
            value: "EPS n/a",
            signal: "Revenue 1.8%",
            good: false
          },
          {
            metric: "Three quarters ago",
            value: "EPS 321.3%",
            signal: "Revenue -7.7%",
            good: true
          }
        ],
        entry: {
          pivot: "$35.91 (engine buy point)",
          entryCondition: "Daily close above $35.91 — BLOCKED: market gate active",
          volumeTrigger: "≥ 970,393 shares (1.4× 50-day avg) — VERIFY ON TRADINGVIEW",
          stop: "$33.22 (~7.5% below pivot)",
          target1: "$43.09 (+20%)",
          target2: "$46.68 (+30%)",
          rr: "2.67:1",
          sizing: "50% at pivot | 30% add +5–7% | 20% third entry — NOT THIS WEEK"
        },
        alerts: [
          {
            type: "BREAKOUT ALERT",
            price: "$35.92 — close above pivot"
          },
          {
            type: "WARNING LEVEL",
            price: "$34.11 — 5% below pivot"
          },
          {
            type: "STOP ALERT",
            price: "$33.22 — hard stop"
          },
          {
            type: "TREND EXIT (v2)",
            price: "$32.83 — weekly close >3% below 50DMA"
          }
        ],
        notes: "Highest RS in the would-be-buy group (96) and a perfect 8/8, but it is a recovery move off a $14.97 low with FY2025 revenue down 8.5% and a loss. Base is wider than the others (11.0% tightness). Momentum without an earnings engine.  |  ANALYST: Consensus rating Hold, 12-month mean target $29.86 vs price $34.92 — the stock has OUTRUN estimates by ~17%. This is the opposite of room to run.  |  M&A CHECK: No pending bid; AMN itself acquired Jaide Health (terms undisclosed).  |  FUNDAMENTALS: FAIL (Q2 2026): latest EPS growth n/a, revenue growth 2.3%.",
        epsNote: "FAIL (Q2 2026): latest EPS growth n/a, revenue growth 2.3%."
      },
      {
        rank: 9,
        ticker: "AMD",
        name: "Advanced Micro Devices",
        sector: "Semiconductors",
        status: "EXTENDED — WATCH",
        techScore: "8/8",
        dataDate: "Close, Sep 16, 2026",
        technical: [
          {
            metric: "Price (close, Sep 16, 2026)",
            value: "$512.50",
            signal: "12.4% below 52w high"
          },
          {
            metric: "50-Day MA",
            value: "$495.03",
            signal: "Price ABOVE 50MA",
            good: true
          },
          {
            metric: "150 / 200-Day MA",
            value: "$394.50 / $351.29",
            signal: "Full stack 50>150>200",
            good: true
          },
          {
            metric: "Extension vs 50MA",
            value: "3.5%",
            signal: "Within buy range",
            good: true
          },
          {
            metric: "RS rank (vs 1,498)",
            value: "98",
            signal: "Strong",
            good: true
          },
          {
            metric: "52-Week High / Low",
            value: "$584.73 / $149.85",
            signal: "Pivot at 20-day high"
          },
          {
            metric: "Base tightness (10-day range)",
            value: "19.7%",
            signal: "Volume drying",
            good: true
          }
        ],
        eps: [
          {
            metric: "Latest quarter",
            value: "EPS 159.5%",
            signal: "Revenue 50.1%",
            good: true
          },
          {
            metric: "Prior quarter",
            value: "EPS 91.2%",
            signal: "Revenue 37.9%",
            good: true
          },
          {
            metric: "Two quarters ago",
            value: "EPS 217.1%",
            signal: "Revenue 34.1%",
            good: true
          },
          {
            metric: "Three quarters ago",
            value: "EPS 60.3%",
            signal: "Revenue 35.6%",
            good: true
          }
        ],
        entry: {
          pivot: "$527.25 (engine buy point)",
          entryCondition: "Daily close above $527.25 — BLOCKED: market gate active",
          volumeTrigger: "≥ 32,766,010 shares (1.4× 50-day avg) — VERIFY ON TRADINGVIEW",
          stop: "$487.71 (~7.5% below pivot)",
          target1: "$632.70 (+20%)",
          target2: "$685.43 (+30%)",
          rr: "2.67:1",
          sizing: "50% at pivot | 30% add +5–7% | 20% third entry — NOT THIS WEEK"
        },
        alerts: [
          {
            type: "BREAKOUT ALERT",
            price: "$527.26 — close above pivot"
          },
          {
            type: "WARNING LEVEL",
            price: "$500.89 — 5% below pivot"
          },
          {
            type: "STOP ALERT",
            price: "$487.71 — hard stop"
          },
          {
            type: "TREND EXIT (v2)",
            price: "$480.18 — weekly close >3% below 50DMA"
          }
        ],
        notes: "The best fundamental profile in the whole screen after MU: EPS +159% and revenue +50% in Q2 2026, data-centre driven. RS 98, 8/8 trend, only 3.5% extended. The base is still wide (19.7% tightness, 12.4% below the high), so VCP is FORMING, not CONFIRMED.  |  ANALYST: Moderate Buy, mean ~$565 (range $565–660); Piper Sandler $600, Stifel $635. Price $512.50 — roughly 10% of headroom to the mean.  |  M&A CHECK: No pending acquisition.  |  FUNDAMENTALS: PASS (Q2 2026): latest EPS growth 159.5%, revenue growth 50.1%.",
        epsNote: "PASS (Q2 2026): latest EPS growth 159.5%, revenue growth 50.1%."
      },
      {
        rank: 10,
        ticker: "PARR",
        name: "Par Pacific Holdings",
        sector: "Refining",
        status: "EXTENDED — WATCH",
        techScore: "8/8",
        dataDate: "Close, Sep 16, 2026",
        technical: [
          {
            metric: "Price (close, Sep 16, 2026)",
            value: "$84.90",
            signal: "2.4% below 52w high"
          },
          {
            metric: "50-Day MA",
            value: "$77.79",
            signal: "Price ABOVE 50MA",
            good: true
          },
          {
            metric: "150 / 200-Day MA",
            value: "$63.53 / $57.37",
            signal: "Full stack 50>150>200",
            good: true
          },
          {
            metric: "Extension vs 50MA",
            value: "9.1%",
            signal: "Within buy range",
            good: true
          },
          {
            metric: "RS rank (vs 1,498)",
            value: "98",
            signal: "Strong",
            good: true
          },
          {
            metric: "52-Week High / Low",
            value: "$87.03 / $33.21",
            signal: "Pivot at 20-day high"
          },
          {
            metric: "Base tightness (10-day range)",
            value: "11.0%",
            signal: "Volume drying",
            good: true
          }
        ],
        eps: [
          {
            metric: "Latest quarter",
            value: "EPS 699.1%",
            signal: "Revenue 56.8%",
            good: true
          },
          {
            metric: "Prior quarter",
            value: "EPS n/a",
            signal: "Revenue 4.5%",
            good: false
          },
          {
            metric: "Two quarters ago",
            value: "EPS n/a",
            signal: "Revenue -1.0%",
            good: false
          },
          {
            metric: "Three quarters ago",
            value: "EPS 3869.2%",
            signal: "Revenue -6.1%",
            good: true
          }
        ],
        entry: {
          pivot: "$86.97 (engine buy point)",
          entryCondition: "Daily close above $86.97 — BLOCKED: market gate active",
          volumeTrigger: "≥ 1,356,779 shares (1.4× 50-day avg) — VERIFY ON TRADINGVIEW",
          stop: "$80.45 (~7.5% below pivot)",
          target1: "$104.36 (+20%)",
          target2: "$113.06 (+30%)",
          rr: "2.67:1",
          sizing: "50% at pivot | 30% add +5–7% | 20% third entry — NOT THIS WEEK"
        },
        alerts: [
          {
            type: "BREAKOUT ALERT",
            price: "$86.98 — close above pivot"
          },
          {
            type: "WARNING LEVEL",
            price: "$82.62 — 5% below pivot"
          },
          {
            type: "STOP ALERT",
            price: "$80.45 — hard stop"
          },
          {
            type: "TREND EXIT (v2)",
            price: "$75.46 — weekly close >3% below 50DMA"
          }
        ],
        notes: "RS 98, 8/8, 2.4% from the high with volume drying. EPS +699% on a refining-margin cycle — treat with caution: cyclical peak earnings are exactly when the Minervini screen looks best and the forward risk is highest. Contractions are still wide (21 → 21 → 25.3 → 13.9%).  |  ANALYST: Not separately confirmed this run; refining margins are the swing factor.  |  M&A CHECK: No pending acquisition.  |  FUNDAMENTALS: PASS (Q2 2026): latest EPS growth 699.1%, revenue growth 56.8%.",
        epsNote: "PASS (Q2 2026): latest EPS growth 699.1%, revenue growth 56.8%."
      },
      {
        rank: 11,
        ticker: "CORT",
        name: "Corcept Therapeutics",
        sector: "Biopharma",
        status: "EXTENDED — WATCH",
        techScore: "8/8",
        dataDate: "Close, Sep 16, 2026",
        technical: [
          {
            metric: "Price (close, Sep 16, 2026)",
            value: "$111.81",
            signal: "11.5% below 52w high"
          },
          {
            metric: "50-Day MA",
            value: "$107.38",
            signal: "Price ABOVE 50MA",
            good: true
          },
          {
            metric: "150 / 200-Day MA",
            value: "$71.30 / $68.07",
            signal: "Full stack 50>150>200",
            good: true
          },
          {
            metric: "Extension vs 50MA",
            value: "4.1%",
            signal: "Within buy range",
            good: true
          },
          {
            metric: "RS rank (vs 1,498)",
            value: "97",
            signal: "Strong",
            good: true
          },
          {
            metric: "52-Week High / Low",
            value: "$126.38 / $28.66",
            signal: "Pivot at 20-day high"
          },
          {
            metric: "Base tightness (10-day range)",
            value: "8.9%",
            signal: "Volume drying",
            good: true
          }
        ],
        eps: [
          {
            metric: "Latest quarter",
            value: "EPS 24.1%",
            signal: "Revenue 31.7%",
            good: false
          },
          {
            metric: "Prior quarter",
            value: "EPS n/a",
            signal: "Revenue 4.9%",
            good: false
          },
          {
            metric: "Two quarters ago",
            value: "EPS -21.6%",
            signal: "Revenue 11.1%",
            good: false
          },
          {
            metric: "Three quarters ago",
            value: "EPS -61.0%",
            signal: "Revenue 13.8%",
            good: false
          }
        ],
        entry: {
          pivot: "$126.38 (engine buy point)",
          entryCondition: "Daily close above $126.38 — BLOCKED: market gate active",
          volumeTrigger: "≥ 1,486,132 shares (1.4× 50-day avg) — VERIFY ON TRADINGVIEW",
          stop: "$116.90 (~7.5% below pivot)",
          target1: "$151.66 (+20%)",
          target2: "$164.29 (+30%)",
          rr: "2.67:1",
          sizing: "50% at pivot | 30% add +5–7% | 20% third entry — NOT THIS WEEK"
        },
        alerts: [
          {
            type: "BREAKOUT ALERT",
            price: "$126.39 — close above pivot"
          },
          {
            type: "WARNING LEVEL",
            price: "$120.06 — 5% below pivot"
          },
          {
            type: "STOP ALERT",
            price: "$116.90 — hard stop"
          },
          {
            type: "TREND EXIT (v2)",
            price: "$104.16 — weekly close >3% below 50DMA"
          }
        ],
        notes: "RS 97, 8/8, revenue +31.7%. But the pivot at $126.38 is 13% above the current $111.81 and near_pivot is false — the engine flags this one as not actually close to a buy point. A long way from actionable.  |  ANALYST: Not separately confirmed this run.  |  M&A CHECK: No pending acquisition.  |  FUNDAMENTALS: REV PASS (Q2 2026): latest EPS growth 24.1%, revenue growth 31.7%.",
        epsNote: "REV PASS (Q2 2026): latest EPS growth 24.1%, revenue growth 31.7%."
      },
      {
        rank: 12,
        ticker: "MATX",
        name: "Matson",
        sector: "Ocean transport",
        status: "EXTENDED — WATCH",
        techScore: "8/8",
        dataDate: "Close, Sep 16, 2026",
        technical: [
          {
            metric: "Price (close, Sep 16, 2026)",
            value: "$235.62",
            signal: "2.2% below 52w high"
          },
          {
            metric: "50-Day MA",
            value: "$216.35",
            signal: "Price ABOVE 50MA",
            good: true
          },
          {
            metric: "150 / 200-Day MA",
            value: "$189.32 / $175.88",
            signal: "Full stack 50>150>200",
            good: true
          },
          {
            metric: "Extension vs 50MA",
            value: "8.9%",
            signal: "Within buy range",
            good: true
          },
          {
            metric: "RS rank (vs 1,498)",
            value: "96",
            signal: "Strong",
            good: true
          },
          {
            metric: "52-Week High / Low",
            value: "$240.87 / $86.97",
            signal: "Pivot at 20-day high"
          },
          {
            metric: "Base tightness (10-day range)",
            value: "10.7%",
            signal: "Volume NOT drying",
            good: false
          }
        ],
        eps: [
          {
            metric: "Latest quarter",
            value: "EPS 46.2%",
            signal: "Revenue 16.7%",
            good: true
          },
          {
            metric: "Prior quarter",
            value: "EPS -15.1%",
            signal: "Revenue -3.1%",
            good: false
          },
          {
            metric: "Two quarters ago",
            value: "EPS 21.2%",
            signal: "Revenue -4.3%",
            good: false
          },
          {
            metric: "Three quarters ago",
            value: "EPS -28.0%",
            signal: "Revenue -8.5%",
            good: false
          }
        ],
        entry: {
          pivot: "$240.87 (engine buy point)",
          entryCondition: "Daily close above $240.87 — BLOCKED: market gate active",
          volumeTrigger: "≥ 401,531 shares (1.4× 50-day avg) — VERIFY ON TRADINGVIEW",
          stop: "$222.80 (~7.5% below pivot)",
          target1: "$289.04 (+20%)",
          target2: "$313.13 (+30%)",
          rr: "2.67:1",
          sizing: "50% at pivot | 30% add +5–7% | 20% third entry — NOT THIS WEEK"
        },
        alerts: [
          {
            type: "BREAKOUT ALERT",
            price: "$240.88 — close above pivot"
          },
          {
            type: "WARNING LEVEL",
            price: "$228.83 — 5% below pivot"
          },
          {
            type: "STOP ALERT",
            price: "$222.80 — hard stop"
          },
          {
            type: "TREND EXIT (v2)",
            price: "$209.86 — weekly close >3% below 50DMA"
          }
        ],
        notes: "EPS +46.2%, revenue +16.7%, FY2026 guidance raised on Transpacific strength. 8/8, 2.2% from the high. Volume is NOT drying (10-day above the 50-day average), which is why this is FORMING rather than CONFIRMED.  |  ANALYST: Mean targets $224–265 across sources (3 analysts, Strong Buy); JPMorgan initiated Overweight at $230. Price $235.62 — headroom is thin and coverage is sparse.  |  M&A CHECK: No pending acquisition.  |  FUNDAMENTALS: PASS (Q2 2026): latest EPS growth 46.2%, revenue growth 16.7%.  |  LIQUIDITY WARNING: 50-day average volume only 286,808 shares — the 1.4x volume trigger is unreliable; size down or skip.",
        epsNote: "PASS (Q2 2026): latest EPS growth 46.2%, revenue growth 16.7%."
      },
      {
        rank: 13,
        ticker: "LFST",
        name: "LifeStance Health Group",
        sector: "Behavioural health",
        status: "EXTENDED — WATCH",
        techScore: "8/8",
        dataDate: "Close, Sep 16, 2026",
        technical: [
          {
            metric: "Price (close, Sep 16, 2026)",
            value: "$12.79",
            signal: "5.7% below 52w high"
          },
          {
            metric: "50-Day MA",
            value: "$11.76",
            signal: "Price ABOVE 50MA",
            good: true
          },
          {
            metric: "150 / 200-Day MA",
            value: "$8.96 / $8.46",
            signal: "Full stack 50>150>200",
            good: true
          },
          {
            metric: "Extension vs 50MA",
            value: "8.7%",
            signal: "Within buy range",
            good: true
          },
          {
            metric: "RS rank (vs 1,498)",
            value: "98",
            signal: "Strong",
            good: true
          },
          {
            metric: "52-Week High / Low",
            value: "$13.56 / $4.77",
            signal: "Pivot at 20-day high"
          },
          {
            metric: "Base tightness (10-day range)",
            value: "9.5%",
            signal: "Volume NOT drying",
            good: false
          }
        ],
        eps: [
          {
            metric: "Latest quarter",
            value: "EPS n/a",
            signal: "Revenue 26.1%",
            good: false
          },
          {
            metric: "Prior quarter",
            value: "EPS 1927.5%",
            signal: "Revenue 21.2%",
            good: true
          },
          {
            metric: "Two quarters ago",
            value: "EPS n/a",
            signal: "Revenue 17.4%",
            good: false
          },
          {
            metric: "Three quarters ago",
            value: "EPS n/a",
            signal: "Revenue 16.3%",
            good: false
          }
        ],
        entry: {
          pivot: "$13.56 (engine buy point)",
          entryCondition: "Daily close above $13.56 — BLOCKED: market gate active",
          volumeTrigger: "≥ 5,724,460 shares (1.4× 50-day avg) — VERIFY ON TRADINGVIEW",
          stop: "$12.54 (~7.5% below pivot)",
          target1: "$16.27 (+20%)",
          target2: "$17.63 (+30%)",
          rr: "2.66:1",
          sizing: "50% at pivot | 30% add +5–7% | 20% third entry — NOT THIS WEEK"
        },
        alerts: [
          {
            type: "BREAKOUT ALERT",
            price: "$13.57 — close above pivot"
          },
          {
            type: "WARNING LEVEL",
            price: "$12.88 — 5% below pivot"
          },
          {
            type: "STOP ALERT",
            price: "$12.54 — hard stop"
          },
          {
            type: "TREND EXIT (v2)",
            price: "$11.41 — weekly close >3% below 50DMA"
          }
        ],
        notes: "RS 98 and revenue +26.1%, but 8.7% extended, volume expanding into the base, and a $12.54 stop on a $12.79 stock — a 2% price move stops you out. Thin risk budget.  |  ANALYST: Not separately confirmed this run.  |  M&A CHECK: No pending acquisition.  |  FUNDAMENTALS: REV PASS (Q2 2026): latest EPS growth n/a, revenue growth 26.1%.",
        epsNote: "REV PASS (Q2 2026): latest EPS growth n/a, revenue growth 26.1%."
      }
    ],
    riskRules: [
      "REGIME GATE FIRST — the market is not in a confirmed uptrend, so there are no new positions this week regardless of how good an individual chart looks.",
      "RUN THE M&A CHECK BEFORE ANYTHING ELSE — four of this week’s six tightest bases are announced cash deals. A tight, low-volume base pinned just under a round number is a merger spread until proven otherwise.",
      "Hard stop ~7.5% below the pivot, placed when the position opens; honour it intraday.",
      "v2 trend exit is buffered: act only on a WEEKLY close >3% below the 50DMA, never on a daily dip.",
      "Re-entry cooldown of 4–6 weeks after any stop or exit, and only on a fresh higher base.",
      "Never add to a loser. Tranches run 50% at the pivot, 30% on a 5–7% advance, 20% on a third confirmation — upward only.",
      "If a name is already >10% above its 50DMA at entry, start at 25% size instead of 50% (LFST, MATX, PARR this week).",
      "Require reward-to-risk of at least 2.5:1 — but note the engine’s fixed geometry returns 2.67:1 for every name, so R:R is not a differentiator. Discriminate on base quality and earnings instead.",
      "Be sceptical of thin volume: below ~300,000 shares of 50-day average the 1.4× trigger is unreliable (EIG, DCOM, HAFC, PRSU, MATX this week).",
      "Demand both trend AND earnings — a perfect 8/8 chart on falling EPS (AMN, PAG this week) is a multiple-expansion trade, not a Minervini trade.",
      "Sell into strength near +20% and +30% rather than waiting for a reversal.",
      "Treat this as an idea generator, not a buy list — a backtest of this screen lagged buy-and-hold."
    ],
    verification: "Confirm current price, the 50/150/200MA stack, the base and pivot, and a real volume-expansion breakout on TradingView 1D before any trade. Prices are the 2026-09-16 close. Search EVERY ticker for pending M&A before acting — this week ITGR (KKR, $127), SAFT (Mapfre, $105), TECH (Merck KGaA, $73) and LNTH (Curium, $102.50 plus a CVR) all scored near-perfect algorithmic VCPs purely because they are frozen under announced cash bids.",
    disclaimer: "For informational and educational purposes only. Not financial advice."
  },
  {
    reportDate: "2026-09-14",
    title: "S&P 1500 Momentum Screen",
    framework: "Minervini SEPA — history-based engine v2 (full S&P 1500)",
    market: {
      index: "S&P 1500 breadth — 56.4% above 200MA",
      verdict: "UNDER PRESSURE",
      verdictNote: "REGIME GATE ACTIVE. Only 56.4% of the 1,498 evaluated names are above their 200DMA (gate needs ≥60%) and just 34.2% are above their 50DMA. The engine found 27 names meeting every BUY NOW condition and 284 meeting every SETUP condition on their own merits, then automatically downgraded all 311 to EXTENDED — WATCH. NOTHING IS ACTIONABLE THIS WEEK. Breadth is derived from the universe itself — no index quote is used. Independent check: ~67% of S&P 500 members were above their 200DMA in early September, so weakness is concentrated in small and mid caps; Raymond James has flagged elevated correction risk over the next one to three months.",
      metrics: [
        {
          metric: "Universe evaluated",
          value: "1,498 names",
          signal: "of 1,506 attempted"
        },
        {
          metric: "% above 200-day MA",
          value: "56.4%",
          signal: "≥60% = uptrend",
          good: false
        },
        {
          metric: "% above 50-day MA",
          value: "34.2%",
          signal: "Short-term breadth",
          good: false
        },
        {
          metric: "% in full MA stack",
          value: "48.5%",
          signal: "≥45% = healthy",
          good: true
        },
        {
          metric: "Regime gate",
          value: "ACTIVE",
          signal: "311 buys/setups downgraded",
          good: false
        }
      ],
      sectorAsOf: "Count of GATED would-be BUY NOW names by sector (not daily performance)",
      sectors: [
        {
          sector: "Financial Services",
          change: 7
        },
        {
          sector: "Healthcare",
          change: 7
        },
        {
          sector: "Technology",
          change: 4
        },
        {
          sector: "Consumer Cyclical",
          change: 3
        },
        {
          sector: "Energy",
          change: 2
        },
        {
          sector: "Industrials",
          change: 2
        },
        {
          sector: "Basic Materials",
          change: 1
        },
        {
          sector: "Real Estate",
          change: 1
        }
      ],
      sectorNote: "Leadership among the 27 gated would-be buys is concentrated in insurance, healthcare services and energy — defensive and commodity groups. That is what leadership looks like late in a move, and it is itself a caution flag."
    },
    dataSources: [
      "Prices: stockanalysis.com daily OHLCV (5-year range, last 300 bars per name), last bar 2026-09-11",
      "Yahoo Finance bulk fetch: UNAVAILABLE — host blocked in sandbox, and browser route sits behind a Yahoo consent wall",
      "Engine: deterministic v2 Trend Template + RS percentile + algorithmic VCP + breadth regime gate",
      "Fundamentals: FMP income-statement-growth PLAN-GATED — no EPS screen ran this week",
      "Confirmation: web search on the featured names only (never the basis for a setup)"
    ],
    dataQualityNote: "1,498 of 1,506 S&P 1500 names were evaluated from end-of-day prices through 2026-09-11. The price vendor changed this run because Yahoo was unreachable — closes are split-adjusted but not dividend-adjusted, matching previous behaviour, though cross-run comparability deserves mild caution. No fundamental screen was possible. Pivots and volume triggers are mechanical: confirm every chart on TradingView.",
    dataQuality: [
      {
        ticker: "FULL UNIVERSE",
        source: "stockanalysis.com daily OHLCV",
        date: "Sep 11, 2026",
        status: "1,498 EVALUATED"
      },
      {
        ticker: "Yahoo bulk fetch",
        source: "query1.finance.yahoo.com",
        date: "N/A",
        status: "BLOCKED — sandbox + consent wall"
      },
      {
        ticker: "Insufficient history",
        source: "Engine (<260 bars)",
        date: "Sep 11, 2026",
        status: "5 SKIPPED — FDXF, Q, SOLS, VGNT, VSNT"
      },
      {
        ticker: "No data returned",
        source: "Vendor",
        date: "N/A",
        status: "3 SKIPPED — EQR, FDP, SATS"
      },
      {
        ticker: "BUY NOW set",
        source: "Engine (deterministic)",
        date: "Sep 11, 2026",
        status: "0 — REGIME GATE ACTIVE"
      },
      {
        ticker: "Fundamentals",
        source: "FMP quarterly growth",
        date: "N/A",
        status: "PLAN-GATED — no EPS screen"
      }
    ],
    criteria: [
      {
        key: "c1",
        label: "Price > 150MA & 200MA"
      },
      {
        key: "c2",
        label: "150MA > 200MA"
      },
      {
        key: "c3",
        label: "200MA Trending Up"
      },
      {
        key: "c4",
        label: "50 > 150 > 200 (full stack)"
      },
      {
        key: "c5",
        label: "Price > 50MA"
      },
      {
        key: "c6",
        label: "Price ≥ 30% Above 52wLow"
      },
      {
        key: "c7",
        label: "Price Within 25% of 52wHigh"
      },
      {
        key: "c8",
        label: "RS Rank ≥ 70"
      }
    ],
    summary: [
      {
        ticker: "MATX",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "WATCHLIST"
      },
      {
        ticker: "AVTR",
        flags: [
          1,
          0,
          1,
          0,
          1,
          1,
          1,
          1
        ],
        score: "6/8",
        result: "WATCHLIST"
      },
      {
        ticker: "ITGR",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "WATCHLIST"
      },
      {
        ticker: "PR",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "WATCHLIST"
      },
      {
        ticker: "SAFT",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "WATCHLIST"
      },
      {
        ticker: "BFH",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "WATCHLIST"
      },
      {
        ticker: "LNTH",
        flags: [
          1,
          1,
          1,
          1,
          0,
          1,
          1,
          1
        ],
        score: "7/8",
        result: "WATCHLIST"
      },
      {
        ticker: "TECH",
        flags: [
          1,
          0,
          1,
          0,
          1,
          1,
          1,
          1
        ],
        score: "6/8",
        result: "WATCHLIST"
      },
      {
        ticker: "CGNX",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "WATCHLIST"
      },
      {
        ticker: "ACA",
        flags: [
          1,
          1,
          1,
          1,
          0,
          1,
          1,
          1
        ],
        score: "7/8",
        result: "WATCHLIST"
      },
      {
        ticker: "MD",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "WATCHLIST"
      },
      {
        ticker: "KNTK",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "WATCHLIST"
      },
      {
        ticker: "PAG",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "WATCHLIST"
      },
      {
        ticker: "SLAB",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "WATCHLIST"
      },
      {
        ticker: "EXEL",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "WATCHLIST"
      },
      {
        ticker: "DV",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "WATCHLIST"
      },
      {
        ticker: "PRSU",
        flags: [
          1,
          1,
          1,
          1,
          0,
          1,
          1,
          1
        ],
        score: "7/8",
        result: "WATCHLIST"
      },
      {
        ticker: "DT",
        flags: [
          1,
          0,
          1,
          0,
          1,
          1,
          1,
          1
        ],
        score: "6/8",
        result: "WATCHLIST"
      },
      {
        ticker: "PAYO",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "WATCHLIST"
      },
      {
        ticker: "WRLD",
        flags: [
          1,
          1,
          1,
          1,
          0,
          1,
          1,
          1
        ],
        score: "7/8",
        result: "WATCHLIST"
      },
      {
        ticker: "IFF",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "WATCHLIST"
      },
      {
        ticker: "UNIT",
        flags: [
          0,
          1,
          1,
          1,
          0,
          1,
          1,
          1
        ],
        score: "6/8",
        result: "WATCHLIST"
      },
      {
        ticker: "RNR",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "WATCHLIST"
      },
      {
        ticker: "GPC",
        flags: [
          1,
          0,
          1,
          0,
          1,
          1,
          1,
          1
        ],
        score: "6/8",
        result: "WATCHLIST"
      },
      {
        ticker: "HSIC",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "WATCHLIST"
      },
      {
        ticker: "EIG",
        flags: [
          1,
          1,
          1,
          1,
          0,
          1,
          1,
          1
        ],
        score: "7/8",
        result: "WATCHLIST"
      },
      {
        ticker: "GS",
        flags: [
          1,
          1,
          1,
          1,
          0,
          1,
          1,
          1
        ],
        score: "7/8",
        result: "WATCHLIST"
      },
      {
        ticker: "AMD",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "WATCHLIST"
      },
      {
        ticker: "CORT",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "WATCHLIST"
      },
      {
        ticker: "LFST",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "WATCHLIST"
      },
      {
        ticker: "PARR",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "WATCHLIST"
      },
      {
        ticker: "CAKE",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "WATCHLIST"
      },
      {
        ticker: "IRDM",
        flags: [
          1,
          1,
          1,
          1,
          0,
          1,
          1,
          1
        ],
        score: "7/8",
        result: "WATCHLIST"
      },
      {
        ticker: "NEO",
        flags: [
          1,
          0,
          1,
          0,
          1,
          1,
          1,
          1
        ],
        score: "6/8",
        result: "WATCHLIST"
      },
      {
        ticker: "OKTA",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "WATCHLIST"
      },
      {
        ticker: "PTGX",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "WATCHLIST"
      },
      {
        ticker: "AAMI",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "WATCHLIST"
      },
      {
        ticker: "AVNS",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "WATCHLIST"
      },
      {
        ticker: "CRL",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "WATCHLIST"
      },
      {
        ticker: "DELL",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "WATCHLIST"
      },
      {
        ticker: "MRNA",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "WATCHLIST"
      },
      {
        ticker: "MU",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "WATCHLIST"
      },
      {
        ticker: "MXL",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          0,
          1
        ],
        score: "7/8",
        result: "WATCHLIST"
      },
      {
        ticker: "PBF",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "WATCHLIST"
      },
      {
        ticker: "SNDK",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          0,
          1
        ],
        score: "7/8",
        result: "WATCHLIST"
      },
      {
        ticker: "STX",
        flags: [
          1,
          1,
          1,
          1,
          0,
          1,
          0,
          1
        ],
        score: "6/8",
        result: "WATCHLIST"
      },
      {
        ticker: "LITE",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "WATCHLIST"
      },
      {
        ticker: "HPE",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "WATCHLIST"
      },
      {
        ticker: "HZO",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "WATCHLIST"
      },
      {
        ticker: "INTC",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          0,
          1
        ],
        score: "7/8",
        result: "WATCHLIST"
      },
      {
        ticker: "VLO",
        flags: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
        ],
        score: "8/8",
        result: "WATCHLIST"
      }
    ],
    stocksNote: "0 BUY NOW and 0 SETUP — NEAR BUY this week: the regime gate downgraded all 311 qualifying names (27 would-be BUY NOW, 284 would-be SETUP) to EXTENDED — WATCH. A further 228 names are genuinely extended on their own merits, 347 are building bases and 612 fail outright. Cards below show the five strongest gated would-be BUY NOW names plus the strongest gated SETUP, with levels shown so alerts can be pre-loaded — not acted on. ITGR is included specifically as a warning: a perfect 8/8 algorithmic VCP that is really a KKR takeover pin.",
    stocks: [
      {
        rank: 1,
        ticker: "MATX",
        name: "Matson, Inc.",
        sector: "Industrials",
        status: "EXTENDED — WATCH",
        techScore: "8/8",
        dataDate: "Close, Sep 11, 2026",
        technical: [
          {
            metric: "Price (close, Sep 11, 2026)",
            value: "$230.18",
            signal: "1.0% below 52w high"
          },
          {
            metric: "50-Day MA",
            value: "$214.26",
            signal: "Price ABOVE 50MA",
            good: true
          },
          {
            metric: "150 / 200-Day MA",
            value: "$187.82 / $173.95",
            signal: "Full stack 50>150>200",
            good: true
          },
          {
            metric: "Extension vs 50MA",
            value: "7.4%",
            signal: "Within buy range",
            good: true
          },
          {
            metric: "RS rank (vs 1,498)",
            value: "96",
            signal: "Strong",
            good: true
          },
          {
            metric: "52-Week High / Low",
            value: "$232.42 / $86.97",
            signal: "Pivot at 20-day high"
          }
        ],
        entry: {
          pivot: "$232.42 (engine buy point)",
          entryCondition: "Daily close above $232.42 — BLOCKED: market gate active",
          volumeTrigger: "≥ 400,439 shares (1.4× 50-day avg) — VERIFY ON TRADINGVIEW",
          stop: "$214.99 (~7.5% below pivot)",
          target1: "$278.9 (+20%)",
          target2: "$302.15 (+30%)",
          rr: "2.67:1",
          sizing: "50% at pivot | 30% add +5–7% | 20% third entry — NOT THIS WEEK"
        },
        alerts: [
          {
            type: "BREAKOUT ALERT",
            price: "$232.43 — close above pivot"
          },
          {
            type: "WARNING LEVEL",
            price: "$220.80 — 5% below pivot"
          },
          {
            type: "STOP ALERT",
            price: "$214.99 — hard stop"
          }
        ],
        notes: "GATED would-be BUY NOW. VCP CONFIRMED (10-day tightness 6.8%, volume drying). Cleanest technical setup in the whole S&P 1500 this week — blocked only because market breadth fails the regime gate. Analyst consensus ~$224 is BELOW the $230.18 price: the stock has outrun published targets.  |  FUNDAMENTALS: FMP quarterly-growth endpoint PLAN-GATED this run — no fundamental check was possible. Verify EPS/revenue growth yourself.",
        epsNote: "FMP quarterly-growth endpoint PLAN-GATED this run — no fundamental check was possible. Verify EPS/revenue growth yourself."
      },
      {
        rank: 2,
        ticker: "AVTR",
        name: "Avantor, Inc.",
        sector: "Healthcare",
        status: "EXTENDED — WATCH",
        techScore: "6/8",
        dataDate: "Close, Sep 11, 2026",
        technical: [
          {
            metric: "Price (close, Sep 11, 2026)",
            value: "$14.81",
            signal: "7.0% below 52w high"
          },
          {
            metric: "50-Day MA",
            value: "$13.0",
            signal: "Price ABOVE 50MA",
            good: true
          },
          {
            metric: "150 / 200-Day MA",
            value: "$10.08 / $10.44",
            signal: "Full stack 50>150>200",
            good: true
          },
          {
            metric: "Extension vs 50MA",
            value: "13.9%",
            signal: "Elevated — size down",
            good: false
          },
          {
            metric: "RS rank (vs 1,498)",
            value: "93",
            signal: "Strong",
            good: true
          },
          {
            metric: "52-Week High / Low",
            value: "$15.93 / $7.27",
            signal: "Pivot at 20-day high"
          }
        ],
        entry: {
          pivot: "$15.46 (engine buy point)",
          entryCondition: "Daily close above $15.46 — BLOCKED: market gate active",
          volumeTrigger: "≥ 13,148,094 shares (1.4× 50-day avg) — VERIFY ON TRADINGVIEW",
          stop: "$14.3 (~7.5% below pivot)",
          target1: "$18.55 (+20%)",
          target2: "$20.1 (+30%)",
          rr: "2.67:1",
          sizing: "50% at pivot | 30% add +5–7% | 20% third entry — NOT THIS WEEK"
        },
        alerts: [
          {
            type: "BREAKOUT ALERT",
            price: "$15.47 — close above pivot"
          },
          {
            type: "WARNING LEVEL",
            price: "$14.69 — 5% below pivot"
          },
          {
            type: "STOP ALERT",
            price: "$14.3 — hard stop"
          }
        ],
        notes: "GATED would-be BUY NOW, but only 6/8 on the Trend Template and +13.9% above the 50DMA — at the top of the acceptable extension band. Median analyst target ~$10.00 vs a $14.81 price: price has outrun estimates, though Stifel ($15) and Jefferies ($13) are catching up. Q2 2026 beat with FY guidance raised.  |  FUNDAMENTALS: FMP PLAN-GATED. Q2 2026 reported a beat: VWR back to organic growth, BMP stabilising, FY26 revenue and EPS guidance raised.",
        epsNote: "FMP PLAN-GATED. Q2 2026 reported a beat: VWR back to organic growth, BMP stabilising, FY26 revenue and EPS guidance raised."
      },
      {
        rank: 3,
        ticker: "ITGR",
        name: "Integer Holdings — DISQUALIFIED",
        sector: "Healthcare",
        status: "EXTENDED — WATCH",
        techScore: "8/8",
        dataDate: "Close, Sep 11, 2026",
        technical: [
          {
            metric: "Price (close, Sep 11, 2026)",
            value: "$126.0",
            signal: "0.6% below 52w high"
          },
          {
            metric: "50-Day MA",
            value: "$113.6",
            signal: "Price ABOVE 50MA",
            good: true
          },
          {
            metric: "150 / 200-Day MA",
            value: "$96.31 / $91.98",
            signal: "Full stack 50>150>200",
            good: true
          },
          {
            metric: "Extension vs 50MA",
            value: "10.9%",
            signal: "Within buy range",
            good: true
          },
          {
            metric: "RS rank (vs 1,498)",
            value: "92",
            signal: "Strong",
            good: true
          },
          {
            metric: "52-Week High / Low",
            value: "$126.8 / $62.0",
            signal: "Pivot at 20-day high"
          }
        ],
        entry: {
          pivot: "$126.8 (engine buy point)",
          entryCondition: "Daily close above $126.8 — BLOCKED: market gate active",
          volumeTrigger: "≥ 1,433,957 shares (1.4× 50-day avg) — VERIFY ON TRADINGVIEW",
          stop: "$117.29 (~7.5% below pivot)",
          target1: "$152.16 (+20%)",
          target2: "$164.84 (+30%)",
          rr: "2.67:1",
          sizing: "50% at pivot | 30% add +5–7% | 20% third entry — NOT THIS WEEK"
        },
        alerts: [
          {
            type: "BREAKOUT ALERT",
            price: "$126.81 — close above pivot"
          },
          {
            type: "WARNING LEVEL",
            price: "$120.46 — 5% below pivot"
          },
          {
            type: "STOP ALERT",
            price: "$117.29 — hard stop"
          }
        ],
        notes: "DO NOT TRADE. The engine scored a perfect 8/8 with a textbook tight base (1.2% tightness) — but this is a MERGER PIN, not a VCP. Integer agreed to be acquired by KKR at $127/share and the stock is simply sitting under the deal price. Upside is capped; multiple August analyst downgrades were explicitly on the acquisition. A live example of why every algorithmic setup needs human verification.  |  FUNDAMENTALS: Not relevant — the equity is a deal spread, not a momentum vehicle.",
        epsNote: "Not relevant — the equity is a deal spread, not a momentum vehicle."
      },
      {
        rank: 4,
        ticker: "PR",
        name: "Permian Resources",
        sector: "Energy",
        status: "EXTENDED — WATCH",
        techScore: "8/8",
        dataDate: "Close, Sep 11, 2026",
        technical: [
          {
            metric: "Price (close, Sep 11, 2026)",
            value: "$23.78",
            signal: "1.7% below 52w high"
          },
          {
            metric: "50-Day MA",
            value: "$21.44",
            signal: "Price ABOVE 50MA",
            good: true
          },
          {
            metric: "150 / 200-Day MA",
            value: "$20.22 / $18.81",
            signal: "Full stack 50>150>200",
            good: true
          },
          {
            metric: "Extension vs 50MA",
            value: "10.9%",
            signal: "Within buy range",
            good: true
          },
          {
            metric: "RS rank (vs 1,498)",
            value: "91",
            signal: "Strong",
            good: true
          },
          {
            metric: "52-Week High / Low",
            value: "$24.2 / $11.92",
            signal: "Pivot at 20-day high"
          }
        ],
        entry: {
          pivot: "$24.2 (engine buy point)",
          entryCondition: "Daily close above $24.2 — BLOCKED: market gate active",
          volumeTrigger: "≥ 12,382,356 shares (1.4× 50-day avg) — VERIFY ON TRADINGVIEW",
          stop: "$22.39 (~7.5% below pivot)",
          target1: "$29.04 (+20%)",
          target2: "$31.46 (+30%)",
          rr: "2.67:1",
          sizing: "50% at pivot | 30% add +5–7% | 20% third entry — NOT THIS WEEK"
        },
        alerts: [
          {
            type: "BREAKOUT ALERT",
            price: "$24.21 — close above pivot"
          },
          {
            type: "WARNING LEVEL",
            price: "$22.99 — 5% below pivot"
          },
          {
            type: "STOP ALERT",
            price: "$22.39 — hard stop"
          }
        ],
        notes: "GATED would-be BUY NOW. Clean 8/8 with a tight base 1.7% off the 52-week high. The only featured name with genuine headroom: Strong Buy across 19 analysts, average target ~$25.79 (range $22–$30) — roughly 8% room to run. Commodity beta: a crude reversal breaks the thesis regardless of the chart.  |  FUNDAMENTALS: FMP PLAN-GATED. Energy EPS is oil-price dependent — check the strip before sizing.",
        epsNote: "FMP PLAN-GATED. Energy EPS is oil-price dependent — check the strip before sizing."
      },
      {
        rank: 5,
        ticker: "SAFT",
        name: "Safety Insurance Group",
        sector: "Financial Services",
        status: "EXTENDED — WATCH",
        techScore: "8/8",
        dataDate: "Close, Sep 11, 2026",
        technical: [
          {
            metric: "Price (close, Sep 11, 2026)",
            value: "$103.42",
            signal: "0.4% below 52w high"
          },
          {
            metric: "50-Day MA",
            value: "$94.91",
            signal: "Price ABOVE 50MA",
            good: true
          },
          {
            metric: "150 / 200-Day MA",
            value: "$80.95 / $79.98",
            signal: "Full stack 50>150>200",
            good: true
          },
          {
            metric: "Extension vs 50MA",
            value: "9.0%",
            signal: "Within buy range",
            good: true
          },
          {
            metric: "RS rank (vs 1,498)",
            value: "91",
            signal: "Strong",
            good: true
          },
          {
            metric: "52-Week High / Low",
            value: "$103.8 / $67.04",
            signal: "Pivot at 20-day high"
          }
        ],
        entry: {
          pivot: "$103.8 (engine buy point)",
          entryCondition: "Daily close above $103.8 — BLOCKED: market gate active",
          volumeTrigger: "≥ 320,674 shares (1.4× 50-day avg) — VERIFY ON TRADINGVIEW",
          stop: "$96.02 (~7.5% below pivot)",
          target1: "$124.56 (+20%)",
          target2: "$134.94 (+30%)",
          rr: "2.67:1",
          sizing: "50% at pivot | 30% add +5–7% | 20% third entry — NOT THIS WEEK"
        },
        alerts: [
          {
            type: "BREAKOUT ALERT",
            price: "$103.81 — close above pivot"
          },
          {
            type: "WARNING LEVEL",
            price: "$98.61 — 5% below pivot"
          },
          {
            type: "STOP ALERT",
            price: "$96.02 — hard stop"
          }
        ],
        notes: "GATED would-be BUY NOW and the tightest base of the group (0.7% 10-day range, 0.4% off the high) — but LIQUIDITY IS THE PROBLEM. The 50-day average is only ~229k shares, so the 1.4× volume confirmation (~321k shares) is unreliable and slippage is real. Analyst coverage is minimal and published targets (~$70) look stale against a $103 price. Size down or skip.  |  FUNDAMENTALS: FMP PLAN-GATED. No fundamental check possible.",
        epsNote: "FMP PLAN-GATED. No fundamental check possible."
      },
      {
        rank: 6,
        ticker: "AMD",
        name: "Advanced Micro Devices",
        sector: "Technology",
        status: "EXTENDED — WATCH",
        techScore: "8/8",
        dataDate: "Close, Sep 11, 2026",
        technical: [
          {
            metric: "Price (close, Sep 11, 2026)",
            value: "$516.13",
            signal: "11.7% below 52w high"
          },
          {
            metric: "50-Day MA",
            value: "$496.55",
            signal: "Price ABOVE 50MA",
            good: true
          },
          {
            metric: "150 / 200-Day MA",
            value: "$388.68 / $346.91",
            signal: "Full stack 50>150>200",
            good: true
          },
          {
            metric: "Extension vs 50MA",
            value: "3.9%",
            signal: "Within buy range",
            good: true
          },
          {
            metric: "RS rank (vs 1,498)",
            value: "98",
            signal: "Strong",
            good: true
          },
          {
            metric: "52-Week High / Low",
            value: "$584.73 / $149.85",
            signal: "Pivot at 20-day high"
          }
        ],
        entry: {
          pivot: "$526.79 (engine buy point)",
          entryCondition: "Daily close above $526.79 — BLOCKED: market gate active",
          volumeTrigger: "≥ 33,458,758 shares (1.4× 50-day avg) — VERIFY ON TRADINGVIEW",
          stop: "$487.28 (~7.5% below pivot)",
          target1: "$632.15 (+20%)",
          target2: "$684.83 (+30%)",
          rr: "2.67:1",
          sizing: "50% at pivot | 30% add +5–7% | 20% third entry — NOT THIS WEEK"
        },
        alerts: [
          {
            type: "BREAKOUT ALERT",
            price: "$526.80 — close above pivot"
          },
          {
            type: "WARNING LEVEL",
            price: "$500.45 — 5% below pivot"
          },
          {
            type: "STOP ALERT",
            price: "$487.28 — hard stop"
          }
        ],
        notes: "Top gated SETUP — NEAR BUY and the single best combination of leadership and low extension in the screen: RS 98 with price only +3.9% above the 50DMA. Base is still FORMING (11.7% below the 52-week high, 19.6% 10-day range) and needs another contraction. This is the name to watch if the regime gate lifts.  |  FUNDAMENTALS: FMP PLAN-GATED. Not independently re-confirmed this run.",
        epsNote: "FMP PLAN-GATED. Not independently re-confirmed this run."
      }
    ],
    riskRules: [
      "REGIME GATE FIRST — the market is not in a confirmed uptrend, so there are no new positions this week regardless of how good an individual chart looks.",
      "Hard stop ~7.5% below the pivot, placed when the position opens; honour it intraday.",
      "v2 trend exit is buffered: act only on a WEEKLY close >3% below the 50DMA, never on a daily dip.",
      "Re-entry cooldown of 4–6 weeks after any stop or exit, and only on a fresh higher base.",
      "Never add to a loser. Tranches run 50% at the pivot, 30% on a 5–7% advance, 20% on a third confirmation — upward only.",
      "If a name is already >10% above its 50DMA at entry, start at 25% size instead of 50%.",
      "Require reward-to-risk of at least 2.5:1 and breakout volume of at least 1.4× the 50-day average.",
      "Be sceptical of names whose average volume is too thin to produce a reliable volume confirmation (SAFT this week).",
      "Sell into strength near +20% and +30% rather than waiting for a reversal.",
      "Treat this as an idea generator, not a buy list — a backtest of this screen lagged buy-and-hold, and no fundamental screen ran this week."
    ],
    verification: "Confirm current price, the 50/150/200MA stack, the base and pivot, and a real volume-expansion breakout on TradingView 1D before any trade. Prices are the 2026-09-11 close from an alternate vendor this run. Also search every ticker for pending M&A — ITGR in this report scored a perfect base while under a KKR bid at $127.",
    disclaimer: "For informational and educational purposes only. Not financial advice."
  },
  {
    reportDate: "2026-06-14",
    title: "S&P 1500 Momentum Screen",
    framework: "Minervini SEPA — history-based engine v2 (full S&P 1500)",
    market: {
      index: "S&P 1500 breadth — 64.3% above 200MA",
      verdict: "CONFIRMED UPTREND",
      verdictNote: "Breadth-derived regime (no index quote). 64.3% of 1,500 names above their 200DMA and 48.9% in a full 50>150>200 stack — regime gate OFF, so buys are actionable. Independent check: S&P 500 closed at record highs in early June 2026.",
      metrics: [
        {
          metric: "Universe evaluated",
          value: "1500 names",
          signal: "Full S&P 1500"
        },
        {
          metric: "% above 200-day MA",
          value: "64.3%",
          signal: "≥60% = uptrend",
          good: true
        },
        {
          metric: "% above 50-day MA",
          value: "64.9%",
          signal: "Short-term breadth",
          good: true
        },
        {
          metric: "% in full MA stack",
          value: "48.9%",
          signal: "≥45% = healthy",
          good: true
        }
      ],
      sectorAsOf: "Count of BUY NOW names by sector (not daily performance)",
      sectors: [
        {
          sector: "Financial Services",
          change: 3
        },
        {
          sector: "Real Estate",
          change: 3
        },
        {
          sector: "Energy",
          change: 2
        },
        {
          sector: "Industrials",
          change: 2
        },
        {
          sector: "Technology",
          change: 2
        },
        {
          sector: "Consumer Cyclical",
          change: 1
        },
        {
          sector: "Healthcare",
          change: 1
        },
        {
          sector: "Utilities",
          change: 1
        }
      ],
      sectorNote: "Leadership tilt of today's BUY NOW names: Financials, Energy/Refiners, Industrials and Real Estate. The strongest RS leaders overall sit in memory/semis (extended)."
    },
    dataSources: ["Prices: user's locally maintained S&P 1500 cache (local_kit/prices), last bar 2026-06-12", "Yahoo Finance bulk fetch: BLOCKED this run (sandbox proxy 403 on all 1,506 names)", "Engine: deterministic Python Trend Template + RS percentile + algorithmic VCP", "Fundamentals: FMP quarterly-growth endpoint PLAN-GATED; partial local EPS cache used (indicative)"],
    dataQualityNote: "All 1500 names with sufficient history were evaluated from end-of-day prices through 2026-06-12. No live intraday data. Volume triggers and pivots are mechanical — confirm each chart and the breakout bar on TradingView before any trade.",
    dataQuality: [
      {
        ticker: "FULL UNIVERSE",
        source: "Local price cache (local_kit/prices)",
        date: "Jun 12, 2026",
        status: "1500 EVALUATED"
      },
      {
        ticker: "Yahoo bulk fetch",
        source: "query1.finance.yahoo.com",
        date: "N/A",
        status: "BLOCKED — proxy 403 (1,506 names)"
      },
      {
        ticker: "BUY NOW set",
        source: "Engine (deterministic)",
        date: "Jun 12, 2026",
        status: "15 IN REPORT"
      },
      {
        ticker: "Fundamentals",
        source: "FMP quarterly growth",
        date: "N/A",
        status: "PLAN-GATED — indicative cache used"
      }
    ],
    criteria: [
      {
        key: "c1",
        label: "Price > 150MA & 200MA"
      },
      {
        key: "c2",
        label: "150MA > 200MA"
      },
      {
        key: "c3",
        label: "200MA Trending Up"
      },
      {
        key: "c4",
        label: "50 > 150 > 200 (full stack)"
      },
      {
        key: "c5",
        label: "Price > 50MA"
      },
      {
        key: "c6",
        label: "Price ≥ 30% Above 52wLow"
      },
      {
        key: "c7",
        label: "Price Within 25% of 52wHigh"
      },
      {
        key: "c8",
        label: "RS Rank ≥ 70"
      }
    ],
    summary: [
      {
        ticker: "VLO",
        flags: [1, 1, 1, 1, 1, 1, 1, 1],
        score: "8/8",
        result: "PASS"
      },
      {
        ticker: "STT",
        flags: [1, 1, 1, 1, 1, 1, 1, 1],
        score: "8/8",
        result: "PASS"
      },
      {
        ticker: "DINO",
        flags: [1, 1, 1, 1, 1, 1, 1, 1],
        score: "8/8",
        result: "PASS"
      },
      {
        ticker: "CHRW",
        flags: [1, 1, 1, 1, 1, 1, 1, 1],
        score: "8/8",
        result: "PASS"
      },
      {
        ticker: "ARMK",
        flags: [1, 1, 1, 1, 1, 1, 1, 1],
        score: "8/8",
        result: "PASS"
      },
      {
        ticker: "WSR",
        flags: [1, 1, 1, 1, 1, 1, 1, 1],
        score: "8/8",
        result: "PASS"
      },
      {
        ticker: "TWO",
        flags: [1, 1, 1, 1, 1, 1, 1, 1],
        score: "8/8",
        result: "PASS"
      },
      {
        ticker: "FFIV",
        flags: [1, 0, 1, 0, 1, 1, 1, 1],
        score: "6/8",
        result: "PASS"
      },
      {
        ticker: "BNY",
        flags: [1, 1, 1, 1, 1, 1, 1, 1],
        score: "8/8",
        result: "PASS"
      },
      {
        ticker: "HZO",
        flags: [1, 1, 1, 1, 1, 1, 1, 1],
        score: "8/8",
        result: "PASS"
      },
      {
        ticker: "NEOG",
        flags: [1, 1, 1, 1, 0, 1, 1, 1],
        score: "7/8",
        result: "PASS"
      },
      {
        ticker: "CWEN-A",
        flags: [1, 1, 1, 1, 1, 1, 1, 1],
        score: "8/8",
        result: "PASS"
      },
      {
        ticker: "DBD",
        flags: [1, 1, 1, 1, 1, 1, 1, 1],
        score: "8/8",
        result: "PASS"
      },
      {
        ticker: "EVR",
        flags: [1, 1, 1, 1, 1, 1, 1, 1],
        score: "8/8",
        result: "PASS"
      },
      {
        ticker: "EQIX",
        flags: [1, 1, 1, 1, 0, 1, 1, 1],
        score: "7/8",
        result: "PASS"
      },
      {
        ticker: "VIAV",
        flags: [1, 1, 1, 1, 1, 1, 1, 1],
        score: "8/8",
        result: "PASS"
      },
      {
        ticker: "ARWR",
        flags: [1, 1, 1, 1, 1, 1, 1, 1],
        score: "8/8",
        result: "PASS"
      },
      {
        ticker: "KALU",
        flags: [1, 1, 1, 1, 1, 1, 1, 1],
        score: "8/8",
        result: "PASS"
      },
      {
        ticker: "AVNS",
        flags: [1, 1, 1, 1, 1, 1, 1, 1],
        score: "8/8",
        result: "PASS"
      },
      {
        ticker: "AEIS",
        flags: [1, 1, 1, 1, 1, 1, 1, 1],
        score: "8/8",
        result: "PASS"
      },
      {
        ticker: "INSW",
        flags: [1, 1, 1, 1, 1, 1, 1, 1],
        score: "8/8",
        result: "PASS"
      },
      {
        ticker: "ENS",
        flags: [1, 1, 1, 1, 1, 1, 1, 1],
        score: "8/8",
        result: "PASS"
      },
      {
        ticker: "CAT",
        flags: [1, 1, 1, 1, 1, 1, 1, 1],
        score: "8/8",
        result: "PASS"
      },
      {
        ticker: "KGS",
        flags: [1, 1, 1, 1, 1, 1, 1, 1],
        score: "8/8",
        result: "PASS"
      },
      {
        ticker: "JBL",
        flags: [1, 1, 1, 1, 1, 1, 1, 1],
        score: "8/8",
        result: "PASS"
      },
      {
        ticker: "WDC",
        flags: [1, 1, 1, 1, 1, 1, 1, 1],
        score: "8/8",
        result: "WATCHLIST"
      },
      {
        ticker: "STX",
        flags: [1, 1, 1, 1, 1, 1, 1, 1],
        score: "8/8",
        result: "WATCHLIST"
      },
      {
        ticker: "SNDK",
        flags: [1, 1, 1, 1, 1, 1, 1, 1],
        score: "8/8",
        result: "WATCHLIST"
      },
      {
        ticker: "MU",
        flags: [1, 1, 1, 1, 1, 1, 1, 1],
        score: "8/8",
        result: "WATCHLIST"
      },
      {
        ticker: "INTC",
        flags: [1, 1, 1, 1, 1, 1, 1, 1],
        score: "8/8",
        result: "WATCHLIST"
      },
      {
        ticker: "MP",
        flags: [0, 0, 0, 0, 0, 1, 0, 0],
        score: "1/8",
        result: "FAIL"
      },
      {
        ticker: "NSP",
        flags: [1, 0, 0, 0, 1, 1, 0, 0],
        score: "3/8",
        result: "FAIL"
      },
      {
        ticker: "MARA",
        flags: [1, 0, 0, 0, 1, 1, 0, 0],
        score: "3/8",
        result: "FAIL"
      },
      {
        ticker: "MAS",
        flags: [1, 0, 0, 0, 1, 0, 1, 0],
        score: "3/8",
        result: "FAIL"
      }
    ],
    stocksNote: "15 BUY NOW, 193 SETUP — NEAR BUY and 515 EXTENDED — WATCH across the full 1,500. Cards below show all 15 BUY NOW names, the top 10 SETUP by RS, and the top 5 EXTENDED leaders. All numbers are mechanical engine outputs — verify on TradingView.",
    stocks: [
      {
        rank: 1,
        ticker: "VLO",
        name: "Valero Energy",
        sector: "Energy",
        status: "BUY NOW",
        techScore: "8/8",
        dataDate: "Cache, Jun 12, 2026",
        technical: [
          {
            metric: "Price (cache, Jun 12, 2026)",
            value: "$258.67",
            signal: "2.6% below 52w high"
          },
          {
            metric: "50-Day MA",
            value: "$244.93",
            signal: "Price ABOVE 50MA",
            good: true
          },
          {
            metric: "150 / 200-Day MA",
            value: "$209.66 / $197.39",
            signal: "Full stack 50>150>200",
            good: true
          },
          {
            metric: "Extension vs 50MA",
            value: "5.6%",
            signal: "Within buy range",
            good: true
          },
          {
            metric: "RS rank (vs 1500)",
            value: "86",
            signal: "Strong",
            good: true
          },
          {
            metric: "52-Week High / Low",
            value: "$265.61 / $128.0",
            signal: "Pivot near 52w high"
          }
        ],
        entry: {
          pivot: "$265.61 (engine buy point)",
          entryCondition: "Daily close above $265.61",
          volumeTrigger: "≥ 4,163,986 shares (1.4× 50-day avg) — VERIFY ON TRADINGVIEW",
          stop: "$245.69 (~7.5% below pivot)",
          target1: "$318.73 (+20%)",
          target2: "$345.29 (+30%)",
          rr: "2.67:1",
          sizing: "50% at pivot | 30% add +5–7% | 20% third entry"
        },
        alerts: [
          {
            type: "BREAKOUT ALERT",
            price: "$265.62 — close above pivot"
          },
          {
            type: "WARNING LEVEL",
            price: "$252.33 — 5% below pivot"
          },
          {
            type: "STOP ALERT",
            price: "$245.69 — hard stop"
          }
        ],
        notes: "BUY NOW. VCP CONFIRMED (tightness 7.8%, vol drying). Engine pivot $265.61, R:R 2.67:1. Cleanest mechanical setup; confirm the breakout bar on volume.",
        epsNote: "Q ended 2026-03-31 EPS $4.22; YoY EPS sharply higher (refining margins strong). Indicative PASS."
      },
      {
        rank: 2,
        ticker: "STT",
        name: "State Street",
        sector: "Financial Services",
        status: "BUY NOW",
        techScore: "8/8",
        dataDate: "Cache, Jun 12, 2026",
        technical: [
          {
            metric: "Price (cache, Jun 12, 2026)",
            value: "$167.63",
            signal: "0.4% below 52w high"
          },
          {
            metric: "50-Day MA",
            value: "$151.21",
            signal: "Price ABOVE 50MA",
            good: true
          },
          {
            metric: "150 / 200-Day MA",
            value: "$133.6 / $128.34",
            signal: "Full stack 50>150>200",
            good: true
          },
          {
            metric: "Extension vs 50MA",
            value: "10.9%",
            signal: "Within buy range",
            good: true
          },
          {
            metric: "RS rank (vs 1500)",
            value: "86",
            signal: "Strong",
            good: true
          },
          {
            metric: "52-Week High / Low",
            value: "$168.29 / $93.06",
            signal: "Pivot near 52w high"
          }
        ],
        entry: {
          pivot: "$168.29 (engine buy point)",
          entryCondition: "Daily close above $168.29",
          volumeTrigger: "≥ 2,853,592 shares (1.4× 50-day avg) — VERIFY ON TRADINGVIEW",
          stop: "$155.67 (~7.5% below pivot)",
          target1: "$201.95 (+20%)",
          target2: "$218.78 (+30%)",
          rr: "2.67:1",
          sizing: "Start 25% (already >10% above 50MA) | scale on confirmation"
        },
        alerts: [
          {
            type: "BREAKOUT ALERT",
            price: "$168.3 — close above pivot"
          },
          {
            type: "WARNING LEVEL",
            price: "$159.88 — 5% below pivot"
          },
          {
            type: "STOP ALERT",
            price: "$155.67 — hard stop"
          }
        ],
        notes: "BUY NOW. VCP CONFIRMED (tightness 8.5%, vol drying). Engine pivot $168.29, R:R 2.67:1. Cleanest mechanical setup; confirm the breakout bar on volume.",
        epsNote: "Latest EPS $2.49; YoY ~+10%, prior quarters +29-58%. Indicative growth, decelerating."
      },
      {
        rank: 3,
        ticker: "DINO",
        name: "HF Sinclair",
        sector: "Energy",
        status: "BUY NOW",
        techScore: "8/8",
        dataDate: "Cache, Jun 12, 2026",
        technical: [
          {
            metric: "Price (cache, Jun 12, 2026)",
            value: "$71.26",
            signal: "4.2% below 52w high"
          },
          {
            metric: "50-Day MA",
            value: "$66.26",
            signal: "Price ABOVE 50MA",
            good: true
          },
          {
            metric: "150 / 200-Day MA",
            value: "$56.87 / $55.4",
            signal: "Full stack 50>150>200",
            good: true
          },
          {
            metric: "Extension vs 50MA",
            value: "7.6%",
            signal: "Within buy range",
            good: true
          },
          {
            metric: "RS rank (vs 1500)",
            value: "85",
            signal: "Strong",
            good: true
          },
          {
            metric: "52-Week High / Low",
            value: "$74.38 / $36.25",
            signal: "Pivot near 52w high"
          }
        ],
        entry: {
          pivot: "$74.38 (engine buy point)",
          entryCondition: "Daily close above $74.38",
          volumeTrigger: "≥ 3,183,460 shares (1.4× 50-day avg) — VERIFY ON TRADINGVIEW",
          stop: "$68.8 (~7.5% below pivot)",
          target1: "$89.26 (+20%)",
          target2: "$96.69 (+30%)",
          rr: "2.67:1",
          sizing: "50% at pivot | 30% add +5–7% | 20% third entry"
        },
        alerts: [
          {
            type: "BREAKOUT ALERT",
            price: "$74.39 — close above pivot"
          },
          {
            type: "WARNING LEVEL",
            price: "$70.66 — 5% below pivot"
          },
          {
            type: "STOP ALERT",
            price: "$68.8 — hard stop"
          }
        ],
        notes: "BUY NOW. VCP CONFIRMED (tightness 7.7%, vol drying). Engine pivot $74.38, R:R 2.67:1. Cleanest mechanical setup; confirm the breakout bar on volume.",
        epsNote: "EPS growth not retrieved this run (FMP quarterly-growth endpoint plan-gated; not in local cache). Technicals are source of truth."
      },
      {
        rank: 4,
        ticker: "CHRW",
        name: "C.H. Robinson",
        sector: "Industrials",
        status: "BUY NOW",
        techScore: "8/8",
        dataDate: "Cache, Jun 12, 2026",
        technical: [
          {
            metric: "Price (cache, Jun 12, 2026)",
            value: "$193.74",
            signal: "4.1% below 52w high"
          },
          {
            metric: "50-Day MA",
            value: "$175.84",
            signal: "Price ABOVE 50MA",
            good: true
          },
          {
            metric: "150 / 200-Day MA",
            value: "$171.52 / $161.41",
            signal: "Full stack 50>150>200",
            good: true
          },
          {
            metric: "Extension vs 50MA",
            value: "10.2%",
            signal: "Within buy range",
            good: true
          },
          {
            metric: "RS rank (vs 1500)",
            value: "84",
            signal: "Strong",
            good: true
          },
          {
            metric: "52-Week High / Low",
            value: "$201.96 / $90.92",
            signal: "Pivot near 52w high"
          }
        ],
        entry: {
          pivot: "$195.0 (engine buy point)",
          entryCondition: "Daily close above $195.0",
          volumeTrigger: "≥ 2,573,908 shares (1.4× 50-day avg) — VERIFY ON TRADINGVIEW",
          stop: "$180.38 (~7.5% below pivot)",
          target1: "$234.0 (+20%)",
          target2: "$253.5 (+30%)",
          rr: "2.67:1",
          sizing: "Start 25% (already >10% above 50MA) | scale on confirmation"
        },
        alerts: [
          {
            type: "BREAKOUT ALERT",
            price: "$195.01 — close above pivot"
          },
          {
            type: "WARNING LEVEL",
            price: "$185.25 — 5% below pivot"
          },
          {
            type: "STOP ALERT",
            price: "$180.38 — hard stop"
          }
        ],
        notes: "BUY NOW. VCP CONFIRMED (tightness 11.2%, vol drying). Engine pivot $195.0, R:R 2.67:1. Cleanest mechanical setup; confirm the breakout bar on volume.",
        epsNote: "Latest EPS $1.22; YoY ~+53%, three quarters positive. Indicative PASS."
      },
      {
        rank: 5,
        ticker: "ARMK",
        name: "Aramark",
        sector: "Industrials",
        status: "BUY NOW",
        techScore: "8/8",
        dataDate: "Cache, Jun 12, 2026",
        technical: [
          {
            metric: "Price (cache, Jun 12, 2026)",
            value: "$54.27",
            signal: "1.2% below 52w high"
          },
          {
            metric: "50-Day MA",
            value: "$48.27",
            signal: "Price ABOVE 50MA",
            good: true
          },
          {
            metric: "150 / 200-Day MA",
            value: "$41.88 / $41.0",
            signal: "Full stack 50>150>200",
            good: true
          },
          {
            metric: "Extension vs 50MA",
            value: "12.4%",
            signal: "Within buy range",
            good: true
          },
          {
            metric: "RS rank (vs 1500)",
            value: "82",
            signal: "Strong",
            good: true
          },
          {
            metric: "52-Week High / Low",
            value: "$54.93 / $34.77",
            signal: "Pivot near 52w high"
          }
        ],
        entry: {
          pivot: "$54.93 (engine buy point)",
          entryCondition: "Daily close above $54.93",
          volumeTrigger: "≥ 4,108,171 shares (1.4× 50-day avg) — VERIFY ON TRADINGVIEW",
          stop: "$50.81 (~7.5% below pivot)",
          target1: "$65.92 (+20%)",
          target2: "$71.41 (+30%)",
          rr: "2.67:1",
          sizing: "Start 25% (already >10% above 50MA) | scale on confirmation"
        },
        alerts: [
          {
            type: "BREAKOUT ALERT",
            price: "$54.94 — close above pivot"
          },
          {
            type: "WARNING LEVEL",
            price: "$52.18 — 5% below pivot"
          },
          {
            type: "STOP ALERT",
            price: "$50.81 — hard stop"
          }
        ],
        notes: "BUY NOW. VCP CONFIRMED (tightness 4.1%, vol drying). Engine pivot $54.93, R:R 2.67:1. Cleanest mechanical setup; confirm the breakout bar on volume.",
        epsNote: "EPS growth not retrieved this run (FMP quarterly-growth endpoint plan-gated; not in local cache). Technicals are source of truth."
      },
      {
        rank: 6,
        ticker: "WSR",
        name: "Whitestone REIT",
        sector: "Real Estate",
        status: "BUY NOW",
        techScore: "8/8",
        dataDate: "Cache, Jun 12, 2026",
        technical: [
          {
            metric: "Price (cache, Jun 12, 2026)",
            value: "$19.06",
            signal: "0.2% below 52w high"
          },
          {
            metric: "50-Day MA",
            value: "$18.8",
            signal: "Price ABOVE 50MA",
            good: true
          },
          {
            metric: "150 / 200-Day MA",
            value: "$15.82 / $14.93",
            signal: "Full stack 50>150>200",
            good: true
          },
          {
            metric: "Extension vs 50MA",
            value: "1.4%",
            signal: "Within buy range",
            good: true
          },
          {
            metric: "RS rank (vs 1500)",
            value: "81",
            signal: "Strong",
            good: true
          },
          {
            metric: "52-Week High / Low",
            value: "$19.1 / $11.25",
            signal: "Pivot near 52w high"
          }
        ],
        entry: {
          pivot: "$19.1 (engine buy point)",
          entryCondition: "Daily close above $19.1",
          volumeTrigger: "≥ 789,387 shares (1.4× 50-day avg) — VERIFY ON TRADINGVIEW",
          stop: "$17.67 (~7.5% below pivot)",
          target1: "$22.92 (+20%)",
          target2: "$24.83 (+30%)",
          rr: "2.67:1",
          sizing: "50% at pivot | 30% add +5–7% | 20% third entry"
        },
        alerts: [
          {
            type: "BREAKOUT ALERT",
            price: "$19.11 — close above pivot"
          },
          {
            type: "WARNING LEVEL",
            price: "$18.14 — 5% below pivot"
          },
          {
            type: "STOP ALERT",
            price: "$17.67 — hard stop"
          }
        ],
        notes: "BUY NOW. VCP CONFIRMED (tightness 0.5%, vol drying). Engine pivot $19.1, R:R 2.67:1. Cleanest mechanical setup; confirm the breakout bar on volume.",
        epsNote: "EPS growth not retrieved this run (FMP quarterly-growth endpoint plan-gated; not in local cache). Technicals are source of truth."
      },
      {
        rank: 7,
        ticker: "TWO",
        name: "Two Harbors Inv.",
        sector: "Real Estate",
        status: "BUY NOW",
        techScore: "8/8",
        dataDate: "Cache, Jun 12, 2026",
        technical: [
          {
            metric: "Price (cache, Jun 12, 2026)",
            value: "$12.34",
            signal: "10.2% below 52w high"
          },
          {
            metric: "50-Day MA",
            value: "$11.9",
            signal: "Price ABOVE 50MA",
            good: true
          },
          {
            metric: "150 / 200-Day MA",
            value: "$10.87 / $10.43",
            signal: "Full stack 50>150>200",
            good: true
          },
          {
            metric: "Extension vs 50MA",
            value: "3.7%",
            signal: "Within buy range",
            good: true
          },
          {
            metric: "RS rank (vs 1500)",
            value: "80",
            signal: "Strong",
            good: true
          },
          {
            metric: "52-Week High / Low",
            value: "$13.74 / $8.52",
            signal: "Pivot near 52w high"
          }
        ],
        entry: {
          pivot: "$12.64 (engine buy point)",
          entryCondition: "Daily close above $12.64",
          volumeTrigger: "≥ 2,889,079 shares (1.4× 50-day avg) — VERIFY ON TRADINGVIEW",
          stop: "$11.69 (~7.5% below pivot)",
          target1: "$15.17 (+20%)",
          target2: "$16.43 (+30%)",
          rr: "2.66:1",
          sizing: "50% at pivot | 30% add +5–7% | 20% third entry"
        },
        alerts: [
          {
            type: "BREAKOUT ALERT",
            price: "$12.65 — close above pivot"
          },
          {
            type: "WARNING LEVEL",
            price: "$12.01 — 5% below pivot"
          },
          {
            type: "STOP ALERT",
            price: "$11.69 — hard stop"
          }
        ],
        notes: "BUY NOW. VCP CONFIRMED (tightness 0.9%, vol drying). Engine pivot $12.64, R:R 2.66:1. Cleanest mechanical setup; confirm the breakout bar on volume.",
        epsNote: "EPS growth not retrieved this run (FMP quarterly-growth endpoint plan-gated; not in local cache). Technicals are source of truth."
      },
      {
        rank: 8,
        ticker: "FFIV",
        name: "F5 Inc.",
        sector: "Technology",
        status: "BUY NOW",
        techScore: "6/8",
        dataDate: "Cache, Jun 12, 2026",
        technical: [
          {
            metric: "Price (cache, Jun 12, 2026)",
            value: "$396.16",
            signal: "3.7% below 52w high"
          },
          {
            metric: "50-Day MA",
            value: "$348.17",
            signal: "Price ABOVE 50MA",
            good: true
          },
          {
            metric: "150 / 200-Day MA",
            value: "$293.43 / $297.85",
            signal: "Stack incomplete",
            good: false
          },
          {
            metric: "Extension vs 50MA",
            value: "13.8%",
            signal: "Within buy range",
            good: true
          },
          {
            metric: "RS rank (vs 1500)",
            value: "80",
            signal: "Strong",
            good: true
          },
          {
            metric: "52-Week High / Low",
            value: "$411.52 / $223.76",
            signal: "Pivot near 52w high"
          }
        ],
        entry: {
          pivot: "$411.52 (engine buy point)",
          entryCondition: "Daily close above $411.52",
          volumeTrigger: "≥ 1,009,747 shares (1.4× 50-day avg) — VERIFY ON TRADINGVIEW",
          stop: "$380.66 (~7.5% below pivot)",
          target1: "$493.82 (+20%)",
          target2: "$534.98 (+30%)",
          rr: "2.67:1",
          sizing: "Start 25% (already >10% above 50MA) | scale on confirmation"
        },
        alerts: [
          {
            type: "BREAKOUT ALERT",
            price: "$411.53 — close above pivot"
          },
          {
            type: "WARNING LEVEL",
            price: "$390.94 — 5% below pivot"
          },
          {
            type: "STOP ALERT",
            price: "$380.66 — hard stop"
          }
        ],
        notes: "BUY NOW. VCP CONFIRMED (tightness 7.7%, vol drying). Engine pivot $411.52, R:R 2.67:1. Cleanest mechanical setup; confirm the breakout bar on volume.",
        epsNote: "Latest EPS $2.58; recent YoY mixed (last ~-9% after +27-63%). Indicative WATCH."
      },
      {
        rank: 9,
        ticker: "BNY",
        name: "Bank of New York Mellon",
        sector: "Financial Services",
        status: "BUY NOW",
        techScore: "8/8",
        dataDate: "Cache, Jun 12, 2026",
        technical: [
          {
            metric: "Price (cache, Jun 12, 2026)",
            value: "$143.98",
            signal: "0.7% below 52w high"
          },
          {
            metric: "50-Day MA",
            value: "$135.13",
            signal: "Price ABOVE 50MA",
            good: true
          },
          {
            metric: "150 / 200-Day MA",
            value: "$122.36 / $118.17",
            signal: "Full stack 50>150>200",
            good: true
          },
          {
            metric: "Extension vs 50MA",
            value: "6.5%",
            signal: "Within buy range",
            good: true
          },
          {
            metric: "RS rank (vs 1500)",
            value: "79",
            signal: "Strong",
            good: true
          },
          {
            metric: "52-Week High / Low",
            value: "$145.02 / $85.8",
            signal: "Pivot near 52w high"
          }
        ],
        entry: {
          pivot: "$145.02 (engine buy point)",
          entryCondition: "Daily close above $145.02",
          volumeTrigger: "≥ 5,164,737 shares (1.4× 50-day avg) — VERIFY ON TRADINGVIEW",
          stop: "$134.14 (~7.5% below pivot)",
          target1: "$174.02 (+20%)",
          target2: "$188.53 (+30%)",
          rr: "2.67:1",
          sizing: "50% at pivot | 30% add +5–7% | 20% third entry"
        },
        alerts: [
          {
            type: "BREAKOUT ALERT",
            price: "$145.03 — close above pivot"
          },
          {
            type: "WARNING LEVEL",
            price: "$137.77 — 5% below pivot"
          },
          {
            type: "STOP ALERT",
            price: "$134.14 — hard stop"
          }
        ],
        notes: "BUY NOW. VCP CONFIRMED (tightness 5.5%, vol drying). Engine pivot $145.02, R:R 2.67:1. Cleanest mechanical setup; confirm the breakout bar on volume.",
        epsNote: "Latest EPS $2.24; YoY ~+46%, accelerating last three quarters. Indicative STRONG PASS."
      },
      {
        rank: 10,
        ticker: "HZO",
        name: "MarineMax",
        sector: "Consumer Cyclical",
        status: "BUY NOW",
        techScore: "8/8",
        dataDate: "Cache, Jun 12, 2026",
        technical: [
          {
            metric: "Price (cache, Jun 12, 2026)",
            value: "$34.0",
            signal: "6.2% below 52w high"
          },
          {
            metric: "50-Day MA",
            value: "$31.45",
            signal: "Price ABOVE 50MA",
            good: true
          },
          {
            metric: "150 / 200-Day MA",
            value: "$28.02 / $27.48",
            signal: "Full stack 50>150>200",
            good: true
          },
          {
            metric: "Extension vs 50MA",
            value: "8.1%",
            signal: "Within buy range",
            good: true
          },
          {
            metric: "RS rank (vs 1500)",
            value: "77",
            signal: "Strong",
            good: true
          },
          {
            metric: "52-Week High / Low",
            value: "$36.25 / $21.41",
            signal: "Pivot near 52w high"
          }
        ],
        entry: {
          pivot: "$36.25 (engine buy point)",
          entryCondition: "Daily close above $36.25",
          volumeTrigger: "≥ 469,629 shares (1.4× 50-day avg) — VERIFY ON TRADINGVIEW",
          stop: "$33.53 (~7.5% below pivot)",
          target1: "$43.5 (+20%)",
          target2: "$47.12 (+30%)",
          rr: "2.67:1",
          sizing: "50% at pivot | 30% add +5–7% | 20% third entry"
        },
        alerts: [
          {
            type: "BREAKOUT ALERT",
            price: "$36.26 — close above pivot"
          },
          {
            type: "WARNING LEVEL",
            price: "$34.44 — 5% below pivot"
          },
          {
            type: "STOP ALERT",
            price: "$33.53 — hard stop"
          }
        ],
        notes: "BUY NOW. VCP CONFIRMED (tightness 8.8%, vol drying). Engine pivot $36.25, R:R 2.67:1. Cleanest mechanical setup; confirm the breakout bar on volume.",
        epsNote: "EPS growth not retrieved this run (FMP quarterly-growth endpoint plan-gated; not in local cache). Technicals are source of truth."
      },
      {
        rank: 11,
        ticker: "NEOG",
        name: "Neogen",
        sector: "Healthcare",
        status: "BUY NOW",
        techScore: "7/8",
        dataDate: "Cache, Jun 12, 2026",
        technical: [
          {
            metric: "Price (cache, Jun 12, 2026)",
            value: "$9.1",
            signal: "20.4% below 52w high"
          },
          {
            metric: "50-Day MA",
            value: "$9.18",
            signal: "Price BELOW 50MA",
            good: false
          },
          {
            metric: "150 / 200-Day MA",
            value: "$8.76 / $8.03",
            signal: "Full stack 50>150>200",
            good: true
          },
          {
            metric: "Extension vs 50MA",
            value: "-0.8%",
            signal: "Within buy range",
            good: true
          },
          {
            metric: "RS rank (vs 1500)",
            value: "75",
            signal: "Strong",
            good: true
          },
          {
            metric: "52-Week High / Low",
            value: "$11.43 / $4.56",
            signal: "Pivot near 52w high"
          }
        ],
        entry: {
          pivot: "$9.49 (engine buy point)",
          entryCondition: "Daily close above $9.49",
          volumeTrigger: "≥ 3,662,150 shares (1.4× 50-day avg) — VERIFY ON TRADINGVIEW",
          stop: "$8.78 (~7.5% below pivot)",
          target1: "$11.39 (+20%)",
          target2: "$12.34 (+30%)",
          rr: "2.68:1",
          sizing: "50% at pivot | 30% add +5–7% | 20% third entry"
        },
        alerts: [
          {
            type: "BREAKOUT ALERT",
            price: "$9.5 — close above pivot"
          },
          {
            type: "WARNING LEVEL",
            price: "$9.02 — 5% below pivot"
          },
          {
            type: "STOP ALERT",
            price: "$8.78 — hard stop"
          }
        ],
        notes: "BUY NOW. VCP CONFIRMED (tightness 9.0%, vol drying). Engine pivot $9.49, R:R 2.68:1. Cleanest mechanical setup; confirm the breakout bar on volume.",
        epsNote: "EPS growth not retrieved this run (FMP quarterly-growth endpoint plan-gated; not in local cache). Technicals are source of truth."
      },
      {
        rank: 12,
        ticker: "CWEN-A",
        name: "Clearway Energy A",
        sector: "Utilities",
        status: "BUY NOW",
        techScore: "8/8",
        dataDate: "Cache, Jun 12, 2026",
        technical: [
          {
            metric: "Price (cache, Jun 12, 2026)",
            value: "$40.43",
            signal: "2.4% below 52w high"
          },
          {
            metric: "50-Day MA",
            value: "$40.16",
            signal: "Price ABOVE 50MA",
            good: true
          },
          {
            metric: "150 / 200-Day MA",
            value: "$36.05 / $33.98",
            signal: "Full stack 50>150>200",
            good: true
          },
          {
            metric: "Extension vs 50MA",
            value: "0.7%",
            signal: "Within buy range",
            good: true
          },
          {
            metric: "RS rank (vs 1500)",
            value: "74",
            signal: "Strong",
            good: true
          },
          {
            metric: "52-Week High / Low",
            value: "$41.41 / $25.68",
            signal: "Pivot near 52w high"
          }
        ],
        entry: {
          pivot: "$40.43 (engine buy point)",
          entryCondition: "Daily close above $40.43",
          volumeTrigger: "≥ 146,557 shares (1.4× 50-day avg) — VERIFY ON TRADINGVIEW",
          stop: "$37.4 (~7.5% below pivot)",
          target1: "$48.52 (+20%)",
          target2: "$52.56 (+30%)",
          rr: "2.67:1",
          sizing: "50% at pivot | 30% add +5–7% | 20% third entry"
        },
        alerts: [
          {
            type: "BREAKOUT ALERT",
            price: "$40.44 — close above pivot"
          },
          {
            type: "WARNING LEVEL",
            price: "$38.41 — 5% below pivot"
          },
          {
            type: "STOP ALERT",
            price: "$37.4 — hard stop"
          }
        ],
        notes: "BUY NOW. VCP CONFIRMED (tightness 0.0%, vol drying). Engine pivot $40.43, R:R 2.67:1. Cleanest mechanical setup; confirm the breakout bar on volume.",
        epsNote: "EPS growth not retrieved this run (FMP quarterly-growth endpoint plan-gated; not in local cache). Technicals are source of truth."
      },
      {
        rank: 13,
        ticker: "DBD",
        name: "Diebold Nixdorf",
        sector: "Technology",
        status: "BUY NOW",
        techScore: "8/8",
        dataDate: "Cache, Jun 12, 2026",
        technical: [
          {
            metric: "Price (cache, Jun 12, 2026)",
            value: "$81.72",
            signal: "8.2% below 52w high"
          },
          {
            metric: "50-Day MA",
            value: "$79.83",
            signal: "Price ABOVE 50MA",
            good: true
          },
          {
            metric: "150 / 200-Day MA",
            value: "$73.7 / $69.88",
            signal: "Full stack 50>150>200",
            good: true
          },
          {
            metric: "Extension vs 50MA",
            value: "2.4%",
            signal: "Within buy range",
            good: true
          },
          {
            metric: "RS rank (vs 1500)",
            value: "74",
            signal: "Strong",
            good: true
          },
          {
            metric: "52-Week High / Low",
            value: "$89.05 / $50.27",
            signal: "Pivot near 52w high"
          }
        ],
        entry: {
          pivot: "$84.81 (engine buy point)",
          entryCondition: "Daily close above $84.81",
          volumeTrigger: "≥ 673,526 shares (1.4× 50-day avg) — VERIFY ON TRADINGVIEW",
          stop: "$78.45 (~7.5% below pivot)",
          target1: "$101.77 (+20%)",
          target2: "$110.25 (+30%)",
          rr: "2.67:1",
          sizing: "50% at pivot | 30% add +5–7% | 20% third entry"
        },
        alerts: [
          {
            type: "BREAKOUT ALERT",
            price: "$84.82 — close above pivot"
          },
          {
            type: "WARNING LEVEL",
            price: "$80.57 — 5% below pivot"
          },
          {
            type: "STOP ALERT",
            price: "$78.45 — hard stop"
          }
        ],
        notes: "BUY NOW. VCP CONFIRMED (tightness 9.6%, vol drying). Engine pivot $84.81, R:R 2.67:1. Cleanest mechanical setup; confirm the breakout bar on volume.",
        epsNote: "EPS growth not retrieved this run (FMP quarterly-growth endpoint plan-gated; not in local cache). Technicals are source of truth."
      },
      {
        rank: 14,
        ticker: "EVR",
        name: "Evercore",
        sector: "Financial Services",
        status: "BUY NOW",
        techScore: "8/8",
        dataDate: "Cache, Jun 12, 2026",
        technical: [
          {
            metric: "Price (cache, Jun 12, 2026)",
            value: "$357.38",
            signal: "7.6% below 52w high"
          },
          {
            metric: "50-Day MA",
            value: "$338.85",
            signal: "Price ABOVE 50MA",
            good: true
          },
          {
            metric: "150 / 200-Day MA",
            value: "$329.51 / $327.85",
            signal: "Full stack 50>150>200",
            good: true
          },
          {
            metric: "Extension vs 50MA",
            value: "5.5%",
            signal: "Within buy range",
            good: true
          },
          {
            metric: "RS rank (vs 1500)",
            value: "70",
            signal: "Strong",
            good: true
          },
          {
            metric: "52-Week High / Low",
            value: "$386.72 / $236.49",
            signal: "Pivot near 52w high"
          }
        ],
        entry: {
          pivot: "$365.36 (engine buy point)",
          entryCondition: "Daily close above $365.36",
          volumeTrigger: "≥ 710,183 shares (1.4× 50-day avg) — VERIFY ON TRADINGVIEW",
          stop: "$337.96 (~7.5% below pivot)",
          target1: "$438.43 (+20%)",
          target2: "$474.97 (+30%)",
          rr: "2.67:1",
          sizing: "50% at pivot | 30% add +5–7% | 20% third entry"
        },
        alerts: [
          {
            type: "BREAKOUT ALERT",
            price: "$365.37 — close above pivot"
          },
          {
            type: "WARNING LEVEL",
            price: "$347.09 — 5% below pivot"
          },
          {
            type: "STOP ALERT",
            price: "$337.96 — hard stop"
          }
        ],
        notes: "BUY NOW. VCP CONFIRMED (tightness 10.5%, vol drying). Engine pivot $365.36, R:R 2.67:1. Cleanest mechanical setup; confirm the breakout bar on volume.",
        epsNote: "EPS growth not retrieved this run (FMP quarterly-growth endpoint plan-gated; not in local cache). Technicals are source of truth."
      },
      {
        rank: 15,
        ticker: "EQIX",
        name: "Equinix",
        sector: "Real Estate",
        status: "BUY NOW",
        techScore: "7/8",
        dataDate: "Cache, Jun 12, 2026",
        technical: [
          {
            metric: "Price (cache, Jun 12, 2026)",
            value: "$1055.85",
            signal: "6.0% below 52w high"
          },
          {
            metric: "50-Day MA",
            value: "$1064.5",
            signal: "Price BELOW 50MA",
            good: false
          },
          {
            metric: "150 / 200-Day MA",
            value: "$911.25 / $880.0",
            signal: "Full stack 50>150>200",
            good: true
          },
          {
            metric: "Extension vs 50MA",
            value: "-0.8%",
            signal: "Within buy range",
            good: true
          },
          {
            metric: "RS rank (vs 1500)",
            value: "70",
            signal: "Strong",
            good: true
          },
          {
            metric: "52-Week High / Low",
            value: "$1123.13 / $694.72",
            signal: "Pivot near 52w high"
          }
        ],
        entry: {
          pivot: "$1107.15 (engine buy point)",
          entryCondition: "Daily close above $1107.15",
          volumeTrigger: "≥ 748,392 shares (1.4× 50-day avg) — VERIFY ON TRADINGVIEW",
          stop: "$1024.11 (~7.5% below pivot)",
          target1: "$1328.58 (+20%)",
          target2: "$1439.3 (+30%)",
          rr: "2.67:1",
          sizing: "50% at pivot | 30% add +5–7% | 20% third entry"
        },
        alerts: [
          {
            type: "BREAKOUT ALERT",
            price: "$1107.16 — close above pivot"
          },
          {
            type: "WARNING LEVEL",
            price: "$1051.79 — 5% below pivot"
          },
          {
            type: "STOP ALERT",
            price: "$1024.11 — hard stop"
          }
        ],
        notes: "BUY NOW. VCP CONFIRMED (tightness 7.3%, vol drying). Engine pivot $1107.15, R:R 2.67:1. Cleanest mechanical setup; confirm the breakout bar on volume.",
        epsNote: "Latest EPS $4.20; YoY ~+36%, consistent positive growth. Indicative PASS."
      },
      {
        rank: 16,
        ticker: "VIAV",
        name: "Viavi Solutions",
        sector: "Technology",
        status: "SETUP — NEAR BUY",
        techScore: "8/8",
        dataDate: "Cache, Jun 12, 2026",
        technical: [
          {
            metric: "Price (cache, Jun 12, 2026)",
            value: "$53.46",
            signal: "11.5% below 52w high"
          },
          {
            metric: "50-Day MA",
            value: "$47.79",
            signal: "Price ABOVE 50MA",
            good: true
          },
          {
            metric: "150 / 200-Day MA",
            value: "$31.39 / $26.79",
            signal: "Full stack 50>150>200",
            good: true
          },
          {
            metric: "Extension vs 50MA",
            value: "11.9%",
            signal: "Within buy range",
            good: true
          },
          {
            metric: "RS rank (vs 1500)",
            value: "98",
            signal: "Leader",
            good: true
          },
          {
            metric: "52-Week High / Low",
            value: "$60.43 / $9.08",
            signal: "Pivot near 52w high"
          }
        ],
        entry: {
          pivot: "$55.59 (engine buy point)",
          entryCondition: "Daily close above $55.59",
          volumeTrigger: "≥ 9,098,871 shares (1.4× 50-day avg) — VERIFY ON TRADINGVIEW",
          stop: "$51.42 (~7.5% below pivot)",
          target1: "$66.71 (+20%)",
          target2: "$72.27 (+30%)",
          rr: "2.67:1",
          sizing: "Start 25% (already >10% above 50MA) | scale on confirmation"
        },
        alerts: [
          {
            type: "BREAKOUT ALERT",
            price: "$55.6 — close above pivot"
          },
          {
            type: "WARNING LEVEL",
            price: "$52.81 — 5% below pivot"
          },
          {
            type: "STOP ALERT",
            price: "$51.42 — hard stop"
          }
        ],
        notes: "SETUP — NEAR BUY. VCP FORMING (tightness 25.6%, vol drying). Engine pivot $55.59, R:R 2.67:1. Base still forming — wait for the breakout trigger.",
        epsNote: "EPS growth not retrieved this run (FMP quarterly-growth endpoint plan-gated; not in local cache). Technicals are source of truth."
      },
      {
        rank: 17,
        ticker: "ARWR",
        name: "Arrowhead Pharma",
        sector: "Healthcare",
        status: "SETUP — NEAR BUY",
        techScore: "8/8",
        dataDate: "Cache, Jun 12, 2026",
        technical: [
          {
            metric: "Price (cache, Jun 12, 2026)",
            value: "$74.52",
            signal: "9.4% below 52w high"
          },
          {
            metric: "50-Day MA",
            value: "$72.76",
            signal: "Price ABOVE 50MA",
            good: true
          },
          {
            metric: "150 / 200-Day MA",
            value: "$64.76 / $56.99",
            signal: "Full stack 50>150>200",
            good: true
          },
          {
            metric: "Extension vs 50MA",
            value: "2.4%",
            signal: "Within buy range",
            good: true
          },
          {
            metric: "RS rank (vs 1500)",
            value: "96",
            signal: "Leader",
            good: true
          },
          {
            metric: "52-Week High / Low",
            value: "$82.26 / $14.3",
            signal: "Pivot near 52w high"
          }
        ],
        entry: {
          pivot: "$80.19 (engine buy point)",
          entryCondition: "Daily close above $80.19",
          volumeTrigger: "≥ 2,364,958 shares (1.4× 50-day avg) — VERIFY ON TRADINGVIEW",
          stop: "$74.18 (~7.5% below pivot)",
          target1: "$96.23 (+20%)",
          target2: "$104.25 (+30%)",
          rr: "2.67:1",
          sizing: "50% at pivot | 30% add +5–7% | 20% third entry"
        },
        alerts: [
          {
            type: "BREAKOUT ALERT",
            price: "$80.2 — close above pivot"
          },
          {
            type: "WARNING LEVEL",
            price: "$76.18 — 5% below pivot"
          },
          {
            type: "STOP ALERT",
            price: "$74.18 — hard stop"
          }
        ],
        notes: "SETUP — NEAR BUY. VCP FORMING (tightness 11.4%, vol drying). Engine pivot $80.19, R:R 2.67:1. Base still forming — wait for the breakout trigger.",
        epsNote: "EPS growth not retrieved this run (FMP quarterly-growth endpoint plan-gated; not in local cache). Technicals are source of truth."
      },
      {
        rank: 18,
        ticker: "KALU",
        name: "Kaiser Aluminum",
        sector: "Basic Materials",
        status: "SETUP — NEAR BUY",
        techScore: "8/8",
        dataDate: "Cache, Jun 12, 2026",
        technical: [
          {
            metric: "Price (cache, Jun 12, 2026)",
            value: "$190.63",
            signal: "2.0% below 52w high"
          },
          {
            metric: "50-Day MA",
            value: "$167.61",
            signal: "Price ABOVE 50MA",
            good: true
          },
          {
            metric: "150 / 200-Day MA",
            value: "$133.68 / $120.04",
            signal: "Full stack 50>150>200",
            good: true
          },
          {
            metric: "Extension vs 50MA",
            value: "13.7%",
            signal: "Within buy range",
            good: true
          },
          {
            metric: "RS rank (vs 1500)",
            value: "95",
            signal: "Leader",
            good: true
          },
          {
            metric: "52-Week High / Low",
            value: "$194.43 / $70.1",
            signal: "Pivot near 52w high"
          }
        ],
        entry: {
          pivot: "$194.43 (engine buy point)",
          entryCondition: "Daily close above $194.43",
          volumeTrigger: "≥ 354,956 shares (1.4× 50-day avg) — VERIFY ON TRADINGVIEW",
          stop: "$179.85 (~7.5% below pivot)",
          target1: "$233.32 (+20%)",
          target2: "$252.76 (+30%)",
          rr: "2.67:1",
          sizing: "Start 25% (already >10% above 50MA) | scale on confirmation"
        },
        alerts: [
          {
            type: "BREAKOUT ALERT",
            price: "$194.44 — close above pivot"
          },
          {
            type: "WARNING LEVEL",
            price: "$184.71 — 5% below pivot"
          },
          {
            type: "STOP ALERT",
            price: "$179.85 — hard stop"
          }
        ],
        notes: "SETUP — NEAR BUY. VCP FORMING (tightness 12.7%, vol drying). Engine pivot $194.43, R:R 2.67:1. Base still forming — wait for the breakout trigger.",
        epsNote: "EPS growth not retrieved this run (FMP quarterly-growth endpoint plan-gated; not in local cache). Technicals are source of truth."
      },
      {
        rank: 19,
        ticker: "AVNS",
        name: "Avanos Medical",
        sector: "Healthcare",
        status: "SETUP — NEAR BUY",
        techScore: "8/8",
        dataDate: "Cache, Jun 12, 2026",
        technical: [
          {
            metric: "Price (cache, Jun 12, 2026)",
            value: "$24.96",
            signal: "2.1% below 52w high"
          },
          {
            metric: "50-Day MA",
            value: "$23.27",
            signal: "Price ABOVE 50MA",
            good: true
          },
          {
            metric: "150 / 200-Day MA",
            value: "$16.24 / $15.11",
            signal: "Full stack 50>150>200",
            good: true
          },
          {
            metric: "Extension vs 50MA",
            value: "7.3%",
            signal: "Within buy range",
            good: true
          },
          {
            metric: "RS rank (vs 1500)",
            value: "95",
            signal: "Leader",
            good: true
          },
          {
            metric: "52-Week High / Low",
            value: "$25.49 / $9.3",
            signal: "Pivot near 52w high"
          }
        ],
        entry: {
          pivot: "$25.49 (engine buy point)",
          entryCondition: "Daily close above $25.49",
          volumeTrigger: "≥ 2,454,732 shares (1.4× 50-day avg) — VERIFY ON TRADINGVIEW",
          stop: "$23.58 (~7.5% below pivot)",
          target1: "$30.59 (+20%)",
          target2: "$33.14 (+30%)",
          rr: "2.67:1",
          sizing: "50% at pivot | 30% add +5–7% | 20% third entry"
        },
        alerts: [
          {
            type: "BREAKOUT ALERT",
            price: "$25.5 — close above pivot"
          },
          {
            type: "WARNING LEVEL",
            price: "$24.22 — 5% below pivot"
          },
          {
            type: "STOP ALERT",
            price: "$23.58 — hard stop"
          }
        ],
        notes: "SETUP — NEAR BUY. VCP FORMING (tightness 2.2%, vol drying). Engine pivot $25.49, R:R 2.67:1. Base still forming — wait for the breakout trigger.",
        epsNote: "EPS growth not retrieved this run (FMP quarterly-growth endpoint plan-gated; not in local cache). Technicals are source of truth."
      },
      {
        rank: 20,
        ticker: "AEIS",
        name: "Advanced Energy",
        sector: "Technology",
        status: "SETUP — NEAR BUY",
        techScore: "8/8",
        dataDate: "Cache, Jun 12, 2026",
        technical: [
          {
            metric: "Price (cache, Jun 12, 2026)",
            value: "$354.37",
            signal: "10.8% below 52w high"
          },
          {
            metric: "50-Day MA",
            value: "$346.81",
            signal: "Price ABOVE 50MA",
            good: true
          },
          {
            metric: "150 / 200-Day MA",
            value: "$289.22 / $260.99",
            signal: "Full stack 50>150>200",
            good: true
          },
          {
            metric: "Extension vs 50MA",
            value: "2.2%",
            signal: "Within buy range",
            good: true
          },
          {
            metric: "RS rank (vs 1500)",
            value: "94",
            signal: "Leader",
            good: true
          },
          {
            metric: "52-Week High / Low",
            value: "$397.32 / $121.86",
            signal: "Pivot near 52w high"
          }
        ],
        entry: {
          pivot: "$357.0 (engine buy point)",
          entryCondition: "Daily close above $357.0",
          volumeTrigger: "≥ 1,157,013 shares (1.4× 50-day avg) — VERIFY ON TRADINGVIEW",
          stop: "$330.23 (~7.5% below pivot)",
          target1: "$428.4 (+20%)",
          target2: "$464.1 (+30%)",
          rr: "2.67:1",
          sizing: "50% at pivot | 30% add +5–7% | 20% third entry"
        },
        alerts: [
          {
            type: "BREAKOUT ALERT",
            price: "$357.01 — close above pivot"
          },
          {
            type: "WARNING LEVEL",
            price: "$339.15 — 5% below pivot"
          },
          {
            type: "STOP ALERT",
            price: "$330.23 — hard stop"
          }
        ],
        notes: "SETUP — NEAR BUY. VCP FORMING (tightness 23.8%, vol not drying). Engine pivot $357.0, R:R 2.67:1. Base still forming — wait for the breakout trigger.",
        epsNote: "EPS growth not retrieved this run (FMP quarterly-growth endpoint plan-gated; not in local cache). Technicals are source of truth."
      },
      {
        rank: 21,
        ticker: "INSW",
        name: "Intl Seaways",
        sector: "Industrials",
        status: "SETUP — NEAR BUY",
        techScore: "8/8",
        dataDate: "Cache, Jun 12, 2026",
        technical: [
          {
            metric: "Price (cache, Jun 12, 2026)",
            value: "$82.01",
            signal: "6.3% below 52w high"
          },
          {
            metric: "50-Day MA",
            value: "$76.48",
            signal: "Price ABOVE 50MA",
            good: true
          },
          {
            metric: "150 / 200-Day MA",
            value: "$61.67 / $56.8",
            signal: "Full stack 50>150>200",
            good: true
          },
          {
            metric: "Extension vs 50MA",
            value: "7.2%",
            signal: "Within buy range",
            good: true
          },
          {
            metric: "RS rank (vs 1500)",
            value: "94",
            signal: "Leader",
            good: true
          },
          {
            metric: "52-Week High / Low",
            value: "$87.55 / $31.94",
            signal: "Pivot near 52w high"
          }
        ],
        entry: {
          pivot: "$82.58 (engine buy point)",
          entryCondition: "Daily close above $82.58",
          volumeTrigger: "≥ 763,753 shares (1.4× 50-day avg) — VERIFY ON TRADINGVIEW",
          stop: "$76.39 (~7.5% below pivot)",
          target1: "$99.1 (+20%)",
          target2: "$107.35 (+30%)",
          rr: "2.67:1",
          sizing: "50% at pivot | 30% add +5–7% | 20% third entry"
        },
        alerts: [
          {
            type: "BREAKOUT ALERT",
            price: "$82.59 — close above pivot"
          },
          {
            type: "WARNING LEVEL",
            price: "$78.45 — 5% below pivot"
          },
          {
            type: "STOP ALERT",
            price: "$76.39 — hard stop"
          }
        ],
        notes: "SETUP — NEAR BUY. VCP FORMING (tightness 13.4%, vol drying). Engine pivot $82.58, R:R 2.67:1. Base still forming — wait for the breakout trigger.",
        epsNote: "EPS growth not retrieved this run (FMP quarterly-growth endpoint plan-gated; not in local cache). Technicals are source of truth."
      },
      {
        rank: 22,
        ticker: "ENS",
        name: "EnerSys",
        sector: "Industrials",
        status: "SETUP — NEAR BUY",
        techScore: "8/8",
        dataDate: "Cache, Jun 12, 2026",
        technical: [
          {
            metric: "Price (cache, Jun 12, 2026)",
            value: "$224.26",
            signal: "8.2% below 52w high"
          },
          {
            metric: "50-Day MA",
            value: "$215.81",
            signal: "Price ABOVE 50MA",
            good: true
          },
          {
            metric: "150 / 200-Day MA",
            value: "$178.02 / $161.82",
            signal: "Full stack 50>150>200",
            good: true
          },
          {
            metric: "Extension vs 50MA",
            value: "3.9%",
            signal: "Within buy range",
            good: true
          },
          {
            metric: "RS rank (vs 1500)",
            value: "94",
            signal: "Leader",
            good: true
          },
          {
            metric: "52-Week High / Low",
            value: "$244.3 / $80.35",
            signal: "Pivot near 52w high"
          }
        ],
        entry: {
          pivot: "$244.3 (engine buy point)",
          entryCondition: "Daily close above $244.3",
          volumeTrigger: "≥ 564,544 shares (1.4× 50-day avg) — VERIFY ON TRADINGVIEW",
          stop: "$225.98 (~7.5% below pivot)",
          target1: "$293.16 (+20%)",
          target2: "$317.59 (+30%)",
          rr: "2.67:1",
          sizing: "50% at pivot | 30% add +5–7% | 20% third entry"
        },
        alerts: [
          {
            type: "BREAKOUT ALERT",
            price: "$244.31 — close above pivot"
          },
          {
            type: "WARNING LEVEL",
            price: "$232.09 — 5% below pivot"
          },
          {
            type: "STOP ALERT",
            price: "$225.98 — hard stop"
          }
        ],
        notes: "SETUP — NEAR BUY. VCP FORMING (tightness 12.7%, vol not drying). Engine pivot $244.3, R:R 2.67:1. Base still forming — wait for the breakout trigger.",
        epsNote: "EPS growth not retrieved this run (FMP quarterly-growth endpoint plan-gated; not in local cache). Technicals are source of truth."
      },
      {
        rank: 23,
        ticker: "CAT",
        name: "Caterpillar",
        sector: "Industrials",
        status: "SETUP — NEAR BUY",
        techScore: "8/8",
        dataDate: "Cache, Jun 12, 2026",
        technical: [
          {
            metric: "Price (cache, Jun 12, 2026)",
            value: "$910.57",
            signal: "3.8% below 52w high"
          },
          {
            metric: "50-Day MA",
            value: "$854.89",
            signal: "Price ABOVE 50MA",
            good: true
          },
          {
            metric: "150 / 200-Day MA",
            value: "$716.18 / $657.96",
            signal: "Full stack 50>150>200",
            good: true
          },
          {
            metric: "Extension vs 50MA",
            value: "6.5%",
            signal: "Within buy range",
            good: true
          },
          {
            metric: "RS rank (vs 1500)",
            value: "93",
            signal: "Leader",
            good: true
          },
          {
            metric: "52-Week High / Low",
            value: "$946.83 / $351.89",
            signal: "Pivot near 52w high"
          }
        ],
        entry: {
          pivot: "$946.83 (engine buy point)",
          entryCondition: "Daily close above $946.83",
          volumeTrigger: "≥ 3,545,292 shares (1.4× 50-day avg) — VERIFY ON TRADINGVIEW",
          stop: "$875.82 (~7.5% below pivot)",
          target1: "$1136.2 (+20%)",
          target2: "$1230.88 (+30%)",
          rr: "2.67:1",
          sizing: "50% at pivot | 30% add +5–7% | 20% third entry"
        },
        alerts: [
          {
            type: "BREAKOUT ALERT",
            price: "$946.84 — close above pivot"
          },
          {
            type: "WARNING LEVEL",
            price: "$899.49 — 5% below pivot"
          },
          {
            type: "STOP ALERT",
            price: "$875.82 — hard stop"
          }
        ],
        notes: "SETUP — NEAR BUY. VCP FORMING (tightness 11.0%, vol not drying). Engine pivot $946.83, R:R 2.67:1. Base still forming — wait for the breakout trigger.",
        epsNote: "Latest EPS $5.47; YoY ~+8%, returning to growth after two soft quarters. Indicative MARGINAL."
      },
      {
        rank: 24,
        ticker: "KGS",
        name: "Kodiak Gas",
        sector: "Energy",
        status: "SETUP — NEAR BUY",
        techScore: "8/8",
        dataDate: "Cache, Jun 12, 2026",
        technical: [
          {
            metric: "Price (cache, Jun 12, 2026)",
            value: "$69.08",
            signal: "11.1% below 52w high"
          },
          {
            metric: "50-Day MA",
            value: "$67.16",
            signal: "Price ABOVE 50MA",
            good: true
          },
          {
            metric: "150 / 200-Day MA",
            value: "$51.13 / $46.86",
            signal: "Full stack 50>150>200",
            good: true
          },
          {
            metric: "Extension vs 50MA",
            value: "2.9%",
            signal: "Within buy range",
            good: true
          },
          {
            metric: "RS rank (vs 1500)",
            value: "93",
            signal: "Leader",
            good: true
          },
          {
            metric: "52-Week High / Low",
            value: "$77.68 / $29.18",
            signal: "Pivot near 52w high"
          }
        ],
        entry: {
          pivot: "$77.68 (engine buy point)",
          entryCondition: "Daily close above $77.68",
          volumeTrigger: "≥ 2,340,573 shares (1.4× 50-day avg) — VERIFY ON TRADINGVIEW",
          stop: "$71.85 (~7.5% below pivot)",
          target1: "$93.22 (+20%)",
          target2: "$100.98 (+30%)",
          rr: "2.67:1",
          sizing: "50% at pivot | 30% add +5–7% | 20% third entry"
        },
        alerts: [
          {
            type: "BREAKOUT ALERT",
            price: "$77.69 — close above pivot"
          },
          {
            type: "WARNING LEVEL",
            price: "$73.8 — 5% below pivot"
          },
          {
            type: "STOP ALERT",
            price: "$71.85 — hard stop"
          }
        ],
        notes: "SETUP — NEAR BUY. VCP FORMING (tightness 8.5%, vol drying). Engine pivot $77.68, R:R 2.67:1. Base still forming — wait for the breakout trigger.",
        epsNote: "EPS growth not retrieved this run (FMP quarterly-growth endpoint plan-gated; not in local cache). Technicals are source of truth."
      },
      {
        rank: 25,
        ticker: "JBL",
        name: "Jabil",
        sector: "Technology",
        status: "SETUP — NEAR BUY",
        techScore: "8/8",
        dataDate: "Cache, Jun 12, 2026",
        technical: [
          {
            metric: "Price (cache, Jun 12, 2026)",
            value: "$384.82",
            signal: "0.5% below 52w high"
          },
          {
            metric: "50-Day MA",
            value: "$340.36",
            signal: "Price ABOVE 50MA",
            good: true
          },
          {
            metric: "150 / 200-Day MA",
            value: "$272.46 / $257.19",
            signal: "Full stack 50>150>200",
            good: true
          },
          {
            metric: "Extension vs 50MA",
            value: "13.1%",
            signal: "Within buy range",
            good: true
          },
          {
            metric: "RS rank (vs 1500)",
            value: "93",
            signal: "Leader",
            good: true
          },
          {
            metric: "52-Week High / Low",
            value: "$386.64 / $174.85",
            signal: "Pivot near 52w high"
          }
        ],
        entry: {
          pivot: "$386.64 (engine buy point)",
          entryCondition: "Daily close above $386.64",
          volumeTrigger: "≥ 1,612,797 shares (1.4× 50-day avg) — VERIFY ON TRADINGVIEW",
          stop: "$357.64 (~7.5% below pivot)",
          target1: "$463.97 (+20%)",
          target2: "$502.63 (+30%)",
          rr: "2.67:1",
          sizing: "Start 25% (already >10% above 50MA) | scale on confirmation"
        },
        alerts: [
          {
            type: "BREAKOUT ALERT",
            price: "$386.65 — close above pivot"
          },
          {
            type: "WARNING LEVEL",
            price: "$367.31 — 5% below pivot"
          },
          {
            type: "STOP ALERT",
            price: "$357.64 — hard stop"
          }
        ],
        notes: "SETUP — NEAR BUY. VCP FORMING (tightness 13.2%, vol not drying). Engine pivot $386.64, R:R 2.67:1. Base still forming — wait for the breakout trigger.",
        epsNote: "Latest EPS $2.08; YoY ~+136%, sharp reacceleration. Indicative STRONG PASS."
      },
      {
        rank: 26,
        ticker: "WDC",
        name: "Western Digital",
        sector: "Technology",
        status: "EXTENDED — WATCH",
        techScore: "8/8",
        dataDate: "Cache, Jun 12, 2026",
        technical: [
          {
            metric: "Price (cache, Jun 12, 2026)",
            value: "$562.93",
            signal: "6.5% below 52w high"
          },
          {
            metric: "50-Day MA",
            value: "$449.02",
            signal: "Price ABOVE 50MA",
            good: true
          },
          {
            metric: "150 / 200-Day MA",
            value: "$299.94 / $253.61",
            signal: "Full stack 50>150>200",
            good: true
          },
          {
            metric: "Extension vs 50MA",
            value: "25.4%",
            signal: "Extended — wait for base",
            good: false
          },
          {
            metric: "RS rank (vs 1500)",
            value: "99",
            signal: "Leader",
            good: true
          },
          {
            metric: "52-Week High / Low",
            value: "$602.38 / $54.45",
            signal: "Pivot near 52w high"
          }
        ],
        entry: {
          pivot: "$602.38 (engine buy point)",
          entryCondition: "Daily close above $602.38",
          volumeTrigger: "≥ 10,092,989 shares (1.4× 50-day avg) — VERIFY ON TRADINGVIEW",
          stop: "$557.2 (~7.5% below pivot)",
          target1: "$722.86 (+20%)",
          target2: "$783.09 (+30%)",
          rr: "2.67:1",
          sizing: "Start 25% (already >10% above 50MA) | scale on confirmation"
        },
        alerts: [
          {
            type: "BREAKOUT ALERT",
            price: "$602.39 — close above pivot"
          },
          {
            type: "WARNING LEVEL",
            price: "$572.26 — 5% below pivot"
          },
          {
            type: "STOP ALERT",
            price: "$557.2 — hard stop"
          }
        ],
        notes: "EXTENDED — WATCH. VCP NOT YET (tightness 25.3%, vol drying). Engine pivot $602.38, R:R 2.67:1. RS 99 leader but 25.4% above 50MA — do not chase; wait for a base.",
        epsNote: "Latest EPS $8.20; YoY +478% — memory upcycle. Indicative STRONG PASS."
      },
      {
        rank: 27,
        ticker: "STX",
        name: "Seagate",
        sector: "Technology",
        status: "EXTENDED — WATCH",
        techScore: "8/8",
        dataDate: "Cache, Jun 12, 2026",
        technical: [
          {
            metric: "Price (cache, Jun 12, 2026)",
            value: "$931.04",
            signal: "3.7% below 52w high"
          },
          {
            metric: "50-Day MA",
            value: "$714.01",
            signal: "Price ABOVE 50MA",
            good: true
          },
          {
            metric: "150 / 200-Day MA",
            value: "$465.31 / $403.59",
            signal: "Full stack 50>150>200",
            good: true
          },
          {
            metric: "Extension vs 50MA",
            value: "30.4%",
            signal: "Extended — wait for base",
            good: false
          },
          {
            metric: "RS rank (vs 1500)",
            value: "99",
            signal: "Leader",
            good: true
          },
          {
            metric: "52-Week High / Low",
            value: "$966.8 / $123.04",
            signal: "Pivot near 52w high"
          }
        ],
        entry: {
          pivot: "$966.8 (engine buy point)",
          entryCondition: "Daily close above $966.8",
          volumeTrigger: "≥ 5,505,001 shares (1.4× 50-day avg) — VERIFY ON TRADINGVIEW",
          stop: "$894.29 (~7.5% below pivot)",
          target1: "$1160.16 (+20%)",
          target2: "$1256.84 (+30%)",
          rr: "2.67:1",
          sizing: "Start 25% (already >10% above 50MA) | scale on confirmation"
        },
        alerts: [
          {
            type: "BREAKOUT ALERT",
            price: "$966.81 — close above pivot"
          },
          {
            type: "WARNING LEVEL",
            price: "$918.46 — 5% below pivot"
          },
          {
            type: "STOP ALERT",
            price: "$894.29 — hard stop"
          }
        ],
        notes: "EXTENDED — WATCH. VCP NOT YET (tightness 20.6%, vol drying). Engine pivot $966.8, R:R 2.67:1. RS 99 leader but 30.4% above 50MA — do not chase; wait for a base.",
        epsNote: "Latest EPS $3.27; YoY +111%, HDD/AI storage upcycle. Indicative STRONG PASS."
      },
      {
        rank: 28,
        ticker: "SNDK",
        name: "SanDisk",
        sector: "Technology",
        status: "EXTENDED — WATCH",
        techScore: "8/8",
        dataDate: "Cache, Jun 12, 2026",
        technical: [
          {
            metric: "Price (cache, Jun 12, 2026)",
            value: "$1980.1",
            signal: "2.1% below 52w high"
          },
          {
            metric: "50-Day MA",
            value: "$1293.35",
            signal: "Price ABOVE 50MA",
            good: true
          },
          {
            metric: "150 / 200-Day MA",
            value: "$723.9 / $573.06",
            signal: "Full stack 50>150>200",
            good: true
          },
          {
            metric: "Extension vs 50MA",
            value: "53.1%",
            signal: "Extended — wait for base",
            good: false
          },
          {
            metric: "RS rank (vs 1500)",
            value: "99",
            signal: "Leader",
            good: true
          },
          {
            metric: "52-Week High / Low",
            value: "$2021.65 / $39.44",
            signal: "Pivot near 52w high"
          }
        ],
        entry: {
          pivot: "$2021.65 (engine buy point)",
          entryCondition: "Daily close above $2021.65",
          volumeTrigger: "≥ 19,803,921 shares (1.4× 50-day avg) — VERIFY ON TRADINGVIEW",
          stop: "$1870.03 (~7.5% below pivot)",
          target1: "$2425.98 (+20%)",
          target2: "$2628.14 (+30%)",
          rr: "2.67:1",
          sizing: "Start 25% (already >10% above 50MA) | scale on confirmation"
        },
        alerts: [
          {
            type: "BREAKOUT ALERT",
            price: "$2021.66 — close above pivot"
          },
          {
            type: "WARNING LEVEL",
            price: "$1920.57 — 5% below pivot"
          },
          {
            type: "STOP ALERT",
            price: "$1870.03 — hard stop"
          }
        ],
        notes: "EXTENDED — WATCH. VCP NOT YET (tightness 33.5%, vol drying). Engine pivot $2021.65, R:R 2.67:1. RS 99 leader but 53.1% above 50MA — do not chase; wait for a base.",
        epsNote: "Latest EPS $23.03; explosive YoY (NAND upcycle). Indicative STRONG PASS."
      },
      {
        rank: 29,
        ticker: "MU",
        name: "Micron",
        sector: "Technology",
        status: "EXTENDED — WATCH",
        techScore: "8/8",
        dataDate: "Cache, Jun 12, 2026",
        technical: [
          {
            metric: "Price (cache, Jun 12, 2026)",
            value: "$981.61",
            signal: "9.9% below 52w high"
          },
          {
            metric: "50-Day MA",
            value: "$677.65",
            signal: "Price ABOVE 50MA",
            good: true
          },
          {
            metric: "150 / 200-Day MA",
            value: "$449.97 / $381.57",
            signal: "Full stack 50>150>200",
            good: true
          },
          {
            metric: "Extension vs 50MA",
            value: "44.9%",
            signal: "Extended — wait for base",
            good: false
          },
          {
            metric: "RS rank (vs 1500)",
            value: "99",
            signal: "Leader",
            good: true
          },
          {
            metric: "52-Week High / Low",
            value: "$1089.29 / $103.23",
            signal: "Pivot near 52w high"
          }
        ],
        entry: {
          pivot: "$1089.29 (engine buy point)",
          entryCondition: "Daily close above $1089.29",
          volumeTrigger: "≥ 69,003,463 shares (1.4× 50-day avg) — VERIFY ON TRADINGVIEW",
          stop: "$1007.59 (~7.5% below pivot)",
          target1: "$1307.15 (+20%)",
          target2: "$1416.08 (+30%)",
          rr: "2.67:1",
          sizing: "Start 25% (already >10% above 50MA) | scale on confirmation"
        },
        alerts: [
          {
            type: "BREAKOUT ALERT",
            price: "$1089.3 — close above pivot"
          },
          {
            type: "WARNING LEVEL",
            price: "$1034.83 — 5% below pivot"
          },
          {
            type: "STOP ALERT",
            price: "$1007.59 — hard stop"
          }
        ],
        notes: "EXTENDED — WATCH. VCP NOT YET (tightness 27.5%, vol not drying). Engine pivot $1089.29, R:R 2.67:1. RS 99 leader but 44.9% above 50MA — do not chase; wait for a base.",
        epsNote: "Latest EPS $12.07; YoY +623% — HBM/AI memory boom. Indicative STRONG PASS."
      },
      {
        rank: 30,
        ticker: "INTC",
        name: "Intel",
        sector: "Technology",
        status: "EXTENDED — WATCH",
        techScore: "8/8",
        dataDate: "Cache, Jun 12, 2026",
        technical: [
          {
            metric: "Price (cache, Jun 12, 2026)",
            value: "$124.57",
            signal: "6.2% below 52w high"
          },
          {
            metric: "50-Day MA",
            value: "$95.69",
            signal: "Price ABOVE 50MA",
            good: true
          },
          {
            metric: "150 / 200-Day MA",
            value: "$60.39 / $53.5",
            signal: "Full stack 50>150>200",
            good: true
          },
          {
            metric: "Extension vs 50MA",
            value: "30.2%",
            signal: "Extended — wait for base",
            good: false
          },
          {
            metric: "RS rank (vs 1500)",
            value: "99",
            signal: "Leader",
            good: true
          },
          {
            metric: "52-Week High / Low",
            value: "$132.75 / $18.97",
            signal: "Pivot near 52w high"
          }
        ],
        entry: {
          pivot: "$127.6 (engine buy point)",
          entryCondition: "Daily close above $127.6",
          volumeTrigger: "≥ 193,760,338 shares (1.4× 50-day avg) — VERIFY ON TRADINGVIEW",
          stop: "$118.03 (~7.5% below pivot)",
          target1: "$153.12 (+20%)",
          target2: "$165.88 (+30%)",
          rr: "2.67:1",
          sizing: "Start 25% (already >10% above 50MA) | scale on confirmation"
        },
        alerts: [
          {
            type: "BREAKOUT ALERT",
            price: "$127.61 — close above pivot"
          },
          {
            type: "WARNING LEVEL",
            price: "$121.22 — 5% below pivot"
          },
          {
            type: "STOP ALERT",
            price: "$118.03 — hard stop"
          }
        ],
        notes: "EXTENDED — WATCH. VCP NOT YET (tightness 29.8%, vol not drying). Engine pivot $127.6, R:R 2.67:1. RS 99 leader but 30.2% above 50MA — do not chase; wait for a base.",
        epsNote: "Latest EPS -$0.73; losses narrowing YoY; turnaround, not yet profitable. Indicative WEAK."
      }
    ],
    riskRules: ["Regime gate first: no new buys unless the market is in a confirmed uptrend (it is today).", "Buy only at/above the engine pivot on a volume expansion (≥1.4× 50-day average). Never chase extended names.", "Size in tranches 50/30/20; start at 25% if already >10% above the 50DMA. Never average down.", "Hard stop ~7.5% below the pivot; honor it intraday.", "v2 trend exit is buffered: act only on a WEEKLY close >3% below the 50DMA, not a daily dip.", "Sell into strength near +20%/+30%; trail the remainder.", "Re-entry cooldown ~4–6 weeks after a stop/exit; require a fresh higher base.", "Treat this as an idea generator, not a buy list — a backtest of this screen lagged buy-and-hold."],
    verification: "Confirm current price, 50/150/200MA, the base/pivot, and a real volume-expansion breakout on TradingView 1D before any trade. Prices are 2026-06-12 close from a local cache; pivots can be stale by the time you trade.",
    disclaimer: "For informational and educational purposes only. Not financial advice."
  },

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
