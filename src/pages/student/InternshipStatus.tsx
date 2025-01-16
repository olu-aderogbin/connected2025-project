import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { FileText, CheckCircle, AlertCircle, Clock, Building2, Calendar, MapPin, ExternalLink } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const InternshipStatus = () => {
  const applications = [
    {
      company: "Tech Corp",
      position: "Frontend Developer Intern",
      status: "pending",
      date: "2024-03-15",
      progress: 40,
      location: "San Francisco, CA",
      type: "Full-time",
      nextStep: "Technical Interview",
      nextDate: "2024-03-20",
      companyLogo: "https://example.com/techcorp-logo.png"
    },
    {
      company: "Digital Solutions",
      position: "UX Design Intern",
      status: "accepted",
      date: "2024-03-10",
      progress: 100,
      location: "Remote",
      type: "Part-time",
      nextStep: "Onboarding",
      nextDate: "2024-04-01",
      companyLogo: "https://example.com/digitalsolutions-logo.png"
    },
    {
      company: "Innovation Labs",
      position: "Backend Developer Intern",
      status: "rejected",
      date: "2024-03-05",
      progress: 100,
      location: "New York, NY",
      type: "Full-time",
      feedback: "Position filled by another candidate",
      companyLogo: "https://example.com/innovationlabs-logo.png"
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

  const getStatusBadge = (status: string) => {
    const styles = {
      pending: "bg-yellow-100 text-yellow-800",
      accepted: "bg-green-100 text-green-800",
      rejected: "bg-red-100 text-red-800"
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
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <FileText className="h-8 w-8 text-primary" />
              Application Status
            </h1>
            <p className="text-gray-600 mt-2">Track your internship applications and their progress</p>
          </div>
          <Button>
            <ExternalLink className="h-4 w-4 mr-2" />
            View All Jobs
          </Button>
        </div>

        <Tabs defaultValue="active" className="mb-6">
          <TabsList>
            <TabsTrigger value="active">Active Applications (2)</TabsTrigger>
            <TabsTrigger value="completed">Completed (1)</TabsTrigger>
          </TabsList>
          
          <TabsContent value="active">
            <div className="grid gap-6">
              {applications
                .filter(app => app.status !== "rejected")
                .map((app, index) => (
                <Card key={index} className="hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                          <Building2 className="h-6 w-6 text-gray-600" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{app.company}</CardTitle>
                          <p className="text-gray-600">{app.position}</p>
                        </div>
                      </div>
                      {getStatusBadge(app.status)}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-6 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          Applied: {app.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {app.location}
                        </span>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Application Progress</span>
                          <span>{app.progress}%</span>
                        </div>
                        <Progress value={app.progress} className="h-2" />
                      </div>
                      
                      {app.nextStep && (
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <p className="text-sm font-medium text-blue-800">Next Step: {app.nextStep}</p>
                          <p className="text-sm text-blue-600">Scheduled for {app.nextDate}</p>
                        </div>
                      )}
                      
                      <div className="flex gap-3">
                        <Button className="flex-1">View Details</Button>
                        <Button variant="outline" className="flex-1">Contact Recruiter</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="completed">
            <div className="grid gap-6">
              {applications
                .filter(app => app.status === "rejected")
                .map((app, index) => (
                <Card key={index} className="hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                          <Building2 className="h-6 w-6 text-gray-600" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{app.company}</CardTitle>
                          <p className="text-gray-600">{app.position}</p>
                        </div>
                      </div>
                      {getStatusBadge(app.status)}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-6 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          Applied: {app.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {app.location}
                        </span>
                      </div>
                      
                      {app.feedback && (
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <p className="text-sm text-gray-600">Feedback: {app.feedback}</p>
                        </div>
                      )}
                      
                      <Button variant="outline" className="w-full">View Similar Opportunities</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default InternshipStatus;