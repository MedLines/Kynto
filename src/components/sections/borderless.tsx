"use client";

import { BorderBeam } from "@/components/ui/border-beam";
import MouseTiltCard from "@/components/ui/mouse-tilt-card";
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
    image: "/people/sofia-rodriguez.jpg",
  },
  {
    name: "James Chen",
    first_name: "James",
    role: "Senior Frontend Dev",
    location: "Singapore",
    image: "/people/james-chen.jpg", // Placeholder
  },
  {
    name: "Sarah Miller",
    first_name: "Sarah",
    role: "Product Manager",
    location: "London, UK",
    image: "/people/sarah-miller.jpg", // Placeholder
  },
  {
    name: "David Kim",
    first_name: "David",
    role: "Full Stack Engineer",
    location: "Seoul, South Korea",
    image: "/people/david-kim.jpg", // Placeholder
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
    <section className="relative w-full pt-24 pb-64 bg-black overflow-hidden min-h-[800px] flex flex-col items-center justify-start">
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
          <span className="block font-bold mt-2">Without Borders</span>
        </h2>

        {/* Profile Card  */}
        <MouseTiltCard
          className="mt-12 rounded-4xl"
          tiltIntensity={5}
          glareIntensity={0.2}
          scale={1.02}
        >
          <div className="relative w-[320px] min-h-[550px] bg-card-black/50 backdrop-blur-xl border border-orange-primary/10 rounded-4xl overflow-hidden flex flex-col items-center shadow-2xl group transition-all duration-500 hover:border-orange-primary/30">
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

            <AnimatePresence mode="popLayout">
              <motion.div
                key={profiles[currentIndex].name}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.05,
                    },
                  },
                  exit: {
                    opacity: 0,
                    transition: {
                      staggerChildren: 0.05,
                      staggerDirection: -1,
                    },
                  },
                }}
                className="relative z-10 w-full flex flex-col items-center"
              >
                {/* Avatar - Centered on the Arc Line */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: { duration: 0.5, ease: "easeOut" },
                    },
                    exit: {
                      opacity: 0,
                      y: -20,
                      filter: "blur(10px)",
                      transition: { duration: 0.3 },
                    },
                  }}
                  className="relative mt-[95px] z-10"
                >
                  <div className="w-[180px] h-[180px] rounded-full bg-card-black overflow-hidden relative border-4 border-white/10 shadow-xl">
                    <Image
                      src={profiles[currentIndex].image}
                      alt={profiles[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>

                {/* Text Info */}
                <div className="relative z-10 mt-6 flex flex-col items-center text-center">
                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                      visible: {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        transition: { duration: 0.5, ease: "easeOut" },
                      },
                      exit: {
                        opacity: 0,
                        y: -20,
                        filter: "blur(10px)",
                        transition: { duration: 0.3 },
                      },
                    }}
                    className="text-white text-sm font-medium mb-4"
                  >
                    {profiles[currentIndex].location}
                  </motion.p>
                  <motion.h3
                    variants={{
                      hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                      visible: {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        transition: { duration: 0.5, ease: "easeOut" },
                      },
                      exit: {
                        opacity: 0,
                        y: -20,
                        filter: "blur(10px)",
                        transition: { duration: 0.3 },
                      },
                    }}
                    className="text-white text-[28px] font-medium leading-tight tracking-tight"
                  >
                    {profiles[currentIndex].name}
                  </motion.h3>
                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                      visible: {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        transition: { duration: 0.5, ease: "easeOut" },
                      },
                      exit: {
                        opacity: 0,
                        y: -20,
                        filter: "blur(10px)",
                        transition: { duration: 0.3 },
                      },
                    }}
                    className="text-white/80 text-[22px] font-normal leading-tight"
                  >
                    {profiles[currentIndex].role}
                  </motion.p>
                </div>

                {/* Action Area */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: { duration: 0.5, ease: "easeOut" },
                    },
                    exit: {
                      opacity: 0,
                      y: -20,
                      filter: "blur(10px)",
                      transition: { duration: 0.3 },
                    },
                  }}
                  className="relative z-10 mt-10 mb-10 flex items-center justify-center gap-6 w-full px-6"
                >
                  <div className="h-px w-12 bg-orange-primary rounded-full" />
                  <NativeButton
                    className="bg-white text-orange-primary hover:bg-zinc-100 rounded-full h-[52px] px-8 text-sm font-medium shadow-lg hover:shadow-orange-primary/20"
                    glow={false}
                  >
                    Hire {profiles[currentIndex].first_name}
                  </NativeButton>
                  <div className="h-px w-12 bg-orange-primary rounded-full" />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </MouseTiltCard>
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
