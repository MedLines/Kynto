import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Star } from "lucide-react";
import { HeroBackground } from "./hero-background";
import { HeroCard } from "./hero-card";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[900px] flex items-center pt-20 overflow-hidden bg-transparent">
      <HeroBackground />

      <div className="container relative z-10 mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-8 max-w-2xl text-white">
          <div className="flex items-center gap-2 text-white/90 font-medium">
            <Globe className="w-5 h-5" />
            <span>Global Teams</span>
          </div>

          <h1 className="text-7xl md:text-8xl font-bold tracking-tight leading-[0.95]">
            Hire
            <br />
            Anyone,
            <br />
            Anywhere.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-lg leading-relaxed">
            Onboard employees and contractors in 150+ countries in minutes. We
            handle the compliance, payroll, and taxes—you focus on the talent.
          </p>

          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-white/90 font-medium">3000+ Customers</span>
          </div>

          <div className="flex items-center gap-4 mt-2">
            <Button
              size="lg"
              className="rounded-full pl-8 pr-2 h-16 text-lg bg-white text-kynto-blue-primary hover:bg-white/90 hover:text-kynto-blue-primary gap-4"
            >
              <span className="font-semibold">Start Hiring</span>
              <div className="w-12 h-12 rounded-full bg-kynto-blue-primary text-white flex items-center justify-center">
                <ArrowRight className="w-6 h-6" />
              </div>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="rounded-full px-8 h-16 text-lg text-white hover:bg-white/10 hover:text-white"
            >
              How it Works.
            </Button>
          </div>
        </div>

        {/* Right Content - Dashboard Preview / Hero Card */}
        <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0">
          <div className="relative w-full max-w-[600px] aspect-square">
            <HeroCard />
          </div>
        </div>
      </div>
    </section>
  );
}
