import { Instagram, Youtube, Linkedin, ArrowUp } from 'lucide-react';
import { CONTACT, NAV_LINKS, PROFILE } from '@/data';

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative border-t border-white/10 px-6 py-12 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:items-start">
          <div className="flex flex-col items-center gap-3 md:items-start">
            <h3 className="font-display text-2xl font-bold tracking-tight text-white">
              {PROFILE.name.toUpperCase()}
            </h3>
            <p className="font-display text-[11px] uppercase tracking-[0.25em] text-lime/80">
              {PROFILE.title}
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                data-cursor="link"
                className="font-display text-sm text-white/50 transition-colors hover:text-lime"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {[
              { Icon: Instagram, href: CONTACT.instagramUrl, label: 'Instagram' },
              { Icon: Youtube, href: CONTACT.youtubeUrl, label: 'YouTube' },
              { Icon: Linkedin, href: CONTACT.linkedinUrl, label: 'LinkedIn' },
            ].map(({ Icon: I, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                data-cursor="link"
                className="flex h-11 w-11 items-center justify-center rounded-full glass text-white/60 transition-all duration-300 hover:border-lime/40 hover:text-lime"
              >
                <I size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="font-display text-xs text-white/40">
            © 2026 {PROFILE.name}. All Rights Reserved.
          </p>
          <button
            onClick={scrollTop}
            data-cursor="button"
            className="group flex items-center gap-2 rounded-full glass px-4 py-2 font-display text-xs uppercase tracking-[0.15em] text-white/60 transition-colors hover:text-lime"
          >
            Back to top
            <ArrowUp size={14} className="transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
