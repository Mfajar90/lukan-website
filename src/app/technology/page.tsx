import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Cpu,
  WifiOff,
  Gamepad2,
  Camera,
  ShieldCheck,
  HardDrive,
  Wrench,
  Globe2,
  FileJson,
  Sparkles,
} from 'lucide-react';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Technology',
  description: 'Inside the Lukan internal blade crawler — 90 mm port compatible, 360° 4K capture, fully offline, browser-controlled.',
};

export default function TechnologyPage() {
  return (
    <>
      {/* Hero */}
      <section className="container-page py-20 md:py-28">
        <Reveal>
          <p className="eyebrow mb-4">Technology</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight max-w-3xl leading-[1.05]">
            Built for the inside of a wind turbine blade.
          </h1>
          <p className="mt-6 text-lg text-bone/70 max-w-2xl leading-relaxed">
            The Lukan crawler is the only autonomous robot that fits through a
            standard 90&nbsp;mm inspection port. Once inside, it captures every
            chamber in 360° at 4K, stores the data on-board, and hands it back
            to your team through a browser. No cloud required.
          </p>
        </Reveal>
      </section>

      <hr className="hairline" />

      {/* The crawler */}
      <section className="container-page py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="eyebrow mb-3">The crawler</p>
            <h2 className="text-3xl font-bold tracking-tight">
              CE-marked. Battery-powered. Operator-friendly.
            </h2>
            <p className="mt-5 text-bone/70 leading-relaxed">
              A compact inspection robot engineered to navigate the confined
              internal chambers of wind turbine blades. Retractable arms, full
              LED illumination, gimbal-stabilised 360° camera, and a ruggedised
              transport case that fits a charged battery, the crawler, and the
              control cable in a single carry.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              <SpecBox label="Port compatibility" value="90 mm inspection port" />
              <SpecBox label="Capture" value="3840 × 1920 @ 30 fps · 360°" />
              <SpecBox label="Storage" value="116 GB on-board NVMe SSD" />
              <SpecBox label="Operating mode" value="Tethered or wireless · fully offline" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl overflow-hidden border border-bone/10 shadow-[0_30px_80px_-30px_rgba(255,184,77,0.4)]">
              <img
                src="/crawler/front-arms.jpg"
                alt="Lukan crawler with retractable arms extended"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <hr className="hairline" />

      {/* The pipeline */}
      <section className="container-page py-20">
        <Reveal>
          <p className="eyebrow mb-3">The capture pipeline</p>
          <h2 className="text-3xl font-bold tracking-tight max-w-3xl">
            From the blade to the report &mdash; no USB drives, no servers, no friction.
          </h2>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-4 gap-6">
          <Reveal delay={0.0}>
            <PipelineStep
              icon={Wrench}
              n="01"
              title="Setup (under 5 min)"
              body="Open the Pelican case, insert a charged battery, lower the crawler through the inspection port."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <PipelineStep
              icon={Gamepad2}
              n="02"
              title="Drive"
              body="Live 360° preview in any browser. Joystick, touch, or gamepad input. Full LED illumination inside the chamber."
            />
          </Reveal>
          <Reveal delay={0.2}>
            <PipelineStep
              icon={Camera}
              n="03"
              title="Capture"
              body="4K equirectangular video stored on the on-board NVMe with timestamps, GPS, and per-chamber metadata."
            />
          </Reveal>
          <Reveal delay={0.3}>
            <PipelineStep
              icon={HardDrive}
              n="04"
              title="Export"
              body="Download via the built-in web interface. Every package includes a self-contained 360° viewer — no install on your end."
            />
          </Reveal>
        </div>
      </section>

      <hr className="hairline" />

      {/* Capabilities grid */}
      <section className="container-page py-20">
        <Reveal>
          <p className="eyebrow mb-3">Capabilities</p>
          <h2 className="text-3xl font-bold tracking-tight max-w-3xl">
            Everything you need. Nothing you don&apos;t.
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          <Reveal delay={0.0}><Capability icon={Globe2} title="True 360° capture" body="Full equirectangular at up to 3840×1920 @ 30 fps. On-device stitching — no post-processing required." /></Reveal>
          <Reveal delay={0.05}><Capability icon={Cpu} title="Browser-native" body="No apps, no drivers, no IT approvals. Laptop, tablet, phone — anything with a modern browser." /></Reveal>
          <Reveal delay={0.1}><Capability icon={WifiOff} title="Sovereignty by default" body="All data on-board. No internet, no cloud, no data leaving the site. Yours to keep, or push wherever." /></Reveal>
          <Reveal delay={0.15}><Capability icon={FileJson} title="Structured metadata" body="JSON sidecars with GPS, timestamps, turbine/blade/chamber, operator details — ready for your asset-management system." /></Reveal>
          <Reveal delay={0.2}><Capability icon={Sparkles} title="AI-assisted review" body="Defect detection over long videos — built on our proprietary internal-blade training library, growing with every inspection." /></Reveal>
          <Reveal delay={0.25}><Capability icon={Gamepad2} title="Gamepad-grade control" body="Xbox or PlayStation controller for tactile, precise driving. Same input works for review sessions." /></Reveal>
        </div>
      </section>

      <hr className="hairline" />

      {/* Cloud portal */}
      <section className="container-page py-20">
        <Reveal>
          <div className="rounded-3xl border border-bone/10 bg-gradient-to-br from-bone/[0.02] to-transparent p-10 md:p-14">
            <div className="grid md:grid-cols-[1fr_1.1fr] gap-10 items-center">
              <div>
                <p className="eyebrow mb-3">Optional · Cloud portal</p>
                <h2 className="text-3xl font-bold tracking-tight">
                  When you have a fleet, you have a portal.
                </h2>
                <p className="mt-5 text-bone/70 leading-relaxed">
                  For organisations operating multiple turbines, Lukan&apos;s
                  cloud portal stores inspections, lets reviewers flag findings,
                  generates branded PDF reports, and shares secure read-only
                  views with stakeholders. Same offline-first crawler &mdash;
                  add the portal when you need the scale.
                </p>
                <div className="mt-7">
                  <a
                    href="https://portal.lukan.dk"
                    target="_blank"
                    rel="noopener"
                    className="btn-ghost text-sm"
                  >
                    Open the portal <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-bone/10">
                <img
                  src="/crawler/ui.jpg"
                  alt="Operator interface inside the crawler"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <hr className="hairline" />

      {/* CTA */}
      <Reveal>
        <section className="container-page py-20">
          <div className="rounded-3xl border border-bone/10 p-10 md:p-14">
            <h2 className="text-3xl font-bold tracking-tight max-w-2xl">
              Want to see a sample inspection?
            </h2>
            <p className="mt-4 text-bone/70 max-w-xl">
              We can walk you through a recorded blade inspection &mdash; the
              360° viewer, the metadata, the report format. Takes about 20
              minutes.
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

function SpecBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-bone/10 bg-bone/[0.02] p-4">
      <p className="text-[10px] uppercase tracking-[0.2em] text-bone/40 mb-1.5 font-mono">{label}</p>
      <p className="text-sm text-bone leading-snug">{value}</p>
    </div>
  );
}

function PipelineStep({ icon: Icon, n, title, body }: { icon: any; n: string; title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-bone/10 bg-bone/[0.02] p-6 h-full hover:border-lamp/30 transition-colors">
      <div className="flex items-center justify-between mb-5">
        <div className="w-10 h-10 rounded-xl bg-lamp/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-lamp" />
        </div>
        <p className="font-mono text-xs text-lamp/70">{n}</p>
      </div>
      <h3 className="text-base font-semibold text-bone mb-2">{title}</h3>
      <p className="text-sm text-bone/60 leading-relaxed">{body}</p>
    </div>
  );
}

function Capability({ icon: Icon, title, body }: { icon: any; title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-bone/10 p-6 h-full hover:border-lamp/30 transition-colors">
      <Icon className="w-5 h-5 text-lamp mb-4" />
      <h3 className="text-base font-semibold text-bone mb-2">{title}</h3>
      <p className="text-sm text-bone/60 leading-relaxed">{body}</p>
    </div>
  );
}
