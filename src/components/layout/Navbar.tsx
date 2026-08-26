"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { SITE_DATA } from "@/data/siteData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Properties", href: "#properties" },
    { name: "Our Advisory", href: "#advisory" },
    { name: "About", href: "#about" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-subtle border-b border-gaea-charcoal/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 flex items-center justify-between h-[68px] md:h-[80px]">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-gaea-blue rounded-lg p-1">
          <div className="relative w-36 h-12 md:w-44 md:h-14 transition-transform duration-300 group-hover:scale-[1.02]">
            <Image
              src="/images/brand/transparent-bg-logo.png"
              alt="GAEA Realty & Consultants"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-secondary text-sm tracking-wide text-gaea-charcoal hover:text-gaea-blue transition-colors duration-200 py-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gaea-gold hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center h-[46px] px-6 font-secondary text-xs md:text-sm font-semibold tracking-wide text-white bg-gaea-blue hover:bg-gaea-blue-deep rounded-md transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
          >
            Speak With an Advisor
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-md text-gaea-charcoal hover:bg-gaea-charcoal/5 focus:outline-none focus:ring-2 focus:ring-gaea-blue"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gaea-charcoal/10 px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-secondary text-base font-medium text-gaea-charcoal hover:text-gaea-blue transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-gaea-charcoal/10 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center h-[46px] leading-[46px] font-secondary text-sm font-semibold text-white bg-gaea-blue hover:bg-gaea-blue-deep rounded-md transition-colors"
              >
                Speak With an Advisor
              </a>
              <a
                href={`tel:${SITE_DATA.company.phone}`}
                className="w-full text-center h-[46px] leading-[46px] font-secondary text-sm font-semibold text-gaea-blue border border-gaea-blue/20 hover:bg-gaea-blue/5 rounded-md transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call {SITE_DATA.company.phoneDisplay}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
