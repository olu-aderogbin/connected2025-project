import { Button } from "@/components/ui/button";
import { Globe, HelpCircle, Bell, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type UserRole = "student" | "employer" | "mentor" | "career-officer" | "freelancer" | null;

interface NavItem {
  label: string;
  href: string;
}

const roleBasedNavItems: Record<NonNullable<UserRole>, NavItem[]> = {
  student: [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Opportunities", href: "/opportunities" },
    { label: "My Applications", href: "/applications" },
    { label: "Resources", href: "/resources" },
  ],
  employer: [
    { label: "Dashboard", href: "/employer-dashboard" },
    { label: "Post Job", href: "/post-job" },
    { label: "Applications", href: "/applications" },
    { label: "Talent Pool", href: "/talent-pool" },
  ],
  mentor: [
    { label: "Dashboard", href: "/mentor-dashboard" },
    { label: "My Mentees", href: "/mentees" },
    { label: "Schedule", href: "/schedule" },
    { label: "Resources", href: "/resources" },
  ],
  "career-officer": [
    { label: "Dashboard", href: "/career-officer-dashboard" },
    { label: "Students", href: "/students" },
    { label: "Opportunities", href: "/opportunities" },
    { label: "Analytics", href: "/analytics" },
  ],
  freelancer: [
    { label: "Dashboard", href: "/freelancer-dashboard" },
    { label: "Find Work", href: "/find-work" },
    { label: "My Projects", href: "/projects" },
    { label: "Earnings", href: "/earnings" },
  ],
};

interface RoleBasedHeaderProps {
  userRole?: UserRole;
  userName?: string;
  userAvatar?: string;
}

export const RoleBasedHeader = ({ userRole, userName, userAvatar }: RoleBasedHeaderProps) => {
  const isLoggedIn = userRole !== null && userRole !== undefined;

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo-blue.png" alt="ConnectED" className="h-8" />
          </Link>

          {isLoggedIn && (
            <nav className="hidden md:flex space-x-6">
              {roleBasedNavItems[userRole].map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          )}

          {!isLoggedIn && (
            <nav className="hidden md:flex space-x-6">
              <Link to="/about" className="text-gray-600 hover:text-primary">About</Link>
              <Link to="/blog" className="text-gray-600 hover:text-primary">Blog</Link>
              <Link to="/contact" className="text-gray-600 hover:text-primary">Contact</Link>
            </nav>
          )}
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/help">
            <Button variant="ghost" size="icon">
              <HelpCircle className="h-5 w-5" />
            </Button>
          </Link>

          {isLoggedIn && (
            <>
              <Link to="/notifications">
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/messages">
                <Button variant="ghost" size="icon">
                  <MessageSquare className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/profile">
                <Avatar className="cursor-pointer">
                  <AvatarImage src={userAvatar} />
                  <AvatarFallback>{userName?.slice(0, 2).toUpperCase() || "U"}</AvatarFallback>
                </Avatar>
              </Link>
            </>
          )}

          {!isLoggedIn && (
            <>
              <Link to="/signup">
                <Button variant="outline">Sign Up</Button>
              </Link>
              <Link to="/">
                <Button>Login</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
