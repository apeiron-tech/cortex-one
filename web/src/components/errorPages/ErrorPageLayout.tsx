import React from "react";
import { CortexLogoTypeIcon } from "@/components/icons/icons";

interface ErrorPageLayoutProps {
  children: React.ReactNode;
}

export default function ErrorPageLayout({ children }: ErrorPageLayoutProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-4">
      <CortexLogoTypeIcon size={120} className="" />
      <div className="max-w-160 w-full surface-float rounded-16 p-6 flex flex-col gap-4">
        {children}
      </div>
    </div>
  );
}
