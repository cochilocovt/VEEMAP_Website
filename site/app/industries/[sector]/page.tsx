import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import RouteShell from '@/components/site-shell/RouteShell';
import styles from '@/components/site-shell/route.module.css';
import { getSector, sectorLinks, sectors } from '@/content/sectors';

export const dynamicParams = false;

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

  return (
    <RouteShell>
      <div className={styles.page}>
        <header className={styles.lede}>
          <span className={styles.kicker}>Industries / {sector.name}</span>
          <h1 className={styles.title}>{sector.name}</h1>
          <p className={styles.deck}>{sector.audienceProblem}</p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionHead}>The approach</h2>
          <div className={styles.prose}>
            <p>{sector.thesis}</p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHead}>Solution families</h2>
          <div className={styles.grid}>
            {sector.solutionFamilies.map((family) => (
              <article key={family.name} className={styles.card}>
                <h3 className={styles.cardTitle}>{family.name}</h3>
                <p className={styles.cardBody}>{family.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHead}>Process orchestration</h2>
          <ul className={styles.list}>
            {sector.processSteps.map((step) => <li key={step}>{step}</li>)}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHead}>Quality and data layer</h2>
          <ul className={styles.list}>
            {sector.qualityCapabilities.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHead}>Start a project</h2>
          <div className={styles.prose}>
            <p>{sector.enquiryPrompt}</p>
            <p><Link href="/contact">Prepare an enquiry</Link></p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHead}>Other sectors</h2>
          <ul className={styles.sectorNav}>
            {sectorLinks
              .filter((link) => link.href !== `/industries/${sector.slug}`)
              .map((link) => <li key={link.href}><Link href={link.href}>{link.label}</Link></li>)}
          </ul>
        </section>
      </div>
    </RouteShell>
  );
}
