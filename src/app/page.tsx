import DarkDashboard from "@/components/sections/dark-dashboard";
import FinalCTA from "@/components/sections/final-cta";
import Hero from "@/components/sections/hero";
import Integrations from "@/components/sections/integrations";
import Investors from "@/components/sections/investors";
import LogoMarquee from "@/components/sections/logo-marquee";
import Pricing from "@/components/sections/pricing";
import Process from "@/components/sections/process";
import Resources from "@/components/sections/resources";
import SectionThree from "@/components/sections/section-three";
import Solutions from "@/components/sections/solutions";
import Testimonials from "@/components/sections/testimonials";
import WorldMap from "@/components/sections/world-map";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <SectionThree />
      <Integrations />
      <LogoMarquee />
      <DarkDashboard />
      <Solutions />
      <WorldMap />
      <Pricing />
      <Process />
      <Investors />
      <Testimonials />
      <Resources />
      <FinalCTA />
    </main>
  );
}
