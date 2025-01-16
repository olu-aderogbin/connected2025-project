import { RouteObject } from "react-router-dom";
import { mainRoutes } from "./main.routes";
import { dashboardRoutes } from "./dashboard.routes";
import { userRoutes } from "./user.routes";
import { studentRoutes } from "./student.routes";
import { freelancerRoutes } from "./freelancer.routes";
import { employerRoutes } from "./employer.routes";
import { paymentRoutes } from "./payment.routes";
import { communityRoutes } from "./community.routes";
import { supportRoutes } from "./support.routes";
import { careerOfficerRoutes } from "./career-officer.routes";
import { mentorRoutes } from "./mentor.routes";

// Combine all routes
export const routes: RouteObject[] = [
  ...mainRoutes,
  ...dashboardRoutes,
  ...userRoutes,
  ...studentRoutes,
  ...freelancerRoutes,
  ...employerRoutes,
  ...paymentRoutes,
  ...communityRoutes,
  ...supportRoutes,
  ...careerOfficerRoutes,
  ...mentorRoutes,
];