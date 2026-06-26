import type { ReactNode } from "react";
import { LogisticsBackdrop } from "@/components/backgrounds/LogisticsBackdrop";

type FormPageShellProps = {
  children: ReactNode;
};

export function FormPageShell({ children }: FormPageShellProps) {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
      <LogisticsBackdrop variant="formPage" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
