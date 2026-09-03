import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Cpu } from 'lucide-react';
import RouteShell from '@/components/site-shell/RouteShell';
import { rise, wipeUp, wipeRight, countUp } from '@/components/editorial/anim';
import styles from './industries.module.css';

export const metadata: Metadata = {
  title: 'Industries | VEEMAP Technologies',
  description:
    'Automation solutions across medical and pharmaceutical, automotive, EV, electronics and consumer goods manufacturing.',
  alternates: { canonical: '/industries' },
};

const chips = [
  { slug: 'medical-pharma', label: 'Medical & Pharmaceutical' },
  { slug: 'automotive', label: 'Automotive' },
  { slug: 'ev-solutions', label: 'EV Solutions' },
  { slug: 'electronics', label: 'Electronics' },
  { slug: 'consumer-goods', label: 'Consumer Goods' },
];

const medicalFamilies = [
  'Endotracheal tube assembly', 'IV drip chamber assembly', 'Spine-needle assembly',
  'Insulin-pen assembly', '3-way and 2-way valve assembly', 'Pilot-check-valve assembly',
  'SWDT and related device assembly',
];

const automotiveCards = [
  { title: 'Verification and inspection', body: 'Piston vision inspection, engine number inspection, brake shoe inspection, piston liner inspection and brake disc vision inspection.' },
  { title: 'Assembly and joining', body: 'Radiator assembly, fuel rail assembly, complete clutch assembly, and pipe and component handling.' },
  { title: 'Surface and finishing', body: 'Robotic hood polishing.' },
  { title: 'Identification and traceability', body: 'Marking, identification and result logging tied to the part.' },
];

const evStages = [
  'Winding and sub-assembly', 'Motor and hub-motor assembly', 'Controller and charger build',
  'Electrical and functional test', 'Material movement between stages', 'Production data across the sequence',
];

const electronicsChips = [
  'Electrical switch assembly', 'Circuit-breaker automation', 'Robotic soldering',
  'Controlled tightening', 'RFID processing', 'Electrical and functional testing',
];

const consumerRates = [
  { label: 'Cap and liner insertion', num: '250', suffix: '+/min', foot: '8 stations · 1 track · convertible' },
  { label: 'Dispensing pump assembly', num: '122', suffix: '+/min', foot: '11 parts · 50 stations · 11 tracks' },
  { label: 'Sensor coverage', num: '200', suffix: '+', foot: 'Feeding the production data layer' },
];

const acrossSector = [
  'Assembly and joining', 'Functional and leak testing', 'Vision and dimensional inspection',
  'Traceability tied to the part', 'Material handling and flow', 'Production data and dashboards',
];

const solutionLink = (slug: string, label: string) => (
  <Link className="ed-link" href={`/industries/${slug}`}>
    {label}<ArrowUpRight aria-hidden="true" />
  </Link>
);

export default function IndustriesPage() {
  return (
    <RouteShell>
      {/* Hero */}
      <section className="ed-hero">
        <video className="ed-hero__video" autoPlay muted loop playsInline aria-hidden="true" style={{ opacity: .3, filter: 'grayscale(.8) contrast(1.2)' }}>
          <source src="/video/library/lib-wire-winding.mp4" type="video/mp4" />
        </video>
        <div className="ed-hero__grid" aria-hidden="true" style={{ WebkitMaskImage: 'linear-gradient(200deg,#000 0,transparent 60%)', maskImage: 'linear-gradient(200deg,#000 0,transparent 60%)' } as CSSProperties} />
        <div className="ed-hero__inner">
          <span className="ed-kicker" style={{ animation: 'ed-fadeIn .7s ease .05s both' }}>Industries</span>
          <h1 className="ed-serif ed-hero__title">
            <span style={{ animation: 'ed-riseIn .85s cubic-bezier(.2,.8,.2,1) .1s both' }}>Five sectors,</span>
            <span style={{ animation: 'ed-riseIn .85s cubic-bezier(.2,.8,.2,1) .24s both' }}>one engineering <em>method.</em></span>
          </h1>
          <p className="ed-deck" style={{ animation: 'ed-riseIn .9s cubic-bezier(.2,.8,.2,1) .42s both' }}>
            The process changes. The discipline does not: understand the product, constrain the process,
            verify every part, and make the production data legible.
          </p>
          <ul className={styles.sectorLinks} style={{ animation: 'ed-fadeIn 1s ease .6s both' }}>
            {chips.map((c) => <li key={c.slug}><a className="ed-sector-link" href={`#${c.slug}`}>{c.label}</a></li>)}
          </ul>
        </div>
        <div className="ed-hero__rule" aria-hidden="true" />
      </section>

      {/* Marquee */}
      <div className="ed-marquee" aria-hidden="true" style={{ borderBottom: '1px solid var(--line)' }}>
        <div className="ed-marquee__track">
          {[0, 1].map((n) => (
            <span key={n}>
              {chips.map((c) => <span key={c.slug} style={{ display: 'inline-flex', alignItems: 'center', gap: '2.5rem' }}>{c.label}<i className="ed-diamond" /></span>)}
            </span>
          ))}
        </div>
      </div>

      {/* 01 Medical & Pharmaceutical */}
      <section id="medical-pharma" className={styles.sector}>
        <div className={`${styles.sectorWrap} ${styles.medicalGrid}`}>
          <div>
            <div className={styles.medicalHead}>
              <span className={styles.big} style={countUp(0, 'entry 5% cover 25%')}>01</span>
              <span className={styles.tag}>Flagship sector</span>
            </div>
            <h2 className="ed-serif" style={{ maxWidth: '14ch', fontSize: 'clamp(2.2rem,4vw,4.2rem)', lineHeight: .95, ...wipeUp() }}>Medical &amp; Pharmaceutical</h2>
            <p className={styles.leadPara} style={rise(0.08)}>Quality-critical medical products are assembled from small components at high volume, and every unit has to be proven rather than sampled.</p>
            <p className={styles.subPara} style={rise(0.16)}>VEEMAP engineers product-specific automation for medical device and pharmaceutical assembly: feeding, orientation, joining, testing, inspection and traceability designed around one product and its variants.</p>
            <div className={styles.familyList}>
              {medicalFamilies.map((f, i) => <span key={f} style={rise(i * 0.05, 'entry 0% cover 20%')}>{f}</span>)}
            </div>
            <div style={{ marginTop: '2.4rem' }}>{solutionLink('medical-pharma', 'Medical & Pharmaceutical solutions')}</div>
          </div>
          <figure className={styles.mediaTall} style={wipeUp(0, 'entry 0% cover 30%')}>
            <img className="ed-figure__img" src="/images/library/med-et-tube-machine.jpg" alt="VEEMAP assembly machine built around one medical-device family, with guarding, feeders and HMI" loading="lazy" style={{ objectPosition: 'center center' }} />
            <div className="ed-scanline" aria-hidden="true" />
            <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(0,0,0,.55) 0,rgba(0,0,0,0) 40%,rgba(0,0,0,.7) 100%)' }} />
            <figcaption className="ed-figure__cap" style={{ left: '1rem', bottom: '1rem' }}><i className="ed-live-dot" />Device-specific assembly machine</figcaption>
          </figure>
        </div>
      </section>

      {/* 02 Automotive */}
      <section id="automotive" className={styles.sector}>
        <img className={styles.driftBg} src="/images/library/auto-brake-disc-inspection.jpg" alt="" aria-hidden="true" loading="lazy" style={{ top: '-10%', right: '-14%', width: '38%', opacity: .3, filter: 'grayscale(.5) contrast(1.1)', WebkitMaskImage: 'radial-gradient(circle at 50% 50%, #000 34%, transparent 72%)', maskImage: 'radial-gradient(circle at 50% 50%, #000 34%, transparent 72%)', animation: 'ed-driftDown linear both' } as CSSProperties} />
        <div className={`${styles.sectorWrap} ${styles.splitHead}`}>
          <div>
            <span className={styles.big} style={countUp(0, 'entry 5% cover 25%')}>02</span>
            <h2 className="ed-serif" style={{ margin: '1.6rem 0 0', fontSize: 'clamp(2.2rem,3.6vw,3.8rem)', lineHeight: .95, ...wipeUp() }}>Automotive</h2>
            <span className={styles.tag} style={{ marginTop: '1.4rem' }}>Inspection-led</span>
          </div>
          <div>
            <p className={styles.leadPara} style={rise()}>Most of what VEEMAP builds for automotive exists to verify. Dimensional checking, vision inspection, functional test and part identification are designed into the line rather than bolted onto the end of it.</p>
            <div className={styles.cards2}>
              {automotiveCards.map((c, i) => (
                <article key={c.title} className={styles.card} style={rise(i * 0.08, 'entry 0% cover 24%')}>
                  <h3 className={styles.cardTitle}>{c.title}</h3>
                  <p className={styles.cardText}>{c.body}</p>
                </article>
              ))}
            </div>
            <div style={{ marginTop: '2.2rem' }}>{solutionLink('automotive', 'Automotive solutions')}</div>
          </div>
        </div>
      </section>

      {/* 03 EV Solutions */}
      <section id="ev-solutions" className={styles.sector}>
        <img className={styles.driftBg} src="/images/library/ev-hub-motor.jpg" alt="" aria-hidden="true" loading="lazy" style={{ top: '-6%', right: '-8%', width: '32%', opacity: .32, filter: 'grayscale(.4) contrast(1.08)', WebkitMaskImage: 'radial-gradient(circle at 55% 50%, #000 32%, transparent 72%)', maskImage: 'radial-gradient(circle at 55% 50%, #000 32%, transparent 72%)', animation: 'ed-driftUp linear both' } as CSSProperties} />
        <div className={styles.sectorWrap}>
          <div className={styles.splitHead}>
            <div>
              <span className={styles.big} style={countUp(0, 'entry 5% cover 25%')}>03</span>
              <h2 className="ed-serif" style={{ margin: '1.6rem 0 0', fontSize: 'clamp(2.2rem,3.6vw,3.8rem)', lineHeight: .95, ...wipeUp() }}>EV Solutions</h2>
              <span className={styles.tag} style={{ marginTop: '1.4rem' }}>Connected stages</span>
            </div>
            <p className={styles.leadPara} style={rise()}>VEEMAP builds the individual stations of electric vehicle manufacturing and the flow that connects them, from winding through controller and charger build to end-of-line test.</p>
          </div>
          <div className={styles.stages}>
            <div className={styles.stagesFill} aria-hidden="true" />
            <div className="ed-steps" style={{ gap: '1.2rem' }}>
              {evStages.map((s, i) => (
                <div key={s} style={rise(i * 0.08, 'entry 8% cover 28%')}>
                  <span className="ed-step__node" style={{ width: 10, height: 10, marginBottom: '1.5rem' }} aria-hidden="true" />
                  <span className="ed-step__label" style={{ fontSize: '.55rem' }}>Stage {String(i + 1).padStart(2, '0')}</span>
                  <span className="ed-step__text" style={{ fontSize: '1rem' }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginTop: '2.6rem' }}>{solutionLink('ev-solutions', 'EV Solutions')}</div>
        </div>
      </section>

      {/* 04 Electronics */}
      <section id="electronics" className={styles.electronics}>
        <div className={styles.electronicsBody}>
          <span className={styles.big} style={countUp(0, 'entry 5% cover 25%')}>04</span>
          <h2 className="ed-serif" style={{ margin: '1.6rem 0 0', fontSize: 'clamp(2.2rem,3.6vw,3.8rem)', lineHeight: .95, ...wipeUp() }}>Electronics</h2>
          <p className={styles.leadPara} style={{ margin: '2rem 0 0', maxWidth: '50ch', ...rise(0.08) }}>Electronics assembly is judged on repeatability: the same joint, the same placement, the same verified result, every cycle.</p>
          <p className={styles.subPara} style={{ maxWidth: '50ch', ...rise(0.16) }}>VEEMAP builds electronics assembly automation around process precision and verification — controlled joining, controlled tightening, and an electrical or visual check on every unit.</p>
          <div className={styles.chips}>
            {electronicsChips.map((c, i) => <span key={c} className={styles.chip} style={rise(i * 0.06, 'entry 0% cover 22%')}>{c}</span>)}
          </div>
          <div style={{ marginTop: '2.4rem' }}>{solutionLink('electronics', 'Electronics solutions')}</div>
        </div>
        <figure className={styles.electronicsFigure} style={wipeRight(0, 'entry 0% cover 30%')}>
          <img className="ed-figure__img" src="/images/library/elec-robotic-solder.jpg" alt="VEEMAP robotic soldering cell with guarding and process controls" loading="lazy" style={{ objectPosition: 'center center' }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 45%)' }} />
          <figcaption className="ed-figure__cap ed-figure__cap--right"><Cpu aria-hidden="true" style={{ width: 18, color: 'var(--signal)' }} />Robotic soldering cell</figcaption>
        </figure>
      </section>

      {/* 05 Consumer Goods */}
      <section id="consumer-goods" className={styles.sector}>
        <img className={styles.driftBg} src="/images/library/consumer-glue-station.jpg" alt="" aria-hidden="true" loading="lazy" style={{ bottom: '-20%', left: '-10%', width: '40%', opacity: .3, filter: 'grayscale(.35) contrast(1.06)', WebkitMaskImage: 'radial-gradient(circle at 50% 50%, #000 30%, transparent 72%)', maskImage: 'radial-gradient(circle at 50% 50%, #000 30%, transparent 72%)', animation: 'ed-driftUp linear both' } as CSSProperties} />
        <div className={styles.sectorWrap}>
          <div className={styles.splitHead}>
            <div>
              <span className={styles.big} style={countUp(0, 'entry 5% cover 25%')}>05</span>
              <h2 className="ed-serif" style={{ margin: '1.6rem 0 0', fontSize: 'clamp(2.2rem,3.6vw,3.8rem)', lineHeight: .95, ...wipeUp() }}>Consumer Goods</h2>
              <span className={styles.tag} style={{ marginTop: '1.4rem' }}>Rate-led</span>
            </div>
            <p className={styles.leadPara} style={rise()}>VEEMAP builds high-rate consumer goods assembly that holds quality at speed, segregates what is not good in line, and converts to the next product variant without a rebuild.</p>
          </div>
          <div className={styles.rateLedger}>
            {consumerRates.map((r, i) => (
              <div key={r.label} className={styles.rateCell} style={rise(i * 0.1, 'entry 0% cover 26%')}>
                <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '.68rem', letterSpacing: '.07em', textTransform: 'uppercase', color: 'var(--muted)' }}>{r.label}</span>
                <strong className={styles.rateNum} style={countUp(0.1 + i * 0.1, 'entry 0% cover 26%')}>{r.num}<span>{r.suffix}</span></strong>
                <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '.6rem', letterSpacing: '.07em', textTransform: 'uppercase', color: 'var(--faint)' }}>{r.foot}</span>
              </div>
            ))}
          </div>
          <p className={styles.disclaimer}>Machine specifications, not delivered-customer results. No customer attribution and no ranking claim is made on these figures.</p>
          <div style={{ marginTop: '2.4rem' }}>{solutionLink('consumer-goods', 'Consumer Goods solutions')}</div>
        </div>
      </section>

      {/* Across every sector */}
      <section className={`ed-band ${styles.band}`}>
        <div className="ed-wrap">
          <h2 className="ed-serif" style={{ maxWidth: '14ch', color: '#000', fontSize: 'clamp(2.4rem,4.6vw,4.8rem)', ...wipeUp() }}>Across every sector.</h2>
          <div className={styles.bandList}>
            {acrossSector.map((item, i) => <span key={item} style={rise(i * 0.06, 'entry 0% cover 24%')}>{item}</span>)}
          </div>
          <Link className="ed-cta ed-cta--invert" href="/contact" style={{ marginTop: '3rem' }}>
            Start a project<ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </RouteShell>
  );
}
