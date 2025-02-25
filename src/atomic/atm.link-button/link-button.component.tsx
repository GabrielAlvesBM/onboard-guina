import { FC } from "react";
import Button from "../atm.button";
import { LinkButtonProps } from "../shared/types";

const LinkButton: FC<LinkButtonProps> = ({
  to,
  children,
  icon,
  iconPosition,
  target = "_self",
  ...props
}) => {
  return (
    <a
      className="inline-flex"
      href={to}
      target={target}
      rel={target === "blank" ? "noopener noreferrer" : undefined}
      {...props}
    >
      <Button variant="link" icon={icon} iconPosition={iconPosition}>
        {children}
      </Button>
    </a>
  );
};

export default LinkButton;
