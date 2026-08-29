import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { sectors } from '@/content/sectors';
import styles from './home.module.css';

/**
 * Homepage sections below the Hero (plan 7.1). Each one points onward to the
 * route that owns the subject; none of them restates inner-page copy, which
 * Section 7.1 prohibits.
 */

const [medical, ...otherSectors] = sectors;

export function MedicalLeadFeature() {
  return (
    <section className={styles.section}>
      <div className={styles.lead}>
        <div>
          <span className={styles.kicker}>Priority sector</span>
          <h2 className={styles.leadTitle}>
            Quality-critical assembly,<br />proven part by part.
          </h2>
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

export function SectorIndex() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Five sectors, one engineering method</h2>
      <div className={styles.sectorGrid}>
        <Link className={`${styles.sectorCard} ${styles.sectorLead}`} href={`/industries/${medical.slug}`}>
          <span className={styles.sectorIndex}>01 / PRIORITY</span>
          <h3 className={styles.sectorName}>{medical.name}</h3>
          <p className={styles.sectorBody}>{medical.audienceProblem}</p>
        </Link>
        {otherSectors.map((sector, index) => (
          <Link key={sector.slug} className={styles.sectorCard} href={`/industries/${sector.slug}`}>
            <span className={styles.sectorIndex}>0{index + 2}</span>
            <h3 className={styles.sectorName}>{sector.name}</h3>
            <p className={styles.sectorBody}>{sector.audienceProblem}</p>
          </Link>
        ))}
      </div>
    </section>
  );
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
