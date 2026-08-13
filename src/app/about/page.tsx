import React from 'react';

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-black pt-32 pb-20 px-6 sm:px-12 bg-cyber-grid overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-cyber/10 rounded-full blur-[120px] pointer-events-none" />

      <main className="max-w-6xl mx-auto relative z-10">
        <header className="mb-16">
          <span className="text-accent-cyber uppercase tracking-widest text-xs font-mono font-bold block mb-4 border-l-2 border-accent-cyber pl-3">
            Who We Are
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-black tracking-tight text-white mb-6 uppercase">
            Pioneering the Future of <span className="animate-gradient-text">Packaging</span>
          </h1>
          <p className="max-w-3xl text-zinc-400 text-lg leading-relaxed font-sans">
            Kuber Paper & Pack Pvt. Ltd. is a premier ISO 9001:2015 certified manufacturer of high-quality corrugated boxes, sheets, and custom packaging solutions. Operating with a monthly capacity of 3,500 MT, we deliver robust, scalable, and environmentally sustainable packaging to industries nationwide.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="glass-morphic p-8 rounded-2xl border border-white/5 hover:border-accent-cyber/30 transition-all duration-300 group">
            <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-accent-cyber transition-colors">
              ISO 9001:2015 Certified
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Our processes comply strictly with international quality standards. From raw material inspection to final product loading, precision is guaranteed.
            </p>
          </div>

          <div className="glass-morphic p-8 rounded-2xl border border-white/5 hover:border-accent-cyber/30 transition-all duration-300 group">
            <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-accent-cyber transition-colors">
              3,500 MT / Month Capacity
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Equipped with automatic line machinery, we possess the scalability and muscle to deliver high-volume orders with lightning-fast turnaround times.
            </p>
          </div>

          <div className="glass-morphic p-8 rounded-2xl border border-white/5 hover:border-accent-cyber/30 transition-all duration-300 group">
            <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-accent-cyber transition-colors">
              Sustainable Innovation
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Our facility operates with solar power assistance, driving down carbon emissions and providing our clients with certified eco-friendly boxes.
            </p>
          </div>
        </section>

        {/* Vision & Mission section */}
        <section className="glass-morphic rounded-3xl p-8 sm:p-12 border border-white/5 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 w-[300px] h-[300px] bg-secondary-kraft/5 rounded-full blur-[80px] pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-2xl font-black text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
                Our Vision
              </h2>
              <p className="text-zinc-400 leading-relaxed font-sans">
                To transform industrial corrugated packaging from a basic utility into a high-performance asset for logistics. We strive to lead in smart structural engineering, digital tracking compatibility, and 100% circular, zero-waste manufacturing.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-black text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
                Our Promise
              </h2>
              <p className="text-zinc-400 leading-relaxed font-sans">
                &ldquo;Assuring your business needs&rdquo; is not just our motto—it is our operating protocol. We ensure zero delays, uncompromising burst-factor (BF) accuracy, and customized structural configurations that protect your high-value cargo.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
