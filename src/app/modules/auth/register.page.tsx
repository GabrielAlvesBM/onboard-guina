import Form from "@/atomic/org.form";
import Text from "@/atomic/atm.typography";
import LinkButton from "@/atomic/atm.link-button";
import Caption from "@/atomic/atm.caption";
import { registerSchema, RegisterData } from "@/atomic/org.form/form.schemas";
import { TextFormFields, PasswordFormFields } from "@/atomic/mol.input-fields";
import CheckboxInput from "@/atomic/atm.checkbox-input";
import * as registerStrings from "./register.strings";
import { useRegister } from "@/app/domain/auth/register.use-case";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");

  const { register, loading } = useRegister({
    onCompleted() {
      navigate("/");
    },
    onError(error) {
      setErrorMsg(error.message);
    },
  });

  const handleSubmit = (data: RegisterData) => {
    const registerData = {
      email: data.email,
      name: data.name,
      password: data.password,
    };

    register({ data: registerData });
  };

  return (
    <>
      <div className="flex flex-col gap-2xs w-full max-w-[400px] m-auto px-sm md:px-0">
        <Text variant="h1">{registerStrings.TITLE}</Text>
        <Text variant="body1" className="mb-sm">
          {registerStrings.SUBTITLE}
        </Text>

        <Form
          schema={registerSchema}
          onSubmit={handleSubmit}
          buttonDisabled={loading}
          buttonLabel={
            loading
              ? registerStrings.BUTTON_LABEL_REGISTER_LOADING
              : registerStrings.BUTTON_LABEL_REGISTER
          }
        >
          <TextFormFields fields={registerStrings.TEXT_FIELDS} />
          <PasswordFormFields fields={registerStrings.PASSWORD_FIELDS} />

          <CheckboxInput name="acceptTerms">
            {registerStrings.CONFIRM_TERMS}
            <LinkButton to="#" ButtonClassName="!px-3xs">
              {registerStrings.TERMS}
            </LinkButton>

            {registerStrings.AND}

            <LinkButton to="#" ButtonClassName="!px-3xs">
              {registerStrings.POLICIES}
            </LinkButton>
          </CheckboxInput>
          {errorMsg && <Caption status="error">{errorMsg}</Caption>}
        </Form>

        <Text
          variant="body2"
          className="flex items-center justify-center gap-3xs mt-2xs px-sm"
        >
          <span className="flex-1 border-t border-light"></span>
          {registerStrings.OR}
          <span className="flex-1 border-t border-light"></span>
        </Text>

        <div className="flex justify-center items-center">
          <Text variant="body1">{registerStrings.CTA_TO_LOGIN} </Text>
          <LinkButton to="/auth/login" ButtonClassName="pl-3xs">
            {registerStrings.LOGIN}
          </LinkButton>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
