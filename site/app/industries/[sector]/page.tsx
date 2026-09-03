import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowDown } from 'lucide-react';
import RouteShell from '@/components/site-shell/RouteShell';
import { rise, wipeUp } from '@/components/editorial/anim';
import { getSector, sectorLinks, sectors } from '@/content/sectors';
import ProductionDashboard from '@/components/medical/ProductionDashboard';
import EnquiryForm from '@/components/enquiry/EnquiryForm';
import styles from './sector.module.css';

export const dynamicParams = false;

/**
 * Per-sector imagery. All VEEMAP-owned assets; each sector gets a distinct
 * approach figure and hero backdrop so the shared template does not read as one
 * repeated machine. Falls back to the conceptual chassis for any new slug.
 */
type SectorMedia = { heroVideo: string; hero: string; approach: string; approachAlt: string; approachPos: string };
const sectorMedia: Record<string, SectorMedia> = {
  'medical-pharma': {
    heroVideo: '/video/library/lib-machine-flow.mp4',
    hero: '/images/library/med-dispensing-pump-line.jpg',
    approach: '/images/library/med-et-tube-machine.jpg',
    approachAlt: 'VEEMAP assembly machine built around one medical-device family — guarding, bowl feeders, transfer and HMI',
    approachPos: 'center center',
  },
  automotive: {
    heroVideo: '/video/library/lib-clutch-inspection.mp4',
    hero: '/images/library/auto-brake-disc-inspection.jpg',
    approach: '/images/library/vision-inspection-cell.jpg',
    approachAlt: 'Guarded vision-inspection cell of the type built for automotive components',
    approachPos: 'center center',
  },
  'ev-solutions': {
    heroVideo: '/video/library/lib-delta-robot.mp4',
    hero: '/images/library/ev-hub-motor.jpg',
    approach: '/images/library/ev-hub-motor-line.jpg',
    approachAlt: 'VEEMAP hub-motor assembly line with operator stations and transfer',
    approachPos: 'center center',
  },
  electronics: {
    heroVideo: '/video/library/lib-wire-winding.mp4',
    hero: '/images/library/elec-rfid-machine.jpg',
    approach: '/images/library/elec-robotic-solder.jpg',
    approachAlt: 'VEEMAP robotic soldering cell with guarding and process controls',
    approachPos: 'center center',
  },
  'consumer-goods': {
    heroVideo: '/video/library/lib-oring-assembly.mp4',
    hero: '/images/library/consumer-glue-station.jpg',
    approach: '/images/library/scale-high-speed-line.jpg',
    approachAlt: 'High-speed multi-station assembly line with feeding, transfer and outfeed',
    approachPos: 'center center',
  },
};
const fallbackMedia: SectorMedia = {
  heroVideo: '/video/library/lib-machine-flow.mp4',
  hero: '/images/library/scale-complete-plant.jpg',
  approach: '/images/library/scale-complete-plant.jpg',
  approachAlt: 'Multi-station assembly line with guarding and outfeed conveyor',
  approachPos: 'center center',
};

export function generateStaticParams() {
  return sectors.map((sector) => ({ sector: sector.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sector: string }>;
}): Promise<Metadata> {
  const { sector: slug } = await params;
  const sector = getSector(slug);
  if (!sector) return {};

  return {
    title: `${sector.seo.title} | VEEMAP Technologies`,
    description: sector.seo.description,
    alternates: { canonical: `/industries/${sector.slug}` },
    openGraph: {
      title: `${sector.seo.title} | VEEMAP Technologies`,
      description: sector.seo.description,
      url: `/industries/${sector.slug}`,
      type: 'website',
    },
  };
}

export default async function SectorPage({
  params,
}: {
  params: Promise<{ sector: string }>;
}) {
  const { sector: slug } = await params;
  const sector = getSector(slug);
  if (!sector) notFound();

  const media = sectorMedia[sector.slug] ?? fallbackMedia;

  return (
    <RouteShell>
      {/* Hero */}
      <section className="ed-hero">
        <video className="ed-hero__video" autoPlay muted loop playsInline aria-hidden="true" style={{ opacity: 0.32, filter: 'grayscale(.7) contrast(1.18)' }}>
          <source src={media.heroVideo} type="video/mp4" />
        </video>
        <div className="ed-hero__grid" aria-hidden="true" />
        <img
          src={media.hero} alt="" aria-hidden="true" loading="lazy"
          style={{ position: 'absolute', top: '2%', right: '-12%', width: '52%', zIndex: -1, opacity: .3, filter: 'grayscale(.85) contrast(1.15) brightness(.92)', WebkitMaskImage: 'radial-gradient(ellipse 72% 72% at 62% 42%, #000 26%, transparent 74%)', maskImage: 'radial-gradient(ellipse 72% 72% at 62% 42%, #000 26%, transparent 74%)', animation: 'ed-driftUp linear both', animationTimeline: 'view()', animationRange: 'cover 0% cover 100%' } as CSSProperties}
        />
        <div className="ed-hero__inner">
          <span className="ed-kicker" style={{ animation: 'ed-fadeIn .7s ease .05s both' }}>
            <Link href="/industries" style={{ color: 'var(--signal)' }}>Industries</Link> / {sector.name}
          </span>
          <h1 className="ed-serif ed-hero__title" style={{ maxWidth: '20ch', fontSize: 'clamp(2.8rem,6.4vw,6rem)' }}>
            <span style={{ display: 'block', animation: 'ed-riseIn .85s cubic-bezier(.2,.8,.2,1) .1s both' }}>{sector.name}</span>
          </h1>
          <p className="ed-deck" style={{ animation: 'ed-riseIn .9s cubic-bezier(.2,.8,.2,1) .42s both' }}>{sector.audienceProblem}</p>
          <div className="ed-hero__actions" style={{ animation: 'ed-fadeIn 1s ease .65s both' }}>
            <a className="ed-cta" href="#families">Solution families<ArrowDown aria-hidden="true" /></a>
            <span className="ed-hero__meta">Every part proven, not sampled</span>
          </div>
        </div>
        <div className="ed-hero__rule" aria-hidden="true" />
      </section>

      {/* The approach */}
      <section className={styles.approach}>
        <div className={styles.approachBody}>
          <span className="ed-kicker" style={{ marginBottom: '1.4rem' }}>The approach</span>
          <h2 className="ed-serif" style={{ maxWidth: '13ch', fontSize: 'clamp(2.4rem,4.4vw,4.6rem)', ...wipeUp() }}>Designed around the product.</h2>
          <p className="ed-prose" style={{ margin: '2.2rem 0 0', maxWidth: '52ch', fontSize: '1.15rem', ...rise(0.1) }}>{sector.thesis}</p>
        </div>
        <figure className={`ed-figure ${styles.approachFigure}`} style={{ ...wipeUp(0, 'entry 0% cover 30%') }}>
          <img className="ed-figure__img" src={media.approach} alt={media.approachAlt} loading="lazy" style={{ objectPosition: media.approachPos }} />
          <div className="ed-scanline" aria-hidden="true" />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(260deg,rgba(0,0,0,.55) 0,rgba(0,0,0,0) 45%)' }} />
          <figcaption className="ed-figure__cap"><i className="ed-live-dot" />{sector.name} · production context</figcaption>
        </figure>
      </section>

      {/* Solution families */}
      <section id="families" className={styles.section}>
        <div className={styles.wrap}>
          <h2 className="ed-cond" style={{ marginBottom: '2.5rem', ...wipeUp(0, 'entry 8% cover 26%') }}>Solution families</h2>
          <div className={styles.families}>
            {sector.solutionFamilies.map((family, i) => (
              <article key={family.name} className={styles.familyCard} style={rise(i * 0.06, 'entry 0% cover 24%')}>
                <span className={styles.familyIndex}>{String(i + 1).padStart(2, '0')}</span>
                <h3 className={styles.familyTitle}>{family.name}</h3>
                <p className={styles.familyText}>{family.detail}</p>
              </article>
            ))}
            <article className={`${styles.familyCard} ${styles.familyNote}`} style={rise(sector.solutionFamilies.length * 0.06, 'entry 0% cover 24%')}>
              <span>Each solution is engineered to the product and its variants — not configured from a catalogue.</span>
            </article>
          </div>
        </div>
      </section>

      {/* Process orchestration */}
      <section className={styles.section}>
        <div className={styles.wrap}>
          <h2 className="ed-cond" style={{ marginBottom: '3.5rem', ...wipeUp(0, 'entry 8% cover 26%') }}>Process orchestration</h2>
          <div className="ed-steps">
            <div className="ed-steps__rail" aria-hidden="true" />
            <div className="ed-steps__fill" aria-hidden="true" />
            {sector.processSteps.map((step, i) => (
              <div key={step} style={rise(i * 0.1, 'entry 10% cover 30%')}>
                <span className="ed-step__node" aria-hidden="true" />
                <span className="ed-step__label">Step {String(i + 1).padStart(2, '0')}</span>
                <span className="ed-step__text">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality and data layer */}
      <section className={styles.quality}>
        <img className={styles.qualityBg} src="/images/library/vision-inspection-cell.jpg" alt="" aria-hidden="true" loading="lazy" style={{ filter: 'grayscale(.7) contrast(1.12) brightness(.92)', WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 55% 50%, #000 22%, transparent 72%)', maskImage: 'radial-gradient(ellipse 70% 70% at 55% 50%, #000 22%, transparent 72%)' }} />
        <div className={styles.qualityGrid}>
          <div>
            <span className="ed-kicker" style={{ marginBottom: '1.4rem' }}>Quality and data layer</span>
            <h2 className="ed-serif" style={{ maxWidth: '12ch', fontSize: 'clamp(2.2rem,4vw,4.2rem)', ...wipeUp() }}>Proven at the station.</h2>
          </div>
          <div className={styles.qualityList}>
            {sector.qualityCapabilities.map((item, i) => (
              <span key={item} className={styles.qualityRow} style={rise(i * 0.06, 'entry 0% cover 22%')}>
                <i className={styles.qualityNum}>{String(i + 1).padStart(2, '0')}</i>
                <span className={styles.qualityText}>{item}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Flexible production */}
      {sector.flexibleProduction && (
        <section className={`ed-band ${styles.flex}`}>
          <div className={styles.flexGrid}>
            <h2 className="ed-serif" style={{ maxWidth: '10ch', color: '#000', fontSize: 'clamp(2.4rem,4.8vw,5rem)', ...wipeUp() }}>Flexible production.</h2>
            <div className={styles.flexList}>
              {sector.flexibleProduction.map((item, i) => (
                <span key={item} style={rise(i * 0.07, 'entry 0% cover 22%')}>{item}</span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What the line reports */}
      {sector.showDashboard && (
        <section className={styles.reports}>
          <img className={styles.reportsBg} src="/images/library/hmi-dashboard.jpg" alt="" aria-hidden="true" loading="lazy" style={{ filter: 'contrast(1.05) brightness(.9)', WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 45%, #000 24%, transparent 74%)', maskImage: 'radial-gradient(ellipse 70% 70% at 50% 45%, #000 24%, transparent 74%)' }} />
          <div className={styles.wrap}>
            <div className={styles.reportsHead}>
              <h2 className="ed-serif" style={{ maxWidth: '12ch', fontSize: 'clamp(2.2rem,4vw,4.2rem)', ...wipeUp() }}>What the line reports.</h2>
              <p style={rise(0.1)}>
                A machine that assembles a quality-critical device should be able to say what it is doing.
                Production state, counts, inspection results and station health are collected at the machine
                and presented in a VEEMAP-built dashboard rather than left on a controller screen.
              </p>
            </div>
            <ProductionDashboard />
          </div>
        </section>
      )}

      {/* Start a project */}
      <section className={styles.start}>
        <div className={styles.startGrid}>
          <div>
            <h2 className="ed-serif" style={{ maxWidth: '10ch', fontSize: 'clamp(2.6rem,5vw,5.2rem)', ...wipeUp() }}>Start a project.</h2>
            <p className="ed-prose" style={{ margin: '2rem 0 0', maxWidth: '48ch', fontSize: '1.15rem', ...rise(0.1) }}>{sector.enquiryPrompt}</p>
            <div className={styles.startMeta}>
              <span>Plot No. 35, Sector 5, IMT Manesar</span>
              <a href="mailto:info@veemap.co.in">info@veemap.co.in</a>
              <a href="tel:+919266374969">+91 9266374969</a>
            </div>
            {!sector.enquiryInline && (
              <Link className="ed-cta" href="/contact" style={{ marginTop: '2.4rem' }}>Prepare an enquiry<ArrowDown aria-hidden="true" style={{ transform: 'rotate(-90deg)' }} /></Link>
            )}
          </div>
          {sector.enquiryInline && (
            <EnquiryForm defaultSector={sector.name} context={`${sector.name} automation`} />
          )}
        </div>
      </section>

      {/* Other sectors */}
      <section className={styles.section} style={{ borderBottom: 0 }}>
        <div className={styles.wrap}>
          <h2 className="ed-cond" style={{ marginBottom: '2rem', fontSize: 'clamp(1.4rem,2.6vw,2.1rem)' }}>Other sectors</h2>
          <ul className={styles.otherSectors}>
            {sectorLinks
              .filter((link) => link.href !== `/industries/${sector.slug}`)
              .map((link) => <li key={link.href}><Link className="ed-sector-link" href={link.href}>{link.label}</Link></li>)}
          </ul>
        </div>
      </section>
    </RouteShell>
  );
}
