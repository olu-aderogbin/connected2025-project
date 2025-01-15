import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Award,
  Book,
  Calendar,
  ChevronRight,
  Bell,
  Users,
  Bookmark,
  GraduationCap,
  Briefcase,
  MessageSquare,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-primary">ConnectED</h1>
            <nav className="hidden md:flex space-x-6">
              <Link to="/internships" className="text-gray-600 hover:text-primary">Internships</Link>
              <Link to="/gigs" className="text-gray-600 hover:text-primary">Freelance Gigs</Link>
              <Link to="/scholarships" className="text-gray-600 hover:text-primary">Scholarships</Link>
              <Link to="/mentors" className="text-gray-600 hover:text-primary">Find Mentors</Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="h-5 w-5 text-gray-600 cursor-pointer" />
            <Avatar>
              <AvatarImage src="/placeholder-student.jpg" />
              <AvatarFallback>ST</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, Alex!</h1>
          <p className="text-gray-600">Track your academic and professional journey</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Active Applications</CardTitle>
              <Briefcase className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-gray-600">3 internships, 2 gigs</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Mentor Sessions</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-gray-600">Next session tomorrow</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Skill Progress</CardTitle>
              <Book className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">85%</div>
              <p className="text-xs text-gray-600">Web Development Path</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Scholarship Matches</CardTitle>
              <GraduationCap className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-gray-600">3 new matches</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Application Status */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Application Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Summer Internship - Tech Corp",
                      type: "Internship",
                      status: "Interview Scheduled",
                      date: "Mar 15, 2024",
                    },
                    {
                      title: "Web Development Project",
                      type: "Freelance Gig",
                      status: "Application Review",
                      date: "Mar 12, 2024",
                    },
                  ].map((application) => (
                    <div key={application.title} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <h3 className="font-medium">{application.title}</h3>
                        <p className="text-sm text-gray-600">{application.type}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-primary">{application.status}</p>
                        <p className="text-sm text-gray-600">{application.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recommended Opportunities */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Recommended For You</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Frontend Developer Internship",
                      company: "Innovation Labs",
                      match: "95% match",
                      type: "Internship",
                    },
                    {
                      title: "UI/UX Design Project",
                      company: "Creative Studio",
                      match: "88% match",
                      type: "Freelance",
                    },
                  ].map((opportunity) => (
                    <div key={opportunity.title} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <h3 className="font-medium">{opportunity.title}</h3>
                        <p className="text-sm text-gray-600">{opportunity.company}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-green-600">{opportunity.match}</p>
                        <p className="text-sm text-gray-600">{opportunity.type}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Tech Career Fair",
                      date: "Mar 20, 2024",
                      type: "Virtual Event",
                    },
                    {
                      title: "Mentor Session",
                      date: "Mar 15, 2024",
                      type: "1:1 Meeting",
                    },
                  ].map((event) => (
                    <div key={event.title} className="flex items-center space-x-4">
                      <Calendar className="h-4 w-4 text-primary" />
                      <div>
                        <p className="font-medium">{event.title}</p>
                        <p className="text-sm text-gray-600">{event.date}</p>
                        <p className="text-xs text-primary">{event.type}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Skill Development */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Skill Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>React Development</span>
                      <span className="text-primary">85%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full">
                      <div className="h-full bg-primary rounded-full" style={{ width: "85%" }} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>UI/UX Design</span>
                      <span className="text-primary">60%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full">
                      <div className="h-full bg-primary rounded-full" style={{ width: "60%" }} />
                    </div>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline">
                  View Skill Report
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full justify-between" variant="outline">
                  Browse Scholarships
                  <GraduationCap className="h-4 w-4" />
                </Button>
                <Button className="w-full justify-between" variant="outline">
                  Message Mentors
                  <MessageSquare className="h-4 w-4" />
                </Button>
                <Button className="w-full justify-between" variant="outline">
                  Saved Opportunities
                  <Bookmark className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">ConnectED</h3>
              <p className="text-gray-400 text-sm">
                Connecting students with opportunities.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/internships">Find Internships</Link></li>
                <li><Link to="/scholarships">Scholarships</Link></li>
                <li><Link to="/mentors">Find Mentors</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/help">Help Center</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/events">Events</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>support@connected.com</li>
                <li>1-800-CONNECTED</li>
                <li>123 Tech Street, SF, CA</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 ConnectED. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;