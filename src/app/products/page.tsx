import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products & Packaging Catalog',
  description:
    'RSC corrugated boxes, custom die-cut cartons, heavy-duty 7-ply shippers, corrugated sheets, and internal dividers — 12 BF to 40 BF, custom sizes available.',
  alternates: { canonical: '/products' },
};

const products = [
  {
    id: 'p1',
    title: 'Standard RSC Corrugated Boxes',
    ply: '3-Ply, 5-Ply & 7-Ply',
    description: 'Regular Slotted Cartons (RSC) designed for warehousing, distribution, and general shipping, featuring high stackability resistance.',
    bf: '12 BF to 35 BF',
  },
  {
    id: 'p2',
    title: 'Custom Die-Cut Cartons',
    ply: '3-Ply & 5-Ply',
    description: 'Perfect for retail display, e-commerce mailing boxes, and custom fits that lock securely without tape.',
    bf: '16 BF to 32 BF',
  },
  {
    id: 'p3',
    title: 'Heavy Duty 7-Ply Shippers',
    ply: '7-Ply Heavy Strength',
    description: 'Built as an alternative to wooden crates, suitable for heavy industrial machinery parts, chemicals, and export shipping.',
    bf: '28 BF to 40 BF',
  },
  {
    id: 'p4',
    title: 'Corrugated Sheets & Rolls',
    ply: 'Single Face / Multi-Ply',
    description: 'Kraft packaging sheets and rolls for cushioning, floor protection, and layering inside composite crates.',
    bf: 'Customizable',
  },
  {
    id: 'p5',
    title: 'Internal Dividers & Partitions',
    ply: '3-Ply / Custom Fit',
    description: 'Tailored fitments, partitions, and interlocking dividers to isolate fragile materials like glass bottles or auto parts.',
    bf: 'N/A',
  },
];

export default function ProductsPage() {
  return (
    <div className="relative min-h-screen bg-black pt-32 pb-20 px-6 sm:px-12 bg-cyber-grid overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] bg-accent-cyber/5 rounded-full blur-[130px] pointer-events-none" />

      <main className="max-w-6xl mx-auto relative z-10">
        <header className="mb-16">
          <span className="text-accent-cyber uppercase tracking-widest text-xs font-mono font-bold block mb-4 border-l-2 border-accent-cyber pl-3">
            Product Catalog
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-black tracking-tight text-white mb-6 uppercase">
            Engineered <span className="animate-gradient-text">Packaging Solutions</span>
          </h1>
          <p className="max-w-3xl text-zinc-400 text-lg leading-relaxed font-sans">
            Explore our line of industrial corrugated packaging. Custom size requests and structural calibrations are welcome.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <div 
              key={p.id} 
              className="glass-morphic p-8 rounded-3xl border border-white/5 hover:border-accent-cyber/20 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-zinc-400 text-xs font-mono">
                    {p.ply}
                  </span>
                  <span className="text-accent-cyber text-xs font-mono">
                    {p.bf !== 'N/A' && `BF: ${p.bf}`}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  {p.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {p.description}
                </p>
              </div>
              <a 
                href="/contact" 
                className="inline-flex items-center text-secondary-kraft hover:text-accent-cyber text-sm font-semibold transition-colors duration-200 mt-auto border-t border-white/5 pt-4"
              >
                Inquire Specs &rarr;
              </a>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
