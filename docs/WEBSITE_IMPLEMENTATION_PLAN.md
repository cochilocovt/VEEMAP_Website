# VEEMAP Website Implementation Plan

**Status:** Confirmed planning baseline

**Date:** 2026-08-27

**Scope:** All public website work outside the parallel homepage Hero workstream, followed by one controlled Hero/rest-of-site integration pass.

## 1. Purpose

Build the first complete release of the VEEMAP Technologies website as a proof-led, multi-page industrial-automation experience that:

- helps manufacturing leaders understand the kinds of production problems VEEMAP can solve;
- deliberately foregrounds Medical and Pharmaceutical automation;
- presents five complete sector solution pages without implying named customer delivery relationships;
- demonstrates machinery, engineering depth, controls, inspection and data capabilities without exposing proprietary solution details;
- converts qualified interest into a requirements email prepared in the visitor's own email application; and
- inherits the typography and color system established by the homepage Hero while allowing navigation and motion conventions to mature coherently during implementation.

The website is a persuasive engineering surface, not a project archive, customer-logo showcase or generic corporate brochure.

## 2. Binding decisions

These decisions are approved and must not be reinterpreted during implementation.

1. **All five sector pages ship in the first release:**
   - Medical & Pharmaceutical
   - Automotive
   - EV Solutions
   - Electronics
   - Consumer Goods
2. **Medical & Pharmaceutical receives deliberate priority.** It leads sector navigation, receives the greatest content depth, and becomes the first sector page designed and implemented.
3. **Sector content describes available solutions, not named customer machines.** Copy must say what VEEMAP can design, integrate or support for a product/process. It must not imply that a displayed system was delivered to a named company in that sector.
4. **No customer or client name or logo may appear anywhere public.** This covers public copy, imagery, captions, alt text, metadata, filenames and structured data. Controls and automation technology vendors may be named where the `docs/brand-context/` record supports it: Keyence, Siemens, Allen-Bradley, Omron, Mitsubishi, Zenon and WinCC. Naming a vendor must not imply endorsement, certification, or that a displayed system was delivered to a named customer. Keyence remains the only external party whose **logo** may be shown, and only with an approved logo asset. *(Amended 2026-08-29; see Section 21.)*
5. **Machinery may be shown only at a safe level of detail.** Public media must not expose proprietary mechanisms, complete machine architecture, client-specific fixtures, detailed CAD, confidential labels or sensitive process information.
6. **Raw HMI screenshots do not ship.** Approved, sanitized HMI data will be re-authored as VEEMAP-branded motion-graphics dashboard clips.
7. **The homepage Hero establishes typography and color.** Navigation composition and the broader motion language will be resolved as the full site develops, but they must remain consistent with the Hero's visual authority.
8. **The supplied official logo is authoritative.** The source is `C:\Users\V.T\Downloads\Asset 4.svg`.
9. **Team photography is excluded.** Do not block Company or Careers work on team photographs, and do not include a team-photo requirement in the launch plan.
10. **The enquiry remains a client-side `mailto:` handoff.** No backend, CRM, file upload or third-party submission service is authorized.

## 3. Product and audience brief

### Primary audience

Manufacturing leaders, plant and production engineers, process owners and procurement teams evaluating an automation partner for a new product, capacity increase, quality problem, traceability requirement or plant-scale manufacturing challenge.

### Priority audience

Medical-device and pharmaceutical manufacturing teams evaluating assembly, handling, testing, inspection, traceability and production-data solutions for regulated or quality-critical products.

### Secondary audience

Engineering candidates interested in mechanical design, electrical engineering, controls, robotics, manufacturing, assembly and industrial automation work.

### Visitor outcome

A qualified visitor should be able to:

1. recognize that VEEMAP covers stations, automated lines and complete plants;
2. find their sector and product/process family;
3. understand the relevant engineering, quality and data capabilities;
4. see credible but non-confidential machinery evidence; and
5. prepare a useful project enquiry without submitting sensitive drawings or files.

## 4. Positioning and copy rules

### Core positioning

VEEMAP provides custom automation solutions around the product, process constraint, quality requirement, target output and desired level of production integration.

### Required framing

| Use | Avoid |
| --- | --- |
| “Automation solutions for endotracheal tube assembly” | “The ET-tube machine we built for [company]” |
| “Solutions can combine feeding, assembly, testing, inspection and traceability” | “Our client achieved…” |
| “Representative machinery imagery” | “Customer installation” unless explicitly approved later |
| “Designed around product variants and process requirements” | Unsupported universal or guaranteed performance claims |
| “Data visualization can expose production state, quality and trends” | Raw HMI screenshots, customer tags or live production identifiers |
| “Medical and pharmaceutical automation solutions” | Certification, regulatory approval or “100% compliant” claims |

### Public proof allowed

- 236 projects delivered
- 55 clients across India and overseas
- five manufacturing sectors
- established in 2017
- the confirmed public address, phone, email and domain
- sourced capability descriptions that do not identify a customer
- Keyence partnership/name/logo, subject to using an approved Keyence logo asset and appropriate usage treatment
- the sourced controls and automation vendor stack by name — Keyence, Siemens, Allen-Bradley, Omron, Mitsubishi, Zenon, WinCC — as a competence signal only, with no logo other than Keyence's and no implied endorsement or certification
- the production figures previously published on VEEMAP's own Case Study page, approved 2026-08-29: the cap liner line at above 250 parts per minute over 8 stations on 1 track; the dispensing pump line at 11 parts and above 122 parts per minute over 50 stations on 11 tracks with more than 200 sensors; and the pivot terminal screwing machine's automatic screw feeding, servo torque control and precision rotary indexer. Publish these as machine specifications only — no customer attribution, no customer-identifying image alongside, no ranking claim built on them. Copy in [`LEGACY_SITE_CONTENT.md`](LEGACY_SITE_CONTENT.md).

### Public proof prohibited or restricted

- all customer and client names and logos, without exception;
- any external logo other than Keyence's, including the permitted controls vendors';
- testimonials, awards, certifications and social links not present in the approved source record;
- internal team-size, sales or revenue figures;
- the unverified spine-needle machine dimension;
- raw HMI screens, client dashboards or performance displays;
- source filenames or public URLs containing prohibited names;
- detailed machine layouts, proprietary geometry, fixtures, part drawings, serial numbers or configuration identifiers;
- claims that a displayed solution was built for a specific company; and
- time-sensitive pipeline figures unless separately refreshed and approved.

## 5. First-release information architecture

### Primary navigation

1. **Capabilities** → `/capabilities`
2. **Industries** → `/industries`
3. **Company** → `/company`
4. **Careers** → `/careers`
5. **Start a project** → `/contact`

The VEEMAP logo links to `/`. Medical & Pharmaceutical is the first item anywhere sector links are listed.

*Resolved 2026-08-29:* the nav label is **Capabilities**, matching its route and
the existing homepage nav. The earlier label "Solutions" collided with this
plan's own use of "solution" for sector product families. "Solution" stays a
copy word for what VEEMAP builds for a product or process; it is not a nav
label or a route.

### Route map

```text
/
├── /capabilities
├── /industries
│   ├── /industries/medical-pharma
│   ├── /industries/automotive
│   ├── /industries/ev-solutions
│   ├── /industries/electronics
│   └── /industries/consumer-goods
├── /company
├── /careers
└── /contact
```

### Routes deliberately omitted from the first release

- **Projects / Case Studies:** conflicts with the approved solution-first, non-client framing. Suitable evidence is presented within sector and capability pages instead.
- **Portfolio:** duplicates the function of sector solution content and the available legacy copy is placeholder material.
- **News:** no real editorial content or publishing cadence exists.
- **CMS/admin:** static, source-controlled content is sufficient for the approved first release.
- **Privacy/legal pages:** add only when analytics, cookies or a server-side submission service creates an actual data-processing requirement. The current theme preference and `mailto:` handoff must still be documented accurately if a privacy page is later added.

## 6. Cross-site hierarchy

### Medical & Pharmaceutical priority

Priority must be visible through information architecture and content investment, not through unsupported superiority claims.

- Place Medical & Pharmaceutical first in every sector list and menu.
- Give it the lead sector feature below the homepage Hero.
- Use it as the reference implementation for the sector-page system.
- Give it the broadest product-solution catalogue and the richest process explanation.
- Allocate the strongest approved production footage and the primary dashboard-motion sequence to it.
- Link to it from Capabilities, Industry 4.0/data sections and the main enquiry journey.
- Tailor its enquiry prompt to quality-critical assembly, testing, inspection and traceability needs.
- Preserve meaningful depth for the other four sectors; priority must not make them look unfinished.

### Site narrative

1. **Promise:** VEEMAP designs automation around the manufacturing requirement.
2. **Range:** from a focused station to a complete plant.
3. **Priority proof:** Medical & Pharmaceutical solution families.
4. **Breadth:** five sector capabilities.
5. **Method:** design, manufacture, assemble, test, commission and support.
6. **Intelligence:** controls, vision, traceability and production data.
7. **Action:** describe the product, process and constraint.

## 7. Page-by-page implementation brief

### 7.1 Homepage below the parallel Hero

The Hero remains owned by its parallel workstream. The rest-of-site workstream joins it only after the Hero reaches its integration checkpoint.

#### Section sequence

1. **Proof ledger**
   - 236 projects delivered
   - 55 clients
   - five sectors
2. **Medical & Pharmaceutical lead feature**
   - position VEEMAP around product-specific assembly, testing, inspection and traceability solutions;
   - use approved ET-tube footage or a carefully cropped derivative;
   - link to `/industries/medical-pharma`.
3. **Capability continuum**
   - semi-automatic platforms;
   - fully automatic lines;
   - complete plants.
4. **Five-sector index**
   - Medical & Pharmaceutical receives the lead position and largest editorial weight;
   - all other sectors remain directly accessible.
5. **Digital production layer**
   - feature a sanitized motion-dashboard clip, not a raw HMI screen;
   - explain controls, production state, quality signals, traceability and analytics.
6. **Engineering delivery sequence**
   - understand requirement;
   - design;
   - manufacture;
   - assemble and integrate;
   - trial and production test;
   - commission and support.
7. **Company and Careers bridge**
   - one concise company proof module;
   - careers preview based on the engineering work rather than team photography.
8. **Qualified enquiry close**
   - retain the safe `mailto:` preparation flow;
   - make the required context clear before the visitor starts.

#### Homepage constraints

- Do not duplicate full inner-page copy.
- Do not create a customer-logo wall.
- Do not present client-named project cards.
- Do not allow motion to hide content or block navigation.

### 7.2 Capabilities — `/capabilities`

#### Job

Explain the scale and composition of VEEMAP's automation offering so a buyer can determine whether the company can handle their requirement.

#### Required sections

1. **Capability thesis:** custom automation around the product and process.
2. **System scale:** semi-automatic station → automatic line → complete plant.
3. **Engineering disciplines:** mechanical, electrical, controls, robotics, vision, inspection and data.
4. **Delivery lifecycle:** consultation/requirement → design → manufacturing → assembly/integration → trials → commissioning → after-sales.
5. **High-speed and flexible automation:** describe design intent and configurable architecture without publishing client-specific performance.
6. **Quality and inspection:** dimensional inspection, vision, leak/functional testing, pass/fail handling and traceability.
7. **Connected production:** local HMI, SCADA, data collection, alerts, trends and dashboard visualization.
8. **Sector links:** Medical & Pharmaceutical first, followed by the other four sectors.
9. **Enquiry CTA:** ask for product, process, current constraint, required quality checks, variants and target production context.

#### Motion opportunity

Use one system-scale transition that moves from station to line to plant. The motion should explain increasing integration, not expose a real machine architecture.

### 7.3 Industries hub — `/industries`

#### Job

Route visitors to sector-specific solution language while showing that all five sectors are part of one engineering system.

#### Required structure

- Medical & Pharmaceutical lead feature occupying the strongest position and deepest preview.
- Four supporting sector entries with a real product/process list and distinct evidence.
- Cross-sector capability strip: assembly, testing, inspection, traceability, material handling and data.
- A shared enquiry CTA that lets the visitor identify a sector or choose “Other”.

Avoid a generic equal-card grid. Hierarchy must visibly communicate the strategic Medical & Pharmaceutical priority.

### 7.4 Medical & Pharmaceutical — `/industries/medical-pharma`

#### Job

Convince medical-device and pharmaceutical manufacturing teams that VEEMAP can engineer product-specific, quality-critical automation solutions without claiming certifications or named customer delivery history.

#### Solution catalogue

- endotracheal tube assembly;
- IV drip chamber assembly;
- spine-needle assembly;
- insulin-pen assembly;
- 3-way and 2-way valve assembly;
- pilot-check-valve assembly;
- SWDT and related medical-device assembly applications where the public source supports the product terminology.

These appear as solution modules or anchored sections on one flagship page in the first release. Do not create a separate route for every product until real search demand or sufficient unique content justifies it.

#### Required sections

1. **Sector thesis:** automation for quality-critical medical product assembly.
2. **Product-solution navigator:** direct access to each supported product family.
3. **Process orchestration:** feeding, orientation, assembly, joining, curing/gluing where relevant, testing, inspection and final handling.
4. **Quality layer:** vision, leak/functional testing, dimensional checks, reject handling and traceability.
5. **Flexible production:** variant handling, controlled changeover and modularity expressed as capabilities, not customer results.
6. **Sanitized production dashboard:** approved HMI-derived metrics re-authored as a motion clip.
7. **Machinery evidence:** tightly framed or abstracted footage that demonstrates motion and production context without exposing proprietary detail.
8. **Enquiry close:** collect product, process steps, quality checks, variant count, target production context and project stage.

#### Medical-content prohibitions

- no certification or regulatory-approval claims;
- no “100% compliant” or “guaranteed quality” language;
- no client names/logos;
- no unverified spine-needle dimensions;
- no unapproved exact performance figures tied to an identifiable system; and
- no raw product drawings or detailed fixtures.

### 7.5 Automotive — `/industries/automotive`

#### Solution themes

Recovered from the legacy Automobile page on 2026-08-29, which listed nine
machines by name — six of them inspection systems:

- **verification and inspection:** piston vision inspection, engine number
  inspection, brake shoe inspection, piston liner inspection, brake disc vision
  inspection;
- **assembly and joining:** radiator assembly, fuel rail assembly, complete
  clutch assembly, pipe and component handling;
- **surface and finishing:** robotic hood polishing; and
- **traceability:** identification, marking and result logging.

#### Page emphasis

**Lead on verification, not assembly.** Two thirds of the recovered machine
list and all three feature-band photographs available to this sector are
inspection systems. Present dimensional checking, vision inspection, functional
test and part identification as designed into the line rather than added at the
end of it, then show assembly and handling as the second theme.

Use abstracted machinery/CAD crops and inspection visuals. Do not expand or infer abbreviations found in source material, and do not display customer marks.

### 7.6 EV Solutions — `/industries/ev-solutions`

#### Solution themes

- motor and hub-motor assembly;
- controller and charger manufacturing support;
- multi-station assembly lines;
- testing and inspection;
- material flow and plant-level integration;
- production-data and traceability layers.

#### Page emphasis

Demonstrate how multiple production stages connect into a coherent plant without presenting a client installation or exposing the detailed plant layout.

### 7.7 Electronics — `/industries/electronics`

#### Solution themes

- electrical switch assembly;
- circuit-breaker automation;
- robotic soldering;
- RFID processing and verification;
- electrical/functional testing;
- vision inspection, marking and reject handling.

#### Page emphasis

Lead with process precision, repeatability and verification. Prefer VEEMAP-owned CAD/machine material and R&D motion. Remove or replace imagery carrying unapproved third-party marks.

### 7.8 Consumer Goods — `/industries/consumer-goods`

#### Solution themes

- dispensing-pump assembly;
- cap and liner insertion;
- valve assembly;
- packaging-component handling;
- screw feeding and controlled tightening;
- inspection and line monitoring.

#### Page emphasis

Present high-throughput, multi-stage assembly and flexible product handling as solution capabilities. Machinery media must be cropped or treated to remove customer identity and proprietary station detail.

### 7.9 Company — `/company`

#### Required sections

- VEEMAP Technologies identity and Manesar engineering base;
- founded in 2017;
- indigenous engineering and “Make in India” positioning;
- “We believe YES and NO equally” philosophy, with clear explanation rather than decorative quotation;
- public-safe milestone sequence focused on capability evolution;
- R&D, engineering, manufacturing, assembly and after-sales scope;
- Keyence relationship, provided the approved logo/wording is supplied; and
- contact bridge.

#### Exclusions

- team photo section;
- employee portraits;
- organization chart;
- team-size and revenue data;
- unapproved leadership biographies; and
- customer-logo wall.

Use facility and engineering-work imagery rather than trying to simulate a people/culture gallery.

### 7.10 Careers — `/careers`

#### Required sections

- the kinds of machines and production problems candidates work on;
- mechanical, electrical, controls, robotics, manufacturing and assembly disciplines;
- learning through varied projects, R&D and technology exposure;
- approved training/partner language;
- current vacancies only when supplied and confirmed; and
- a careers `mailto:` handoff until another application service is explicitly authorized.

#### Media strategy

Use R&D, mechanisms, controls, inspection and machine-development footage. Team photography is neither required nor planned.

#### Application constraints

- do not add a CV-upload form;
- do not invent vacancies, salary ranges, benefits or testimonials;
- if no current roles are supplied, publish an evergreen expression-of-interest route with accurate expectations.

### 7.11 Contact — `/contact`

#### Required content

- confirmed address, phone, email and domain;
- the requirements form currently used on the homepage;
- clear explanation that submission opens the visitor's email application;
- reminder not to include confidential drawings or sensitive files; and
- optional direct email/phone actions.

#### Recommended enquiry fields

- name;
- company;
- work email;
- phone, optional;
- sector;
- project stage;
- product or process;
- current constraint;
- target production context, optional;
- required tests/inspection, optional; and
- number of variants/changeover context, optional.

Do not promise a response time until the company approves one.

## 8. Visual-system integration

### Established authority

The homepage Hero and `site/DESIGN.md` own the current visual foundation:

- black and paper fields;
- signal orange for action, state and important proof;
- the established display, industrial-heading and technical-label typography;
- square corners and technical hairlines;
- asymmetrical editorial composition;
- light/dark theme support; and
- motion that explains engineering rather than decorating it.

Inner pages inherit this system. They do not run a separate brand-redesign process.

### Official logo integration

The supplied `Asset 4.svg` is a self-contained vector with:

- `viewBox="0 0 52.88 94.6"`;
- SHA-256 `FFCE57BBD0F6A49C7AAFC25E1E7EA6B5D530F376054FE72527D0221959142306`;
- no embedded text;
- no script or `foreignObject` content;
- no embedded raster images; and
- no external references.

During implementation:

1. preserve the original download unchanged;
2. copy an implementation derivative to `site/public/brand/veemap-logo.svg`;
3. keep its `viewBox` and vector paths intact;
4. add a provenance sidecar identifying it as the official client-supplied logo and recording the original file hash;
5. create dark/light treatments only through approved CSS/context or separately approved derivatives;
6. verify legibility at header, footer, favicon and social-preview sizes; and
7. do not redraw, trace or stylistically reinterpret the mark without approval.

Completed 2026-08-29: the master was verified and copied byte-identically to
`site/public/brand/veemap-logo.svg` with a provenance sidecar at
`site/public/brand/veemap-logo.svg.json`. Every claim above was confirmed
against the file — SHA-256 matches, `viewBox="0 0 52.88 94.6"`, and there is no
embedded text, script, `foreignObject`, raster image or external reference.

Two findings from that verification change what step 5 can deliver:

- **The mark is not monochrome.** It carries 32 fills at `#000000` plus greens
  `#1d5b25`, `#21672a`, `#329e41` and oranges `#792d12`, `#7d2f13`, `#833114`,
  `#d24e1f`. The greens sit outside the `site/DESIGN.md` palette entirely, and
  the logo orange is close to but not identical with `--signal` `#fa4c14`.
- **CSS recolouring is not available.** The fills are hard-coded rather than
  `currentColor`, so on the dark ground (`--ink` `#000`) the black portions of
  the mark disappear and no CSS or context treatment can recover them. A
  dark-theme treatment therefore requires a separately approved derivative.
  This is an open owner input, recorded in Section 18.

The asset is not yet wired into the site; the header currently renders the
CSS-drawn `SpinningBrandMark` component. If the SVG is ever inlined more than
once in a document, its five fixed `clipPath` ids must be namespaced.

### Navigation direction

Navigation remains an implementation design decision, but it must meet these requirements:

- persistent access to Industries and Start a Project;
- Medical & Pharmaceutical first in sector menus;
- keyboard-operable desktop and mobile behavior;
- no content hidden behind hover-only interaction;
- clear current-route state;
- stable layout during font and media loading; and
- no conflict with the Hero's opening composition.

### Motion direction

- One meaningful signature motion per route is preferable to scattered effects.
- Motion must describe assembly, flow, inspection, system scale or production state.
- Content remains visible without JavaScript and under `prefers-reduced-motion`.
- Mobile uses simplified, touch-safe and lower-cost motion.
- No route should require WebGL or a new 3D dependency without an approved production asset and clear explanatory benefit.

## 9. Media, confidentiality and provenance

### Asset classifications

| Class | Treatment |
| --- | --- |
| Official VEEMAP logo | Approved; preserve original and add provenance |
| Keyence name/logo | Permitted, but use only an approved source asset and accurate relationship wording |
| Customer/client names and logos | Remove from all public output |
| Controls vendor names (Siemens, Allen-Bradley, Omron, Mitsubishi, Zenon, WinCC) | Name in copy where sourced; never show their logos |
| Machinery photographs/video | Use after crop, masking and confidentiality review |
| CAD/isometric imagery | Use only at a level that cannot expose proprietary mechanisms or client configuration |
| Raw HMI screens | Internal reference only; never ship |
| HMI-derived data | Use only after field-level sanitization and approval |
| Third-party/stock/vendor imagery | Hold unless provenance and usage rights are confirmed; remove unapproved marks |
| Team imagery | Out of scope |

### Public-derivative workflow

1. Inventory the source file and record provenance.
2. Mark every visible logo, label, product identifier, serial number, dimension, control value and proprietary feature.
3. Decide: use, crop/mask, abstract/re-render, or hold.
4. Produce web derivatives under generic public filenames that contain no prohibited company names.
5. Strip unnecessary metadata from public derivatives.
6. Add or update the adjacent provenance JSON.
7. Review the final rendered asset—not only the source—for residual identity or confidential detail.
8. Keep raw media outside the public bundle.

No source media is deleted, renamed or overwritten as part of this workflow.

## 10. HMI-to-motion-dashboard workflow

### Objective

Transform approved process data visible on internal HMI screens into premium VEEMAP-native dashboard motion that communicates production intelligence without reproducing the customer interface or exposing sensitive information.

### Data extraction and approval

For each candidate screen:

1. identify useful data concepts, such as production state, output trend, good/reject count, inspection result, station health or alarm category;
2. remove customer/company names, product codes, recipe names, machine IDs, operator names, IP/network information, timestamps and serial/batch identifiers;
3. classify each value as:
   - **approved actual** — exact value may be public;
   - **normalized** — derived from real data but rescaled or de-identified;
   - **illustrative** — authored demonstration data, clearly labelled where a visitor could mistake it for actual performance;
4. record the source and approval state in a non-public data worksheet; and
5. stop production if the data owner cannot confirm the classification.

### Dashboard design

- Rebuild the information architecture from first principles; do not trace the source HMI layout.
- Use the website's typography, black/paper fields, signal orange and technical hairlines.
- Show a small number of legible production signals rather than a dense control-room replica.
- Use generic station/process labels.
- Remove interactive controls that imply the public page can operate machinery.
- Provide an adjacent HTML explanation of every visualized metric.

### Motion production

Use the already-installed Remotion toolchain unless a simpler CSS/SVG sequence fully covers the requirement.

Recommended clip package per approved dashboard:

- one 8–15 second seamless desktop loop;
- one simplified mobile crop or re-composition;
- H.264 MP4 and WebM delivery formats where supported by the build pipeline;
- one WebP/AVIF or PNG poster;
- muted/autoplay-safe playback;
- no audio dependency;
- captions or nearby text describing the data story; and
- a reduced-motion poster or short state change instead of continuous animation.

### HMI acceptance gate

- no raw HMI screenshot exists under `site/public/` or in the production bundle;
- no prohibited name/logo remains in pixels, text, metadata or filenames;
- every metric has an approval classification;
- illustrative/normalized data is not presented as a delivered performance claim;
- desktop and mobile clips are legible at their rendered size;
- the poster contains the same core information as the motion loop; and
- playback failure does not remove the surrounding explanation.

## 11. Content architecture

### Initial storage model

Keep first-release content local and typed. Do not add a CMS.

Recommended structure:

```text
site/
├── content/
│   ├── capabilities.ts
│   ├── sectors.ts
│   ├── company.ts
│   └── careers.ts
├── app/
│   ├── capabilities/page.tsx
│   ├── industries/page.tsx
│   ├── industries/[sector]/page.tsx
│   ├── company/page.tsx
│   ├── careers/page.tsx
│   └── contact/page.tsx
└── components/
    ├── site-shell/
    ├── enquiry/
    ├── media/
    └── motion-dashboard/
```

This is a target organization, not permission to create abstractions before reuse is demonstrated. Extract a shared component when a second real route needs it.

### Sector route shape

Resolved 2026-08-29: the five sector pages are served by the dynamic segment
`app/industries/[sector]/page.tsx`, not by five hand-written route folders.

- `generateStaticParams` derives the five slugs from `content/sectors.ts`, so
  the content model is the single source of route truth.
- `export const dynamicParams = false` makes any other slug a 404 rather than a
  runtime render.
- `generateMetadata` reads the same record, which keeps titles, descriptions and
  canonicals in step with the content automatically.

Every sector still renders substantive, individually authored content. A shared
route file is a rendering decision, not permission to generate five variations
of one template — Section 17 still requires distinct product and process
evidence per sector.

### Sector content fields

Each sector record should contain:

- route slug and display name;
- priority/order;
- audience problem and sector thesis;
- product-solution families;
- supported process steps;
- quality/inspection/data capabilities;
- approved machinery media and confidentiality treatment;
- dashboard clip reference and data classification;
- related capability links;
- enquiry prompt;
- SEO title/description; and
- non-public source/claim notes for review.

### Source traceability

Every factual claim must be traceable to `docs/brand-context/` or a later written approval. Content modules should retain non-public source notes during authoring, even when those notes do not render on the website.

## 12. Technical architecture

### Rendering model

- Use Next.js App Router server components for static content by default.
- Isolate menu state, theme control, enquiry preparation and motion into focused client components.
- Do not make every new route a single hydrated client component.
- Keep core content indexable and visible before animation initializes.

### Styling

- Preserve the Hero-established global tokens.
- `site/app/globals.css` keeps ownership of design tokens, element defaults and the shared site shell.
- Use route-scoped CSS Modules for new page composition. This is the one sanctioned addition alongside the global stylesheet; it does not license a third approach.
- Tailwind was installed and wired into PostCSS but never imported by any stylesheet. It was removed on 2026-08-29 so that exactly two mechanisms exist: the global token/shell sheet and route-scoped CSS Modules.
- Shared shell styles move out of `globals.css` during the Phase 1 shell extraction, not after the Hero merge checkpoint. See Section 15.
- Do not introduce any further styling paradigm or a component-library dependency.

### Media delivery

- Use `next/image` for responsive raster assets.
- Generate desktop/mobile video derivatives and poster frames.
- Lazy-load below-the-fold media.
- Avoid shipping the approximately 939 MB raw media library.
- Do not autoplay more than one prominent clip in the same viewport.
- Pause or reduce continuous playback when the content is not visible.

### Metadata and discovery

- Unique metadata for every route.
- Canonical URLs.
- `sitemap.ts` and `robots.ts`.
- Organization structured data using only approved company facts.
- Service/industry structured data without prohibited client names or unsupported claims.
- Descriptive Open Graph images without customer identity or proprietary geometry.

### Deployment lane

Resolved 2026-08-29: **Vercel with `next build`**, matching `site/vercel.json` and
`.github/workflows/ci.yml`.

The repository previously carried a second, unused lane — `build:sites` running
`vinext` against `@cloudflare/vite-plugin`, `wrangler` and
`@openai/sites-vite-plugin`. It was never referenced by CI or by
`docs/CI_CD.md`, and it made `next/image` behaviour, `sitemap.ts`, `robots.ts`
and server-component semantics ambiguous. It was removed on 2026-08-29 together
with `site/vite.config.ts`, `site/postcss.config.mjs` and
`site/.openai/hosting.json`.

Do not reintroduce a second build lane. `npm run lint` and `npm run build` are
the release verification commands.

### Dependencies

- Reuse Next.js, React, GSAP, Lucide and Remotion already in the repository.
- Do not add React Three Fiber, Drei, a CMS, carousel library, animation library or form service without a demonstrated need and explicit approval where required.
- Do not reintroduce Tailwind, Vite, `vinext`, Wrangler, the Cloudflare Vite plugin or the OpenAI Sites plugin.

## 13. Accessibility and responsive behavior

### Target

Use WCAG 2.2 AA as the implementation target for navigation, content, forms and motion alternatives.

### Required behaviors

- keyboard-accessible navigation and menus;
- visible focus states;
- semantic headings and landmarks;
- sufficient light/dark contrast;
- touch-safe controls;
- useful alt text that does not expose prohibited names;
- captions/transcripts or adjacent explanations for meaningful video/dashboard content;
- form labels, required-state and success messaging;
- no content that exists only inside animation;
- `prefers-reduced-motion` fallbacks; and
- page compositions that remain readable at narrow mobile widths and text zoom.

## 14. Performance requirements

- Core page content must render without waiting for motion or video.
- The Hero performance budget remains owned by the Hero workstream; inner pages must not add competing first-viewport media.
- Load dashboard clips and machine media only near the viewport.
- Use posters before video readiness.
- Avoid layout shift by declaring media dimensions/aspect ratios.
- Use transform/opacity-based motion where practical.
- Verify production Web Vitals rather than using development performance as evidence.
- Test on desktop, mobile and a lower-powered/reduced-motion path.

## 15. Parallel workstreams and ownership boundaries

### Workstream A — Homepage Hero

Owns:

- homepage Hero composition;
- Hero typography/color implementation;
- Hero media and choreography; and
- its immediate shared-style dependencies.

Rest-of-site work must not edit these while the Hero lane is active:

- the Hero markup inside `site/app/page.tsx`
- the Hero, commissioning, range and depth-reveal rules inside `site/app/globals.css`
- `site/app/CommissioningVideoSequence.tsx`
- `site/app/SpinningBrandMark.tsx`
- Hero/commissioning media assets

#### Shell extraction exception — approved 2026-08-29

The original boundary above named `site/app/page.tsx` and
`site/app/globals.css` as wholly off-limits. That was unbuildable: the shared
header, desktop nav, mobile nav, theme toggle, footer and enquiry form all live
inside those two files, so no other route could reach a navigable shell without
duplicating it.

One scoped diff is therefore approved ahead of the rest of Workstream B:

- move header, navigation, footer and the enquiry form out of
  `site/app/page.tsx` into `site/components/site-shell/` and
  `site/components/enquiry/`;
- keep their CSS in `site/app/globals.css` under the existing global class
  names; and
- change no Hero markup, no Hero CSS, and neither Hero component.

The homepage must render identically before and after. `site/app/layout.tsx` is
shared infrastructure — fonts, metadata base and the theme script — and is owned
jointly; changes to it need both lanes to agree.

##### Why the shell CSS stays global

An earlier draft of this exception also moved the shell rules into CSS Modules.
That contradicted Section 12, which gives `globals.css` ownership of tokens,
element defaults and the shared site shell — the shell is global chrome on
every route, so global is where its rules belong. Route-scoped CSS Modules are
for new page composition.

The rules are also entangled with Hero-owned selectors, so splitting them would
mean editing Hero CSS, which this exception forbids:

- `.header-cta, .primary-action` share one declaration block, and
  `.primary-action` is used by the Hero and the careers section;
- `.theme-toggle svg, .menu-toggle svg, .header-cta svg, .primary-action svg,
  .hero-scroll svg, .mobile-nav svg` spans shell and Hero in one selector;
- `.enquiry-intro h2` sits in a shared heading rule with five Hero-lane
  sections, and `.enquiry-section` in a shared section-padding rule; and
- shell rules recur across several media-query blocks, so a partial move risks
  leaving a responsive override behind.

##### Why the header is a client component

`SiteHeader` carries `'use client'` rather than being a server component with
client islands. The menu button sits inside `<header>` while the mobile panel
is a sibling of it, and the two share open state. The panel cannot move inside
`<header>` because the header carries a `backdrop-filter`, which would make it
the containing block for its fixed-position descendants and break the panel.
Next still server-renders the header to HTML, so navigation is present without
JavaScript. Section 12's rule stands for page content: routes are server
components, and only this chrome plus the enquiry form hydrate.

### Workstream B — Content and new routes

Owns:

- content governance and copy;
- new route folders;
- route-scoped styles;
- Capabilities, Industries, five sector pages, Company, Careers and Contact; and
- route metadata.

### Workstream C — Dashboard motion and media derivatives

Owns:

- HMI data sanitation worksheet;
- dashboard visual design;
- Remotion/dashboard clip production;
- media crops, masks, posters and responsive derivatives; and
- provenance sidecars.

### Integration checkpoint

After the Hero visual structure stabilizes:

1. agree the shared navigation behavior;
2. confirm the Phase 1 extracted shell still composes with the settled Hero;
3. switch homepage anchor-only navigation to the approved route map;
4. insert the homepage non-Hero sequence;
5. reconcile shared tokens and responsive breakpoints once; and
6. run a single full-site navigation and visual-regression pass.

## 16. Implementation phases and gates

### Phase 0 — Governance and source preparation

#### Deliverables

- approved claim matrix;
- prohibited-name/logo list: all customer identity banned, controls vendors nameable, Keyence the only permitted external logo;
- media confidentiality ledger;
- HMI data-classification worksheet;
- official logo provenance record; and
- confirmed route/content inventory.

#### Exit gate

Every first-release page has an approved evidence set, and no asset is scheduled for public use without a confidentiality treatment.

#### Status — 2026-08-29

Done:

- deployment lane resolved and the unused second lane removed; `npm run lint`
  and `npm run build` verified green on the pruned tree;
- official logo verified, copied to `site/public/brand/veemap-logo.svg` and given
  a provenance sidecar; and
- the four decisions in Section 21 recorded across Sections 2, 8, 12 and 15.

- the per-sector evidence budget, in `docs/MEDIA_EVIDENCE_BUDGET.md`;
- the legacy-site content recovery and rewritten draft copy, in
  `docs/LEGACY_SITE_CONTENT.md`; and
- the route/content inventory: nav label resolved to Capabilities (Section 5),
  sector routes resolved to one dynamic segment (Section 11).

Outstanding:

- claim matrix, media confidentiality ledger and HMI data-classification
  worksheet;
- a visual pass over the 124 unclassified `slide*` media files, which are the
  cheapest route to closing the EV evidence gap.

The legacy production figures were approved for publication on 2026-08-29; see
Section 4 and Section 21.

### Phase 1 — Content model and route foundation

#### Deliverables

- typed local content modules;
- server-rendered route skeletons;
- route metadata pattern;
- route-scoped styling foundation; and
- shared enquiry content model.

#### Exit gate

All routes build and expose meaningful text without relying on animation or unfinished placeholders.

#### Status — 2026-08-29: exit gate met

- shell extracted to `site/components/site-shell/` and
  `site/components/enquiry/`, verified against a prerendered-HTML diff of the
  homepage;
- `site/content/sectors.ts` carries all five sectors with the Section 11 field
  list, including non-public `sourceNotes`;
- all nine routes plus `not-found`, `sitemap.ts` and `robots.ts` build as static
  pages; the five sector routes come from `generateStaticParams` with
  `dynamicParams = false`;
- route-scoped composition lives in `route.module.css`, the first CSS Module in
  the repository;
- legacy `/blank-*` and `/portfolio` URLs redirect permanently to their nearest
  replacement, from `next.config.ts`; and
- Medical & Pharmaceutical now leads the enquiry sector list and the homepage
  sector tape, which both previously listed it last.

Verified: `npm run lint` and `npm run build` pass; every route's prerendered
HTML carries its full text with scripts stripped, including the enquiry form's
labels and controls.

Remaining for later phases, deliberately not built yet: page media, motion, the
tailored per-sector enquiry variants, and the expanded Section 7.11 contact
field set.

### Phase 2 — Medical & Pharmaceutical flagship

#### Deliverables

- complete Medical & Pharmaceutical page;
- product-solution catalogue;
- approved machine-media treatment;
- first sanitized dashboard-motion package; and
- tailored enquiry path.

#### Exit gate

The page clearly presents solution capability without client attribution, certification claims or proprietary detail, and works on desktop/mobile/reduced-motion paths.

#### Status — 2026-08-29: met, with one deliverable blocked

Delivered:

- the flagship page carries the Section 7.4 structure — sector thesis,
  product-solution navigator with anchored modules, process orchestration,
  quality layer, flexible production, production dashboard and enquiry close;
- the production dashboard is a VEEMAP-native CSS and SVG panel, built from
  first principles rather than tracing any HMI layout, with every value
  classified **illustrative** under Section 10 and labelled as such on the page;
- the enquiry close is inline and tailored: the sector is preselected and the
  prepared email names the sector; and
- no certification claim, no client attribution, no spine-needle dimension.

Blocked, and not by implementation effort:

- **Approved machine-media treatment.** A Section 9 content review of all six
  Medical assets put every one of them on hold. The three machine images are
  CAD renders showing complete machine architecture; the two product shots read
  as third-party stock with no confirmed provenance; the one genuine production
  frame contains a person, the rotary table and lane tooling, and a readable
  sensor set-point. A compliant crop was produced from the last of these,
  reviewed, and withdrawn for being visually weak. `ET_assembly.MOV` needs a
  frame-level review before any of it can be used. Details and the four routes
  to unblocking are in `docs/MEDIA_EVIDENCE_BUDGET.md`.

The page therefore ships with no photography. Section 7.4.7's machinery-evidence
section is omitted rather than filled with a placeholder.

Verified: `npm run lint` and `npm run build` pass; the route renders 4,157
characters of text with scripts stripped, including the dashboard's values and
its illustrative-data caption; all motion is CSS-only and every animated element
holds its final state under `prefers-reduced-motion`.

### Phase 3 — Remaining four sector pages

#### Deliverables

- Automotive;
- EV Solutions;
- Electronics;
- Consumer Goods; and
- Industries hub with Medical & Pharmaceutical priority.

#### Exit gate

Every sector has distinct product/process evidence, no thin placeholder sections, and no prohibited identity in copy or media.

#### Status — 2026-08-29: met on copy, blocked on media

All four sectors now carry sector thesis, solution families with distinct
product and process detail, process orchestration, quality capabilities,
flexible production and an inline enquiry close that preselects the sector.
Between 2,785 and 3,303 characters of text render per route with scripts
stripped. The Industries hub leads on Medical & Pharmaceutical.

A content review of the media was run **before** writing, on the lesson from
Phase 2. It found that no sector has publishable machinery evidence:

- `smartscrewiing.jpg` carries the **Legrand logo and wordmark** on the machine
  banner — customer identity baked into the pixels, which no crop removes;
- `robotic-soldering.jpg` carries a **DOBOT watermark** and a person's hand, and
  reads as the robot vendor's own marketing material, so usage rights are
  unconfirmed as well as the logo being prohibited;
- `hub-motor-line.jpg` is a CAD render of a **complete production line** with
  every station, the conveyor runs and roughly fifteen operator positions —
  exactly the plant layout Section 7.6 prohibits;
- `dispensing-pump-line.jpg` is a complete line render with station counts and
  component names on the feeder hoppers; and
- `inspection-machine-a.jpg` and `pipe-assembly-machine.jpg` are CAD renders of
  complete machines.

The library is largely CAD produced for sales presentations, where showing
everything was the point. That is what Sections 2.5 and 7.6 prohibit
publishing. This document's earlier claim that Automotive and Electronics were
media-rich is withdrawn; they are in the same position as EV.

All four pages therefore ship without photography, as Medical does. No
placeholder or holding image is used.

**Release blocker, carried forward:** `site/public/images/inspection-scan.png`
is already published on the homepage and is byte-identical to a reviewed asset
that shows a measurement screen with legible dimensions and a scanned part
profile. It is Hero-workstream content, so it has not been changed
unilaterally, but Section 17 cannot pass while it is live unless the owner
approves it explicitly. See `docs/MEDIA_EVIDENCE_BUDGET.md`.

### Phase 4 — Capabilities, Company, Careers and Contact

#### Deliverables

- capability continuum and delivery lifecycle;
- public-safe company story;
- engineering-work-led careers page without team photography;
- qualified contact/enquiry experience; and
- approved Keyence treatment if its final asset/wording is available.

#### Exit gate

All pages have complete responsive content, accurate metadata and a working no-backend enquiry path.

### Phase 5 — Homepage integration

#### Deliverables

- integrated shared navigation/footer;
- homepage non-Hero content sequence;
- Medical & Pharmaceutical lead feature;
- sector/capability route links; and
- resolved global motion behavior.

#### Exit gate

The Hero remains intact, all primary routes are reachable, and the homepage does not duplicate inner-page content.

### Phase 6 — Hardening and release

#### Deliverables

- factual/claim review;
- prohibited-name/logo scan;
- public-bundle HMI/raw-media scan;
- desktop/mobile/reduced-motion visual QA;
- accessibility pass;
- performance review;
- metadata/sitemap/robots validation;
- asset provenance verification;
- lint and production build evidence;
- Impeccable detector/finish review when UI implementation is complete; and
- refreshed `docs/LLM_HANDOFF.md`.

#### Exit gate

All acceptance criteria in Section 17 pass, or unresolved findings are explicitly recorded and accepted by the owner.

## 17. First-release acceptance criteria

### Content and positioning

- All five sector pages are live and substantive.
- Medical & Pharmaceutical is visibly prioritized.
- Sector pages describe solutions, not named customer projects.
- No prohibited customer/company name or logo appears anywhere public.
- Keyence is the only permitted external logo; no customer or client identity appears anywhere.
- Any named controls vendor is presented as a competence signal only, with no logo and no implied endorsement.
- No certification, testimonial, internal revenue/team figure or unsupported performance claim is present.

### Confidentiality

- Machinery media has completed confidentiality review.
- No public asset reveals excessive proprietary detail.
- No raw HMI screen ships.
- HMI-derived values have recorded classifications.
- Public filenames, alt text, metadata and structured data contain no prohibited identity.

### Experience

- Navigation reaches every primary route on desktop and mobile.
- Medical & Pharmaceutical appears first in sector navigation.
- Motion remains purposeful and optional.
- Reduced-motion users receive complete content.
- The site works without autoplay or video playback.
- Careers contains no team-photo dependency.

### Conversion

- Homepage and Contact enquiry flows prepare an accurate email.
- Required fields provide useful engineering context.
- No upload or server submission is present.
- The visitor is warned not to send confidential files initially.

### Technical quality

- `npm run lint` passes.
- `npm run build` passes on the selected deployment lane.
- All routes have unique metadata and canonical URLs.
- `sitemap.ts` and `robots.ts` are valid.
- Public media has responsive derivatives, posters and provenance.
- Desktop, mobile, keyboard and reduced-motion checks are recorded.

## 18. Remaining owner inputs

These do not block writing the page structure, but they gate specific launch content.

1. Approved HMI fields/values and whether each is actual, normalized or illustrative.
2. Approved Keyence logo master and final partnership wording.
3. Current vacancies and the careers email/application destination.
4. Whether the enquiry may promise a response time.
5. ~~Final deployment target and release verification lane.~~ **Resolved 2026-08-29:** Vercel with `next build`; `npm run lint` and `npm run build` are the verification commands. See Section 12.
6. Any medical/pharmaceutical regulatory terminology the company is contractually permitted to use; until supplied, the site uses quality-critical engineering language without compliance claims.
7. A dark-theme treatment for the official logo. The supplied master hard-codes its fills, so its black portions are invisible on the dark ground and CSS cannot correct this. Either an approved derivative or approval to place the mark on a paper-coloured field is required before the logo can appear in the header. See Section 8.

## 19. Explicit non-goals

- rebuilding or redirecting the active homepage Hero;
- publishing named-client case studies;
- customer/supplier logo wall;
- raw HMI gallery;
- detailed proprietary machine showcase;
- team-photo or leadership-gallery production;
- CMS, CRM, backend form or upload system;
- News or Portfolio publishing system;
- speculative 3D/WebGL implementation; and
- invented certifications, testimonials, performance figures or job openings.

## 20. Source authority

Implementation must reconcile copy and assets against:

- [`../PRODUCT.md`](../PRODUCT.md)
- [`../site/DESIGN.md`](../site/DESIGN.md)
- [`brand-context/README.md`](brand-context/README.md)
- [`brand-context/audience-and-positioning.md`](brand-context/audience-and-positioning.md)
- [`brand-context/company-overview.md`](brand-context/company-overview.md)
- [`brand-context/products-services.md`](brand-context/products-services.md)
- [`brand-context/contacts-and-credentials.md`](brand-context/contacts-and-credentials.md)
- [`brand-context/brand-voice-and-messaging.md`](brand-context/brand-voice-and-messaging.md)
- [`brand-context/visual-identity.md`](brand-context/visual-identity.md)
- [`MEDIA_EVIDENCE_BUDGET.md`](MEDIA_EVIDENCE_BUDGET.md) — which media can carry which page
- [`LEGACY_SITE_CONTENT.md`](LEGACY_SITE_CONTENT.md) — recovered legacy copy and its rewrite

The legacy public website is no longer hosted. A static capture is held at
`V:\VEEMAP\Website\Scraped_Old_Website\veemap_site` and was read on 2026-08-29;
`LEGACY_SITE_CONTENT.md` is the durable record of what it contained, since the
capture sits outside this repository.

Where this implementation plan narrows publication beyond those source documents, this plan controls the public website. In particular, the anonymization, Medical & Pharmaceutical priority, raw-HMI prohibition, proprietary-detail restriction, official-logo authority and team-photo exclusion are direct owner decisions recorded on 2026-08-27.

## 21. Amendment record

### 2026-08-29 — four owner decisions

Taken during the first implementation review of this plan against the actual
repository. Sections 2, 8, 12, 15, 16 and 18 were updated to match. Where this
section and an earlier section disagree, this section is later and controls.

#### 1. Repository exposure — accepted as-is

`github.com/cochilocovt/VEEMAP_Website` is public and stays public. The owner
was shown the following and accepted it:

- `media/` is tracked (159 files, roughly 940 MB, video through Git LFS) and
  includes `media/Rieke_pump.png`, `media/zenon console.svg`,
  `media/zenon dsah.svg`, `media/2CC SECOND LINE.mov`,
  `media/Data_analutics_HMI.mp4` and
  `media/PPt_Data/assets/client-portfolio.jpg`;
- `docs/brand-context/` names DENSO, RIEKE, STERIMED, APTAR, STRYKER, MARELLI,
  BELRISE, Legrand, DNKI, HONDA, Hollister and FCC.

This changes nothing about the public website. Sections 9, 10 and 17 continue to
govern `site/public/` and the production bundle in full: no customer identity in
shipped pixels, text, alt text, metadata, filenames or structured data, no raw
HMI screen, and the raw media library is never shipped.

Note for any later cleanup: because the material is already in Git history and
in LFS, deleting the files in a new commit would not remove them. Only making
the repository private, or a history rewrite with an LFS purge and a force push,
would.

#### 2. Shell extraction moved ahead of route work

The shared shell is extracted from `site/app/page.tsx` and
`site/app/globals.css` in Phase 1, as one scoped diff, instead of being
duplicated and reconciled at Phase 5. Full terms in Section 15. Hero markup,
Hero CSS and both Hero components stay untouched.

#### 3. Deployment lane fixed to Vercel

Vercel with `next build`. The unused `vinext`/Cloudflare Workers lane was
removed. Details and the removed files are listed in Section 12.

#### 4. Controls vendors may be named; customers may not

Section 2 decision 4 previously read "Keyence is the only external company name
or logo permitted". It now bans customer and client identity absolutely while
permitting the controls and automation vendors the brand-context record already
supports. Keyence remains the only external logo.

### 2026-08-29 — legacy production figures approved

The figures published on the previous website's Case Study page may be
republished: the cap liner line above 250 parts per minute over 8 stations on 1
track; the dispensing pump line at 11 parts and above 122 parts per minute over
50 stations on 11 tracks with more than 200 sensors; and the pivot terminal
screwing machine's automatic screw feeding, servo torque control and precision
rotary indexer. Added to the Section 4 allowed list.

They publish as machine specifications. Section 2.3 continues to apply without
exception — no customer attribution, no customer-identifying image beside them,
and no ranking or superiority claim built on top of them. The legacy framing
language around the numbers is not reused.

Marked "for now" by the owner. If the figures are later withdrawn, Consumer
Goods loses its strongest evidence and falls back to the capability framing
described in `docs/MEDIA_EVIDENCE_BUDGET.md`; nothing else on the site depends
on them.
