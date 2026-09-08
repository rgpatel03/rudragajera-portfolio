import { motion } from 'framer-motion';
import { Reveal, SectionHeading } from '../Reveal';
import { TOOLS } from '@/data';

function ToolGlyph({ name }: { name: string }) {
  // Stylized monogram badges — not official logos, original treatments.
  const map: Record<string, { letters: string; bg: string; fg: string }> = {
    premiere: { letters: 'Pr', bg: 'from-[#2a0d3a] to-[#1a0a2a]', fg: 'text-[#c79bff]' },
    'after-effects': { letters: 'Ae', bg: 'from-[#0a1a3a] to-[#0a1428]', fg: 'text-[#9ec4ff]' },
    capcut: { letters: 'Cc', bg: 'from-[#1a0a0a] to-[#2a1010]', fg: 'text-[#ff8a8a]' },
  };
  const m = map[name] ?? { letters: '?', bg: 'from-ink-700 to-ink-800', fg: 'text-white' };
  return (
    <div
      className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${m.bg} shadow-card`}
    >
      <span className={`font-display text-2xl font-bold ${m.fg}`}>{m.letters}</span>
    </div>
  );
}

function SkillBar({ delay }: { delay: number }) {
  return (
    <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-white/8">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-lime to-lime-400"
        initial={{ width: '0%' }}
        whileInView={{ width: '82%' }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}

export function Tools() {
  return (
    <section id="skills" className="relative px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Toolkit" title="TOOLS & TECHNOLOGIES" />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {TOOLS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="border-glow group relative h-full overflow-hidden rounded-2xl glass-strong p-7"
              >
                <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-purple-glow/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="flex items-center gap-5">
                  <ToolGlyph name={t.icon} />
                  <div>
                    <h3 className="font-display text-base font-semibold uppercase tracking-wide text-white">
                      {t.name}
                    </h3>
                    <p className="mt-1 font-display text-xs uppercase tracking-[0.15em] text-lime/80">
                      {t.skill}
                    </p>
                  </div>
                </div>

                <SkillBar delay={0.2 + i * 0.1} />
                <div className="mt-2 flex justify-between font-display text-[10px] uppercase tracking-[0.15em] text-white/30">
                  <span>Skill Level</span>
                  <span>Advanced</span>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
