import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import FeaturesSection from "@/components/FeaturesSection";
import UseCasesSection from "@/components/UseCasesSection";
import BusinessValueSection from "@/components/BusinessValueSection";
import FutureVisionSection from "@/components/FutureVisionSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import ChatbotIcon from "@/components/ChatbotIcon";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <HowItWorks />
    <ProblemSection />
    <SolutionSection />
    <FeaturesSection />
    <UseCasesSection />
    <BusinessValueSection />
    <FutureVisionSection />
    <ContactSection />
    <FooterSection />
    <ChatbotIcon />
  </div>
);

export default Index;
