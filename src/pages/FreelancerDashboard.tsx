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
  DollarSign,
  Star,
  Clock,
  Bell,
  Users,
  ChevronRight,
  FileText,
  MessageSquare,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Footer } from "@/components/layout/Footer";

const FreelancerDashboard = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-primary">ConnectED</h1>
            <nav className="hidden md:flex space-x-6">
              <Link to="/gigs" className="text-gray-600 hover:text-primary">Find Gigs</Link>
              <Link to="/portfolio" className="text-gray-600 hover:text-primary">Portfolio</Link>
              <Link to="/community" className="text-gray-600 hover:text-primary">Community</Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="h-5 w-5 text-gray-600 cursor-pointer" />
            <Avatar>
              <AvatarImage src="/placeholder-freelancer.jpg" />
              <AvatarFallback>FL</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex-grow">
        <main className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Welcome back, Sarah!</h1>
            <p className="text-gray-600">Here's an overview of your freelancing activity</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Active Gigs</CardTitle>
                <Briefcase className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4</div>
                <p className="text-xs text-gray-600">2 deliverables due this week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Monthly Earnings</CardTitle>
                <DollarSign className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$3,450</div>
                <p className="text-xs text-green-600">+24% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Client Rating</CardTitle>
                <Star className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.9/5</div>
                <p className="text-xs text-gray-600">Based on 28 reviews</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Completion Rate</CardTitle>
                <Award className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">98%</div>
                <p className="text-xs text-gray-600">Top rated freelancer</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Active Gigs</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Project</TableHead>
                        <TableHead>Client</TableHead>
                        <TableHead>Deadline</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        {
                          project: "E-commerce Website Development",
                          client: "TechStore Inc.",
                          deadline: "Mar 15",
                          status: "In Progress",
                        },
                        {
                          project: "Mobile App UI Design",
                          client: "StartUp Labs",
                          deadline: "Mar 20",
                          status: "Review",
                        },
                      ].map((gig) => (
                        <TableRow key={gig.project}>
                          <TableCell className="font-medium">{gig.project}</TableCell>
                          <TableCell>{gig.client}</TableCell>
                          <TableCell>{gig.deadline}</TableCell>
                          <TableCell>
                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                              {gig.status}
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
                  <CardTitle className="text-xl">Recent Payments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        project: "Website Redesign",
                        amount: "$1,200",
                        date: "Mar 10, 2024",
                        status: "Completed",
                      },
                      {
                        project: "Logo Design Package",
                        amount: "$450",
                        date: "Mar 5, 2024",
                        status: "Completed",
                      },
                    ].map((payment) => (
                      <div key={payment.project} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h3 className="font-medium">{payment.project}</h3>
                          <p className="text-sm text-gray-600">{payment.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-green-600">{payment.amount}</p>
                          <p className="text-sm text-gray-600">{payment.status}</p>
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
                    Submit Deliverable
                    <FileText className="h-4 w-4" />
                  </Button>
                  <Button className="w-full justify-between" variant="outline">
                    Message Clients
                    <MessageSquare className="h-4 w-4" />
                  </Button>
                  <Button className="w-full justify-between" variant="outline">
                    View Proposals
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Upcoming Deadlines</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        title: "UI Design Review",
                        date: "Tomorrow, 3:00 PM",
                        priority: "high",
                      },
                      {
                        title: "Client Meeting",
                        date: "Mar 15, 10:00 AM",
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
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default FreelancerDashboard;
