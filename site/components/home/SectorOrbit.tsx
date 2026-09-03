'use client';

import Link from 'next/link';
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type CSSProperties,
  type FocusEvent,
  type MouseEvent,
  type PointerEvent as ReactPointerEvent,
} from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { useProgress } from '@react-three/drei';
import { sectors } from '@/content/sectors';
import { SectorProductStage, sectorProducts, type ProductStatus } from './SectorOrbitProduct';
import styles from './sectorOrbit.module.css';

/**
 * Homepage sector index. The five sector names orbit a tilted ellipse as pure
 * type. Hovering, focusing or tapping a name stops the orbit, eases that name to
 * the front and opens the detail card in the hub: the sector's product model, a
 * short summary of what VEEMAP builds for it, and the link onward to its route.
 *
 * Geometry lives in CSS (`--rx`, `--yt`); the frame loop only writes each
 * name's angle as custom properties, so the type stays crisp and the layout
 * stays responsive without JS measurement.
 */

const items = sectors.map((sector) => ({ ...sector, product: sectorProducts[sector.slug] }));

const COUNT = items.length;
const STEP = (Math.PI * 2) / COUNT;
const TWO_PI = Math.PI * 2;
const IDLE_OMEGA = TWO_PI / 36; // one revolution every 36 s
const [lead] = items;

type EngagementSource = 'hover' | 'pinned' | 'focus';
type Engagement = { index: number; source: EngagementSource } | null;

/** Depth cues for a name at `angle` (0 = front): position factors, scale, opacity, stacking. */
function depthVars(angle: number) {
  const cos = Math.cos(angle);
  const t = (cos + 1) / 2;
  return {
    sin: Math.sin(angle).toFixed(4),
    cos: cos.toFixed(4),
    scale: (0.46 + 0.54 * Math.pow(t, 1.6)).toFixed(4),
    opacity: (0.18 + 0.82 * Math.pow(t, 1.3)).toFixed(4),
    z: String(Math.round(t * 100)),
  };
}

function restingVars(index: number): CSSProperties {
  const d = depthVars(index * STEP);
  return { '--sin': d.sin, '--cos': d.cos, '--s': d.scale, '--o': d.opacity, '--z': d.z } as CSSProperties;
}

/**
 * Frame loop for the ring. Idle: constant angular velocity. Engaged: exponential
 * ease to the angle that puts the chosen name at the front, then the loop stops
 * until something changes. Reduced motion: the ring rests at angle 0.
 */
function createOrbitEngine() {
  const s = { theta: 0, omega: 0, target: null as number | null, raf: 0, last: 0, active: false, reducedMotion: false };
  const elements: Array<HTMLButtonElement | null> = [];

  const apply = () => {
    elements.forEach((element, index) => {
      if (!element) return;
      const d = depthVars(s.theta + index * STEP);
      element.style.setProperty('--sin', d.sin);
      element.style.setProperty('--cos', d.cos);
      element.style.setProperty('--s', d.scale);
      element.style.setProperty('--o', d.opacity);
      element.style.setProperty('--z', d.z);
    });
  };

  const frame = (now: number) => {
    const dt = Math.min((now - s.last) / 1000, 0.05);
    s.last = now;
    let settled = false;

    if (s.target !== null) {
      s.omega = 0;
      const diff = s.target - s.theta;
      if (Math.abs(diff) < 0.0004) {
        s.theta = s.target;
        settled = true;
      } else {
        s.theta += diff * (1 - Math.exp(-6 * dt));
      }
    } else {
      s.omega += (IDLE_OMEGA - s.omega) * (1 - Math.exp(-2 * dt));
      s.theta += s.omega * dt;
    }

    const shift = Math.floor(s.theta / TWO_PI) * TWO_PI;
    s.theta -= shift;
    if (s.target !== null) s.target -= shift;

    apply();
    s.raf = settled ? 0 : requestAnimationFrame(frame);
  };

  const halt = () => {
    if (s.raf) cancelAnimationFrame(s.raf);
    s.raf = 0;
  };

  const kick = () => {
    if (s.raf || !s.active || s.reducedMotion) return;
    s.last = performance.now();
    s.raf = requestAnimationFrame(frame);
  };

  return {
    /** Ref callback for each name; runs at commit, never during render. */
    register(index: number, element: HTMLButtonElement | null) {
      elements[index] = element;
    },
    element(index: number) {
      return elements[index] ?? null;
    },
    setActive(active: boolean) {
      s.active = active;
      if (active) kick();
      else halt();
    },
    /** Bring `index` to the front, or resume the idle spin with `null`. */
    setTarget(index: number | null) {
      if (index === null) {
        s.target = null;
      } else {
        const base = -index * STEP;
        const turns = Math.round((s.theta - base) / TWO_PI);
        s.target = base + turns * TWO_PI;
      }
      kick();
    },
    setReducedMotion(reduced: boolean) {
      s.reducedMotion = reduced;
      if (reduced) {
        halt();
        s.theta = 0;
        s.omega = 0;
        apply();
      } else {
        kick();
      }
    },
    destroy: halt,
  };
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  return reduced;
}

export function SectorOrbit() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardLinkRef = useRef<HTMLAnchorElement>(null);
  const reducedMotion = useReducedMotion();
  const [engine] = useState(createOrbitEngine);
  const cardId = useId();

  const [engagement, setEngagement] = useState<Engagement>(null);
  const [lastIndex, setLastIndex] = useState(0);
  const [near, setNear] = useState(false);
  const [visible, setVisible] = useState(false);
  const [preload, setPreload] = useState(false);
  const [status, setStatus] = useState<ProductStatus>('idle');
  const { progress } = useProgress();

  const engagedIndex = engagement?.index ?? null;
  const shown = items[engagedIndex ?? lastIndex] ?? lead;

  const engage = useCallback((index: number, source: EngagementSource) => {
    setEngagement((current) => {
      if (current?.index === index && current.source === 'pinned' && source === 'hover') return current;
      return { index, source };
    });
    setLastIndex(index);
  }, []);

  const disengage = useCallback(() => setEngagement(null), []);

  useEffect(() => engine.destroy, [engine]);

  useEffect(() => {
    engine.setReducedMotion(reducedMotion);
  }, [engine, reducedMotion]);

  // Orbit follows the engagement.
  useEffect(() => {
    engine.setTarget(engagedIndex);
  }, [engine, engagedIndex]);

  // Lifecycle: mount the Canvas when near, spin only while on screen, and
  // release the card when the section scrolls away.
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const nearObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setNear(true);
        const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
        const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
        setPreload(finePointer && !connection?.saveData);
      },
      { rootMargin: '700px 0px' },
    );
    const onScreen = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
        if (!entry.isIntersecting) setEngagement(null);
      },
      { threshold: 0.05 },
    );
    nearObserver.observe(node);
    onScreen.observe(node);

    return () => {
      nearObserver.disconnect();
      onScreen.disconnect();
    };
  }, []);

  useEffect(() => {
    const sync = () => engine.setActive(visible && document.visibilityState === 'visible');
    sync();
    document.addEventListener('visibilitychange', sync);
    return () => document.removeEventListener('visibilitychange', sync);
  }, [engine, visible]);

  // Outside tap / Escape close a card that hover-leave cannot.
  useEffect(() => {
    if (!engagement) return;
    const section = sectionRef.current;
    const onPointerDown = (event: PointerEvent) => {
      if (section && !section.contains(event.target as Node)) disengage();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      const name = engine.element(engagement.index);
      disengage();
      if (section?.contains(document.activeElement)) name?.focus();
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [engagement, engine, disengage]);

  const onNameEnter = (index: number) => (event: ReactPointerEvent<HTMLButtonElement>) => {
    if (event.pointerType === 'touch') return;
    engage(index, 'hover');
  };

  const onNameClick = (index: number) => (event: MouseEvent<HTMLButtonElement>) => {
    engage(index, event.detail === 0 ? 'focus' : 'pinned');
    if (event.detail === 0) requestAnimationFrame(() => cardLinkRef.current?.focus());
  };

  const onStageLeave = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'touch') return;
    setEngagement((current) => (current?.source === 'hover' ? null : current));
  };

  const onSectionBlur = (event: FocusEvent<HTMLElement>) => {
    if (event.currentTarget.contains(event.relatedTarget as Node)) return;
    setEngagement((current) => (current?.source === 'focus' ? null : current));
  };

  const open = engagement !== null;

  return (
    <section
      ref={sectionRef}
      id="sectors"
      className={styles.section}
      data-engaged={open}
      aria-labelledby="sector-orbit-title"
      onBlur={onSectionBlur}
    >
      <div className={styles.head}>
        <span className={styles.kicker}>Sectors</span>
        <span className={styles.headNote}>Medical &amp; Pharmaceutical leads</span>
      </div>

      <div className={styles.stage} onPointerLeave={onStageLeave}>
        <div className={styles.names}>
          {items.map((item, index) => (
            <button
              key={item.slug}
              ref={(node) => engine.register(index, node)}
              type="button"
              className={styles.name}
              style={restingVars(index)}
              data-active={engagedIndex === index}
              aria-expanded={engagedIndex === index}
              aria-controls={cardId}
              onPointerEnter={onNameEnter(index)}
              onFocus={() => engage(index, 'focus')}
              onClick={onNameClick(index)}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className={styles.hub}>
          <div className={styles.idle} aria-hidden={open}>
            <h2 id="sector-orbit-title">What we build, <em>by sector.</em></h2>
            <p>
              <span className={styles.hoverHint}>Hover a sector to see the machines behind it</span>
              <span className={styles.tapHint}>Tap a sector to see the machines behind it</span>
            </p>
          </div>

          <div
            id={cardId}
            className={styles.card}
            data-open={open}
            role="region"
            aria-label={`${shown.name} details`}
            aria-live="polite"
            inert={!open}
          >
            <button type="button" className={styles.close} onClick={disengage} aria-label="Close sector details">
              <X aria-hidden="true" />
            </button>

            <figure className={styles.plate} role="img" aria-label={shown.product.label}>
              {near && (
                <SectorProductStage
                  kind={shown.product.kind}
                  live={open && visible}
                  reducedMotion={reducedMotion}
                  preload={preload}
                  onStatus={setStatus}
                />
              )}
              {status === 'loading' && (
                <span className={styles.plateStatus} role="status">
                  Loading product / {Math.round(progress)}%
                </span>
              )}
              {status === 'failed' && <span className={styles.plateStatus}>Product model unavailable</span>}
              <figcaption className={styles.plateCap}>Product / {shown.product.name}</figcaption>
            </figure>

            <div className={styles.body}>
              <span className={styles.cardKicker}>What we build</span>
              <h3 className={styles.cardTitle}>{shown.name}</h3>
              <p className={styles.cardText}>{shown.homeSummary}</p>
              <Link ref={cardLinkRef} className={styles.cardLink} href={`/industries/${shown.slug}`}>
                Explore {shown.navLabel} <ArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
