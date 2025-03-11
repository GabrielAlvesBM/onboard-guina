import { FC, ReactNode } from "react";
import Text from "../atm.typography";
import Caption from "../atm.caption";
import { CheckboxDefault, CheckboxSelected } from "../icons/control";
import { useFormContext } from "react-hook-form";

interface CheckboxInputProps {
  name: string;
  children?: ReactNode;
}

const CheckboxInput: FC<CheckboxInputProps> = ({ name, children }) => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();
  const isChecked = watch(name);
  const errorMsg = errors[name]?.message as string | undefined;

  return (
    <div>
      <label className="flex gap-3xs">
        <input type="checkbox" {...register(name)} className="hidden" />
        {isChecked ? <CheckboxSelected /> : <CheckboxDefault />}

        <Text variant="body1" className="text-left leading-none">
          {children}
        </Text>
      </label>
      {errorMsg && <Caption status="error">{errorMsg}</Caption>}
    </div>
  );
};

export default CheckboxInput;
