import { FC } from "react";
import TextInput from "../atm.text-input";
import PasswordInput from "../atm.password-input";
import { useFormContext } from "react-hook-form";
import { FormFieldsProps } from "../shared/types";

export const TextFormFields: FC<FormFieldsProps> = ({ fields }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-xs">
      {fields.map((field) => (
        <TextInput
          key={field.name}
          label={field.label}
          type={field.type || "text"}
          placeholder={field.placeholder}
          status={errors[field.name] ? "error" : field.status}
          infoIcon={field.infoIcon}
          {...register(field.name)}
          defaultValue={field.defaultValue}
          caption={
            errors[field.name]
              ? {
                  text: errors[field.name]?.message as string,
                  status: "error",
                }
              : undefined
          }
        />
      ))}
    </div>
  );
};

export const PasswordFormFields: FC<FormFieldsProps> = ({ fields }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-xs">
      {fields.map((field) => (
        <PasswordInput
          key={field.name}
          label={field.label}
          placeholder={field.placeholder}
          status={errors[field.name] ? "error" : field.status}
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
      ))}
    </div>
  );
};
