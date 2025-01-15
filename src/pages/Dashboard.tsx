import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Briefcase, Calendar, DollarSign, MessageSquare, User } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-accent to-primary p-4 md:p-8">
      {/* Header Section */}
      <header className="mb-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-white mb-4 md:mb-0">
          <h1 className="text-3xl font-bold">Welcome back, John!</h1>
          <p className="text-gray-200">Your freelancing journey continues here</p>
        </div>
        <Button variant="secondary" asChild>
          <Link to="/profile">
            <User className="mr-2" />
            View Profile
          </Link>
        </Button>
      </header>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Active Projects Card */}
        <Card className="bg-white/95 backdrop-blur">
          <CardHeader>
            <CardTitle className="flex items-center text-accent">
              <Briefcase className="mr-2" />
              Active Projects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-primary">3</div>
            <p className="text-gray-600">Projects in progress</p>
          </CardContent>
        </Card>

        {/* Earnings Card */}
        <Card className="bg-white/95 backdrop-blur">
          <CardHeader>
            <CardTitle className="flex items-center text-accent">
              <DollarSign className="mr-2" />
              Earnings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-primary">$2,450</div>
            <p className="text-gray-600">This month</p>
          </CardContent>
        </Card>

        {/* Messages Card */}
        <Card className="bg-white/95 backdrop-blur">
          <CardHeader>
            <CardTitle className="flex items-center text-accent">
              <MessageSquare className="mr-2" />
              Messages
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-primary">12</div>
            <p className="text-gray-600">Unread messages</p>
          </CardContent>
        </Card>

        {/* Upcoming Deadlines Card */}
        <Card className="bg-white/95 backdrop-blur">
          <CardHeader>
            <CardTitle className="flex items-center text-accent">
              <Calendar className="mr-2" />
              Upcoming Deadlines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span>UI Design Project</span>
                <span className="text-secondary font-medium">Tomorrow</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Web Development</span>
                <span className="text-gray-600">In 3 days</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills & Certifications Card */}
        <Card className="bg-white/95 backdrop-blur">
          <CardHeader>
            <CardTitle className="flex items-center text-accent">
              <Award className="mr-2" />
              Skills & Certifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm">
                React
              </span>
              <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm">
                TypeScript
              </span>
              <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm">
                UI/UX
              </span>
              <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm">
                Node.js
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions Card */}
        <Card className="bg-white/95 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-accent">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button className="w-full justify-start" variant="outline">
              <Briefcase className="mr-2" />
              Find New Projects
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <MessageSquare className="mr-2" />
              Message Clients
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <DollarSign className="mr-2" />
              View Earnings Report
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;