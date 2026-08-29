import type { Metadata } from 'next';
import Link from 'next/link';
import RouteShell from '@/components/site-shell/RouteShell';
import styles from '@/components/site-shell/route.module.css';
import { sectors } from '@/content/sectors';

export const metadata: Metadata = {
  title: 'Industries | VEEMAP Technologies',
  description:
    'Automation solutions across medical and pharmaceutical, automotive, EV, electronics and consumer goods manufacturing.',
  alternates: { canonical: '/industries' },
};

const [lead, ...rest] = sectors;

export default function IndustriesPage() {
  return (
    <RouteShell>
      <div className={styles.page}>
        <header className={styles.lede}>
          <span className={styles.kicker}>Industries</span>
          <h1 className={styles.title}>Five sectors,<br />one engineering method.</h1>
          <p className={styles.deck}>
            The process changes. The discipline does not: understand the product, constrain the
            process, verify every part, and make the production data legible.
          </p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionHead}>{lead.name}</h2>
          <div className={styles.prose}>
            <p>{lead.audienceProblem}</p>
            <p>{lead.thesis}</p>
            <p><Link href={`/industries/${lead.slug}`}>{lead.name} solutions</Link></p>
          </div>
          <ul className={styles.list}>
            {lead.solutionFamilies.map((family) => <li key={family.name}>{family.name}</li>)}
          </ul>
        </section>

        {rest.map((sector) => (
          <section key={sector.slug} className={styles.section}>
            <h2 className={styles.sectionHead}>{sector.name}</h2>
            <div className={styles.prose}>
              <p>{sector.thesis}</p>
              <p><Link href={`/industries/${sector.slug}`}>{sector.name} solutions</Link></p>
            </div>
            <ul className={styles.list}>
              {sector.solutionFamilies.map((family) => <li key={family.name}>{family.name}</li>)}
            </ul>
          </section>
        ))}

        <section className={styles.section}>
          <h2 className={styles.sectionHead}>Across every sector</h2>
          <ul className={styles.list}>
            <li>Assembly and joining</li>
            <li>Functional and leak testing</li>
            <li>Vision and dimensional inspection</li>
            <li>Traceability tied to the part</li>
            <li>Material handling and flow</li>
            <li>Production data and dashboards</li>
          </ul>
        </section>
      </div>
    </RouteShell>
  );
}
