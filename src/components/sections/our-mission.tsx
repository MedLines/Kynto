"use client";

import { NativeBadge } from "@/components/ui/native-badge";
import { Separator } from "@/components/ui/separator";
import { motion } from "motion/react";
import Image from "next/image";
import { MissionBadges } from "./mission-badges";

const EASING = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: EASING as any,
      staggerChildren: 0.2,
    },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: EASING as any,
    },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: EASING as any,
    },
  },
};

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: EASING as any,
    },
  },
};

export default function OurMission() {
  return (
    <section
      id="mission"
      className="relative w-full py-16 md:py-24 font-poppins overflow-hidden scroll-mt-24"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="kynto-container border-t border-border/50"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column: Graphics and Mission - Comes from Left */}
          <motion.div
            variants={slideRight}
            className="relative min-h-[280px] md:min-h-[500px] flex flex-col justify-between"
          >
            {/* Background Sphere */}
            <div className="absolute top-1/2 left-0 -translate-y-1/4 w-[140%] -ml-[20%] lg:w-full lg:ml-0 lg:left-[-10%] opacity-80 pointer-events-none -z-10">
              <Image
                src="/elements/earth-sphere.svg"
                alt="Globe Wireframe"
                width={600}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* "Our Mission" Pill */}
            <div className="relative z-10 pt-8 lg:pt-16">
              <NativeBadge className="pointer-events-none">
                Our Mission
              </NativeBadge>
            </div>

            {/* Bottom Graphic: Icon + Text */}
            <div className="relative z-10 mt-auto pb-8 lg:pb-16 flex items-center gap-4 ">
              <div className="shrink-0 mt-1">
                <Image
                  src="/elements/global.svg"
                  alt="Global Icon"
                  width={42}
                  height={42}
                  className="opacity-90"
                />
              </div>
              <Separator orientation="vertical" className="h-8 bg-card-black" />
              <p className="text-sm md:text-base font-medium max-w-[280px] leading-snug text-kynto-gray-80">
                Making global employment borderless.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Text Content - Comes from Right */}
          <motion.div variants={slideLeft} className="relative z-10 lg:pl-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-medium tracking-tight text-kynto-black mb-6 md:mb-8 leading-[1.1]">
              We believe talent is distributed equally, but opportunity is not.
            </h2>
            <p className="text-lg md:text-xl text-kynto-gray-400 leading-relaxed max-w-lg font-normal">
              We bridge that gap by handling the complex legal, tax, and payroll
              infrastructure so you can build a world-class team, regardless of
              geography.
            </p>
          </motion.div>
        </div>

        {/* Feature Badges Row */}
        <MissionBadges />
      </motion.div>
    </section>
  );
}
