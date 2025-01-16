import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Award, Search, Filter, GraduationCap } from "lucide-react";
import { useState } from "react";

const ScholarshipSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const mockScholarships = [
    {
      id: 1,
      title: "STEM Excellence Scholarship",
      amount: "$5,000",
      deadline: "2024-05-01",
      category: "Engineering",
      requirements: "3.5 GPA, Engineering Major",
    },
    {
      id: 2,
      title: "Future Leaders Grant",
      amount: "$3,000",
      deadline: "2024-06-15",
      category: "Leadership",
      requirements: "Leadership experience, Essay required",
    },
    {
      id: 3,
      title: "Digital Innovation Award",
      amount: "$4,500",
      deadline: "2024-05-30",
      category: "Technology",
      requirements: "Computer Science/IT Major, Project portfolio",
    },
  ];

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Award className="h-8 w-8 text-primary" />
            Scholarship Search
          </h1>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search scholarships..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" /> Filters
            </Button>
          </div>

          <div className="grid gap-6">
            {mockScholarships.map((scholarship) => (
              <div
                key={scholarship.id}
                className="border rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      {scholarship.title}
                    </h3>
                    <p className="text-gray-600 mb-2">Amount: {scholarship.amount}</p>
                    <p className="text-gray-600 mb-2">Category: {scholarship.category}</p>
                  </div>
                  <Button>Apply Now</Button>
                </div>
                <div className="text-sm text-gray-500">
                  <p>Requirements: {scholarship.requirements}</p>
                  <p className="mt-2">Deadline: {scholarship.deadline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ScholarshipSearch;