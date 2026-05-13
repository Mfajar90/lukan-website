'use client';

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

/**
 * Showcase of the crawler with a parallax, tilt-on-scroll effect.
 * Pseudo-3D using CSS transforms — no three.js needed for the marketing site.
 */
export default function HeroCrawler() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [22, 0, -18]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-18, 0, 14]);
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.96]);

  return (
    <div ref={ref} className="relative" style={{ perspective: 1400 }}>
      {/* Amber glow halo */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            'radial-gradient(60% 50% at 50% 50%, rgba(255,184,77,0.22), transparent 70%)',
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
        className="relative will-change-transform"
      >
        <img
          src="/crawler/overhead.jpg"
          alt="Lukan internal blade inspection crawler"
          className="w-full rounded-3xl shadow-[0_40px_120px_-20px_rgba(255,184,77,0.35)] border border-bone/10"
        />

        {/* Floating label chips — pseudo-3D depth */}
        <motion.div
          style={{ transform: 'translateZ(60px)' }}
          className="absolute top-6 -left-3 md:left-6 px-3 py-1.5 rounded-full bg-ink/90 backdrop-blur border border-lamp/30 text-[10px] uppercase tracking-[0.18em] text-lamp"
        >
          90 mm port
        </motion.div>
        <motion.div
          style={{ transform: 'translateZ(60px)' }}
          className="absolute bottom-6 -right-3 md:right-6 px-3 py-1.5 rounded-full bg-ink/90 backdrop-blur border border-bone/15 text-[10px] uppercase tracking-[0.18em] text-bone/80"
        >
          360° · 4K · offline
        </motion.div>
      </motion.div>
    </div>
  );
}
