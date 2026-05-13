import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Box, Wrench, Headphones, GraduationCap, Check } from 'lucide-react';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'How we work',
  description: 'Lukan Wind Robotics — buy the crawler, hire us for the inspection, or partner on a pilot. Built for operators, OEMs, and service firms.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="container-page py-20 md:py-28">
        <Reveal>
          <p className="eyebrow mb-4">How we work</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight max-w-3xl leading-[1.05]">
            Buy the crawler, hire us to inspect, or pilot together.
          </h1>
          <p className="mt-6 text-lg text-bone/70 max-w-2xl leading-relaxed">
            Lukan is a product. The Lukan crawler is what we ship. But we know
            the first step is rarely a purchase order &mdash; so we work with
            you on whichever shape makes sense.
          </p>
        </Reveal>
      </section>

      <hr className="hairline" />

      <section className="container-page py-20">
        <div className="grid md:grid-cols-3 gap-6">
          <Reveal delay={0.0}>
            <Path
              icon={Box}
              tag="Path 01"
              title="Buy the Crawler V3"
              for="Operators and service firms running in-house inspections."
              bullets={[
                'Crawler V3 + remote controller + cable pull-out system',
                'Heavy-duty transport case included',
                '3 h online training + 2 h follow-up after first inspection',
                '12-month warranty · remote diagnostics · OTA updates',
                'Lead time ~12 weeks from order confirmation',
              ]}
            />
          </Reveal>

          <Reveal delay={0.1}>
            <Path
              icon={Wrench}
              tag="Path 02"
              title="Hire us to inspect"
              for="Asset owners with a single fleet who want the data without the hardware."
              bullets={[
                'Lukan operator + crawler on site',
                'Per-blade or per-turbine pricing',
                'Optional video analysis service · €90 per rotor',
                'Branded PDF report + raw 360° viewer',
                'Optional cloud portal access for stakeholders',
              ]}
            />
          </Reveal>

          <Reveal delay={0.2}>
            <Path
              icon={GraduationCap}
              tag="Path 03"
              title="Run a joint pilot"
              for="OEMs, universities, and groups exploring internal-inspection programmes."
              bullets={[
                'Co-designed pilot scope (1–3 turbines)',
                'Findings vs. existing inspection method',
                'Joint case study on completion',
                'Pricing structured for early adopters',
              ]}
            />
          </Reveal>
        </div>
      </section>

      <hr className="hairline" />

      <section className="container-page py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Reveal>
            <p className="eyebrow mb-3">Who it&apos;s for</p>
            <h2 className="text-3xl font-bold tracking-tight">
              Wind operators, OEMs, service firms, and the people who insure them.
            </h2>
            <p className="mt-5 text-bone/70 leading-relaxed">
              Our customers include large utilities running their own fleets,
              service firms expanding into internal inspection, and academic
              partners (we work closely with DTU). If you operate, service,
              insure, or finance wind assets, we&apos;d love to talk.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="space-y-3">
              <Bullet>Annual or post-event blade inspections</Bullet>
              <Bullet>Warranty &amp; end-of-warranty surveys</Bullet>
              <Bullet>Lightning strike and storm-damage assessment</Bullet>
              <Bullet>Pre-acquisition due diligence on wind portfolios</Bullet>
              <Bullet>Repair verification &amp; follow-up inspections</Bullet>
            </ul>
          </Reveal>
        </div>
      </section>

      <hr className="hairline" />

      <section className="container-page py-20">
        <Reveal>
          <p className="eyebrow mb-3">Engagement</p>
          <h2 className="text-3xl font-bold tracking-tight max-w-3xl">
            From first email to delivered data &mdash; one short loop.
          </h2>
        </Reveal>

        <ol className="mt-12 grid md:grid-cols-4 gap-6">
          {[
            { n: '01', title: 'Scoping', body: 'You share fleet, turbine types, and timing. We propose a fit and a quote.' },
            { n: '02', title: 'Pilot or order', body: 'Pilot a turbine or place an order. Operator training scheduled in parallel.' },
            { n: '03', title: 'Inspect', body: 'Either your team or ours operates the crawler. Data captured on-board, offline.' },
            { n: '04', title: 'Deliver', body: 'PDF report + raw 360° + JSON metadata. Cloud portal access if you need fleet-level review.' },
          ].map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08} as="div">
              <li>
                <p className="font-mono text-xs text-lamp/70 mb-3">{s.n}</p>
                <h3 className="text-base font-semibold text-bone mb-2">{s.title}</h3>
                <p className="text-sm text-bone/60 leading-relaxed">{s.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <hr className="hairline" />

      <Reveal>
        <section className="container-page py-24">
          <div className="rounded-3xl bg-gradient-to-br from-lamp/12 via-ink to-ink border border-lamp/20 p-10 md:p-14">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-2xl">
              Tell us about your fleet.
            </h2>
            <p className="mt-4 text-bone/70 max-w-xl">
              Sites, turbine types, target window &mdash; we&apos;ll come back
              with a fit and a price within a few working days.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Get in touch <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="mailto:info@lukan.dk" className="btn-ghost">info@lukan.dk</a>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}

function Path({
  icon: Icon,
  tag,
  title,
  for: forText,
  bullets,
}: {
  icon: any;
  tag: string;
  title: string;
  for: string;
  bullets: string[];
}) {
  return (
    <article className="rounded-2xl border border-bone/10 bg-bone/[0.02] p-7 h-full hover:border-lamp/30 transition-colors">
      <div className="flex items-center justify-between mb-5">
        <div className="w-10 h-10 rounded-xl bg-lamp/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-lamp" />
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-lamp/70">{tag}</p>
      </div>
      <h3 className="text-lg font-semibold text-bone mb-2">{title}</h3>
      <p className="text-sm text-bone/60 italic mb-5">{forText}</p>
      <ul className="space-y-2">
        {bullets.map((b) => (
          <li key={b} className="text-sm text-bone/70 flex items-start gap-2">
            <Check className="w-3.5 h-3.5 mt-0.5 text-lamp flex-shrink-0" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-bone/80">
      <Check className="w-4 h-4 mt-0.5 text-lamp flex-shrink-0" />
      <span>{children}</span>
    </li>
  );
}
