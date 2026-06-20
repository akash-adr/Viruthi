import IntroScroller from "@/components/IntroScroller";
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
    <main style={{ background: '#000000', position: 'relative' }}>
      <IntroScroller />
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
