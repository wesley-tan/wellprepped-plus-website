import React from "react";
import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero-section";
import ProgrammeSection from "@/components/sections/programme-section";
import ServicesSection from "@/components/sections/services-section";
import ResultsSection from "@/components/sections/results-section";
import GettingStartedSection from "@/components/sections/getting-started-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import FaqSection from "@/components/sections/faq-section";
import FooterSection from "@/components/sections/footer-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16"> {/* Add padding-top to account for fixed navigation */}
        <HeroSection />
        <ProgrammeSection />
        <ServicesSection />
        <ResultsSection />
        <GettingStartedSection />
        <TestimonialsSection />
        <FaqSection />
        <FooterSection />
      </div>
    </main>
  );
}