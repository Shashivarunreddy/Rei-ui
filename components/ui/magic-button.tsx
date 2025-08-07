import * as React from "react";
import { cn } from "@/lib/utils";

export interface MagicButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  magic?: boolean;
}

export function MagicButton({ magic, className, ...props }: MagicButtonProps) {
  return (
    <button className={cn("magic-btn-base-styles", className)} {...props}>
      {magic ? "🪄" : null}
      {props.children}
    </button>
  );
}
