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

// New student pages
import ProfileSetup from "./pages/student/ProfileSetup";
import InternshipListings from "./pages/student/InternshipListings";
import FindMentor from "./pages/student/FindMentor";

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
          <Route path="/student/profile-setup" element={<ProfileSetup />} />
          <Route path="/student/internships" element={<InternshipListings />} />
          <Route path="/student/find-mentor" element={<FindMentor />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;