import { motion } from 'framer-motion';

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-ink-950">
      {/* base grid */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      {/* radial vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 80% at 50% 0%, rgba(20,20,24,0.4) 0%, rgba(5,5,5,0.95) 70%, #050505 100%)',
        }}
      />

      {/* lime glow blob */}
      <motion.div
        className="absolute -left-40 top-[10%] h-[480px] w-[480px] rounded-full bg-lime/10 blur-[140px]"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* purple glow blob */}
      <motion.div
        className="absolute right-[-10%] top-[40%] h-[520px] w-[520px] rounded-full bg-purple-glow/10 blur-[160px]"
        animate={{ x: [0, -50, 0], y: [0, 60, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* blue glow blob */}
      <motion.div
        className="absolute bottom-[5%] left-[30%] h-[360px] w-[360px] rounded-full bg-blue-glow/8 blur-[130px]"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* noise */}
      <div className="absolute inset-0 noise opacity-[0.035] mix-blend-overlay" />
    </div>
  );
}
