import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const duration = 2200;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      // easeOutExpo
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setProgress(Math.round(eased * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 350);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (done) {
      const id = setTimeout(onComplete, 750);
      return () => clearTimeout(id);
    }
  }, [done, onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] bg-ink-950 flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/5 blur-3xl" />

          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-[11px] uppercase tracking-[0.35em] text-white/40"
            >
              Rudra Gajera
            </motion.div>

            <div className="relative h-px w-56 overflow-hidden bg-white/10">
              <motion.div
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-lime to-lime-400"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-baseline gap-1 font-display">
              <span className="text-5xl font-bold tabular-nums text-white">
                {String(progress).padStart(2, '0')}
              </span>
              <span className="text-xl font-medium text-lime">%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
