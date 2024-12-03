import {BaseIcon, Size} from "./base-icon";

export const SystemIcon = ({size}: {size: Size}) => {
  return (
    <BaseIcon size={size} viewBox="0 0 24 24">
      <circle cx="21" cy="12" r="2.25" stroke="white" strokeWidth="1.5" />
      <path
        d="M2 21H4C5.10457 21 6 20.1046 6 19V14C6 12.8954 6.89543 12 8 12L14 12"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M2 3H4C5.10457 3 6 3.89543 6 5V10C6 11.1046 6.89543 12 8 12L14 12"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14 12L2 12"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M11.0002 16L14.2929 12.7071C14.6834 12.3166 14.6834 11.6834 14.2929 11.2929L11 8"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </BaseIcon>
  );
};
