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
  Users,
  Plus,
  Search,
  UserPlus,
  MessageSquare,
} from "lucide-react";
import { Link } from "react-router-dom";

const Groups = () => {
  const groups = [
    {
      id: 1,
      name: "Tech Innovators",
      description: "A community of tech enthusiasts and innovators",
      members: 234,
      discussions: 56,
      category: "Technology",
    },
    {
      id: 2,
      name: "Creative Freelancers",
      description: "Connect with creative professionals worldwide",
      members: 189,
      discussions: 45,
      category: "Creative Arts",
    },
  ];

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Users className="h-8 w-8 text-primary" />
            Groups
          </h1>
          <Link to="/groups/create">
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Create Group
            </Button>
          </Link>
        </div>

        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <Input
              className="pl-10"
              placeholder="Search groups..."
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {groups.map((group) => (
            <Card key={group.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle>{group.name}</CardTitle>
                <CardDescription>{group.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      {group.members} Members
                    </p>
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <MessageSquare className="h-4 w-4" />
                      {group.discussions} Discussions
                    </p>
                  </div>
                  <Link to={`/groups/${group.id}`}>
                    <Button variant="outline" className="flex items-center gap-2">
                      <UserPlus className="h-4 w-4" />
                      Join Group
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Groups;