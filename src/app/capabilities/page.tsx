import React from 'react';

export default function CapabilitiesPage() {
  return (
    <div className="relative min-h-screen bg-black pt-32 pb-20 px-6 sm:px-12 bg-cyber-grid overflow-hidden">
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-secondary-kraft/10 rounded-full blur-[120px] pointer-events-none" />

      <main className="max-w-6xl mx-auto relative z-10">
        <header className="mb-16">
          <span className="text-accent-cyber uppercase tracking-widest text-xs font-mono font-bold block mb-4 border-l-2 border-accent-cyber pl-3">
            Technical Edge
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-black tracking-tight text-white mb-6 uppercase">
            Engineering & <span className="animate-gradient-text">Production Power</span>
          </h1>
          <p className="max-w-3xl text-zinc-400 text-lg leading-relaxed font-sans">
            Our Sonipat facility features advanced machinery designed for maximum dimensional accuracy, custom strength calibration, and rapid prototyping.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="glass-morphic p-8 rounded-3xl border border-white/5 hover:border-accent-cyber/20 transition-all duration-300">
            <span className="text-accent-cyber text-2xl font-mono font-bold">01/</span>
            <h3 className="font-display text-2xl font-bold text-white mt-4 mb-3">
              Advanced Fluting & Laminating
            </h3>
            <p className="text-zinc-400 leading-relaxed text-sm">
              We manufacture a comprehensive range of board profiles including narrow A, B, C, and E flutes. Our laminating configurations enable 3-Ply, 5-Ply, and 7-Ply structures tailored to specific weight-bearing and drop-test specifications.
            </p>
          </div>

          <div className="glass-morphic p-8 rounded-3xl border border-white/5 hover:border-accent-cyber/20 transition-all duration-300">
            <span className="text-accent-cyber text-2xl font-mono font-bold">02/</span>
            <h3 className="font-display text-2xl font-bold text-white mt-4 mb-3">
              Rigorous Quality Lab testing
            </h3>
            <p className="text-zinc-400 leading-relaxed text-sm">
              In-house labs verify Bursting Factor (BF) from 12BF to 35BF, Grammage (GSM) consistency, Ring Crush Test (RCT) values, and box moisture control. Every batch leaves Sonipat with a certified testing certificate.
            </p>
          </div>

          <div className="glass-morphic p-8 rounded-3xl border border-white/5 hover:border-accent-cyber/20 transition-all duration-300">
            <span className="text-accent-cyber text-2xl font-mono font-bold">03/</span>
            <h3 className="font-display text-2xl font-bold text-white mt-4 mb-3">
              Precision Slotting & Die-Cutting
            </h3>
            <p className="text-zinc-400 leading-relaxed text-sm">
              Our high-accuracy rotary die cutters create complex configurations for telescopic boxes, folder-type boxes, and custom internal partitions/dividers to secure delicate electronic or glassware loads.
            </p>
          </div>

          <div className="glass-morphic p-8 rounded-3xl border border-white/5 hover:border-accent-cyber/20 transition-all duration-300">
            <span className="text-accent-cyber text-2xl font-mono font-bold">04/</span>
            <h3 className="font-display text-2xl font-bold text-white mt-4 mb-3">
              High-Speed Flexographic Printing
            </h3>
            <p className="text-zinc-400 leading-relaxed text-sm">
              Brand styling matters. Our multi-color flexographic printing machines apply high-contrast, smudge-resistant water-based inks, ensuring that your corporate branding, bar codes, and shipping warnings are instantly scannable.
            </p>
          </div>
        </section>

        {/* Quality control parameters grid */}
        <section className="glass-morphic p-8 sm:p-12 rounded-3xl border border-white/5">
          <h2 className="font-display text-3xl font-black text-white uppercase tracking-wider mb-8 text-center sm:text-left">
            Factory Floor Metrics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center sm:text-left">
              <div className="text-accent-cyber font-display text-4xl sm:text-5xl font-black mb-2">3,500 MT</div>
              <div className="text-zinc-400 text-xs uppercase tracking-widest font-mono">Monthly Capacity</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-secondary-kraft font-display text-4xl sm:text-5xl font-black mb-2">100%</div>
              <div className="text-zinc-400 text-xs uppercase tracking-widest font-mono">In-house Testing</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-accent-cyber font-display text-4xl sm:text-5xl font-black mb-2">99.8%</div>
              <div className="text-zinc-400 text-xs uppercase tracking-widest font-mono">On-Time Delivery</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-secondary-kraft font-display text-4xl sm:text-5xl font-black mb-2">&lt; 24h</div>
              <div className="text-zinc-400 text-xs uppercase tracking-widest font-mono">Prototyping turnaround</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
