import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Award,
  Briefcase,
  Calendar,
  DollarSign,
  MessageSquare,
  User,
  Book,
  Star,
  FileText,
  Clock,
  Bell,
  Users,
  Bookmark,
  ChevronRight,
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
              <Link to="/jobs" className="text-gray-600 hover:text-primary">Find Jobs</Link>
              <Link to="/courses" className="text-gray-600 hover:text-primary">Courses</Link>
              <Link to="/community" className="text-gray-600 hover:text-primary">Community</Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="h-5 w-5 text-gray-600" />
            <Avatar>
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome back, John!</h1>
            <p className="text-gray-600">Here's what's happening with your account today.</p>
          </div>
          <Button variant="outline" asChild>
            <Link to="/profile">
              <User className="mr-2 h-4 w-4" />
              View Profile
            </Link>
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Active Projects</CardTitle>
              <Briefcase className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-gray-600">2 due this week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Total Earnings</CardTitle>
              <DollarSign className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$2,450</div>
              <p className="text-xs text-gray-600">+18% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Course Progress</CardTitle>
              <Book className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">85%</div>
              <p className="text-xs text-gray-600">Web Development Path</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Profile Views</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">142</div>
              <p className="text-xs text-gray-600">+22% this week</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Current Projects */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Current Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "E-commerce Website Redesign",
                      client: "TechCorp Inc.",
                      deadline: "Due in 3 days",
                      progress: 75,
                    },
                    {
                      title: "Mobile App Development",
                      client: "StartUp Labs",
                      deadline: "Due in 1 week",
                      progress: 45,
                    },
                  ].map((project) => (
                    <div key={project.title} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <h3 className="font-medium">{project.title}</h3>
                        <p className="text-sm text-gray-600">{project.client}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-primary">{project.deadline}</p>
                        <p className="text-sm text-gray-600">{project.progress}% Complete</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      icon: Star,
                      title: "New client review received",
                      time: "2 hours ago",
                    },
                    {
                      icon: DollarSign,
                      title: "Payment received for Project X",
                      time: "5 hours ago",
                    },
                    {
                      icon: MessageSquare,
                      title: "New message from Client Y",
                      time: "1 day ago",
                    },
                  ].map((activity) => (
                    <div key={activity.title} className="flex items-center space-x-4">
                      <activity.icon className="h-8 w-8 p-1.5 bg-primary/10 text-primary rounded-full" />
                      <div>
                        <p className="font-medium">{activity.title}</p>
                        <p className="text-sm text-gray-600">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Upcoming Deadlines */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Upcoming Deadlines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Project Milestone",
                      date: "Tomorrow, 5:00 PM",
                      priority: "high",
                    },
                    {
                      title: "Client Meeting",
                      date: "Wed, 10:00 AM",
                      priority: "medium",
                    },
                  ].map((deadline) => (
                    <div key={deadline.title} className="flex items-center space-x-4">
                      <Clock className="h-4 w-4 text-primary" />
                      <div>
                        <p className="font-medium">{deadline.title}</p>
                        <p className="text-sm text-gray-600">{deadline.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Skills & Certifications */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Skills & Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {["React", "TypeScript", "Node.js", "UI/UX", "AWS"].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="pt-4 border-t">
                    <h4 className="font-medium mb-2">Recent Certifications</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">AWS Solutions Architect</span>
                        <span className="text-xs text-gray-600">2023</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">React Advanced Concepts</span>
                        <span className="text-xs text-gray-600">2023</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full justify-between" variant="outline">
                  Find New Projects
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button className="w-full justify-between" variant="outline">
                  View Messages
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button className="w-full justify-between" variant="outline">
                  Update Portfolio
                  <ChevronRight className="h-4 w-4" />
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
                <li><Link to="/jobs">Find Jobs</Link></li>
                <li><Link to="/courses">Browse Courses</Link></li>
                <li><Link to="/community">Community</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/help">Help Center</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/careers">Careers</Link></li>
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