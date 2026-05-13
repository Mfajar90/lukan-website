import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  Cpu,
  WifiOff,
  Gamepad2,
  Camera,
  ShieldCheck,
  Gauge,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import HeroCrawler from '@/components/HeroCrawler';
import PinnedFeatures from '@/components/PinnedFeatures';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-lamp-glow opacity-60 pointer-events-none" aria-hidden />
        <div className="container-page py-20 md:py-28 relative">
          <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
            <div>
              {/* Stacked mark + wordmark */}
              <img
                src="/brand/lukan-lockup-stacked-dark.svg"
                alt="Lukan Wind Robotics"
                className="h-28 md:h-36 w-auto mb-10"
              />

              <p className="eyebrow mb-6">Wind Robotics · Lystrup, Denmark</p>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.04]">
                Internal blade<br />inspection, <span className="text-lamp">reinvented</span>.
              </h1>
              <p className="mt-6 text-lg md:text-xl text-bone/70 max-w-xl leading-relaxed">
                The <strong className="text-bone">Crawler V3</strong> inspects wind turbine blades from the inside &mdash;
                8K 360° vision, browser-driven, fully offline. Compatible with all
                major turbine manufacturers.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/technology" className="btn-primary">
                  See the technology <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="btn-ghost">
                  Talk to us
                </Link>
              </div>

              <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl">
                <Stat label="vision" value="8K · 360°" sub="on-device stitched" />
                <Stat label="weight" value="3.7 kg" sub="320 × 230 × 175 mm" />
                <Stat label="battery" value="8 hrs" sub="full inspection day" />
                <Stat label="lead time" value="~12 wk" sub="from order confirmation" />
              </div>
            </div>

            {/* Scroll-tilted crawler image */}
            <div className="relative">
              <HeroCrawler />
            </div>
          </div>
        </div>
      </section>

      {/* Pinned scroll feature reel */}
      <PinnedFeatures />

      {/* Three pillars (with photos) */}
      <section className="container-page py-24">
        <Reveal>
          <p className="eyebrow mb-4">What it is</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-3xl leading-[1.05]">
            One robot, one cable-free workflow, one inspector with a browser.
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <Reveal delay={0.0}>
            <FeatureCard
              icon={Cpu}
              tag="The crawler"
              title="Crawler V3, field-ready."
              body="Compact (320 × 230 × 175 mm), 3.7 kg, 8-hour battery. 4×52 LED system, 8K 360° camera + front camera, NVIDIA Jetson Orin Nano compute. CE marking in progress."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <FeatureCard
              icon={Gamepad2}
              tag="The operator interface"
              title="Drive from any browser."
              body="No apps, no drivers, no IT approvals. 120 m Wi-Fi range, live 360° preview, gamepad-friendly. Tailscale VPN for remote diagnostics and OTA updates."
            />
          </Reveal>
          <Reveal delay={0.2}>
            <FeatureCard
              icon={Camera}
              tag="The outcome"
              title="Findings, traceable to the frame."
              body="116 GB on-board NVMe with structured JSON metadata (GPS, timestamps, inspection parameters). Built-in viewer, bulk ZIP export, optional video analysis service at €90 per rotor."
            />
          </Reveal>
        </div>
      </section>

      <hr className="hairline" />

      {/* Why internal matters */}
      <section className="container-page py-20">
        <Reveal>
          <div className="max-w-3xl">
            <p className="eyebrow mb-3">Why internal matters</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              External inspection sees the surface. The damage that matters lives inside.
            </h2>
            <p className="mt-5 text-bone/70 leading-relaxed">
              Drones and external crews can only see the outside of a blade.
              But the failures that take a turbine down &mdash; spar-cap
              delamination, shear-web cracks, lightning-strike residue in the
              chambers &mdash; live on the inside. Lukan goes where external
              methods can&apos;t.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          <Reveal delay={0.0}>
            <Compare icon={Gauge} title="Inside an inspection day" body="A non-destructive internal inspection completed in a single window &mdash; no weather constraints once the crawler is in." />
          </Reveal>
          <Reveal delay={0.1}>
            <Compare icon={ShieldCheck} title="No technicians at height" body="The crawler does the climb. Your team operates from the ground via any browser." />
          </Reveal>
          <Reveal delay={0.2}>
            <Compare icon={WifiOff} title="Fully offline" body="No signal, no cloud, no data leaving the site. 116 GB on-board NVMe keeps every chamber recorded locally." />
          </Reveal>
        </div>
      </section>

      <hr className="hairline" />

      {/* CTA */}
      <Reveal>
        <section className="container-page py-24">
          <div className="rounded-3xl bg-gradient-to-br from-lamp/12 via-ink to-ink border border-lamp/20 p-10 md:p-14">
            <p className="eyebrow mb-4">Get in touch</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-2xl">
              Have blades to inspect? Or a fleet to support?
            </h2>
            <p className="mt-4 text-bone/70 max-w-xl">
              Whether you operate the turbines, service them, or invest in the
              companies that do &mdash; we&apos;d love to talk.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Contact us <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="mailto:info@lukan.dk" className="btn-ghost">info@lukan.dk</a>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}

function Stat({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.25em] text-bone/40 mb-2 font-mono">{label}</p>
      <p className="text-2xl md:text-3xl font-bold text-bone">{value}</p>
      <p className="text-xs text-bone/50 mt-1">{sub}</p>
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  tag,
  title,
  body,
}: {
  icon: LucideIcon;
  tag: string;
  title: string;
  body: string;
}) {
  return (
    <article className="rounded-2xl border border-bone/10 bg-bone/[0.02] p-7 hover:border-lamp/30 transition-colors h-full">
      <div className="w-10 h-10 rounded-xl bg-lamp/10 flex items-center justify-center mb-5">
        <Icon className="w-5 h-5 text-lamp" />
      </div>
      <p className="text-[10px] uppercase tracking-[0.25em] text-lamp/80 font-mono mb-2">{tag}</p>
      <h3 className="text-lg font-semibold text-bone">{title}</h3>
      <p className="mt-3 text-sm text-bone/60 leading-relaxed">{body}</p>
    </article>
  );
}

function Compare({ icon: Icon, title, body }: { icon: any; title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-bone/10 p-7">
      <Icon className="w-5 h-5 text-lamp mb-4" />
      <h3 className="text-base font-semibold text-bone mb-2">{title}</h3>
      <p className="text-sm text-bone/60 leading-relaxed">{body}</p>
    </div>
  );
}
