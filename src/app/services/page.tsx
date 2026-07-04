import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Box, Wrench, GraduationCap, Check } from 'lucide-react';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'How we work',
  description:
    'Buy Detectra, hire us to inspect, or pilot together. Built for operators, OEMs and service firms.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'How we work · Lukan Wind Robotics',
    description:
      'Buy Detectra, hire us to inspect, or pilot together. Built for operators, OEMs and service firms.',
    url: '/services',
    siteName: 'Lukan Wind Robotics',
    locale: 'en_DK',
    type: 'website',
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="container-page py-20 md:py-28">
        <Reveal>
          <p className="eyebrow mb-4">How we work</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight max-w-3xl leading-[1.05]">
            Buy or rent Detectra, hire us to inspect, or pilot together.
          </h1>
          <p className="mt-6 text-lg text-bone/70 max-w-2xl leading-relaxed">
            The first step is not necessarily a purchase order. We work with you
            in whichever shape makes sense.
          </p>
        </Reveal>
      </section>

      <hr className="hairline" />

      <section className="container-page py-20">
        <div className="grid md:grid-cols-3 gap-6">
          <Reveal delay={0.0}>
            <Path
              id="buy"
              icon={Box}
              tag="Path 01"
              title="Buy or rent Detectra"
              for="Operators and service firms running in-house inspections."
              bullets={[
                'Buy outright or rent by the campaign',
                'Crawler, transport case, controller',
                'Operator training and follow-up',
                'Warranty, software updates, support',
              ]}
            />
          </Reveal>

          <Reveal delay={0.1}>
            <Path
              id="hire"
              icon={Wrench}
              tag="Path 02"
              title="Hire us to inspect"
              for="Asset owners who want the data without the hardware."
              bullets={[
                'Lukan operator and crawler on site',
                'Per-blade or per-turbine pricing',
                'Branded PDF report and 360° viewer',
              ]}
            />
          </Reveal>

          <Reveal delay={0.2}>
            <Path
              id="pilot"
              icon={GraduationCap}
              tag="Path 03"
              title="Run a joint pilot"
              for="OEMs, universities, and groups exploring internal inspection."
              bullets={[
                'Co-designed scope (1–3 turbines)',
                'Findings versus your current method',
                'Joint case study on completion',
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
              Operators, OEMs, service firms, and the people who insure them.
            </h2>
            <p className="mt-5 text-bone/70 leading-relaxed">
              Large utilities running their own fleets, service firms expanding
              into internal inspection, and academic partners. If you operate,
              service, insure, or finance wind assets, we&apos;d love to talk.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="space-y-3">
              <Bullet>Annual or post-event blade inspections</Bullet>
              <Bullet>Warranty &amp; end-of-warranty surveys</Bullet>
              <Bullet>Lightning strike and storm-damage assessment</Bullet>
              <Bullet>Pre-acquisition due diligence</Bullet>
              <Bullet>Repair verification &amp; follow-up</Bullet>
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
            { n: '02', title: 'Pilot or order', body: 'Pilot a turbine or place an order. Training scheduled in parallel.' },
            { n: '03', title: 'Inspect', body: 'Your team or ours operates Detectra. Capture is offline, on-board.' },
            { n: '04', title: 'Deliver', body: 'PDF report, 360° viewer, structured metadata. Fenestra access if you need fleet-level review.' },
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
              Sites, turbine types, target window — we&apos;ll come back with a
              fit and a price within a few working days.
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
  id,
  icon: Icon,
  tag,
  title,
  for: forText,
  bullets,
}: {
  id?: string;
  icon: any;
  tag: string;
  title: string;
  for: string;
  bullets: string[];
}) {
  return (
    <article id={id} className="rounded-2xl border border-bone/10 bg-bone/[0.02] p-7 h-full hover:border-lamp/30 transition-colors scroll-mt-28">
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
