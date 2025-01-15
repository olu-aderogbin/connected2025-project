import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Users, Globe, Target } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary to-accent py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Connecting Africa's Future Leaders</h1>
              <p className="text-xl mb-8">Building bridges between talent, opportunities, and growth across the continent.</p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  alt="Team collaboration"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-accent">Our Mission</h2>
                <p className="text-lg text-gray-700 mb-6">
                  ConnectED is dedicated to empowering African students, professionals, and institutions by creating a comprehensive ecosystem that facilitates growth, learning, and opportunity.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Heart className="text-secondary h-6 w-6" />
                    <span className="text-gray-700">Fostering meaningful connections</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="text-secondary h-6 w-6" />
                    <span className="text-gray-700">Building strong communities</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="text-secondary h-6 w-6" />
                    <span className="text-gray-700">Expanding opportunities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-gray-600">Striving for the highest standards in everything we do</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Community</h3>
                <p className="text-gray-600">Building strong networks of support and collaboration</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-gray-600">Embracing new ideas and approaches to solve challenges</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-secondary to-primary py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Join Our Growing Community</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Be part of a movement that's transforming education and career development across Africa.
            </p>
            <Button size="lg" variant="secondary">
              Get Started Today
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}