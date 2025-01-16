import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Filter } from "lucide-react";

const MenteeManagement = () => {
  const mockMentees = [
    {
      id: 1,
      name: "John Doe",
      status: "Active",
      program: "Software Development",
      joinedDate: "2024-01-15",
      nextSession: "2024-03-20",
    },
    {
      id: 2,
      name: "Jane Smith",
      status: "Pending",
      program: "UX Design",
      joinedDate: "2024-02-01",
      nextSession: "2024-03-22",
    },
  ];

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Mentee Management</h1>
          <Button>Add New Mentee</Button>
        </div>

        <div className="flex gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input className="pl-10" placeholder="Search mentees..." />
          </div>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>

        <div className="bg-white rounded-lg shadow">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Mentee</TableHead>
                <TableHead>Program</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Joined Date</TableHead>
                <TableHead>Next Session</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockMentees.map((mentee) => (
                <TableRow key={mentee.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src="" />
                        <AvatarFallback>{mentee.name.slice(0, 2)}</AvatarFallback>
                      </Avatar>
                      <span>{mentee.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{mentee.program}</TableCell>
                  <TableCell>
                    <Badge variant={mentee.status === "Active" ? "default" : "secondary"}>
                      {mentee.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{mentee.joinedDate}</TableCell>
                  <TableCell>{mentee.nextSession}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">View</Button>
                      <Button variant="outline" size="sm">Schedule</Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MenteeManagement;