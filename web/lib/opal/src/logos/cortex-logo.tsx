import type { IconProps } from "@opal/types";
const SvgCortexLogo = ({ size, ...props }: IconProps) => (
  <svg
    height={size}
    viewBox="0.67 3 58 58"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M53.276 48.623A27 27 0 1 1 53.276 15.377A5 5 0 0 1 45.396 21.534A17 17 0 1 0 45.396 42.466A5 5 0 0 1 53.276 48.623ZM24.5 32A7.5 7.5 0 1 0 39.5 32A7.5 7.5 0 1 0 24.5 32Z"
      fill="var(--theme-primary-05)"
      fillRule="evenodd"
    />
  </svg>
);
export default SvgCortexLogo;
