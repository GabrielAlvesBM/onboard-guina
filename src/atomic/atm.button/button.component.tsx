import { FC, ReactNode } from "react";
import { buttonVariants } from "./button.style";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "primaryDestructive"
    | "secondary"
    | "secondaryDestructive"
    | "cta"
    | "link";
  disabled?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

const Button: FC<ButtonProps> = ({
  variant = "primary",
  disabled = false,
  icon,
  iconPosition = "left",
  children,
  ...props
}) => {
  return (
    <button
      className={buttonVariants({ variant, disabled, hasIcon: !!icon })}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span className="w-xs h-xs">{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="w-xs h-xs">{icon}</span>
      )}
    </button>
  );
};

export default Button;
