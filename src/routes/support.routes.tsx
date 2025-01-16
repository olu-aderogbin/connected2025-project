import { RouteObject } from "react-router-dom";
import FAQ from "@/pages/FAQ";
import HelpCenter from "@/pages/HelpCenter";
import ReportComplaint from "@/pages/ReportComplaint";
import ComplaintStatus from "@/pages/ComplaintStatus";

export const supportRoutes: RouteObject[] = [
  { path: "/faq", element: <FAQ /> },
  { path: "/help", element: <HelpCenter /> },
  { path: "/report", element: <ReportComplaint /> },
  { path: "/complaint-status", element: <ComplaintStatus /> },
];