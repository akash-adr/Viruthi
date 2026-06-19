import Hero from "@/components/Hero";
import SplitSection from "@/components/SplitSection";
import StoryLedger from "@/components/StoryLedger";
import ServicesSection from "@/components/ServicesSection";
import ContactForm from "@/components/ContactForm";
import CounsellorMission from "@/components/CounsellorMission";
import CounsellorPhilosophy from "@/components/CounsellorPhilosophy";

export default function Home() {
  return (
    <main style={{ background: '#000000', position: 'relative' }}>
      <Hero />
      <SplitSection />
      <StoryLedger />
      <CounsellorMission />
      <CounsellorPhilosophy />
      <ServicesSection />
      <ContactForm />
    </main>
  );
}
