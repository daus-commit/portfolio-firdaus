"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ClientPageWrapperProps {
  children: ReactNode;
}

const pageVariants = {
  // No opacity fade: page content must be visible at first paint (LCP, no-JS).
  initial: {
    y: 20,
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut" as const,
    },
  },
};

export const ClientPageWrapper = ({ children }: ClientPageWrapperProps) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={pageVariants}
      data-animate
      className="w-full"
    >
      {children}
    </motion.div>
  );
};
