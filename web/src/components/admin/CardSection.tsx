import { cn } from "@opal/utils";

export interface CardSectionProps {
  className?: string;
  children?: React.ReactNode;
}

// Used for all admin page sections
export default function CardSection({ children, className }: CardSectionProps) {
  return (
    <div className={cn("p-6 surface-card rounded-16", className)}>{children}</div>
  );
}
