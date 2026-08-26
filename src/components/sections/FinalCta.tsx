"use client";

import LeadForm from "./LeadForm";

export default function FinalCta() {
  return (
    <section id="contact" className="py-24 lg:py-36 bg-gradient-to-br from-[#011B38] via-[#03356C] via-[#05407F] to-[#011B38] animate-gradient-bg text-white relative overflow-hidden">
      {/* Background Animated Glowing Ambient Orbs */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-gaea-gold/25 rounded-full blur-3xl pointer-events-none animate-glow-1" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gaea-olive/30 rounded-full blur-3xl pointer-events-none animate-glow-2" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column Text (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="font-secondary text-xs font-semibold tracking-widest text-gaea-gold-light uppercase">
              START YOUR CONVERSATION
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-white leading-[1.04]">
              Looking for the right property in Mumbai?
            </h2>
            <p className="font-body text-base sm:text-lg text-white/80 leading-relaxed">
              Tell us what you&apos;re looking for and speak with the GAEA team. We provide clear disclosures and direct founder involvement for serious property queries.
            </p>
            <div className="pt-2 space-y-3 font-secondary text-xs text-white/70 border-t border-white/10">
              <p>✓ Direct qualified conversation with senior leadership</p>
              <p>✓ No high-pressure sales calls or automated marketing lists</p>
              <p>✓ Complete confidentiality for HNI and business owner clients</p>
            </div>
          </div>

          {/* Right Column Form (7 cols on lg) */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
