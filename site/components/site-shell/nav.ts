export type NavLink = { label: string; href: string };

/**
 * Approved route map from WEBSITE_IMPLEMENTATION_PLAN.md section 5.
 * "Capabilities" is the settled nav label; "solution" stays a copy word for
 * sector product families rather than a route or a label.
 */
export const primaryNav: NavLink[] = [
  { label: 'Capabilities', href: '/capabilities' },
  { label: 'Industries', href: '/industries' },
  { label: 'Company', href: '/company' },
  { label: 'Careers', href: '/careers' },
];

export const primaryCta: NavLink = { label: 'Start a project', href: '/contact' };

export const primaryMobileCta: NavLink = {
  label: 'Tell us about your process',
  href: '/contact',
};

/**
 * The homepage keeps its anchor navigation until the Hero integration
 * checkpoint (plan section 15). Passing these in rather than branching inside
 * the header keeps one shell for every route; Phase 5 deletes the props.
 */
export const homepageNav: NavLink[] = [
  { label: 'Capabilities', href: '#commissioning' },
  { label: 'Machines', href: '#proof' },
  { label: 'Engineering', href: '#engineering' },
  { label: 'Careers', href: '#careers' },
];

export const homepageCta: NavLink = { label: 'Start a project', href: '#enquiry' };

export const homepageMobileCta: NavLink = {
  label: 'Tell us about your process',
  href: '#enquiry',
};
