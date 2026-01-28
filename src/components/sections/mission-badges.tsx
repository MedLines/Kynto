"use client";

import { motion } from "motion/react";
import { useState } from "react";

export function MissionBadges() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const badges = [
    ["150+", "Countries"],
    ["Instant", "Payroll"],
    ["Ironclad", "IP"],
    ["Auto", "Compliance"],
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 w-full px-2"
    >
      {badges.map(([line1, line2], index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
          className="relative group h-full w-full"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* 
             Animated Gradient Border Layer 
             Using direct styles for the gradient to ensure colors map correctly 
             regardless of Tailwind utility existence.
          */}
          <motion.div
            className="absolute -inset-[1px] rounded-full opacity-100 transition duration-500 group-hover:opacity-100"
            style={{
              background:
                "linear-gradient(90deg, var(--kynto-blue-primary), var(--kynto-green-secondary), var(--kynto-blue-primary))",
              backgroundSize: "200% 100%",
              willChange: "background-position",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "200% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Main Card Content */}
          <div className="relative h-full w-full bg-card-black rounded-full py-8 px-4 flex flex-col items-center justify-center text-center overflow-hidden z-10">
            {/* Inner Dark Background with Texture */}
            <div className="absolute inset-0 bg-card-black" />

            {/* Subtle Grid Pattern Overlay */}
            <div
              className="absolute inset-0 opacity-[0.15]"
              style={{
                backgroundImage: `radial-gradient(var(--kynto-white) 1px, transparent 1px)`,
                backgroundSize: "24px 24px",
              }}
            />

            {/* Hover Spotlight/Glow Effect inside the card */}
            <motion.div className="absolute inset-0 bg-gradient-to-tr from-blue-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Text Content */}
            <span className="relative z-10 text-xl md:text-2xl font-bold text-white block leading-none mb-1 drop-shadow-sm">
              {line1}
            </span>
            <span className="relative z-10 text-xl md:text-2xl font-medium text-kynto-gray-100/70 block leading-none">
              {line2}
            </span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
