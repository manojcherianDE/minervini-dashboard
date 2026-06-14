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
