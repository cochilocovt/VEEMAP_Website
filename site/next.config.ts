import type { NextConfig } from 'next';

/**
 * The previous Wix site used opaque `/blank-*` addresses. It is no longer
 * hosted, but those URLs may still be linked or indexed, so each one is mapped
 * to its nearest replacement. Source for the mapping:
 * docs/brand-context/contacts-and-credentials.md and docs/LEGACY_SITE_CONTENT.md.
 */
const legacyRedirects: { source: string; destination: string }[] = [
  { source: '/blank-1', destination: '/capabilities' },
  { source: '/blank', destination: '/capabilities' },
  { source: '/blank-6', destination: '/industries' },
  { source: '/blank-4', destination: '/industries/medical-pharma' },
  { source: '/blank-4-1', destination: '/industries/ev-solutions' },
  { source: '/blank-4-1-1', destination: '/industries/automotive' },
  { source: '/blank-4-1-2', destination: '/industries/consumer-goods' },
  { source: '/blank-2', destination: '/careers' },
  { source: '/blank-7', destination: '/careers' },
  { source: '/blank-5', destination: '/contact' },
  { source: '/blank-3', destination: '/' },
  { source: '/portfolio', destination: '/industries' },
  { source: '/portfolio-collections/my-portfolio', destination: '/industries' },
];

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return legacyRedirects.map((redirect) => ({ ...redirect, permanent: true }));
  },
};

export default nextConfig;
