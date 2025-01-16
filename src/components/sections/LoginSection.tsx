import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNotification } from "@/hooks/use-notification";
import { ArrowRight, Lock, Mail, Loader2, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ProgressSpinner } from "@/components/ui/progress-spinner";
import { cn } from "@/lib/utils";

export const LoginSection = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const notification = useNotification();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      notification.success("Login Successful", "Welcome back!");
    } catch (error) {
      notification.error("Login Failed", "Please check your credentials and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleOAuthLogin = async (provider: string) => {
    try {
      notification.info("OAuth Login", `${provider} integration pending.`);
    } catch (error) {
      notification.error("Error", `Failed to login with ${provider}`);
    }
  };

  if (isVerifying) {
    return (
      <div className="space-y-4 p-8">
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <section className="py-20 bg-gradient-to-b from-white to-accent/5">
        <div className="container mx-auto px-4 max-w-md">
          <div className="bg-white rounded-xl shadow-2xl p-8">
            <div className="text-center space-y-6 mb-8">
              <img 
                src="/lovable-uploads/2ccd115a-eb6a-4fc9-9b52-9f15248b47f3.png" 
                alt="ConnectED" 
                className="h-12 mx-auto"
                loading="lazy"
              />
              <div>
                <h2 className="text-3xl font-bold text-accent">Welcome Back!</h2>
                <p className="text-gray-600">Login to access your opportunities</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className={cn(
                      "pl-10",
                      email && !email.includes("@") && "border-red-500 focus-visible:ring-red-500"
                    )}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isLoading}
                    aria-label="Email address"
                  />
                  {email && !email.includes("@") && (
                    <p className="mt-1 text-sm text-red-500">Please enter a valid email address</p>
                  )}
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
                    disabled={isLoading}
                    aria-label="Password"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 text-sm">
                  <input 
                    type="checkbox" 
                    className="rounded border-gray-300"
                    aria-label="Remember me"
                  />
                  <span>Remember me</span>
                </label>
                <Link
                  to="/password-recovery"
                  className="text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  Forgot password?
                </Link>
              </div>

              <Button 
                type="submit" 
                className="w-full touch-manipulation"
                disabled={isLoading}
              >
                {isLoading ? (
                  <ProgressSpinner size="sm" className="mr-2" />
                ) : (
                  <ArrowRight className="ml-2 h-4 w-4" />
                )}
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  onClick={() => handleOAuthLogin("GitHub")}
                  type="button"
                  className="touch-manipulation"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleOAuthLogin("LinkedIn")}
                  type="button"
                  className="touch-manipulation"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
              </div>
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
    </ErrorBoundary>
  );
};
