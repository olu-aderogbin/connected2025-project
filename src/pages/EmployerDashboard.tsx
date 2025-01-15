import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Briefcase,
  Users,
  Mail,
  Calendar,
  MessageSquare,
} from "lucide-react";
import { Link } from "react-router-dom";

const EmployerDashboard = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, Employer!</h1>
          <p className="text-gray-600">Manage your job postings and applications</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Active Job Postings</CardTitle>
              <Briefcase className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-gray-600">2 new this week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Applications Received</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15</div>
              <p className="text-xs text-gray-600">5 new this week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Messages</CardTitle>
              <Mail className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-gray-600">2 unread</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Upcoming Interviews</CardTitle>
              <Calendar className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-gray-600">Next on Mar 20, 2024</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Job Postings */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Job Postings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Software Engineer",
                      status: "Open",
                      date: "Posted on Mar 1, 2024",
                    },
                    {
                      title: "Marketing Specialist",
                      status: "Closed",
                      date: "Posted on Feb 15, 2024",
                    },
                  ].map((posting) => (
                    <div key={posting.title} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <h3 className="font-medium">{posting.title}</h3>
                        <p className="text-sm text-gray-600">{posting.status}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">{posting.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recommended Candidates */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Recommended Candidates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "Alice Johnson",
                      match: "90% match",
                    },
                    {
                      name: "Bob Smith",
                      match: "85% match",
                    },
                  ].map((candidate) => (
                    <div key={candidate.name} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <h3 className="font-medium">{candidate.name}</h3>
                        <p className="text-sm text-gray-600">{candidate.match}</p>
                      </div>
                      <div className="text-right">
                        <Link to={`/candidates/${candidate.name}`} className="text-primary">View Profile</Link>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Upcoming Interviews */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Upcoming Interviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      candidate: "James Wilson",
                      date: "Mar 20, 2024",
                      time: "10:00 AM",
                    },
                    {
                      candidate: "Maria Rodriguez",
                      date: "Mar 22, 2024",
                      time: "2:00 PM",
                    },
                  ].map((interview) => (
                    <div key={interview.candidate} className="flex items-center space-x-4">
                      <Calendar className="h-4 w-4 text-primary" />
                      <div>
                        <p className="font-medium">{interview.candidate}</p>
                        <p className="text-sm text-gray-600">{interview.date} at {interview.time}</p>
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
                  Post a Job
                  <Briefcase className="h-4 w-4" />
                </Button>
                <Button className="w-full justify-between" variant="outline">
                  View Applications
                  <Users className="h-4 w-4" />
                </Button>
                <Button className="w-full justify-between" variant="outline">
                  Message Candidates
                  <MessageSquare className="h-4 w-4" />
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

export default EmployerDashboard;
