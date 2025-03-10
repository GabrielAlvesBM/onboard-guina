import Form from "@/atomic/org.form";
import Text from "@/atomic/atm.typography";
import LinkButton from "@/atomic/atm.link-button";
import { registerSchema, RegisterData } from "@/atomic/org.form/form.schemas";
import { TextFormFields, PasswordFormFields } from "@/atomic/mol.input-fields";
import * as registerStrings from "./register.strings";
import { CheckboxDefault } from "@/atomic/icons/control";

const RegisterPage = () => {
  const handleSubmit = (data: RegisterData) => {
    console.log(data);
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
          buttonLabel={registerStrings.BUTTON_LABEL_REGISTER}
        >
          <TextFormFields fields={registerStrings.TEXT_FIELDS} />
          <PasswordFormFields fields={registerStrings.PASSWORD_FIELDS} />

          <div className="flex gap-3xs">
            <CheckboxDefault />

            <Text variant="body1" className="text-left leading-none">
              {registerStrings.CONFIRM_TERMS}
              <LinkButton to="#" ButtonClassName="!px-3xs">
                {registerStrings.TERMS}
              </LinkButton>

              {registerStrings.AND}

              <LinkButton to="#" ButtonClassName="!px-3xs">
                {registerStrings.POLICIES}
              </LinkButton>
            </Text>
          </div>
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
