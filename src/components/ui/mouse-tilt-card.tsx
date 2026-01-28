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

  // Motion values for mouse position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the rotation with springs
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

  // Scale spring
  const scaleHover = useSpring(1, { stiffness: 100, damping: 20 });

  // Glare motion values
  const glareX = useSpring(useTransform(x, [-0.5, 0.5], ["0%", "100%"]), {
    stiffness: 150,
    damping: 20,
  });
  const glareY = useSpring(useTransform(y, [-0.5, 0.5], ["0%", "100%"]), {
    stiffness: 150,
    damping: 20,
  });
  const glareOpacity = useSpring(0, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);

    if (glareEffect) {
      glareOpacity.set(1);
    }
  };

  const handleMouseEnter = () => {
    scaleHover.set(scale);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    scaleHover.set(1);
    glareOpacity.set(0);
  };

  const transform = useMotionTemplate`perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scaleHover})`;
  const background = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,${glareIntensity}) 0%, transparent 50%)`;

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

      {/* Glare Effect */}
      {glareEffect && (
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-[inherit] z-9999"
          style={{
            background,
            opacity: glareOpacity,
          }}
        />
      )}
    </motion.div>
  );
};

export default MouseTiltCard;
