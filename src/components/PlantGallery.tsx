'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Play, Users, ShieldCheck, Truck } from 'lucide-react';
import VideoModal from '@/components/VideoModal';

const galleryStrip = [
  { src: '/images/paper-rolls.webp', alt: 'Kraft paper reels staged for the corrugator line' },
  { src: '/images/corrugator-line.webp', alt: 'Fully automatic corrugating board plant in operation' },
  { src: '/images/board-plant.webp', alt: 'Overhead mezzanine of the corrugation board plant' },
];

export default function PlantGallery() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 16 } },
  } as const;

  return (
    <section className="py-24 px-6 sm:px-12 bg-black relative overflow-hidden">
      <div className="absolute left-1/4 top-0 w-[500px] h-[500px] bg-accent-cyber/5 rounded-full blur-[130px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-12 text-center sm:text-left">
          <span className="text-accent-cyber uppercase tracking-widest text-xs font-mono font-bold block mb-4 border-l-2 border-accent-cyber pl-3">
            See It To Believe It
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Inside The <span className="animate-gradient-text">Kuber Plant</span>
          </h2>
          <p className="text-zinc-400 text-sm mt-3 max-w-xl font-sans leading-relaxed mx-auto sm:mx-0">
            Real machines, a real workforce, and a real Sonipat facility — not stock photography. This is what runs your supply chain.
          </p>
        </motion.div>

        {/* Main Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          {/* Big plant tour video card */}
          <motion.button
            variants={itemVariants}
            type="button"
            onClick={() => setIsVideoOpen(true)}
            className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-white/5 group h-[340px] sm:h-[420px] cursor-pointer text-left"
          >
            <Image
              src="/images/manufacturing-floor.webp"
              alt="Automatic corrugating board plant floor at Kuber Paper & Pack"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent-cyber/90 flex items-center justify-center shadow-[0_0_40px_rgba(224,86,27,0.5)] group-hover:scale-110 transition-transform duration-300">
                <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-white text-white ml-1" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <span className="text-[10px] font-mono text-accent-cyber uppercase tracking-widest font-bold block mb-2">
                Watch — 3 Min Walkthrough
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white uppercase">
                Full Plant Tour, Sonipat
              </h3>
            </div>
          </motion.button>

          {/* Right column: workforce + quality lab stacked */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-6">
            <motion.div
              variants={itemVariants}
              className="relative rounded-3xl overflow-hidden border border-white/5 h-[160px] sm:h-[200px] group"
            >
              <Image
                src="/images/workforce-men.webp"
                alt="Kuber Paper & Pack production workforce on the factory floor"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-[10px] font-mono text-white uppercase tracking-wider font-bold">
                <Users className="w-3 h-3 text-accent-cyber" />
                Our Workforce
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative rounded-3xl overflow-hidden border border-white/5 h-[160px] sm:h-[200px] group"
            >
              <Image
                src="/images/workforce-women.webp"
                alt="Women production associates at Kuber Paper & Pack facility"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-[10px] font-mono text-white uppercase tracking-wider font-bold">
                <Users className="w-3 h-3 text-accent-cyber" />
                Inclusive Hiring
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative rounded-3xl overflow-hidden border border-white/5 h-[160px] sm:h-[200px] group"
            >
              <Image
                src="/images/quality-lab.webp"
                alt="In-house quality control and testing lab"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-[10px] font-mono text-white uppercase tracking-wider font-bold">
                <ShieldCheck className="w-3 h-3 text-accent-cyber" />
                QC Lab
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative rounded-3xl overflow-hidden border border-white/5 h-[160px] sm:h-[200px] group"
            >
              <Image
                src="/images/trucks-fleet.webp"
                alt="Kuber Paper & Pack dedicated delivery truck fleet"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-[10px] font-mono text-white uppercase tracking-wider font-bold">
                <Truck className="w-3 h-3 text-accent-cyber" />
                Own Fleet
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom filmstrip of machine detail shots */}
        <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6">
          {galleryStrip.map((img) => (
            <div
              key={img.src}
              className="relative rounded-2xl overflow-hidden border border-white/5 h-[110px] sm:h-[150px] group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="33vw"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
            </div>
          ))}
        </motion.div>
      </motion.div>

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        youtubeId="HXkjG1D1XSo"
        title="Kuber Paper & Pack — Plant Tour"
      />
    </section>
  );
}
