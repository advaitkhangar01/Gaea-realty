import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, ShieldCheck, FileText, Mail } from "lucide-react";
import { SITE_DATA } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#2D3137] via-[#222529] via-[#1A1D20] to-[#111315] animate-gradient-slow text-white pt-20 pb-28 md:pb-20 border-t border-white/10 relative z-20 overflow-hidden">
      {/* Background Animated Glowing Ambient Orbs */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-gaea-blue/15 rounded-full blur-3xl pointer-events-none animate-glow-1" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-gaea-gold/15 rounded-full blur-3xl pointer-events-none animate-glow-2" />
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand & Corporate Details Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative w-48 h-14">
              <Image
                src="/images/brand/transparent-bg-logo.png"
                alt="GAEA Realty & Consultants"
                fill
                className="object-contain filter brightness-200 contrast-200"
              />
            </div>

            <p className="font-body text-xs text-white/70 max-w-[400px] leading-relaxed">
              {SITE_DATA.company.legalName} is a private limited luxury property sales advisory based in Mumbai, committed to transparent property guidance and personalized client service.
            </p>

            <div className="space-y-2 font-secondary text-xs text-white/80 pt-2 border-t border-white/10">
              <div className="flex items-center gap-2 text-gaea-gold-light">
                <ShieldCheck className="w-4 h-4" />
                <span>CIN: {SITE_DATA.company.cin}</span>
              </div>
              <div className="flex items-start gap-2 text-white/60">
                <MapPin className="w-4 h-4 text-gaea-gold-light flex-shrink-0 mt-0.5" />
                <span>{SITE_DATA.company.registeredAddress}</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-secondary text-xs font-semibold tracking-widest text-gaea-gold-light uppercase">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 font-secondary text-xs text-white/80">
              <li>
                <a href="#properties" className="hover:text-gaea-gold-light transition-colors">
                  Selected Opportunities
                </a>
              </li>
              <li>
                <a href="#why-gaea" className="hover:text-gaea-gold-light transition-colors">
                  The GAEA Approach
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-gaea-gold-light transition-colors">
                  Advisory Process
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gaea-gold-light transition-colors">
                  Founder & Leadership
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-gaea-gold-light transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-secondary text-xs font-semibold tracking-widest text-gaea-gold-light uppercase">
              DIRECT ADVISORY CONTACT
            </h4>
            <div className="space-y-3 font-secondary text-xs text-white/80">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gaea-gold-light" />
                <a href={`tel:${SITE_DATA.company.phone}`} className="hover:text-white transition-colors">
                  {SITE_DATA.company.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gaea-gold-light" />
                <a href={`mailto:${SITE_DATA.company.email}`} className="hover:text-white transition-colors">
                  {SITE_DATA.company.email}
                </a>
              </div>
              <p className="text-white/60 text-[11px]">
                Sales Qualification & Consultation: Monday – Saturday (10:00 AM – 7:00 PM IST)
              </p>
            </div>
          </div>
        </div>

        {/* Legal Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between font-secondary text-[11px] text-white/50 space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} GAEA REALTY & CONSULTANTS (INDIA) PRIVATE LIMITED. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-white transition-colors cursor-pointer">CIN Disclosures</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
