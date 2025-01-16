import { RouteObject } from "react-router-dom";
import {
  AnalyticsDashboard,
  BillingHistory,
  CandidatePools,
  CandidateSearch,
  CompanyProfileSetup,
  CompanyReviews,
  InterviewSchedule,
  JobTemplates,
  ManageApplications,
  MessageCenter,
  PostOpportunity,
  TeamManagement
} from "@/pages/employer";

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