"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Award, Briefcase, GraduationCap, ShieldCheck } from "lucide-react";
import gsap from "gsap";
import { SITE_DATA } from "@/data/siteData";

export default function FounderSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
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
      id="about"
      ref={sectionRef}
      className="py-24 lg:py-36 bg-gradient-to-br from-[#021B38] via-[#03356C] via-[#05407F] to-[#01162E] animate-gradient-bg text-white relative overflow-hidden"
    >
      {/* Background Animated Glowing Ambient Orbs */}
      <div className="absolute top-10 left-10 w-[450px] h-[450px] bg-gaea-gold/20 rounded-full blur-3xl pointer-events-none animate-glow-1" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-gaea-blue-light/25 rounded-full blur-3xl pointer-events-none animate-glow-2" />
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column Image (5 cols on lg -> ~440x540px) */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              ref={imageRef}
              className="relative w-full max-w-[440px] h-[480px] md:h-[540px] rounded-tl-xl rounded-bl-xl rounded-br-xl rounded-tr-[80px] overflow-hidden border border-white/15 shadow-card bg-gaea-blue-deep"
            >
              {/* Founder Image Frame */}
              <Image
                src="/images/founder/ashish_dhoke.jpg"
                alt={SITE_DATA.founder.name}
                fill
                className="object-cover object-top"
              />

              {/* Founder Name Card Tag */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-lg bg-black/70 backdrop-blur-md border border-white/20">
                <h4 className="font-display text-xl text-white font-semibold">
                  {SITE_DATA.founder.name}
                </h4>
                <p className="font-secondary text-xs text-gaea-gold-light mt-0.5">
                  {SITE_DATA.founder.role}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column Content (7 cols on lg) */}
          <div ref={contentRef} className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="font-secondary text-xs font-semibold tracking-wide text-gaea-gold-light uppercase">
                FOUNDER LEADERSHIP
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.06]">
                Experience matters when the decision matters.
              </h2>
            </div>

            {/* Verified Bio Paragraph */}
            <p className="font-body text-base sm:text-lg text-white/85 leading-relaxed">
              {SITE_DATA.founder.summary}
            </p>

            {/* Education & Background Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-secondary text-xs text-white/80">
              <div className="flex items-center gap-3 p-3.5 rounded-lg bg-white/5 border border-white/10">
                <GraduationCap className="w-5 h-5 text-gaea-gold-light flex-shrink-0" />
                <div>
                  <span className="text-[10px] text-white/50 block uppercase">Alumni</span>
                  <span className="font-semibold text-white">{SITE_DATA.founder.education}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-lg bg-white/5 border border-white/10">
                <Briefcase className="w-5 h-5 text-gaea-gold-light flex-shrink-0" />
                <div>
                  <span className="text-[10px] text-white/50 block uppercase">Location</span>
                  <span className="font-semibold text-white">{SITE_DATA.founder.location}</span>
                </div>
              </div>
            </div>

            {/* Verified Credential Tags */}
            <div className="space-y-3 pt-4">
              <h4 className="font-secondary text-xs font-semibold text-gaea-gold-light uppercase tracking-widest">
                Core Professional Competencies
              </h4>
              <div className="flex flex-wrap gap-2">
                {SITE_DATA.founder.credentialTags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/10 text-white font-secondary text-xs font-medium tracking-wide border border-white/15"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-gaea-gold" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
