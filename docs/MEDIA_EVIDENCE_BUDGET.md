# Media Evidence Budget

**Status:** Phase 0 deliverable

**Date:** 2026-08-29

**Scope:** Every asset tracked under `media/`, assessed against the five sector
pages and the shared routes. Governs which pages can be carried by existing
media and which need authored substitutes.

Authority: `docs/WEBSITE_IMPLEMENTATION_PLAN.md`, Sections 9 and 17. This
document does not relax anything there. Nothing listed as usable below is
approved for publication until it has been through the Section 9 derivative
workflow.

## Method

159 tracked files. Assessed on filename, pixel dimensions and sector fit. The
124 `slide*_img*` files carry no descriptive name and were not classified; they
need a visual pass before any of them can be budgeted.

Resolution matters because it decides what a page can do with an asset:

| Band | Pixels | What it can carry |
| --- | --- | --- |
| Feature | 2000px wide or more | Full-bleed or half-viewport section |
| Section | 1200–2000px wide | Contained figure, two-column block |
| Card | 700–1200px wide | Grid card, inline thumbnail |
| Unusable | below 700px wide | Nothing at section scale; reference only |

## Per-sector budget

### Medical & Pharmaceutical — video-led

| Asset | Size | Band | Use |
| --- | --- | --- | --- |
| `ET_assembly.MOV`, `PPt_Data/assets/et-assembly.mov` | video | Feature | Lead sector motion |
| `PPt_Data/assets/motion-et-assembly.png` | 3840×2160 | Feature | Poster for the above |
| `spine-needle-product.jpg` | 1500×1500 | Section | Product-solution module |
| `iv-drip-machine.jpg` | 813×543 | Card | Product-solution module |
| `spine-needle-machine.jpg` | 759×543 | Card | Product-solution module |
| `et-tube-machine.jpg` | 773×507 | Card | Product-solution module |
| `et-tube-product.png` | 906×513 | Card | Product-solution module |
| `iv-drip-product.jpg` | 513×289 | Unusable | Reference only |

**Finding: the flagship sector has the weakest still photography in the set.**
Every machine still except the poster frame sits at card scale or below. The
page cannot be built as a photographic showcase.

It can be built as intended anyway, because the ET assembly footage is the
strongest media VEEMAP has and Section 6 already allocates it here. Budget: one
video feature, one dashboard-motion feature, and a product-solution navigator
whose modules use card-scale stills, with authored diagrams for the four
product families that have no imagery at all — insulin pen, 3-way and 2-way
valve, pilot check valve, SWDT.

### Electronics — strongest stills

| Asset | Size | Band |
| --- | --- | --- |
| `terminal-screwing-machine.jpg` | 3203×2475 | Feature |
| `robotic-solder-machine.jpg` | 2135×1650 | Feature |
| `rfid-machine.jpg` | 2135×1650 | Feature |
| `smartscrewiing.jpg` | 1845×1885 | Section |
| `robotic-soldering.jpg` | 1280×720 | Section |
| `switch-product.png` | 1000×1000 | Card |
| `switch-assembly-line.png` | 884×743 | Card |
| `robotic-solder-front.jpg`, `switch-section.png`, `switch-portfolio.jpg`, `breaker-product.jpg`, `manual-soldering.jpg`, `terminal-screwing-process.png` | small | Card or below |

Three feature-band assets. No gap. This is the sector with the most media
headroom and the least legacy copy, so the constraint here is writing, not
media.

### Automotive — inspection-led, not thin

| Asset | Size | Band |
| --- | --- | --- |
| `pipe-assembly-machine.jpg` | 3203×2475 | Feature |
| `inspection-machine-a.jpg` | 3203×2475 | Feature |
| `inspection-machine-b.jpg` | 3201×2473 | Feature |
| `inspection-scan.png` | 938×676 | Card |
| `inspection-rig.png` | 834×624 | Card |
| `heater-core.png` | 466×688 | Unusable |

**Finding: Automotive is not media-poor. It was mis-scoped.** Three
feature-band assets, two of them inspection rigs — and the legacy Automobile
page listed nine machines, six of which are inspection systems: piston vision,
engine number, brake shoe, big piston liner, brake disc, plus hood polishing
and three assembly lines. Reframe the page around inspection and verification
rather than around assembly, and the existing media carries it comfortably.

The two inspection machines share a resolution with the pipe assembly machine,
which suggests one shoot. Confirm they are visually distinct before placing all
three on one page.

### Consumer Goods — one strong still plus hard numbers

| Asset | Size | Band |
| --- | --- | --- |
| `dispensing-pump-line.jpg` | 1752×1239 | Section |
| `pump assembly machine.svg` | vector | Any |
| `Rieke_pump.png` | 643×371 | Unusable, and customer-named |

Thin photographically, but the legacy Case Study page supplies the most
concrete production evidence anywhere in the source record — a cap liner line
above 250 parts per minute on an 8-station rotary indexer, and a dispensing
pump line assembling 11 parts above 122 parts per minute across 50 stations on
11 tracks with more than 200 sensors.

Budget this as a numbers-and-diagram page: the vector machine drawing as the
feature, the pump line photograph as the supporting figure, and an authored
process diagram for the station and track architecture. The performance figures
need an owner decision before use — see the open question at the end.

### EV Solutions — the real gap

| Asset | Size | Band |
| --- | --- | --- |
| `hub-motor-line.jpg` | 1602×1237 | Section |
| `Wire_winding.mp4` | video | Section |
| `hub-motor.png` | 750×700 | Card |
| `hub motor line.png` | 741×385 | Unusable, duplicate |

One section-band still, one process video, nothing at feature scale. The legacy
EV page was three sentences with no machine list. This is the only sector where
existing media genuinely cannot carry the page.

Fallback, in preference order: an authored plant-flow diagram as the page
feature, showing motor winding → controller assembly → charger build →
end-of-line test as connected stages; the wire winding video as the single
process proof; the hub motor line photograph as the supporting figure. This
satisfies the Section 7.6 brief — connected production stages without exposing
a plant layout — better than a photograph would.

## Shared pool

| Asset | Size | Route |
| --- | --- | --- |
| `Industry_4.0/20221017_1143*.jpg` (4 files) | 4032×3024 | Capabilities, Company — largest assets in the set |
| `complete-plant.png` | 1158×601 | Capabilities, system-scale sequence |
| `high-speed-line.png` | 1260×727 | Capabilities, system-scale sequence |
| `semi-auto-machine.png` | 702×952 | Capabilities, system-scale sequence |
| `facility.jpg` | 928×1238 | Company — the only facility image |
| `first-machine.mp4` + `motion-first-machine.png` | video | Company, milestone sequence |
| `delta-robot.mp4`, `Delta_robot_r&d.mp4`, `delta_2.mp4` | video | Capabilities, Careers |
| `Visualisation_software_r&d.mp4` | video | Careers, R&D work |
| `Precision&Speed.mp4`, `Precision&spee.mp4` | video | Capabilities; near-duplicates, pick one |
| `smart-factory.png` | 1280×720 | Capabilities, connected production |

All three system-scale stills sit below feature band, so the Section 7.2
station → line → plant motion should be authored rather than photographic.

## Never ships

| Asset | Reason |
| --- | --- |
| `client-portfolio.jpg` | Customer logo wall. Section 19 non-goal. |
| `Data_analutics_HMI.mp4` | Raw HMI. Section 2 decision 6. Source for the re-authored dashboard only. |
| `iot-dashboard.jpg`, `iot-kiosk.jpg`, `zenon console.svg`, `zenon dsah.svg` | HMI and dashboard surfaces. Data concepts may be extracted under the Section 10 workflow; the screens themselves do not ship. |
| `PPt_Data/assets/veemap-logo.jpg` | Superseded by `site/public/brand/veemap-logo.svg`. |
| `hero_frames/*` (15 files) | Hero workstream property. |

## Requires renaming before any public derivative

Section 9 step 4 requires generic public filenames. These carry identity in the
filename itself:

- `Rieke_pump.png` — customer name
- `2CC SECOND LINE.mov` — line identifier
- `zenon console.svg`, `zenon dsah.svg` — vendor product name; the vendor may
  now be named in copy, but the public filename still goes generic

## Effect on the plan

1. **Automotive moves from assembly-led to inspection-led.** Section 7.5 should
   carry the nine-machine legacy list and lead on vision and dimensional
   verification.
2. **Medical is video-led, not photo-led.** Section 6 already allocates the
   strongest footage here; this budget confirms there is no photographic
   alternative.
3. **EV needs an authored feature.** The only sector where that is true.
4. **The 124 unclassified `slide*` files are the largest untapped reserve.** A
   visual pass over them is the cheapest way to close the EV and Consumer Goods
   gaps before commissioning authored artwork.

## Production figures — approved 2026-08-29

The legacy public website published these on its own Case Study page, and the
owner approved republishing them:

- cap liner line: two-part assembly, above 250 parts per minute, rotary
  indexing over 8 stations on 1 track, convertible between cap types;
- dispensing pump line: 11 parts per pump, above 122 parts per minute, linear
  link conveyor with 50 stations across 11 tracks, more than 200 sensors,
  Zenon dashboards, convertible between pump types; and
- pivot terminal screwing machine: automatic screw feeding, servo torque
  control, precision rotary indexer.

They publish as machine specifications, not as delivered-customer results.
Section 2.3 still applies in full: no customer attribution, no
customer-identifying image beside them, and no ranking claim built on them.
Final copy is in `docs/LEGACY_SITE_CONTENT.md`.

This makes Consumer Goods viable despite its thin photography — the page leads
on architecture and rate rather than on imagery. The pump derivative still
needs a generic filename; `Rieke_pump.png` carries a customer name and does not
ship under it.
