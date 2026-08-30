import type { Metadata } from 'next';
import RouteShell from '@/components/site-shell/RouteShell';
import styles from '@/components/site-shell/route.module.css';
import EnquiryForm from '@/components/enquiry/EnquiryForm';

export const metadata: Metadata = {
  title: 'Start a project | VEEMAP Technologies',
  description:
    'Describe the product, the process constraint and what has to be verified. Submitting prepares an email in your own mail application — nothing is uploaded.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <RouteShell>
      <div className={styles.page}>
        <header className={styles.lede}>
          <span className={styles.kicker}>Start a project</span>
          <h1 className={styles.title}>Tell us what the machine has to do.</h1>
          <p className={styles.deck}>
            The most useful first message describes the part, the process step that is constraining
            you, and what has to be verified before a part moves on. Rate, variant count and
            current method help; drawings are not needed yet.
          </p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionHead}>Direct contact</h2>
          <div className={styles.prose}>
            <p>Plot No. 35, Sector 5, IMT Manesar, Gurugram, Haryana, India — 122050</p>
            <p>
              <a href="mailto:info@veemap.co.in">info@veemap.co.in</a> ·{' '}
              <a href="tel:+919266374969">+91 9266374969</a>
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHead}>Prepare an enquiry</h2>
          <div className={styles.prose}>
            <p>
              Submitting opens your own email application with the details below already written
              out. Nothing is uploaded and no files are collected, so please do not send
              confidential drawings or sensitive process files at this stage.
            </p>
          </div>
          <EnquiryForm />
        </section>
      </div>
    </RouteShell>
  );
}
