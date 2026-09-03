# VEEMAP Complete Multi-Page Remodel

## Summary

Rebuild the website as a polished, solution-first multi-page experience and release it through the existing Vercel project at `veemap-technologies.vercel.app`.

The production baseline already returns HTTP 200 for all 11 routes. The remodel will preserve that coverage while resolving the five critique priorities: route availability, multi-page navigation, Medical/Pharma prominence, mobile commissioning usability, and mailto recovery.

The established black/paper/orange industrial-editorial identity remains. Three.js will not be added until an approved production-ready model exists; GSAP, responsive video, CSS, and SVG will provide the motion system.

---

> **Status annotations added 2026-09-01.** Inline `> Status:` notes mark how far
> the current build meets each item, using: ✅ done · 🟡 partial · ⛔ not started ·
> ⚠️ conflict (current build diverges from this plan). The source of most "done"
> items is the 2026-09-01 editorial redesign of Company, Capabilities, Industries
> and the sector template (imported from Claude Design); it did not touch the
> homepage, Careers, Contact, the shell nav, the commissioning sequence or the
> enquiry handoff. A build-status summary and an execution order for the
> remaining work are appended at the end of this file.

---

## Implementation Changes

### 1. Production routes and navigation

> **Status: 🟡 partial.** Routes preserved and Medical-first kept across the
> redesigned pages; `next build` emits all 15 outputs. **Not done:** the shell
> nav (`SiteHeader`) still uses raw `<a>` for the four primary items with **no
> active-route indication**. Mobile-menu-closes-after-nav and Start-a-project →
> `/contact` already held before this work. Redirects/sitemap/canonical/robots/404
> untouched (intact).

- Preserve and verify:
  `/`, `/capabilities`, `/industries`, five sector routes, `/company`, `/careers`, and `/contact`.
- Keep Medical & Pharmaceutical first everywhere sectors are listed.
- Replace internal `<a>` navigation with Next.js links, add active-route indication, close the mobile menu after navigation, and keep “Start a project” consistently linked to `/contact`.
- Keep the four primary navigation items: Capabilities, Industries, Company, Careers.
- Preserve legacy redirects and the generated sitemap, canonical metadata, robots configuration, and custom 404 page.
- Treat Vercel as canonical. Leave the inaccessible ChatGPT Sites copy untouched rather than maintaining two divergent releases.

### 2. Uncluttered proof-led homepage

> **Status: ⛔ not started.** The homepage (`app/page.tsx`, `HomeSections`) is
> untouched: the old video Hero and the blurred pointer-following duplicate
> headline are still live. None of the fixed section order, the image hero, or
> the selected-client carousel exists yet. ⚠️ Note: the four **interior** page
> heroes I built autoplay the commissioning video — the opposite of this
> section's "priority image rather than another autoplaying hero video"
> direction; reconcile when the hero treatment is settled.

Use this fixed homepage order:

1. **Hero:** split composition with one claim, one deck, one CTA, one non-proprietary machine visual.
   - H1: “Special-purpose machines. Engineered around your process.”
   - Deck: concise explanation covering stations through complete plants.
   - CTA: “Tell us about your process” → `/contact`.
   - Machine visual: existing assembled concept-machine asset, rendered as an optimized priority image rather than another autoplaying hero video.
   - Bottom sector rail: Medical & Pharmaceutical highlighted first, followed by Automotive, EV Solutions, Electronics, and Consumer Goods. Each name links to its detailed page; no descriptions or floating callouts crowd the viewport.
2. **Proof ledger:** 236 projects, 55 clients, five sectors.
3. **Selected-client carousel:** Aptar, Hollister, Stryker, and Marelli only.
   - Use clean locally available artwork with provenance records.
   - Show logos without project captions, case-study claims, outbound links, or implied endorsements.
   - Use a CSS-driven continuous strip, pause on hover/focus, and render a static list under reduced motion.
4. **Medical & Pharmaceutical lead feature:** first and deepest sector teaser.
5. **System scale:** semi-automatic station → automatic line → complete plant.
6. **Commissioning sequence:** simplified responsive machine-assembly story.
7. **Engineering, inspection, and connected-production proof.**
8. **Delivery lifecycle.**
9. **Careers teaser.**
10. **Requirements enquiry.**

Remove the blurred pointer-following duplicate headline and other competing hero effects. Keep a single entrance sequence using transforms, opacity, and clipping.

### 3. Route-specific content architecture

> **Status: 🟡 mostly done for six routes; two conflicts.** Redesigned:
> Capabilities ✅, Company ✅, Industries hub (🟡 — built as deep per-sector
> blocks rather than the "concise index" this plan asks for), Medical ✅,
> Automotive 🟡 (verification lead ✅, **no SVG inspection sweep**), EV ✅,
> Electronics 🟡 (content ✅, **no animated diagram**), Consumer Goods ✅ (rate
> ledger with the approved 250/122/200 specs). **Not done:** Careers ⛔,
> Contact ⛔. ⚠️ **Conflicts:** the Company page still shows the public "…
> outstanding owner inputs" Keyence note this section says to **remove**; and
> `inspection-scan.png` is still live on the homepage (not used on any redesigned
> page). Customer identities: none added — the four-logo carousel exception is
> unused so far.

- **Capabilities:** turn the current text stack into a system-scale comparison, engineering-discipline matrix, lifecycle track, and quality/data section.
- **Industries:** use a large Medical/Pharma lead composition followed by a concise index of all five sectors.
- **Medical & Pharmaceutical:** retain the deepest page—solution navigator, process orchestration, inspection/traceability, flexible production, sanitized dashboard, and tailored enquiry.
- **Automotive:** lead with verification and inspection; animate one restrained SVG inspection sweep.
- **EV Solutions:** organize the page as a connected production-stage flow ending in test and traceability.
- **Electronics:** organize around repeatable joining, tightening, soldering, inspection, and electrical test.
- **Consumer Goods:** lead with rate, consistency, and changeover; use only the already approved anonymized machine specifications.
- **Company:** editorial company narrative, capability timeline, proof band, and supported technology-partner wording.
- **Careers:** discipline matrix, real engineering problems, training, and expression-of-interest email.
- **Contact:** direct contact first, then the requirements form and recovery panel.
- Remove public-facing internal notes such as “owner input outstanding.”
- Remove `inspection-scan.png` from the public experience because it exposes legible dimensional information.
- Keep customer identities confined to the approved four-logo carousel; do not attach those companies to machines, products, sectors, metadata, or case studies.

### 4. Motion and responsive commissioning

> **Status: ⛔ not started (homepage); ⚠️ mechanism divergence (interior).** The
> commissioning-sequence rework, the four two-second chapters, the mobile no-pin
> behaviour and the single shared GSAP route-reveal wrapper are all homepage/
> shell work and untouched. Three.js correctly not added ✅. ⚠️ The interior
> reveals I built use CSS `animation-timeline: view()`, not a GSAP wrapper — a
> decision to settle: either accept CSS reveals as the route-reveal mechanism
> (no JS, already reduced-motion-safe) and reserve GSAP for the commissioning
> ScrollTrigger, or rebuild reveals in the shared GSAP wrapper. The interior
> pages also lean on many small reveals rather than the plan's "at most one
> meaningful animated diagram per sector."

- Replace the 62.8-second, eight-stage input-intercepting sequence with the existing eight-second desktop and portrait assembly renders.
- Present four two-second chapters: AI Vision, High-Speed Motion, Industry 4.0 HMI, and Predictive Health.
- Desktop:
  - Use one bounded ScrollTrigger sequence.
  - Keep the pin short and allow normal scrolling to enter and exit without wheel/touch trapping.
  - Synchronize chapter copy, progress, and video time.
- Mobile:
  - Do not pin or intercept scrolling.
  - Use the portrait render followed by four normally flowing chapter summaries.
  - Keep all explanatory text visible.
- Reduced motion:
  - Render the assembled poster and complete ordered text with no scrub, pin, autoplay, or continuous carousel motion.
- Add one shared GSAP client wrapper for route reveals and clean it up with `useGSAP`, scoped refs, and `gsap.matchMedia()`.
- Give each sector at most one meaningful animated diagram. Animate only transforms, opacity, SVG stroke progress, and clip paths.
- Do not install Three.js, React Three Fiber, or Drei in this release. Reconsider them only after an approved optimized GLB exists and demonstrates value beyond the existing machine assets.

### 5. Recoverable enquiry handoff

> **Status: ⛔ not started.** The existing `EnquiryForm` (client-side `mailto:`)
> is reused unchanged. No pure `EnquiryDraft` serializer, no recovery panel, no
> "open again / copy address / copy summary" actions, no selectable fallback.

- Keep the client-side `mailto:` architecture; add no backend, CRM, upload, or third-party submission service.
- Extract the email-draft serializer into a pure typed utility returning recipient, subject, plain-text body, and mailto URL.
- After “Prepare email”:
  - Attempt to open the default mail application.
  - Keep a visible recovery panel on the page with the destination address and full formatted summary.
  - Provide “Open email app again,” “Copy email address,” and “Copy enquiry summary.”
  - Show a selectable text fallback when Clipboard API access fails.
- Do not store requirement details in localStorage, analytics, or a remote service.
- Preserve the entered fields and recovery summary while the page remains open.
- Clarify that the form prepares an email but does not submit or upload anything.

## Interfaces and Content Model

> **Status: ⛔ not started.** No `homeSummary` field, no `ClientLogo` record, no
> `EnquiryDraft` type/serializer. `PRODUCT.md` and `site/DESIGN.md` are not yet
> updated for Vercel-canonical, proof-led hero, the four-logo exception,
> GSAP-first/deferred-Three.js, or mobile commissioning. (`content/sectors.ts`
> remains the source of truth and is unchanged.)

- Keep `Sector` as the source of truth and add only a short `homeSummary` field for the five-item homepage rail.
- Add a small typed `ClientLogo` record containing the four approved names, local asset paths, and intrinsic dimensions.
- Add an `EnquiryDraft` type and pure serializer used by both the form and its recovery actions.
- Introduce no public API endpoints, databases, analytics events, CMS schema, new animation libraries, or speculative component framework.
- Update `PRODUCT.md`, `site/DESIGN.md`, and the implementation authority to record:
  - Vercel as canonical production;
  - the proof-led hero;
  - the four-logo exception to the previous client-logo prohibition;
  - GSAP-first motion and deferred Three.js;
  - the mobile commissioning behavior.

## Verification and Release

> **Status: 🟡 only the build is green.** `next build` produces all 15 static
> outputs ✅ and `tsc --noEmit` is clean. ⚠️ **Lint regressed:** this plan wants
> to *resolve* the two raw-image warnings and ship lint-zero with `next/image`,
> but the redesign added ~15 raw `<img>` elements — more warnings, not fewer.
> Not done: the Node serializer test, the four-size browser matrix (only a
> desktop dark/light spot-check was run), the route/redirect HTTP checks, the
> image/attribution audit, the Impeccable pass, and the Vercel preview →
> promote. `node tools/update-handoff.mjs` was run ✅.

- Add a small Node built-in test for enquiry serialization, empty optional fields, URL encoding, and copyable fallback text; add no testing framework.
- Require lint with zero errors and resolve the current two raw-image warnings.
- Require a successful production build generating all 15 static outputs.
- Browser-test at 1440×900, 1024×768, 390×844, and 360×800:
  - no overlap, clipping, horizontal overflow, or unreadable text;
  - hero contains one dominant message and CTA;
  - all five sector links are visible and usable;
  - navigation and mobile menu work by keyboard;
  - carousel pauses and has a reduced-motion fallback;
  - commissioning can always be exited and never captures mobile scrolling;
  - mailto failure recovery remains usable.
- Check all 11 canonical routes for HTTP 200, unknown sectors for 404, and every legacy Wix route for the intended permanent redirect.
- Audit every public image, filename, caption, alt string, metadata record, and generated page for proprietary detail and unapproved customer attribution.
- Run one Impeccable detector pass, two bounded responsive QA rounds, and a final fresh visual review.
- Generate a Vercel preview from the exact committed source, run the complete route and browser matrix against it, then promote that same verified deployment to production.
- Confirm `https://veemap-technologies.vercel.app` and every route after promotion.
- Run `node tools/update-handoff.mjs` after the meaningful code/content/configuration changes and commit the refreshed handoff with the remodel.

## Locked Assumptions

- Vercel is the only canonical deployment target for this release.
- The ChatGPT Sites version will not be synchronized.
- The client-logo exception covers only Aptar, Hollister, Stryker, and Marelli and supersedes the earlier prohibition only for the homepage carousel.
- Medical & Pharmaceutical remains first and receives the greatest page depth.
- The existing enquiry email, phone, address, approved proof figures, and no-upload confidentiality language remain unchanged.
- Existing untracked critique, keyframe, and VEO working files will be preserved.
- Sol Advisor will not be used.

---

## Build-status summary — 2026-09-01

Where the current build stands against this remodel, at a glance.

| Plan area | State | Note |
| --- | --- | --- |
| 1. Routes & navigation | 🟡 | Routes/redirects intact, Medical-first kept; shell nav still `<a>`, no active-route state |
| 2. Proof-led homepage | ⛔ | Homepage untouched — old video hero + blur-duplicate headline; no carousel |
| 3. Route content — Capabilities | ✅ | Scale cards, discipline matrix, lifecycle, quality/data, dashboard |
| 3. Route content — Company | ✅ | Narrative, timeline, proof band; ⚠️ still shows the "owner input outstanding" note |
| 3. Route content — Industries hub | 🟡 | Built as deep per-sector blocks, not the "concise index" |
| 3. Route content — Medical | ✅ | Navigator, process, quality, flexible, dashboard, enquiry |
| 3. Route content — Automotive | 🟡 | Verification lead ✅; no SVG inspection sweep |
| 3. Route content — EV / Electronics / Consumer | 🟡–✅ | Content ✅; per-sector animated diagrams missing |
| 3. Route content — Careers / Contact | ⛔ | Untouched; still on the plain `route.module.css` skeleton |
| 4. Motion / commissioning | ⛔/⚠️ | Homepage sequence + GSAP wrapper not built; interior uses CSS reveals |
| 5. Enquiry recovery | ⛔ | `EnquiryForm` reused as-is; no serializer/recovery panel |
| Interfaces (types, docs) | ⛔ | No `homeSummary`/`ClientLogo`/`EnquiryDraft`; PRODUCT.md/DESIGN.md not updated |
| Verification | 🟡 | Build 15 outputs ✅; lint regressed (raw `<img>`); matrix/tests/audit/promote pending |

**One-line read:** the redesign delivered the Section-3 content architecture for
six of ten routes (~30–35% of this remodel) and nothing in Sections 2, 4, 5 or
Interfaces, while introducing three conflicts (raw `<img>` lint regression, a
retained public owner-input note, autoplay video on interior heroes).

## Execution order for remaining work

Sequenced so cheap conflict-fixes land first, shared utilities exist before their
consumers, and the homepage — the largest piece — comes after its dependencies.

### Phase A — Align the redesigned pages to this plan *(small, do first)*

1. **Raw `<img>` → `next/image`** across the four redesigned pages and the
   `.ed-figure`/background images; reach **lint-zero** (Section 3/Verification).
   Wrap decorative full-bleed images so `object-position` and the scale/scan
   animations survive `fill`.
2. **Remove the public "owner input outstanding" note** on Company; keep the
   permitted partnership sentence (Section 3).
3. **Settle the interior-hero treatment** — image vs autoplay video — against the
   proof-led direction (Section 2), and apply the decision to the four heroes.

### Phase B — Shell navigation *(Section 1)*

4. Shell nav `<a>` → Next `Link`; add **active-route indication** (`usePathname`);
   re-verify mobile-menu close and Start-a-project → `/contact`.

### Phase C — Enquiry handoff *(Section 5 + Interfaces)*

5. Extract the **`EnquiryDraft` type + pure serializer** (recipient/subject/body/
   mailto URL).
6. Add the **recovery panel**: open-again, copy-address, copy-summary, selectable
   fallback; preserve entered fields; no storage.
7. **Node built-in test** for the serializer (empty optionals, URL encoding,
   fallback text).

### Phase D — Homepage *(Sections 2 + 4)*

8. **`ClientLogo` type + four-logo carousel** (Aptar, Hollister, Stryker,
   Marelli) — CSS strip, pause on hover/focus, static under reduced motion.
   Requires approved local logo assets + provenance sidecars.
9. **Homepage fixed section order** with an **image hero** (assembled concept,
   priority `next/image`); remove the blur-duplicate headline and competing
   effects; add `homeSummary` to the sector rail.
10. **Commissioning rework**: 8s desktop + portrait renders, four two-second
    chapters, one bounded ScrollTrigger (short pin, no wheel/touch trap), mobile
    no-pin, reduced-motion poster — via **one shared GSAP wrapper**
    (`useGSAP`, scoped refs, `gsap.matchMedia()`).

### Phase E — Careers + Contact *(Section 3)*

11. **Careers** onto the editorial system: discipline matrix, real problems,
    training, expression-of-interest email.
12. **Contact**: direct contact first, then the requirements form, then the
    recovery panel.

### Phase F — Docs, media, release

13. Update **PRODUCT.md** and **site/DESIGN.md**: Vercel canonical, proof-led
    hero, four-logo exception, GSAP-first/deferred Three.js, mobile commissioning.
14. **Remove `inspection-scan.png`** from the public experience (Hero-owned;
    coordinate before editing).
15. **Full verification**: lint-zero, build 15, four-size browser matrix,
    route/redirect HTTP checks, image/attribution audit, one Impeccable pass, then
    Vercel preview → verify → promote; `update-handoff` and commit.

**Dependencies:** Phase A is independent and removes the standing regressions.
C precedes D (the homepage enquiry reuses the serializer/recovery). D depends on
approved carousel logo assets and the existing 8s renders under `site/public/video/`.
E reuses the `editorial.css` system already built. F closes out.

---

## Asset policy — owner decision 2026-09-01 (controlling)

The owner has lifted the site's self-imposed asset restrictions. **All images
and assets in the repository may be used across the public website** — detailed
VEEMAP machine renders and CAD, facility and product photography, client and
customer names and logos, and HMI-derived visuals — without the confidentiality,
proprietary-detail, "ships without photography", provenance-gating or
customer-identity limits previously imposed.

Where it narrows which asset may appear, this decision supersedes: in this
remodel plan, §3's "confine customer identities to the four-logo carousel" and
"remove `inspection-scan.png`" bullets and §2's four-logo-only carousel limit
(the carousel is no longer an *exception* — any client logo may be shown); and
in `WEBSITE_IMPLEMENTATION_PLAN.md`, the confidentiality/media clauses of
Sections 2.4–2.6, 4, 5, 9, 10 and 17 and the `MEDIA_EVIDENCE_BUDGET.md` holds.
The verification "image/attribution audit" step becomes a licence/consent check
(below) rather than a customer-identity scrub.

**One limit remains — a legal floor set by law, not a VEEMAP preference this
decision can waive.** Material VEEMAP does not own or hold a licence/consent for
stays verify-at-publish:

- **Third-party copyright** — vendor-watermarked images (e.g. the DOBOT-
  watermarked soldering photo) or unlicensed stock may be published only once a
  licence is confirmed.
- **Third-party confidentiality** — a customer's raw HMI values or proprietary
  CAD they have not agreed to publish may be published only with that party's
  consent.

Publishing either without rights or consent is copyright infringement or a
confidentiality breach that binds VEEMAP regardless of any internal plan, so it
is confirmed at the point of publication. Everything VEEMAP owns, or has the
relationship/consent for, is fully cleared.

**Harness permissions (2026-09-01):** `.claude/settings.json` now allows reads
of any file and writes under `site/public/**` and `media/**` (plus `cp`/`mv`) so
asset work runs without prompts.
