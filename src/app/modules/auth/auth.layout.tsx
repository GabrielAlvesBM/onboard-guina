import { Outlet } from "react-router-dom";
import LinkButton from "@/atomic/atm.link-button";
import { ArrowOutlineLeft } from "@/atomic/icons/arrow";
import { authStrings } from "./auth.strings";

const AuthLayout = () => {
  return (
    <>
      <header className="absolute top-md left-sm">
        <LinkButton to="/" ButtonClassName="flex gap-2xs">
          <ArrowOutlineLeft />
          {authStrings.HEADER_LINK_BUTTON}
        </LinkButton>
      </header>

      <main className="flex h-screen">
        <div className="flex w-full">
          <Outlet />
        </div>

        <div className="flex justify-end">
          <img
            src="/guina-image.png"
            alt="Guina Image"
            className="hidden max-w-full h-auto object-cover pointer-events-none sm:block"
          />
        </div>
      </main>
    </>
  );
};

export default AuthLayout;
