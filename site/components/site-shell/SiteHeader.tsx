'use client';

import { useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react';
import SpinningBrandMark from '@/app/SpinningBrandMark';
import { NavLink, primaryCta, primaryMobileCta, primaryNav } from './nav';

/**
 * Shared site chrome. Client-rendered because the menu button lives inside
 * `<header>` while the mobile panel is a sibling of it, and the two share open
 * state. The panel cannot move inside `<header>`: the header carries a
 * backdrop-filter, which would become the containing block for its fixed
 * descendants. Next still server-renders this to HTML, so navigation is
 * present without JavaScript.
 */
export default function SiteHeader({
  brandHref = '/',
  links = primaryNav,
  cta = primaryCta,
  mobileCta = primaryMobileCta,
}: {
  brandHref?: string;
  links?: NavLink[];
  cta?: NavLink;
  mobileCta?: NavLink;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = next;
    document.documentElement.style.colorScheme = next;
    localStorage.setItem('veemap-theme', next);
  };

  return (
    <>
      <header className="site-header">
        <a className="brand" href={brandHref} aria-label="VEEMAP Technologies home">
          <SpinningBrandMark className="brand-mark" />
          <span className="brand-type"><strong>VEEMAP</strong><small>TECHNOLOGIES</small></span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => <a key={link.label} href={link.href}>{link.label}</a>)}
        </nav>

        <div className="header-actions">
          <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label="Toggle light and dark mode" title="Toggle light and dark mode">
            <Sun className="theme-icon-light" aria-hidden="true" />
            <Moon className="theme-icon-dark" aria-hidden="true" />
            <span className="theme-label-light">Light</span>
            <span className="theme-label-dark">Dark</span>
          </button>
          <a className="header-cta" href={cta.href}>{cta.label} <ArrowUpRight aria-hidden="true" /></a>
          <button className="menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </header>

      <nav id="mobile-navigation" className={`mobile-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Mobile navigation">
        {links.map((link) => (
          <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}<ArrowDownRight aria-hidden="true" /></a>
        ))}
        <a className="mobile-project-link" href={mobileCta.href} onClick={() => setMenuOpen(false)}>{mobileCta.label} <ArrowUpRight aria-hidden="true" /></a>
      </nav>
    </>
  );
}
