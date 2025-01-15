import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
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
  );
};