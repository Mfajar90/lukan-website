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
      {/* Hero — animated halo */}
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

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <InstrumentBar />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 mt-40 md:mt-56">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9], delay: 0.1 }}
            className="font-mono text-[10px] uppercase tracking-[0.35em] text-lamp mb-8"
          >
            Lukan Wind Robotics
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.2, 0.65, 0.3, 0.9], delay: 0.25 }}
            className="text-3xl md:text-6xl font-bold tracking-tight leading-[1.05]"
          >
            No blade should fail because of a defect we could have <span className="italic text-lamp">caught</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.2, 0.65, 0.3, 0.9], delay: 0.45 }}
            className="mt-8 text-lg md:text-xl text-bone/70 max-w-2xl mx-auto leading-relaxed"
          >
            Inspect your blades from the office, as if you were inside them.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.2, 0.65, 0.3, 0.9], delay: 0.65 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <Link href="/products" className="btn-primary">
              See the products <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="btn-ghost">
              Talk to us
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 font-mono text-[10px] text-bone/60 uppercase tracking-[0.3em] flex items-center gap-2"
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

      {/* Product triptych */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          aria-hidden
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(255,184,77,0.08), transparent 70%)',
          }}
        />

        <div className="container-page relative">
          <Reveal>
            <p className="eyebrow mb-5 text-center">The Lukan family</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.02] text-center max-w-4xl mx-auto">
              Three products.<br />
              <span className="text-lamp">One mission.</span>
            </h2>
          </Reveal>

          <div className="mt-20 grid md:grid-cols-3 gap-6">
            <Reveal delay={0.0}>
              <ProductCard
                href="/products#detectra"
                order="01"
                name="Detectra"
                verb="Detect"
                tagline="The inspection crawler."
                body="Remote-controlled, plug-and-play robot that goes inside the blade. 8K 360° vision. 15 minutes per blade."
                status="Pilot units"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <ProductCard
                href="/products#quantra"
                order="02"
                name="Quantra"
                verb="Quantify"
                tagline="Defects, measured."
                body="Second-generation crawler with on-board NDT add-ons. Sizing cracks and sub-surface defects."
                status="In development"
              />
            </Reveal>
            <Reveal delay={0.2}>
              <ProductCard
                href="/products#fenestra"
                order="03"
                name="Fenestra"
                verb="Act"
                tagline="The fleet cloud portal."
                body="Where inspections, findings and reports live across the whole fleet."
                status="Live"
              />
            </Reveal>
          </div>

          <Reveal delay={0.3}>
            <div className="mt-16 text-center">
              <Link href="/products" className="btn-ghost">
                Open the product line <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services triptych */}
      <section className="relative py-32 md:py-40 overflow-hidden border-t border-bone/5">
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          aria-hidden
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(255,184,77,0.06), transparent 70%)',
          }}
        />

        <div className="container-page relative">
          <Reveal>
            <p className="eyebrow mb-5 text-center">How we work</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.02] text-center max-w-4xl mx-auto">
              Three ways<br />
              <span className="text-lamp">to engage.</span>
            </h2>
          </Reveal>

          <div className="mt-20 grid md:grid-cols-3 gap-6">
            <Reveal delay={0.0}>
              <ServiceCard
                href="/services#buy"
                order="01"
                action="Own"
                title="Buy or rent Detectra"
                body="For in-house inspection teams. Purchase outright, or rent by the campaign."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <ServiceCard
                href="/services#hire"
                order="02"
                action="Hire"
                title="Hire us to inspect"
                body="For asset owners who want data without the hardware. Lukan operator on site."
              />
            </Reveal>
            <Reveal delay={0.2}>
              <ServiceCard
                href="/services#pilot"
                order="03"
                action="Pilot"
                title="Run a joint pilot"
                body="For OEMs, universities, and partners. Co-designed scope, joint case study."
              />
            </Reveal>
          </div>

          <Reveal delay={0.3}>
            <div className="mt-16 text-center">
              <Link href="/services" className="btn-ghost">
                See how we work <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="min-h-[70vh] flex items-center py-32 relative overflow-hidden">
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

function ProductCard({
  href,
  order,
  name,
  verb,
  tagline,
  body,
  status,
}: {
  href: string;
  order: string;
  name: string;
  verb: string;
  tagline: string;
  body: string;
  status: 'Pilot units' | 'In development' | 'Live';
}) {
  const statusStyles =
    status === 'Pilot units'
      ? 'bg-lamp/15 text-lamp border border-lamp/30'
      : status === 'Live'
      ? 'bg-lamp/15 text-lamp border border-lamp/30'
      : 'bg-bone/[0.04] text-bone/70 border border-bone/15';

  return (
    <Link
      href={href}
      className="group h-full rounded-3xl border border-bone/10 bg-bone/[0.02] backdrop-blur-sm p-8 md:p-9 hover:border-lamp/40 transition-colors flex flex-col"
    >
      <div className="flex items-center justify-between mb-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-lamp/70">
          {order} · {verb}
        </p>
        <span
          className={`inline-flex items-center px-2.5 py-1 rounded-full text-[9px] font-mono uppercase tracking-[0.2em] font-semibold ${statusStyles}`}
        >
          {status}
        </span>
      </div>
      <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-bone group-hover:text-lamp transition-colors">{name}</h3>
      <p className="mt-2 text-lamp/90 font-medium">{tagline}</p>
      <p className="mt-5 text-bone/65 text-sm leading-relaxed">{body}</p>
      <p className="mt-6 text-xs font-mono uppercase tracking-[0.2em] text-bone/60 group-hover:text-lamp transition-colors">
        Read more →
      </p>
    </Link>
  );
}

function ServiceCard({
  href,
  order,
  action,
  title,
  body,
}: {
  href: string;
  order: string;
  action: string;
  title: string;
  body: string;
}) {
  return (
    <Link
      href={href}
      className="group h-full rounded-3xl border border-bone/10 bg-bone/[0.02] backdrop-blur-sm p-8 md:p-9 hover:border-lamp/40 transition-colors flex flex-col"
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-lamp/70 mb-8">
        {order} · {action}
      </p>
      <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-bone group-hover:text-lamp transition-colors">
        {title}
      </h3>
      <p className="mt-5 text-bone/65 text-sm leading-relaxed">{body}</p>
      <p className="mt-auto pt-6 text-xs font-mono uppercase tracking-[0.2em] text-bone/60 group-hover:text-lamp transition-colors">
        Read more →
      </p>
    </Link>
  );
}
