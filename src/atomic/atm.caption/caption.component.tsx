import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { captionVariants } from "./caption.style";
import Text from "../atm.typography";
import { FeedbackError, FeedbackSuccess } from "../icons/feedback";
import { CaptionProps } from "../shared/types";

const Caption: FC<CaptionProps> = ({ status, children }) => {
  return (
    <span
      className={twMerge(
        "flex items-center gap-3xs text-left",
        captionVariants({ status })
      )}
    >
      {status === "error" && <FeedbackError />}
      {status === "success" && <FeedbackSuccess />}
      <Text variant="inputCaption" className={captionVariants({ status })}>
        {children}
      </Text>
    </span>
  );
};

export default Caption;
