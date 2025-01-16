import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Bell, Users, Plus } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CommunicationCenter = () => {
  const mockAnnouncements = [
    {
      id: 1,
      title: "New Scholarship Opportunity",
      type: "Announcement",
      date: "2024-03-15",
      status: "Published",
    },
    {
      id: 2,
      title: "Career Fair Next Month",
      type: "Event",
      date: "2024-03-10",
      status: "Draft",
    },
  ];

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">Communication Center</h1>
            <p className="text-gray-600">Manage announcements, updates, and discussions</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Announcement
          </Button>
        </div>

        <Tabs defaultValue="announcements" className="space-y-6">
          <TabsList>
            <TabsTrigger value="announcements">Announcements</TabsTrigger>
            <TabsTrigger value="discussions">Discussions</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
          </TabsList>

          <TabsContent value="announcements">
            <Card>
              <CardHeader>
                <CardTitle>Recent Announcements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockAnnouncements.map((announcement) => (
                    <Card key={announcement.id}>
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold">{announcement.title}</h3>
                            <p className="text-sm text-gray-500">
                              Posted on {announcement.date}
                            </p>
                          </div>
                          <Badge variant={announcement.status === "Published" ? "secondary" : "outline"}>
                            {announcement.status}
                          </Badge>
                        </div>
                        <div className="flex gap-2 mt-4">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm">
                            Delete
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="discussions">
            <Card>
              <CardHeader>
                <CardTitle>Discussion Forums</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button className="w-full justify-start" variant="outline">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Career Development
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Users className="mr-2 h-4 w-4" />
                    Student Activities
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Bell className="mr-2 h-4 w-4" />
                    Announcements & Updates
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default CommunicationCenter;