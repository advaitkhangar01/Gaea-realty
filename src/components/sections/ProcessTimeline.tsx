"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SITE_DATA } from "@/data/siteData";

export default function ProcessTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate horizontal progress line on scroll
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      // Animate timeline nodes
      gsap.fromTo(
        nodesRef.current,
        { opacity: 0, scale: 0.8, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-24 lg:py-36 bg-gradient-to-b from-[#F9FAFC] via-[#E3ECF7]/50 via-[#F5F8FC] to-[#F4E9D6]/50 animate-gradient-slow text-gaea-charcoal relative overflow-hidden"
    >
      {/* Background Animated Glowing Ambient Orbs */}
      <div className="absolute top-10 left-1/3 w-96 h-96 bg-gaea-blue/15 rounded-full blur-3xl pointer-events-none animate-glow-1" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-gaea-gold/15 rounded-full blur-3xl pointer-events-none animate-glow-2" />
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">
        {/* Header */}
        <div className="max-w-[680px] space-y-4 mb-20">
          <span className="font-secondary text-xs font-semibold tracking-wide text-gaea-gold uppercase">
            OUR ADVISORY PROCESS
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-gaea-charcoal leading-[1.04]">
            From enquiry to decision, without the unnecessary steps.
          </h2>
          <p className="font-body text-base text-gaea-charcoal/75">
            A structured, predictable progression designed to save your time while providing total clarity at every milestone.
          </p>
        </div>

        {/* Desktop Horizontal Timeline (Visible on lg) */}
        <div className="hidden lg:block relative my-12">
          {/* Connecting Line */}
          <div
            ref={lineRef}
            className="absolute top-12 left-6 right-6 h-[2px] bg-gaea-blue origin-left z-0"
          />

          <div className="grid grid-cols-5 gap-6 relative z-10">
            {SITE_DATA.processSteps.map((item, idx) => (
              <div
                key={item.step}
                ref={(el) => {
                  if (el) nodesRef.current[idx] = el;
                }}
                className="flex flex-col space-y-6 pt-2"
              >
                {/* Gold Circle Node */}
                <div className="w-10 h-10 rounded-full bg-white border-2 border-gaea-gold flex items-center justify-center font-display text-sm font-bold text-gaea-blue shadow-md">
                  {item.step}
                </div>

                <div className="space-y-2 pr-2">
                  <h4 className="font-display text-lg text-gaea-charcoal font-medium">
                    {item.title}
                  </h4>
                  <p className="font-body text-xs text-gaea-charcoal/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet Vertical Timeline */}
        <div className="lg:hidden relative pl-8 space-y-10 border-l-2 border-gaea-blue/40 ml-4">
          {SITE_DATA.processSteps.map((item) => (
            <div key={item.step} className="relative space-y-2">
              {/* Node Marker */}
              <div className="absolute -left-[41px] top-0 w-8 h-8 rounded-full bg-white border-2 border-gaea-gold flex items-center justify-center font-display text-xs font-bold text-gaea-blue shadow-sm">
                {item.step}
              </div>

              <h4 className="font-display text-xl text-gaea-charcoal font-medium">
                {item.title}
              </h4>
              <p className="font-body text-sm text-gaea-charcoal/75 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
