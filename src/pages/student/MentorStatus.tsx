import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  HeartHandshake, CheckCircle, AlertCircle, Clock, 
  Calendar, MessageSquare, User, Briefcase, GraduationCap 
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MentorStatus = () => {
  const requests = [
    {
      mentor: {
        name: "Sarah Johnson",
        role: "Senior Frontend Developer",
        company: "Tech Giants Inc",
        avatar: "https://example.com/sarah.jpg",
        expertise: ["React", "UI/UX", "Career Development"],
        yearsOfExperience: 8
      },
      status: "pending",
      date: "2024-03-15",
      message: "Interested in learning more about frontend development and career growth in tech.",
      nextStep: "Scheduled Introduction Call",
      nextDate: "2024-03-20"
    },
    {
      mentor: {
        name: "Michael Chen",
        role: "Product Manager",
        company: "Innovation Labs",
        avatar: "https://example.com/michael.jpg",
        expertise: ["Product Strategy", "Agile", "Leadership"],
        yearsOfExperience: 10
      },
      status: "accepted",
      date: "2024-03-10",
      message: "Looking forward to learning about product management and tech leadership.",
      nextMeeting: "Weekly Check-in",
      nextDate: "2024-03-22"
    },
    {
      mentor: {
        name: "Emily Brown",
        role: "UX Design Lead",
        company: "Creative Solutions",
        avatar: "https://example.com/emily.jpg",
        expertise: ["UX Design", "User Research", "Design Systems"],
        yearsOfExperience: 6
      },
      status: "rejected",
      date: "2024-03-05",
      message: "Interested in UX design principles and building a design portfolio.",
      feedback: "Currently at maximum mentee capacity. Please try again next quarter."
    }
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
              <HeartHandshake className="h-8 w-8 text-primary" />
              Mentorship Status
            </h1>
            <p className="text-gray-600 mt-2">Track your mentorship connections and meetings</p>
          </div>
          <Button>Find More Mentors</Button>
        </div>

        <Tabs defaultValue="active" className="mb-6">
          <TabsList>
            <TabsTrigger value="active">Active Requests (2)</TabsTrigger>
            <TabsTrigger value="completed">Past Requests (1)</TabsTrigger>
          </TabsList>
          
          <TabsContent value="active">
            <div className="grid gap-6">
              {requests
                .filter(req => req.status !== "rejected")
                .map((req, index) => (
                <Card key={index} className="hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={req.mentor.avatar} />
                          <AvatarFallback>{req.mentor.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-xl">{req.mentor.name}</CardTitle>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Briefcase className="h-4 w-4" />
                            <span>{req.mentor.role} at {req.mentor.company}</span>
                          </div>
                        </div>
                      </div>
                      {getStatusBadge(req.status)}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {req.mentor.expertise.map((exp, i) => (
                          <Badge key={i} variant="secondary">
                            {exp}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-600">{req.message}</p>
                      </div>
                      
                      <div className="flex items-center gap-6 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          Requested: {req.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <GraduationCap className="h-4 w-4" />
                          {req.mentor.yearsOfExperience}+ years experience
                        </span>
                      </div>
                      
                      {(req.nextStep || req.nextMeeting) && (
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <p className="text-sm font-medium text-blue-800">
                            {req.nextStep || req.nextMeeting}
                          </p>
                          <p className="text-sm text-blue-600">Scheduled for {req.nextDate}</p>
                        </div>
                      )}
                      
                      <div className="flex gap-3">
                        <Button className="flex-1">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Send Message
                        </Button>
                        <Button variant="outline" className="flex-1">View Profile</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="completed">
            <div className="grid gap-6">
              {requests
                .filter(req => req.status === "rejected")
                .map((req, index) => (
                <Card key={index} className="hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={req.mentor.avatar} />
                          <AvatarFallback>{req.mentor.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-xl">{req.mentor.name}</CardTitle>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Briefcase className="h-4 w-4" />
                            <span>{req.mentor.role} at {req.mentor.company}</span>
                          </div>
                        </div>
                      </div>
                      {getStatusBadge(req.status)}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {req.mentor.expertise.map((exp, i) => (
                          <Badge key={i} variant="secondary">
                            {exp}
                          </Badge>
                        ))}
                      </div>
                      
                      {req.feedback && (
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <p className="text-sm text-gray-600">Feedback: {req.feedback}</p>
                        </div>
                      )}
                      
                      <Button variant="outline" className="w-full">Find Similar Mentors</Button>
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

export default MentorStatus;