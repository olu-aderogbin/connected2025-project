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
  Search,
  Filter,
  Briefcase,
  GraduationCap,
  Users,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SearchResults = () => {
  const results = [
    {
      id: 1,
      type: "internship",
      title: "Software Development Intern",
      company: "Tech Corp",
      location: "Remote",
      description: "Join our team as a software development intern...",
    },
    {
      id: 2,
      type: "scholarship",
      title: "STEM Excellence Scholarship",
      provider: "Education Foundation",
      amount: "$5,000",
      deadline: "2024-05-01",
    },
    {
      id: 3,
      type: "mentor",
      name: "Dr. Sarah Johnson",
      expertise: "AI & Machine Learning",
      experience: "15+ years",
      rating: 4.9,
    },
  ];

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Search className="h-8 w-8 text-primary" />
            Search Results
          </h1>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="col-span-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <Input
                className="pl-10"
                placeholder="Search for internships, scholarships, mentors..."
                defaultValue="software development"
              />
            </div>
          </div>
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="internships">Internships</SelectItem>
              <SelectItem value="scholarships">Scholarships</SelectItem>
              <SelectItem value="mentors">Mentors</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-6">
          {results.map((result) => (
            <Card key={result.id} className="hover:shadow-md transition-shadow">
              <CardContent className="py-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {result.type === "internship" && (
                      <Briefcase className="h-6 w-6 text-primary" />
                    )}
                    {result.type === "scholarship" && (
                      <Award className="h-6 w-6 text-primary" />
                    )}
                    {result.type === "mentor" && (
                      <Users className="h-6 w-6 text-primary" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold">
                          {result.title || result.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {result.company ||
                            result.provider ||
                            result.expertise}
                        </p>
                      </div>
                      <Link
                        to={`/${result.type}s/${result.id}`}
                        className="shrink-0"
                      >
                        <Button variant="outline">View Details</Button>
                      </Link>
                    </div>
                    {result.description && (
                      <p className="mt-2 text-sm text-gray-600">
                        {result.description}
                      </p>
                    )}
                    {result.amount && (
                      <p className="mt-2 text-sm text-gray-600">
                        Amount: {result.amount} • Deadline: {result.deadline}
                      </p>
                    )}
                    {result.experience && (
                      <p className="mt-2 text-sm text-gray-600">
                        Experience: {result.experience} • Rating: {result.rating}
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SearchResults;