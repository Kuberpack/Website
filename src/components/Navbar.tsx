'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useRFQ } from '@/context/RFQContext';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Capabilities', href: '/capabilities' },
  { name: 'Products', href: '/products' },
  { name: 'Careers', href: '/careers' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { openRFQ } = useRFQ();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 ${
          isScrolled ? 'pt-3' : 'pt-6'
        }`}
      >
        <div
          className={`flex items-center justify-between w-full max-w-6xl transition-all duration-500 rounded-full px-6 md:px-8 border ${
            isScrolled
              ? 'glass-morphic py-3 shadow-[0_10px_30px_rgba(0,0,0,0.6)] border-white/10 scale-98'
              : 'bg-transparent border-transparent py-5 scale-100'
          }`}
        >
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <Image
              src="/kuber-logo-mark.png"
              alt="Kuber Paper & Pack Pvt. Ltd. Logo"
              width={34}
              height={34}
              priority
              className="object-contain transition-transform group-hover:scale-105 rounded-lg border border-[#E0561B]/20"
            />
            <div className="flex flex-col">
              <span className="font-display text-base md:text-lg font-black tracking-tighter text-white transition-all duration-300 group-hover:text-accent-cyber leading-none font-bold">
                KUBER
              </span>
              <span className="text-[7px] font-mono tracking-widest text-[#E0561B] leading-none mt-1 uppercase font-bold">
                PAPER & PACK PVT. LTD.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/5 border border-white/5 py-1 px-1.5 rounded-full glass-morphic-light relative">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-semibold tracking-wide transition-colors rounded-full text-zinc-300 hover:text-white"
                >
                  <motion.span
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative z-10 block"
                  >
                    {link.name}
                  </motion.span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-white/5 border border-white/10 rounded-full z-0"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Button & Hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={openRFQ}
              className="relative hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-mono font-bold tracking-widest text-white bg-[#E0561B] hover:shadow-[0_0_20px_rgba(224,86,27,0.4)] transition-all duration-300 uppercase overflow-hidden group cursor-pointer animate-[pulse-glow_3s_infinite]"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Request Quote <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-accent-cyber/30 hover:bg-white/10 text-white transition-all md:hidden cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg flex flex-col justify-center px-8 md:hidden"
          >
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-accent-cyber/10 rounded-full blur-[100px] pointer-events-none" />

            <nav className="flex flex-col gap-6 text-left relative z-10">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-display text-4xl sm:text-5xl font-black uppercase text-zinc-500 hover:text-white transition-colors flex items-center gap-4 group"
                  >
                    <span className="text-zinc-700 font-mono text-sm">0{idx + 1}.</span>
                    <span className="group-hover:text-accent-cyber transition-colors">{link.name}</span>
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.1, duration: 0.5 }}
                className="pt-6 border-t border-white/10 mt-4"
              >
                <button
                  onClick={() => {
                    setIsOpen(false);
                    openRFQ();
                  }}
                  className="inline-flex items-center gap-2 text-2xl font-mono font-bold text-accent-cyber hover:text-white transition-colors text-left cursor-pointer"
                >
                  Request Quote <ArrowUpRight className="w-6 h-6" />
                </button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
