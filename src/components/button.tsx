import {ReactNode} from "react";
import {Size} from "./icons/base-icon";

type Button = {
  onClickHandler: VoidFunction;
  renderIcon?: (size: Size) => ReactNode;
  renderLabel?: (size: Size) => ReactNode;
  theme: "light" | "dark";
  size: Size;
  bgFill: string;
  borderFill: string;
};

export const Button = ({
  onClickHandler,
  renderIcon,
  renderLabel,
  theme,
  size,
  bgFill = "bg-grey-100",
  borderFill = "border-grey-400",
}: Button) => {
  return (
    <button
      type="button"
      className={`${
        theme === "dark" ? "text-white" : "text-black"
      } w-fit p-1.5 ${bgFill} rounded-md border ${borderFill} px-4`}
      onClick={onClickHandler}
    >
      {renderIcon && renderIcon(size)}
      {renderLabel && renderLabel(size)}
    </button>
  );
};
