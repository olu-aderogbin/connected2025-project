import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ClipboardList, Clock, CheckCircle, XCircle } from "lucide-react";

const ApplicationsTracker = () => {
  const applications = [
    {
      id: 1,
      gigTitle: "React Developer for E-commerce Project",
      company: "TechCorp Inc.",
      status: "Under Review",
      appliedDate: "2024-02-15",
      progress: 30,
    },
    {
      id: 2,
      gigTitle: "UI/UX Designer for Mobile App",
      company: "Design Studio",
      status: "Interview Scheduled",
      appliedDate: "2024-02-10",
      progress: 60,
    },
    {
      id: 3,
      gigTitle: "Frontend Developer",
      company: "StartupX",
      status: "Rejected",
      appliedDate: "2024-02-01",
      progress: 100,
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Under Review":
        return <Badge variant="secondary">{status}</Badge>;
      case "Interview Scheduled":
        return <Badge variant="primary">{status}</Badge>;
      case "Rejected":
        return <Badge variant="destructive">{status}</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-2 mb-8">
          <ClipboardList className="h-6 w-6 text-primary" />
          <h1 className="text-3xl font-bold">Applications Tracker</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Total Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">12</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">In Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">5</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Success Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">75%</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          {applications.map((application) => (
            <Card key={application.id}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{application.gigTitle}</h3>
                    <p className="text-gray-600 mb-2">{application.company}</p>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span className="text-sm">Applied on {application.appliedDate}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    {getStatusBadge(application.status)}
                    <Progress value={application.progress} className="w-32" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ApplicationsTracker;