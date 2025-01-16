import { RouteObject } from "react-router-dom";
import AnalyticsDashboard from "@/pages/employer/AnalyticsDashboard";
import BillingHistory from "@/pages/employer/BillingHistory";
import CandidatePools from "@/pages/employer/CandidatePools";
import CandidateSearch from "@/pages/employer/CandidateSearch";
import CompanyProfileSetup from "@/pages/employer/CompanyProfileSetup";
import CompanyReviews from "@/pages/employer/CompanyReviews";
import InterviewSchedule from "@/pages/employer/InterviewSchedule";
import JobTemplates from "@/pages/employer/JobTemplates";
import ManageApplications from "@/pages/employer/ManageApplications";
import MessageCenter from "@/pages/employer/MessageCenter";
import PostOpportunity from "@/pages/employer/PostOpportunity";
import TeamManagement from "@/pages/employer/TeamManagement";

export const employerRoutes: RouteObject[] = [
  { path: "/employer/analytics", element: <AnalyticsDashboard /> },
  { path: "/employer/billing", element: <BillingHistory /> },
  { path: "/employer/candidates", element: <CandidatePools /> },
  { path: "/employer/search", element: <CandidateSearch /> },
  { path: "/employer/profile-setup", element: <CompanyProfileSetup /> },
  { path: "/employer/reviews", element: <CompanyReviews /> },
  { path: "/employer/interviews", element: <InterviewSchedule /> },
  { path: "/employer/templates", element: <JobTemplates /> },
  { path: "/employer/applications", element: <ManageApplications /> },
  { path: "/employer/messages", element: <MessageCenter /> },
  { path: "/employer/post", element: <PostOpportunity /> },
  { path: "/employer/team", element: <TeamManagement /> },
];