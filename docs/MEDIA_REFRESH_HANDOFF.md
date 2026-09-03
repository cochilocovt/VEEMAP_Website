# Media Refresh — Handoff for Codex

**Date:** 2026-09-01
**Owner of this task:** website media diversification
**Status:** ~40% done. Asset library fully built + verified. Sector template, industries index, and homepage sections rewired. Capabilities / Company / Careers / Contact still on the old recycled renders. Build/lint not yet re-run for this pass.

---

## 1. Why this task exists

Every page of the site was dressed from the **same ~10 concept renders** (nine of them frames/layers off a single 3D "commissioning" assembly video) plus **one shared hero video** (`/video/commissioning-desktop.mp4`) reused on every interior hero. The owner has a large real-media library and asked us to use it. Owner decision (explicit): **"Everything in media/"** — import broadly.

**Hard constraint that still applies (do not override):** do **not** write false copy. Using a logo/photo as an asset is authorized; asserting "these are our clients," inventing testimonials, certifications, named-customer results, or ranking claims is **not**. Two source files were deliberately skipped as third-party marketing/competitor content: `media/PPt_Data/assets/smart-factory.png` (STMicroelectronics graphic) and `media/Web_resources/all types of hub motor.jpg` (competitor brand lineup). The client-logo wall (Aptar/Stryker/Dr Reddy's/etc. in `media/Web_resources`) was **held**, not built — those are a mix of customers and equipment suppliers, so a "clients" wall would be inaccurate without owner labeling. Leave it out unless the owner supplies correct labels.

---

## 2. Asset library — already built and verified (DO NOT rebuild)

All under the repo's served `public/` tree. Names are semantic. Originals in `media/` were trimmed of white borders (CAD renders), downscaled, and re-encoded. Videos transcoded to 720p muted web loops.

### Images — `site/public/images/library/`
| File | Depicts (use for accurate alt text) | Type |
|---|---|---|
| `med-et-tube-machine.jpg` | Boxed VEEMAP medical assembly machine, branded, green totes | CAD render |
| `med-dispensing-pump-line.jpg` | Long multi-station dispensing-pump assembly line | CAD render |
| `med-iv-drip-machine.jpg` | Rotary IV-drip assembly cells with bowl feeders | CAD render |
| `med-spine-needle-machine.jpg` | Rotary spine-needle assembly with guarding | CAD render |
| `med-pipe-assembly-machine.jpg` | Tall gantry pipe/tube assembly machine (portrait) | CAD render |
| `ev-hub-motor.jpg` | **Real photo** of a hub motor on a bench | Photo |
| `ev-hub-motor-line.jpg` | Hub-motor assembly line with operator stations | CAD render |
| `ev-motor-exploded.jpg` | Exploded motor diagram (bearing/rotor/stator/PCB), dark bg | Diagram |
| `elec-robotic-solder.jpg` | VEEMAP robotic soldering cell, branded | CAD render |
| `elec-robotic-solder-front.jpg` | Robotic solder cell, front view | CAD render |
| `elec-terminal-screwing.jpg` | Terminal-screwing machine cell, branded | CAD render |
| `elec-rfid-machine.jpg` | RFID processing/test machine cell | CAD render |
| `elec-switch-line.jpg` | Switch assembly line with bowl feeders | CAD render |
| `elec-smart-screwing.jpg` | **Real photo**, smart screwing station | Photo |
| `elec-switch-product.jpg` | Switch product (small card) | Product |
| `elec-breaker-product.jpg` | Circuit-breaker product (small card) | Product |
| `consumer-glue-station.jpg` | **Real photo**, glue-application + screw-tightening station | Photo |
| `scale-high-speed-line.jpg` | Big multi-station high-speed line | CAD render |
| `scale-complete-plant.jpg` | Complete plant, long line with operators | CAD render |
| `scale-semi-auto-machine.jpg` | Single semi-automatic station, branded (portrait) | CAD render |
| `vision-keyence-rig.jpg` | **Real photo**, Keyence vision sensor hardware | Photo |
| `vision-inspection-cell.jpg` | Guarded vision-inspection cell (yellow base) | CAD render |
| `hmi-dashboard.jpg` | **Real screenshot**, "DATA MONITORING SYSTEM" OEE/yield gauges | Screenshot |
| `hmi-floor-counter.jpg` | **Real photo**, shop-floor "TOTAL PARTS COUNTER" HMI | Photo |
| `hmi-floor-monitoring.jpg` | **Real photo**, shop-floor "DATA MONITORING SYSTEM" HMI | Photo |
| `hmi-floor-kiosk.jpg` | Floor kiosk terminal render | CAD render |
| `auto-radiator-line.jpg` | Radiator (part, stock) | Part — small card only |
| `auto-fuel-rail-line.jpg` | Fuel rail + injectors (part, stock) | Part — small card only |
| `auto-clutch-line.jpg` | Clutch assembly (part, stock) | Part — small card only |
| `auto-brake-disc-inspection.jpg` | Brake disc w/ red caliper (part, stock) | Part — small card only |
| `auto-piston-inspection.jpg` | Pistons (part, stock) | Part — small card only |
| `auto-brake-shoe-inspection.jpg` | Brake disc/shoe (part, stock) | Part — small card only |
| `auto-engine-no-inspection.jpg` | Engine (part, stock) | Part — small card only |
| `auto-hood-polishing.jpg` | Robotic hood-polishing cell (real-ish) | Cell |

### Videos — `site/public/video/library/` (720p, muted, ~0.5–3 MB each)
| File | Depicts | Note |
|---|---|---|
| `lib-machine-flow.mp4` | Real shop-floor line + operator + product flow | best "company/people" hero |
| `lib-delta-robot.mp4` | Real machine mechanism in motion (R&D rig) | motion/speed |
| `lib-wire-winding.mp4` | Real wire-winding machine head | |
| `lib-hmi-analytics.mp4` | Real HMI touchscreen "Task Summary" + indicator lights | Industry 4.0 |
| `lib-oring-assembly.mp4` | Real rotary O-ring/cap assembly | consumer |
| `lib-clutch-inspection.mp4` | Real inspection station + conveyor | automotive |
| `lib-precision-speed.mp4` | **Portrait (black side-bars)** — do NOT use as wide hero; figure only | |

---

## 3. Design rules (respect these when placing assets)

1. **White-background CAD renders must NOT be full-bleed dark-hero backgrounds** — a white image at low opacity over black reads as a grey box. Two safe placements:
   - Inside a **framed `.ed-figure` card** (border + gradient scrim already present) → reads as an engineering plate. This is the primary use.
   - As a **decorative drift background** ONLY with edge-masking + treatment: add inline `filter: 'grayscale(.5) contrast(1.1)'` and a `WebkitMaskImage`/`maskImage` radial-gradient that fades the edges to transparent (see examples already applied in `industries/page.tsx` and `industries/[sector]/page.tsx`).
2. **Real photos** (`ev-hub-motor`, `consumer-glue-station`, `vision-keyence-rig`, `hmi-*`) are photographic/darker → blend fine, less treatment needed.
3. **Automotive `auto-*.jpg` are part/stock illustrations, not VEEMAP machines** → small "application" cards captioned as the *part* only; never as "our machine." Drive automotive hero/approach from `lib-clutch-inspection.mp4` + `vision-inspection-cell.jpg`.
4. Keep alt text accurate to what the image actually shows (see table). An earlier pass mislabeled a delta-robot image — verify before writing alt.
5. Keep the homepage `CommissioningVideoSequence` **untouched** — it is the site's signature and has a separate, already-shipped scroll-release fix in `site/app/CommissioningVideoSequence.tsx` (do not revert).

---

## 4. Hero-video assignment (finalized)

| Page | Hero video | Done? |
|---|---|---|
| Home | concept assembly sequence (unchanged) | n/a |
| Company | `/video/library/lib-machine-flow.mp4` | ☐ TODO |
| Capabilities | `/video/library/lib-delta-robot.mp4` | ☐ TODO |
| Industries index | `/video/library/lib-wire-winding.mp4` | ✅ done |
| Careers | `/video/library/lib-wire-winding.mp4` (repeat across pages is fine) | ☐ TODO |
| Contact | `/video/library/lib-hmi-analytics.mp4` | ☐ TODO |
| Sector medical | `lib-machine-flow` | ✅ done |
| Sector automotive | `lib-clutch-inspection` | ✅ done |
| Sector ev | `lib-delta-robot` | ✅ done |
| Sector electronics | `lib-wire-winding` | ✅ done |
| Sector consumer | `lib-oring-assembly` | ✅ done |

---

## 5. Done so far (files edited this pass)

- `site/app/industries/[sector]/page.tsx` — rewrote `sectorMedia`/`fallbackMedia` (adds `heroVideo`, real per-sector `hero`+`approach`); hero `<source>` → `media.heroVideo`; hero drift img treated+masked; `qualityBg` → `vision-inspection-cell.jpg` (masked); `reportsBg` → `hmi-dashboard.jpg` (masked).
- `site/app/industries/page.tsx` — hero video → `lib-wire-winding`; medical figure → `med-et-tube-machine.jpg`; automotive drift → `auto-brake-disc-inspection.jpg` (masked); ev drift → `ev-hub-motor.jpg` (masked); electronics figure → `elec-robotic-solder.jpg` + caption "Robotic soldering cell"; consumer drift → `consumer-glue-station.jpg` (masked).
- `site/components/home/HomeSections.tsx` — `sectorThumb` map → real per-sector images; lead feature figure → `med-dispensing-pump-line.jpg` + caption.
- `site/components/home/home.module.css` — `.leadFigure img` object-position `58% center` → `center center`.

---

## 6. Remaining work (apply the section-2 library + section-3 rules)

### 6a. `site/app/capabilities/page.tsx` — recommended swaps
These three "scale" cards map 1:1 to real assets — clean win:
- hero `<source>` `/video/commissioning-desktop.mp4` → `/video/library/lib-delta-robot.mp4`
- hero drift img (`vision-layer.png`, ~line 89) → `/images/library/scale-high-speed-line.jpg` + `filter:'grayscale(.6) contrast(1.1)'` + radial edge mask, opacity ~.35
- `scale[0].img` `motion-delta-robot.png` → `/images/library/scale-semi-auto-machine.jpg`, alt "Single semi-automatic assembly station with operator access"
- `scale[1].img` `machine-assembled-dark.png` → `/images/library/scale-high-speed-line.jpg`, alt "Fully automatic multi-station assembly line"
- `scale[2].img` `commissioning/chassis.png` → `/images/library/scale-complete-plant.jpg`, alt "Complete plant — machines, conveyors and quality systems as one environment"
- exploded figure (`machine-exploded-dark.png`, ~line 206) → `/images/library/ev-motor-exploded.jpg`, caption "Motor · exploded assembly" (or keep concept render — acceptable)
- `qualityBg` (`motion-layer.png`, ~line 217) → `/images/library/vision-keyence-rig.jpg` + mask
- vision figure (`vision-layer.png`, ~line 229) → `/images/library/vision-keyence-rig.jpg`, alt "Machine-vision sensor at the inspection station" (real Keyence — perfect fit for that caption)
- `startBg` (`hmi-layer.png`, ~line 294) → `/images/library/hmi-dashboard.jpg` + mask
- `Boxes` import is still used by the exploded figcaption — keep it if you keep that icon.

### 6b. `site/app/company/page.tsx`
- hero `<source>` → `/video/library/lib-machine-flow.mp4`
- `facility.jpg` (~line 133) — real facility photo, **keep**
- `timelineBgImg` (`commissioning/motion-layer.png`, ~line 162) → `/images/library/hmi-floor-monitoring.jpg` + mask (real shop-floor)
- `machine-exploded-dark.png` (~line 186) → keep, or `/images/library/ev-motor-exploded.jpg`
- vision figure (`commissioning/vision-layer.png`, ~line 206) → `/images/library/vision-keyence-rig.jpg` + accurate alt
- `contactBgImg` (`commissioning/hmi-layer.png`, ~line 228) → `/images/library/hmi-dashboard.jpg` + mask

### 6c. `site/app/careers/page.tsx`
- hero `<source>` → `/video/library/lib-wire-winding.mp4`
- `machine-exploded-dark.png` (~line 80) → keep or `ev-motor-exploded.jpg`
- `problemsBg` (`motion-delta-robot.png`, ~line 88) → `/images/library/elec-terminal-screwing.jpg` or `scale-high-speed-line.jpg` + mask
- vision figure (`commissioning/vision-layer.png`, ~line 118) → `/images/library/vision-keyence-rig.jpg`
- `facility.jpg` (~line 129) — **keep**

### 6d. `site/app/contact/page.tsx`
- hero `<source>` → `/video/library/lib-hmi-analytics.mp4`
- bg img (`commissioning/hmi-layer.png`, ~line 45) → `/images/library/hmi-dashboard.jpg` + mask
- `facility.jpg` (~line 57) — **keep**

### 6e. `site/app/page.tsx` (home, optional polish — lower priority)
- engineering figure (`motion-delta-robot.png`, ~line 196) — keep (thematically fine) or swap to `ev-motor-exploded.jpg`
- digital scan figure (`inspection-scan.png`, ~line 203) — keep or `vision-keyence-rig.jpg`
- careers photo (`facility.jpg`, ~line 220) — **keep**

### 6f. Optional (needs owner input, do not invent claims)
- Client/partner logo rail. Logos exist in `media/Web_resources/` (Aptar, Stryker, Dr Reddy's, Perfetti, TriMas, Hollister, etc.) but are a mix of customers and suppliers. Build only if the owner supplies correct grouping/labels.

---

## 7. Verify before calling done

```bash
cd site && npx tsc --noEmit -p tsconfig.json
cd site && npx eslint app components   # pre-existing <img> LCP warnings are acceptable; 0 errors required
cd site && npm run build               # Turbopack; must pass
```

Note on browser verification: the automation/preview browser fails to decode the assembly `.mp4` and renders `StaticFallback` for the homepage sequence, and interior hero `<video>` autoplay may not render in headless capture — verify heroes by reading DOM/`<source>` rather than screenshots. On a real browser the videos play.

Per `AGENTS.md`: enquiry stays client-side mailto only; run `node tools/update-handoff.mjs` after meaningful changes and commit the refreshed handoff. Nothing has been committed for this media pass yet — lots of uncommitted work is already in the tree; preserve it.

---

## 8. How the library was generated (only if you need to add/redo an asset)

- Tooling present: `ffmpeg`, `ffprobe`, Python `PIL`. No ImageMagick.
- Images: open with PIL → optional white-border trim (bbox of pixels < 244) → downscale (LANCZOS) → save JPEG q82–85 progressive.
- Videos: `ffmpeg -ss <start> -i <src> -t <dur> -an -vf "scale='min(1280,iw)':-2" -c:v libx264 -preset veryfast -crf 30 -pix_fmt yuv420p -movflags +faststart <out>`
- Source dirs: `media/`, `media/PPt_Data/assets/`, `media/Web_resources/`, `media/Industry_4.0/`.
