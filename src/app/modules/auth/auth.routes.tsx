import { RouteObject } from "react-router-dom";
import LoginPage from "./login.page";

const authRoutes: RouteObject[] = [
  {
    path: "login",
    element: <LoginPage />,
  },
];

export default authRoutes;
