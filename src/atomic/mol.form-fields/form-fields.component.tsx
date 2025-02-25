import { FC } from "react";
import TextInput from "../atm.text-input";
import PasswordInput from "../atm.password-input";
import { useFormContext } from "react-hook-form";
import { FormFieldsProps } from "../shared/types";

const FormFields: FC<FormFieldsProps> = ({ fields }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-xs">
      {fields.map((field) => {
        const isPassword = field.type === "password";
        const InputComponent = isPassword ? PasswordInput : TextInput;

        return (
          <InputComponent
            key={field.name}
            label={field.label}
            {...(isPassword ? {} : { type: field.type || "text" })}
            placeholder={field.placeholder}
            status={field.status}
            infoIcon={field.infoIcon}
            {...register(field.name)}
            caption={
              errors[field.name]
                ? {
                    text: errors[field.name]?.message as string,
                    status: "error",
                  }
                : undefined
            }
          />
        );
      })}
    </div>
  );
};

export default FormFields;
