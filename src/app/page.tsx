import React from 'react';
import Hero from '@/components/Hero';
import ClientMarquee from '@/components/ClientMarquee';
import CapabilitiesShowcase from '@/components/CapabilitiesShowcase';
import ProductConfigurator from '@/components/ProductConfigurator';
import ContactSection from '@/components/ContactSection';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Dynamic Animated Hero Section */}
      <Hero />

      {/* Infinite Scrolling Client Marquee */}
      <ClientMarquee />

      {/* State-of-the-Art horizontal scroll capabilities showcase */}
      <CapabilitiesShowcase />

      {/* B2B Product Configurator Section */}
      <ProductConfigurator />

      {/* Key Metrics Section */}
      <section className="py-16 px-6 sm:px-12 max-w-6xl mx-auto w-full relative z-10">
        <div className="glass-morphic p-8 sm:p-12 rounded-[32px] border border-white/5 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          <div className="pt-6 sm:pt-0 sm:px-6">
            <div className="text-5xl font-display font-black text-white mb-2">150 MT</div>
            <p className="text-zinc-400 font-mono text-xs uppercase tracking-widest">Monthly Manufacturing Capacity</p>
          </div>
          <div className="pt-6 sm:pt-0 sm:px-10">
            <div className="text-5xl font-display font-black text-accent-cyber mb-2">100%</div>
            <p className="text-zinc-400 font-mono text-xs uppercase tracking-widest">Solar-Powered Facility Assistance</p>
          </div>
          <div className="pt-6 sm:pt-0 sm:px-10">
            <div className="text-5xl font-display font-black text-secondary-kraft mb-2">12-35 BF</div>
            <p className="text-zinc-400 font-mono text-xs uppercase tracking-widest">Bursting Factor Calibration Range</p>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-20 px-6 sm:px-12 max-w-6xl mx-auto w-full relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white uppercase mb-4">
            Industrial Packaging, <span className="text-secondary-kraft">Re-Engineered</span>
          </h2>
          <p className="text-zinc-400 text-sm font-mono max-w-lg mx-auto uppercase tracking-widest">
            Combining structure, science, and scale for modern B2B demands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-morphic p-8 sm:p-12 rounded-3xl border border-white/5 hover:border-accent-cyber/20 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-accent-cyber/10 border border-accent-cyber/20 flex items-center justify-center text-accent-cyber mb-6 font-mono font-bold">
              01
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-4">
              ISO 9001:2015 Quality Process
            </h3>
            <p className="text-zinc-400 leading-relaxed text-sm">
              We track paper moisture levels, test bursting factor using calibrated pneumatic burst testers, and perform strict size checking to ensure outer dimensions sync with inner partition sizing.
            </p>
          </div>

          <div className="glass-morphic p-8 sm:p-12 rounded-3xl border border-white/5 hover:border-accent-cyber/20 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-secondary-kraft/10 border border-secondary-kraft/20 flex items-center justify-center text-secondary-kraft mb-6 font-mono font-bold">
              02
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-4">
              Sustainability Integration
            </h3>
            <p className="text-zinc-400 leading-relaxed text-sm">
              Our works at Kami, Sonipat utilize solar-powered infrastructure. We offer fully recyclable corrugated kraft boxes, certified to meet eco-label expectations of leading multinational clients.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Contact & Inquiry Section */}
      <ContactSection />

      {/* CTA section */}
      <section className="py-20 px-6 sm:px-12 max-w-6xl mx-auto w-full relative z-10 text-center mb-16">
        <div className="glass-morphic p-12 rounded-[40px] border border-white/5 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-accent-cyber/5 rounded-full blur-[80px] pointer-events-none" />
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white uppercase mb-6 relative z-10">
            Secure Your Logistics Supply Chain
          </h2>
          <p className="text-zinc-400 text-base max-w-2xl mx-auto mb-10 relative z-10 leading-relaxed font-sans">
            Need a reliable box supplier with a capacity of 150 MT/month and zero quality slip-ups? Let&apos;s build a custom sample batch for your procurement verification.
          </p>
          <a 
            href="/contact" 
            className="inline-flex px-8 py-4 bg-[#E0561B] text-white font-mono font-bold tracking-widest rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(224,86,27,0.4)] hover:scale-105 relative z-10 uppercase cursor-pointer"
          >
            Request B2B Audit & Sample
          </a>
        </div>
      </section>
    </div>
  );
}
