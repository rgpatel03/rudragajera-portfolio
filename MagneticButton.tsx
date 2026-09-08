import { useRef, type ReactNode, type MouseEvent } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

type Props = {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'ghost';
  onClick?: () => void;
  className?: string;
  cursor?: 'button' | 'link';
};

export function MagneticButton({
  children,
  href,
  variant = 'primary',
  onClick,
  className = '',
  cursor = 'button',
}: Props) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18 });
  const sy = useSpring(y, { stiffness: 250, damping: 18 });
  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const mx = e.clientX - (r.left + r.width / 2);
    const my = e.clientY - (r.top + r.height / 2);
    x.set(mx * 0.35);
    y.set(my * 0.35);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    'group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-display text-sm font-medium tracking-wide transition-colors duration-300 will-change-transform';
  const styles =
    variant === 'primary'
      ? 'bg-lime text-ink-950 hover:bg-lime-200 shadow-glow'
      : 'glass text-white hover:border-lime/40 hover:text-lime';

  const content = (
    <motion.a
      ref={ref as React.RefObject<HTMLAnchorElement>}
      href={href}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={reset}
      data-cursor={cursor}
      style={{ x: sx, y: sy }}
      className={`${base} ${styles} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === 'ghost' && (
        <span className="absolute inset-0 rounded-full bg-lime/0 transition-colors duration-300 group-hover:bg-lime/5" />
      )}
    </motion.a>
  );

  if (!href) {
    return (
      <motion.button
        ref={ref as React.RefObject<HTMLButtonElement>}
        onMouseMove={onMove}
        onMouseLeave={reset}
        data-cursor={cursor}
        onClick={onClick}
        style={{ x: sx, y: sy }}
        className={`${base} ${styles} ${className}`}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </motion.button>
    );
  }

  return content;
}
