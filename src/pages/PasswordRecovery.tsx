import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Mail, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";

const PasswordRecovery = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast({
      title: "Recovery Email Sent",
      description: "Please check your inbox for password reset instructions.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-accent to-primary p-4">
      <div className="w-full max-w-md space-y-8 bg-white rounded-xl shadow-2xl p-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-accent">Reset Password</h1>
          <p className="text-gray-600">
            Enter your email address to receive password reset instructions
          </p>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6 mt-8">
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

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white"
            >
              Send Recovery Email
            </Button>
          </form>
        ) : (
          <Alert className="mt-6">
            <AlertDescription>
              If an account exists with {email}, you will receive password reset
              instructions shortly. Please check your email and follow the
              instructions to reset your password.
            </AlertDescription>
          </Alert>
        )}

        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Login
          </Link>
        </div>
      </div>

      <div className="mt-8 text-center text-white text-sm">
        <p>© 2024 ConnectED. All rights reserved.</p>
      </div>
    </div>
  );
};

export default PasswordRecovery;