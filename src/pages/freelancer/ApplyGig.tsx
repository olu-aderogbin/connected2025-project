import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { Briefcase, DollarSign, Clock, ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const ApplyGig = () => {
  const { id } = useParams();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted",
      description: "Your application has been successfully submitted.",
    });
  };

  // Mock gig data - in a real app, this would be fetched based on the ID
  const gig = {
    title: "React Developer Needed for E-commerce Project",
    company: "TechCorp Inc.",
    budget: "$2000-$3000",
    duration: "2-3 months",
    skills: ["React", "TypeScript", "Node.js"],
    description: "We're looking for an experienced React developer to help build our e-commerce platform...",
  };

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <Link to="/freelancer/gigs" className="flex items-center gap-2 text-gray-600 mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Gigs
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h1 className="text-3xl font-bold mb-6">{gig.title}</h1>
            
            <div className="flex gap-4 mb-6">
              <Badge variant="secondary">{gig.company}</Badge>
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-gray-400" />
                <span>{gig.budget}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gray-400" />
                <span>{gig.duration}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {gig.skills.map((skill) => (
                <Badge key={skill} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>

            <p className="text-gray-600 mb-8">{gig.description}</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="coverLetter">Cover Letter</Label>
                <Textarea
                  id="coverLetter"
                  placeholder="Explain why you're the best fit for this role"
                  className="h-48"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="rate">Proposed Rate ($)</Label>
                <Input id="rate" type="number" placeholder="Enter your rate" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="availability">Available Start Date</Label>
                <Input id="availability" type="date" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeEstimate">Time Estimate (hours)</Label>
                <Input id="timeEstimate" type="number" placeholder="Estimated hours to complete" />
              </div>

              <div className="pt-4">
                <Button type="submit" className="w-full md:w-auto">
                  Submit Application
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ApplyGig;