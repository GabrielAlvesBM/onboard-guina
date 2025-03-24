import { tv } from "tailwind-variants";

export const columnVariants = tv({
  base: "py-3xs px-xs rounded-md",
  variants: {
    status: {
      TO_DO: "bg-light",
      IN_PROGRESS: "bg-feedback-warning-light",
      IN_REVIEW: "bg-feedback-error-light",
      DONE: "bg-feedback-success-light",
    },
  },
});
