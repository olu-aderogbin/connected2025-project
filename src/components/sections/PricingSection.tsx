import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export const PricingSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#E5DEFF] to-white" id="pricing">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-4">Simple, Transparent Pricing</h3>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Choose the plan that best fits your needs. All plans include core features.
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h4 className="text-xl font-semibold mb-4">Student</h4>
            <p className="text-4xl font-bold mb-6">Free</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Basic Profile</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Job Search</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Limited Applications</span>
              </li>
            </ul>
            <Button className="w-full">Get Started</Button>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#8B5CF6] text-white px-4 py-1 rounded-full text-sm">
              Most Popular
            </div>
            <h4 className="text-xl font-semibold mb-4">Professional</h4>
            <p className="text-4xl font-bold mb-6">$19<span className="text-lg">/mo</span></p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Enhanced Profile</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Priority Applications</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Mentorship Access</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Skills Assessment</span>
              </li>
            </ul>
            <Button className="w-full bg-[#8B5CF6] hover:bg-[#7E69AB]">Start Free Trial</Button>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h4 className="text-xl font-semibold mb-4">Enterprise</h4>
            <p className="text-4xl font-bold mb-6">Custom</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>All Pro Features</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Custom Integration</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Dedicated Support</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Analytics Dashboard</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full">Contact Sales</Button>
          </div>
        </div>
      </div>
    </section>
  );
};