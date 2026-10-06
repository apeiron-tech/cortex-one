import Svg, { Path } from "react-native-svg";

import type { IconProps } from "@/icons/types";

// Paths fill with `currentColor` (RN can't read a CSS var), tinted via the `Icon` color class.
const SvgCortexLogo = ({ size = 16, ...props }: IconProps) => (
  <Svg
    width={size}
    height={size}
    viewBox="0.67 3 58 58"
    fill="currentColor"
    {...props}
  >
    <Path
      d="M53.276 48.623A27 27 0 1 1 53.276 15.377A5 5 0 0 1 45.396 21.534A17 17 0 1 0 45.396 42.466A5 5 0 0 1 53.276 48.623ZM24.5 32A7.5 7.5 0 1 0 39.5 32A7.5 7.5 0 1 0 24.5 32Z"
      fillRule="evenodd"
    />
  </Svg>
);

export default SvgCortexLogo;
