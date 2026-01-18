"use client";

import { NativeButton } from "@/components/ui/native-button";
import { ArrowRight, Globe, Star } from "lucide-react";
import { motion } from "motion/react";
import { HeroBackground } from "./hero-background";
import { HeroCard } from "./hero-card";

// Use a custom bezier for that smooth "Awwwards" feel
const EASING = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: EASING as any,
    },
  },
};

// Text reveal effect (slide up from masked container)
const textRevealVariants = {
  hidden: { y: "100%" },
  visible: {
    y: "0%",
    transition: {
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1] as any,
    },
  },
};

const starContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: EASING as any,
    },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: EASING as any,
    },
  },
};

const starVariant = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 260,
      damping: 20,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative w-full min-h-dvh flex items-center pt-20 pb-8 md:pt-24 md:pb-12 lg:pt-20 lg:pb-0 overflow-hidden bg-transparent font-poppins ">
      <HeroBackground />

      <motion.div
        className="kynto-container relative z-10 grid lg:grid-cols-2 gap-12 items-center h-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Content */}
        <div className="flex flex-col gap-6 lg:gap-8 max-w-2xl text-kynto-white justify-center h-full pt-10 lg:pt-0 text-center lg:text-left items-center lg:items-start">
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 text-kynto-white/90 font-medium"
          >
            <Globe className="w-4 h-4 md:w-5 md:h-5" />
            <span className="leading-none text-sm md:text-base">
              Global Teams
            </span>
          </motion.div>

          {/* Masked Text Reveal H1 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-none md:leading-[0.95] flex flex-col items-center lg:items-start">
            <span className="block overflow-hidden pb-1 sm:pb-2">
              <motion.span
                variants={textRevealVariants}
                className="block bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent"
              >
                Hire
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-1 sm:pb-2">
              <motion.span
                variants={textRevealVariants}
                className="block bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent"
              >
                Anyone,
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-1 sm:pb-2">
              <motion.span
                variants={textRevealVariants}
                className="block bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent"
              >
                Anywhere.
              </motion.span>
            </span>
          </h1>

          <motion.p
            variants={fadeInLeft}
            className="text-lg md:text-xl text-kynto-white max-w-lg leading-relaxed drop-shadow-md"
          >
            Onboard employees and contractors in 150+ countries in minutes. We
            handle the compliance, payroll, and taxes—you focus on the talent.
          </motion.p>

          <motion.div
            className="flex items-center gap-2 justify-center lg:justify-start mt-6"
            variants={fadeInLeft}
          >
            {/* Stars */}
            <motion.div className="flex gap-1" variants={starContainer}>
              {[1, 2, 3, 4, 5].map((i) => (
                <motion.div key={i} variants={starVariant}>
                  <Star className="w-4 h-4 md:w-5 md:h-5 fill-orange-primary text-orange-primary" />
                </motion.div>
              ))}
            </motion.div>

            {/* Customers Text */}
            <motion.span className="text-blackon  font-medium text-sm md:text-base drop-shadow-md leading-none">
              3000+ Customers
            </motion.span>
          </motion.div>

          <motion.div
            variants={fadeInLeft}
            className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full sm:w-auto"
          >
            <NativeButton
              size="lg"
              glow={false}
              className="cursor-pointer rounded-full pl-8 pr-2 h-14 md:h-16 border border-accent w-full sm:w-auto text-base md:text-lg bg-blue-primary text-kynto-white hover:bg-blue-primary/80 hover:text-kynto-white gap-4 justify-between sm:justify-start"
            >
              <span className="font-medium">Start Hiring</span>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-kynto-white text-kynto-white flex items-center justify-center">
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-blue-primary" />
              </div>
            </NativeButton>
            <NativeButton
              size="lg"
              variant="ghost"
              className="rounded-full px-8 h-14 md:h-16 w-full sm:w-auto text-base md:text-lg text-kynto-black border border-blue-primary bg-white hover:bg-white "
            >
              How it Works
            </NativeButton>
          </motion.div>
        </div>

        {/* Right Content - Dashboard Preview / Hero Card */}
        <motion.div
          variants={fadeInRight}
          className="relative flex justify-center lg:justify-end mt-12 lg:mt-0 h-full"
        >
          <div className="relative w-full max-w-[600px] h-full">
            <HeroCard />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
