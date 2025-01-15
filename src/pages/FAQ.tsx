import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function FAQ() {
  const faqCategories = {
    students: [
      {
        question: "How do I create a student profile?",
        answer: "Sign up using your academic email, complete your profile with education details, skills, and career interests. Upload a professional photo and relevant documents to enhance your profile visibility."
      },
      {
        question: "How can I find internships and freelance opportunities?",
        answer: "Use our search feature with filters for location, industry, and role type. Save searches and set up alerts for new opportunities matching your criteria."
      },
      {
        question: "How do I connect with mentors?",
        answer: "Browse mentor profiles, filter by industry and expertise, and send connection requests. Clearly state your goals and what you hope to learn from the mentorship."
      }
    ],
    employers: [
      {
        question: "How do I post job opportunities?",
        answer: "Create an employer account, verify your business, and use our posting interface to detail job requirements, compensation, and application process. You can also schedule posts and set application deadlines."
      },
      {
        question: "What are the costs for posting jobs?",
        answer: "Basic job posts are free. Premium features like featured listings and advanced candidate filtering are available through our subscription plans."
      },
      {
        question: "How do I manage applications?",
        answer: "Access your employer dashboard to view, sort, and respond to applications. Use our built-in tools for scheduling interviews and communicating with candidates."
      }
    ],
    institutions: [
      {
        question: "How do we set up an institutional account?",
        answer: "Contact our institutional partnerships team to verify your organization and set up administrator access. You'll then be able to manage student access and track engagement."
      },
      {
        question: "What analytics are available?",
        answer: "Track student engagement, application success rates, and popular opportunity types. Generate reports on placement rates and skill development trends."
      },
      {
        question: "How can we promote our opportunities?",
        answer: "Use our institutional dashboard to post opportunities, schedule events, and send targeted notifications to relevant student groups."
      }
    ],
    mentors: [
      {
        question: "How do I become a mentor?",
        answer: "Create a mentor profile highlighting your expertise and experience. Complete our mentor verification process and set your availability for mentee connections."
      },
      {
        question: "What is the time commitment?",
        answer: "You set your own availability and mentoring style. Most mentors spend 2-4 hours per month per mentee through our flexible scheduling system."
      },
      {
        question: "How are mentor-mentee matches made?",
        answer: "Our matching algorithm considers industry alignment, skills, goals, and mutual availability to suggest compatible matches."
      }
    ],
    freelancers: [
      {
        question: "How do I find freelance projects?",
        answer: "Browse our gig marketplace using filters for skills, budget, and project duration. Set up alerts for projects matching your expertise."
      },
      {
        question: "How does payment work?",
        answer: "We use a secure escrow system. Clients deposit funds before work begins, and payment is released upon successful project completion."
      },
      {
        question: "How do I build my freelancer reputation?",
        answer: "Complete projects successfully, gather client reviews, and maintain a strong portfolio. Our rating system helps showcase your reliability and expertise."
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-accent py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-white/90 text-xl max-w-2xl mx-auto">
              Find answers to common questions about using ConnectED
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="students" className="w-full">
              <TabsList className="w-full flex flex-wrap justify-center gap-2 mb-8">
                <TabsTrigger value="students">Students</TabsTrigger>
                <TabsTrigger value="employers">Employers</TabsTrigger>
                <TabsTrigger value="institutions">Institutions</TabsTrigger>
                <TabsTrigger value="mentors">Mentors</TabsTrigger>
                <TabsTrigger value="freelancers">Freelancers</TabsTrigger>
              </TabsList>

              {Object.entries(faqCategories).map(([category, questions]) => (
                <TabsContent key={category} value={category}>
                  <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                      {questions.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-left">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent>
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}