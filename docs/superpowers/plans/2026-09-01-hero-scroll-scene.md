# VEEMAP Hero Scroll Scene Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the homepage hero with one continuous scroll-driven WebGL scene that carries the *From Part to Plant* story from a single component to a complete production plant, then hands off to the real-machine proof section below it.

**Architecture:** A single React Three Fiber scene containing every stage's geometry at once, laid out in world space. Scroll position is reduced to one scalar `p ∈ [0,1]`, damped once, and fed to a pure `sampleCameraPath(p)` function that returns camera position, target and fov. Stages are camera regions and copy cues — there are no cuts, no video and no scene swaps. Object motion (carriers, robot, flow head) runs on elapsed time independently of scroll, so the scene stays alive when the user stops.

**Tech Stack:** Next.js 16 App Router · React 19 · React Three Fiber 9.7 · three 0.185 · @react-three/drei 10.7 · GSAP 3.15 + ScrollTrigger + @gsap/react · Vitest (added in Task 1)

**Spec:** `docs/hero-film-brief.md` (Hero Scroll Scene Spec v3)

## Global Constraints

- **Palette:** only `--ink #000000`, `--paper #f2f2f2`, `--signal #fa4c14`, `--muted #a6a6a3` (dark) / `#4e4e4b` (light). No blue, no red, no green. Exactly one saturated colour visible in the scene at a time.
- **Themes:** the site is dark by default with a working light toggle (`document.documentElement.dataset.theme`). Every visual change must be correct in both.
- **No text in 3D:** no labels, numbers, station identifiers or marks anywhere in the scene except the VEEMAP mark at stage 8. All copy is DOM.
- **No customer names or logos** anywhere — copy, alt text, filenames, metadata included.
- **Facts:** `170 parts per minute` only with its RIEKE/2CC attribution. Never `250 PPM`. Never `122 PPM`.
- **IP:** station modules stay featureless; tooling is never drawn; the two machine bodies keep different station pitches so the line cannot be counted into a process map.
- **Mount rule:** the hero host is a normal in-flow block with an explicit height. Never `position: fixed` — R3F renders nothing when its container measures zero.
- **Motion:** follow the existing `useGSAP` + `gsap.matchMedia()` pattern in `site/app/page.tsx` with `desktop` / `mobile` / `reduceMotion` conditions. Do not add a second scroll system.
- **Budgets:** desktop ≤ 120k triangles / ≤ 220 draw calls; mobile ≤ 45k / ≤ 120. Hero must never block first contentful paint or the enquiry path.
- **Commits:** conventional commits (`feat:`, `fix:`, `test:`, `chore:`). Commit at the end of every task.
- All commands run from `site/`.

---

## File Structure

| File | Responsibility |
|---|---|
| `site/components/hero3d/quality.ts` | **new, pure.** Device signals → quality tier → concrete scene settings. |
| `site/components/hero3d/chapters.ts` | **new, pure.** The eight stages: scroll ranges and copy. |
| `site/components/hero3d/cameraPath.ts` | **new, pure.** `p` → camera position, target, fov. |
| `site/components/hero3d/clayPalette.ts` | **exists, rewrite.** Theme-keyed tokens + machine dimensions. |
| `site/components/hero3d/useTheme.ts` | **new.** Subscribes to `<html data-theme>` changes. |
| `site/components/hero3d/ClayStage.tsx` | **exists, modify.** Canvas, lighting, fog, ground — now themed and tier-aware. |
| `site/components/hero3d/AssemblyMachine.tsx` | **exists, modify.** Palette + tier props. |
| `site/components/hero3d/FlowLine.tsx` | **exists, modify.** Palette; extend path across the plant. |
| `site/components/hero3d/GroundGrid.tsx` | **exists, modify.** Palette + tier. |
| `site/components/hero3d/flowState.ts` | **exists.** Shared per-frame flow-head vector. |
| `site/components/hero3d/PartHero.tsx` | **new.** Stages 1–3: product forms, separation, tokens, lanes. |
| `site/components/hero3d/PlantField.tsx` | **new.** Stages 6–7: cells, buildings, converging flow. |
| `site/components/hero3d/BrandResolve.tsx` | **new.** Stage 8: tile field resolving into the mark. |
| `site/components/hero3d/HeroScene.tsx` | **new.** Composes the world; owns the scroll-driven camera. |
| `site/components/hero3d/HeroSection.tsx` | **new.** Pinned DOM host, copy column, a11y, reduced-motion branch. |
| `site/components/home/ProofFilm.tsx` | **new.** Real-footage proof section below the hero. |
| `site/app/page.tsx` | **modify.** Swap `CommissioningVideoSequence` → `HeroSection`; add `ProofFilm`. |
| `site/vitest.config.ts` | **new.** Test runner config. |

---

## Task 1: Test harness and quality tiers

**Files:**
- Create: `site/vitest.config.ts`
- Create: `site/components/hero3d/quality.ts`
- Test: `site/components/hero3d/__tests__/quality.test.ts`
- Modify: `site/package.json` (add `test` script + devDependencies)

**Interfaces:**
- Consumes: nothing.
- Produces: `type QualityTier = 'low' | 'medium' | 'high'`; `interface DeviceInput`; `interface QualitySettings`; `detectTier(input: DeviceInput): QualityTier`; `settingsForTier(tier: QualityTier): QualitySettings`; `readDeviceInput(): DeviceInput`.

- [ ] **Step 1: Install the test runner**

```bash
npm install --save-dev vitest@^3
```

- [ ] **Step 2: Add the config and script**

Create `site/vitest.config.ts`:

```ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    include: ['components/**/__tests__/**/*.test.ts'],
  },
});
```

Add to `site/package.json` `scripts`:

```json
"test": "vitest run",
"test:watch": "vitest"
```

- [ ] **Step 3: Write the failing test**

Create `site/components/hero3d/__tests__/quality.test.ts`:

```ts
import { describe, expect, it } from 'vitest';
import { detectTier, settingsForTier, type DeviceInput } from '../quality';

const base: DeviceInput = {
  coarsePointer: false,
  viewportWidth: 1440,
  deviceMemoryGb: 8,
  hardwareConcurrency: 8,
};

describe('detectTier', () => {
  it('gives a wide desktop with real hardware the high tier', () => {
    expect(detectTier(base)).toBe('high');
  });

  it('drops any coarse-pointer device to low', () => {
    expect(detectTier({ ...base, coarsePointer: true })).toBe('low');
  });

  it('drops a narrow viewport to low even with a fine pointer', () => {
    expect(detectTier({ ...base, viewportWidth: 700 })).toBe('low');
  });

  it('uses medium for a capable but modest machine', () => {
    expect(detectTier({ ...base, deviceMemoryGb: 4, hardwareConcurrency: 4 })).toBe('medium');
  });

  it('assumes medium when the browser reports no hardware hints', () => {
    expect(detectTier({ ...base, deviceMemoryGb: undefined, hardwareConcurrency: undefined })).toBe('medium');
  });
});

describe('settingsForTier', () => {
  it('keeps mobile within the spec budget', () => {
    const low = settingsForTier('low');
    expect(low.dpr[1]).toBeLessThanOrEqual(1.5);
    expect(low.useDirectionalShadows).toBe(false);
    expect(low.plantCellCount).toBeLessThan(settingsForTier('high').plantCellCount);
  });

  it('never returns a zero object count for any tier', () => {
    for (const tier of ['low', 'medium', 'high'] as const) {
      const s = settingsForTier(tier);
      expect(s.plantCellCount).toBeGreaterThan(0);
      expect(s.figureCount).toBeGreaterThan(0);
      expect(s.carrierCount).toBeGreaterThan(0);
    }
  });
});
```

- [ ] **Step 4: Run it and watch it fail**

Run: `npm test`
Expected: FAIL — `Failed to resolve import "../quality"`.

- [ ] **Step 5: Implement the module**

Create `site/components/hero3d/quality.ts`:

```ts
/**
 * Device capability detection for the hero scene.
 *
 * Kept pure and free of browser globals so the thresholds can be tested. The
 * one function that touches `window` is `readDeviceInput`, which does nothing
 * but gather values.
 */

export type QualityTier = 'low' | 'medium' | 'high';

export interface DeviceInput {
  coarsePointer: boolean;
  viewportWidth: number;
  /** navigator.deviceMemory — absent on Safari and Firefox. */
  deviceMemoryGb: number | undefined;
  hardwareConcurrency: number | undefined;
}

export interface QualitySettings {
  tier: QualityTier;
  dpr: [number, number];
  shadowMapSize: number;
  useDirectionalShadows: boolean;
  useContactShadows: boolean;
  plantCellCount: number;
  figureCount: number;
  carrierCount: number;
  /** Metres between floor grid dots. Larger is cheaper. */
  dotSpacing: number;
}

/**
 * A coarse pointer or a narrow viewport means a phone, and a phone gets the
 * low tier regardless of what it claims about its memory — the constraint
 * there is thermal, not peak capability.
 */
export function detectTier(input: DeviceInput): QualityTier {
  if (input.coarsePointer || input.viewportWidth < 900) return 'low';

  const memory = input.deviceMemoryGb;
  const cores = input.hardwareConcurrency;

  // Absent hints are common on Safari and Firefox; assume the middle rather
  // than punishing every non-Chromium visitor.
  if (memory === undefined || cores === undefined) return 'medium';
  if (memory >= 8 && cores >= 8) return 'high';
  return 'medium';
}

const SETTINGS: Record<QualityTier, QualitySettings> = {
  low: {
    tier: 'low',
    dpr: [1, 1.5],
    shadowMapSize: 1024,
    useDirectionalShadows: false,
    useContactShadows: true,
    plantCellCount: 4,
    figureCount: 5,
    carrierCount: 28,
    dotSpacing: 0.9,
  },
  medium: {
    tier: 'medium',
    dpr: [1, 1.75],
    shadowMapSize: 1024,
    useDirectionalShadows: true,
    useContactShadows: true,
    plantCellCount: 6,
    figureCount: 9,
    carrierCount: 46,
    dotSpacing: 0.72,
  },
  high: {
    tier: 'high',
    dpr: [1, 2],
    shadowMapSize: 2048,
    useDirectionalShadows: true,
    useContactShadows: true,
    plantCellCount: 9,
    figureCount: 14,
    carrierCount: 46,
    dotSpacing: 0.62,
  },
};

export function settingsForTier(tier: QualityTier): QualitySettings {
  return SETTINGS[tier];
}

/** Browser-only. Call once on mount, never during render. */
export function readDeviceInput(): DeviceInput {
  const nav = navigator as Navigator & { deviceMemory?: number };
  return {
    coarsePointer: window.matchMedia('(pointer: coarse)').matches,
    viewportWidth: window.innerWidth,
    deviceMemoryGb: nav.deviceMemory,
    hardwareConcurrency: nav.hardwareConcurrency,
  };
}
```

- [ ] **Step 6: Run the tests**

Run: `npm test`
Expected: PASS, 7 tests.

- [ ] **Step 7: Commit**

```bash
git add site/vitest.config.ts site/package.json site/package-lock.json site/components/hero3d/quality.ts site/components/hero3d/__tests__/quality.test.ts
git commit -m "feat: add vitest harness and hero scene quality tiers"
```

---

## Task 2: Chapter table

**Files:**
- Create: `site/components/hero3d/chapters.ts`
- Test: `site/components/hero3d/__tests__/chapters.test.ts`

**Interfaces:**
- Consumes: nothing.
- Produces: `interface Chapter { id, index, start, end, eyebrow?, headline, sub? }`; `chapters: readonly Chapter[]`; `chapterAt(p: number): Chapter`; `localProgress(p: number, c: Chapter): number`.

- [ ] **Step 1: Write the failing test**

Create `site/components/hero3d/__tests__/chapters.test.ts`:

```ts
import { describe, expect, it } from 'vitest';
import { chapterAt, chapters, localProgress } from '../chapters';

describe('chapters', () => {
  it('covers 0 to 1 with no gap and no overlap', () => {
    expect(chapters[0].start).toBe(0);
    expect(chapters[chapters.length - 1].end).toBe(1);
    for (let i = 1; i < chapters.length; i += 1) {
      expect(chapters[i].start).toBe(chapters[i - 1].end);
    }
  });

  it('has eight stages, each with a headline and a unique id', () => {
    expect(chapters).toHaveLength(8);
    expect(new Set(chapters.map((c) => c.id)).size).toBe(8);
    for (const c of chapters) expect(c.headline.length).toBeGreaterThan(0);
  });

  it('gives the machine stage the longest scroll distance', () => {
    const machine = chapters.find((c) => c.id === 'machine');
    if (!machine) throw new Error('machine stage missing');
    const longest = Math.max(...chapters.map((c) => c.end - c.start));
    expect(machine.end - machine.start).toBeCloseTo(longest, 5);
  });

  it('never states a forbidden throughput figure', () => {
    const copy = chapters.map((c) => `${c.eyebrow ?? ''} ${c.headline} ${c.sub ?? ''}`).join(' ');
    expect(copy).not.toMatch(/250\s*PPM/i);
    expect(copy).not.toMatch(/122\s*PPM/i);
  });

  it('attributes the throughput claim wherever it appears', () => {
    const withClaim = chapters.filter((c) => `${c.headline} ${c.sub ?? ''}`.includes('170'));
    expect(withClaim.length).toBeGreaterThan(0);
    for (const c of withClaim) {
      expect(`${c.headline} ${c.sub ?? ''}`).toMatch(/2CC|RIEKE/);
    }
  });
});

describe('chapterAt', () => {
  it('resolves both ends of the range', () => {
    expect(chapterAt(0).id).toBe(chapters[0].id);
    expect(chapterAt(1).id).toBe(chapters[chapters.length - 1].id);
  });

  it('clamps out-of-range input instead of throwing', () => {
    expect(chapterAt(-3).id).toBe(chapters[0].id);
    expect(chapterAt(9).id).toBe(chapters[chapters.length - 1].id);
  });

  it('picks the later stage exactly on a boundary', () => {
    expect(chapterAt(chapters[1].start).id).toBe(chapters[1].id);
  });
});

describe('localProgress', () => {
  it('runs 0 to 1 inside a stage', () => {
    const c = chapters[2];
    expect(localProgress(c.start, c)).toBeCloseTo(0, 5);
    expect(localProgress(c.end, c)).toBeCloseTo(1, 5);
    expect(localProgress((c.start + c.end) / 2, c)).toBeCloseTo(0.5, 5);
  });

  it('clamps outside the stage', () => {
    const c = chapters[2];
    expect(localProgress(0, c)).toBe(0);
    expect(localProgress(1, c)).toBe(1);
  });
});
```

- [ ] **Step 2: Run it and watch it fail**

Run: `npm test`
Expected: FAIL — `Failed to resolve import "../chapters"`.

- [ ] **Step 3: Implement the module**

Create `site/components/hero3d/chapters.ts`:

```ts
/**
 * The eight stages of the hero journey.
 *
 * These are camera regions and copy cues, not cuts — the scene never switches.
 * Ranges are contiguous by construction and the table is the single source of
 * truth for both the DOM copy column and the camera path's stage anchors.
 *
 * Copy here is public claim surface. Every figure must trace to
 * docs/brand-context/ and carry its attribution.
 */

export interface Chapter {
  id: string;
  index: number;
  /** Inclusive scroll progress at which this stage begins. */
  start: number;
  /** Exclusive except for the final stage, which ends at exactly 1. */
  end: number;
  eyebrow?: string;
  headline: string;
  sub?: string;
}

const RAW: Omit<Chapter, 'index'>[] = [
  {
    id: 'part',
    start: 0,
    end: 0.1,
    eyebrow: 'Automation across critical industries',
    headline: 'Every production line begins with a part.',
  },
  {
    id: 'industries',
    start: 0.1,
    end: 0.19,
    headline: 'Motion. Control. Care. Everyday scale.',
    sub: 'Automotive, EV solutions, electronics, medical and consumer manufacturing.',
  },
  {
    id: 'anatomy',
    start: 0.19,
    end: 0.3,
    headline: 'Designed around your product.',
    sub: 'Eleven components. One repeatable cycle.',
  },
  {
    id: 'feeders',
    start: 0.3,
    end: 0.4,
    headline: 'Engineered for repeatability.',
    sub: 'Feeding, orienting, transferring, assembling.',
  },
  {
    id: 'machine',
    start: 0.4,
    end: 0.58,
    headline: 'Cam-synchronised stations. Every cycle verified.',
    sub: '170 parts per minute on the 2CC dispensing-pump line.',
  },
  {
    id: 'cell',
    start: 0.58,
    end: 0.72,
    headline: 'From one machine to a production system.',
    sub: 'Stations, lines and complete plants, engineered as one environment.',
  },
  {
    id: 'plant',
    start: 0.72,
    end: 0.86,
    headline: 'One connected production flow.',
    sub: 'Controls, traceability and live production visibility across the floor.',
  },
  {
    id: 'mark',
    start: 0.86,
    end: 1,
    headline: 'From one part to a complete production plant.',
    sub: 'Custom automation engineered around your product, process and performance targets.',
  },
];

export const chapters: readonly Chapter[] = RAW.map((c, index) => ({ ...c, index }));

function clamp01(value: number): number {
  if (Number.isNaN(value)) return 0;
  return Math.min(1, Math.max(0, value));
}

/** The stage containing `p`. Boundaries belong to the later stage. */
export function chapterAt(p: number): Chapter {
  const clamped = clamp01(p);
  for (let i = chapters.length - 1; i >= 0; i -= 1) {
    if (clamped >= chapters[i].start) return chapters[i];
  }
  return chapters[0];
}

/** Where `p` sits inside `chapter`, as 0 to 1. */
export function localProgress(p: number, chapter: Chapter): number {
  const span = chapter.end - chapter.start;
  if (span <= 0) return 0;
  return clamp01((clamp01(p) - chapter.start) / span);
}
```

- [ ] **Step 4: Run the tests**

Run: `npm test`
Expected: PASS, 17 tests total.

- [ ] **Step 5: Commit**

```bash
git add site/components/hero3d/chapters.ts site/components/hero3d/__tests__/chapters.test.ts
git commit -m "feat: add hero scene chapter table"
```

---

## Task 3: Camera path

**Files:**
- Create: `site/components/hero3d/cameraPath.ts`
- Test: `site/components/hero3d/__tests__/cameraPath.test.ts`

**Interfaces:**
- Consumes: nothing (world coordinates are hard-coded here and are the authority the geometry tasks build against).
- Produces: `interface CameraSample { position: Vector3; target: Vector3; fov: number }`; `sampleCameraPath(p: number, out?: CameraSample): CameraSample`; `createCameraSample(): CameraSample`; `STAGE_ANCHORS: readonly StageAnchor[]`.

**World layout this path assumes** — every later geometry task must respect it:

| Region | World space | Built by |
|---|---|---|
| Part / tokens / lanes | around `(-30, 2, 0)` | Task 6 `PartHero` |
| Feeders and machine | `x ∈ [-13, 18]`, `z ∈ [-4, 4]` | existing `AssemblyMachine` |
| Plant cells | `x ∈ [-40, 60]`, `z ∈ [-50, 40]` | Task 7 `PlantField` |
| Tile field and mark | around `(30, 6, 90)` | Task 8 `BrandResolve` |

- [ ] **Step 1: Write the failing test**

Create `site/components/hero3d/__tests__/cameraPath.test.ts`:

```ts
import { describe, expect, it } from 'vitest';
import { createCameraSample, sampleCameraPath, STAGE_ANCHORS } from '../cameraPath';
import { chapters } from '../chapters';

describe('STAGE_ANCHORS', () => {
  it('has one anchor per chapter, in order', () => {
    expect(STAGE_ANCHORS).toHaveLength(chapters.length);
    expect(STAGE_ANCHORS.map((a) => a.id)).toEqual(chapters.map((c) => c.id));
  });
});

describe('sampleCameraPath', () => {
  it('returns finite values across the whole range', () => {
    for (let i = 0; i <= 100; i += 1) {
      const s = sampleCameraPath(i / 100);
      for (const v of [s.position, s.target]) {
        expect(Number.isFinite(v.x)).toBe(true);
        expect(Number.isFinite(v.y)).toBe(true);
        expect(Number.isFinite(v.z)).toBe(true);
      }
      expect(Number.isFinite(s.fov)).toBe(true);
    }
  });

  it('clamps out-of-range input to the endpoints', () => {
    const start = sampleCameraPath(0);
    const before = sampleCameraPath(-2);
    expect(before.position.distanceTo(start.position)).toBeCloseTo(0, 5);

    const end = sampleCameraPath(1);
    const after = sampleCameraPath(4);
    expect(after.position.distanceTo(end.position)).toBeCloseTo(0, 5);
  });

  it('never places the camera below the floor', () => {
    for (let i = 0; i <= 200; i += 1) {
      expect(sampleCameraPath(i / 200).position.y).toBeGreaterThan(0.3);
    }
  });

  it('moves continuously — no jump between adjacent samples', () => {
    const step = 0.005;
    let previous = sampleCameraPath(0).position.clone();
    for (let p = step; p <= 1; p += step) {
      const next = sampleCameraPath(p).position;
      expect(previous.distanceTo(next)).toBeLessThan(12);
      previous = next.clone();
    }
  });

  it('travels outward overall — the plant is further from the part than the machine is', () => {
    const part = sampleCameraPath(0.02).position;
    const machine = sampleCameraPath(0.5).position;
    const plant = sampleCameraPath(0.8).position;
    expect(plant.distanceTo(part)).toBeGreaterThan(machine.distanceTo(part));
  });

  it('keeps fov within a usable cinematic range', () => {
    for (let i = 0; i <= 100; i += 1) {
      const { fov } = sampleCameraPath(i / 100);
      expect(fov).toBeGreaterThanOrEqual(22);
      expect(fov).toBeLessThanOrEqual(52);
    }
  });

  it('writes into a supplied sample instead of allocating', () => {
    const out = createCameraSample();
    const returned = sampleCameraPath(0.4, out);
    expect(returned).toBe(out);
    const before = out.position.clone();
    sampleCameraPath(0.9, out);
    expect(out.position.distanceTo(before)).toBeGreaterThan(0);
  });
});
```

- [ ] **Step 2: Run it and watch it fail**

Run: `npm test`
Expected: FAIL — `Failed to resolve import "../cameraPath"`.

- [ ] **Step 3: Implement the module**

Create `site/components/hero3d/cameraPath.ts`:

```ts
import { CatmullRomCurve3, MathUtils, Vector3 } from 'three';

import { chapters } from './chapters';

/**
 * The camera as a pure function of scroll progress.
 *
 * Position and target ride separate splines through one anchor per stage, so
 * the camera can swing its attention independently of where it travels — the
 * difference between a dolly and a pan. Nothing here holds state; smoothing
 * belongs to the caller, applied to `p` once, so the whole scene stays in
 * step with the copy.
 */

export interface StageAnchor {
  id: string;
  position: [number, number, number];
  target: [number, number, number];
  fov: number;
}

/**
 * One anchor per chapter, in chapter order. These coordinates are the
 * authority for where each stage's geometry must be built.
 */
export const STAGE_ANCHORS: readonly StageAnchor[] = [
  // 1. The part — extreme close, almost no context.
  { id: 'part', position: [-30, 2.3, 3.2], target: [-30, 2.0, 0], fov: 26 },
  // 2. Four industries — pull back just enough to admit the neighbours.
  { id: 'industries', position: [-30, 2.6, 7.4], target: [-30, 2.0, 0], fov: 32 },
  // 3. Anatomy — drift right as the tokens fan into lanes.
  { id: 'anatomy', position: [-26, 3.0, 8.0], target: [-28.5, 1.9, 0], fov: 34 },
  // 4. Lanes become feeders — the first sight of real equipment.
  { id: 'feeders', position: [-17, 4.6, 11.0], target: [-12, 1.6, -1.0], fov: 36 },
  // 5. The machine — the payoff. Long lens, tracking its length.
  { id: 'machine', position: [9, 9.5, 23], target: [0.5, 1.1, 0], fov: 31 },
  // 6. One cell of many — crane up and back.
  { id: 'cell', position: [20, 22, 46], target: [6, 1.0, -2], fov: 34 },
  // 7. The plant — full facility, still legible.
  { id: 'plant', position: [34, 46, 84], target: [12, 0.5, -4], fov: 38 },
  // 8. The mark — settle onto the tile field.
  { id: 'mark', position: [30, 12, 116], target: [30, 6.0, 90], fov: 30 },
];

export interface CameraSample {
  position: Vector3;
  target: Vector3;
  fov: number;
}

export function createCameraSample(): CameraSample {
  return { position: new Vector3(), target: new Vector3(), fov: STAGE_ANCHORS[0].fov };
}

if (STAGE_ANCHORS.length !== chapters.length) {
  throw new Error('cameraPath: STAGE_ANCHORS must have one entry per chapter');
}

const positionCurve = new CatmullRomCurve3(
  STAGE_ANCHORS.map((a) => new Vector3(...a.position)),
  false,
  'catmullrom',
  0.25,
);

const targetCurve = new CatmullRomCurve3(
  STAGE_ANCHORS.map((a) => new Vector3(...a.target)),
  false,
  'catmullrom',
  0.25,
);

/**
 * Anchors sit at the *midpoint* of their chapter rather than its start, so a
 * stage's copy is fully on screen while the camera is closest to that stage's
 * composed framing.
 */
const ANCHOR_AT: readonly number[] = chapters.map((c) => (c.start + c.end) / 2);

/** Map scroll progress onto curve parameter space via the anchor midpoints. */
function curveT(p: number): number {
  const last = ANCHOR_AT.length - 1;
  if (p <= ANCHOR_AT[0]) return 0;
  if (p >= ANCHOR_AT[last]) return 1;

  for (let i = 1; i <= last; i += 1) {
    if (p <= ANCHOR_AT[i]) {
      const span = ANCHOR_AT[i] - ANCHOR_AT[i - 1];
      const local = span > 0 ? (p - ANCHOR_AT[i - 1]) / span : 0;
      return (i - 1 + local) / last;
    }
  }
  return 1;
}

function fovAt(p: number): number {
  const last = ANCHOR_AT.length - 1;
  if (p <= ANCHOR_AT[0]) return STAGE_ANCHORS[0].fov;
  if (p >= ANCHOR_AT[last]) return STAGE_ANCHORS[last].fov;

  for (let i = 1; i <= last; i += 1) {
    if (p <= ANCHOR_AT[i]) {
      const span = ANCHOR_AT[i] - ANCHOR_AT[i - 1];
      const local = span > 0 ? (p - ANCHOR_AT[i - 1]) / span : 0;
      // Smoothed so focal length never changes at a visibly constant rate,
      // which is the tell that a camera move was computed rather than shot.
      const eased = MathUtils.smoothstep(local, 0, 1);
      return MathUtils.lerp(STAGE_ANCHORS[i - 1].fov, STAGE_ANCHORS[i].fov, eased);
    }
  }
  return STAGE_ANCHORS[last].fov;
}

const scratch = { position: new Vector3(), target: new Vector3() };

export function sampleCameraPath(p: number, out?: CameraSample): CameraSample {
  const clamped = Number.isNaN(p) ? 0 : Math.min(1, Math.max(0, p));
  const t = curveT(clamped);

  positionCurve.getPointAt(t, scratch.position);
  targetCurve.getPointAt(t, scratch.target);

  const sample = out ?? createCameraSample();
  sample.position.copy(scratch.position);
  sample.target.copy(scratch.target);
  sample.fov = fovAt(clamped);
  return sample;
}
```

- [ ] **Step 4: Run the tests**

Run: `npm test`
Expected: PASS, 25 tests total.

- [ ] **Step 5: Commit**

```bash
git add site/components/hero3d/cameraPath.ts site/components/hero3d/__tests__/cameraPath.test.ts
git commit -m "feat: add scroll-driven hero camera path"
```

---

## Task 4: Brand re-key and theme support

The scene currently uses the reference site's palette. This task replaces it with VEEMAP's tokens and makes every component theme-aware.

**Files:**
- Modify: `site/components/hero3d/clayPalette.ts` (full rewrite of the colour half)
- Create: `site/components/hero3d/useTheme.ts`
- Test: `site/components/hero3d/__tests__/palette.test.ts`
- Modify: `site/components/hero3d/ClayStage.tsx`, `FlowLine.tsx`, `GroundGrid.tsx`, `AssemblyMachine.tsx`
- Modify: `site/app/lab/machine/page.tsx` (add a theme toggle button for verification)

**Interfaces:**
- Consumes: nothing.
- Produces: `type Theme = 'dark' | 'light'`; `interface ClayPalette`; `paletteFor(theme: Theme): ClayPalette`; `useTheme(): Theme`. `machineScale` keeps its current shape and export name.

- [ ] **Step 1: Write the failing test**

Create `site/components/hero3d/__tests__/palette.test.ts`:

```ts
import { describe, expect, it } from 'vitest';
import { paletteFor } from '../clayPalette';

const SIGNAL = '#fa4c14';
// Anything that is not a neutral grey is a second accent, which the spec forbids.
const isNeutral = (hex: string) => {
  const n = hex.replace('#', '');
  const r = parseInt(n.slice(0, 2), 16);
  const g = parseInt(n.slice(2, 4), 16);
  const b = parseInt(n.slice(4, 6), 16);
  return Math.max(r, g, b) - Math.min(r, g, b) <= 12;
};

describe('paletteFor', () => {
  it('uses the site signal colour for the delivered flow in both themes', () => {
    expect(paletteFor('dark').flow.toLowerCase()).toBe(SIGNAL);
    expect(paletteFor('light').flow.toLowerCase()).toBe(SIGNAL);
  });

  it('admits exactly one saturated colour per theme', () => {
    for (const theme of ['dark', 'light'] as const) {
      const p = paletteFor(theme);
      const saturated = Object.entries(p)
        .filter(([, v]) => typeof v === 'string' && v.startsWith('#'))
        .filter(([, v]) => !isNeutral(v as string))
        .map(([k]) => k);
      expect(saturated).toEqual(['flow']);
    }
  });

  it('matches the page ground so the canvas edge is invisible', () => {
    expect(paletteFor('dark').sky.toLowerCase()).toBe('#000000');
    expect(paletteFor('light').sky.toLowerCase()).toBe('#f2f2f2');
  });

  it('keeps the shell readable against its own sky in both themes', () => {
    expect(paletteFor('dark').shell).not.toBe(paletteFor('dark').sky);
    expect(paletteFor('light').shell).not.toBe(paletteFor('light').sky);
  });

  it('lowers guard opacity on dark so it does not bloom', () => {
    expect(paletteFor('dark').guardOpacity).toBeLessThan(paletteFor('light').guardOpacity);
  });
});
```

- [ ] **Step 2: Run it and watch it fail**

Run: `npm test`
Expected: FAIL — `paletteFor is not a function`.

- [ ] **Step 3: Rewrite the palette module**

Replace the colour half of `site/components/hero3d/clayPalette.ts`. Keep `machineScale` and `claySurface` exactly as they are; delete the old `clay` export.

```ts
/**
 * Clay palette for the VEEMAP hero scene.
 *
 * Keyed to the site's own tokens (globals.css): --ink, --paper, --signal.
 * The reference site this technique came from used blue and red; that was its
 * brand, not ours. VEEMAP runs one accent — the demand line enters muted and
 * unsaturated, and leaves as signal orange. Anything that wants to be a second
 * accent is a design failure.
 */

export type Theme = 'dark' | 'light';

export interface ClayPalette {
  /** Background and fog. Matches the page ground so the canvas has no edge. */
  sky: string;
  ground: string;
  shell: string;
  shellDeep: string;
  guard: string;
  guardOpacity: number;
  figure: string;
  /** Incoming requirement: thin, dim, deliberately unsaturated. */
  demand: string;
  /** Delivered flow. The only saturated colour in the scene. */
  flow: string;
  flowHead: string;
  gridDot: string;
  status: string;
}

const DARK: ClayPalette = {
  sky: '#000000',
  ground: '#141414',
  shell: '#e4e4e0',
  shellDeep: '#9a9a96',
  guard: '#ffffff',
  guardOpacity: 0.2,
  figure: '#6e6e6a',
  demand: '#a6a6a3',
  flow: '#fa4c14',
  flowHead: '#f2f2f2',
  gridDot: '#3a3a38',
  status: '#f2f2f2',
};

const LIGHT: ClayPalette = {
  sky: '#f2f2f2',
  ground: '#e6e6e2',
  shell: '#ffffff',
  shellDeep: '#d4d4d0',
  guard: '#ffffff',
  guardOpacity: 0.34,
  figure: '#b8b8b4',
  demand: '#4e4e4b',
  flow: '#fa4c14',
  flowHead: '#ffffff',
  gridDot: '#c8c8c4',
  status: '#ffffff',
};

export function paletteFor(theme: Theme): ClayPalette {
  return theme === 'light' ? LIGHT : DARK;
}
```

- [ ] **Step 4: Add the theme hook**

Create `site/components/hero3d/useTheme.ts`:

```ts
'use client';

import { useEffect, useState } from 'react';

import type { Theme } from './clayPalette';

/**
 * Tracks the site theme. The toggle writes `data-theme` on <html> and an
 * inline script in the root layout sets it before paint, so a MutationObserver
 * on that attribute is the whole contract — there is no theme context to read.
 *
 * Defaults to dark to match the layout's own default during SSR.
 */
export function useTheme(): Theme {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const root = document.documentElement;
    const read = () => setTheme(root.dataset.theme === 'light' ? 'light' : 'dark');
    read();

    const observer = new MutationObserver(read);
    observer.observe(root, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  return theme;
}
```

- [ ] **Step 5: Thread the palette through the scene components**

In `ClayStage.tsx`: call `useTheme()`, derive `const palette = paletteFor(theme)`, and replace every `clay.*` reference. Accept a new **optional** prop `settings?: QualitySettings`, defaulting to `settingsForTier('high')`, and use it for `dpr`, `shadow-mapSize`, and to skip the shadow-casting `directionalLight` entirely when `settings.useDirectionalShadows` is false. It must be optional because the Task 5 scroll harness mounts `ClayStage` before any tier detection exists. Pass `palette` down through a new prop on the children rather than re-reading the hook in every leaf.

Add a `PaletteContext` at the top of `clayPalette.ts`'s consumers to avoid prop-drilling into `AssemblyMachine`'s sub-components:

Create the context inside `ClayStage.tsx`:

```tsx
import { createContext, useContext } from 'react';
import { paletteFor, type ClayPalette } from './clayPalette';

const PaletteContext = createContext<ClayPalette>(paletteFor('dark'));
export const usePalette = () => useContext(PaletteContext);
```

Wrap the Canvas children in `<PaletteContext.Provider value={palette}>`. In `AssemblyMachine.tsx`, `FlowLine.tsx` and `GroundGrid.tsx`, replace the `import { clay } from './clayPalette'` with `import { usePalette } from './ClayStage'` and call `const clay = usePalette()` at the top of each component that needs colour.

In `FlowLine.tsx` also rename the visual roles: the demand tube uses `clay.demand`, the delivered tube and sheath use `clay.flow`, and the head uses `clay.flowHead`.

In `AssemblyMachine.tsx`, `StackLight` uses `clay.status` and its two meshes lose the green — keep the emissive core and the soft halo, both `clay.status`.

- [ ] **Step 6: Add a theme toggle to the lab route**

In `site/app/lab/machine/page.tsx`, add above the caption:

```tsx
<button
  type="button"
  onClick={() => {
    const root = document.documentElement;
    root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
  }}
  style={{
    position: 'absolute', right: 24, bottom: 20, padding: '8px 14px',
    font: '500 12px/1 ui-sans-serif, system-ui, sans-serif', letterSpacing: '0.08em',
    textTransform: 'uppercase', cursor: 'pointer', borderRadius: 4,
    border: '1px solid currentColor', background: 'transparent', color: '#8a8a86',
  }}
>
  Toggle theme
</button>
```

- [ ] **Step 7: Run the tests and the type check**

Run: `npm test && npx tsc --noEmit && npx eslint components/hero3d app/lab`
Expected: all pass, 30 tests total.

- [ ] **Step 8: Verify both themes in the browser**

Start the preview and open `/lab/machine`. If the canvas is blank on first load, dispatch a resize from the console — the Browser pane loads pages hidden, which is a harness artifact, not a site bug.

Check, in this order:
1. Dark theme: the machine emerges out of black, distant geometry falls into the fog with no visible ground edge, and the flow beam is the only colour.
2. Click **Toggle theme**: the whole scene re-keys with no reload, no flash and no leftover blue or red anywhere.
3. Light theme: contact shadows are still visible against `#e6e6e2` — if the machine looks like it is floating, raise `ContactShadows` opacity for light only.

Take a screenshot of each theme.

- [ ] **Step 9: Commit**

```bash
git add site/components/hero3d site/app/lab
git commit -m "feat: re-key hero scene to VEEMAP brand tokens with theme support"
```

---

## Task 5: Scroll-driven camera

**Files:**
- Create: `site/components/hero3d/HeroScene.tsx`
- Modify: `site/components/hero3d/ClayStage.tsx` (accept `controls={false}` and skip OrbitControls)
- Create: `site/app/lab/scroll/page.tsx` (scroll test harness)

**Interfaces:**
- Consumes: `sampleCameraPath`, `createCameraSample` (Task 3); `useTheme`, `paletteFor` (Task 4); `settingsForTier`, `readDeviceInput` (Task 1).
- Produces: `HeroScene({ progress }: { progress: React.RefObject<number> })` — a component that reads `progress.current` every frame and drives the camera. It never re-renders on scroll.

- [ ] **Step 1: Write the scene driver**

Create `site/components/hero3d/HeroScene.tsx`:

```tsx
'use client';

import { useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { MathUtils, PerspectiveCamera, Vector3 } from 'three';

import { AssemblyMachine } from './AssemblyMachine';
import { FlowLine } from './FlowLine';
import { GroundGrid } from './GroundGrid';
import { createCameraSample, sampleCameraPath } from './cameraPath';

/**
 * Drives the camera from scroll progress.
 *
 * `progress` is a ref, not a prop value: scroll changes it up to 120 times a
 * second, and a React re-render at that rate would be the single most
 * expensive thing on the page. The scene renders once and reads the ref.
 *
 * Damping is applied to the scalar, never to the camera. Damping the camera
 * directly lets position drift out of step with the copy at stage boundaries.
 */
export function HeroScene({ progress }: { progress: React.RefObject<number> }) {
  const camera = useThree((state) => state.camera);
  const smoothed = useRef(0);
  const sample = useMemo(() => createCameraSample(), []);
  const lookTarget = useMemo(() => new Vector3(), []);

  useFrame((_, delta) => {
    const target = progress.current ?? 0;
    // Cap delta so a backgrounded tab does not resume with a jump.
    smoothed.current = MathUtils.damp(smoothed.current, target, 5, Math.min(delta, 0.1));

    sampleCameraPath(smoothed.current, sample);
    camera.position.copy(sample.position);
    lookTarget.copy(sample.target);
    camera.lookAt(lookTarget);

    if (camera instanceof PerspectiveCamera && Math.abs(camera.fov - sample.fov) > 0.01) {
      camera.fov = sample.fov;
      camera.updateProjectionMatrix();
    }
  });

  return (
    <>
      <AssemblyMachine />
      <GroundGrid />
      <FlowLine />
    </>
  );
}
```

- [ ] **Step 2: Let ClayStage run without OrbitControls**

`ClayStage` already accepts `controls?: boolean`. Confirm that passing `controls={false}` mounts no `OrbitControls`, because `OrbitControls` with `makeDefault` will fight the camera writes above. Also remove the hard-coded `camera` position from the `Canvas` prop when controls are off — `HeroScene` owns it from frame one.

- [ ] **Step 3: Build a scroll harness**

Create `site/app/lab/scroll/page.tsx`:

```tsx
'use client';

import { useRef } from 'react';

import { ClayStage } from '@/components/hero3d/ClayStage';
import { HeroScene } from '@/components/hero3d/HeroScene';
import { SceneProbe } from '@/components/hero3d/SceneProbe';
import { chapterAt } from '@/components/hero3d/chapters';

/** Raw slider harness: proves the camera path before ScrollTrigger is involved. */
export default function ScrollLabPage() {
  const progress = useRef(0);
  const label = useRef<HTMLSpanElement>(null);

  return (
    <main style={{ position: 'relative', width: '100%', height: '100dvh', overflow: 'hidden' }}>
      <ClayStage controls={false}>
        <HeroScene progress={progress} />
        <SceneProbe />
      </ClayStage>
      <div style={{ position: 'absolute', left: 24, right: 24, bottom: 24, display: 'flex', gap: 16, alignItems: 'center' }}>
        <input
          type="range"
          min={0}
          max={1000}
          defaultValue={0}
          style={{ flex: 1 }}
          onChange={(e) => {
            const p = Number(e.target.value) / 1000;
            progress.current = p;
            if (label.current) label.current.textContent = `${p.toFixed(3)} · ${chapterAt(p).id}`;
          }}
        />
        <span
          ref={label}
          style={{ font: '500 12px/1 ui-monospace, monospace', color: '#8a8a86', minWidth: 160 }}
        >
          0.000 · part
        </span>
      </div>
    </main>
  );
}
```

- [ ] **Step 4: Verify the path in the browser**

Open `/lab/scroll`. Drag the slider slowly from 0 to 1 and confirm:
- The camera never jumps, never passes through the ground, and never ends up inside the machine.
- At `p ≈ 0.5` the framing matches the approved machine composition.
- Stage regions that have no geometry yet (part, plant, mark) show empty space — expected until Tasks 6–8.
- Release the slider mid-drag: the camera eases to rest rather than stopping dead.

Screenshot at `p = 0.0`, `0.35`, `0.5`, `0.8`, `1.0`.

- [ ] **Step 5: Run checks and commit**

```bash
npm test && npx tsc --noEmit && npx eslint components/hero3d app/lab
git add site/components/hero3d/HeroScene.tsx site/components/hero3d/ClayStage.tsx site/app/lab/scroll
git commit -m "feat: drive hero camera from scroll progress"
```

---

## Task 6: Part, industries and anatomy stages

**Files:**
- Create: `site/components/hero3d/PartHero.tsx`
- Modify: `site/components/hero3d/HeroScene.tsx` (mount it)

**Interfaces:**
- Consumes: `usePalette` (Task 4); world origin `(-30, 2, 0)` from `STAGE_ANCHORS` (Task 3).
- Produces: `PartHero({ progress }: { progress: React.RefObject<number> })`.

**Constraints from the spec:** the pump separates only briefly, then abstracts into eleven primitives. Do not build a true exploded BOM. The tokens must not be recognisable as components.

- [ ] **Step 1: Build the component**

Create `site/components/hero3d/PartHero.tsx`:

```tsx
'use client';

import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MathUtils, Object3D, type Group, type InstancedMesh } from 'three';

import { usePalette } from './ClayStage';
import { chapters, localProgress } from './chapters';
import { claySurface } from './clayPalette';

const ORIGIN: [number, number, number] = [-30, 2, 0];

/** Eleven abstract primitives. Deliberately not eleven pump components. */
const TOKENS = Array.from({ length: 11 }, (_, i) => ({
  lane: i,
  kind: (['capsule', 'ring', 'rod', 'disc'] as const)[i % 4],
}));

const ANATOMY = chapters.find((c) => c.id === 'anatomy')!;
const INDUSTRIES = chapters.find((c) => c.id === 'industries')!;

export function PartHero({ progress }: { progress: React.RefObject<number> }) {
  const clay = usePalette();
  const pump = useRef<Group>(null);
  const neighbours = useRef<Group>(null);
  const tokens = useRef<InstancedMesh>(null);
  const dummy = useMemo(() => new Object3D(), []);

  useFrame(({ clock }, delta) => {
    const p = progress.current ?? 0;

    // The pump turns continuously — scroll changes what we look at, not
    // whether the scene is alive.
    if (pump.current) pump.current.rotation.y = clock.elapsedTime * 0.25;

    // Neighbours fade in for the industries stage and recede after it.
    if (neighbours.current) {
      const local = localProgress(p, INDUSTRIES);
      const visible = p > INDUSTRIES.start - 0.03 && p < INDUSTRIES.end + 0.04;
      const wanted = visible ? Math.sin(local * Math.PI) : 0;
      neighbours.current.scale.setScalar(MathUtils.damp(neighbours.current.scale.x, Math.max(wanted, 0.001), 6, Math.min(delta, 0.1)));
    }

    // Tokens: separate, then fan into eleven lanes.
    if (tokens.current) {
      const local = localProgress(p, ANATOMY);
      const spread = MathUtils.smootherstep(local, 0.15, 0.75);
      for (let i = 0; i < TOKENS.length; i += 1) {
        const lane = TOKENS[i].lane - (TOKENS.length - 1) / 2;
        // Start stacked on the pump's axis; end in parallel lanes running +x.
        const x = ORIGIN[0] + spread * (1.4 + i * 0.28);
        const y = ORIGIN[1] + (1 - spread) * (lane * 0.06) + spread * (lane * 0.22);
        const z = spread * lane * 0.0;
        dummy.position.set(x, y, z);
        dummy.rotation.set(0, clock.elapsedTime * 0.2, Math.PI / 2);
        dummy.scale.setScalar(MathUtils.lerp(0.35, 1, spread));
        dummy.updateMatrix();
        tokens.current.setMatrixAt(i, dummy.matrix);
      }
      tokens.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <group>
      {/* The pump: a simplified silhouette, never a teardown. */}
      <group ref={pump} position={ORIGIN}>
        <mesh castShadow>
          <cylinderGeometry args={[0.26, 0.3, 0.5, 20]} />
          <meshStandardMaterial color={clay.shell} {...claySurface} />
        </mesh>
        <mesh position={[0, 0.38, 0]} castShadow>
          <cylinderGeometry args={[0.16, 0.16, 0.3, 16]} />
          <meshStandardMaterial color={clay.shell} {...claySurface} />
        </mesh>
        <mesh position={[0, 0.58, 0.1]} rotation={[Math.PI / 2, 0, 0]} castShadow>
          <capsuleGeometry args={[0.11, 0.2, 4, 12]} />
          <meshStandardMaterial color={clay.shell} {...claySurface} />
        </mesh>
        <mesh position={[0, -0.5, 0]} castShadow>
          <cylinderGeometry args={[0.035, 0.035, 0.6, 10]} />
          <meshStandardMaterial color={clay.shellDeep} {...claySurface} />
        </mesh>
      </group>

      {/* Three neighbouring industries, held at distance. Simplified to
          silhouettes: a wheel motor, a clutch plate, an inhaler body. */}
      <group ref={neighbours} position={ORIGIN} scale={0.001}>
        <mesh position={[-2.4, 0, -0.6]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.62, 0.62, 0.42, 24]} />
          <meshStandardMaterial color={clay.shell} {...claySurface} />
        </mesh>
        <mesh position={[2.4, 0, -0.6]} castShadow>
          <cylinderGeometry args={[0.56, 0.56, 0.14, 24]} />
          <meshStandardMaterial color={clay.shell} {...claySurface} />
        </mesh>
        <mesh position={[0, 0, -2.6]} castShadow>
          <boxGeometry args={[0.34, 0.72, 0.3]} />
          <meshStandardMaterial color={clay.shell} {...claySurface} />
        </mesh>
      </group>

      <instancedMesh ref={tokens} args={[undefined, undefined, TOKENS.length]} castShadow frustumCulled={false}>
        <capsuleGeometry args={[0.07, 0.16, 4, 10]} />
        <meshStandardMaterial color={clay.shell} roughness={0.6} metalness={0} />
      </instancedMesh>
    </group>
  );
}
```

- [ ] **Step 2: Mount it**

In `HeroScene.tsx`, import `PartHero` and add `<PartHero progress={progress} />` alongside `AssemblyMachine`.

- [ ] **Step 3: Verify**

Open `/lab/scroll`. Drag from 0 to 0.4 and confirm: the pump reads as a pump silhouette and turns steadily; neighbours swell in and recede across the industries stage; tokens separate and fan into eleven lanes by the end of anatomy; **no token reads as a recognisable pump component**. Screenshot at `p = 0.05`, `0.14`, `0.25`, `0.35`.

- [ ] **Step 4: Run checks and commit**

```bash
npm test && npx tsc --noEmit && npx eslint components/hero3d
git add site/components/hero3d/PartHero.tsx site/components/hero3d/HeroScene.tsx
git commit -m "feat: add part, industries and anatomy hero stages"
```

---

## Task 7: Plant field

**Files:**
- Create: `site/components/hero3d/PlantField.tsx`
- Modify: `site/components/hero3d/HeroScene.tsx`

**Interfaces:**
- Consumes: `usePalette`; `QualitySettings.plantCellCount` (Task 1).
- Produces: `PlantField({ cellCount }: { cellCount: number })`.

**Constraint:** the facility must be finite and physically buildable, with visible boundaries. Endless receding machinery reads as concept art and destroys the credibility the earlier stages earned.

- [ ] **Step 1: Build the component**

Create `site/components/hero3d/PlantField.tsx`:

```tsx
'use client';

import { Instance, Instances } from '@react-three/drei';

import { usePalette } from './ClayStage';
import { claySurface } from './clayPalette';

/**
 * Stages 6–7: the line becomes one cell among several, then a whole facility.
 *
 * Every cell is the same three primitives at different scales. At this
 * abstraction they read as "automation cell" without describing any machine,
 * which is the same guarantee the main model gives.
 */

interface Cell {
  x: number;
  z: number;
  length: number;
  rotated: boolean;
}

function layout(count: number): Cell[] {
  const cells: Cell[] = [];
  // Two rows either side of a central aisle, marching away from the hero line.
  for (let i = 0; i < count; i += 1) {
    const row = i % 2;
    const step = Math.floor(i / 2);
    cells.push({
      x: -18 + step * 15,
      z: row === 0 ? -26 : 18,
      length: 8 + (i % 3) * 2,
      rotated: false,
    });
  }
  return cells;
}

export function PlantField({ cellCount }: { cellCount: number }) {
  const clay = usePalette();
  const cells = layout(cellCount);

  return (
    <group>
      {cells.map((c, i) => (
        <group key={i} position={[c.x, 0, c.z]}>
          <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
            <boxGeometry args={[c.length, 1.0, 1.5]} />
            <meshStandardMaterial color={clay.shellDeep} {...claySurface} />
          </mesh>
          <mesh position={[0, 1.4, 0]} castShadow receiveShadow>
            <boxGeometry args={[c.length * 0.94, 0.8, 1.3]} />
            <meshStandardMaterial color={clay.shell} {...claySurface} />
          </mesh>
          {/* Conveyor run linking this cell toward the aisle. */}
          <mesh position={[0, 0.7, c.z < 0 ? 5.5 : -5.5]} castShadow receiveShadow>
            <boxGeometry args={[0.7, 0.16, 9]} />
            <meshStandardMaterial color={clay.shell} {...claySurface} />
          </mesh>
        </group>
      ))}

      {/* Goods-out: pallet stacks that give the facility a visible end. */}
      <Instances limit={12} castShadow receiveShadow>
        <boxGeometry args={[1.6, 1.2, 1.6]} />
        <meshStandardMaterial color={clay.shellDeep} {...claySurface} />
        {Array.from({ length: 12 }, (_, i) => (
          <Instance key={i} position={[52 + (i % 3) * 2.2, 0.6, -8 + Math.floor(i / 3) * 2.4]} />
        ))}
      </Instances>

      {/* Hall boundary: two long low walls. Without them the plant is endless,
          and an endless plant reads as concept art. */}
      {[-46, 40].map((z) => (
        <mesh key={z} position={[16, 3, z]} receiveShadow>
          <boxGeometry args={[110, 6, 0.4]} />
          <meshStandardMaterial color={clay.ground} roughness={0.95} metalness={0} />
        </mesh>
      ))}
    </group>
  );
}
```

- [ ] **Step 2: Mount it with the tier's cell count**

In `HeroScene.tsx`, accept a `cellCount: number` prop and render `<PlantField cellCount={cellCount} />`. In `/lab/scroll`, pass `settingsForTier(detectTier(readDeviceInput())).plantCellCount` from a `useState` initialised in an effect (never read `window` during render).

- [ ] **Step 3: Verify**

Open `/lab/scroll`, drag from 0.55 to 0.9. Confirm: the hero line stays the visual anchor as cells appear around it; the facility has a visible far boundary; nothing intersects the machine; the fog still swallows the far wall rather than clipping it. Screenshot at `p = 0.65`, `0.8`.

- [ ] **Step 4: Run checks and commit**

```bash
npm test && npx tsc --noEmit && npx eslint components/hero3d
git add site/components/hero3d/PlantField.tsx site/components/hero3d/HeroScene.tsx site/app/lab/scroll
git commit -m "feat: add plant field hero stages"
```

---

## Task 8: Brand resolve

**Files:**
- Create: `site/components/hero3d/BrandResolve.tsx`
- Modify: `site/components/hero3d/HeroScene.tsx`, `site/components/hero3d/FlowLine.tsx`

**Interfaces:**
- Consumes: `usePalette`; `chapters`, `localProgress`; world origin `(30, 6, 90)`.
- Produces: `BrandResolve({ progress }: { progress: React.RefObject<number> })`.

- [ ] **Step 1: Build the component**

Create `site/components/hero3d/BrandResolve.tsx`:

```tsx
'use client';

import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MathUtils, Object3D, type InstancedMesh } from 'three';

import { usePalette } from './ClayStage';
import { chapters, localProgress } from './chapters';
import { claySurface } from './clayPalette';

const ORIGIN: [number, number, number] = [30, 6, 90];
const MARK = chapters.find((c) => c.id === 'mark')!;

const COLS = 11;
const ROWS = 7;
const COUNT = COLS * ROWS;

/**
 * A 11x7 mask of the VEEMAP chevron. 1 = tile belongs to the mark and travels
 * inward; 0 = tile drifts out and fades. Replace this with the real mark's
 * proportions once the official SVG is traced.
 */
const MASK: readonly number[] = [
  0,0,0,0,0,0,0,0,0,0,0,
  0,1,1,0,0,0,0,0,1,1,0,
  0,0,1,1,0,0,0,1,1,0,0,
  0,0,0,1,1,0,1,1,0,0,0,
  0,0,0,0,1,1,1,0,0,0,0,
  0,0,0,0,0,1,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,
];

export function BrandResolve({ progress }: { progress: React.RefObject<number> }) {
  const clay = usePalette();
  const tiles = useRef<InstancedMesh>(null);
  const dummy = useMemo(() => new Object3D(), []);

  useFrame(({ clock }, delta) => {
    if (!tiles.current) return;
    const p = progress.current ?? 0;
    const local = localProgress(p, MARK);
    // Tiles hold as a field, then resolve into the mark over the second half.
    const resolve = MathUtils.smootherstep(local, 0.25, 0.85);

    for (let i = 0; i < COUNT; i += 1) {
      const col = i % COLS;
      const row = Math.floor(i / COLS);
      const inMark = MASK[i] === 1;

      const fieldX = ORIGIN[0] + (col - (COLS - 1) / 2) * 2.2;
      const fieldY = ORIGIN[1] + ((ROWS - 1) / 2 - row) * 2.2;
      const markX = ORIGIN[0] + (col - (COLS - 1) / 2) * 1.05;
      const markY = ORIGIN[1] + ((ROWS - 1) / 2 - row) * 1.05;

      // Tiles outside the mark drift back and shrink away.
      const drift = inMark ? 0 : resolve * 9;
      dummy.position.set(
        MathUtils.lerp(fieldX, markX, resolve),
        MathUtils.lerp(fieldY, markY, resolve),
        ORIGIN[2] - drift,
      );
      const scale = inMark
        ? MathUtils.lerp(1, 1.05, resolve)
        : MathUtils.lerp(1, 0.001, resolve);
      dummy.scale.setScalar(Math.max(scale, 0.001));
      // A slow idle wobble keeps the resting field from looking printed.
      dummy.rotation.z = inMark ? 0 : Math.sin(clock.elapsedTime * 0.4 + i) * 0.03 * (1 - resolve);
      dummy.updateMatrix();
      tiles.current.setMatrixAt(i, dummy.matrix);
    }
    tiles.current.instanceMatrix.needsUpdate = true;

    // Fade the whole field in only as the stage arrives, so it is not a wall
    // of tiles hanging behind the plant for the previous four stages.
    const material = tiles.current.material as { opacity: number; transparent: boolean };
    const wanted = p > MARK.start - 0.08 ? 1 : 0;
    material.transparent = true;
    material.opacity = MathUtils.damp(material.opacity, wanted, 6, Math.min(delta, 0.1));
  });

  return (
    <instancedMesh ref={tiles} args={[undefined, undefined, COUNT]} frustumCulled={false}>
      <boxGeometry args={[1.9, 1.9, 0.22]} />
      <meshStandardMaterial color={clay.shell} {...claySurface} transparent opacity={0} />
    </instancedMesh>
  );
}
```

- [ ] **Step 2: Carry the flow into the mark**

In `FlowLine.tsx`, extend `flowPoints` past the plant so the beam reaches the tile field rather than exiting to nowhere. Append:

```ts
  new Vector3(20, 6.0, 34),
  new Vector3(26, 6.0, 62),
  new Vector3(30, 6.0, 86),
```

Then delete the two old exit points `(12.6, 3.0, 4.4)` and `(14.4, 5.0, 7.6)` and replace them with `(16, 4.0, 14)` so the curve stays smooth.

- [ ] **Step 3: Mount and verify**

Add `<BrandResolve progress={progress} />` to `HeroScene`. Open `/lab/scroll`, drag 0.84 → 1.0. Confirm: the tile field fades in rather than appearing; tiles outside the mark clear away; the mark is legible and centred at `p = 1`; the beam arrives at the field; the composition holds still at the end with headroom for the CTA. Screenshot at `p = 0.88`, `0.95`, `1.0`.

- [ ] **Step 4: Run checks and commit**

```bash
npm test && npx tsc --noEmit && npx eslint components/hero3d
git add site/components/hero3d/BrandResolve.tsx site/components/hero3d/FlowLine.tsx site/components/hero3d/HeroScene.tsx
git commit -m "feat: add brand resolve hero stage"
```

---

## Task 9: Pinned DOM host

**Files:**
- Create: `site/components/hero3d/HeroSection.tsx`
- Create: `site/components/hero3d/hero.module.css`

**Interfaces:**
- Consumes: everything above.
- Produces: `HeroSection()` — the complete, self-contained hero, ready to drop into a page.

- [ ] **Step 1: Build the section**

Create `site/components/hero3d/HeroSection.tsx`:

```tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import { ClayStage } from './ClayStage';
import { HeroScene } from './HeroScene';
import { chapterAt, chapters } from './chapters';
import { detectTier, readDeviceInput, settingsForTier, type QualitySettings } from './quality';
import styles from './hero.module.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

/**
 * The hero.
 *
 * The host is a normal in-flow block with an explicit height — R3F renders
 * nothing while its container measures zero, and a fixed host that collapses
 * the document body produces a permanently blank canvas.
 *
 * Scroll writes to a ref, never to state. The copy column is driven by a
 * single data attribute so stage changes cost one attribute write per
 * boundary rather than a React render per frame.
 */
export function HeroSection() {
  const root = useRef<HTMLElement>(null);
  const copy = useRef<HTMLDivElement>(null);
  const progress = useRef(0);
  const [settings, setSettings] = useState<QualitySettings | null>(null);

  // Device probing touches window, so it happens after mount, never in render.
  useEffect(() => {
    setSettings(settingsForTier(detectTier(readDeviceInput())));
  }, []);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          desktop: '(min-width: 901px)',
          mobile: '(max-width: 900px)',
          reduceMotion: '(prefers-reduced-motion: reduce)',
        },
        (context) => {
          const { reduceMotion } = context.conditions as { reduceMotion: boolean };

          if (reduceMotion) {
            // Hold the machine framing and let the page scroll normally.
            progress.current = 0.5;
            copy.current?.setAttribute('data-stage', 'all');
            return;
          }

          let current = '';
          ScrollTrigger.create({
            trigger: root.current,
            start: 'top top',
            end: 'bottom bottom',
            pin: `.${styles.stage}`,
            pinSpacing: false,
            scrub: true,
            onUpdate: (self) => {
              progress.current = self.progress;
              const stage = chapterAt(self.progress);
              if (stage.id !== current) {
                current = stage.id;
                copy.current?.setAttribute('data-stage', stage.id);
              }
            },
          });
        },
      );

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} className={styles.hero} aria-label="From one part to a complete production plant">
      <div className={styles.stage}>
        {settings ? (
          <ClayStage controls={false} settings={settings}>
            <HeroScene progress={progress} cellCount={settings.plantCellCount} />
          </ClayStage>
        ) : null}

        <div ref={copy} className={styles.copy} data-stage="part">
          {chapters.map((c) => (
            <article key={c.id} className={styles.chapter} data-chapter={c.id}>
              {c.eyebrow ? <p className={styles.eyebrow}>{c.eyebrow}</p> : null}
              <h2 className={styles.headline}>{c.headline}</h2>
              {c.sub ? <p className={styles.sub}>{c.sub}</p> : null}
            </article>
          ))}
          <a className={styles.cta} href="/contact">
            Discuss your automation requirement →
          </a>
        </div>

        <a className={styles.skip} href="#proof">
          Skip animation
        </a>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add the stylesheet**

Create `site/components/hero3d/hero.module.css`:

```css
/* Scroll distance: ~140vh per stage. Eight stages, plus a hold at the end. */
.hero {
  position: relative;
  height: 1200vh;
  background: var(--ground);
}

.stage {
  position: relative;
  width: 100%;
  height: 100dvh;
  overflow: hidden;
}

.copy {
  position: absolute;
  inset-block: 0;
  inset-inline-start: var(--page-gutter);
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: min(38ch, 36vw);
  pointer-events: none;
}

/* Every stage's copy is in the DOM for search and for reduced motion; only the
   active one is visible. */
.chapter {
  position: absolute;
  opacity: 0;
  transform: translateY(0.6rem);
  transition: opacity 420ms ease, transform 420ms ease;
}

.copy[data-stage='part'] [data-chapter='part'],
.copy[data-stage='industries'] [data-chapter='industries'],
.copy[data-stage='anatomy'] [data-chapter='anatomy'],
.copy[data-stage='feeders'] [data-chapter='feeders'],
.copy[data-stage='machine'] [data-chapter='machine'],
.copy[data-stage='cell'] [data-chapter='cell'],
.copy[data-stage='plant'] [data-chapter='plant'],
.copy[data-stage='mark'] [data-chapter='mark'] {
  opacity: 1;
  transform: none;
}

.eyebrow {
  margin: 0 0 1rem;
  font-family: var(--font-utility), sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--muted);
}

.headline {
  margin: 0;
  font-family: var(--font-display), serif;
  font-size: clamp(1.75rem, 3.4vw, 3.25rem);
  line-height: 1.08;
  color: var(--text);
}

.sub {
  margin: 1rem 0 0;
  max-width: 34ch;
  font-size: clamp(0.95rem, 1.1vw, 1.05rem);
  line-height: 1.55;
  color: var(--muted);
}

.cta {
  position: absolute;
  inset-block-end: 12vh;
  opacity: 0;
  pointer-events: none;
  font-family: var(--font-utility), sans-serif;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--signal);
  transition: opacity 420ms ease;
}

.copy[data-stage='mark'] .cta,
.copy[data-stage='all'] .cta {
  opacity: 1;
  pointer-events: auto;
}

.skip {
  position: absolute;
  inset-block-end: 2rem;
  inset-inline-end: var(--page-gutter);
  font-family: var(--font-utility), sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
}

/* Reduced motion: stop pinning, stack every stage's copy, keep the scene as a
   single static frame. All eight headlines must remain readable. */
@media (prefers-reduced-motion: reduce) {
  .hero { height: auto; }
  .stage { height: auto; }
  .copy {
    position: static;
    width: auto;
    padding-block: 4rem;
    pointer-events: auto;
  }
  .chapter {
    position: static;
    opacity: 1;
    transform: none;
    margin-block-end: 3rem;
  }
  .cta { position: static; opacity: 1; pointer-events: auto; }
}

@media (max-width: 900px) {
  .hero { height: 900vh; }
  .copy { width: auto; inset-inline: var(--page-gutter); }
}
```

- [ ] **Step 3: Verify**

Open the section on a scratch route or directly after Task 10. Confirm, in order:
1. Cold load renders — no resize needed.
2. Scrolling advances the camera and swaps copy at stage boundaries.
3. Object motion continues when scrolling stops.
4. `Skip animation` jumps past the hero.
5. In Chrome DevTools → Rendering → *Emulate prefers-reduced-motion*: no pin, no hijack, all eight headlines readable, scene static, CTA present.
6. Resize to 375px: copy is full-width, camera path still completes.

- [ ] **Step 4: Run checks and commit**

```bash
npm test && npx tsc --noEmit && npx eslint components/hero3d
git add site/components/hero3d/HeroSection.tsx site/components/hero3d/hero.module.css
git commit -m "feat: add pinned hero section host"
```

---

## Task 10: Homepage integration

**Files:**
- Modify: `site/app/page.tsx`
- Delete: `site/app/CommissioningVideoSequence.tsx` (only after the new hero is confirmed working)

**Interfaces:**
- Consumes: `HeroSection` (Task 9).
- Produces: nothing new.

- [ ] **Step 1: Swap the hero**

In `site/app/page.tsx`, replace the `CommissioningVideoSequence` import and its usage with:

```tsx
import { HeroSection } from '@/components/hero3d/HeroSection';
```

and render `<HeroSection />` in its place. Leave every section below it untouched in this step.

- [ ] **Step 2: Reconcile the existing ScrollTrigger setup**

`page.tsx` already creates its own `gsap.matchMedia()` block. Confirm that the hero's own trigger and the page's existing triggers do not both pin. If the page pins anything at `start: 'top top'`, the two pins will fight — resolve by giving the hero the earlier `refreshPriority`:

```tsx
ScrollTrigger.config({ ignoreMobileResize: true });
```

and set `refreshPriority: 1` on the hero's trigger in `HeroSection.tsx`.

- [ ] **Step 3: Verify the whole page**

Load `/`. Scroll the full page. Confirm: the hero completes; the section immediately after it starts cleanly with no pin overlap or jump; every existing section below still behaves; the theme toggle re-keys the hero live; no console errors.

- [ ] **Step 4: Remove the old hero**

Only once step 3 passes:

```bash
git rm site/app/CommissioningVideoSequence.tsx
```

Then `npx tsc --noEmit` to catch any remaining import. If `site/app/globals.css` contains rules scoped only to the commissioning sequence (search for `--sequence-progress`), delete those too.

- [ ] **Step 5: Run checks and commit**

```bash
npm test && npx tsc --noEmit && npm run lint && npm run build
git add -A site
git commit -m "feat: replace homepage hero with scroll-driven 3D scene"
```

---

## Task 11: Proof section

**Files:**
- Create: `site/components/home/ProofFilm.tsx`
- Create: `site/components/home/proof-film.module.css`
- Modify: `site/app/page.tsx`

**Interfaces:**
- Consumes: clips exported from `media/2CC SECOND LINE.mov` per the spec §9 table.
- Produces: `ProofFilm()`.

**Blocking prerequisite:** the clearances in spec §9 must be resolved in writing before any frame of this section ships. Build the component against placeholder clips if clearances are outstanding, and do not deploy it.

- [ ] **Step 1: Cut the seven clips**

For each row of spec §9, export a stabilised, graded, reframed clip. Encode each twice:

```bash
ffmpeg -i proof-01.mov -c:v libvpx-vp9 -crf 33 -b:v 0 -an site/public/video/proof/proof-01.webm
ffmpeg -i proof-01.mov -c:v libx264 -crf 22 -preset slow -pix_fmt yuv420p -an -movflags +faststart site/public/video/proof/proof-01.mp4
ffmpeg -i proof-01.mov -frames:v 1 -q:v 2 site/public/video/proof/proof-01.jpg
```

Repeat for `proof-02` … `proof-07`.

- [ ] **Step 2: Build the section**

Create `site/components/home/ProofFilm.tsx`:

```tsx
'use client';

import { useEffect, useRef } from 'react';

import styles from './proof-film.module.css';

/**
 * The hero makes the promise; this delivers the evidence.
 *
 * Order is capability, not process — a process-ordered cut reads as a process
 * map, which is exactly what the 3D scene is built to avoid disclosing.
 *
 * Clips are muted, inline, and only play while on screen: seven simultaneous
 * decodes is more expensive than the entire hero scene.
 */
const CLIPS = [
  { id: 'proof-01', copy: '200+ sensors. Every cycle verified.' },
  { id: 'proof-02', copy: 'High-speed, repeatable handling' },
  { id: 'proof-03', copy: 'Cam-synchronised stations' },
  { id: 'proof-04', copy: 'Controlled assembly at every station' },
  { id: 'proof-05', copy: 'In-process functional testing' },
  { id: 'proof-06', copy: 'Robotic transfer to outfeed' },
  { id: 'proof-07', copy: 'Live production visibility' },
] as const;

export function ProofFilm() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const videos = root.current?.querySelectorAll('video');
    if (!videos?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) void video.play().catch(() => {});
          else video.pause();
        }
      },
      { rootMargin: '200px 0px', threshold: 0.1 },
    );

    videos.forEach((v) => observer.observe(v));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={root} id="proof" className={styles.proof} aria-label="The line, running">
      <header className={styles.intro}>
        <p className={styles.eyebrow}>The line, running</p>
        <h2 className={styles.headline}>Vision verifies. Motion synchronises.</h2>
        <p className={styles.sub}>
          Recorded on the 2CC dispensing-pump line at 170 parts per minute.
        </p>
      </header>

      <ul className={styles.grid}>
        {CLIPS.map((clip) => (
          <li key={clip.id} className={styles.cell}>
            <video
              className={styles.video}
              muted
              loop
              playsInline
              preload="none"
              poster={`/video/proof/${clip.id}.jpg`}
            >
              <source src={`/video/proof/${clip.id}.webm`} type="video/webm" />
              <source src={`/video/proof/${clip.id}.mp4`} type="video/mp4" />
            </video>
            <p className={styles.caption}>{clip.copy}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
```

- [ ] **Step 3: Add the stylesheet**

Create `site/components/home/proof-film.module.css`:

```css
.proof {
  padding-block: clamp(4rem, 9vw, 8rem);
  background: var(--ground);
}

.intro {
  max-width: 46ch;
  margin-inline: var(--page-gutter);
  margin-block-end: clamp(2rem, 4vw, 3.5rem);
}

.eyebrow {
  margin: 0 0 1rem;
  font-family: var(--font-utility), sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--signal);
}

.headline {
  margin: 0;
  font-family: var(--font-display), serif;
  font-size: clamp(1.5rem, 2.8vw, 2.5rem);
  line-height: 1.12;
  color: var(--text);
}

.sub {
  margin: 1rem 0 0;
  color: var(--muted);
  line-height: 1.55;
}

/* 1px gaps over the line colour so the seams read as hairlines, matching the
   editorial rules used elsewhere on the site. */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 22rem), 1fr));
  gap: 1px;
  margin: 0;
  padding: 0;
  list-style: none;
  background: var(--line);
  border-block: 1px solid var(--line);
}

.cell {
  position: relative;
  background: var(--ground);
}

.video {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.caption {
  margin: 0;
  padding: 1rem 1.25rem 1.5rem;
  font-family: var(--font-utility), sans-serif;
  font-size: 0.875rem;
  letter-spacing: 0.04em;
  color: var(--muted);
}

/* Reduced motion: the posters carry the section on their own. */
@media (prefers-reduced-motion: reduce) {
  .video {
    display: none;
  }

  .cell::before {
    content: '';
    display: block;
    aspect-ratio: 16 / 9;
    background-image: var(--poster);
    background-size: cover;
    background-position: center;
  }
}
```

The reduced-motion branch needs each cell to know its own poster, so pass it as an inline custom property in `ProofFilm.tsx`:

```tsx
<li
  key={clip.id}
  className={styles.cell}
  style={{ '--poster': `url(/video/proof/${clip.id}.jpg)` } as React.CSSProperties}
>
```

- [ ] **Step 4: Mount it**

In `site/app/page.tsx`, render `<ProofFilm />` immediately after `<HeroSection />`. The hero's `Skip animation` link already targets `#proof`.

- [ ] **Step 5: Verify**

Load `/`. Confirm: clips do not start until scrolled near; pausing works when scrolled away; posters show before play; the section reads at 375px; reduced-motion shows stills only; no customer name or logo is visible in any frame; Network shows no video request until the section approaches.

- [ ] **Step 6: Run checks and commit**

```bash
npm test && npx tsc --noEmit && npm run lint && npm run build
git add site/components/home/ProofFilm.tsx site/components/home/proof-film.module.css site/app/page.tsx site/public/video/proof
git commit -m "feat: add real-footage proof section below hero"
```

---

## Task 12: Performance and acceptance

**Files:**
- Modify: whichever components the measurements implicate.
- Create: `docs/hero-acceptance-2026-09.md`

- [ ] **Step 1: Measure**

With the dev server running, open `/` and in the console:

```js
const s = window.__clay;
({ tris: s.gl.info.render.triangles, calls: s.gl.info.render.calls,
   geoms: s.gl.info.memory.geometries, tex: s.gl.info.memory.textures });
```

Record at `p ≈ 0.5` (machine) and `p ≈ 0.8` (plant, the worst case). Note that `SceneProbe` is dev-only, so this must be done against the dev build.

- [ ] **Step 2: Reduce if over budget**

Spec §8 budgets: desktop ≤ 120k triangles / ≤ 220 calls; mobile ≤ 45k / ≤ 120. In order of effectiveness:
1. Merge the static per-body machine geometry — the skirt, enclosure, rail and feet are four draw calls per body that never move.
2. Drop `PlantField` cell count for the `low` tier further.
3. Reduce `sphereGeometry`/`cylinderGeometry` segment counts on anything smaller than 0.2m on screen.

- [ ] **Step 3: Throttle a real mobile check**

DevTools → Performance → CPU 4× slowdown, and Device Toolbar at 375×812. Scroll the full hero. Confirm no frame over 50ms and no long task over 200ms during the machine stage.

- [ ] **Step 4: Walk the acceptance checklist**

Work through spec §11 item by item. Record the result of each in `docs/hero-acceptance-2026-09.md` with the date, the browser and device tested, and a screenshot reference for each visual item. Items that fail get an issue, not a tick.

- [ ] **Step 5: Confirm the production build**

```bash
npm run build && npm run start
```

Open the production build and confirm the hero renders, the theme toggle works, and `window.__clay` is **absent** (`SceneProbe` must be inert in production).

- [ ] **Step 6: Commit**

```bash
git add -A site docs/hero-acceptance-2026-09.md
git commit -m "chore: hero scene performance pass and acceptance record"
```

---

## Deferred — not in this plan

- **Text sandwiching** (foreground geometry passing in front of the headline). Needs two canvas layers; worth doing only once the single-layer version is signed off.
- **Depth of field and bloom.** The scene is deliberately unpostprocessed so silhouette problems stay visible while it is being shaped. Revisit after Task 12.
- **The real VEEMAP mark in `BrandResolve`.** Task 8 ships a hand-authored 11×7 chevron mask. Trace the official SVG (`Asset 4.svg` per `WEBSITE_IMPLEMENTATION_PLAN.md` §2.8) into a mask of the same shape and swap the constant.
- **OG/social still.** Render one from the scene at a chosen `p` rather than generating one.
- **Sector-page scenes.** Do not reuse the hero scene on sector pages until the homepage version has shipped and been measured in the field.
