import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Briefcase, DollarSign, Calendar, MapPin } from "lucide-react";

const PostOpportunity = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Opportunity Posted",
      description: "Your opportunity has been successfully posted.",
    });
  };

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Briefcase className="h-8 w-8 text-primary" />
            Post New Opportunity
          </h1>

          <Card>
            <CardHeader>
              <CardTitle>Opportunity Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="type">Opportunity Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="internship">Internship</SelectItem>
                      <SelectItem value="gig">Freelance Gig</SelectItem>
                      <SelectItem value="parttime">Part-time Job</SelectItem>
                      <SelectItem value="fulltime">Full-time Job</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" placeholder="e.g., Frontend Developer Intern" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe the role and responsibilities"
                    className="h-32"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input id="location" className="pl-10" placeholder="City, Country or Remote" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="duration">Duration</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input id="duration" className="pl-10" placeholder="e.g., 3 months" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="compensation">Compensation</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input id="compensation" className="pl-10" placeholder="e.g., $20/hr or $2000/month" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="deadline">Application Deadline</Label>
                    <Input type="date" id="deadline" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="skills">Required Skills</Label>
                  <Input id="skills" placeholder="e.g., React, Node.js, TypeScript" />
                </div>

                <Button type="submit" className="w-full md:w-auto">
                  Post Opportunity
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PostOpportunity;