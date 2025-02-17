import { FC } from "react";
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
}

const Button: FC<ButtonProps> = ({
  variant = "primary",
  disabled = false,
  children,
  ...props
}) => {
  return (
    <button className={buttonVariants({ variant, disabled })} {...props}>
      {children}
    </button>
  );
};

export default Button;
