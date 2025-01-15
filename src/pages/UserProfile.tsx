import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Edit, MapPin, Mail, Briefcase, GraduationCap, Link as LinkIcon } from "lucide-react";
import { Link } from "react-router-dom";

const UserProfile = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative mb-8">
            <div className="h-48 bg-gradient-to-r from-primary to-primary/60 rounded-t-lg"></div>
            <div className="absolute -bottom-16 left-8">
              <Avatar className="h-32 w-32 border-4 border-white">
                <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
            <div className="absolute top-4 right-4">
              <Link to="/profile/edit">
                <Button variant="secondary">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 pt-20">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">Jane Doe</h1>
                <p className="text-gray-600 flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  San Francisco, CA
                </p>
              </div>
              <Badge variant="secondary">Student</Badge>
            </div>

            <p className="text-gray-700 mb-6">
              Computer Science student passionate about web development and AI. Looking for internship opportunities
              to apply my skills and learn from industry experts.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="flex items-center text-gray-600">
                    <Mail className="h-4 w-4 mr-2" />
                    jane.doe@example.com
                  </p>
                  <p className="flex items-center text-gray-600">
                    <LinkIcon className="h-4 w-4 mr-2" />
                    linkedin.com/in/janedoe
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Education</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-start">
                    <GraduationCap className="h-4 w-4 mr-2 mt-1" />
                    <div>
                      <p className="font-medium">BSc Computer Science</p>
                      <p className="text-sm text-gray-600">Stanford University</p>
                      <p className="text-sm text-gray-600">2021 - Present</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {["React", "TypeScript", "Node.js", "Python", "UI/UX Design", "Git"].map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Experience</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Briefcase className="h-4 w-4 mr-2 mt-1" />
                    <div>
                      <p className="font-medium">Software Development Intern</p>
                      <p className="text-sm text-gray-600">Tech Corp</p>
                      <p className="text-sm text-gray-600">Summer 2023</p>
                      <p className="text-sm text-gray-700 mt-1">
                        Worked on frontend development using React and TypeScript.
                        Implemented new features and fixed bugs in the main product.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UserProfile;