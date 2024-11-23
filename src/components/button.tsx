import {ReactNode} from "react";
import {Size} from "./icons/cross";

type Button = {
  onClickHandler: VoidFunction;
  renderIcon: (size: Size) => ReactNode;
  size: Size;
};

export const Button = ({onClickHandler, renderIcon, size}: Button) => {
  return (
    <button
      type="button"
      className="text-white w-fit p-1.5 bg-grey-100 rounded-md border border-grey-400"
      onClick={onClickHandler}
    >
      {renderIcon(size)}
    </button>
  );
};
