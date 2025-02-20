import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { captionVariants } from "./caption.style";
import Text from "../atm.typography";
import SuccessSvg from "../icons/success-svg";
import ErrorSvg from "../icons/error-svg";

interface CaptionProps {
  variant?: "success" | "error";
  children?: ReactNode;
}

const Caption: FC<CaptionProps> = ({ variant, children }) => {
  return (
    <span
      className={twMerge(
        "flex items-center gap-3xs",
        captionVariants({ variant })
      )}
    >
      {variant === "error" && <ErrorSvg />}
      {variant === "success" && <SuccessSvg />}
      <Text variant="inputCaption" className={captionVariants({ variant })}>
        {children}
      </Text>
    </span>
  );
};

export default Caption;
