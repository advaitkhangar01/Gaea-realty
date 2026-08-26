"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Compass,
  FileCheck2,
  KeyRound,
  CheckCircle2,
  ArrowRight,
  UserCheck,
  Layers,
  Sparkles,
  Sliders,
  Check,
  Building,
} from "lucide-react";
import gsap from "gsap";
import { SITE_DATA } from "@/data/siteData";

export default function AdvisorySection() {
  const [activeStep, setActiveStep] = useState<number>(0);
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
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      num: "01",
      title: "Requirement Blueprint",
      tag: "SPATIAL MAPPING",
      desc: "Define carpet area, location, privacy & timeline.",
      icon: Sliders,
    },
    {
      num: "02",
      title: "Off-Market Sourcing",
      tag: "PRE-VETTING",
      desc: "Curate unlisted luxury units in prime Mumbai hubs.",
      icon: Compass,
    },
    {
      num: "03",
      title: "Private Briefing",
      tag: "LAYOUT AUDIT",
      desc: "Evaluate carpet efficiency & price comparisons.",
      icon: Layers,
    },
    {
      num: "04",
      title: "Escorted Site Inspection",
      tag: "ON-SITE VERIFY",
      desc: "Inspect floor plates, orientation & acoustic insulation.",
      icon: FileCheck2,
    },
    {
      num: "05",
      title: "Closing & Handover",
      tag: "KEY CONCIERGE",
      desc: "Complete documentation, RERA audit & key handover.",
      icon: KeyRound,
    },
  ];

  return (
    <section
      id="advisory"
      ref={sectionRef}
      className="py-24 lg:py-36 bg-gradient-to-b from-[#FAF8F5] via-[#F3F0E6] to-[#FAF8F5] text-gaea-charcoal relative overflow-hidden"
    >
      {/* Scroll Anchors for legacy links */}
      <div id="why-gaea" className="absolute -top-24 left-0" />
      <div id="process" className="absolute -top-24 left-0" />

      {/* Decorative Subtle Architectural Lines Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2dfd5_1px,transparent_1px),linear-gradient(to_bottom,#e2dfd5_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-30 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 relative z-10 space-y-20">
        {/* Section Header */}
        <div className="text-center max-w-[800px] mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gaea-blue/10 text-gaea-blue font-secondary text-xs font-semibold tracking-wider uppercase border border-gaea-blue/20">
            <Sparkles className="w-3.5 h-3.5 text-gaea-gold" />
            <span>GAEA PRIVATE REAL ESTATE ADVISORY</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-gaea-charcoal leading-[1.05] tracking-tight">
            Architectural Precision. Fiduciary Discretion.
          </h2>

          <p className="font-body text-base sm:text-lg text-gaea-charcoal/75 max-w-[650px] mx-auto">
            A graphic, highly structured advisory model built for time-conscious high-net-worth buyers in Mumbai.
          </p>
        </div>

        {/* PART 1: 4 HIGH-IMPACT VISUAL ADVISORY CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* VISUAL CARD 1: OFF-MARKET INTELLIGENCE */}
          <div
            ref={(el) => {
              if (el) cardsRef.current[0] = el;
            }}
            className="group relative rounded-2xl overflow-hidden bg-white border border-gaea-charcoal/10 shadow-card hover:shadow-2xl transition-all duration-300 flex flex-col justify-between min-h-[380px]"
          >
            {/* Top Architectural Background Image */}
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src="/images/properties/property_tower_suite.jpg"
                alt="Off-Market Sourcing"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1 rounded bg-gaea-blue text-white font-secondary text-[11px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-gaea-gold-light" />
                PILLAR 01 • SOURCING
              </div>
            </div>

            {/* Content & Visual Graphic */}
            <div className="p-8 space-y-5 relative z-10 -mt-6 bg-white rounded-t-2xl">
              <div>
                <h3 className="font-display text-2xl text-gaea-charcoal font-medium">
                  Off-Market Intelligence & Selection
                </h3>
                <p className="font-body text-sm text-gaea-charcoal/75 mt-1">
                  We bypass broadcast listings to access curated high-floor and sea-view residences in South Mumbai, Bandra, and Worli.
                </p>
              </div>

              {/* Graphic Visual Widget: Spatial Audit Meter */}
              <div className="p-4 rounded-xl bg-[#F6F4EE] border border-gaea-gold/30 space-y-2">
                <div className="flex justify-between text-xs font-secondary font-semibold text-gaea-charcoal">
                  <span className="flex items-center gap-1 text-gaea-blue">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gaea-olive" />
                    Carpet Area Usable Ratio
                  </span>
                  <span className="text-gaea-gold font-bold">84% Efficiency Grade</span>
                </div>
                <div className="w-full h-2.5 bg-gaea-charcoal/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-gaea-blue to-gaea-gold w-[84%] rounded-full" />
                </div>
                <div className="flex justify-between text-[11px] font-secondary text-gaea-charcoal/60 pt-1">
                  <span>Zero Unvetted Spam</span>
                  <span>100% Pre-Audited Units</span>
                </div>
              </div>
            </div>
          </div>

          {/* VISUAL CARD 2: DIRECT FOUNDER REPRESENTATION */}
          <div
            ref={(el) => {
              if (el) cardsRef.current[1] = el;
            }}
            className="group relative rounded-2xl overflow-hidden bg-white border border-gaea-charcoal/10 shadow-card hover:shadow-2xl transition-all duration-300 flex flex-col justify-between min-h-[380px]"
          >
            {/* Background Graphic & Founder Avatar */}
            <div className="relative h-48 w-full overflow-hidden bg-gradient-to-r from-gaea-blue-deep to-[#03356C] p-6 text-white flex items-center justify-between">
              <div className="space-y-1 z-10">
                <span className="px-3 py-1 rounded bg-gaea-gold text-white font-secondary text-[11px] font-bold uppercase tracking-wider">
                  PILLAR 02 • FIDUCIARY
                </span>
                <h4 className="font-display text-xl text-white pt-2">
                  Founder Ashish Dhoke
                </h4>
                <p className="font-secondary text-xs text-gaea-gold-light">
                  Direct Leadership Involvement
                </p>
              </div>

              {/* Founder Image Badge */}
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-gaea-gold shadow-lg z-10 flex-shrink-0">
                <Image
                  src="/images/founder/ashish_dhoke.jpg"
                  alt="Ashish Dhoke Founder"
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Decorative Geometric Overlay */}
              <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full border border-white/10 pointer-events-none" />
            </div>

            {/* Content & Visual Graphic */}
            <div className="p-8 space-y-5">
              <div>
                <h3 className="font-display text-2xl text-gaea-charcoal font-medium">
                  Direct Founder Representation
                </h3>
                <p className="font-body text-sm text-gaea-charcoal/75 mt-1">
                  Senior leadership personally handles your commercial negotiation, safeguarding your confidentiality and terms.
                </p>
              </div>

              {/* Graphic Visual Widget: Fiduciary Shield Badges */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-gaea-blue/5 border border-gaea-blue/15 flex items-center gap-2.5">
                  <UserCheck className="w-5 h-5 text-gaea-blue flex-shrink-0" />
                  <span className="font-secondary text-xs font-semibold text-gaea-charcoal">
                    1:1 Direct Advisory
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-gaea-gold/10 border border-gaea-gold/25 flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-gaea-gold flex-shrink-0" />
                  <span className="font-secondary text-xs font-semibold text-gaea-charcoal">
                    Strict NDA Protocol
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* VISUAL CARD 3: LEGAL & CARPET AREA AUDIT */}
          <div
            ref={(el) => {
              if (el) cardsRef.current[2] = el;
            }}
            className="group relative rounded-2xl overflow-hidden bg-white border border-gaea-charcoal/10 shadow-card hover:shadow-2xl transition-all duration-300 flex flex-col justify-between min-h-[380px]"
          >
            {/* Background Graphic Blueprint */}
            <div className="relative h-48 w-full bg-[#0B192C] p-6 text-white overflow-hidden flex flex-col justify-between">
              <div className="flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded bg-gaea-olive text-white font-secondary text-[11px] font-bold uppercase tracking-wider">
                  PILLAR 03 • DUE DILIGENCE
                </span>
                <FileCheck2 className="w-6 h-6 text-gaea-gold" />
              </div>

              {/* Visual Blueprint Diagram Lines */}
              <div className="my-auto z-10 space-y-1.5 font-mono text-[11px] text-gaea-gold-light/90">
                <div className="flex justify-between border-b border-white/10 pb-1">
                  <span>[RERA REGISTRATION]</span>
                  <span className="text-emerald-400 font-bold">VERIFIED</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-1">
                  <span>[CARPET AREA AUDIT]</span>
                  <span className="text-emerald-400 font-bold">PASSED</span>
                </div>
                <div className="flex justify-between">
                  <span>[TITLE ENCUMBRANCE]</span>
                  <span className="text-emerald-400 font-bold">CLEAN</span>
                </div>
              </div>

              <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
            </div>

            {/* Content */}
            <div className="p-8 space-y-5">
              <div>
                <h3 className="font-display text-2xl text-gaea-charcoal font-medium">
                  RERA & Carpet Area Audit
                </h3>
                <p className="font-body text-sm text-gaea-charcoal/75 mt-1">
                  Complete spatial and legal verification before taking financial commitments, ensuring zero hidden surprises.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-secondary font-medium text-gaea-olive bg-gaea-olive/10 p-3 rounded-lg border border-gaea-olive/20">
                <Check className="w-4 h-4 text-gaea-olive" />
                <span>Protected against loading percentage inflation & title disputes.</span>
              </div>
            </div>
          </div>

          {/* VISUAL CARD 4: END-TO-END TRANSACTION CONCIERGE */}
          <div
            ref={(el) => {
              if (el) cardsRef.current[3] = el;
            }}
            className="group relative rounded-2xl overflow-hidden bg-white border border-gaea-charcoal/10 shadow-card hover:shadow-2xl transition-all duration-300 flex flex-col justify-between min-h-[380px]"
          >
            {/* Top Background Image */}
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src="/images/properties/property_coastal_deck.jpg"
                alt="Transaction Concierge"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1 rounded bg-gaea-gold text-white font-secondary text-[11px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                <KeyRound className="w-3.5 h-3.5 text-white" />
                PILLAR 04 • CLOSING
              </div>
            </div>

            {/* Content & Visual Milestone Bar */}
            <div className="p-8 space-y-5 relative z-10 -mt-6 bg-white rounded-t-2xl">
              <div>
                <h3 className="font-display text-2xl text-gaea-charcoal font-medium">
                  Transaction & Handover Concierge
                </h3>
                <p className="font-body text-sm text-gaea-charcoal/75 mt-1">
                  From Agreement to Sale reviews, payment milestone tracking, to final key handover—we coordinate every detail.
                </p>
              </div>

              {/* Graphic Milestone Progression Bar */}
              <div className="p-3.5 rounded-xl bg-[#F6F4EE] border border-gaea-charcoal/10 flex items-center justify-between font-secondary text-[11px] font-semibold text-gaea-charcoal">
                <div className="flex items-center gap-1.5 text-gaea-blue">
                  <span className="w-5 h-5 rounded-full bg-gaea-blue text-white flex items-center justify-center text-[10px]">1</span>
                  <span>Agreement</span>
                </div>
                <div className="w-6 h-0.5 bg-gaea-gold" />
                <div className="flex items-center gap-1.5 text-gaea-gold">
                  <span className="w-5 h-5 rounded-full bg-gaea-gold text-white flex items-center justify-center text-[10px]">2</span>
                  <span>Registration</span>
                </div>
                <div className="w-6 h-0.5 bg-gaea-olive" />
                <div className="flex items-center gap-1.5 text-gaea-olive">
                  <span className="w-5 h-5 rounded-full bg-gaea-olive text-white flex items-center justify-center text-[10px]">3</span>
                  <span>Keys</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PART 2: GRAPHIC 5-STEP ADVISORY WORKFLOW PIPELINE */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-gaea-charcoal/10 shadow-card space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gaea-charcoal/10 pb-6">
            <div>
              <span className="font-secondary text-xs font-bold text-gaea-gold uppercase tracking-widest block">
                PREDICTABLE PROCESS
              </span>
              <h3 className="font-display text-3xl sm:text-4xl text-gaea-charcoal font-medium mt-1">
                The 5-Stage Advisory Journey
              </h3>
            </div>
            <p className="font-body text-xs sm:text-sm text-gaea-charcoal/70 max-w-[400px]">
              Click any stage below to inspect advisor deliverables and estimated milestone timelines.
            </p>
          </div>

          {/* Graphic Timeline Stepper Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              const isSelected = idx === activeStep;
              return (
                <div
                  key={step.num}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 rounded-xl border transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between min-h-[160px] ${
                    isSelected
                      ? "bg-gaea-blue text-white border-gaea-blue shadow-lg scale-[1.02]"
                      : "bg-[#FBF9F5] text-gaea-charcoal border-gaea-charcoal/10 hover:border-gaea-blue/40 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-display text-sm font-bold ${
                        isSelected ? "text-gaea-gold-light" : "text-gaea-gold"
                      }`}
                    >
                      {step.num}
                    </span>
                    <IconComponent
                      className={`w-5 h-5 ${
                        isSelected ? "text-gaea-gold-light" : "text-gaea-blue"
                      }`}
                    />
                  </div>

                  <div>
                    <span
                      className={`font-secondary text-[9px] font-bold uppercase tracking-wider block mb-1 ${
                        isSelected ? "text-white/70" : "text-gaea-charcoal/50"
                      }`}
                    >
                      {step.tag}
                    </span>
                    <h4 className="font-display text-base font-medium leading-snug">
                      {step.title}
                    </h4>
                  </div>

                  {isSelected && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gaea-gold" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Dynamic Active Step Detail Display Card */}
          <div className="p-6 sm:p-8 rounded-xl bg-[#F6F4EE] border border-gaea-gold/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-[650px]">
              <div className="flex items-center gap-2 text-gaea-gold font-secondary text-xs font-bold uppercase tracking-wider">
                <span>STAGE {steps[activeStep].num} • {steps[activeStep].tag}</span>
              </div>
              <h4 className="font-display text-2xl text-gaea-charcoal font-medium">
                {SITE_DATA.processSteps[activeStep].title}
              </h4>
              <p className="font-body text-sm text-gaea-charcoal/80 leading-relaxed">
                {SITE_DATA.processSteps[activeStep].description}
              </p>
            </div>

            <div className="w-full md:w-auto bg-white p-5 rounded-lg border border-gaea-charcoal/10 shadow-xs space-y-2 flex-shrink-0">
              <div className="text-xs font-secondary text-gaea-charcoal/60 uppercase">
                Expected Deliverable:
              </div>
              <div className="font-secondary text-xs font-bold text-gaea-blue flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gaea-olive" />
                <span>{SITE_DATA.processSteps[activeStep].deliverable}</span>
              </div>
            </div>
          </div>
        </div>

        {/* PART 3: HIGH-IMPACT METRICS & DIRECT ADVISORY CTA BANNER */}
        <div className="bg-gradient-to-r from-gaea-blue-deep via-[#03356C] to-gaea-blue-deep text-white rounded-2xl p-8 sm:p-12 border border-gaea-gold/30 shadow-xl space-y-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center border-b border-white/15 pb-8">
            <div className="space-y-1">
              <div className="font-display text-3xl sm:text-4xl text-gaea-gold-light font-bold">
                40+ Hrs
              </div>
              <div className="font-secondary text-xs text-white/80">
                Time Saved in Unvetted Visits
              </div>
            </div>
            <div className="space-y-1">
              <div className="font-display text-3xl sm:text-4xl text-gaea-gold-light font-bold">
                100%
              </div>
              <div className="font-secondary text-xs text-white/80">
                Fiduciary Confidentiality
              </div>
            </div>
            <div className="space-y-1">
              <div className="font-display text-3xl sm:text-4xl text-gaea-gold-light font-bold">
                0 Spam
              </div>
              <div className="font-secondary text-xs text-white/80">
                Zero Broadcast Sales Pitch
              </div>
            </div>
            <div className="space-y-1">
              <div className="font-display text-3xl sm:text-4xl text-gaea-gold-light font-bold">
                1:1
              </div>
              <div className="font-secondary text-xs text-white/80">
                Direct Founder Engagement
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-display text-2xl text-white font-medium">
                Ready to discuss your property requirement?
              </h4>
              <p className="font-body text-xs sm:text-sm text-white/80">
                Schedule a private consultation with Founder Ashish Dhoke.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 font-secondary text-xs font-semibold tracking-wide text-gaea-blue bg-white hover:bg-gaea-gold-light rounded-md transition-all duration-200 shadow-md group"
              >
                Schedule Private Discussion
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href={`https://wa.me/${SITE_DATA.company.whatsappNumber}?text=Hello%20GAEA%20Realty,%20I%20would%20like%20to%20discuss%20property%20advisory.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-6 font-secondary text-xs font-semibold text-white border border-white/30 hover:bg-white/10 rounded-md transition-colors"
              >
                WhatsApp Advisor
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
