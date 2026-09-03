import type { Metadata } from 'next';
import { Barlow_Condensed, Bodoni_Moda, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import './editorial.css';

const display = Bodoni_Moda({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const utility = Barlow_Condensed({
  variable: '--font-utility',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const mono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.veemap.com'),
  title: 'VEEMAP Technologies | Special-purpose machines, exact by design',
  description:
    'VEEMAP designs and builds high-speed, precise special-purpose machines, complete assembly lines and connected Industry 4.0 systems.',
  openGraph: {
    title: 'VEEMAP Technologies | Special-purpose machines, exact by design',
    description: 'High-speed, precise automation engineered around the manufacturing requirement.',
    url: '/',
    siteName: 'VEEMAP Technologies',
    type: 'website',
    images: [{ url: '/og.png', width: 1672, height: 941, alt: 'VEEMAP Technologies — Special purpose. Exact by design.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VEEMAP Technologies | Special-purpose machines, exact by design',
    description: 'High-speed, precise automation engineered around the manufacturing requirement.',
    images: ['/og.png'],
  },
};

const directionContract = `THESIS: Commission a special-purpose machine in public; refuse the generic industrial brochure hero.\nOWN-WORLD: Pure black and paper white fields, signal orange, optical-focus typography, technical hairlines and machine-derived point fields.\nSTORY: Manufacturing leaders see the machine, understand its technology layers, inspect proof, and submit a qualified requirement.\nFIRST VIEWPORT: Editorial serif promise at left, conceptual exploded machine spanning center-right, capability rail and assembly progress, project action at the upper right.\nFORM: Multiplane Commissioning, strongest bolder candidate, seed 2bfc2ae0-r1.\nFINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance`;

const themeScript = `
  try {
    const saved = localStorage.getItem('veemap-theme');
    const theme = saved === 'light' || saved === 'dark' ? saved : 'dark';
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch (_) {
    document.documentElement.dataset.theme = 'dark';
  }
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body className={`${display.variable} ${utility.variable} ${mono.variable}`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.currentScript.before(document.createComment(${JSON.stringify(directionContract)}));`,
          }}
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}
