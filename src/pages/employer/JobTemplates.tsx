import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Copy, Plus, Clock } from "lucide-react";

const JobTemplates = () => {
  const templates = [
    {
      id: 1,
      title: "Frontend Developer",
      category: "Engineering",
      lastUsed: "2024-03-15",
      timesUsed: 8,
    },
    {
      id: 2,
      title: "UX Designer",
      category: "Design",
      lastUsed: "2024-03-14",
      timesUsed: 5,
    },
  ];

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Job Templates</h1>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Template
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <Card key={template.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    {template.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{template.category}</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {template.lastUsed}
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">
                    Used {template.timesUsed} times
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" className="w-full">
                      <Copy className="mr-2 h-4 w-4" />
                      Use Template
                    </Button>
                    <Button variant="ghost" size="icon">
                      <FileText className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          
          <Card className="border-dashed">
            <CardContent className="p-6">
              <Button variant="ghost" className="w-full h-full py-8">
                <Plus className="mr-2 h-4 w-4" />
                Create New Template
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default JobTemplates;