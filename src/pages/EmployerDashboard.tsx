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
  Briefcase,
  Users,
  DollarSign,
  Mail,
  Bell,
  FileText,
  MessageSquare,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const EmployerDashboard = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-primary">ConnectED</h1>
            <nav className="hidden md:flex space-x-6">
              <Link to="/post-job" className="text-gray-600 hover:text-primary">Post a Job</Link>
              <Link to="/applications" className="text-gray-600 hover:text-primary">Applications</Link>
              <Link to="/talent-pool" className="text-gray-600 hover:text-primary">Talent Pool</Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="h-5 w-5 text-gray-600 cursor-pointer" />
            <Avatar>
              <AvatarImage src="/placeholder-employer.jpg" />
              <AvatarFallback>EM</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, Tech Corp!</h1>
          <p className="text-gray-600">Manage your job postings and applications</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Active Jobs</CardTitle>
              <Briefcase className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-gray-600">4 closing soon</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Total Applications</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">48</div>
              <p className="text-xs text-gray-600">15 new this week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Hired Candidates</CardTitle>
              <DollarSign className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-green-600">+3 this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Messages</CardTitle>
              <Mail className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-gray-600">6 unread</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Recent Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Candidate</TableHead>
                      <TableHead>Position</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Applied</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        name: "Sarah Johnson",
                        position: "Frontend Developer",
                        status: "Review",
                        date: "2d ago",
                      },
                      {
                        name: "Michael Chen",
                        position: "UX Designer",
                        status: "Interviewing",
                        date: "3d ago",
                      },
                    ].map((application) => (
                      <TableRow key={application.name}>
                        <TableCell className="font-medium">{application.name}</TableCell>
                        <TableCell>{application.position}</TableCell>
                        <TableCell>
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                            {application.status}
                          </span>
                        </TableCell>
                        <TableCell>{application.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Active Job Postings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Senior Frontend Developer",
                      applications: "15 applications",
                      deadline: "Closes in 5 days",
                    },
                    {
                      title: "Product Designer",
                      applications: "23 applications",
                      deadline: "Closes in 7 days",
                    },
                  ].map((job) => (
                    <div key={job.title} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">{job.title}</h3>
                        <p className="text-sm text-gray-600">{job.applications}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">{job.deadline}</p>
                        <Button variant="link" className="text-primary">
                          View Details
                        </Button>
                      </div>
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
                  Post New Job
                  <FileText className="h-4 w-4" />
                </Button>
                <Button className="w-full justify-between" variant="outline">
                  Review Applications
                  <Users className="h-4 w-4" />
                </Button>
                <Button className="w-full justify-between" variant="outline">
                  Message Candidates
                  <MessageSquare className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Upcoming Interviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      candidate: "Alex Thompson",
                      position: "Frontend Developer",
                      time: "Tomorrow, 2:00 PM",
                    },
                    {
                      candidate: "Jessica Lee",
                      position: "UX Designer",
                      time: "Mar 15, 11:00 AM",
                    },
                  ].map((interview) => (
                    <div key={interview.candidate} className="p-4 border rounded-lg">
                      <h3 className="font-medium">{interview.candidate}</h3>
                      <p className="text-sm text-gray-600">{interview.position}</p>
                      <p className="text-sm text-primary mt-1">{interview.time}</p>
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

export default EmployerDashboard;