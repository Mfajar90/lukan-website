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
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lukan.dk'),
  title: {
    default: 'Lukan Wind Robotics — Light wherever the asset is',
    template: '%s · Lukan Wind Robotics',
  },
  description:
    'Lukan Wind Robotics builds the Crawler V3 — an autonomous internal wind turbine blade inspection robot. 8K 360° vision, browser-driven, fully offline. Compatible with all major turbine manufacturers.',
  keywords: [
    'wind turbine inspection',
    'internal blade inspection',
    'Crawler V3',
    'autonomous blade inspection',
    'wind robotics',
    'Lystrup',
    'Aarhus',
    'Denmark',
    'wind energy',
  ],
  openGraph: {
    title: 'Lukan Wind Robotics',
    description: 'Light wherever the asset is. The Crawler V3 — internal blade inspection, reinvented.',
    url: 'https://lukan.dk',
    siteName: 'Lukan Wind Robotics',
    locale: 'en_DK',
    type: 'website',
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
