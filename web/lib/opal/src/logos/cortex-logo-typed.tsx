import SvgCortexLogo from "@opal/logos/cortex-logo";
import SvgCortexTyped from "@opal/logos/cortex-typed";
import { cn } from "@opal/utils";

interface CortexLogoTypedProps {
  size?: number;
  className?: string;
}

// Gap between the mark and the wordmark, as a share of the lockup height.
const HEIGHT_TO_GAP_RATIO = 5 / 16;

const SvgCortexLogoTyped = ({
  size: height,
  className,
}: CortexLogoTypedProps) => {
  const gap = height != null ? height * HEIGHT_TO_GAP_RATIO : undefined;

  return (
    <div
      className={cn(`flex flex-row items-center`, className)}
      style={{ gap }}
    >
      <SvgCortexLogo size={height} />
      <SvgCortexTyped size={height} />
    </div>
  );
};
export default SvgCortexLogoTyped;
