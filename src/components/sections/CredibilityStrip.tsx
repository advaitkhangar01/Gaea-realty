"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  Building2,
  UserCheck,
  Zap,
  FileCheck2,
  Sparkles,
} from "lucide-react";
import { SITE_DATA } from "@/data/siteData";

export default function CredibilityStrip() {
  const stripRef = useRef<HTMLDivElement>(null);
  const blocksRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        blocksRef.current,
        { opacity: 0, y: 25, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: stripRef.current,
            start: "top 92%",
          },
        }
      );
    }, stripRef);

    return () => ctx.revert();
  }, []);

  // Icon mapping for futuristic visual language
  const blockIcons = [
    <Building2 key="b2" className="w-5 h-5 text-gaea-gold-light" />,
    <UserCheck key="uc" className="w-5 h-5 text-gaea-gold-light" />,
    <Zap key="zp" className="w-5 h-5 text-gaea-gold-light" />,
    <FileCheck2 key="fc" className="w-5 h-5 text-gaea-gold-light" />,
  ];

  return (
    <section
      ref={stripRef}
      className="relative bg-gradient-to-r from-[#01162E] via-[#03356C] via-[#0A599E] to-[#01162E] animate-gradient-bg text-white py-10 md:py-14 border-y border-gaea-gold/20 shadow-2xl overflow-hidden z-20"
    >
      {/* Background Futuristic Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-60" />

      {/* Ambient Glowing Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-gaea-gold/25 rounded-full blur-3xl pointer-events-none animate-glow-1" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-72 bg-gaea-blue-light/25 rounded-full blur-3xl pointer-events-none animate-glow-2" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {SITE_DATA.credibilityBlocks.map((block, idx) => (
            <div
              key={block.label}
              ref={(el) => {
                if (el) blocksRef.current[idx] = el;
              }}
              className="group relative bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-gaea-gold/50 shadow-[0_4px_24px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_32px_rgba(144,107,59,0.2)] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Futuristic Corner Bracket Accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-gaea-gold/60 rounded-tl-sm group-hover:border-gaea-gold transition-colors" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-gaea-gold/20 rounded-tr-sm group-hover:border-gaea-gold/60 transition-colors" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-gaea-gold/20 rounded-bl-sm group-hover:border-gaea-gold/60 transition-colors" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-gaea-gold/60 rounded-br-sm group-hover:border-gaea-gold transition-colors" />

              {/* Top Header Row: Icon + Label + Pulse Node */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-lg bg-gaea-gold/15 border border-gaea-gold/30 flex items-center justify-center shadow-[0_0_12px_rgba(144,107,59,0.25)] group-hover:scale-110 group-hover:bg-gaea-gold/25 transition-all duration-300">
                  {blockIcons[idx]}
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gaea-gold animate-ping opacity-75" />
                  <span className="font-secondary text-[11px] font-semibold tracking-[0.16em] text-gaea-gold-light uppercase">
                    {block.label}
                  </span>
                </div>
              </div>

              {/* Content Row */}
              <div className="space-y-1.5 pt-1">
                <h4 className="font-display text-lg lg:text-xl text-white font-medium group-hover:text-gaea-gold-surface transition-colors">
                  {block.title}
                </h4>
                <p className="font-body text-xs text-white/70 leading-relaxed">
                  {block.detail}
                </p>
              </div>

              {/* Bottom Subtle Futuristic Line */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-secondary text-white/40 uppercase tracking-widest">
                <span>VERIFIED BLOCK 0{idx + 1}</span>
                <Sparkles className="w-3 h-3 text-gaea-gold/60 group-hover:text-gaea-gold transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
