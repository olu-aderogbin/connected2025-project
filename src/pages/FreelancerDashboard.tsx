import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Users,
  Briefcase,
  ChartBar,
  Mail,
  FileText,
  MessageSquare,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const FreelancerDashboard = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, Freelancer!</h1>
          <p className="text-gray-600">Manage your projects and opportunities</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Active Projects</CardTitle>
                <Briefcase className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-gray-600">Ongoing projects</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">New Messages</CardTitle>
                <Mail className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5</div>
                <p className="text-xs text-gray-600">Unread messages</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Pending Payments</CardTitle>
                <ChartBar className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$1,200</div>
                <p className="text-xs text-gray-600">Total pending payments</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Completed Projects</CardTitle>
                <Users className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">10</div>
                <p className="text-xs text-gray-600">Projects completed</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Project Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Website Redesign",
                        status: "In Progress",
                        date: "Due: Mar 30, 2024",
                      },
                      {
                        title: "Mobile App Development",
                        status: "Completed",
                        date: "Completed on: Mar 10, 2024",
                      },
                    ].map((project) => (
                      <div key={project.title} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="space-y-1">
                          <h3 className="font-medium">{project.title}</h3>
                          <p className="text-sm text-gray-600">{project.status}</p>
                        </div>
                        <p className="text-sm text-gray-600">{project.date}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Recommended Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Graphic Designer for Marketing",
                        company: "Creative Agency",
                        type: "Freelance",
                      },
                      {
                        title: "Content Writer for Tech Blog",
                        company: "Tech Insights",
                        type: "Freelance",
                      },
                    ].map((opportunity) => (
                      <div key={opportunity.title} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="space-y-1">
                          <h3 className="font-medium">{opportunity.title}</h3>
                          <p className="text-sm text-gray-600">{opportunity.company}</p>
                        </div>
                        <p className="text-sm text-gray-600">{opportunity.type}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button className="w-full justify-between" variant="outline">
                    Post New Project
                    <FileText className="h-4 w-4" />
                  </Button>
                  <Button className="w-full justify-between" variant="outline">
                    Message Clients
                    <MessageSquare className="h-4 w-4" />
                  </Button>
                  <Button className="w-full justify-between" variant="outline">
                    View Reports
                    <ChartBar className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FreelancerDashboard;
