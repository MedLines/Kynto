"use client";

import { cn } from "@/lib/utils";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, type PanInfo } from "motion/react";
import Image from "next/image";

interface Profile {
  id: number;
  name: string;
  role: string;
  location: string;
  image: string;
  tags: string[];
  bgColor: string;
}

interface HeroCarouselProps {
  profiles: Profile[];
  currentIndex: number;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
}

export function HeroCarousel({
  profiles,
  currentIndex,
  onPrev,
  onNext,
  onSelect,
}: HeroCarouselProps) {
  return (
    <div className="relative flex-1 min-h-[300px] flex items-center justify-center my-4 perspective-near transform-style-3d">
      {profiles.map((profile, index) => {
        const total = profiles.length;
        const offset = index - currentIndex;
        let pos = (offset + total) % total;

        if (pos > Math.floor(total / 2)) {
          pos = pos - total;
        }

        const isCenter = pos === 0;

        if (Math.abs(pos) > 1) return null;

        return (
          <motion.div
            key={profile.id}
            className={cn(
              "absolute w-[55%] aspect-square max-w-[300px] rounded-4xl shadow-2xl",
              "flex items-center justify-center overflow-hidden border-2 border-kynto-white/20",
              profile.bgColor === "bg-gray-800"
                ? "bg-gray-800"
                : "bg-kynto-black",
              isCenter
                ? "cursor-grab active:cursor-grabbing touch-pan-y"
                : "cursor-pointer",
            )}
            initial={false}
            animate={{
              x: `${pos * 40}%`,
              scale: isCenter ? 1 : 0.85,
              rotateY: pos * -25,
              z: isCenter ? 0 : -50,
              zIndex: isCenter ? 20 : 10,
              opacity: isCenter ? 1 : 0.4,
              filter: isCenter ? "blur(0px)" : "blur(2px)",
            }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.8, 0.25, 1],
            }}
            drag={isCenter ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, { offset, velocity }: PanInfo) => {
              if (!isCenter) return;
              const swipe = Math.abs(offset.x) * velocity.x;
              const swipeThreshold = 50;

              if (
                offset.x < -swipeThreshold ||
                (offset.x < 0 && velocity.x < -500)
              ) {
                onNext();
              } else if (
                offset.x > swipeThreshold ||
                (offset.x > 0 && velocity.x > 500)
              ) {
                onPrev();
              }
            }}
            onClick={() => {
              if (!isCenter) {
                onSelect(index);
              }
            }}
          >
            <div className={cn("absolute inset-0 z-0", profile.bgColor)} />
            <Image
              src={profile.image}
              alt={profile.name}
              fill
              className={cn(
                "object-cover transition-all duration-700",
                !isCenter && "mix-blend-multiply grayscale-30",
              )}
            />

            {/* Internal Gradient Overlay */}
            {isCenter && (
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent z-10" />
            )}

            {/* Glassmorphism Name Tag Overlay */}
            <div
              className={cn(
                "absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-kynto-white/5 backdrop-blur-sm border border-kynto-white/20 rounded-2xl p-3 shadow-lg z-20 transition-all duration-500 delay-100",
                isCenter
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4",
              )}
            >
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="font-medium text-kynto-white text-sm md:text-lg tracking-tight whitespace-nowrap">
                  {profile.name}
                </span>
                <div className="bg-blue-primary rounded-full p-[3px] shrink-0">
                  <Check className="w-2 md:w-2.5 h-2 md:h-2.5 text-kynto-white stroke-[4px]" />
                </div>
              </div>
              <p className="text-kynto-white/80 text-[11px] md:text-xs font-medium">
                {profile.location}
              </p>
            </div>
          </motion.div>
        );
      })}

      {/* Navigation Buttons */}
      <div className="hidden md:flex absolute inset-x-0 justify-between px-4 pointer-events-none z-30">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="w-8 h-8 rounded-full bg-kynto-white/10 backdrop-blur-md flex items-center justify-center text-kynto-white/70 hover:bg-kynto-white/20 hover:text-kynto-white transition-colors pointer-events-auto"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="w-8 h-8 rounded-full bg-kynto-white/10 backdrop-blur-md flex items-center justify-center text-kynto-white/70 hover:bg-kynto-white/20 hover:text-kynto-white transition-colors pointer-events-auto"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
