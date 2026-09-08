import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className = '',
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`flex flex-col gap-4 ${center ? 'items-center text-center' : ''}`}>
      {eyebrow && (
        <Reveal>
          <span className="inline-flex items-center gap-2 font-display text-[11px] font-medium uppercase tracking-[0.3em] text-lime/80">
            <span className="h-1 w-1 rounded-full bg-lime" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tighter text-white sm:text-5xl md:text-6xl">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.16}>
          <p className={`max-w-xl text-base text-white/50 ${center ? 'mx-auto' : ''}`}>{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
