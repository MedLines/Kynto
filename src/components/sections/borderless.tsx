"use client";

import { BorderBeam } from "@/components/ui/border-beam";
import { NativeBadge } from "@/components/ui/native-badge";
import { NativeButton } from "@/components/ui/native-button";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const profiles = [
  {
    name: "Sofia Rodriguez",
    first_name: "Sofia",
    role: "Product Designer",
    location: "Buenos Aires, Argentina",
    image: "/elements/female-avatar.svg",
  },
  {
    name: "James Chen",
    first_name: "James",
    role: "Senior Frontend Dev",
    location: "Singapore",
    image: "/elements/female-avatar.svg", // Placeholder
  },
  {
    name: "Sarah Miller",
    first_name: "Sarah",
    role: "Product Manager",
    location: "London, UK",
    image: "/elements/female-avatar.svg", // Placeholder
  },
  {
    name: "David Kim",
    first_name: "David",
    role: "Full Stack Engineer",
    location: "Seoul, South Korea",
    image: "/elements/female-avatar.svg", // Placeholder
  },
];

export default function Borderless() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % profiles.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full py-24 bg-black overflow-hidden min-h-[800px] flex flex-col items-center justify-start">
      {/* Content Container - z-20 to be above map */}
      <div className="relative z-20 w-full max-w-7xl px-4 flex flex-col items-center text-center mt-12 md:mt-20">
        <NativeBadge
          className="mb-8 bg-card-black text-white hover:bg-zinc-800 border border-white/5 backdrop-blur-md"
          dotClass="bg-white"
        >
          Borderless
        </NativeBadge>

        <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-white mb-12 font-poppins">
          <span className="block font-light italic opacity-90">Hiring</span>
          <span className="block font-medium mt-2">without borders</span>
        </h2>

        {/* Profile Card  */}
        <div className="relative mt-12 w-[320px] min-h-[550px] bg-card-black/50 backdrop-blur-xl border border-orange-primary/10 rounded-4xl overflow-hidden flex flex-col items-center shadow-2xl group transition-all duration-500 hover:border-orange-primary/30">
          <BorderBeam
            lightColor="var(--color-orange-primary)"
            lightWidth={900}
            duration={5}
          />

          {/* Top Decorative Section */}
          <div className="absolute top-0 w-full h-[180px]">
            {/* Vertical Split Line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-[70px] bg-white/10" />

            {/* The Arc */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[220px] h-[110px] rounded-t-full border-t border-l border-r border-white/10 bg-transparent" />

            {/* Horizontal Line at Arc Base */}
            <div className="absolute bottom-0 w-full h-px bg-white/10" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={profiles[currentIndex].name}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative z-10 w-full flex flex-col items-center"
            >
              {/* Avatar - Centered on the Arc Line */}
              <div className="relative mt-[100px] z-10">
                <div className="w-[180px] h-[180px] rounded-full bg-zinc-800 overflow-hidden relative border-4 border-[#1A1A1A] shadow-xl">
                  <Image
                    src={profiles[currentIndex].image}
                    alt={profiles[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Text Info */}
              <div className="relative z-10 mt-6 flex flex-col items-center text-center">
                <p className="text-white text-sm font-medium mb-4">
                  {profiles[currentIndex].location}
                </p>
                <h3 className="text-white text-[28px] font-medium leading-tight tracking-tight">
                  {profiles[currentIndex].name}
                </h3>
                <p className="text-white/80 text-[22px] font-normal leading-tight">
                  {profiles[currentIndex].role}
                </p>
              </div>

              {/* Action Area */}
              <div className="relative z-10 mt-10 mb-10 flex items-center justify-center gap-6 w-full px-6">
                <div className="h-px w-12 bg-orange-primary rounded-full" />
                <NativeButton
                  className="bg-white text-orange-primary hover:bg-zinc-100 rounded-full h-[52px] px-8 text-sm font-medium shadow-lg hover:shadow-orange-primary/20"
                  glow={false}
                >
                  Hire {profiles[currentIndex].first_name}
                </NativeButton>
                <div className="h-px w-12 bg-orange-primary rounded-full" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* World Map */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-full max-w-[1400px] h-[600px] md:h-[800px] z-0 pointer-events-none opacity-80">
        <Image
          src="/elements/mapbase2.svg"
          alt="World Map"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Orange Bottom Gradient Glow */}
      <div
        className="absolute bottom-0 left-0 w-full h-[600px] z-10 pointer-events-none opacity-80"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 100%, #FF5500 0%, rgba(255, 85, 0, 0.4) 40%, rgba(255, 85, 0, 0) 100%)",
          filter: "blur(40px)",
        }}
      />

      {/* Intense base glow for extra pop */}
      <div
        className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[80%] h-[300px] z-10 pointer-events-none mix-blend-screen opacity-100"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #FF7733 0%, rgba(255, 119, 51, 0) 100%)",
          filter: "blur(80px)",
        }}
      />
    </section>
  );
}
