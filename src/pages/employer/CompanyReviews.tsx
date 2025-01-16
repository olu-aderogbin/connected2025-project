import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ThumbsUp, ThumbsDown, MessageSquare } from "lucide-react";

const CompanyReviews = () => {
  const reviews = [
    {
      id: 1,
      author: "Former Intern",
      rating: 4,
      date: "2024-03-15",
      title: "Great learning experience",
      content: "Had an amazing internship experience. Learned a lot from the team.",
      helpful: 12,
      notHelpful: 2,
    },
    {
      id: 2,
      author: "Project Hire",
      rating: 5,
      date: "2024-03-14",
      title: "Excellent work culture",
      content: "The team was very supportive and the projects were interesting.",
      helpful: 8,
      notHelpful: 1,
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Company Reviews & Ratings</h1>
          <Button>
            <MessageSquare className="mr-2 h-4 w-4" />
            Respond to Reviews
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Overall Rating</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">4.5</div>
                <div className="flex justify-center gap-1 mb-4">
                  {renderStars(4.5)}
                </div>
                <p className="text-sm text-gray-500">Based on 45 reviews</p>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <div className="space-y-4">
              {reviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <Badge variant="secondary">{review.author}</Badge>
                        <span className="text-sm text-gray-500 ml-2">{review.date}</span>
                      </div>
                      <div className="flex gap-1">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                    <h3 className="font-semibold mb-2">{review.title}</h3>
                    <p className="text-gray-600 mb-4">{review.content}</p>
                    <div className="flex items-center gap-4">
                      <Button variant="outline" size="sm">
                        <ThumbsUp className="mr-2 h-4 w-4" />
                        Helpful ({review.helpful})
                      </Button>
                      <Button variant="outline" size="sm">
                        <ThumbsDown className="mr-2 h-4 w-4" />
                        Not Helpful ({review.notHelpful})
                      </Button>
                      <Button variant="ghost" size="sm">
                        Reply
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CompanyReviews;