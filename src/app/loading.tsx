'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 bg-[#0A0A0C] flex flex-col items-center justify-center">
      {/* 1. Breathing Orange Glowing Radial Blur */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.35, 0.5, 0.35],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute w-72 h-72 bg-[#E0561B]/15 rounded-full blur-[80px] pointer-events-none"
      />

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* 2. Brand Logo Image with Pulse Transition */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
          }}
          className="relative w-28 h-28 border border-[#E0561B]/25 rounded-[20px] bg-black p-4 flex items-center justify-center shadow-[0_0_30px_rgba(224,86,27,0.15)] overflow-hidden"
        >
          <Image
            src="/kuber-logo-mark.png"
            alt="Kuber Paper & Pack Logo"
            fill
            priority
            className="object-contain p-4 transition-transform hover:scale-105"
          />
        </motion.div>

        {/* 3. Corporate Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center font-display tracking-widest text-sm text-zinc-400 font-bold"
        >
          KUBER <span className="text-[#E0561B] font-mono font-black uppercase">PAPER & PACK PVT. LTD.</span>
        </motion.div>
      </div>
    </div>
  );
}
