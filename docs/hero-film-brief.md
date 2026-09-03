# VEEMAP Hero — Scroll Scene Spec v3

> **Filename note.** This file is still called `hero-film-brief.md` for continuity with
> existing references. It is no longer a film brief. The hero is a real-time WebGL
> scene; this document is its specification.

**Concept:** *From Part to Plant*
**Approach:** One continuous scroll-driven 3D scene. No video, no cuts, no generated machine.
**Stack:** Next.js App Router · React Three Fiber 9 · three 0.185 · drei 10 · GSAP ScrollTrigger
**Case-study machine:** RIEKE 2CC Singolo dispensing-pump assembly line
**Supersedes:** v2 (Veo/Nano Banana film brief) and `Old_script.txt` (Higgsfield brief)
**Implementation plan:** `docs/superpowers/plans/2026-09-01-hero-scroll-scene.md`
**Working model:** `site/components/hero3d/`, viewable at `/lab/machine`

---

## 0. What changed from v2, and why

v2 planned a 48–56s film assembled from generated clips and real footage, scrubbed by scroll. That plan is retired. The hero is now a single real-time scene the camera flies through, built from procedural geometry.

Three reasons, in order of weight.

**1. It removes the two things that were hardest to defend.** v2 needed generated footage of a machine to look credible to plant engineers — the audience most likely to spot a fake mechanism — and it needed IP concealment achieved through depth of field, motion blur and hard crops. A procedural clay scene has neither problem. There is no generated machine to disbelieve, and abstraction at the primitive level makes disclosure *structurally* impossible rather than something the edit hides.

**2. It matches the stack that was already chosen.** `PRODUCT.md` specifies React Three Fiber, Drei, GSAP and gltfjsx. v2 would have shipped 40–60MB of video into a hero and used none of it. The working model is 36k triangles and 8 textures.

**3. Scroll behaves properly.** Scroll-scrubbed video is fragile — sparse keyframes make seeking stutter, and v2 needed every chapter re-encoded with a keyframe on every frame to compensate. A scene sampled by scroll progress has no seek at all: the camera is a pure function of a scalar.

The film is not entirely dead. See §10.

---

## 1. The technique, from the reference

Analysed from `vectrfl.com`'s homepage scroll section. Seven mechanics, in the order they matter.

**One scene, one camera, zero cuts.** The whole sequence is a single low-poly world on a flat plane, with the camera flying a spline driven by scroll. Nothing ever cuts. That is why it reads as one place rather than a montage, and it is the single most important property to preserve.

**Clay monochrome, no textures.** Every object is untextured matte near-white geometry. Form reads through ambient occlusion and soft contact shadow only. Nothing can look low-resolution because there is no resolution to look at.

**Fog does the depth work.** Distant geometry fades to the background colour, so there is no horizon and no visible scene boundary. Objects are placed sparsely across a large empty ground. The emptiness is the luxury signal — resist filling it.

**A persistent line is the spine.** A route enters carrying demand, transforms at a key building, and leaves as a beam that continues unbroken across every subsequent stage. It is a physical object in the world, not a compositing overlay. That is what stops it reading as a UI layer pasted over a render.

**Extreme colour discipline.** Roughly 98% of pixels are the neutral. Saturated colour appears only on the route, the beam, one highlighted object and the final brand mark. See §4 — VEEMAP's version is stricter still.

**Literal dissolves into abstract, then into the mark.** Buildings thin into a field of identical tiles; one tile lights; the tiles reassemble into the logo. This escapes the literal world into brand without a cut, because it is all one scene.

**Scale figures everywhere.** Small ghost figures at object bases. Without them nothing has a knowable size, and the whole scene reads as a toy.

**Text is DOM, pinned, and sandwiched.** Copy is HTML in a pinned column. In the reference, foreground geometry passes *in front* of the headline — the text sits between two canvas layers. Optional for v1; noted because it is a cheap, distinctive detail.

---

## 2. Fact guardrails — unchanged from v2, still binding

The v1 brief called this "the 250 PPM Dispensing Pump machine." **That is wrong and must not reach the site.** 250 PPM belongs to the Cap Liner Insertion line — a different machine.

| Claim | Status | Use on site as |
|---|---|---|
| **170 parts/min** | Sourced USP, RIEKE 2CC Singolo pump line | `170 parts per minute` — always with the RIEKE/2CC attribution |
| **160 parts/min** | Resolved figure for "Dispensing Pumps Automation Line" | The general dispensing-pump capability page |
| **122 PPM** | Superseded old-site figure | Do not use |
| **250 PPM** | Cap Liner line — different machine | Never attach to the pump story |
| **11-part assembly + QC** | Sourced | Safe |
| **50 stations, 11 tracks, linear-link conveyor** | Sourced | Safe |
| **200+ sensors, Industry 4.0** | Sourced | Safe |
| **Zenon dashboards** | Sourced | Vendor-naming clearance required first |
| **6-month realisation, 3-month model changeover** | Sourced | Safe |
| **"Asia's fastest line"** | Internal marketing claim | Attributed positioning copy only |

**Customer names and logos stay out entirely**, per `WEBSITE_IMPLEMENTATION_PLAN.md` §2.4. The scene contains no text, no labels and no marks of any kind other than VEEMAP's own at the final stage.

### The HMI evidence

The 2CC footage contains the machine's own HMI at 01:34–01:40 showing a live production record: 8416 produced, 8308 OK, 1.28% NG, 149 PPM, 82.34% efficiency, 73 minutes run, **0 minutes stopped**.

This is real and unfakeable, and it is more persuasive than a rated speed because it shows sustained output with downtime context. It belongs to the proof section (§9), not the 3D scene. Two decisions remain open — see §12.

---

## 3. IP doctrine — now structural

The constraint that shaped v2 as an art-direction problem is now solved by the medium.

### What the scene may communicate

Length. Station cadence. Feeder count. Material flow direction. The fact that everything moves in lockstep. Scale relative to a human. Evidence of control — status lights, guarding, an HMI panel.

### What it must never resolve

Kinematics. Tool geometry — gripper jaws, cam profiles, nest cavities, insertion tips. Station sequence. Part-order logic.

### How the medium enforces it

Station modules are featureless blocks. Tooling is implied by rhythm and never drawn. No surface carries a label or a number. The two machine bodies use different station pitches, so the model cannot be counted into a process map. Extra parts subtract: an early feeder revision added a hopper and chute and the silhouette read as a question mark — it was deleted, and the model improved.

**The carrier cadence is the load-bearing element.** Hold, fast step, hold — the ease occupies the first 45% of each 0.36s index, so carriers spend most of each cycle stationary. That stepped rhythm is what "synchronised" looks like, it is legible at any distance and any zoom level, and it discloses nothing. A competitor can watch this scene indefinitely and learn nothing about how a station works.

### Consequence for the anatomy stage

Do not build a true exploded BOM. The pump separates briefly, then its components **abstract into simple glowing primitives** — capsules, rings, rods, discs — which arrange into eleven lanes. The emotional beat ("this is more complex than you thought") survives; the disclosure does not. Eleven is sourced and safe to state; what the eleven *are* is not.

---

## 4. Brand re-key — the palette must change

**This is the most important open item in the document.**

The working model at `/lab/machine` uses the reference site's palette: pale blue-grey sky `#e9eff6`, white clay, blue `#2f6bff` delivered flow, red `#ff3b4e` demand. That is *vectrfl's* brand. It is not VEEMAP's, and it must not ship.

The live site's tokens (`site/app/globals.css`) are:

```
--ink    #000000
--paper  #f2f2f2
--signal #fa4c14
--muted  #a6a6a3  (dark theme) / #4e4e4b (light theme)
```

The site is **dark by default** with a working light toggle (`data-theme` on `<html>`, persisted to `localStorage`). The scene must render correctly in both.

### Two token sets

| Role | Dark (default) | Light | Notes |
|---|---|---|---|
| Sky / fog | `#000000` | `#f2f2f2` | Match the page ground exactly so the canvas edge is invisible |
| Ground plane | `#141414` | `#e6e6e2` | One step off the sky |
| Clay shell | `#e4e4e0` | `#ffffff` | Near-paper — objects emerge *out of* darkness |
| Clay recess | `#9a9a96` | `#d4d4d0` | Frame members, skirts, mullions |
| Guard | `#ffffff` @ 0.20 | `#ffffff` @ 0.34 | Lower opacity on dark or it blooms |
| Scale figures | `#6e6e6a` | `#b8b8b4` | Must sit back, never compete |
| Demand line | `--muted` | `--muted` | Thin, dim, unsaturated |
| Delivered flow | `--signal` | `--signal` | **The only saturated colour in the scene** |
| Flow head | `--paper` | `#ffffff` | Emissive, `toneMapped={false}` |
| Grid dots | `#3a3a38` | `#c8c8c4` | Resting; interpolate to `--signal` under the head |
| Status lights | `--paper` | `#ffffff` | Small emissive, not green |

### The discipline is stricter than the reference

The reference uses red *and* blue. **VEEMAP uses one accent.** Demand enters as a dim muted line; it becomes signal orange as it leaves the machine. Same narrative move — requirement in, delivered flow out — executed with a single colour. Drop the green status light; a small paper-white emissive reads as "running" without adding a fourth hue.

Anything that wants to be a second accent is a design failure. Send it back.

### Risk: dark-theme clay

White-on-white with soft AO is what makes the reference feel expensive. On a black ground, near-white objects become high-contrast silhouettes instead — a different look that can read cheap if the lighting is not re-tuned. Fog to `#000000` is the mitigation: distant geometry falls into the dark and the depth gradient does the work that AO does on white.

There is brand precedent for the alternative. `docs/brand-context/visual-identity.md` records that the source deck alternates **dark slides and light slides** deliberately. Pinning the hero as a light stage regardless of the site theme is therefore defensible. **Both must be built and compared before choosing** — see §12.

---

## 5. The journey

One camera path, sampled by a single scroll progress scalar `p ∈ [0,1]`. Stage boundaries are copy and lighting cues, not cuts. The camera never stops and never jumps.

| # | Stage | `p` | What the camera sees | HTML copy |
|---|---|---|---|---|
| 1 | **The part** | 0.00–0.10 | Extreme close on a single dispensing-pump form, floating in an empty dark field. Slow axial rotation. | Eyebrow `Automation across critical industries` · `Every production line begins with a part.` |
| 2 | **Four industries** | 0.10–0.19 | Camera pulls back. Three more forms — hub motor, clutch, inhaler — resolve at distance around the pump, hold, then recede as the pump stays. | `Motion. Control. Care. Everyday scale.` |
| 3 | **Anatomy** | 0.19–0.30 | The pump separates, then abstracts into eleven primitives that travel outward and settle into eleven parallel lanes receding to frame right. | `Designed around your product.` · `Eleven components. One repeatable cycle.` |
| 4 | **Lanes become feeders** | 0.30–0.40 | Camera pulls back and rotates; the lanes resolve into feed tracks, and bowl feeders build at their heads. | `Engineered for repeatability.` |
| 5 | **The machine** | 0.40–0.58 | The full line, from the model. Carriers indexing in lockstep, SCARA cycling at the outfeed, status lights lit. Camera tracks its length. **The centrepiece — give it the most scroll.** | `170 parts per minute.` *(with attribution)* · `Cam-synchronised stations. Every cycle verified.` |
| 6 | **One cell of many** | 0.58–0.72 | Camera cranes up and back. The line is revealed as one cell among several, linked by conveyor runs. | `From one machine to a production system.` |
| 7 | **The plant** | 0.72–0.86 | Full facility. A signal-orange flow rises from every cell and converges into one path. | `One connected production flow.` |
| 8 | **The mark** | 0.86–1.00 | Buildings thin into a field of identical tiles; the converged flow crosses it; one tile lights; the tiles resolve into the VEEMAP mark. Hold still. | `From one part to a complete production plant.` · CTA `Discuss your automation requirement →` |

**Stage 5 is the payoff and stage 8 is the release.** Give stage 5 the longest scroll distance and stage 8 a genuine dead hold — a reveal that never stops moving gives the CTA nowhere to land.

---

## 6. Scene architecture

```
site/components/hero3d/
  clayPalette.ts     Theme-keyed tokens + machine dimensions          [exists, re-key]
  quality.ts         Device tier → scene settings                     [new, pure]
  chapters.ts        Stage table: ranges, copy, lighting cues         [new, pure]
  cameraPath.ts      p → { position, target, fov }                    [new, pure]
  flowState.ts       Per-frame flow-head vector, shared               [exists]
  ClayStage.tsx      Lighting, fog, ground, contact shadows, canvas   [exists, theme]
  AssemblyMachine.tsx  The line                                       [exists]
  GroundGrid.tsx     Halftone floor shader                            [exists]
  FlowLine.tsx       Demand → delivered beam                          [exists]
  PartHero.tsx       Stages 1–3: forms, separation, tokens, lanes     [new]
  PlantField.tsx     Stages 6–7: cells, buildings, converging flow    [new]
  BrandResolve.tsx   Stage 8: tile field → mark                       [new]
  HeroScene.tsx      Composes the world, drives the camera from p     [new]
  HeroSection.tsx    Pinned DOM wrapper, copy, a11y, fallback         [new]
  SceneProbe.tsx     Dev-only R3F store handle                        [exists]
```

The three pure modules — `quality`, `chapters`, `cameraPath` — carry the logic most likely to break and are the only parts that get unit tests. Everything else is verified in the browser.

---

## 7. Motion rules

**The camera is a pure function of scroll.** `cameraPath(p)` returns position, target and fov. No easing state, no velocity, no physics. Smoothing is applied to `p` itself, once, so the whole scene inherits it.

**Damp `p`, never the camera.** `MathUtils.damp(current, target, 5, min(delta, 0.1))`. Damping the camera directly makes stage transitions drift out of sync with the copy.

**Object motion is independent of scroll.** Carriers, the SCARA and the flow head run on `clock.elapsedTime` and keep moving when the user stops scrolling. A scene that freezes when scrolling stops reads as a video scrubber, which is exactly the impression to avoid.

**Follow the established GSAP pattern.** `site/app/page.tsx` already uses `useGSAP` + `gsap.matchMedia()` with `desktop` / `mobile` / `reduceMotion` conditions. Match it — do not introduce a second scroll system.

**Reduced motion is a real branch, not a disable.** With `prefers-reduced-motion: reduce`: no pinning, no scroll hijack, no scroll-driven camera. Render the scene once at a chosen hero framing, hold it static, and let the copy stack normally down the page. All eight stages' copy must still be readable.

---

## 8. Performance budget

Current model, measured: **35,942 triangles · 144 draw calls · 8 textures · 114 geometries.**

| Target | Desktop | Mobile |
|---|---|---|
| Triangles | ≤ 120k | ≤ 45k |
| Draw calls | ≤ 220 | ≤ 120 |
| DPR cap | 2 | 1.5 |
| Shadow map | 2048 | 1024, or contact-shadow only |
| First frame after mount | < 400ms | < 700ms |

Draw calls are the number to watch — 144 for the machine alone leaves limited headroom once the plant field lands. Instancing is already used for stations, mullions, carriers, tokens, totes and figures; the next lever is merging the static per-body geometry.

**Mobile is simplified 3D, not a static fallback** (owner decision). Fewer plant cells, no depth of field, reduced figure count, shorter camera path, contact shadows only.

**Two hard requirements.** Nothing in the hero may block first contentful paint or the enquiry path. And the canvas must never be the reason a mid-range Android bounces — that visitor is a plant engineer.

### The mount trap

R3F renders nothing until its container measures non-zero, and `position: fixed` hosts that collapse the document body produce a permanently blank canvas. This cost real time during the model build. **The hero host must be a normal in-flow block with an explicit height.** Verify on a cold load, not after a resize.

---

## 9. The proof section

The 3D scene makes the promise. The real 2CC footage delivers the evidence, in the section **immediately below the hero** (owner decision).

Seven cuts, 1.5–2.5s each, all from the existing take. Source stills are already extracted to `media/hero_frames/`.

| # | Source | Proves | Copy |
|---|---|---|---|
| 1 | `00:16–00:20` sensor array + gang head | In-process verification | `200+ sensors. Every cycle verified.` |
| 2 | `00:24–00:31` pick-and-place into nests | Repeatable high-speed handling | `High-speed, repeatable handling` |
| 3 | `00:34–00:40` rotary index, finished bodies | Synchronised multi-station assembly | `Cam-synchronised stations` |
| 4 | `00:48–00:54` gang tooling descending | Controlled assembly force | `Controlled assembly at every station` |
| 5 | `01:04–01:08` leak-test stations | Functional QC, not just presence checks | `In-process functional testing` |
| 6 | `01:10–01:20` SCARA at outfeed | Robotics integration | `Robotic transfer to outfeed` |
| 7 | `01:34–01:40` HMI KPI screen | Industry 4.0 payoff | `Live production visibility` |

The montage order is deliberately **not** the machine's process order. It reads as capability; a process-ordered cut reads as a process map.

### Footage handling

4K30, handheld, single continuous take, no scene cuts. Stabilise at low smoothness (10–15%) — over-stabilised industrial footage looks like a screensaver. Correct rolling shutter on the whip-pans or avoid those segments. Reframe hard: 4K into a 1080p timeline is a free 2× punch-in, which is how people get cropped out and how static beats gain a camera move.

**Grade the footage to the site, not the other way round.** Source is warm, fluorescent, slightly green. Target neutral-cool to sit against black.

### Clearances — required before any frame ships

| Item | Where | Action |
|---|---|---|
| **TriMas logo** | `00:06`, `00:08` wides, large and centred | RIEKE is a TriMas brand. Clear it in writing or remove it. Replace with clean brushed panel — do not blur, blur reads as concealment. |
| **Mitsubishi Electric** | `01:10–01:22` on the SCARA | Lower risk than the customer mark, but confirm. **Reframe rather than patch** — a still patch does not survive 12s of motion, and there is 4K to spare. |
| **Station labels ST-01…ST-26** | `00:00–00:08` | Fine where they read as texture. Never legible enough to map. |
| **Leak-test signage** | `01:06` | Recommend keeping — it proves functional QC in the customer's own words. Confirm it discloses no test method. |
| **People in frame** | `00:02`, `01:24`, `01:26`, `01:32` | Reframe or crop. Consent, and the story is machine capability. |
| **Keyence sensor branding** | `00:48–00:52` | Minor. Keyence is the one vendor whose logo is permitted with an approved asset. Confirm. |

---

## 10. What survives of the AI-generation plan

`docs/hero-film-prompt-pack.md` was written for the v2 film. Most of it is now obsolete — there are no generated machine shots, no generated plant plates and no Veo clips in this design.

**Still needed:** the GPT Image edits that clean real footage frames — logo removal and people removal (`IMG-06a`, `IMG-07a`), and optionally the HMI legibility pass (`IMG-07b`). These are surgical edits on photographs, and the preserve-clause discipline in that document still applies verbatim.

**Retired:** every Nano Banana Pro plate, every Veo prompt, the four-product opening, the CAD-to-real reveal, the plant reveal. The 3D scene does all of it, better and cheaper.

The prompt pack has been marked accordingly rather than deleted — if the hero ever needs a pre-rendered social/OG asset or a video export for a trade show, the craft notes are worth keeping.

---

## 11. Acceptance checklist

**IP and disclosure**
- [ ] No station's tooling is resolvable at any zoom level the user can reach
- [ ] Station sequence cannot be counted into a process map
- [ ] Anatomy tokens are abstract primitives, not recognisable components
- [ ] No text, number, label or mark anywhere in the 3D scene except VEEMAP's at stage 8

**Brand**
- [ ] Scene uses `--ink` / `--paper` / `--signal` only — no blue, no red, no green
- [ ] Exactly one saturated colour appears in the scene
- [ ] Correct in both dark and light themes, verified on a real toggle
- [ ] Canvas background matches page ground exactly; no visible canvas edge

**Facts**
- [ ] No "250 PPM" anywhere near the pump story
- [ ] 170 ppm carries its RIEKE/2CC attribution
- [ ] "Zenon" cleared before it appears
- [ ] No customer name or logo, including in alt text, filenames and metadata

**Behaviour**
- [ ] Cold load renders — verified without a resize event
- [ ] Object motion continues when scrolling stops
- [ ] `prefers-reduced-motion` gets a static scene, no pin, all copy readable
- [ ] Visible skip control
- [ ] Hero never blocks FCP or the enquiry path
- [ ] Budgets in §8 met on a mid-range Android

**Proof section**
- [ ] All clearances in §9 resolved in writing
- [ ] No person identifiable in any published frame
- [ ] Footage graded to the site palette

---

## 12. Open decisions for the owner

These block nothing — implementation proceeds on the stated default — but each wants a call before launch.

1. **Dark or light hero stage.** Default: build both, compare, choose. Deck precedent supports a light stage on a dark site (§4).
2. **HMI values: publish or defocus.** Default: publish. They are excellent numbers and the run had zero downtime. Publishing makes them a public claim; confirm internally first.
3. **Rated 170 ppm next to live 149 PPM.** Normal and defensible, but the two must not sit adjacent without framing. Suggested: rated `170 ppm`, capture labelled `sustained run, 0 min downtime`.
4. **TriMas clearance** (§9). Determines whether stage-5 equivalents in the footage need a patch pass.
5. **Zenon naming clearance.** Blocks one line of copy only.
