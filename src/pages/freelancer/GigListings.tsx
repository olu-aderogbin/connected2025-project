import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Briefcase, DollarSign, Clock, Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";

const GigListings = () => {
  const gigs = [
    {
      id: 1,
      title: "React Developer Needed for E-commerce Project",
      company: "TechCorp Inc.",
      budget: "$2000-$3000",
      duration: "2-3 months",
      skills: ["React", "TypeScript", "Node.js"],
      type: "Fixed Price",
    },
    {
      id: 2,
      title: "UI/UX Designer for Mobile App",
      company: "Design Studio",
      budget: "$50/hr",
      duration: "6 months",
      skills: ["Figma", "UI Design", "Mobile Design"],
      type: "Hourly",
    },
    // Add more gigs as needed
  ];

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Available Gigs</h1>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input className="pl-10" placeholder="Search gigs..." />
          </div>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="development">Development</SelectItem>
              <SelectItem value="design">Design</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-6">
          {gigs.map((gig) => (
            <div key={gig.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-semibold mb-2">{gig.title}</h2>
                  <p className="text-gray-600 mb-2">{gig.company}</p>
                </div>
                <Badge variant="secondary">{gig.type}</Badge>
              </div>

              <div className="flex gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-gray-400" />
                  <span>{gig.budget}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span>{gig.duration}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {gig.skills.map((skill) => (
                  <Badge key={skill} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>

              <Link to={`/freelancer/gigs/${gig.id}/apply`}>
                <Button className="w-full md:w-auto">Apply Now</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default GigListings;