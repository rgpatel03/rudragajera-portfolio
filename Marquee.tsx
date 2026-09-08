const ITEMS = [
  'VIDEO EDITING',
  'MOTION GRAPHICS',
  'COLOR GRADING',
  'SOUND DESIGN',
  'SHORT-FORM CONTENT',
  'VISUAL EFFECTS',
  'CREATIVE STORYTELLING',
];

export function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="relative overflow-hidden border-y border-white/8 py-6">
      <div className="flex animate-[marquee_28s_linear_infinite] gap-10 whitespace-nowrap">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-2xl font-semibold uppercase tracking-tight text-white/15 md:text-3xl">
            {item}
            <span className="text-lime/40">✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
    </div>
  );
}
