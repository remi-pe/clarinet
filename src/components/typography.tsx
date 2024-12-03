import * as React from "react";
import {VariantProps, cva} from "class-variance-authority";

import {Slot} from "@radix-ui/react-slot";
import {cn} from "@/lib/utils";

const typographyVariants = cva("text-foreground", {
  variants: {
    variant: {
      h1: "text-header1 font-syne font-bold",
      h2: "text-title1 font-workSans",
      p: "text-body font-workSans",
      tag: "text-[12px] font-workSans", // get this working from tailwind config
    },
  },
});

type VariantPropType = VariantProps<typeof typographyVariants>;

const variantElementMap: Record<
  NonNullable<VariantPropType["variant"]>,
  string
> = {
  h1: "h1",
  h2: "h2",
  p: "p",
  tag: "p",
};

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
  as?: string;
}

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({className, variant, as, asChild, ...props}, ref) => {
    const Comp = asChild
      ? Slot
      : as ?? (variant ? variantElementMap[variant] : undefined) ?? "div";

    // Merge the variant styles with the passed className
    const combinedClassName = cn(typographyVariants({variant}), className);

    return <Comp className={combinedClassName} {...props} ref={ref} />;
  }
);

Typography.displayName = "Typography";
