import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { GitBranch, Target, BookOpen } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CareerPathPlanning = () => {
  const careerPaths = [
    {
      id: 1,
      title: "Software Development",
      description: "Build and maintain software applications",
      skills: ["Programming", "Problem Solving", "Software Design"],
      roles: ["Junior Developer", "Senior Developer", "Tech Lead"],
    },
    {
      id: 2,
      title: "Data Science",
      description: "Analyze and interpret complex data sets",
      skills: ["Statistics", "Machine Learning", "Data Visualization"],
      roles: ["Data Analyst", "Data Scientist", "Lead Data Scientist"],
    },
    {
      id: 3,
      title: "Product Management",
      description: "Guide product development and strategy",
      skills: ["Product Strategy", "User Research", "Agile Management"],
      roles: ["Associate PM", "Product Manager", "Senior PM"],
    },
  ];

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <GitBranch className="h-8 w-8 text-primary" />
            Career Path Planning
          </h1>
          <Button className="flex items-center gap-2">
            <Target className="h-4 w-4" />
            Set Career Goals
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careerPaths.map((path) => (
            <Card key={path.id}>
              <CardHeader>
                <CardTitle>{path.title}</CardTitle>
                <CardDescription>{path.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Key Skills Required:</h4>
                    <div className="flex flex-wrap gap-2">
                      {path.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-primary/10 text-primary text-sm rounded-full px-3 py-1"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Career Progression:</h4>
                    <div className="space-y-2">
                      {path.roles.map((role, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-sm"
                        >
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          {role}
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CareerPathPlanning;