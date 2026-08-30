import type { Metadata } from 'next';
import Link from 'next/link';
import RouteShell from '@/components/site-shell/RouteShell';
import styles from '@/components/site-shell/route.module.css';
import { sectorLinks } from '@/content/sectors';

export const metadata: Metadata = {
  title: 'Page not found | VEEMAP Technologies',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <RouteShell>
      <div className={styles.page}>
        <header className={styles.lede}>
          <span className={styles.kicker}>404</span>
          <h1 className={styles.title}>That page is not here.</h1>
          <p className={styles.deck}>
            The address may have changed. Everything on the site is reachable from the routes
            below.
          </p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionHead}>Go to</h2>
          <ul className={styles.sectorNav}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/capabilities">Capabilities</Link></li>
            <li><Link href="/industries">Industries</Link></li>
            <li><Link href="/company">Company</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/contact">Start a project</Link></li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHead}>Sectors</h2>
          <ul className={styles.sectorNav}>
            {sectorLinks.map((link) => <li key={link.href}><Link href={link.href}>{link.label}</Link></li>)}
          </ul>
        </section>
      </div>
    </RouteShell>
  );
}
