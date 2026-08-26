"use client";

import { useState, FormEvent } from "react";
import { Phone, MessageSquare, CheckCircle, ArrowRight, Mail } from "lucide-react";
import { SITE_DATA } from "@/data/siteData";

export default function LeadForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [requirement, setRequirement] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    // Simulate lead submission success
    setSubmitted(true);
  };

  return (
    <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-floating border border-gaea-charcoal/10 text-gaea-charcoal max-w-[520px] w-full mx-auto">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1">
            <h3 className="font-display text-2xl font-semibold text-gaea-charcoal">
              Request Private Consultation
            </h3>
            <p className="font-body text-xs text-gaea-charcoal/70">
              Senior leadership will review your parameters and contact you directly.
            </p>
          </div>

          {/* Name Field */}
          <div className="space-y-1.5">
            <label htmlFor="lead-name" className="block font-secondary text-xs font-semibold text-gaea-charcoal/80 uppercase">
              Full Name <span className="text-gaea-gold">*</span>
            </label>
            <input
              id="lead-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Ashish Sharma"
              className="w-full h-[52px] px-4 font-secondary text-sm bg-gaea-charcoal/5 border border-gaea-charcoal/15 rounded-lg focus:outline-none focus:ring-2 focus:ring-gaea-blue focus:bg-white transition-all"
            />
          </div>

          {/* Phone Field */}
          <div className="space-y-1.5">
            <label htmlFor="lead-phone" className="block font-secondary text-xs font-semibold text-gaea-charcoal/80 uppercase">
              Phone Number <span className="text-gaea-gold">*</span>
            </label>
            <input
              id="lead-phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. +91 99877 15502"
              className="w-full h-[52px] px-4 font-secondary text-sm bg-gaea-charcoal/5 border border-gaea-charcoal/15 rounded-lg focus:outline-none focus:ring-2 focus:ring-gaea-blue focus:bg-white transition-all"
            />
          </div>

          {/* Requirement Field */}
          <div className="space-y-1.5">
            <label htmlFor="lead-req" className="block font-secondary text-xs font-semibold text-gaea-charcoal/80 uppercase">
              Property Requirement
            </label>
            <select
              id="lead-req"
              value={requirement}
              onChange={(e) => setRequirement(e.target.value)}
              className="w-full h-[52px] px-4 font-secondary text-sm bg-gaea-charcoal/5 border border-gaea-charcoal/15 rounded-lg focus:outline-none focus:ring-2 focus:ring-gaea-blue focus:bg-white transition-all text-gaea-charcoal"
            >
              <option value="">Select requirement type...</option>
              <option value="3bhk-luxury">3 BHK Luxury Residence</option>
              <option value="4bhk-estate">4 BHK Duplex / Penthouse</option>
              <option value="commercial">Commercial / Office Space</option>
              <option value="pre-launch">Pre-Launch Opportunity</option>
              <option value="other">General Advisory Enquiry</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full h-[54px] font-secondary text-sm font-semibold tracking-wide text-white bg-gaea-blue hover:bg-gaea-blue-deep rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group mt-2"
          >
            <span>Request a Private Consultation</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Privacy statement */}
          <p className="font-body text-[11px] text-center text-gaea-charcoal/50 pt-1">
            Your details are held strictly confidential. No promotional spam.
          </p>
        </form>
      ) : (
        <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
          <div className="w-14 h-14 rounded-full bg-gaea-olive/10 text-gaea-olive mx-auto flex items-center justify-center">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h4 className="font-display text-2xl font-semibold text-gaea-charcoal">
            Enquiry Received
          </h4>
          <p className="font-body text-sm text-gaea-charcoal/75">
            Thank you, <strong className="text-gaea-blue">{name}</strong>. A property advisor from GAEA Realty will reach out to you at <strong className="text-gaea-blue">{phone}</strong> shortly.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="font-secondary text-xs font-semibold text-gaea-gold hover:underline pt-2"
          >
            Submit Another Requirement
          </button>
        </div>
      )}

      {/* Direct Contact Triggers */}
      <div className="mt-8 pt-6 border-t border-gaea-charcoal/10 flex flex-wrap items-center justify-center gap-3">
        <a
          href={`tel:${SITE_DATA.company.phone}`}
          className="flex-1 min-w-[130px] px-3 py-2.5 rounded-md bg-gaea-charcoal/5 hover:bg-gaea-blue/10 text-gaea-blue font-secondary text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
        >
          <Phone className="w-4 h-4 flex-shrink-0" />
          <span>Call</span>
        </a>

        <a
          href={`mailto:${SITE_DATA.company.email}`}
          className="flex-1 min-w-[130px] px-3 py-2.5 rounded-md bg-gaea-charcoal/5 hover:bg-gaea-blue/10 text-gaea-blue font-secondary text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
        >
          <Mail className="w-4 h-4 flex-shrink-0" />
          <span>Email</span>
        </a>

        <a
          href={`https://wa.me/${SITE_DATA.company.whatsappNumber}?text=${encodeURIComponent(
            "Hello GAEA Realty, I would like to inquire about luxury property opportunities in Mumbai."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-w-[130px] px-3 py-2.5 rounded-md bg-gaea-olive/10 hover:bg-gaea-olive/20 text-gaea-olive font-secondary text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
        >
          <MessageSquare className="w-4 h-4 flex-shrink-0" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
