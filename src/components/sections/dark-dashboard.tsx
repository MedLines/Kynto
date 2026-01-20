"use client";

import { Button } from "@/components/ui/button";
import { NativeBadge } from "@/components/ui/native-badge";
import {
  ChevronDown,
  CreditCard,
  DollarSign,
  FileText,
  LayoutDashboard,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";
// No unnecessary imports here. Only clean up if needed.

import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ActionItemsCard } from "./action-items-card";
import { ComplianceCard } from "./compliance-card";
import { PayrollCard } from "./payroll-card";

const EASING = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: EASING as any,
    },
  },
};

// Inner container - staggers sidebar and main content AFTER dashboard fades in
const innerContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.6, // Wait for dashboard fade-in to complete
      staggerChildren: 0.15,
    },
  },
};

// Sidebar slides in from left
const sidebarVariant = {
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

// Main content children slide in from right
const slideFromRight = {
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

export default function DarkDashboard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  // Base dimensions for the dashboard card content
  const BASE_WIDTH = 1296;
  const BASE_HEIGHT = 829;

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        // Measure the container's available width (it's constrained by the section padding)
        const parentWidth = containerRef.current.clientWidth;
        const mobile = window.innerWidth < 768; // Standard Tailwind md breakpoint
        setIsMobile(mobile);

        // Calculate scale to fit the parent width
        const newScale = parentWidth / BASE_WIDTH;
        setScale(newScale);
      }
    };

    // Initial calculation
    handleResize();

    // Observe resize
    const observer = new ResizeObserver(handleResize);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="w-full py-24 flex flex-col items-center">
      {/* Header Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="kynto-container flex flex-col items-center gap-8 text-center max-w-5xl mb-16"
      >
        <motion.div variants={itemVariants}>
          <NativeBadge>The Command Center</NativeBadge>
        </motion.div>
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl leading-[1.1] md:leading-[1] tracking-tight text-foreground dark:text-white max-w-4xl"
        >
          <span className="font-poppins italic font-light block md:inline">
            The Operating System for
          </span>{" "}
          <span className="font-poppins font-semibold block md:inline">
            Global HR
          </span>
        </motion.h2>
      </motion.div>

      {/* Dashboard Card Container (Responsive Wrapper) */}
      <div className="kynto-container w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: EASING, delay: 0.2 }}
          ref={containerRef}
          className="relative w-full max-h-[85vh] bg-card-black rounded-[24px] md:rounded-4xl shadow-2xl overflow-hidden"
          style={{
            height: `min(${BASE_HEIGHT * scale + (isMobile ? 120 : 0)}px, 85vh)`,
            aspectRatio: `${BASE_WIDTH} / ${BASE_HEIGHT}`,
          }}
        >
          {/* Background Image - Moved here to cover extra height */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/elements/Dashboard-bg.png"
              alt="Dashboard Background"
              fill
              className="object-cover w-full h-full opacity-100"
              priority
              quality={100}
            />
          </div>

          {/* Top Gradient Overlay */}
          <div className="absolute top-0 right-0 w-[50%] h-auto z-[1] pointer-events-none">
            <Image
              src="/elements/green-dashboard-top-gradient.svg"
              alt=""
              width={700}
              height={400}
              className="w-full h-auto object-contain opacity-80 mix-blend-overlay"
            />
          </div>

          {/* Scaled Content Inner Wrapper */}
          <div
            ref={contentRef}
            className="absolute top-0 left-0 origin-top-left"
            style={{
              width: BASE_WIDTH,
              height: BASE_HEIGHT,
              transform: `scale(${scale})`,
            }}
          >
            {/* Constrain drag items to this scaled wrapper */}
            <PayrollCard constraintsRef={contentRef} />
            <ComplianceCard constraintsRef={contentRef} />
            <ActionItemsCard constraintsRef={contentRef} />

            {/* Main Content Area - Staggers children after dashboard fade */}
            <motion.div
              variants={innerContainerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative z-10 w-full h-full flex p-6 gap-6 font-poppins text-white"
            >
              {/* Sidebar Card */}
              <motion.div
                variants={sidebarVariant}
                className="w-[280px] h-full flex flex-col gap-6 shrink-0 rounded-2xl  bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm p-5"
              >
                <div className="flex items-center gap-2 px-2">
                  {/* Logo Placeholder */}
                  <Image src="/logo.svg" alt="Kynto" width={70} height={32} />
                </div>

                <nav className="flex flex-col gap-2">
                  <Button
                    variant="ghost"
                    className="justify-start gap-3 bg-[#0084FF] hover:bg-[#0084FF]/90 text-white w-full h-12 rounded-xl text-base font-medium"
                  >
                    <LayoutDashboard size={20} />
                    Dashboard
                  </Button>
                  <Button
                    variant="ghost"
                    className="justify-start gap-3 text-muted-foreground hover:text-white hover:bg-white/5 w-full h-12 rounded-xl text-base font-medium"
                  >
                    <Users size={20} />
                    People
                  </Button>
                  <Button
                    variant="ghost"
                    className="justify-start gap-3 text-muted-foreground hover:text-white hover:bg-white/5 w-full h-12 rounded-xl text-base font-medium"
                  >
                    <CreditCard size={20} />
                    Payroll
                  </Button>
                  <Button
                    variant="ghost"
                    className="justify-start gap-3 text-muted-foreground hover:text-white hover:bg-white/5 w-full h-12 rounded-xl text-base font-medium"
                  >
                    <FileText size={20} />
                    Documents
                  </Button>
                  <Button
                    variant="ghost"
                    className="justify-start gap-3 text-muted-foreground hover:text-white hover:bg-white/5 w-full h-12 rounded-xl text-base font-medium"
                  >
                    <DollarSign size={20} />
                    Expenses
                  </Button>
                  <Button
                    variant="ghost"
                    className="justify-start gap-3 text-muted-foreground hover:text-white hover:bg-white/5 w-full h-12 rounded-xl text-base font-medium"
                  >
                    <ShieldCheck size={20} />
                    Compliance
                  </Button>
                </nav>
              </motion.div>

              {/* Main Dashboard Content - Slides from right, staggers its children */}
              <motion.div
                variants={slideFromRight}
                className="flex-1 flex flex-col gap-6 min-w-0"
              >
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="relative w-96 group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-white transition-colors" />
                    <input
                      type="text"
                      placeholder="Search"
                      className="w-full h-11 bg-white/5 rounded-xl pl-10 pr-4 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:bg-white/10 transition-all"
                    />
                  </div>

                  <div className="flex items-center gap-4">
                    <Image
                      src="/elements/notification.svg"
                      alt="Notifications"
                      width={28}
                      height={26}
                      className="object-contain cursor-pointer hover:opacity-80 transition-opacity"
                    />
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-white/5 cursor-pointer transition-colors">
                      <Image
                        src="/elements/english.svg"
                        alt="Global"
                        width={20}
                        height={20}
                        className="object-contain rounded-full"
                      />
                      <span className="text-sm text-kynto-gray-30">
                        English
                      </span>
                      <ChevronDown className="w-4 h-4 text-kynto-gray-30" />
                    </div>
                    <div className="flex items-center gap-3 pl-2 border-l border-white/10">
                      <div className="w-9 h-9 rounded-full bg-green-primary overflow-hidden relative border border-white/10">
                        {/* Avatar Image Placeholder */}
                        <Image
                          src="/elements/female-avatar.svg"
                          alt="Moni Roy"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="hidden xl:flex flex-col">
                        <span className="text-sm font-medium text-white leading-none">
                          Moni Roy
                        </span>
                        <span className="text-xs text-kynto-gray-30 leading-none mt-1">
                          Admin
                        </span>
                      </div>
                      <ChevronDown className="w-4 h-4 text-muted-foreground hidden xl:block" />
                    </div>
                  </div>
                </div>

                {/* Content Body */}
                <div className="flex-1 rounded-3xl bg-gradient-to-b from-white/5 to-transparent p-8 flex flex-col relative overflow-hidden">
                  <h3 className="text-2xl font-semibold text-white mb-8 relative z-10">
                    Global Command Center
                  </h3>

                  <div className="relative w-full flex-1 min-h-[300px] flex items-center justify-center">
                    <Image
                      src="/elements/map.svg"
                      alt="Global Map"
                      width={990}
                      height={329}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
