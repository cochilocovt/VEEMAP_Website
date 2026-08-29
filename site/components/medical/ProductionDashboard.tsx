import styles from './ProductionDashboard.module.css';

/**
 * Illustrative production dashboard.
 *
 * Plan section 10 classifies every visualised value as approved-actual,
 * normalised, or illustrative. Nothing here is derived from a real HMI: no
 * approved field values have been supplied, so every number is authored
 * demonstration data and the panel says so where a visitor could mistake it
 * for delivered performance.
 *
 * Rebuilt from first principles rather than tracing a source layout. Station
 * labels are generic. There are no interactive controls, because a public page
 * must not imply it can operate machinery.
 */

const stations = [
  { id: 'ST-01', name: 'Feed', health: 0.92 },
  { id: 'ST-02', name: 'Orient', health: 0.86 },
  { id: 'ST-03', name: 'Assemble', health: 0.97 },
  { id: 'ST-04', name: 'Join', health: 0.78 },
  { id: 'ST-05', name: 'Test', health: 0.9 },
  { id: 'ST-06', name: 'Inspect', health: 0.95 },
];

// Authored trend, not a recorded one. 12 points across a nominal shift.
const trend = [38, 44, 41, 52, 58, 55, 63, 67, 64, 71, 69, 74];

function trendPath(points: number[], width: number, height: number) {
  const max = Math.max(...points);
  const min = Math.min(...points);
  const span = max - min || 1;
  return points
    .map((point, index) => {
      const x = (index / (points.length - 1)) * width;
      const y = height - ((point - min) / span) * height;
      return `${index === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(' ');
}

export default function ProductionDashboard() {
  return (
    <div>
      <div className={styles.panel}>
        <div className={styles.cell}>
          <p className={styles.label}>Line state</p>
          <p className={styles.state}>
            <span className={styles.dot} aria-hidden="true" />
            Running
          </p>
          <p className={styles.unit}>Nominal cycle</p>
        </div>

        <div className={styles.cell}>
          <p className={styles.label}>Good count</p>
          <p className={styles.value}>18,420</p>
          <p className={styles.unit}>Units this shift</p>
        </div>

        <div className={styles.cell}>
          <p className={styles.label}>Rejects segregated</p>
          <p className={`${styles.value} ${styles.reject}`}>212</p>
          <p className={styles.unit}>Removed in line</p>
        </div>

        <div className={styles.cell}>
          <p className={styles.label}>Inspection result</p>
          <p className={styles.value}>98.9</p>
          <p className={styles.unit}>Per cent passing first time</p>
        </div>

        <div className={`${styles.cell} ${styles.cellWide}`}>
          <p className={styles.label}>Output trend across the shift</p>
          <svg
            className={styles.trend}
            viewBox="0 0 600 90"
            preserveAspectRatio="none"
            role="img"
            aria-label="Illustrative output trend rising across a shift, from roughly 38 to 74 units per interval."
          >
            <line className={styles.trendBase} x1="0" y1="89" x2="600" y2="89" />
            <path className={styles.trendLine} d={trendPath(trend, 600, 84)} />
          </svg>
        </div>

        <div className={`${styles.cell} ${styles.cellWide}`}>
          <p className={styles.label}>Station health</p>
          <div className={styles.stations}>
            {stations.map((station, index) => (
              <div key={station.id} className={styles.station}>
                <span
                  className={styles.stationFill}
                  style={{
                    height: `${Math.round(station.health * 100)}%`,
                    animationDelay: `${index * 90}ms`,
                  }}
                />
              </div>
            ))}
          </div>
          <p className={styles.stationLabels}>
            {stations.map((station) => <span key={station.id}>{station.name}</span>)}
          </p>
        </div>
      </div>

      <p className={styles.caption}>
        Illustrative data. These values are authored to show what a VEEMAP production
        dashboard reports — line state, good and reject counts, first-time inspection pass
        rate, output trend and per-station health. They are not measurements from a delivered
        system and are not a performance claim. A dashboard built for a real line reports the
        same categories against that line&rsquo;s own data, under the plant&rsquo;s firewall
        policy.
      </p>
    </div>
  );
}
