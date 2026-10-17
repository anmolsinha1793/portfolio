import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import PageEffects from '@/app/components/PageEffects';
import { asset } from '@/lib/asset';
import './globals.css';

/**
 * Self-hosted and preloaded by next/font, so the stylesheet no longer blocks
 * first paint. The generated family name is exposed as a CSS variable, which
 * --body-font consumes.
 */
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Anmol Aditya Sinha — AI/Gen AI certified engineer',
  description:
    'Portfolio of Anmol Aditya Sinha, AI/Gen AI certified engineer: Claude API, agentic workflows, Model Context Protocol, and ten years of frontend engineering.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        {/* Icons: a plain SVG first so browsers that ignore `media` on icon
            links still get the new mark, then a light variant for those that
            key off the colour scheme. The old PNG is deliberately gone — as
            the last-declared icon it overrode these and kept the old favicon. */}
        <link rel="icon" type="image/svg+xml" href={asset('/assets/img/mark-dark.svg')} />
        <link
          rel="icon"
          type="image/svg+xml"
          href={asset('/assets/img/mark-light.svg')}
          media="(prefers-color-scheme: light)"
        />
        {/* Self-hosted: the CDN copy blocked rendering and set no font-display,
            which is what Lighthouse flagged. font files sit under
            public/assets/boxicons/ and carry font-display: swap. */}
        <link href={asset('/assets/boxicons/boxicons.min.css')} rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        {children}
        <PageEffects />
      </body>
    </html>
  );
}
