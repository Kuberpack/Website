import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050507] border-t border-white/5 pt-20 pb-10 px-6 sm:px-12 bg-cyber-grid overflow-hidden">
      {/* Background radial gradient glow for ambient depth */}
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-accent-cyber/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-1/4 top-1/2 w-[300px] h-[300px] bg-secondary-kraft/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
        {/* Column 1: Identity */}
        <div className="lg:col-span-4 space-y-6">
          <div>
            <span className="font-display text-2xl font-black tracking-tighter text-white">
              KUBER
            </span>
            <span className="text-xs font-mono border border-accent-cyber/20 text-accent-cyber bg-accent-cyber/5 px-2 py-0.5 rounded-full uppercase tracking-widest ml-2">
              PACK
            </span>
          </div>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
            &ldquo;Assuring your business needs&rdquo;
          </p>
          <div className="inline-flex items-center gap-2.5 bg-accent-cyber/5 border border-accent-cyber/20 rounded-xl px-4 py-2 text-xs font-mono text-accent-cyber uppercase tracking-wider shadow-[0_0_15px_rgba(224,86,27,0.08)]">
            <ShieldCheck className="w-4 h-4 text-accent-cyber animate-pulse" />
            ISO 9001:2015 Certified
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white border-l-2 border-accent-cyber pl-3">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {[
              { name: 'Home', href: '/' },
              { name: 'About Us', href: '/about' },
              { name: 'Capabilities', href: '/capabilities' },
              { name: 'Products', href: '/products' },
              { name: 'Careers', href: '/careers' },
              { name: 'Contact & RFQ', href: '/contact' },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors duration-200"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-accent-cyber opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Head Office */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white border-l-2 border-secondary-kraft pl-3">
            Head Office
          </h4>
          <div className="space-y-3.5 text-zinc-400 text-sm">
            <div className="flex gap-2.5 items-start">
              <MapPin className="w-4 h-4 text-secondary-kraft shrink-0 mt-0.5" />
              <span>
                173, Deepali Enclave,<br />
                Pitampura, Delhi - 110034, India.
              </span>
            </div>
            <div className="space-y-1.5 font-mono text-xs border-t border-white/5 pt-3.5">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-zinc-500" />
                <span>+91-11-47082459</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-zinc-500" />
                <span>+91-11-42466642</span>
              </div>
            </div>
          </div>
        </div>

        {/* Column 4: Works */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white border-l-2 border-accent-cyber pl-3">
            Works (Factory)
          </h4>
          <div className="space-y-3.5 text-zinc-400 text-sm">
            <div className="flex gap-2.5 items-start">
              <MapPin className="w-4 h-4 text-accent-cyber shrink-0 mt-0.5" />
              <span>
                60/7, Kami-Gannaur Road,<br />
                V.P.O. – Kami, Dist.- Sonipat - 131001, Haryana, India.
              </span>
            </div>
            <div className="space-y-1.5 font-mono text-xs border-t border-white/5 pt-3.5">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-zinc-500" />
                <span>+91-8860602060</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-zinc-500" />
                <a href="mailto:kuberpack@gmail.com" className="hover:text-accent-cyber transition-colors">
                  kuberpack@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-6xl mx-auto relative z-10 border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-zinc-500">
        <p>&copy; {currentYear} Kuber Paper & Pack Pvt. Ltd. All rights reserved.</p>
        <p className="flex items-center gap-2">
          <span>Assuring B2B Excellence</span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent-cyber" />
          <span>Made in India</span>
        </p>
      </div>
    </footer>
  );
}
