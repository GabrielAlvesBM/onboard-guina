import Form from "../../../atomic/org.form/form.component";
import { loginSchema, LoginData } from "../../../atomic/org.form/form.schemas";
import { Fields } from "../../../atomic/shared/types";

const LoginPage = () => {
  const fields: Fields<LoginData>[] = [
    {
      name: "email",
      label: "E-mail",
      type: "email",
      placeholder: "Digite seu e-mail",
    },
    {
      name: "password",
      label: "Senha",
      type: "password",
      placeholder: "Digite sua senha",
      infoIcon: "A senha deve ter pelo menos 6 caracteres",
    },
  ];

  const handleSubmit = (data: LoginData) => {
    console.log("Dados enviados: ", data);
  };

  return (
    <main className="flex gap-2xs w-full max-w-[400px] m-auto">
      <Form
        schema={loginSchema}
        fields={fields}
        onSubmit={handleSubmit}
        buttonLabel="Entrar"
      />
    </main>
  );
};

export default LoginPage;
