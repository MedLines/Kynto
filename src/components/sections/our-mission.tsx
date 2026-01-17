import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { MissionBadges } from "./mission-badges";

export default function OurMission() {
  return (
    <section className="relative w-full py-16 md:py-24 font-poppins overflow-hidden ">
      <div className="container px-4 md:px-6 mx-auto border-t border-border/50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Graphics and Mission */}
          <div className="relative min-h-[400px] md:min-h-[500px] flex flex-col justify-between">
            {/* Background Sphere */}
            <div className="absolute top-1/2 left-0 -translate-y-1/4 w-[140%] -ml-[20%] lg:w-full lg:ml-0 lg:left-[-10%] opacity-80 pointer-events-none -z-10">
              <Image
                src="/elements/earth-sphere.svg"
                alt="Globe Wireframe"
                width={600}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* "Our Mission" Pill */}
            <div className="relative z-10 pt-8 pl-4 lg:pt-16 lg:pl-12">
              <Badge
                variant="secondary"
                className="px-4 py-2 bg-kynto-gray-100 hover:bg-kynto-gray-100/90 text-kynto-black shadow-sm gap-2.5 text-sm font-medium tracking-wide rounded-full pointer-events-none"
              >
                <span className="w-1.5 h-1.5 bg-kynto-black rounded-full mr-1" />
                Our Mission
              </Badge>
            </div>

            {/* Bottom Graphic: Icon + Text */}
            <div className="relative z-10 mt-auto pb-8 pl-4 lg:pb-16 lg:pl-12 flex items-center gap-4 ">
              <div className="shrink-0 mt-1">
                <Image
                  src="/elements/global.svg"
                  alt="Global Icon"
                  width={42}
                  height={42}
                  className="opacity-90"
                />
              </div>
              <Separator orientation="vertical" className="h-8 bg-card-black" />
              <p className="text-sm font-medium max-w-[180px] leading-snug text-kynto-gray-80">
                Making global employment borderless.
              </p>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="relative z-10 lg:pl-10">
            <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-medium tracking-tight text-kynto-black mb-8 leading-[1.1]">
              We believe talent is distributed equally, but opportunity is not.
            </h2>
            <p className="text-lg md:text-xl text-kynto-gray-400 leading-relaxed max-w-lg font-normal">
              We bridge that gap by handling the complex legal, tax, and payroll
              infrastructure so you can build a world-class team, regardless of
              geography.
            </p>
          </div>
        </div>

        {/* Feature Badges Row */}
        <MissionBadges />
      </div>
    </section>
  );
}
