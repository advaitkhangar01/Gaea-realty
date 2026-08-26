"use client";

import { Phone, MessageSquare } from "lucide-react";
import { SITE_DATA } from "@/data/siteData";

export default function FloatingContact() {
  return (
    <>
      {/* Desktop Floating Pills (Bottom-Right) */}
      <div className="hidden md:flex fixed bottom-8 right-8 z-40 flex-col gap-3">
        {/* WhatsApp Floating Button */}
        <a
          href={`https://wa.me/${SITE_DATA.company.whatsappNumber}?text=${encodeURIComponent(
            "Hello GAEA Realty, I would like to inquire about luxury property opportunities in Mumbai."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="h-12 px-5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-secondary text-xs font-semibold shadow-floating flex items-center gap-2.5 transition-all duration-200 hover:scale-105 active:scale-95"
          aria-label="Chat on WhatsApp with GAEA Advisor"
        >
          <MessageSquare className="w-4 h-4 fill-white" />
          <span>WhatsApp</span>
        </a>

        {/* Direct Call Floating Button */}
        <a
          href={`tel:${SITE_DATA.company.phone}`}
          className="h-12 px-5 rounded-full bg-gaea-blue hover:bg-gaea-blue-deep text-white font-secondary text-xs font-semibold shadow-floating flex items-center gap-2.5 transition-all duration-200 hover:scale-105 active:scale-95 border border-white/20"
          aria-label="Call GAEA Property Advisor"
        >
          <Phone className="w-4 h-4 fill-white" />
          <span>Call Advisor</span>
        </a>
      </div>

      {/* Mobile Fixed Bottom Action Bar (Height 68px) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 h-[68px] bg-white border-t border-gaea-charcoal/15 shadow-floating z-40 px-4 flex items-center justify-between gap-3">
        {/* Call Primary Button */}
        <a
          href={`tel:${SITE_DATA.company.phone}`}
          className="flex-1 h-[48px] bg-gaea-blue hover:bg-gaea-blue-deep text-white font-secondary text-xs font-semibold rounded-lg flex items-center justify-center gap-2 shadow-sm"
        >
          <Phone className="w-4 h-4" />
          <span>Call Advisor</span>
        </a>

        {/* WhatsApp Secondary Button */}
        <a
          href={`https://wa.me/${SITE_DATA.company.whatsappNumber}?text=${encodeURIComponent(
            "Hello GAEA Realty, I would like to inquire about luxury property opportunities in Mumbai."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 h-[48px] bg-[#25D366] hover:bg-[#20bd5a] text-white font-secondary text-xs font-semibold rounded-lg flex items-center justify-center gap-2 shadow-sm"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
      </div>
    </>
  );
}
