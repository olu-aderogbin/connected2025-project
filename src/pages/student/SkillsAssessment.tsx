import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Target, BookOpen, ChartBar } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const SkillsAssessment = () => {
  const skillCategories = [
    {
      id: 1,
      name: "Technical Skills",
      progress: 75,
      skills: ["Programming", "Data Analysis", "Web Development"],
    },
    {
      id: 2,
      name: "Soft Skills",
      progress: 85,
      skills: ["Communication", "Leadership", "Team Work"],
    },
    {
      id: 3,
      name: "Industry Knowledge",
      progress: 60,
      skills: ["Project Management", "Agile Methodologies", "Business Analysis"],
    },
  ];

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Target className="h-8 w-8 text-primary" />
            Skills Assessment
          </h1>
          <Button className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            Take New Assessment
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Overall Progress</CardTitle>
              <CardDescription>Your skill development journey</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {skillCategories.map((category) => (
                  <div key={category.id}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{category.name}</span>
                      <span className="text-gray-500">{category.progress}%</span>
                    </div>
                    <Progress value={category.progress} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Skill Breakdown</CardTitle>
              <CardDescription>Detailed view of your skills</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {skillCategories.map((category) => (
                  <div key={category.id} className="space-y-2">
                    <h3 className="font-medium flex items-center gap-2">
                      <ChartBar className="h-4 w-4 text-primary" />
                      {category.name}
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {category.skills.map((skill, index) => (
                        <div
                          key={index}
                          className="bg-gray-100 rounded-md p-2 text-sm"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SkillsAssessment;