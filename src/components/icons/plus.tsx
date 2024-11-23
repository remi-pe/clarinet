import {BaseIcon, Size} from "./base-icon";

export const PlusIcon = ({size}: {size: Size}) => {
  return (
    <BaseIcon size={size} viewBox="0 0 12 12">
      <path
        d="M6.00001 0.959991V11.04"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M11.04 5.99998L0.960008 5.99998"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </BaseIcon>
  );
};
