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
  Clock,
  MessageCircle,
  ChevronRight,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ForumCategory = () => {
  const { id } = useParams();

  const topics = [
    {
      id: 1,
      title: "Tips for Remote Work Success",
      author: {
        name: "John Doe",
        avatar: "",
      },
      replies: 23,
      lastActivity: "2 hours ago",
    },
    {
      id: 2,
      title: "Building a Professional Portfolio",
      author: {
        name: "Jane Smith",
        avatar: "",
      },
      replies: 15,
      lastActivity: "1 day ago",
    },
  ];

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-2 text-gray-600 mb-6">
          <Link to="/forums">Forums</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-gray-900">Career Development</span>
        </div>

        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <MessageSquare className="h-8 w-8 text-primary" />
            Career Development
          </h1>
          <Link to={`/forums/category/${id}/new`}>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              New Topic
            </Button>
          </Link>
        </div>

        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <Input
              className="pl-10"
              placeholder="Search topics..."
            />
          </div>
        </div>

        <div className="grid gap-4">
          {topics.map((topic) => (
            <Link key={topic.id} to={`/forums/topic/${topic.id}`}>
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={topic.author.avatar} />
                        <AvatarFallback>
                          {topic.author.name.slice(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{topic.title}</h3>
                        <p className="text-sm text-gray-600">
                          by {topic.author.name}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 text-sm text-gray-600">
                      <span className="flex items-center gap-2">
                        <MessageCircle className="h-4 w-4" />
                        {topic.replies} Replies
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {topic.lastActivity}
                      </span>
                    </div>
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

export default ForumCategory;