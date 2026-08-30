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
type SequenceDirection = -1 | 0 | 1;
type SequenceStatus = 'idle' | 'loading' | 'playing' | 'buffering' | 'complete';

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

const segmentBoundaries = [0, 7.833333, 15.666666, 23.5, 31.333333, 39.166666, 47, 54.833333, 62.833333] as const;
const finalBoundary = segmentBoundaries[segmentBoundaries.length - 1];
const frameDuration = 1 / 24;
const segmentPlaybackDurationSeconds = 2;
const playbackWatchdogMs = 15_000;

const clamp = (value: number) => Math.min(1, Math.max(0, value));
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
  const boundaryIndexRef = useRef(0);
  const activeIndexRef = useRef(0);
  const mediaReadyRef = useRef<() => void>(() => undefined);
  const mediaEventRef = useRef<(event: 'playing' | 'waiting') => void>(() => undefined);
  const stageJumpRef = useRef<(index: number) => void>(() => undefined);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loadMedia, setLoadMedia] = useState(false);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [sequenceStatus, setSequenceStatus] = useState<SequenceStatus>('idle');
  const [isTransitioning, setIsTransitioning] = useState(false);

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
      const section = sectionRef.current;
      const pin = pinRef.current;
      if (reducedMotion || failed || !section || !pin) return;

      let trigger: ScrollTrigger | null = null;
      let transitionFrame = 0;
      let watchdog = 0;
      let reverseTween: gsap.core.Tween | null = null;
      let pendingDirection: SequenceDirection = 0;
      let currentDirection: SequenceDirection = 0;
      let currentSegment = 0;
      let transitionActive = false;
      let inputActive = false;
      let gestureArmed = true;
      let pinActive = false;
      let lastGestureDelta = 0;

      const updateActiveIndex = (index: number) => {
        const next = Math.min(steps.length - 1, Math.max(0, index));
        if (next === activeIndexRef.current) return;
        activeIndexRef.current = next;
        setActiveIndex(next);
      };

      const applyPresentation = (time: number, segmentIndex: number) => {
        const boundedTime = Math.min(finalBoundary, Math.max(0, time));
        const step = steps[segmentIndex];
        const start = segmentBoundaries[segmentIndex];
        const end = segmentBoundaries[segmentIndex + 1];
        const localProgress = easeFocus((boundedTime - start) / (end - start));
        const focusX = lerp(step.focusStart.x, step.focusEnd.x, localProgress);
        const focusY = lerp(step.focusStart.y, step.focusEnd.y, localProgress);

        pin.style.setProperty('--sequence-progress', String(boundedTime / finalBoundary));
        pin.style.setProperty('--focus-x', `${focusX}%`);
        pin.style.setProperty('--focus-y', `${focusY}%`);
        updateActiveIndex(segmentIndex);
      };

      const clearMotion = () => {
        if (transitionFrame) cancelAnimationFrame(transitionFrame);
        transitionFrame = 0;
        if (watchdog) window.clearTimeout(watchdog);
        watchdog = 0;
        reverseTween?.kill();
        reverseTween = null;
        if (videoRef.current) videoRef.current.playbackRate = 1;
      };

      const failSequence = () => {
        clearMotion();
        videoRef.current?.pause();
        transitionActive = false;
        setIsTransitioning(false);
        setFailed(true);
      };

      const startWatchdog = () => {
        if (watchdog) window.clearTimeout(watchdog);
        watchdog = window.setTimeout(failSequence, playbackWatchdogMs);
      };

      const finishTransition = (targetBoundary: number) => {
        const video = videoRef.current;
        clearMotion();
        video?.pause();

        if (video) {
          try {
            video.currentTime = segmentBoundaries[targetBoundary];
          } catch {
            failSequence();
            return;
          }
        }

        boundaryIndexRef.current = targetBoundary;
        currentDirection = 0;
        transitionActive = false;
        setIsTransitioning(false);
        const restingStep = targetBoundary === 0 ? 0 : targetBoundary - 1;
        applyPresentation(segmentBoundaries[targetBoundary], restingStep);
        setSequenceStatus(targetBoundary === steps.length ? 'complete' : 'idle');
        gestureArmed = !inputActive;
      };

      const monitorForwardPlayback = (targetBoundary: number) => {
        const video = videoRef.current;
        if (!video || !transitionActive || currentDirection !== 1) return;
        applyPresentation(video.currentTime, currentSegment);

        if (video.currentTime >= segmentBoundaries[targetBoundary] - frameDuration) {
          finishTransition(targetBoundary);
          return;
        }

        transitionFrame = requestAnimationFrame(() => monitorForwardPlayback(targetBoundary));
      };

      const playSegment = (direction: Exclude<SequenceDirection, 0>) => {
        const video = videoRef.current;
        const boundary = boundaryIndexRef.current;
        if (!video || transitionActive) return;

        currentSegment = direction === 1 ? boundary : boundary - 1;
        const targetBoundary = boundary + direction;
        const start = segmentBoundaries[currentSegment];
        const end = segmentBoundaries[currentSegment + 1];
        currentDirection = direction;
        transitionActive = true;
        setIsTransitioning(true);
        setSequenceStatus('playing');
        updateActiveIndex(currentSegment);
        startWatchdog();

        try {
          video.pause();
          video.currentTime = direction === 1 ? start : end;
        } catch {
          failSequence();
          return;
        }

        if (direction === -1) {
          video.playbackRate = 1;
          reverseTween = gsap.to(video, {
            currentTime: start,
            duration: segmentPlaybackDurationSeconds,
            ease: 'none',
            overwrite: true,
            onUpdate: () => applyPresentation(video.currentTime, currentSegment),
            onComplete: () => finishTransition(targetBoundary),
          });
          return;
        }

        video.playbackRate = (end - start) / segmentPlaybackDurationSeconds;
        void video.play().then(
          () => {
            setSequenceStatus('playing');
            transitionFrame = requestAnimationFrame(() => monitorForwardPlayback(targetBoundary));
          },
          failSequence,
        );
      };

      const observer = ScrollTrigger.observe({
        target: window,
        type: 'wheel,touch',
        preventDefault: true,
        wheelSpeed: -1,
        tolerance: 34,
        dragMinimum: 8,
        lockAxis: true,
        onChangeY: (self) => {
          inputActive = true;
          lastGestureDelta = Math.abs(self.deltaY || 0);
        },
        onUp: () => requestTransition(1),
        onDown: () => requestTransition(-1),
        onStop: () => {
          inputActive = false;
          if (!transitionActive && pendingDirection === 0) gestureArmed = true;
        },
        onStopDelay: 0.25,
      });
      observer.disable();

      const releasePin = (direction: Exclude<SequenceDirection, 0>) => {
        if (!trigger) return;
        observer.disable();
        pinActive = false;
        gestureArmed = true;
        inputActive = false;
        // The current wheel/touch event is prevented by Observer. Carry a
        // bounded portion of that gesture past the pin boundary so the same
        // input actually releases the visitor into the adjacent section.
        const releaseDistance = Math.max(
          96,
          Math.min(window.innerHeight * 0.5, lastGestureDelta || 0),
        );
        const destination = direction === 1
          ? trigger.end + releaseDistance
          : Math.max(0, trigger.start - releaseDistance);
        lastGestureDelta = 0;
        trigger.scroll(destination);
      };

      const requestTransition = (direction: Exclude<SequenceDirection, 0>, gestureInput = true) => {
        if (!pinActive || transitionActive || !gestureArmed) return;
        inputActive = gestureInput;
        gestureArmed = false;

        const boundary = boundaryIndexRef.current;
        if ((direction === -1 && boundary === 0) || (direction === 1 && boundary === steps.length)) {
          releasePin(direction);
          return;
        }

        const video = videoRef.current;
        if (!video || video.readyState < HTMLMediaElement.HAVE_FUTURE_DATA) {
          if (pendingDirection === 0) pendingDirection = direction;
          setLoadMedia(true);
          setSequenceStatus('loading');
          startWatchdog();
          return;
        }

        playSegment(direction);
      };

      const activatePin = (fromBelow: boolean, playOnEntry = false) => {
        pinActive = true;
        gestureArmed = true;
        inputActive = false;
        setLoadMedia(true);
        observer.enable();
        if (trigger) trigger.scroll(fromBelow ? trigger.end - 1 : trigger.start + 1);
        if (playOnEntry) requestTransition(fromBelow ? -1 : 1, false);
      };

      trigger = ScrollTrigger.create({
        id: 'commissioning-video-sequence',
        trigger: section,
        start: 'top top',
        end: () => `+=${Math.max(640, window.innerHeight)}`,
        pin,
        pinSpacing: true,
        invalidateOnRefresh: true,
        onEnter: () => activatePin(false, true),
        onEnterBack: () => activatePin(true, true),
        onLeave: () => {
          pinActive = false;
          observer.disable();
        },
        onLeaveBack: () => {
          pinActive = false;
          observer.disable();
        },
      });
      if (trigger.isActive) activatePin(trigger.direction < 0);

      const onKeyDown = (event: KeyboardEvent) => {
        if (!pinActive || event.repeat) return;
        const target = event.target;
        if (target instanceof HTMLElement && target.closest('button, a, input, textarea, select, [contenteditable="true"]')) return;

        let direction: Exclude<SequenceDirection, 0> | null = null;
        if (event.key === 'ArrowDown' || event.key === 'PageDown' || (event.key === ' ' && !event.shiftKey)) direction = 1;
        if (event.key === 'ArrowUp' || event.key === 'PageUp' || (event.key === ' ' && event.shiftKey)) direction = -1;
        if (!direction) return;

        event.preventDefault();
        requestTransition(direction, false);
      };

      const onVisibilityChange = () => {
        if (!transitionActive) return;
        const video = videoRef.current;
        if (document.hidden) {
          if (watchdog) window.clearTimeout(watchdog);
          watchdog = 0;
          if (currentDirection === 1) {
            video?.pause();
            if (transitionFrame) cancelAnimationFrame(transitionFrame);
            transitionFrame = 0;
          } else {
            reverseTween?.pause();
          }
          return;
        }

        startWatchdog();
        if (currentDirection === -1) {
          reverseTween?.resume();
          return;
        }

        if (currentDirection === 1 && video) {
          const targetBoundary = boundaryIndexRef.current + 1;
          void video.play().then(
            () => {
              setSequenceStatus('playing');
              transitionFrame = requestAnimationFrame(() => monitorForwardPlayback(targetBoundary));
            },
            failSequence,
          );
        }
      };

      mediaReadyRef.current = () => {
        const video = videoRef.current;
        if (!video || !Number.isFinite(video.duration)) return;
        if (Math.abs(video.duration - finalBoundary) > 0.2) {
          failSequence();
          return;
        }

        setReady(true);
        if (pendingDirection !== 0 && pinActive && !transitionActive) {
          const direction = pendingDirection as Exclude<SequenceDirection, 0>;
          pendingDirection = 0;
          playSegment(direction);
        } else if (!transitionActive) {
          setSequenceStatus(boundaryIndexRef.current === steps.length ? 'complete' : 'idle');
        }
      };

      mediaEventRef.current = (event) => {
        if (!transitionActive) return;
        setSequenceStatus(event === 'waiting' ? 'buffering' : 'playing');
        if (event === 'waiting') startWatchdog();
      };

      stageJumpRef.current = (index) => {
        if (transitionActive) return;
        const video = videoRef.current;
        const targetBoundary = index + 1;
        if (!video || video.readyState < HTMLMediaElement.HAVE_METADATA) {
          setLoadMedia(true);
          return;
        }

        try {
          video.pause();
          video.currentTime = segmentBoundaries[targetBoundary];
          boundaryIndexRef.current = targetBoundary;
          applyPresentation(segmentBoundaries[targetBoundary], index);
          setSequenceStatus(targetBoundary === steps.length ? 'complete' : 'idle');
          gestureArmed = true;
          inputActive = false;
        } catch {
          failSequence();
        }
      };

      document.addEventListener('keydown', onKeyDown);
      document.addEventListener('visibilitychange', onVisibilityChange);
      applyPresentation(segmentBoundaries[boundaryIndexRef.current], activeIndexRef.current);

      return () => {
        clearMotion();
        videoRef.current?.pause();
        observer.kill();
        trigger?.kill();
        document.removeEventListener('keydown', onKeyDown);
        document.removeEventListener('visibilitychange', onVisibilityChange);
        mediaReadyRef.current = () => undefined;
        mediaEventRef.current = () => undefined;
        stageJumpRef.current = () => undefined;
      };
    },
    { scope: sectionRef, dependencies: [failed, reducedMotion], revertOnUpdate: true },
  );

  if (reducedMotion || failed) return <StaticFallback />;

  const active = steps[activeIndex];
  const ActiveIcon = icons[active.id];
  const instruction = sequenceStatus === 'playing'
    ? 'Sequence in motion. Further input is held.'
    : sequenceStatus === 'buffering'
      ? 'Buffering assembly sequence.'
      : sequenceStatus === 'loading'
        ? 'Preparing assembly sequence.'
        : sequenceStatus === 'complete'
          ? 'Assembly complete. Scroll to continue.'
          : 'Scroll once to install the next system.';

  const prepareFirstSeek = () => {
    const video = videoRef.current;
    if (!video || !Number.isFinite(video.duration)) return;
    try {
      video.pause();
      video.currentTime = segmentBoundaries[boundaryIndexRef.current];
      requestAnimationFrame(() => ScrollTrigger.refresh());
    } catch {
      setFailed(true);
    }
  };

  return (
    <section id="commissioning" ref={sectionRef} className="commissioning">
      <div
        ref={pinRef}
        className={`commissioning-pin ${ready ? 'is-ready' : ''} ${sequenceStatus === 'loading' || sequenceStatus === 'buffering' ? 'is-buffering' : ''} ${isTransitioning ? 'is-playing' : ''}`}
        style={{ '--focus-x': '37%', '--focus-y': '76%' } as CSSProperties}
        aria-busy={isTransitioning || sequenceStatus === 'loading' || sequenceStatus === 'buffering'}
        aria-label="Assembly sequence. Use scroll, swipe, or the arrow keys to move one stage at a time."
        tabIndex={0}
      >
        <header className="commissioning-heading">
          <div className="commissioning-status">
            <span>Assembly</span>
            <strong>{String(activeIndex + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')}</strong>
          </div>
          <h2>Build the machine.<br /><em>Reveal the intelligence.</em></h2>
          <p className="commissioning-instruction" aria-live="polite">{instruction}</p>
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
              onCanPlay={() => mediaReadyRef.current()}
              onPlaying={() => mediaEventRef.current('playing')}
              onWaiting={() => mediaEventRef.current('waiting')}
              onStalled={() => mediaEventRef.current('waiting')}
              onError={() => setFailed(true)}
            />
          ) : null}
          <img
            className="commissioning-poster"
            src="/video/veemap-assembly-sequence-start.webp"
            alt=""
          />
          <span className="commissioning-loader" aria-live="polite">
            {sequenceStatus === 'buffering' ? 'Buffering assembly sequence' : 'Preparing assembly sequence'}
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
                aria-label={`Inspect completed stage ${index + 1}: ${step.label}`}
                aria-current={index === activeIndex ? 'step' : undefined}
                disabled={!ready || isTransitioning || sequenceStatus === 'loading' || sequenceStatus === 'buffering'}
                onClick={() => stageJumpRef.current(index)}
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
