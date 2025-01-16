import { Button } from "@/components/ui/button";
import { Globe, HelpCircle, Bell, MessageSquare, DollarSign, Star, ClipboardList, Users, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type UserRole = "student" | "employer" | "mentor" | "career-officer" | "freelancer" | null;

interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

const roleBasedNavItems: Record<NonNullable<UserRole>, NavItem[]> = {
  mentor: [
    { label: "Dashboard", href: "/mentor-dashboard", icon: <Globe className="h-4 w-4" /> },
    { label: "Profile", href: "/mentor/profile-setup", icon: <Avatar className="h-4 w-4" /> },
    { label: "Mentees", href: "/mentor/mentees", icon: <Users className="h-4 w-4" /> },
    { label: "Schedule", href: "/mentor/schedule", icon: <Calendar className="h-4 w-4" /> },
  ],
  student: [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Internships", href: "/student/internships" },
    { label: "Find Mentor", href: "/student/find-mentor" },
    { label: "Career Planning", href: "/student/career-planning" },
    { label: "Community", href: "/student/peer-network" },
    { label: "Reviews", href: "/student/reviews" },
    { label: "Profile", href: "/student/profile-setup" },
    { label: "Learning Resources", href: "/student/learning-resources" },
    { label: "Settings", href: "/student/settings" },
  ],
  employer: [
    { label: "Dashboard", href: "/employer-dashboard" },
    { label: "Post Job", href: "/post-job" },
    { label: "Applications", href: "/applications" },
    { label: "Talent Pool", href: "/talent-pool" },
  ],
  "career-officer": [
    { label: "Dashboard", href: "/career-officer-dashboard" },
    { label: "Students", href: "/students" },
    { label: "Opportunities", href: "/opportunities" },
    { label: "Analytics", href: "/analytics" },
  ],
  freelancer: [
    { label: "Dashboard", href: "/freelancer-dashboard", icon: <Globe className="h-4 w-4" /> },
    { label: "Find Gigs", href: "/freelancer/gigs", icon: <ClipboardList className="h-4 w-4" /> },
    { label: "Applications", href: "/freelancer/applications", icon: <ClipboardList className="h-4 w-4" /> },
    { label: "Reviews", href: "/freelancer/reviews", icon: <Star className="h-4 w-4" /> },
    { label: "Earnings", href: "/freelancer/earnings", icon: <DollarSign className="h-4 w-4" /> },
    { label: "Profile", href: "/freelancer/profile-setup", icon: <Avatar className="h-4 w-4" /> },
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
            <img src="/lovable-uploads/2ccd115a-eb6a-4fc9-9b52-9f15248b47f3.png" alt="ConnectED" className="h-8" />
          </Link>

          {isLoggedIn && (
            <nav className="hidden md:flex space-x-6">
              {roleBasedNavItems[userRole].map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  {item.icon}
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
