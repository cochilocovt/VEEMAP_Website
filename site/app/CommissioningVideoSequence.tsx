'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  Camera,
  HeartPulse,
  MonitorUp,
  Move3d,
  RotateCcw,
  type LucideIcon,
} from 'lucide-react';
import gsap from 'gsap';

export type AssemblyPhase =
  | 'idle'
  | 'expanding'
  | 'mechanical-build'
  | 'awaiting-scroll'
  | 'intelligence'
  | 'completed';

export interface IntelligenceStep {
  id: 'vision' | 'motion' | 'hmi' | 'condition';
  code: string;
  tag: string;
  title: string;
  subtitle: string;
  body: string;
  start: number;
  end: number;
  focus: { x: number; y: number };
}

export const intelligenceSteps: IntelligenceStep[] = [
  {
    id: 'vision',
    code: '01',
    tag: 'OPTICAL INSPECTION',
    title: 'AI Vision Inspection',
    subtitle: 'See the defect before the cycle advances.',
    body: 'Telecentric machine vision verifies part presence, critical seating, and sub-millimeter geometry inline before components advance.',
    start: 31.333333,
    end: 39.166666,
    focus: { x: 42, y: 34 },
  },
  {
    id: 'motion',
    code: '02',
    tag: 'HIGH-SPEED MOTION',
    title: 'High-Speed Motion',
    subtitle: 'Move at production cadence without losing precision.',
    body: 'Custom servo linkages and synchronized electronic cam profiles drive 170 PPM cycles with controlled jerk-limited acceleration.',
    start: 39.166666,
    end: 47.0,
    focus: { x: 49, y: 37 },
  },
  {
    id: 'hmi',
    code: '03',
    tag: 'INDUSTRY 4.0 HMI',
    title: 'Industry 4.0 HMI',
    subtitle: 'Real-time operating context for every station.',
    body: 'Edge telemetry and integrated SCADA stream shift performance, part counts, and station genealogy directly to operators.',
    start: 47.0,
    end: 54.833333,
    focus: { x: 69, y: 44 },
  },
  {
    id: 'condition',
    code: '04',
    tag: 'PREDICTIVE HEALTH',
    title: 'Predictive Health',
    subtitle: 'Intervene on mechanical drift before it causes downtime.',
    body: 'Continuous vibration FFT analysis and thermal gradient tracking detect wear signatures hundreds of operating hours early.',
    start: 54.833333,
    end: 62.833333,
    focus: { x: 78, y: 42 },
  },
];

const icons: Record<string, LucideIcon> = {
  vision: Camera,
  motion: Move3d,
  hmi: MonitorUp,
  condition: HeartPulse,
};

const mechanicalEndTime = 31.333333;
const totalDuration = 62.833333;
const frameDuration = 1 / 24;

export default function CommissioningVideoSequence() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [phase, setPhase] = useState<AssemblyPhase>('idle');
  const [loadMedia, setLoadMedia] = useState(false);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const phaseRef = useRef<AssemblyPhase>('idle');
  phaseRef.current = phase;
  const activeIdxRef = useRef(0);
  activeIdxRef.current = activeIdx;
  const transitionActiveRef = useRef(false);

  // Check reduced motion preference
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => {
      const matches = preference.matches;
      setReducedMotion(matches);
      if (matches) setPhase('completed');
    };
    update();
    preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);

  // Eagerly connect intersection observer to load media in background
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || reducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadMedia(true);
          observer.disconnect();
        }
      },
      { rootMargin: '400px 0px' },
    );
    observer.observe(section);

    return () => observer.disconnect();
  }, [reducedMotion]);

  useEffect(() => {
    if (loadMedia) videoRef.current?.load();
  }, [loadMedia]);

  // Trigger: "Click to assemble"
  const handleStartAssembly = () => {
    if (phaseRef.current !== 'idle') return;
    setLoadMedia(true);
    setPhase('expanding');

    // Smoothly center the section in viewport
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });

    const stage = stageRef.current;
    if (stage) {
      gsap.fromTo(
        stage,
        { scale: 0.94, opacity: 0.85 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: 'power3.out',
          onComplete: () => {
            startMechanicalTimelapse();
          },
        },
      );
    } else {
      startMechanicalTimelapse();
    }
  };

  // Pure Visual Mechanical Timelapse (0s to 31.33s, NO subtitles, NO titles, NO progress bar)
  const startMechanicalTimelapse = () => {
    setPhase('mechanical-build');
    const video = videoRef.current;
    if (!video) {
      setPhase('awaiting-scroll');
      return;
    }

    try {
      video.pause();
      video.currentTime = 0;
    } catch {}

    const buildDurationSeconds = 3.2;
    video.playbackRate = mechanicalEndTime / buildDurationSeconds;

    let frameId = 0;
    const monitorBuild = () => {
      if (!video) return;
      if (video.currentTime >= mechanicalEndTime - frameDuration) {
        cancelAnimationFrame(frameId);
        video.pause();
        video.currentTime = mechanicalEndTime;
        video.playbackRate = 1;
        setPhase('awaiting-scroll');
        return;
      }
      frameId = requestAnimationFrame(monitorBuild);
    };

    const watchdog = setTimeout(() => {
      cancelAnimationFrame(frameId);
      if (video) {
        video.pause();
        try { video.currentTime = mechanicalEndTime; } catch {}
        video.playbackRate = 1;
      }
      setPhase('awaiting-scroll');
    }, (buildDurationSeconds + 0.5) * 1000);

    void video.play().then(
      () => {
        frameId = requestAnimationFrame(monitorBuild);
      },
      () => {
        clearTimeout(watchdog);
        setPhase('awaiting-scroll');
      },
    );
  };

  // Step through intelligence layers (Vision, Motion, HMI, Health)
  const playIntelligenceStep = (targetIdx: number) => {
    const video = videoRef.current;
    if (!video) return;

    // Allow user clicks to interrupt any ongoing animation
    gsap.killTweensOf(video);

    const currentIdx = activeIdxRef.current;
    if (targetIdx < 0) return;

    if (targetIdx >= intelligenceSteps.length) {
      completeSequence();
      return;
    }

    transitionActiveRef.current = true;
    setIsTransitioning(true);
    setPhase('intelligence');
    setActiveIdx(targetIdx);

    const step = intelligenceSteps[targetIdx];
    const isForward = targetIdx >= currentIdx;
    const duration = 1.6;

    let watchdog: NodeJS.Timeout | undefined;

    const onFinish = () => {
      if (watchdog) clearTimeout(watchdog);
      transitionActiveRef.current = false;
      setIsTransitioning(false);
      video.pause();
      try {
        video.currentTime = step.end;
      } catch {}

      if (targetIdx === intelligenceSteps.length - 1) {
        // Last step completed: transition smoothly to completed state
        completeSequence();
      }
    };

    watchdog = setTimeout(() => {
      onFinish();
    }, (duration + 0.3) * 1000);

    if (!isForward) {
      video.playbackRate = 1;
      gsap.to(video, {
        currentTime: step.start,
        duration: 1.2,
        ease: 'power2.out',
        overwrite: true,
        onComplete: onFinish,
      });
      return;
    }

    try {
      video.pause();
      video.currentTime = step.start;
    } catch {}

    video.playbackRate = (step.end - step.start) / duration;
    let frameId = 0;
    const monitor = () => {
      if (!video || !transitionActiveRef.current) return;
      if (video.currentTime >= step.end - frameDuration) {
        cancelAnimationFrame(frameId);
        onFinish();
        return;
      }
      frameId = requestAnimationFrame(monitor);
    };

    void video.play().then(
      () => {
        frameId = requestAnimationFrame(monitor);
      },
      () => {
        transitionActiveRef.current = false;
        setIsTransitioning(false);
      },
    );
  };

  // Direct jump from capability card or milestone tab
  const jumpToIntelligence = (idx: number) => {
    transitionActiveRef.current = false;
    setIsTransitioning(false);
    const video = videoRef.current;
    setActiveIdx(idx);

    const step = intelligenceSteps[idx];
    if (video) {
      try {
        video.pause();
        video.currentTime = step.end;
      } catch {}
    }
  };

  // Transition to completed state: smooth machine reduction and capability deck
  const completeSequence = () => {
    setPhase('completed');
    const stage = stageRef.current;
    if (stage) {
      gsap.to(stage, {
        duration: 0.7,
        ease: 'power3.out',
      });
    }
  };

  // Reset / Replay
  const handleReplay = () => {
    const video = videoRef.current;
    if (video) {
      try {
        video.pause();
        video.currentTime = 0;
      } catch {}
    }
    setActiveIdx(0);
    setPhase('idle');
  };

  // Contained Wheel interaction on the stage
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || reducedMotion || failed) return;

    let wheelAcc = 0;
    let timer: number | undefined;

    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) return;
      const currentPhase = phaseRef.current;

      // In idle, mechanical-build, or completed states: do NOT hijack scroll!
      if (currentPhase === 'idle' || currentPhase === 'mechanical-build' || currentPhase === 'completed') {
        return;
      }

      const isDown = e.deltaY > 0;
      const currIdx = activeIdxRef.current;

      // When at boundary: let window scroll freely
      if (isDown && currIdx === intelligenceSteps.length - 1) {
        completeSequence();
        return;
      }
      if (!isDown && currIdx === 0 && currentPhase === 'awaiting-scroll') {
        return;
      }

      e.preventDefault();
      wheelAcc += e.deltaY;
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        wheelAcc = 0;
      }, 160);

      if (Math.abs(wheelAcc) >= 30) {
        const dir = wheelAcc > 0 ? 1 : -1;
        wheelAcc = 0;
        playIntelligenceStep(currIdx + dir);
      }
    };

    stage.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      stage.removeEventListener('wheel', onWheel);
      if (timer) window.clearTimeout(timer);
    };
  }, [reducedMotion, failed]);

  const activeStep = intelligenceSteps[activeIdx];
  const ActiveIcon = icons[activeStep.id] || Camera;

  return (
    <section id="commissioning" ref={sectionRef} className="commissioning">
      <div
        ref={stageRef}
        className={`assembly-stage phase-${phase} ${isTransitioning ? 'is-playing' : ''}`}
        aria-label="Interactive machine commissioning showcase"
      >
        {/* The Machine Video / Viewport Shell */}
        <div className="assembly-viewport">
          <div className="assembly-video-frame">
            {loadMedia ? (
              <video
                ref={videoRef}
                className="assembly-video"
                muted
                playsInline
                preload="auto"
                src="/video/veemap-assembly-sequence.mp4"
                poster="/video/veemap-assembly-sequence-start.webp"
                aria-label="Special purpose assembly machine executing commissioning sequence"
                disablePictureInPicture
                controlsList="nodownload noplaybackrate noremoteplayback"
                onCanPlay={() => setReady(true)}
                onError={() => setFailed(true)}
              />
            ) : null}

            {/* Poster for initial state */}
            <img
              className={`assembly-poster ${phase !== 'idle' ? 'is-hidden' : ''}`}
              src="/video/veemap-assembly-sequence-start.webp"
              alt="VEEMAP special-purpose machinery exploded view"
            />

            {/* In Idle State: Lucrative 'Click to assemble' Trigger */}
            {phase === 'idle' && (
              <button
                type="button"
                className="assembly-trigger"
                onClick={handleStartAssembly}
                aria-label="Click to assemble the machine"
              >
                <span className="trigger-beacon" aria-hidden="true" />
                <span className="trigger-text">CLICK TO ASSEMBLE</span>
                <ArrowUpRight size={14} className="trigger-icon" aria-hidden="true" />
              </button>
            )}

            {/* In Awaiting-Scroll State: Prompt user to scroll */}
            {phase === 'awaiting-scroll' && (
              <button
                type="button"
                className="assembly-scroll-prompt"
                onClick={() => playIntelligenceStep(0)}
                aria-label="Scroll to commission intelligence"
              >
                <span className="prompt-dot" aria-hidden="true" />
                <span className="prompt-text">SCROLL TO COMMISSION INTELLIGENCE</span>
                <ArrowDown size={14} className="prompt-arrow" aria-hidden="true" />
              </button>
            )}

            {/* During Intelligence Phase: Optical Targeting Reticle */}
            {(phase === 'awaiting-scroll' || phase === 'intelligence' || phase === 'completed') && (
              <div
                className="assembly-reticle"
                style={{ left: `${activeStep.focus.x}%`, top: `${activeStep.focus.y}%` }}
                aria-hidden="true"
              >
                <span className="reticle-crosshair" />
                <span className="reticle-label">{activeStep.code} // {activeStep.tag}</span>
              </div>
            )}

            {/* Replay Button in completed phase */}
            {phase === 'completed' && (
              <button
                type="button"
                className="assembly-replay-btn"
                onClick={handleReplay}
                aria-label="Replay assembly sequence"
              >
                <RotateCcw size={12} aria-hidden="true" />
                <span>REPLAY ASSEMBLY</span>
              </button>
            )}
          </div>
        </div>

        {/* Intelligence Phase Header / Title (Only visible during intelligence commissioning) */}
        {(phase === 'awaiting-scroll' || phase === 'intelligence') && (
          <div className="intelligence-narrative" aria-live="polite">
            <div className="narrative-meta">
              <ActiveIcon size={14} className="narrative-icon" aria-hidden="true" />
              <span>{activeStep.code} / 04 // {activeStep.tag}</span>
            </div>
            <h2 className="narrative-title">{activeStep.title}</h2>
            <p className="narrative-desc">{activeStep.subtitle}</p>
          </div>
        )}

        {/* 4-Segment Progress Bar (Dedicated strictly to the 4 Intelligence Layers) */}
        {(phase === 'awaiting-scroll' || phase === 'intelligence') && (
          <div className="assembly-progress-bar" role="tablist" aria-label="Intelligence Layers">
            <div className="progress-track" aria-hidden="true">
              <span
                className="progress-fill"
                style={{ transform: `scaleX(${(activeIdx + 1) / intelligenceSteps.length})` }}
              />
            </div>
            <div className="progress-milestones">
              {intelligenceSteps.map((step, idx) => {
                const isActive = idx === activeIdx;
                const isPassed = idx < activeIdx;
                return (
                  <button
                    key={step.id}
                    role="tab"
                    aria-selected={isActive}
                    className={`progress-pill ${isActive ? 'is-active' : isPassed ? 'is-passed' : ''}`}
                    onClick={() => playIntelligenceStep(idx)}
                  >
                    <span className="pill-code">{step.code}</span>
                    <span className="pill-label">{step.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Completed State: The 4 Capability Deck Below Reduced Machine */}
        {phase === 'completed' && (
          <div className="assembly-capability-deck" aria-label="Machine Intelligence Capabilities">
            {intelligenceSteps.map((step, idx) => {
              const Icon = icons[step.id];
              const isActive = idx === activeIdx;
              return (
                <article
                  key={step.id}
                  className={`capability-card ${isActive ? 'is-active' : ''}`}
                  onClick={() => jumpToIntelligence(idx)}
                  tabIndex={0}
                  role="button"
                  aria-label={`${step.title}: ${step.subtitle}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      jumpToIntelligence(idx);
                    }
                  }}
                >
                  <div className="capability-card-top">
                    <span className="capability-code">{step.code}</span>
                    <Icon size={16} className="capability-icon" aria-hidden="true" />
                  </div>
                  <h3 className="capability-title">{step.title}</h3>
                  <p className="capability-subtitle">{step.subtitle}</p>
                  <p className="capability-body">{step.body}</p>
                  <span className="capability-action">
                    <span>INSPECT SUBSYSTEM</span>
                    <ArrowUpRight size={12} aria-hidden="true" />
                  </span>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
