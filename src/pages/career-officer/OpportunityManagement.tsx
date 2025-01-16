import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Filter } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const OpportunityManagement = () => {
  const mockOpportunities = [
    {
      id: 1,
      title: "Summer Research Program",
      type: "Research",
      deadline: "2024-05-01",
      status: "Active",
      applicants: 15,
    },
    {
      id: 2,
      title: "Teaching Assistant Position",
      type: "Part-time",
      deadline: "2024-04-15",
      status: "Draft",
      applicants: 0,
    },
  ];

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">Opportunity Management</h1>
            <p className="text-gray-600">Create and manage institutional opportunities</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Opportunity
          </Button>
        </div>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input className="pl-9" placeholder="Search opportunities..." />
              </div>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Opportunities List</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Deadline</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Applicants</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockOpportunities.map((opportunity) => (
                  <TableRow key={opportunity.id}>
                    <TableCell>{opportunity.title}</TableCell>
                    <TableCell>{opportunity.type}</TableCell>
                    <TableCell>{opportunity.deadline}</TableCell>
                    <TableCell>
                      <Badge variant={opportunity.status === "Active" ? "secondary" : "outline"}>
                        {opportunity.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{opportunity.applicants}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default OpportunityManagement;