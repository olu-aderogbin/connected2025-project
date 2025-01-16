import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Video, FileText, Download } from "lucide-react";

const LearningResources = () => {
  const resources = [
    {
      title: "Web Development Fundamentals",
      type: "course",
      format: "Video Series",
      duration: "6 hours",
      icon: Video,
    },
    {
      title: "UI/UX Design Principles",
      type: "guide",
      format: "PDF Guide",
      pages: 45,
      icon: FileText,
    },
    {
      title: "JavaScript Best Practices",
      type: "course",
      format: "Interactive Course",
      duration: "4 hours",
      icon: BookOpen,
    },
  ];

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <BookOpen className="h-8 w-8 text-primary" />
            Learning Resources
          </h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <resource.icon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">{resource.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">{resource.format}</p>
                    <p className="font-medium">
                      {resource.duration || `${resource.pages} pages`}
                    </p>
                  </div>
                  <Button className="w-full" variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Access Resource
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

export default LearningResources;