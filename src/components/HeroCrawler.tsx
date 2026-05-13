'use client';

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

/**
 * Hero centrepiece — the Lukan mark (halo of amber dots + instrument bar) as an
 * animated SVG. Tilts and breathes on scroll. No photo needed.
 */
export default function HeroCrawler() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [18, 0, -14]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-14, 0, 12]);
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 0.96]);

  return (
    <div ref={ref} className="relative aspect-square w-full max-w-[520px] mx-auto" style={{ perspective: 1400 }}>
      {/* Amber halo glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            'radial-gradient(50% 50% at 50% 50%, rgba(255,184,77,0.28), transparent 70%)',
          filter: 'blur(20px)',
        }}
      />

      <motion.div
        style={{
          rotateX: reduced ? 0 : rotateX,
          rotateY: reduced ? 0 : rotateY,
          y: reduced ? 0 : y,
          scale: reduced ? 1 : scale,
          transformStyle: 'preserve-3d',
        }}
        className="relative will-change-transform w-full h-full flex items-center justify-center"
      >
        {/* Slow continuous rotation behind the mark for life */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={reduced ? undefined : { rotate: 360 }}
          transition={{ duration: 60, ease: 'linear', repeat: Infinity }}
          aria-hidden
        >
          <RingOfDots />
        </motion.div>

        {/* Static central mark — instrument bar */}
        <motion.div
          style={{ transform: 'translateZ(60px)' }}
          className="relative"
          animate={reduced ? undefined : { y: [0, -6, 0] }}
          transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity }}
        >
          <InstrumentBar />
        </motion.div>

        {/* Floating label chips — pseudo-3D depth */}
        <motion.div
          style={{ transform: 'translateZ(80px)' }}
          className="absolute top-6 left-2 md:left-6 px-3 py-1.5 rounded-full bg-ink/85 backdrop-blur border border-lamp/30 text-[10px] uppercase tracking-[0.18em] text-lamp"
        >
          8K · 360°
        </motion.div>
        <motion.div
          style={{ transform: 'translateZ(80px)' }}
          className="absolute bottom-6 right-2 md:right-6 px-3 py-1.5 rounded-full bg-ink/85 backdrop-blur border border-bone/15 text-[10px] uppercase tracking-[0.18em] text-bone/80"
        >
          3.7 kg · offline
        </motion.div>
      </motion.div>
    </div>
  );
}

/** Approximation of the Lukan mark — 102 amber dots arranged in a halo. */
function RingOfDots() {
  const DOTS = 102;
  const RADIUS = 44; // % of viewBox
  const VB = 200;
  const cx = VB / 2;
  const cy = VB / 2;

  return (
    <svg viewBox={`0 0 ${VB} ${VB}`} className="w-full h-full">
      {Array.from({ length: DOTS }).map((_, i) => {
        const angle = (i / DOTS) * Math.PI * 2;
        const x = cx + (RADIUS / 100) * (VB / 2) * Math.cos(angle);
        const y = cy + (RADIUS / 100) * (VB / 2) * Math.sin(angle);
        // Make the dots brighter near the top for a "lamp" feel
        const opacity = 0.4 + 0.6 * Math.max(0, Math.cos(angle - Math.PI / 2));
        return <circle key={i} cx={x} cy={y} r={1.6} fill="#FFB84D" opacity={opacity} />;
      })}
    </svg>
  );
}

/** Central instrument bar — clean horizontal bar with subtle amber centre glow. */
function InstrumentBar() {
  return (
    <svg viewBox="0 0 200 200" className="w-3/5 h-3/5">
      <defs>
        <linearGradient id="bar" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F1ECDF" stopOpacity="0.05" />
          <stop offset="50%" stopColor="#FFB84D" stopOpacity="1" />
          <stop offset="100%" stopColor="#F1ECDF" stopOpacity="0.05" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect x="20" y="98" width="160" height="4" rx="2" fill="url(#bar)" filter="url(#glow)" />
      <circle cx="100" cy="100" r="6" fill="#FFB84D" filter="url(#glow)" />
    </svg>
  );
}
