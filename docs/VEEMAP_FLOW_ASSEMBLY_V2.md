# VEEMAP Flow assembly sequence v2

## Flow setup

Use the standard Flow prompt box with **Video > Frames > First + last**. Start with **Veo 3.1 Fast**, one output, 16:9, and the duration listed for the clip. Use **Veo 3.1 Quality** only after the frame pair produces correct rigid-body motion. Do not add Ingredients, reference images, Agent instructions, or previous videos. Use only the two named frames.

Upload frames from:

`site/public/images/flow-assembly-keyframes-v2/normalized-1920x1080/`

The nine images share a 1920x1080 canvas and were created as a reverse edit chain from the assembled machine. They are continuity-optimized generative keyframes, not mathematically identical CAD renders. Reject a result if a stationary part changes shape or position.

## Clip 1 - Foundation assembly

**Start frame:** `00-exploded-master.png`  
**End frame:** `01-foundation-only.png`  
**Duration:** 6 seconds

```text
Create one continuous controlled self-assembly transition from the supplied first frame to the supplied last frame. The camera is completely static and locked, with deep focus and the black studio background unchanged. The central structural chassis is the spatial anchor. Only the foundational groups move: the central cabinet structure aligns first; the cabinet doors and side panels translate along short straight mounting axes and seat flush; the machine feet rise vertically into their threaded mounting locations; the left support table and right support frame translate horizontally into the exact positions shown in the final frame. All moving objects remain rigid, retain their original geometry, scale, orientation, materials, and details, make firm mechanical contact, settle without bounce, and arrive at the exact supplied final composition. Every conveyor, frame member, tooling module, vision camera, Cartesian mechanism, HMI, tower light, sensor, and I/O module remains perfectly stationary throughout. Audio: silence. Exclusions: morphing, dissolves, teleportation, appearing parts, disappearing parts, duplicated geometry, bending metal, intersections, camera motion, background variation, text, people, sparks, glow, decorative effects.
```

## Clip 2 - Conveyor installation

**Start frame:** `01-foundation-only.png`  
**End frame:** `02-frame-detached.png`  
**Duration:** 4 seconds

```text
Create one continuous transition from the supplied first frame to the supplied last frame. Static locked camera, deep focus, identical black background, lighting, framing, and machine scale. Only the two complete conveyor assemblies move. The left infeed transfer assembly travels rightward and downward along one straight mechanically plausible path, aligns with the left support table, makes contact, and seats rigidly. The right outfeed belt conveyor travels leftward and downward along its mounting axis, aligns with the right support frame, makes contact, and seats rigidly. Each conveyor remains a solid unchanged assembly with its motor, rails, fasteners, proportions, and materials intact. All cabinet structures, exploded outer-frame sections, tooling groups, capability modules, and feet remain perfectly frozen. Hold the exact supplied final frame after both conveyors settle. Audio: silence. Exclusions: morphing, resizing, flexing conveyors, altered motors, duplicated parts, vanishing parts, collisions, intersections, camera motion, background variation, text, people, particles, glow.
```

## Clip 3 - Outer frame installation

**Start frame:** `02-frame-detached.png`  
**End frame:** `03-tooling-detached.png`  
**Duration:** 6 seconds

```text
Create one continuous mechanically controlled transition from the supplied first frame to the supplied last frame. The camera remains completely static and the black studio background, illumination, shadows, perspective, and machine placement remain unchanged. Only the preassembled aluminum enclosure-frame sections move. The left and right vertical side sections translate horizontally inward along their mounting axes and seat on the base; the rear section follows and locks into alignment; the rigid top rectangular rail section lowers vertically, aligns with all four uprights, makes contact, and seats squarely. Extrusion profiles, black brackets, handles, fasteners, scale, and geometry remain unchanged throughout. The suspended process tooling and every detached capability module remain perfectly stationary. End with the exact frame geometry shown in the supplied last frame and a stable hold. Audio: silence. Exclusions: morphing extrusions, bending rails, telescoping metal, new frame members, duplicated brackets, missing parts, intersections, camera motion, background change, transparent guarding, text, sparks, glow.
```

## Clip 4 - Process-tooling installation

**Start frame:** `03-tooling-detached.png`  
**End frame:** `04-vision-detached.png`  
**Duration:** 6 seconds

```text
Create one continuous transition from the supplied first frame to the supplied last frame. Use a static locked camera, deep focus, and unchanged black studio lighting. Only the ordinary process-tooling subassemblies over the central working bed move. In a clean staggered sequence from the lowest modules upward, each rigid fixture plate, nest, guide rail, locating-post group, pneumatic slide, and compact station module descends vertically along the shortest path to its corresponding visible mounting point. Every group preserves its exact shape, scale, orientation, left-to-right order, metal finish, fasteners, and internal relationships. Each group aligns, makes contact, seats firmly, and stops before the next group completes. The chassis, conveyors, outer frame, vision camera, Cartesian mechanism, HMI, tower light, sensors, and I/O modules remain perfectly frozen. Arrive at and hold the exact supplied final frame. Audio: silence. Exclusions: morphing tooling, merging fixtures, appearing geometry, disappearing parts, duplication, reordering, intersections, camera motion, background variation, text, particles, glow.
```

## Clip 5 - AI vision installation

**Start frame:** `04-vision-detached.png`  
**End frame:** `05-motion-detached.png`  
**Duration:** 4 seconds

```text
Create one continuous transition from the supplied first frame to the supplied last frame. Static locked camera, deep focus, identical black background, lighting, perspective, framing, and machine geometry. Only the complete AI vision module moves. The compact black industrial camera, orange accent, lens, light or sensor head, mounting arm, and bracket remain one rigid unchanged assembly. It translates horizontally rightward along a straight path at constant scale, decelerates near the upper-left frame mount, aligns with the prepared bracket, makes firm contact, and seats precisely in the orientation shown in the supplied last frame. The camera lens and housing never deform or rotate. Every other machine part and every other detached module remains perfectly stationary. Hold the exact final frame after seating. Audio: silence. Exclusions: camera-body morphing, lens distortion, resizing, duplicated cameras, disappearing brackets, floating drift, intersections, camera movement, background variation, text, scanning beams, particles, glow.
```

## Clip 6 - High-speed motion installation

**Start frame:** `05-motion-detached.png`  
**End frame:** `06-hmi-detached.png`  
**Duration:** 6 seconds

```text
Create one continuous six-second technical assembly transition from the supplied first frame to the supplied last frame. This is a fixed-camera engineering visualization, not a cinematic camera move. Treat the complete 1920×1080 image as a locked registration plate. The canvas edges, black negative-space margins, central cabinet doors and handles, left support-table feet, right conveyor motor and legs, tower light, installed vision camera, detached HMI and electronics, outer aluminum frame, and every stationary machine edge must retain the same screen coordinates, apparent size, perspective, brightness, and sharpness in every frame. The camera matrix remains identical throughout: zero zoom, dolly, pan, tilt, roll, reframing, stabilization crop, lens breathing, perspective shift, or whole-frame scaling. Camera motion must never be used to reconcile the two endpoints.

The complete high-speed Cartesian pick-and-place mechanism is the only moving object. Its exact boundary includes the twin vertical linear columns, vertical carriage and mounting plates, horizontal traverse beam, downward-facing working head, motor hardware, fasteners, and complete black cable-carrier loop. Treat this entire mechanism as one rigid preassembled solid body. Preserve its rail lengths, cross-sections, hole patterns, carriage details, motor housings, fastener positions, cable-chain link count, proportions, materials, highlights, orientation, and internal spacing. The mechanism does not assemble itself internally, articulate, rotate, bend, stretch, shrink, grow, shed components, or generate replacement geometry. Any small apparent size change permitted by the two supplied endpoints is confined to this moving mechanism and results only from its shallow rearward depth translation; the machine and full frame never resize.

[00:00-00:00.75] Hold the supplied first frame exactly. The detached Cartesian mechanism remains motionless above the machine. Every stationary registration anchor remains pixel-stable.

[00:00.75-00:03.75] The complete Cartesian mechanism begins one slow, controlled, CAD-constrained rigid-body translation. It moves predominantly straight downward in the image plane, with only the slight rearward and rightward correction required to reach the final mounting pose. The horizontal traverse beam stays perfectly level and parallel to the machine's upper front extrusion. Both vertical columns remain vertical, the working head continues pointing straight down, and the cable-carrier loop remains attached and unchanged. The mechanism follows one continuous path with smooth acceleration and deceleration. It passes existing frame members with correct foreground and background occlusion; solid parts never pass through one another and nothing dissolves to reveal the destination.

[00:03.75-00:05.00] Reduce speed for final alignment. The rigid mounting plates arrive between the prepared inner frame rails, their faces become flush with the receiving mounts, and the mechanism seats with precise metal-to-metal contact. Use only a minimal final linear correction, without rotation or rescaling. The horizontal beam remains level, the vertical carriage remains square, the working head remains centered over the tooling bed, and the cable carrier settles into the exact curve visible in the supplied last frame.

[00:05.00-00:06.00] Hold the supplied last frame exactly. The mechanism is fully seated and completely stationary. Every inactive component remains identical to its first-frame identity and final-frame location.

Audio: silence. Exclusions: global image resizing, zoom, crop, reframing, camera movement, perspective warping, background drift, exposure pulsing, focus breathing, machine-body morphing, component reconstruction, duplicated rails, altered motors, cable-chain regeneration, appearing mounts, disappearing brackets, inactive-object motion, geometry intersections, temporal smearing, text, people, tools, sparks, particles, glow.
```

## Clip 7 - HMI installation

**Start frame:** `06-hmi-detached.png`  
**End frame:** `07-monitoring-detached.png`  
**Duration:** 4 seconds

```text
Create one continuous transition from the supplied first frame to the supplied last frame. Static locked camera, unchanged black background, deep focus, identical lighting, framing, perspective, and machine geometry. Only the complete HMI control-panel assembly moves. The rectangular enclosure, screen, physical pushbuttons, emergency stop, side handles, and mounting bracket remain one rigid unchanged object. It translates horizontally leftward along a short straight mounting path, aligns with the prepared right-side frame mount, makes solid contact, seats squarely, and stops in the exact position and orientation shown in the supplied last frame. The display content remains stable and does not transform. The entire machine, installed vision system, installed Cartesian mechanism, detached monitoring modules, and tower light remain perfectly stationary. Hold the exact final frame. Audio: silence. Exclusions: screen-content morphing, altered buttons, distorted handles, resizing, duplicated panels, disappearing mounts, intersections, camera motion, background variation, captions, particles, glow.
```

## Clip 8 - Condition monitoring and final completion

**Start frame:** `07-monitoring-detached.png`  
**End frame:** `08-assembled.png`  
**Duration:** 6 seconds

```text
Create one continuous final assembly transition from the supplied first frame to the supplied last frame. Keep the camera completely static and preserve the black studio background, deep focus, lighting, scale, perspective, machine geometry, and all installed systems. Only the condition-monitoring group moves. First, the black-and-orange tower light descends vertically along its mounting axis, contacts the upper-right frame mount, and seats rigidly. Next, the small generic sensor, edge-I/O modules, and metal enclosure travel separately along short straight paths to their prepared right-side mounting locations, align, make contact, and seat exactly as shown in the supplied last frame. Every object remains rigid, complete, and unchanged in scale, orientation, materials, and details, and each exists exactly once after installation. The vision system, Cartesian mechanism, HMI, tooling, conveyors, frame, and cabinets remain perfectly stationary. Finish on the exact supplied completed-machine frame with a stable hold. Audio: silence. Exclusions: morphing electronics, duplicated modules, disappearing parts, invented wiring, added enclosures, floating drift, intersections, camera motion, background variation, text, people, sparks, particles, glow.
```

## Generation order and rejection rule

Generate clips 5, 6, and 7 first. They contain one clearly isolated rigid assembly and will reveal whether the current Flow model preserves the keyframe identity. If any of these still morphs, do not spend credits on clips 1-4. Reject any clip in which an inactive component changes, a supplied endpoint is not reached, the camera moves, or geometry appears or disappears.
