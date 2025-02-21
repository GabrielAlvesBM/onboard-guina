import PasswordInput from "../../../atomic/mol.password-input";

const LoginPage = () => {
  return (
    <main className="flex gap-2xs">
      <PasswordInput
        placeholder="Senha"
        label="Senha"
        caption={{
          text: "Sua senha está errada",
          status: "error",
        }}
        infoIcon="Deve conter pelo menos 3 caracteres e pelo menos 1 e caracter especial"
      />
      <PasswordInput
        placeholder="Senha"
        label="Senha"
        caption={{
          text: "Tudo certo!",
          status: "success",
        }}
        showVariant="bold"
      />
    </main>
  );
};

export default LoginPage;
