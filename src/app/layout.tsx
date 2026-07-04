import type { Metadata } from 'next';
import { Familjen_Grotesk, JetBrains_Mono } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const familjenGrotesk = Familjen_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-familjen-grotesk',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  // Only used for small accent labels, not above-the-fold LCP text — don't
  // let it compete for early bandwidth with the body/heading font.
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.lukan.dk'),
  title: {
    default: 'Lukan Wind Robotics — Detect. Quantify. Act.',
    template: '%s · Lukan Wind Robotics',
  },
  description:
    'Robots and software for internal wind turbine blade inspection. Detectra finds defects. Quantra quantifies them. Fenestra holds the fleet.',
  // Home page canonical/OG live here because the home page is a client
  // component and cannot export its own metadata. Sub-pages override
  // alternates.canonical and openGraph with page-specific values.
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Lukan Wind Robotics — Detect. Quantify. Act.',
    description:
      'Robots and software for internal wind turbine blade inspection. Detectra finds defects. Quantra quantifies them. Fenestra holds the fleet.',
    url: '/',
    siteName: 'Lukan Wind Robotics',
    locale: 'en_DK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lukan Wind Robotics — Detect. Quantify. Act.',
    description:
      'Detectra · Quantra · Fenestra — robots and software for internal blade inspection.',
  },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${familjenGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
