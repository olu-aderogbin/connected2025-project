import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, MapPin, Briefcase, GraduationCap, Star } from "lucide-react";

const CandidateSearch = () => {
  const candidates = [
    {
      id: 1,
      name: "Alex Johnson",
      title: "Frontend Developer",
      location: "San Francisco, CA",
      education: "BS Computer Science",
      skills: ["React", "TypeScript", "Node.js"],
      experience: "2 years",
      avatar: "/placeholder.svg",
    },
    // Add more mock data as needed
  ];

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Find Candidates</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="md:col-span-3 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input className="pl-10" placeholder="Search by skills, title, or keywords..." />
          </div>
          <Button>Search Candidates</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="space-y-6">
            <Card className="p-4">
              <h2 className="font-semibold mb-4">Filters</h2>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Location</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sf">San Francisco</SelectItem>
                      <SelectItem value="ny">New York</SelectItem>
                      <SelectItem value="remote">Remote</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Experience Level</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="entry">Entry Level</SelectItem>
                      <SelectItem value="mid">Mid Level</SelectItem>
                      <SelectItem value="senior">Senior Level</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Skills</label>
                  <Input placeholder="Add skills" />
                </div>

                <Button variant="outline" className="w-full">
                  Clear Filters
                </Button>
              </div>
            </Card>
          </div>

          <div className="md:col-span-3 space-y-4">
            {candidates.map((candidate) => (
              <Card key={candidate.id} className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={candidate.avatar} />
                      <AvatarFallback>{candidate.name.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{candidate.name}</h3>
                      <p className="text-sm text-gray-600">{candidate.title}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                        <MapPin className="h-4 w-4" />
                        {candidate.location}
                      </div>
                    </div>
                  </div>
                  <Button>View Profile</Button>
                </div>

                <div className="mt-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <GraduationCap className="h-4 w-4" />
                    {candidate.education}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <Briefcase className="h-4 w-4" />
                    {candidate.experience} experience
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {candidate.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CandidateSearch;