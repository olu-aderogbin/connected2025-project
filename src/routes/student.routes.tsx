import { RouteObject } from "react-router-dom";
import { 
  CareerPathPlanning,
  FindMentor,
  InternshipListings,
  InternshipStatus,
  LearningResources,
  MentorStatus,
  PeerNetwork,
  ProfileSetup,
  Reviews,
  ScholarshipSearch,
  ScholarshipStatus,
  Settings,
  SkillsAssessment
} from "@/pages/student";

export const studentRoutes: RouteObject[] = [
  { path: "/student/career-planning", element: <CareerPathPlanning /> },
  { path: "/student/find-mentor", element: <FindMentor /> },
  { path: "/student/internships", element: <InternshipListings /> },
  { path: "/student/internship-status", element: <InternshipStatus /> },
  { path: "/student/learning-resources", element: <LearningResources /> },
  { path: "/student/mentor-status", element: <MentorStatus /> },
  { path: "/student/peer-network", element: <PeerNetwork /> },
  { path: "/student/profile-setup", element: <ProfileSetup /> },
  { path: "/student/reviews", element: <Reviews /> },
  { path: "/student/scholarship-search", element: <ScholarshipSearch /> },
  { path: "/student/scholarship-status", element: <ScholarshipStatus /> },
  { path: "/student/settings", element: <Settings /> },
  { path: "/student/skills-assessment", element: <SkillsAssessment /> },
];