import Hero from "@/components/sections/Hero";
import CredibilityStrip from "@/components/sections/CredibilityStrip";
import PropertySection from "@/components/sections/PropertySection";
import AdvisorySection from "@/components/sections/AdvisorySection";
import FounderSection from "@/components/sections/FounderSection";
import ProofSection from "@/components/sections/ProofSection";
import TransactionSupport from "@/components/sections/TransactionSupport";
import HniStatement from "@/components/sections/HniStatement";
import FaqSection from "@/components/sections/FaqSection";
import FinalCta from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <CredibilityStrip />
      <PropertySection />
      <AdvisorySection />
      <FounderSection />
      <ProofSection />
      <TransactionSupport />
      <HniStatement />
      <FaqSection />
      <FinalCta />
    </>
  );
}
