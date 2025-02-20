import { FC, ReactNode } from "react";
import { captionVariants } from "./caption.style";
import Text from "../atm.typography";

interface CaptionProps {
  variant?: "success" | "error";
  children?: ReactNode;
}

const successSvg = (
  <svg
    width="12"
    height="10"
    viewBox="0 0 12 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.50068 7.55667L1.19234 5.24833C0.93185 4.98784 0.509505 4.98784 0.24901 5.24833C-0.0114839 5.50883 -0.0114838 5.93117 0.249011 6.19167L3.16219 9.10485C3.34913 9.29179 3.65222 9.29179 3.83916 9.10485L11.029 1.915C11.2895 1.65451 11.2895 1.23216 11.029 0.971667C10.7685 0.711172 10.3462 0.711172 10.0857 0.971667L3.50068 7.55667Z"
      fill="#379559"
    />
  </svg>
);

const errorSvg = (
  <svg
    width="8"
    height="8"
    viewBox="0 0 8 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.75682 7.7541C8.08106 7.42997 8.08106 6.89347 7.75682 6.56933L5.18527 3.9986L7.75682 1.42787C8.08106 1.10374 8.08106 0.567237 7.75682 0.243102C7.43258 -0.0810339 6.89591 -0.0810339 6.57167 0.243102L4.00011 2.81383L1.42856 0.243102C1.10432 -0.0810339 0.567645 -0.0810339 0.243405 0.243102C0.0874571 0.400853 0 0.6137 0 0.835487C0 1.05727 0.0874571 1.27012 0.243405 1.42787L2.81496 3.9986L0.243405 6.56933C0.0874571 6.72708 0 6.93993 0 7.16172C0 7.38351 0.0874571 7.59635 0.243405 7.7541C0.411116 7.92176 0.623548 8 0.835981 8C1.04841 8 1.26085 7.92176 1.42856 7.7541L4.00011 5.18337L6.57167 7.7541C6.73938 7.92176 6.95181 8 7.16424 8C7.37668 8 7.58911 7.92176 7.75682 7.7541Z"
      fill="#7C1B18"
    />
  </svg>
);

const Caption: FC<CaptionProps> = ({ variant, children }) => {
  return (
    <span className="flex items-center gap-3xs">
      {variant === "error" && errorSvg}
      {variant === "success" && successSvg}
      <Text variant="inputCaption" className={captionVariants({ variant })}>
        {children}
      </Text>
    </span>
  );
};

export default Caption;
