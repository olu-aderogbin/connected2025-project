import { Heart, Star, TrendingUp, Zap } from "lucide-react";

export const StatsSection = () => {
  return (
    <section className="py-12 bg-[#F2FCE2]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow animate-fade-in">
            <Star className="h-8 w-8 text-[#0EA5E9] mx-auto mb-2" />
            <p className="text-4xl font-bold text-[#0EA5E9]">10K+</p>
            <p className="text-gray-600">Active Users</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow animate-fade-in">
            <Zap className="h-8 w-8 text-[#D946EF] mx-auto mb-2" />
            <p className="text-4xl font-bold text-[#D946EF]">5K+</p>
            <p className="text-gray-600">Available Opportunities</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow animate-fade-in">
            <TrendingUp className="h-8 w-8 text-[#8B5CF6] mx-auto mb-2" />
            <p className="text-4xl font-bold text-[#8B5CF6]">1K+</p>
            <p className="text-gray-600">Successful Matches</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow animate-fade-in">
            <Heart className="h-8 w-8 text-[#F97316] mx-auto mb-2" />
            <p className="text-4xl font-bold text-[#F97316]">95%</p>
            <p className="text-gray-600">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};