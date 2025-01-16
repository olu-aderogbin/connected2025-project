import { RouteObject } from "react-router-dom";
import EmployerPayment from "@/pages/payments/EmployerPayment";

export const paymentRoutes: RouteObject[] = [
  { path: "/payments/employer", element: <EmployerPayment /> },
];