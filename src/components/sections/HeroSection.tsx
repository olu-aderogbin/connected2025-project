import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-[#E5DEFF] via-white to-[#FDE1D3] overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="space-y-4 md:space-y-6 animate-fade-in text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-accent leading-tight">
            <span className="text-[#8B5CF6]">Connect</span>, Learn, and{" "}
            <span className="text-[#F97316]">Earn</span> in One Platform
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto md:mx-0">
            ConnectED is your gateway to success. Whether you're a student seeking opportunities, 
            a freelancer looking for gigs, or a mentor wanting to give back, we've got you covered 
            with internships, mentorship, scholarships, and freelance work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="/signup" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-[#9b87f5] hover:bg-[#7E69AB] gap-2 animate-pulse touch-manipulation"
              >
                Get Started <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto border-[#9b87f5] text-[#9b87f5] hover:bg-[#E5DEFF] touch-manipulation"
            >
              Watch Demo
            </Button>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Free Trial
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-green-500" />
              No Credit Card
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Cancel Anytime
            </span>
          </div>
        </div>
        <div className="relative animate-fade-in mt-8 md:mt-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
            alt="Students collaborating" 
            className="rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300 w-full max-w-xl mx-auto"
            loading="lazy"
          />
          <div className="absolute -bottom-4 -right-4 bg-[#FDE1D3] p-4 md:p-6 rounded-lg shadow-lg">
            <p className="text-base md:text-lg font-semibold text-[#F97316]">Join 10,000+ students & freelancers</p>
          </div>
        </div>
      </div>
    </section>
  );
};