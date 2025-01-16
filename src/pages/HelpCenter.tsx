import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search, MessageCircle, Book, FileText, LifeBuoy, AlertCircle } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const HelpCenter = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">How can we help you?</h1>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="search"
                placeholder="Search for help..."
                className="pl-10 py-6"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Book className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Getting Started</CardTitle>
                <CardDescription>New to ConnectED? Start here</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <MessageCircle className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Contact Support</CardTitle>
                <CardDescription>Get in touch with our team</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => window.location.href = '/report-complaint'}>
              <CardHeader>
                <AlertCircle className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Report a Complaint</CardTitle>
                <CardDescription>Submit and track your complaints</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-12">
            <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I create an account?</AccordionTrigger>
                <AccordionContent>
                  Click the "Sign Up" button in the top right corner and follow the registration process. You'll need to verify your email address to complete the setup.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How can I find opportunities?</AccordionTrigger>
                <AccordionContent>
                  After logging in, you can browse opportunities from your dashboard. Use filters to narrow down results based on your interests and qualifications.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How do I contact a mentor?</AccordionTrigger>
                <AccordionContent>
                  Browse the mentors section, find someone who matches your interests, and send them a connection request. Once accepted, you can schedule sessions.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="text-center bg-primary/5 rounded-lg p-8">
            <LifeBuoy className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Still need help?</h2>
            <p className="text-gray-600 mb-4">Our support team is available 24/7 to assist you</p>
            <Button>Contact Support</Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HelpCenter;