import {
  Film,
  Sparkles,
  Smartphone,
  Share2,
  Palette,
  BookOpen,
  Wand2,
  Target,
  Zap,
  CheckCircle2,
  type LucideIcon,
} from 'lucide-react';

const MAP: Record<string, LucideIcon> = {
  film: Film,
  sparkles: Sparkles,
  smartphone: Smartphone,
  share: Share2,
  palette: Palette,
  'book-open': BookOpen,
  wand: Wand2,
  target: Target,
  zap: Zap,
  'check-circle': CheckCircle2,
};

export function Icon({
  name,
  size = 22,
  className = '',
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const C = MAP[name] ?? Sparkles;
  return <C size={size} className={className} />;
}
