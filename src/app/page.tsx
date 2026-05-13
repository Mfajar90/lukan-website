import Link from 'next/link';
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
              {/* Big stacked mark + wordmark */}
              <img
                src="/brand/lukan-lockup-stacked-dark.svg"
                alt="Lukan Wind Robotics"
                className="h-32 md:h-44 w-auto mb-10"
              />

              <p className="eyebrow mb-6">Wind Robotics · Aalborg / Copenhagen</p>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.04]">
                Internal blade<br />inspection, <span className="text-lamp">reinvented</span>.
              </h1>
              <p className="mt-6 text-lg md:text-xl text-bone/70 max-w-xl leading-relaxed">
                Lukan builds autonomous crawler robots that inspect wind turbine
                blades <strong className="text-bone">from the inside</strong>. 360° panoramic video,
                structured data, fully offline — through a 90&nbsp;mm inspection
                port.
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
                <Stat label="port" value="90 mm" sub="inspection-port fit" />
                <Stat label="capture" value="360°" sub="4K equirectangular" />
                <Stat label="cost" value="−70%" sub="vs. rope access" />
                <Stat label="speed" value="10×" sub="faster than rope" />
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
            <PhotoCard
              src="/crawler/front-arms.jpg"
              alt="Crawler with retractable arms"
              tag="The crawler"
              title="CE-marked. 90 mm port compatible."
              body="Compact inspection robot engineered to navigate the confined internal chambers of wind turbine blades. LED-lit, gimbal-stabilised, battery-powered."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <PhotoCard
              src="/crawler/ui.jpg"
              alt="Browser-based operator interface"
              tag="The operator interface"
              title="Drive from any browser."
              body="No apps, no drivers, no IT approvals. Live 360° preview, joystick or gamepad input, real-time telemetry — all on the device you brought."
            />
          </Reveal>
          <Reveal delay={0.2}>
            <PhotoCard
              src="/crawler/inspection.jpg"
              alt="Inspection in progress at site"
              tag="The outcome"
              title="Findings, traceable to the frame."
              body="On-board NVMe stores every recording with full metadata. Download via the built-in viewer — or push to the Lukan cloud portal for fleet-scale review."
            />
          </Reveal>
        </div>
      </section>

      <hr className="hairline" />

      {/* Why it beats rope */}
      <section className="container-page py-20">
        <Reveal>
          <div className="max-w-3xl">
            <p className="eyebrow mb-3">Why it beats rope access</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              External inspection misses the inside. Rope inspection misses the data.
            </h2>
            <p className="mt-5 text-bone/70 leading-relaxed">
              Drones and rope crews can only see what&apos;s outside the blade. But
              the structural damage that matters &mdash; spar cap delamination,
              shear-web cracks, lightning strike residue inside the chambers
              &mdash; lives on the inside. Lukan goes where they can&apos;t.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          <Reveal delay={0.0}>
            <Compare icon={Gauge} title="10× faster" body="A blade inspected in hours, not days. No weather window dependency once the crawler is in." />
          </Reveal>
          <Reveal delay={0.1}>
            <Compare icon={ShieldCheck} title="No technicians at height" body="The crawler does the climb. Your team operates from the ground via a browser." />
          </Reveal>
          <Reveal delay={0.2}>
            <Compare icon={WifiOff} title="Fully offline" body="No signal, no cloud, no data leaving the site. The crawler keeps a 116 GB NVMe of every chamber." />
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

function PhotoCard({ src, alt, tag, title, body }: { src: string; alt: string; tag: string; title: string; body: string }) {
  return (
    <article className="rounded-2xl border border-bone/10 bg-bone/[0.02] overflow-hidden hover:border-lamp/30 transition-colors group">
      <div className="aspect-[4/3] overflow-hidden bg-ink">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
        />
      </div>
      <div className="p-6">
        <p className="text-[10px] uppercase tracking-[0.25em] text-lamp/80 font-mono mb-2">{tag}</p>
        <h3 className="text-lg font-semibold text-bone">{title}</h3>
        <p className="mt-3 text-sm text-bone/60 leading-relaxed">{body}</p>
      </div>
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
