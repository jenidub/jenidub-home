import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import BioSection from "@/components/BioSection";
import ThreeSkillsSection from "@/components/ThreeSkillsSection";
import CaliChillSection from "@/components/CaliChillSection";
import TwoPathSection from "@/components/TwoPathSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <BioSection />
      <ThreeSkillsSection />
      <CaliChillSection />
      <TwoPathSection />
      <Footer />
    </div>
  );
}
