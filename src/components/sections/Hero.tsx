"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, MapPin } from "lucide-react";
import gsap from "gsap";
import { SITE_DATA } from "@/data/siteData";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9 }
      )
        .fromTo(
          subheadlineRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.5"
        )
        .fromTo(
          imageRef.current,
          { opacity: 0, scale: 1.035 },
          { opacity: 1, scale: 1, duration: 1.1 },
          "-=0.8"
        )
        .fromTo(
          orbitRef.current,
          { opacity: 0, rotate: -15 },
          { opacity: 1, rotate: 0, duration: 1.4 },
          "-=1.0"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[780px] lg:min-h-[860px] pt-32 pb-20 md:pt-36 md:pb-24 flex items-center bg-gradient-to-br from-[#F4E9D6]/50 via-white via-[#E3ECF7]/50 to-[#E6E8DF]/40 animate-gradient-slow overflow-hidden"
    >
      {/* Background Animated Glowing Ambient Orbs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-gaea-blue/15 rounded-full blur-3xl pointer-events-none animate-glow-1" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-gaea-gold/20 rounded-full blur-3xl pointer-events-none animate-glow-2" />
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (46% width -> 5 cols on lg) */}
          <div className="lg:col-span-5 max-w-[600px] z-10 space-y-8">
            {/* Location & Trust Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gaea-blue/5 border border-gaea-blue/15">
              <MapPin className="w-3.5 h-3.5 text-gaea-blue" />
              <span className="font-secondary text-xs font-semibold tracking-wide text-gaea-blue uppercase">
                Mumbai Luxury Real Estate
              </span>
            </div>

            {/* Main Headline */}
            <h1
              ref={headlineRef}
              className="font-display text-4xl sm:text-5xl lg:text-6xl text-gaea-charcoal leading-[1.02] tracking-tight"
            >
              {SITE_DATA.hero.headline}
            </h1>

            {/* Supporting Paragraph */}
            <p
              ref={subheadlineRef}
              className="font-body text-base sm:text-lg text-gaea-charcoal/80 leading-relaxed"
            >
              {SITE_DATA.hero.subheadline}
            </p>

            {/* Action Buttons */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center h-[52px] px-8 font-secondary text-sm font-semibold tracking-wide text-white bg-gaea-blue hover:bg-gaea-blue-deep rounded-md transition-all duration-200 shadow-md hover:shadow-lg group"
              >
                {SITE_DATA.hero.primaryCta}
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href="#properties"
                className="inline-flex items-center justify-center h-[52px] px-7 font-secondary text-sm font-semibold text-gaea-charcoal hover:text-gaea-blue border border-gaea-charcoal/20 hover:border-gaea-blue/40 hover:bg-gaea-blue/5 rounded-md transition-all duration-200"
              >
                {SITE_DATA.hero.secondaryCta}
              </a>
            </div>

            {/* Verification Badge */}
            <div className="pt-4 flex items-center gap-2 text-xs font-secondary text-gaea-charcoal/60">
              <ShieldCheck className="w-4 h-4 text-gaea-olive" />
              <span>Registered Entity • CIN: {SITE_DATA.company.cin}</span>
            </div>
          </div>

          {/* Right Column (54% width -> 7 cols on lg) */}
          <div className="lg:col-span-7 relative flex justify-center lg:justify-end items-center">
            {/* Orbital Curve Art behind image */}
            <svg
              ref={orbitRef}
              className="absolute -top-12 -right-12 w-[680px] h-[680px] pointer-events-none z-0"
              viewBox="0 0 700 700"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Primary Earth Olive Orbit */}
              <circle
                cx="350"
                cy="350"
                r="320"
                stroke="#566038"
                strokeWidth="1.5"
                strokeDasharray="8 6"
                className="opacity-15"
              />
              {/* Secondary Warm Gold Orbit */}
              <circle
                cx="350"
                cy="350"
                r="260"
                stroke="#906B3B"
                strokeWidth="1"
                className="opacity-12"
              />
              {/* Deep Blue Monogram Ring Accent */}
              <circle
                cx="350"
                cy="350"
                r="345"
                stroke="#03356C"
                strokeWidth="0.75"
                className="opacity-10"
              />
            </svg>

            {/* Hero Architectural Image Frame */}
            <div
              ref={imageRef}
              className="relative w-full max-w-[580px] h-[480px] sm:h-[560px] md:h-[640px] rounded-tl-xl rounded-bl-xl rounded-tr-xl rounded-br-[72px] overflow-hidden shadow-card border border-gaea-charcoal/10 bg-gaea-blue/5 z-10"
            >
              <Image
                src="/images/hero/hero_luxury_property.jpg"
                alt="GAEA Luxury Property Opportunities in Mumbai"
                fill
                className="object-cover object-center"
                priority
              />

              {/* Editorial Architectural Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gaea-blue-deep/80 via-gaea-blue-deep/20 to-transparent flex flex-col justify-end p-8 text-white">
                <p className="font-secondary text-xs tracking-widest text-gaea-gold-light uppercase font-semibold">
                  MUMBAI RESIDENTIAL ADVISORY
                </p>
                <h3 className="font-display text-2xl mt-1 text-white font-normal">
                  Curated Luxury Real Estate
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
