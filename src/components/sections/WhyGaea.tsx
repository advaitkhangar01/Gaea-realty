"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SITE_DATA } from "@/data/siteData";

export default function WhyGaea() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
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
      id="why-gaea"
      ref={sectionRef}
      className="py-24 lg:py-36 bg-gradient-to-br from-[#EBF0E1] via-[#E6E8DF] via-[#DFE3D5] to-[#CCD1BE] animate-gradient-slow text-gaea-charcoal relative overflow-hidden bg-contour-pattern"
    >
      {/* Background Animated Glowing Ambient Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-gaea-olive/20 rounded-full blur-3xl pointer-events-none animate-glow-1" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gaea-gold/20 rounded-full blur-3xl pointer-events-none animate-glow-2" />
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Heading Column (45% -> 5 cols on lg) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
            <span className="font-secondary text-xs font-semibold tracking-wide text-gaea-olive uppercase">
              THE GAEA APPROACH
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-gaea-charcoal leading-[1.04]">
              {SITE_DATA.whyGaea.headline}
            </h2>
            <p className="font-body text-base text-gaea-charcoal/80 leading-relaxed">
              We operate specifically for time-constrained, risk-averse business owners and high-net-worth buyers who prioritize clarity, proof, and personal accountability over aggressive sales funnels.
            </p>
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center h-12 px-6 font-secondary text-xs sm:text-sm font-semibold text-white bg-gaea-olive hover:bg-gaea-olive-deep rounded-md transition-colors shadow-sm"
              >
                Schedule Private Discussion
              </a>
            </div>
          </div>

          {/* Right Content Column (55% -> 7 cols on lg) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SITE_DATA.whyGaea.principles.map((principle, idx) => (
              <div
                key={principle.number}
                ref={(el) => {
                  if (el) cardsRef.current[idx] = el;
                }}
                className="bg-white/80 backdrop-blur-sm p-7 md:p-8 rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-2xl border border-gaea-olive/20 shadow-subtle hover:border-gaea-olive transition-all duration-300 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl font-semibold text-gaea-gold">
                    {principle.number}
                  </span>
                  <div className="w-6 h-0.5 bg-gaea-olive/30" />
                </div>
                <h3 className="font-display text-xl text-gaea-charcoal font-medium">
                  {principle.title}
                </h3>
                <p className="font-body text-sm text-gaea-charcoal/75 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
