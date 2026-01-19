"use client";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

import { NativeBadge } from "@/components/ui/native-badge";
import { NativeButton } from "@/components/ui/native-button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const STORIES = [
  {
    title: "$0",
    subtitle: "Compliance Liability.",
    description:
      "We take full legal responsibility for your hires, indemnifying you against fines.",
  },
  {
    title: "2 Days",
    subtitle: "Time to Onboard.",
    description:
      "From offer letter to active employee. We handle ID verification and benefits instantly.",
  },
  {
    title: "150+",
    subtitle: "Countries Covered.",
    description:
      "Hire in Germany, Brazil, or Japan without opening a single local bank account.",
  },
  {
    title: "100%",
    subtitle: "IP Ownership.",
    description:
      "Every line of code they write belongs to you. Guaranteed by airtight local IP transfer laws.",
  },
  {
    title: "1",
    subtitle: "Monthly Invoice.",
    description:
      "Consolidate salaries, benefits, and expenses for your whole global team into one payment.",
  },
];

export default function Guarantee() {
  const [storyState, setStoryState] = useState({
    activeStory: 0,
    progress: 0,
  });

  const { activeStory, progress } = storyState;

  useEffect(() => {
    const duration = 5000; // 5 seconds per story
    const intervalTime = 50;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setStoryState((prev) => {
        if (prev.progress >= 100) {
          return {
            activeStory: (prev.activeStory + 1) % STORIES.length,
            progress: 0,
          };
        }
        return {
          ...prev,
          progress: prev.progress + step,
        };
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  const handleStoryClick = (index: number) => {
    setStoryState({
      activeStory: index,
      progress: 0,
    });
  };

  return (
    <section className="relative z-20 w-full py-16 md:py-24 bg-white font-poppins overflow-hidden rounded-b-[2.5rem]">
      <div className="kynto-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          {/* Left Content */}
          <div className="flex flex-col items-start h-full justify-between py-6 w-full">
            <div className="flex flex-col gap-8 w-full items-center lg:items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <NativeBadge className="pointer-events-none">
                  Guarantee
                </NativeBadge>
              </motion.div>

              <div className="flex flex-col gap-10 w-full items-center lg:items-start">
                <motion.h2
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-normal tracking-tight text-kynto-black leading-[1.1] text-center lg:text-left w-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="italic block">Trusted by</span>
                  <span className="block font-medium">the best</span>
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="w-full sm:w-auto flex justify-center lg:justify-start mb-12 sm:mb-0"
                >
                  <NativeButton
                    size="lg"
                    glow={false}
                    className="cursor-pointer rounded-full pl-8 pr-2 h-14 md:h-16 border border-green-border w-full sm:w-auto text-base md:text-lg bg-green-primary text-kynto-black hover:bg-green-primary/80 hover:text-kynto-black gap-4 justify-between sm:justify-start"
                  >
                    <span className="font-medium">Startups</span>
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-kynto-white text-kynto-white flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-green-primary" />
                    </div>
                  </NativeButton>
                </motion.div>
              </div>
            </div>

            {/* Monitoring Icon/Text */}
            <motion.div
              className="flex items-start gap-3 text-sm text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="relative z-10 flex items-center gap-4 ">
                <div className="shrink-0 mt-1">
                  <Image
                    src="/elements/bullseye-solid.svg"
                    alt="Global Icon"
                    width={42}
                    height={42}
                    className="opacity-90"
                  />
                </div>
                <Separator
                  orientation="vertical"
                  className="h-8 bg-card-black"
                />
                <p className="text-sm md:text-base font-medium max-w-[280px] leading-snug text-kynto-gray-80">
                  Monitoring local labor laws 24/7 in real-time.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Interactive Story Card */}
          <motion.div
            className="relative mx-auto w-full max-w-md lg:max-w-none"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Background container with rounded corners */}
            <div className="relative w-full overflow-hidden bg-gray-100 [--p:theme(spacing.3)] sm:[--p:theme(spacing.6)] lg:[--p:theme(spacing.8)] p-[var(--p)] rounded-[calc(2rem+var(--p))]">
              {/* Inner Green Card */}
              <div className="relative flex min-h-[450px] h-full flex-col justify-between rounded-[2rem] bg-green-primary p-6 sm:p-8 lg:p-10 transition-colors duration-500">
                {/* Progress Bars */}
                <div className="flex gap-2 w-full mb-6 z-10 shrink-0">
                  {STORIES.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleStoryClick(index)}
                      className="group relative h-1.5 flex-1 overflow-hidden rounded-full bg-black/10 transition-all hover:bg-green-border focus:outline-none cursor-pointer"
                      aria-label={`Go to story ${index + 1}`}
                    >
                      <div
                        className={cn(
                          "absolute inset-0 bg-white transition-all duration-100 ease-linear",
                          index < activeStory ? "w-full" : "w-0",
                        )}
                        style={
                          index === activeStory
                            ? { width: `${progress}%` }
                            : undefined
                        }
                      />
                    </button>
                  ))}
                </div>
                {/* Content */}
                <div className="flex flex-col gap-3 mt-auto relative z-20">
                  <motion.div
                    key={activeStory}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h3 className="text-5xl sm:text-6xl lg:text-8xl font-normal tracking-tight text-kynto-black mb-1">
                      {STORIES[activeStory].title}
                    </h3>
                    <p className="text-xl sm:text-2xl font-medium text-kynto-black/90 mb-3">
                      {STORIES[activeStory].subtitle}
                    </p>
                    <p className="text-base sm:text-lg text-kynto-black/70 mb-6 leading-relaxed max-w-sm">
                      {STORIES[activeStory].description}
                    </p>
                  </motion.div>

                  <NativeButton
                    variant="ghost"
                    className="rounded-full px-8 h-14 md:h-16 w-full sm:w-auto text-base text-kynto-black border border-green-border "
                  >
                    Read our Case Studies
                  </NativeButton>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
