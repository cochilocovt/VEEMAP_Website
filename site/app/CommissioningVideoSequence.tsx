'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import {
  Box,
  Camera,
  Columns3,
  HeartPulse,
  MonitorUp,
  Move3d,
  Waypoints,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

type StepId = 'foundation' | 'flow' | 'frame' | 'tooling' | 'vision' | 'motion' | 'hmi' | 'condition';
type FocusPoint = { x: number; y: number };

export interface CommissioningStep {
  id: StepId;
  code: string;
  label: string;
  title: string;
  body: string;
  startProgress: number;
  endProgress: number;
  focusStart: FocusPoint;
  focusEnd: FocusPoint;
}

const stepProgress = (index: number) => index / 8;

const steps: CommissioningStep[] = [
  {
    id: 'foundation',
    code: 'DATUM / 01',
    label: 'Foundation',
    title: 'Establish the load path.',
    body: 'The base, cabinets and support structure come together first—creating the stable datum every downstream station depends on.',
    startProgress: stepProgress(0),
    endProgress: stepProgress(1),
    focusStart: { x: 37, y: 76 },
    focusEnd: { x: 48, y: 68 },
  },
  {
    id: 'flow',
    code: 'FLOW / 02',
    label: 'Material flow',
    title: 'Bring the product path into the build.',
    body: 'Infeed, transfer and outfeed structures settle around the process so the machine is shaped by how the product must move.',
    startProgress: stepProgress(1),
    endProgress: stepProgress(2),
    focusStart: { x: 19, y: 65 },
    focusEnd: { x: 35, y: 61 },
  },
  {
    id: 'frame',
    code: 'STRUCTURE / 03',
    label: 'Machine frame',
    title: 'Close the structure around the work.',
    body: 'The frame and guarding architecture locate the working envelope while keeping access, service and changeover in view.',
    startProgress: stepProgress(2),
    endProgress: stepProgress(3),
    focusStart: { x: 67, y: 36 },
    focusEnd: { x: 61, y: 38 },
  },
  {
    id: 'tooling',
    code: 'PROCESS / 04',
    label: 'Process tooling',
    title: 'Seat each station around the part.',
    body: 'Fixtures, nests and working elements assemble around the product path as one coordinated mechanism.',
    startProgress: stepProgress(3),
    endProgress: stepProgress(4),
    focusStart: { x: 49, y: 46 },
    focusEnd: { x: 49, y: 58 },
  },
  {
    id: 'vision',
    code: 'OPTICAL / 05',
    label: 'AI vision',
    title: 'See the process before it becomes a problem.',
    body: 'Machine vision can verify presence, orientation and critical geometry before a component advances—bringing inspection into the motion sequence.',
    startProgress: stepProgress(4),
    endProgress: stepProgress(5),
    focusStart: { x: 46, y: 14 },
    focusEnd: { x: 42, y: 34 },
  },
  {
    id: 'motion',
    code: 'KINETIC / 06',
    label: 'High-speed motion',
    title: 'Move faster without losing control.',
    body: 'In-house pick-and-place mechanisms, indexing systems and motion studies are designed around the real product, cycle and changeover requirement.',
    startProgress: stepProgress(5),
    endProgress: stepProgress(6),
    focusStart: { x: 48, y: 15 },
    focusEnd: { x: 49, y: 37 },
  },
  {
    id: 'hmi',
    code: 'CONNECTED / 07',
    label: 'Industry 4.0 HMI',
    title: 'Turn machine activity into operating context.',
    body: 'Connected HMI and SCADA layers bring production trends, traceability and machine state into one commissioning view for operators and leaders.',
    startProgress: stepProgress(6),
    endProgress: stepProgress(7),
    focusStart: { x: 79, y: 44 },
    focusEnd: { x: 69, y: 44 },
  },
  {
    id: 'condition',
    code: 'CONDITION / 08',
    label: 'Predictive health',
    title: 'Act on drift before it becomes downtime.',
    body: 'Condition signals, machine-health logic and preventive alerts give maintenance teams earlier context for investigation and intervention.',
    startProgress: stepProgress(7),
    endProgress: stepProgress(8),
    focusStart: { x: 86, y: 43 },
    focusEnd: { x: 78, y: 42 },
  },
];

const icons: Record<StepId, LucideIcon> = {
  foundation: Box,
  flow: Waypoints,
  frame: Columns3,
  tooling: Wrench,
  vision: Camera,
  motion: Move3d,
  hmi: MonitorUp,
  condition: HeartPulse,
};

const clamp = (value: number) => Math.min(1, Math.max(0, value));
const stepAt = (progress: number) => Math.min(steps.length - 1, Math.floor(clamp(progress) * steps.length));
const lerp = (start: number, end: number, progress: number) => start + (end - start) * progress;
const easeFocus = (progress: number) => 1 - Math.pow(1 - clamp(progress), 3);

function StaticFallback() {
  return (
    <section id="commissioning" className="commissioning commissioning-fallback">
      <div className="commissioning-fallback-visual">
        <img
          src="/video/veemap-assembly-sequence-final.webp"
          alt="Conceptual special-purpose machine in its assembled state"
        />
      </div>
      <div className="commissioning-fallback-copy">
        <h2>Build the machine.<br /><em>Reveal the intelligence.</em></h2>
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
  const desiredProgressRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loadMedia, setLoadMedia] = useState(false);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
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
  }, [loadMedia]);

  useGSAP(
    () => {
      if (reducedMotion || failed || !sectionRef.current || !pinRef.current) return;

      let animationFrame = 0;
      let previousStep = -1;

      const apply = () => {
        animationFrame = 0;
        const video = videoRef.current;
        const pin = pinRef.current;
        if (!pin) return;

        const progress = desiredProgressRef.current;
        const nextStep = stepAt(progress);
        const step = steps[nextStep];
        const localProgress = easeFocus((progress - step.startProgress) / (step.endProgress - step.startProgress));
        const focusX = lerp(step.focusStart.x, step.focusEnd.x, localProgress);
        const focusY = lerp(step.focusStart.y, step.focusEnd.y, localProgress);

        pin.style.setProperty('--sequence-progress', String(progress));
        pin.style.setProperty('--focus-x', `${focusX}%`);
        pin.style.setProperty('--focus-y', `${focusY}%`);

        if (video && video.readyState >= video.HAVE_METADATA && Number.isFinite(video.duration)) {
          const targetTime = Math.min(progress * video.duration, Math.max(0, video.duration - 0.001));
          if (Math.abs(video.currentTime - targetTime) > 0.012) {
            try {
              video.currentTime = targetTime;
            } catch {
              setFailed(true);
            }
          }
        }

        if (nextStep !== previousStep) {
          previousStep = nextStep;
          setActiveIndex(nextStep);
        }
      };

      ScrollTrigger.create({
        id: 'commissioning-video-sequence',
        trigger: sectionRef.current,
        start: 'top top',
        end: () => `+=${Math.round(window.innerHeight * (window.innerWidth <= 900 ? 6.5 : 8))}`,
        pin: pinRef.current,
        pinSpacing: true,
        scrub: true,
        invalidateOnRefresh: true,
        onEnter: () => setLoadMedia(true),
        onUpdate: ({ progress }) => {
          desiredProgressRef.current = progress;
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
      video.pause();
      video.currentTime = Math.min(desiredProgressRef.current * video.duration, Math.max(0, video.duration - 0.001));
      requestAnimationFrame(() => ScrollTrigger.refresh());
    } catch {
      setFailed(true);
    }
  };

  const jumpToStep = (step: CommissioningStep) => {
    const trigger = ScrollTrigger.getById('commissioning-video-sequence');
    if (!trigger) return;
    const progress = step.startProgress + (step.endProgress - step.startProgress) * 0.42;
    window.scrollTo({
      top: trigger.start + (trigger.end - trigger.start) * progress,
      behavior: 'smooth',
    });
  };

  return (
    <section id="commissioning" ref={sectionRef} className="commissioning">
      <div
        ref={pinRef}
        className={`commissioning-pin ${ready ? 'is-ready' : ''}`}
        style={{ '--focus-x': '37%', '--focus-y': '76%' } as CSSProperties}
      >
        <header className="commissioning-heading">
          <div className="commissioning-status">
            <span>Assembly</span>
            <strong>{String(activeIndex + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')}</strong>
          </div>
          <h2>Build the machine.<br /><em>Reveal the intelligence.</em></h2>
          <p className="commissioning-instruction">Scroll to assemble. Select a stage to inspect.</p>
        </header>

        <div className="commissioning-video-shell">
          {loadMedia ? (
            <video
              ref={videoRef}
              className="commissioning-video"
              muted
              playsInline
              preload="auto"
              src="/video/veemap-assembly-sequence.mp4"
              poster="/video/veemap-assembly-sequence-start.webp"
              aria-label="Conceptual special-purpose machine assembling one system at a time"
              disablePictureInPicture
              controlsList="nodownload noplaybackrate noremoteplayback"
              onLoadedMetadata={prepareFirstSeek}
              onCanPlay={() => setReady(true)}
              onSeeked={() => setReady(true)}
              onError={() => setFailed(true)}
            />
          ) : null}
          <img
            className="commissioning-poster"
            src="/video/veemap-assembly-sequence-start.webp"
            alt=""
          />
          <span className="commissioning-loader" aria-live="polite">
            {loadMedia ? 'Preparing assembly sequence' : 'Sequence loads on approach'}
          </span>
          <span className="commissioning-focus" aria-hidden="true"><span>{activeIndex + 1}</span></span>
          <span className="machine-state">Concept machine / non-proprietary</span>
        </div>

        <article className="commissioning-active-step" aria-live="polite" key={active.id}>
          <div><ActiveIcon aria-hidden="true" /><span>{active.code}</span></div>
          <h3>{active.title}</h3>
          <p>{active.body}</p>
          <strong>{active.label}</strong>
        </article>

        <ol className="commissioning-index" aria-label="Assembly stages">
          {steps.map((step, index) => (
            <li key={step.id} className={index === activeIndex ? 'is-active' : ''}>
              <button
                type="button"
                aria-label={`Inspect stage ${index + 1}: ${step.label}`}
                aria-current={index === activeIndex ? 'step' : undefined}
                onClick={() => jumpToStep(step)}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <span className="commissioning-index-label">{step.label}</span>
              </button>
            </li>
          ))}
        </ol>
        <div className="sequence-track" aria-hidden="true"><span /></div>
      </div>
    </section>
  );
}
