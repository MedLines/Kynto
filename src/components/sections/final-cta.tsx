"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

const EASING = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative w-full h-[800px] bg-black overflow-hidden font-poppins -mt-10 pt-10 scroll-mt-24"
    >
      {/* Top Blue Gradient - Centered Top */}
      <div
        className="absolute top-0 left-0 w-full h-[800px] z-10 pointer-events-none opacity-100"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 0%, var(--color-blue-primary) 0%, rgba(0, 56, 255, 0.4) 40%, rgba(0, 0, 0, 0) 100%)",
          filter: "blur(60px)",
        }}
      />

      {/* Intense Top Glow */}
      <div
        className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[60%] h-[400px] z-10 pointer-events-none mix-blend-screen opacity-100"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, var(--color-blue-primary) 0%, rgba(0, 0, 0, 0) 100%)",
          filter: "blur(80px)",
        }}
      />

      {/* Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-4 md:px-6 relative h-full z-20 flex flex-col justify-between py-12 md:py-24"
      >
        {/* Top Left Text */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -40 },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.8,
                ease: EASING as [number, number, number, number],
              },
            },
          }}
          className="text-white/50 text-xl md:text-2xl font-light tracking-tight"
        >
          Ready to <span className="font-semibold text-white">scale your</span>{" "}
          <br />
          <span className="font-semibold text-white">team?</span>
        </motion.div>

        {/* Main Heading Group - Right Aligned */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 40 },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.8,
                ease: EASING as [number, number, number, number],
              },
            },
          }}
          className="flex flex-col items-end text-right mt-auto mb-auto"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl leading-[1.0] tracking-tight text-white mb-8">
            <span className="block font-light italic opacity-90 text-4xl md:text-5xl lg:text-6xl mb-2 text-white/50">
              Let&apos;s start
            </span>
            <span className="block font-bold">Hiring</span>
          </h2>

          {/* CTA Button */}
          <Link
            href="/"
            className="group flex items-center gap-3 text-white text-lg font-medium hover:text-blue-primary transition-colors duration-300"
          >
            <span className="border-b border-white group-hover:border-blue-primary pb-0.5 transition-colors duration-300">
              Get Started
            </span>
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-blue-primary group-hover:text-white transition-all duration-300 transform group-hover:rotate-45">
              <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
            </div>
          </Link>
        </motion.div>

        {/* Bottom Footer Elements */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.7,
                ease: EASING as [number, number, number, number],
              },
            },
          }}
        >
          <div className="w-full h-px bg-white/10 mb-6" />
          <div className="flex justify-between items-center text-sm md:text-base text-gray-500 font-medium">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-500" />
              Impactful
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-500" />
              Global Support
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
