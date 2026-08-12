'use client';

import React from 'react';
import { motion } from 'framer-motion';

const track1Clients = [
  'Kellogg\'s India', 'Patanjali', 'Coca Cola', 'Baggery',
  'Lawrence', 'Crax', 'Mohun\'s', 'Pansari'
];

const track2Clients = [
  'Philips', 'Oppo', 'Vivo', 'Philips', 'Oppo', 'Vivo'
];

export default function ClientMarquee() {
  // Duplicate arrays to ensure seamless loop width
  const row1 = [...track1Clients, ...track1Clients, ...track1Clients, ...track1Clients];
  const row2 = [...track2Clients, ...track2Clients, ...track2Clients, ...track2Clients, ...track2Clients];

  return (
    <section className="py-24 bg-black overflow-hidden relative border-y border-white/5">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-secondary-kraft/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-12 mb-16 text-center sm:text-left">
        <span className="text-accent-cyber uppercase tracking-widest text-xs font-mono font-bold block mb-4 border-l-2 border-accent-cyber pl-3">
          Our Partners
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
          Trusted by <span className="animate-gradient-text">Market Leaders</span>
        </h2>
        <p className="text-zinc-400 text-sm mt-3 max-w-xl font-sans leading-relaxed">
          Powering the supply chains of FMCG giants, retail brands, and consumer electronics leaders across the continent.
        </p>
      </div>

      {/* Marquee Tracks Container */}
      <div className="space-y-10 relative">
        {/* Track 1: Moving Left */}
        <div className="flex overflow-x-hidden w-full relative mask-gradient">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 28,
                ease: "linear"
              }
            }}
            className="flex gap-6 whitespace-nowrap pr-6 py-4"
          >
            {row1.map((client, idx) => (
              <motion.div
                key={`row1-${idx}`}
                whileHover={{
                  y: -5,
                  scale: 1.05,
                  rotateY: 8,
                  rotateX: -5,
                  borderColor: 'rgba(0, 255, 102, 0.4)',
                  boxShadow: '0 10px 30px -10px rgba(0, 255, 102, 0.25)',
                }}
                transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                style={{ perspective: '1000px' }}
                className="glass-morphic px-8 py-5 rounded-2xl border border-white/5 flex items-center justify-center min-w-[200px] cursor-pointer group"
              >
                <span className="font-display text-lg font-bold text-zinc-400 group-hover:text-accent-cyber transition-all duration-300 tracking-wider">
                  {client}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Track 2: Moving Right */}
        <div className="flex overflow-x-hidden w-full relative mask-gradient">
          <motion.div
            animate={{ x: [-1000, 0] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 24,
                ease: "linear"
              }
            }}
            className="flex gap-6 whitespace-nowrap pr-6 py-4"
          >
            {row2.map((client, idx) => (
              <motion.div
                key={`row2-${idx}`}
                whileHover={{
                  y: -5,
                  scale: 1.05,
                  rotateY: -8,
                  rotateX: -5,
                  borderColor: 'rgba(0, 255, 102, 0.4)',
                  boxShadow: '0 10px 30px -10px rgba(0, 255, 102, 0.25)',
                }}
                transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                style={{ perspective: '1000px' }}
                className="glass-morphic px-8 py-5 rounded-2xl border border-white/5 flex items-center justify-center min-w-[200px] cursor-pointer group"
              >
                <span className="font-display text-lg font-bold text-zinc-400 group-hover:text-accent-cyber transition-all duration-300 tracking-wider">
                  {client}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Custom Styles for Gradient Masking */}
      <style jsx global>{`
        .mask-gradient {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `}</style>
    </section>
  );
}
