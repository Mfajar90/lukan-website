import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Detectra finds defects inside the blade. Quantra measures them. Fenestra holds the fleet of inspections.',
};

type Status = 'Pilot units' | 'In development' | 'Live';

export default function ProductsPage() {
  return (
    <>
      <section className="container-page py-20 md:py-28">
        <Reveal>
          <p className="eyebrow mb-4">Products</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
            Three tools.<br />
            <span className="text-lamp">One job.</span>
          </h1>
          <p className="mt-6 text-lg text-bone/70 max-w-2xl leading-relaxed">
            Find defects. Measure them. Manage them across the fleet. Each
            product does one thing, well.
          </p>
        </Reveal>
      </section>

      <hr className="hairline" />

      <Product
        order="01"
        name="Detectra"
        verb="Detect"
        status="Pilot units"
        headline={<>The inspection<br />crawler.</>}
        body="A remotely controlled robot that reaches up to 80% of the blade length and captures the inside in 8K 360°. Compatible with all major turbine manufacturers."
        facts={[
          { v: '230 mm', l: 'Compact · full-circle light' },
          { v: '8K · 360°', l: 'Panoramic capture' },
          { v: 'Hours', l: 'From blade to your office' },
        ]}
      />

      <hr className="hairline" />

      <Product
        order="02"
        name="Quantra"
        verb="Quantify"
        status="In development"
        flipped
        headline={<>From finding defects<br />to <span className="text-lamp">measuring</span> them.</>}
        body="A second-generation crawler with on-board NDT add-ons — sizing cracks and sub-surface defects. Built so an inspection answers not just what is there, but how severe — with no guesswork."
        facts={[
          { v: 'Micron-grade', l: 'Defect sizing' },
          { v: 'Auto', l: 'Severity scoring' },
          { v: '2027', l: 'In development' },
        ]}
        cta={{ label: 'Join the pilot list', href: '/contact' }}
      />

      <hr className="hairline" />

      <Product
        order="03"
        name="Fenestra"
        verb="Act"
        status="Live"
        headline={<>Where the<br /><span className="text-lamp">inspections</span> live.</>}
        body="The cloud portal for teams running more than one turbine. Inspections, findings, reports and stakeholder access in one place."
        facts={[
          { v: 'Fleet', l: 'Multi-turbine view' },
          { v: 'AI', l: 'Assisted review' },
          { v: 'PDF + 360°', l: 'Reports & viewer' },
        ]}
        cta={{ label: 'Open Fenestra', href: 'https://portal.lukan.dk', external: true }}
      />

      <hr className="hairline" />

      <Reveal>
        <section className="container-page py-24">
          <div className="rounded-3xl border border-bone/10 p-10 md:p-14">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-2xl">
              Want to see a real inspection?
            </h2>
            <p className="mt-4 text-bone/70 max-w-xl">
              We can walk you through a recorded blade inspection — the 360°
              viewer, the metadata, the report. Around 20 minutes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Request a walkthrough <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}

function Product({
  order,
  name,
  verb,
  status,
  headline,
  body,
  facts,
  cta,
  flipped,
}: {
  order: string;
  name: string;
  verb: string;
  status: Status;
  headline: React.ReactNode;
  body: string;
  facts: { v: string; l: string }[];
  cta?: { label: string; href: string; external?: boolean };
  flipped?: boolean;
}) {
  return (
    <section id={name.toLowerCase()} className="container-page py-24 md:py-32 scroll-mt-28">
      <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${flipped ? '' : ''}`}>
        <Reveal className={flipped ? 'lg:order-2' : ''}>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-lamp mb-5">
            {order} · {name} · {verb}
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.02]">
            {headline}
          </h2>
          <div className="mt-5">
            <StatusBadge status={status} />
          </div>
          <p className="mt-7 text-lg text-bone/70 leading-relaxed max-w-lg">
            {body}
          </p>
          {cta && (
            <div className="mt-8">
              {cta.external ? (
                <a
                  href={cta.href}
                  target="_blank"
                  rel="noopener"
                  className="btn-ghost text-sm"
                >
                  {cta.label} <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <Link href={cta.href} className="btn-ghost text-sm">
                  {cta.label} <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          )}
        </Reveal>

        <Reveal delay={0.1} className={flipped ? 'lg:order-1' : ''}>
          <div className="grid grid-cols-1 gap-3">
            {facts.map((f) => (
              <div
                key={f.l}
                className="rounded-2xl border border-bone/10 bg-bone/[0.02] backdrop-blur-sm p-6 md:p-7 flex items-baseline justify-between gap-6"
              >
                <p className="text-4xl md:text-5xl font-bold tracking-tight">{f.v}</p>
                <p className="font-mono text-[10px] text-bone/50 uppercase tracking-[0.22em] text-right max-w-[55%]">
                  {f.l}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function StatusBadge({ status }: { status: Status }) {
  const styles =
    status === 'Pilot units'
      ? 'bg-lamp/15 text-lamp border border-lamp/30'
      : status === 'Live'
      ? 'bg-lamp/15 text-lamp border border-lamp/30'
      : 'bg-bone/[0.04] text-bone/70 border border-bone/15';
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-[0.2em] font-semibold ${styles}`}
    >
      {status}
    </span>
  );
}
