import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, Briefcase, GraduationCap, Award } from "lucide-react";

const FindMentor = () => {
  const mockMentors = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Senior Software Engineer",
      company: "Tech Giants Inc",
      experience: "10+ years",
      expertise: ["Career Guidance", "Technical Mentorship", "Leadership"],
      rating: 4.8,
      reviews: 24,
      avatar: "",
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Product Manager",
      company: "Innovation Labs",
      experience: "8 years",
      expertise: ["Product Strategy", "UX Design", "Agile"],
      rating: 4.9,
      reviews: 31,
      avatar: "",
    },
  ];

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">Find Your Perfect Mentor</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Connect with experienced professionals who can guide you through your career journey
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <Input
              placeholder="Search by expertise, industry, or keyword"
              className="md:w-96"
            />
            <Button>Search Mentors</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockMentors.map((mentor) => (
              <Card key={mentor.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={mentor.avatar} />
                      <AvatarFallback>{mentor.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="text-xl">{mentor.name}</CardTitle>
                      <CardDescription className="flex flex-col gap-1">
                        <span className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          {mentor.title} at {mentor.company}
                        </span>
                        <span className="flex items-center gap-2">
                          <GraduationCap className="w-4 h-4" />
                          {mentor.experience} of experience
                        </span>
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{mentor.rating}</span>
                      <span className="text-gray-500">({mentor.reviews})</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {mentor.expertise.map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <Button variant="outline">View Profile</Button>
                      <Button>Request Mentorship</Button>
                    </div>
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

export default FindMentor;