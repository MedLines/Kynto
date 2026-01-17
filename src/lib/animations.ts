/**
 * Kynto Animation Variants
 * Using motion/react following ui-skills guidelines:
 * - Animate only transform/opacity (compositor props)
 * - Use ease-out on entrance
 * - Respect prefers-reduced-motion
 * - Never exceed 200ms for interaction feedback
 */

import type { Transition, Variants } from "motion/react";

// Default transition settings
export const defaultTransition: Transition = {
  duration: 0.4,
  ease: [0.25, 0.1, 0.25, 1], // ease-out equivalent
};

export const quickTransition: Transition = {
  duration: 0.2,
  ease: "easeOut",
};

// Fade in from bottom (for text, cards)
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

// Fade in from top
export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

// Simple fade
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: defaultTransition,
  },
};

// Scale in (for cards, images)
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: defaultTransition,
  },
};

// Stagger container for lists
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Fast stagger for many items
export const fastStaggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

// Pop in effect for badges/pills
export const popIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

// Slide in from left
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

// Slide in from right
export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

// Viewport settings for scroll triggers
export const viewportConfig = {
  once: true,
  amount: 0.2,
} as const;

// Hover animations for cards
export const cardHover = {
  scale: 1.02,
  transition: quickTransition,
};

// Button press animation
export const buttonTap = {
  scale: 0.98,
};
