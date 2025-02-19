import LinkButton from "../../../atomic/atm.link-button";

const LoginPage = () => {
  return (
    <main className="flex gap-2">
      <LinkButton
        to="/auth/login"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9.57 5.92969L3.5 11.9997L9.57 18.0697M20.5 11.9997H3.67"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        }
      >
        Login
      </LinkButton>
      <LinkButton
        to="/auth/login"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M14.43 5.92969L20.5 11.9997L14.43 18.0697M3.5 11.9997H20.33"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        }
        iconPosition="right"
      >
        Registrar
      </LinkButton>
    </main>
  );
};

export default LoginPage;
