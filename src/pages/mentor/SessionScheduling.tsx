import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar as CalendarIcon } from "lucide-react";
import { useState } from "react";

const SessionScheduling = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const mockSessions = [
    {
      id: 1,
      mentee: "John Doe",
      time: "10:00 AM",
      duration: "1 hour",
      topic: "Career Planning",
      status: "Upcoming",
    },
    {
      id: 2,
      mentee: "Jane Smith",
      time: "2:00 PM",
      duration: "45 minutes",
      topic: "Technical Review",
      status: "Completed",
    },
  ];

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Session Scheduling</h1>
          <Button>Schedule New Session</Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Calendar</CardTitle>
                <CardDescription>Select a date to view or schedule sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Sessions</CardTitle>
                <CardDescription>Upcoming and recent sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockSessions.map((session) => (
                    <div
                      key={session.id}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src="" />
                          <AvatarFallback>{session.mentee.slice(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium">{session.mentee}</h3>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Clock className="h-4 w-4" />
                            <span>{session.time}</span>
                            <span>•</span>
                            <span>{session.duration}</span>
                          </div>
                          <div className="text-sm text-gray-500">{session.topic}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge variant={session.status === "Upcoming" ? "default" : "secondary"}>
                          {session.status}
                        </Badge>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SessionScheduling;