import { Navigate, Outlet } from "react-router-dom";
import Button from "@/atomic/atm.button";
import { PickerDown } from "@/atomic/icons/picker";
import { useAuthStore } from "../stores/auth.store";
import { useUserStore } from "../stores/user.store";

const AuthGuard = () => {
  const { token } = useAuthStore();
  const { name } = useUserStore();

  if (!token) {
    return <Navigate to="/auth/login" replace />;
  }

  return (
    <>
      <div className="flex flex-col h-screen">
        <nav className="flex items-center justify-between gap-md py-2xs px-lg shadow-md sm:px-xl">
          <img src="/instaq-logo.png" alt="Logo Instaq" className="w-lg h-lg" />

          <Button variant="link" className="flex gap-2xs items-center">
            <img src="/avatar1.png" alt="Avatar 1" className="w-md" />
            <span className="hidden xs:block">{name}</span>
            <PickerDown />
          </Button>
        </nav>

        <main className="flex-1 bg-x-light">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AuthGuard;
