import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState<'default' | 'button' | 'view' | 'link'>('default');
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 600, damping: 40, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 600, damping: 40, mass: 0.3 });
  const rafRef = useRef(0);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    setEnabled(true);
    document.body.style.cursor = 'none';

    const move = (e: MouseEvent) => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        x.set(e.clientX);
        y.set(e.clientY);
      });
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const interactive = t.closest('a, button, [data-cursor]');
      if (!interactive) {
        setVariant('default');
        return;
      }
      const cv = interactive.getAttribute('data-cursor');
      if (cv === 'view') setVariant('view');
      else if (cv === 'button') setVariant('button');
      else setVariant('link');
    };

    window.addEventListener('mousemove', move);
    return () => {
      window.removeEventListener('mousemove', move);
      document.body.style.cursor = '';
    };
  }, [x, y]);

  if (!enabled) return null;

  const size = variant === 'view' ? 96 : variant === 'button' ? 64 : variant === 'link' ? 40 : 14;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[90] flex items-center justify-center rounded-full"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full border border-lime/70 bg-lime/5 backdrop-blur-sm"
        animate={{
          width: size,
          height: size,
          marginLeft: -size / 2,
          marginTop: -size / 2,
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 28 }}
      >
        {variant === 'view' && (
          <span className="font-display text-[11px] font-semibold uppercase tracking-[0.15em] text-lime">
            View
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}
