import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HeartHandshake, CheckCircle, AlertCircle, Clock } from "lucide-react";

const MentorStatus = () => {
  const requests = [
    {
      mentor: "Sarah Johnson",
      expertise: "Frontend Development",
      status: "pending",
      date: "2024-03-15",
    },
    {
      mentor: "Michael Chen",
      expertise: "UX Design",
      status: "accepted",
      date: "2024-03-10",
    },
    {
      mentor: "Emily Brown",
      expertise: "Product Management",
      status: "rejected",
      date: "2024-03-05",
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
            <HeartHandshake className="h-8 w-8 text-primary" />
            Mentor Request Status
          </h1>
        </div>

        <div className="grid gap-6">
          {requests.map((request, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{request.mentor}</CardTitle>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(request.status)}
                    <span className="capitalize">{request.status}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">Expertise: {request.expertise}</p>
                    <p className="text-sm text-gray-500">Requested on: {request.date}</p>
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

export default MentorStatus;