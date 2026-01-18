"use client";

import { ArrowUpRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { HeroCarousel } from "./hero-carousel";

const PROFILES = [
  {
    id: 1,
    name: "Alex Mccarthy",
    role: "Senior Full-Stack Engineer",
    location: "Berlin, Germany",
    image: "/people/alex-mccarthy.jpg",
    tags: ["React", "Python", "Node.js"],
    bgColor: "bg-gray-800",
  },
  {
    id: 2,
    name: "Morgan Bewakoof",
    role: "Lead Product Designer",
    location: "Austin, Texas",
    image: "/people/bewakoof.jpg",
    tags: ["Figma", "UI/UX", "System Design"],
    bgColor: "bg-[#FDE047]",
  },
  {
    id: 3,
    name: "Jake Nackos",
    role: "Senior UX Researcher",
    location: "London, UK",
    image: "/people/jake-nackos.jpg",
    tags: ["Testing", "Data Analysis", "UX"],
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
      className="font-poppins relative w-full h-full bg-kynto-black rounded-[40px] p-6 md:p-10 flex flex-col justify-between overflow-hidden shadow-2xl border border-kynto-white/5"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Top Label */}
      <div className="flex items-center gap-2 mb-4 shrink-0">
        <div className="w-1.5 h-1.5 rounded-full bg-blue-primary" />
        <span className="text-kynto-gray-100 text-sm tracking-wide ">
          Rising Stars
        </span>
      </div>

      {/* Cards Display - Dynamic Carousel */}
      <HeroCarousel
        profiles={PROFILES}
        currentIndex={currentIndex}
        onPrev={handlePrev}
        onNext={handleNext}
        onSelect={setCurrentIndex}
      />

      {/* Bottom Info - Dynamic */}
      <div className="flex flex-col gap-5 mt-auto z-10 shrink-0 min-h-[90px]">
        <h3 className="text-kynto-white text-2xl md:text-3xl  tracking-tight leading-tight transition-all duration-300">
          {currentProfile.role}
        </h3>
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {currentProfile.tags.map((tech, index) => (
              <span
                key={`${currentProfile.id}-${tech}`}
                className="px-3 md:px-4 py-1.5 rounded-full bg-green-primary border border-green-border text-foreground text-[10px] md:text-xs tracking-wide whitespace-nowrap animate-in fade-in slide-in-from-bottom-3 duration-200 fill-mode-both"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
          <button className="w-10 h-10 rounded-full border-2 border-green-border flex group items-center justify-center text-kynto-white   transition-all duration-300 group shrink-0 hover:bg-green-primary">
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45 text-green-primary group-hover:text-kynto-black" />
          </button>
        </div>
      </div>
    </div>
  );
}
