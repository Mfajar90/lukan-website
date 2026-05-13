'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import Reveal from '@/components/Reveal';
import HaloBackdrop, { InstrumentBar } from '@/components/HaloBackdrop';

export default function HomePage() {
  const reduced = useReducedMotion();

  return (
    <>
      {/* Hero — full bleed, animated halo */}
      <section className="relative h-[calc(100vh-6rem)] min-h-[640px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(255,184,77,0.18), transparent 70%)',
          }}
        />

        <HaloBackdrop />

        {/* Centre instrument bar */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <InstrumentBar />
        </div>

        {/* Hero text */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 mt-40 md:mt-56">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9], delay: 0.1 }}
            className="font-mono text-[10px] uppercase tracking-[0.35em] text-lamp mb-8"
          >
            Lukan · Crawler V3
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.2, 0.65, 0.3, 0.9], delay: 0.25 }}
            className="text-5xl md:text-8xl font-bold tracking-tight leading-[0.95]"
          >
            The light<br />goes <span className="italic text-lamp">inside</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.2, 0.65, 0.3, 0.9], delay: 0.45 }}
            className="mt-8 text-lg md:text-xl text-bone/70 max-w-2xl mx-auto leading-relaxed"
          >
            An autonomous robot for internal wind turbine blade inspection. 8K
            360° vision, fully offline, operated from any browser.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.2, 0.65, 0.3, 0.9], delay: 0.65 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <Link href="/technology" className="btn-primary">
              See the technology <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="btn-ghost">
              Talk to us
            </Link>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 font-mono text-[10px] text-bone/40 uppercase tracking-[0.3em] flex items-center gap-2"
          aria-hidden
        >
          Scroll
          {!reduced && (
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown className="w-3 h-3" />
            </motion.span>
          )}
        </motion.div>
      </section>

      {/* Feature 1 — Crawler form factor */}
      <section className="min-h-screen flex items-center py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          aria-hidden
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 30% 50%, rgba(255,184,77,0.12), transparent 70%)',
          }}
        />
        <div className="container-page grid lg:grid-cols-2 gap-16 items-center relative">
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-lamp mb-6">
              01 · The crawler
            </p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.02]">
              320 mm long.<br />3.7 kg.<br />
              <span className="text-lamp">Single-person carry.</span>
            </h2>
            <p className="mt-8 text-lg text-bone/70 leading-relaxed max-w-lg">
              Compact enough to navigate the confined chambers of a wind
              turbine blade. Heavy-duty transport case. Remote controller.
              Cable pull-out system. Compatible with all major turbine
              manufacturers.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative">
              <div className="aspect-square rounded-3xl border border-bone/10 bg-gradient-to-br from-bone/[0.04] to-transparent backdrop-blur-sm p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone/40">
                    SIZE · WEIGHT · SPEED
                  </p>
                  <p className="mt-6 text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                    320 <span className="text-bone/40">×</span> 230{' '}
                    <span className="text-bone/40">×</span> 175
                  </p>
                  <p className="font-mono text-xs text-bone/40 mt-2">millimetres</p>
                </div>
                <div className="grid grid-cols-2 gap-6 md:gap-8 mt-10">
                  <div>
                    <p className="text-3xl md:text-4xl font-bold">3.7</p>
                    <p className="font-mono text-[10px] text-bone/40 uppercase mt-1">kg · mass</p>
                  </div>
                  <div>
                    <p className="text-3xl md:text-4xl font-bold">2.0</p>
                    <p className="font-mono text-[10px] text-bone/40 uppercase mt-1">m/s · vel_max</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-full bg-lamp text-ink text-xs font-bold font-mono uppercase tracking-wider">
                8 hr battery
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Feature 2 — Vision (flipped) */}
      <section className="min-h-screen flex items-center py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          aria-hidden
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(255,184,77,0.12), transparent 70%)',
          }}
        />
        <div className="container-page grid lg:grid-cols-2 gap-16 items-center relative">
          <Reveal delay={0.1}>
            <div className="relative aspect-square order-2 lg:order-1">
              <HaloBackdrop dots={80} radius={0.82} rotationSeconds={60} className="" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-6xl md:text-8xl font-bold text-lamp">8K</p>
                  <p className="font-mono text-xs text-bone/40 uppercase tracking-[0.25em] mt-2">
                    360° vision
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="order-1 lg:order-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-lamp mb-6">
                02 · The vision
              </p>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.02]">
                8K panoramic.<br />Front camera.<br />
                <span className="text-lamp">Every chamber.</span>
              </h2>
              <p className="mt-8 text-lg text-bone/70 leading-relaxed max-w-lg">
                An 8K 360° camera captures the full chamber in a single pass.
                A front camera handles navigation. On-device stitching outputs
                4K equirectangular MP4 at 30 fps. 4×52 adjustable LEDs.
                NVIDIA Jetson Orin Nano compute.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Feature 3 — Offline / sovereignty */}
      <section className="min-h-screen flex items-center py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          aria-hidden
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 30% 50%, rgba(255,184,77,0.12), transparent 70%)',
          }}
        />
        <div className="container-page grid lg:grid-cols-2 gap-16 items-center relative">
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-lamp mb-6">
              03 · The autonomy
            </p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.02]">
              Offline<br />by <span className="text-lamp">design</span>.
            </h2>
            <p className="mt-8 text-lg text-bone/70 leading-relaxed max-w-lg">
              116 GB of on-board NVMe. No internet. No cloud dependency. No data
              leaving the site unless you choose to send it. Browser-based UI,
              120 m Wi-Fi range, Tailscale VPN for diagnostics and OTA updates.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              <FactTile big="116" unit="GB" label="On-board NVMe" />
              <FactTile big="120" unit="m" label="Wi-Fi range" />
              <FactTile big="0" unit="" label="Cloud required" />
              <FactTile big="∞" unit="" label="Your data, your rules" small />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Spec ticker */}
      <section
        className="border-y border-bone/10 py-24 relative overflow-hidden"
        style={{
          background:
            'linear-gradient(180deg, transparent, rgba(255,184,77,0.06), transparent)',
        }}
      >
        <div className="container-page">
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone/40 mb-12 text-center">
              Specification · Crawler V3
            </p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            <Reveal delay={0.0}><BigSpec v="116 GB" l="On-board NVMe" /></Reveal>
            <Reveal delay={0.05}><BigSpec v="120 m" l="Wi-Fi range" /></Reveal>
            <Reveal delay={0.1}><BigSpec v="4 × 52" l="LED system" /></Reveal>
            <Reveal delay={0.15}><BigSpec v="3840 × 1920" l="@ 30 fps · 4K stitched" /></Reveal>
            <Reveal delay={0.2}><BigSpec v="~12 wk" l="Lead time from PO" /></Reveal>
            <Reveal delay={0.25}><BigSpec v="12 mo" l="Warranty + OTA" /></Reveal>
            <Reveal delay={0.3}><BigSpec v="5 hr" l="Training included" /></Reveal>
            <Reveal delay={0.35}><BigSpec v="€90" l="Per rotor · analysis" /></Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="min-h-[80vh] flex items-center py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(255,184,77,0.16), transparent 70%)',
          }}
        />
        <Reveal className="container-page text-center relative">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-lamp mb-6">
            Get in touch
          </p>
          <h2 className="text-4xl md:text-7xl font-bold tracking-tight leading-[1.02]">
            Have blades<br />to <span className="italic text-lamp">inspect</span>?
          </h2>
          <p className="mt-8 text-lg text-bone/70 max-w-xl mx-auto">
            Send us a note. We&apos;ll come back with a pilot proposal or a quote within a few working days.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href="mailto:info@lukan.dk" className="btn-primary">
              info@lukan.dk <ArrowRight className="w-4 h-4" />
            </a>
            <Link href="/contact" className="btn-ghost">
              Book a walkthrough
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function FactTile({ big, unit, label, small }: { big: string; unit: string; label: string; small?: boolean }) {
  return (
    <div className="rounded-2xl border border-bone/10 bg-bone/[0.02] p-6 backdrop-blur-sm">
      <div className="flex items-baseline gap-1">
        <p className={small ? 'text-4xl md:text-5xl font-bold' : 'text-5xl md:text-6xl font-bold'}>{big}</p>
        {unit && <p className="text-lg text-bone/50">{unit}</p>}
      </div>
      <p className="font-mono text-[10px] text-bone/40 uppercase tracking-[0.25em] mt-3">{label}</p>
    </div>
  );
}

function BigSpec({ v, l }: { v: string; l: string }) {
  return (
    <div className="text-center">
      <p className="text-3xl md:text-5xl font-bold text-bone">{v}</p>
      <p className="font-mono text-[10px] text-bone/50 uppercase tracking-[0.25em] mt-2">{l}</p>
    </div>
  );
}
