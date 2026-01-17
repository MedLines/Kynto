"use client";

import { CreditCard } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import * as React from "react";

interface PayrollCardProps {
  constraintsRef: React.RefObject<HTMLDivElement | null>;
}

export function PayrollCard({ constraintsRef }: PayrollCardProps) {
  return (
    <motion.div
      drag
      dragConstraints={constraintsRef}
      whileHover={{ scale: 1.09 }}
      whileTap={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute bottom-35 left-35 w-[400px] h-[220px] rounded-[32px] bg-card-black/10 backdrop-blur-md border border-white/5 p-6 flex flex-col justify-between shadow-2xl z-50 cursor-grab active:cursor-grabbing overflow-visible group"
    >
      {/* Header */}
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
            <CreditCard className="w-5 h-5 text-white" strokeWidth={1.5} />
          </div>
          <span className="text-white font-medium text-lg">
            Next Payroll Run
          </span>
        </div>
        <span className="text-kynto-gray-30 text-sm font-medium">
          In 4 Days
        </span>
      </div>

      {/* Main Content */}
      <div className="flex items-end justify-between relative mt-2">
        <div className="flex flex-col gap-1 z-10">
          <span className="text-kynto-gray-30 text-base">Total</span>
          <span className="text-[40px] font-bold text-white leading-none tracking-tight">
            $142,500
          </span>
        </div>

        {/* Chart Absolute Positioned */}
        <div className="absolute -right-3 -bottom-15 w-[240px] h-[140px] pointer-events-none">
          <Image
            src="/elements/chart.svg"
            alt="Chart"
            fill
            className="object-contain object-bottom"
          />
        </div>
      </div>

      {/* Footer / Processing Badge and Tooltip simulation */}
      <div className="flex items-center justify-between mt-auto relative z-10">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF5F00] shadow-lg shadow-orange-500/20">
          <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="text-white text-xs font-semibold tracking-wide">
            Processing...
          </span>
        </div>

        {/* Tooltip Card (Mocked as per design) */}
      </div>
    </motion.div>
  );
}
