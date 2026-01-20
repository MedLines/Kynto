"use client";

import { FlippingCard } from "@/components/ui/flipping-card";
import { NativeBadge } from "@/components/ui/native-badge";
import { NativeButton } from "@/components/ui/native-button";
import { Separator } from "@/components/ui/separator";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

// Reusable Back Content for Cards
const CardBackGradient = () => (
  <div className="w-full h-full bg-linear-to-br from-zinc-800 to-black border border-white/5 rounded-[40px] flex items-center justify-center">
    <div className="w-24 h-24 bg-white/5 blur-3xl rounded-full" />
  </div>
);

// Configuration for Solution Cards
const SOLUTIONS_DATA = [
  {
    key: "eor",
    title: "EOR",
    number: "01",
    description: "Hire full-time employees without a legal entity.",
    gridClass: "md:col-start-2 md:row-start-1",
    direction: "vertical",
    transformOrigin: "top",
    delay: 0.1,
    textClass: "group-hover:text-green-primary",
    numberClass: "group-hover:text-green-primary/20",
    hoverBackground: (
      <div
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          backgroundImage: `
          radial-gradient(circle at 50% 100%, color-mix(in srgb, var(--color-green-primary), transparent 40%) 0%, transparent 60%),
          radial-gradient(circle at 50% 100%, color-mix(in srgb, var(--color-green-primary), transparent 60%) 0%, transparent 70%),
          radial-gradient(circle at 50% 100%, color-mix(in srgb, var(--color-green-primary), transparent 70%) 0%, transparent 80%)
        `,
        }}
      />
    ),
  },
  {
    key: "contractors",
    title: "Contractors",
    number: "02",
    description: "Pay freelancers in 150+ currencies instantly.",
    gridClass: "md:col-start-2 md:row-start-2",
    direction: "horizontal",
    transformOrigin: "left",
    delay: 0.2,
    textClass: "group-hover:text-orange-primary",
    numberClass: "group-hover:text-orange-primary/20",
    hoverBackground: (
      <div
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          backgroundImage: `radial-gradient(circle 500px at 50% 300px, color-mix(in srgb, var(--color-orange-primary), transparent 65%), transparent)`,
        }}
      />
    ),
  },
  {
    key: "payroll",
    title: "Global Payroll",
    number: "03",
    description: "Consolidate multi-country payroll into one invoice.",
    gridClass: "md:col-start-3 md:row-start-2",
    direction: "horizontal",
    transformOrigin: "left",
    delay: 0.4,
    textClass: "group-hover:text-blue-primary",
    numberClass: "group-hover:text-blue-primary/20",
    hoverBackground: (
      <div
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, color-mix(in srgb, var(--color-blue-primary), transparent 75%), transparent 70%)",
        }}
      />
    ),
  },
  {
    key: "visa",
    title: "Visa & Mobility",
    number: "04",
    description: "We handle immigration and relocation paperwork.",
    gridClass: "md:col-start-3 md:row-start-3",
    direction: "vertical",
    transformOrigin: "top",
    delay: 0.2,
    textClass: "group-hover:text-green-primary",
    numberClass: "group-hover:text-green-primary/20",
    hoverBackground: (
      <div
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          backgroundImage: `radial-gradient(circle 500px at 50% 300px, color-mix(in srgb, var(--color-green-primary), transparent 65%), transparent)`,
        }}
      />
    ),
  },
] as const;

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="relative w-full -mt-16 pt-40 pb-24 md:pt-48 md:pb-32 bg-black overflow-hidden group/section scroll-mt-24"
    >
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] pointer-events-none select-none z-0 mix-blend-screen opacity-80">
        <Image
          src="/elements/green-dashboard-top-gradient.svg"
          alt="Green Gradient Glow"
          fill
          className="object-contain object-top-right"
          priority
        />
      </div>

      {/* Earth Sphere Background */}
      <div className="absolute -bottom-24 -left-24 w-[700px] h-[700px] pointer-events-none select-none z-0 opacity-40 mix-blend-screen">
        <Image
          src="/elements/earth-sphere.svg"
          alt="Earth Sphere"
          fill
          className="object-contain object-bottom-left"
        />
      </div>

      <div className="kynto-container relative z-10 w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6">
          {/* Main Title Section */}
          <div className="md:col-start-1 md:row-start-1 flex flex-col justify-center h-full w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left w-full max-w-lg mx-auto lg:mx-0 h-full justify-between"
            >
              <NativeBadge
                className="mb-8 bg-card-black text-white hover:bg-zinc-800 border border-white/5 backdrop-blur-md"
                dotClass="bg-white"
              >
                Solutions
              </NativeBadge>

              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-white mb-12 font-poppins">
                <span className="block font-light italic opacity-90">
                  One Platform,
                </span>
                <span className="block font-medium mt-2">Four Solutions</span>
              </h2>

              <NativeButton className="bg-white text-black hover:bg-zinc-200 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 rounded-full h-16 pl-8 pr-2 flex items-center gap-6 font-poppins">
                <span className="text-lg font-medium">Explore Features</span>
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </NativeButton>
            </motion.div>
          </div>

          {/* Render All Solution Cards */}
          {SOLUTIONS_DATA.map((card) => (
            <div
              key={card.key}
              className={`${card.gridClass} flex items-center justify-center w-full h-full`}
            >
              <FlippingCard
                className="w-full aspect-square"
                direction={card.direction}
                delay={card.delay}
                transformOrigin={card.transformOrigin}
                backContent={<CardBackGradient />}
                frontContent={
                  <div className="w-full h-full relative bg-card-black rounded-[40px] p-10 flex flex-col justify-between overflow-hidden group border border-white/5 hover:border-white/10 transition-colors">
                    {/* Hover Background - Specific to each card */}
                    {card.hoverBackground}

                    <div className="relative z-10 flex flex-col h-full justify-between">
                      <span
                        className={`text-white font-semibold text-2xl tracking-wide ${card.textClass} transition-colors duration-300`}
                      >
                        {card.title}
                      </span>

                      <div
                        className={`absolute -bottom-20 -left-6 text-[240px] font-bold text-white/3 leading-none select-none pointer-events-none ${card.numberClass} transition-colors duration-500`}
                      >
                        {card.number}.
                      </div>

                      <div className="self-end max-w-[300px] text-right mt-auto">
                        <p className="text-kynto-gray-30 text-2xl leading-relaxed pt-20">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                }
              />
            </div>
          ))}

          {/* Global Support Card */}
          <div className="md:col-start-3 md:row-start-1 flex items-center justify-center w-full h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.2, // Kept original delay logic for this one as it's not a flipping card
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full h-full relative rounded-[40px] overflow-hidden flex items-start justify-center p-8 group border border-transparent"
            >
              <div className="relative z-10 flex flex-col items-center gap-8 w-full">
                <div className="relative z-10 mt-auto pb-8 lg:pb-16 flex flex-col-reverse md:flex-row items-center gap-4">
                  <p className="text-sm md:text-base font-medium max-w-[280px] leading-snug text-center md:text-right text-white">
                    We support peoples from all over the world
                  </p>
                  <Separator
                    orientation="vertical"
                    className="h-8 bg-white hidden md:block"
                  />
                  <div className="shrink-0 mt-1">
                    <Image
                      src="/elements/global.svg"
                      alt="Global Icon"
                      width={42}
                      height={42}
                      className="opacity-90 object-contain brightness-0 invert"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
