import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Award, Target, BookOpen, ChartBar, Star } from "lucide-react";
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
      skills: [
        { name: "React", level: 4 },
        { name: "TypeScript", level: 3 },
        { name: "Node.js", level: 4 },
      ],
    },
    {
      id: 2,
      name: "Soft Skills",
      progress: 85,
      skills: [
        { name: "Communication", level: 5 },
        { name: "Problem Solving", level: 4 },
        { name: "Time Management", level: 4 },
      ],
    },
    {
      id: 3,
      name: "Industry Knowledge",
      progress: 60,
      skills: [
        { name: "Agile", level: 3 },
        { name: "DevOps", level: 2 },
        { name: "UI/UX", level: 4 },
      ],
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
              <CardTitle>Skill Ratings</CardTitle>
              <CardDescription>Your proficiency levels</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {skillCategories.map((category) => (
                  <div key={category.id} className="space-y-4">
                    <h3 className="font-medium flex items-center gap-2">
                      <ChartBar className="h-4 w-4 text-primary" />
                      {category.name}
                    </h3>
                    <div className="space-y-3">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="flex items-center justify-between">
                          <span>{skill.name}</span>
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < skill.level ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Recommended Assessments</CardTitle>
              <CardDescription>Take these assessments to showcase your skills</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="h-5 w-5 text-primary" />
                    <h3 className="font-medium">React Advanced Certification</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Validate your React expertise with our comprehensive assessment
                  </p>
                  <Button variant="outline" size="sm">
                    Start Assessment
                  </Button>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="h-5 w-5 text-primary" />
                    <h3 className="font-medium">TypeScript Proficiency Test</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Demonstrate your TypeScript knowledge and earn a certification
                  </p>
                  <Button variant="outline" size="sm">
                    Start Assessment
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SkillsAssessment;