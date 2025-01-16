import { RouteObject } from "react-router-dom";
import ProfileEdit from "@/pages/ProfileEdit";
import UserProfile from "@/pages/UserProfile";

export const userRoutes: RouteObject[] = [
  { path: "/profile", element: <UserProfile /> },
  { path: "/profile/edit", element: <ProfileEdit /> },
];