import CounsellorHero from "@/components/CounsellorHero";
import CounsellorIntro from "@/components/CounsellorIntro";
import CounsellorImpact from "@/components/CounsellorImpact";
import CounsellorMission from "@/components/CounsellorMission";
import CounsellorPhilosophy from "@/components/CounsellorPhilosophy";
import CounsellorQuote from "@/components/CounsellorQuote";
import CounsellorCTA from "@/components/CounsellorCTA";

export default function OurFounderPage() {
  return (
    <main style={{ background: '#000000', position: 'relative' }}>
      <CounsellorHero />
      <CounsellorImpact />
      <CounsellorIntro />
      <CounsellorMission />
      <CounsellorPhilosophy />
      <CounsellorQuote />
      <CounsellorCTA />
    </main>
  );
}
