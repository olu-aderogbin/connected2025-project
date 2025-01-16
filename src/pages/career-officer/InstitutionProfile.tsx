import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Users, MapPin, Mail, Phone, Globe } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const InstitutionProfile = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile Updated",
      description: "Institution profile has been successfully updated.",
    });
  };

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">Institution Profile</h1>
            <p className="text-gray-600">Manage your institution's information and settings</p>
          </div>
          <Button onClick={() => window.location.href = "/career-officer/students"}>
            <Users className="mr-2 h-4 w-4" />
            View Students
          </Button>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Institution Information</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name">Institution Name</label>
                      <Input id="name" placeholder="Enter institution name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="website">Website</label>
                      <Input id="website" type="url" placeholder="https://" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email">Email</label>
                      <Input id="email" type="email" placeholder="contact@institution.edu" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone">Phone</label>
                      <Input id="phone" type="tel" placeholder="Phone number" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="address">Address</label>
                    <Input id="address" placeholder="Institution address" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="description">About Institution</label>
                    <Textarea
                      id="description"
                      placeholder="Tell us about your institution"
                      className="h-32"
                    />
                  </div>

                  <Button type="submit">Save Changes</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default InstitutionProfile;