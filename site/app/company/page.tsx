import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Factory } from 'lucide-react';
import RouteShell from '@/components/site-shell/RouteShell';
import styles from './company.module.css';

export const metadata: Metadata = {
  title: 'Company | VEEMAP Technologies',
  description:
    'VEEMAP Technologies is an industrial automation and special-purpose machine company engineering from IMT Manesar since 2017.',
  alternates: { canonical: '/company' },
};

/* Scroll-linked reveal helpers. Where the browser has no view() timeline the
 * animation simply plays once on load; the global reduced-motion guard in
 * globals.css collapses both to the held final state. */
const view = (range: string) => ({ animationTimeline: 'view()', animationRange: range });
const rise = (delay = 0, range = 'entry 5% cover 28%'): CSSProperties =>
  ({ animation: `ed-riseIn .9s ease ${delay}s both`, ...view(range) }) as CSSProperties;
const wipeUp = (delay = 0, range = 'entry 5% cover 28%'): CSSProperties =>
  ({ animation: `ed-wipeUp 1s cubic-bezier(.2,.8,.2,1) ${delay}s both`, ...view(range) }) as CSSProperties;
const countUp = (delay = 0, range = 'entry 0% cover 28%'): CSSProperties =>
  ({ animation: `ed-countUp 1s cubic-bezier(.2,.8,.2,1) ${delay}s both`, ...view(range) }) as CSSProperties;

const scope = [
  'Research and development',
  'Mechanical and electrical engineering',
  'Manufacturing',
  'Assembly and integration',
  'Production trials and commissioning',
  'After-sales support',
];

const proof = [
  { label: 'Projects delivered', value: '236', foot: 'Since 2017' },
  { label: 'Clients', value: '55', foot: 'India and overseas' },
  { label: 'Manufacturing sectors', value: '5', foot: 'Medical · Automotive · EV · Electronics · Consumer' },
];

const timeline = [
  { year: '2017', body: 'Founded in IMT Manesar, building single-station special-purpose machines.' },
  { year: 'From 2018', body: 'Vision and sensing brought in-house through the Keyence relationship.' },
  { year: 'Scaling up', body: 'From stations to indexed and continuous-motion lines integrating assembly, test and inspection.' },
  { year: 'Scaling out', body: 'Multi-station lines and complete plants, with material flow designed as part of the system.' },
  { year: 'Connected production', body: 'Controls, data collection and dashboards added where the requirement justifies them.' },
  { year: 'Now', body: '236 projects delivered for 55 clients across five manufacturing sectors.', pulse: true },
];

export default function CompanyPage() {
  return (
    <RouteShell>
      {/* Hero */}
      <section className="ed-hero">
        <video className="ed-hero__video" autoPlay muted loop playsInline aria-hidden="true">
          <source src="/video/library/lib-machine-flow.mp4" type="video/mp4" />
        </video>
        <div className="ed-hero__grid" aria-hidden="true" />
        <div className="ed-hero__inner">
          <span className="ed-kicker" style={{ animation: 'ed-fadeIn .7s ease .05s both' }}>Company</span>
          <h1 className="ed-serif ed-hero__title">
            <span style={{ animation: 'ed-riseIn .85s cubic-bezier(.2,.8,.2,1) .1s both' }}>Engineering from</span>
            <span style={{ animation: 'ed-riseIn .85s cubic-bezier(.2,.8,.2,1) .24s both' }}>Manesar since <em>2017.</em></span>
          </h1>
          <p className="ed-deck" style={{ animation: 'ed-riseIn .9s cubic-bezier(.2,.8,.2,1) .42s both' }}>
            VEEMAP Technologies designs, manufactures, assembles, tests and commissions special-purpose
            machines and complete production systems from its engineering base in IMT Manesar, Gurugram.
          </p>
          <div className="ed-hero__actions" style={{ animation: 'ed-fadeIn 1s ease .65s both' }}>
            <a className="ed-cta" href="#proof">
              The record so far
              <ArrowDown aria-hidden="true" />
            </a>
            <span className="ed-hero__meta">Indigenous engineering · India</span>
          </div>
        </div>
        <div className="ed-hero__rule" aria-hidden="true" />
      </section>

      {/* Proof ledger */}
      <section id="proof" className={styles.section}>
        <div className="ed-wrap">
          <div className="ed-ledger">
            {proof.map((item, index) => (
              <div key={item.label} className="ed-ledger__cell">
                <span className="ed-ledger__label">{item.label}</span>
                <strong className="ed-ledger__num" style={countUp(index * 0.12, 'entry 0% cover 28%')}>{item.value}</strong>
                <span className="ed-ledger__foot">{item.foot}</span>
              </div>
            ))}
          </div>
          <div className="ed-marquee" aria-hidden="true" style={{ paddingBottom: 0 }}>
            <div className="ed-marquee__track" style={{ animationDuration: '30s' }}>
              {[0, 1].map((n) => (
                <span key={n}>
                  {scope.map((item) => (
                    <span key={item} style={{ display: 'inline-flex', alignItems: 'center', gap: '2rem' }}>
                      {item}<i className="ed-diamond" />
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Indigenous engineering */}
      <section className={styles.split}>
        <div className={styles.splitBody}>
          <h2 className="ed-serif" style={{ maxWidth: '12ch', fontSize: 'clamp(2.4rem,4.4vw,4.8rem)', ...wipeUp(0, 'entry 5% cover 28%') }}>
            Indigenous engineering.
          </h2>
          <p className="ed-prose" style={{ margin: '2.2rem 0 0', maxWidth: '52ch', fontSize: '1.1rem', ...rise(0.1) }}>
            Mechanisms, controls and inspection are developed in-house rather than specified from a
            catalogue. That is what makes a machine built around one product possible, and it is why the
            work stays in India rather than being imported as a finished system.
          </p>
          <div className={styles.rail}>
            {scope.map((item, index) => (
              <span key={item} className={styles.railRow} style={rise(index * 0.06, 'entry 0% cover 22%')}>
                <i className="ed-diamond" />{item}
              </span>
            ))}
          </div>
        </div>
        <figure
          className={`ed-figure ${styles.splitFigure}`}
          style={{ animation: 'ed-wipeRight 1.1s cubic-bezier(.2,.8,.2,1) both', animationTimeline: 'view()', animationRange: 'entry 0% cover 30%' } as CSSProperties}
        >
          <img
            className="ed-figure__img"
            src="/images/facility.jpg"
            alt="VEEMAP Technologies engineering base in IMT Manesar, Gurugram"
            loading="lazy"
            style={{ objectPosition: 'center 42%', filter: 'grayscale(.55) contrast(1.08)' }}
          />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 46%)' }} />
          <figcaption className="ed-figure__cap">
            <Factory aria-hidden="true" style={{ width: 18, color: 'var(--signal)' }} />
            IMT Manesar, Gurugram
          </figcaption>
        </figure>
      </section>

      {/* Yes and no */}
      <section className={`ed-band ${styles.band}`}>
        <div className={styles.bandGrid}>
          <h2 className="ed-serif" style={{ maxWidth: '11ch', color: '#000', fontSize: 'clamp(2.6rem,5.4vw,5.6rem)', ...wipeUp() }}>
            We believe YES and NO equally.
          </h2>
          <p style={rise(0.12)}>
            A requirement that automation cannot serve well is worth saying so about. Committing to a
            machine that will not hold its rate, its quality or its changeover helps nobody, so the answer
            to a brief is sometimes a different scope than the one that was asked for — and sometimes it is no.
          </p>
        </div>
      </section>

      {/* How the capability grew */}
      <section className={styles.timelineSection}>
        <img className={styles.timelineBgImg} src="/images/library/hmi-floor-monitoring.jpg" alt="" aria-hidden="true" loading="lazy" style={{ WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 45%, #000 24%, transparent 74%)', maskImage: 'radial-gradient(ellipse 70% 70% at 50% 45%, #000 24%, transparent 74%)' }} />
        <div className="ed-wrap">
          <h2 className="ed-serif" style={{ maxWidth: '16ch', fontSize: 'clamp(2.2rem,4vw,4.2rem)', ...wipeUp() }}>How the capability grew.</h2>
          <p className="ed-prose" style={{ margin: '1.8rem 0 0', maxWidth: '50ch', fontSize: '1.05rem', ...rise(0.1) }}>
            The sequence below describes capability rather than commercial milestones. It names no customer and no project.
          </p>
          <div className={styles.timeline}>
            <div className={styles.timelineRail} aria-hidden="true" />
            <div className={styles.timelineRailFill} aria-hidden="true" />
            {timeline.map((item, index) => (
              <article key={item.year} className={styles.tlItem} style={rise(0, 'entry 5% cover 26%')}>
                <span className={`${styles.tlNode}${item.pulse ? ` ${styles.pulse}` : ''}`} aria-hidden="true" />
                <span className={styles.tlYear}>{item.year}</span>
                <p className={styles.tlText}>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Capability band image */}
      <figure className={styles.fullFigure}>
        <img
          className="ed-figure__img"
          src="/images/machine-exploded-dark.png"
          alt="Special-purpose machine shown in an exploded engineering state: frame, tooling plates, gantry, vision head and HMI"
          loading="lazy"
          style={{ objectPosition: 'center 45%' }}
        />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 40%,rgba(0,0,0,.55) 100%)' }} />
        <figcaption className={styles.fullFigureCap}>
          <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '.58rem', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--signal)' }}>Station to line</span>
          <span style={{ fontFamily: 'var(--font-utility), sans-serif', fontSize: '1.4rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.02em', lineHeight: 1.1, color: 'var(--text)' }}>
            Frame, tooling, motion, vision and controls designed together
          </span>
        </figcaption>
      </figure>

      {/* Technology partnership */}
      <section className={styles.section} style={{ borderBottom: '1px solid var(--line)' }}>
        <div className={styles.partnership}>
          <div style={{ display: 'grid', gap: '2.5rem' }}>
            <h2 className="ed-cond" style={wipeUp(0, 'entry 8% cover 26%')}>Technology partnership</h2>
            <figure className={styles.visionFrame} style={rise(0, 'entry 0% cover 30%')}>
              <img src="/images/library/vision-keyence-rig.jpg" alt="Keyence vision sensor hardware at an inspection station" loading="lazy" />
              <div className="ed-scanline" aria-hidden="true" />
              <figcaption style={{ position: 'absolute', bottom: '1rem', left: '1rem', fontFamily: 'var(--font-mono), monospace', fontSize: '.55rem', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                Vision and sensing · in-house since 2018
              </figcaption>
            </figure>
          </div>
          <div>
            <p className="ed-prose" style={{ margin: 0, maxWidth: '56ch', fontSize: '1.1rem', lineHeight: 1.6, ...rise(0, 'entry 5% cover 26%') }}>
              VEEMAP has worked with Keyence since 2018 on vision and sensing technology, alongside training
              programmes with the controls platforms the sector uses.
            </p>
            <p className={styles.note} style={rise(0.1, 'entry 5% cover 26%')}>
              Final partnership wording and an approved Keyence logo asset are outstanding owner inputs. No
              partner logo is displayed until that asset is supplied.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className={styles.contact}>
        <img className={styles.contactBgImg} src="/images/library/hmi-dashboard.jpg" alt="" aria-hidden="true" loading="lazy" style={{ WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 45%, #000 24%, transparent 74%)', maskImage: 'radial-gradient(ellipse 70% 70% at 50% 45%, #000 24%, transparent 74%)' }} />
        <div className={styles.contactGrid}>
          <div>
            <h2 className="ed-serif" style={{ maxWidth: '12ch', fontSize: 'clamp(2.4rem,4.6vw,4.8rem)', ...wipeUp() }}>Contact.</h2>
            <p className="ed-prose" style={{ margin: '2rem 0 0', maxWidth: '46ch', fontSize: '1.1rem', ...rise(0.1) }}>
              Plot No. 35, Sector 5, IMT Manesar, Gurugram, Haryana, India — 122050
            </p>
            <Link className="ed-cta" href="/contact" style={{ marginTop: '2.4rem' }}>
              Prepare an enquiry
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
          <div className={styles.contactMeta}>
            <a href="mailto:info@veemap.co.in">info@veemap.co.in</a>
            <a href="tel:+919266374969">+91 9266374969</a>
            <span style={{ color: 'var(--faint)', fontSize: '.6rem', letterSpacing: '.1em', textTransform: 'uppercase', marginTop: '.6rem' }}>Established 2017</span>
          </div>
        </div>
      </section>
    </RouteShell>
  );
}
