"use client";

import { NativeBadge } from "@/components/ui/native-badge";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const processSteps = [
  {
    number: "01",
    title: "Create Profile",
    description:
      "Enter candidate details, salary, and country. We generate the compliant contract instantly.",
  },
  {
    number: "02",
    title: "Sign Contract",
    description:
      "Candidate reviews and signs the local agreement digitally via our secure portal.",
  },
  {
    number: "03",
    title: "Compliance",
    description:
      "We verify ID, right-to-work docs, and set up tax & benefits automatically.",
  },
  {
    number: "04",
    title: "Go Live",
    description:
      "Your new team member is fully insured, legally hired, and ready to work.",
  },
];

export default function Process() {
  return (
    <section className="relative z-20 pt-24 pb-48 bg-white w-full rounded-t-[3rem] md:rounded-t-[4rem] overflow-hidden -mt-24">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center gap-16 md:gap-24 max-w-[1440px] mx-auto">
          {/* Header */}
          <div className="flex flex-col items-start w-full gap-6 md:gap-8 max-w-[1280px]">
            <NativeBadge
              className="bg-secondary text-foreground border-none px-4 py-2"
              dotClass="bg-black"
            >
              Process
            </NativeBadge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-foreground font-poppins">
              <span className="block font-light italic opacity-90">
                Onboarding
              </span>
              <span className="block font-bold mt-2">Process</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-4 w-full min-h-[600px] relative">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={cn(
                  "relative flex flex-col items-start px-6 h-full border-l border-l-gray-200",
                  // Mobile/Tablet: specific vertical spacing
                  "py-8 xl:py-4",
                )}
              >
                <div
                  className={cn(
                    "w-full transition-all duration-500 relative",
                    index === 0 && "xl:mt-0",
                    index === 1 && "xl:mt-[160px]",
                    index === 2 && "xl:mt-[320px]",
                    index === 3 && "xl:mt-[480px]",
                  )}
                >
                  {/* 
                      Mobile/Tablet alignment (default): 
                      - `top-0` to align number with the top of the card content.
                      - `-left-[33px]` to center perfectly on the border-l (24px padding + ~9px for half width elements/alignment).
                      
                      Desktop alignment (xl): 
                      - `-top-10` to float above for the stairs effect.
                   */}
                  <span className="text-xs font-medium text-gray-400 font-poppins absolute top-0 -left-[33px] xl:-top-10 xl:-left-[30px] bg-white p-1 z-10">
                    {step.number}
                  </span>
                  <ProcessCard step={step} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessCard({ step }: { step: (typeof processSteps)[0] }) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="group relative w-full rounded-[20px] bg-secondary overflow-hidden transition-all duration-300"
    >
      {/* Background Transition - XL Desktop Only */}
      <div className="hidden xl:block">
        <div className="absolute inset-0 bg-secondary transition-colors duration-300 group-hover:bg-card-black" />
      </div>

      <div className="relative z-10 flex flex-col p-6 lg:p-8 gap-3">
        {/* Title Row */}
        <div className="flex flex-col gap-1">
          {/* Mobile Title (Standard) */}
          <h3 className="xl:hidden text-xl font-medium font-poppins text-foreground flex items-center gap-2">
            <span className="text-sm italic opacity-60">{step.number}.</span>
            {step.title}
          </h3>

          {/* Desktop Title (Hover color change) */}
          <h3 className="hidden xl:flex text-2xl font-medium font-poppins text-foreground group-hover:text-white transition-colors items-center gap-2">
            <span className="text-sm italic opacity-60">{step.number}.</span>
            {step.title}
          </h3>

          <div className="h-px w-full bg-gray-200/50 my-2" />
        </div>

        {/* Mobile/Tablet Description (Always Visible below XL breakpoint) */}
        <div className="block xl:hidden">
          <p className="text-muted-foreground text-sm leading-relaxed">
            {step.description}
          </p>
        </div>

        {/* Desktop Description (Animated, White Text on Hover, XL screens only) */}
        <div className="hidden xl:block">
          <motion.div
            variants={{
              rest: {
                height: 0,
                opacity: 0,
                marginTop: 0,
              },
              hover: {
                height: "auto",
                opacity: 1,
                marginTop: 12,
              },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <p className="text-white/80 text-sm leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
