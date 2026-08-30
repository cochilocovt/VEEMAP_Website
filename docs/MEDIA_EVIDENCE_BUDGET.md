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

### Content review, 2026-08-29 — every Medical asset is on hold

The table above bands assets by resolution. A Section 9 content review of the
actual images was carried out before Phase 2 and **overturns it for this
sector**. Resolution was never the binding constraint; content is. Corrected
verdicts:

| Asset | What it actually shows | Verdict |
| --- | --- | --- |
| `et-tube-machine.jpg` | CAD render, not a photograph. Complete enclosed machine: guarding, internal mechanism through transparent panels, HMI position, control cabinet | **Hold** — complete machine architecture (2.5) |
| `iv-drip-machine.jpg` | CAD render. Full cell layout: rotary machine with six bowl feeders on their own tables, positions and count legible | **Hold** — the most revealing asset in the set |
| `spine-needle-machine.jpg` | CAD render. Complete machine, three feeders, internal rotary mechanism | **Hold** — complete machine architecture |
| `et-tube-product.png` | Product photograph on white. Printed on the tube: `I.D. 3.0`, `O.D 4.0`, `ORAL/NASAL SINGLE USE`, depth graduations | **Hold** — reads as third-party stock, no provenance; also carries printed dimensions |
| `spine-needle-product.jpg` | Product photograph on white, catalogue styling | **Hold** — reads as third-party stock, no provenance confirmed |
| `motion-et-assembly.png` | Genuine production-floor frame. **A person is visible** behind the guarding; also the rotary table with lane tooling, gripper arrays, actuator layout, a sensor amplifier with a readable set-point, facility background | **Hold as a full frame** — see below |

Only the last asset has the resolution to survive a crop. One was produced and
reviewed: a window above the sensor readout and left of the rotary table,
excluding the person and the facility, showing the infeed chute and part-detection
beam. It cleared confidentiality but was visually weak — flat stainless and a
faint beam — so it was **withdrawn rather than shipped**. Clearing a
confidentiality gate is not the same as earning a place on the page.

`ET_assembly.MOV` is also on hold. The frame reviewed above is drawn from that
footage and contains a person and the full mechanism, so the video needs a
frame-level review before any of it can be used.

**Consequence: the Medical & Pharmaceutical page ships with no photography.** It
is carried by the authored production dashboard and by its structure. This is
not a workaround — Section 7.4.7 asks for evidence that is "tightly framed or
abstracted", and nothing in the current set meets that at a scale worth showing.

**To unblock, one of:** owner approval to publish the CAD renders at reduced
detail (heavily cropped or re-rendered without internals); a frame-level review
of `ET_assembly.MOV` selecting shots with no person and no mechanism overview;
new photography shot to a public brief; or confirmed provenance and usage
rights for the two product photographs.

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

## Cross-sector content review, 2026-08-29

Carried out before Phase 3, after the Medical review showed that resolution
bands predict nothing. The finding is the same in every sector, and stronger.

| Asset | Sector | What it actually is | Verdict |
| --- | --- | --- | --- |
| `smartscrewiing.jpg` | Electronics | CAD render carrying the **Legrand logo and wordmark** on the machine banner, beside "PIVOT TERMINAL SCREWING" | **Hold** — customer identity baked into the image (2.4) |
| `robotic-soldering.jpg` | Electronics | Photograph with a **DOBOT watermark**, a person's hand in frame; reads as the robot vendor's own marketing material | **Hold** — vendor logo, unconfirmed usage rights, person in shot |
| `hub-motor-line.jpg` | EV | CAD render of a **complete production line**: every station, conveyor runs, flow arrows and roughly fifteen operator positions | **Hold** — detailed plant layout (7.6) |
| `dispensing-pump-line.jpg` | Consumer Goods | CAD render of the **complete line**: two multi-station machines, around ten bowl feeders with elevators, HMI kiosk, and component names on the feeder hoppers | **Hold** — complete architecture, station counts, part identifiers |
| `inspection-machine-a.jpg` | Automotive | CAD render, complete robot cell: enclosure, six-axis robot, conveyor, fixture plate, cabinet | **Hold** — complete machine architecture |
| `pipe-assembly-machine.jpg` | Automotive | CAD render, complete machine: HMI position, rotary table with tooling, feeder, cabinet | **Hold** — complete machine architecture |
| `inspection-scan.png` | Automotive | Photograph of a **measurement-software screen**: scanned part geometry with legible values `-20.000mm`, `0.000`, `0.860mm`, axis counts, mouse cursor | **Hold** — measurement screen and part geometry (see below) |
| `pump assembly machine.svg` | Consumer Goods | Vector, no embedded text or names — but not yet rendered and reviewed | **Unreviewed** |
| `switch-product.png`, `breaker-product.jpg`, remaining small assets | Electronics | Not reviewed | **Unreviewed** |

### The pattern

Almost every "machine" asset in this library is a **CAD render of a complete
machine or a complete line**, produced for sales presentations, where showing
everything was the point. That is precisely what Section 2.5 and Section 7.6
prohibit publishing. Two also carry identity that no crop can remove without
destroying the image: a customer logo in one, a robot vendor's watermark and
probable copyright in another.

**No sector has publishable machinery evidence in the current library.** Not
Medical, and not the four reviewed here. Automotive and Electronics, which this
document earlier called media-rich, are in the same position as EV.

### Live asset requiring a decision

`site/public/images/inspection-scan.png` is **byte-identical** to the reviewed
`media/PPt_Data/assets/inspection-scan.png`, and it is already published on the
homepage in the digital-layer section. It shows a measurement-software screen
with legible measured dimensions and a scanned part profile.

Section 4 prohibits "detailed machine layouts, proprietary geometry ... part
drawings", and Section 17 requires that no public asset reveal excessive
proprietary detail. On the reading applied to every other asset here, this one
does not pass. It is Hero-workstream content that is already live, so it has not
been changed unilaterally — but it is a Section 17 release blocker until the
owner either approves it explicitly or replaces it.

## The `slide*` pass, 2026-08-29

This document previously called the unclassified `slide*` files "the largest
untapped reserve" and put the count at 124. Both were wrong.

There are **78**, and **31 are byte-identical duplicates** of assets already
reviewed under their descriptive names — the named files were extracted copies
from the same deck. That leaves 47 distinct, of which **19** are at or above
500×400. Those nineteen were reviewed on a contact sheet.

| What they are | Count |
| --- | --- |
| Customer or third-party logos | 7 |
| CAD renders of complete machines or lines | 5 |
| Third-party stock concept images | 2 |
| A third-party component datasheet with dimensions | 1 |
| A personal portrait photograph | 1 |
| A social-media brand logo | 1 |
| Possible candidates | 2 |

The reserve is not a reserve. Of the two candidates, one is held on second
review; one survives, conditionally:

- **`slide19_img4.jpg` — the only publishable machinery photograph found in the
  entire library.** A dispensing head over a pot with a fixture, linear rails
  and a sensor: a station detail rather than a machine architecture, with no
  logo, person, text or dimension in frame. **Provenance must be confirmed
  before use.** Two assets in this deck have already turned out to be other
  companies' marketing material, so its presence in a VEEMAP presentation is
  not evidence that VEEMAP shot it.
- `slide21_img5.jpg`, a modular electrical switch on grey, carries no visible
  branding — but a modular switch of this type is the product of a company on
  the customer list, so publishing it risks implying that relationship. Held.

### Two findings that go beyond the media budget

**The prohibited-name list is incomplete.** The logo walls contain customers not
recorded in `brand-context/audience-and-positioning.md`. Add at least: MARUTI
SUZUKI, AISIN, UNO MINDA, Allied JB Friction (AJF), Bettinelli, TAKAHATA,
KOKOKU, MUNJAL KIRIU, HITACHI. Alongside the already-known DENSO, HONDA, FCC,
BELRISE, APTAR and Legrand. Any Phase 6 name scan run against the old list
would have missed nine names.

**`slide5_img3.jpg` is a photograph of an individual** — an identity-document
style portrait. It is personal data, it sits in a git-tracked directory of a
public repository, and it is out of scope under the team-imagery rule
regardless. It must never be published, and it is worth deciding separately
whether it should be in the repository at all.

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
5. **Band by content, not by pixels.** The Medical content review overturned
   every resolution-based verdict in this document for that sector. The other
   four sectors' tables have **not** yet had the same review, so treat their
   bands as availability only — an asset listed as feature-band there may still
   fail Section 9 once looked at. Automotive and Electronics carry the same
   risk profile as Medical: their largest assets are machine photographs and
   CAD, exactly the classes that turned out to be unusable here.

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
