// Tremor Badge [v0.0.1]

import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

import { cx } from "../../lib/utils";

const badgeVariants = tv({
  base: cx(
    "inline-flex items-center justify-center gap-x-1 whitespace-nowrap rounded-md text-xs font-medium ring-inset",
    "w-[95px] h-[32px]"
  ),
  variants: {
    variant: {
      default: [
        "bg-blue-50 text-blue-900 ring-blue-500/30",
        "dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/30",
      ],
      error: [
        "bg-red-50 text-[#FF4049] ring-[#FF4049] font-onest font-normal text-xl",
        "dark:bg-[#FF40494D] dark:text-[#FF4049] dark:ring-[#FF4049]",
      ],
      warning: [
        "bg-yellow-50 text-[#FFC107] ring-[#FFC107] font-onest font-normal text-xl",
        "dark:bg-[#FFC1074D] dark:text-[#FFC107] dark:ring-[#FFC107]",
      ],
      info: [
        "bg-[#4285F44D] text-celeste ring-celeste font-onest font-normal text-xl",
        "dark:bg-[#4285F44D] dark:text-celeste dark:ring-celeste",
      ],
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface BadgeProps
  extends React.ComponentPropsWithoutRef<"span">,
  VariantProps<typeof badgeVariants> { }

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, ...props }: BadgeProps, forwardedRef) => {
    return (
      <span
        ref={forwardedRef}
        className={cx(badgeVariants({ variant }), className)}
        tremor-id="tremor-raw"
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";

export { Badge, badgeVariants, type BadgeProps };
