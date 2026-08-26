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
4. **Keyence is the only external company name or logo permitted.** No other customer, supplier or partner names/logos may appear in public copy, imagery, captions, alt text, metadata, filenames or structured data.
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
- sourced capability descriptions that do not identify a prohibited company
- Keyence partnership/name/logo, subject to using an approved Keyence logo asset and appropriate usage treatment

### Public proof prohibited or restricted

- all company/customer names and logos other than Keyence;
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

1. **Solutions** → `/capabilities`
2. **Industries** → `/industries`
3. **Company** → `/company`
4. **Careers** → `/careers`
5. **Start a project** → `/contact`

The VEEMAP logo links to `/`. Medical & Pharmaceutical is the first item anywhere sector links are listed.

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

- radiator and pipe assembly;
- fuel-system and injector assembly;
- clutch and brake-related assembly;
- component handling and joining;
- dimensional and vision inspection;
- identification, marking and traceability.

#### Page emphasis

Show the relationship between flexible product handling, inspection and traceability. Use abstracted machinery/CAD crops and inspection visuals. Do not expand or infer abbreviations found in source material, and do not display customer marks.

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
| Other company/customer names/logos | Remove from all public output |
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
- Use route-scoped CSS Modules for new page composition while the Hero workstream is active.
- Integrate shared shell styles once, after the Hero merge checkpoint.
- Do not introduce a second styling paradigm or a component-library dependency.

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

### Dependencies

- Reuse Next.js, React, GSAP, Lucide and Remotion already in the repository.
- Do not add React Three Fiber, Drei, a CMS, carousel library, animation library or form service without a demonstrated need and explicit approval where required.

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

Rest-of-site work must not edit these files while the Hero lane is active:

- `site/app/page.tsx`
- `site/app/globals.css`
- `site/app/CommissioningVideoSequence.tsx`
- Hero/commissioning media assets

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
2. extract or adapt the site header/footer without rewriting the Hero;
3. switch homepage anchor-only navigation to the approved route map;
4. insert the homepage non-Hero sequence;
5. reconcile shared tokens and responsive breakpoints once; and
6. run a single full-site navigation and visual-regression pass.

## 16. Implementation phases and gates

### Phase 0 — Governance and source preparation

#### Deliverables

- approved claim matrix;
- prohibited-name/logo list with Keyence as the only exception;
- media confidentiality ledger;
- HMI data-classification worksheet;
- official logo provenance record; and
- confirmed route/content inventory.

#### Exit gate

Every first-release page has an approved evidence set, and no asset is scheduled for public use without a confidentiality treatment.

### Phase 1 — Content model and route foundation

#### Deliverables

- typed local content modules;
- server-rendered route skeletons;
- route metadata pattern;
- route-scoped styling foundation; and
- shared enquiry content model.

#### Exit gate

All routes build and expose meaningful text without relying on animation or unfinished placeholders.

### Phase 2 — Medical & Pharmaceutical flagship

#### Deliverables

- complete Medical & Pharmaceutical page;
- product-solution catalogue;
- approved machine-media treatment;
- first sanitized dashboard-motion package; and
- tailored enquiry path.

#### Exit gate

The page clearly presents solution capability without client attribution, certification claims or proprietary detail, and works on desktop/mobile/reduced-motion paths.

### Phase 3 — Remaining four sector pages

#### Deliverables

- Automotive;
- EV Solutions;
- Electronics;
- Consumer Goods; and
- Industries hub with Medical & Pharmaceutical priority.

#### Exit gate

Every sector has distinct product/process evidence, no thin placeholder sections, and no prohibited identity in copy or media.

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
- Keyence is the only permitted external name/logo.
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
5. Final deployment target and release verification lane.
6. Any medical/pharmaceutical regulatory terminology the company is contractually permitted to use; until supplied, the site uses quality-critical engineering language without compliance claims.

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

Where this implementation plan narrows publication beyond those source documents, this plan controls the public website. In particular, the anonymization, Medical & Pharmaceutical priority, raw-HMI prohibition, proprietary-detail restriction, official-logo authority and team-photo exclusion are direct owner decisions recorded on 2026-08-27.
