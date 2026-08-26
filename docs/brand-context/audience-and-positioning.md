# VEEMAP Technologies — Audience & Positioning

Source-cited factual reference. Paths are relative to `V:\VEEMAP\Raw_Data\`.

## Target industries / sectors (5 sectors served)

| Sector | What VEEMAP builds there | Website page status |
|--------|---------------------------|---------------------|
| **Pharmaceutical / Medical** | ET tube assembly, IV drip chamber, spine needle, insulin pen, SWDT, 3&2-way valve, pilot check valve — devices needing 100% safety/quality compliance | Dedicated page (`/blank-4`), has content |
| **EV Solutions** | Complete EV motor manufacturing plants, controllers, chargers; Hub motor plant (10–17") is flagship | Dedicated page (`/blank-4-1`), has content |
| **Automotive** | Fuel injector lines, DENSO/DNKI radiator & pipe assembly and precision inspection, clutch assembly (FCC), Singolo pump lines, plus (old-site-only) Robotic Vehicle Hood Polishing, Radiator Assembly Line, Piston Vision Inspection, Fuel Rail Assembly Line, Engine Number Inspection, Car Brake Shoe Inspection, Big Piston Liner Inspection, Complete Clutch Assembly Line, Brake Disc Vision Inspection | Nav link exists; page found only in old-site scrape (`Website_data/veemap_site/extracted/homeblank-4-1-1.txt`) — described elsewhere as having "no dedicated content" in the newer crawls |
| **Consumer Goods** | Dispensing pumps, cap liner insertion, 3&2-way valve assembly, pivot terminal screwing; old-site copy: "Packaging and manufacturing solutions... bottles, pumps, containers... automated packaging solutions" | Nav link exists; page found only in old-site scrape (`Website_data/veemap_site/extracted/homeblank-4-1-2.txt`) |
| **Electronics** | RFID tag processing, robotic soldering, fully automatic switch assembly line, circuit-breaker automation | No dedicated live-site page found in any source; content exists only in the PPTX/web deck |

Source: `Website_data/VEEMAP_Company_Context/04_markets_and_clients.md`; `Website_data/veemap_context/01_HOME.md` ("Markets we service": Special purpose parts Manufacturing, EV Solutions, Automobile, Pharma Medical, Consumer Goods); `Website_data/veemap_site/extracted/homeblank-4-1-1.txt`; `Website_data/veemap_site/extracted/homeblank-4-1-2.txt`.

> Note: `Website_data/VEEMAP_Company_Context/04_markets_and_clients.md` states Automobile and Consumer Goods have "no dedicated page yet" (based on the newer `veemap_context`/`veemap_redesign` crawls, which only captured Pharmaceutical and EV as content pages). The **old-site scrape** in `Website_data/veemap_site/` shows these two pages *did* exist with real (if brief) content at some point. This is not a contradiction so much as a coverage gap between crawls — flagged for the redesign team's awareness, not a factual dispute.

## Reach

**52 clients in India · 3 clients overseas** (55 total). Source: `Website_data/veemap_context/PPTX_Auto_FullText.md` (slide 8, "INDIA-52 / OVERSEAS-03"); reproduced throughout `Website_data/VEEMAP_Company_Context/` and `Website_data/veemap_context/` files. Also surfaced as a metric callout on the rebuilt web deck's hero slide (`PPT/company-web-presentation.html`, slide 1: "236 projects / 52 India / 03 overseas").

## Named clients

| Client | Sector | Project / notes |
|--------|--------|------------------|
| **DENSO** | Automotive | Fastest radiator assembly machine — SFA 2 DNKI (Thailand export: "1st Machine export to DENSO Thailand") |
| **RIEKE** | Consumer Goods | Asia's fastest Singolo pump line — 170 ppm (Vietnam export) |
| **STERIMED** | Medical/Pharma | ET Tube assembly — 0.7 mm lumen-hole alignment, multi-model |
| **APTAR** | Consumer Goods / Medical | SWDT assembly — 12 models on one rotary feeder, 20-min changeover (per PPTX USP table only — see products-services.md Needs Confirmation) |
| **STRYKER** | Medical | Cut-to-length wire automation — PTFE film protection while forming a bullet-shaped end |
| **MARELLI** | Automotive | Fuel injector line — precision assembly + flow-rate testing + advanced traceability |
| **BELRISE** | EV | Hub motor assembly line — complete plant, 10"–17" hub motors on one line (per PPTX USP table only — see products-services.md Needs Confirmation) |
| **Legrand** | Electrical/Consumer Goods | Pivot terminal screwing machine, 75 ppm (rebuilt web deck only) |
| **DNKI** *(likely DENSO Kirloskar — see company-overview.md interpretive note)* | Automotive | Pipe assembly machine (2.5 sec cycle, 256 models); heater-core assembly (per rebuilt web deck's USP grid) |
| **HONDA** | Automotive | Piston-ring inspection — vision inspection of four parts simultaneously (confirmed client, 2026-08-21) |
| **Hollister** | Medical | Client logo present in assets (`hollister.svg` / `holister.png`); appears on Pharmaceutical page logo strip |
| **FCC** | Automotive | Clutch assembly line (2018 partnership milestone) |
| **Keyence** | Technology partner | Sensor / PLC / robotics partnership since 2018; also cited under "Way Forward" competency training plans |
| **Manjushree Technopack** | Consumer Goods (low confidence) | Name appears only as AI-generated alt-text on a client-logo image ("Picture14.jpg") in the PPTX's client-portfolio slide — not corroborated by any other source. Treat as unverified. |

Source: `Website_data/VEEMAP_Company_Context/04_markets_and_clients.md`; `Website_data/veemap_context/COMPANY_CONTEXT.md`; `Website_data/veemap_context/QUICK_REFERENCE.md`; `Website_data/veemap_context/PPTX_Auto_FullText.md` (slides 8, 11); `PPT/company-web-presentation.html` (slides 10, 15); Manjushree Technopack from `Website_data/veemap_context/PPTX_Auto_FullText.md` (slide 8 image alt-text).

## The six customer/project USPs (PPT slide 11)

| # | Project | Customer | USP |
|---|---------|----------|-----|
| 1 | ET Tube assembly | STERIMED | Lumen hole (0.7mm) alignment; Multi model |
| 2 | SWDT assembly m/c | APTAR | 12 models single in rotary feeder with quick changeover 20 min |
| 3 | Cut to length wire Automation | STRYKER | 19µ PTFE film protection while creating bullet-shape end |
| 4 | 2CC Singolo pump assembly line | RIEKE | Asia's fastest line — 170 parts/min, Industry 4.0 (SCADA system); flexibility to other model conversion (3 months) |
| 5 | Fuel injector Line | MARELLI | Precise assembly & testing (flow rate); advanced-level traceability |
| 6 | Hub motor assembly Line | BELRISE | Complete plant; flexible line — 10"–17" hub motor in single line |

Source: `Website_data/veemap_context/PPTX_Auto_FullText.md` (slide 11, raw table); identically reproduced in `Website_data/VEEMAP_Company_Context/05_projects_and_statistics.md` and `Website_data/veemap_context/COMPANY_CONTEXT.md`. The "19µ" reading is confirmed correct (rather than the "19m" that appears in the plain-text PPTX extraction) by `PPT/README.md`: "'Reike/Rieke' spelling is inconsistent; 19µ claim retained exactly," and by `PPT/company-web-presentation.html` (slide 10), which renders it as "19µ PTFE-film protection."

**Resolved 2026-08-21 (see products-services.md #2)** — the rebuilt web deck's alternate six-card grid (dropping APTAR and BELRISE, adding DNKI and HONDA) is not a replacement for this table; both sets of named customers are confirmed genuine and should be treated as one combined list.

## Market / project statistics

- **Projects delivered: 236** · **Active pipeline: 22**
- Team and revenue figures: internal reference only — **do not publish on the website** (client decision 2026-08-21, see company-overview.md). Project counts, pipeline, and sector/duration/output breakdowns below are fine for public use.

### By Configuration (236 delivered)
| Configuration | Count |
|---|---|
| Semi Auto | 200 |
| Automatic | 30 |
| Full Line | 5 |
| Complete Plant | 1 |

### By Sector
The raw PPTX chart is headed "% By Sector" but lists: Medical/Pharma 6.0, Consumer Goods 15.0, Automotive 150.0, EV Solution 49.0, Electronics 16.0. These five numbers sum to exactly 236 (6+15+150+49+16 = 236) — matching "Projects Delivered: 236" precisely. This strongly suggests the chart's underlying values are **project counts by sector**, not percentages, despite the "%" label in the source deck; the rebuilt web deck's own sector-bar visualization (`PPT/company-web-presentation.html`, slide 9) uses this same reading, converting the counts to bar-widths as percentages of 236 (e.g. Automotive 150/236 = 63.56%, EV 49/236 = 20.76%, Electronics 16/236 = 6.78%, Consumer Goods 15/236 = 6.36%, Medical/Pharma 6/236 = 2.54%).

| Sector | Count (per this reading) | Share of 236 |
|---|---|---|
| Automotive | 150 | 63.6% |
| EV Solution | 49 | 20.8% |
| Electronics | 16 | 6.8% |
| Consumer Goods | 15 | 6.4% |
| Medical/Pharma | 6 | 2.5% |

Source: `Website_data/veemap_context/PPTX_Auto_FullText.md` (slide 10, raw chart data table); `PPT/company-web-presentation.html` (slide 9, bar visualization using the same five numbers). **This is presented here as the most internally-consistent reading of the source data (see Needs Confirmation below for the alternate readings other synthesis files proposed).**

### By Duration (months to deliver)
| Duration | Projects |
|---|---|
| < 3 months | 23 |
| 3–4 months | 191 |
| 4–6 months | 15 |
| 6–8 months | 7 |

81% of projects deliver in the 3–4 month window.

### By Output (Parts Per Minute achieved)
| Output range (PPM) | Projects |
|---|---|
| < 50 | 195 |
| 50–100 | 34 |
| 100–200 | 5 |
| 200–400 | 1 |
| > 400 | 1 |

### Project pipeline (22 active) — phase weeks
| Phase | Weeks |
|---|---|
| RFQ | 8 |
| Design | 6 |
| Mfg | 3 |
| Assy | 3 |
| Trial | 2 |

Source (all four breakdowns): `Website_data/veemap_context/PPTX_Auto_FullText.md` (slide 10); `Website_data/VEEMAP_Company_Context/05_projects_and_statistics.md`.

## Competitive differentiators / positioning summary

- **Indian-owned, zero technology import** — "Make in India" positioning, indigenous automation capability.
- **High-speed specialist** — builds "Asia's fastest" assembly lines (Singolo pump 150–170 ppm across different years/claims; cap liner 250 ppm).
- **Modular & flexible** — many lines convertible to a different product variant within weeks to months (e.g. Singolo pump line convertible "in 3 months"; hub motor plant "quickly convertible to another hub motor type").
- **Complete-plant capability** — not just single machines; delivers full plants (Hub Motor plant: 24 machines, 20 stations, 1 ppm, 5 months).
- **Industry 4.0 native** — IoT (Azure + Zenon), 200+ sensors typical per line, traceability, dashboards.
- **Evidence of trust** — 236 projects delivered, 55 total clients (52 India + 3 overseas), exports to DENSO Thailand and RIEKE Vietnam.

Source: `Website_data/VEEMAP_Company_Context/01_company_profile.md` ("Key differentiators (summary)"); corroborated by the case-study/USP data above.

## Needs Confirmation — RESOLVED 2026-08-21

### 1. "REIKE" vs "RIEKE" spelling *(carried forward from PPT/README.md — one of the four required flags)* — RESOLVED: RIEKE
- Confirmed correct: **RIEKE**. "REIKE" (as it appears once in the raw PPTX USP table, slide 11) is a typo — do not use it anywhere in the redesigned site.

### 2. Sector-mix chart: percentages vs counts, and the "Automotive 150" figure — RESOLVED: project count reading
- Confirmed: the five sector values (Medical/Pharma 6, Consumer Goods 15, Automotive 150, EV Solution 49, Electronics 16) are **raw project counts**, not percentages, despite the source chart's "%" label — they sum exactly to the 236 total projects delivered. The "By Sector" table above (counts + derived share of 236) is the correct reading to use.
