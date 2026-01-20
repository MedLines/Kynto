"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { ReactNode } from "react";

export interface NativeButtonProps extends ButtonProps {
  children: ReactNode;
  loading?: boolean;
  glow?: boolean;
}

const NativeButton = ({
  className,
  containerClassName,
  variant = "default",
  size = "lg",
  children,
  loading = false,
  glow = false,
  disabled,
  href,
  ...props
}: NativeButtonProps & { href?: string; containerClassName?: string }) => {
  const shouldReduceMotion = useReducedMotion();

  const buttonContent = (
    <>
      {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
      <motion.span
        className={cn("flex items-center gap-2")}
        animate={
          loading
            ? { opacity: shouldReduceMotion ? 1 : [1, 0.5, 1] }
            : { opacity: 1 }
        }
        transition={
          loading && !shouldReduceMotion
            ? { duration: 1, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.2 }
        }
      >
        {children}
      </motion.span>
    </>
  );

  const glassmorphismClassName = cn(
    "cursor-pointer h-12 rounded-md px-7 text-sm relative overflow-hidden",
    !glow && "shadow-md hover:shadow-lg",
    glow &&
      "shadow-lg shadow-blue-primary/20 hover:shadow-blue-primary/40 transition-[box-shadow,background-color,color,opacity] duration-200",
    variant === "outline" && "text-foreground/80 hover:bg-foreground/5",
    (disabled || loading) && "opacity-50 cursor-not-allowed grayscale",
    className,
  );

  return (
    <motion.div
      whileHover={
        !disabled && !loading && !shouldReduceMotion ? { scale: 1.01 } : {}
      }
      whileTap={
        !disabled && !loading && !shouldReduceMotion ? { scale: 0.98 } : {}
      }
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={cn("relative block w-fit", containerClassName)}
    >
      {glow && !disabled && !loading && (
        <div className="absolute inset-0 rounded-full bg-blue-primary/20 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500" />
      )}
      <Button
        variant={variant}
        size={size}
        className={glassmorphismClassName}
        disabled={disabled || loading}
        aria-busy={loading}
        asChild={!!href}
        {...props}
      >
        {href ? <Link href={href}>{buttonContent}</Link> : buttonContent}
      </Button>
    </motion.div>
  );
};

NativeButton.displayName = "NativeButton";

export { NativeButton };
