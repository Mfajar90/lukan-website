import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Wind, FileText, Cloud, ClipboardCheck, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Lukan Wind Robotics services — blade inspection campaigns, reporting and cloud delivery for wind farm operators.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="container-page py-20 md:py-28">
        <p className="eyebrow mb-4">Services</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight max-w-3xl leading-[1.1]">
          One partner from blade to boardroom.
        </h1>
        <p className="mt-6 text-lg text-bone/70 max-w-2xl leading-relaxed">
          We don&apos;t just hand you a video drive. Lukan campaigns include
          deployment, capture, review, defect classification, reporting and
          delivery — packaged so your operations and asset-management teams can
          act on findings on day one.
        </p>
      </section>

      <hr className="hairline" />

      <section className="container-page py-20">
        <div className="grid md:grid-cols-3 gap-6">
          <ServiceCard
            icon={Wind}
            title="Blade inspection campaigns"
            bullets={[
              'On-site mobilisation across Europe',
              '360° capture of every blade, both sides',
              'Coverage independent of weather windows',
              'Operator on the ground — no rope crews',
            ]}
          />
          <ServiceCard
            icon={ClipboardCheck}
            title="Finding review & classification"
            bullets={[
              'In-house reviewers with blade-defect training',
              'Severity classified 0–5 per industry standard',
              'Layer, dimensions and root cause logged',
              'AI-assisted detection on long video',
            ]}
          />
          <ServiceCard
            icon={FileText}
            title="Reporting & delivery"
            bullets={[
              'Branded PDF report per turbine',
              'CSV summary for asset management systems',
              'Findings traceable to source frame',
              'Cloud portal access for your team',
            ]}
          />
        </div>
      </section>

      <hr className="hairline" />

      {/* Who it&apos;s for */}
      <section className="container-page py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="eyebrow mb-3">Who it&apos;s for</p>
            <h2 className="text-3xl font-bold tracking-tight">
              Wind farm operators, OEMs, and IPPs.
            </h2>
            <p className="mt-5 text-bone/70 leading-relaxed">
              We work with asset owners and operators across onshore and offshore
              wind. Whether you&apos;re running periodic inspections under your
              O&amp;M contract or chasing down warranty claims, our deliverables fit
              into your existing workflow.
            </p>
          </div>

          <ul className="space-y-3">
            <Bullet>Annual or post-event blade inspections</Bullet>
            <Bullet>Warranty / end-of-warranty surveys</Bullet>
            <Bullet>Lightning strike and storm damage assessment</Bullet>
            <Bullet>Pre-acquisition due diligence</Bullet>
            <Bullet>Repair verification follow-ups</Bullet>
          </ul>
        </div>
      </section>

      <hr className="hairline" />

      {/* Engagement model */}
      <section className="container-page py-20">
        <p className="eyebrow mb-3">Engagement</p>
        <h2 className="text-3xl font-bold tracking-tight max-w-3xl">
          A campaign in four steps.
        </h2>

        <ol className="mt-12 grid md:grid-cols-4 gap-6">
          <Step n="01" title="Scoping" body="You share fleet, turbine types and timing. We propose a campaign plan and quote." />
          <Step n="02" title="Mobilisation" body="Crawler and operator on site. Inspections start the day we arrive — no scaffold setup days." />
          <Step n="03" title="Review" body="Recordings go to our cloud portal. Reviewers classify findings within 5 working days." />
          <Step n="04" title="Delivery" body="PDF reports + CSV + portal access handed over. Your team can audit every finding back to the source frame." />
        </ol>
      </section>

      <hr className="hairline" />

      {/* CTA */}
      <section className="container-page py-24">
        <div className="rounded-3xl bg-gradient-to-br from-lamp/15 via-ink to-ink border border-lamp/20 p-10 md:p-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-2xl">
            Tell us about your fleet.
          </h2>
          <p className="mt-4 text-bone/70 max-w-xl">
            Site list, turbine types, target window — we&apos;ll come back with a
            campaign plan within a few working days.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Request a quote <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="mailto:info@lukan.dk" className="btn-ghost">info@lukan.dk</a>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceCard({ icon: Icon, title, bullets }: { icon: any; title: string; bullets: string[] }) {
  return (
    <div className="rounded-2xl border border-bone/10 bg-bone/[0.02] p-7 hover:border-lamp/30 transition-colors">
      <div className="w-10 h-10 rounded-xl bg-lamp/10 flex items-center justify-center mb-5">
        <Icon className="w-5 h-5 text-lamp" />
      </div>
      <h3 className="text-lg font-semibold text-bone mb-4">{title}</h3>
      <ul className="space-y-2">
        {bullets.map((b) => (
          <li key={b} className="text-sm text-bone/70 flex items-start gap-2">
            <Check className="w-3.5 h-3.5 mt-0.5 text-lamp flex-shrink-0" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
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

function Step({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <li>
      <p className="font-mono text-xs text-lamp/70 mb-3">{n}</p>
      <h3 className="text-base font-semibold text-bone mb-2">{title}</h3>
      <p className="text-sm text-bone/60 leading-relaxed">{body}</p>
    </li>
  );
}
