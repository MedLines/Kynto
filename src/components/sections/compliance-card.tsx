"use client";

import { ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import * as React from "react";

interface ComplianceCardProps {
  constraintsRef: React.RefObject<HTMLDivElement | null>;
}

export function ComplianceCard({ constraintsRef }: ComplianceCardProps) {
  return (
    <motion.div
      drag
      dragConstraints={constraintsRef}
      initial={{ opacity: 0, x: 20 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, delay: 0.2 },
      }}
      whileHover={{
        scale: 1.09,
        transition: { duration: 0.2 },
      }}
      whileTap={{
        scale: 1.05,
        transition: { duration: 0.1 },
      }}
      className="absolute bottom-55 right-30 w-auto h-[100px] rounded-[24px] bg-[#1a1a1a]/95 border border-white/20 p-4 flex items-center gap-4 shadow-2xl z-50 cursor-grab active:cursor-grabbing overflow-hidden group will-change-transform"
    >
      {/* Icon Circle */}
      <div className="w-14 h-14 rounded-full bg-[#A3F39B] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(163,243,155,0.3)]">
        <ShieldCheck className="w-7 h-7 text-card-black" strokeWidth={2.5} />
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-1">
        <span className="text-white font-medium text-xl tracking-tight">
          Compliance Check
        </span>
        <span className="text-kynto-gray-30 text-sm font-medium">
          All 150 contracts are up to date
        </span>
      </div>
    </motion.div>
  );
}
