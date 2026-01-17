"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-white/80 backdrop-blur-md py-4 shadow-sm" : "py-6",
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className={cn(
            "text-3xl font-bold tracking-tighter italic transition-colors",
            isScrolled ? "text-kynto-black" : "text-white",
          )}
        >
          Kynto
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
