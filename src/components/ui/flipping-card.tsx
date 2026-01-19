"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

interface FlippingCardProps {
  className?: string; // Class for the outer container (sizing, etc.)
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  direction?: "vertical" | "horizontal"; // vertical: Top-to-Bottom, horizontal: Right-to-Left
  delay?: number;
  transformOrigin?: string;
}

export function FlippingCard({
  className,
  frontContent,
  backContent,
  direction = "horizontal",
  delay = 0,
  transformOrigin = "center",
}: FlippingCardProps) {
  const isVertical = direction === "vertical";

  const variants = {
    hidden: {
      rotateX: isVertical ? 180 : 0,
      rotateY: !isVertical ? -180 : 0,
    },
    visible: {
      rotateX: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: [0.22, 1, 0.36, 1] as any, // Custom cubic-bezier
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className={cn(
        "group/flipping-card perspective-[1000px] overflow-hidden",
        className,
      )}
    >
      <motion.div
        variants={variants}
        className="relative w-full h-full transform-style-3d"
        style={{ transformStyle: "preserve-3d", transformOrigin }}
      >
        {/* Front Face */}
        <div
          className="absolute inset-0 h-full w-full backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          {frontContent}
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 h-full w-full backface-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: isVertical ? "rotateX(180deg)" : "rotateY(-180deg)", // Match the 'hidden' state rotation logic
          }}
        >
          {backContent}
        </div>
      </motion.div>
    </motion.div>
  );
}
