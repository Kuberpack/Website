'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Layers, Settings, RefreshCw, Send, Check } from 'lucide-react';

type ProductType = 'Standard Sheets' | 'Standard Boxes' | 'Custom Master Cartons' | 'WIP / Printed Samples';
type PlyType = '3-Ply' | '5-Ply' | '7-Ply';

export default function ProductConfigurator() {
  // Input parameters state
  const [productType, setProductType] = useState<ProductType>('Custom Master Cartons');
  const [ply, setPly] = useState<PlyType>('3-Ply');
  const [length, setLength] = useState<number>(310);
  const [width, setWidth] = useState<number>(235);
  const [height, setHeight] = useState<number>(286);
  const [quantity, setQuantity] = useState<number>(1000);
  const [unit, setUnit] = useState<string>('Nos');
  const [clientSpec, setClientSpec] = useState<string>('Standard');

  // ERP status simulation states
  const [isMapping, setIsMapping] = useState<boolean>(false);
  const [syncDone, setSyncDone] = useState<boolean>(true);

  // Set units list dynamically based on product type selection
  const getUnitOptions = (type: ProductType) => {
    switch (type) {
      case 'Standard Sheets':
        return ['Kg', 'MT', 'Rolls', 'Reams'];
      case 'Standard Boxes':
      case 'Custom Master Cartons':
        return ['Nos', 'Boxes'];
      case 'WIP / Printed Samples':
        return ['Nos', 'Samples'];
      default:
        return ['Nos'];
    }
  };

  const unitOptions = getUnitOptions(productType);

  // Ensure selected unit is valid when product type shifts
  useEffect(() => {
    const validOptions = getUnitOptions(productType);
    if (!validOptions.includes(unit)) {
      setUnit(validOptions[0]);
    }
  }, [productType, unit]);

  // Trigger ERP mapping visual effect when configuration properties change
  useEffect(() => {
    setIsMapping(true);
    setSyncDone(false);
    const timer = setTimeout(() => {
      setIsMapping(false);
      setSyncDone(true);
    }, 600);
    return () => clearTimeout(timer);
  }, [productType, ply, length, width, height, quantity, unit, clientSpec]);

  // Load Pansari Client preset ERP specifications
  const loadPresetERPConfig = () => {
    setProductType('Custom Master Cartons');
    setLength(310);
    setWidth(235);
    setHeight(286);
    setPly('3-Ply');
    setClientSpec('Pansari');
    setUnit('Nos');
    setQuantity(5000);
  };

  // Compute 3D container scale ratios relative to standard box size (310 x 235 x 286)
  const scaleX = Math.min(Math.max(length / 310, 0.4), 1.7);
  const scaleZ = Math.min(Math.max(width / 235, 0.4), 1.7);
  const scaleY = Math.min(Math.max(height / 286, 0.4), 1.7);

  return (
    <section className="py-24 px-6 sm:px-12 bg-black bg-cyber-grid-dots border-t border-white/5 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[300px] bg-accent-cyber/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-secondary-kraft/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Title Header */}
        <header className="mb-16 text-center sm:text-left">
          <span className="text-accent-cyber uppercase tracking-widest text-xs font-mono font-bold block mb-4 border-l-2 border-accent-cyber pl-3">
            Procurement Configurator
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Product Configurator <span className="animate-gradient-text">& Catalog</span>
          </h2>
          <p className="text-zinc-400 text-sm mt-3 max-w-xl font-sans leading-relaxed">
            Calibrate box parameters and test volume specifications in real-time. Values are aligned with TranZact ERP data tables to streamline RFQ delivery.
          </p>
        </header>

        {/* Split Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Form Panel */}
          <div className="lg:col-span-7 flex flex-col justify-between glass-morphic p-8 sm:p-10 rounded-3xl border border-white/5 relative">
            
            {/* Form Fields */}
            <div className="space-y-6">
              
              {/* Product Type selectors */}
              <div>
                <label className="block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-3">Product Type</label>
                <div className="grid grid-cols-2 gap-3">
                  {(['Standard Sheets', 'Standard Boxes', 'Custom Master Cartons', 'WIP / Printed Samples'] as ProductType[]).map((t) => (
                    <button
                      key={t}
                      onClick={() => setProductType(t)}
                      className={`py-3 px-4 rounded-xl border text-xs font-mono tracking-wide uppercase transition-all duration-300 text-left cursor-pointer ${
                        productType === t
                          ? 'bg-accent-cyber/10 border-accent-cyber text-accent-cyber shadow-[0_0_15px_rgba(0,255,102,0.1)]'
                          : 'bg-white/3 border-white/5 text-zinc-400 hover:border-white/10 hover:text-white'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3D Box Spec (Ply, Length, Width, Height) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                
                {/* Ply count toggles */}
                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-3">Ply Specification</label>
                  <div className="flex gap-2">
                    {(['3-Ply', '5-Ply', '7-Ply'] as PlyType[]).map((p) => (
                      <button
                        key={p}
                        onClick={() => setPly(p)}
                        className={`flex-1 py-3 px-3 rounded-xl border text-xs font-mono font-bold tracking-widest transition-all duration-300 cursor-pointer ${
                          ply === p
                            ? 'bg-accent-cyber text-black border-accent-cyber shadow-[0_0_15px_rgba(0,255,102,0.15)]'
                            : 'bg-white/3 border-white/5 text-zinc-400 hover:border-white/10'
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Client spec specifications */}
                <div>
                  <label htmlFor="client-spec" className="block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-3">Client Spec Branding</label>
                  <input
                    type="text"
                    id="client-spec"
                    value={clientSpec}
                    onChange={(e) => setClientSpec(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs font-mono text-white focus:outline-none focus:border-accent-cyber transition-colors"
                    placeholder="Standard"
                  />
                </div>
              </div>

              {/* Dimensions Input Panel */}
              <div className="pt-2">
                <label className="block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-3">Dimensions (L x W x H) mm</label>
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <input
                      type="number"
                      value={length}
                      onChange={(e) => setLength(Math.max(0, Number(e.target.value)))}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm font-mono text-white focus:outline-none focus:border-accent-cyber transition-colors text-center"
                      placeholder="L"
                    />
                    <span className="block text-[10px] font-mono text-zinc-500 mt-1 text-center">Length</span>
                  </div>
                  <div>
                    <input
                      type="number"
                      value={width}
                      onChange={(e) => setWidth(Math.max(0, Number(e.target.value)))}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm font-mono text-white focus:outline-none focus:border-accent-cyber transition-colors text-center"
                      placeholder="W"
                    />
                    <span className="block text-[10px] font-mono text-zinc-500 mt-1 text-center">Width</span>
                  </div>
                  <div>
                    <input
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(Math.max(0, Number(e.target.value)))}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm font-mono text-white focus:outline-none focus:border-accent-cyber transition-colors text-center"
                      placeholder="H"
                    />
                    <span className="block text-[10px] font-mono text-zinc-500 mt-1 text-center">Height</span>
                  </div>
                </div>
              </div>

              {/* Quantity & Units Selector */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div>
                  <label htmlFor="quantity" className="block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-3">Order Quantity</label>
                  <input
                    type="number"
                    id="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(0, Number(e.target.value)))}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm font-mono text-white focus:outline-none focus:border-accent-cyber transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="unit" className="block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-3">Unit of Measure (UoM)</label>
                  <select
                    id="unit"
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm font-mono text-zinc-300 focus:outline-none focus:border-accent-cyber transition-colors appearance-none"
                  >
                    {unitOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-black text-white">{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

            </div>

            {/* Quick Action Load presets */}
            <div className="flex gap-4 items-center justify-between border-t border-white/5 pt-8 mt-8">
              <button
                type="button"
                onClick={loadPresetERPConfig}
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-secondary-kraft hover:text-accent-cyber transition-colors cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                Load Sample ERP Config (Pansari Specs)
              </button>
            </div>

          </div>

          {/* Right Column: Visualizer & Summary */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            
            {/* Interactive 3D Visualizer Panel */}
            <div className="glass-morphic h-[320px] rounded-3xl border border-white/5 flex flex-col items-center justify-center relative overflow-hidden">
              {/* Grid indicators */}
              <div className="absolute inset-0 bg-cyber-grid-dots opacity-40" />
              
              {/* 3D Box Container with Spring Scaling */}
              <div className="w-80 h-80 flex items-center justify-center" style={{ perspective: '1000px' }}>
                <motion.div
                  animate={{
                    scaleX: scaleX,
                    scaleY: scaleY,
                    scaleZ: scaleZ,
                    y: [-12, 12],
                  }}
                  transition={{
                    scaleX: { type: 'spring', stiffness: 120, damping: 14 },
                    scaleY: { type: 'spring', stiffness: 120, damping: 14 },
                    scaleZ: { type: 'spring', stiffness: 120, damping: 14 },
                    y: { repeat: Infinity, repeatType: 'reverse', duration: 4, ease: 'easeInOut' },
                  }}
                  className="w-36 h-28 relative transform-style-3d preserve-3d"
                >
                  {/* Front Face */}
                  <div 
                    className="absolute inset-0 bg-[#b08e64] border border-[#E0561B]/30 shadow-[inset_0_0_15px_rgba(0,0,0,0.4)] flex items-center justify-center backface-hidden"
                    style={{ transform: 'translateZ(72px)' }}
                  >
                    <div className="text-[7px] font-mono text-zinc-900/60 uppercase tracking-widest font-black">
                      {clientSpec !== 'Standard' ? clientSpec : 'KUBER'}
                    </div>
                  </div>

                  {/* Back Face */}
                  <div 
                    className="absolute inset-0 bg-[#a17e54] border border-[#E0561B]/30 shadow-[inset_0_0_15px_rgba(0,0,0,0.4)] backface-hidden"
                    style={{ transform: 'rotateY(180deg) translateZ(72px)' }}
                  />

                  {/* Left Face */}
                  <div 
                    className="absolute top-0 bottom-0 bg-[#937046] border border-[#E0561B]/30 shadow-[inset_0_0_15px_rgba(0,0,0,0.4)] backface-hidden"
                    style={{ 
                      width: '144px', 
                      left: '-72px',
                      transform: 'rotateY(-90deg) translateZ(72px)' 
                    }}
                  />

                  {/* Right Face */}
                  <div 
                    className="absolute top-0 bottom-0 bg-[#937046] border border-[#E0561B]/30 shadow-[inset_0_0_15px_rgba(0,0,0,0.4)] backface-hidden"
                    style={{ 
                      width: '144px', 
                      right: '-72px',
                      transform: 'rotateY(90deg) translateZ(72px)' 
                    }}
                  />

                  {/* Top Face */}
                  <div 
                    className="absolute left-0 right-0 bg-[#bf9d73] border border-[#E0561B]/30 shadow-[inset_0_0_12px_rgba(0,0,0,0.3)] backface-hidden"
                    style={{ 
                      height: '144px', 
                      top: '-72px',
                      transform: 'rotateX(90deg) translateZ(72px)' 
                    }}
                  >
                    <div className="absolute top-1/2 left-0 right-0 h-2 bg-zinc-950/15 transform -translate-y-1/2" />
                  </div>

                  {/* Bottom Face */}
                  <div 
                    className="absolute left-0 right-0 bg-[#8b683e] border border-[#E0561B]/30 backface-hidden"
                    style={{ 
                      height: '144px', 
                      bottom: '-72px',
                      transform: 'rotateX(-90deg) translateZ(72px)' 
                    }}
                  />
                </motion.div>
                
                {/* Visualizer Floor Ring shadow */}
                <div className="absolute bottom-14 w-28 h-2 bg-accent-cyber/15 rounded-full blur-[8px] transform rotateX-75 pointer-events-none" />
              </div>
              
              {/* Dimensions Telemetry Readout */}
              <div className="absolute bottom-4 left-6 right-6 flex justify-between font-mono text-[9px] text-zinc-500 uppercase tracking-widest">
                <span>X: {length}mm</span>
                <span>Z: {width}mm</span>
                <span>Y: {height}mm</span>
              </div>
            </div>

            {/* B2B Telemetry & Summary Card */}
            <div className="glass-morphic p-6 sm:p-8 rounded-3xl border border-white/5 flex flex-col justify-between flex-1 relative overflow-hidden">
              
              {/* High Tech Header */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
                  <Box className="w-4 h-4 text-accent-cyber" />
                  Configuration Readout
                </span>
                
                {/* Dynamic ERP Status Pulse */}
                <AnimatePresence mode="wait">
                  {isMapping ? (
                    <motion.div
                      key="syncing"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-[10px] font-mono text-secondary-kraft animate-pulse flex items-center gap-1"
                    >
                      <RefreshCw className="w-3 h-3 animate-spin" />
                      Mapping to TranZact ERP...
                    </motion.div>
                  ) : (
                    <motion.div
                      key="synced"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-[10px] font-mono text-accent-cyber flex items-center gap-1"
                    >
                      <Check className="w-3.5 h-3.5" />
                      Calibrated Specs
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Data Specifications List */}
              <div className="space-y-3 font-mono text-xs text-zinc-400 pb-6 border-b border-white/5">
                <div className="flex justify-between">
                  <span>Product:</span>
                  <span className="text-white">{productType}</span>
                </div>
                <div className="flex justify-between">
                  <span>Structural Board:</span>
                  <span className="text-white">{ply} Board</span>
                </div>
                <div className="flex justify-between">
                  <span>Volume / Quantity:</span>
                  <span className="text-white">{quantity} {unit}</span>
                </div>
                <div className="flex justify-between">
                  <span>Branding:</span>
                  <span className="text-white uppercase tracking-wider">{clientSpec} Specifications</span>
                </div>
              </div>

              {/* Live RFQ Generation Button */}
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="w-full py-4 bg-[#E0561B] text-white font-mono font-bold tracking-widest rounded-xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(224,86,27,0.35)] hover:scale-102 flex items-center justify-center gap-2 uppercase text-xs cursor-pointer"
                >
                  Generate Live Quote
                  <Send className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
