"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { NativeBadge } from "@/components/ui/native-badge";
import { NativeButton } from "@/components/ui/native-button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, ChevronRight, Clock } from "lucide-react";
import { motion } from "motion/react";
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

interface Resource {
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  readTime: string;
  image: string;
  title: string;
}

const resources: Resource[] = [
  {
    author: {
      name: "SOFIA R.",
      role: "Editor",
      avatar: "/resources/SOFIA.jpg",
    },
    readTime: "10 MIN READ",
    image: "/resources/1.jpg",
    title: "Contractor vs. Employee: Risks Explained",
  },
  {
    author: {
      name: "MARK D.",
      role: "Editor",
      avatar: "/resources/MARK.jpg",
    },
    readTime: "5 MIN READ",
    image: "/resources/2.avif",
    title: "Top 10 Countries for Tech Talent in 2026",
  },
  {
    author: {
      name: "Adam H.",
      role: "Admin",
      avatar: "/resources/Adam.jpg",
    },
    readTime: "8 MIN READ",
    image: "/resources/3.jpg",
    title: "How to relocate employees to the UK",
  },
  {
    author: {
      name: "ALEX P.",
      role: "Recruiter",
      avatar: "/resources/Alex.jpg",
    },
    readTime: "6 MIN READ",
    image: "/resources/4.jpg",
    title: "Global Hiring Trends for Startups",
  },
  {
    author: {
      name: "SARAH K.",
      role: "HR Manager",
      avatar: "/resources/SARAH.jpg",
    },
    readTime: "12 MIN READ",
    image: "/resources/5.jpg",
    title: "Building Remote Culture",
  },
];

export default function Resources() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section
      id="resources"
      className="bg-white py-24 w-full font-poppins rounded-b-[2.5rem] relative z-20 scroll-mt-24"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-4 md:px-6"
      >
        {/* Header */}
        <motion.div
          variants={itemVariants}
          className="relative flex flex-col items-center lg:items-start mb-16 gap-8"
        >
          <div className="flex flex-col gap-6 items-center lg:items-start text-center lg:text-left w-full max-w-3xl">
            <NativeBadge className="bg-[#f3f3f3] text-black hover:bg-[#eaeaea]">
              Resources
            </NativeBadge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-foreground">
              <span className="font-light italic opacity-90 mr-3">Hiring</span>
              <span className="font-bold">Guides</span>
            </h2>
          </div>
          <div className="hidden md:block absolute right-0 bottom-1">
            <NativeButton
              variant="outline"
              className="rounded-full px-6 py-6 text-base group"
            >
              View Library{" "}
              <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </NativeButton>
          </div>
        </motion.div>

        {/* Carousel */}
        <motion.div variants={itemVariants}>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent className="-ml-0">
              {resources.map((res, index) => (
                <CarouselItem
                  key={index}
                  className="pl-0 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full flex">
                    {/* Card Content */}
                    <div className="flex flex-col gap-6 group cursor-pointer h-full flex-1 px-8">
                      {/* Meta */}
                      <div className="flex justify-between items-center text-xs text-muted-foreground tracking-wider">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-gray-100">
                            <Image
                              src={res.author.avatar}
                              alt={res.author.name}
                              width={40}
                              height={40}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="flex flex-col">
                            <span className="font-bold text-foreground">
                              {res.author.name}
                            </span>
                            <span>{res.author.role}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 shrink-0">
                          <Clock className="w-3 h-3" />
                          {res.readTime}
                        </div>
                      </div>

                      {/* Image */}
                      <div className="aspect-[16/10] bg-gray-100 rounded-2xl overflow-hidden w-full relative">
                        <Image
                          src={res.image}
                          alt={res.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.15]"
                        />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl md:text-2xl font-medium underline decoration-1 underline-offset-4 decoration-transparent group-hover:decoration-foreground transition-all duration-300 line-clamp-2">
                        {res.title}
                      </h3>
                    </div>

                    {/* Separator - Only show if not the last item */}
                    {index < resources.length - 1 && (
                      <div className="py-4">
                        <Separator orientation="vertical" className="h-full" />
                      </div>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>

        {/* Mobile View Library Button */}
        <div className="md:hidden mt-12 flex justify-center">
          <NativeButton
            variant="outline"
            className="rounded-full px-6 py-6 text-base group"
          >
            View Library{" "}
            <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
          </NativeButton>
        </div>

        {/* Navigation */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center items-center gap-6 mt-16"
        >
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-12 h-12 border-gray-200 cursor-pointer"
            onClick={() => api?.scrollPrev()}
            disabled={!api?.canScrollPrev()}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>

          <div className="flex gap-3">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300 cursor-pointer",
                  i === current - 1
                    ? "bg-black scale-125"
                    : "bg-gray-300 hover:bg-gray-400",
                )}
                onClick={() => api?.scrollTo(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-12 h-12 border-gray-200 cursor-pointer"
            onClick={() => api?.scrollNext()}
            disabled={!api?.canScrollNext()}
          >
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
