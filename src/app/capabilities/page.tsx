import React from 'react';
import Image from 'next/image';

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

        {/* Real machine floor banner */}
        <div className="relative w-full h-[280px] sm:h-[380px] rounded-[32px] overflow-hidden border border-white/5 mb-16">
          <Image
            src="/images/manufacturing-floor.webp"
            alt="Fully automatic corrugating board plant, Kuber Paper & Pack"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8">
            <span className="text-[10px] font-mono text-accent-cyber uppercase tracking-widest font-bold block mb-2">
              315 BF Fully Automatic Board Plant
            </span>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white uppercase">
              Running at 67 M/min, Sonipat
            </h2>
          </div>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="rounded-3xl border border-white/5 overflow-hidden relative group hover:border-accent-cyber/20 transition-all duration-300 min-h-[220px]">
            <Image
              src="/images/paper-rolls.webp"
              alt="Kraft paper reels feeding the corrugator, Kuber Paper & Pack"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black from-40% via-black/75 to-black/20" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <span className="text-accent-cyber text-2xl font-mono font-bold mb-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">01/</span>
              <h3 className="font-display text-2xl font-bold text-white mb-3 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                Advanced Fluting & Laminating
              </h3>
              <p className="text-zinc-200 leading-relaxed text-sm drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                We manufacture a comprehensive range of board profiles including narrow A, B, C, and E flutes. Our laminating configurations enable 3-Ply, 5-Ply, and 7-Ply structures tailored to specific weight-bearing and drop-test specifications.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/5 overflow-hidden relative group hover:border-accent-cyber/20 transition-all duration-300 min-h-[220px]">
            <Image
              src="/images/quality-lab.webp"
              alt="In-house quality control and testing lab, Kuber Paper & Pack"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black from-40% via-black/75 to-black/20" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <span className="text-accent-cyber text-2xl font-mono font-bold mb-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">02/</span>
              <h3 className="font-display text-2xl font-bold text-white mb-3 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                Rigorous Quality Lab testing
              </h3>
              <p className="text-zinc-200 leading-relaxed text-sm drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                In-house labs verify Bursting Factor (BF) from 12BF to 35BF, Grammage (GSM) consistency, Ring Crush Test (RCT) values, and box moisture control. Every batch leaves Sonipat with a certified testing certificate.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/5 overflow-hidden relative group hover:border-accent-cyber/20 transition-all duration-300 min-h-[220px]">
            <Image
              src="/images/corrugator-line.webp"
              alt="Corrugating and finishing line, Kuber Paper & Pack"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black from-40% via-black/75 to-black/20" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <span className="text-accent-cyber text-2xl font-mono font-bold mb-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">03/</span>
              <h3 className="font-display text-2xl font-bold text-white mb-3 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                Precision Slotting & Die-Cutting
              </h3>
              <p className="text-zinc-200 leading-relaxed text-sm drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                Our high-accuracy rotary die cutters create complex configurations for telescopic boxes, folder-type boxes, and custom internal partitions/dividers to secure delicate electronic or glassware loads.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/5 overflow-hidden relative group hover:border-accent-cyber/20 transition-all duration-300 min-h-[220px]">
            <Image
              src="/images/board-plant.webp"
              alt="Production floor with mezzanine board plant, Kuber Paper & Pack"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black from-40% via-black/75 to-black/20" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <span className="text-accent-cyber text-2xl font-mono font-bold mb-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">04/</span>
              <h3 className="font-display text-2xl font-bold text-white mb-3 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                High-Speed Flexographic Printing
              </h3>
              <p className="text-zinc-200 leading-relaxed text-sm drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                Brand styling matters. Our multi-color flexographic printing machines apply high-contrast, smudge-resistant water-based inks, ensuring that your corporate branding, bar codes, and shipping warnings are instantly scannable.
              </p>
            </div>
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
