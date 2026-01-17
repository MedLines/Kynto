"use client";

import { fadeInUp, viewportConfig } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
  animate?: boolean;
}

export function Section({
  children,
  className,
  id,
  dark = false,
  animate = true,
}: SectionProps) {
  const Wrapper = animate ? motion.section : "section";
  const animationProps = animate
    ? {
        initial: "hidden",
        whileInView: "visible",
        viewport: viewportConfig,
        variants: fadeInUp,
      }
    : {};

  return (
    <Wrapper
      id={id}
      className={cn(
        "py-16 md:py-24",
        dark && "bg-card text-card-foreground",
        className,
      )}
      {...animationProps}
    >
      {children}
    </Wrapper>
  );
}

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}

export function Container({
  children,
  className,
  size = "default",
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto px-4 sm:px-6 lg:px-8",
        {
          "max-w-[1280px]": size === "default",
          "max-w-[960px]": size === "narrow",
          "max-w-[1440px]": size === "wide",
        },
        className,
      )}
    >
      {children}
    </div>
  );
}
