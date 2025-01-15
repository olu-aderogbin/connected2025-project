import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MessageSquare, Search, Send, Phone, Video, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Avatar } from "@/components/ui/avatar";

export default function MessagingInbox() {
  const conversations = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Career Mentor",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      lastMessage: "Looking forward to our next session!",
      time: "2m ago",
      unread: 2
    },
    {
      id: 2,
      name: "Tech Corp HR",
      role: "Employer",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      lastMessage: "Your application has been reviewed...",
      time: "1h ago",
      unread: 0
    },
    {
      id: 3,
      name: "John Smith",
      role: "Student Peer",
      avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
      lastMessage: "Thanks for the study group invite!",
      time: "1d ago",
      unread: 0
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-12 h-[700px]">
            {/* Sidebar */}
            <div className="col-span-4 border-r">
              <div className="p-4">
                <h1 className="text-2xl font-bold flex items-center gap-2 mb-4">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  Messages
                </h1>
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input 
                    placeholder="Search conversations..." 
                    className="pl-10"
                  />
                </div>
              </div>
              
              <ScrollArea className="h-[600px]">
                {conversations.map((conversation, index) => (
                  <div key={conversation.id}>
                    <div className="p-4 hover:bg-gray-50 cursor-pointer">
                      <div className="flex gap-3">
                        <Avatar className="h-12 w-12">
                          <img src={conversation.avatar} alt={conversation.name} />
                        </Avatar>
                        <div className="flex-grow">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold">{conversation.name}</h3>
                              <p className="text-sm text-gray-500">{conversation.role}</p>
                            </div>
                            <span className="text-xs text-gray-500">{conversation.time}</span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1 truncate">
                            {conversation.lastMessage}
                          </p>
                        </div>
                        {conversation.unread > 0 && (
                          <div className="flex-shrink-0">
                            <span className="bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                              {conversation.unread}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    {index < conversations.length - 1 && <Separator />}
                  </div>
                ))}
              </ScrollArea>
            </div>

            {/* Chat Area */}
            <div className="col-span-8 flex flex-col">
              <div className="p-4 border-b flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <img src={conversations[0].avatar} alt={conversations[0].name} />
                  </Avatar>
                  <div>
                    <h2 className="font-semibold">{conversations[0].name}</h2>
                    <p className="text-sm text-gray-500">{conversations[0].role}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Phone className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Video className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <ScrollArea className="flex-grow p-4">
                {/* Chat messages would go here */}
                <div className="space-y-4">
                  <p className="text-center text-sm text-gray-500">Today</p>
                  {/* Example messages */}
                  <div className="flex justify-end">
                    <div className="bg-primary text-white rounded-lg p-3 max-w-[70%]">
                      Hi Dr. Johnson, I've completed the career assessment you recommended.
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-lg p-3 max-w-[70%]">
                      That's great! Let's discuss the results in our next session.
                    </div>
                  </div>
                </div>
              </ScrollArea>

              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Input 
                    placeholder="Type your message..." 
                    className="flex-grow"
                  />
                  <Button>
                    <Send className="h-4 w-4" />
                    <span className="ml-2">Send</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}