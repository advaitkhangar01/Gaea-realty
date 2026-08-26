"use client";

import { useState } from "react";
import PropertyCard from "./PropertyCard";
import { SITE_DATA, PropertyOpportunity } from "@/data/siteData";
import { AlertCircle, ArrowRight } from "lucide-react";

export default function PropertySection() {
  const [selectedProperty, setSelectedProperty] = useState<PropertyOpportunity | null>(null);

  const handleSelectProperty = (property: PropertyOpportunity) => {
    setSelectedProperty(property);
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="properties" className="py-24 lg:py-32 bg-gradient-to-tr from-[#F8F3EA] via-[#FAF8F5] via-[#EBF2FA] to-[#F4E9D6]/60 animate-gradient-slow text-gaea-charcoal relative overflow-hidden">
      {/* Background Animated Glowing Orbs */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-gaea-gold/15 rounded-full blur-3xl pointer-events-none animate-glow-1" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gaea-blue/15 rounded-full blur-3xl pointer-events-none animate-glow-2" />
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">
        {/* Section Header */}
        <div className="max-w-[650px] space-y-4 mb-16">
          <span className="font-secondary text-xs font-semibold tracking-wide text-gaea-gold uppercase">
            SELECTED OPPORTUNITIES
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-gaea-charcoal leading-[1.04]">
            Properties worth your time.
          </h2>
          <p className="font-body text-base sm:text-lg text-gaea-charcoal/75 leading-relaxed">
            A focused selection of luxury property opportunities, presented with the information you need to decide whether a conversation is worth having.
          </p>
        </div>

        {/* Content Placeholder Notice Box */}
        <div className="mb-10 p-4 rounded-md bg-gaea-gold/10 border border-gaea-gold/20 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-gaea-gold flex-shrink-0 mt-0.5" />
          <div className="font-secondary text-xs text-gaea-charcoal/80">
            <span className="font-semibold uppercase tracking-wider text-gaea-gold mr-2">VERIFIED SCHEMA NOTE:</span>
            {SITE_DATA.propertiesPlaceholderNote}
          </div>
        </div>

        {/* Property Cards Grid (Max 3 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {SITE_DATA.sampleProperties.slice(0, 3).map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onSelect={handleSelectProperty}
            />
          ))}
        </div>

        {/* Section Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="font-body text-sm text-gaea-charcoal/60 mb-4">
            Looking for specific micro-markets or private unlisted opportunities?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 font-secondary text-xs sm:text-sm font-semibold text-gaea-blue hover:text-gaea-blue-deep border border-gaea-blue/20 hover:border-gaea-blue bg-gaea-blue/5 rounded-md transition-all duration-200"
          >
            Request Private Property Shortlist
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
