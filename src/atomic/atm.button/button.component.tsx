import { FC } from "react";
import { buttonVariants } from "./button.style";
import { ButtonProps } from "../shared/types";
import { twMerge } from "tailwind-merge";

const Button: FC<ButtonProps> = ({
  variant = "primary",
  disabled = false,
  icon,
  iconPosition = "left",
  children,
  className,
  ...props
}) => {
  return (
    <button
      type="button"
      className={twMerge(
        buttonVariants({ variant, disabled, hasIcon: !!icon }),
        className
      )}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span className="flex items-center w-xs h-xs text-inherit fill-current stroke-current">
          {icon}
        </span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="flex items-center w-xs h-xs text-inherit fill-current stroke-current">
          {icon}
        </span>
      )}
    </button>
  );
};

export default Button;
