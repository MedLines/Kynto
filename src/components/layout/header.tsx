"use client";

import { ContactModalContent } from "@/components/sections/contact-modal-content";
import {
  ExpandableScreen,
  ExpandableScreenContent,
  ExpandableScreenTrigger,
} from "@/components/ui/expandable-screen";
import { NativeButton } from "@/components/ui/native-button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { name: "Mission", href: "#mission" },
  { name: "Solutions", href: "#solutions" },
  { name: "Pricing", href: "#pricing" },
  { name: "Process", href: "#process" },
  { name: "Resources", href: "#resources" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Glassmorphism trigger
      setIsScrolled(currentScrollY > 20);

      // Hide/Show logic
      // Hide when scrolling down and past the threshold, unless mobile menu is open
      if (
        currentScrollY > lastScrollY.current &&
        currentScrollY > 100 &&
        !isMobileMenuOpen
      ) {
        setIsVisible(false);
      }
      // Show when scrolling up or at the very top or if menu is open
      else if (
        currentScrollY < lastScrollY.current ||
        currentScrollY <= 100 ||
        isMobileMenuOpen
      ) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);

    if (elem) {
      // If the section is smaller than the viewport, center it.
      // If it's larger, align to top (scrolling to start handles scroll-margin).
      const isLarge = elem.offsetHeight > window.innerHeight;

      elem.scrollIntoView({
        behavior: "smooth",
        block: isLarge ? "start" : "center",
      });
    }

    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
          isScrolled
            ? "bg-white/90 backdrop-blur-md py-4 shadow-sm"
            : "py-6 bg-transparent",
          !isVisible && "-translate-y-full",
        )}
      >
        <div className="kynto-container flex items-center justify-between">
          <Link
            href="/"
            className="relative z-50 transition-opacity hover:opacity-80"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Image
              src="/logo.svg"
              alt="Kynto"
              width={89}
              height={32}
              className={cn(
                "transition-all duration-300",
                (isScrolled || isMobileMenuOpen) && "invert",
              )}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollToSection(e, link.href)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-orange-primary font-poppins tracking-wide",
                  isScrolled
                    ? "text-kynto-black"
                    : "text-white/90 hover:text-white",
                )}
              >
                {link.name}
              </Link>
            ))}

            <ExpandableScreen>
              <ExpandableScreenTrigger>
                <NativeButton
                  variant={isScrolled ? "default" : "secondary"}
                  className={cn(
                    "rounded-full font-medium px-6 transition-all duration-300 h-10 shadow-none border-none",
                    isScrolled
                      ? "bg-black text-white hover:bg-zinc-800 hover:shadow-lg"
                      : "bg-white text-black hover:bg-gray-100 hover:shadow-lg",
                  )}
                  containerClassName="block"
                >
                  Contact
                </NativeButton>
              </ExpandableScreenTrigger>
              <ExpandableScreenContent className="bg-card-black font-poppins text-white">
                <ContactModalContent />
              </ExpandableScreenContent>
            </ExpandableScreen>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-50 p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-black" />
            ) : (
              <Menu
                className={cn(
                  "w-6 h-6",
                  isScrolled ? "text-black" : "text-white",
                )}
              />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden flex flex-col items-center overflow-y-auto"
          >
            <div className="flex flex-col items-center gap-8 mt-12 w-full max-w-sm">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                  className="w-full text-center"
                >
                  <Link
                    href={link.href}
                    onClick={(e) => handleScrollToSection(e, link.href)}
                    className="block text-3xl font-medium text-kynto-black font-poppins hover:text-orange-primary transition-colors py-2"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + NAV_LINKS.length * 0.05 }}
                className="w-full mt-4 flex justify-center"
              >
                <ExpandableScreen className="flex justify-center">
                  <ExpandableScreenTrigger>
                    <NativeButton
                      className="w-full min-w-[200px] rounded-full text-lg py-6 bg-black text-white hover:bg-zinc-800 shadow-lg border-none justify-center"
                      containerClassName="w-full"
                    >
                      Contact
                    </NativeButton>
                  </ExpandableScreenTrigger>
                  <ExpandableScreenContent className="bg-card-black font-poppins text-white">
                    <ContactModalContent />
                  </ExpandableScreenContent>
                </ExpandableScreen>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
