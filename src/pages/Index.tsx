import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import FeaturesSection from "@/components/FeaturesSection";
import UseCasesSection from "@/components/UseCasesSection";
import BusinessValueSection from "@/components/BusinessValueSection";
import FutureVisionSection from "@/components/FutureVisionSection";
import AwsSignInSection from "@/components/AwsSignInSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import ChatbotIcon from "@/components/ChatbotIcon";
import CustomCursor from "@/components/CustomCursor";
import PageLoader from "@/components/PageLoader";

const Index = () => (
  <div className="min-h-screen bg-background cursor-none">
    <PageLoader />
    <CustomCursor />
    <Navbar />
    <HeroSection />
    <HowItWorks />
    <ProblemSection />
    <SolutionSection />
    <FeaturesSection />
    <UseCasesSection />
    <BusinessValueSection />
    <FutureVisionSection />
    <AwsSignInSection />
    <ContactSection />
    <FooterSection />
    <ChatbotIcon />
  </div>
);

export default Index;
