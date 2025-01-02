import BenefitsSection from "@/components/benefits";
import TestimonialsSection from "@/components/testimonal";
import CTA from "@/components/cta";
import FAQSection from "@/components/faq";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Patners } from "@/components/patners";
export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Patners />
      <Features />
      <BenefitsSection />
      <FAQSection />
      <TestimonialsSection />
      <CTA />
      <Footer />
    </div>
  );
}
