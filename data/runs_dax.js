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
