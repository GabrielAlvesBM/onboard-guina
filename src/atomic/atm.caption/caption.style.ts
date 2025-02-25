import { tv } from "tailwind-variants";

export const captionVariants = tv({
  base: "",
  variants: {
    status: {
      success: "text-feedback-success-dark",
      error: "text-feedback-error-dark",
    },
  },
});
