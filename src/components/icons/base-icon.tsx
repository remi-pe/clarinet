import {PropsWithChildren} from "react";

export type Size = "xs" | "s" | "m" | "l";

const sizeMap: Record<Size, number> = {
  xs: 8,
  s: 10,
  m: 12,
  l: 14,
};

type BaseIcon = PropsWithChildren<{
  size: Size;
  viewBox: string;
}>;

export const BaseIcon = ({children, size, viewBox}: BaseIcon) => {
  return (
    <svg
      width={sizeMap[size]}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children};
    </svg>
  );
};
