import { useState, forwardRef } from "react";
import TextInput from "../atm.text-input";
import { ShowOutline, HideOutline } from "../icons/show";
import { PasswordInputProps } from "../shared/types";
import { passwordInputsStrings } from "./password.strings";

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ status, label, placeholder, caption, infoIcon, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const showPasswordButton = (
      <button
        type="button"
        className="text-x-dark"
        onClick={() => setShowPassword((prev) => !prev)}
        aria-label={
          showPassword
            ? passwordInputsStrings.HIDE_PASSWORD_LABEL
            : passwordInputsStrings.SHOW_PASSWORD_LABEL
        }
      >
        {showPassword ? <HideOutline /> : <ShowOutline />}
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
