import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, CheckCircle, AlertCircle, Clock } from "lucide-react";

const ScholarshipStatus = () => {
  const applications = [
    {
      name: "STEM Excellence Scholarship",
      amount: "$5,000",
      status: "pending",
      deadline: "2024-04-15",
    },
    {
      name: "Future Leaders Grant",
      amount: "$3,000",
      status: "accepted",
      deadline: "2024-03-30",
    },
    {
      name: "Tech Innovation Award",
      amount: "$2,500",
      status: "rejected",
      deadline: "2024-03-20",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case "accepted":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "rejected":
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            Scholarship Status
          </h1>
        </div>

        <div className="grid gap-6">
          {applications.map((app, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{app.name}</CardTitle>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(app.status)}
                    <span className="capitalize">{app.status}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">Amount: {app.amount}</p>
                    <p className="text-sm text-gray-500">Deadline: {app.deadline}</p>
                  </div>
                  <Button variant="outline">View Details</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ScholarshipStatus;