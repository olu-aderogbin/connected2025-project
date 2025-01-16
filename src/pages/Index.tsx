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
import { OnboardingTutorial } from "@/components/OnboardingTutorial";
import { SearchBar } from "@/components/SearchBar";
import { BackToTop } from "@/components/BackToTop";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";

// Add loading="lazy" to all images in the page
const Index = () => {
  return (
    <div className="min-h-screen bg-white" role="main">
      <Header />
      <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-2">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" aria-current="page">Home</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </nav>
      <div className="container mx-auto px-4 py-4">
        <SearchBar />
      </div>
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
      <OnboardingTutorial />
      <BackToTop />
    </div>
  );
};

export default Index;