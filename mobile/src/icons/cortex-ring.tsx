import Svg, { Circle, Path } from "react-native-svg";

import type { IconProps } from "@/icons/types";

// The default agent glyph: the Cortex One ring with its core dot, as a 16px stroke icon.
const SvgCortexRing = ({ size = 16, ...props }: IconProps) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    {...props}
  >
    <Path
      d="M12.596 11.857A6 6 0 1 1 12.596 4.143"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle cx={8} cy={8} r={1.75} fill="currentColor" stroke="none" />
  </Svg>
);

export default SvgCortexRing;
