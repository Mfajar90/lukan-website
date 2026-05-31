'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const nav = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-ink/80 backdrop-blur-md border-b border-bone/5">
      <div className="container-page flex items-center justify-between h-24">
        <Link href="/" className="flex items-center" aria-label="Lukan Wind Robotics — Home">
          <img
            src="/brand/lukan-lockup-horizontal-dark.svg"
            alt="Lukan Wind Robotics"
            className="h-[4.8rem] w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm text-bone/70 hover:text-lamp transition-colors"
            >
              {n.name}
            </Link>
          ))}
          <a
            href="https://portal.lukan.dk"
            target="_blank"
            rel="noopener"
            className="btn-primary text-sm py-2 px-4"
          >
            Cloud Portal: Fenestra
          </a>
        </nav>

        <button
          className="md:hidden p-2 text-bone/80"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-bone/5 bg-ink">
          <nav className="container-page py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-sm text-bone/80 hover:text-lamp py-1.5"
              >
                {n.name}
              </Link>
            ))}
            <a
              href="https://portal.lukan.dk"
              target="_blank"
              rel="noopener"
              className="btn-primary text-sm py-2 px-4 mt-2 self-start"
            >
              Fenestra
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
