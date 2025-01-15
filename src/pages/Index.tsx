import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustIndicators } from "@/components/sections/TrustIndicators";
import { StatsSection } from "@/components/sections/StatsSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { UserTypesSection } from "@/components/sections/UserTypesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { LoginSection } from "@/components/sections/LoginSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <TrustIndicators />
        <StatsSection />
        <FeaturesSection />
        <UserTypesSection />
        <TestimonialsSection />
        <PricingSection />
        <LoginSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;