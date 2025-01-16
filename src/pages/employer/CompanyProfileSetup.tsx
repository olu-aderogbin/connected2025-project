import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Building, MapPin, Globe, Phone, Mail, Save } from "lucide-react";

const CompanyProfileSetup = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile Updated",
      description: "Your company profile has been successfully updated.",
    });
  };

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Building className="h-8 w-8 text-primary" />
            Company Profile
          </h1>

          <Card>
            <CardHeader>
              <CardTitle>Company Information</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input id="companyName" placeholder="Enter company name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry</Label>
                    <Input id="industry" placeholder="e.g., Technology, Healthcare" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Company Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Tell us about your company"
                    className="h-32"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input id="website" className="pl-10" placeholder="www.example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input id="location" className="pl-10" placeholder="City, Country" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input id="phone" className="pl-10" placeholder="+1 (555) 000-0000" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input id="email" type="email" className="pl-10" placeholder="contact@company.com" />
                    </div>
                  </div>
                </div>

                <Button type="submit" className="w-full md:w-auto">
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CompanyProfileSetup;