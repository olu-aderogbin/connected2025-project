import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MessageSquare } from "lucide-react";

const NewForumTopic = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Topic created",
      description: "Your topic has been created successfully.",
    });
  };

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-2 mb-6">
          <MessageSquare className="h-6 w-6 text-primary" />
          <h1 className="text-3xl font-bold">Create New Topic</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Topic Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Category</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="career">Career Development</SelectItem>
                    <SelectItem value="internships">Internships</SelectItem>
                    <SelectItem value="freelancing">Freelancing</SelectItem>
                    <SelectItem value="mentorship">Mentorship</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Title</label>
                <Input placeholder="Enter topic title" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Content</label>
                <Textarea
                  placeholder="Write your topic content here..."
                  className="min-h-[200px]"
                />
              </div>

              <div className="flex justify-end gap-4">
                <Button variant="outline">Cancel</Button>
                <Button type="submit">Create Topic</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default NewForumTopic;