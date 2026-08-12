'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function CapabilitiesShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position of the 300vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  // Map scroll progress to horizontal movement (translate track left)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  // Localized parallax translations for elements inside cards
  const parallaxX1 = useTransform(scrollYProgress, [0, 0.35], [40, -40]);
  const parallaxX2 = useTransform(scrollYProgress, [0.2, 0.6], [40, -40]);
  const parallaxX3 = useTransform(scrollYProgress, [0.4, 0.8], [40, -40]);
  const parallaxX4 = useTransform(scrollYProgress, [0.6, 1], [40, -40]);

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-black">
      {/* Sticky Screen Viewport Wrapper */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Fixed Title Header */}
        <div className="absolute top-10 left-6 sm:left-12 z-20 max-w-md">
          <span className="text-accent-cyber uppercase tracking-widest text-xs font-mono font-bold block mb-2 border-l-2 border-accent-cyber pl-3">
            Infrastructure & Automation
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
            State-of-the-Art <span className="animate-gradient-text">Infrastructure</span>
          </h2>
        </div>

        {/* Floating background ambient lights */}
        <div className="absolute top-1/2 left-1/3 w-[500px] h-[300px] bg-accent-cyber/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-secondary-kraft/4 rounded-full blur-[120px] pointer-events-none" />

        {/* Scroll Track */}
        <motion.div style={{ x }} className="flex gap-12 pl-6 sm:pl-12 pr-[15vw]">
          
          {/* Card 1: High-Speed Corrugation */}
          <div className="w-[85vw] sm:w-[450px] h-[55vh] sm:h-[480px] shrink-0 glass-morphic p-8 rounded-3xl border border-white/5 flex flex-col justify-between relative overflow-hidden group hover:border-accent-cyber/30 transition-all duration-500">
            {/* Visual element */}
            <div className="h-40 flex items-center justify-center bg-white/3 border border-white/5 rounded-2xl p-4 overflow-hidden relative">
              <svg viewBox="0 0 100 40" className="w-full h-24">
                {/* conveyor belt line */}
                <line x1="10" y1="28" x2="90" y2="28" stroke="#3f3f46" strokeWidth="3" strokeLinecap="round" />
                <circle cx="15" cy="28" r="3" fill="#E0561B" />
                <circle cx="50" cy="28" r="3" fill="#52525b" />
                <circle cx="85" cy="28" r="3" fill="#E0561B" />
                {/* moving boxes */}
                <motion.rect
                  x="10" y="14" width="12" height="11" fill="#C29A70" rx="1"
                  animate={{ x: [0, 68] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                />
                <motion.rect
                  x="10" y="14" width="12" height="11" fill="#bf9d73" rx="1"
                  animate={{ x: [0, 68] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear", delay: 2 }}
                />
              </svg>
            </div>
            
            {/* Content with parallax translation */}
            <motion.div style={{ x: parallaxX1 }} className="space-y-4">
              <div className="text-xs font-mono text-accent-cyber uppercase tracking-wider">Phase 01 — Corrugating</div>
              <h3 className="font-display text-2xl font-bold text-white uppercase group-hover:text-accent-cyber transition-colors">
                High-Speed Corrugation
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-sans">
                Our plant is equipped with high-speed Single Wall & Double Wall automatic corrugators, calibrating flute stiffness with zero micro-delamination.
              </p>
            </motion.div>
          </div>

          {/* Card 2: Precision Printing */}
          <div className="w-[85vw] sm:w-[450px] h-[55vh] sm:h-[480px] shrink-0 glass-morphic p-8 rounded-3xl border border-white/5 flex flex-col justify-between relative overflow-hidden group hover:border-accent-cyber/30 transition-all duration-500">
            {/* Visual element */}
            <div className="h-40 flex items-center justify-center bg-white/3 border border-white/5 rounded-2xl p-4 overflow-hidden relative">
              <div className="flex gap-4 items-center">
                <svg viewBox="0 0 100 100" className="w-20 h-20 text-accent-cyber">
                  <motion.g
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                    style={{ transformOrigin: '50px 50px' }}
                  >
                    <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="4" fill="none" strokeDasharray="8 6" />
                    <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="1" fill="none" />
                    <circle cx="50" cy="50" r="10" fill="currentColor" />
                  </motion.g>
                </svg>
                <svg viewBox="0 0 100 100" className="w-14 h-14 text-secondary-kraft">
                  <motion.g
                    animate={{ rotate: -360 }}
                    transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                    style={{ transformOrigin: '50px 50px' }}
                  >
                    <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="4" fill="none" strokeDasharray="6 4" />
                    <circle cx="50" cy="50" r="8" fill="currentColor" />
                  </motion.g>
                </svg>
              </div>
            </div>
            
            {/* Content with parallax translation */}
            <motion.div style={{ x: parallaxX2 }} className="space-y-4">
              <div className="text-xs font-mono text-accent-cyber uppercase tracking-wider">Phase 02 — Printing</div>
              <h3 className="font-display text-2xl font-bold text-white uppercase group-hover:text-accent-cyber transition-colors">
                Precision Printing
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-sans">
                Our 3 Color Lead Edge Printer & Flexo Coloured Slotter apply high-resolution, sharp flexographic branding layout graphics directly onto sheets.
              </p>
            </motion.div>
          </div>

          {/* Card 3: Automated Finishing */}
          <div className="w-[85vw] sm:w-[450px] h-[55vh] sm:h-[480px] shrink-0 glass-morphic p-8 rounded-3xl border border-white/5 flex flex-col justify-between relative overflow-hidden group hover:border-accent-cyber/30 transition-all duration-500">
            {/* Visual element */}
            <div className="h-40 flex items-center justify-center bg-white/3 border border-white/5 rounded-2xl p-4 overflow-hidden relative">
              <div style={{ perspective: '400px' }} className="w-24 h-24 flex items-center justify-center">
                <motion.div
                  animate={{ rotateY: [0, 180, 360], rotateX: [15, 30, 15] }}
                  transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                  className="w-14 h-14 border-2 border-secondary-kraft flex items-center justify-center relative transform-style-3d preserve-3d"
                >
                  <div className="absolute inset-0 bg-secondary-kraft/20 border border-secondary-kraft/40" />
                  <motion.div 
                    animate={{ rotateY: [0, 90, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute w-14 h-14 border border-accent-cyber bg-accent-cyber/10 left-full origin-left" 
                  />
                </motion.div>
              </div>
            </div>
            
            {/* Content with parallax translation */}
            <motion.div style={{ x: parallaxX3 }} className="space-y-4">
              <div className="text-xs font-mono text-accent-cyber uppercase tracking-wider">Phase 03 — Finishing</div>
              <h3 className="font-display text-2xl font-bold text-white uppercase group-hover:text-accent-cyber transition-colors">
                Automated Finishing
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-sans">
                Utilizing our Full Auto Folder Gluer, Automatic Flute Laminator, & Rotary Die Cutter to cut, fold, and laminate structural components.
              </p>
            </motion.div>
          </div>

          {/* Card 4: Sustainable Operations */}
          <div className="w-[85vw] sm:w-[450px] h-[55vh] sm:h-[480px] shrink-0 bg-[#130d07] rounded-3xl border border-accent-cyber/20 p-8 flex flex-col justify-between relative overflow-hidden group shadow-[0_0_30px_rgba(224,86,27,0.05)] hover:border-accent-cyber/50 hover:shadow-[0_0_40px_rgba(224,86,27,0.15)] transition-all duration-500">
            {/* Visual element */}
            <div className="h-40 flex items-center justify-center bg-accent-cyber/5 border border-accent-cyber/10 rounded-2xl p-4 overflow-hidden relative">
              <svg viewBox="0 0 100 100" className="w-20 h-20 text-accent-cyber">
                <rect x="20" y="20" width="60" height="60" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
                <line x1="40" y1="20" x2="40" y2="80" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="60" y1="20" x2="60" y2="80" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="20" y1="40" x2="80" y2="40" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="20" y1="60" x2="80" y2="60" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="2"
                  animate={{ scale: [1, 24], opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "easeOut" }}
                  fill="currentColor"
                />
              </svg>
            </div>
            
            {/* Content with parallax translation */}
            <motion.div style={{ x: parallaxX4 }} className="space-y-4">
              <div className="text-xs font-mono text-accent-cyber uppercase tracking-wider">Phase 04 — Plant Grid</div>
              <h3 className="font-display text-2xl font-bold text-white uppercase group-hover:text-accent-cyber transition-colors">
                Sustainable Operations
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed font-sans">
                Our facility works are integrated with direct Solar Power grids, generating carbon-neutral offsets for B2B supply audits.
              </p>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
