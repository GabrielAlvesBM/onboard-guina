import { tv } from "tailwind-variants";

export const buttonVariants = tv({
  base: "px-xs py-xxs rounded-sm shadow-sm cursor-pointer text-white",
  variants: {
    variant: {
      primary:
        "bg-brand-primary-dark hover:bg-brand-primary-x-dark focus:border-2 focus:border-cta active:bg-brand-primary-xx-dark",
      primaryDestructive:
        "bg-feedback-error-medium hover:bg-feedback-error-dark focus:border-2 focus:border-feedback-error-dark active:bg-feedback-error-x-dark",
      secondary:
        "border-2 text-brand-primary-dark bg-transparent hover:border-brand-primary-x-dark hover:text-brand-primary-x-dark focus:border-3 active:border-brand-primary-xx-dark active:text-brand-primary-xx-dark",
      secondaryDestructive:
        "border-2 border-feedback-error-medium text-feedback-error-medium bg-transparent hover:text-feedback-error-dark hover:border-feedback-error-dark focus:border-3 active:text-feedback-error-x-dark active:border-feedback-error-x-dark",
      cta: "bg-x-dark hover:bg-dark focus:border-2 focus:border-xx-dark active:bg-xx-dark",
      link: "py-xxxs text-brand-primary-dark hover:underline focus:border-2 focus:border-brand-primary-dark active:text-brand-accessory-magenta",
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
    },
    hasIcon: {
      true: "flex flex-row items-center gap-xxs",
    },
  },
  defaultVariants: {
    variant: "primary",
    disabled: false,
    hasIcon: false,
  },
});
