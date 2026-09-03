import type { Metadata } from 'next';
import { ArrowDown } from 'lucide-react';
import RouteShell from '@/components/site-shell/RouteShell';
import { rise, wipeUp } from '@/components/editorial/anim';
import EnquiryForm from '@/components/enquiry/EnquiryForm';
import styles from './contact.module.css';

export const metadata: Metadata = {
  title: 'Start a project | VEEMAP Technologies',
  description:
    'Describe the product, the process constraint and what has to be verified. Submitting prepares an email in your own mail application — nothing is uploaded.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <RouteShell>
      {/* Hero */}
      <section className="ed-hero">
        <video className="ed-hero__video" autoPlay muted loop playsInline aria-hidden="true" style={{ opacity: 0.3 }}>
          <source src="/video/library/lib-hmi-analytics.mp4" type="video/mp4" />
        </video>
        <div className="ed-hero__grid" aria-hidden="true" />
        <div className="ed-hero__inner">
          <span className="ed-kicker" style={{ animation: 'ed-fadeIn .7s ease .05s both' }}>Start a project</span>
          <h1 className="ed-serif ed-hero__title" style={{ maxWidth: '18ch' }}>
            <span style={{ display: 'block', animation: 'ed-riseIn .85s cubic-bezier(.2,.8,.2,1) .1s both' }}>Tell us what the</span>
            <span style={{ display: 'block', animation: 'ed-riseIn .85s cubic-bezier(.2,.8,.2,1) .24s both' }}>machine has to <em>do.</em></span>
          </h1>
          <p className="ed-deck" style={{ animation: 'ed-riseIn .9s cubic-bezier(.2,.8,.2,1) .42s both' }}>
            The most useful first message describes the part, the process step that is constraining you,
            and what has to be verified before a part moves on. Rate, variant count and current method
            help; drawings are not needed yet.
          </p>
          <div className="ed-hero__actions" style={{ animation: 'ed-fadeIn 1s ease .65s both' }}>
            <a className="ed-cta" href="#enquiry">Prepare an enquiry<ArrowDown aria-hidden="true" /></a>
            <span className="ed-hero__meta">Client-side mailto · no upload</span>
          </div>
        </div>
        <div className="ed-hero__rule" aria-hidden="true" />
      </section>

      {/* Direct contact + enquiry */}
      <section id="enquiry" className={styles.section}>
        <img className={styles.bg} src="/images/library/hmi-dashboard.jpg" alt="" aria-hidden="true" loading="lazy" style={{ WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 45%, #000 24%, transparent 74%)', maskImage: 'radial-gradient(ellipse 70% 70% at 50% 45%, #000 24%, transparent 74%)' }} />
        <div className={styles.grid}>
          <div>
            <span className="ed-kicker" style={{ marginBottom: '1.4rem' }}>Direct contact</span>
            <h2 className="ed-serif" style={{ maxWidth: '11ch', fontSize: 'clamp(2.2rem,4vw,4.2rem)', ...wipeUp() }}>Manesar, India.</h2>
            <div className={styles.contactMeta}>
              <span>Plot No. 35, Sector 5, IMT Manesar</span>
              <span>Gurugram, Haryana, India — 122050</span>
              <a href="mailto:info@veemap.co.in">info@veemap.co.in</a>
              <a href="tel:+919266374969">+91 9266374969</a>
            </div>
            <figure className={styles.figure} style={rise(0.1, 'entry 0% cover 30%')}>
              <img className="ed-figure__img" src="/images/facility.jpg" alt="VEEMAP Technologies engineering base in IMT Manesar, Gurugram" loading="lazy" style={{ objectPosition: 'center 45%', filter: 'grayscale(.5) contrast(1.06)' }} />
              <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(0,0,0,0) 40%,rgba(0,0,0,.7) 100%)' }} />
              <figcaption className={styles.figureCap}><i className="ed-live-dot" />Engineering base · IMT Manesar</figcaption>
            </figure>
          </div>
          <div>
            <p className={styles.note}>
              Submitting opens your own email application with the details below already written out.
              Nothing is uploaded and no files are collected, so please do not send confidential
              drawings or sensitive process files at this stage.
            </p>
            <EnquiryForm />
          </div>
        </div>
      </section>
    </RouteShell>
  );
}
