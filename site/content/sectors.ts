/**
 * Sector content model. Field list from WEBSITE_IMPLEMENTATION_PLAN.md
 * section 11. This module is the single source of truth for the sector routes:
 * `generateStaticParams` derives the five slugs from it, so adding a sector
 * here adds its route.
 *
 * `sourceNotes` never renders. It records where a claim came from so the
 * section 4 review can be run against the content rather than against memory.
 *
 * Copy rules: solutions VEEMAP can build, never machines delivered to a named
 * customer. No customer identity anywhere. Controls vendors may be named.
 */

export type SolutionFamily = {
  name: string;
  detail: string;
};

export type Sector = {
  slug: string;
  name: string;
  navLabel: string;
  order: number;
  audienceProblem: string;
  thesis: string;
  /** Two to three lines for the homepage sector orbit: what VEEMAP builds for the sector. */
  homeSummary: string;
  solutionFamilies: SolutionFamily[];
  processSteps: string[];
  qualityCapabilities: string[];
  enquiryPrompt: string;
  seo: { title: string; description: string };
  sourceNotes: string[];
  /**
   * Flagship-only sections. Medical & Pharmaceutical is the reference
   * implementation (plan 2.2), so it carries the fuller section 7.4 structure;
   * the other four render the shared set until their own phase.
   */
  flexibleProduction?: string[];
  showDashboard?: boolean;
  enquiryInline?: boolean;
};

export const sectors: Sector[] = [
  {
    slug: 'medical-pharma',
    name: 'Medical & Pharmaceutical',
    navLabel: 'Medical & Pharmaceutical',
    order: 1,
    audienceProblem:
      'Quality-critical medical products are assembled from small components at high volume, and every unit has to be proven rather than sampled.',
    thesis:
      'VEEMAP engineers product-specific automation for medical device and pharmaceutical assembly: feeding, orientation, joining, testing, inspection and traceability designed around one product and its variants.',
    homeSummary:
      'Assembly machines for endotracheal tubes, IV drip chambers, spine needles, insulin pens and valves, with leak testing, vision inspection and traceability built in.',
    solutionFamilies: [
      { name: 'Endotracheal tube assembly', detail: 'Multi-component assembly with in-line verification.' },
      { name: 'IV drip chamber assembly', detail: 'Component feeding, joining and leak verification.' },
      { name: 'Spine-needle assembly', detail: 'Precision handling and assembly of fine components.' },
      { name: 'Insulin-pen assembly', detail: 'Multi-part device assembly with functional test.' },
      { name: '3-way and 2-way valve assembly', detail: 'Orientation-critical assembly with flow verification.' },
      { name: 'Pilot-check-valve assembly', detail: 'Small-component assembly with functional checking.' },
      { name: 'SWDT and related device assembly', detail: 'Device assembly where the product terminology is supported by the source record.' },
    ],
    processSteps: [
      'Component feeding and orientation',
      'Assembly and joining',
      'Curing or gluing where the product requires it',
      'Functional and leak testing',
      'Vision and dimensional inspection',
      'Reject handling and final part transfer',
    ],
    qualityCapabilities: [
      'Vision inspection at the station rather than at the end of the line',
      'Leak and functional testing built into the sequence',
      'Dimensional checking on characteristics that matter to the device',
      'Controlled reject handling with a recorded reason',
      'Traceability tied to the part rather than to the batch',
    ],
    flexibleProduction: [
      'Variant handling designed in from the start, so a second product size is a changeover rather than a rebuild',
      'Controlled changeover with tooling that locates positively instead of being set by eye',
      'Modular stations, so a process step can be added or replaced without redesigning the machine',
      'Recipe-driven parameters held in the controller rather than written on the machine',
    ],
    showDashboard: true,
    enquiryInline: true,
    enquiryPrompt:
      'Tell us the device, the assembly steps, what has to be verified before a part moves on, how many variants you run, and where you are in the project.',
    seo: {
      title: 'Medical & Pharmaceutical Automation Solutions',
      description:
        'Automation for quality-critical medical device and pharmaceutical assembly: feeding, joining, testing, inspection and traceability engineered around the product.',
    },
    sourceNotes: [
      'Product families from brand-context/products-services.md.',
      'The legacy website Pharmaceutical page was empty; all copy is authored.',
      'No certification, regulatory approval or compliance claim is permitted (plan 7.4).',
      'The unverified spine-needle machine dimension must not appear.',
      'Media is video-led: machine stills are card-scale or below (MEDIA_EVIDENCE_BUDGET.md).',
    ],
  },
  {
    slug: 'automotive',
    name: 'Automotive',
    navLabel: 'Automotive',
    order: 2,
    audienceProblem:
      'Automotive volumes make an undetected defect expensive fast, and a part that leaves the line unverified is a part that comes back.',
    thesis:
      'Most of what VEEMAP builds for automotive exists to verify. Dimensional checking, vision inspection, functional test and part identification are designed into the line rather than bolted onto the end of it.',
    homeSummary:
      'Vision and dimensional inspection for pistons, engine numbers and brake discs, plus radiator, fuel-rail and clutch assembly with results logged to the part.',
    solutionFamilies: [
      { name: 'Verification and inspection', detail: 'Piston vision inspection, engine number inspection, brake shoe inspection, piston liner inspection and brake disc vision inspection.' },
      { name: 'Assembly and joining', detail: 'Radiator assembly, fuel rail assembly, complete clutch assembly, and pipe and component handling.' },
      { name: 'Surface and finishing', detail: 'Robotic hood polishing.' },
      { name: 'Identification and traceability', detail: 'Marking, identification and result logging tied to the part.' },
    ],
    processSteps: [
      'Component handling and presentation',
      'Assembly and joining',
      'Dimensional and vision verification',
      'Functional checking where the part requires it',
      'Marking and identification',
      'Result logging and reject segregation',
    ],
    qualityCapabilities: [
      'Vision inspection for geometry, presence and orientation',
      'Dimensional checking against the characteristic that matters',
      'Part marking and identification',
      'Traceability across the assembly sequence',
    ],
    flexibleProduction: [
      'Fixture families that accept a part range rather than a single part number',
      'Inspection recipes selected by the part presented, not by an operator setting',
      'Reference masters and repeatable calibration, so a result means the same thing across shifts',
      'Result logging that stays attached to the part through the rest of the sequence',
    ],
    enquiryInline: true,
    enquiryPrompt:
      'Tell us the component, the characteristic that has to be verified, your current inspection method and the rate the line has to hold.',
    seo: {
      title: 'Automotive Automation and Inspection Solutions',
      description:
        'Automotive assembly and inspection automation: vision and dimensional verification, functional test, marking and traceability designed into the line.',
    },
    sourceNotes: [
      'Nine machines recovered from the legacy Automobile page; see LEGACY_SITE_CONTENT.md.',
      'Six of the nine are inspection systems, which is why this page leads on verification.',
      'Do not expand or infer abbreviations found in source material (plan 7.5).',
      'Media on hold: the machine images are CAD renders of complete cells, and inspection-scan.png is a measurement screen with legible dimensions (MEDIA_EVIDENCE_BUDGET.md).',
    ],
  },
  {
    slug: 'ev-solutions',
    name: 'EV Solutions',
    navLabel: 'EV Solutions',
    order: 3,
    audienceProblem:
      'Electric drivetrain production is a sequence of processes, each with its own quality gate, that all have to agree on the same part record.',
    thesis:
      'VEEMAP builds the individual stations of electric vehicle manufacturing and the flow that connects them, from winding through controller and charger build to end-of-line test.',
    homeSummary:
      'Stations and lines for electric drivetrains: wire winding, motor and hub-motor assembly, controller and charger build, and end-of-line test on one part record.',
    solutionFamilies: [
      { name: 'Motor and hub-motor assembly', detail: 'Multi-station assembly for motor and hub-motor builds.' },
      { name: 'Wire winding', detail: 'Controlled winding as a production process rather than a bench operation.' },
      { name: 'Controller and charger manufacturing support', detail: 'Assembly and test stations for power electronics builds.' },
      { name: 'End-of-line testing', detail: 'Electrical and functional verification before a unit leaves the line.' },
      { name: 'Material flow and plant integration', detail: 'Movement between stages designed as one production environment.' },
      { name: 'Production data and traceability', detail: 'A single part record carried across the sequence.' },
    ],
    processSteps: [
      'Winding and sub-assembly',
      'Motor and hub-motor assembly',
      'Controller and charger build',
      'Electrical and functional test',
      'Material movement between stages',
      'Production data capture across the sequence',
    ],
    qualityCapabilities: [
      'Electrical and functional end-of-line testing',
      'In-process verification between stages',
      'Traceability carried across multiple production stages',
    ],
    flexibleProduction: [
      'Stations built as modules, so a stage can be added as volume grows',
      'A part record that survives every handoff between stages',
      'Test limits held and versioned in the controller rather than kept on a whiteboard',
      'Manual and automatic stages designed to coexist while a line is scaled up',
    ],
    enquiryInline: true,
    enquiryPrompt:
      'Tell us which stages you are automating, what has to be tested at end of line, and whether the stages need to share one part record.',
    seo: {
      title: 'EV Manufacturing Automation Solutions',
      description:
        'Electric vehicle manufacturing automation: motor and hub-motor assembly, wire winding, controller and charger build, end-of-line test and connected production data.',
    },
    sourceNotes: [
      'The legacy EV page was three sentences with no machine list.',
      'Media on hold: hub-motor-line.jpg is a complete plant layout with operator positions, which 7.6 prohibits (MEDIA_EVIDENCE_BUDGET.md).',
      'Do not present a client installation or a detailed plant layout (plan 7.6).',
    ],
  },
  {
    slug: 'electronics',
    name: 'Electronics',
    navLabel: 'Electronics',
    order: 4,
    audienceProblem:
      'Electronics assembly is judged on repeatability: the same joint, the same placement, the same verified result, every cycle.',
    thesis:
      'VEEMAP builds electronics assembly automation around process precision and verification — controlled joining, controlled tightening, and an electrical or visual check on every unit.',
    homeSummary:
      'Switch and circuit-breaker assembly, robotic soldering, servo-controlled tightening, RFID processing and electrical test, with every unit verified in line.',
    solutionFamilies: [
      { name: 'Electrical switch assembly', detail: 'Multi-component switch assembly with in-line checking.' },
      { name: 'Circuit-breaker automation', detail: 'Assembly and verification for breaker builds.' },
      { name: 'Robotic soldering', detail: 'Controlled, repeatable joining under robot control.' },
      { name: 'Controlled tightening', detail: 'Automatic screw feeding with torque control by servo motor on a precision rotary indexer, for terminal assemblies where joint integrity is the quality characteristic.' },
      { name: 'RFID processing and verification', detail: 'Tag processing with a read-back check.' },
      { name: 'Electrical and functional testing', detail: 'Verification designed into the assembly sequence.' },
    ],
    processSteps: [
      'Component feeding and placement',
      'Joining, soldering or tightening',
      'Electrical and functional testing',
      'Vision inspection',
      'Marking and identification',
      'Reject handling',
    ],
    qualityCapabilities: [
      'Electrical and functional testing on every unit',
      'Vision inspection for placement and presence',
      'Torque-controlled joining with a recorded result',
      'Marking, identification and reject handling',
    ],
    flexibleProduction: [
      'Tooling that changes between switch or breaker variants without a rebuild',
      'Torque and soldering parameters held as recipes against the product, not set by hand',
      'Test sequences versioned with the product revision',
      'Reject routes designed in, so a failed unit leaves the line at the station that found it',
    ],
    enquiryInline: true,
    enquiryPrompt:
      'Tell us the assembly, the joining process, what has to be electrically verified, and the rate and variant mix the line has to hold.',
    seo: {
      title: 'Electronics Assembly Automation Solutions',
      description:
        'Electronics assembly automation: switch and circuit-breaker assembly, robotic soldering, controlled tightening, RFID verification and electrical testing.',
    },
    sourceNotes: [
      'The legacy site had no Electronics page; only the pivot terminal screwing machine is inherited, from the Case Study page.',
      'The legacy source names a "Smart CKD Precise rotary indexer". Plan 7.5 forbids expanding abbreviations, so the component brand is dropped rather than rendered.',
      'Media on hold: smartscrewiing.jpg carries a customer logo, robotic-soldering.jpg carries a vendor watermark and reads as that vendor’s own material (MEDIA_EVIDENCE_BUDGET.md).',
      'Remove or replace imagery carrying unapproved third-party marks (plan 7.7).',
    ],
  },
  {
    slug: 'consumer-goods',
    name: 'Consumer Goods',
    navLabel: 'Consumer Goods',
    order: 5,
    audienceProblem:
      'Consumer goods lines succeed on rate, changeover and consistency — a small assembly of many small parts, built by the million.',
    thesis:
      'VEEMAP builds high-rate consumer goods assembly that holds quality at speed, segregates what is not good in line, and converts to the next product variant without a rebuild.',
    homeSummary:
      'High-rate assembly for dispensing pumps, caps and liners, valves and packaging components, with in-line quality control and tooling that converts between variants.',
    solutionFamilies: [
      { name: 'Dispensing pump assembly', detail: 'Eleven parts assembled into one pump at above 122 parts per minute, with quality control segregating non-conforming parts in line. Linear link conveyor carrying 50 stations across 11 tracks, more than 200 sensors feeding the production data layer, and dashboards built on Zenon. Convertible to another pump type.' },
      { name: 'Cap and liner insertion', detail: 'Two-part assembly with in-line quality control at a target output above 250 parts per minute. Rotary indexing across eight stations on a single track, convertible to another cap type without a rebuild.' },
      { name: 'Valve assembly', detail: 'Multi-component valve assembly with functional verification.' },
      { name: 'Packaging component handling', detail: 'Controlled handling and presentation of packaging components.' },
      { name: 'Screw feeding and controlled tightening', detail: 'Automatic feeding with controlled tightening where joint integrity matters.' },
      { name: 'Inspection and line monitoring', detail: 'In-line checking with production state visible to the operator.' },
    ],
    processSteps: [
      'Component feeding and orientation',
      'Multi-station assembly',
      'In-line quality control',
      'Segregation of non-conforming parts',
      'Changeover to the next product variant',
      'Production data capture and line monitoring',
    ],
    qualityCapabilities: [
      'In-line quality control with automatic segregation',
      'Sensor coverage across every station',
      'Production data and dashboards built to the use case',
      'Variant changeover without a machine rebuild',
    ],
    flexibleProduction: [
      'Convertible between product types — both the cap and the pump architectures are designed for it',
      'Feeder tooling changed as a set rather than adjusted piece by piece',
      'Rate held through a changeover rather than recovered after one',
      'Sensor coverage across every station, so a fault is located rather than hunted',
    ],
    enquiryInline: true,
    enquiryPrompt:
      'Tell us the product, the part count, the rate you need, how many variants the line has to run and how quickly it has to change over.',
    seo: {
      title: 'Consumer Goods Assembly Automation Solutions',
      description:
        'High-rate consumer goods assembly automation: dispensing pumps, caps and liners, valves and packaging components, with in-line quality control and changeover.',
    },
    sourceNotes: [
      'Production figures recovered from the legacy Case Study page and approved for publication 2026-08-29 (plan section 4 and section 21).',
      'Figures publish as machine specifications only: no customer attribution, no customer-identifying image alongside, no ranking claim.',
      'Media on hold: dispensing-pump-line.jpg is a complete line render with station counts and component names. The page leads on architecture and rate instead (MEDIA_EVIDENCE_BUDGET.md).',
      'The pump derivative needs a generic public filename; the source file carries a customer name.',
    ],
  },
];

export const sectorSlugs = sectors.map((sector) => sector.slug);

export function getSector(slug: string): Sector | undefined {
  return sectors.find((sector) => sector.slug === slug);
}

/** Sector links for navigation and indexes. Medical & Pharmaceutical leads. */
export const sectorLinks = sectors.map((sector) => ({
  label: sector.navLabel,
  href: `/industries/${sector.slug}`,
}));
