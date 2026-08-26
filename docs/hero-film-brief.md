# VEEMAP Hero Scroll-Film — Production Brief v2

**Concept:** *From Part to Plant*
**Case-study machine:** RIEKE 2CC Singolo dispensing-pump assembly line
**Toolchain:** Google Veo (via Flow / Gemini API) · Nano Banana Pro (Gemini image) · GPT Image · Imagen · Resolve/AE · Next.js + GSAP ScrollTrigger
**Supersedes:** the Higgsfield-based brief in `Old_script.txt`

---

## 0. What changed since v1, and why the film gets better

Three things are different now, and each one moves the plan in a good direction.

**1. Higgsfield is gone; Google + OpenAI image/video models are in.** This is not a downgrade. Veo's first-frame/last-frame conditioning and Nano Banana Pro's multi-reference subject consistency are *better* suited to scroll work than a general cinematic generator, because scroll chapters must butt-join at exact frames. You direct endpoints, not vibes.

**2. There is no CAD model, and proprietary mechanisms must not be published.** v1 treated CAD as the source of geometric truth and AI as polish. That premise is dead. The replacement doctrine is in §2 — and it is genuinely stronger for a public website: **show rhythm and consequence, hide kinematics.** A competitor should be able to watch this film forty times and learn nothing about how a station actually works.

**3. You have 100 seconds of 4K footage of the real machine running.** This is the biggest change. Real footage of the actual line beats any generated machine, on credibility and on cost. The film should now be **majority real footage** with generated material confined to three jobs: the abstract opening act, the connective transitions, and the conceptual plant finale.

The film is no longer "AI makes a factory." It is: *AI opens the door, the real machine walks through it, AI closes with scale.*

---

## 1. Fact guardrails — corrected

The v1 brief called this "the 250 PPM Dispensing Pump machine." **That is wrong and must not reach the site.** 250 PPM belongs to the Cap Liner Insertion line (2-part assembly, rotary indexing, 8 stations, 1 track) — a different machine entirely.

| Claim | Status | Use on site as |
|---|---|---|
| **170 parts/min** | Sourced USP, attributed to RIEKE 2CC Singolo pump line | `170 parts per minute` — always with the RIEKE/2CC attribution |
| **160 parts/min** | Resolved figure for "Dispensing Pumps Automation Line" (supersedes old-site 122 PPM) | Use on the general dispensing-pump capability page |
| **122 PPM** | Superseded old-site figure | Do not use |
| **250 PPM** | Cap Liner line — different machine | Never attach to the pump film |
| **11-part assembly + QC** | Sourced | Safe |
| **50 stations, 11 tracks, linear-link conveyor** | Sourced | Safe |
| **200+ sensors, Industry 4.0, Zenon dashboards** | Sourced | "Zenon" needs vendor-naming clearance before it appears in copy |
| **6-month realisation, 3-month model changeover** | Sourced | Safe |
| **"Asia's fastest line"** | Internal marketing claim, sourced to the deck | Keep as attributed positioning copy — never burn it into a generated frame |

### The footage hands you better proof than any generated dashboard

At 01:34–01:40 the machine's own HMI is on screen, in focus, showing live production data:

```
Set Count (Pcs)          20000
Total Production          8416
Total OK Count            8308
Total NG Count             108
NG Rate %                 1.28
Production Rate (PPM)      149
Production Efficiency %  82.34
Machine UP Time (Mins)      73
Machine Run Time (Mins)     73
Machine Stop Time (Mins)     0
Mode: Auto | Status: Running | MACHINE RUNNING WITH SYNC MODE
```

This is real, unfakeable, and more persuasive than a rated-speed number, because it shows *sustained* output with OEE-style context: 73 minutes run, zero stop time, 1.28% NG. Use it as the Industry 4.0 payoff shot in Chapter 7.

Two decisions to make before publishing it:
- **Legibility.** If the numbers are readable on a 27" monitor, they become a public claim. Either (a) clear them internally and let them read — recommended, they are excellent numbers — or (b) grade/defocus the panel so it reads as "live data" without specific values, and put verified KPIs beside it as HTML.
- **Consistency.** 149 PPM live against a 170 PPM rated headline is fine and normal — but the copy must not put them next to each other without framing. Suggested framing: rated `170 ppm`, live capture `sustained run, 0 min downtime`.

### Clearances required before any frame ships

| Item | Where it appears | Action |
|---|---|---|
| **TriMas logo** on the machine fascia | 00:06, 00:08 wides — large and centred | RIEKE is a TriMas brand. Either get written clearance to show it, or remove it with a masked GPT Image edit / AE patch. Do not blur it — blur reads as concealment. Replace with clean brushed panel. |
| **Mitsubishi Electric** on the SCARA | 01:10–01:22, prominent | Component-vendor marks are generally lower risk than the customer's mark, but confirm. Same removal path if not. |
| **Station labels ST-01 … ST-26+** | 00:00–00:08 | These reveal station count and sequence. Fine at wide/oblique where they read as texture; avoid any shot where the sequence is legible enough to map. |
| **"HEAD CLOSE LEAK TEST" / "HEAD OPEN LEAK TEST"** signage | 01:06 | Genuinely useful — it proves real functional QC in the customer's own words. Recommend keeping. Confirm it does not disclose a proprietary test method. |
| **People in frame** | 00:02, 01:24, 01:26, 01:32 (legs, torsos, an arm) | Reframe or crop. The hero is about repeatable machine capability. Also avoids consent issues. |
| **Keyence sensor branding** | 00:48–00:52 (visible on a sensor body) | Minor. Crop or leave; confirm. |

---

## 2. The no-CAD doctrine — how to show a machine without giving it away

This is the central creative constraint of v2. Treat it as an art direction rule set, not a limitation.

### Show

- **Rhythm.** Repetition, lockstep, many things moving as one. Synchronisation is the emotion.
- **Consequence.** A nest is empty; a nest is full. A row of parts becomes a row of assemblies. Cause and effect without the middle.
- **Scale.** Rows of identical nests receding out of focus. Twenty grippers descending together.
- **Texture and material.** Brushed stainless, anodised aluminium extrusion, polycarbonate, orange and blue pneumatic tubing, red sensor light. This is what makes it feel expensive.
- **Evidence of control.** Stack lights, sensor arrays, the HMI, leak-test signage, guarding.

### Hide

- **Kinematics.** Never a clean, complete, well-lit orthographic view of one station's tooling through a full cycle. That is a drawing.
- **Tool geometry.** Gripper jaw profiles, cam disc shapes, nest cavity geometry, insertion tooling tips.
- **Station sequence.** Do not let the film be paused and read as a process map.
- **Part-order logic.** Which component goes in at which step, in what orientation.

### The five techniques that do the hiding, cinematically

1. **Shoot through the guard.** The polycarbonate reflection at 00:10 and 00:42 is beautiful and it obscures. Lean into it. Reflections are premium, not a flaw.
2. **Shallow depth of field at macro.** At 85–100mm equivalent, one nest is sharp and the mechanism behind it is a field of bokeh. The viewer reads "precision," not "how."
3. **Motion blur on the working stroke.** The gang head at 00:18 is a blur. That blur *is* the speed claim. Keep it.
4. **Partial occlusion and hard crops.** Frame so a station is always entering or leaving — never centred and complete.
5. **Cut on the beat, not on the cycle.** 1.5–2.5 second cuts. Nobody reverse-engineers a mechanism in two seconds.

### Consequence for the exploded-assembly chapter

v1's Chapter 3 was a true BOM exploded view driven by CAD. **Delete that.** Publishing the exact component set, order and interfaces of a customer's pump is exactly the disclosure you are trying to avoid, and you no longer have the CAD to do it accurately anyway.

Replacement, which is a better beat regardless: **the component constellation.** The pump separates into its parts for roughly 12 frames — long enough to register complexity, short enough to be unreadable — and the parts immediately abstract into simple glowing tokens (capsules, rings, rods) that arrange themselves into parallel lanes. The lanes become the feeder tracks of Chapter 5. You keep the emotional beat ("this is more complex than you thought") and lose the disclosure entirely.

Generate this from a photo of a finished pump, not from a real teardown.

---

## 3. Model roster — what each one is for

Verify current model names and limits in the console before you build; capabilities move fast. The *roles* below are stable.

| Job | Model | Why this one |
|---|---|---|
| **Hero stills that must stay on-model across chapters** | **Nano Banana Pro** (Gemini image, Pro tier) | Multi-reference blending and strong subject consistency. The pump appears in five chapters — it must be the same pump. Feed it the same reference stack every time. High output resolution for 4K plates. |
| **Fast still iteration, bulk variants** | **Nano Banana** (Flash tier) / **Imagen** | Cheap look-dev. Do not promote a Flash-tier output to final without a Pro-tier or GPT Image re-render at the locked composition. |
| **Masked edits on real footage frames** | **GPT Image** | Logo removal, patching out a person's arm, cleaning a background, extending a frame edge. Its instruction-following on "change only this region, keep everything else identical" is the best of the three for surgical work. |
| **Technical / linework / wireframe passes** | **GPT Image** | Consistently better at diagrammatic, engineering-drawing aesthetics than the photoreal-leaning Google image models. Use it for the Chapter 6 wireframe frame and any callout plates. |
| **Transparent-background element plates** | **GPT Image** | Data-line glyphs, token shapes, overlay elements you will composite in AE. |
| **All motion** | **Veo 3.1** via **Flow** (UI) or **Gemini API / Vertex** (batch) | Three features carry this project: **Image-to-Video** (never text-to-video for anything machine-specific), **Frames-to-Video** (first frame + last frame — this is how you make chapters butt-join for scroll), and **Extend** (for the crane-out finale). |
| **Native audio** | Veo generates it | Irrelevant for a muted web hero. Disable `generateAudio` to save cost. Useful only for the full-length case-study cut. |

### Veo 3.1 constraints that shape the edit — verified

- **Clip length is 4, 6 or 8 seconds. Nothing else.** Every "1.5 second" beat in the script below is achieved by generating a 4s clip and cutting it down. Always generate with handles on both sides.
- **First/last frame and reference images are mutually exclusive.** One generation uses *either* a first frame (optionally plus a last frame) *or* 1–3 reference "ingredients" — never both. For this film, geometry continuity beats style drift, so **frame conditioning wins every time**. Reference-image mode is only for the Chapter 8 plant plates, where nothing needs to register.
- **Timestamp prompting works:** `[00:00-00:02] …` `[00:02-00:04] …` assigns actions to timed segments inside one generation. Use it for the scan transitions and the crane-out — it is far more controllable than describing a whole move in prose.
- Output is 720p or 1080p, 16:9 or 9:16. **1080p 16:9 for everything**; upscale in post if the master needs 4K.
- All output carries an invisible SynthID watermark. Not a problem for a website; know it exists.
- **Negative phrasing underperforms.** Google's own guidance: describe exclusions positively and specifically ("an empty machine hall") rather than as negations ("no people"). Put true negations in the API's `negativePrompt` field instead of the prompt body.

### The one rule that matters most

**Image-to-video, always. Text-to-video, never — for any shot containing the machine, the pump, or the plant.**

Lock a still you have approved, then animate it. A text-to-video prompt will invent a machine. An image-to-video pass from an approved frame can only move what is already there. Every shot in this film starts as a frame you have looked at and signed off.

---

## 4. Asset preparation — harvest before you generate

### Tier 0: pull real frames from the footage (already done)

Fifteen 4K stills are extracted at the key beats to `media/hero_frames/`:

| File | Timecode | Content |
|---|---|---|
| `f_000006.png` | 00:06 | **Machine wide** — both bodies, TriMas/VEEMAP fascia, stack lights green. *Chapter 6 hero.* |
| `f_000008.png` | 00:08 | Machine wide, alternate angle with feeder elevators |
| `f_000012.png` | 00:12 | Nest plate macro through guard, cam discs |
| `f_000016.png` | 00:16 | **Red sensor array + gang pick head.** The best-looking frame in the reel. |
| `f_000022.png` | 00:22 | **Bowl feeder**, full of translucent closures. *First cut to reality.* |
| `f_000026.png` | 00:26 | Multi-head pick-and-place descending into stainless nests |
| `f_000030.png` | 00:30 | Row of loaded nests receding |
| `f_000036.png` | 00:36 | Rotary index, rose-coloured components |
| `f_000040.png` | 00:40 | Field of finished white pump bodies |
| `f_000048.png` | 00:48 | Gang tooling descending over nests |
| `f_000056.png` | 00:56 | Pneumatic bank, orange tubing, transfer arm |
| `f_000104.png` | 01:04 | Close on finished pump heads on the dial |
| `f_000106.png` | 01:06 | **Leak test stations** with signage |
| `f_000116.png` | 01:16 | **Mitsubishi SCARA** at outfeed |
| `f_000136.png` | 01:36 | **HMI KPI screen.** The Industry 4.0 payoff. |

To pull any additional frame:

```bash
ffmpeg -ss 00:00:37.5 -i "media/2CC SECOND LINE.mov" -frames:v 1 -q:v 1 out.png
```

These stills serve three purposes at once: reference images for Nano Banana, first/last frames for Veo, and — for the strongest ones — final shots in their own right via 2.5D parallax.

### Footage handling notes

The source is 4K30, handheld, single continuous take, no scene cuts. That means:

- **Stabilise.** Resolve's Gyro/Planar stabiliser or AE Warp Stabilizer at a low smoothness (10–15%) — keep some handheld life, kill the jitter. Over-stabilised industrial footage looks like a screensaver.
- **Rolling shutter.** Present on the fast whip-pans. Correct it, or avoid those segments in the cut.
- **Reframe hard.** 4K into a 1080p or 1440p timeline gives you a free 2× punch-in. Use it to crop out people and to build the "camera move" on otherwise static beats.
- **Grade toward the brand.** The footage is warm, fluorescent, slightly green. Target: neutral-cool, lifted blacks kept low, restrained blue accent. It must sit next to generated material without a visible seam. Build one LUT and apply it to both.

### Tier 1: what to generate as stills

| Asset | Model | Reference inputs |
|---|---|---|
| Hub motor, clutch, inhaler hero renders | Nano Banana Pro | `media/hub motor line.png` for the motor; product photography for the rest |
| Dispensing pump hero, five angles | Nano Banana Pro | `media/Rieke_pump.png` + a phone photo of a real pump on a white sweep |
| Component constellation tokens | GPT Image (transparent bg) | The pump hero |
| Chapter 6 wireframe frame | GPT Image | `f_000006.png` — same camera, converted to linework |
| Conceptual plant plates ×4 | Nano Banana Pro | `media/complete line.png` + `f_000006.png` for machine-language consistency |
| Data-line / dashboard overlay elements | GPT Image (transparent bg) | Brand palette from `docs/brand-context/visual-identity.md` |

**Shoot this yourself instead of generating it:** the vernier caliper measurement (Chapter 4). You have real pumps and presumably a real caliper. Twenty minutes with a phone on a tripod, a desk lamp, and a sheet of white paper gets you a macro shot no generated caliper will match. Generated calipers fail on jaw contact and scale — and your audience is engineers who will see it immediately. This is the single highest-value hour of practical shooting in the project.

---

## 5. The scroll script

Total ~48–56s of visual material across 8 chapters. Desktop scroll-bound; mobile gets a simplified stack. **All text is HTML — nothing legible is ever generated inside a frame.**

---

### Chapter 1 — Possibility
**Scroll 0–10% · 5s · Generated**

Four products occupy the same centred position in a dark graphite engineering void, one at a time: EV hub motor → automotive clutch → medical inhaler → consumer dispensing pump. Each holds ~1.2s in slow axial rotation.

Transitions are **technical scan replacements**, not morphs: a cool-white scan line sweeps vertically, the object resolves to fine wireframe for 6–10 frames, the next object resolves out of the linework. Organic morphing destroys credibility; scan-replacement builds it.

Ends holding on the dispensing pump.

**Copy (HTML):**
Eyebrow — `Automation across critical industries`
Progressive — `Motion.` `Control.` `Care.` `Everyday scale.`
Transition — `One part can change everything.`

**Build:** four Nano Banana Pro stills at identical camera and lighting → one Veo Frames-to-Video pass per transition (frame A = product 1, frame B = product 2) → assemble four clips in Resolve.

---

### Chapter 2 — The product is chosen
**Scroll 10–17% · 4s · Generated**

The pump settles onto a central datum. Other product silhouettes recede into black. Faint blueprint grid and datum axes resolve briefly. Background shifts from void toward engineered studio. 50mm slow push-in.

Avoid a gaming-style target lock. Fine engineering lines, controlled illumination, restrained.

**Copy:** `The dispensing pump.` / `A familiar product. A complex assembly challenge.`

---

### Chapter 3 — Anatomy of precision
**Scroll 17–27% · 6s · Generated · REVISED — see §2**

The pump separates into components along controlled axes and holds for roughly a half second — enough to register complexity, not enough to read. The components then **abstract**: each becomes a simple glowing token — capsule, ring, rod, disc — and the tokens arrange into eleven parallel lanes running toward frame right.

The lanes are the transition. They become feeder tracks in Chapter 5.

Macro traverse, 85mm feel, shallow DOF.

**Copy:** `Designed around your product.` / `Eleven components. One repeatable cycle.`

*(Eleven is sourced and safe. It states complexity without disclosing what the eleven are.)*

---

### Chapter 4 — Measured before motion
**Scroll 27–36% · 5s · Practical, shot in-house**

A real digital vernier caliper contacts a real pump component. Two measurements, deliberate, correct jaw contact. Dimension guide lines appear as HTML overlay in the browser — **not generated, not burned in** — so values can be changed or removed without a re-render.

Display symbolic labels rather than numbers until values are approved: `Critical diameter` · `Seal interface` · `Length control`.

**Copy:** `Precision begins before the first cycle.`

**Why practical:** a generated caliper is the single most detectable fake in this film to the audience you are selling to.

---

### Chapter 5 — From components to flow
**Scroll 36–47% · 6s · Generated → **first cut to real footage**

The eleven token lanes fill in: wireframe feeder volumes resolve into shaded mechanical forms, bowl feeders and tracks lock into place in process order, still stylised. Elevated 30° isometric, slow lateral track in the direction of flow.

Then — **match-cut to `f_000022.png`, the real bowl feeder.** Wireframe bowl to real bowl, same position in frame, same rotation direction. Thousands of real translucent closures circulating.

This is the hinge of the whole film. Everything before it is a promise; everything after is evidence. Spend your time here.

**Copy:** `Engineered for repeatability.` / `Feeding. Orienting. Transferring. Assembling.`

**Build:** Nano Banana Pro still for the wireframe layout (reference: `media/complete line.png` + the attached machine layout render) → Veo Frames-to-Video with frame A = wireframe layout, frame B = a colour-matched grade of `f_000022.png`. Veo handles the dissolve; you cut out of it on the real frame.

---

### Chapter 6 — The machine takes form
**Scroll 47–57% · 5s · Generated frame → real footage**

Identical to v1's strongest idea, rebuilt without CAD.

Start on a **wireframe/linework rendering of `f_000006.png`** — the real machine wide, converted by GPT Image to engineering linework at the exact same camera. Hold 1.2s. Then dissolve to the real frame: powder-coated blue extrusion, brushed stainless, polycarbonate guards, cable tracks, pneumatic tubing, green stack lights.

Because both endpoints derive from the *same photograph*, the registration is perfect. This was previously the hardest shot to achieve and is now the easiest. It is the strongest proof-of-engineering moment in the film.

Start static, then a 5–8% dolly as reality resolves.

**Copy:** `From engineered system to production reality.`

**Note:** the attached layout render is an excellent alternative first frame if you prefer a CAD-look over linework — it already matches the real machine's architecture. Test both.

---

### Chapter 7 — One synchronized system
**Scroll 57–82% · 14s · 100% real footage**

The capability montage. Seven cuts, 1.5–2.5s each. All from the existing take — no generation, no re-shoot needed.

| # | Source | What it proves | HTML copy |
|---|---|---|---|
| 1 | `00:16–00:20` red sensor array + gang head | Sensing and in-process verification | `200+ sensors. Every cycle verified.` |
| 2 | `00:24–00:31` multi-head pick-and-place into nests | High-speed repeatable handling | `High-speed, repeatable handling` |
| 3 | `00:34–00:40` rotary index + rows of finished bodies | Synchronised multi-station assembly | `Cam-synchronised stations` |
| 4 | `00:48–00:54` gang tooling descending | Controlled assembly force | `Controlled assembly at every station` |
| 5 | `01:04–01:08` leak test signage and stations | Functional QC, not just presence checks | `In-process functional testing` |
| 6 | `01:10–01:20` Mitsubishi SCARA at outfeed | Robotics integration, clean handoff | `Robotic transfer to outfeed` |
| 7 | `01:34–01:40` HMI KPI screen | Industry 4.0 payoff | `Live production visibility` |

**Cut 7 is the chapter's climax.** Push in on the panel, let the numbers land, then let a restrained data-line overlay (AE, composited) leave the panel and travel out of frame — setting up Chapter 8.

**Ordering note:** the montage order above is *not* the machine's process order, deliberately. It reads as capability, not as a process map. Keep it that way.

**Copy over the sequence:** `Vision verifies. Motion synchronises. Every station contributes to throughput, quality and traceability.`

---

### Chapter 8 — From pump to plant
**Scroll 82–100% · 11s · Generated**

A completed pump exits on the outfeed. Camera follows it into a downstream cell where it is picked and placed onto a hand-wash bottle neck. **Show pick, place and handoff only** — do not depict cap torque-down unless that system is real and cleared.

Then the crane-out. The single cell becomes a complete hand-wash production plant: bottle handling, filling, pump placement, inspection, labelling, case packing. Simplified conceptual forms — this is explicitly a capability metaphor, and the page copy should say so in a caption.

From each cell, restrained illuminated data paths rise, converge into a single calm analytics layer, and resolve. Data lines at 5–10% visual intensity — they are the subtitle, not the sentence.

24mm elevated wide. Hold the final plant frame for 2s of visual rest under the CTA.

**Copy:** `One completed pump.` → `One connected production flow.` → `From one part to a complete production plant.`
**Support:** `Custom automation engineered around your product, process and performance targets.`
**CTA:** `Discuss your automation requirement →`

**Build:** the crane-out exceeds a single 8s Veo clip. Generate three Nano Banana Pro plates at three altitudes (cell / hall / full plant), then run two Frames-to-Video passes to travel between them — plate 1 → plate 2, plate 2 → plate 3. This is more controllable than Extend, because you approve every altitude as a still before any motion exists. Join the three clips with speed-matched dissolves in Resolve.

**Prompts for every asset in this script: `docs/hero-film-prompt-pack.md`.**

---

## 6. Prompts

Every image and video asset in this brief has a paste-ready, tool-specific prompt in **`docs/hero-film-prompt-pack.md`**, together with the global Veo `negativePrompt`, the Nano Banana Pro reference-slot discipline, the GPT Image preserve clause, a failure-mode table and the build order.

That file is the single source of truth for prompts. Do not write prompts from this brief — it describes intent; the pack describes execution.

## 7. Continuity method

Veo drifts across independent generations. Three practices keep the film coherent.

**1. Endpoint discipline.** Every chapter has an approved **first frame** and an approved **last frame** before any video is generated. The last frame of chapter N *is* the first frame of chapter N+1. This is what Frames-to-Video is for, and it is the reason this toolchain suits scroll work better than the v1 stack.

**2. A fixed reference stack per subject.** For every generation involving the pump, feed the *same* three references in the *same* order. For the machine, always include `f_000006.png`. Changing the reference stack mid-project is the most common cause of a subject that quietly stops being the same object.

**3. One LUT for everything.** Build a single grade — from the real footage, since that is the constraint you cannot change — and apply it to every generated plate. Generated material graded to match real footage is invisible; ungraded, it announces itself in one frame.

### Shot bible

Keep a sheet. It becomes essential by variant thirty.

| Shot | Chapter | Source | Model | Prompt v | Seed | Frame A | Frame B | Take | Approval |
|---|---|---|---|---|---|---|---|---|---|
| C06_CADREAL | 6 | `f_000006.png` | Veo F2V | P7 v3 | — | `c06_wire.png` | `c06_real.png` | 4 | pending |

---

## 8. Web delivery

Your stack is Next.js App Router + React Three Fiber + GSAP. Chapters 1–8 are video, not 3D — with no CAD there is no geometry to render, and pre-rendered video is far cheaper on the main thread than an R3F scene. Keep R3F for other sections of the site.

### Scrubbing

Scroll-linked video scrubbing fails when the encode has sparse keyframes — seeking lands on the nearest I-frame and the playhead stutters. Encode every scrubbed chapter with a keyframe on every frame:

```bash
ffmpeg -i chapter06.mov -c:v libx264 -crf 20 -g 1 -keyint_min 1 -sc_threshold 0 -pix_fmt yuv420p -movflags +faststart chapter06_scrub.mp4
```

File size roughly triples. Accept it — these are 4–6 second clips. For the two or three most motion-critical chapters, an AVIF or WebP image sequence at 24fps is more reliable still, at the cost of more requests.

### Playback

```html
<video muted playsinline preload="none" poster="/hero/ch06.avif">
```

- `preload="none"` on everything except chapter 1; load the rest through `IntersectionObserver` one chapter ahead.
- Poster frame for every chapter — this is also your `prefers-reduced-motion` fallback.
- WebM/AV1 primary, H.264 MP4 fallback.
- Nothing in the hero blocks first contentful paint or the enquiry form.

### Scroll UX

- Pinned canvas 60–70vh desktop; each chapter 100–140vh of scroll.
- Copy panel 32–40% width, high contrast, semantic HTML — never baked into video.
- Chapter markers as `03 / 08`, not a timeline scrubber.
- Visible `Skip animation` control.
- `prefers-reduced-motion`: static posters, opacity cross-fades, no pinning, no hijack.
- Mobile: drop the pin. Stack the chapters vertically as poster + short autoplay loop, or serve a single 12–15s condensed cut.

---

## 9. Sound

Muted by default, so this only matters for the case-study cut and for users who unmute. Build it anyway — it is what makes the full-length version feel expensive.

Low electrical room tone · fine servo movement · soft vibratory-feeder texture · clean pneumatic exhaust accents · one precise metallic caliper click at Chapter 4 · a controlled transfer pulse under the montage · quiet digital shimmer for the data lines · a single restrained tonal rise for the plant reveal.

**Source the machine ambience from the .mov's own audio track** rather than a library — it is the real line, and a few seconds of its actual pneumatic and servo texture, cleaned and layered, will sit under the montage better than anything you can buy.

Voiceover: calm, technically literate, neutral or Indian English. Human, not synthesised — a premium engineering brand should not use a synthetic voice to describe its precision. Script as in v1 §"Full voiceover draft", with the 250 PPM reference corrected to the 170 ppm RIEKE attribution.

---

## 10. Acceptance checklist

**IP and disclosure**
- [ ] No frame shows a complete, sharp, unoccluded view of a single station's tooling
- [ ] Station sequence is not readable from any paused frame
- [ ] Component assembly order is not disclosed
- [ ] Gripper, nest and cam geometry is obscured by DOF, blur, occlusion or crop in every shot
- [ ] Chapter 3 tokens are abstract, not recognisable components

**Clearances**
- [ ] TriMas mark cleared or removed
- [ ] Mitsubishi mark cleared or removed
- [ ] Leak-test signage cleared
- [ ] No people in any published frame
- [ ] HMI values cleared for publication, or defocused

**Facts**
- [ ] No "250 PPM" anywhere in the pump film
- [ ] 170 ppm appears only with RIEKE / 2CC attribution
- [ ] "Zenon" cleared before it appears in copy
- [ ] "Asia's fastest" appears only as HTML copy, never in a frame
- [ ] All figures trace to `docs/brand-context/`

**Craft**
- [ ] Generated and real footage share one grade — check on a calibrated display
- [ ] No warping, flicker or unstable geometry in any generated clip
- [ ] Every chapter's last frame matches the next chapter's first frame
- [ ] No generated text, numbers, logos or signage in any frame
- [ ] Every transition has a visual reason
- [ ] Final frame holds long enough for the CTA to be read

---

## 11. Build order

Do not start at Chapter 1. Start with the three shots that carry the most risk and the most proof. If these three look premium, the rest of the film follows; if they do not, no amount of prompting fixes it.

1. **Chapter 6, the wireframe-to-real reveal.** GPT Image on `f_000006.png`, then Veo Frames-to-Video. Roughly two hours. It is the strongest single moment in the film and it is now the cheapest one to make.
2. **Chapter 7, the real-footage montage.** Pure edit — stabilise, reframe, grade, cut seven beats to a temp track. No generation at all. Half a day. This tells you immediately whether the footage carries a 14-second sequence, and it will.
3. **Chapter 5, the wireframe-to-bowl-feeder match cut.** The hinge of the film, and the hardest generated transition. If this cut works, the promise-to-evidence structure holds.

Then Chapter 8 (most generation-dependent, most iteration), then 1–4 (self-contained, low risk, can be built in parallel by anyone).
