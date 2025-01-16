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
  MessageSquare,
  Plus,
  Search,
  Users,
  MessageCircle,
  Eye,
} from "lucide-react";
import { Link } from "react-router-dom";

const Forums = () => {
  const forumCategories = [
    {
      id: 1,
      title: "Career Development",
      description: "Discuss career growth and professional development",
      topics: 156,
      posts: 1234,
    },
    {
      id: 2,
      title: "Internship Experiences",
      description: "Share and learn from internship experiences",
      topics: 89,
      posts: 567,
    },
    {
      id: 3,
      title: "Freelancing Tips",
      description: "Exchange freelancing best practices and advice",
      topics: 234,
      posts: 890,
    },
  ];

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <MessageSquare className="h-8 w-8 text-primary" />
            Forums
          </h1>
          <Link to="/forums/new">
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              New Discussion
            </Button>
          </Link>
        </div>

        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <Input
              className="pl-10"
              placeholder="Search forums..."
            />
          </div>
        </div>

        <div className="grid gap-6">
          {forumCategories.map((category) => (
            <Link key={category.id} to={`/forums/category/${category.id}`}>
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    {category.title}
                  </CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-6 text-sm text-gray-600">
                    <span className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4" />
                      {category.topics} Topics
                    </span>
                    <span className="flex items-center gap-2">
                      <Eye className="h-4 w-4" />
                      {category.posts} Posts
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Forums;