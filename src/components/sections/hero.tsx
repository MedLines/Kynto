import { NativeButton } from "@/components/ui/native-button";
import { ArrowRight, Globe, Star } from "lucide-react";
import { HeroBackground } from "./hero-background";
import { HeroCard } from "./hero-card";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[900px] flex items-center pt-20 overflow-hidden bg-transparent font-poppins ">
      <HeroBackground />

      <div className="container relative z-10 mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-8 max-w-2xl text-kynto-white justify-center h-full">
          <div className="flex items-center gap-2 text-kynto-white/90 font-medium">
            <Globe className="w-5 h-5" />
            <span className="leading-none">Global Teams</span>
          </div>

          <h1 className="text-7xl md:text-8xl font-medium tracking-tight leading-[0.95]">
            Hire
            <br />
            Anyone,
            <br />
            Anywhere.
          </h1>
          <p className="text-xl md:text-2xl text-kynto-white/90 max-w-lg leading-relaxed">
            Onboard employees and contractors in 150+ countries in minutes. We
            handle the compliance, payroll, and taxes—you focus on the talent.
          </p>

          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-orange-primary text-orange-primary"
                />
              ))}
            </div>
            <span className="text-kynto-white/90 font-medium">
              3000+ Customers
            </span>
          </div>

          <div className="flex items-center gap-4 mt-2">
            <NativeButton
              size="lg"
              glow={false}
              className="cursor-pointer rounded-full pl-8 pr-2 h-16 text-lg bg-blue-primary text-kynto-white hover:bg-blue-primary/80 hover:text-kynto-white gap-4"
            >
              <span className="font-medium">Start Hiring</span>
              <div className="w-12 h-12 rounded-full bg-kynto-white text-kynto-white flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-blue-primary" />
              </div>
            </NativeButton>
            <NativeButton
              size="lg"
              variant="ghost"
              className="rounded-full px-8 h-16 text-lg text-kynto-black border border-blue-primary bg-white hover:bg-white "
            >
              How it Works
            </NativeButton>
          </div>
        </div>

        {/* Right Content - Dashboard Preview / Hero Card */}
        <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0 h-full">
          <div className="relative w-full max-w-[600px] h-full">
            <HeroCard />
          </div>
        </div>
      </div>
    </section>
  );
}
