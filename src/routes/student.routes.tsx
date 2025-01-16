import { RouteObject } from "react-router-dom";
import CareerPathPlanning from "@/pages/student/CareerPathPlanning";
import FindMentor from "@/pages/student/FindMentor";
import InternshipListings from "@/pages/student/InternshipListings";
import InternshipStatus from "@/pages/student/InternshipStatus";
import LearningResources from "@/pages/student/LearningResources";
import MentorStatus from "@/pages/student/MentorStatus";
import PeerNetwork from "@/pages/student/PeerNetwork";
import ProfileSetup from "@/pages/student/ProfileSetup";
import Reviews from "@/pages/student/Reviews";
import ScholarshipSearch from "@/pages/student/ScholarshipSearch";
import ScholarshipStatus from "@/pages/student/ScholarshipStatus";
import Settings from "@/pages/student/Settings";
import SkillsAssessment from "@/pages/student/SkillsAssessment";

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