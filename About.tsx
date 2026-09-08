import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Reveal, SectionHeading } from '../Reveal';
import { PROFILE, STATS } from '@/data';

function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [display, setDisplay] = useState('00');

  useEffect(() => {
    if (!inView) return;
    const match = value.match(/(\d+)/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const target = parseInt(match[1], 10);
    const suffix = value.replace(match[1], '');
    let cur = 0;
    const dur = 1200;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      cur = Math.round(eased * target);
      setDisplay(`${String(cur).padStart(2, '0')}${suffix}`);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return <span ref={ref}>{display}</span>;
}

export function About() {
  return (
    <section id="about" className="relative px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="About Me" title="ABOUT ME" />

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          {/* Text */}
          <div className="flex flex-col gap-8">
            <Reveal>
              <p className="max-w-xl text-lg leading-relaxed text-white/60">{PROFILE.about}</p>
            </Reveal>

            <div className="grid grid-cols-3 gap-4">
              {STATS.map((s, i) => (
                <Reveal key={s.label} delay={0.1 + i * 0.08}>
                  <div className="border-glow rounded-2xl glass p-5">
                    <div className="font-display text-3xl font-bold text-gradient-lime sm:text-4xl">
                      <CountUp value={s.value} />
                    </div>
                    <div className="mt-2 font-display text-[10px] uppercase tracking-[0.18em] text-white/40">
                      {s.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Photo card */}
          <Reveal delay={0.2} className="relative">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-lime/15 to-purple-glow/15 blur-2xl" />
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="border-glow relative overflow-hidden rounded-[1.5rem] glass-strong p-2 shadow-card"
              >
                <div className="relative overflow-hidden rounded-[1.2rem]">
                  <img
                    src={PROFILE.photo}
                    alt={PROFILE.name}
                    width={700}
                    height={900}
                    className="aspect-[4/5] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div>
                      <div className="font-display text-sm font-bold text-white">
                        {PROFILE.name}
                      </div>
                      <div className="font-display text-[10px] uppercase tracking-[0.18em] text-lime">
                        {PROFILE.title}
                      </div>
                    </div>
                    <span className="flex h-2.5 w-2.5 rounded-full bg-lime shadow-glow" />
                  </div>
                </div>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
