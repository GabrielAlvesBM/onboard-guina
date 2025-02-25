import { FC, JSX } from "react";
import { twMerge } from "tailwind-merge";
import { typographyVariants } from "./typography.style";
import { TextProps } from "../shared/types";

const variantMapping: Record<
  TextProps["variant"],
  keyof JSX.IntrinsicElements
> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  body1: "p",
  body2: "p",
  inputLabel: "p",
  inputValue: "p",
  inputCaption: "p",
  link: "p",
  linkSmall: "p",
};

const Text: FC<TextProps> = ({ variant, children, className }) => {
  const Component = variantMapping[variant] || "p";
  return (
    <Component className={twMerge(typographyVariants({ variant }), className)}>
      {children}
    </Component>
  );
};

export default Text;
