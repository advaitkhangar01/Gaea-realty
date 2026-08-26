"use client";

import { useEffect, useRef } from "react";
import { CheckCircle2, ShieldCheck, FileCheck2 } from "lucide-react";
import gsap from "gsap";
import { SITE_DATA } from "@/data/siteData";

export default function TransactionSupport() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const graphicRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        graphicRef.current,
        { opacity: 0, scale: 0.95, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 bg-gradient-to-br from-[#D9E6F5] via-[#E3ECF7] via-[#EFF5FC] to-[#CBDDF2] animate-gradient-slow text-gaea-charcoal relative overflow-hidden"
    >
      {/* Background Animated Glowing Ambient Orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-gaea-blue/20 rounded-full blur-3xl pointer-events-none animate-glow-1" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gaea-olive/20 rounded-full blur-3xl pointer-events-none animate-glow-2" />
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Abstract Vector Document Graphic System */}
          <div ref={graphicRef} className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[500px] h-[380px] sm:h-[420px] bg-white rounded-2xl p-8 shadow-card border border-gaea-blue/15 flex flex-col justify-between overflow-hidden">
              {/* Top Graphic Header */}
              <div className="flex items-center justify-between border-b border-gaea-blue/10 pb-4">
                <div className="flex items-center gap-2">
                  <FileCheck2 className="w-6 h-6 text-gaea-blue" />
                  <span className="font-secondary text-xs font-semibold text-gaea-blue uppercase tracking-wider">
                    TRANSACTION COORDINATION SYSTEM
                  </span>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-gaea-olive animate-pulse" />
              </div>

              {/* Vector Document Outline Layers */}
              <div className="space-y-4 my-6">
                {/* Layer 1: Property Outline */}
                <div className="p-4 rounded-lg bg-gaea-blue/5 border border-gaea-blue/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-gaea-blue text-white flex items-center justify-center font-secondary text-xs font-bold">
                      01
                    </div>
                    <div>
                      <h4 className="font-secondary text-xs font-semibold text-gaea-charcoal">
                        Property Record & Layout Verification
                      </h4>
                      <p className="font-body text-[11px] text-gaea-charcoal/60">
                        Specification & area matching
                      </p>
                    </div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-gaea-olive" />
                </div>

                {/* Layer 2: Signature Line & Paperwork */}
                <div className="p-4 rounded-lg bg-gaea-gold/10 border border-gaea-gold/20 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-gaea-gold text-white flex items-center justify-center font-secondary text-xs font-bold">
                      02
                    </div>
                    <div>
                      <h4 className="font-secondary text-xs font-semibold text-gaea-charcoal">
                        Documentation & Paperwork Assist
                      </h4>
                      <p className="font-body text-[11px] text-gaea-charcoal/60">
                        Transaction milestone coordination
                      </p>
                    </div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-gaea-gold" />
                </div>

                {/* Layer 3: Handover Timeline */}
                <div className="p-4 rounded-lg bg-gaea-olive/10 border border-gaea-olive/20 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-gaea-olive text-white flex items-center justify-center font-secondary text-xs font-bold">
                      03
                    </div>
                    <div>
                      <h4 className="font-secondary text-xs font-semibold text-gaea-charcoal">
                        Completion & Transfer Guidance
                      </h4>
                      <p className="font-body text-[11px] text-gaea-charcoal/60">
                        Structured timeline support
                      </p>
                    </div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-gaea-olive" />
                </div>
              </div>

              {/* Graphic Footer Note */}
              <div className="text-[11px] font-secondary text-gaea-charcoal/60 pt-2 border-t border-gaea-blue/10 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-gaea-blue" />
                <span>Coordination support provided throughout the client journey.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            <span className="font-secondary text-xs font-semibold tracking-wide text-gaea-blue uppercase">
              END-TO-END COORDINATION
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-gaea-charcoal leading-[1.06]">
              {SITE_DATA.transactionSupport.headline}
            </h2>
            <p className="font-body text-base sm:text-lg text-gaea-charcoal/80 leading-relaxed">
              {SITE_DATA.transactionSupport.description}
            </p>

            <ul className="space-y-3 pt-2 font-secondary text-sm text-gaea-charcoal">
              {SITE_DATA.transactionSupport.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gaea-blue flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
