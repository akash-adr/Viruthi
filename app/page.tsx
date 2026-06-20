import Hero from "@/components/Hero";
import SplitSection from "@/components/SplitSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialRangoli from "@/components/TestimonialRangoli";
import ContactForm from "@/components/ContactForm";
import CounsellorMission from "@/components/CounsellorMission";
import CounsellorPhilosophy from "@/components/CounsellorPhilosophy";

export default function Home() {
  return (
    <main style={{ background: '#000000', position: 'relative' }}>
      <Hero />
      <SplitSection />
      <CounsellorMission />
      <CounsellorPhilosophy />
      <ServicesSection />
      <TestimonialRangoli />
      <ContactForm />
    </main>
  );
}
