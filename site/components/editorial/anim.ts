import type { CSSProperties } from 'react';

/*
 * Inline scroll-linked reveal helpers for the editorial routes. Each returns an
 * `animation` shorthand plus `animation-timeline: view()` and an
 * `animation-range`. Where the browser has no view() timeline the animation
 * plays once on load instead; the global `prefers-reduced-motion` guard in
 * globals.css collapses both cases to the held final state.
 *
 * Cast to CSSProperties because animation-timeline / animation-range are not in
 * every csstype release; the values are valid CSS regardless.
 */

const view = (range: string) => ({ animationTimeline: 'view()', animationRange: range });

export const rise = (delay = 0, range = 'entry 5% cover 28%'): CSSProperties =>
  ({ animation: `ed-riseIn .9s ease ${delay}s both`, ...view(range) }) as CSSProperties;

export const wipeUp = (delay = 0, range = 'entry 5% cover 28%'): CSSProperties =>
  ({ animation: `ed-wipeUp 1s cubic-bezier(.2,.8,.2,1) ${delay}s both`, ...view(range) }) as CSSProperties;

export const wipeRight = (delay = 0, range = 'entry 0% cover 30%'): CSSProperties =>
  ({ animation: `ed-wipeRight 1.1s cubic-bezier(.2,.8,.2,1) ${delay}s both`, ...view(range) }) as CSSProperties;

export const countUp = (delay = 0, range = 'entry 0% cover 26%'): CSSProperties =>
  ({ animation: `ed-countUp 1s cubic-bezier(.2,.8,.2,1) ${delay}s both`, ...view(range) }) as CSSProperties;
