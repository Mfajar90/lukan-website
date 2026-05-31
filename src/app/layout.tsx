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
    default: 'Lukan Wind Robotics — Detect. Quantify. Act.',
    template: '%s · Lukan Wind Robotics',
  },
  description:
    'Robots and software for internal wind turbine blade inspection. Detectra finds defects. Quantra quantifies them. Fenestra holds the fleet.',
  keywords: [
    'wind turbine inspection',
    'internal blade inspection',
    'Detectra',
    'Quantra',
    'Fenestra',
    'autonomous blade inspection',
    'defect quantification',
    'wind robotics',
    'Lystrup',
    'Aarhus',
    'Denmark',
  ],
  openGraph: {
    title: 'Lukan Wind Robotics',
    description: 'Detectra · Quantra · Fenestra — robots and software for internal blade inspection.',
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
