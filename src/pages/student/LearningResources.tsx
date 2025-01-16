import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  BookOpen, Video, FileText, Download, Play,
  Clock, CheckCircle, Star, Bookmark, Filter
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LearningResources = () => {
  const resources = [
    {
      title: "Web Development Fundamentals",
      type: "course",
      format: "Video Series",
      duration: "6 hours",
      progress: 45,
      level: "Beginner",
      rating: 4.8,
      reviews: 128,
      topics: ["HTML", "CSS", "JavaScript"],
      instructor: "Sarah Johnson",
      lastAccessed: "2 days ago"
    },
    {
      title: "UI/UX Design Principles",
      type: "guide",
      format: "PDF Guide",
      pages: 45,
      progress: 75,
      level: "Intermediate",
      rating: 4.9,
      reviews: 89,
      topics: ["Design Theory", "User Research", "Prototyping"],
      author: "Michael Chen",
      lastAccessed: "1 week ago"
    },
    {
      title: "JavaScript Best Practices",
      type: "course",
      format: "Interactive Course",
      duration: "4 hours",
      progress: 20,
      level: "Advanced",
      rating: 4.7,
      reviews: 156,
      topics: ["ES6+", "Performance", "Clean Code"],
      instructor: "David Smith",
      lastAccessed: "3 days ago"
    }
  ];

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <BookOpen className="h-8 w-8 text-primary" />
              Learning Resources
            </h1>
            <p className="text-gray-600 mt-2">Access educational materials and track your progress</p>
          </div>
          <div className="flex gap-3">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Resources</SelectItem>
                <SelectItem value="courses">Courses</SelectItem>
                <SelectItem value="guides">Guides</SelectItem>
                <SelectItem value="tutorials">Tutorials</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} className="hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge>
                    {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                  </Badge>
                  <Button variant="ghost" size="icon">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </div>
                <CardTitle className="text-xl">{resource.title}</CardTitle>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  {resource.instructor || resource.author}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {resource.duration || `${resource.pages} pages`}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400" />
                      {resource.rating} ({resource.reviews})
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {resource.topics.map((topic, i) => (
                      <Badge key={i} variant="secondary">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{resource.progress}%</span>
                    </div>
                    <Progress value={resource.progress} className="h-2" />
                  </div>
                  
                  <div className="flex gap-3">
                    <Button className="flex-1">
                      {resource.type === "course" ? (
                        <>
                          <Play className="h-4 w-4 mr-2" />
                          Continue Learning
                        </>
                      ) : (
                        <>
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </>
                      )}
                    </Button>
                    <Button variant="outline" className="flex-1">View Details</Button>
                  </div>
                  
                  <p className="text-sm text-gray-500 text-center">
                    Last accessed {resource.lastAccessed}
                  </p>
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