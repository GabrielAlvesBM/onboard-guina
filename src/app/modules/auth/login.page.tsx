import Form from "@/atomic/org.form";
import Text from "@/atomic/atm.typography";
import LinkButton from "@/atomic/atm.link-button";
import { loginSchema, LoginData } from "@/atomic/org.form/form.schemas";
import { TextFormFields, PasswordFormFields } from "@/atomic/mol.input-fields";
import * as loginStrings from "./login.strings";
import { useLogin } from "@/app/domain/auth/login.use-case";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const LoginPage = () => {
  const navigate = useNavigate();

  const { login, loading } = useLogin({
    onCompleted() {
      toast.success(loginStrings.LOGIN_SUCCESS);
      navigate("/");
    },
    onError(error) {
      toast.error(loginStrings.LOGIN_ERROR, {
        description: error.message,
      });
    },
  });

  const handleSubmit = (data: LoginData) => {
    login({ data: data });
  };

  return (
    <>
      <div className="flex flex-col gap-2xs w-full max-w-[400px] m-auto px-sm md:px-0">
        <Text variant="h1">{loginStrings.TITLE}</Text>
        <Text variant="body1" className="mb-sm">
          {loginStrings.SUBTITLE}
        </Text>

        <Form
          schema={loginSchema}
          onSubmit={handleSubmit}
          buttonDisabled={loading}
          buttonLabel={
            loading
              ? loginStrings.BUTTON_LABEL_LOGIN_LOADING
              : loginStrings.BUTTON_LABEL_LOGIN
          }
        >
          <TextFormFields fields={loginStrings.EMAIL_FIELDS} />
          <PasswordFormFields fields={loginStrings.PASSWORD_FIELDS} />

          <LinkButton to="#" LinkClassName="self-end">
            {loginStrings.FORGOT_PASSWORD}
          </LinkButton>
        </Form>

        <Text
          variant="body2"
          className="flex items-center justify-center gap-3xs mt-2xs px-sm"
        >
          <span className="flex-1 border-t border-light"></span>
          {loginStrings.OR}
          <span className="flex-1 border-t border-light"></span>
        </Text>

        <div className="flex justify-center items-center">
          <Text variant="body1">{loginStrings.CTA_TO_REGISTER} </Text>
          <LinkButton to="/auth/register" ButtonClassName="pl-3xs">
            {loginStrings.REGISTER}
          </LinkButton>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
