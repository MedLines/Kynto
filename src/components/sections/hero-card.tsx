"use client";

import { cn } from "@/lib/utils";
import { ArrowUpRight, Check, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const PROFILES = [
  {
    id: 1,
    name: "Sophie Bennett",
    role: "Senior Full-Stack Engineer",
    location: "Berlin, Germany",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600",
    tags: ["React", "Python", "Node.js"],
    bgColor: "bg-gray-800",
  },
  {
    id: 2,
    name: "Alex Morgan",
    role: "Lead Product Designer",
    location: "Austin, Texas",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
    tags: ["Figma", "UI/UX", "System Design"],
    bgColor: "bg-[#FDE047]",
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Senior UX Researcher",
    location: "London, UK",
    image:
      "https://images.unsplash.com/photo-1510007661555-1f6d330c6913?auto=format&fit=crop&q=80&w=400",
    tags: ["User Testing", "Data Analysis", "Research"],
    bgColor: "bg-[#F3F4F6]",
  },
];

export function HeroCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % PROFILES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + PROFILES.length) % PROFILES.length);
  }, []);

  // Auto-rotation
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(handleNext, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, handleNext]);

  const currentProfile = PROFILES[currentIndex];

  return (
    <div
      className="relative w-full h-full bg-[#121212] rounded-[40px] p-6 md:p-10 flex flex-col justify-between overflow-hidden shadow-2xl border border-white/5"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Top Label */}
      <div className="flex items-center gap-2 mb-4 shrink-0">
        <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
        <span className="text-gray-400 text-sm font-medium tracking-wide">
          Rising Stars
        </span>
      </div>

      {/* Cards Display - Dynamic Carousel */}
      <div className="relative flex-1 min-h-[300px] flex items-center justify-center -mt-4 mb-4 perspective-[1200px] transform-style-3d">
        {PROFILES.map((profile, index) => {
          // Calculate position relative to current index
          const total = PROFILES.length;
          // We want the current index to be 0 position.
          // offset = index - currentIndex.
          // adjusted to ensure circular wrap where adjacent items are -1, 0, 1

          // Using the user's snippet logic:
          const offset = index - currentIndex;
          let pos = (offset + total) % total;
          // If total is 3:
          // current=0: 0->0, 1->1, 2->2 (which is -1 in loop)
          // current=1: 0->2(-1), 1->0, 2->1

          // Adjust pos to be centered around 0 (-1, 0, 1) if possible
          if (pos > Math.floor(total / 2)) {
            pos = pos - total;
          }

          const isCenter = pos === 0;
          const isAdjacent = Math.abs(pos) === 1;

          // Only render visible items (center + adjacent)
          if (Math.abs(pos) > 1) return null;

          return (
            <div
              key={profile.id}
              className={cn(
                "absolute w-[55%] aspect-square max-w-[300px] rounded-[32px] shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)]",
                "flex items-center justify-center overflow-hidden cursor-pointer",
                // Use different bg colors if needed, or consistent gray
                profile.bgColor === "bg-gray-800" ? "bg-gray-800" : "bg-white", // simplified bg for now or use profile.bgColor
              )}
              style={{
                transform: `
                  translateX(${pos * 60}%) 
                  scale(${isCenter ? 1 : 0.85}) 
                  rotateY(${pos * -15}deg)
                  translateZ(${isCenter ? 0 : -50}px)
                `,
                zIndex: isCenter ? 20 : 10,
                opacity: isCenter ? 1 : 0.4,
                filter: isCenter ? "blur(0px)" : "blur(2px)",
              }}
              onClick={() => {
                if (!isCenter) {
                  // Navigate to clicked card
                  const newIndex = index;
                  setCurrentIndex(newIndex);
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

              {/* Internal Gradient Overlay (Center Only/Always?) */}
              {isCenter && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
              )}

              {/* Glassmorphism Name Tag Overlay (Center Only) */}
              <div
                className={cn(
                  "absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3 shadow-lg z-20 transition-all duration-500 delay-100",
                  isCenter
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4",
                )}
              >
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="font-bold text-white text-[14px] md:text-[18px] tracking-tight whitespace-nowrap">
                    {profile.name}
                  </span>
                  <div className="bg-blue-500 rounded-full p-[3px] shrink-0">
                    <Check className="w-2 md:w-2.5 h-2 md:h-2.5 text-white stroke-[4px]" />
                  </div>
                </div>
                <p className="text-white/80 text-[11px] md:text-[13px] font-medium">
                  {profile.location}
                </p>
              </div>
            </div>
          );
        })}

        {/* Navigation Buttons (Optional/Subtle) */}
        <div className="hidden md:flex absolute inset-x-0 justify-between px-4 pointer-events-none z-30">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-colors pointer-events-auto"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-colors pointer-events-auto"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Bottom Info - Dynamic */}
      <div className="flex flex-col gap-5 mt-auto z-10 shrink-0 min-h-[90px]">
        <h3 className="text-white text-2xl md:text-3xl font-semibold tracking-tight leading-tight transition-all duration-300">
          {currentProfile.role}
        </h3>
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {currentProfile.tags.map((tech) => (
              <span
                key={tech}
                className="px-3 md:px-4 py-1.5 rounded-full bg-[#bef264] text-[#0f172a] text-[10px] md:text-xs font-bold tracking-wide whitespace-nowrap animate-in fade-in zoom-in duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
          <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 group shrink-0">
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
          </button>
        </div>
      </div>
    </div>
  );
}
