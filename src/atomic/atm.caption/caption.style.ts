import { tv } from "tailwind-variants";

export const captionVariants = tv({
  base: "",
  variants: {
    variant: {
      success: "text-feedback-success-dark",
      error: "text-feedback-error-dark",
    },
  },
});
