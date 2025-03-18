import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="src/atomic/mol.board-frame/w-full max-w-[1200px] m-auto py-md px-xs">
      <Outlet />
    </div>
  );
};

export default HomeLayout;
