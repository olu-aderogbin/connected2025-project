import { Button } from "@/components/ui/button";
import { Award, BarChart, BookOpen, Briefcase, GraduationCap, Shield, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";

export const UserTypesSection = () => {
  return (
    <section className="py-20 bg-[#E5DEFF]" id="opportunities">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12">Who It's For</h3>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <GraduationCap className="h-16 w-16 text-[#8B5CF6] mb-6" />
            <h4 className="text-2xl font-bold mb-4">For Students</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <BarChart className="h-6 w-6 text-[#D946EF] flex-shrink-0" />
                <span>Find relevant internships and freelance opportunities</span>
              </li>
              <li className="flex items-start gap-2">
                <Users className="h-6 w-6 text-[#D946EF] flex-shrink-0" />
                <span>Connect with industry mentors for career guidance</span>
              </li>
              <li className="flex items-start gap-2">
                <BookOpen className="h-6 w-6 text-[#D946EF] flex-shrink-0" />
                <span>Discover scholarships matching your profile</span>
              </li>
            </ul>
            <Link to="/signup" className="mt-6 inline-block">
              <Button className="bg-[#8B5CF6] hover:bg-[#7E69AB]">Join as Student</Button>
            </Link>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <Briefcase className="h-16 w-16 text-[#F97316] mb-6" />
            <h4 className="text-2xl font-bold mb-4">For Freelancers</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <Target className="h-6 w-6 text-[#F97316] flex-shrink-0" />
                <span>Access curated freelance opportunities</span>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="h-6 w-6 text-[#F97316] flex-shrink-0" />
                <span>Secure payment protection and milestone tracking</span>
              </li>
              <li className="flex items-start gap-2">
                <Award className="h-6 w-6 text-[#F97316] flex-shrink-0" />
                <span>Build your portfolio and client network</span>
              </li>
            </ul>
            <Link to="/signup" className="mt-6 inline-block">
              <Button className="bg-[#F97316] hover:bg-[#EA580C]">Join as Freelancer</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};