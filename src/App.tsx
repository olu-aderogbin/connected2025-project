import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Signup from "./pages/Signup";
import PasswordRecovery from "./pages/PasswordRecovery";
import Dashboard from "./pages/Dashboard";
import FreelancerDashboard from "./pages/FreelancerDashboard";
import EmployerDashboard from "./pages/EmployerDashboard";
import MentorDashboard from "./pages/MentorDashboard";
import CareerOfficerDashboard from "./pages/CareerOfficerDashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import HelpCenter from "./pages/HelpCenter";
import UserProfile from "./pages/UserProfile";
import ProfileEdit from "./pages/ProfileEdit";
import Notifications from "./pages/Notifications";
import MessagingInbox from "./pages/MessagingInbox";

// Student pages
import ProfileSetup from "./pages/student/ProfileSetup";
import InternshipListings from "./pages/student/InternshipListings";
import FindMentor from "./pages/student/FindMentor";
import ScholarshipSearch from "./pages/student/ScholarshipSearch";
import SkillsAssessment from "./pages/student/SkillsAssessment";
import CareerPathPlanning from "./pages/student/CareerPathPlanning";
import PeerNetwork from "./pages/student/PeerNetwork";
import Reviews from "./pages/student/Reviews";
import InternshipStatus from "./pages/student/InternshipStatus";
import ScholarshipStatus from "./pages/student/ScholarshipStatus";
import MentorStatus from "./pages/student/MentorStatus";
import LearningResources from "./pages/student/LearningResources";
import Settings from "./pages/student/Settings";

// Freelancer pages
import FreelancerProfileSetup from "./pages/freelancer/ProfileSetup";
import GigListings from "./pages/freelancer/GigListings";
import ApplyGig from "./pages/freelancer/ApplyGig";
import ApplicationsTracker from "./pages/freelancer/ApplicationsTracker";
import ReviewsRatings from "./pages/freelancer/ReviewsRatings";
import EarningHistory from "./pages/freelancer/EarningHistory";

// Payment pages
import EmployerPayment from "./pages/payments/EmployerPayment";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/password-recovery" element={<PasswordRecovery />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/freelancer-dashboard" element={<FreelancerDashboard />} />
          <Route path="/employer-dashboard" element={<EmployerDashboard />} />
          <Route path="/mentor-dashboard" element={<MentorDashboard />} />
          <Route path="/career-officer-dashboard" element={<CareerOfficerDashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/profile/edit" element={<ProfileEdit />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/messages" element={<MessagingInbox />} />
          
          {/* New student routes */}
          <Route path="/student/internship-status" element={<InternshipStatus />} />
          <Route path="/student/scholarship-status" element={<ScholarshipStatus />} />
          <Route path="/student/mentor-status" element={<MentorStatus />} />
          <Route path="/student/learning-resources" element={<LearningResources />} />
          <Route path="/student/settings" element={<Settings />} />
          
          {/* Student routes */}
          <Route path="/student/profile-setup" element={<ProfileSetup />} />
          <Route path="/student/internships" element={<InternshipListings />} />
          <Route path="/student/find-mentor" element={<FindMentor />} />
          <Route path="/student/scholarships" element={<ScholarshipSearch />} />
          <Route path="/student/skills-assessment" element={<SkillsAssessment />} />
          <Route path="/student/career-planning" element={<CareerPathPlanning />} />
          <Route path="/student/peer-network" element={<PeerNetwork />} />
          <Route path="/student/reviews" element={<Reviews />} />
          
          {/* New freelancer routes */}
          <Route path="/freelancer/profile-setup" element={<FreelancerProfileSetup />} />
          <Route path="/freelancer/gigs" element={<GigListings />} />
          <Route path="/freelancer/gigs/:id/apply" element={<ApplyGig />} />
          <Route path="/freelancer/applications" element={<ApplicationsTracker />} />
          <Route path="/freelancer/reviews" element={<ReviewsRatings />} />
          <Route path="/freelancer/earnings" element={<EarningHistory />} />
          
          {/* Payment routes */}
          <Route path="/payments/employer" element={<EmployerPayment />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
