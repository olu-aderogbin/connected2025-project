import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  GraduationCap, Briefcase, Users, BookOpen, ArrowRight, Mail, Lock, 
  Target, Award, DollarSign, BookmarkCheck, Lightbulb, Shield, BarChart,
  Globe, Rocket, Heart, Clock, CheckCircle, Star, Zap, TrendingUp
} from "lucide-react";
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
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
            <Globe className="h-6 w-6" />
            ConnectED
          </h1>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-gray-600 hover:text-primary transition-colors">Features</a>
            <a href="#opportunities" className="text-gray-600 hover:text-primary transition-colors">Opportunities</a>
            <a href="#testimonials" className="text-gray-600 hover:text-primary transition-colors">Success Stories</a>
            <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors">Pricing</a>
          </nav>
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

      {/* Hero Section with Animation */}
      <section className="py-20 bg-gradient-to-br from-[#E5DEFF] via-white to-[#FDE1D3]">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-5xl font-bold text-accent leading-tight">
              <span className="text-[#8B5CF6]">Connect</span>, Learn, and{" "}
              <span className="text-[#F97316]">Earn</span> in One Platform
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              ConnectED is your gateway to success. Whether you're a student seeking opportunities, 
              a freelancer looking for gigs, or a mentor wanting to give back, we've got you covered 
              with internships, mentorship, scholarships, and freelance work.
            </p>
            <div className="flex gap-4">
              <Link to="/signup">
                <Button size="lg" className="bg-[#9b87f5] hover:bg-[#7E69AB] gap-2 animate-pulse">
                  Get Started <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#E5DEFF]">
                Watch Demo
              </Button>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-600">
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
          <div className="relative animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="Students collaborating" 
              className="rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -bottom-4 -right-4 bg-[#FDE1D3] p-6 rounded-lg shadow-lg">
              <p className="text-lg font-semibold text-[#F97316]">Join 10,000+ students & freelancers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600 mb-8">Trusted by leading universities and companies</p>
          <div className="flex justify-center items-center gap-12 opacity-50">
            <img src="https://via.placeholder.com/120x40" alt="University 1" />
            <img src="https://via.placeholder.com/120x40" alt="Company 1" />
            <img src="https://via.placeholder.com/120x40" alt="University 2" />
            <img src="https://via.placeholder.com/120x40" alt="Company 2" />
            <img src="https://via.placeholder.com/120x40" alt="University 3" />
          </div>
        </div>
      </section>

      {/* Stats Section with Animation */}
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

      {/* Features Grid with Hover Effects */}
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

      {/* User Types Section with Enhanced Design */}
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

      {/* Testimonials Section */}
      <section className="py-20 bg-white" id="testimonials">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-4">Success Stories</h3>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            See how ConnectED has helped students and professionals achieve their goals
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                alt="Sarah M."
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-600 italic mb-4">
                "Through ConnectED, I found an amazing internship that turned into a full-time role.
                The mentorship program was invaluable for my career growth."
              </p>
              <p className="font-semibold">Sarah M.</p>
              <p className="text-sm text-gray-500">Software Engineer</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                alt="John D."
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-600 italic mb-4">
                "As a freelancer, ConnectED helped me find high-quality clients and maintain a steady
                stream of projects. The platform's tools are fantastic!"
              </p>
              <p className="font-semibold">John D.</p>
              <p className="text-sm text-gray-500">Freelance Designer</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
                alt="Emily R."
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-600 italic mb-4">
                "The scholarship matching feature helped me secure funding for my studies.
                ConnectED made the entire process smooth and straightforward."
              </p>
              <p className="font-semibold">Emily R.</p>
              <p className="text-sm text-gray-500">Graduate Student</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-[#E5DEFF] to-white" id="pricing">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-4">Simple, Transparent Pricing</h3>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Choose the plan that best fits your needs. All plans include core features.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="text-xl font-semibold mb-4">Student</h4>
              <p className="text-4xl font-bold mb-6">Free</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Basic Profile</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Job Search</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Limited Applications</span>
                </li>
              </ul>
              <Button className="w-full">Get Started</Button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#8B5CF6] text-white px-4 py-1 rounded-full text-sm">
                Most Popular
              </div>
              <h4 className="text-xl font-semibold mb-4">Professional</h4>
              <p className="text-4xl font-bold mb-6">$19<span className="text-lg">/mo</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Enhanced Profile</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Priority Applications</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Mentorship Access</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Skills Assessment</span>
                </li>
              </ul>
              <Button className="w-full bg-[#8B5CF6] hover:bg-[#7E69AB]">Start Free Trial</Button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="text-xl font-semibold mb-4">Enterprise</h4>
              <p className="text-4xl font-bold mb-6">Custom</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>All Pro Features</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Custom Integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Dedicated Support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Analytics Dashboard</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">Contact Sales</Button>
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
