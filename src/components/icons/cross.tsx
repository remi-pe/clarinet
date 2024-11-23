import {BaseIcon, Size} from "./base-icon";

export const CrossIcon = ({size}: {size: Size}) => {
  return (
    <BaseIcon size={size} viewBox="0 0 8 8">
      <path
        d="M7.32565 0.652161L0.674331 7.34781"
        stroke="white"
        strokeWidth="1.0802"
        strokeLinecap="round"
      />
      <path
        d="M7.34782 7.32565L0.652172 0.674331"
        stroke="white"
        strokeWidth="1.0802"
        strokeLinecap="round"
      />
    </BaseIcon>
  );
};
