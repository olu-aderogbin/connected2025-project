import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  User,
  MessageSquare,
  Calendar,
  BookOpen,
  Bell,
  Users,
  Star,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const MentorDashboard = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-primary">ConnectED</h1>
            <nav className="hidden md:flex space-x-6">
              <Link to="/mentees" className="text-gray-600 hover:text-primary">My Mentees</Link>
              <Link to="/sessions" className="text-gray-600 hover:text-primary">Sessions</Link>
              <Link to="/resources" className="text-gray-600 hover:text-primary">Resources</Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="h-5 w-5 text-gray-600 cursor-pointer" />
            <Avatar>
              <AvatarImage src="/placeholder-mentor.jpg" />
              <AvatarFallback>MT</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, Dr. Williams!</h1>
          <p className="text-gray-600">Your mentoring dashboard</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Active Mentees</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-gray-600">2 new this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Upcoming Sessions</CardTitle>
              <Calendar className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-gray-600">This week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Mentee Rating</CardTitle>
              <Star className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.9/5</div>
              <p className="text-xs text-green-600">Top rated mentor</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Resources Shared</CardTitle>
              <BookOpen className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-gray-600">This month</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Upcoming Sessions</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Mentee</TableHead>
                      <TableHead>Topic</TableHead>
                      <TableHead>Date & Time</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        name: "John Smith",
                        topic: "Career Planning",
                        datetime: "Today, 3:00 PM",
                        status: "Confirmed",
                      },
                      {
                        name: "Emma Davis",
                        topic: "Technical Interview Prep",
                        datetime: "Tomorrow, 2:00 PM",
                        status: "Pending",
                      },
                    ].map((session) => (
                      <TableRow key={session.name}>
                        <TableCell className="font-medium">{session.name}</TableCell>
                        <TableCell>{session.topic}</TableCell>
                        <TableCell>{session.datetime}</TableCell>
                        <TableCell>
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                            {session.status}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Recent Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      action: "Session Completed",
                      details: "Career guidance session with Maria Garcia",
                      time: "Yesterday",
                    },
                    {
                      action: "Resource Shared",
                      details: "Interview preparation guide",
                      time: "2 days ago",
                    },
                  ].map((activity) => (
                    <div key={activity.action} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">{activity.action}</h3>
                        <p className="text-sm text-gray-600">{activity.details}</p>
                      </div>
                      <p className="text-sm text-gray-600">{activity.time}</p>
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
                  Schedule Session
                  <Calendar className="h-4 w-4" />
                </Button>
                <Button className="w-full justify-between" variant="outline">
                  Message Mentee
                  <MessageSquare className="h-4 w-4" />
                </Button>
                <Button className="w-full justify-between" variant="outline">
                  Share Resource
                  <BookOpen className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Mentee Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "David Kim",
                      goal: "Technical Skills Development",
                      progress: "75%",
                    },
                    {
                      name: "Lisa Chen",
                      goal: "Career Transition",
                      progress: "60%",
                    },
                  ].map((mentee) => (
                    <div key={mentee.name} className="p-4 border rounded-lg">
                      <h3 className="font-medium">{mentee.name}</h3>
                      <p className="text-sm text-gray-600">{mentee.goal}</p>
                      <div className="mt-2 h-2 bg-gray-100 rounded-full">
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{ width: mentee.progress }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MentorDashboard;