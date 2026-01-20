"use client";

import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import React, {
  createContext,
  useContext,
  useEffect,
  useId,
  useState,
} from "react";
import { createPortal } from "react-dom";

interface ExpandableScreenContextType {
  isExpanded: boolean;
  toggleExpand: () => void;
  layoutId: string;
}

const ExpandableScreenContext = createContext<
  ExpandableScreenContextType | undefined
>(undefined);

export const useExpandableScreen = () => {
  const context = useContext(ExpandableScreenContext);
  if (!context) {
    throw new Error(
      "useExpandableScreen must be used within an ExpandableScreen",
    );
  }
  return context;
};

interface ExpandableScreenProps {
  children: React.ReactNode;
  layoutId?: string;
  className?: string;
  triggerRadius?: string;
  contentRadius?: string;
}

export const ExpandableScreen = ({
  children,
  layoutId,
  className,
}: ExpandableScreenProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const uniqueId = useId();
  const screenLayoutId = layoutId || uniqueId;

  const toggleExpand = () => setIsExpanded(!isExpanded);

  // Lock body scroll when expanded
  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isExpanded]);

  return (
    <ExpandableScreenContext.Provider
      value={{ isExpanded, toggleExpand, layoutId: screenLayoutId }}
    >
      <div className={cn("relative w-full", className)}>{children}</div>
    </ExpandableScreenContext.Provider>
  );
};

export const ExpandableScreenTrigger = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { toggleExpand, layoutId, isExpanded } = useExpandableScreen();

  return (
    <motion.div
      layoutId={layoutId}
      onClick={toggleExpand}
      className={cn("cursor-pointer relative z-10 w-fit", className)}
      style={{ borderRadius: "9999px" }}
      // Hide trigger when expanded to avoid duplication/glitches if desired,
      // but usually layoutId handles the morph.
      // If we want the button to disappear and effectively "become" the modal:
      //   initial={{ opacity: 1 }}
      //   animate={{ opacity: isExpanded ? 0 : 1 }}
    >
      {children}
    </motion.div>
  );
};

// ... existing imports ...

export const ExpandableScreenContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { isExpanded, toggleExpand, layoutId } = useExpandableScreen();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isExpanded && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-[60] backdrop-blur-sm"
            onClick={toggleExpand}
          />
          <motion.div
            layoutId={layoutId}
            className={cn(
              "fixed inset-0 z-[70] bg-background overflow-y-auto flex flex-col",
              className,
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // Ensure it covers full screen
            style={{ borderRadius: 0 }}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleExpand();
              }}
              className="absolute top-6 right-6 z-50 p-2 rounded-full bg-transparent border border-current/20 text-inherit hover:bg-current/10 transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <div
              className="flex-1 w-full h-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
};
