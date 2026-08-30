# VEEMAP Flow Agent instructions v2

This document defines the instructions to place in Google Flow's **Agent Instructions** panel for the VEEMAP machine-assembly sequence. The corresponding generation prompts are in [VEEMAP_FLOW_ASSEMBLY_V2.md](./VEEMAP_FLOW_ASSEMBLY_V2.md).

## How to configure the Agent

1. Create the global instruction below and leave it enabled for every clip.
2. Create the eight sequence instructions below.
3. Enable exactly one sequence instruction at a time. Disable the other seven.
4. Leave every Agent Instruction **Reference** field empty. Start and end images belong in **Video > Frames > First + last**, not in the instruction reference field.
5. In the generation prompt, use only the matching prompt from `VEEMAP_FLOW_ASSEMBLY_V2.md`.
6. Do not add Ingredients, previous videos, the approved reference images, or unrelated keyframes.
7. Generate one output at a time. Begin with Veo 3.1 Fast; use Quality only after the frame pair passes the motion test.

Agent Instructions provide persistent constraints; they do not replace the supplied first frame, last frame, or clip prompt. If Agent mode does not expose **First + last**, use the standard Flow prompt box with the same frame pair and clip prompt.

## Global instruction - always enabled

**Instruction title:** `VEEMAP | Immutable machine continuity`

**Reference:** Leave empty.

**Instruction text:**

```text
This project creates a silent, scroll-scrubbed assembly visualization of one non-proprietary industrial machine. Treat the supplied first and last frames as authoritative endpoint images, not loose references. Preserve the exact camera viewpoint, framing, crop, black studio background, lighting direction, shadows, perspective, machine scale, materials, colors, surface finish, component identity, and solid-body relationships throughout every generation.

Generate one uninterrupted wide product shot with a completely static locked camera and deep focus. Only the assembly group explicitly named in the active sequence instruction and clip prompt may move. Every other machine component must remain perfectly stationary and visually unchanged. Moving components behave as rigid mechanical bodies: constant geometry and scale, direct mounting-axis paths, controlled acceleration and deceleration, visible alignment, contact, seating, settling, and a stable final hold. Preserve all holes, fasteners, brackets, motors, cables, buttons, handles, lenses, extrusions, and mounting faces.

The supplied last frame is the mandatory completed state. Reach its composition naturally without morphing, dissolving, repainting, replacing, inventing, duplicating, deleting, resizing, or restyling components. Do not alter the camera to hide inconsistencies. Do not add people, robotic hands, tools, safety guarding, transparent panels, wiring, labels, captions, arrows, scanning beams, sparks, particles, glow, or decorative effects. Produce no dialogue, music, ambience, or sound effects.

If the requested transition cannot be completed while preserving inactive geometry, prefer restrained minimal motion and a clean endpoint over elaborate choreography. Never compensate by changing an inactive component.
```

## Sequence 1 - Foundation assembly

**Instruction title:** `01 | Foundation assembly`

**Reference:** Leave empty.

**Frames:**

- First: `00-exploded-master.png`
- Last: `01-foundation-only.png`
- Duration: 6 seconds

**Instruction text:**

```text
The only permitted moving group is the foundational machine structure: central structural chassis, cabinet frame, front and side cabinet panels, access doors, mounting feet, left support table, and right support frame. Treat every other detached object as a frozen display element.

Assemble the foundation in a mechanically legible order. Establish the central chassis first. Translate the cabinet panels and doors along short straight normal axes until their edges align and seat flush. Raise the feet vertically into their exact threaded mounting locations. Translate the left support table and right support frame horizontally into the final positions shown in the last frame. Use restrained staggered timing so only one foundational subgroup completes seating at a time.

The two conveyors, outer-frame sections, process tooling, vision camera, Cartesian mechanism, HMI, tower light, sensors, and edge-I/O modules remain perfectly fixed in their first-frame positions. Preserve all panel sizes, door seams, handles, hinges, extrusion profiles, feet, and cabinet proportions. The clip is unacceptable if cabinet geometry bends, panels merge, feet multiply, unrelated parts shift, or the exact last frame is not reached and held.
```

## Sequence 2 - Conveyor installation

**Instruction title:** `02 | Conveyor installation`

**Reference:** Leave empty.

**Frames:**

- First: `01-foundation-only.png`
- Last: `02-frame-detached.png`
- Duration: 4 seconds

**Instruction text:**

```text
The only permitted movers are the complete left infeed transfer assembly and complete right outfeed belt-conveyor assembly. Each conveyor is one rigid machine module. Its rails, belt or transfer mechanism, motor, gearbox, brackets, fasteners, scale, orientation, and finish must remain unchanged.

Move the left conveyor rightward and downward along one direct insertion path onto the left support table. Move the right conveyor leftward and downward along its mounting axis onto the right support structure. Use controlled deceleration, exact alignment, contact, rigid seating, and a short final hold. The conveyors must not flex, lengthen, shorten, rotate unpredictably, exchange parts, or pass through their supports.

The foundation, exploded outer-frame members, suspended tooling, vision camera, Cartesian mechanism, HMI, tower light, sensors, and I/O modules remain frozen. The clip is unacceptable if a motor changes shape, either conveyor is regenerated, stationary geometry moves, or the endpoint differs from the supplied last frame.
```

## Sequence 3 - Outer frame installation

**Instruction title:** `03 | Outer frame installation`

**Reference:** Leave empty.

**Frames:**

- First: `02-frame-detached.png`
- Last: `03-tooling-detached.png`
- Duration: 6 seconds

**Instruction text:**

```text
The only permitted moving group is the tall aluminum enclosure-frame structure. Treat it as rigid preassembled sections: left side section, right side section, rear section, and top rectangular rail section. Preserve extrusion profiles, lengths, black corner brackets, handles, fasteners, orientation, scale, and perspective.

Translate the left and right side sections horizontally inward along their mounting axes and seat them on the base. Bring the rear section into alignment without intersecting the tooling. Lower the complete top rectangular section vertically, align all corner connections, make contact, and seat squarely. Frame members remain straight and solid; nothing telescopes, bends, melts, grows, or changes cross-section.

The cabinet base, both conveyors, suspended tooling groups, vision module, Cartesian mechanism, HMI, tower light, sensors, and I/O modules remain perfectly stationary. The clip is unacceptable if any inactive component shifts, frame members duplicate, brackets disappear, transparent guarding appears, or the final frame is not matched exactly.
```

## Sequence 4 - Process-tooling installation

**Instruction title:** `04 | Process tooling installation`

**Reference:** Leave empty.

**Frames:**

- First: `03-tooling-detached.png`
- Last: `04-vision-detached.png`
- Duration: 6 seconds

**Instruction text:**

```text
The only permitted moving group is the ordinary process tooling suspended over the central bed: fixture plates, nests, guide rails, locating-post groups, pneumatic slides, and compact station modules. Preserve each tooling subgroup as a rigid complete assembly with unchanged hole patterns, fasteners, cylinders, posts, scale, orientation, metal finish, and left-to-right identity.

Install the tooling in a clean staggered vertical sequence. Begin with the lowest subgroups and progress upward. Each subgroup descends along the shortest vertical path to its corresponding visible bed mount, aligns, makes contact, seats firmly, and stops before the next subgroup completes. Preserve the original spatial order; tooling groups never merge, exchange details, pass through one another, or appear from nothing.

The foundation, conveyors, outer frame, vision module, Cartesian mechanism, HMI, tower light, sensors, and I/O modules remain frozen. The clip is unacceptable if tooling morphs, modules reorder, fasteners appear or disappear, stationary geometry changes, or the supplied endpoint is not reached exactly.
```

## Sequence 5 - AI vision installation

**Instruction title:** `05 | AI vision installation`

**Reference:** Leave empty.

**Frames:**

- First: `04-vision-detached.png`
- Last: `05-motion-detached.png`
- Duration: 4 seconds

**Instruction text:**

```text
The only permitted mover is the complete AI vision module: compact black industrial camera, orange accent, lens, light or sensor head, mounting arm, and bracket. Treat the entire module as one rigid unchanged object. Preserve lens diameter, housing proportions, bracket geometry, orientation, scale, materials, highlights, and all visible details.

Translate the module horizontally rightward along one straight mounting path at constant scale. Decelerate near the upper-left frame mount, align the bracket with the prepared connection, make firm contact, seat precisely, and hold the exact final pose. The module does not rotate, deform, emit light, scan, or change lens appearance.

The machine, installed tooling, detached Cartesian mechanism, HMI, tower light, sensors, and I/O modules remain perfectly stationary. The clip is unacceptable if the camera housing morphs, the lens changes, the bracket disappears, a duplicate camera appears, or any inactive geometry moves.
```

## Sequence 6 - High-speed motion installation

**Instruction title:** `06 | High-speed motion installation`

**Reference:** Leave empty.

**Frames:**

- First: `05-motion-detached.png`
- Last: `06-hmi-detached.png`
- Duration: 6 seconds

**Instruction text:**

```text
The entire 1920x1080 raster is a locked registration plate. Preserve the exact screen coordinates and apparent size of the canvas edges, black margins, cabinet doors, left support-table feet, right conveyor motor and legs, tower light, installed vision camera, detached HMI and electronics, and outer frame. Camera zoom, crop, reframing, perspective change, stabilization, and whole-frame scaling are prohibited.

The only permitted mover is the complete high-speed Cartesian pick-and-place assembly: twin vertical linear columns, vertical carriage, horizontal traverse beam, downward-facing working head, motor hardware, mounting plates, fasteners, and complete black cable carrier. Treat it as one rigid mechanically coherent module. Preserve all proportions, rail lengths, motor housings, carriage details, cable-chain link count, fasteners, orientation, materials, and scale.

Move the entire assembly downward and slightly rearward along one direct alignment path. Align its mounting faces with the prepared frame rails, establish clean contact, seat it rigidly, and let the cable carrier settle into the exact final curve without changing length or link count. Finish with a stable hold at the exact supplied endpoint.

The installed vision camera, tooling, frame, conveyors, foundation, detached HMI, tower light, sensors, and I/O modules remain perfectly stationary. The clip is unacceptable if rails grow or shrink, the cable carrier duplicates, motors disappear, geometry intersects the frame, or any inactive component changes.
```

## Sequence 7 - HMI installation

**Instruction title:** `07 | HMI installation`

**Reference:** Leave empty.

**Frames:**

- First: `06-hmi-detached.png`
- Last: `07-monitoring-detached.png`
- Duration: 4 seconds

**Instruction text:**

```text
The only permitted mover is the complete HMI control-panel assembly: rectangular enclosure, display, physical pushbuttons, emergency stop, side handles, rear mounting structure, and bracket. Treat it as one rigid unchanged object. Preserve panel proportions, screen content, bezel, button count and colors, emergency-stop geometry, handle shape, orientation, materials, scale, and perspective.

Translate the HMI horizontally leftward along one short straight mounting path. Align the bracket with the prepared right-side frame mount, establish solid contact, seat the panel squarely, and hold the exact final pose. The screen remains stable and does not animate, repaint, display new text, or change interface content.

The complete machine, installed vision system, installed Cartesian mechanism, detached monitoring modules, and tower light remain perfectly stationary. The clip is unacceptable if the screen morphs, buttons change, handles deform, the panel resizes, a duplicate enclosure appears, or an inactive component moves.
```

## Sequence 8 - Monitoring installation and completion

**Instruction title:** `08 | Monitoring and completion`

**Reference:** Leave empty.

**Frames:**

- First: `07-monitoring-detached.png`
- Last: `08-assembled.png`
- Duration: 6 seconds

**Instruction text:**

```text
The only permitted moving group is the condition-monitoring set: black-and-orange tower light, small generic sensor, edge-I/O modules, and small metal enclosure. Preserve every module as a rigid complete object with unchanged housing geometry, scale, orientation, colors, materials, indicators, connectors, and mounting faces.

Install the group sequentially. Lower the tower light vertically along its exact mounting axis, establish contact with the upper-right frame mount, and seat it rigidly. Then move the sensor, edge-I/O modules, and enclosure separately along short direct paths into their prepared right-side mounting positions. Each aligns, contacts, seats, and stops before the next module completes. Each object exists exactly once after installation.

The vision system, Cartesian mechanism, HMI, tooling, conveyors, frame, cabinets, and all other machine components remain perfectly stationary. Do not invent wiring, brackets, panels, indicators, or extra electronics. The clip is unacceptable if modules morph or duplicate, the tower changes proportions, new enclosures appear, inactive parts move, or the final completed-machine frame is not reached exactly.
```

## Recommended generation order

Test the single-module sequences first:

1. Sequence 5 - AI vision
2. Sequence 7 - HMI
3. Sequence 6 - High-speed motion
4. Sequence 8 - Monitoring
5. Sequence 2 - Conveyors
6. Sequence 3 - Outer frame
7. Sequence 4 - Process tooling
8. Sequence 1 - Foundation

Stop after the first failed single-module test. Do not spend credits on the more complex structural clips until vision, HMI, and motion demonstrate acceptable rigid-body continuity.

## Per-generation acceptance gate

Accept a clip only when all statements are true:

- The first generated frame matches the supplied first frame.
- The final generated frame matches the supplied last frame.
- Only the active sequence's named group moves.
- Every inactive machine component retains its identity, position, geometry, scale, and lighting.
- Moving components follow direct mounting paths, align, contact, seat, and settle.
- No component morphs, dissolves, grows, shrinks, duplicates, disappears, or gets replaced.
- The camera, framing, background, perspective, and exposure remain static.
- No text, people, tools, new guards, wiring, particles, sparks, glow, or sound are introduced.

If a clip fails, regenerate only that clip. Repair the smallest observed defect in its video prompt; do not broaden the instruction set or edit the failed video with Omni.
