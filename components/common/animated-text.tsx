"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
}

const textVariants = {
  // No opacity fade: text must be visible at first paint (LCP, no-JS).
  hidden: {
    y: 20,
  },
  visible: (delay: number) => ({
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut" as const,
    },
  }),
};

export const AnimatedText = ({
  children,
  delay = 0,
  className = "",
  as = "div",
}: AnimatedTextProps) => {
  const Component = motion[as];

  return (
    <Component
      initial="hidden"
      animate="visible"
      custom={delay}
      variants={textVariants}
      data-animate
      className={className}
    >
      {children}
    </Component>
  );
};
