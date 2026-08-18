import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import RFQForm from '@/components/RFQForm';

export const metadata: Metadata = {
  title: 'Contact & Request a Quote',
  description:
    'Request a B2B corrugated packaging quote from Kuber Paper & Pack. Offices in Pitampura, Delhi and the manufacturing plant in Sonipat, Haryana.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
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
          <RFQForm />

          {/* Facility photo + condensed contact chips */}
          <section className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden border border-white/5 h-[280px] group">
              <Image
                src="/images/factory-aerial.webp"
                alt="Kuber Paper & Pack manufacturing facility, Sonipat"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/5" />
              <div className="absolute inset-x-0 bottom-0 p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-secondary-kraft shrink-0" />
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">Head Office — Pitampura, Delhi</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-accent-cyber shrink-0" />
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">Kami Works — Sonipat, Haryana</span>
                </div>
              </div>
            </div>

            <div className="glass-morphic p-6 rounded-3xl border border-white/5 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-accent-cyber font-display text-2xl font-black mb-1">3,500 MT</div>
                <div className="text-zinc-500 text-[9px] uppercase tracking-widest font-mono">Monthly Capacity</div>
              </div>
              <div>
                <div className="text-secondary-kraft font-display text-2xl font-black mb-1">ISO 9001</div>
                <div className="text-zinc-500 text-[9px] uppercase tracking-widest font-mono">Certified</div>
              </div>
              <div>
                <div className="text-accent-cyber font-display text-2xl font-black mb-1">&lt; 24h</div>
                <div className="text-zinc-500 text-[9px] uppercase tracking-widest font-mono">RFQ Response</div>
              </div>
            </div>

            <p className="text-zinc-500 text-xs font-mono text-center leading-relaxed">
              Full contact details, phone lines, and email for both locations are in the footer below.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
