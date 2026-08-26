"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { SITE_DATA } from "@/data/siteData";

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 lg:py-32 bg-gradient-to-b from-[#FAF8F5] via-[#F4E9D6]/40 via-white to-[#E3ECF7]/40 animate-gradient-slow text-gaea-charcoal relative overflow-hidden">
      {/* Background Animated Glowing Ambient Orbs */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-gaea-gold/20 rounded-full blur-3xl pointer-events-none animate-glow-1" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gaea-blue/15 rounded-full blur-3xl pointer-events-none animate-glow-2" />
      <div className="max-w-[1000px] mx-auto px-6 sm:px-12 lg:px-16">
        {/* Header */}
        <div className="max-w-[650px] space-y-4 mb-16">
          <span className="font-secondary text-xs font-semibold tracking-wide text-gaea-gold uppercase flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-gaea-gold" />
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-gaea-charcoal leading-[1.04]">
            Clear answers before your enquiry.
          </h2>
          <p className="font-body text-base text-gaea-charcoal/75">
            Everything you need to know about our luxury property advisory process in Mumbai.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="divide-y divide-gaea-charcoal/10 border-t border-b border-gaea-charcoal/10">
          {SITE_DATA.faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="py-2">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full min-h-[64px] py-4 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-gaea-blue rounded-md px-2 group transition-colors"
                >
                  <span className="font-secondary text-base md:text-lg font-medium text-gaea-charcoal group-hover:text-gaea-blue transition-colors pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-gaea-charcoal/5 flex items-center justify-center text-gaea-charcoal/70 group-hover:bg-gaea-blue/10 group-hover:text-gaea-blue transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-gaea-blue/10 text-gaea-blue" : ""
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {/* Animated Collapsible Answer */}
                <div
                  id={`faq-answer-${faq.id}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 pb-6 pt-1" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden px-2">
                    <p className="font-body text-base text-gaea-charcoal/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
