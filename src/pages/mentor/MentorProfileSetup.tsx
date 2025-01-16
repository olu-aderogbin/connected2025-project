import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Camera, Briefcase, GraduationCap } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const MentorProfileSetup = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile Updated",
      description: "Your mentor profile has been successfully updated.",
    });
  };

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Mentor Profile Setup</h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-center gap-6 mb-8">
              <Avatar className="w-24 h-24">
                <AvatarImage src="" />
                <AvatarFallback>
                  <Camera className="w-8 h-8 text-gray-400" />
                </AvatarFallback>
              </Avatar>
              <Button variant="outline">Change Photo</Button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="expertise">Area of Expertise</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your expertise" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="software">Software Development</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">Years of Experience</Label>
                  <Input id="experience" type="number" min="0" placeholder="Years of experience" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Professional Bio</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell us about your professional background and mentoring style"
                  className="h-32"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Current Company</Label>
                <Input id="company" placeholder="Where do you currently work?" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="title">Job Title</Label>
                <Input id="title" placeholder="Your current job title" />
              </div>

              <div className="pt-4">
                <Button type="submit" className="w-full md:w-auto">
                  Save Profile
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MentorProfileSetup;