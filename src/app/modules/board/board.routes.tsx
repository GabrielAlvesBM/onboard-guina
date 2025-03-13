import { RouteObject } from "react-router-dom";
import BoardPage from "./board.page";

const BoardRoutes: RouteObject[] = [
  {
    path: ":boardId",
    element: <BoardPage />,
  },
];

export default BoardRoutes;
