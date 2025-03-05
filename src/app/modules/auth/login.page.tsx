import Form from "@/atomic/org.form";
import Text from "@/atomic/atm.typography";
import LinkButton from "@/atomic/atm.link-button";
import { loginSchema, LoginData } from "@/atomic/org.form/form.schemas";
import { TextFormFields, PasswordFormFields } from "@/atomic/mol.input-fields";
import * as loginStrings from "./login-page.strings";
import { useMutation } from "@apollo/client";
import { LoginDocument } from "@/app/data/graphql/generated";

const LoginPage = () => {
  const [loginMutation, { loading }] = useMutation(LoginDocument, {
    onCompleted(data) {
      console.log("Resposta da mutação: ", data);
    },

    onError(error) {
      console.error("Erro ao realizar o login: ", error);
    },
  });

  const handleSubmit = async (data: LoginData) => {
    loginMutation({
      variables: { data: data },
    });

    console.log("Dados enviados: ", data);
  };

  return (
    <>
      <div className="flex flex-col gap-2xs w-full max-w-[400px] m-auto px-sm md:px-0">
        <Text variant="h1">{loginStrings.TITLE_H1}</Text>
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
          <LinkButton to="#" ButtonClassName="pl-3xs">
            {loginStrings.REGISTER}
          </LinkButton>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
