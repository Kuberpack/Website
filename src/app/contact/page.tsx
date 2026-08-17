'use client';

import React, { useState } from 'react';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    volume: 'under-10',
    ply: '3-ply',
    message: '',
  });
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormState((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSending(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Failed to send message.');
      }
      setIsSent(true);
      setFormState({
        name: '',
        company: '',
        email: '',
        phone: '',
        volume: 'under-10',
        ply: '3-ply',
        message: '',
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-black pt-32 pb-20 px-6 sm:px-12 bg-cyber-grid overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-accent-cyber/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-secondary-kraft/5 rounded-full blur-[130px] pointer-events-none" />

      <main className="max-w-6xl mx-auto relative z-10">
        <header className="mb-16">
          <span className="text-accent-cyber uppercase tracking-widest text-xs font-mono font-bold block mb-4 border-l-2 border-accent-cyber pl-3">
            Get In Touch
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-black tracking-tight text-white mb-6 uppercase">
            Request a <span className="animate-gradient-text">B2B Quote</span>
          </h1>
          <p className="max-w-3xl text-zinc-400 text-lg leading-relaxed font-sans">
            Connect with our engineering team to review box configurations, burst-testing limits, and custom sample requirements.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* RFQ Form */}
          <section className="lg:col-span-7 glass-morphic p-8 sm:p-12 rounded-3xl border border-white/5">
            <h2 className="font-display text-2xl font-bold text-white mb-8">
              RFQ Specifications
            </h2>
            {isSent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
                <div className="w-12 h-12 bg-accent-cyber/15 border border-accent-cyber/30 rounded-full flex items-center justify-center text-accent-cyber font-mono font-bold text-lg">
                  ✓
                </div>
                <h3 className="font-display text-lg font-bold text-white uppercase">RFQ Submitted</h3>
                <p className="text-zinc-400 text-sm">Our estimators will get back to you shortly.</p>
              </div>
            ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyber transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    value={formState.company}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyber transition-colors"
                    placeholder="Acme Corp"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">Corporate Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyber transition-colors"
                    placeholder="john@company.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">Phone / Mobile</label>
                  <input
                    type="tel"
                    id="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyber transition-colors"
                    placeholder="+91-XXXXX-XXXXX"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="volume" className="block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">Expected Vol. / Month</label>
                  <select
                    id="volume"
                    value={formState.volume}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-zinc-300 focus:outline-none focus:border-accent-cyber transition-colors appearance-none"
                  >
                    <option value="under-10" className="bg-black text-white">Under 10 MT</option>
                    <option value="10-50" className="bg-black text-white">10 - 50 MT</option>
                    <option value="50-100" className="bg-black text-white">50 - 100 MT</option>
                    <option value="over-100" className="bg-black text-white">Over 100 MT</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="ply" className="block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">Configuration Required</label>
                  <select
                    id="ply"
                    value={formState.ply}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-zinc-300 focus:outline-none focus:border-accent-cyber transition-colors appearance-none"
                  >
                    <option value="3-ply" className="bg-black text-white">3-Ply Corrugated Box</option>
                    <option value="5-ply" className="bg-black text-white">5-Ply Corrugated Box</option>
                    <option value="7-ply" className="bg-black text-white">7-Ply Corrugated Box</option>
                    <option value="custom" className="bg-black text-white">Custom Die Cut / Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">Dimensions & Structural Requirements</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyber transition-colors resize-none"
                  placeholder="E.g., 400x300x250 mm, 24 BF Kraft paper, target loading capacity 15kg..."
                />
              </div>

              {error && <p className="text-red-400 text-xs font-mono">{error}</p>}

              <button
                type="submit"
                disabled={isSending}
                className="w-full py-4 bg-gradient-to-r from-accent-cyber to-emerald-500 text-black font-mono font-bold tracking-widest rounded-xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,255,102,0.4)] uppercase cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? 'Submitting...' : 'Submit RFQ Request'}
              </button>
            </form>
            )}
          </section>

          {/* Contact Details */}
          <section className="lg:col-span-5 space-y-8">
            <div className="glass-morphic p-8 rounded-3xl border border-white/5">
              <h3 className="font-display text-lg font-bold text-white mb-4 uppercase tracking-wider border-l-2 border-accent-cyber pl-3">
                Head Office
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-sans">
                173, Deepali Enclave, Pitampura,<br />Delhi - 110034, India.
              </p>
              <div className="space-y-2 text-sm font-mono text-zinc-400 border-t border-white/5 pt-4">
                <div>Ph: +91-11-47082459</div>
                <div>Ph: +91-11-42466642</div>
              </div>
            </div>

            <div className="glass-morphic p-8 rounded-3xl border border-white/5">
              <h3 className="font-display text-lg font-bold text-white mb-4 uppercase tracking-wider border-l-2 border-secondary-kraft pl-3">
                Works (Factory)
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-sans">
                60/7, Kami-Gannaur Road,<br />V.P.O. – Kami, Dist.- Sonipat - 131001, Haryana, India.
              </p>
              <div className="space-y-2 text-sm font-mono text-zinc-400 border-t border-white/5 pt-4">
                <div>Ph: +91-8860602060</div>
                <div>Email: <a href="mailto:kuberpack@gmail.com" className="text-accent-cyber hover:underline">kuberpack@gmail.com</a></div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
