"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
import Image from "next/image";
import { useRef } from "react";
import { ActionItemsCard } from "./action-items-card";
import { ComplianceCard } from "./compliance-card";
import { PayrollCard } from "./payroll-card";

export default function DarkDashboard() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full py-24 px-4 md:px-6 flex flex-col items-center">
      {/* Header Section */}
      <div className="flex flex-col items-center gap-8 text-center max-w-5xl mx-auto mb-16">
        <Badge
          variant="secondary"
          className="rounded-lg px-4 py-3 text-base font-normal font-poppins gap-2.5 bg-secondary hover:bg-muted text-foreground border-none"
        >
          <span className="w-2 h-2 rounded-full bg-foreground shrink-0" />
          The Command Center
        </Badge>

        <h2 className="text-4xl md:text-5xl lg:text-[64px] leading-[1.1] md:leading-[1] tracking-tight text-foreground dark:text-white max-w-4xl">
          <span className="font-poppins italic font-light block md:inline">
            The Operating System for
          </span>{" "}
          <span className="font-poppins font-semibold block md:inline">
            Global HR
          </span>
        </h2>
      </div>

      {/* Dashboard Card */}
      <div
        ref={containerRef}
        className="relative w-full max-w-[1488px] aspect-[1296/829] bg-card-black rounded-4xl overflow-hidden shadow-2xl"
      >
        <PayrollCard constraintsRef={containerRef} />
        <ComplianceCard constraintsRef={containerRef} />
        <ActionItemsCard constraintsRef={containerRef} />
        {/* Background Image */}
        {/* Background Image */}
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

        {/* Main Content Area */}
        <div className="relative z-10 w-full h-full flex p-6 gap-6 font-poppins text-white">
          {/* Sidebar Card */}
          <div className="w-[280px] h-full flex flex-col gap-6 shrink-0 rounded-2xl  bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm p-5">
            <div className="flex items-center gap-2 px-2">
              {/* Logo Placeholder */}
              <span className="text-2xl font-bold italic tracking-tighter">
                Kynto
              </span>
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
          </div>

          {/* Main Dashboard Content */}
          <div className="flex-1 flex flex-col gap-6 min-w-0">
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
                  <span className="text-sm text-kynto-gray-30">English</span>
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
          </div>
        </div>
      </div>
    </section>
  );
}
