import { ReactNode, ChangeEvent } from "react";
import { ZodType } from "zod";

export type InputStatus = "disabled" | "error";
export type CaptionStatus = "error" | "success";
export type ShowVariant = "outline" | "bold";
export type TextVariant =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "body1"
  | "body2"
  | "inputLabel"
  | "inputValue"
  | "inputCaption"
  | "link"
  | "linkSmall";
export type ButtonVariant =
  | "primary"
  | "primaryDestructive"
  | "secondary"
  | "secondaryDestructive"
  | "cta"
  | "link";
export type TargetType = "_self" | "_blank" | "_parent" | "_top";

export interface CaptionData {
  text: string;
  status: CaptionStatus;
}

export interface Field {
  name: string;
  label: string;
  placeholder?: string;
  status?: InputStatus;
  caption?: CaptionData;
  infoIcon?: string;
  type?: string;
}

export interface Fields<T> extends Field {
  name: keyof T & string;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  disabled?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

export interface CaptionProps {
  status?: CaptionStatus;
  children?: ReactNode;
}

export interface InfoIconProps {
  info: string;
}

export interface LinkButtonProps {
  to: string;
  children?: ReactNode;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  target?: TargetType;
  LinkClassName?: string;
  ButtonClassName?: string;
}

export interface PasswordInputProps {
  status?: InputStatus;
  showVariant?: ShowVariant;
  label?: string;
  placeholder?: string;
  caption?: CaptionData;
  infoIcon?: string;
  icon?: ReactNode;
}

export interface TextInputProps {
  type?: string;
  status?: InputStatus;
  label?: string;
  placeholder?: string;
  picker?: boolean;
  caption?: CaptionData;
  infoIcon?: string;
  clearButton?: boolean;
  icon?: ReactNode;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface TextProps {
  variant: TextVariant;
  children?: ReactNode;
  className?: string;
}

export interface FormFieldsProps {
  fields: Readonly<Field[]>;
  children?: ReactNode;
}

export interface FormProps<T> {
  schema: ZodType<T>;
  onSubmit: (data: T) => void;
  buttonLabel?: string;
  children?: ReactNode;
}

export interface ShowSvgProps {
  visible: boolean;
  variant?: ShowVariant;
}
