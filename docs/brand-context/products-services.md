# VEEMAP Technologies — Products, Services & Case Studies

Source-cited factual reference. Paths are relative to `V:\VEEMAP\Raw_Data\`.

## Capability continuum: semi-auto → fully automatic → complete plant

| Tier | Description | Best fit |
|------|-------------|----------|
| **Semi Auto** | "Semi-automatic assembly platforms includes customized industrialization solutions with laboratory benches... an ideal fit for minimizing initial investment expenses without compromising on final quality." | Lower-volume / pilot production, cost-sensitive launches |
| **Fully Automatic Line** | "Fully automated solutions with indexed or continuous motion, support key productivity challenges by optimizing assembly operations for simple or highly complex devices." | High-speed mass production; high mix-flexibility lines |
| **Complete Plant** | Full plant with multiple machines, conveyors, quality stations, IoT, delivered turnkey (e.g. the Hub Motor Complete Assembly Plant). | OEMs wanting a complete "plug-and-produce" facility |

Source: `Website_data/veemap_context/02_CAPABILITIES.md`; `Website_data/VEEMAP_Company_Context/03_capabilities_and_services.md`; matches PPTX "ABOUT US" capability block in `Website_data/veemap_context/PPTX_Auto_FullText.md` (slide 3). The rebuilt web deck frames this as "From one station to the complete plant" (`PPT/company-web-presentation.html`, slide 3).

## Research & Development
> "R&D is one of the key contributors which allows us to achieve faster and more efficient manufacturing times. Innovation and new ideas are always welcome and given the chance to flourish."

Source: `Website_data/veemap_context/02_CAPABILITIES.md`. R&D Lab established 2019 per journey timeline (`Website_data/VEEMAP_Company_Context/02_history_and_journey.md`).

## Data Monitoring & IoT Integration (service description)
> "We provide IoT Integration in our projects as per customer needs: integrated data monitoring and cloud data retrieval which allows us to derive analytical insights as well as keep the data secure under firewalls. A cloud-based solution also introduces scalability as per need. Dashboards are made as per user requirement and use case."

Source: `Website_data/veemap_context/02_CAPABILITIES.md`; `Website_data/VEEMAP_Company_Context/03_capabilities_and_services.md`.

Deliverables per project (consolidated): HMI for local dashboard viewing · Cloud dashboards (Zenon / Azure) · 200+ sensors per line (typical) · Firewalled/secure data pipelines · Real-time analytics + traceability (per-part serial number, batch, product ID). Source: `Website_data/VEEMAP_Company_Context/03_capabilities_and_services.md`.

### IoT technology stack
| Layer | Options |
|-------|---------|
| PLC | Siemens · Allen-Bradley (AB) · Keyence · Omron · Mitsubishi |
| SCADA / HMI | Zenon (XENON in raw PPTX text) · Azure · WinCC |
| IoT comms | MQTT · EtherNet/IP |
| Edge / cloud | Azure IoT · Keyence KV-8000 PLC · EXOR / EXVIEW703 |

Source: `Website_data/veemap_context/PPTX_Auto_FullText.md` (slides 12, 19); `PPT/company-web-presentation.html` (slide 23) renders the flow explicitly as **Keyence KV-8000 PLC → EtherNet/IP → EXOR EXVIEW703 → MQTT → AZURE (cloud)**.

IoT advantages (verbatim from source): Scalability — "works across small setups to enterprise-level IoT infrastructures" · Real-time Data Processing — "enables live monitoring and analytics for quick decision-making" · Security — "built-in encryption, user authentication, and access control" · Edge & Cloud Compatibility · Automation & Control · Visualization & Dashboards. Source: `Website_data/veemap_context/PPTX_Auto_FullText.md` (slide 19).

## High-Speed Parts Manufacturing (flagship service)
> "At the forefront of factory automation, our High-Speed Parts Manufacturing service is designed to meet the demands of modern production lines. With machines engineered to push out high-speed parts per minute, we're dedicated to innovation and tackling new challenges."

Source: `Website_data/veemap_context/01_HOME.md`.

## Engineering scope / delivery process
1. Design (mechanical, electrical, control system)
2. Manufacturing — in-house at the Manesar factory
3. Assembly — assembly team + test benches
4. Trials — production testing with the customer before sign-off
5. After-Sales Support

Pipeline phases (typical weeks per phase): **RFQ 8 · Design 6 · Mfg 3 · Assy 3 · Trial 2** (total ~22 weeks / ~5–6 months from RFQ to trial). Standard delivery cadence for the bulk of projects is 3–4 months (191 of 236 projects). Source: `Website_data/veemap_context/PPTX_Auto_FullText.md` (slide 10); `Website_data/VEEMAP_Company_Context/05_projects_and_statistics.md`.

---

## Case studies (with proof metrics)

### 1. Hub Motor Complete Assembly Plant — BELRISE (EV)
- Task: multiple models (10–17 inch), 15-part assembly + QC, output **1 part/minute**
- Implementation: **24 machines**, 2 linear chain conveyors, **20 stations**, realized within **5 months**
- Special feature: quickly convertible to another hub-motor type
- USP framing: "Complete plant · Flexible line — 10"–17" hub motor in a single line"

Source: `Website_data/veemap_context/PPTX_Auto_FullText.md` (slide 18); `Website_data/VEEMAP_Company_Context/05_projects_and_statistics.md`; rebuilt as "Case 01 / EV" in `PPT/company-web-presentation.html` (slide 12), which additionally displays these as discrete metric cards (10–17 in / 15 parts / 24 machines / 20 stations / 5 months / 1 per min).

### 2. DNKI Pipe Assembly Machine (Automotive)
- **2.5-second cycle time**, **256 models** supported on one machine, servo-based automatic changeover with variable conveyor height and width
- Framed as "Case 02 / Automotive"

Source: `PPT/company-web-presentation.html` (slide 13). `PPT/README.md` corroborates: "13 | DNKI pipe assembly machine ... 2.5-sec cycle and 256-model claim retained." No raw PPTX text-slide equivalent was found for this specific case (it derives from an image-heavy source slide the README's audit table describes as slide 13 of the original deck). See company-overview.md "Needs Confirmation" for a possible cycle-time conflict with the "SFA 2 DNKI, 3 sec CT" journey milestone.

### 3. DENSO Kirloskar precision inspection machines (Automotive)
- **3-second cycle**, multiple-dimension inspection, vision & cobot part inspection (machine A)
- **7-second cycle**, "SFA-II heater automatic dimension inspection machine" (machine B)
- Caption: "Source project: DENSO Kirloskar"

Source: `PPT/company-web-presentation.html` (slide 14). `PPT/README.md` audit table, original slide 14: "DENSO Kirloskar precision inspection machines... 5 machine, rig, drawing and scan images... Consolidated into a cleaner three-panel technical proof slide."

### 4. Legrand — Pivot Terminal Screwing Machine (Electrical / Consumer Goods)
- **75 ppm**
- Automatic screw feeding system · torque control by servo motor · Smart CKD precise rotary indexer

Source: `PPT/company-web-presentation.html` (slide 15, "Case 04 / Electrical — Pivot terminal screwing machine — Legrand"). The customer name "Legrand" and the 75 ppm figure appear only in the rebuilt web deck; the live website's Case Study page (`Website_data/veemap_context/03_CASE_STUDY.md`) and the old-site scrape (`Website_data/veemap_site/extracted/homeblank.txt`) describe the same machine (identical feature bullets: Automatic Screw Feeding System / Torque control by servo motor / Smart CKD Precise rotary indexer) but do **not** name a customer or a speed figure.

### 5. Endotracheal (ET) Tube Assembly Automation — STERIMED (Medical/Pharma)
- Process: Cutting → Notching → Printing → Tip forming
- Type: Fully Auto · Speed **25–30 ppm** · Operators **1** (part feeding) · Lead time **8 weeks** · Size **2.0 × 1.8 × 1.8 m**
- Optional features: IoT, Traceability, Modular system, Server
- PLC: Siemens / AB / Keyence / Omron / Mitsubishi · SCADA: Zenon (Xenon) / Azure / WinCC
- USP framing: "Lumen hole (0.7mm) alignment; Multi model" (customer: STERIMED)

Source: `Website_data/veemap_context/PPTX_Auto_FullText.md` (slide 12); `Website_data/VEEMAP_Company_Context/05_projects_and_statistics.md`; featured machine on the live Pharmaceutical page (`Website_data/veemap_context/04_PHARMACEUTICAL.md`); rebuilt as "Medical / 01" in `PPT/company-web-presentation.html` (slide 17).

### 6. IV Drip Chamber Machine (Medical/Pharma)
- Process: 6-part assembly → gluing → leak test → final inspection
- Type: Fully automatic · Speed **100 ppm** · Operators **1** · Lead time **20 weeks** · Size **7.0 × 5.5 × 1.9 m**

Source: `Website_data/veemap_context/PPTX_Auto_FullText.md` (slide 16); rebuilt as "Medical / 02" in `PPT/company-web-presentation.html` (slide 18).

### 7. Spine Needle Assembly Machine (Medical/Pharma)
- Process: 5-part assembly → orientation → gluing → curing → vision inspection → cleaning → final inspection
- Type: Fully Automatic · Speed **40 ppm** · Operators **1** · Lead time **20 weeks**
- **Size: omit from copy.** Raw PPTX text reads `3.8*5.2.2.0` (malformed); the rebuilt web deck's guess of 3.8 × 5.2 × 2.0 m was not confirmed. **Resolved 2026-08-21: drop the dimension claim entirely rather than publish an unverified number.**

Source: `Website_data/veemap_context/PPTX_Auto_FullText.md` (slide 17); `PPT/README.md` ("Size string is malformed in the source and is flagged for verification"); `PPT/company-web-presentation.html` (slide 19).

### 8. Electronics automation (collage — no single named case)
Product handling · assembly · soldering · inspection, covering: electrical switch product, switch product portfolio, circuit breaker, manual soldering, robotic soldering.

Source: `PPT/company-web-presentation.html` (slide 20); `PPT/README.md` original slide 19 audit note: "Automation for electronics components... 6 product and process images... Image collage had no narrative; reorganized into an editorial capability proof."

### 9. Robotic Soldering Machine (Electronics)
- Core components: 4-axis robotic arm · iron-tip, laser or mini-wave soldering head · PC or embedded controller · optional vision positioning and inspection · solder-wire or paste feeder · fume extraction
- Benefits: repeatability · consistent joints · higher speed · reduced fatigue · conveyor integration

Source: `PPT/company-web-presentation.html` (slide 21). `PPT/README.md` original slide 20 audit note: "Robotic soldering machine, components and advantages... Paragraph-heavy; rebuilt into machine, components and outcomes" — the component/benefit lists above are the rebuilt deck's more detailed treatment; no equivalent itemized list was found in the raw PPTX text extraction.

### 10. Fully Automatic Switch Assembly Line (Electronics)
- Flow: Feed → Assemble → Test → Inspect → Mark
- **20–60 switches/min*** (marked in source as "*Depending on design") · **1 operator/line***
- Testing: continuity, insulation-resistance and contact-resistance testing · pass/fail sorting · vision inspection · PLC/HMI · optional SCADA/MES

Source: `PPT/company-web-presentation.html` (slide 22). `PPT/README.md` original slide 21 audit note: "Fully automatic switch assembly line... Severely overcrowded; converted to feed → assemble → test → inspect → mark flow." The 20–60 switches/min and 1 operator/line figures appear only in the rebuilt web deck (marked there as design-dependent, not a fixed spec).

### 11. RFID Tag Processing Machine (Electronics / Traceability)
Five-stage flow: **01 Apply tag → 02 Encode data → 03 Verify read/write → 04 Reject NG → 05 Link to ERP**. Tag types: label, sticker, or embedded. Data encoded: serial number, batch info, product ID. Live tracking integration with database/ERP.

Source: `Website_data/veemap_context/PPTX_Auto_FullText.md` (slide 20); rebuilt as a five-stage diagram in `PPT/company-web-presentation.html` (slide 24).

### 12. Dispensing Pumps Automation Line (Consumer Goods)
- 11-part assembly + QC
- Output: **160 parts/minute** — resolved 2026-08-21 (the live website's "+122 P.P.M" figure is superseded, do not use)
- Implementation: linear-link conveyor, **50 stations**, **11 tracks**, realized within **6 months**
- 200+ sensors, Zenon dashboards, Industry 4.0 integration
- Special feature: quickly converted to another pump type; cam-disc-operated stations synchronized with Industry 4.0 programming

Source: `Website_data/veemap_context/PPTX_Auto_FullText.md` (slide 13) — "160 parts/minute"; confirmed correct over `Website_data/veemap_context/03_CASE_STUDY.md` / `Website_data/veemap_site/extracted/homeblank.txt`'s "+122 P.P.M" (old live site, superseded); rebuilt as "Case 05 / Consumer Goods" in `PPT/company-web-presentation.html` (slide 25), which also uses 160 ppm.

### 13. Other machines with specs (PPTX-only, no dedicated case-study slide found in the web deck)
| Machine | Process | Type | Speed | Operators | Lead time | Size (L×W×H, m) |
|---|---|---|---|---|---|---|
| 3 & 2 Way Valve Assembly M/C | 5-part assembly → Tightening → Leak Testing → Final Inspection | Fully Automatic | 60 ppm | 1 (part feeding) | 12–14 weeks | 3.3 × 4.6 × 1.8 |
| Insulin Pen Assembly Line | 4-part assembly → pressing → inspection → orientation → final inspection | Fully Automatic | 160 ppm | 1 | 24 weeks | 5.0 × 5.0 × 2.0 |

Source: `Website_data/veemap_context/PPTX_Auto_FullText.md` (slides 14–15); `Website_data/veemap_context/COMPANY_CONTEXT.md`.

### 14. Cap Liner Automation Line (Consumer Goods — website Case Study only, not in PPTX text)
- 2-part assembly + quality control, target output **+250 PPM**
- Performance: Rotary Indexing, **8 stations**, 1 track
- Modularity: can be quickly converted to another cap type

Source: `Website_data/veemap_context/03_CASE_STUDY.md`; `Website_data/veemap_site/extracted/homeblank.txt` (old live site, identical text). Also referenced as a journey-timeline milestone ("Cap liner insertion (250 ppm)", 2019/2021 per differing year attributions — see company-overview.md).

### 15. Automobile-sector machine list (old live site only — not found in any other source)
The old live Wix site's Automobile page listed these named machines with no further detail (specs, customers, or case-study depth not given anywhere in the source material):
- Robotic Vehicle Hood Polishing
- Radiator Assembly Line
- Piston Vision Inspection Machine
- Fuel Rail Assembly Line
- Engine Number Inspection Machine
- Car Brake Shoe Inspection Machine
- Big Piston Liner Inspection
- Complete Clutch Assembly Line
- Brake Disc Vision Inspection Machine

Source: `Website_data/veemap_site/extracted/homeblank-4-1-1.txt` ("Automobile part manufacturing solutions... We provide complete solutions to all your automobile manufacturing requirements. From consultation to making special purpose machines and assembly lines, we have the perfect solution for you."). This is a live-site-only page with no dedicated content anywhere else in Raw_Data — none of the other Website_data folders (veemap_context, veemap_redesign) reproduce this list.

### 16. Consumer Goods-sector positioning (old live site only)
> "Packaging and manufacturing solutions. We serve a wide variety of consumer goods clients from manufacturers of bottles, pumps, containers to clients who require automated packaging solutions. Contact us to find the perfect solution for your manufacturing needs. Our machines not only fulfill their purpose but push boundaries when it comes to productivity and quality."

Source: `Website_data/veemap_site/extracted/homeblank-4-1-2.txt`. Also a live-site-only page with no equivalent content in the other Website_data folders.

---

## Needs Confirmation — RESOLVED 2026-08-21

### 1. Dispensing pump line output: 160 ppm vs 122 ppm — RESOLVED: 160 ppm
- Confirmed correct: `Website_data/veemap_context/PPTX_Auto_FullText.md` (slide 13): "output 160 parts/minute."
- Superseded: `Website_data/veemap_context/03_CASE_STUDY.md` / `Website_data/veemap_site/extracted/homeblank.txt` (old live website) — "+122 P.P.M." Do not use.

### 2. "USP of VEEMAP Machines" table: customer/project list differs between the raw PPTX table and the rebuilt web deck's USP grid — RESOLVED: HONDA confirmed as a client
- `Website_data/veemap_context/PPTX_Auto_FullText.md` (slide 11) lists six USP rows: **STERIMED** (ET Tube), **APTAR** (SWDT assembly), **STRYKER** (cut-to-length wire), **RIEKE** (2CC Singolo pump), **MARELLI** (fuel injector), **BELRISE** (hub motor).
- `PPT/company-web-presentation.html` (slide 10, "Proof points built into real machines") instead lists: **DNKI** (heater-core assembly), **STRYKER**, **HONDA** (piston-ring inspection — vision inspection of four parts simultaneously), **RIEKE**, **MARELLI**, **STERIMED**.
- **HONDA is confirmed as a genuine client** — include it in copy. The two lists together (not either one exclusively) represent the full known set of named USP customers: STERIMED, APTAR, STRYKER, RIEKE, MARELLI, BELRISE, DNKI, HONDA.

### 3. Spine needle machine dimension string is malformed in the source *(carried forward from PPT/README.md)* — RESOLVED: drop the claim
- Raw source (`Website_data/veemap_context/PPTX_Auto_FullText.md`, slide 17): `3.8*5.2.2.0` (malformed, unrecoverable).
- **Do not publish a dimension figure for this machine.** The rebuilt deck's 3.8 × 5.2 × 2.0 m guess is not to be used. All other specs for this case study (process, type, speed, operators, lead time) remain valid and sourced.
