'use client';

import { motion, useReducedMotion } from 'framer-motion';

interface Props {
  dots?: number;
  radius?: number; // percentage of viewBox half-extent (0–1)
  rotationSeconds?: number;
  className?: string;
}

/**
 * Full-bleed animated halo of amber dots — the Lukan mark made enormous.
 * Used as a hero/section backdrop in the cinematic style.
 */
export default function HaloBackdrop({
  dots = 102,
  radius = 0.78,
  rotationSeconds = 80,
  className = '',
}: Props) {
  const reduced = useReducedMotion();
  const VB = 800;
  const cx = VB / 2;
  const cy = VB / 2;
  const r = radius * (VB / 2);

  return (
    <motion.svg
      viewBox={`0 0 ${VB} ${VB}`}
      className={`absolute inset-0 m-auto pointer-events-none ${className}`}
      animate={reduced ? undefined : { rotate: 360 }}
      transition={{ duration: rotationSeconds, ease: 'linear', repeat: Infinity }}
      style={{ width: 'min(80vmin, 900px)', height: 'min(80vmin, 900px)' }}
      aria-hidden
    >
      <defs>
        <filter id="halo-blur">
          <feGaussianBlur stdDeviation="0.6" />
        </filter>
      </defs>
      <g filter="url(#halo-blur)">
        {Array.from({ length: dots }).map((_, i) => {
          const angle = (i / dots) * Math.PI * 2;
          const x = cx + r * Math.cos(angle);
          const y = cy + r * Math.sin(angle);
          // brightest near "top" of halo to give a "lamp" feel
          const opacity = 0.25 + 0.75 * Math.max(0, Math.cos(angle - Math.PI / 2));
          return <circle key={i} cx={x} cy={y} r={3.5} fill="#FFB84D" opacity={opacity} />;
        })}
      </g>
    </motion.svg>
  );
}

export function InstrumentBar({ size = 160 }: { size?: number }) {
  const reduced = useReducedMotion();
  return (
    <motion.svg
      viewBox="0 0 200 200"
      style={{ width: size, height: size }}
      animate={reduced ? undefined : { scale: [1, 1.08, 1], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity }}
      aria-hidden
    >
      <defs>
        <linearGradient id="ibar" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F1ECDF" stopOpacity="0.05" />
          <stop offset="50%" stopColor="#FFB84D" stopOpacity="1" />
          <stop offset="100%" stopColor="#F1ECDF" stopOpacity="0.05" />
        </linearGradient>
        <filter id="ibar-glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect x="20" y="98" width="160" height="4" rx="2" fill="url(#ibar)" filter="url(#ibar-glow)" />
      <circle cx="100" cy="100" r="6" fill="#FFB84D" filter="url(#ibar-glow)" />
    </motion.svg>
  );
}
