import { RouteObject } from "react-router-dom";
import HomePage from "./home.page";

const HomeRoutes: RouteObject[] = [
  {
    path: "",
    element: <HomePage />,
  },
];

export default HomeRoutes;
