'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import VideoModal from '@/components/VideoModal';

export default function PlantTourBanner() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsVideoOpen(true)}
        className="relative w-full h-[300px] sm:h-[420px] rounded-[32px] overflow-hidden border border-white/5 mb-20 group cursor-pointer block text-left"
      >
        <Image
          src="/images/factory-aerial.webp"
          alt="Kuber Paper & Pack manufacturing facility, Sonipat, Haryana"
          fill
          priority
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent-cyber/90 flex items-center justify-center shadow-[0_0_40px_rgba(224,86,27,0.5)] group-hover:scale-110 transition-transform duration-300">
            <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-white text-white ml-1" />
          </div>
        </div>
        <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8 flex items-end justify-between gap-4">
          <div>
            <span className="text-[10px] font-mono text-accent-cyber uppercase tracking-widest font-bold block mb-2">
              Watch — Full Plant Walkthrough
            </span>
            <h2 className="font-display text-xl sm:text-3xl font-bold text-white uppercase">
              60/7 Kami-Gannaur Road, Sonipat
            </h2>
          </div>
        </div>
      </button>

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        youtubeId="HXkjG1D1XSo"
        title="Kuber Paper & Pack — Plant Tour"
      />
    </>
  );
}
