import TextInput from "../../../atomic/mol.text-input";

const LoginPage = () => {
  return (
    <main className="flex gap-2xs">
      <TextInput
        variant="error"
        placeholder="Nome"
        label="Nome"
        picker={true}
        caption={{
          text: "Seu nome tem que ser verificado",
          status: "error",
        }}
        infoIcon="Informe seu nome. ex: Gabriel"
      />

      <TextInput
        placeholder="Email"
        label="Email"
        caption={{
          text: "Seu email foi verificado!",
          status: "success",
        }}
        infoIcon="Informe seu email. ex: Gabriel@gmail.com"
      />

      <TextInput
        label="Desativado"
        variant="disable"
        placeholder="Desativado"
        picker={true}
      />
    </main>
  );
};

export default LoginPage;
