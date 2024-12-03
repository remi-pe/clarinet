import {ReactNode} from "react";
import {Size} from "./icons/base-icon";
import {cn} from "@/lib/utils";
import {ClassValue} from "clsx";

type Button = {
  onClickHandler: VoidFunction;
  renderIcon?: (size: Size) => ReactNode;
  renderLabel?: (size: Size) => ReactNode;
  theme: "light" | "dark";
  size: Size;
  className?: ClassValue;
  form?: string;
};

export const Button = ({
  onClickHandler,
  renderIcon,
  renderLabel,
  theme,
  size,
  className,
  form,
}: Button) => {
  return (
    <button
      type="button"
      className={cn(
        `${
          theme === "dark" ? "text-white" : "text-black"
        } w-fit p-1.5 rounded-md border  ${renderLabel ? "px-4" : undefined}`,
        className
      )}
      onClick={onClickHandler}
      form={form}
    >
      {renderIcon && renderIcon(size)}
      {renderLabel && renderLabel(size)}
    </button>
  );
};
