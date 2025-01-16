import { RouteObject } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";
import MentorDashboard from "@/pages/MentorDashboard";
import FreelancerDashboard from "@/pages/FreelancerDashboard";
import EmployerDashboard from "@/pages/EmployerDashboard";
import CareerOfficerDashboard from "@/pages/CareerOfficerDashboard";

export const dashboardRoutes: RouteObject[] = [
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/mentor-dashboard", element: <MentorDashboard /> },
  { path: "/freelancer-dashboard", element: <FreelancerDashboard /> },
  { path: "/employer-dashboard", element: <EmployerDashboard /> },
  { path: "/career-officer-dashboard", element: <CareerOfficerDashboard /> },
];