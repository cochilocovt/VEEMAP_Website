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
