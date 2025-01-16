import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Plus, Star } from "lucide-react";

const CandidatePools = () => {
  const pools = [
    {
      id: 1,
      name: "Frontend Developers",
      count: 24,
      lastUpdated: "2024-03-15",
      tags: ["React", "TypeScript", "UI/UX"],
    },
    {
      id: 2,
      name: "UX Designers",
      count: 18,
      lastUpdated: "2024-03-14",
      tags: ["Figma", "User Research", "Prototyping"],
    },
  ];

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Candidate Pools</h1>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create New Pool
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pools.map((pool) => (
            <Card key={pool.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    {pool.name}
                  </CardTitle>
                  <Button variant="ghost" size="icon">
                    <Star className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-2xl font-bold">{pool.count}</p>
                    <p className="text-sm text-gray-500">Candidates</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Last updated: {pool.lastUpdated}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {pool.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full">
                    View Pool
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          
          <Card className="border-dashed">
            <CardContent className="p-6">
              <Button variant="ghost" className="w-full h-full py-8">
                <Plus className="mr-2 h-4 w-4" />
                Create New Pool
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CandidatePools;