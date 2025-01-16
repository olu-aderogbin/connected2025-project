import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  GraduationCap, CheckCircle, AlertCircle, Clock, 
  Calendar, DollarSign, FileText, ExternalLink 
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ScholarshipStatus = () => {
  const applications = [
    {
      name: "STEM Excellence Scholarship",
      provider: "Tech Foundation",
      amount: "$5,000",
      status: "pending",
      deadline: "2024-04-15",
      progress: 60,
      requirements: ["Transcript", "Essay", "Recommendation Letter"],
      completedRequirements: ["Transcript", "Essay"],
      nextStep: "Submit Recommendation Letter",
    },
    {
      name: "Future Leaders Grant",
      provider: "Global Education Fund",
      amount: "$3,000",
      status: "accepted",
      deadline: "2024-03-30",
      progress: 100,
      requirements: ["Application Form", "Portfolio", "Interview"],
      completedRequirements: ["Application Form", "Portfolio", "Interview"],
      nextStep: "Submit Banking Details",
    },
    {
      name: "Tech Innovation Award",
      provider: "Innovation Institute",
      amount: "$2,500",
      status: "rejected",
      deadline: "2024-03-20",
      progress: 100,
      requirements: ["Project Proposal", "Video Presentation"],
      completedRequirements: ["Project Proposal", "Video Presentation"],
      feedback: "High competition this year. Consider reapplying next term.",
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
              <GraduationCap className="h-8 w-8 text-primary" />
              Scholarship Status
            </h1>
            <p className="text-gray-600 mt-2">Track your scholarship applications and requirements</p>
          </div>
          <Button>
            <ExternalLink className="h-4 w-4 mr-2" />
            Find More Scholarships
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
                      <div>
                        <CardTitle className="text-xl">{app.name}</CardTitle>
                        <p className="text-gray-600">{app.provider}</p>
                      </div>
                      {getStatusBadge(app.status)}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-6">
                        <span className="flex items-center gap-2 text-green-600 font-semibold">
                          <DollarSign className="h-5 w-5" />
                          {app.amount}
                        </span>
                        <span className="flex items-center gap-2 text-gray-600">
                          <Calendar className="h-4 w-4" />
                          Deadline: {app.deadline}
                        </span>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Application Progress</span>
                          <span>{app.progress}%</span>
                        </div>
                        <Progress value={app.progress} className="h-2" />
                      </div>
                      
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Requirements:</p>
                        <div className="flex flex-wrap gap-2">
                          {app.requirements.map((req, i) => (
                            <Badge
                              key={i}
                              variant={app.completedRequirements.includes(req) ? "default" : "outline"}
                            >
                              {req}
                              {app.completedRequirements.includes(req) && (
                                <CheckCircle className="h-3 w-3 ml-1" />
                              )}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      {app.nextStep && (
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <p className="text-sm font-medium text-blue-800">Next Step:</p>
                          <p className="text-sm text-blue-600">{app.nextStep}</p>
                        </div>
                      )}
                      
                      <div className="flex gap-3">
                        <Button className="flex-1">
                          <FileText className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                        <Button variant="outline" className="flex-1">Contact Provider</Button>
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
                      <div>
                        <CardTitle className="text-xl">{app.name}</CardTitle>
                        <p className="text-gray-600">{app.provider}</p>
                      </div>
                      {getStatusBadge(app.status)}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-6">
                        <span className="flex items-center gap-2 text-gray-600">
                          <DollarSign className="h-5 w-5" />
                          {app.amount}
                        </span>
                        <span className="flex items-center gap-2 text-gray-600">
                          <Calendar className="h-4 w-4" />
                          Deadline: {app.deadline}
                        </span>
                      </div>
                      
                      {app.feedback && (
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <p className="text-sm text-gray-600">Feedback: {app.feedback}</p>
                        </div>
                      )}
                      
                      <Button variant="outline" className="w-full">Find Similar Scholarships</Button>
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

export default ScholarshipStatus;