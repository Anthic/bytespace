"use client";

import React from "react";
import { cn } from "@/src/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "lime";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  children,
  className,
  variant = "lime",
  size = "md",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 select-none disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

  const variants = {
    lime: "bg-electric-lime text-dark hover:brightness-105 hover:scale-[1.02] shadow-sm",
    primary: "bg-white text-dark hover:bg-light-gray",
    secondary: "bg-white/10 text-white hover:bg-white/20 backdrop-blur-md",
    ghost: "bg-transparent text-light-gray hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-[20px]",
    md: "px-[24px] py-[12px] text-[18px] leading-[1.2] rounded-[24px]",
    lg: "px-8 py-4 text-lg rounded-[28px]",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
