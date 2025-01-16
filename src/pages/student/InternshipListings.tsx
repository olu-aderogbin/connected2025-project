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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Clock, Building2 } from "lucide-react";

const InternshipListings = () => {
  const mockInternships = [
    {
      id: 1,
      title: "Software Development Intern",
      company: "Tech Corp",
      location: "San Francisco, CA",
      type: "Full-time",
      duration: "3 months",
      description: "Join our engineering team and work on exciting projects...",
      tags: ["React", "TypeScript", "Node.js"],
    },
    {
      id: 2,
      title: "Marketing Intern",
      company: "Global Marketing Inc",
      location: "New York, NY",
      type: "Part-time",
      duration: "6 months",
      description: "Help develop and execute marketing campaigns...",
      tags: ["Social Media", "Content Creation", "Analytics"],
    },
  ];

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold">Internship Opportunities</h1>
            <p className="text-gray-600 mt-2">
              Find the perfect internship to kickstart your career
            </p>
          </div>
          <Button>Save Search</Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Filters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Location</label>
                  <Input placeholder="Enter location" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Industry</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tech">Technology</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Duration</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-3">1-3 months</SelectItem>
                      <SelectItem value="3-6">3-6 months</SelectItem>
                      <SelectItem value="6+">6+ months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3 space-y-6">
            {mockInternships.map((internship) => (
              <Card key={internship.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{internship.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-1">
                        <Building2 className="w-4 h-4" />
                        {internship.company}
                      </CardDescription>
                    </div>
                    <Button>Apply Now</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      {internship.location}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Briefcase className="w-4 h-4" />
                      {internship.type}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      {internship.duration}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{internship.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {internship.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
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

export default InternshipListings;