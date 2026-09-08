import { useState, useRef, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, CheckCircle2, Send } from 'lucide-react';
import { submitFeedback } from '@/lib/db';

type Status = 'idle' | 'loading' | 'success' | 'error';

export function FeedbackForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', website: '' });
  const lastSubmitRef = useRef(0);

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;

    // Honeypot: bots fill hidden fields; humans never see them
    if (form.website) return;

    // Rate limit: one submission per 10 seconds
    const now = Date.now();
    if (now - lastSubmitRef.current < 10000) {
      setStatus('error');
      setErrorMsg('Please wait a moment before sending another message.');
      return;
    }

    setStatus('loading');
    setErrorMsg('');
    try {
      await submitFeedback({
        name: form.name.slice(0, 100),
        email: form.email.slice(0, 200),
        phone: form.phone.slice(0, 30),
        message: form.message.slice(0, 2000),
      });
      lastSubmitRef.current = now;
      setStatus('success');
      setForm({ name: '', email: '', phone: '', message: '', website: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  const fieldClass =
    'w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 font-sans text-sm text-white placeholder:text-white/30 transition-colors focus:border-lime/50 focus:outline-none focus:ring-1 focus:ring-lime/30';
  const labelClass =
    'mb-2 block font-display text-[11px] font-medium uppercase tracking-[0.15em] text-white/50';

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5 text-left" aria-describedby={status === 'error' ? 'fb-error' : undefined}>
      {/* Honeypot — hidden from humans, catches bots */}
      <div aria-hidden style={{ position: 'absolute', left: '-9999px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}>
        <label htmlFor="fb-website">Website</label>
        <input
          id="fb-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={update('website')}
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fb-name" className={labelClass}>
            Name
          </label>
          <input
            id="fb-name"
            type="text"
            required
            maxLength={100}
            value={form.name}
            onChange={update('name')}
            placeholder="Your name"
            autoComplete="name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="fb-email" className={labelClass}>
            Email
          </label>
          <input
            id="fb-email"
            type="email"
            required
            maxLength={200}
            value={form.email}
            onChange={update('email')}
            placeholder="you@example.com"
            autoComplete="email"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="fb-phone" className={labelClass}>
          Phone Number <span className="text-white/25">(optional)</span>
        </label>
        <input
          id="fb-phone"
          type="tel"
          maxLength={30}
          value={form.phone}
          onChange={update('phone')}
          placeholder="+91 00000 00000"
          autoComplete="tel"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="fb-message" className={labelClass}>
          Message
        </label>
        <textarea
          id="fb-message"
          required
          rows={4}
          maxLength={2000}
          value={form.message}
          onChange={update('message')}
          placeholder="Tell me about your project, idea, or feedback..."
          className={`${fieldClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        data-cursor="button"
        className="group inline-flex items-center justify-center gap-2 rounded-full bg-lime px-7 py-3.5 font-display text-sm font-medium text-ink-950 transition-colors hover:bg-lime-200 disabled:opacity-60"
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send size={16} className="transition-transform group-hover:translate-x-0.5" />
          </>
        )}
      </button>

      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-3 rounded-xl border border-lime/30 bg-lime/5 px-4 py-3"
          >
            <CheckCircle2 size={18} className="text-lime" />
            <span className="font-sans text-sm text-white/80">
              Thank you! Your message has been received.
            </span>
          </motion.div>
        )}
        {status === 'error' && (
          <motion.div
            id="fb-error"
            role="alert"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="rounded-xl border border-red-500/30 bg-red-500/5 px-4 py-3 font-sans text-sm text-red-300"
          >
            {errorMsg}
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
