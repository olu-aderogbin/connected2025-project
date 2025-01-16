import { RouteObject } from "react-router-dom";
import CreateGroup from "@/pages/CreateGroup";
import GroupDetail from "@/pages/GroupDetail";
import Groups from "@/pages/Groups";
import Forums from "@/pages/Forums";
import ForumCategory from "@/pages/ForumCategory";
import ForumTopicDetail from "@/pages/ForumTopicDetail";
import NewForumTopic from "@/pages/NewForumTopic";

export const communityRoutes: RouteObject[] = [
  { path: "/groups/create", element: <CreateGroup /> },
  { path: "/groups/:id", element: <GroupDetail /> },
  { path: "/groups", element: <Groups /> },
  { path: "/forums", element: <Forums /> },
  { path: "/forums/category/:id", element: <ForumCategory /> },
  { path: "/forums/topic/:id", element: <ForumTopicDetail /> },
  { path: "/forums/new", element: <NewForumTopic /> },
];