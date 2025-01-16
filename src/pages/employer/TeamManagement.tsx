import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Plus, UserPlus } from "lucide-react";

const TeamManagement = () => {
  const team = [
    {
      id: 1,
      name: "Sarah Wilson",
      role: "HR Manager",
      email: "sarah@company.com",
      phone: "+1 234 567 890",
      avatar: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Mike Johnson",
      role: "Recruiter",
      email: "mike@company.com",
      phone: "+1 234 567 891",
      avatar: "/placeholder.svg",
    },
  ];

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Team Management</h1>
          <Button>
            <UserPlus className="mr-2 h-4 w-4" />
            Add Team Member
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {team.map((member) => (
            <Card key={member.id}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={member.avatar} />
                    <AvatarFallback>{member.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{member.name}</h3>
                      <Badge variant="secondary">{member.role}</Badge>
                    </div>
                    <div className="mt-2 space-y-1 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        {member.email}
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        {member.phone}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          
          <Card className="border-dashed">
            <CardContent className="p-6">
              <Button variant="ghost" className="w-full h-full py-8">
                <Plus className="mr-2 h-4 w-4" />
                Add New Team Member
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TeamManagement;