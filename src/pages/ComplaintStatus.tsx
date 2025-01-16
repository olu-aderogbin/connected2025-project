import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Clock, CheckCircle, XCircle } from "lucide-react";

const ComplaintStatus = () => {
  const mockComplaints = [
    {
      id: "1",
      subject: "Technical Issue with Upload Feature",
      category: "Technical Issue",
      status: "In Progress",
      date: "2024-02-15",
      lastUpdate: "2024-02-16",
      reference: "TECH-2024-001",
    },
    {
      id: "2",
      subject: "Payment Not Processed",
      category: "Payment Issue",
      status: "Resolved",
      date: "2024-02-10",
      lastUpdate: "2024-02-12",
      reference: "PAY-2024-023",
    },
    {
      id: "3",
      subject: "Account Access Problem",
      category: "Account Problem",
      status: "Pending",
      date: "2024-02-17",
      lastUpdate: "2024-02-17",
      reference: "ACC-2024-045",
    },
  ];

  const getStatusBadge = (status: string) => {
    const statusStyles = {
      "Pending": "bg-yellow-100 text-yellow-800",
      "In Progress": "bg-blue-100 text-blue-800",
      "Resolved": "bg-green-100 text-green-800",
      "Closed": "bg-gray-100 text-gray-800",
    };
    return statusStyles[status as keyof typeof statusStyles] || "bg-gray-100 text-gray-800";
  };

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">My Complaints</h1>
            <Button variant="outline" asChild>
              <a href="/report-complaint">New Complaint</a>
            </Button>
          </div>

          <div className="space-y-4">
            {mockComplaints.map((complaint) => (
              <Card key={complaint.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{complaint.subject}</h3>
                        <Badge className={getStatusBadge(complaint.status)}>
                          {complaint.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-500">
                        Reference: {complaint.reference}
                      </p>
                      <p className="text-sm text-gray-500">
                        Category: {complaint.category}
                      </p>
                    </div>
                    <div className="text-right text-sm text-gray-500">
                      <p>Submitted: {complaint.date}</p>
                      <p>Last Update: {complaint.lastUpdate}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-4">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4" />
                      Add Comment
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      View History
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ComplaintStatus;