import type { IconProps } from "@opal/types";
const SvgCortexLogo = ({ size, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.596 11.857A6 6 0 1 1 12.596 4.143"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx={8} cy={8} r={1.75} fill="currentColor" stroke="none" />
  </svg>
);
export default SvgCortexLogo;
