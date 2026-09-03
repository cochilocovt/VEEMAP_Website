import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { sectors } from '@/content/sectors';
import { SectorOrbit } from './SectorOrbit';
import styles from './home.module.css';

/**
 * Homepage sections below the Hero (plan 7.1). Each one points onward to the
 * route that owns the subject; none of them restates inner-page copy, which
 * Section 7.1 prohibits.
 */

const [medical] = sectors;

export function MedicalLeadFeature() {
  return (
    <section className={styles.section}>
      <div className={styles.lead}>
        <div>
          <span className={styles.kicker}>Priority sector</span>
          <h2 className={styles.leadTitle}>
            Quality-critical assembly,<br />proven part by part.
          </h2>
          <figure className={styles.leadFigure}>
            <img src="/images/library/med-dispensing-pump-line.jpg" alt="VEEMAP dispensing-pump assembly line — multi-station feeding, joining, testing and transfer" loading="lazy" />
            <span className={styles.leadScrim} aria-hidden="true" />
            <figcaption className={styles.leadFigureCap}><i className={styles.leadDot} aria-hidden="true" />Dispensing-pump assembly line</figcaption>
          </figure>
        </div>
        <div>
          <p className={styles.leadBody}>
            Medical devices are assembled from small components at volume, and every unit has to
            be proven rather than sampled. It is the sector where feeding, joining, testing,
            inspection and traceability have to work as one machine — and the sector VEEMAP
            builds for first.
          </p>
          <ul className={styles.leadList}>
            {medical.solutionFamilies.slice(0, 6).map((family) => (
              <li key={family.name}>{family.name}</li>
            ))}
          </ul>
          <Link className="primary-action" href={`/industries/${medical.slug}`}>
            {medical.name} solutions <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/** Five-sector index (plan 7.1 item 4): the orbit of sector names with the detail card. */
export function SectorIndex() {
  return <SectorOrbit />;
}

const deliverySteps = [
  'Understand the requirement',
  'Design',
  'Manufacture',
  'Assemble and integrate',
  'Trial and production test',
  'Commission and support',
];

export function DeliverySequence() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>From requirement to running line</h2>
      <div className={styles.sequence}>
        {deliverySteps.map((step) => (
          <div key={step} className={styles.step}>
            <span className={styles.stepNumber}>Stage</span>
            <h3 className={styles.stepName}>{step}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
