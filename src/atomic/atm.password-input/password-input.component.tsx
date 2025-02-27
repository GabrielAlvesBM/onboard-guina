import { useState, forwardRef } from "react";
import TextInput from "../atm.text-input";
import ShowSvg from "../icons/show-svg";
import { PasswordInputProps } from "../shared/types";
import { SHOW_PASSWORD_LABEL, HIDE_PASSWORD_LABEL } from "./password.strings";

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (
    { status, showVariant, label, placeholder, caption, infoIcon, ...props },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const showPasswordButton = (
      <button
        type="button"
        className="text-x-dark"
        onClick={() => setShowPassword((prev) => !prev)}
        aria-label={showPassword ? HIDE_PASSWORD_LABEL : SHOW_PASSWORD_LABEL}
      >
        <ShowSvg visible={showPassword} variant={showVariant} />
      </button>
    );

    return (
      <div className="relative w-full">
        <TextInput
          ref={ref}
          type={showPassword ? "text" : "password"}
          status={status}
          label={label}
          placeholder={placeholder}
          caption={caption}
          infoIcon={infoIcon}
          clearButton={false}
          icon={showPasswordButton}
          {...props}
        />
      </div>
    );
  }
);

export default PasswordInput;
