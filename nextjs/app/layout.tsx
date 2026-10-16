import type { Metadata } from 'next';
import PageEffects from '@/app/components/PageEffects';
import './globals.css';

export const metadata: Metadata = {
  title: 'Responsive portfolio website',
  description: 'Portfolio for Anmol Aditya Sinha',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/assets/img/favicon.png" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- App Router rule misfires; fonts are loaded once in this root layout */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        {children}
        <PageEffects />
      </body>
    </html>
  );
}
