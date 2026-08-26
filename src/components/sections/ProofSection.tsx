"use client";

import { Building, Shield, FileText, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { SITE_DATA } from "@/data/siteData";

export default function ProofSection() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-tr from-[#EBF1F8] via-[#F4F6F9] via-[#F6F0E5] to-[#E5EDF7] animate-gradient-slow text-gaea-charcoal relative overflow-hidden">
      {/* Background Animated Glowing Ambient Orbs */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-gaea-blue/15 rounded-full blur-3xl pointer-events-none animate-glow-1" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gaea-gold/20 rounded-full blur-3xl pointer-events-none animate-glow-2" />
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">
        {/* Header */}
        <div className="max-w-[700px] space-y-4 mb-16">
          <span className="font-secondary text-xs font-semibold tracking-wide text-gaea-gold uppercase">
            VERIFIED CREDIBILITY & GOVERNANCE
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-gaea-charcoal leading-[1.06]">
            Before a property decision, there should be enough information to make one.
          </h2>
          <p className="font-body text-base text-gaea-charcoal/75">
            We operate with complete corporate transparency and verified governance details. Every prospect interacts with an officially incorporated Indian private limited company.
          </p>
        </div>

        {/* Governance & Corporate Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Corporate Entity */}
          <div className="bg-white p-6 md:p-8 rounded-xl border border-gaea-charcoal/10 shadow-subtle space-y-4">
            <div className="w-10 h-10 rounded-lg bg-gaea-blue/10 flex items-center justify-center text-gaea-blue">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <span className="font-secondary text-[11px] font-semibold uppercase text-gaea-gold tracking-wider">
                CORPORATE REGISTRATION
              </span>
              <h3 className="font-display text-lg text-gaea-charcoal font-medium mt-1">
                {SITE_DATA.company.legalName}
              </h3>
            </div>
            <div className="space-y-2 pt-2 border-t border-gaea-charcoal/10 font-secondary text-xs text-gaea-charcoal/80">
              <div className="flex justify-between">
                <span className="text-gaea-charcoal/50">CIN Number:</span>
                <span className="font-semibold text-gaea-blue">{SITE_DATA.company.cin}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gaea-charcoal/50">Registration No:</span>
                <span className="font-semibold">{SITE_DATA.company.registrationNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gaea-charcoal/50">ROC:</span>
                <span className="font-semibold">{SITE_DATA.company.roc}</span>
              </div>
            </div>
          </div>

          {/* Card 2: Incorporation Details */}
          <div className="bg-white p-6 md:p-8 rounded-xl border border-gaea-charcoal/10 shadow-subtle space-y-4">
            <div className="w-10 h-10 rounded-lg bg-gaea-olive/10 flex items-center justify-center text-gaea-olive">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <span className="font-secondary text-[11px] font-semibold uppercase text-gaea-gold tracking-wider">
                STATUS & CAPITAL
              </span>
              <h3 className="font-display text-lg text-gaea-charcoal font-medium mt-1">
                Active Private Limited
              </h3>
            </div>
            <div className="space-y-2 pt-2 border-t border-gaea-charcoal/10 font-secondary text-xs text-gaea-charcoal/80">
              <div className="flex justify-between">
                <span className="text-gaea-charcoal/50">Incorporated:</span>
                <span className="font-semibold">{SITE_DATA.company.incorporationDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gaea-charcoal/50">Company Status:</span>
                <span className="font-semibold text-gaea-olive flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {SITE_DATA.company.status}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gaea-charcoal/50">Authorized Capital:</span>
                <span className="font-semibold">{SITE_DATA.company.authorizedCapital}</span>
              </div>
            </div>
          </div>

          {/* Card 3: Registered Address */}
          <div className="bg-white p-6 md:p-8 rounded-xl border border-gaea-charcoal/10 shadow-subtle space-y-4 md:col-span-2 lg:col-span-1">
            <div className="w-10 h-10 rounded-lg bg-gaea-gold/10 flex items-center justify-center text-gaea-gold">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="font-secondary text-[11px] font-semibold uppercase text-gaea-gold tracking-wider">
                REGISTERED OFFICE
              </span>
              <h3 className="font-display text-lg text-gaea-charcoal font-medium mt-1">
                Thane / Mumbai Region
              </h3>
            </div>
            <p className="font-body text-xs text-gaea-charcoal/80 leading-relaxed pt-2 border-t border-gaea-charcoal/10">
              {SITE_DATA.company.registeredAddress}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
