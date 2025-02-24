import FormFields from "../mol.form-fields";
import Button from "../atm.button";
import { FormProvider, useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodType } from "zod";

type Field<T> = {
  name: keyof T & string;
  label: string;
  type?: string;
  placeholder?: string;
  variant?: "disable" | "error";
  infoIcon?: string;
};

interface FormProps<T> {
  schema: ZodType<T>;
  fields: Field<T>[];
  onSubmit: (data: T) => void;
  buttonLabel?: string;
}

const Form = <T extends FieldValues>({
  schema,
  fields,
  onSubmit,
  buttonLabel = "Enviar",
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
        <FormFields fields={fields} />

        <Button type="submit">{buttonLabel}</Button>
      </form>
    </FormProvider>
  );
};

export default Form;
