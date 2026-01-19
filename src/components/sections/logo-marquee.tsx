import { NativeBadge } from "@/components/ui/native-badge";
import Image from "next/image";

const logos = [
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

export default function LogoMarquee() {
  return (
    <section className="bg-white py-24 w-full">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-6 w-full max-w-[530px]">
            <div className="flex justify-start">
              <NativeBadge className="bg-[#f3f3f3] text-black hover:bg-[#eaeaea]">
                Investors
              </NativeBadge>
            </div>
            <h2 className="text-6xl font-medium tracking-tight text-black font-sans">
              Backed by the <br /> best
            </h2>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-8">
            {logos.map((logo, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center w-[216px] h-[216px] rounded-full border border-gray-200 relative shrink-0"
              >
                {logo.isVerticalStack ? (
                  <div className="flex flex-col items-center">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
