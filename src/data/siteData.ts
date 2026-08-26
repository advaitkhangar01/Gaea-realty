export interface PropertyOpportunity {
  id: string;
  projectName: string;
  location: string;
  shortDescription: string;
  propertyType: string;
  status: string;
  badge?: string;
  imagePlaceholder: string;
  ctaText: string;
  verifiedMeta?: {
    configuration?: string;
    possession?: string;
    area?: string;
  };
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  isPlaceholder?: boolean;
}

export const SITE_DATA = {
  company: {
    name: "GAEA Realty & Consultants",
    legalName: "GAEA REALTY & CONSULTANTS (INDIA) PRIVATE LIMITED",
    cin: "U68200MH2024PTC434100",
    registrationNumber: "434100",
    incorporationDate: "24 October 2024",
    status: "Active",
    type: "Private Company (Limited by Shares)",
    roc: "ROC Mumbai",
    authorizedCapital: "₹1,00,000",
    paidUpCapital: "₹1,00,000",
    nicCode: "U68200",
    registeredAddress: "502 Vishram Tower No. 4, Sec. No. 9, Shree Ngr, Thane, Maharashtra, 400604, India",
    city: "Mumbai, Maharashtra, India",
    phone: "+91 99877 15502",
    phoneDisplay: "+91 99877 15502",
    whatsappNumber: "919987715502",
    email: "info@gaearealty.in",
  },
  founder: {
    name: "Ashish Dhoke",
    role: "Founder — GAEA Realty & Consultants",
    location: "Mumbai, Maharashtra, India",
    education: "Indian Institute of Planning and Management",
    summary:
      "Ashish brings professional experience across real estate, business development, sales, relationship management and channel sales, with a professional background spanning multiple business sectors.",
    sectors: [
      "Real Estate",
      "Telecommunications",
      "Travel",
      "Consumer Goods",
      "Asset Management",
      "Business Strategy",
      "Sales Analytics & Decision Making",
      "Team Management",
      "Business Relationship Management",
      "Channel Sales",
    ],
    credentialTags: [
      "REAL ESTATE",
      "BUSINESS DEVELOPMENT",
      "SALES",
      "RELATIONSHIP MANAGEMENT",
      "CHANNEL SALES",
    ],
  },
  hero: {
    headline: "Luxury property decisions, handled with discretion.",
    subheadline:
      "Explore selected luxury property opportunities in Mumbai with experienced guidance from enquiry through the property journey.",
    primaryCta: "Speak With a Property Advisor",
    secondaryCta: "View Properties",
  },
  credibilityBlocks: [
    {
      label: "MUMBAI",
      title: "Luxury Real Estate",
      detail: "Focused opportunities in key premium micro-markets",
    },
    {
      label: "PERSONAL",
      title: "Property Guidance",
      detail: "Direct founder & senior leadership involvement",
    },
    {
      label: "DIRECT",
      title: "Qualified Client Conversations",
      detail: "Time-conscious process for high-net-worth buyers",
    },
    {
      label: "SUPPORTED",
      title: "Transaction Journey",
      detail: "Assistance through documentation & coordination",
    },
  ],
  advisoryPillars: [
    {
      id: "sourcing",
      number: "01",
      tag: "DISCREET INVENTORY",
      title: "Off-Market Sourcing & Micro-Market Intelligence",
      subtitle: "Filter through Mumbai's noise with vetted luxury data.",
      description: "We bypass generic broadcast portals to curate high-floor, oceanfront, and boutique residences across South Mumbai, Bandra, Worli, and Juhu. Every opportunity is pre-audited for spatial purity and carpet area authenticity.",
      keyDeliverables: [
        "Confidential 3-Point Property Briefing",
        "Micro-Market Price & Layout Benchmarking",
        "Floor-Plate Privacy & Elevation Assessment"
      ],
      clientAdvantage: "100% pre-screened listings; zero unvetted marketing spam.",
      metricsLabel: "Time Saved",
      metricsValue: "~40 Hours of Unvetted Site Visits"
    },
    {
      id: "representation",
      number: "02",
      tag: "FOUNDER-LED FIDUCIARY",
      title: "Direct Founder-Led Client Representation",
      subtitle: "Your privacy and commercial interests come first.",
      description: "Senior leadership personally represents your position with developers and sellers. We establish strict confidentiality protocols and conduct anonymous initial negotiations to protect your leverage.",
      keyDeliverables: [
        "Strict Non-Disclosure Protocol",
        "Founder-Driven Commercial Negotiation",
        "Payment Schedule Optimization Plan"
      ],
      clientAdvantage: "Direct access to Founder Ashish Dhoke without intermediary friction.",
      metricsLabel: "Fiduciary Standard",
      metricsValue: "100% Confidentiality & Direct Access"
    },
    {
      id: "audit",
      number: "03",
      tag: "RISK MITIGATION",
      title: "Legal, RERA & Carpet Area Audit",
      subtitle: "Absolute clarity before any financial commitment.",
      description: "We verify title clearances, RERA milestone compliance, builder track records, and loading percentage vs actual usable carpet area so you invest with complete certainty.",
      keyDeliverables: [
        "RERA & Encumbrance Verification",
        "Carpet Area Efficiency Breakdown",
        "Title Document Checklist & Coordination"
      ],
      clientAdvantage: "Zero hidden spatial compromises or legal ambiguity.",
      metricsLabel: "Verification Grade",
      metricsValue: "RERA & Legal Due-Diligence Checked"
    },
    {
      id: "execution",
      number: "04",
      tag: "END-TO-END CLOSING",
      title: "Structured Execution & Handover Concierge",
      subtitle: "Clean transaction management through final handover.",
      description: "From Agreement to Sale draft reviews, stamp duty registration, and developer payment milestone tracking to final key handover, GAEA coordinates every detail seamlessly.",
      keyDeliverables: [
        "Agreement to Sale Draft Review Assistance",
        "Payment Milestone & Escrow Coordination",
        "Pre-Possession Inspection Walkthrough"
      ],
      clientAdvantage: "Stress-free paperwork execution with dedicated milestone support.",
      metricsLabel: "Transaction Support",
      metricsValue: "Complete Journey Assistance"
    }
  ],
  whyGaea: {
    headline: "A more considered way to buy luxury property.",
    principles: [
      {
        number: "01",
        title: "Relevant Opportunities",
        description:
          "Start with curated choices matching your exact spatial needs rather than sifting through thousands of unvetted options.",
      },
      {
        number: "02",
        title: "Personal Guidance",
        description:
          "Engage directly with senior advisors and leadership who understand luxury asset positioning and micro-market nuances.",
      },
      {
        number: "03",
        title: "Clear Decision-Making",
        description:
          "Comprehensive carpet area audits, price transparency matrixes, and layout evaluations before taking site visits.",
      },
      {
        number: "04",
        title: "Transaction Support",
        description:
          "Fiduciary assistance through legal paperwork review, documentation alignment, and final handover coordination.",
      },
    ],
  },
  processSteps: [
    {
      step: "01",
      title: "Requirement Blueprinting",
      subtitle: "Spatial Mapping & Budget Parameters",
      description:
        "Share your precise spatial preferences, preferred micro-locations (Worli, Bandra, South Mumbai), timing, and privacy requirements.",
      deliverable: "Confidential Client Requirement Profile",
      timeEstimate: "Initial 30-min Consultation"
    },
    {
      step: "02",
      title: "Curated Market Filtering",
      subtitle: "Off-Market & Verified Sourcing",
      description:
        "Our advisory team evaluates active opportunities, eliminating unverified inventory and identifying units with optimal carpet efficiency.",
      deliverable: "Shortlisted Opportunity Dossier (3-5 Properties)",
      timeEstimate: "Within 24–48 Hours"
    },
    {
      step: "03",
      title: "Private Consultation & Reviews",
      subtitle: "Dossier Evaluation & Layout Analysis",
      description:
        "Review detailed floor plans, pricing breakdowns, and developer credentials in a private session prior to visiting physical sites.",
      deliverable: "Objective Layout & Valuation Comparison Matrix",
      timeEstimate: "Flexible Schedule"
    },
    {
      step: "04",
      title: "Escorted Site Visits & Due Diligence",
      subtitle: "Private Inspection & Title Verification",
      description:
        "Conduct private site walkthroughs with your senior advisor. Evaluate actual views, sunlight orientation, acoustic insulation, and RERA filings.",
      deliverable: "On-Site Audit & Legal Checklist",
      timeEstimate: "As Per Client Availability"
    },
    {
      step: "05",
      title: "Transaction & Handover Concierge",
      subtitle: "Agreement Drafting & Milestone Support",
      description:
        "Receive comprehensive coordination across documentation, stamp duty assistance, payment milestones, and final handover verification.",
      deliverable: "Executed Deal & Handover Verification File",
      timeEstimate: "Through Final Possession"
    },
  ],
  transactionSupport: {
    headline: "The property is only one part of the journey.",
    description:
      "From initial discussion to the final transaction process, GAEA assists with the coordination and documentation involved in moving forward cleanly.",
    points: [
      "Document compilation & review coordination",
      "Buyer-developer milestone communication",
      "Transaction paperwork verification support",
      "Seamless timeline & handover coordination",
    ],
  },
  hniStatement: {
    headline: "Your time is valuable. Your property decision should be, too.",
    description:
      "Tell us what you're looking for. We'll help you identify relevant opportunities worth your attention.",
    cta: "Discuss Your Requirement",
  },
  propertiesPlaceholderNote:
    "[VERIFY WITH GAEA — Specific project listings, pricing, and configurations will be updated upon client verification]",
  sampleProperties: [
    {
      id: "prop-1",
      projectName: "[PROJECT NAME — Luxury Residential Tower]",
      location: "South Mumbai / Worli / Lower Parel [VERIFY LOCATION]",
      shortDescription:
        "A premium residence opportunity featuring expansive layouts, modern architectural design, and high-floor panoramic views.",
      propertyType: "Luxury Residence",
      status: "Available Opportunity",
      badge: "Selected Opportunity",
      imagePlaceholder: "/images/properties/property_tower_suite.jpg",
      ctaText: "Explore Property →",
      verifiedMeta: {
        configuration: "[CONFIG — e.g. 3 & 4 BHK]",
        possession: "[POSSESSION DATE]",
        area: "[CARPET AREA RANGE]",
      },
    },
    {
      id: "prop-2",
      projectName: "[PROJECT NAME — Premium Sea-View Suite]",
      location: "Bandra West / Juhu [VERIFY LOCATION]",
      shortDescription:
        "Exclusive oceanfront residential offering designed for buyers seeking privacy, elegance, and uncompromised spatial design.",
      propertyType: "Coastal Estate",
      status: "Curated Selection",
      badge: "Exclusive Access",
      imagePlaceholder: "/images/properties/property_coastal_deck.jpg",
      ctaText: "Explore Property →",
      verifiedMeta: {
        configuration: "[CONFIG — e.g. 4 BHK Duplex]",
        possession: "[POSSESSION DATE]",
        area: "[CARPET AREA RANGE]",
      },
    },
    {
      id: "prop-3",
      projectName: "[PROJECT NAME — Boutique Luxury Enclave]",
      location: "Central Mumbai / Thane [VERIFY LOCATION]",
      shortDescription:
        "Thoughtfully planned luxury gated community with private amenities, manicured landscapes, and seamless connectivity.",
      propertyType: "Gated Enclave",
      status: "Pre-Launch Opportunity",
      badge: "High Value",
      imagePlaceholder: "/images/properties/property_gated_enclave.jpg",
      ctaText: "Explore Property →",
      verifiedMeta: {
        configuration: "[CONFIG — e.g. 3 BHK Suite]",
        possession: "[POSSESSION DATE]",
        area: "[CARPET AREA RANGE]",
      },
    },
  ] as PropertyOpportunity[],
  faqs: [
    {
      id: "faq-1",
      question: "What type of properties does GAEA currently represent?",
      answer:
        "GAEA focuses primarily on luxury residential property opportunities in prime Mumbai micro-markets. We work with qualified prospects seeking high-end residences, premium apartments, and exclusive property options.",
    },
    {
      id: "faq-2",
      question: "Which areas of Mumbai do you cover?",
      answer:
        "We handle property opportunities across key Mumbai hubs, including South Mumbai, Bandra, Worli, Lower Parel, Juhu, and emerging luxury corridors in the MMR region.",
    },
    {
      id: "faq-3",
      question: "How does the enquiry process work?",
      answer:
        "You can initiate contact via our quick inquiry form, direct phone call, or WhatsApp. Our sales qualification team will contact you to understand your specific spatial and location requirements before shortlisting suitable opportunities.",
    },
    {
      id: "faq-4",
      question: "Can I discuss my requirements before viewing properties?",
      answer:
        "Yes. We encourage an initial consultation to understand your parameters, privacy needs, and timeline. Senior leadership personally handles qualified prospect discussions.",
    },
    {
      id: "faq-5",
      question: "What happens after I submit an enquiry?",
      answer:
        "A representative from GAEA will reach out promptly via phone or WhatsApp to verify your criteria and schedule a convenient time for a private discussion or site walk.",
    },
    {
      id: "faq-6",
      question: "Does GAEA assist with the transaction process?",
      answer:
        "Yes. Beyond property selection, GAEA assists with document compilation, transaction coordination, and communication support throughout the purchase journey.",
    },
  ] as FaqItem[],
};
