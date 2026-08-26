# VEEMAP Technologies — Visual Identity

Source-cited factual reference. Paths are relative to `V:\VEEMAP\Raw_Data\`. Per task constraints, no image/video/pptx binaries were opened — this file catalogs filenames, CSS color tokens, and imagery-style notes found in text/markup sources only.

## Logo

- **Primary logo file**: `new logo.jpg` — present in both `Website_data/veemap_redesign/03_assets_images/new logo.jpg` and `Website_data/Veemap_website/new logo.jpg` (duplicate copy).
- Referenced in the rebuilt web deck as `assets/veemap-logo.jpg`, used on the hero slide (brand lockup, top-left) and the closing slide. Source: `PPT/company-web-presentation.html` (slides 1, 28).
- No logo usage guidelines (clear space, minimum size, color variants) were found in any source file.

## Color palette

The only explicit, machine-readable color values found in Raw_Data are the CSS custom properties defined in the rebuilt web presentation's stylesheet:

| Token | Value | Apparent use |
|---|---|---|
| `--stage-bg` | `#05090b` | Outer viewport background (near-black) |
| `--slide-bg` | `#0a1013` | Dark-slide background |
| `--ink` | `#eef1ec` | Primary text on dark slides (off-white) |
| `--muted` | `#94a29f` | Secondary/label text (muted sage-grey) |
| `--orange` | `#ff9d2e` | Primary accent color (used for emphasis, stats, section numerals, USP labels) |
| `--green` | `#21db2c` | Secondary accent (used sparingly, e.g. closing-slide radial glow) |
| `--teal` | `#62d6cf` | Tertiary accent (defined, but specific usage not traced in the visible markup) |
| `--bone` | `#f2eee5` | Off-white/cream, used for light backgrounds and logo padding |
| `--line` | `rgba(160,183,178,.25)` | Hairline borders/dividers |
| Light-slide override: `--ink` | `#132127` | Text color on light slides |
| Light-slide override: `--muted` | `#566665` | Secondary text on light slides |
| Light-slide background | `#f1eee6` | Light-slide base background |

Source: `PPT/company-web-presentation.html` (`:root` CSS block, lines 6–11) and `.light-slide` override rule. `PPT/README.md` independently confirms these are the deck's theming controls: "Colors and typography are controlled near the top of the inline CSS in `:root`. Change `--orange`, `--green`, `--stage-bg`, `--display`, or `--body` to retheme the deck."

No hex/RGB brand colors were found anywhere in the website source files (`Website_data/veemap_context/`, `Website_data/veemap_redesign/`, `Website_data/veemap_site/`) — the live Wix site's CSS was not part of the readable text extractions provided (only page text and image-URL manifests were captured). **Treat the palette above as sourced specifically from the internal rebuild deck, not confirmed as the official brand palette** — verify against the live site's actual rendered styling or any brand guideline document before adopting it wholesale for the redesign.

## Typography

- **Display font**: Barlow Condensed (weights 500/600/700, italic 600) — loaded via Google Fonts.
- **Body font**: IBM Plex Sans Condensed (weights 400/500/600) — loaded via Google Fonts.

Source: `PPT/company-web-presentation.html` (`<link>` tag, line 3; `--display`/`--body` custom properties, line 10). `PPT/README.md` confirms these are the deck's editable typography controls.

No typography specification was found for the live website (Wix-hosted; font-face declarations present in the raw HTML scrape are Wix's platform default font stack, e.g. `avenir-lt-w01_35-light`, `fraunces_120pt-light`, not confirmed as an intentional VEEMAP brand choice). Source: `Website_data/veemap_site/page_homeblank-4.html` raw `@font-face` declarations (Wix-generated, not VEEMAP-authored).

## Imagery style notes (from the rebuilt deck's CSS treatment)

- Photography treatment: `filter:saturate(.72) contrast(1.18) brightness(.84)` applied to hero/machine photography — a desaturated, higher-contrast, slightly darkened industrial look. Source: `PPT/company-web-presentation.html` (`.hero-machine`, `.split-photo img` rules).
- Background texture: a subtle blueprint/grid pattern (`64px` grid lines at low opacity) is used behind both dark and light slide types, evoking technical/engineering drawing aesthetics. Source: `PPT/company-web-presentation.html` (`.dark-slide`, `.light-slide` background rules).
- Two alternating slide moods: **dark slides** (near-black background, off-white text, orange/green accents) and **light slides** (cream/bone background, dark ink text) are used throughout the deck in an alternating rhythm. Source: `PPT/company-web-presentation.html` (`.dark-slide` / `.light-slide` classes used across all 28 slides).
- Product/machine photography on light slides frequently uses `mix-blend-mode:multiply` against a white card background, treating machine photos like technical catalog cutouts. Source: `PPT/company-web-presentation.html` (`.continuum-card img`, `.machine-stage img`, `.product-machine img` rules).
- Client-logo wall is preserved as "a faithful raster crop from the rendered source slide" rather than individually extracted vector logos, per `PPT/README.md`: "The web deck preserves the complete logo wall as a faithful raster crop from the rendered source slide," because "the extraction library could not read [several embedded/vector customer marks] individually."

## Asset file inventory (filenames only — binaries not opened)

### Brand / logo
- `new logo.jpg`

### Capability icons
- `full auto.svg`
- `semi auto.svg`

### Machine / line photography
- `Picture8.png`, `Picture9.png`, `Picture10.png`, `Picture13.jpg`, `Picture14.jpg`, `Picture15.png`
- `complete  line.png` (double space in filename, verified as-is)
- `hub motor line.png`
- `pump assembly machine.svg`
- `smartscrewiing.jpg` (filename contains this exact spelling/typo)
- `zoom.png`

### HMI / IoT dashboard graphics
- `zenon console.svg`
- `zenon dsah.svg` (filename as found — likely "dash" truncated/typo'd; reproduced verbatim)

### Client / partner logos
- `aptar.svg`
- `hollister.svg` / `holister.png` (two variants of the same client's logo, differently spelled/formatted filenames)
- `reddy.svg` (client name not otherwise corroborated in any text source — see audience-and-positioning.md for named clients; "Reddy" appears only as this asset filename)

### Video
- `ET_assembly.MOV` — Endotracheal tube assembly demo
- `Media1.mp4` — general machine footage
- `veemap_bg.mp4` — background/hero video
- `delta_2.mp4` — found only in `Website_data/Veemap_website/` (not duplicated into `veemap_redesign/05_media_videos/`); likely footage of the "Delta Robot" product referenced in the 2019 journey milestone

All of the above (except `delta_2.mp4`) are duplicated identically across `Website_data/veemap_redesign/03_assets_images/`, `Website_data/veemap_redesign/05_media_videos/`, and `Website_data/Veemap_website/`. Source: directory listings of all three folders; cross-referenced against `Website_data/veemap_context/COMPANY_CONTEXT.md` ("ASSETS AVAILABLE FOR REDESIGN" section) and `Website_data/veemap_redesign/README_DATA_COLLECTION.md` (Section 8, "ASSETS INVENTORY").

### Rebuilt web-deck asset references (filenames referenced in HTML but not confirmed present as separate files in Raw_Data — likely generated/renamed during the prior conversion project)
`high-speed-line.png`, `semi-auto-machine.png`, `complete-plant.png`, `facility.jpg`, `client-portfolio.jpg`, `hub-motor-line.jpg`, `pipe-assembly-machine.jpg`, `inspection-machine-a.jpg`, `inspection-machine-b.jpg`, `inspection-scan.png`, `terminal-screwing-machine.jpg`, `terminal-screwing-process.png`, `et-tube-machine.jpg`, `et-tube-product.png`, `iv-drip-machine.jpg`, `iv-drip-product.jpg`, `spine-needle-machine.jpg`, `spine-needle-product.jpg`, `switch-product.png`, `switch-portfolio.jpg`, `breaker-product.jpg`, `manual-soldering.jpg`, `robotic-soldering.jpg`, `robotic-solder-machine.jpg`, `switch-assembly-line.png`, `iot-dashboard.jpg`, `iot-kiosk.jpg`, `rfid-machine.jpg`, `dispensing-pump-line.jpg`, `smart-factory.png`. Source: `PPT/company-web-presentation.html` `<img>`/`<video>` `src` attributes throughout. These live under an `assets/` folder referenced by the HTML (per `PPT/README.md`: "Keep the `assets` folder beside the HTML file") that was not present as a separate directory in the Raw_Data file listing at the time of this review — flagged in case the assets folder exists elsewhere and was not included in scope.

### Local asset index / Wix CDN manifests (skimmed only, per task scope — not mined for facts)
- `Website_data/veemap_context/LOCAL_ASSETS_INDEX.txt`
- `Website_data/veemap_context/WIX_IMAGE_URLS.txt`
- `Website_data/veemap_redesign/03_assets_images/wix_image_urls.txt`
- `Website_data/veemap_site/extracted/*_images.txt` (12 files, one per crawled page)

## Duplicate folder note

`Website_data/Veemap_website/` was inspected and confirmed to be a duplicate asset copy of `Website_data/veemap_redesign/03_assets_images/` + `04_pptx_extracted/`, sharing identical filenames (`aptar.svg`, `new logo.jpg`, `Company_profile - Auto.pptx`, etc.), plus one extra file (`delta_2.mp4`, noted above) and a stray Office lock file (`~$Company_profile - Auto.pptx`, ignored). No unique markdown/text content was found in this folder — it is a duplicate asset copy, no additional facts.

## Needs Confirmation

No numeric factual conflicts apply to this file. The `--orange`/`--green`/`--teal` palette is flagged above as sourced only from the internal rebuild deck (not confirmed as the live site's or an official brand guideline's palette) — verify before treating it as canonical.
