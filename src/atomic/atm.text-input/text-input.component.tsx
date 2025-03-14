import { useState, forwardRef } from "react";
import { textInputVariants } from "./text-input.style";
import Caption from "../atm.caption";
import Text from "../atm.typography";
import InfoIcon from "../atm.info-icon";
import { CloseBold } from "../icons/close";
import { PickerDown } from "../icons/picker";
import { TextInputProps } from "../shared/types";

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      type,
      status,
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
            className={textInputVariants({ status })}
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
              status === "disabled" && "opacity-50"
            }`}
          >
            {clearButton && isFocused && inputValue ? (
              <button
                className="text-dark"
                type="button"
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => setInputValue("")}
              >
                <CloseBold />
              </button>
            ) : picker ? (
              <PickerDown />
            ) : (
              icon
            )}
          </span>
        </div>

        {caption && <Caption status={caption?.status}>{caption.text}</Caption>}
      </div>
    );
  }
);

export default TextInput;
