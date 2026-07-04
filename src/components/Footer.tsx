import Link from 'next/link';
import { Mail, MapPin } from 'lucide-react';

// CVR (Central Business Register) number — registered entity "LUKAN ApS".
const CVR = '46421752';

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-bone/5 mt-24">
      <div className="container-page py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <img
              src="/brand/lukan-lockup-horizontal-dark.svg"
              alt="Lukan Wind Robotics"
              className="h-9 w-auto mb-4"
            />
            <p className="text-sm text-bone/60 max-w-sm leading-relaxed">
              Detect. Quantify. Act. Robots and software for internal wind
              turbine blade inspection — engineered in Denmark.
            </p>
          </div>

          <div>
            <h2 className="text-[11px] uppercase tracking-[0.25em] text-bone/60 mb-3">Site</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="text-bone/70 hover:text-lamp">Products</Link></li>
              <li><Link href="/services" className="text-bone/70 hover:text-lamp">Services</Link></li>
              <li><Link href="/about" className="text-bone/70 hover:text-lamp">About</Link></li>
              <li><Link href="/contact" className="text-bone/70 hover:text-lamp">Contact</Link></li>
              <li><Link href="/privacy" className="text-bone/70 hover:text-lamp">Privacy</Link></li>
              <li>
                <a href="https://portal.lukan.dk" target="_blank" rel="noopener" className="text-bone/70 hover:text-lamp">
                  Fenestra ↗
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[11px] uppercase tracking-[0.25em] text-bone/60 mb-3">Contact</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2 text-bone/70">
                <Mail className="w-3.5 h-3.5 mt-1 flex-shrink-0" />
                <a href="mailto:info@lukan.dk" className="hover:text-lamp">info@lukan.dk</a>
              </li>
              <li className="flex items-start gap-2 text-bone/70">
                <MapPin className="w-3.5 h-3.5 mt-1 flex-shrink-0" />
                <span>Lyshøjen 14B, 8520 Lystrup, Denmark</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="hairline mt-10 pt-6 flex flex-wrap justify-between items-center gap-2 text-xs text-bone/60">
          <p>© {new Date().getFullYear()} Lukan Wind Robotics ApS — {CVR ? `CVR ${CVR} — ` : ''}All rights reserved.</p>
          <p className="italic">Detect. Quantify. Act.</p>
        </div>
      </div>
    </footer>
  );
}
