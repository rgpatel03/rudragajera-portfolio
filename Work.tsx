import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ArrowUpRight } from 'lucide-react';
import { Reveal, SectionHeading } from '../Reveal';
import { PROJECTS } from '@/data';
import type { Project } from '@/types';

type FullProject = Project & { software: string; category: string };

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: FullProject;
  index: number;
  onOpen: (p: FullProject) => void;
}) {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const onMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setPos({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
    });
  };

  return (
    <Reveal delay={(index % 3) * 0.08} className="h-full">
      <motion.button
        onClick={() => onOpen(project)}
        onMouseMove={onMove}
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
        data-cursor="view"
        className="border-glow group relative block h-full w-full overflow-hidden rounded-2xl glass text-left"
      >
        {/* cursor glow */}
        <div
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(220px circle at ${pos.x}% ${pos.y}%, rgba(212,255,58,0.18), transparent 60%)`,
          }}
        />

        <div className="relative aspect-[16/11] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            width={1200}
            height={825}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />

          {/* play button */}
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              whileHover={{ scale: 1 }}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-lime/50 bg-ink-950/60 backdrop-blur-md opacity-0 transition-all duration-400 group-hover:opacity-100"
            >
              <Play size={20} className="ml-0.5 fill-lime text-lime" />
            </motion.div>
          </div>

          <span className="absolute left-4 top-4 z-10 font-display text-[11px] font-medium uppercase tracking-[0.2em] text-lime">
            {project.num}
          </span>
          <span className="absolute right-4 top-4 z-10 rounded-full glass px-3 py-1 font-display text-[10px] uppercase tracking-[0.15em] text-white/70">
            {project.category}
          </span>
        </div>

        <div className="relative flex items-center justify-between p-5">
          <div>
            <h3 className="font-display text-lg font-semibold tracking-tight text-white">
              {project.title}
            </h3>
            <p className="mt-1 font-display text-[11px] uppercase tracking-[0.15em] text-white/40">
              {project.software}
            </p>
          </div>
          <ArrowUpRight
            size={18}
            className="text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lime"
          />
        </div>
      </motion.button>
    </Reveal>
  );
}

function ProjectModal({ project, onClose }: { project: FullProject | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink-950/80 p-4 backdrop-blur-xl"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="border-glow relative w-full max-w-4xl overflow-hidden rounded-3xl glass-strong shadow-card"
          >
            <button
              onClick={onClose}
              data-cursor="button"
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-ink-950/70 text-white/70 backdrop-blur-md transition-colors hover:text-lime"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className="relative aspect-video w-full overflow-hidden bg-ink-900">
              {project.video ? (
                <video
                  src={project.video}
                  controls
                  autoPlay
                  className="h-full w-full object-cover"
                />
              ) : (
                <>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-ink-950/50">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-lime/50 bg-ink-950/60 backdrop-blur-md">
                      <Play size={24} className="ml-1 fill-lime text-lime" />
                    </div>
                    <p className="font-display text-xs uppercase tracking-[0.2em] text-white/50">
                      Add a video URL to play
                    </p>
                  </div>
                </>
              )}
            </div>

            <div className="flex flex-col gap-4 p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-display text-[11px] font-medium uppercase tracking-[0.2em] text-lime">
                  {project.num}
                </span>
                <span className="rounded-full glass px-3 py-1 font-display text-[10px] uppercase tracking-[0.15em] text-white/60">
                  {project.category}
                </span>
                <span className="rounded-full glass px-3 py-1 font-display text-[10px] uppercase tracking-[0.15em] text-white/60">
                  {project.software}
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
                {project.title}
              </h3>
              <p className="max-w-2xl text-sm leading-relaxed text-white/55">
                {project.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Work() {
  const [active, setActive] = useState<FullProject | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [active]);

  return (
    <section id="work" className="relative px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected Work"
          title="SELECTED WORK"
          subtitle="A collection of edits, motion graphics and visual stories."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onOpen={setActive} />
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
