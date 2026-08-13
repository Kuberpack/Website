'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, User, MapPin, Calendar, Activity, Zap } from 'lucide-react';

export default function AboutSummary() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  } as const;

  return (
    <section className="py-24 px-6 sm:px-12 bg-black relative overflow-hidden">
      {/* Background ambient blur */}
      <div className="absolute right-1/4 top-1/3 w-[500px] h-[500px] bg-[#E0561B]/3 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch"
      >
        {/* Left Column: Chairman Message */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-7 glass-morphic p-8 sm:p-12 rounded-[32px] border border-white/5 flex flex-col justify-between relative overflow-hidden"
        >
          {/* Accent glow line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E0561B]/40 to-transparent" />
          
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-[#E0561B] text-xs font-mono font-bold uppercase tracking-widest border border-[#E0561B]/20 bg-[#E0561B]/5 px-3 py-1 rounded-full">
                Leadership Statement
              </span>
            </div>

            <h2 className="font-display text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Chairman&apos;s <span className="animate-gradient-text">Message</span>
            </h2>

            <div className="space-y-4 text-zinc-400 text-sm leading-relaxed">
              <p>
                At Kuber, we are committed to delivering world-class corrugated packaging solutions through quality, innovation, and operational excellence.
              </p>
              <p>
                Since our establishment in 2017, we have continuously invested in advanced manufacturing technology, modern infrastructure, and a highly skilled workforce to meet the evolving packaging needs of our customers.
              </p>
              <p>
                Our integrated manufacturing facility at Sonipat, Haryana, supported by stringent quality standards and efficient logistics, enables us to deliver reliable and customized packaging solutions across diverse industries.
              </p>
            </div>

            {/* Chairman Signature / Identity */}
            <div className="flex items-center gap-4 pt-6 border-t border-white/5">
              <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-zinc-400">
                <User className="w-6 h-6 text-[#E0561B]" />
              </div>
              <div>
                <h4 className="font-display text-base font-bold text-white uppercase leading-none">
                  Murari Lal Agarwalla
                </h4>
                <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mt-1">
                  Chairman | M.Com., FCA
                </p>
              </div>
            </div>
          </div>

          {/* Quote Card */}
          <div className="mt-8 bg-[#E0561B]/5 border border-[#E0561B]/15 p-6 rounded-2xl relative overflow-hidden">
            <span className="absolute top-2 right-4 text-5xl font-serif text-[#E0561B]/10 leading-none select-none">“</span>
            <p className="text-zinc-300 font-mono text-xs italic tracking-wider leading-relaxed relative z-10">
              Quality is our commitment, Innovation is our strength, and Customer Satisfaction is our success.
            </p>
          </div>
        </motion.div>

        {/* Right Column: Corporate Highlights */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-5 flex flex-col justify-between gap-6"
        >
          {/* Highlights Header */}
          <div className="glass-morphic p-8 rounded-3xl border border-white/5">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold block mb-2">Corporate Metrics</span>
            <h3 className="font-display text-xl font-bold text-white uppercase mb-4">
              Company Highlights
            </h3>
            
            {/* Highlights Grid */}
            <div className="space-y-4 pt-4 border-t border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/3 border border-white/5 flex items-center justify-center text-[#E0561B]">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest leading-none">Established</span>
                  <span className="text-sm font-bold text-white font-mono mt-1 block">Year 2017</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/3 border border-white/5 flex items-center justify-center text-[#E0561B]">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest leading-none">Annual Production Capacity</span>
                  <span className="text-sm font-bold text-white font-mono mt-1 block">43,200 MT per Annum</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/3 border border-white/5 flex items-center justify-center text-[#E0561B]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest leading-none">Operations Hub</span>
                  <span className="text-sm font-bold text-white font-mono mt-1 block">Sonipat, Haryana</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/3 border border-white/5 flex items-center justify-center text-[#E0561B]">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest leading-none">Quality Standards</span>
                  <span className="text-sm font-bold text-white font-mono mt-1 block">ISO 9001:2015 Certified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Infrastructure Strengths Panel */}
          <div className="glass-morphic p-8 rounded-3xl border border-white/5 flex-1 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold block mb-2">Key Competency</span>
              <h4 className="font-display text-lg font-bold text-white uppercase mb-3">
                Automation & Scaling
              </h4>
              <p className="text-zinc-400 text-xs leading-relaxed font-sans">
                Our plant runs high-tech automated machinery, supported by experienced workforce, to handle large-scale corrugated packaging needs with consistent quality.
              </p>
            </div>
            <div className="flex items-center gap-2 pt-6 text-[10px] font-mono text-[#E0561B] uppercase tracking-widest">
              <Zap className="w-3.5 h-3.5 animate-pulse" />
              <span>Assuring Business Needs</span>
            </div>
          </div>

        </motion.div>
      </motion.div>
    </section>
  );
}
