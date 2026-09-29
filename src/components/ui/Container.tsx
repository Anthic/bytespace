import React from "react";
import { cn } from "@/src/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-[120px]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
