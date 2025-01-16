import { RouteObject } from "react-router-dom";
import CommunicationCenter from "@/pages/career-officer/CommunicationCenter";
import InstitutionProfile from "@/pages/career-officer/InstitutionProfile";
import OpportunityManagement from "@/pages/career-officer/OpportunityManagement";
import StudentManagement from "@/pages/career-officer/StudentManagement";

export const careerOfficerRoutes: RouteObject[] = [
  { path: "/career-officer/communication", element: <CommunicationCenter /> },
  { path: "/career-officer/institution", element: <InstitutionProfile /> },
  { path: "/career-officer/opportunities", element: <OpportunityManagement /> },
  { path: "/career-officer/students", element: <StudentManagement /> },
];