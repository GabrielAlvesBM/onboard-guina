import { tv } from "tailwind-variants";

export const textInputVariants = tv({
  base: "w-full p-2xs outline-1 outline-medium rounded-xs focus:outline-brand-primary-dark",
  variants: {
    variant: {
      disable: "bg-x-light pointer-events-none",
      error: "outline-feedback-error-medium",
    },
  },
});
