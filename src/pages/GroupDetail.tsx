import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, MessageSquare, Calendar, Settings } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const GroupDetail = () => {
  const { toast } = useToast();

  const mockGroup = {
    id: 1,
    name: "Tech Innovators Network",
    description: "A community of tech enthusiasts and innovators sharing knowledge and opportunities.",
    members: 234,
    posts: 567,
    events: 12,
    isAdmin: true,
  };

  const handleJoin = () => {
    toast({
      title: "Request sent",
      description: "Your request to join the group has been sent.",
    });
  };

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl">{mockGroup.name}</CardTitle>
                <p className="text-gray-500 mt-2">{mockGroup.description}</p>
              </div>
              {mockGroup.isAdmin ? (
                <Button variant="outline">
                  <Settings className="mr-2 h-4 w-4" />
                  Manage Group
                </Button>
              ) : (
                <Button onClick={handleJoin}>Join Group</Button>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-gray-500" />
                <span>{mockGroup.members} Members</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-gray-500" />
                <span>{mockGroup.posts} Posts</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-gray-500" />
                <span>{mockGroup.events} Events</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="discussions" className="space-y-4">
          <TabsList>
            <TabsTrigger value="discussions">Discussions</TabsTrigger>
            <TabsTrigger value="members">Members</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="files">Files</TabsTrigger>
          </TabsList>

          <TabsContent value="discussions" className="space-y-4">
            <Button>
              <MessageSquare className="mr-2 h-4 w-4" />
              New Discussion
            </Button>
            
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {/* Mock discussions */}
                  <div className="flex items-start gap-4">
                    <Avatar src="/placeholder.svg" alt="User" />
                    <div>
                      <h4 className="font-semibold">Latest Tech Trends 2024</h4>
                      <p className="text-sm text-gray-500">Started by John Doe • 2 days ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="members">
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Mock members */}
                  <div className="flex items-center gap-4">
                    <Avatar src="/placeholder.svg" alt="Member" />
                    <div>
                      <h4 className="font-semibold">Jane Smith</h4>
                      <p className="text-sm text-gray-500">Admin</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default GroupDetail;