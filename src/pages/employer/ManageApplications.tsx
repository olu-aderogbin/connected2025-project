import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Filter, UserCheck, UserX, MessageSquare } from "lucide-react";

const ManageApplications = () => {
  const applications = [
    {
      id: 1,
      name: "John Doe",
      role: "Frontend Developer Intern",
      status: "pending",
      appliedDate: "2024-03-15",
      avatar: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "UX Designer",
      status: "interviewed",
      appliedDate: "2024-03-14",
      avatar: "/placeholder.svg",
    },
    // Add more mock data as needed
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      pending: "bg-yellow-100 text-yellow-800",
      interviewed: "bg-blue-100 text-blue-800",
      accepted: "bg-green-100 text-green-800",
      rejected: "bg-red-100 text-red-800",
    };
    return (
      <Badge className={styles[status as keyof typeof styles]}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Manage Applications</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Total Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">42</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Pending Review</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-yellow-600">15</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Interviews Scheduled</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-blue-600">8</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input className="pl-10" placeholder="Search applications..." />
            </div>
            <Select>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="interviewed">Interviewed</SelectItem>
                <SelectItem value="accepted">Accepted</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            {applications.map((application) => (
              <div
                key={application.id}
                className="border rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={application.avatar} />
                      <AvatarFallback>{application.name.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{application.name}</h3>
                      <p className="text-sm text-gray-600">{application.role}</p>
                      <p className="text-sm text-gray-500">Applied: {application.appliedDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {getStatusBadge(application.status)}
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon">
                        <MessageSquare className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="text-green-600">
                        <UserCheck className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="text-red-600">
                        <UserX className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ManageApplications;