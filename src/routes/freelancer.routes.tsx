import { RouteObject } from "react-router-dom";
import ApplicationsTracker from "@/pages/freelancer/ApplicationsTracker";
import ApplyGig from "@/pages/freelancer/ApplyGig";
import EarningHistory from "@/pages/freelancer/EarningHistory";
import GigListings from "@/pages/freelancer/GigListings";
import ProfileSetup from "@/pages/freelancer/ProfileSetup";
import ReviewsRatings from "@/pages/freelancer/ReviewsRatings";
import SkillsAssessment from "@/pages/freelancer/SkillsAssessment";

export const freelancerRoutes: RouteObject[] = [
  { path: "/freelancer/applications", element: <ApplicationsTracker /> },
  { path: "/freelancer/gigs/apply", element: <ApplyGig /> },
  { path: "/freelancer/earnings", element: <EarningHistory /> },
  { path: "/freelancer/gigs", element: <GigListings /> },
  { path: "/freelancer/profile-setup", element: <ProfileSetup /> },
  { path: "/freelancer/reviews", element: <ReviewsRatings /> },
  { path: "/freelancer/skills", element: <SkillsAssessment /> },
];