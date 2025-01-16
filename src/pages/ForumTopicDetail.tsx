import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { MessageCircle, ThumbsUp, Reply, Flag } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ForumTopicDetail = () => {
  const { toast } = useToast();

  const mockTopic = {
    id: 1,
    title: "Tips for Landing Your First Internship",
    author: {
      name: "John Doe",
      avatar: "/placeholder.svg",
    },
    createdAt: "2024-02-20",
    content: "I wanted to share my experience and tips for landing your first internship...",
    replies: [
      {
        id: 1,
        author: {
          name: "Jane Smith",
          avatar: "/placeholder.svg",
        },
        content: "Great tips! I would also add that networking is crucial...",
        createdAt: "2024-02-21",
        likes: 5,
      },
    ],
  };

  const handleReply = () => {
    toast({
      title: "Reply submitted",
      description: "Your reply has been posted successfully.",
    });
  };

  const handleLike = () => {
    toast({
      title: "Post liked",
      description: "You've liked this post.",
    });
  };

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-4 mb-4">
              <Avatar src={mockTopic.author.avatar} alt={mockTopic.author.name} />
              <div>
                <CardTitle>{mockTopic.title}</CardTitle>
                <p className="text-sm text-gray-500">
                  Posted by {mockTopic.author.name} on {mockTopic.createdAt}
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{mockTopic.content}</p>
            <div className="flex gap-4">
              <Button variant="outline" size="sm" onClick={handleLike}>
                <ThumbsUp className="mr-2 h-4 w-4" />
                Like
              </Button>
              <Button variant="outline" size="sm" onClick={handleReply}>
                <Reply className="mr-2 h-4 w-4" />
                Reply
              </Button>
              <Button variant="outline" size="sm">
                <Flag className="mr-2 h-4 w-4" />
                Report
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          {mockTopic.replies.map((reply) => (
            <Card key={reply.id}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Avatar src={reply.author.avatar} alt={reply.author.name} />
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold">{reply.author.name}</h4>
                      <span className="text-sm text-gray-500">{reply.createdAt}</span>
                    </div>
                    <p className="mb-4">{reply.content}</p>
                    <div className="flex gap-4">
                      <Button variant="ghost" size="sm">
                        <ThumbsUp className="mr-2 h-4 w-4" />
                        {reply.likes}
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Reply className="mr-2 h-4 w-4" />
                        Reply
                      </Button>
                    </div>
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

export default ForumTopicDetail;