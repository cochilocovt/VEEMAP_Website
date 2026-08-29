import type { Metadata } from 'next';
import Link from 'next/link';
import RouteShell from '@/components/site-shell/RouteShell';
import styles from '@/components/site-shell/route.module.css';
import { sectorLinks } from '@/content/sectors';

export const metadata: Metadata = {
  title: 'Capabilities | VEEMAP Technologies',
  description:
    'Custom automation designed around the product and process: semi-automatic platforms, fully automatic lines and complete plants, with controls, inspection and production data.',
  alternates: { canonical: '/capabilities' },
};

const systemScale = [
  {
    title: 'Semi-automatic platforms',
    body: 'Targeted industrialisation with operator access and controlled process steps. The lowest initial investment that still holds final quality.',
    meta: 'One process / one station',
  },
  {
    title: 'Fully automatic lines',
    body: 'Indexed or continuous motion, integrating assembly, testing, inspection and material movement into one controlled sequence.',
    meta: 'Multiple processes / one line',
  },
  {
    title: 'Complete plants',
    body: 'Machines, conveyors, quality systems, controls and connected data designed together as one manufacturing environment.',
    meta: 'Production system / plant scale',
  },
];

const disciplines = [
  'Mechanical design and mechanism development',
  'Electrical engineering and panel build',
  'Controls and PLC programming',
  'Robotics and motion',
  'Machine vision and inspection',
  'Production data and dashboards',
];

const lifecycle = [
  'Understand the requirement',
  'Design',
  'Manufacture',
  'Assemble and integrate',
  'Trial and production test',
  'Commission and support',
];

export default function CapabilitiesPage() {
  return (
    <RouteShell>
      <div className={styles.page}>
        <header className={styles.lede}>
          <span className={styles.kicker}>Capabilities</span>
          <h1 className={styles.title}>Automation designed around the process, not the catalogue.</h1>
          <p className={styles.deck}>
            Custom machines are specified backwards from the part: what it is made of, how it must
            be joined, what has to be proven before it moves on, and how many the line has to
            produce.
          </p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionHead}>One process, one line, or the whole plant</h2>
          <div className={styles.prose}>
            <p>
              The right level of automation is a commercial decision before it is an engineering
              one. VEEMAP builds at all three scales and will say which one a requirement actually
              needs.
            </p>
          </div>
          <div className={styles.grid}>
            {systemScale.map((item) => (
              <article key={item.title} className={styles.card}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardBody}>{item.body}</p>
                <p className={styles.cardBody}><strong>{item.meta}</strong></p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHead}>Engineering disciplines</h2>
          <ul className={styles.list}>
            {disciplines.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHead}>Delivery lifecycle</h2>
          <ul className={styles.list}>
            {lifecycle.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHead}>High-speed and flexible automation</h2>
          <div className={styles.prose}>
            <p>
              Rate and flexibility pull against each other, and which one wins is a design
              decision taken early rather than a setting adjusted later. A line built for one
              product at maximum rate will not change over quickly; a line built to run six
              variants will not match the rate of the dedicated one.
            </p>
            <p>
              VEEMAP designs for the point on that curve the requirement actually needs, using
              indexed or continuous motion, multi-track architectures where the part count
              demands it, tooling that changes as a set, and parameters held as recipes in the
              controller rather than set by hand at the machine.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHead}>Quality and inspection</h2>
          <div className={styles.prose}>
            <p>
              Verification is designed into the sequence rather than added at the end of it:
              dimensional checking, machine vision, leak and functional testing, controlled reject
              handling, and traceability tied to the part rather than to the batch.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHead}>The line should be able to explain itself</h2>
          <div className={styles.prose}>
            <p>
              Production data is integrated where the requirement justifies it, not by default.
              Machine data is collected locally, retained under the plant&rsquo;s own firewall
              policy, and made available to cloud analytics where scale or multi-site reporting
              calls for it.
            </p>
            <p>
              Dashboards are built to the use case rather than to a template: production state,
              output trend, good and reject counts, inspection results, station health and alarm
              categories. Operators read them locally at the HMI; engineering and management read
              the same data through SCADA and dashboard platforms including Zenon and WinCC.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHead}>Sectors</h2>
          <ul className={styles.sectorNav}>
            {sectorLinks.map((link) => <li key={link.href}><Link href={link.href}>{link.label}</Link></li>)}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHead}>Start a project</h2>
          <div className={styles.prose}>
            <p>
              The most useful first message describes the product, the process step that is
              constraining you, what has to be verified before a part moves on, how many variants
              you run, and the production context you are targeting.
            </p>
            <p><Link href="/contact">Prepare an enquiry</Link></p>
          </div>
        </section>
      </div>
    </RouteShell>
  );
}
