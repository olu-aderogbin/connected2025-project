import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { GraduationCap, Briefcase, Users, BookOpen, ArrowRight, Mail, Lock } from "lucide-react";
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
      <section className="py-20 bg-gradient-to-b from-accent/5 to-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl font-bold text-accent">Connect, Learn, and Earn</h2>
            <p className="text-xl text-gray-600">
              Your all-in-one platform for students to find internships, freelance opportunities, 
              mentorship, and scholarships.
            </p>
            <div className="flex gap-4">
              <Link to="/signup">
                <Button size="lg" className="gap-2">
                  Get Started <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline">Learn More</Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
              alt="Students collaborating" 
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Everything You Need to Succeed</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6 bg-white rounded-lg border hover:shadow-lg transition">
              <GraduationCap className="h-12 w-12 text-primary mb-4" />
              <h4 className="text-xl font-semibold mb-2">Internships</h4>
              <p className="text-gray-600">Find relevant internships that align with your career goals</p>
            </div>
            <div className="p-6 bg-white rounded-lg border hover:shadow-lg transition">
              <Briefcase className="h-12 w-12 text-primary mb-4" />
              <h4 className="text-xl font-semibold mb-2">Freelance Gigs</h4>
              <p className="text-gray-600">Earn while you learn with flexible freelance opportunities</p>
            </div>
            <div className="p-6 bg-white rounded-lg border hover:shadow-lg transition">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h4 className="text-xl font-semibold mb-2">Mentorship</h4>
              <p className="text-gray-600">Connect with industry professionals for guidance</p>
            </div>
            <div className="p-6 bg-white rounded-lg border hover:shadow-lg transition">
              <BookOpen className="h-12 w-12 text-primary mb-4" />
              <h4 className="text-xl font-semibold mb-2">Scholarships</h4>
              <p className="text-gray-600">Discover financial aid opportunities for your education</p>
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