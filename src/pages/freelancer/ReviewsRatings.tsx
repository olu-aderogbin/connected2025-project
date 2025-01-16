import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, ThumbsUp, MessageSquare } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ReviewsRatings = () => {
  const reviews = [
    {
      id: 1,
      clientName: "John Smith",
      clientAvatar: "",
      rating: 5,
      comment: "Excellent work! Delivered the project ahead of schedule.",
      date: "2024-02-15",
      project: "E-commerce Website Development",
    },
    {
      id: 2,
      clientName: "Sarah Johnson",
      clientAvatar: "",
      rating: 4,
      comment: "Great communication and quality work.",
      date: "2024-02-10",
      project: "Mobile App UI Design",
    },
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
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
        <div className="flex items-center gap-2 mb-8">
          <Star className="h-6 w-6 text-primary" />
          <h1 className="text-3xl font-bold">Reviews & Ratings</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Average Rating</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <p className="text-3xl font-bold">4.8</p>
                <div className="flex">{renderStars(5)}</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Total Reviews</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              <p className="text-3xl font-bold">28</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Satisfaction Rate</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-2">
              <ThumbsUp className="h-5 w-5 text-primary" />
              <p className="text-3xl font-bold">95%</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          {reviews.map((review) => (
            <Card key={review.id}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={review.clientAvatar} />
                    <AvatarFallback>{review.clientName.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <div>
                        <h3 className="font-semibold">{review.clientName}</h3>
                        <p className="text-sm text-gray-600">{review.project}</p>
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <div className="flex mb-2">{renderStars(review.rating)}</div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ReviewsRatings;