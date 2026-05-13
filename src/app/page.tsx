import Link from 'next/link';
import { ArrowRight, Wind, Camera, Cloud, ShieldCheck, Gauge, Workflow } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-lamp-glow opacity-60 pointer-events-none" aria-hidden />
        <div className="container-page py-24 md:py-32 relative">
          <p className="eyebrow mb-6">Wind Robotics · Denmark</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-4xl leading-[1.05]">
            Light wherever the asset is.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-bone/70 max-w-2xl leading-relaxed">
            Lukan builds 360° crawler robots that inspect wind turbine blades faster,
            safer and more thoroughly than rope access — and deliver every frame to
            your team through a single cloud portal.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/technology" className="btn-primary">
              See the technology <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="btn-ghost">
              Book an inspection
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
            <Stat label="coverage" value="100%" sub="blade surface" />
            <Stat label="inspection" value="≤ 1 day" sub="per turbine" />
            <Stat label="resolution" value="360°" sub="every frame" />
            <Stat label="downtime" value="minimal" sub="vs. rope access" />
          </div>
        </div>
      </section>

      <hr className="hairline" />

      {/* What we do */}
      <section className="container-page py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Camera}
            title="360° crawler inspection"
            body="A teleoperated crawler climbs the blade and records every surface in immersive 360°. No ropes, no scaffolding, no guesswork."
          />
          <FeatureCard
            icon={Cloud}
            title="Cloud portal for findings"
            body="Inspections stream straight to a secure portal. Reviewers flag defects, annotate, generate reports and share with clients — all in one place."
          />
          <FeatureCard
            icon={ShieldCheck}
            title="Safer & more thorough"
            body="No technicians at height. Coverage independent of weather and operator fatigue. Findings traceable to the exact frame."
          />
        </div>
      </section>

      <hr className="hairline" />

      {/* Workflow strip */}
      <section className="container-page py-20">
        <div className="max-w-3xl">
          <p className="eyebrow mb-3">How it works</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            From crawl to report — one continuous pipeline.
          </h2>
        </div>

        <ol className="mt-12 grid md:grid-cols-4 gap-6">
          <Step n="01" title="Deploy" body="Crawler launched on the blade. Operator on the ground, eyes on a screen — not at 90 m." />
          <Step n="02" title="Record" body="Full 360° capture of every blade side. Telemetry baked into the video stream." />
          <Step n="03" title="Review" body="Reviewers flag defects in the portal, attach screenshots, classify severity." />
          <Step n="04" title="Report" body="Branded PDF + CSV summary delivered to the asset owner. Audit trail kept in the portal." />
        </ol>

        <div className="mt-12">
          <Link href="/services" className="btn-ghost">
            See services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <hr className="hairline" />

      {/* CTA */}
      <section className="container-page py-24">
        <div className="rounded-3xl bg-gradient-to-br from-lamp/15 via-ink to-ink border border-lamp/20 p-10 md:p-14">
          <p className="eyebrow mb-4">Get in touch</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-2xl">
            Got a fleet that needs eyes on every blade?
          </h2>
          <p className="mt-4 text-bone/70 max-w-xl">
            Tell us about your site and we&apos;ll put together a campaign — full
            inspection, reporting, and cloud delivery.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Contact us <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="mailto:info@lukan.dk" className="btn-ghost">info@lukan.dk</a>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.25em] text-bone/40 mb-2">{label}</p>
      <p className="text-2xl md:text-3xl font-bold text-bone">{value}</p>
      <p className="text-xs text-bone/50 mt-1">{sub}</p>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, body }: { icon: any; title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-bone/10 bg-bone/[0.02] p-7 hover:border-lamp/30 transition-colors">
      <div className="w-10 h-10 rounded-xl bg-lamp/10 flex items-center justify-center mb-5">
        <Icon className="w-5 h-5 text-lamp" />
      </div>
      <h3 className="text-lg font-semibold text-bone">{title}</h3>
      <p className="mt-3 text-sm text-bone/60 leading-relaxed">{body}</p>
    </div>
  );
}

function Step({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <li className="relative">
      <p className="font-mono text-xs text-lamp/70 mb-3">{n}</p>
      <h3 className="text-base font-semibold text-bone mb-2">{title}</h3>
      <p className="text-sm text-bone/60 leading-relaxed">{body}</p>
    </li>
  );
}
