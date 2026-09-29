import React from "react";
import { cn } from "@/src/lib/utils";

interface FloatingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function FloatingCard({ children, className, ...props }: FloatingCardProps) {
  return (
    <div
      className={cn(
        "bg-white backdrop-blur-[10px] p-[16px] rounded-[16px] shadow-card-float border border-white/40 select-none",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
