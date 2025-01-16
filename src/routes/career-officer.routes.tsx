import { RouteObject } from "react-router-dom";
import {
  CommunicationCenter,
  InstitutionProfile,
  OpportunityManagement,
  StudentManagement
} from "@/pages/career-officer";

export const careerOfficerRoutes: RouteObject[] = [
  { path: "/career-officer/communication", element: <CommunicationCenter /> },
  { path: "/career-officer/institution", element: <InstitutionProfile /> },
  { path: "/career-officer/opportunities", element: <OpportunityManagement /> },
  { path: "/career-officer/students", element: <StudentManagement /> },
];