import { ArrowDown, Factory } from 'lucide-react';

function ArrowUp({ className }: { className?: string }) {
  return <ArrowDown className={className} style={{ transform: 'rotate(180deg)' }} />;
}

export default function SiteFooter({ topHref = '#top' }: { topHref?: string }) {
  return (
    <footer className="site-footer">
      <div className="footer-brand"><Factory aria-hidden="true" /><span><strong>VEEMAP Technologies Pvt Ltd</strong><small>An engineering solution company</small></span></div>
      <address>Plot No. 35, Sector 5, IMT Manesar<br />Gurugram, Haryana, India — 122050</address>
      <div className="footer-links"><a href={topHref}>Back to top <ArrowUp aria-hidden="true" /></a><span>© {new Date().getFullYear()} VEEMAP Technologies</span></div>
    </footer>
  );
}
