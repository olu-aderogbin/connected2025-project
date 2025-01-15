import { Button } from "@/components/ui/button";
import { 
  GraduationCap, Building2, BookOpen, HeartHandshake, Briefcase,
  Users, Shield, Target, Award, DollarSign, BookmarkCheck, 
  Lightbulb, MessageSquare, BarChart, FileSpreadsheet, UserCheck
} from "lucide-react";
import { Link } from "react-router-dom";

export const UserTypesSection = () => {
  return (
    <section className="py-20 bg-[#E5DEFF]" id="opportunities">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12">Who It's For</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Students Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <GraduationCap className="h-16 w-16 text-[#8B5CF6] mb-6" />
            <h4 className="text-2xl font-bold mb-4">For Students</h4>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-2">
                <Target className="h-6 w-6 text-[#8B5CF6] flex-shrink-0" />
                <span>Find internships & freelance work</span>
              </li>
              <li className="flex items-start gap-2">
                <Users className="h-6 w-6 text-[#8B5CF6] flex-shrink-0" />
                <span>Connect with mentors & peers</span>
              </li>
              <li className="flex items-start gap-2">
                <BookOpen className="h-6 w-6 text-[#8B5CF6] flex-shrink-0" />
                <span>Access scholarships & resources</span>
              </li>
              <li className="flex items-start gap-2">
                <Lightbulb className="h-6 w-6 text-[#8B5CF6] flex-shrink-0" />
                <span>Track progress & development</span>
              </li>
            </ul>
            <Link to="/signup" className="inline-block">
              <Button className="bg-[#8B5CF6] hover:bg-[#7E69AB]">Join as Student</Button>
            </Link>
          </div>

          {/* Employers Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Building2 className="h-16 w-16 text-[#F97316] mb-6" />
            <h4 className="text-2xl font-bold mb-4">For Employers</h4>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-2">
                <Target className="h-6 w-6 text-[#F97316] flex-shrink-0" />
                <span>Post gigs & internship opportunities</span>
              </li>
              <li className="flex items-start gap-2">
                <UserCheck className="h-6 w-6 text-[#F97316] flex-shrink-0" />
                <span>Find & hire talented students</span>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="h-6 w-6 text-[#F97316] flex-shrink-0" />
                <span>Secure payment processing</span>
              </li>
              <li className="flex items-start gap-2">
                <FileSpreadsheet className="h-6 w-6 text-[#F97316] flex-shrink-0" />
                <span>Manage applications efficiently</span>
              </li>
            </ul>
            <Link to="/signup" className="inline-block">
              <Button className="bg-[#F97316] hover:bg-[#EA580C]">Join as Employer</Button>
            </Link>
          </div>

          {/* Institution Representatives Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <BookmarkCheck className="h-16 w-16 text-[#0EA5E9] mb-6" />
            <h4 className="text-2xl font-bold mb-4">For Institutions</h4>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-2">
                <BarChart className="h-6 w-6 text-[#0EA5E9] flex-shrink-0" />
                <span>Track student engagement</span>
              </li>
              <li className="flex items-start gap-2">
                <Users className="h-6 w-6 text-[#0EA5E9] flex-shrink-0" />
                <span>Post institutional opportunities</span>
              </li>
              <li className="flex items-start gap-2">
                <FileSpreadsheet className="h-6 w-6 text-[#0EA5E9] flex-shrink-0" />
                <span>Access analytics dashboard</span>
              </li>
              <li className="flex items-start gap-2">
                <MessageSquare className="h-6 w-6 text-[#0EA5E9] flex-shrink-0" />
                <span>Facilitate connections</span>
              </li>
            </ul>
            <Link to="/signup" className="inline-block">
              <Button className="bg-[#0EA5E9] hover:bg-[#0284C7]">Join as Institution</Button>
            </Link>
          </div>

          {/* Mentors Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <HeartHandshake className="h-16 w-16 text-[#D946EF] mb-6" />
            <h4 className="text-2xl font-bold mb-4">For Mentors</h4>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-2">
                <UserCheck className="h-6 w-6 text-[#D946EF] flex-shrink-0" />
                <span>Create mentor profile</span>
              </li>
              <li className="flex items-start gap-2">
                <Target className="h-6 w-6 text-[#D946EF] flex-shrink-0" />
                <span>Match with suitable mentees</span>
              </li>
              <li className="flex items-start gap-2">
                <MessageSquare className="h-6 w-6 text-[#D946EF] flex-shrink-0" />
                <span>Secure messaging system</span>
              </li>
              <li className="flex items-start gap-2">
                <Lightbulb className="h-6 w-6 text-[#D946EF] flex-shrink-0" />
                <span>Share expertise & guidance</span>
              </li>
            </ul>
            <Link to="/signup" className="inline-block">
              <Button className="bg-[#D946EF] hover:bg-[#C026D3]">Join as Mentor</Button>
            </Link>
          </div>

          {/* Freelancers Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Briefcase className="h-16 w-16 text-[#10B981] mb-6" />
            <h4 className="text-2xl font-bold mb-4">For Freelancers</h4>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-2">
                <Award className="h-6 w-6 text-[#10B981] flex-shrink-0" />
                <span>Showcase portfolio & skills</span>
              </li>
              <li className="flex items-start gap-2">
                <Target className="h-6 w-6 text-[#10B981] flex-shrink-0" />
                <span>Find relevant gigs</span>
              </li>
              <li className="flex items-start gap-2">
                <DollarSign className="h-6 w-6 text-[#10B981] flex-shrink-0" />
                <span>Secure payment system</span>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="h-6 w-6 text-[#10B981] flex-shrink-0" />
                <span>Track milestones & payments</span>
              </li>
            </ul>
            <Link to="/signup" className="inline-block">
              <Button className="bg-[#10B981] hover:bg-[#059669]">Join as Freelancer</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};