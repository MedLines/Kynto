"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Handle transparent/glassmorphism background
      setIsScrolled(currentScrollY > 10);

      // Handle visibility
      // Hide when scrolling down and past the threshold
      if (currentScrollY > lastScrollY.current && currentScrollY > 10) {
        setIsVisible(false);
      }
      // Show when scrolling up or at the very top
      else if (currentScrollY < lastScrollY.current || currentScrollY <= 10) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-white/80 backdrop-blur-md py-4 shadow-sm" : "py-6",
        !isVisible && "-translate-y-full",
      )}
    >
      <div className="kynto-container flex items-center justify-between">
        <Link href="/" className="transition-opacity hover:opacity-80">
          <Image
            src="/logo.svg"
            alt="Kynto"
            width={89}
            height={32}
            className={cn(
              "transition-all duration-300",
              isScrolled && "invert",
            )}
            priority
          />
        </Link>

        {/* Menu Button */}
        <Button
          variant="secondary"
          className="rounded-lg px-4 py-2 h-auto text-xs font-semibold tracking-wider bg-white text-kynto-black hover:bg-white/90 gap-2 uppercase"
        >
          <Menu className="w-4 h-4" />
          Menu
        </Button>
      </div>
    </header>
  );
}
