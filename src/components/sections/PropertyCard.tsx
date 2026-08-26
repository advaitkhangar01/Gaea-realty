"use client";

import Image from "next/image";
import { ArrowUpRight, Building2, MapPin, Layers } from "lucide-react";
import { PropertyOpportunity } from "@/data/siteData";

interface PropertyCardProps {
  property: PropertyOpportunity;
  onSelect: (property: PropertyOpportunity) => void;
}

export default function PropertyCard({ property, onSelect }: PropertyCardProps) {
  return (
    <div className="group flex flex-col bg-white rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-[32px] overflow-hidden border border-gaea-charcoal/10 shadow-subtle hover:shadow-card transition-all duration-500">
      {/* Property Image Container */}
      <div className="relative w-full h-[380px] sm:h-[420px] md:h-[450px] overflow-hidden bg-gaea-charcoal/5">
        <Image
          src={property.imagePlaceholder}
          alt={property.projectName}
          fill
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
        />

        {/* Badge */}
        {property.badge && (
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-block px-3 py-1 bg-gaea-blue/90 backdrop-blur-md text-white font-secondary text-[11px] font-semibold tracking-wide uppercase rounded-sm">
              {property.badge}
            </span>
          </div>
        )}

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-gaea-charcoal/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

        {/* Type pill on bottom image */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white z-10">
          <span className="font-secondary text-xs font-medium bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
            {property.propertyType}
          </span>
          <span className="font-secondary text-xs font-semibold text-gaea-gold-light bg-gaea-blue-deep/80 px-3 py-1 rounded-full border border-gaea-gold/30">
            {property.status}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 md:p-8 flex flex-col flex-1 justify-between bg-white space-y-6">
        <div className="space-y-3">
          {/* Location */}
          <div className="flex items-center gap-1.5 text-gaea-olive font-secondary text-xs font-semibold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>{property.location}</span>
          </div>

          {/* Project Name */}
          <h3 className="font-display text-xl md:text-2xl text-gaea-charcoal group-hover:text-gaea-blue transition-colors">
            {property.projectName}
          </h3>

          {/* Short Description */}
          <p className="font-body text-sm text-gaea-charcoal/70 leading-relaxed">
            {property.shortDescription}
          </p>
        </div>

        {/* Verified Metadata Row */}
        {property.verifiedMeta && (
          <div className="grid grid-cols-2 gap-2 pt-4 border-t border-gaea-charcoal/10 font-secondary text-xs text-gaea-charcoal/80">
            <div className="flex items-center gap-1.5 bg-gaea-charcoal/5 p-2 rounded">
              <Building2 className="w-3.5 h-3.5 text-gaea-blue" />
              <span>{property.verifiedMeta.configuration}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-gaea-charcoal/5 p-2 rounded">
              <Layers className="w-3.5 h-3.5 text-gaea-gold" />
              <span>{property.verifiedMeta.area}</span>
            </div>
          </div>
        )}

        {/* Card CTA */}
        <div className="pt-2">
          <button
            onClick={() => onSelect(property)}
            className="w-full flex items-center justify-between py-3 px-4 font-secondary text-xs md:text-sm font-semibold text-gaea-blue hover:text-white bg-gaea-blue/5 hover:bg-gaea-blue rounded-md transition-all duration-200 group/btn"
          >
            <span>Inquire About Opportunity</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
