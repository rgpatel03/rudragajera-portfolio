import { motion } from 'framer-motion';
import { Reveal, SectionHeading } from '../Reveal';
import { Icon } from '../Icon';
import { WHY } from '@/data';

export function Why() {
  return (
    <section id="why" className="relative px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Why Me" title="WHY RUDRA?" />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="border-glow group relative h-full overflow-hidden rounded-2xl glass p-6"
              >
                <div className="absolute -left-16 -bottom-16 h-32 w-32 rounded-full bg-lime/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-lime/20 bg-lime/5 text-lime">
                  <Icon name={w.icon} size={20} />
                </div>
                <h3 className="mt-5 font-display text-base font-semibold uppercase tracking-wide text-white">
                  {w.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/50">{w.description}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
