import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import BioSection from "@/components/BioSection";
import FourSkillsSection from "@/components/FourSkillsSection";
import CaliChillSection from "@/components/CaliChillSection";
import TwoPathSection from "@/components/TwoPathSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <BioSection />
      <FourSkillsSection />
      <CaliChillSection />
      <TwoPathSection />
      <Footer />
    </div>
  );
}
