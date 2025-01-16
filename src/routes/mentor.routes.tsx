import { RouteObject } from "react-router-dom";
import MentorProfileSetup from "@/pages/mentor/MentorProfileSetup";
import MenteeManagement from "@/pages/mentor/MenteeManagement";
import SessionScheduling from "@/pages/mentor/SessionScheduling";

export const mentorRoutes: RouteObject[] = [
  { path: "/mentor/profile-setup", element: <MentorProfileSetup /> },
  { path: "/mentor/mentees", element: <MenteeManagement /> },
  { path: "/mentor/schedule", element: <SessionScheduling /> },
];