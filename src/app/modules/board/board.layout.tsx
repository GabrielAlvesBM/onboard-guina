import { Outlet } from "react-router-dom";

const BoardLayout = () => {
  return (
    <div className="w-fit m-auto py-md px-xs">
      <Outlet />
    </div>
  );
};

export default BoardLayout;
