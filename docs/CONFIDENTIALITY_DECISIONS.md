# Media and Confidentiality — Consolidated Decision List

**Status:** Awaiting owner decisions

**Date:** 2026-08-29

**Scope:** Every media and confidentiality question raised across Phases 0–4,
in one place. Each numbered item is one decision with options and a
recommendation.

Authority: `WEBSITE_IMPLEMENTATION_PLAN.md`. Evidence:
`MEDIA_EVIDENCE_BUDGET.md`. This document decides nothing on its own — it is
the list to work through.

---

## Summary

| # | Decision | Blocks | Effort to unblock |
| --- | --- | --- | --- |
| 1 | Live homepage asset showing measured dimensions | **Release** | Minutes |
| 2 | Prohibited-name list is missing nine customers | **Release** | Minutes |
| 3 | Personal portrait photograph in a public repository | **Release** | Minutes |
| 4 | Provenance of the one publishable photograph | All sector pages | One question |
| 5 | Approval route for the CAD library | All sector pages | Re-render or crop |
| 6 | Frame-level review of production video | Medical, Careers | Half a day |
| 7 | HMI field values and classification | Dashboard realism | Owner data |
| 8 | Keyence logo asset and wording | Company page | Supplier request |
| 9 | Dark-theme logo derivative | Header, favicon | Designer |
| 10 | Careers vacancies and destination | Careers page | Owner |
| 11 | Response-time promise | Enquiry copy | Owner |
| 12 | Medical regulatory terminology | Medical copy | Legal/contractual |

Items 1–3 are cheap and must be done. Items 4–6 decide whether the site ever
carries photography. Items 7–12 are content gates, already tracked as Section
18 owner inputs.

---

## A. Release blockers

These prevent Section 17 from passing. All three are quick.

### 1. `site/public/images/inspection-scan.png` is live and shows measured dimensions

**What.** The homepage digital-layer section publishes a photograph of a
measurement-software screen. Legible in it: `-20.000mm`, `0.000`, `0.860mm`,
axis counts, a mouse cursor, and a scanned 3D profile of a part — a ring or
flange with a machined channel.

It is byte-identical to `media/PPt_Data/assets/inspection-scan.png`, which the
Phase 3 review placed on hold.

**Why it blocks.** Section 4 prohibits publishing "proprietary geometry ... part
drawings". Section 17 requires that no public asset reveal excessive proprietary
detail. Section 9 classifies measurement and HMI surfaces as internal reference.
Every other asset in the library was held against exactly this reading.

**Note.** This is Hero-workstream content and has not been changed unilaterally.

| Option | Consequence |
| --- | --- |
| **Replace it** (recommended) | The section keeps its meaning with an authored inspection graphic. Small design task. |
| Crop out every numeric value | The scan geometry itself is still published. Weaker, but survivable if the part is generic. |
| Approve as-is, in writing | Acceptable if the part is not a customer part and the values are not sensitive — but it must be an explicit decision, not an oversight. |

### 2. The prohibited-name list is missing at least nine customers

**What.** `brand-context/audience-and-positioning.md` lists DENSO, RIEKE,
STERIMED, APTAR, STRYKER, MARELLI, BELRISE, Legrand, DNKI, HONDA, Hollister,
FCC and Keyence. The logo walls found in the presentation deck contain more:

> MARUTI SUZUKI · AISIN · UNO MINDA · Allied JB Friction (AJF) · Bettinelli ·
> TAKAHATA · KOKOKU · MUNJAL KIRIU · HITACHI

**Why it blocks.** Phase 6 includes a prohibited-name scan. Run against the
current list, it would pass all nine of these without comment. A scan that
cannot fail is not a control.

**Recommendation.** Add them to the source record before Phase 6, and confirm
whether the list is now complete or merely longer. If the deck was never a
complete customer list, the scan needs a different basis — for example, scanning
for *any* capitalised organisation name and reviewing hits by hand.

### 3. `media/PPt_Data/assets/slide5_img3.jpg` is a photograph of an individual

**What.** An identity-document style portrait of a person. It is git-tracked, in
a public repository.

**Why it matters.** This is personal data about an identifiable individual, and
separately it is out of scope under the team-imagery rule. It can never be
published on the site. Whether it should sit in the repository at all is a
different question, and one worth answering deliberately rather than by default.

| Option | Consequence |
| --- | --- |
| **Remove from the working tree** (recommended minimum) | Stops it reaching any future build or derivative. History still holds it. |
| Remove and rewrite history | Removes it properly. Destructive, force-push, coordination across clones. |
| Leave it | It stays publicly readable. This should be a decision, not an omission. |

---

## B. Media — whether the site ever carries photography

As things stand, **no sector page publishes a photograph.** All five ship on
copy, structure and the authored dashboard. That is a defensible first release,
but it is not the site the plan describes.

### 4. Confirm provenance of `slide19_img4.jpg`

**The single most valuable question on this list.** A dispensing head over a pot
with a fixture, linear rails and a sensor. A station detail rather than a machine
architecture: no logo, no person, no text, no dimension in frame. It is the only
publishable machinery photograph found anywhere in the library.

**The question:** did VEEMAP shoot this, and does VEEMAP have the right to
publish it?

This has to be asked because two other assets in the same deck turned out to be
other companies' marketing material — `robotic-soldering.jpg` carries a DOBOT
watermark, and `slide14_img4.png` is a component supplier's datasheet. Presence
in a VEEMAP presentation proves nothing about authorship.

If the answer is yes, the site gets its first real machinery evidence
immediately.

### 5. Decide an approval route for the CAD library

**What.** Most machine imagery VEEMAP holds is CAD renders produced for sales
presentations, where showing everything was the point. Sections 2.5 and 7.6
prohibit publishing complete machine architecture or plant layout, so as-is
they are all held:

| Asset | Sector | Problem |
| --- | --- | --- |
| `et-tube-machine.jpg` | Medical | Complete machine, internals through guarding |
| `iv-drip-machine.jpg` | Medical | Cell layout, six feeders, positions and count |
| `spine-needle-machine.jpg` | Medical | Complete machine, three feeders |
| `inspection-machine-a.jpg` | Automotive | Complete robot cell |
| `pipe-assembly-machine.jpg` | Automotive | Complete machine, HMI, rotary tooling |
| `hub-motor-line.jpg` | EV | Complete line, ~15 operator positions |
| `dispensing-pump-line.jpg` | Consumer Goods | Complete line, station counts, component names |
| `smartscrewiing.jpg` | Electronics | **Legrand logo on the machine banner** |

| Option | Consequence |
| --- | --- |
| **Re-render without internals** (recommended) | Exterior-only or single-station views from the existing CAD. Cheapest route to real imagery, since the models already exist. Solves every row except the Legrand one. |
| Approve heavy crops | Works where source resolution allows. Most sources are ~800px, so crops are unusable; only the 3200px Automotive pair could take it. |
| Commission photography to a public brief | Best result, highest cost. Brief must exclude people, full machines, screens and labels. |
| Ship without photography | Current state. Defensible, but the sector pages stay text-only. |

`smartscrewiing.jpg` cannot be saved by any of these — the customer logo is in
the image. Only a re-render without the banner would work.

### 6. Frame-level review of the production video

`ET_assembly.MOV` is the strongest media VEEMAP has, and Section 6 allocates it
to the Medical page. The single frame reviewed contains a person, the rotary
table with its lane tooling, and a readable sensor set-point — so the footage
cannot be used untouched.

A pass selecting shots with no person and no mechanism overview would likely
yield a usable sequence. Roughly half a day. Also covers `Delta_robot_r&d.mp4`,
`Wire_winding.mp4` and `Visualisation_software_r&d.mp4` for Capabilities and
Careers.

### 7. HMI field values and classification

Section 18, item 1. The Medical dashboard currently publishes **illustrative**
data, authored and labelled as such — a legitimate Section 10 class, and the
page is honest about it.

Supplying approved or normalised values would let it show real production
categories instead. Not a blocker; a quality improvement.

---

## C. Content gates already tracked

Recorded here for completeness. These are Section 18 owner inputs.

| # | Item | Current handling |
| --- | --- | --- |
| 8 | Keyence logo asset and final partnership wording | Relationship described in words on Company, which Section 4 permits. No logo shown. Visible note records the gap. |
| 9 | Dark-theme logo derivative | Master's fills are hard-coded, so its black portions vanish on the dark ground and no CSS can fix it. Logo is not yet in the header. |
| 10 | Current vacancies and careers destination | Careers publishes an evergreen expression-of-interest route with a visible note. |
| 11 | Whether the enquiry may promise a response time | No response time is promised anywhere. |
| 12 | Permitted medical regulatory terminology | Medical copy uses quality-critical engineering language, no compliance claim. |

---

## D. Settled — no action

| Item | Decision |
| --- | --- |
| Repository exposure | Accepted as-is by the owner, 2026-08-29. Public-bundle rules unchanged. |
| Legacy production figures | Approved for publication as machine specifications, no customer attribution. |
| Controls vendor names | Permitted in copy. Keyence remains the only permitted external logo. |
| Team photography | Out of scope. No page depends on it. |

---

## Recommended order

1. **Items 1–3 first.** Cheap, and two of them are genuine exposure rather than
   process. Nothing else should ship before them.
2. **Item 4 next.** One question to one person, and it may hand the site its
   only real photograph.
3. **Item 5, choosing re-render.** The CAD models already exist, so exterior or
   single-station views are the cheapest large gain available. This is what turns
   five text-only sector pages into evidenced ones.
4. **Item 6 when there is half a day.** Unlocks the strongest asset VEEMAP owns.
5. **Items 7–12 as they arrive.** None blocks a release; each improves one page.

If only items 1–3 are done, the site is releasable — text-complete, honest, and
carrying no confidentiality risk. Everything after that is about how much
evidence it carries, not whether it can ship.
