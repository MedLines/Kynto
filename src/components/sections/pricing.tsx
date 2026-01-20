"use client";

import { Button } from "@/components/ui/button";
import { NativeBadge } from "@/components/ui/native-badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Globe } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import * as React from "react";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = React.useState<"monthly" | "yearly">(
    "yearly",
  );

  const freelancePrice = billingCycle === "monthly" ? 29 : 23;
  const eorPrice = billingCycle === "monthly" ? 599 : 479;

  return (
    <section className="relative z-20 pt-24 pb-24 -mt-16 bg-white w-full rounded-t-[3rem] md:rounded-t-[4rem] overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center gap-12 max-w-[1440px] mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center gap-8 text-center max-w-2xl">
            <NativeBadge
              className="bg-orange-primary text-white hover:bg-orange-primary/90"
              dotClass="bg-white"
            >
              Pricing
            </NativeBadge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-foreground font-poppins">
              <span className="block font-light italic opacity-90">Choose</span>
              <span className="block font-bold mt-2">Your Option</span>
            </h2>

            {/* Toggle */}
            <div className="flex items-center p-1.5 bg-white border border-border rounded-full shadow-sm relative">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={cn(
                  "px-6 py-2.5 rounded-full text-base font-medium transition-all duration-300 cursor-pointer",
                  billingCycle === "monthly"
                    ? "bg-orange-primary text-white shadow-sm"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={cn(
                  "px-6 py-2.5 rounded-full text-base font-medium transition-all duration-300 cursor-pointer",
                  billingCycle === "yearly"
                    ? "bg-orange-primary text-white shadow-sm"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                Yearly (-20%)
              </button>
            </div>
          </div>

          {/* Cards Container */}
          <div className="grid md:grid-cols-2 gap-6 w-full max-w-6xl mx-auto">
            {/* Freelance Management Card */}
            <div className="group relative rounded-[48px] bg-secondary p-12 flex flex-col items-center text-center gap-8 overflow-hidden transition-all hover:shadow-lg">
              <NativeBadge
                className="bg-white/70 border border-white/20 text-black hover:bg-white"
                dotClass="bg-foreground"
              >
                Self-Serve
              </NativeBadge>

              <div className="space-y-4 max-w-md mx-auto">
                <h3 className="text-5xl font-medium font-poppins text-foreground leading-tight">
                  Freelance Management
                </h3>
                <p className="text-lg text-muted-foreground">
                  Onboard and pay international contractors in minutes.
                </p>
              </div>

              <div className="mt-auto pt-8 flex flex-col items-center gap-8 w-full">
                <div className="px-8 py-4 bg-orange-primary rounded-full text-white inline-flex items-center gap-2">
                  <span className="text-sm font-medium opacity-90">from</span>
                  <div className="relative min-w-[3ch] text-center">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={freelancePrice}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="text-3xl font-semibold inline-block"
                      >
                        ${freelancePrice}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  <span className="text-sm font-medium opacity-90">
                    / Month
                  </span>
                </div>

                <div className="flex items-center justify-between w-full mt-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Globe className="w-5 h-5" />
                    <span className="text-sm font-medium">150+ Currencies</span>
                  </div>
                  <Button
                    size="icon"
                    className="h-14 w-14 rounded-full bg-white text-foreground hover:bg-orange-primary hover:text-white hover:border-white shadow-sm border-2 border-border group cursor-pointer transition-all duration-300"
                  >
                    <ArrowUpRight className="w-6 h-6 transition-transform duration-300 group-hover:rotate-45" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Employer of Record Card */}
            <div className="group relative rounded-[48px] bg-orange-primary p-12 flex flex-col items-center text-center gap-8 overflow-hidden text-white transition-all hover:shadow-lg">
              <NativeBadge
                className="bg-white/20 border border-white/20 text-white hover:bg-white/30"
                dotClass="bg-white"
              >
                Full Service
              </NativeBadge>

              <div className="space-y-4 max-w-md mx-auto">
                <h3 className="text-5xl font-medium font-poppins leading-tight">
                  Employer of Record
                </h3>
                <p className="text-lg text-white/90">
                  Hire full-time employees without a local entity.
                </p>
              </div>

              <div className="mt-auto pt-8 flex flex-col items-center gap-8 w-full">
                <div className="px-8 py-4 bg-white rounded-full text-foreground inline-flex items-center gap-2">
                  <span className="text-sm font-medium text-muted-foreground">
                    from
                  </span>
                  <div className="relative min-w-[3ch] text-center">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={eorPrice}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="text-3xl font-semibold inline-block"
                      >
                        ${eorPrice}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    / Month
                  </span>
                </div>

                <div className="flex items-center justify-between w-full mt-4">
                  <div className="flex items-center gap-2 text-white/90">
                    <Globe className="w-5 h-5" />
                    <span className="text-sm font-medium">150+ Countries</span>
                  </div>
                  <Button
                    size="icon"
                    className="h-14 w-14 rounded-full bg-white text-foreground hover:bg-orange-primary hover:text-white border-2 border-transparent hover:border-white shadow-sm group cursor-pointer transition-all duration-300"
                  >
                    <ArrowUpRight className="w-6 h-6 transition-transform duration-300 group-hover:rotate-45" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
