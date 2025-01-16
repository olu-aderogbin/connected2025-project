import { lazy } from "react";
import { mainRoutes } from "./main.routes";
import { userRoutes } from "./user.routes";
import { dashboardRoutes } from "./dashboard.routes";
import { communityRoutes } from "./community.routes";
import { supportRoutes } from "./support.routes";
import { employerRoutes } from "./employer.routes";
import { freelancerRoutes } from "./freelancer.routes";
import { mentorRoutes } from "./mentor.routes";
import { studentRoutes } from "./student.routes";
import { careerOfficerRoutes } from "./career-officer.routes";
import { paymentRoutes } from "./payment.routes";

// Lazy load all major route components
const Index = lazy(() => import("../pages/Index"));
const About = lazy(() => import("../pages/About"));
const Blog = lazy(() => import("../pages/Blog"));
const Contact = lazy(() => import("../pages/Contact"));
const FAQ = lazy(() => import("../pages/FAQ"));
const HelpCenter = lazy(() => import("../pages/HelpCenter"));
const Signup = lazy(() => import("../pages/Signup"));
const PasswordRecovery = lazy(() => import("../pages/PasswordRecovery"));

export const routes = [
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/faq",
    element: <FAQ />,
  },
  {
    path: "/help",
    element: <HelpCenter />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/password-recovery",
    element: <PasswordRecovery />,
  },
  ...mainRoutes,
  ...userRoutes,
  ...dashboardRoutes,
  ...communityRoutes,
  ...supportRoutes,
  ...employerRoutes,
  ...freelancerRoutes,
  ...mentorRoutes,
  ...studentRoutes,
  ...careerOfficerRoutes,
  ...paymentRoutes,
];