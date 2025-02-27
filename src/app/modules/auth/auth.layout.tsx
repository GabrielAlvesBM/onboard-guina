import { Outlet } from "react-router-dom";
import LinkButton from "@/atomic/atm.link-button";
import ArrowsSvg from "@/atomic/icons/arrows-svg";
import { HEADER_LINK_BUTTON } from "./login-page.strings";

const AuthLayout = () => {
  return (
    <>
      <header className="absolute top-md left-sm">
        <LinkButton to="/" ButtonClassName="flex gap-2xs">
          <ArrowsSvg direction="left" />
          {HEADER_LINK_BUTTON}
        </LinkButton>
      </header>

      <main className="flex h-screen">
        <Outlet />

        <div className="flex justify-end">
          <img
            src="/guina-image.png"
            alt="Guina Image"
            className="max-w-full h-auto object-cover pointer-events-none"
          />
        </div>
      </main>
    </>
  );
};

export default AuthLayout;
