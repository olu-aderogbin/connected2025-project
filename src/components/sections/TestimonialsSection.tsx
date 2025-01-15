export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-4">Success Stories</h3>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          See how ConnectED has helped students and professionals achieve their goals
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              alt="Sarah M."
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <p className="text-gray-600 italic mb-4">
              "Through ConnectED, I found an amazing internship that turned into a full-time role.
              The mentorship program was invaluable for my career growth."
            </p>
            <p className="font-semibold">Sarah M.</p>
            <p className="text-sm text-gray-500">Software Engineer</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
              alt="John D."
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <p className="text-gray-600 italic mb-4">
              "As a freelancer, ConnectED helped me find high-quality clients and maintain a steady
              stream of projects. The platform's tools are fantastic!"
            </p>
            <p className="font-semibold">John D.</p>
            <p className="text-sm text-gray-500">Freelance Designer</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <img 
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
              alt="Emily R."
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <p className="text-gray-600 italic mb-4">
              "The scholarship matching feature helped me secure funding for my studies.
              ConnectED made the entire process smooth and straightforward."
            </p>
            <p className="font-semibold">Emily R.</p>
            <p className="text-sm text-gray-500">Graduate Student</p>
          </div>
        </div>
      </div>
    </section>
  );
};