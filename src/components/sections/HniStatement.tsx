"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { SITE_DATA } from "@/data/siteData";

export default function HniStatement() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const monogramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        monogramRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 0.06,
          scale: 1,
          duration: 1.2,
          ease: "power1.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[520px] py-28 bg-gradient-to-r from-[#01162E] via-[#0A599E] via-[#03356C] to-[#01162E] animate-gradient-bg text-white flex items-center justify-center text-center overflow-hidden"
    >
      {/* Background Animated Glowing Ambient Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gaea-gold/25 rounded-full blur-3xl pointer-events-none animate-glow-1" />
      {/* Low Opacity Monogram Overlay Background */}
      <div
        ref={monogramRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 select-none z-0"
      >
        <div className="relative w-[600px] h-[600px]">
          <Image
            src="/images/brand/transparent-bg-logo.png"
            alt="GAEA Monogram"
            fill
            className="object-contain filter invert contrast-200"
          />
        </div>
      </div>

      <div className="max-w-[880px] mx-auto px-6 sm:px-12 relative z-10 space-y-8">
        <div ref={contentRef} className="space-y-6">
          <span className="font-secondary text-xs font-semibold tracking-widest text-gaea-gold-light uppercase">
            DIRECT HNI CONSULTATION
          </span>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.04]">
            {SITE_DATA.hniStatement.headline}
          </h2>

          <p className="font-body text-base sm:text-xl text-white/85 max-w-[700px] mx-auto leading-relaxed">
            {SITE_DATA.hniStatement.description}
          </p>

          <div className="pt-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center h-[54px] px-9 font-secondary text-sm font-semibold tracking-wide text-gaea-blue bg-white hover:bg-gaea-gold-surface rounded-md transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 group"
            >
              {SITE_DATA.hniStatement.cta}
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
