import { Award, BookmarkCheck, DollarSign, Lightbulb, Shield, Target } from "lucide-react";

export const FeaturesSection = () => {
  return (
    <section className="py-20" id="features">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-4">Platform Features</h3>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Everything you need to accelerate your career growth and professional development
          in one powerful platform.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-[#D3E4FD] rounded-lg hover:shadow-lg transition">
            <Target className="h-12 w-12 text-[#0EA5E9] mb-4" />
            <h4 className="text-xl font-semibold mb-2">Smart Matching</h4>
            <p className="text-gray-600">AI-powered matching system connects you with the perfect opportunities based on your skills and preferences.</p>
          </div>
          <div className="p-6 bg-[#FFDEE2] rounded-lg hover:shadow-lg transition">
            <Award className="h-12 w-12 text-[#D946EF] mb-4" />
            <h4 className="text-xl font-semibold mb-2">Verified Opportunities</h4>
            <p className="text-gray-600">All listings are verified to ensure quality and legitimacy of opportunities.</p>
          </div>
          <div className="p-6 bg-[#FEF7CD] rounded-lg hover:shadow-lg transition">
            <DollarSign className="h-12 w-12 text-[#F97316] mb-4" />
            <h4 className="text-xl font-semibold mb-2">Secure Payments</h4>
            <p className="text-gray-600">Protected payment system ensures safe transactions for all freelance work.</p>
          </div>
          <div className="p-6 bg-[#E5DEFF] rounded-lg hover:shadow-lg transition">
            <BookmarkCheck className="h-12 w-12 text-[#8B5CF6] mb-4" />
            <h4 className="text-xl font-semibold mb-2">Progress Tracking</h4>
            <p className="text-gray-600">Monitor your applications, projects, and learning journey in real-time.</p>
          </div>
          <div className="p-6 bg-[#FEC6A1] rounded-lg hover:shadow-lg transition">
            <Lightbulb className="h-12 w-12 text-[#F97316] mb-4" />
            <h4 className="text-xl font-semibold mb-2">Skill Development</h4>
            <p className="text-gray-600">Access resources and recommendations to enhance your professional skills.</p>
          </div>
          <div className="p-6 bg-[#FDE1D3] rounded-lg hover:shadow-lg transition">
            <Shield className="h-12 w-12 text-[#0EA5E9] mb-4" />
            <h4 className="text-xl font-semibold mb-2">Verified Profiles</h4>
            <p className="text-gray-600">Build trust with verified profiles and reviews from the community.</p>
          </div>
        </div>
      </div>
    </section>
  );
};