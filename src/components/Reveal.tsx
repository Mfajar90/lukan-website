'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'span';
}

export default function Reveal({ children, delay = 0, y = 24, className, as = 'div' }: Props) {
  const prefersReduced = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : y },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.65, 0.3, 0.9], delay } },
  };

  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}
