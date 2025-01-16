import { RouteObject } from "react-router-dom";
import {
  ApplicationsTracker,
  ApplyGig,
  EarningHistory,
  GigListings,
  ProfileSetup,
  ReviewsRatings,
  SkillsAssessment
} from "@/pages/freelancer";

export const freelancerRoutes: RouteObject[] = [
  { path: "/freelancer/applications", element: <ApplicationsTracker /> },
  { path: "/freelancer/gigs/apply", element: <ApplyGig /> },
  { path: "/freelancer/earnings", element: <EarningHistory /> },
  { path: "/freelancer/gigs", element: <GigListings /> },
  { path: "/freelancer/profile-setup", element: <ProfileSetup /> },
  { path: "/freelancer/reviews", element: <ReviewsRatings /> },
  { path: "/freelancer/skills", element: <SkillsAssessment /> },
];