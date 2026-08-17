'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Award, Clock } from 'lucide-react';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  });
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');

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
      setTimeout(() => {
        setIsSent(false);
        setFormState({ name: '', company: '', email: '', message: '' });
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="py-24 px-6 sm:px-12 bg-black bg-cyber-grid border-t border-white/5 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#E0561B]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Title Header */}
        <header className="mb-16 text-center sm:text-left">
          <span className="text-accent-cyber uppercase tracking-widest text-xs font-mono font-bold block mb-4 border-l-2 border-accent-cyber pl-3">
            Contact Channels
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Connect With <span className="animate-gradient-text">Our Estimators</span>
          </h2>
          <p className="text-zinc-400 text-sm mt-3 max-w-xl font-sans leading-relaxed">
            Reach out to our offices in Delhi or Sonipat for custom pricing structures, raw material questions, or factory audit requests.
          </p>
        </header>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Location Hubs */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            {/* Hub 1: Head Office */}
            <motion.div
              whileHover={{
                scale: 1.02,
                borderColor: 'rgba(224, 86, 27, 0.3)',
                boxShadow: '0 10px 30px -10px rgba(224, 86, 27, 0.15)',
              }}
              transition={{ type: 'spring', stiffness: 350, damping: 22 }}
              className="glass-morphic p-8 rounded-3xl border border-white/5 flex flex-col justify-between group flex-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold">Logistics & Accounts</span>
                  <Award className="w-4 h-4 text-secondary-kraft" />
                </div>
                <h3 className="font-display text-xl font-bold text-white uppercase mb-3 group-hover:text-accent-cyber transition-colors">
                  Head Office
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex gap-2.5 items-start">
                  <MapPin className="w-5 h-5 text-secondary-kraft shrink-0 mt-0.5" />
                  <span>
                    173, Deepali Enclave, Pitampura,<br />
                    Delhi - 110034, India.
                  </span>
                </p>
              </div>
              <div className="space-y-2 border-t border-white/5 pt-4 text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-zinc-600" />
                  <span>+91-11-47082459</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-zinc-600" />
                  <span>+91-11-42466642</span>
                </div>
              </div>
            </motion.div>

            {/* Hub 2: Manufacturing Works */}
            <motion.div
              whileHover={{
                scale: 1.02,
                borderColor: 'rgba(224, 86, 27, 0.3)',
                boxShadow: '0 10px 30px -10px rgba(224, 86, 27, 0.15)',
              }}
              transition={{ type: 'spring', stiffness: 350, damping: 22 }}
              className="glass-morphic p-8 rounded-3xl border border-white/5 flex flex-col justify-between group flex-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold">Kami Production Floor</span>
                  <Clock className="w-4 h-4 text-accent-cyber animate-pulse" />
                </div>
                <h3 className="font-display text-xl font-bold text-white uppercase mb-3 group-hover:text-accent-cyber transition-colors">
                  Kami Works
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex gap-2.5 items-start">
                  <MapPin className="w-5 h-5 text-accent-cyber shrink-0 mt-0.5" />
                  <span>
                    60/7, Kami-Gannaur Road,<br />
                    V.P.O. – Kami, Dist.- Sonipat - 131001, Haryana.
                  </span>
                </p>
              </div>
              <div className="space-y-2 border-t border-white/5 pt-4 text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-zinc-600" />
                  <span>+91-8860602060</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-zinc-600" />
                  <a href="mailto:kuberpack@gmail.com" className="hover:text-accent-cyber transition-colors">
                    kuberpack@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Direct Inquiry Form */}
          <div className="lg:col-span-7 glass-morphic p-8 sm:p-10 rounded-3xl border border-white/5">
            <h3 className="font-display text-xl font-bold text-white uppercase mb-6">
              Corporate Message Channels
            </h3>
            
            {isSent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center space-y-4"
              >
                <div className="w-12 h-12 bg-accent-cyber/15 border border-accent-cyber/30 rounded-full flex items-center justify-center text-accent-cyber font-mono font-bold text-lg">
                  ✓
                </div>
                <h4 className="font-display text-lg font-bold text-white uppercase">Message Dispatched</h4>
                <p className="text-zinc-400 text-xs">Our accounts team will contact you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="direct-name" className="block text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-2">Name</label>
                    <input
                      type="text"
                      id="direct-name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm font-mono text-white focus:outline-none focus:border-accent-cyber transition-colors"
                      placeholder="Jane Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="direct-company" className="block text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-2">Company Name</label>
                    <input
                      type="text"
                      id="direct-company"
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm font-mono text-white focus:outline-none focus:border-accent-cyber transition-colors"
                      placeholder="Acme Inc."
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="direct-email" className="block text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-2">Corporate Email</label>
                  <input
                    type="email"
                    id="direct-email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm font-mono text-white focus:outline-none focus:border-accent-cyber transition-colors"
                    placeholder="jane@acme.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="direct-message" className="block text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-2">Inquiry Specifications</label>
                  <textarea
                    id="direct-message"
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm font-mono text-white focus:outline-none focus:border-accent-cyber transition-colors resize-none"
                    placeholder="Enter your message details, logistics volumes, or questions..."
                    required
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-xs font-mono">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-4 bg-accent-cyber text-white font-mono font-bold tracking-widest rounded-xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(224,86,27,0.4)] uppercase text-xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSending ? 'Sending...' : 'Send Corporate Inquiry'}
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
