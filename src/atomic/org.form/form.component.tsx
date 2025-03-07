import Button from "../atm.button";
import { FormProvider, useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProps } from "../shared/types";

const Form = <T extends FieldValues>({
  schema,
  onSubmit,
  buttonLabel = "Enviar",
  buttonDisabled = false,
  children,
}: FormProps<T>) => {
  const methods = useForm<T>({
    resolver: zodResolver(schema),
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col gap-xs w-full"
      >
        {children}

        <Button type="submit" disabled={buttonDisabled} className="mt-xs">
          {buttonLabel}
        </Button>
      </form>
    </FormProvider>
  );
};

export default Form;
