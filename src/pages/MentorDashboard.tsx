import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Users,
  Briefcase,
  Mail,
  Calendar,
  MessageSquare,
} from "lucide-react";
import { Link } from "react-router-dom";

const MentorDashboard = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, Mentor!</h1>
          <p className="text-gray-600">Support your mentees and track their progress</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Active Mentees</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-gray-600">+3 this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Messages</CardTitle>
              <Mail className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-gray-600">New messages</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Upcoming Sessions</CardTitle>
              <Calendar className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-gray-600">Next session tomorrow</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Feedback Received</CardTitle>
              <Briefcase className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-gray-600">Recent feedback</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Mentee Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Mentee Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "James Wilson",
                      progress: "75%",
                      status: "On Track",
                    },
                    {
                      name: "Maria Rodriguez",
                      progress: "60%",
                      status: "Needs Attention",
                    },
                  ].map((mentee) => (
                    <div key={mentee.name} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <h3 className="font-medium">{mentee.name}</h3>
                        <p className="text-sm text-gray-600">Progress: {mentee.progress}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-primary">{mentee.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recommended Resources */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Recommended Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Effective Communication Skills",
                      type: "Article",
                    },
                    {
                      title: "Time Management for Students",
                      type: "Video",
                    },
                  ].map((resource) => (
                    <div key={resource.title} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <h3 className="font-medium">{resource.title}</h3>
                        <p className="text-sm text-gray-600">{resource.type}</p>
                      </div>
                      <div className="text-right">
                        <Link to="#" className="text-primary">View</Link>
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
                      title: "Mentorship Workshop",
                      date: "Mar 25, 2024",
                      type: "Virtual Event",
                    },
                    {
                      title: "Networking Session",
                      date: "Mar 30, 2024",
                      type: "In-Person",
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

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full justify-between" variant="outline">
                  Message Mentees
                  <MessageSquare className="h-4 w-4" />
                </Button>
                <Button className="w-full justify-between" variant="outline">
                  View Feedback
                  <Briefcase className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MentorDashboard;
