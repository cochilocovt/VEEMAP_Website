import { ReactNode } from 'react';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';

/**
 * Frame for every route except the homepage, which keeps its own composition
 * while the Hero lane is active. Server component: only the header and any
 * enquiry form inside `children` hydrate.
 */
export default function RouteShell({ children }: { children: ReactNode }) {
  return (
    <main id="top" className="site-shell">
      <SiteHeader />
      {children}
      <SiteFooter topHref="#top" />
    </main>
  );
}
