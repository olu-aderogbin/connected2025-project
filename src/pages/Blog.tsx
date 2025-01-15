import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function Blog() {
  const featuredPosts = [
    {
      title: "How to Land Your Dream Internship in Tech",
      category: "Career Development",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      excerpt: "Discover the key strategies that will help you secure that coveted internship position in the tech industry."
    },
    {
      title: "The Rise of Remote Freelancing in Africa",
      category: "Freelancing",
      image: "https://images.unsplash.com/photo-1581092795360-662d53cec7b7",
      author: "Michael Okonjo",
      date: "March 12, 2024",
      excerpt: "Explore how digital transformation is creating new opportunities for African freelancers in the global marketplace."
    },
    {
      title: "Building Effective Mentor-Mentee Relationships",
      category: "Mentorship",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      author: "Dr. Amina Mohammed",
      date: "March 10, 2024",
      excerpt: "Learn the essential elements that make mentorship relationships successful and impactful."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-accent py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">ConnectED Blog</h1>
              <p className="text-xl mb-8">
                Insights, tips, and success stories from our community
              </p>
              <div className="relative max-w-xl mx-auto">
                <Input 
                  placeholder="Search articles..."
                  className="pl-12 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60" />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="text-sm text-primary font-semibold mb-2">
                      {post.category}
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Explore Topics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Career Development", "Student Life", "Industry Insights", "Technology",
                "Entrepreneurship", "Professional Growth", "Success Stories", "Tips & Tricks"
              ].map((category, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-auto py-4 px-6 text-center"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-accent text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest articles, tips, and community updates.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button variant="secondary">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}