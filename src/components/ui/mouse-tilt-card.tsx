"use client";

import { cn } from "@/lib/utils";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import React, { useRef } from "react";

interface MouseTiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltIntensity?: number;
  perspective?: number;
  glareEffect?: boolean;
  glareIntensity?: number;
  scale?: number;
}

const MouseTiltCard: React.FC<MouseTiltCardProps> = ({
  children,
  className = "",
  tiltIntensity = 15,
  perspective = 1000,
  glareEffect = true,
  glareIntensity = 0.3,
  scale = 1.05,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const boundsRef = useRef<DOMRect | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(y, [-0.5, 0.5], [tiltIntensity, -tiltIntensity]),
    {
      stiffness: 150,
      damping: 20,
      mass: 0.5,
    },
  );
  const rotateY = useSpring(
    useTransform(x, [-0.5, 0.5], [-tiltIntensity, tiltIntensity]),
    {
      stiffness: 150,
      damping: 20,
      mass: 0.5,
    },
  );

  const scaleHover = useSpring(1, { stiffness: 100, damping: 20 });

  // Highlight tracks the pointer directly. The card tilt stays on the springs.
  const glareX = useTransform(x, [-0.5, 0.5], [-35, 35]);
  const glareY = useTransform(y, [-0.5, 0.5], [-35, 35]);
  const glareOpacity = useSpring(0, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = boundsRef.current;
    if (!rect) return;

    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);

    if (glareEffect) {
      glareOpacity.set(1);
    }
  };

  const handleMouseEnter = () => {
    boundsRef.current = cardRef.current?.getBoundingClientRect() ?? null;
    scaleHover.set(scale);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    scaleHover.set(1);
    glareOpacity.set(0);
  };

  const transform = useMotionTemplate`perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scaleHover})`;
  const glareTransform = useMotionTemplate`translate3d(${glareX}%, ${glareY}%, 0)`;

  return (
    <motion.div
      ref={cardRef}
      className={cn("inline-block cursor-pointer relative", className)}
      style={{
        transform,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}

      {glareEffect && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[inherit] z-9999">
          <motion.div
            className="absolute -inset-[45%]"
            style={{
              background: `radial-gradient(circle at center, rgba(255,255,255,${glareIntensity}) 0%, transparent 42%)`,
              opacity: glareOpacity,
              transform: glareTransform,
            }}
          />
        </div>
      )}
    </motion.div>
  );
};

export default MouseTiltCard;
