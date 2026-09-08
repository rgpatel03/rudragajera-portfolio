import { motion } from 'framer-motion';
import { Reveal, SectionHeading } from '../Reveal';
import { TIMELINE } from '@/data';

export function Journey() {
  return (
    <section id="journey" className="relative px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="My Journey" title="MY JOURNEY" />

        <div className="relative mt-14 pl-8 md:pl-10">
          {/* vertical line */}
          <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-lime/60 via-white/10 to-transparent" />

          {TIMELINE.map((item, i) => (
            <Reveal key={i} delay={0.1} className="relative">
              {/* node */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.15 }}
                className="absolute -left-[33px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-lime bg-ink-950 shadow-glow md:-left-[41px]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-lime" />
              </motion.div>

              <motion.div
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="border-glow mb-6 rounded-2xl glass p-6 md:p-7"
              >
                <span className="font-display text-[11px] font-medium uppercase tracking-[0.2em] text-lime">
                  {item.year}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold text-white md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-1 font-display text-sm uppercase tracking-wide text-white/40">
                  {item.subtitle}
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/55">
                  {item.description}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
