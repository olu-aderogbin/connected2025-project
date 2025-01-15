import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { GraduationCap, Briefcase, Users, BookOpen, ArrowRight, Mail, Lock, Target, Award, DollarSign, BookmarkCheck, Lightbulb, Shield, BarChart } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Login Attempted",
      description: "This is a demo login page. Backend integration pending.",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">ConnectED</h1>
          <div className="space-x-4">
            <Link to="/signup">
              <Button variant="outline">Sign Up</Button>
            </Link>
            <Link to="/">
              <Button>Login</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-[#E5DEFF] to-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl font-bold text-accent">
              <span className="text-[#8B5CF6]">Connect</span>, Learn, and{" "}
              <span className="text-[#F97316]">Earn</span>
            </h2>
            <p className="text-xl text-gray-600">
              ConnectED is your gateway to success. Whether you're a student seeking opportunities or a freelancer looking for gigs, we've got you covered with internships, mentorship, scholarships, and freelance work.
            </p>
            <div className="flex gap-4">
              <Link to="/signup">
                <Button size="lg" className="bg-[#9b87f5] hover:bg-[#7E69AB] gap-2">
                  Get Started <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#E5DEFF]">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="Students collaborating" 
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 bg-[#FDE1D3] p-6 rounded-lg shadow-lg">
              <p className="text-lg font-semibold text-[#F97316]">Join 10,000+ students & freelancers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-[#F2FCE2]">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-[#0EA5E9]">10K+</p>
            <p className="text-gray-600">Active Users</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-[#D946EF]">5K+</p>
            <p className="text-gray-600">Available Opportunities</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-[#8B5CF6]">1K+</p>
            <p className="text-gray-600">Successful Matches</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-[#F97316]">95%</p>
            <p className="text-gray-600">Satisfaction Rate</p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Platform Features</h3>
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

      {/* User Types Section */}
      <section className="py-20 bg-[#E5DEFF]">
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

      {/* Login Section */}
      <section className="py-20 bg-gradient-to-b from-white to-accent/5">
        <div className="container mx-auto px-4 max-w-md">
          <div className="bg-white rounded-xl shadow-2xl p-8">
            <div className="text-center space-y-2 mb-8">
              <h2 className="text-3xl font-bold text-accent">Welcome Back!</h2>
              <p className="text-gray-600">Login to access your opportunities</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="pl-10"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 text-sm">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span>Remember me</span>
                </label>
                <Link
                  to="/password-recovery"
                  className="text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  Forgot password?
                </Link>
              </div>

              <Button type="submit" className="w-full">
                Sign In
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-secondary hover:text-secondary/80 font-semibold transition-colors"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">ConnectED</h4>
              <p className="text-accent-foreground/80">
                Empowering students to build successful careers through meaningful connections and opportunities.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-accent-foreground/80">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-accent-foreground/80">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Events</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <ul className="space-y-2 text-accent-foreground/80">
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-accent-foreground/20 text-center text-accent-foreground/60">
            <p>© 2024 ConnectED. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;