import { FC, useState, ReactNode } from "react";
import TextInput from "../mol.text-input";
import ShowSvg from "../icons/show-svg";

interface CaptionData {
  text: string;
  status: "error" | "success";
}

interface PasswordInputProps {
  variant?: "disable" | "error";
  label?: string;
  placeholder?: string;
  caption?: CaptionData;
  infoIcon?: string;
  icon?: ReactNode;
}

const PasswordInput: FC<PasswordInputProps> = ({
  variant,
  label,
  placeholder,
  caption,
  infoIcon,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full">
      <TextInput
        type={showPassword ? "text" : "password"}
        variant={variant}
        label={label}
        placeholder={placeholder}
        caption={caption}
        infoIcon={infoIcon}
        closeButton={false}
      />
      <button
        className="flex items-center absolute inset-y-0 right-2xs text-x-dark"
        onClick={() => setShowPassword((prev) => !prev)}
        aria-label={showPassword ? "Esconder senha" : "Mostrar senha"}
      >
        <ShowSvg visible={showPassword} variant="outline" />
      </button>
    </div>
  );
};

export default PasswordInput;
