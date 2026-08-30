# VEEMAP Homepage Design System

## Direction

The homepage is an editorial machine-commissioning story, not a generic industrial brochure. It combines the typographic confidence of the approved Multiplane direction with the optical depth and disciplined motion language inspired by Dragonfly, while remaining unmistakably VEEMAP.

The visual thesis is “Special purpose. Exact by design.” A conceptual, non-proprietary machine moves from an exploded engineering state to an assembled state as the technology layers are explained.

## Color

- Ground: `#000000`
- Paper: `#F2F2F2`
- Signal: `#FA4C14`
- Dark-theme secondary text: `#A9A9A5`
- Light-theme secondary text: `#545450`

Orange is reserved for action, state, progress, and high-value emphasis. Light mode is a complete paper-and-signal interpretation rather than an inverted afterthought.

## Typography

- Display/editorial: Bodoni Moda
- Condensed industrial headings: Barlow Condensed
- Technical labels and metadata: JetBrains Mono

Large headings use tight leading and deliberate line breaks. Supporting copy stays compact and factual. Uppercase mono labels act as engineering notation, not decorative filler.

## Layout

- Desktop uses asymmetrical editorial grids, full-bleed machine stages, and sticky or pinned narrative regions.
- Mobile retains the discrete pinned commissioning sequence with touch-safe controls and readable capability copy; reduced-motion and media-failure states use the linear sequence.
- Section boundaries use hairlines, large shifts in scale, and controlled changes between black, paper, and signal-orange fields.
- Corners remain square; pill-shaped UI and generic card grids are avoided.

## Motion

- GSAP ScrollTrigger pins the commissioning sequence while its Observer input layer advances or reverses exactly one complete assembly chapter per wheel, swipe, or keyboard action.
- The assembled video, focus marker, progress line, and HTML capability copy move together at fixed chapter boundaries; extra input is held until the active chapter finishes.
- Motion favors opacity, transforms, and clipped reveals to protect frame rate.
- `prefers-reduced-motion` removes the scroll choreography and preserves all content in a readable static state.

## Imagery

- The commissioning machine is conceptually accurate and non-proprietary until simplified approved CAD or GLB assets are supplied.
- Source photographs are used only for supported capabilities and company context.
- Every shipped raster carries prompt or source provenance in an adjacent JSON file.
- Never introduce client identifiers, proprietary geometry, certifications, or numerical claims without approved source material.

## Interaction

- The theme choice persists across visits.
- Keyboard focus is clearly visible with the signal color.
- The enquiry form collects requirement context and prepares an email to VEEMAP; it never asks for sensitive file uploads.
- Navigation and calls to action stay concise and action-led.

## Content Guardrails

- Approved proof figures: 236 projects delivered, 55 clients, and 5 sectors.
- Public contact: `info@veemap.co.in`, `+91 9266374969`.
- Careers remain a secondary route and should foreground cutting-edge engineering work.
- Avoid invented performance figures, named client relationships, awards, certifications, and unsupported AI claims.
