import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, User, Video } from "lucide-react";

const InterviewSchedule = () => {
  const interviews = [
    {
      id: 1,
      candidate: "John Doe",
      position: "Frontend Developer",
      date: "2024-03-20",
      time: "10:00 AM",
      type: "Video Call",
    },
    {
      id: 2,
      candidate: "Jane Smith",
      position: "UX Designer",
      date: "2024-03-21",
      time: "2:00 PM",
      type: "In-person",
    },
  ];

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Interview Schedule</h1>
          <Button>Schedule New Interview</Button>
        </div>

        <div className="space-y-4">
          {interviews.map((interview) => (
            <Card key={interview.id}>
              <CardContent className="flex items-center justify-between p-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{interview.candidate}</h3>
                    <p className="text-sm text-gray-500">{interview.position}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span>{interview.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span>{interview.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Video className="h-4 w-4 text-gray-500" />
                    <span>{interview.type}</span>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default InterviewSchedule;