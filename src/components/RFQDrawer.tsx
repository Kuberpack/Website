'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, Send, Package, Layers, Hash, Scale, Compass } from 'lucide-react';
import { useRFQ } from '@/context/RFQContext';

export default function RFQDrawer() {
  const { isOpen, closeRFQ } = useRFQ();
  
  // Local form states
  const [packType, setPackType] = useState<string>('Custom Master Cartons');
  const [ply, setPly] = useState<string>('5-Ply');
  const [volume, setVolume] = useState<string>('');
  const [unit, setUnit] = useState<string>('Nos');
  const [dims, setDims] = useState<string>('');
  const [fileName, setFileName] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      closeRFQ();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={closeRFQ}
            className="fixed inset-0 z-40 bg-black backdrop-blur-sm"
          />

          {/* Slide-out Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full sm:w-[500px] bg-[#070709] border-l border-white/10 flex flex-col justify-between shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden"
          >
            {/* Sticky Header inside Drawer */}
            <div className="flex justify-between items-center px-8 py-6 border-b border-white/5 bg-black/40 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-cyber animate-pulse" />
                <span className="font-mono text-xs text-accent-cyber uppercase tracking-widest font-bold">Estimate Console</span>
              </div>
              <button
                onClick={closeRFQ}
                className="p-2 rounded-full hover:bg-white/5 border border-white/0 hover:border-white/10 text-zinc-400 hover:text-white transition-all cursor-pointer"
                aria-label="Close drawer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Form Body */}
            <div className="flex-1 overflow-y-auto px-8 py-8 space-y-8">
              <div>
                <h3 className="font-display text-2xl font-black text-white uppercase mb-2">Request B2B Quote</h3>
                <p className="text-zinc-400 text-xs font-sans">
                  Provide custom dimensions and structural specifications below. Our estimators respond within 2 business hours.
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-accent-cyber/10 border border-accent-cyber/30 rounded-full flex items-center justify-center text-accent-cyber">
                    <CheckIcon className="w-8 h-8 animate-bounce" />
                  </div>
                  <h4 className="font-display text-xl font-bold text-white uppercase">Specifications Transmitted</h4>
                  <p className="text-zinc-400 text-xs font-mono">Calibrating specs in TranZact ERP...</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Packaging Type */}
                  <div className="space-y-2">
                    <label htmlFor="pack-type" className="block text-[10px] font-mono text-zinc-400 uppercase tracking-widest flex items-center gap-1.5">
                      <Package className="w-3.5 h-3.5 text-accent-cyber" />
                      Packaging Type
                    </label>
                    <select
                      id="pack-type"
                      value={packType}
                      onChange={(e) => setPackType(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm font-mono text-zinc-300 focus:outline-none focus:border-accent-cyber transition-colors appearance-none"
                    >
                      <option value="Custom Master Cartons" className="bg-black text-white">Custom Master Cartons</option>
                      <option value="Standard Boxes" className="bg-black text-white">Standard Boxes</option>
                      <option value="Standard Sheets" className="bg-black text-white">Standard Sheets</option>
                      <option value="Printed Samples" className="bg-black text-white">WIP / Printed Samples</option>
                    </select>
                  </div>

                  {/* Ply specification selection */}
                  <div className="space-y-2">
                    <label className="block text-[10px] font-mono text-zinc-400 uppercase tracking-widest flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-accent-cyber" />
                      Board Structure
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['3-Ply', '5-Ply', '7-Ply'].map((p) => (
                        <button
                          key={p}
                          type="button"
                          onClick={() => setPly(p)}
                          className={`py-2 px-3 rounded-xl border text-xs font-mono font-bold tracking-wider transition-all duration-300 cursor-pointer ${
                            ply === p
                              ? 'bg-accent-cyber text-black border-accent-cyber'
                              : 'bg-white/3 border-white/5 text-zinc-400 hover:border-white/10'
                          }`}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Expected volume monthly */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2 space-y-2">
                      <label htmlFor="volume-qty" className="block text-[10px] font-mono text-zinc-400 uppercase tracking-widest flex items-center gap-1.5">
                        <Scale className="w-3.5 h-3.5 text-accent-cyber" />
                        Expected Volume
                      </label>
                      <input
                        type="number"
                        id="volume-qty"
                        value={volume}
                        onChange={(e) => setVolume(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm font-mono text-white focus:outline-none focus:border-accent-cyber transition-colors"
                        placeholder="E.g., 5000"
                        required
                      />
                    </div>
                    <div className="col-span-1 space-y-2">
                      <label htmlFor="volume-unit" className="block text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                        Unit
                      </label>
                      <select
                        id="volume-unit"
                        value={unit}
                        onChange={(e) => setUnit(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm font-mono text-zinc-300 focus:outline-none focus:border-accent-cyber transition-colors appearance-none"
                      >
                        {packType.includes('Sheets') ? (
                          <>
                            <option value="Kg" className="bg-black text-white">Kg</option>
                            <option value="MT" className="bg-black text-white">MT</option>
                            <option value="Rolls" className="bg-black text-white">Rolls</option>
                          </>
                        ) : (
                          <>
                            <option value="Nos" className="bg-black text-white">Nos</option>
                            <option value="Boxes" className="bg-black text-white">Boxes</option>
                          </>
                        )}
                      </select>
                    </div>
                  </div>

                  {/* Required Dimensions */}
                  <div className="space-y-2">
                    <label htmlFor="dimensions" className="block text-[10px] font-mono text-zinc-400 uppercase tracking-widest flex items-center gap-1.5">
                      <Hash className="w-3.5 h-3.5 text-accent-cyber" />
                      Dimensions (L x W x H) mm
                    </label>
                    <input
                      type="text"
                      id="dimensions"
                      value={dims}
                      onChange={(e) => setDims(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm font-mono text-white focus:outline-none focus:border-accent-cyber transition-colors"
                      placeholder="E.g., 310 x 235 x 286"
                      required
                    />
                  </div>

                  {/* Upload CAD/Spec drop zone */}
                  <div className="space-y-2">
                    <label className="block text-[10px] font-mono text-zinc-400 uppercase tracking-widest flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5 text-accent-cyber" />
                      Upload CAD Drawings / Spec Sheet
                    </label>
                    <div className="border border-dashed border-white/10 hover:border-accent-cyber/30 rounded-2xl p-6 flex flex-col items-center justify-center bg-white/3 transition-all relative">
                      <input
                        type="file"
                        onChange={handleFileChange}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        accept=".pdf,.dxf,.dwg,.jpg,.png,.step"
                      />
                      <Upload className="w-6 h-6 text-zinc-500 mb-2" />
                      <span className="text-xs text-zinc-300 font-mono text-center">
                        {fileName ? fileName : 'Drag & Drop CAD file (.dxf, .step, .pdf)'}
                      </span>
                      <span className="text-[10px] text-zinc-500 mt-1">Max file size 25MB</span>
                    </div>
                  </div>

                  {/* Estimating submission CTA */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#E0561B] text-white font-mono font-bold tracking-widest rounded-xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(224,86,27,0.4)] uppercase text-xs flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Submit to Estimating Team
                    <Send className="w-4.5 h-4.5" />
                  </button>
                </form>
              )}
            </div>

            {/* B2B Footer Disclaimer */}
            <div className="px-8 py-6 border-t border-white/5 bg-black/40 text-[9px] font-mono text-zinc-500 uppercase tracking-wider text-center">
              ISO 9001:2015 Encrypted B2B Logistical Supply Data
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Inline Check Icon helper
function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
