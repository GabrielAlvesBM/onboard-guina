import Button from "../atm.button";
import { FormProvider, useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProps } from "../shared/types";

const Form = <T extends FieldValues>({
  schema,
  onSubmit,
  buttonLabel = "Enviar",
  children,
}: FormProps<T>) => {
  const methods = useForm<T>({
    resolver: zodResolver(schema),
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col gap-md w-full px-sm"
      >
        {children}

        <Button type="submit">{buttonLabel}</Button>
      </form>
    </FormProvider>
  );
};

export default Form;
