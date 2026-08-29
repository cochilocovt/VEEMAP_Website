# Legacy Site Content and Rewritten Copy

**Status:** Phase 0 deliverable

**Date:** 2026-08-29

**Source:** `V:\VEEMAP\Website\Scraped_Old_Website\veemap_site` — 14 static HTML
pages captured from the previous Wix site, which is no longer hosted. Text was
extracted from the HTML only; no images or scripts were used.

**Purpose:** record what the previous public site actually said, and supply
rewritten copy for Phase 1 to load into `site/content/*.ts`. Everything here is
draft copy pending the Section 4 claim review, not approved text.

Spelling follows the existing site: British forms (`industrialisation`,
`labour`, `optimise`).

## What the legacy site contained

| Legacy page | Route | Verdict |
| --- | --- | --- |
| Home | `/` | Usable positioning, unusable superlatives |
| Capabilities | `/blank-1` | **Best legacy page.** Real system-scale and IoT substance |
| Case Study | `/blank` | **Highest-value page.** Three machines with concrete specs |
| Automobile | `/blank-4-1-1` | **Nine named machines.** Not reflected in the current plan |
| Consumer Goods | `/blank-4-1-2` | One paragraph plus a customer logo wall |
| EV | `/blank-4-1` | Three sentences plus a customer logo wall |
| Pharmaceutical | `/blank-4` | **Empty.** Title only, no body content |
| Markets hub | `/blank-6` | Empty shell, navigation only |
| Careers | `/blank-2` | Usable culture and training substance |
| Application form | `/blank-7` | Form with CV upload — prohibited by Section 2.10 |
| Contact | `/blank-5` | Usable, but carries the superseded 122001 pincode |
| News | `/blank-3` | Wix placeholder text throughout |
| Portfolio, Portfolio collections | `/portfolio` | Unmodified Wix template — "Welcome to my portfolio" |

### Four findings that matter

1. **The Pharmaceutical page was empty.** The sector the plan makes its
   flagship had no copy at all on the previous site. Every word of
   `/industries/medical-pharma` must be authored from `docs/brand-context/`.
   There is nothing to rewrite.
2. **There was no Electronics page and no Company page.** Legacy navigation ran
   Capabilities, Case Study, Markets, Pharmaceutical, Automobile, Consumer
   Goods, Contact, Careers. Both routes are new writing.
3. **The Automobile page listed nine machines.** Six are inspection systems.
   This is materially richer than the plan's Section 7.5 theme list and, with
   the three feature-band inspection photographs, it reframes Automotive as an
   inspection-led page. See `docs/MEDIA_EVIDENCE_BUDGET.md`.
4. **The Case Study page holds the only hard production figures in the source
   record.** The plan drops case studies as a route, correctly — but this
   material should not be lost. It is folded into Consumer Goods and
   Capabilities as capability framing below.

### Dropped wholesale

- Both Portfolio pages and News — unmodified Wix placeholder copy.
- Every "Our Clients" / "Our EV clieints" / "Our Consumer Goods Clients"
  heading and the logo walls beneath them — Section 19 non-goal.
- The CV upload application form — Section 2.10.
- "the fastest and most efficient production assembly machines in the world" —
  unsupported superlative.
- "As one of the leading manufacturers in India" — unsupported ranking claim.
- The Contact page pincode 122001 — confirmed wrong in
  `brand-context/contacts-and-credentials.md`; 122050 is correct.

### Legacy typos, for the record

"Automatio" (truncated page titles), "Poliishing", "clieints", "seggregate",
"Lets build", "customers requirements".

---

## Rewritten copy

### Homepage

Legacy hero read "Automation Solutions for your Manufacturing Needs" over two
paragraphs of what the company offers. It described the company; it did not
describe the reader's problem.

**Proof ledger**

> 236 projects delivered · 55 clients across India and overseas · five
> manufacturing sectors · engineering from Manesar since 2017

**Capability continuum** — legacy "The Perfect fit for all your requirements"

> ### One process, one line, or the whole plant
>
> The right level of automation is a commercial decision before it is an
> engineering one. VEEMAP builds at all three scales and will say which one
> your requirement actually needs.
>
> **Semi-automatic platforms.** Targeted industrialisation with operator
> access and controlled process steps. The lowest initial investment that still
> holds final quality.
>
> **Fully automatic lines.** Indexed or continuous motion, integrating
> assembly, testing, inspection and material movement into one controlled
> sequence.
>
> **Complete plants.** Machines, conveyors, quality systems, controls and
> connected data designed together as one manufacturing environment.

**Sector index** — legacy "Markets we service"

> ### Five sectors, one engineering method
>
> The process changes. The discipline does not: understand the product,
> constrain the process, verify every part, and make the production data
> legible.

**Engineering delivery sequence** — new, no legacy equivalent

> Understand the requirement · design · manufacture · assemble and integrate ·
> trial and production test · commission and support

### Capabilities — `/capabilities`

The strongest legacy page. Its IoT section is kept nearly intact because it is
specific and true; only the claim-shaped language changed.

> ### Automation designed around the process, not the catalogue
>
> Custom machines are specified backwards from the part: what it is made of,
> how it must be joined, what has to be proven before it moves on, and how many
> the line has to produce. VEEMAP designs, manufactures, assembles, tests and
> commissions to that specification.

**Research and development** — legacy copy was serviceable, tightened:

> R&D shortens the distance between a process problem and a working mechanism.
> New handling, joining and inspection approaches are prototyped in-house
> before they are committed to a customer machine.

**Connected production** — legacy "Data Monitoring and IOT Integration":

> ### The line should be able to explain itself
>
> Production data is integrated where the requirement justifies it, not by
> default. Machine data is collected locally, retained under the plant's own
> firewall policy, and made available to cloud analytics where scale or
> multi-site reporting calls for it.
>
> Dashboards are built to the use case rather than to a template: production
> state, output trend, good and reject counts, inspection results, station
> health and alarm categories. Operators read them locally at the HMI;
> engineering and management read the same data through SCADA and dashboard
> platforms including Zenon and WinCC.

Vendor names are permitted under the amended Section 2.4 as a competence signal
only. No vendor logo appears, and no endorsement is implied.

### Automotive — `/industries/automotive`

Legacy supplied the nine-machine list verbatim. Rewritten as an inspection-led
page, matching the available media.

> ### Automotive assembly that proves every part
>
> Automotive volumes make undetected defects expensive fast. Most of what
> VEEMAP builds for this sector exists to verify: dimensional checks, vision
> inspection, functional test and part identification designed into the line
> rather than bolted onto the end of it.

**Solution families** — legacy machine list, kept as machine types with no
customer attribution:

> **Verification and inspection.** Piston vision inspection · engine number
> inspection · brake shoe inspection · piston liner inspection · brake disc
> vision inspection
>
> **Assembly and joining.** Radiator assembly · fuel rail assembly · complete
> clutch assembly · pipe and component handling
>
> **Surface and finishing.** Robotic hood polishing
>
> **Traceability.** Marking, identification and result logging tied to the part
> rather than to the batch

### Consumer Goods — `/industries/consumer-goods`

Legacy was one paragraph and a logo wall. The Case Study page material is
folded in here, restated as capability rather than as a delivered result.

> ### High-rate assembly for products made by the million
>
> Consumer goods lines succeed on rate, changeover and consistency. A pump, a
> closure or a valve is a small assembly of many small parts, and the machine
> that builds it has to hold quality at speed, sort out what is not good, and
> convert to the next product variant without a rebuild.

**Solution families**

> Dispensing pump assembly · cap and liner insertion · valve assembly ·
> packaging component handling · screw feeding and controlled tightening ·
> in-line inspection and reject handling

**Capability framing for the Case Study figures** — drafted so it holds whether
or not the exact numbers are approved:

> **Cap and liner automation.** Rotary indexing architectures with multiple
> stations on a single track, designed for outputs above 250 parts per minute
> and for quick conversion between cap types.
>
> **Dispensing pump automation.** Linear link conveyor architectures carrying
> many stations across multiple tracks, designed for eleven-part assemblies at
> outputs above 120 parts per minute, with in-line quality control segregating
> non-conforming parts and several hundred sensors feeding the production data
> layer.
>
> **Controlled tightening.** Automatic screw feeding with servo torque control
> on a precision rotary indexer, for assemblies where joint integrity is the
> quality characteristic.

Note the deliberate changes from the legacy text: "achieving a lightning quick
speed of +122 P.P.M" becomes a design target rather than an achieved result,
"200+ sensors" becomes "several hundred sensors", and no figure is attached to
a named or shown system.

### EV Solutions — `/industries/ev-solutions`

Legacy was three sentences. Expanded from the process families the brand-context
record supports.

> ### Electric drivetrain manufacturing, stage by stage
>
> Electric vehicle production is less a single machine than a sequence of them:
> winding, assembly, controller and charger build, and end-of-line test, each
> with its own quality gate and all of them needing to agree on the same part
> record. VEEMAP builds the individual stations and the flow that connects
> them.

**Solution families**

> Motor and hub-motor assembly · wire winding · controller manufacturing
> support · charger manufacturing support · multi-station assembly lines ·
> end-of-line electrical and functional test · material flow between stages ·
> production data and traceability across the sequence

### Careers — `/careers`

Legacy culture copy was generic. Its training substance was the good part and
is kept.

> ### Every project is a machine that did not exist before
>
> VEEMAP builds special-purpose machines, which means there is no product line
> to maintain and no two projects that repeat. Mechanical design, electrical
> engineering, controls, robotics, manufacturing and assembly work sit close
> enough together that engineers see a machine from requirement to
> commissioning rather than owning one slice of it.

> ### Training is part of the work
>
> In-house training runs alongside manufacturer programmes covering PLC
> programming and 3D design. Engineers work with the controls and vision
> platforms the sector actually uses, including Keyence, Mitsubishi and Omron.

**Application route** — replaces the CV upload form:

> Send a short note describing the engineering work you want to do, and your
> current role. Please do not attach anything confidential to a first email.

### Contact — `/contact`

> ### Tell us what the machine has to do
>
> The most useful first message describes the part, the process step that is
> constraining you, and what has to be verified before a part moves on. Rate,
> variant count and current method help; drawings are not needed yet.
>
> Submitting prepares an email in your own mail application. Nothing is
> uploaded, and no files are collected.

Address: Plot No. 35, Sector 5, IMT Manesar, Gurugram, Haryana, India — 122050.
`info@veemap.co.in` · +91 9266374969.

### Medical & Pharmaceutical, Electronics, Company

No legacy source exists. Authored in Phases 2, 3 and 4 from
`docs/brand-context/` under the Section 4 copy rules.

---

## What changed and why

| Legacy pattern | Replacement | Reason |
| --- | --- | --- |
| Superlatives — "fastest in the world", "leading manufacturer" | Concrete capability statements | Section 4 bans unsupported claims |
| Achieved results — "helped them achieve", "+122 P.P.M" | Design intent and architecture | Section 2.3 bans delivered-for-customer framing |
| Customer logo walls on three sector pages | Sector solution families | Section 19 non-goal |
| "We offer / we provide / we work" openings | The reader's problem first | Every legacy page opened on the company |
| Empty Pharmaceutical page | Flagship sector page | Section 2.2 |
| CV upload form | Careers `mailto:` route | Section 2.10 |
| Wix placeholder News and Portfolio | Routes omitted | Section 5 |
