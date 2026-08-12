'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Loading() {
  const whitePathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: 'easeInOut',
      },
    },
  } as const;

  const orangePathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 1.2,
        ease: 'easeInOut',
      },
    },
  } as const;

  const fillVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 2.0,
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  } as const;

  return (
    <div className="fixed inset-0 z-50 bg-[#0A0A0C] flex flex-col items-center justify-center">
      {/* 1. Subtle Orange Glowing Radial Blur */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.45, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute w-72 h-72 bg-[#E0561B]/15 rounded-full blur-[80px] pointer-events-none"
      />

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* 2. Tracing SVG Logo */}
        <svg 
          viewBox="0 0 100 120" 
          className="w-32 h-32 text-white" 
          fill="none" 
          strokeLinecap="square"
        >
          {/* Tracing paths */}
          {/* Left Vertical Bar (White) */}
          <motion.path
            d="M 22 10 L 22 110"
            stroke="#ffffff"
            strokeWidth="12"
            variants={whitePathVariants}
            initial="hidden"
            animate="visible"
          />

          {/* Right Vertical Bar (Orange) */}
          <motion.path
            d="M 37 10 L 37 110"
            stroke="#E0561B"
            strokeWidth="12"
            variants={orangePathVariants}
            initial="hidden"
            animate="visible"
          />

          {/* Upper Diagonal Inner Arm (Orange) */}
          <motion.path
            d="M 37 60 L 67 30"
            stroke="#E0561B"
            strokeWidth="12"
            variants={orangePathVariants}
            initial="hidden"
            animate="visible"
          />

          {/* Lower Diagonal Inner Arm (Orange) */}
          <motion.path
            d="M 37 60 L 67 90"
            stroke="#E0561B"
            strokeWidth="12"
            variants={orangePathVariants}
            initial="hidden"
            animate="visible"
          />

          {/* Upper Diagonal Outer Arm (White) */}
          <motion.path
            d="M 67 30 L 87 10"
            stroke="#ffffff"
            strokeWidth="12"
            variants={whitePathVariants}
            initial="hidden"
            animate="visible"
          />

          {/* Lower Diagonal Outer Arm (White) */}
          <motion.path
            d="M 67 90 L 87 110"
            stroke="#ffffff"
            strokeWidth="12"
            variants={whitePathVariants}
            initial="hidden"
            animate="visible"
          />

          {/* Filled elements overlaid to resolve gap lines at the end */}
          <motion.g
            variants={fillVariants}
            initial="hidden"
            animate="visible"
          >
            {/* White parts */}
            <path d="M 16 10 H 28 V 110 H 16 Z" fill="#ffffff" />
            <path d="M 61 24 L 81 4 L 93 16 L 73 36 Z" fill="#ffffff" />
            <path d="M 61 96 L 73 84 L 93 104 L 81 116 Z" fill="#ffffff" />

            {/* Orange parts */}
            <path d="M 31 10 H 43 V 110 H 31 Z" fill="#E0561B" />
            <path d="M 37 60 L 61 36 L 73 48 L 49 72 Z" fill="#E0561B" />
            <path d="M 37 60 L 49 48 L 73 72 L 61 84 Z" fill="#E0561B" />
          </motion.g>
        </svg>

        {/* 3. High-Tech Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-center font-display tracking-widest text-sm text-zinc-400 font-bold"
        >
          KUBER <span className="text-[#E0561B] font-mono font-black">PAPER & PACK</span>
        </motion.div>
      </div>
    </div>
  );
}
