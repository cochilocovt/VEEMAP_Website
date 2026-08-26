# VEEMAP Brand Context — Index

This folder is the single source of truth mined from `V:\VEEMAP\Raw_Data\` for the VEEMAP Technologies website redesign. Every claim in these files is source-cited back to a specific Raw_Data file path. Where sources disagree, the conflict is preserved verbatim in a "## Needs Confirmation" section rather than silently resolved. Nothing in Raw_Data was modified, moved, or deleted while producing this folder.

## Files in this folder

| File | Covers |
|---|---|
| `company-overview.md` | Identity, taglines, mission/vision/values, leadership & org chart, 2017–2025 journey timeline, factory footprint, roadmap/"Way Forward" |
| `products-services.md` | 3-tier capability model, R&D, IoT/data-monitoring service, technology stack, delivery process, and 16 case studies/machine specs with proof metrics |
| `brand-voice-and-messaging.md` | Verbatim taglines, page-hero copy, CTAs, belief statement, tone-pattern observations by source |
| `audience-and-positioning.md` | 5 target sectors, named clients, six-USP table, full project statistics breakdowns, competitive differentiators |
| `visual-identity.md` | Logo file, CSS color tokens from the rebuild deck, typography, imagery-style notes, full asset filename inventory |
| `contacts-and-credentials.md` | Address/phone/email/domain (with all conflicting variants), sitemap, careers form fields, certifications (none found), partnerships, client logos |

## Raw_Data sources used

### PPT/
- `PPT/README.md` — audit log of a prior PPT→web-deck conversion project; slide-by-slide source mapping and its own flagged inconsistencies (all carried forward into this folder)
- `PPT/company-web-presentation.html` — read in full; the rebuilt 28-slide web deck, used as a primary source for several case studies and figures not present in the raw PPTX text extraction
- `PPT/company-web-presentation.pdf` — not opened; the HTML was fully readable as text/markup, so the PDF fallback was not needed

### Website_data/VEEMAP_Company_Context/
- `01_company_profile.md`
- `02_history_and_journey.md`
- `03_capabilities_and_services.md`
- `04_markets_and_clients.md`
- `05_projects_and_statistics.md`
- `README.md` — note: this README's own table of contents references files `06_key_machines_and_usp.md` through `10_redesign_notes_and_discrepancies.md` and an `attachments/` folder, none of which exist in this Raw_Data snapshot — only files 01–05 and this README were present and were read in full.

### Website_data/veemap_context/
- `01_HOME.md`, `02_CAPABILITIES.md`, `03_CASE_STUDY.md`, `04_PHARMACEUTICAL.md`, `05_EV.md`, `06_CONTACT.md`, `07_CAREERS.md`, `08_PORTFOLIO.md`, `09_NEWS.md`
- `COMPANY_CONTEXT.md`, `QUICK_REFERENCE.md`
- `PPTX_Auto_FullText.md`, `PPTX_Pharma_FullText.md` — read in full; the "Pharma" file's content is identical to the "Auto" deck extraction (no distinct pharma-only content was found — see company-overview.md note)
- `LOCAL_ASSETS_INDEX.txt`, `WIX_IMAGE_URLS.txt` — skimmed only per task scope (asset manifests, not brand content)

### Website_data/veemap_redesign/
- `README_DATA_COLLECTION.md` — read first per task instructions; a pre-consolidated summary that proved to be one of the most valuable single sources (it independently surfaces most of the contact/stat discrepancies documented across these files)
- `02_page_by_page/01_HOME.md` through `09_NEWS.md` (9 files) — confirmed identical in content to the equivalent files in `veemap_context/`
- `04_pptx_extracted/veemap_deck_extracted.md`, `veemap_pharma_deck.md` — read in full; both confirmed identical to `veemap_context/PPTX_Auto_FullText.md` and `PPTX_Pharma_FullText.md` respectively
- `03_assets_images/` — filenames only noted (logo, capability icons, machine photos, client logos, IoT/HMI graphics); binaries not opened; `wix_image_urls.txt` skimmed only
- `05_media_videos/` — filenames only noted (`ET_assembly.MOV`, `Media1.mp4`, `veemap_bg.mp4`); binaries not opened
- `Company_profile - Auto.pptx`, `Company_profile -Ph.pptx` — not opened (their markdown extractions above cover them, per task scope)

### Website_data/veemap_site/ (old live-site scrape)
- `extracted/home.txt`, `homeblank.txt`, `homeblank-1.txt` through `homeblank-7.txt`, `homeportfolio.txt`, `homeportfolio-collections_my-portfolio.txt` (14 text extracts) — all read in full
- This scrape surfaced content **not found in any other Raw_Data source**: the Automobile page's named machine list (9 machines) and the Consumer Goods page's positioning copy, plus a careers Application Form field list — see products-services.md and contacts-and-credentials.md
- `extracted/*_images.txt` (12 files) — skimmed only per task scope, not mined for facts
- `page_home*.html` raw HTML files — not read directly; the pre-parsed `extracted/*.txt` text dumps of the same pages were used instead, per task instructions
- `extract.py` — a scraping script, not content; not applicable to brand extraction

### Website_data/Veemap_website/
- Inspected via directory listing only. Confirmed to be a duplicate asset copy of `veemap_redesign/03_assets_images/` + `04_pptx_extracted/` (same filenames), plus one extra file (`delta_2.mp4`) and a stray Office lock file (`~$Company_profile - Auto.pptx`, ignored). No unique markdown/text content found — noted as a duplicate asset copy with no additional facts, per task instructions. Not re-extracted.

## Needs Confirmation — RESOLVED 2026-08-21 by the client, in chat

All 13 flagged conflicts have been cleared. Full detail and source citations remain in each file's "Needs Confirmation" section (kept for record — now marked resolved rather than deleted).

1. **2025 team size (60) / sales (₹500M).** → Resolved as a scope decision, not a factual pick: **do not publish team size or revenue figures on the website at all** — this data was for one-on-one sales meetings with prospects, not public disclosure. `company-overview.md`, `audience-and-positioning.md`
2. **Organization chart** conflict → **Use the raw PPTX version** (name/department mapping in `company-overview.md`'s Organization table). `company-overview.md`
3. **DENSO/DNKI radiator-assembly cycle time** → **2.5 sec** (confirmed). `company-overview.md`
4. **Dispensing pump line output** → **160 ppm** (confirmed; live-site's 122 ppm superseded). `products-services.md`
5. **USP table customer list** → **HONDA confirmed as a genuine client** — both source lists' customers (STERIMED, APTAR, STRYKER, RIEKE, MARELLI, BELRISE, DNKI, HONDA) are valid, treat as one combined set. `products-services.md`, `audience-and-positioning.md`
6. **Spine-needle machine dimension string** (`3.8*5.2.2.0`) → **Dropped.** Do not publish a dimension for this machine — too unreliable to guess. `products-services.md`
7. **"REIKE" vs "RIEKE"** → **RIEKE** (confirmed; REIKE was a typo). `audience-and-positioning.md`
8. **Sector-mix chart: percentages vs. counts** ("Automotive 150") → **Confirmed as raw project counts** (they sum exactly to 236 total projects). `audience-and-positioning.md`
9. **"Gurgoan" vs "Gurgaon" vs "Gurugram"** → **Gurugram** (current official city name; matches the live website). `contacts-and-credentials.md`
10. **Address pincode** → **122050** (confirmed; contact-page's 122001 was a typo). `contacts-and-credentials.md`
11. **Phone number** → **+91 9266374969** (public website number; PPTX/deck number superseded, likely a personal line). `contacts-and-credentials.md`
12. **Email** → **info@veemap.co.in** (public website address; PPTX/deck address superseded). `contacts-and-credentials.md`
13. **Website domain** → **veemap.com** (confirmed; veemap.in superseded). `contacts-and-credentials.md`

## No credentials, secrets, or non-public financial/legal documents were encountered

All contact details captured (phone numbers, email addresses) are public-facing marketing/business contact information already published on the live website and/or the company's own sales presentation deck — not credentials, API keys, or private records. No such material was found anywhere in Raw_Data during this review.
