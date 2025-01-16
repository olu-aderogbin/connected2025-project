import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Lock, User, Building2, GraduationCap, BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type UserType = "student" | "employer" | "career_officer" | "mentor";

interface UserTypeOption {
  id: UserType;
  title: string;
  description: string;
  icon: React.ElementType;
}

const userTypes: UserTypeOption[] = [
  {
    id: "student",
    title: "Student/Graduate",
    description: "Access internships, gigs, and mentorship opportunities",
    icon: GraduationCap,
  },
  {
    id: "employer",
    title: "Employer",
    description: "Post jobs, find talent, and grow your team",
    icon: Building2,
  },
  {
    id: "career_officer",
    title: "Career Officer",
    description: "Guide students and manage institutional opportunities",
    icon: BookOpen,
  },
  {
    id: "mentor",
    title: "Mentor",
    description: "Share your expertise and guide the next generation",
    icon: User,
  },
];

const Signup = () => {
  const [selectedType, setSelectedType] = useState<UserType | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Account Creation Attempted",
      description: "This is a demo signup page. Backend integration pending.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-accent to-primary p-4">
      <div className="w-full max-w-4xl space-y-8 bg-white rounded-xl shadow-2xl p-8">
        <div className="text-center space-y-6">
          <img src="/lovable-uploads/2ccd115a-eb6a-4fc9-9b52-9f15248b47f3.png" alt="ConnectED" className="h-12 mx-auto" />
          <div>
            <h1 className="text-3xl font-bold text-accent">Join ConnectED</h1>
            <p className="text-gray-600">Choose your role to get started</p>
          </div>
        </div>

        {!selectedType ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {userTypes.map((type) => (
              <Card
                key={type.id}
                className="cursor-pointer transition-all hover:shadow-lg hover:border-secondary"
                onClick={() => setSelectedType(type.id)}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <type.icon className="h-6 w-6 text-primary" />
                    {type.title}
                  </CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 mt-8">
            <div className="flex items-center gap-2 text-primary">
              <Button
                type="button"
                variant="ghost"
                onClick={() => setSelectedType(null)}
              >
                ← Back to roles
              </Button>
              <span className="text-sm">
                Signing up as{" "}
                {userTypes.find((t) => t.id === selectedType)?.title}
              </span>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  className="pl-10"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>

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
                  placeholder="Create a password"
                  className="pl-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white"
            >
              Create Account
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        )}

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/"
              className="text-secondary hover:text-secondary/80 font-semibold transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>

      <div className="mt-8 text-center text-white text-sm">
        <p>© 2024 ConnectED. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Signup;
