import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Bell, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export default function Notifications() {
  const notifications = [
    {
      id: 1,
      type: "reminder",
      title: "Upcoming Mentorship Session",
      message: "Your session with John Doe is scheduled for tomorrow at 3 PM",
      time: "1 hour ago",
      icon: Clock,
      read: false
    },
    {
      id: 2,
      type: "success",
      title: "Application Accepted",
      message: "Your internship application at Tech Corp has been accepted",
      time: "2 hours ago",
      icon: CheckCircle,
      read: false
    },
    {
      id: 3,
      type: "alert",
      title: "Complete Your Profile",
      message: "Add your skills and experience to increase visibility to employers",
      time: "1 day ago",
      icon: AlertCircle,
      read: true
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <Bell className="h-8 w-8 text-primary" />
              Notifications
            </h1>
            <Button variant="outline" size="sm">
              Mark all as read
            </Button>
          </div>

          <ScrollArea className="h-[600px] rounded-md border">
            <div className="p-4">
              {notifications.map((notification, index) => (
                <div key={notification.id}>
                  <div className={`flex gap-4 p-4 ${notification.read ? 'opacity-60' : ''}`}>
                    <div className="flex-shrink-0">
                      <notification.icon className={`h-6 w-6 ${
                        notification.type === 'success' ? 'text-green-500' :
                        notification.type === 'alert' ? 'text-orange-500' :
                        'text-blue-500'
                      }`} />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-semibold">{notification.title}</h3>
                      <p className="text-gray-600 mt-1">{notification.message}</p>
                      <span className="text-sm text-gray-500 mt-2 block">{notification.time}</span>
                    </div>
                    {!notification.read && (
                      <div className="flex-shrink-0">
                        <div className="h-2 w-2 bg-primary rounded-full"></div>
                      </div>
                    )}
                  </div>
                  {index < notifications.length - 1 && <Separator />}
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </main>

      <Footer />
    </div>
  );
}