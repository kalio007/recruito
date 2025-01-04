"use client";
import BenefitsSection from "@/components/benefits";

import TestimonialsSection from "@/components/testimonal";
import CTA from "@/components/cta";
import FAQSection from "@/components/faq";
import Features from "@/components/features";
import Footer from "@/components/layouts/footer";
import Hero from "@/components/hero";
import { Navbar } from "@/components/layouts/navbar";
import Patners from "@/components/patners";
import useAutoHideScrollbar from "@/hooks/usescrollhook";
export default function Home() {
  useAutoHideScrollbar();
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Patners />
      <Features id="features-section" />
      <BenefitsSection />
      <FAQSection />
      <TestimonialsSection />
      <CTA />
      <Footer />
    </div>
  );
}
