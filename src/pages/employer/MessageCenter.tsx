import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Search, MessageSquare } from "lucide-react";

const MessageCenter = () => {
  const conversations = [
    {
      id: 1,
      name: "John Doe",
      lastMessage: "Thank you for considering my application",
      time: "10:30 AM",
      unread: true,
      avatar: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Jane Smith",
      lastMessage: "When would be a good time for the interview?",
      time: "Yesterday",
      unread: false,
      avatar: "/placeholder.svg",
    },
  ];

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Message Center</h1>
          <Button>
            <MessageSquare className="mr-2 h-4 w-4" />
            New Message
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input className="pl-10" placeholder="Search conversations..." />
              </div>
            </div>
            
            <div className="space-y-2">
              {conversations.map((conversation) => (
                <Card 
                  key={conversation.id}
                  className={`cursor-pointer transition-colors hover:bg-accent ${
                    conversation.unread ? 'bg-accent/5' : ''
                  }`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={conversation.avatar} />
                        <AvatarFallback>{conversation.name.slice(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold truncate">{conversation.name}</h3>
                          <span className="text-xs text-gray-500">{conversation.time}</span>
                        </div>
                        <p className="text-sm text-gray-500 truncate">{conversation.lastMessage}</p>
                      </div>
                      {conversation.unread && (
                        <Badge className="ml-2">New</Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <Card className="h-[600px]">
              <CardContent className="p-6 h-full flex items-center justify-center text-gray-500">
                Select a conversation to view messages
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MessageCenter;