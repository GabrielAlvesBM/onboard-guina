import { FC } from "react";
import Button from "../atm.button";
import { LinkButtonProps } from "../shared/types";
import { twMerge } from "tailwind-merge";

const LinkButton: FC<LinkButtonProps> = ({
  to,
  children,
  icon,
  iconPosition,
  target = "_self",
  LinkClassName,
  ButtonClassName,
  ...props
}) => {
  return (
    <a
      className={twMerge(`w-fit ${LinkClassName}`)}
      href={to}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      {...props}
    >
      <Button
        variant="link"
        icon={icon}
        iconPosition={iconPosition}
        className={ButtonClassName}
      >
        {children}
      </Button>
    </a>
  );
};

export default LinkButton;
