import { motion } from 'framer-motion';
import { Reveal, SectionHeading } from '../Reveal';
import { Icon } from '../Icon';
import { SERVICES } from '@/data';

export function Services() {
  return (
    <section id="services" className="relative px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="What I Do" title="WHAT I DO" />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="border-glow group relative h-full overflow-hidden rounded-2xl glass p-7"
              >
                {/* hover glow */}
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-lime/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-lime/20 bg-lime/5 text-lime">
                    <Icon name={s.icon} size={22} />
                  </div>
                  <span className="font-display text-5xl font-bold text-white/5 transition-colors duration-300 group-hover:text-lime/15">
                    {s.num}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-lg font-semibold uppercase tracking-wide text-white">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/50">{s.description}</p>

                <div className="mt-5 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-lime/60 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
