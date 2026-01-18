"use client";

import { Heart, Send, Users } from "lucide-react";
import { motion } from "motion/react";
import * as React from "react";

interface ActionItemsCardProps {
  constraintsRef: React.RefObject<HTMLDivElement | null>;
}

export function ActionItemsCard({ constraintsRef }: ActionItemsCardProps) {
  return (
    <motion.div
      drag
      dragConstraints={constraintsRef}
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.4 },
      }}
      whileHover={{
        scale: 1.09,
        transition: { duration: 0.2 },
      }}
      whileTap={{
        scale: 1.05,
        transition: { duration: 0.1 },
      }}
      className="absolute top-35 right-10 w-[400px] rounded-[32px] bg-card-black/10 backdrop-blur-md border border-white/20 p-6 flex flex-col gap-4 shadow-2xl z-50 cursor-grab active:cursor-grabbing overflow-hidden group"
    >
      <span className="text-white font-medium text-lg">Action Items</span>

      {/* Divider */}
      <div className="h-px w-full bg-white/10" />

      {/* List */}
      <div className="flex flex-col gap-5">
        {/* Item 1 */}
        <div className="flex items-center gap-4 group/item">
          <Users
            className="w-6 h-6 text-white group-hover/item:text-blue-primary transition-colors"
            strokeWidth={1.5}
          />
          <span className="text-white/90 text-[15px] font-medium">
            Contract Signed - David Kim (KR)
          </span>
        </div>

        {/* Item 2 */}
        <div className="flex items-center gap-4 group/item">
          <Heart
            className="w-6 h-6 text-white group-hover/item:text-red-400 transition-colors"
            strokeWidth={1.5}
          />
          <span className="text-white/90 text-[15px] font-medium">
            Expense Approval - Flight to Berlin ($450)
          </span>
        </div>

        {/* Item 3 */}
        <div className="flex items-center gap-4 group/item">
          <Send
            className="w-6 h-6 text-white group-hover/item:text-green-primary transition-colors"
            strokeWidth={1.5}
          />
          <span className="text-white/90 text-[15px] font-medium">
            Time Off Request - Sarah Jenkins (4 Days)
          </span>
        </div>
      </div>
    </motion.div>
  );
}
