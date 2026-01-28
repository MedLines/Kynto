"use client";

import { ContactModalContent } from "@/components/sections/contact-modal-content";
import {
  ExpandableScreen,
  ExpandableScreenContent,
  ExpandableScreenTrigger,
} from "@/components/ui/expandable-screen";
import { NativeButton } from "@/components/ui/native-button";
import { ArrowRight, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black py-8 md:py-12 font-poppins">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT CARD - Info & Links */}
          <div className="lg:col-span-2 relative bg-card-black rounded-[40px] p-8 md:p-12 overflow-hidden flex flex-col justify-between min-h-[500px]">
            {/* Background Earth Sphere */}
            <div className="absolute right-[-100px] top-[-50px] w-[600px] h-[600px] pointer-events-none opacity-40 mix-blend-lighten rotate-[345deg]">
              <Image
                src="/elements/earth-sphere.svg"
                alt="Earth Sphere"
                fill
                className="object-contain"
              />
            </div>

            {/* Content Top */}
            <div className="relative z-10 space-y-6">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <span className="font-bold text-3xl text-white italic tracking-tight">
                  Kynto
                </span>
              </div>
              <p className="text-[#BBBBBB] text-base max-w-sm   leading-6">
                The all-in-one platform for global employment.
              </p>
            </div>

            {/* Links Grid */}
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 md:mt-24 mb-12">
              <div className="flex flex-col gap-4">
                <Link
                  href="#"
                  className="text-white hover:text-white/80 transition-colors"
                >
                  Global EOR
                </Link>
                <Link
                  href="#"
                  className="text-white hover:text-white/80 transition-colors"
                >
                  Contractor Pay
                </Link>
                <Link
                  href="#"
                  className="text-white hover:text-white/80 transition-colors"
                >
                  Pricing
                </Link>
              </div>
              <div className="flex flex-col gap-4">
                <Link
                  href="#"
                  className="text-white hover:text-white/80 transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="#"
                  className="text-white hover:text-white/80 transition-colors"
                >
                  Careers
                </Link>
                <Link
                  href="#"
                  className="text-white hover:text-white/80 transition-colors"
                >
                  Contact
                </Link>
              </div>
              <div className="flex flex-col gap-4">
                <Link
                  href="#"
                  className="text-white hover:text-white/80 transition-colors"
                >
                  Case Studies
                </Link>
                <Link
                  href="#"
                  className="text-white hover:text-white/80 transition-colors"
                >
                  Hiring Guides
                </Link>
                <Link
                  href="#"
                  className="text-white hover:text-white/80 transition-colors"
                >
                  Help Center
                </Link>
              </div>
            </div>

            {/* Bottom Copyright */}
            <div className="relative z-10 pt-4">
              <p className="text-sm text-white/40">
                © {new Date().getFullYear()} Kynto. All Right Reserved
              </p>
            </div>
          </div>

          {/* RIGHT CARD - Socials & Contact */}
          <div className="lg:col-span-1 relative bg-card-black rounded-[40px] p-8 md:p-10 overflow-hidden flex flex-col min-h-[500px]">
            {/* Header */}
            <div className="flex flex-col gap-1 mb-10">
              <h3 className="text-[28px] leading-[36px] text-white  ">
                Explore the Socials
              </h3>
              <h3 className="text-[28px] leading-[36px] text-white  ">
                of <span className="italic font-bold">Kynto</span>
              </h3>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mb-auto">
              <Link
                href="#"
                aria-label="Twitter"
                className="w-[46px] h-[46px] rounded-full border border-[#494949] flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
              >
                <Twitter className="w-[18px] h-[18px]" />
              </Link>
              <Link
                href="#"
                className="w-[46px] h-[46px] rounded-full border border-[#494949] flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                title="Instagram"
              >
                <Instagram className="w-[18px] h-[18px]" />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="w-[46px] h-[46px] rounded-full border border-[#494949] flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
              >
                <Linkedin className="w-[18px] h-[18px]" />
              </Link>
            </div>

            {/* Contact Section */}
            <div className="mt-12 space-y-4">
              <div className="flex items-center gap-2 text-white mb-2">
                <Mail className="w-5 h-5" />
                <span className="text-sm ">Reach out!</span>
              </div>

              <ExpandableScreen>
                <ExpandableScreenTrigger className="w-full">
                  <NativeButton
                    containerClassName="w-full"
                    className="w-full h-[46px] rounded-full border border-white/10 bg-card-black hover:bg-card-black hover:border-white/20 px-5 py-0 group shadow-none justify-start"
                  >
                    <span className="text-sm text-white/80">Contact Us</span>
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center text-black group-hover:scale-110 transition-transform">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </NativeButton>
                </ExpandableScreenTrigger>
                <ExpandableScreenContent className="bg-card-black font-poppins text-white">
                  <ContactModalContent />
                </ExpandableScreenContent>
              </ExpandableScreen>

              {/* Links */}
              <div className="flex gap-6 pt-4">
                <Link
                  href="#"
                  className="text-[10px] text-[#999999] hover:text-white uppercase tracking-wider"
                >
                  Terms of Service
                </Link>
                <Link
                  href="#"
                  className="text-[10px] text-[#999999] hover:text-white uppercase tracking-wider"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
