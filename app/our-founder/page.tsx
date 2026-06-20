import CounsellorHero from "@/components/CounsellorHero";
import CounsellorImpact from "@/components/CounsellorImpact";
import CounsellorIntro from "@/components/CounsellorIntro";
import StoryLedger from "@/components/StoryLedger";
import CounsellorCTA from "@/components/CounsellorCTA";

export default function OurFounderPage() {
  return (
    <main style={{ background: '#000000', position: 'relative' }}>
      <CounsellorHero />
      <CounsellorImpact />
      <CounsellorIntro />
      <StoryLedger />
      <CounsellorCTA />
    </main>
  );
}
