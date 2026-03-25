import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ExperienceSection from "@/components/ExperienceSection";
import WhyHireMe from "@/components/WhyHireMe";
import PortfolioSection from "@/components/PortfolioSection";
import SkillsMarquee from "@/components/SkillsMarquee";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

// Portfolio page
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ExperienceSection />
      <WhyHireMe />
      <SkillsMarquee />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
