import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { MagneticButton } from '../MagneticButton';
import { PROFILE } from '@/data';

const EASE = [0.16, 1, 0.3, 1] as const;

function AnimatedName() {
  const name = PROFILE.name.toUpperCase();
  return (
    <h1 className="font-display text-[clamp(3rem,11vw,9rem)] font-bold leading-[0.9] tracking-tightest text-white shadow-text">
      <span className="sr-only">{PROFILE.name}</span>
      <span aria-hidden className="flex flex-wrap gap-x-[0.1em]">
        {name.split('').map((char, i) => (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.5 + i * 0.045,
              ease: EASE,
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </span>
    </h1>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const scrollToWork = () => document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToContact = () =>
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-16 md:px-12"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
        {/* Text column */}
        <motion.div style={{ y: textY, opacity }} className="flex flex-col gap-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: EASE }}
            className="flex flex-wrap items-center gap-4"
          >
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 font-display text-[11px] font-medium uppercase tracking-[0.25em] text-white/70">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
              </span>
              Available for Projects
            </span>
            <span className="hidden font-display text-[11px] uppercase tracking-[0.25em] text-white/40 sm:inline">
              {PROFILE.experience}
            </span>
          </motion.div>

          <AnimatedName />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8, ease: EASE }}
            className="flex flex-col gap-1"
          >
            <p className="font-display text-xl font-semibold uppercase tracking-wide text-lime sm:text-2xl md:text-3xl">
              {PROFILE.titleLines[0]}
            </p>
            <p className="font-display text-xl font-semibold uppercase tracking-wide text-white/80 sm:text-2xl md:text-3xl">
              {PROFILE.titleLines[1]}
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.8, ease: EASE }}
            className="max-w-md text-base leading-relaxed text-white/50"
          >
            {PROFILE.heroDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.7, ease: EASE }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <MagneticButton onClick={scrollToWork} variant="primary">
              View My Work
              <ArrowUpRight size={18} />
            </MagneticButton>
            <MagneticButton onClick={scrollToContact} variant="ghost">
              Let's Work Together
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7, duration: 1 }}
            className="mt-4 flex items-center gap-5 border-t border-white/10 pt-5"
          >
            <div>
              <div className="font-display text-2xl font-bold text-white">1+</div>
              <div className="font-display text-[10px] uppercase tracking-[0.2em] text-white/40">
                Years
              </div>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <div className="font-display text-2xl font-bold text-white">Video</div>
              <div className="font-display text-[10px] uppercase tracking-[0.2em] text-white/40">
                Editing Experience
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Photo card */}
        <motion.div
          style={{ y: photoY }}
          initial={{ opacity: 0, scale: 0.92, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 1.1, ease: EASE }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="relative">
            {/* glow */}
            <div className="absolute -inset-6 rounded-[2rem] bg-lime/10 blur-3xl" />
            <div className="absolute -inset-2 rounded-[1.8rem] bg-gradient-to-br from-lime/20 via-transparent to-purple-glow/20 blur-2xl" />

            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="border-glow relative overflow-hidden rounded-[1.5rem] glass-strong p-2 shadow-card"
            >
              <div className="relative overflow-hidden rounded-[1.2rem]">
                <img
                  src={PROFILE.photo}
                  alt={PROFILE.name}
                  width={700}
                  height={900}
                  className="aspect-[4/5] w-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />

                {/* floating tag */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute bottom-4 left-4 rounded-2xl glass-strong px-4 py-3"
                >
                  <div className="font-display text-[10px] uppercase tracking-[0.2em] text-lime">
                    {PROFILE.experience}
                  </div>
                  <div className="font-display text-sm font-semibold text-white">
                    Motion Designer
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* floating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
              className="absolute -right-6 -top-6 h-16 w-16 rounded-full border border-dashed border-lime/40"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              className="absolute -bottom-5 -left-5 h-12 w-12 rounded-full border border-white/10"
            />
          </div>
        </motion.div>
      </div>

      {/* scroll indicator */}
      <motion.button
        onClick={scrollToWork}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/40 md:flex"
        data-cursor="link"
      >
        <span className="font-display text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
