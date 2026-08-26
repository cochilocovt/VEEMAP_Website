'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { Camera, HeartPulse, MonitorUp, Move3d } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

type FocusPoint = { x: number; y: number };

export interface CommissioningStep {
  id: 'vision' | 'motion' | 'hmi' | 'condition';
  code: string;
  label: string;
  title: string;
  body: string;
  startProgress: number;
  endProgress: number;
  desktopFocus: FocusPoint;
  mobileFocus: FocusPoint;
}

const steps: CommissioningStep[] = [
  {
    id: 'vision',
    code: 'OPTICAL / 01',
    label: 'AI vision',
    title: 'See the process before it becomes a problem.',
    body: 'Machine vision can verify presence, orientation and critical geometry before a component advances—bringing inspection into the motion sequence.',
    startProgress: 0,
    endProgress: 0.3,
    desktopFocus: { x: 38, y: 34 },
    mobileFocus: { x: 39, y: 36 },
  },
  {
    id: 'motion',
    code: 'KINETIC / 02',
    label: 'High-speed motion',
    title: 'Move faster without losing control.',
    body: 'In-house pick-and-place mechanisms, indexing systems and motion studies are designed around the real product, cycle and changeover requirement.',
    startProgress: 0.3,
    endProgress: 0.5,
    desktopFocus: { x: 58, y: 35 },
    mobileFocus: { x: 55, y: 38 },
  },
  {
    id: 'hmi',
    code: 'CONNECTED / 03',
    label: 'Industry 4.0 HMI',
    title: 'Turn machine activity into operating context.',
    body: 'Connected HMI and SCADA layers bring production trends, traceability and machine state into one commissioning view for operators and leaders.',
    startProgress: 0.5,
    endProgress: 0.7,
    desktopFocus: { x: 74, y: 46 },
    mobileFocus: { x: 70, y: 48 },
  },
  {
    id: 'condition',
    code: 'CONDITION / 04',
    label: 'Predictive health',
    title: 'Act on drift before it becomes downtime.',
    body: 'Condition signals, machine-health logic and preventive alerts give maintenance teams earlier context for investigation and intervention.',
    startProgress: 0.7,
    endProgress: 1,
    desktopFocus: { x: 73, y: 17 },
    mobileFocus: { x: 70, y: 19 },
  },
];

const icons = {
  vision: Camera,
  motion: Move3d,
  hmi: MonitorUp,
  condition: HeartPulse,
};

const stepAt = (progress: number) => {
  const index = steps.findIndex((step) => progress >= step.startProgress && progress < step.endProgress);
  return index < 0 ? steps.length - 1 : index;
};

function StaticFallback() {
  return (
    <section id="commissioning" className="commissioning commissioning-fallback">
      <div className="commissioning-fallback-visual">
        <picture>
          <source media="(max-width: 900px)" srcSet="/video/commissioning-portrait.webp" />
          <img src="/video/commissioning-desktop.webp" alt="Conceptual special-purpose machine in its assembled state" />
        </picture>
      </div>
      <div className="commissioning-fallback-copy">
        <p className="commissioning-kicker">Commissioning sequence</p>
        <h2>One machine.<br />Four technology planes.</h2>
        <div className="commissioning-fallback-list">
          {steps.map((step) => {
            const Icon = icons[step.id];
            return (
              <article key={step.id}>
                <span><Icon aria-hidden="true" />{step.code}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
                <strong>{step.label}</strong>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function CommissioningVideoSequence() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loadMedia, setLoadMedia] = useState(false);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [mobileMedia, setMobileMedia] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const viewport = window.matchMedia('(max-width: 900px)');
    const update = () => setMobileMedia(viewport.matches);
    update();
    viewport.addEventListener('change', update);
    return () => viewport.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || reducedMotion) return;

    let observer: IntersectionObserver | undefined;
    const begin = () => {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setLoadMedia(true);
            observer?.disconnect();
          }
        },
        { rootMargin: '150% 0px' },
      );
      observer.observe(section);
    };

    if (window.scrollY > 16) begin();
    else window.addEventListener('scroll', begin, { once: true, passive: true });

    return () => {
      window.removeEventListener('scroll', begin);
      observer?.disconnect();
    };
  }, [reducedMotion]);

  useEffect(() => {
    if (loadMedia) videoRef.current?.load();
  }, [loadMedia, mobileMedia]);

  useGSAP(
    () => {
      if (reducedMotion || failed || !sectionRef.current || !pinRef.current) return;

      let animationFrame = 0;
      let desiredTime = 0;
      let previousStep = -1;

      const apply = () => {
        animationFrame = 0;
        const video = videoRef.current;
        const pin = pinRef.current;
        if (!video || !pin) return;

        if (video.readyState >= video.HAVE_METADATA && Number.isFinite(video.duration)) {
          try {
            video.currentTime = Math.min(desiredTime, Math.max(0, video.duration - 0.001));
          } catch {
            setFailed(true);
          }
        }
        pin.style.setProperty('--sequence-progress', String(desiredTime / 8));
      };

      ScrollTrigger.create({
        id: 'commissioning-video-sequence',
        trigger: sectionRef.current,
        start: 'top top',
        end: () => `+=${window.innerHeight * 5}`,
        pin: pinRef.current,
        pinSpacing: true,
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: ({ progress }) => {
          desiredTime = progress * 8;
          const nextStep = stepAt(progress);
          if (nextStep !== previousStep) {
            previousStep = nextStep;
            setActiveIndex(nextStep);
          }
          if (!animationFrame) animationFrame = requestAnimationFrame(apply);
        },
      });

      return () => {
        if (animationFrame) cancelAnimationFrame(animationFrame);
      };
    },
    { scope: sectionRef, dependencies: [failed, reducedMotion], revertOnUpdate: true },
  );

  if (reducedMotion || failed) return <StaticFallback />;

  const active = steps[activeIndex];
  const ActiveIcon = icons[active.id];

  const prepareFirstSeek = () => {
    const video = videoRef.current;
    if (!video || !Number.isFinite(video.duration)) return;
    try {
      video.currentTime = 0.001;
      requestAnimationFrame(() => ScrollTrigger.refresh());
    } catch {
      setFailed(true);
    }
  };

  return (
    <section id="commissioning" ref={sectionRef} className="commissioning">
      <div ref={pinRef} className={`commissioning-pin ${ready ? 'is-ready' : ''}`}>
        <div className="commissioning-heading">
          <p className="commissioning-kicker">Commissioning sequence</p>
          <h2>One machine.<br />Four technology planes.</h2>
          <p className="commissioning-instruction">Scroll to assemble the system.</p>
        </div>

        <div className="commissioning-video-shell">
          {loadMedia ? (
            <video
              ref={videoRef}
              className="commissioning-video"
              muted
              playsInline
              preload="auto"
              src={mobileMedia ? '/video/commissioning-portrait.mp4' : '/video/commissioning-desktop.mp4'}
              poster={mobileMedia ? '/video/commissioning-portrait.webp' : '/video/commissioning-desktop.webp'}
              aria-label="Conceptual special-purpose machine assembling one capability at a time"
              onLoadedMetadata={prepareFirstSeek}
              onSeeked={() => setReady(true)}
              onError={() => setFailed(true)}
            />
          ) : null}
          <picture className="commissioning-poster">
            <source media="(max-width: 900px)" srcSet="/video/commissioning-portrait.webp" />
            <img src="/video/commissioning-desktop.webp" alt="" />
          </picture>
          <span
            className="commissioning-focus"
            style={{
              '--focus-desktop-x': `${active.desktopFocus.x}%`,
              '--focus-desktop-y': `${active.desktopFocus.y}%`,
              '--focus-mobile-x': `${active.mobileFocus.x}%`,
              '--focus-mobile-y': `${active.mobileFocus.y}%`,
            } as CSSProperties}
            aria-hidden="true"
          />
          <span className="machine-state">Concept machine / non-proprietary</span>
        </div>

        <article className="commissioning-active-step" aria-live="polite" key={active.id}>
          <div><ActiveIcon aria-hidden="true" /><span>{active.code}</span></div>
          <h3>{active.title}</h3>
          <p>{active.body}</p>
          <strong>{active.label}</strong>
        </article>

        <ol className="commissioning-index" aria-label="Assembly capabilities">
          {steps.map((step, index) => (
            <li key={step.id} className={index === activeIndex ? 'is-active' : ''} aria-current={index === activeIndex ? 'step' : undefined}>
              <span>{String(index + 1).padStart(2, '0')}</span>{step.label}
            </li>
          ))}
        </ol>
        <div className="sequence-track" aria-hidden="true"><span /></div>
      </div>
    </section>
  );
}
