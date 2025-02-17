import { tv } from "tailwind-variants";

export const buttonVariants = tv({
  base: "px-4 py-2 rounded-sm shadow-sm cursor-pointer text-white",
  variants: {
    variant: {
      primary:
        "bg-brand-primary-dark hover:bg-brand-primary-x-dark focus:border-2 focus:border-cta focus:px-3.5 focus:py-1.5 active:bg-brand-primary-xx-dark",
      primaryDestructive:
        "bg-feedback-error-medium hover:bg-feedback-error-dark focus:border-2 focus:border-feedback-error-dark focus:px-3.5 focus:py-1.5 active:bg-feedback-error-x-dark",
      secondary:
        "px-3.5 py-1.5 border-2 text-brand-primary-dark bg-transparent hover:border-brand-primary-x-dark hover:text-brand-primary-x-dark focus:border-3 active:border-brand-primary-xx-dark active:text-brand-primary-xx-dark",
      secondaryDestructive:
        "px-3.5 py-1.5 border-2 border-feedback-error-medium text-feedback-error-medium bg-transparent hover:text-feedback-error-dark hover:border-feedback-error-dark focus:border-3 active:text-feedback-error-x-dark active:border-feedback-error-x-dark",
      cta: "bg-x-dark hover:bg-dark focus:border-2 focus:border-xx-dark focus:px-3.5 focus:py-1.5 active:bg-xx-dark",
      link: "px-2 py-1 text-brand-primary-dark hover:underline focus:border-2 focus:px-1.5 focus:py-0.5 focus:border-brand-primary-dark active:text-brand-accessory-magenta",
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
    },
  },
  defaultVariants: {
    variant: "primary",
    disabled: false,
  },
});
