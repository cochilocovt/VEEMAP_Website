import type { Metadata } from 'next';
import { ArrowUpRight, Factory } from 'lucide-react';
import RouteShell from '@/components/site-shell/RouteShell';
import { rise, wipeUp } from '@/components/editorial/anim';
import styles from './careers.module.css';

export const metadata: Metadata = {
  title: 'Careers | VEEMAP Technologies',
  description:
    'Mechanical, electrical, controls, robotics and assembly engineering on special-purpose machines that have not been built before.',
  alternates: { canonical: '/careers' },
};

const disciplines = [
  'Mechanical design',
  'Electrical engineering',
  'Controls and PLC programming',
  'Robotics and motion',
  'Manufacturing',
  'Assembly and commissioning',
];

const problems = [
  'Feeding and orienting a component that does not want to be oriented',
  'Holding a tolerance at rate, when the fixture and the cycle time disagree',
  'Proving a joint or a seal without slowing the line down to do it',
  'Designing changeover in, so a second variant is not a second machine',
  'Getting vision to give the same answer under factory lighting as on the bench',
  'Making the production data legible to the people who have to act on it',
  'Commissioning on a live floor, where the process is not what the drawing said',
];

export default function CareersPage() {
  return (
    <RouteShell>
      {/* Hero */}
      <section className="ed-hero">
        <video className="ed-hero__video" autoPlay muted loop playsInline aria-hidden="true">
          <source src="/video/library/lib-wire-winding.mp4" type="video/mp4" />
        </video>
        <div className="ed-hero__grid" aria-hidden="true" />
        <div className="ed-hero__inner">
          <span className="ed-kicker" style={{ animation: 'ed-fadeIn .7s ease .05s both' }}>Careers</span>
          <h1 className="ed-serif ed-hero__title" style={{ maxWidth: '20ch' }}>
            <span style={{ display: 'block', animation: 'ed-riseIn .85s cubic-bezier(.2,.8,.2,1) .1s both' }}>Every project is a machine</span>
            <span style={{ display: 'block', animation: 'ed-riseIn .85s cubic-bezier(.2,.8,.2,1) .24s both' }}>that did not exist <em>before.</em></span>
          </h1>
          <p className="ed-deck" style={{ animation: 'ed-riseIn .9s cubic-bezier(.2,.8,.2,1) .42s both' }}>
            VEEMAP builds special-purpose machines, which means there is no product line to maintain
            and no two projects that repeat.
          </p>
          <div className="ed-hero__actions" style={{ animation: 'ed-fadeIn 1s ease .65s both' }}>
            <a className="ed-cta" href="mailto:info@veemap.co.in?subject=Careers%20at%20VEEMAP">
              Email VEEMAP about roles<ArrowUpRight aria-hidden="true" />
            </a>
            <span className="ed-hero__meta">Manesar · India</span>
          </div>
        </div>
        <div className="ed-hero__rule" aria-hidden="true" />
      </section>

      {/* The work */}
      <section className={styles.split}>
        <div className={styles.splitBody}>
          <h2 className="ed-cond" style={wipeUp(0, 'entry 8% cover 26%')}>The work</h2>
          <p className="ed-prose" style={{ margin: '2rem 0 0', maxWidth: '48ch', fontSize: '1.1rem', ...rise(0.1) }}>
            Mechanical design, electrical engineering, controls, robotics, manufacturing and assembly
            sit close enough together that engineers see a machine from requirement to commissioning
            rather than owning one slice of it.
          </p>
          <div className={styles.rail}>
            {disciplines.map((item, i) => (
              <span key={item} className={styles.railRow} style={rise((i % 2) * 0.06, 'entry 0% cover 22%')}>
                <i className="ed-diamond" />{item}
              </span>
            ))}
          </div>
        </div>
        <figure className={`ed-figure ${styles.splitFigure}`} style={wipeUp(0, 'entry 0% cover 30%')}>
          <img className="ed-figure__img" src="/images/machine-exploded-dark.png" alt="Special-purpose machine in an exploded engineering state — frame, tooling, gantry, vision head and HMI" loading="lazy" style={{ objectPosition: '50% 45%' }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(280deg,rgba(0,0,0,.7) 0,rgba(0,0,0,0) 45%)' }} />
          <figcaption className="ed-figure__cap"><i className="ed-live-dot" />Requirement to commissioning</figcaption>
        </figure>
      </section>

      {/* The problems */}
      <section className={styles.problems}>
        <img className={styles.problemsBg} src="/images/library/elec-terminal-screwing.jpg" alt="" aria-hidden="true" loading="lazy" style={{ filter: 'grayscale(.6) contrast(1.1)', WebkitMaskImage: 'radial-gradient(ellipse 72% 72% at 62% 42%, #000 26%, transparent 74%)', maskImage: 'radial-gradient(ellipse 72% 72% at 62% 42%, #000 26%, transparent 74%)' }} />
        <div className={styles.wrap}>
          <h2 className="ed-serif" style={{ maxWidth: '16ch', fontSize: 'clamp(2.2rem,4vw,4.2rem)', ...wipeUp() }}>The problems, not the job titles.</h2>
          <p className="ed-prose" style={{ margin: '1.8rem 0 0', maxWidth: '52ch', fontSize: '1.05rem', ...rise(0.1) }}>
            A brief arrives as a part and a constraint: this component, this many per minute, this
            characteristic that has to be proven. Turning that into a machine is the work.
          </p>
          <div className={styles.problemList}>
            {problems.map((item, i) => (
              <span key={item} className={styles.problemRow} style={rise(i * 0.05, 'entry 0% cover 20%')}>
                <i className="ed-diamond" style={{ marginTop: '.55rem' }} />{item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Training */}
      <section className={styles.section}>
        <div className={styles.training}>
          <div>
            <span className="ed-kicker" style={{ marginBottom: '1.4rem' }}>Training</span>
            <h2 className="ed-serif" style={{ maxWidth: '14ch', fontSize: 'clamp(2.2rem,4vw,4.2rem)', ...wipeUp() }}>Training is part of the work.</h2>
            <p className="ed-prose" style={{ margin: '2rem 0 0', maxWidth: '50ch', fontSize: '1.1rem', ...rise(0.1) }}>
              In-house training runs alongside manufacturer programmes covering PLC programming and 3D
              design. Engineers work with the controls and vision platforms the sector actually uses,
              including Keyence, Mitsubishi and Omron.
            </p>
          </div>
          <figure className={styles.trainingFigure} style={wipeUp(0, 'entry 0% cover 30%')}>
            <img src="/images/library/vision-keyence-rig.jpg" alt="Machine-vision sensor at the inspection station" loading="lazy" />
            <div className="ed-scanline" aria-hidden="true" style={{ opacity: .6 }} />
            <figcaption style={{ position: 'absolute', bottom: '1rem', left: '1rem', fontFamily: 'var(--font-mono), monospace', fontSize: '.55rem', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)' }}>
              Vision and controls platforms
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Facility band */}
      <figure className={styles.facility}>
        <img className="ed-figure__img" src="/images/facility.jpg" alt="VEEMAP Technologies engineering base in IMT Manesar, Gurugram" loading="lazy" style={{ objectPosition: 'center 45%', filter: 'grayscale(.5) contrast(1.06)' }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg,rgba(0,0,0,.78) 0,rgba(0,0,0,0) 46%,rgba(0,0,0,.5) 100%)' }} />
        <figcaption className={styles.facilityCap}>
          <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '.58rem', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--signal)', display: 'inline-flex', alignItems: 'center', gap: '.5rem' }}>
            <Factory aria-hidden="true" style={{ width: 16 }} />IMT Manesar, Gurugram
          </span>
          <span style={{ fontFamily: 'var(--font-utility), sans-serif', fontSize: '1.4rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.02em', lineHeight: 1.1, color: 'var(--text)' }}>
            Engineering, manufacturing and assembly under one roof
          </span>
        </figcaption>
      </figure>

      {/* Applying */}
      <section className={styles.apply}>
        <div className={styles.wrap} style={{ maxWidth: '60rem' }}>
          <h2 className="ed-serif" style={{ maxWidth: '10ch', fontSize: 'clamp(2.4rem,4.6vw,4.8rem)', ...wipeUp() }}>Applying.</h2>
          <p className="ed-prose" style={{ margin: '2rem 0 0', maxWidth: '52ch', fontSize: '1.1rem', ...rise(0.1) }}>
            Send a short note describing the engineering work you want to do and your current role.
            Please do not attach anything confidential to a first email.
          </p>
          <a className="ed-cta" href="mailto:info@veemap.co.in?subject=Careers%20at%20VEEMAP" style={{ marginTop: '2.4rem' }}>
            Email VEEMAP about engineering roles<ArrowUpRight aria-hidden="true" />
          </a>
          <p style={{ margin: '2rem 0 0', maxWidth: '40rem', fontFamily: 'var(--font-mono), monospace', fontSize: '.72rem', lineHeight: 1.7, color: 'var(--muted)', borderLeft: '2px solid var(--signal)', paddingLeft: '1rem' }}>
            No specific vacancies are listed. This is an expression-of-interest route until current
            roles and a careers application destination are supplied.
          </p>
        </div>
      </section>
    </RouteShell>
  );
}
