import { Reveal } from '../Reveal';
import { MagneticButton } from '../MagneticButton';
import { FeedbackForm } from '../FeedbackForm';
import { CONTACT } from '@/data';
import { Mail, Instagram, MessageCircle, Phone, ArrowUpRight } from 'lucide-react';

export function Contact() {
  const mailto = CONTACT.email !== 'YOUR_EMAIL' ? `mailto:${CONTACT.email}` : '#';
  const waLink =
    CONTACT.whatsapp !== 'YOUR_WHATSAPP'
      ? `${CONTACT.whatsappUrl}${CONTACT.whatsapp.replace(/[^0-9]/g, '')}`
      : '#';
  const igLink = CONTACT.instagram !== 'YOUR_INSTAGRAM' ? CONTACT.instagramUrl : '#';
  const telLink = CONTACT.phone !== 'YOUR_PHONE_NUMBER' ? `tel:${CONTACT.phone.replace(/\s/g, '')}` : '#';

  const scrollToWork = () => document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="contact" className="relative px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Header card */}
        <div className="border-glow relative overflow-hidden rounded-3xl glass-strong p-8 text-center md:p-14">
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-lime/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-purple-glow/10 blur-3xl" />

          <Reveal>
            <span className="inline-flex items-center gap-2 font-display text-[11px] font-medium uppercase tracking-[0.3em] text-lime/80">
              <span className="h-1 w-1 rounded-full bg-lime" />
              Contact
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tighter text-white sm:text-5xl md:text-6xl">
              LET'S CREATE
              <br />
              <span className="text-gradient-lime">SOMETHING GREAT.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/55">
              Have a video project, brand campaign, social media content or creative idea? Let's
              turn it into something people remember.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton href={mailto} variant="primary">
                Start a Project
                <ArrowUpRight size={18} />
              </MagneticButton>
              <MagneticButton onClick={scrollToWork} variant="ghost">
                View My Work
              </MagneticButton>
            </div>
          </Reveal>
        </div>

        {/* Form + contact info */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          {/* Feedback form */}
          <Reveal className="h-full">
            <div className="border-glow relative h-full overflow-hidden rounded-3xl glass-strong p-7 md:p-9">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-lime/8 blur-3xl" />
              <h3 className="font-display text-xl font-semibold tracking-tight text-white">
                Send a Message
              </h3>
              <p className="mt-2 font-sans text-sm text-white/45">
                Fill out the form and I'll get back to you as soon as possible.
              </p>
              <div className="mt-6">
                <FeedbackForm />
              </div>
            </div>
          </Reveal>

          {/* Contact details */}
          <Reveal delay={0.1} className="h-full">
            <div className="flex h-full flex-col gap-4">
              <ContactCard
                icon={<Phone size={18} className="text-lime" />}
                label="Phone"
                value={CONTACT.phone}
                href={telLink}
              />
              <ContactCard
                icon={<Mail size={18} className="text-lime" />}
                label="Email"
                value={CONTACT.email}
                href={mailto}
              />
              <ContactCard
                icon={<Instagram size={18} className="text-lime" />}
                label="Instagram"
                value={CONTACT.instagram}
                href={igLink}
                external
              />
              <ContactCard
                icon={<MessageCircle size={18} className="text-lime" />}
                label="WhatsApp"
                value={CONTACT.whatsapp}
                href={waLink}
                external
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      data-cursor="link"
      className="border-glow group flex items-center gap-4 rounded-2xl glass p-5 transition-all duration-300 hover:-translate-y-0.5"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-lime/20 bg-lime/5">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="font-display text-[10px] uppercase tracking-[0.18em] text-white/40">
          {label}
        </div>
        <div className="truncate font-display text-sm text-white transition-colors group-hover:text-lime">
          {value}
        </div>
      </div>
      <ArrowUpRight
        size={16}
        className="ml-auto shrink-0 text-white/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lime"
      />
    </a>
  );
}
