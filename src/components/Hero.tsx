'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Settings } from 'lucide-react';
import VideoModal from '@/components/VideoModal';

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const headlineWords = "Next-Generation Corrugated Packaging.".split(" ");
  const subheadline = "Automated. Solar-Powered. Zero Defects. Scaling your supply chain with 3,500 MT/month capacity.";

  // Stagger animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  // Word fade/slide animation
  const wordVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        damping: 15,
        stiffness: 100,
      },
    },
  };

  // Subheadline and CTA fade in
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' as const },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 sm:px-12 bg-black overflow-hidden bg-cyber-grid">
      {/* 0. Real factory photo grounding the hero in reality */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/factory-aerial.webp"
          alt="Kuber Paper & Pack manufacturing facility, Sonipat"
          fill
          priority
          className="object-cover opacity-[0.14]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/85 to-black" />
      </div>

      {/* 1. Animated Ambient Gradient Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.15, 0.9, 1],
          x: [-20, 30, -10, -20],
          y: [-10, -30, 20, -10],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-accent-cyber/8 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 0.85, 1.1, 1],
          x: [20, -30, 15, 20],
          y: [15, 30, -20, 15],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-secondary-kraft/8 rounded-full blur-[140px] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Side: Staggered Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col text-left"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs font-mono text-accent-cyber tracking-wider uppercase shadow-[0_0_15px_rgba(0,255,102,0.1)]">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyber animate-pulse" />
              Next-Gen Manufacturing
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-7xl font-black tracking-tight text-white mb-6 uppercase leading-[0.95] flex flex-wrap gap-x-3 gap-y-1">
            {headlineWords.map((word, idx) => (
              <span key={idx} className="overflow-hidden inline-block">
                <motion.span
                  variants={wordVariants}
                  className={`inline-block ${
                    word.toLowerCase().includes('packaging') ? 'animate-gradient-text' : ''
                  }`}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-xl font-sans"
          >
            {subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
          >
            {/* Primary CTA */}
            <Link
              href="/contact"
              className="relative px-8 py-4 bg-accent-cyber text-white font-mono font-bold tracking-widest rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(224,86,27,0.45)] hover:scale-103 text-center cursor-pointer group flex items-center justify-center gap-2"
            >
              Configure Custom Box
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Secondary CTA */}
            <button
              type="button"
              onClick={() => setIsVideoOpen(true)}
              className="px-8 py-4 glass-morphic border border-white/10 text-white font-mono font-semibold tracking-widest rounded-full transition-all duration-300 hover:border-accent-cyber/50 hover:bg-white/5 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] text-center cursor-pointer flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 fill-white text-white" />
              Watch Plant Tour
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side: Floating 3D CSS Cardboard Box */}
        <div className="lg:col-span-5 flex justify-center items-center h-[450px] relative">
          <motion.div
            animate={{
              y: [-12, 12],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
            className="w-80 h-80 relative flex items-center justify-center"
            style={{ perspective: '1000px' }}
          >
            {/* Box Outer Wrapper with Rotation */}
            <motion.div
              animate={{
                rotateY: [0, 360],
                rotateX: [15, 25, 15],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="w-48 h-40 relative transform-style-3d preserve-3d"
            >
              {/* CSS 3D Panels */}
              {/* Front Face */}
              <div 
                className="absolute inset-0 bg-[#b08e64] border border-[#E0561B]/30 shadow-[inset_0_0_20px_rgba(0,0,0,0.4)] flex flex-col justify-between p-4 backface-hidden"
                style={{ transform: 'translateZ(100px)' }}
              >
                <div className="text-[10px] font-mono text-zinc-900/60 uppercase tracking-widest font-bold">KUBER</div>
                <div className="text-zinc-900 border border-zinc-900/30 self-start px-2 py-0.5 rounded text-[8px] font-mono font-black uppercase">
                  3,500 MT/mo
                </div>
              </div>

              {/* Back Face */}
              <div 
                className="absolute inset-0 bg-[#a17e54] border border-[#E0561B]/30 shadow-[inset_0_0_20px_rgba(0,0,0,0.4)] flex items-center justify-center backface-hidden"
                style={{ transform: 'rotateY(180deg) translateZ(100px)' }}
              >
                <div className="w-12 h-12 rounded-full border border-zinc-900/20 flex items-center justify-center text-zinc-900/40 text-[9px] font-mono">
                  ISO
                </div>
              </div>

              {/* Left Face */}
              <div 
                className="absolute top-0 bottom-0 bg-[#937046] border border-[#E0561B]/30 shadow-[inset_0_0_20px_rgba(0,0,0,0.4)] backface-hidden"
                style={{ 
                  width: '200px', 
                  left: '-100px',
                  transform: 'rotateY(-90deg) translateZ(100px)' 
                }}
              />

              {/* Right Face */}
              <div 
                className="absolute top-0 bottom-0 bg-[#937046] border border-[#E0561B]/30 shadow-[inset_0_0_20px_rgba(0,0,0,0.4)] flex items-center justify-center backface-hidden"
                style={{ 
                  width: '200px', 
                  right: '-100px',
                  transform: 'rotateY(90deg) translateZ(100px)' 
                }}
              >
                <Settings className="w-8 h-8 text-zinc-900/20 animate-spin" style={{ animationDuration: '8s' }} />
              </div>

              {/* Top Face */}
              <div 
                className="absolute left-0 right-0 bg-[#bf9d73] border border-[#E0561B]/30 shadow-[inset_0_0_15px_rgba(0,0,0,0.3)] backface-hidden"
                style={{ 
                  height: '200px', 
                  top: '-100px',
                  transform: 'rotateX(90deg) translateZ(100px)' 
                }}
              >
                {/* Flute/cardboard split tape design */}
                <div className="absolute top-1/2 left-0 right-0 h-4 bg-zinc-900/10 border-y border-zinc-900/20 transform -translate-y-1/2" />
              </div>

              {/* Bottom Face */}
              <div 
                className="absolute left-0 right-0 bg-[#8b683e] border border-[#E0561B]/30 backface-hidden"
                style={{ 
                  height: '200px', 
                  bottom: '-100px',
                  transform: 'rotateX(-90deg) translateZ(100px)' 
                }}
              />
            </motion.div>

            {/* Glowing Ring Floor Shadow below box */}
            <div className="absolute bottom-10 w-40 h-4 bg-accent-cyber/20 rounded-full blur-[10px] transform scale-x-150 rotateX-75 pointer-events-none" />
          </motion.div>
        </div>
      </div>

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        youtubeId="HXkjG1D1XSo"
        title="Kuber Paper & Pack — Plant Tour"
      />
    </section>
  );
}
