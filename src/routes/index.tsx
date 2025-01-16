import { RouteObject } from "react-router-dom";

// Page imports
import Index from "@/pages/Index";
import Signup from "@/pages/Signup";
import PasswordRecovery from "@/pages/PasswordRecovery";
import Dashboard from "@/pages/Dashboard";
import FreelancerDashboard from "@/pages/FreelancerDashboard";
import EmployerDashboard from "@/pages/EmployerDashboard";
import MentorDashboard from "@/pages/MentorDashboard";
import CareerOfficerDashboard from "@/pages/CareerOfficerDashboard";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";
import Blog from "@/pages/Blog";
import HelpCenter from "@/pages/HelpCenter";
import UserProfile from "@/pages/UserProfile";
import ProfileEdit from "@/pages/ProfileEdit";
import Notifications from "@/pages/Notifications";
import MessagingInbox from "@/pages/MessagingInbox";

// Student pages
import ProfileSetup from "@/pages/student/ProfileSetup";
import InternshipListings from "@/pages/student/InternshipListings";
import FindMentor from "@/pages/student/FindMentor";
import ScholarshipSearch from "@/pages/student/ScholarshipSearch";
import SkillsAssessment from "@/pages/student/SkillsAssessment";
import CareerPathPlanning from "@/pages/student/CareerPathPlanning";
import PeerNetwork from "@/pages/student/PeerNetwork";
import Reviews from "@/pages/student/Reviews";
import InternshipStatus from "@/pages/student/InternshipStatus";
import ScholarshipStatus from "@/pages/student/ScholarshipStatus";
import MentorStatus from "@/pages/student/MentorStatus";
import LearningResources from "@/pages/student/LearningResources";
import Settings from "@/pages/student/Settings";

// Freelancer pages
import FreelancerProfileSetup from "@/pages/freelancer/ProfileSetup";
import GigListings from "@/pages/freelancer/GigListings";
import ApplyGig from "@/pages/freelancer/ApplyGig";
import ApplicationsTracker from "@/pages/freelancer/ApplicationsTracker";
import ReviewsRatings from "@/pages/freelancer/ReviewsRatings";
import EarningHistory from "@/pages/freelancer/EarningHistory";

// Payment pages
import EmployerPayment from "@/pages/payments/EmployerPayment";

// Employer pages
import CompanyProfileSetup from "@/pages/employer/CompanyProfileSetup";
import PostOpportunity from "@/pages/employer/PostOpportunity";
import ManageApplications from "@/pages/employer/ManageApplications";
import CandidateSearch from "@/pages/employer/CandidateSearch";
import AnalyticsDashboard from "@/pages/employer/AnalyticsDashboard";
import InterviewSchedule from "@/pages/employer/InterviewSchedule";
import TeamManagement from "@/pages/employer/TeamManagement";
import CandidatePools from "@/pages/employer/CandidatePools";
import MessageCenter from "@/pages/employer/MessageCenter";
import CompanyReviews from "@/pages/employer/CompanyReviews";
import JobTemplates from "@/pages/employer/JobTemplates";
import BillingHistory from "@/pages/employer/BillingHistory";

// Community pages
import Forums from "@/pages/Forums";
import ForumCategory from "@/pages/ForumCategory";
import ForumTopicDetail from "@/pages/ForumTopicDetail";
import NewForumTopic from "@/pages/NewForumTopic";
import Groups from "@/pages/Groups";
import GroupDetail from "@/pages/GroupDetail";
import CreateGroup from "@/pages/CreateGroup";
import SearchResults from "@/pages/SearchResults";

// Support pages
import ReportComplaint from "@/pages/ReportComplaint";
import ComplaintStatus from "@/pages/ComplaintStatus";

// Career Officer pages
import InstitutionProfile from "@/pages/career-officer/InstitutionProfile";
import StudentManagement from "@/pages/career-officer/StudentManagement";
import OpportunityManagement from "@/pages/career-officer/OpportunityManagement";
import CommunicationCenter from "@/pages/career-officer/CommunicationCenter";

// Main routes
export const mainRoutes: RouteObject[] = [
  { path: "/", element: <Index /> },
  { path: "/signup", element: <Signup /> },
  { path: "/password-recovery", element: <PasswordRecovery /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/faq", element: <FAQ /> },
  { path: "/blog", element: <Blog /> },
  { path: "/help", element: <HelpCenter /> },
];

// Dashboard routes
export const dashboardRoutes: RouteObject[] = [
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/freelancer-dashboard", element: <FreelancerDashboard /> },
  { path: "/employer-dashboard", element: <EmployerDashboard /> },
  { path: "/mentor-dashboard", element: <MentorDashboard /> },
  { path: "/career-officer-dashboard", element: <CareerOfficerDashboard /> },
];

// User routes
export const userRoutes: RouteObject[] = [
  { path: "/profile", element: <UserProfile /> },
  { path: "/profile/edit", element: <ProfileEdit /> },
  { path: "/notifications", element: <Notifications /> },
  { path: "/messages", element: <MessagingInbox /> },
];

// Student routes
export const studentRoutes: RouteObject[] = [
  { path: "/student/profile-setup", element: <ProfileSetup /> },
  { path: "/student/internships", element: <InternshipListings /> },
  { path: "/student/find-mentor", element: <FindMentor /> },
  { path: "/student/scholarships", element: <ScholarshipSearch /> },
  { path: "/student/skills-assessment", element: <SkillsAssessment /> },
  { path: "/student/career-planning", element: <CareerPathPlanning /> },
  { path: "/student/peer-network", element: <PeerNetwork /> },
  { path: "/student/reviews", element: <Reviews /> },
  { path: "/student/internship-status", element: <InternshipStatus /> },
  { path: "/student/scholarship-status", element: <ScholarshipStatus /> },
  { path: "/student/mentor-status", element: <MentorStatus /> },
  { path: "/student/learning-resources", element: <LearningResources /> },
  { path: "/student/settings", element: <Settings /> },
];

// Freelancer routes
export const freelancerRoutes: RouteObject[] = [
  { path: "/freelancer/profile-setup", element: <FreelancerProfileSetup /> },
  { path: "/freelancer/gigs", element: <GigListings /> },
  { path: "/freelancer/gigs/:id/apply", element: <ApplyGig /> },
  { path: "/freelancer/applications", element: <ApplicationsTracker /> },
  { path: "/freelancer/reviews", element: <ReviewsRatings /> },
  { path: "/freelancer/earnings", element: <EarningHistory /> },
];

// Payment routes
export const paymentRoutes: RouteObject[] = [
  { path: "/payments/employer", element: <EmployerPayment /> },
];

// Employer routes
export const employerRoutes: RouteObject[] = [
  { path: "/employer/profile-setup", element: <CompanyProfileSetup /> },
  { path: "/employer/post-opportunity", element: <PostOpportunity /> },
  { path: "/employer/applications", element: <ManageApplications /> },
  { path: "/employer/candidates", element: <CandidateSearch /> },
  { path: "/employer/payments", element: <EmployerPayment /> },
  { path: "/employer/analytics", element: <AnalyticsDashboard /> },
  { path: "/employer/interviews", element: <InterviewSchedule /> },
  { path: "/employer/team", element: <TeamManagement /> },
  { path: "/employer/candidate-pools", element: <CandidatePools /> },
  { path: "/employer/messages", element: <MessageCenter /> },
  { path: "/employer/reviews", element: <CompanyReviews /> },
  { path: "/employer/job-templates", element: <JobTemplates /> },
  { path: "/employer/billing-history", element: <BillingHistory /> },
];

// Community routes
export const communityRoutes: RouteObject[] = [
  { path: "/forums", element: <Forums /> },
  { path: "/forums/category/:id", element: <ForumCategory /> },
  { path: "/forums/topic/:id", element: <ForumTopicDetail /> },
  { path: "/forums/new", element: <NewForumTopic /> },
  { path: "/groups", element: <Groups /> },
  { path: "/groups/:id", element: <GroupDetail /> },
  { path: "/groups/create", element: <CreateGroup /> },
  { path: "/search", element: <SearchResults /> },
];

// Support routes
export const supportRoutes: RouteObject[] = [
  { path: "/report-complaint", element: <ReportComplaint /> },
  { path: "/complaint-status", element: <ComplaintStatus /> },
];

// Career Officer routes
export const careerOfficerRoutes: RouteObject[] = [
  { path: "/career-officer/institution-profile", element: <InstitutionProfile /> },
  { path: "/career-officer/students", element: <StudentManagement /> },
  { path: "/career-officer/opportunities", element: <OpportunityManagement /> },
  { path: "/career-officer/communication", element: <CommunicationCenter /> },
];

// Combine all routes
export const routes: RouteObject[] = [
  ...mainRoutes,
  ...dashboardRoutes,
  ...userRoutes,
  ...studentRoutes,
  ...freelancerRoutes,
  ...employerRoutes,
  ...paymentRoutes,
  ...communityRoutes,
  ...supportRoutes,
  ...careerOfficerRoutes,
];
