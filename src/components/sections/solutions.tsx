"use client";

import { NativeBadge } from "@/components/ui/native-badge";
import { NativeButton } from "@/components/ui/native-button";
import { Separator } from "@/components/ui/separator";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

export default function Solutions() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-black overflow-hidden">
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

      <div className="kynto-container relative z-10 w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6">
          {/* Row 1, Col 1: Existing Text */}
          <div className="md:col-start-1 md:row-start-1 flex flex-col justify-center h-full w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-start w-full max-w-lg h-full justify-between"
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

          {/* Row 1, Col 2: EOR Card */}
          <div className="md:col-start-2 md:row-start-1 flex items-center justify-center w-full h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full aspect-square relative bg-card-black rounded-[40px] p-10 flex flex-col justify-between overflow-hidden group border border-white/5 hover:border-white/10 transition-colors"
            >
              <span className="text-white font-semibold text-2xl tracking-wide">
                EOR
              </span>

              <div className="absolute -bottom-20 -left-6 text-[240px] font-bold text-white/3 leading-none select-none pointer-events-none group-hover:text-white/5 transition-colors duration-500">
                01.
              </div>

              <div className="relative z-10 self-end max-w-[300px] text-right mt-auto">
                <p className="text-kynto-gray-30 text-2xl leading-relaxed pt-20">
                  Hire full-time employees without a legal entity.
                </p>
                <div className="w-3 h-3 rounded-full bg-zinc-700 mt-6 ml-auto"></div>
              </div>
            </motion.div>
          </div>

          {/* Row 2, Col 2: Contractors Card */}
          <div className="md:col-start-2 md:row-start-2 flex items-center justify-center w-full h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full aspect-square relative bg-card-black rounded-[40px] p-10 flex flex-col justify-between overflow-hidden group border border-white/5 hover:border-white/10 transition-colors"
            >
              <span className="text-white font-semibold text-2xl tracking-wide">
                Contractors
              </span>

              <div className="absolute -bottom-20 -left-6 text-[240px] font-bold text-white/3 leading-none select-none pointer-events-none group-hover:text-white/5 transition-colors duration-500">
                02.
              </div>

              <div className="relative z-10 self-end max-w-[300px] text-right mt-auto">
                <p className="text-kynto-gray-30 text-2xl leading-relaxed pt-20">
                  Pay freelancers in 150+ currencies instantly.
                </p>
                <div className="w-3 h-3 rounded-full bg-zinc-700 mt-6 ml-auto"></div>
              </div>
            </motion.div>
          </div>

          {/* Row 2, Col 3: Global Payroll Card */}
          <div className="md:col-start-3 md:row-start-2 flex items-center justify-center w-full h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full aspect-square relative bg-card-black rounded-[40px] p-10 flex flex-col justify-between overflow-hidden group border border-white/5 hover:border-white/10 transition-colors"
            >
              <span className="text-white font-semibold text-2xl tracking-wide">
                Global Payroll
              </span>

              <div className="absolute -bottom-20 -left-6 text-[240px] font-bold text-white/3 leading-none select-none pointer-events-none group-hover:text-white/5 transition-colors duration-500">
                03.
              </div>

              <div className="relative z-10 self-end max-w-[300px] text-right mt-auto">
                <p className="text-kynto-gray-30 text-2xl leading-relaxed pt-20">
                  Consolidate multi-country payroll into one invoice.
                </p>
                <div className="w-3 h-3 rounded-full bg-zinc-700 mt-6 ml-auto"></div>
              </div>
            </motion.div>
          </div>

          {/* Row 3, Col 3: Visa & Mobility Card */}
          <div className="md:col-start-3 md:row-start-3 flex items-center justify-center w-full h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full aspect-square relative bg-card-black rounded-[40px] p-10 flex flex-col justify-between overflow-hidden group border border-white/5 hover:border-white/10 transition-colors"
            >
              <span className="text-white font-semibold text-2xl tracking-wide">
                Visa & Mobility
              </span>

              <div className="absolute -bottom-20 -left-6 text-[240px] font-bold text-white/3 leading-none select-none pointer-events-none group-hover:text-white/5 transition-colors duration-500">
                04.
              </div>

              <div className="relative z-10 self-end max-w-[300px] text-right mt-auto">
                <p className="text-kynto-gray-30 text-2xl leading-relaxed pt-20">
                  We handle immigration and relocation paperwork.
                </p>
                <div className="w-3 h-3 rounded-full bg-zinc-700 mt-6 ml-auto"></div>
              </div>
            </motion.div>
          </div>

          {/* Row 1, Col 3: Global Support */}
          <div className="md:col-start-3 md:row-start-1 flex items-center justify-center w-full h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.2,
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
