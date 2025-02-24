import { FC, useState } from "react";
import { textInputVariants } from "./text-input.style";
import Caption from "../atm.caption";
import Text from "../atm.typography";
import InfoIcon from "../atm.info-icon";
import CloseSvg from "../icons/close-svg";
import DownPickerSvg from "../icons/down-picker-svg";

interface CaptionData {
  text: string;
  status: "error" | "success";
}

interface TextInputProps {
  type?: string;
  variant?: "disable" | "error";
  label?: string;
  placeholder?: string;
  picker?: boolean;
  caption?: CaptionData;
  infoIcon?: string;
  clearButton?: boolean;
}

const TextInput: FC<TextInputProps> = ({
  type,
  variant,
  label,
  placeholder,
  picker,
  caption,
  infoIcon,
  clearButton = true,
}) => {
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
          className={textInputVariants({ variant })}
          type={type}
          name={label}
          placeholder={placeholder}
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
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
          ) : null}
        </span>
      </div>

      {caption && <Caption variant={caption?.status}>{caption.text}</Caption>}
    </div>
  );
};

export default TextInput;
