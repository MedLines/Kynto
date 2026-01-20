"use client";

import { NativeBadge } from "@/components/ui/native-badge";

import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/ui/shadcn-io/marquee";
import { motion } from "motion/react";
import { section } from "motion/react-client";
import Image from "next/image";

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

interface LogoImage {
  src: string;
  alt: string;
  className?: string;
}

interface Logo {
  name: string;
  width: number;
  height: number;
  images: LogoImage[];
  isVerticalStack?: boolean;
}

const logos: Logo[] = [
  {
    name: "Y Combinator",
    width: 160,
    height: 38,
    images: [{ src: "/logos/y-combinator.svg", alt: "Y Combinator" }],
  },
  {
    name: "Sequoia",
    width: 160,
    height: 22,
    images: [{ src: "/logos/sequoia.svg", alt: "Sequoia" }],
  },
  {
    name: "Andreessen Horowitz",
    width: 160,
    height: 50,
    images: [
      { src: "/logos/Andreessen_Horowitz.svg", alt: "Andreessen Horowitz" },
    ],
    isVerticalStack: true,
  },
  {
    name: "Index Ventures",
    width: 160,
    height: 23,
    images: [{ src: "/logos/index-ventures.svg", alt: "Index Ventures" }],
  },
  {
    name: "Tiger Global",
    width: 140,
    height: 16,
    images: [{ src: "/logos/tiger-global.svg", alt: "Tiger Global" }],
  },
  {
    name: "Coinbase Ventures",
    width: 160,
    height: 25,
    images: [{ src: "/logos/coinbase.svg", alt: "Coinbase Ventures" }],
  },
];

export default function Investors() {
  return (
    <section className="bg-white py-24 w-full font-poppins">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-16"
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 w-full max-w-2xl mx-auto lg:mx-0"
          >
            <div className="flex justify-center lg:justify-start">
              <NativeBadge className="bg-[#f3f3f3] text-black hover:bg-[#eaeaea]">
                Investors
              </NativeBadge>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-foreground ">
              <span className="block font-light italic opacity-90">
                Backed by the
              </span>
              <span className="block font-bold mt-2">Best</span>
            </h2>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.98 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.8,
                  ease: EASING as [number, number, number, number],
                },
              },
            }}
            className="flex size-full items-center justify-center bg-background rounded-3xl overflow-hidden"
          >
            <Marquee className="py-12">
              <MarqueeFade side="left" />
              <MarqueeFade side="right" />
              <MarqueeContent speed={50}>
                {logos.map((logo, index) => (
                  <MarqueeItem key={index} className="mx-4 py-8">
                    <div className="flex flex-col items-center justify-center w-[216px] h-[216px] rounded-full border border-gray-200 relative shrink-0 bg-white hover:shadow-lg transition-shadow duration-300">
                      {logo.isVerticalStack ? (
                        <div className="flex flex-col items-center gap-2">
                          {logo.images.map((img, j) => (
                            <div
                              key={j}
                              className={`relative ${img.className || "w-full h-auto"}`}
                            >
                              <Image
                                src={img.src}
                                alt={img.alt}
                                width={160}
                                height={40}
                                className="w-full h-auto"
                              />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="relative w-[160px] flex items-center justify-center">
                          <Image
                            src={logo.images[0].src}
                            alt={logo.images[0].alt}
                            width={logo.width}
                            height={logo.height}
                            className="w-full h-auto"
                          />
                        </div>
                      )}
                    </div>
                  </MarqueeItem>
                ))}
              </MarqueeContent>
            </Marquee>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
