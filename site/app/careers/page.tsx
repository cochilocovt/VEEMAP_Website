import type { Metadata } from 'next';
import RouteShell from '@/components/site-shell/RouteShell';
import styles from '@/components/site-shell/route.module.css';

export const metadata: Metadata = {
  title: 'Careers | VEEMAP Technologies',
  description:
    'Mechanical, electrical, controls, robotics and assembly engineering on special-purpose machines that have not been built before.',
  alternates: { canonical: '/careers' },
};

const disciplines = [
  'Mechanical design',
  'Electrical engineering',
  'Controls and PLC programming',
  'Robotics and motion',
  'Manufacturing',
  'Assembly and commissioning',
];

export default function CareersPage() {
  return (
    <RouteShell>
      <div className={styles.page}>
        <header className={styles.lede}>
          <span className={styles.kicker}>Careers</span>
          <h1 className={styles.title}>Every project is a machine that did not exist before.</h1>
          <p className={styles.deck}>
            VEEMAP builds special-purpose machines, which means there is no product line to
            maintain and no two projects that repeat.
          </p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionHead}>The work</h2>
          <div className={styles.prose}>
            <p>
              Mechanical design, electrical engineering, controls, robotics, manufacturing and
              assembly sit close enough together that engineers see a machine from requirement to
              commissioning rather than owning one slice of it.
            </p>
          </div>
          <ul className={styles.list}>
            {disciplines.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHead}>Training is part of the work</h2>
          <div className={styles.prose}>
            <p>
              In-house training runs alongside manufacturer programmes covering PLC programming and
              3D design. Engineers work with the controls and vision platforms the sector actually
              uses, including Keyence, Mitsubishi and Omron.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHead}>Applying</h2>
          <div className={styles.prose}>
            <p>
              Send a short note describing the engineering work you want to do and your current
              role. Please do not attach anything confidential to a first email.
            </p>
            <p>
              <a href="mailto:info@veemap.co.in?subject=Careers%20at%20VEEMAP">
                Email VEEMAP about engineering roles
              </a>
            </p>
          </div>
          <p className={styles.note}>
            No specific vacancies are listed. This is an expression-of-interest route until current
            roles and a careers application destination are supplied.
          </p>
        </section>
      </div>
    </RouteShell>
  );
}
