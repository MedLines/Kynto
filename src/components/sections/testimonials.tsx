"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { NativeBadge } from "@/components/ui/native-badge";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { div } from "motion/react-client";
import Image from "next/image";
import { useEffect, useState } from "react";

const EASING = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: EASING as [number, number, number, number],
    },
  },
};

const testimonials = [
  {
    company: "Kinetix AI",
    quote:
      "We needed specific engineers in Poland and Brazil yesterday. Setting up legal entities would have killed our roadmap. This platform got us the talent in 48 hours.",
    author: "Alex V.",
    role: "VP of Engineering",
    image: "/people/1.jpg",
  },
  {
    company: "Veridian Systems",
    quote:
      "I don't lose sleep over misclassification. Knowing you handle global liability is priceless.",
    author: "Sarah Jenkins",
    role: "Head of People",
    image: "/people/3.jpg",
  },
  {
    company: "Opus Financial",
    quote:
      "We replaced 12 payroll systems with one monthly invoice. It saved us 20 hours a week.",
    author: "Marcus Thorne",
    role: "COO",
    image: "/people/2.jpg",
  },
  {
    company: "TechFlow",
    quote:
      "The automated compliance checks save our HR team countless hours every week.",
    author: "David Chen",
    role: "CTO",
    image: "/people/4.jpg",
  },
  {
    company: "GlobalReach",
    quote:
      "Finally a solution that understands the complexities of hiring across multiple jurisdictions.",
    author: "Emma Wilson",
    role: "Director of Ops",
    image: "/people/5.jpg",
  },
];

export default function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      <div className="container relative z-10 px-4 mx-auto md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative w-full bg-kynto-gray-100 rounded-[3rem] md:rounded-[4rem] overflow-hidden py-[40px] border border-black/5 "
        >
          {/* Background Grid Pattern */}
          <div
            className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />

          {/* Side Gradients for Depth */}
          {/* <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black/5 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black/5 to-transparent z-20 pointer-events-none" /> */}

          <div className="relative z-10 flex flex-col items-center gap-16 md:gap-24 max-w-[1440px] mx-auto">
            {/* Header */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center lg:items-start text-center lg:text-left w-full gap-6 md:gap-8 max-w-[1280px] px-4 md:px-12"
            >
              <NativeBadge
                className="bg-white text-foreground border-none px-4 py-2"
                dotClass="bg-black"
              >
                Reviews
              </NativeBadge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-foreground font-poppins">
                <span className="block font-light italic opacity-90">What</span>
                <span className="block font-medium mt-2">Clients Say</span>
              </h2>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: EASING as [number, number, number, number],
                  },
                },
              }}
              className="w-full relative"
            >
              <Carousel
                setApi={setApi}
                opts={{
                  align: "center",
                  loop: true,
                }}
                className="w-full select-none"
              >
                <CarouselContent className="-ml-4 md:-ml-6 overflow-visible">
                  {testimonials.map((testimonial, index) => {
                    const isActive = index === current;
                    return (
                      <CarouselItem
                        key={index}
                        className="pl-4 md:pl-6 py-12 basis-[85%] md:basis-[60%] lg:basis-[60%]"
                      >
                        <div
                          className={cn(
                            "relative flex flex-col justify-between p-8 md:p-10 rounded-[40px] transition-all duration-500 min-h-[420px] h-full",
                            isActive
                              ? "bg-blue-primary text-white shadow-xl scale-100 md:scale-105 z-10 opacity-100"
                              : "bg-white text-kynto-black hover:shadow-lg border border-transparent scale-95 ",
                          )}
                        >
                          {/* Top Row: Logo & Img Placeholder */}
                          <div className="flex justify-between items-start mb-8 md:mb-12">
                            <h3
                              className={cn(
                                "text-sm font-bold font-mono uppercase tracking-wide",
                                isActive ? "text-blue-100" : "text-gray-900",
                              )}
                            >
                              {testimonial.company}
                            </h3>
                            <div
                              className={cn(
                                "relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden shadow-sm",
                                isActive
                                  ? "ring-2 ring-white/20"
                                  : "ring-1 ring-black/5",
                              )}
                            >
                              <Image
                                src={testimonial.image}
                                alt={testimonial.author}
                                fill
                                className="object-cover object-top"
                              />
                            </div>
                          </div>

                          {/* Quote */}
                          <blockquote className="relative z-10 mb-8 md:mb-12 grow">
                            <p
                              className={cn(
                                "text-xl md:text-[24px] leading-[1.4] font-normal",
                                isActive ? "text-white" : "text-gray-900",
                              )}
                            >
                              "{testimonial.quote}"
                            </p>
                          </blockquote>

                          {/* Author & Quote Icon */}
                          <div className="flex justify-between items-end relative mt-auto">
                            <div className="relative z-10">
                              <p
                                className={cn(
                                  "text-[10px] font-bold uppercase tracking-widest mb-1 opacity-80",
                                  isActive ? "text-blue-100" : "text-gray-500",
                                )}
                              >
                                {testimonial.role}
                              </p>
                              <p className="font-bold uppercase tracking-wide text-sm">
                                {testimonial.author}
                              </p>
                            </div>

                            {/* Giant Quote Quote Decoration */}
                            <div
                              className={cn(
                                "absolute -bottom-2 -right-2 opacity-20 transform translate-x-2 translate-y-2 pointer-events-none",
                              )}
                            >
                              <svg
                                width="80"
                                height="64"
                                viewBox="0 0 100 80"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M28 0C12.536 0 0 12.536 0 28V80H40V40H20C20 28.9543 28.9543 20 40 20V0H28ZM88 0C72.536 0 60 12.536 60 28V80H100V40H80C80 28.9543 88.9543 20 100 20V0H88Z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
                <div className="flex justify-between md:justify-end gap-4 px-8 md:px-0 md:pr-8 relative z-20 mt-4 md:mt-0">
                  <CarouselPrevious className="static translate-y-0 translate-x-0 bg-white cursor-pointer hover:bg-gray-100 border-none w-12 h-12 rounded-full shadow-sm" />
                  <CarouselNext className="static translate-y-0 translate-x-0 bg-white cursor-pointer hover:bg-gray-100 border-none w-12 h-12 rounded-full shadow-sm" />
                </div>
              </Carousel>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
