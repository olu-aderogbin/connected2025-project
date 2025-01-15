import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const Header = () => {
  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary flex items-center gap-2">
          <Globe className="h-6 w-6" />
          ConnectED
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {/* Platform Features */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Platform</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Features</h4>
                    <p className="text-sm text-muted-foreground">Discover what ConnectED offers</p>
                    <div className="space-y-2">
                      <Link to="/#features" className="block text-sm hover:text-primary">
                        Platform Features
                      </Link>
                      <Link to="/#opportunities" className="block text-sm hover:text-primary">
                        Opportunities
                      </Link>
                      <Link to="/#testimonials" className="block text-sm hover:text-primary">
                        Success Stories
                      </Link>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">User Types</h4>
                    <p className="text-sm text-muted-foreground">Solutions for everyone</p>
                    <div className="space-y-2">
                      <Link to="/signup?type=student" className="block text-sm hover:text-primary">
                        For Students
                      </Link>
                      <Link to="/signup?type=employer" className="block text-sm hover:text-primary">
                        For Employers
                      </Link>
                      <Link to="/signup?type=institution" className="block text-sm hover:text-primary">
                        For Institutions
                      </Link>
                      <Link to="/signup?type=mentor" className="block text-sm hover:text-primary">
                        For Mentors
                      </Link>
                      <Link to="/signup?type=freelancer" className="block text-sm hover:text-primary">
                        For Freelancers
                      </Link>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Resources */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Learn More</h4>
                    <p className="text-sm text-muted-foreground">Explore our resources</p>
                    <div className="space-y-2">
                      <Link to="/blog" className="block text-sm hover:text-primary">
                        Blog
                      </Link>
                      <Link to="/faq" className="block text-sm hover:text-primary">
                        FAQ
                      </Link>
                      <Link to="/#pricing" className="block text-sm hover:text-primary">
                        Pricing
                      </Link>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Support</h4>
                    <p className="text-sm text-muted-foreground">Get help and guidance</p>
                    <div className="space-y-2">
                      <Link to="/contact" className="block text-sm hover:text-primary">
                        Contact Us
                      </Link>
                      <Link to="/about" className="block text-sm hover:text-primary">
                        About Us
                      </Link>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Direct Links */}
            <NavigationMenuItem>
              <Link to="/blog" className="text-gray-600 hover:text-primary transition-colors px-4 py-2">
                Blog
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors px-4 py-2">
                Contact
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

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