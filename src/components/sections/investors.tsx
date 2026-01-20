"use client";

import { NativeBadge } from "@/components/ui/native-badge";

import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/ui/shadcn-io/marquee";
import Image from "next/image";

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
        <div className="flex flex-col gap-16">
          <div className="flex flex-col items-center text-center gap-6 w-full max-w-2xl mx-auto">
            <div className="flex justify-center">
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
          </div>

          <div className="flex size-full items-center justify-center bg-background rounded-3xl overflow-hidden">
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
          </div>
        </div>
      </div>
    </section>
  );
}
