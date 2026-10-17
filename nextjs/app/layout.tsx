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
        {/* Theme-aware favicons — the browser picks by its own colour scheme,
            which is independent of the site's toggle. */}
        <link
          rel="icon"
          type="image/svg+xml"
          href={asset('/assets/img/mark-dark.svg')}
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href={asset('/assets/img/mark-light.svg')}
          media="(prefers-color-scheme: light)"
        />
        <link rel="shortcut icon" href={asset('/assets/img/favicon.png')} type="image/x-icon" />
        {/* Self-hosted: the CDN copy blocked rendering and set no font-display,
            which is what Lighthouse flagged. font files sit under
            public/assets/boxicons/ and carry font-display: swap. */}
        <link href={asset('/assets/boxicons/boxicons.css')} rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        {children}
        <PageEffects />
      </body>
    </html>
  );
}
