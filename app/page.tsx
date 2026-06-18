import Hero from "@/components/Hero";
import SplitSection from "@/components/SplitSection";
import ComingSoon from "@/components/ComingSoon";

export default function Home() {
  return (
    <main style={{ background: '#000000', position: 'relative' }}>
      <Hero />
      <SplitSection />
      <ComingSoon />
    </main>
  );
}
