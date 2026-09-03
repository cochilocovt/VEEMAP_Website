# VEEMAP Hero Film — Production Prompt Pack

> ## ⚠️ Mostly retired — 2026-09-01
>
> This pack was written for the v2 film brief. The hero is now a real-time WebGL
> scene (`docs/hero-film-brief.md` v3, built by
> `docs/superpowers/plans/2026-09-01-hero-scroll-scene.md`), so there are no
> generated machine shots, no generated plant plates and no Veo clips in the
> shipping design.
>
> **Still live — use these:**
>
> | Asset | Why it survives |
> |---|---|
> | `IMG-06a` · machine wide, brand + people removal | Needed for the proof section's clearances |
> | `IMG-07a` · SCARA brand removal | Same. Prefer reframing over patching — see the spec's §9 note |
> | `IMG-07b` · HMI legibility pass | Optional, and only if the values are cleared for publication |
> | §0.3, §0.4 · GPT Image parameters and the preserve clause | The discipline that makes those three edits safe |
> | §9 · Prompts you should never write | Still binding |
>
> **Retired:** every Nano Banana Pro plate (`IMG-01`–`IMG-05`, `IMG-08`, `IMG-09`),
> every Veo prompt (`VID-01`–`VID-08`), the four-product opening, the CAD-to-real
> reveal, and the plant reveal. The 3D scene does all of it, cheaper and without
> a generated machine for an engineer to disbelieve.
>
> Kept rather than deleted: if the hero ever needs a pre-rendered OG/social still
> or a video export for a trade show, the craft notes below are worth having.
> Read the retired sections as reference, not as a work order.

Every image and video asset in the **v2** film brief, as a paste-ready prompt.

**Tools:** Veo 3.1 (motion) · Nano Banana Pro / Gemini 3 Pro Image (stills) · GPT Image 1.5 (edits on real frames, linework, transparent plates)
**Asset IDs** map 1:1 to the shot bible. Generate in the order of §12.

---

## 0. Global blocks — set these once

### 0.1 Veo 3.1 API parameters

```json
{
  "aspectRatio": "16:9",
  "resolution": "1080p",
  "durationSeconds": 4,
  "generateAudio": false,
  "negativePrompt": "text, letters, numbers, logos, watermarks, signage, labels, people, human figures, hands, warped metal, melting geometry, duplicated components, floating parts, extra robotic arms, neon lighting, lens flare, sparks, smoke, dust, distorted reflections, camera jitter, frame flicker"
}
```

Set `durationSeconds` per shot as noted. Keep `negativePrompt` identical across every generation — a changing negative is a common cause of look drift. In Flow, paste the negative list into the negative field if one is exposed; otherwise rely on the positive phrasing built into each prompt below.

**Veo prompt order is fixed:** `[Cinematography] → [Subject] → [Action] → [Context] → [Style & ambiance]`. Camera first, always. Every prompt below already follows it — do not reorder when editing.

### 0.2 Nano Banana Pro reference-slot discipline

Assign one job per image and name the job in the prompt. Put the references that must survive with highest fidelity in the **first slots**. Start with 2–4 references, not ten.

```
Image A — subject geometry and material (must be preserved exactly)
Image B — lighting, camera angle and background (match this)
Image C — colour palette / grade
```

Generate at **2K** for reference plates, **4K** for anything that becomes a Veo first frame or a final still.

### 0.3 GPT Image 1.5 API parameters for edits on real footage frames

```json
{
  "model": "gpt-image-1.5",
  "input_fidelity": "high",
  "quality": "high",
  "size": "1536x1024"
}
```

`input_fidelity: "high"` is mandatory for every edit that touches a real machine photograph. Without it the model repaints surfaces you asked it to preserve.

**GPT Image prompt order is fixed:** `background/scene → subject → key details → constraints`, written as **short labelled segments on separate lines**, never one paragraph.

### 0.4 The preserve clause — paste into every GPT Image edit

Repeat it verbatim on every iteration of the same edit. Dropping it on iteration three is the single most common cause of drift.

```
PRESERVE — do not change any of the following:
camera angle, perspective, framing, and crop; the position, shape, scale and proportion of every machine element; all metal surface texture, brushing direction and reflectance; all cable routing, tubing colour and routing; all lighting, shadows, highlights and colour temperature; image grain and sharpness; the background and everything outside the edited region.
Do not change anything else. Keep everything else identical to the source photograph.
```

---

## 1. Chapter 1 — Possibility

### IMG-01a · Dispensing pump hero — the master plate

Build this one first. Every other Chapter 1 product inherits its camera and lighting.

**References:** A = `media/Rieke_pump.png` (subject geometry). B = a phone photo of a real 2CC pump on white paper, if you can take one (material truth).

```
Generate a product hero still.

Subject: a single consumer dispensing pump — the complete pump head, closure and dip tube assembly, in matte white and translucent natural polypropylene. Use Image A as the authority for the subject's exact silhouette, proportion, component count and colour. Use Image B for material behaviour — how the polymer catches light, its surface finish and translucency.

Composition: single object, centred, three-quarter view, camera slightly above the object's centreline. 50mm lens perspective, no wide-angle distortion. The object occupies 40% of frame height with generous empty space on all sides. 16:9 cinematic framing.

Action: the object is static and suspended, weightless, with no support, stand, hand or surface beneath it.

Location: a dark graphite engineering void. Near-black background with a single faint horizon gradient behind the object. There is no floor, no floor line, no visible room, and no environment detail of any kind.

Lighting: one large soft key from upper left at 45 degrees. A narrow cool-white rim light traces the right edge of the silhouette. A very low fill from below-left keeps the shadow side readable. Controlled specular highlights on the polymer, no blown highlights.

Style: premium industrial product photography, cinematic colour grading with muted cool tones, restrained shallow depth of field with the full object in focus. Photorealistic.

Constraints: the image contains no text, no numbers, no logos, no branding, no moulding marks, no labels and no watermark. The frame is empty of people, hands and tools. Output at 4K.
```

🎯 **Target:** Nano Banana Pro · 💡 Reference roles are split — Image A owns geometry, Image B owns material — because a single reference makes the model average the two and soften the silhouette.

---

### IMG-01b/c/d · Hub motor, clutch, inhaler

**References:** A = product reference for the new subject. **B = your approved `IMG-01a` output.** Slot order matters — put the new product first.

```
Generate a product hero still that matches an existing plate exactly.

Subject: a single [SUBJECT]. Use Image A as the authority for the subject's exact geometry, proportion, component layout, material and colour.

Match Image B for everything except the subject: identical camera angle, identical camera height, identical 50mm lens perspective, identical framing and object scale within the frame, identical background, identical lighting setup, identical colour grade. Image B controls the entire scene. Image A controls only the object.

Composition: single object, centred, three-quarter view, camera slightly above centreline. The object occupies 40% of frame height — the same proportion as the object in Image B. 16:9.

Action: static, suspended, weightless, no support beneath it.

Location: the same dark graphite engineering void as Image B. No floor, no floor line, no environment.

Lighting: replicate Image B exactly — soft key upper left at 45 degrees, cool-white rim light on the right edge, low fill below-left.

Style: premium industrial product photography, muted cool grade, photorealistic.

Constraints: no text, no numbers, no logos, no branding, no labels, no watermark. No people, hands or tools. Output at 4K.
```

Run three times, substituting `[SUBJECT]`:

| Run | `[SUBJECT]` | Reference A needed |
|---|---|---|
| IMG-01b | `an EV hub motor — a wide cylindrical in-wheel motor unit in dark anodised aluminium with a visible stator face, radial cooling fins and a central hub flange` | ⚠️ **Input gap.** `media/hub motor line.png` is the machine, not the part. Source a hub-motor part photo from the BELRISE project archive. |
| IMG-01c | `an automotive clutch assembly — a circular pressure plate with radial diaphragm spring fingers, in raw and blackened steel with a friction disc visible behind it` | ⚠️ **Input gap.** Source from the FCC clutch project archive. |
| IMG-01d | `a medical metered-dose asthma inhaler — an L-shaped moulded plastic actuator body with a mouthpiece and a metal canister seated in the top` | ⚠️ **Input gap.** Generic MDI, no brand. Any clean stock photo works as a geometry reference. |

🎯 **Target:** Nano Banana Pro · 💡 Image B carries the entire scene so all four plates register frame-to-frame; without a shared scene reference the four backgrounds will differ enough to break the match cut.

⚠️ Three product references are missing from `media/`. Pull them before starting Chapter 1 — this chapter is the only one blocked on new inputs.

---

### VID-01a/b/c · Scan-line transitions ×3

`durationSeconds: 4`. Frames-to-Video. First frame = product N plate, last frame = product N+1 plate.

```
[00:00-00:01] Locked camera, no movement. Single shot of a precision-manufactured product suspended in a dark graphite void, rotating slowly on its vertical axis at a constant slow speed. Premium industrial product cinematography, soft key light from upper left, cool-white rim light, muted cool colour grade.

[00:01-00:02] A single thin cool-white horizontal scan line sweeps downward through the frame at a constant speed. As the line passes over the object, everything above the line has resolved into fine white CAD wireframe linework on the dark background, while everything below the line remains a solid photorealistic object. The camera stays locked.

[00:02-00:03] The scan line reverses and sweeps upward. As it passes, the wireframe linework resolves into a different solid photorealistic product, occupying the same position and scale in frame. The camera stays locked.

[00:03-00:04] Locked camera. The new product rotates slowly on its vertical axis at the same constant speed. The void behind it is empty and unchanged.

Style: precise, technical, mechanical. The scan line is thin, clean and even. The wireframe stage is crisp engineering linework, not glowing energy, not particles, not dissolving fragments. The camera is completely static for the entire shot. The frame is empty of people. Photorealistic product rendering.
```

🎯 **Target:** Veo 3.1, Frames-to-Video · 💡 Timestamp blocks give the scan an exact schedule instead of leaving pacing to the model, and the locked-camera instruction is repeated in all four blocks because Veo will otherwise introduce a slow drift that breaks the four-product registration.

**Post:** you need ~1.5s per transition. Cut from 00:01.2 to 00:02.8 and speed-ramp to taste. The 4s generation exists to give you handles.

---

## 2. Chapter 2 — The product is chosen

### IMG-02 · Pump on datum, engineered studio

**References:** A = approved `IMG-01a`.

```
Generate a product hero still.

Subject: the dispensing pump from Image A, preserved exactly in silhouette, proportion, material and colour.

Composition: single object, centred, three-quarter view. 50mm lens perspective, slightly closer than Image A — the object occupies 52% of frame height. 16:9.

Action: the object is static and precisely aligned to a central vertical axis.

Location: an engineered studio space, darker at the edges and lighter behind the object than Image A. Three restrained technical elements surround the object, drawn in thin pale-blue lines at low opacity: a faint square blueprint grid on the back plane, one vertical datum axis passing through the object's centre, and one horizontal datum plane rendered as a transparent pale-blue sheet intersecting the object's base. These lines are fine, precise and secondary — they read as engineering annotation, not as a user interface.

Lighting: soft key from upper left, cool-white rim light on the right edge, and a faint pale-blue bounce from the datum plane below.

Style: premium engineering visualisation moving toward photoreal product photography. Muted cool grade. Restrained, precise, expensive.

Constraints: the technical lines are geometry only — no text, no numbers, no dimension values, no tick marks, no measurement callouts, no crosshairs, no targeting reticle, no circular scanning ring, no user-interface panels. No logos, no branding, no watermark. No people. Output at 4K.
```

🎯 **Target:** Nano Banana Pro · 💡 The constraint block names the specific failure mode — HUD/reticle/UI styling — because "engineering overlay" reliably triggers sci-fi interface output unless each unwanted element is enumerated.

---

### VID-02 · Pump lock-on push-in

`durationSeconds: 4`. Image-to-Video, first frame = `IMG-02`.

```
Slow push-in on a locked axis, 50mm lens, the camera advancing steadily toward the subject and covering roughly eight percent of the frame width across the shot. Single shot, shallow depth of field with the subject fully sharp.

Subject: a white consumer dispensing pump suspended in an engineered studio space, with fine pale-blue technical datum lines and a faint blueprint grid behind it.

Action: the pump decelerates out of a very slow axial rotation and comes to rest in exact alignment with the vertical datum axis. It settles — it does not snap or lock. The thin datum lines hold steady and do not animate, sweep, pulse or expand.

Context: a dark engineered studio, empty apart from the object and the faint technical linework. There is no floor, no room and no environment detail.

Style & ambiance: premium industrial product cinematography, soft key light from upper left, cool-white rim light, muted cool colour grade, restrained and precise. Motion is smooth and heavily damped with no overshoot. The frame is empty of people and hands. Photorealistic.
```

🎯 **Target:** Veo 3.1, Image-to-Video · 💡 "Settles, does not snap" and "lines do not animate" pre-empt the two things Veo adds unasked to any shot containing technical overlays: a mechanical snap-to and a sweeping UI animation.

---

## 3. Chapter 3 — Anatomy of precision

### IMG-03a · Pump separated — first frame

**References:** A = approved `IMG-01a`.

```
Generate an engineering visualisation still.

Subject: the dispensing pump from Image A, shown mid-separation. Its components have moved a short distance apart along a single shared vertical axis — a gentle separation, roughly one-third of the way to a full exploded view. Preserve the pump's overall material and colour from Image A. The individual components are simplified generic polymer and metal forms; do not attempt to reproduce specific internal part geometry.

Composition: the separated stack centred and vertical, three-quarter view, 85mm macro lens perspective. The stack occupies 70% of frame height. 16:9.

Action: the components are suspended in mid-separation, static.

Location: a dark graphite void. No floor, no environment.

Lighting: soft key from upper left, cool-white rim lights picking out the edge of each component, a faint pale-blue ambient fill.

Style: premium engineering visualisation, photoreal materials, shallow depth of field with the central components sharp and the outermost components softening.

Constraints: components are simplified and generic — this is not a technical exploded diagram and must not read as one. No text, no numbers, no callout lines, no leader lines, no part labels, no logos, no watermark. No people. Output at 4K.
```

🎯 **Target:** Nano Banana Pro · 💡 "One-third of the way to a full exploded view" plus "simplified generic forms" is the IP guardrail from the brief expressed as a composition instruction — it produces the feeling of complexity without a readable BOM.

---

### IMG-03b · Component constellation — last frame

```
Generate an abstract engineering visualisation still.

Subject: eleven simple glowing geometric tokens — smooth capsules, rings, rods and discs in soft translucent white and pale blue. They are purely abstract primitive forms. They are not recognisable product parts, not mechanical components, and not machine hardware.

Composition: the eleven tokens arranged into eleven neat parallel horizontal lanes that recede toward the right of frame in one-point perspective. Even vertical spacing between lanes, one token per lane, strict mechanical order. 85mm perspective. 16:9.

Action: the tokens are static, floating, aligned.

Location: a dark graphite void with no floor and no environment. Each lane is traced by a very faint pale-blue guide line running toward the vanishing point.

Lighting: soft volumetric glow emanating from the tokens themselves, plus a low cool ambient. Shallow depth of field — the nearest lane is sharp and the far lanes soften into the dark.

Style: restrained abstract motion-graphics rendering, premium and quiet. Cool muted palette. Photorealistic materials on abstract shapes.

Constraints: no text, no numbers, no logos, no watermark, no user-interface panels, no particles, no sparks, no data streams. The forms stay abstract. No people. Output at 4K.
```

🎯 **Target:** Nano Banana Pro · 💡 "Not recognisable product parts" appears twice and in two forms, because the model will otherwise drift the tokens back toward the pump geometry it saw in the preceding shot in the same thread.

---

### VID-03 · Separation into lanes

`durationSeconds: 6`. Frames-to-Video: first = `IMG-03a`, last = `IMG-03b`.

```
[00:00-00:01] Locked macro camera, 85mm, shallow depth of field. A white polymer dispensing pump hangs in a dark void with its components separated a short distance along a shared vertical axis. The components hold still.

[00:01-00:03] The components continue separating along the same axis with steady mechanical motion, then each one smoothly simplifies into an abstract glowing geometric primitive — a capsule, a ring, a rod, a disc — in translucent white and pale blue. The transformation is a clean resolve, not a dissolve into particles and not a fragmentation.

[00:03-00:06] The eleven abstract tokens travel outward and settle into eleven neat parallel horizontal lanes receding toward the right of frame. Faint pale-blue guide lines resolve along each lane. The camera performs a slow lateral drift to the right, roughly six percent of frame width across the shot. Everything comes to rest.

Style: premium abstract engineering motion graphics, dark graphite void, cool muted palette, soft volumetric glow, restrained shallow depth of field. All motion is mechanical, damped and deliberate with no bounce and no overshoot. The frame is empty of people.
```

🎯 **Target:** Veo 3.1, Frames-to-Video · 💡 Timestamps force the three-stage beat (hold → abstract → arrange) in order; without them Veo blends all three across the full six seconds and the abstraction reads as an accident rather than an intention.

---

## 4. Chapter 4 — Measured before motion

**This chapter is shot practically. Do not generate it.** A generated caliper fails on jaw contact and scale, and this film's audience is the audience that notices.

### Shot card — PRAC-04

| | |
|---|---|
| **Kit** | Phone on a tripod, digital vernier caliper, one real pump, one desk lamp with diffusion (a sheet of A4 works), white paper sweep |
| **Setup** | Pump on white paper, lamp at 45° camera left through the diffusion, phone 20–25cm away in macro mode, locked exposure and focus |
| **Shot 1** | Caliper jaws close onto the pump stem. Slow, deliberate, correct contact. 6s. |
| **Shot 2** | Extreme close-up on the jaw contact only, caliper filling frame. 4s. |
| **Shot 3** | Caliper withdraws, pump alone in frame. 4s — this is your outgoing frame. |
| **Rules** | Hands may enter frame here and it is fine — this is the one chapter where a human touch adds credibility. Keep the caliper's own LCD out of focus or out of frame so no number becomes a published claim. |
| **Time** | 20 minutes |

### IMG-04-FALLBACK · Only if the practical shoot is impossible

```
Generate an extreme macro product still.

Subject: the stainless-steel jaws of a digital vernier caliper closed onto a smooth cylindrical white polymer component. The jaws make flat, correct, physically plausible contact against the cylinder wall — both jaw faces touch the surface squarely with no gap and no intersection. The caliper is a real precision instrument in brushed and satin stainless steel.

Composition: extreme close-up, 100mm macro lens perspective, the jaw contact point at the optical centre and occupying the sharpest third of the frame. The caliper body runs out of frame to the left. 16:9.

Action: static, the moment of contact.

Location: a clean dark technical background, softly falling away out of focus.

Lighting: a single large soft source from camera left producing a long controlled specular highlight along the brushed steel, with a faint cool fill from the right.

Style: extreme macro industrial photography, very shallow depth of field with only the contact point critically sharp, photorealistic materials, muted cool grade.

Constraints: the caliper's digital display is entirely out of frame. No text, no numbers, no scale markings, no engraved graduations, no logos, no watermark. No hands, no people. Output at 4K.
```

🎯 **Target:** Nano Banana Pro · 💡 Jaw contact is named as a physical condition ("both faces touch squarely, no gap, no intersection") rather than described visually, because that is the exact failure every generated caliper makes.

---

## 5. Chapter 5 — From components to flow

### IMG-05 · Feeder layout, wireframe stage

**References:** A = the machine layout render (the 3D line drawing of the complete cell). B = `media/hero_frames/f_000006.png` (real machine, for architecture). C = `media/hero_frames/f_000022.png` (real bowl feeder, for the bowl's form and position).

```
Generate an engineering visualisation still.

Subject: an industrial automation assembly line rendered entirely as clean semi-transparent engineering geometry — pale blue-grey surfaces with visible white edge linework, translucent volumes, no solid materials. Use Image A as the authority for the overall cell layout and the arrangement of equipment. Use Image B for the machine's architectural proportions and the way its long station body sits in the space. Use Image C only for the form, scale and placement of the circular bowl feeder in the foreground.

Composition: elevated three-quarter isometric view at roughly 30 degrees above horizontal, 28mm wide perspective. A circular vibratory bowl feeder sits prominently in the lower right foreground. Behind and left of it, linear feed tracks converge toward a long horizontal assembly machine with a repeating sequence of station modules. Material flows from left to right. 16:9.

Action: static.

Location: a clean neutral dark studio. The line floats without a detailed floor — only a soft ground shadow anchors it.

Lighting: even, soft, directionless technical lighting with faint cool rim definition on every edge.

Style: CAD viewport aesthetic, consistent line weight throughout, precise and cold. Simplified generic automation forms.

Constraints: reproduce no specific tooling, gripper, nest or mechanism detail — every station module is a simplified featureless block. No text, no numbers, no station labels, no signage, no logos, no watermark. No people. Output at 4K.
```

🎯 **Target:** Nano Banana Pro · 💡 Three references with explicitly separated jobs (layout / proportion / one object) — the "featureless block" instruction is the IP guardrail, and it also happens to produce a cleaner CAD look than letting the model invent mechanisms.

---

### VID-05 · Wireframe to real bowl feeder — **the hinge shot**

`durationSeconds: 6`. Frames-to-Video: first = `IMG-05` cropped to match the bowl's position in the real frame, last = colour-graded `f_000022.png`.

Match the crop before generating. Frame A and frame B must have the bowl at the same position, the same scale and the same rotation direction, or the transition reads as a cut.

```
[00:00-00:02] Elevated three-quarter view, 28mm, camera holding steady. An industrial assembly line rendered as semi-transparent pale blue-grey engineering geometry, with a circular vibratory bowl feeder in the foreground. The whole scene is still.

[00:02-00:04] The engineering geometry resolves into real photographed machinery. Translucent surfaces gain true metal reflectance and become brushed stainless steel and green-coated bowl surfaces. Edge linework fades as real material texture, reflection and shadow take its place. The transformation moves outward from the bowl to the rest of the frame.

[00:04-00:06] Fully photoreal. The bowl feeder is now full of thousands of small translucent white polymer components, circulating steadily and continuously around the spiral track in a single direction. The camera performs a slow push-in of roughly four percent of frame width. The circulation is even, dense and unbroken.

Style: the first half is a cold CAD viewport, the second half is documentary industrial photography under real overhead factory lighting. The transition between them is a smooth material resolve, not a dissolve, not a wipe and not a fade to black. Camera movement is minimal and steady throughout. The frame is empty of people.
```

🎯 **Target:** Veo 3.1, Frames-to-Video · 💡 The transformation is given a direction ("outward from the bowl") so the resolve has a visible logic; "not a dissolve, not a wipe, not a fade" names the three cheap transitions Veo defaults to when a prompt says two things become each other.

---

## 6. Chapter 6 — The machine takes form

### IMG-06a · Cleaned real machine wide — **do this before the linework**

The linework must be generated *from the cleaned plate*, or the removed logo reappears as lines.

**Input:** `media/hero_frames/f_000006.png`, `input_fidelity: "high"`.

```
SCENE
An industrial assembly machine photographed on a factory floor: a long blue-framed enclosure with transparent polycarbonate guarding, stainless steel station modules, green illuminated stack lights on top, and a window with daylight behind.

EDIT — remove branding
Remove the large brand nameplate on the vertical panel at the centre of the machine, and the vertical brand text on the narrow pillar beside it. Replace both with clean brushed stainless steel panel surface that matches the surrounding panels in brushing direction, reflectance, tone and the way the overhead lighting falls across them. The result must look like a machine that was never labelled.

EDIT — remove people
Remove any human figure, body part or hand visible anywhere in the frame. Reconstruct what is behind them using the surrounding machine and floor.

EDIT — remove small text
Remove the small printed station labels along the horizontal strip beneath the guarding, and any small warning stickers, printed labels or serial plates. Replace each with the clean surface material immediately surrounding it.

PRESERVE — do not change any of the following:
camera angle, perspective, framing, and crop; the position, shape, scale and proportion of every machine element; all metal surface texture, brushing direction and reflectance; all cable routing, tubing colour and routing; all lighting, shadows, highlights and colour temperature; image grain and sharpness; the background and everything outside the edited region.
Do not change anything else. Keep everything else identical to the source photograph.

CONSTRAINTS
Add no new text, no new labels, no new logos and no watermark. Add no new objects. Do not blur, smudge or soften any region — every replacement must be a clean, sharp, photorealistic surface.
```

🎯 **Target:** GPT Image 1.5, edit mode · 💡 Labelled segments with the preserve clause last is the structure the model follows most reliably; "do not blur" is explicit because the default failure on logo removal is a soft smear that reads as concealment.

⚠️ Run this on `f_000008.png` as well — you need both wides. Same prompt, unchanged.

---

### IMG-06b · Linework conversion

**Input:** approved `IMG-06a` output. `input_fidelity: "high"`.

```
SCENE
Convert this photograph of an industrial assembly machine into a precise technical engineering line drawing.

SUBJECT
Every element in the photograph, redrawn as CAD linework on a dark graphite background.

KEY DETAILS
Render the aluminium frame extrusion as clean white edge lines. Render the transparent safety guarding as pale-blue transparent planes with visible white edges. Render the stainless machine modules as simplified engineering geometry in white outline with no interior surface detail. Render cable tracks and pneumatic tubing as single clean lines. Line weight is consistent throughout. The look is a CAD viewport: cold, precise, unshaded.

PRESERVE — do not change any of the following:
the exact camera angle, perspective and vanishing points; the exact framing and crop; the position, scale and proportion of every single element in the photograph, unchanged, so the drawing registers perfectly over the original image.
Do not add, remove, move or resize anything.

CONSTRAINTS
No text, no numbers, no labels, no dimension lines, no leader lines, no title block, no logos, no watermark. No people. No shading, no gradients, no material texture, no photographic elements. Output at the same aspect ratio as the input.
```

🎯 **Target:** GPT Image 1.5, edit mode · 💡 "So the drawing registers perfectly over the original image" states the actual acceptance test, which constrains the model harder than any list of geometric instructions — this pair is the whole shot.

---

### VID-06 · CAD-to-real reveal

`durationSeconds: 4`. Frames-to-Video: first = `IMG-06b` (linework), last = `IMG-06a` (cleaned photo). Identical registration by construction.

```
[00:00-00:01] Locked camera, 32mm, static. A large industrial assembly machine rendered as precise white and pale-blue CAD linework on a dark graphite background. Nothing moves.

[00:01-00:03] The linework fills with real material. Frame edges become blue powder-coated aluminium extrusion. Outlined modules become brushed stainless steel with true reflectance. Transparent planes become real polycarbonate guarding with subtle surface reflections. Single lines become black cable tracks and blue and orange pneumatic tubing. The background resolves into a real factory wall and a daylit window. The transformation sweeps from the left of frame to the right.

[00:03-00:04] Fully photorealistic. Green stack lights illuminate on top of the machine. The camera begins a slow dolly forward covering roughly six percent of frame width. The machine sits still and powered.

Style: a cold CAD viewport becoming premium documentary industrial photography under clean overhead factory lighting. Geometry stays absolutely fixed throughout — every element remains in exactly the same position and proportion from the first frame to the last. The frame is empty of people.
```

🎯 **Target:** Veo 3.1, Frames-to-Video · 💡 "Geometry stays absolutely fixed" plus a directional sweep gives Veo something to animate other than the shapes themselves, which is what stops a CAD-to-real transition turning into a morph.

---

## 7. Chapter 7 — One synchronized system

**All seven cuts are real footage.** No generation. The only work here is cleanup and one optional stabilisation rescue.

### IMG-07a · SCARA frame — brand removal

**Input:** `media/hero_frames/f_000116.png`. `input_fidelity: "high"`.

```
SCENE
A white SCARA robot arm mounted over a stainless-steel outfeed conveyor in an industrial assembly machine, photographed on a factory floor.

EDIT
Remove the manufacturer's logo and brand name printed on the upper arm housing of the white robot. Replace it with the clean white moulded plastic surface of the housing, matching the surrounding curvature, surface sheen, subtle panel shading and the way the overhead lighting falls across it.

PRESERVE — do not change any of the following:
camera angle, perspective, framing, and crop; the position, shape, scale and proportion of every machine element; all metal surface texture, brushing direction and reflectance; all cable routing, tubing colour and routing; all lighting, shadows, highlights and colour temperature; image grain and sharpness; the background and everything outside the edited region.
Do not change anything else. Keep everything else identical to the source photograph.

CONSTRAINTS
Add no new text, labels, logos or watermark. Do not blur or soften the edited area — it must be a clean, sharp, photorealistic plastic surface.
```

🎯 **Target:** GPT Image 1.5, edit mode · 💡 Names the specific surface property to match (moulded plastic curvature and sheen, not brushed metal) so the patch does not read as a flat sticker.

⚠️ This is a **still** patch. The logo appears across 12 seconds of *moving* footage — a still patch fixes one frame. For the moving shots, track and patch in After Effects using this cleaned still as the source plate, or reframe the cut so the logo sits outside the crop. **Reframing is cheaper and you have 4K to spare.** Try that first.

---

### IMG-07b · HMI panel — optional legibility cleanup

Only if the KPI values are cleared for publication and you want them sharper than the handheld footage allows.

**Input:** `media/hero_frames/f_000136.png`. `input_fidelity: "high"`.

```
SCENE
An industrial HMI touchscreen panel showing a production-statistics page, photographed through a scratched protective film on a factory floor.

EDIT
Reduce the visible scratches, scuffs and dust on the protective film covering the screen so the panel reads as clean. Even out the reflection across the screen surface. Slightly increase local contrast on the screen content so it is easier to read.

PRESERVE — do not change any of the following:
every character, digit, word and value displayed on the screen, exactly as they appear, unchanged; the screen layout, every coloured field and every button; camera angle, perspective, framing, and crop; all lighting, shadows and colour temperature; the panel bezel and everything surrounding the screen; image grain and sharpness.
Do not change anything else. Keep everything else identical to the source photograph.

CONSTRAINTS
Do not re-render, re-type, re-spell or alter any text or number on the screen — this is a real production record and every value must remain verbatim. Add no new text. Add no watermark.
```

🎯 **Target:** GPT Image 1.5, edit mode · 💡 The verbatim clause is repeated in both the preserve list and the constraints because image models re-render legible screen text by default, and here that would fabricate a production record.

⚠️ **Verify every digit against `f_000136.png` before use.** If a single value has changed, discard the edit and use the original frame. A model-altered production number is a fabricated claim.

---

### VID-07-OPT · HMI push-in — only if the handheld frame is unusable

`durationSeconds: 4`. Image-to-Video, first frame = `f_000136.png` or `IMG-07b`.

```
Very slow push-in on a locked axis, 50mm, the camera advancing steadily toward the panel and covering roughly five percent of frame width across the shot. Single shot, the screen fully sharp throughout.

Subject: an industrial HMI touchscreen panel mounted on a machine, displaying a production-statistics page with coloured data fields.

Action: the panel is static and powered. The screen content does not change, does not flicker, does not refresh and does not scroll. Every value on the screen stays exactly as it is.

Context: an industrial assembly machine on a factory floor, softly out of focus behind the panel.

Style & ambiance: documentary industrial photography, real overhead factory lighting, muted cool grade, restrained and steady. Camera motion is smooth and heavily damped. The frame is empty of people. Photorealistic.
```

🎯 **Target:** Veo 3.1, Image-to-Video · 💡 Four separate instructions all say the screen content must not change — Veo animates screens by reflex, and here any change invents data.

⚠️ Confirm frame-by-frame that no digit shifted. If any did, cut the shot.

---

## 8. Chapter 8 — From pump to plant

### IMG-08a · Downstream cell, altitude 1

```
Generate a photorealistic industrial still.

Subject: a downstream packaging automation cell. A stainless-steel conveyor runs left to right through the frame carrying clear plastic hand-wash bottles standing upright and evenly spaced. Above the conveyor, a simple servo pick head on a linear gantry holds a white dispensing pump above one bottle neck. A second short conveyor feeds white dispensing pumps in from the left.

Composition: lateral tracking-shot framing, 50mm lens, camera at conveyor height and slightly above. The pick head and the bottle beneath it sit at the optical centre. 16:9.

Action: static, the moment before placement.

Location: a clean modern packaging hall — pale epoxy floor, white walls, aluminium-framed guarding, other automation equipment softly out of focus in the background.

Lighting: even, bright, neutral overhead industrial lighting. Clean reflections on stainless steel and on the clear bottles.

Style: premium documentary industrial photography, restrained shallow depth of field, muted cool colour grade matching a factory-floor reference.

Constraints: the bottles are unbranded and unlabelled — clear plastic with no printing of any kind. No text, no numbers, no logos, no signage, no labels, no watermark. No people. Simplified generic automation equipment with no specific tooling detail. Output at 4K.
```

🎯 **Target:** Nano Banana Pro · 💡 "Unbranded and unlabelled" on the bottles is load-bearing — a hand-wash bottle is the one object in this film the model will confidently cover in invented brand artwork.

---

### VID-08a · Pump to bottle

`durationSeconds: 6`. Image-to-Video, first frame = `IMG-08a`.

```
Lateral tracking shot at 50mm, the camera moving smoothly right alongside the conveyor at the same speed as the bottles, holding them steady in frame. Single shot, shallow depth of field.

Subject: a servo pick head on a linear gantry above a stainless conveyor carrying clear unbranded hand-wash bottles, with a white dispensing pump held in the gripper.

Action: the pick head lowers the white pump, seats it squarely onto the neck of the bottle below, opens, releases, and rises back up. The motion is quick, precise and mechanically damped. The pump is placed and released only — the head does not rotate, does not screw, does not press down and does not twist. The bottle, now carrying its pump, continues along the conveyor to the right.

Context: a clean modern packaging hall with pale epoxy floor, white walls and other automation equipment softly out of focus behind.

Style & ambiance: premium documentary industrial cinematography, bright even overhead lighting, clean reflections on stainless steel, muted cool grade. The hall is empty of people. Photorealistic.
```

🎯 **Target:** Veo 3.1, Image-to-Video · 💡 Four verbs are explicitly excluded — rotate, screw, press, twist — because the brief forbids depicting cap closure, and "place a cap on a bottle" prompts a screwing motion by default.

---

### IMG-08b · Plant, altitude 2

**References:** A = `IMG-08a` (machine language and grade). B = `media/complete line.png`.

```
Generate a photorealistic industrial still.

Subject: a wide view of a modern hand-wash production hall containing six to eight automation cells arranged in two parallel rows, linked by conveyor runs. Visible functions from left to right: bottle handling, filling, pump placement, inspection, labelling, case packing. Use Image A as the authority for equipment style, material palette, lighting and colour grade so this frame belongs to the same facility.

Composition: elevated wide shot from roughly six metres, 24mm lens, looking down the length of the hall with the conveyor runs receding toward a vanishing point slightly right of centre. 16:9.

Action: static.

Location: a real modern manufacturing hall — pale epoxy floor with painted walkway lines, white walls, visible ceiling structure with linear light fittings, stacked pallets of finished goods at the far end.

Lighting: bright, even, neutral overhead industrial lighting throughout, with soft daylight from high windows on the left.

Style: premium corporate documentary photography, deep focus with the whole hall readable, muted cool colour grade.

Constraints: coherent, physically buildable industrial architecture at a believable scale — not a vast endless facility. No text, no numbers, no signage, no logos, no labels, no watermark. No people. Simplified generic automation equipment with no specific tooling detail. Output at 4K.
```

🎯 **Target:** Nano Banana Pro · 💡 "Physically buildable, not vast and endless" is the correction for the default AI-factory failure — infinite receding machinery that reads as concept art and destroys the credibility the previous seven chapters earned.

---

### IMG-08c · Plant, altitude 3 — final frame

**References:** A = `IMG-08b`.

```
Generate a photorealistic industrial still.

Subject: the same hand-wash production hall as Image A, seen from higher and further back so the entire facility is visible within the frame, including all its automation cells, conveyor runs, the goods-out area and the surrounding hall structure. Match Image A exactly for equipment style, material palette, floor treatment, lighting and colour grade — this is the same building from a different position.

Composition: high elevated wide shot from roughly twelve metres, 24mm lens, looking down across the whole facility at about 35 degrees. The complete plant sits within the frame with clear headroom above it. 16:9.

Action: static.

Location: as Image A — pale epoxy floor with painted walkway lines, white walls, exposed ceiling structure with linear light fittings, pallets of finished goods at the far end.

Lighting: bright, even, neutral overhead industrial lighting with soft daylight from high windows.

Style: premium corporate documentary photography, deep focus, muted cool grade, calm and ordered.

Constraints: the facility is finite and its boundaries are visible. No text, no numbers, no signage, no logos, no watermark. No people. Output at 4K.
```

🎯 **Target:** Nano Banana Pro · 💡 "Clear headroom above it" reserves the upper third of frame for the data-line composite and the CTA, so the layout is designed for its final use rather than cropped into it later.

---

### VID-08b · Crane-out, stage 1

`durationSeconds: 8`. Frames-to-Video: first = `IMG-08a`, last = `IMG-08b`.

```
[00:00-00:03] A 50mm lateral view at conveyor height. A servo pick head above a stainless conveyor carrying clear unbranded bottles, each now fitted with a white dispensing pump. The bottles travel steadily to the right. The camera tracks with them.

[00:03-00:08] The camera cranes smoothly backward and upward in one continuous unbroken movement, rising to roughly six metres and widening to 24mm, revealing that this cell is one of several in a large production hall. More automation cells, conveyor runs and inspection stations come into view. Conveyors keep running throughout. The movement is slow, steady and mechanically even, with no acceleration spikes and no handheld sway.

Style: premium corporate documentary cinematography, a real modern manufacturing hall, pale epoxy floor, bright even overhead industrial lighting, deep focus, muted cool colour grade. One continuous shot with no cut. The hall is empty of people. Photorealistic.
```

🎯 **Target:** Veo 3.1, Frames-to-Video · 💡 The lens change (50mm → 24mm) is specified inside the move because a crane-out at a fixed focal length reads as a zoom-out and flattens the reveal.

---

### VID-08c · Crane-out, stage 2 and final hold

`durationSeconds: 8`. Frames-to-Video: first = `IMG-08b`, last = `IMG-08c`.

```
[00:00-00:05] A 24mm elevated wide shot of a modern hand-wash production hall. The camera continues craning backward and upward in one continuous unbroken movement, rising higher until the entire facility is within frame. Conveyors keep running throughout. The movement is slow, steady and mechanically even.

[00:05-00:08] The camera comes gently to rest and holds completely still on the full plant. Nothing moves except the conveyors and the material on them. The composition settles with clear empty space above the facility.

Style: premium corporate documentary cinematography, a real modern manufacturing hall with pale epoxy floor, painted walkway lines, exposed ceiling structure and pallets of finished goods. Bright even overhead industrial lighting, deep focus, muted cool grade, calm and ordered. One continuous shot with no cut. The hall is empty of people. Photorealistic.
```

🎯 **Target:** Veo 3.1, Frames-to-Video · 💡 The final three seconds are specified as a dead hold so the CTA has still frames to sit on — a reveal that never stops moving gives the copy nowhere to land.

---

### IMG-09 · Data-line overlay elements — transparent plates

Composite these in After Effects. **Do not ask Veo to generate the data lines** — generated glowing paths flicker between frames and cannot be timed to the scroll.

```
SCENE
A transparent background with no environment, no floor and no backdrop of any kind.

SUBJECT
A set of nine glowing data-path elements arranged on a grid, evenly spaced, each fully separated from the others with clear space around it.

KEY DETAILS
Each element is a thin luminous line in soft pale blue with a subtle outer glow. The nine variants are: one straight vertical line; one straight horizontal line; one line with a single 90-degree corner; one gentle S-curve; one line with a small circular node at its midpoint; one line with a small circular node at one end; one short line with three parallel companion lines beside it; one line that splits into two branches; one line that merges from two branches into one. All lines share the same weight, the same colour and the same glow intensity.

CONSTRAINTS
Output: transparent background (RGBA PNG), crisp edges, no halos or fringing beyond the intended glow, no drop shadow, no background fill of any colour.
No text, no numbers, no arrowheads, no logos, no watermark. No particles, no sparks, no lens flare, no gradient background. Flat 2D graphics only, no perspective and no 3D rendering.
```

🎯 **Target:** GPT Image 1.5 · 💡 A single sheet of nine variants beats nine generations — you get a consistent glow and line weight across the whole set, which is exactly what fails when elements are generated one at a time.

---

## 9. Prompts you should never write

| Do not prompt for | Why | Do instead |
|---|---|---|
| The VEEMAP machine itself, in any generator | It exists, you filmed it, and generating it invites both invented mechanisms and accidental IP disclosure | Use `media/hero_frames/` and the footage |
| Any station's tooling, gripper, nest or cam | Direct IP disclosure — and the model will invent something wrong | Real footage, obscured per the brief's §2 |
| Readable HMI or dashboard screens | Fabricated production data | Use the real HMI frame; overlay verified KPIs in HTML |
| Any text, number or logo, anywhere | Generated typography is the fastest way to look fake, and any number becomes a public claim | HTML overlays in the browser |
| Named clients, brands or products | Legal exposure | Unbranded objects only |
| The bottle-capping motion | The brief forbids depicting cap closure | Pick, place, release |
| Workers on the line | Consent, and the story is machine capability | Empty halls |

---

## 10. Failure modes and their fixes

| Symptom | Cause | Fix |
|---|---|---|
| Four Chapter 1 products don't register | Each generated from scratch | Regenerate b/c/d with the approved 01a in a reference slot owning "scene, lighting, camera" |
| Veo drifts the camera on a locked shot | Camera not constrained per timestamp block | Repeat "the camera stays locked" inside every timestamp block, not once at the top |
| CAD-to-real turns into a morph | Nothing to animate but the geometry | Give the transformation a direction ("sweeps left to right") and state that geometry stays fixed |
| Logo patch looks smeared | `input_fidelity` not set to high | Set it. Add "do not blur or soften — clean sharp photorealistic surface" |
| Edit changed something you didn't ask about | Preserve clause dropped on a later iteration | Repeat §0.4 verbatim on every single iteration |
| Generated plate won't cut against real footage | Different grade | One LUT built from the real footage, applied to everything |
| Constellation tokens look like pump parts | Model carrying context from the previous shot in the same thread | Generate IMG-03b in a **fresh thread** with no pump reference attached |
| Plant reveal reads as concept art | Model defaulting to infinite factory | "Finite, physically buildable, boundaries visible, believable scale" |
| Veo added an object nobody asked for | Missing from `negativePrompt` | Add it and keep the negative list identical everywhere after |

---

## 11. Cost control

Generate stills to exhaustion, video sparingly. A Nano Banana Pro still is a rounding error next to an 8-second 1080p Veo generation, and **every Veo failure in this film traces back to an unapproved first frame.**

- Approve the still. Then generate the video. Never the reverse.
- Two Veo takes per shot maximum before going back to fix the still. A third take of the same frame will not fix a frame problem.
- Run stills at `quality: "low"` / 1K for composition tests, then re-run the winning composition at 4K.
- Chapter 7 is free — seven of the film's twenty-two assets are edit-only.

---

## 12. Build order

**Week 1 — prove the film works**

1. `IMG-06a` → `IMG-06b` → `VID-06` — the CAD-to-real reveal. Highest impact, lowest risk, roughly two hours.
2. **Chapter 7** — cut the seven real-footage beats to a temp track. No generation at all. Half a day. This tells you whether the footage carries the film's spine.
3. `IMG-05` → `VID-05` — the hinge shot. The hardest generated transition in the film. If this cut lands, the promise-to-evidence structure holds.

Stop and review. If these three look premium, continue. If they do not, the problem is upstream of prompting.

**Week 2 — the finale**

4. `IMG-08a` → `IMG-08b` → `IMG-08c`, approved as stills before any motion.
5. `VID-08a` → `VID-08b` → `VID-08c`.
6. `IMG-09` and the After Effects data-line composite.

**Week 3 — the opening, in parallel**

7. Source the three missing product references (hub motor, clutch, inhaler).
8. `IMG-01a` → `IMG-01b/c/d` → `VID-01a/b/c`.
9. `IMG-02` → `VID-02`; `IMG-03a` → `IMG-03b` → `VID-03`.
10. `PRAC-04` — twenty minutes with a phone and a caliper.
11. `IMG-07a` and any remaining cleanup.

Chapters 1–4 are self-contained and low-risk, which is exactly why they go last. They are also the part anyone on the team can run without the machine footage in front of them.
