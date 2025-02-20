import { tv } from "tailwind-variants";

export const typographyVariants = tv({
  base: "text-x-dark",
  variants: {
    variant: {
      display: "font-bold text-2xl",
      h1: "font-semibold text-xl",
      h2: "font-semibold text-lg",
      h3: "font-semibold text-md",
      h4: "font-medium text-sm leading-[150%]",
      body1: "font-regular text-xs text-x-dark ",
      body2: "font-regular text-2xs text-dark",
      inputLabel: "font-semibold text-2xs text-dark",
      inputValue: "font-regular text-sm text-medium",
      inputCaption: "font-regular text-2xs text-dark",
      link: "font-semibold text-xs text-brand-primary-x-dark",
      linkSmall: "font-semibold text-2xs text-brand-primary-x-dark",
    },
  },
  compoundVariants: [
    {
      variant: ["display", "h1", "h2", "h3", "h4"],
      class: "font-primary leading-[120%]",
    },
    {
      variant: [
        "body1",
        "body2",
        "inputLabel",
        "inputValue",
        "inputCaption",
        "link",
        "linkSmall",
      ],
      class: "font-secondary leading-[150%]",
    },
    {
      variant: [
        "body1",
        "body2",
        "inputLabel",
        "inputValue",
        "inputCaption",
        "link",
        "linkSmall",
      ],
      class: "font-secondary",
    },
  ],
});
