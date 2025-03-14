import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="w-full max-w-[1100px] m-auto py-md px-xs">
      <Outlet />
    </div>
  );
};

export default HomeLayout;
