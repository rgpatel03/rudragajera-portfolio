import { motion } from 'framer-motion';
import { Reveal, SectionHeading } from '../Reveal';
import { PROCESS } from '@/data';

export function Process() {
  return (
    <section id="process" className="relative px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Workflow" title="MY PROCESS" />

        <div className="mt-14 grid gap-5 md:grid-cols-5">
          {PROCESS.map((step, i) => (
            <Reveal key={step.num} delay={i * 0.1} className="relative">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="border-glow group relative h-full overflow-hidden rounded-2xl glass p-6"
              >
                <span className="font-display text-4xl font-bold text-white/8 transition-colors duration-300 group-hover:text-lime/25">
                  {step.num}
                </span>
                <h3 className="mt-4 font-display text-base font-semibold uppercase tracking-wide text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">{step.description}</p>

                {/* connector arrow (desktop) */}
                {i < PROCESS.length - 1 && (
                  <div className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center md:flex">
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.2 }}
                      className="h-1.5 w-1.5 rounded-full bg-lime/60"
                    />
                  </div>
                )}
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
