import type { Metadata } from 'next';
import Link from 'next/link';
import RouteShell from '@/components/site-shell/RouteShell';
import styles from '@/components/site-shell/route.module.css';

export const metadata: Metadata = {
  title: 'Company | VEEMAP Technologies',
  description:
    'VEEMAP Technologies is an industrial automation and special-purpose machine company engineering from IMT Manesar since 2017.',
  alternates: { canonical: '/company' },
};

export default function CompanyPage() {
  return (
    <RouteShell>
      <div className={styles.page}>
        <header className={styles.lede}>
          <span className={styles.kicker}>Company</span>
          <h1 className={styles.title}>Engineering from Manesar since 2017.</h1>
          <p className={styles.deck}>
            VEEMAP Technologies designs, manufactures, assembles, tests and commissions
            special-purpose machines and complete production systems from its engineering base in
            IMT Manesar, Gurugram.
          </p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionHead}>Indigenous engineering</h2>
          <div className={styles.prose}>
            <p>
              Mechanisms, controls and inspection are developed in-house rather than specified from
              a catalogue. That is what makes a machine built around one product possible, and it
              is why the work stays in India rather than being imported as a finished system.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHead}>We believe YES and NO equally</h2>
          <div className={styles.prose}>
            <p>
              A requirement that automation cannot serve well is worth saying so about. Committing
              to a machine that will not hold its rate, its quality or its changeover helps nobody,
              so the answer to a brief is sometimes a different scope than the one that was asked
              for — and sometimes it is no.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHead}>Scope of work</h2>
          <ul className={styles.list}>
            <li>Research and development</li>
            <li>Mechanical and electrical engineering</li>
            <li>Manufacturing</li>
            <li>Assembly and integration</li>
            <li>Production trials and commissioning</li>
            <li>After-sales support</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHead}>How the capability grew</h2>
          <div className={styles.prose}>
            <p>
              The sequence below describes capability rather than commercial milestones. It
              names no customer and no project.
            </p>
          </div>
          <ul className={styles.list}>
            <li><strong>2017</strong> — founded in IMT Manesar, building single-station special-purpose machines</li>
            <li><strong>From 2018</strong> — vision and sensing brought in-house through the Keyence relationship</li>
            <li><strong>Scaling up</strong> — from stations to indexed and continuous-motion lines integrating assembly, test and inspection</li>
            <li><strong>Scaling out</strong> — multi-station lines and complete plants, with material flow designed as part of the system</li>
            <li><strong>Connected production</strong> — controls, data collection and dashboards added where the requirement justifies them</li>
            <li><strong>Now</strong> — 236 projects delivered for 55 clients across five manufacturing sectors</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHead}>Proof</h2>
          <ul className={styles.list}>
            <li>236 projects delivered</li>
            <li>55 clients across India and overseas</li>
            <li>Five manufacturing sectors</li>
            <li>Established 2017</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHead}>Technology partnership</h2>
          <div className={styles.prose}>
            <p>
              VEEMAP has worked with Keyence since 2018 on vision and sensing technology, alongside
              training programmes with the controls platforms the sector uses.
            </p>
          </div>
          <p className={styles.note}>
            Final partnership wording and an approved Keyence logo asset are outstanding owner
            inputs. No partner logo is displayed until that asset is supplied.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHead}>Contact</h2>
          <div className={styles.prose}>
            <p>
              Plot No. 35, Sector 5, IMT Manesar, Gurugram, Haryana, India — 122050
            </p>
            <p>
              <a href="mailto:info@veemap.co.in">info@veemap.co.in</a> ·{' '}
              <a href="tel:+919266374969">+91 9266374969</a>
            </p>
            <p><Link href="/contact">Prepare an enquiry</Link></p>
          </div>
        </section>
      </div>
    </RouteShell>
  );
}
