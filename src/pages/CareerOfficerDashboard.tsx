import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
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
  Users,
  Briefcase,
  ChartBar,
  Mail,
  FileText,
  MessageSquare,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const CareerOfficerDashboard = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <header className="border-b bg-white sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-primary">ConnectED</h1>
              <nav className="hidden md:flex space-x-6">
                <Link to="/students" className="text-gray-600 hover:text-primary">Students</Link>
                <Link to="/opportunities" className="text-gray-600 hover:text-primary">Opportunities</Link>
                <Link to="/analytics" className="text-gray-600 hover:text-primary">Analytics</Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="h-5 w-5 text-gray-600 cursor-pointer" />
              <Users className="h-5 w-5 text-gray-600 cursor-pointer" />
            </div>
          </div>
        </header>

        <div className="flex-grow">
          <main className="container mx-auto px-4 py-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Welcome back, Career Officer!</h1>
              <p className="text-gray-600">Monitor student engagement and opportunities</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Active Students</CardTitle>
                  <Users className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">256</div>
                  <p className="text-xs text-gray-600">+12 this month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Open Opportunities</CardTitle>
                  <Briefcase className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">45</div>
                  <p className="text-xs text-gray-600">Across all categories</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Placement Rate</CardTitle>
                  <ChartBar className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">78%</div>
                  <p className="text-xs text-green-600">+5% from last quarter</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Communications</CardTitle>
                  <Mail className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">128</div>
                  <p className="text-xs text-gray-600">Messages this week</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Recent Student Activities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Student</TableHead>
                          <TableHead>Activity</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          {
                            name: "James Wilson",
                            activity: "Applied for Internship",
                            date: "Today",
                            status: "Pending",
                          },
                          {
                            name: "Maria Rodriguez",
                            activity: "Completed Profile",
                            date: "Yesterday",
                            status: "Completed",
                          },
                        ].map((activity) => (
                          <TableRow key={activity.name}>
                            <TableCell className="font-medium">{activity.name}</TableCell>
                            <TableCell>{activity.activity}</TableCell>
                            <TableCell>{activity.date}</TableCell>
                            <TableCell>
                              <span className="px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                                {activity.status}
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
                    <CardTitle className="text-xl">Latest Opportunities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          title: "Software Engineering Internship",
                          company: "Tech Corp",
                          applicants: "15 students applied",
                        },
                        {
                          title: "Marketing Assistant",
                          company: "Global Brands Inc",
                          applicants: "8 students applied",
                        },
                      ].map((opportunity) => (
                        <div key={opportunity.title} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <h3 className="font-medium">{opportunity.title}</h3>
                            <p className="text-sm text-gray-600">{opportunity.company}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-600">{opportunity.applicants}</p>
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
                      Post Announcement
                      <FileText className="h-4 w-4" />
                    </Button>
                    <Button className="w-full justify-between" variant="outline">
                      Message Students
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                    <Button className="w-full justify-between" variant="outline">
                      View Reports
                      <ChartBar className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Engagement Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          metric: "Profile Completion",
                          value: "85%",
                          trend: "+5% this month",
                        },
                        {
                          metric: "Application Rate",
                          value: "68%",
                          trend: "+3% this month",
                        },
                      ].map((metric) => (
                        <div key={metric.metric} className="p-4 border rounded-lg">
                          <h3 className="font-medium">{metric.metric}</h3>
                          <div className="flex justify-between items-center mt-2">
                            <span className="text-2xl font-bold">{metric.value}</span>
                            <span className="text-sm text-green-600">{metric.trend}</span>
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
      </main>
      <Footer />
    </div>
  );
};

export default CareerOfficerDashboard;
