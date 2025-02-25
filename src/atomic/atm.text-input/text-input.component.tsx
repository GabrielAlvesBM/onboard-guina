import { useState, forwardRef } from "react";
import { textInputVariants } from "./text-input.style";
import Caption from "../atm.caption";
import Text from "../atm.typography";
import InfoIcon from "../atm.info-icon";
import CloseSvg from "../icons/close-svg";
import DownPickerSvg from "../icons/down-picker-svg";
import { TextInputProps } from "../shared/types";

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      type,
      variant,
      label,
      placeholder,
      picker,
      caption,
      infoIcon,
      clearButton = true,
      onChange,
      icon,
      ...props
    },
    ref
  ) => {
    const [inputValue, setInputValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    return (
      <div className="flex flex-col items-start gap-3xs w-full">
        <div className="flex items-center gap-3xs">
          <label htmlFor={label}>
            <Text variant="inputLabel">{label}</Text>
          </label>
          {infoIcon && <InfoIcon info={infoIcon} />}
        </div>

        <div className="relative w-full">
          <input
            ref={ref}
            className={textInputVariants({ variant })}
            type={type}
            name={label}
            placeholder={placeholder}
            value={inputValue}
            onChange={(event) => {
              setInputValue(event.target.value);
              onChange?.(event);
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            autoComplete="off"
            {...props}
          />
          <span
            className={`flex items-center absolute inset-y-0 right-2xs ${
              variant === "disable" && "opacity-50"
            }`}
          >
            {clearButton && isFocused && inputValue ? (
              <button
                className="text-dark"
                type="button"
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => setInputValue("")}
              >
                <CloseSvg />
              </button>
            ) : picker ? (
              <DownPickerSvg />
            ) : (
              icon
            )}
          </span>
        </div>

        {caption && <Caption variant={caption?.status}>{caption.text}</Caption>}
      </div>
    );
  }
);

export default TextInput;
