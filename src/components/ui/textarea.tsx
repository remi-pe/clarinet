import * as React from "react";

import {cn} from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({className, ...props}, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[152px] w-full border-2 border-border_stroke rounded-md bg-grey-100 px-3 py-2 text-base shadow-sm placeholder:text-grey-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-white ",
        className
      )}
      onInput={(e) => {
        const target = e.target as HTMLTextAreaElement;
        target.style.height = "0px";
        target.style.height = target.scrollHeight + "px";
      }}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export {Textarea};
