import { tv } from "tailwind-variants";

export const buttonVariants = tv({
  base: "px-xs py-2xs rounded-sm shadow-sm cursor-pointer text-white",
  variants: {
    variant: {
      primary:
        "bg-brand-primary-dark hover:bg-brand-primary-x-dark focus:outline-2 focus:outline-cta active:bg-brand-primary-2x-dark",
      primaryDestructive:
        "bg-feedback-error-medium hover:bg-feedback-error-dark focus:outline-2 focus:outline-feedback-error-dark active:bg-feedback-error-x-dark",
      secondary:
        "outline-2 text-brand-primary-dark bg-transparent hover:outline-brand-primary-x-dark hover:text-brand-primary-x-dark focus:outline-3 active:outline-brand-primary-2x-dark active:text-brand-primary-2x-dark",
      secondaryDestructive:
        "outline-2 outline-feedback-error-medium text-feedback-error-medium bg-transparent hover:text-feedback-error-dark hover:outline-feedback-error-dark focus:outline-3 active:text-feedback-error-x-dark active:outline-feedback-error-x-dark",
      cta: "bg-x-dark hover:bg-dark focus:outline-2 focus:outline-2x-dark active:bg-2x-dark",
      link: "py-3xs text-brand-primary-dark hover:underline focus:outline-2 focus:outline-brand-primary-dark active:text-brand-accessory-magenta shadow-none",
    },
    disabled: {
      true: "opacity-50 pointer-events-none",
    },
    hasIcon: {
      true: "flex flex-row items-center gap-2xs",
    },
  },
  defaultVariants: {
    variant: "primary",
    disabled: false,
    hasIcon: false,
  },
});
