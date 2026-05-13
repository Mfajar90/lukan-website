'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface Feature {
  title: string;
  body: string;
  badge: string;
}

const features: Feature[] = [
  {
    badge: '01 · The port',
    title: 'Fits where nothing else does.',
    body: 'A 90 mm inspection port is the only access into a blade. Most robots can\'t fit. The Lukan crawler slips through with millimetres to spare.',
  },
  {
    badge: '02 · The capture',
    title: '360° at 4K — every chamber.',
    body: 'Equirectangular panoramic capture up to 3840×1920 at 30 fps. On-device stitching means no post-processing. Every surface, every angle, every chamber.',
  },
  {
    badge: '03 · The autonomy',
    title: 'Offline by design.',
    body: 'All data lives on 116 GB of on-board NVMe. No internet, no cloud dependency, no data leaving the site. Sovereignty is the default, not an option.',
  },
  {
    badge: '04 · The cockpit',
    title: 'Any browser. Any device.',
    body: 'No apps, no drivers, no IT approvals. Drive the crawler from a laptop, a tablet, or a gamepad. Live 360° preview the whole way through.',
  },
];

/**
 * GSAP-powered pinned scroll section.
 * Pins the layout while the user scrolls through the four feature panels.
 */
export default function PinnedFeatures() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.innerWidth < 768) return; // Skip on mobile — too fiddly

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>('.pinned-panel');
      const total = panels.length;

      // Hide all but the first
      panels.forEach((panel, i) => {
        gsap.set(panel, { autoAlpha: i === 0 ? 1 : 0, y: i === 0 ? 0 : 40 });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapRef.current,
          start: 'top top',
          end: () => `+=${(total - 1) * 600}`,
          pin: true,
          scrub: 0.5,
        },
      });

      panels.forEach((panel, i) => {
        if (i === 0) return;
        const prev = panels[i - 1];
        tl.to(prev, { autoAlpha: 0, y: -40, duration: 1 }, i - 1)
          .to(panel, { autoAlpha: 1, y: 0, duration: 1 }, i - 1);
      });
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapRef} className="relative h-screen overflow-hidden bg-ink">
      {/* Ambient gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            'radial-gradient(50% 40% at 50% 50%, rgba(255,184,77,0.08), transparent 70%)',
        }}
      />

      <div className="container-page h-full flex items-center relative">
        <div className="relative w-full">
          {features.map((f, i) => (
            <div
              key={i}
              className="pinned-panel absolute inset-0 flex flex-col justify-center"
              style={{ pointerEvents: i === 0 ? 'auto' : 'none' }}
            >
              <p className="eyebrow font-mono mb-5">{f.badge}</p>
              <h3 className="text-4xl md:text-6xl font-bold tracking-tight max-w-4xl leading-[1.05]">
                {f.title}
              </h3>
              <p className="mt-6 text-lg md:text-xl text-bone/70 max-w-2xl leading-relaxed">
                {f.body}
              </p>
            </div>
          ))}

          {/* Progress dots */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-3">
            {features.map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-bone/30" />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile fallback — stack all panels */}
      <style jsx>{`
        @media (max-width: 767px) {
          .pinned-panel {
            position: relative !important;
            opacity: 1 !important;
            visibility: visible !important;
            transform: none !important;
            padding: 4rem 0;
          }
        }
      `}</style>
    </div>
  );
}
