import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Boxes } from 'lucide-react';
import RouteShell from '@/components/site-shell/RouteShell';
import { rise, wipeUp } from '@/components/editorial/anim';
import { sectorLinks } from '@/content/sectors';
import styles from './capabilities.module.css';

export const metadata: Metadata = {
  title: 'Capabilities | VEEMAP Technologies',
  description:
    'Custom automation designed around the product and process: semi-automatic platforms, fully automatic lines and complete plants, with controls, inspection and production data.',
  alternates: { canonical: '/capabilities' },
};

const disciplinesTape = [
  'Mechanical design', 'Panel build', 'PLC programming', 'Robotics and motion',
  'Machine vision', 'Leak and functional test', 'Production data', 'Commissioning',
];

const scale = [
  {
    index: '01', title: 'Semi-automatic platforms',
    body: 'Targeted industrialisation with operator access and controlled process steps. The lowest initial investment that still holds final quality.',
    meta: 'One process / one station',
    img: '/images/library/scale-semi-auto-machine.jpg', alt: 'Single semi-automatic assembly station with operator access',
    imgStyle: { objectPosition: '50% 60%', filter: 'grayscale(.7) contrast(1.15) brightness(.9)' },
    scrim: 'linear-gradient(180deg,rgba(0,0,0,.65) 0,rgba(0,0,0,0) 45%)',
  },
  {
    index: '02', title: 'Fully automatic lines',
    body: 'Indexed or continuous motion, integrating assembly, testing, inspection and material movement into one controlled sequence.',
    meta: 'Multiple processes / one line',
    img: '/images/library/scale-high-speed-line.jpg', alt: 'Fully automatic multi-station assembly line',
    imgStyle: { objectPosition: '60% center' },
    scrim: undefined,
  },
  {
    index: '03', title: 'Complete plants',
    body: 'Machines, conveyors, quality systems, controls and connected data designed together as one manufacturing environment.',
    meta: 'Production system / plant scale',
    img: '/images/library/scale-complete-plant.jpg', alt: 'Complete plant — machines, conveyors and quality systems as one environment',
    imgStyle: { objectPosition: '45% center' },
    scrim: 'linear-gradient(180deg,rgba(0,0,0,.6) 0,rgba(0,0,0,0) 45%)',
  },
] as const;

const disciplines = [
  'Mechanical design and mechanism development',
  'Electrical engineering and panel build',
  'Controls and PLC programming',
  'Robotics and motion',
  'Machine vision and inspection',
  'Production data and dashboards',
];

const lifecycle = [
  'Understand the requirement', 'Design', 'Manufacture',
  'Assemble and integrate', 'Trial and production test', 'Commission and support',
];

const flexible = [
  'Indexed or continuous motion',
  'Multi-track architectures',
  'Tooling that changes as a set',
  'Recipe-driven parameters',
];

const dashStats = [
  { label: 'Line state', value: 'Running', dot: true },
  { label: 'Good count', value: '18,420' },
  { label: 'Rejects segregated', value: '212', accent: true },
  { label: 'First-time pass', value: '98.9', unit: ' %' },
];
const stationHealth = [92, 86, 97, 78, 90, 95];
const stationNames = ['Feed', 'Orient', 'Assemble', 'Join', 'Test', 'Inspect'];

export default function CapabilitiesPage() {
  return (
    <RouteShell>
      {/* Hero */}
      <section className="ed-hero">
        <video className="ed-hero__video" autoPlay muted loop playsInline aria-hidden="true" style={{ opacity: .34, filter: 'grayscale(.55) contrast(1.15)' }}>
          <source src="/video/library/lib-delta-robot.mp4" type="video/mp4" />
        </video>
        <div className="ed-hero__grid" aria-hidden="true" />
        <img
          src="/images/library/scale-high-speed-line.jpg" alt="" aria-hidden="true" loading="lazy"
          style={{ position: 'absolute', top: '-6%', right: '-18%', width: '64%', zIndex: -1, opacity: .35, filter: 'grayscale(.6) contrast(1.1)', WebkitMaskImage: 'radial-gradient(ellipse 72% 72% at 62% 42%, #000 26%, transparent 74%)', maskImage: 'radial-gradient(ellipse 72% 72% at 62% 42%, #000 26%, transparent 74%)', animation: 'ed-driftUp linear both', animationTimeline: 'view()', animationRange: 'cover 0% cover 100%' } as CSSProperties}
        />
        <div className="ed-hero__inner">
          <span className="ed-kicker" style={{ animation: 'ed-fadeIn .7s ease .05s both' }}>Capabilities</span>
          <h1 className="ed-serif ed-hero__title" style={{ maxWidth: '26ch', textWrap: 'balance' } as CSSProperties}>
            <span style={{ animation: 'ed-riseIn .85s cubic-bezier(.2,.8,.2,1) .1s both' }}>Automation designed</span>
            <span style={{ animation: 'ed-riseIn .85s cubic-bezier(.2,.8,.2,1) .22s both' }}>around the process,</span>
            <span style={{ animation: 'ed-riseIn .85s cubic-bezier(.2,.8,.2,1) .34s both' }}>not the <em>catalogue.</em></span>
          </h1>
          <p className="ed-deck" style={{ maxWidth: '52ch', animation: 'ed-riseIn .9s cubic-bezier(.2,.8,.2,1) .48s both' }}>
            Custom machines are specified backwards from the part: what it is made of, how it must be
            joined, what has to be proven before it moves on, and how many the line has to produce.
          </p>
          <div className="ed-hero__actions" style={{ animation: 'ed-fadeIn 1s ease .7s both' }}>
            <a className="ed-cta" href="#scale">Read the capability set<ArrowDown aria-hidden="true" /></a>
            <span className="ed-hero__meta">Station · Line · Plant</span>
          </div>
        </div>
        <div className="ed-hero__rule" aria-hidden="true" />
      </section>

      {/* Disciplines tape */}
      <div className="ed-marquee" aria-hidden="true" style={{ borderBottom: '1px solid var(--line)' }}>
        <div className="ed-marquee__track" style={{ animationDuration: '38s' }}>
          {[0, 1].map((n) => (
            <span key={n}>
              {disciplinesTape.map((item) => (
                <span key={item} style={{ display: 'inline-flex', alignItems: 'center', gap: '2.5rem' }}>{item}<i className="ed-diamond" /></span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* System scale */}
      <section id="scale" className={styles.section} style={{ maxWidth: 1600, margin: '0 auto' }}>
        <div className={styles.scaleHead}>
          <h2 className="ed-cond" style={{ maxWidth: '22ch', ...wipeUp(0, 'entry 8% cover 26%') }}>One process, one line, or the whole plant</h2>
          <p style={rise(0, 'entry 8% cover 28%')}>
            The right level of automation is a commercial decision before it is an engineering one. VEEMAP
            builds at all three scales and will say which one a requirement actually needs.
          </p>
        </div>
        <div className={styles.cards}>
          {scale.map((item, i) => (
            <article key={item.index} className={styles.card} style={rise(i * 0.12, 'entry 5% cover 24%')}>
              <div className={styles.cardMedia}>
                <img className="ed-figure__img" src={item.img} alt={item.alt} loading="lazy" style={item.imgStyle as CSSProperties} />
                {item.scrim && <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: item.scrim }} />}
                <span className={styles.cardIndex}>{item.index}</span>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardText}>{item.body}</p>
                <p className={styles.cardMeta}>{item.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Engineering disciplines */}
      <section className={`${styles.section} ${styles.sectionBordered}`} style={{ maxWidth: 1600, margin: '0 auto' }}>
        <h2 className="ed-cond" style={{ marginBottom: '3rem', ...wipeUp(0, 'entry 8% cover 26%') }}>Engineering disciplines</h2>
        <div className={styles.disciplines}>
          {disciplines.map((item, i) => (
            <div key={item} className={styles.disciplineRow} style={rise((i % 3) * 0.06, 'entry 0% cover 20%')}>
              <span className={styles.disciplineNum}>{String(i + 1).padStart(2, '0')}</span>
              <span className={styles.disciplineText}>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Delivery lifecycle */}
      <section className={`${styles.section} ${styles.sectionBordered}`}>
        <div className="ed-wrap">
          <h2 className="ed-cond" style={{ marginBottom: '3.5rem', ...wipeUp(0, 'entry 8% cover 26%') }}>Delivery lifecycle</h2>
          <div className="ed-steps">
            <div className="ed-steps__rail" aria-hidden="true" />
            <div className="ed-steps__fill" aria-hidden="true" />
            {lifecycle.map((step, i) => (
              <div key={step} style={rise(i * 0.1, 'entry 10% cover 30%')}>
                <span className="ed-step__node" aria-hidden="true" />
                <span className="ed-step__label">Step {String(i + 1).padStart(2, '0')}</span>
                <span className="ed-step__text">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High-speed and flexible */}
      <section className={styles.flex}>
        <div className={styles.flexBody}>
          <h2 className="ed-serif" style={{ maxWidth: '12ch', fontSize: 'clamp(2.6rem,4.6vw,5rem)', ...wipeUp() }}>
            Rate and flexibility <em>pull against each other.</em>
          </h2>
          <p className="ed-prose" style={{ margin: '2.2rem 0 0', maxWidth: '52ch', fontSize: '1.1rem', ...rise(0.1) }}>
            A line built for one product at maximum rate will not change over quickly; a line built to run
            six variants will not match the rate of the dedicated one. Which one wins is a design decision
            taken early rather than a setting adjusted later.
          </p>
          <p className="ed-prose" style={{ margin: '1.4rem 0 0', maxWidth: '52ch', fontSize: '1.1rem', ...rise(0.2) }}>
            VEEMAP designs for the point on that curve the requirement actually needs, using indexed or
            continuous motion, multi-track architectures where the part count demands it, tooling that
            changes as a set, and parameters held as recipes in the controller rather than set by hand at
            the machine.
          </p>
          <div className={styles.rail}>
            {flexible.map((item, i) => (
              <span key={item} className={styles.railRow} style={rise(i * 0.08, 'entry 0% cover 22%')}><i className="ed-diamond" />{item}</span>
            ))}
          </div>
        </div>
        <figure className={`ed-figure ${styles.flexFigure}`} style={wipeUp(0, 'entry 0% cover 30%')}>
          <img className="ed-figure__img" src="/images/library/ev-motor-exploded.jpg" alt="Exploded motor assembly showing the bearing, rotor, stator and circuit board" loading="lazy" style={{ objectPosition: '52% center' }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg,rgba(0,0,0,.85) 0,rgba(0,0,0,0) 42%)' }} />
          <figcaption className="ed-figure__cap ed-figure__cap--right">
            <Boxes aria-hidden="true" style={{ width: 18, color: 'var(--signal)' }} />
            Motor · exploded assembly
          </figcaption>
        </figure>
      </section>

      {/* Quality and inspection */}
      <section className={styles.quality}>
        <img className={styles.qualityBg} src="/images/library/vision-keyence-rig.jpg" alt="" aria-hidden="true" loading="lazy" style={{ filter: 'grayscale(.7) contrast(1.12) brightness(.92)', WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 55% 50%, #000 22%, transparent 72%)', maskImage: 'radial-gradient(ellipse 70% 70% at 55% 50%, #000 22%, transparent 72%)' }} />
        <div className={styles.qualityGrid}>
          <div>
            <span className="ed-kicker" style={{ marginBottom: '1.4rem' }}>Verification</span>
            <h2 className="ed-serif" style={{ maxWidth: '11ch', fontSize: 'clamp(2.4rem,4.2vw,4.4rem)', ...wipeUp() }}>Designed into the sequence.</h2>
            <p className="ed-prose" style={{ margin: '2rem 0 0', maxWidth: '44ch', fontSize: '1.05rem', ...rise(0.1) }}>
              Verification is designed into the sequence rather than added at the end of it: dimensional
              checking, machine vision, leak and functional testing, controlled reject handling, and
              traceability tied to the part rather than to the batch.
            </p>
          </div>
          <figure className={styles.visionFrame} style={wipeUp(0, 'entry 0% cover 30%')}>
            <img src="/images/library/vision-keyence-rig.jpg" alt="Machine-vision sensor at the inspection station" loading="lazy" />
            <div className="ed-scanline" aria-hidden="true" style={{ opacity: .7 }} />
            <figcaption style={{ position: 'absolute', bottom: '1.2rem', left: '1.2rem', display: 'inline-flex', alignItems: 'center', gap: '.6rem', fontFamily: 'var(--font-mono), monospace', fontSize: '.58rem', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)' }}>
              <i className="ed-live-dot" />Vision head · inspection at the station
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Connected production */}
      <section className={`ed-band ${styles.connected}`}>
        <div className={styles.connectedBody}>
          <h2 className="ed-serif" style={{ maxWidth: '13ch', color: '#000', fontSize: 'clamp(2.4rem,4.4vw,4.6rem)', ...wipeUp() }}>The line should be able to explain itself.</h2>
          <p style={{ margin: '2.1rem 0 0', ...rise(0.1) }}>
            Production data is integrated where the requirement justifies it, not by default. Machine data
            is collected locally, retained under the plant&rsquo;s own firewall policy, and made available to
            cloud analytics where scale or multi-site reporting calls for it.
          </p>
          <p style={{ margin: '1.3rem 0 0', ...rise(0.2) }}>
            Dashboards are built to the use case rather than to a template: production state, output trend,
            good and reject counts, inspection results, station health and alarm categories. Operators read
            them locally at the HMI; engineering and management read the same data through SCADA and
            dashboard platforms including Zenon and WinCC.
          </p>
        </div>
        <div className={styles.dashWrap}>
          <div className={styles.dashStats}>
            {dashStats.map((s, i) => (
              <div key={s.label} className={styles.dashCell} style={rise(i * 0.08, 'entry 0% cover 25%')}>
                <p className={styles.dashLabel}>{s.label}</p>
                <p className={styles.dashValue} style={s.accent ? { color: 'var(--signal)' } : undefined}>
                  {s.dot && <i className="ed-live-dot" style={{ width: 8, height: 8 }} />}
                  {s.value}{s.unit && <span style={{ fontSize: '.9rem', color: 'var(--faint)' }}>{s.unit}</span>}
                </p>
              </div>
            ))}
          </div>
          <div className={styles.dashPanel}>
            <p className={styles.dashLabel}>Station health</p>
            <div className={styles.bars}>
              {stationHealth.map((h, i) => (
                <span key={i} className={styles.bar} style={{ height: `${h}%`, animationDelay: `${i * 0.09}s` }} />
              ))}
            </div>
            <p className={styles.barLabels}>{stationNames.map((n) => <span key={n}>{n}</span>)}</p>
          </div>
          <p className={styles.dashNote}>
            Illustrative data. Authored to show what a VEEMAP dashboard reports — not measurements from a
            delivered system, and not a performance claim.
          </p>
        </div>
      </section>

      {/* Sectors */}
      <section id="sectors" className={styles.section} style={{ maxWidth: 1600, margin: '0 auto' }}>
        <h2 className="ed-cond" style={{ marginBottom: '2.5rem', ...wipeUp(0, 'entry 8% cover 26%') }}>Sectors</h2>
        <ul className={styles.sectorList}>
          {sectorLinks.map((link) => (
            <li key={link.href}><Link className="ed-sector-link" href={link.href}>{link.label}</Link></li>
          ))}
        </ul>
      </section>

      {/* Start a project */}
      <section id="start" className={styles.start}>
        <img className={styles.startBg} src="/images/library/hmi-dashboard.jpg" alt="" aria-hidden="true" loading="lazy" style={{ WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 45%, #000 24%, transparent 74%)', maskImage: 'radial-gradient(ellipse 70% 70% at 50% 45%, #000 24%, transparent 74%)' }} />
        <div className={styles.startGrid}>
          <div>
            <h2 className="ed-serif" style={{ maxWidth: '12ch', fontSize: 'clamp(2.4rem,4.6vw,4.8rem)', ...wipeUp() }}>Start a project.</h2>
            <p className="ed-prose" style={{ margin: '2rem 0 0', maxWidth: '48ch', fontSize: '1.1rem', ...rise(0.1) }}>
              The most useful first message describes the product, the process step that is constraining you,
              what has to be verified before a part moves on, how many variants you run, and the production
              context you are targeting.
            </p>
            <Link className="ed-cta" href="/contact" style={{ marginTop: '2.4rem' }}>Prepare an enquiry<ArrowUpRight aria-hidden="true" /></Link>
          </div>
          <div className={styles.startMeta}>
            <span>Plot No. 35, Sector 5, IMT Manesar</span>
            <span>Gurugram, Haryana, India — 122050</span>
            <a href="mailto:info@veemap.co.in">info@veemap.co.in</a>
            <a href="tel:+919266374969">+91 9266374969</a>
          </div>
        </div>
      </section>
    </RouteShell>
  );
}
