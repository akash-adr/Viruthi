import Hero from "@/components/Hero";
import SplitSection from "@/components/SplitSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialRangoli from "@/components/TestimonialRangoli";
import ContactForm from "@/components/ContactForm";
import CounsellorMission from "@/components/CounsellorMission";
import CounsellorPhilosophy from "@/components/CounsellorPhilosophy";
import StoryScroller from "@/components/StoryScroller";

export default function Home() {
  return (
    <main style={{ background: 'transparent', position: 'relative', zIndex: 1 }}>
      <Hero />
      <SplitSection />
      <CounsellorMission />
      <CounsellorPhilosophy />
      <StoryScroller />
      <ServicesSection />
      <TestimonialRangoli />
      <ContactForm />
    </main>
  );
}
